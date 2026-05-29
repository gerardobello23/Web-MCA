# CLAUDE.md · Madrid Cheer Athletics (MCA)

Contexto operativo para futuras sesiones de trabajo en este proyecto.

---

## Qué es este proyecto

Web pública del club de cheerleading **Madrid Cheer Athletics** (MCA), ubicado en Madrid (Villa de Vallecas). El cliente es Gerardo, responsable del club. La web sustituye a `madridcheer.com` (sitio actual existente) con un rediseño completo enfocado en captación de nuevos atletas, presencia profesional y catálogo de equipos/productos.

**Objetivos del sitio:**
1. Captar inscripciones a clase de prueba gratuita.
2. Comunicar la oferta de modalidades y equipos del club.
3. Presentar la marca con una imagen profesional y atractiva.
4. Servir de catálogo informativo de productos oficiales.
5. Centralizar contacto y ubicación.

---

## Stack técnico (decidido)

| Capa | Tecnología | Por qué |
|---|---|---|
| Framework | **Astro** | HTML estático en build time, SEO óptimo, componentes reutilizables sin overhead de SPA |
| CSS | **Tailwind CSS** | Sistema de diseño consistente, sin CSS muerto, productividad alta |
| CMS | **Keystatic** | Dashboard `/admin` para que el cliente edite contenido sin tocar código. Git-based, gratis |
| Hosting | **Vercel** (plan Hobby) | DX excelente, previews por PR, Astro adapter de primera clase. Gratuito para uso no comercial. Cliente ya tiene cuenta. |
| Repositorio | **GitHub** [`davidrc/mca-club`](https://github.com/davidrc/mca-club) | Conectado a Vercel para auto-deploy. |
| Formularios inscripción | **Google Forms del cliente** (según `web-content-original.txt`) | El club ya gestiona inscripciones por Google Forms; integramos su link |
| Formulario contacto | Por confirmar (nativo + Resend/Formspree) | Para el formulario de la página Contacto, distinto al de inscripción |
| Dominio | `madridcheer.com` | Ya en posesión del cliente |

**Decisión documentada en:** la conversación inicial del proyecto (descartado HTML puro y WordPress por trade-offs explicados al usuario).

---

## Estructura del repositorio

```
mca-gerardo/
├── .claude/                    # Settings personales de Claude Code (NO se versiona)
├── docs/
│   ├── brand/                  # Assets de marca + brand-guidelines.md + design-tokens.css
│   ├── content/                # web-content-original.txt (brief del cliente)
│   └── reference.md            # URLs de inspiración y datos del club
├── web/                        # Proyecto Astro (lo que se despliega en Vercel)
│   ├── public/
│   │   ├── brand/              # Logos servidos como assets estáticos
│   │   └── favicon.png         # Favicon en la raíz de public
│   ├── src/
│   │   ├── components/         # Button, Card, Footer, Header, Input
│   │   ├── layouts/            # BaseLayout, SiteLayout
│   │   ├── pages/              # 7 páginas + styleguide
│   │   └── styles/global.css   # Tokens Tailwind v4 + resets
│   ├── .nvmrc                  # Node 22 (Vercel ignora y usa 24, decisión OK)
│   ├── astro.config.mjs
│   ├── package.json            # engines: node >=22.12
│   └── tsconfig.json
├── .gitignore
├── CLAUDE.md                   # (este archivo)
├── PROJECT.md                  # Alcance, fases, criterios de éxito
└── README.md                   # README del repo en GitHub
```

Pendientes futuros que añadirán archivos:
- `keystatic.config.ts` (cuando se conecte el CMS)
- `web/src/content/` (collections para Keystatic)
- `/aviso-legal`, `/privacidad`, `/cookies` (páginas legales)

---

## Marca

Resumen rápido (detalle completo en `docs/brand/brand-guidelines.md`):

- **Color principal:** rojo MCA `#E31837` (extraído de assets oficiales)
- **Color secundario:** navy `#083B66` (extraído del eslogan)
- **Logo principal:** circular con "MADRID CHEER ATHLETICS" rodeando una "M"
- **Wordmark corto:** "MCA" (uso principal en navbar)
- **Eslogan oficial:** *"No soñamos con ganar. Entrenamos para hacerlo."*
- **Pantera roja:** uso en web pendiente de confirmar (no aparece mencionada en el brief original)
- **Tipografía oficial:** **Teko** (display, H1-H3 uppercase) + **Inter** (body)
- **Sistema de diseño completo** (tokens, componentes, WCAG, motion): ver `docs/brand/brand-guidelines.md`
- **Tokens CSS Tailwind v4** listos: `docs/brand/design-tokens.css`

---

## Información del cliente / club

- **URL actual:** http://madridcheer.com/
- **Dirección física:** Cam. de las Hormigueras, 166, Villa de Vallecas, 28031 Madrid
- **Email:** hola@madridcheer.com
- **Tel/WhatsApp:** +34 643 51 58 20
- **Instagram:** [@mca_cheerleadingclub](https://www.instagram.com/mca_cheerleadingclub/)
- **TikTok:** @mca_cheerleadingclub

---

## Estructura de páginas (según `web-content-original.txt`)

1. **Home** — Hero + propuesta de valor + galería + CTA
2. **Quiénes somos** — Filosofía, pilares, compromiso
3. **Entrenamientos** — 5 modalidades (Recreativo, MCA Kids "coming soon", Competitivo, Tumbling, Stunts)
4. **Equipos** — Recreativos (Mini/Youth/Senior) + Competitivos (Junior/Senior/Open Elite)
5. **Inscripción** — Proceso 3 pasos + formulario + FAQ
6. **Tienda / Catálogo** — Ropa oficial + accesorios (modalidad de pedido por confirmar)
7. **Contacto** — Datos + formulario + mapa + redes

---

## Estado actual

- **URL pública:** https://mca-club.vercel.app/
- **Repo:** https://github.com/davidrc/mca-club (rama `main`)
- **Las 7 páginas del brief están live** + `/styleguide` interna.
- **Header con drawer móvil**, **Footer con datos del club**, **favicon "M" del logo MCA**.
- **Formulario de contacto** sin backend (validación HTML5 + handler JS de feedback).
- **Formulario de inscripción** disabled hasta tener URL del Google Forms.
- **Tienda** funciona como catálogo informativo con CTAs WhatsApp pre-rellenados.
- **Mapa Google embebido** en `/contacto` con la dirección real.
- **Páginas legales** (`/aviso-legal`, `/privacidad`, `/cookies`) referenciadas desde el footer pero aún sin crear (404).

---

## Decisiones pendientes (consultar al cliente)

Antes de avanzar en diseño/implementación, validar con Gerardo:

1. **Tienda:** ¿solo catálogo + WhatsApp, precios visibles, o e-commerce real?
2. **Mascota pantera:** ¿se usa en web como elemento de marca recurrente?
3. **MCA Kids:** mostrar como "próximamente" visible o esconder hasta lanzamiento.
4. **Versiones vectoriales (SVG)** de los logos.
5. **Vectorización de las estrellas** dibujadas a mano del eslogan (activo de marca).
6. **Material visual definitivo:** fotos reales del club (de momento usaremos stock e Instagram como referencia).
7. **URL pública del Google Forms de inscripción** que ya tiene el cliente (para integrarlo en la web).
8. **Datos fiscales del club** (CIF, razón social) para footer y aviso legal.
9. **Política de privacidad / aviso legal / cookies** (RGPD obligatorio).
10. **Confirmar que los equipos del brief son los reales** (el txt indica *"estructura de ejemplo"*).
11. **Horarios concretos** por equipo.
12. **Validación del dorado `#D4AF37`** como color de marca para palmarés / logros (incluido como sugerido, no oficial).

---

## Convenciones de trabajo

- **Idioma de la web:** español de España.
- **Idioma de comunicación con el usuario:** español.
- **Idioma de código y commits:** inglés.
- **Sin em dashes (—) ni en dashes (–)** en contenidos web ni documentación. Usar dos puntos o paréntesis.
- **CTAs siempre con verbo en imperativo:** "Únete", "Reserva", "Contáctanos".
- **Responsive mobile-first** (no opcional: el cliente lo marca como fundamental).
- **Accesibilidad:** contrastes WCAG AA mínimo, alt en todas las imágenes, navegación por teclado.

---

## Referencias de inspiración (del cliente)

- https://www.tvccsports.com/sports/cheer/index
- https://topguncheeranddance.com/home
- http://cheerxportalcobendas.com/

Ver `docs/reference.md` para análisis breve de cada una.

---

## Cómo trabajar en este repo

1. **Antes de cualquier cambio de copy:** leer `docs/content/web-content-original.txt` como fuente canónica.
2. **Antes de cualquier cambio visual:** revisar `docs/brand/brand-guidelines.md`.
3. **Si falta info:** preguntar al usuario antes de inventar.
4. **Si una decisión depende del cliente final (Gerardo):** anotarla en la sección "Decisiones pendientes" de este archivo en lugar de asumirla.
5. **Mobile-first siempre:** diseñar primero la versión móvil y luego escalar.
