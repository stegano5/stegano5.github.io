# THE VAULT — Cyberpunk Cybersecurity Site
**ST3G4N05 // MUNCHK1N**

Sitio de conocimiento de ciberseguridad. 

---

## 📁 ESTRUCTURA DEL REPOSITORIO

```
vault/
├── index.html          ← Página principal / Home
├── blue-team.html      ← Sección Blue Team
├── red-team.html       ← Sección Red Team
├── recursos.html       ← Herramientas y cheatsheets
├── blog.html           ← Listado de todos los posts
├── post-ejemplo.html   ← PLANTILLA para nuevos posts
│
├── css/
│   └── vault.css       ← Todos los estilos (un solo archivo)
│
├── js/
│   └── vault.js        ← Todos los scripts (partículas, animaciones, nav)
│
└── README.md
```

---

### Estructura de un post:
```html
<!-- Badges de categoría -->
<span class="badge c">BLUE TEAM</span>   <!-- azul cyan -->
<span class="badge m">RED TEAM</span>    <!-- magenta -->
<span class="badge g">RECURSOS</span>   <!-- verde -->

<!-- Dentro del <article class="post-article"> -->
<h2 id="seccion">Título de sección</h2>
<p>Párrafo normal...</p>
<pre><code>bloque de código</code></pre>
<div class="note">Nota informativa</div>
<div class="warn">Advertencia</div>
<ul><li>elemento de lista</li></ul>
```

---

## 🎨 SISTEMA DE COLORES

| Variable       | Color     | Uso                    |
|----------------|-----------|------------------------|
| `--cyan`       | #00fff5   | Blue Team, elementos principales |
| `--magenta`    | #ff00aa   | Red Team, alertas      |
| `--green`      | #39ff14   | Recursos, status OK    |
| `--yellow`     | #ffe500   | Warnings               |
| `--text`       | #a8c0cc   | Texto normal           |

---

## 📝 CLASES CSS ÚTILES

```css
/* Cards */
.card           /* card base (cyan) */
.card.rt        /* card red team (magenta) */
.card.rc        /* card recursos (green) */

/* Badges */
.badge.c        /* cyan */
.badge.m        /* magenta */
.badge.g        /* green */

/* Chips dentro de cards */
.chip.c / .chip.m / .chip.g

/* Animación de entrada al hacer scroll */
.reveal         /* añadir a cualquier sección para animarla */

/* Botones */
.btn.btn-c / .btn.btn-m / .btn.btn-g
```

---

## ❓ FAQ


