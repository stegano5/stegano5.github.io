/* ═══════════════════════════════════════════════════════
   THE VAULT — posts.js
   Central post registry loader.
   Reads posts/index.json + localStorage, renders post-rows.
   Used by: blog.html, blue-team.html, red-team.html,
            recursos.html
   ═══════════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ─── CONSTANTS ─── */
  const CAT_LABEL  = { blue: 'BLUE TEAM', red: 'RED TEAM', rec: 'RESOURCES', ctf: 'CTF' };
  const CAT_BADGE  = { blue: 'c',         red: 'm',         rec: 'g',         ctf: 'c'  };
  const CAT_FOLDER = { blue: 'blue-team', red: 'red-team',  rec: 'recursos',  ctf: 'ctf' };

  /* ─── SECURITY HELPERS ─── */
  function esc(str) {
    const d = document.createElement('div');
    d.textContent = String(str || '');
    return d.textContent;
  }

  function safeHref(file) {
    if (typeof file === 'string' &&
        /^posts\/[a-z0-9_-]+\/[a-z0-9_-]+\.html$/.test(file)) return file;
    return '#';
  }

  function safeCat(cat) {
    return ['blue', 'red', 'rec', 'ctf'].includes(cat) ? cat : 'blue';
  }

  /* ─── BUILD A POST-ROW ELEMENT ─── */
  function makeRow(p, badgeOverride) {
    const cat = safeCat(p.cat);

    const row = document.createElement('a');
    row.href       = safeHref(p.file);
    row.className  = 'post-row';
    row.dataset.cat = cat;

    const dateSpan = document.createElement('span');
    dateSpan.className   = 'post-date';
    dateSpan.textContent = esc(p.date);

    const meta = document.createElement('div');
    const ttl  = document.createElement('div');
    ttl.className   = 'post-ttl';
    ttl.textContent = esc(p.title);
    const sub  = document.createElement('div');
    sub.className   = 'post-sub';
    sub.textContent = esc(p.desc);
    meta.appendChild(ttl);
    meta.appendChild(sub);

    const badge = document.createElement('span');
    badge.className   = `badge ${badgeOverride || CAT_BADGE[cat] || 'c'}`;
    badge.textContent = CAT_LABEL[cat] || cat.toUpperCase();

    row.appendChild(dateSpan);
    row.appendChild(meta);
    row.appendChild(badge);
    return row;
  }

  /* ─── MERGE & DEDUPLICATE posts/index.json + localStorage ─── */
  /* Posts embebidos como fallback cuando fetch falla (protocolo file://) */
  const FALLBACK_POSTS = [
    { title:'Pyramid of Pain — Mapping IOCs and attacker cost', desc:'Framework analysis to understand the impact of each indicator', cat:'blue', date:'2024-08-20', file:'posts/blue-team/pyramid-of-pain.html' },
    { title:'Privilege Escalation on Linux — SUID, cron jobs and capabilities', desc:'Systematic enumeration and exploitation of escalation vectors', cat:'red', date:'2024-08-05', file:'posts/red-team/privesc-linux.html' },
    { title:'Splunk SPL — Essential queries for SOC analysts', desc:'Search cheatsheet, correlations and automated alerts', cat:'blue', date:'2024-07-20', file:'posts/blue-team/splunk-spl.html' },
    { title:'CTF Writeup — HackTheBox: Forest (Active Directory)', desc:'Kerberoasting, AS-REP Roasting and DCSync to compromise the DC', cat:'ctf', date:'2024-07-10', file:'posts/ctf/htb-forest.html' },
    { title:'Active Directory Attacks — Kerberoasting and Pass-the-Hash', desc:'Compromising Active Directory environments from the inside', cat:'red', date:'2024-06-25', file:'posts/red-team/ad-attacks.html' },
    { title:'Sigma Rules — Creating generic detection rules', desc:'Syntax, SIEM conversion and best practices', cat:'blue', date:'2024-06-10', file:'posts/blue-team/sigma-rules.html' },
    { title:'OSINT tools arsenal — Best options in 2024', desc:'Passive and active gathering for external reconnaissance', cat:'rec', date:'2024-05-30', file:'posts/recursos/osint-tools.html' },
    { title:'AMSI Bypass — Techniques to evade Windows antimalware', desc:'Memory patching, reflection and PowerShell script obfuscation', cat:'red', date:'2024-05-15', file:'posts/red-team/amsi-bypass.html' },
    { title:'CTF Writeup — TryHackMe: Advent of Cyber (Selection)', desc:'Web exploitation, log analysis and digital forensics', cat:'ctf', date:'2024-05-01', file:'posts/ctf/thm-advent.html' },
    { title:'RAM forensic analysis with Volatility 3', desc:'Extracting processes, network connections and artifacts', cat:'blue', date:'2024-04-10', file:'posts/blue-team/volatility3.html' }
  ];

  async function getAllPosts() {
    // 1. En file:// el fetch siempre falla — usar fallback directamente
    let staticPosts = FALLBACK_POSTS;
    if (location.protocol === 'http:' || location.protocol === 'https:') {
      try {
        const res = await fetch('posts/index.json');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data) && data.length) staticPosts = data;
        }
      } catch (e) { /* red o CORS — usar fallback */ }
    }

    // 2. Load localStorage posts (editor-published)
    let localPosts = [];
    try { localPosts = JSON.parse(localStorage.getItem('vault_posts') || '[]'); } catch (e) {}

    // 3. Merge: localStorage wins on duplicates
    const map = new Map();
    staticPosts.forEach(p => map.set(p.file, p));
    localPosts.forEach(p  => map.set(p.file, p));

    // 4. Sort descending by date
    return [...map.values()].sort((a, b) => b.date.localeCompare(a.date));
  }

  /* ─── CAT CLASS para index.html (usa .post-cat.blue / .post-cat.red / .post-cat.green) ─── */
  const CAT_CLASS = { blue: 'blue', red: 'red', rec: 'green', ctf: 'blue' };

  /* ─── PUBLIC API ─── */

  /**
   * renderPosts(containerId, filterCat)
   * Fetches all posts, optionally filters by category, renders into container.
   * filterCat: 'blue' | 'red' | 'rec' | 'ctf' | null (all)
   */
  window.VaultPosts = {

    /* Render últimos N posts en home (formato .post-item de index.html) */
    async renderHome(containerId, limit) {
      const container = document.getElementById(containerId);
      if (!container) return;
      const all   = await getAllPosts();
      const posts = limit ? all.slice(0, limit) : all;
      container.innerHTML = '';
      posts.forEach(p => {
        const cat  = safeCat(p.cat);
        const item = document.createElement('a');
        item.href      = safeHref(p.file);
        item.className = 'post-item';
        const date = document.createElement('span');
        date.className   = 'post-date';
        date.textContent = esc(p.date);
        const title = document.createElement('span');
        title.className   = 'post-title-item';
        title.textContent = esc(p.title);
        const badge = document.createElement('span');
        badge.className   = `post-cat ${CAT_CLASS[cat] || 'blue'}`;
        badge.textContent = CAT_LABEL[cat] || cat.toUpperCase();
        item.appendChild(date);
        item.appendChild(title);
        item.appendChild(badge);
        container.appendChild(item);
      });
    },

    async render(containerId, filterCat) {
      const container = document.getElementById(containerId);
      if (!container) return;

      const all   = await getAllPosts();
      const posts = filterCat ? all.filter(p => safeCat(p.cat) === filterCat) : all;

      container.innerHTML = '';
      if (!posts.length) {
        const empty = document.createElement('p');
        empty.style.cssText = 'font-family:var(--font-mono);font-size:.75rem;color:var(--text-dim);padding:20px 0;';
        empty.textContent = '// No posts yet.';
        container.appendChild(empty);
        return;
      }

      posts.forEach(p => container.appendChild(makeRow(p)));
    },

    /* Render ALL posts + filter buttons (for blog.html) — soporta ?filter= y ?tag= en URL */
    async renderBlog(listId) {
      const container = document.getElementById(listId);
      if (!container) return;
      const all = await getAllPosts();
      container.innerHTML = '';
      all.forEach(p => {
        const row = makeRow(p);
        if (p.tag) row.dataset.tag = p.tag;
        container.appendChild(row);
      });

      // Leer parámetros de URL
      const params    = new URLSearchParams(window.location.search);
      const urlFilter = params.get('filter'); // cat
      const urlTag    = params.get('tag');    // tag específico

      // Activar botón de categoría si viene en URL
      if (urlFilter) {
        document.querySelectorAll('.filter-btn').forEach(b => {
          b.classList.remove('active', 'active-m', 'active-g');
        });
        const btn = document.querySelector(`.filter-btn[data-filter="${urlFilter}"]`);
        if (btn) {
          if (urlFilter === 'red')      btn.classList.add('active-m');
          else if (urlFilter === 'rec') btn.classList.add('active-g');
          else                          btn.classList.add('active');
        }
      }

      // Mostrar label de tag activo si viene en URL
      if (urlTag) {
        const label = document.getElementById('active-tag-label');
        if (label) {
          label.textContent = `// TAG: ${urlTag.toUpperCase().replace('-', ' ')}`;
          label.style.display = 'block';
        }
      }

      // Aplicar filtros iniciales desde URL
      applyBlogFilters(urlFilter || 'all', urlTag || null);

      // Wire filter buttons
      document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn')
            .forEach(b => b.classList.remove('active', 'active-m', 'active-g'));
          const f = btn.dataset.filter;
          if (f === 'red')      btn.classList.add('active-m');
          else if (f === 'rec') btn.classList.add('active-g');
          else                  btn.classList.add('active');

          // Al cambiar categoría, limpiar el tag filter
          const label = document.getElementById('active-tag-label');
          if (label) label.style.display = 'none';
          applyBlogFilters(f, null);
        });
      });

      function applyBlogFilters(cat, tag) {
        container.querySelectorAll('.post-row').forEach(row => {
          const matchCat = cat === 'all' || row.dataset.cat === cat;
          const matchTag = !tag || row.dataset.tag === tag;
          row.classList.toggle('hidden', !(matchCat && matchTag));
        });
      }
    },

    /* Called by nuevo-post after publishing — adds to localStorage */
    savePost(entry) {
      let posts = [];
      try { posts = JSON.parse(localStorage.getItem('vault_posts') || '[]'); } catch (e) {}
      const idx = posts.findIndex(p => p.file === entry.file);
      if (idx >= 0) posts[idx] = entry; else posts.push(entry);
      localStorage.setItem('vault_posts', JSON.stringify(posts));
    },

    /* Delete a post from localStorage (static ones in index.json need manual edit) */
    deletePost(filePath) {
      let posts = [];
      try { posts = JSON.parse(localStorage.getItem('vault_posts') || '[]'); } catch (e) {}
      posts = posts.filter(p => p.file !== filePath);
      localStorage.setItem('vault_posts', JSON.stringify(posts));
    },

    CAT_FOLDER
  };

})();
