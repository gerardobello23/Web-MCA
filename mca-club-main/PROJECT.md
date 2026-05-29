# Madrid Cheer Athletics · Web Project

Rediseño completo de la web pública del club de cheerleading **Madrid Cheer Athletics** (MCA).

---

## Resumen ejecutivo

MCA es un club de cheerleading en Villa de Vallecas (Madrid) en pleno crecimiento, con oferta deportiva que va desde clases recreativas para niños hasta equipos competitivos de alto rendimiento. El sitio actual (`madridcheer.com`) no comunica adecuadamente esa propuesta. Este proyecto entrega una web nueva enfocada en:

- **Captar inscripciones** a clase de prueba gratuita.
- **Posicionar el club** como referente profesional del cheerleading madrileño.
- **Centralizar información** sobre modalidades, equipos, productos y contacto.
- **Permitir al cliente editar contenido** sin tocar código (vía Keystatic CMS).

---

## Audiencia objetivo

1. **Padres/madres** buscando actividad deportiva para sus hijos (6 a 15 años).
2. **Adolescentes y adultos jóvenes** (16+) interesados en deporte de equipo o competición.
3. **Atletas con experiencia previa** en cheerleading buscando club competitivo.
4. **Comunidad MCA actual** (atletas, familias) que usan la web como referencia operativa.

---

## Alcance funcional

### Páginas

| # | Página | Función principal |
|---|---|---|
| 1 | Home | Captación, propuesta de valor, CTAs |
| 2 | Quiénes somos | Marca, filosofía, equipo |
| 3 | Entrenamientos | 5 modalidades deportivas explicadas |
| 4 | Equipos | Recreativos + Competitivos por edad/nivel |
| 5 | Inscripción | Proceso 3 pasos + integración Google Forms + FAQ |
| 6 | Tienda / Catálogo | Productos oficiales (modalidad final por confirmar) |
| 7 | Contacto | Datos + formulario + mapa + redes sociales |

### Funcionalidades técnicas

- Responsive mobile-first (requisito del cliente).
- Formulario de contacto con validación + envío por email.
- Integración Google Forms para inscripción.
- Google Maps embebido en Contacto.
- Enlaces directos WhatsApp.
- Galería de imágenes optimizada (lazy load, formatos modernos).
- SEO básico (meta tags, sitemap.xml, robots.txt, schema.org Organization + LocalBusiness).
- Dashboard de edición (Keystatic) en `/admin` para que el cliente edite textos/equipos/productos.

### Fuera de alcance (por ahora)

- E-commerce con pago online (a decidir con cliente).
- Blog/noticias (mencionado como "opcional, futuro" en el brief).
- Login/área privada de atletas.
- Multiidioma (web solo en español).

---

## Fases del proyecto

### Fase 0 · Setup ✅
- [x] Reorganizar `docs/` con assets renombrados.
- [x] Documentar marca (`brand-guidelines.md`).
- [x] CLAUDE.md operativo.
- [x] `.claude/settings.local.json` con permisos de trabajo.
- [x] PROJECT.md (este archivo).
- [x] `docs/reference.md` con webs de inspiración.

### Fase 1 · Cimientos técnicos ✅
- [x] Inicializar proyecto Astro + Tailwind v4 en `web/`.
- [x] Tokens de color y tipografía en `@theme` de `global.css`.
- [x] Componentes base: Button, Card, Input, Header (con drawer móvil), Footer.
- [x] BaseLayout y SiteLayout con favicon, theme-color, fuentes Google.

### Fase 2 · Páginas estáticas ✅
- [x] Home (hero, pilares, galería, pasos, CTA).
- [x] Quiénes somos (filosofía, compromiso, CTA).
- [x] Entrenamientos (5 modalidades, qué incluyen, instalaciones).
- [x] Equipos (recreativos + competitivos, banner "estructura de ejemplo").
- [x] Inscripción (3 pasos, formulario placeholder, FAQ).
- [x] Tienda (catálogo + WhatsApp pre-rellenado).
- [x] Contacto (datos, formulario, mapa Google, horario).
- [x] Styleguide interna (tokens, componentes, WCAG).

### Fase 2.5 · Deploy temprano ✅
- [x] Repo en GitHub: `davidrc/mca-club`.
- [x] Deploy en Vercel: https://mca-club.vercel.app/
- [x] Favicon "M" del logo MCA en producción.

### Fase 3 · Iteración con cliente (en espera)
- [ ] Aplicar feedback de Gerardo sobre el sitio actual.
- [ ] Reemplazar placeholders por fotos reales del club.
- [ ] Confirmar nombres reales de equipos y horarios.
- [ ] Cerrar modalidad de tienda (catálogo simple vs precios vs e-commerce).

### Fase 4 · Páginas y servicios complementarios
- [ ] Páginas legales (`/aviso-legal`, `/privacidad`, `/cookies`).
- [ ] Backend del formulario de contacto (Resend / Formspree).
- [ ] Integrar URL real del Google Forms en `/inscripcion`.
- [ ] Convertir favicon PNG a SVG (Vectorizer.AI + SVGOMG).
- [ ] Vectorizar las estrellas dibujadas a mano del eslogan.

### Fase 5 · CMS + edición autónoma
- [ ] Integrar Keystatic.
- [ ] Mover contenido editable (equipos, productos, FAQ) a colecciones.
- [ ] Validar dashboard con el cliente.

### Fase 6 · Pulido final + entrega
- [ ] Optimización de imágenes con `astro:assets` (AVIF/WebP).
- [ ] Tests de accesibilidad (axe, Lighthouse).
- [ ] SEO técnico (sitemap, OG images, schema.org Organization + LocalBusiness).
- [ ] Configurar dominio `madridcheer.com` en Vercel.
- [ ] Sesión con cliente para enseñarle a usar Keystatic.
- [ ] Documentación de operación (cómo añadir un equipo, cómo subir foto).

---

## Criterios de éxito

1. **Lighthouse:** 90+ en Performance, Accessibility, Best Practices, SEO en mobile y desktop.
2. **Mobile-first real:** la web se ve bien y funciona desde 360px de ancho.
3. **El cliente edita solo:** sin pedirnos cambios de copy una vez entregada.
4. **Conversión:** flujo claro hasta el formulario de clase de prueba en menos de 2 clicks desde Home.

---

## Riesgos / decisiones abiertas

Ver sección "Decisiones pendientes" en `CLAUDE.md`. Resumen:

- Modalidad final de la tienda.
- Uso de la mascota pantera.
- Material visual definitivo (fotos reales).
- URL del Google Forms del cliente.
- Tipografía oficial (si existe).
- Equipos reales del club (los del brief son "estructura de ejemplo").
- Horarios concretos por equipo.
- Datos fiscales para footer y aviso legal.
- Política de privacidad / aviso legal / cookies (RGPD).
