// Season 26/27 popup (#modal-temporada in SiteLayout.astro).
// Single source of truth for when it stops showing.

// Madrid wall-clock time (Europe/Madrid) from which the popup no longer shows.
// Format: YYYY-MM-DDTHH:mm. Shown up to and including 2026-10-31 23:59 Madrid.
export const TEMPORADA_POPUP_END = '2026-11-01T00:00';

// Converts an instant to Madrid wall-clock time as YYYY-MM-DDTHH:mm,
// regardless of the visitor's own time zone.
export function toMadridDateTime(date: Date): string {
  const format = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
  });
  const parts: Record<string, string> = {};
  for (const { type, value } of format.formatToParts(date)) parts[type] = value;
  return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
}

// Fixed-width strings compare correctly in lexicographic order.
// If the browser cannot resolve the time zone, the popup stays hidden.
export function isTemporadaPopupActive(now: Date = new Date()): boolean {
  try {
    return toMadridDateTime(now) < TEMPORADA_POPUP_END;
  } catch {
    return false;
  }
}
