// Shared helpers for the public forms, which post to the app (app.madridcheer.com).
// The app validates and stores them. Response contract:
// 200 { ok: true } | 400 { error, campos: { campo: mensaje } } | 429 { error } | 500 { error }
import { toMadridDateTime } from "./temporada-popup";

export const APP_API = "https://app.madridcheer.com/api";

// Same email rule as the app (a dot is required in the domain). Pass it as an expression:
// a literal pattern="..." attribute in a .astro file loses its backslashes.
export const EMAIL_PATTERN = "[^\\s@]+@[^\\s@]+\\.[^\\s@]+";

// Today in Madrid (YYYY-MM-DD): the date the app validates birth dates against.
export function todayInMadrid(): string {
  try {
    return toMadridDateTime(new Date()).slice(0, 10);
  } catch {
    return new Date().toISOString().slice(0, 10);
  }
}

// Completed years today in Madrid for a YYYY-MM-DD date (same calculation as the app).
export function ageInMadrid(fecha: string): number {
  const [y, m, d] = fecha.split("-").map(Number);
  const [hy, hm, hd] = todayInMadrid().split("-").map(Number);
  return hy - y - (hm < m || (hm === m && hd < d) ? 1 : 0);
}

// Birth date: not in the future and not more than 100 years ago (today in Madrid).
export function limitBirthDate(input: HTMLInputElement | null) {
  if (!input) return;
  const today = todayInMadrid();
  const min = `${Number(today.slice(0, 4)) - 100}${today.slice(4)}`;
  input.max = today;
  input.min = min.endsWith("-02-29") ? min.replace("-02-29", "-03-01") : min;
}

// Trims every text field, so a field with only spaces counts as empty.
export function trimTextFields(form: HTMLFormElement) {
  form
    .querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(
      'input[type="text"], input[type="email"], input[type="tel"], textarea'
    )
    .forEach((el) => {
      el.value = el.value.trim();
    });
}

export type SendResult = { ok: true } | { ok: false; message: string };

// Posts the form data and waits for the app. 400 returns the first field message;
// 429, 500, any other status or a network failure return the generic messages.
export async function sendToApp(
  path: string,
  data: Record<string, unknown>,
  messages: { error: string; network: string }
): Promise<SendResult> {
  let res: Response;
  try {
    res = await fetch(`${APP_API}${path}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
  } catch {
    return { ok: false, message: messages.network };
  }
  if (res.ok) return { ok: true };
  if (res.status === 400) {
    const body = await res.json().catch(() => null);
    const first = body?.campos ? Object.values(body.campos)[0] : null;
    return { ok: false, message: (typeof first === "string" && first) || body?.error || messages.error };
  }
  return { ok: false, message: messages.error };
}
