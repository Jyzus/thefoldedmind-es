/* i18n.js — versión en español (sitio de un solo idioma) y preferencia de tema (día / noche).
   - Idioma: fijo en 'es'. El diccionario i18n-es.js traduce las cadenas de interfaz (claves en turco → español).
   - Tema: localStorage 'atlas.tema' ('light' | 'dark'); si no existe, se usa el tema del sistema. <html data-theme> lo aplica. */
(function () {
  'use strict';
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* almacenamiento desactivado */ } }
  };
  const root = document.documentElement;
  const lang = 'es';
  root.lang = lang;
  const theme = store.get('atlas.tema');
  if (theme === 'light' || theme === 'dark') root.dataset.theme = theme;

  const DICT = {};
  const t = (s) => (Object.prototype.hasOwnProperty.call(DICT, s) ? DICT[s] : s);

  // HTML estático: traduce nodos de texto y atributos title/placeholder/aria-label/alt si coinciden exactamente con el diccionario
  function translateStatic(el) {
    if (!el) return;
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) if (!walker.currentNode.parentElement.closest('[translate="no"]')) nodes.push(walker.currentNode);
    nodes.forEach((n) => {
      const raw = n.nodeValue, s = raw.trim();
      if (s && Object.prototype.hasOwnProperty.call(DICT, s)) n.nodeValue = raw.replace(s, DICT[s]);
    });
    el.querySelectorAll('[title],[placeholder],[aria-label],[alt]').forEach((x) => ['title', 'placeholder', 'aria-label', 'alt'].forEach((a) => {
      const v = x.getAttribute(a);
      if (v && Object.prototype.hasOwnProperty.call(DICT, v.trim())) x.setAttribute(a, DICT[v.trim()]);
    }));
  }
  // Carga los archivos de contenido en español (datos del atlas y diccionario de interfaz)
  function loadEs(files) {
    files.forEach((f) => document.write('<script src="' + f + '"><\/script>'));
  }

  const isDark = () => (root.dataset.theme ? root.dataset.theme === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
  function setTheme(dark) {
    root.dataset.theme = dark ? 'dark' : 'light';
    store.set('atlas.tema', root.dataset.theme);
    paint();
  }

  // caja de preferencias (solo tema, abajo a la derecha)
  let box = null;
  const SUN = '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M5.3 18.7l1.8-1.8M16.9 7.1l1.8-1.8"/></svg>';
  const MOON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.2 14.6A8.4 8.4 0 0 1 9.4 3.8a8.4 8.4 0 1 0 10.8 10.8z"/></svg>';
  function paint() {
    if (!box) return;
    const th = box.querySelector('.th'), dark = isDark();
    th.innerHTML = dark ? SUN : MOON;
    th.title = dark ? t('Cambiar a modo día') : t('Cambiar a modo noche');
    th.setAttribute('aria-label', th.title);
  }
  function mountBox() {
    if (box) return;
    const css = document.createElement('style');
    css.textContent = `
#prefs { position: fixed; right: 16px; bottom: calc(16px + env(safe-area-inset-bottom, 0px)); z-index: 30; display: flex; align-items: center;
  gap: 2px; padding: 4px; border-radius: 999px; background: var(--surface-solid); border: 1px solid var(--line); box-shadow: var(--shadow);
  font: 500 11px/1 var(--f-mono, ui-monospace, monospace); }
#prefs button { border: 0; background: none; color: var(--fg-3); cursor: pointer; border-radius: 999px; height: 26px; min-width: 30px;
  padding: 0 8px; font: inherit; letter-spacing: 0.06em; display: grid; place-items: center; }
#prefs button:hover { color: var(--fg); background: var(--chip); }
#prefs button:focus-visible { outline: 2px solid var(--accent); outline-offset: 1px; }
#prefs svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 1.7; stroke-linecap: round; stroke-linejoin: round; }
#prefs .th svg path[d^="M20.2"] { fill: currentColor; stroke: none; }
@media (max-width: 820px) { #prefs { bottom: calc(72px + env(safe-area-inset-bottom, 0px)); } }`;
    document.head.appendChild(css);
    box = document.createElement('div');
    box.id = 'prefs';
    box.setAttribute('role', 'group');
    box.setAttribute('aria-label', t('Tema'));
    box.innerHTML = '<button class="th"></button>';
    box.addEventListener('click', (e) => {
      const b = e.target.closest('button');
      if (!b) return;
      setTheme(!isDark());
    });
    document.body.appendChild(box);
    paint();
    try { matchMedia('(prefers-color-scheme: dark)').addEventListener('change', paint); } catch (e) { /* navegador antiguo */ }
  }

  window.I18N = { lang, t, add: (d) => Object.assign(DICT, d), translateStatic, loadEs, setTheme, isDark, mountBox };
})();
