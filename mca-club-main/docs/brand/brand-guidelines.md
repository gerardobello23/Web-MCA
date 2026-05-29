# Madrid Cheer Athletics · Brand Guidelines & Design System

Documento de referencia visual y técnica para la web de MCA. Versión: **Hand-off v1.1** (sellado con patch tipográfico, formularios, cards, navegación móvil y reglas de contraste rojo/navy).

---

## 1. Identidad

- **Nombre:** Madrid Cheer Athletics
- **Acrónimo:** MCA
- **Categoría:** Club deportivo de cheerleading (Villa de Vallecas, Madrid)
- **Eslogan oficial:** *"No soñamos con ganar. Entrenamos para hacerlo."*
- **Personalidad:** energética, disciplinada, comunitaria, aspiracional, estética collegiate USA.

---

## 2. Logos

Assets en `docs/brand/`.

| Archivo | Uso recomendado |
|---|---|
| `logo-circular-rojo.png` | Avatares sociales, favicon, footer, watermark semitransparente sobre fondos. Logo principal en su versión emblema. |
| `logo-circular-blanco.png` | Versión sobre fondos rojos u oscuros (footer dark, overlays). |
| `wordmark-mca-rojo.png` | **Uso principal en navbar** (desktop y móvil) por su proporción horizontal. Watermark grande. |
| `firma-email-mca-fondo-rojo.png` | "MCA" en blanco sobre fondo rojo: banners horizontales, firmas email, hero secundario. |
| `wordmark-m-rojo.png` | "M" estilizada del logo, aislada y en cuadrado. Marca corta para favicon, app icon, watermark de redes. |
| `favicon.png` | Versión optimizada del wordmark "M" para uso como favicon del navegador (`web/public/favicon.png`). |
| `camiseta-reverso-eslogan.png` | Composición eslogan + estrellas dibujadas a mano. **Las estrellas son activo de marca:** vectorizar a SVG y usar como motivos flotantes detrás de títulos / rodeando CTAs clave. |
| `ilustracion-pantera-pendiente.png` | Ilustración de pantera roja. Origen y rol no documentados en el brief. **Pendiente confirmar con cliente** si es marca oficial, arte de camiseta o prueba descartada. |

**Área de seguridad:** en cualquier logo, dejar siempre un margen vacío equivalente a la altura de la "M" central.

**Pendiente:** versiones SVG de todos los logos para escalado limpio.

---

## 3. Sistema de color

### 3.1 Análisis de consistencia

Medido píxel a píxel en los assets. El rojo es consistente en `logo-circular-rojo.png`, `wordmark-mca-rojo.png` y `firma-email-mca-fondo-rojo.png`. La única desviación está en `ilustracion-pantera-pendiente.png` por el efecto sketch/desgaste, no es referencia de color.

**Decisión:** rojo sólido oficial = `#E31837`.

### 3.2 Tokens

| Token | HEX | Origen | Uso |
|---|---|---|---|
| `--color-mca-red` | `#E31837` | **Oficial** | CTAs grandes, decoración, estado active |
| `--color-mca-red-dark` | `#B0122A` | Sugerido | Hover del rojo. Obligatorio para texto rojo pequeño |
| `--color-mca-navy` | `#083B66` | **Oficial** (eslogan) | Fondos corporativos, H2/H3, texto de lectura |
| `--color-mca-navy-dark` | `#052642` | Sugerido | Hover navy. Fondos secciones oscuras, drawer móvil |
| `--color-mca-white` | `#FFFFFF` | **Oficial** | Fondos principales, texto sobre oscuros |
| `--color-mca-gold` | `#D4AF37` | Sugerido (estratégico) | **Restrictivo:** medallas, palmarés, estatus de logro |
| `--color-mca-slate-50` | `#F8FAFC` | Sistema | Fondos sutiles |
| `--color-mca-slate-100` | `#F1F5F9` | Sistema | Separación de secciones, fondos disabled |
| `--color-mca-slate-200` | `#E2E8F0` | Sistema | Bordes muy sutiles |
| `--color-mca-slate-300` | `#CBD5E1` | Sistema | Bordes inputs, divisores |
| `--color-mca-slate-400` | `#94A3B8` | Sistema | Placeholder, texto deshabilitado |
| `--color-mca-slate-500` | `#64748B` | Sistema | Texto secundario |
| `--color-mca-slate-700` | `#334155` | Sistema | Texto enfático no-navy |
| `--color-mca-slate-900` | `#0F172A` | Sistema | Texto denso, fondos casi negros (subtono navy) |
| `--color-mca-success` | `#10B981` | Semántico | Confirmaciones |
| `--color-mca-warning` | `#F59E0B` | Semántico | Avisos |
| `--color-mca-error` | `#E31837` | Semántico (= red) | Errores en formularios |

### 3.3 Reglas WCAG (obligatorias)

| Combinación | Ratio | Veredicto | Regla |
|---|---|---|---|
| `mca-red` sobre `mca-white` | 4.48:1 | ⚠️ Falla AA texto normal | Solo titulares ≥18px o bold ≥14px. Para texto pequeño usar `mca-red-dark`. |
| `mca-red-dark` sobre `mca-white` | 7.2:1 | ✅ AAA | Cualquier texto. |
| `mca-navy` sobre `mca-white` | 9.48:1 | ✅ AAA | Color por defecto del cuerpo. |
| `mca-white` sobre `mca-navy-dark` | 12.8:1 | ✅ AAA | Contraste para hero y secciones dark. |
| `mca-red` sobre `mca-navy` | 2.9:1 | ❌ Falla 3:1 UI | Si CTA rojo va sobre fondo navy, **borde blanco obligatorio** (`ring-2 ring-mca-white ring-offset-2 ring-offset-mca-navy`). Texto rojo sobre azul oscuro **prohibido** (usar `mca-white`). |

---

## 4. Tipografía

### 4.1 Familias (Google Fonts, decisión cerrada)

- **Display (titulares grandes, números de stats):** **Teko**
  - Por qué: condensada, geométrica, agresividad deportiva, escala bien en móvil.
  - Pesos: Semibold (600), Bold (700).
  - Estilo por defecto: `text-transform: uppercase` (solo H1-H3).
- **Body (UI y párrafos):** **Inter**
  - Por qué: máxima legibilidad, técnica y limpia, compensa la dureza de Teko.
  - Pesos: Regular (400) para lectura, Medium (500) para botones y labels.

### 4.2 Escala (base 16px)

| Token Tailwind | Tamaño | Uso |
|---|---|---|
| `text-xs` | 12px | Etiquetas pequeñas, footers legales |
| `text-sm` | 14px | Metadatos, fechas |
| `text-base` (leading-relaxed) | 16px | Cuerpo de texto principal |
| `text-lg` | 18px | Subtítulos de tarjetas |
| `text-2xl` (leading-tight) | 24px | H3 (Inter Bold) |
| `text-4xl` (leading-none) | 36px | H2 (Teko Bold) |
| `text-5xl` (leading-none) | 48px | **H1 Mobile** (Teko Bold) |
| `text-8xl` (leading-none) | 96px | H1 Desktop (Teko Bold) |

### 4.3 Reglas

- Uppercase **solo en H1, H2 y H3** (no en H4-H6 para preservar legibilidad).
- Texto largo en `mca-navy` por defecto.
- Texto en rojo solo en titulares destacados, nunca en cuerpo.

---

## 5. Layout, grid y spacing

- **Grid:** 12 columnas.
- **Max-width contenedor:** 1280px (`max-w-7xl`).
- **Container padding lateral:**
  - `<640px`: `px-4` (16px)
  - `md` (≥768px): `px-6` (24px)
  - `lg` (≥1024px): `px-8` (32px)
- **Breakpoints (Tailwind):** `sm:640` · `md:768` · `lg:1024` · `xl:1280`.
- **Spacing scale (base 4):**
  - Iconos/texto inline: `gap-2` (8px)
  - Bloques internos de card: `gap-4` / `gap-6` (16-24px)
  - Separación entre secciones de página: `py-16` mobile (64px), `py-24` desktop (96px)

---

## 6. Componentes UI

### 6.1 Botones

Todos: `font-family: Inter Medium`, `uppercase`, `rounded-sm` (2px), `transition-all duration-150 ease-out`.

| Variante | Base | Hover | Focus | Disabled |
|---|---|---|---|---|
| Primary | `bg-mca-red text-mca-white` | `bg-mca-red-dark` | `ring-2 ring-mca-red ring-offset-2` | `bg-mca-slate-100 text-mca-slate-300 cursor-not-allowed` |
| Secondary | `bg-mca-navy text-mca-white` | `bg-mca-navy-dark` | `ring-2 ring-mca-navy ring-offset-2` | igual que primary |
| Ghost / Outline | `bg-transparent border border-mca-navy text-mca-navy` | `bg-mca-navy/5` | `ring-2 ring-mca-navy ring-offset-1` | igual que primary |
| Primary sobre fondo navy | `bg-mca-red text-mca-white ring-2 ring-mca-white ring-offset-2 ring-offset-mca-navy` | `bg-mca-red-dark` | mismo anillo blanco | igual que primary |

### 6.2 Inputs y formularios

- **Base:** `bg-mca-white`, `border border-mca-slate-300`, `rounded-sm`, `px-4 py-2`, `text-mca-navy`.
- **Placeholder:** `text-mca-slate-400`.
- **Focus:** `outline-none ring-2 ring-mca-navy ring-offset-1`, transición 150ms.
- **Error:** `border-mca-error ring-1 ring-mca-error`. Mensaje debajo: `text-xs text-mca-error mt-1`.
- **Disabled:** `bg-mca-slate-50 text-mca-slate-400 cursor-not-allowed`.
- **Label:** sobre el input, `text-sm font-medium text-mca-navy mb-1`. Si requerido, marcar con `*` en `text-mca-red`.
- **Checkbox / Radio:**
  - Base: `w-4 h-4 border border-mca-slate-300 rounded-sm` (radio: `rounded-full`).
  - Checked: `bg-mca-red border-mca-red`, marca blanca.
  - Focus: `ring-2 ring-mca-navy ring-offset-1`.
  - Disabled: `bg-mca-slate-100`.

### 6.3 Card

- **Base:** `bg-mca-white border border-mca-slate-100 rounded-sm`.
- **Padding interno:** `p-6` desktop, `p-4` mobile.
- **Hover (si clickeable):** `shadow-lg` (sombra navy: `rgba(8, 59, 102, 0.1)`) + `-translate-y-1`. `transition-all duration-200 ease-out`.

### 6.4 Sombras (elevation)

- `shadow-md`: tarjetas en reposo, sombra navy `rgba(8, 59, 102, 0.08)`.
- `shadow-lg`: tarjetas en hover, modales, sombra navy `rgba(8, 59, 102, 0.15)`.
- No usar grises genéricos.

### 6.5 Iconografía

- Set: **Lucide Icons** (`lucide-react` / `lucide-astro`).
- Trazo: 2px constante.
- Tamaño base: 20px (`w-5 h-5`); 16px en contextos densos.

### 6.6 Motion

- Duración: `duration-150` por defecto, `duration-200` para tarjetas hover.
- Easing: `ease-out` (arranque rápido, frena al final).
- **Prohibido:** transiciones >300ms, rebotes exagerados, animaciones decorativas que distraigan.

---

## 7. Navegación

### 7.1 Desktop

- Navbar fija, `bg-mca-white`, sombra suave al hacer scroll.
- Wordmark a la izquierda. Items de menú alineados a la derecha. CTA "Únete" como botón Primary.

### 7.2 Mobile

- **Hamburger drawer lateral derecho** (slide-in).
- Fondo: `bg-mca-navy-dark` a pantalla completa.
- Tipografía de menú: Teko uppercase, blanco.
- Cierre: tap fuera o icono X.
- Justificación: el drawer lateral oculta ruido visual y se diferencia de patrones de app nativos iOS/Android.

---

## 8. Voz y tono

- **Cercana y motivadora:** trato de tú, energía positiva.
- **Directa:** frases cortas, CTAs en imperativo ("Únete", "Reserva", "Inscríbete").
- **Inclusiva:** "todos los niveles", "tu lugar", "comunidad".
- **Aspiracional sin arrogancia:** orgullo de equipo, no superioridad.

Evitar tecnicismos sin explicar (stunts, tumbling) en su primera mención; tono frío o corporativo.

---

## 9. Pendientes de validar con cliente

1. **Mascota / pantera:** rol oficial en web (decisión completa).
2. **MCA Kids:** mostrar como "próximamente" visible o esconder.
3. **Versiones SVG** de los logos.
4. **Vectorización de las estrellas** dibujadas a mano del eslogan.
5. **Material visual definitivo** (fotos reales del club).
6. **Modalidad final de la tienda.**
7. **URL del Google Forms** de inscripción.
8. **Datos fiscales** del club (CIF, razón social) para footer y aviso legal.
9. **Política de privacidad / aviso legal / cookies** (RGPD).
