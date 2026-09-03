/**
 * VPIC1 — I18n runtime logic (Vietnamese / English / Chinese)
 * -----------------------------------------------------------------------
 * Static UI strings live in ./i8n-dict.ts and are applied to every
 * element carrying a `data-i18n="key"` attribute.
 *
 * For dynamic strings inside main.ts (status messages, tooltips built at
 * runtime, etc.) import and call:
 *
 *     import { t, setLang, getLang, applyI8n } from "./index.ts";
 *
 *     status.textContent = t("status.loaded", { name: file.name });
 *
 * After injecting dynamic markup that itself carries data-i18n attributes
 * (parts tree rows, popovers...), call applyI8n() again so the new nodes
 * get translated too.
 */

import { DICT, SUPPORTED, type Lang } from "./i8n-dict.ts";

const STORAGE_KEY = "vpic1.lang";

function detectDefault(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (saved && SUPPORTED.includes(saved)) return saved;
  } catch {
    /* localStorage unavailable (SSR, privacy mode, etc.) */
  }
  const nav = ((navigator.language || (navigator as any).userLanguage || "en") + "").toLowerCase();
  if (nav.startsWith("vi")) return "vi";
  if (nav.startsWith("zh")) return "zh";
  return "en";
}

let current: Lang = ((): Lang => {
  const attr = document.documentElement.dataset.lang as Lang | undefined;
  return attr && SUPPORTED.includes(attr) ? attr : detectDefault();
})();

function interpolate(str: string, vars?: Record<string, string | number>): string {
  if (!vars) return str;
  return str.replace(/\{(\w+)\}/g, (_, k: string) =>
    Object.prototype.hasOwnProperty.call(vars, k) ? String(vars[k]) : `{${k}}`
  );
}

/** Translate a key in the current language, with optional {var} interpolation. */
export function t(key: string, vars?: Record<string, string | number>): string {
  const table = DICT[current] ?? DICT.en;
  const str = table[key] ?? DICT.en[key] ?? key;
  return interpolate(str, vars);
}

/**
 * Apply translations to every [data-i18n] element under `root`.
 * Call again after inserting dynamic markup (parts tree, popovers, etc.)
 * that itself carries data-i18n attributes.
 *
 * NOTE: the attribute is "data-i18n" (matches the HTML). A previous version
 * of this file looked for "data-I8n" (missing the "1"), which meant the
 * selector never matched anything in index.html and no translations were
 * ever applied — fixed here.
 */
export function applyI8n(root: ParentNode = document): void {
  const nodes = root.querySelectorAll<HTMLElement>("[data-i18n]");
  nodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const val = t(key);

    const kbd = el.querySelector<HTMLElement>(".kbd");
    if (kbd) {
      // Preserve a trailing keyboard-shortcut badge, e.g. <span class="kbd">Ctrl 0</span>
      const first = el.firstChild;
      if (first && first.nodeType === Node.TEXT_NODE) {
        first.textContent = val + " ";
      } else {
        el.insertBefore(document.createTextNode(val + " "), kbd);
      }
    } else if (el.tagName === "OPTION" || el.children.length === 0) {
      el.textContent = val;
    } else {
      let textNode: ChildNode | null = null;
      for (const child of Array.from(el.childNodes)) {
        if (child.nodeType === Node.TEXT_NODE && child.textContent?.trim()) {
          textNode = child;
          break;
        }
      }
      if (textNode) textNode.textContent = val;
      else el.insertBefore(document.createTextNode(val), el.firstChild);
    }
  });

  const select = document.getElementById("langSelect") as HTMLSelectElement | null;
  if (select) select.value = current;
}

/** Switch the active language, persist it, and re-translate the DOM. */
export function setLang(lang: Lang): void {
  if (!SUPPORTED.includes(lang)) return;
  current = lang;
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    /* ignore */
  }
  document.documentElement.dataset.lang = lang;
  document.documentElement.lang = lang;
  applyI8n(document);
  document.dispatchEvent(new CustomEvent<{ lang: Lang }>("vpic1:langchange", { detail: { lang } }));
}

export function getLang(): Lang {
  return current;
}

/** Wire up the DOM: translate on load + bind #langSelect's change event. */
export function initI8n(): void {
  const boot = () => {
    applyI8n(document);
    const select = document.getElementById("langSelect") as HTMLSelectElement | null;
    if (select) {
      select.value = current;
      select.addEventListener("change", () => setLang(select.value as Lang));
    }
  };
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
}