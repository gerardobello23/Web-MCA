# CLAUDE.md · Madrid Cheer Athletics (MCA)

Contexto operativo para futuras sesiones de trabajo en este proyecto.

---

## Qué es este proyecto

Web pública del club de cheerleading **Madrid Cheer Athletics** (MCA), ubicado en Madrid (Ciudad Lineal). El cliente es Gerardo, responsable del club. La web sustituye a `madridcheer.com` (sitio actual existente) con un rediseño completo enfocado en captación de nuevos atletas, presencia profesional y catálogo de equipos/productos.

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
| Repositorio | **GitHub** [`gerardobello23/Web-MCA`](https://github.com/gerardobello23/Web-MCA) | Conectado a Vercel para auto-deploy. |
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
│   │   ├── images/             # Fotos (WebP) + og-madrid-cheer-athletics.jpg (tarjeta social)
│   │   ├── favicon-32.png      # Favicon 32 px
│   │   ├── favicon.png         # Favicon 192 px (Google y Android)
│   │   ├── apple-touch-icon.png # 180 px con fondo blanco
│   │   └── robots.txt          # Declara el sitemap
│   ├── src/
│   │   ├── components/         # Button, Card, Footer, Header, Input
│   │   ├── layouts/            # BaseLayout, SiteLayout
│   │   ├── lib/                # analytics, temporada-popup, web-forms
│   │   ├── pages/              # Páginas del brief, legales, mca-kids, 404 + styleguide
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

---

## Marca

Resumen rápido (detalle completo en `docs/brand/brand-guidelines.md`):

- **Color principal:** rojo MCA `#E31837` (extraído de assets oficiales)
- **Color secundario:** navy `#083B66` (extraído del eslogan)
- **Logo principal:** circular con "MADRID CHEER ATHLETICS" rodeando una "M"
- **Wordmark corto:** "MCA" (uso principal en navbar)
- **Eslogan oficial:** *"No soñamos con ganar. Entrenamos para hacerlo."*
- **Pantera roja:** uso en web pendiente de confirmar (no aparece mencionada en el brief original)
- **Tipografía oficial:** **Teko** (display, H1-H3 uppercase) + **Inter** (body). En la web, display y body usan **MN Ligahura Sans** autoalojada (`web/src/styles/global.css`); Teko e Inter no se cargan. De Google Fonts solo se carga **Gochi Hand** (mca Kids), sin bloquear el primer pintado.
- **Sistema de diseño completo** (tokens, componentes, WCAG, motion): ver `docs/brand/brand-guidelines.md`
- **Tokens CSS Tailwind v4** listos: `docs/brand/design-tokens.css`

---

## Información del cliente / club

- **URL actual:** http://madridcheer.com/
- **Dirección física:** C. de Vital Aza, 56, Ciudad Lineal, 28017 Madrid
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
- **Repo:** https://github.com/gerardobello23/Web-MCA (rama `main`)
- **Las 7 páginas del brief están live** + `/styleguide` interna.
- **Header con drawer móvil**, **Footer con datos del club**, **favicon "M" del logo MCA**.
- **Formulario de contacto** y **formulario de prueba gratuita** (ventana emergente en todas las páginas): se envían a la app (`app.madridcheer.com/api`, rutas `/contact/notify` y `/prospects/notify`, ver `web/src/lib/web-forms.ts`).
- **Inscripción:** `/inscripcion` enlaza al Google Forms del club (`https://forms.gle/WwwvoBnu9KF2tjL7A`, constante `googleFormsUrl` en `web/src/pages/inscripcion.astro`).
- **Tienda** funciona como catálogo informativo con CTAs WhatsApp pre-rellenados. Las fotos de producto y la galería de la portada siguen siendo placeholders hasta que el club entregue fotos reales (no tocarlos).
- **Mapa Google embebido** en `/contacto` con la dirección real.
- **Páginas legales** (`/aviso-legal`, `/privacidad`, `/cookies`) creadas y enlazadas desde el footer. `/privacidad-modal` es la versión que se abre en un iframe desde los formularios (noindex, sin GA).
- **Página 404** propia (`web/src/pages/404.astro`, noindex, sin canonical); Astro genera `404.html`, que Vercel sirve en las rutas inexistentes. Estado 404 comprobado en local con `astro preview`; falta confirmarlo en producción tras el despliegue.
- **Pop-up "Temporada 26/27 · Inscripciones abiertas"** (`#modal-temporada`): marcado y script en `web/src/layouts/SiteLayout.astro` (bloques `TEMPORADA_2026_2027`). Se desactiva solo por fecha: **deja de mostrarse el 2026-11-01 a las 00:00 hora de Madrid** (se muestra hasta el 31/10 a las 23:59 incluido). La fecha de fin es la constante `TEMPORADA_POPUP_END` en `web/src/lib/temporada-popup.ts` (único sitio). La comprobación se hace en el navegador en cada carga, convirtiendo la hora del visitante a `Europe/Madrid`; el HTML del servidor siempre lo entrega oculto. No borrar: para reutilizarlo en otra campaña, cambiar la constante (y el texto si hace falta).

---

## SEO, rendimiento y analítica

- **Metadatos por página:** `BaseLayout` (vía `SiteLayout`) recibe `title`, `description`, `image`, `imageAlt` y `noindex`. Genera canonical (`https://www.madridcheer.com` + ruta, sin barra final), Open Graph (`og:locale es_ES`) y `twitter:card summary_large_image`. La imagen por defecto es `/images/og-madrid-cheer-athletics.jpg` (1200x630: logo circular blanco sobre navy + foto del equipo con medallas, `Fotos Gerardo-10`). Con `noindex` no se emiten canonical ni `og:url`.
- **Datos estructurados:** `BaseLayout` incluye en todas las páginas un JSON-LD `SportsClub` del club con `@id` `https://www.madridcheer.com/#club` (nombre, url, logo, imagen, teléfono, email, dirección y `sameAs` con Instagram y TikTok). Sin `openingHours` ni `geo` hasta tener datos confirmados. `/mca-kids` tiene su propio `SportsClub` (`@id` `/mca-kids#programa`) enlazado al club con `parentOrganization`. Si se añade otra entidad, enlazarla al `@id` del club en lugar de repetir el club.
- **Indexación:** `public/robots.txt` declara `sitemap-index.xml`. El sitemap lo genera `@astrojs/sitemap` y excluye `/styleguide` y `/privacidad-modal` (`astro.config.mjs`); la 404 queda fuera sola.
- **Imágenes:** subirlas ya redimensionadas (fotos a unos 1600 px de ancho, logos al doble de su tamaño en pantalla) y siempre con `width` y `height`. Los originales en alta resolución van a `docs/brand/` (p. ej. `logo-footer.png` de 3238 px y el favicon de 801 px). Los carruseles de la portada y de `/entrenamientos` usan `loading="lazy"` y piden la siguiente foto un paso antes de mostrarla.
- **Analítica:** GA4 `G-167EYGMGDN`, cargado en `BaseLayout` (no hay banner de cookies por decisión del club). Todos los eventos pasan por `track()` en `web/src/lib/analytics.ts`, que es el único sitio donde añadir una comprobación de consentimiento si se decide más adelante. `BaseLayout analytics={false}` deja una página sin GA. Eventos (marcados o por marcar como eventos clave en GA4):
  - `click_whatsapp`: enlaces a `wa.me`.
  - `click_inscripcion`: enlaces a `/inscripcion` y al Google Forms.
  - `click_como_llegar`: enlaces a Google Maps.
  - `click_correo`: enlaces `mailto:`.
  - `envio_prueba_gratuita`: envío aceptado por la app del formulario de prueba gratuita.

  Los cuatro de clic llevan `link_url` y `link_text`; `envio_prueba_gratuita` lleva `fuente` si el botón tiene `data-source`.

---

## Decisiones pendientes (consultar al cliente)

Antes de avanzar en diseño/implementación, validar con Gerardo:

1. **Tienda:** ¿solo catálogo + WhatsApp, precios visibles, o e-commerce real?
2. **Mascota pantera:** ¿se usa en web como elemento de marca recurrente?
3. **MCA Kids:** mostrar como "próximamente" visible o esconder hasta lanzamiento.
4. **Versiones vectoriales (SVG)** de los logos.
5. **Vectorización de las estrellas** dibujadas a mano del eslogan (activo de marca).
6. **Material visual definitivo:** fotos reales del club (de momento usaremos stock e Instagram como referencia).
7. ~~**URL pública del Google Forms de inscripción**~~ Resuelto: integrada en `/inscripcion`.
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
