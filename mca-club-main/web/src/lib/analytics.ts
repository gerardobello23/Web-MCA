// GA4 conversion events. Every event goes through track(), so a future cookie-consent
// check only has to be added there.
// GA is loaded in BaseLayout; its gtag() lives inside that module script, so events are
// queued in dataLayer the way gtag() does it (an Arguments object, not an array).

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
  }
}

function gtag(..._args: unknown[]) {
  window.dataLayer?.push(arguments);
}

export function track(event: string, params: Params = {}) {
  // Pages that do not load GA (e.g. /privacidad-modal) have no dataLayer
  if (!window.dataLayer) return;
  gtag("event", event, params);
}

const GOOGLE_FORM = /^https:\/\/(forms\.gle|docs\.google\.com\/forms)\//;
const MAPS = /^https:\/\/(maps\.google\.[a-z.]+|(www\.)?google\.[a-z.]+\/maps|maps\.app\.goo\.gl)\b/;

// Event name for a link, or null when the link is not a tracked conversion
function linkEvent(url: URL): string | null {
  if (url.protocol === "mailto:") return "click_correo";
  if (url.hostname === "wa.me") return "click_whatsapp";
  if (url.origin === location.origin && url.pathname.replace(/\/$/, "") === "/inscripcion") return "click_inscripcion";
  if (GOOGLE_FORM.test(url.href)) return "click_inscripcion";
  if (MAPS.test(url.href)) return "click_como_llegar";
  return null;
}

// One delegated listener covers every link on the page, including those added later
export function initLinkTracking() {
  document.addEventListener(
    "click",
    (e) => {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      let url: URL;
      try {
        url = new URL(link.href, location.href);
      } catch {
        return;
      }
      const event = linkEvent(url);
      if (event) {
        track(event, {
          link_url: link.href,
          link_text: link.textContent?.replace(/\s+/g, " ").trim().slice(0, 100) || undefined,
        });
      }
    },
    { capture: true }
  );
}
