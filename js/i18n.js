/* ═══════════════════════════════════════════════════════
   THE VAULT — i18n.js  v3
   Bilingual ES/EN system
   - Dual language switcher in nav: ES | EN
   - Active lang = glowing solid color, inactive = dim border only
   - Posts use [lang-en]/[lang-es] hardcoded blocks (instant, no API)
   ═══════════════════════════════════════════════════════ */

const TRANSLATIONS = {

  /* ─── GLOBAL ─── */
  'nav.home':         { es: 'INICIO',      en: 'HOME' },
  'nav.blueteam':     { es: 'EQUIPO AZUL', en: 'BLUE TEAM' },
  'nav.redteam':      { es: 'EQUIPO ROJO', en: 'RED TEAM' },
  'nav.resources':    { es: 'RECURSOS',    en: 'RESOURCES' },
  'nav.blog':         { es: 'BLOG',        en: 'BLOG' },
  'footer.copy':      { es: '© 2024 MUNCHK1N // ST3G4N05 — BASE DE CONOCIMIENTO DEF/OFENSIVA', en: '© 2024 MUNCHK1N // ST3G4N05 — A VAULT OF DEF/OFFENSIVE KNOWLEDGE' },

  /* ─── INDEX ─── */
  'index.hero.tag':   { es: 'ST3G4N05 // JORDI MURU a.k.a N0xButch3r // OPS CYBER', en: 'ST3G4N05 // JORDI MURU a.k.a N0xButch3r // CYBER OPS' },
  'index.hero.sub':   { es: 'Base de datos de seguridad ofensiva y defensiva. Técnicas, herramientas y recursos para Blue Team, Red Team y más allá.', en: 'Offensive and defensive security knowledge base. Techniques, tools and resources for Blue Team, Red Team and beyond.' },
  'index.btn.enter':  { es: '// ACCEDER AL VAULT', en: '// ENTER THE VAULT' },
  'index.btn.blog':   { es: '// VER WRITEUPS',     en: '// VIEW WRITEUPS' },
  'index.stat.techniques': { es: 'TÉCNICAS DOCUMENTADAS', en: 'DOCUMENTED TECHNIQUES' },
  'index.stat.tools':      { es: 'HERRAMIENTAS ANALIZADAS', en: 'TOOLS ANALYZED' },
  'index.stat.cats':       { es: 'CATEGORÍAS ACTIVAS', en: 'ACTIVE CATEGORIES' },
  'index.stat.coverage':   { es: '% COBERTURA AMENAZAS', en: '% THREAT COVERAGE' },
  'index.sec1':       { es: 'ÁREAS DE CONOCIMIENTO', en: 'KNOWLEDGE AREAS' },
  'index.sec1.span':  { es: 'CONOCIMIENTO', en: 'AREAS' },
  'index.sec2':       { es: 'ÚLTIMOS WRITEUPS', en: 'RECENT WRITEUPS' },
  'index.sec2.span':  { es: 'WRITEUPS', en: 'WRITEUPS' },
  'card.bt.tag':      { es: 'BLUE TEAM // DEFENSA',  en: 'BLUE TEAM // DEFENSE' },
  'card.bt.title':    { es: 'OPS BLUE TEAM',          en: 'BLUE TEAM OPS' },
  'card.bt.desc':     { es: 'Detección, análisis de logs, respuesta a incidentes y monitorización de amenazas. Frameworks defensivos y playbooks de SOC.', en: 'Detection, log analysis, incident response and threat monitoring. Defensive frameworks and SOC playbooks.' },
  'card.rt.tag':      { es: 'RED TEAM // ATAQUE',    en: 'RED TEAM // ATTACK' },
  'card.rt.title':    { es: 'OPS RED TEAM',           en: 'RED TEAM OPS' },
  'card.rt.desc':     { es: 'Técnicas ofensivas, explotación de vulnerabilidades, post-explotación y evasión de defensas. Metodologías de pentest profesional.', en: 'Offensive techniques, vulnerability exploitation, post-exploitation and defense evasion. Professional pentest methodologies.' },
  'card.rc.tag':      { es: 'RECURSOS // TOOLS',     en: 'RESOURCES // TOOLS' },
  'card.rc.title':    { es: 'ARSENAL',                en: 'ARSENAL' },
  'card.rc.desc':     { es: 'Herramientas, cheatsheets, scripts y recursos curados. Todo lo necesario para operar en ambos lados del campo de batalla digital.', en: 'Curated tools, cheatsheets, scripts and resources. Everything needed to operate on both sides of the digital battlefield.' },
  'status.title':     { es: '// ESTADO DEL SISTEMA', en: '// SYSTEM STATUS' },
  'status.threat':    { es: 'NIVEL DE AMENAZA',      en: 'THREAT LEVEL' },
  'status.sessions':  { es: 'SESIONES ACTIVAS',      en: 'ACTIVE SESSIONS' },
  'status.update':    { es: 'ÚLTIMA ACTUALIZACIÓN',  en: 'LAST UPDATE' },
  'status.framework': { es: 'FRAMEWORK',             en: 'FRAMEWORK' },
  'status.killchain': { es: 'COBERTURA KILL CHAIN',  en: 'KILL CHAIN COVERAGE' },
  'status.encryption':{ es: 'CIFRADO',               en: 'ENCRYPTION' },
  'status.operator':  { es: 'OPERADOR',              en: 'OPERATOR' },
  'status.github':    { es: 'GITHUB',                en: 'GITHUB' },

  /* ─── BLOG ─── */
  'blog.hero.tag':    { es: 'WRITEUPS // ANÁLISIS // TUTORIALES', en: 'WRITEUPS // ANALYSIS // TUTORIALS' },
  'blog.hero.h1a':    { es: 'WRITE', en: 'WRITE' },
  'blog.hero.h1b':    { es: 'UPS &amp; POSTS', en: 'UPS &amp; POSTS' },
  'blog.hero.sub':    { es: 'Writeups de CTF, análisis de técnicas, tutoriales paso a paso y notas de campo de operaciones de seguridad reales.', en: 'CTF writeups, technique analysis, step-by-step tutorials and field notes from real security operations.' },
  'blog.all':         { es: '// TODOS', en: '// ALL' },
  'blog.filter.blue': { es: '// EQUIPO AZUL', en: '// BLUE TEAM' },
  'blog.filter.red':  { es: '// EQUIPO ROJO', en: '// RED TEAM' },
  'blog.filter.rec':  { es: '// RECURSOS', en: '// RESOURCES' },
  'blog.filter.ctf':  { es: '// CTF', en: '// CTF' },
  'blog.newpost':     { es: 'NUEVO POST', en: 'NEW POST' },
  'blog.sec.title':   { es: 'TODOS LOS ', en: 'ALL ' },
  'blog.sec.span':    { es: 'POSTS', en: 'POSTS' },

  /* ─── BLUE TEAM ─── */
  'bt.hero.tag':      { es: 'DEFENSA // DETECCIÓN // RESPUESTA', en: 'DEFENSE // DETECTION // RESPONSE' },
  'bt.hero.h1':       { es: 'OPERACIONES', en: 'OPERATIONS' },
  'bt.hero.sub':      { es: 'Técnicas y metodologías para la defensa activa, análisis de incidentes, monitorización de amenazas y bastionado de sistemas.', en: 'Techniques and methodologies for active defense, incident analysis, threat monitoring and system hardening.' },
  'bt.sec1.title':    { es: 'MÓDULOS DISPONIBLES', en: 'AVAILABLE MODULES' },
  'bt.sec1.span':     { es: 'DISPONIBLES', en: 'MODULES' },
  'bt.sec2.title':    { es: 'POSTS BLUE TEAM', en: 'BLUE TEAM POSTS' },
  'bt.sec2.span':     { es: 'POSTS', en: 'POSTS' },
  'bt.btn.all':       { es: '// TODOS LOS POSTS BLUE TEAM', en: '// ALL BLUE TEAM POSTS' },
  'bt.mod.soc.tag':   { es: 'ANALISTA SOC', en: 'SOC ANALYST' },
  'bt.mod.soc.title': { es: 'RUTA ANALISTA SOC', en: 'SOC ANALYST PATH' },
  'bt.mod.soc.desc':  { es: 'Fundamentos del analista SOC: triaje de alertas, gestión de incidentes, Pyramid of Pain y metodologías de investigación.', en: 'SOC analyst fundamentals: alert triage, incident management, Pyramid of Pain and investigation methodologies.' },
  'bt.mod.log.tag':   { es: 'ANÁLISIS DE LOGS', en: 'LOG ANALYSIS' },
  'bt.mod.log.title': { es: 'ANÁLISIS DE LOGS', en: 'LOG ANALYSIS' },
  'bt.mod.log.desc':  { es: 'Análisis forense de logs de Windows, Linux, firewall y aplicaciones. Detección de anomalías y correlación de eventos.', en: 'Forensic analysis of Windows, Linux, firewall and application logs. Anomaly detection and event correlation.' },
  'bt.mod.threat.tag':   { es: 'DETECCIÓN DE AMENAZAS', en: 'THREAT DETECTION' },
  'bt.mod.threat.title': { es: 'DETECCIÓN DE AMENAZAS', en: 'THREAT DETECTION' },
  'bt.mod.threat.desc':  { es: 'Identificación de TTPs con MITRE ATT&CK, creación de reglas de detección y threat hunting proactivo en la red.', en: 'TTP identification using MITRE ATT&CK, creating detection rules and proactive threat hunting across the network.' },
  'bt.mod.net.tag':   { es: 'SEGURIDAD DE RED', en: 'NETWORK SECURITY' },
  'bt.mod.net.title': { es: 'MONITORIZACIÓN DE RED', en: 'NETWORK MONITORING' },
  'bt.mod.net.desc':  { es: 'Monitorización del tráfico, análisis de paquetes con Wireshark, detección de C2 y análisis de protocolos maliciosos.', en: 'Network traffic monitoring, packet analysis with Wireshark, C2 detection and malicious protocol analysis.' },
  'bt.mod.for.tag':   { es: 'FORENSE DIGITAL', en: 'DIGITAL FORENSICS' },
  'bt.mod.for.title': { es: 'FORENSE DIGITAL', en: 'DIGITAL FORENSICS' },
  'bt.mod.for.desc':  { es: 'Adquisición y análisis forense de imágenes de disco, RAM, artefactos de Windows y timelines de actividad.', en: 'Forensic acquisition and analysis of disk images, RAM, Windows artefacts and activity timelines.' },
  'bt.mod.hard.tag':  { es: 'BASTIONADO', en: 'HARDENING' },
  'bt.mod.hard.title':{ es: 'BASTIONADO DE SISTEMAS', en: 'SYSTEM HARDENING' },
  'bt.mod.hard.desc': { es: 'Guías de bastionado para Windows y Linux, GPOs, CIS Benchmarks y reducción de superficie de ataque.', en: 'Hardening guides for Windows and Linux, GPO configuration, CIS Benchmarks and attack surface reduction.' },

  /* ─── NUEVO POST ─── */
  'np.editor.title':  { es: '// EDITOR MARKDOWN', en: '// MARKDOWN EDITOR' },
  'np.btn.example':   { es: 'EJEMPLO', en: 'EXAMPLE' },
  'np.btn.clear':     { es: 'LIMPIAR', en: 'CLEAR' },
  'np.btn.export':    { es: 'EXPORTAR HTML', en: 'EXPORT HTML' },
  'np.preview.title': { es: '// VISTA PREVIA — ESTILO VAULT', en: '// PREVIEW — VAULT STYLE' },
  'np.preview.empty': { es: 'Escribe Markdown en el editor para ver la vista previa...', en: 'Write Markdown in the editor to see the preview...' },
  'np.modal.title':   { es: '// PUBLICAR POST', en: '// PUBLISH POST' },
  'np.modal.copy':    { es: 'COPIAR HTML', en: 'COPY HTML' },
  'np.modal.publish': { es: '✓ MARCAR COMO PUBLICADO', en: '✓ MARK AS PUBLISHED' },
  'np.modal.close':   { es: 'CERRAR', en: 'CLOSE' },

  /* ─── POSTS ─── */
  'post.toc':         { es: '// ÍNDICE', en: '// INDEX' },
  'post.back.blog':   { es: '← VOLVER AL BLOG', en: '← BACK TO BLOG' },
  'post.back.bt':     { es: '← BLUE TEAM', en: '← BLUE TEAM' },
  'post.back.rt':     { es: '← RED TEAM', en: '← RED TEAM' },
};

/* ════════════════════════════════════════════════
   ENGINE
════════════════════════════════════════════════ */

const I18N = {
  current: 'en',

  init() {
    this.current = localStorage.getItem('vault_lang') || 'en';
    this.apply();
    this.renderToggle();
    this._applyPostLang(this.current);
  },

  get(key) {
    const entry = TRANSLATIONS[key];
    if (!entry) return key;
    return entry[this.current] || entry['en'] || key;
  },

  apply() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      const val = this.get(key);
      if (el.tagName === 'INPUT' && el.placeholder !== undefined) {
        el.placeholder = val;
      } else {
        el.innerHTML = val;
      }
    });
    document.documentElement.lang = this.current;
    this._updateToggleBtns();
    // Update TOC title if present
    const tocH4 = document.querySelector('.toc h4');
    if (tocH4 && !tocH4.dataset.i18n) tocH4.textContent = this.get('post.toc');
  },

  setLang(lang) {
    if (lang === this.current) return;
    this.current = lang;
    localStorage.setItem('vault_lang', lang);
    this.apply();
    this._applyPostLang(lang);
  },

  /* ── BILINGUAL POST BLOCKS ──
     Posts include both <div lang-en> and <div lang-es> blocks.
     This shows the right one and hides the other — instant, no API needed.
  */
  _applyPostLang(lang) {
    document.querySelectorAll('[lang-en]').forEach(el => {
      el.style.display = lang === 'en' ? '' : 'none';
    });
    document.querySelectorAll('[lang-es]').forEach(el => {
      el.style.display = lang === 'es' ? '' : 'none';
    });
  },

  /* ── DUAL LANGUAGE TOGGLE ──
     Renders:  ES  |  EN
     Active lang: glowing text + solid border + glow background
     Inactive: dim text + dim border only
  */
  renderToggle() {
    const navInner = document.querySelector('.nav-inner');
    if (!navInner || document.getElementById('lang-switcher')) return;

    // Inject CSS for the switcher
    const style = document.createElement('style');
    style.textContent = `
      #lang-switcher {
        display: flex;
        align-items: center;
        gap: 0;
        margin-left: 16px;
        flex-shrink: 0;
      }
      #lang-switcher .lang-sep {
        font-family: var(--font-mono);
        font-size: .6rem;
        color: var(--border);
        padding: 0 2px;
        user-select: none;
        line-height: 1;
      }
      #lang-switcher .lang-btn {
        font-family: var(--font-mono);
        font-size: .65rem;
        font-weight: 700;
        letter-spacing: .2em;
        padding: 5px 11px;
        border: 1px solid;
        background: transparent;
        cursor: pointer;
        text-transform: uppercase;
        transition: all .2s;
        line-height: 1;
        clip-path: polygon(0 0,calc(100% - 4px) 0,100% 4px,100% 100%,4px 100%,0 calc(100% - 4px));
      }
      /* ES button */
      #lang-btn-es {
        border-color: var(--border);
        color: var(--text-dim);
      }
      #lang-btn-es.active {
        border-color: var(--cyan);
        color: var(--cyan);
        background: rgba(0,255,245,.07);
        text-shadow: var(--glow-c);
        box-shadow: 0 0 10px rgba(0,255,245,.15);
      }
      #lang-btn-es:not(.active):hover {
        border-color: rgba(0,255,245,.4);
        color: rgba(0,255,245,.6);
      }
      /* EN button */
      #lang-btn-en {
        border-color: var(--border);
        color: var(--text-dim);
      }
      #lang-btn-en.active {
        border-color: var(--magenta);
        color: var(--magenta);
        background: rgba(255,0,170,.07);
        text-shadow: var(--glow-m);
        box-shadow: 0 0 10px rgba(255,0,170,.15);
      }
      #lang-btn-en:not(.active):hover {
        border-color: rgba(255,0,170,.4);
        color: rgba(255,0,170,.6);
      }
    `;
    document.head.appendChild(style);

    // Build the switcher widget
    const switcher = document.createElement('div');
    switcher.id = 'lang-switcher';
    switcher.setAttribute('role', 'group');
    switcher.setAttribute('aria-label', 'Language selector');

    const btnES = document.createElement('button');
    btnES.id = 'lang-btn-es';
    btnES.className = 'lang-btn';
    btnES.textContent = 'ES';
    btnES.title = 'Cambiar a Español';
    btnES.addEventListener('click', () => I18N.setLang('es'));

    const sep = document.createElement('span');
    sep.className = 'lang-sep';
    sep.textContent = '|';

    const btnEN = document.createElement('button');
    btnEN.id = 'lang-btn-en';
    btnEN.className = 'lang-btn';
    btnEN.textContent = 'EN';
    btnEN.title = 'Switch to English';
    btnEN.addEventListener('click', () => I18N.setLang('en'));

    switcher.appendChild(btnES);
    switcher.appendChild(sep);
    switcher.appendChild(btnEN);
    navInner.appendChild(switcher);

    this._updateToggleBtns();
  },

  _updateToggleBtns() {
    const btnES = document.getElementById('lang-btn-es');
    const btnEN = document.getElementById('lang-btn-en');
    if (!btnES || !btnEN) return;

    if (this.current === 'es') {
      btnES.classList.add('active');
      btnEN.classList.remove('active');
    } else {
      btnEN.classList.add('active');
      btnES.classList.remove('active');
    }
  },
};

document.addEventListener('DOMContentLoaded', () => I18N.init());
