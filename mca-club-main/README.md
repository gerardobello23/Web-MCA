# Madrid Cheer Athletics · Web

Sitio web público de **Madrid Cheer Athletics** (MCA), club de cheerleading en Villa de Vallecas, Madrid.

> "No soñamos con ganar. Entrenamos para hacerlo."

---

## Estructura del repositorio

```
.
├── CLAUDE.md                 # Contexto operativo del proyecto (cliente, decisiones, pendientes)
├── PROJECT.md                # Alcance, fases y criterios de éxito
├── docs/                     # Documentación de marca y contenido (no se publica)
│   ├── brand/                # Logos, design tokens y brand guidelines
│   ├── content/              # Brief original del cliente
│   └── reference.md          # Webs de inspiración y datos del club
└── web/                      # Proyecto Astro (lo que se despliega)
    ├── src/
    │   ├── components/       # Header, Footer, Button, Card, Input
    │   ├── layouts/          # BaseLayout y SiteLayout
    │   ├── pages/            # 7 páginas + styleguide
    │   └── styles/           # global.css con design tokens
    └── public/               # Assets servidos directamente (logos, etc.)
```

---

## Stack

- **[Astro](https://astro.build)** 6 · framework estático con hidratación selectiva
- **[Tailwind CSS](https://tailwindcss.com)** v4 · sistema de diseño con tokens en `@theme`
- **[Keystatic](https://keystatic.com)** *(pendiente)* · CMS git-based para que el cliente edite contenido
- **[Vercel](https://vercel.com)** · hosting (plan Hobby)

---

## Páginas

- `/` Home
- `/quienes-somos`
- `/entrenamientos`
- `/equipos`
- `/inscripcion`
- `/tienda`
- `/contacto`
- `/styleguide` *(privada · solo para validación de design system)*

---

## Desarrollo local

Requisitos: **Node 22+** (declarado en `web/.nvmrc` y `web/package.json` engines).

```bash
cd web
nvm use            # cambia a Node 22 si usas nvm
npm install
npm run dev        # http://localhost:4321
```

> **Aviso de Tailwind v4:** si añades clases nuevas y no se reflejan en el navegador, reinicia el dev server. Bug conocido con valores arbitrarios y clases nuevas en hot reload.

---

## Scripts

Desde `web/`:

| Comando | Acción |
|---|---|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción a `web/dist/` |
| `npm run preview` | Servir el build localmente |

---

## Despliegue en Vercel

El sitio se publica desde la carpeta `web/` (monorepo-style).

- **Framework Preset:** Astro
- **Root Directory:** `web`
- **Build Command:** `npm run build` *(default)*
- **Output Directory:** `dist` *(default)*
- **Install Command:** `npm install` *(default)*
- **Node version:** 22

Cada push a `main` despliega producción; cada PR despliega un preview.

---

## Estado del proyecto

Fase 2 completada: las 7 páginas del brief están en línea con copy real, design system aplicado y placeholders marcados.

**Pendientes principales** (ver `CLAUDE.md` para la lista detallada):

1. Validar con cliente: equipos reales, mascota pantera, modalidad de tienda.
2. Material visual definitivo (fotos del club).
3. Páginas legales (aviso legal, privacidad, cookies).
4. Backend del formulario de contacto.
5. Integrar Keystatic.
6. Configurar dominio `madridcheer.com` en Vercel.

---

## Licencia

Proyecto privado del cliente. Todos los derechos reservados.
