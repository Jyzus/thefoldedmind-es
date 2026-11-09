/* gezinme.js: sitenin ortak gezinmesi (tanıtım sayfası, alt sayfalar ve atlas).
   - İz: bu çerçevede açılan sayfalar sessionStorage → atlas.iz'de tutulur (yol, başlık, kaydırma konumu). window.name çerçeveyi tanır;
     artifact yeniden açılınca (yeni çerçeve) iz sıfırlanır, böylece "Geri" hiçbir zaman sitenin dışına çıkmaz.
   - Geri: data-geri taşıyan bağlantılar bir önceki sayfaya döner (history.back). Önceki sayfa yoksa bağlantının kendi adresine gider.
   - Kaydırma: yeni açılan sayfa en üstten, geri dönülen sayfa kalınan yerden açılır. Barındırma ya da tarayıcı sayfayı sonradan başka bir
     yere kaydırırsa, kullanıcı kendisi kaydırana kadar (en çok 3 sn) bu konuma geri alınır. Çapalı adreslerde (#…) tarayıcıya bırakılır.
   - window.GEZINME = { geri(yedek), onceki() }: atlas "Geri" düğmesi için. */
(function () {
  'use strict';
  var KEY = 'atlas.iz', TAG = 'npa:';
  var here = location.pathname.replace(/index\.html$/, '');
  var iz = [], cur = null;

  function read() { try { return JSON.parse(sessionStorage.getItem(KEY) || '[]') || []; } catch (e) { return []; } }
  function write() { try { sessionStorage.setItem(KEY, JSON.stringify(iz.slice(-40))); } catch (e) { /* depolama kapalı */ } }

  // sayfaya varış: izi güncelle (type: navigate | reload | back_forward)
  function arrive(type) {
    iz = read();
    var fresh = false;
    try { if (String(window.name).indexOf(TAG) !== 0) { window.name = TAG + Math.random().toString(36).slice(2); fresh = true; } } catch (e) { /* ad yazılamıyor */ }
    if (fresh) iz = [];
    var last = iz[iz.length - 1];
    if (type === 'back_forward') {
      var i = iz.length - 1;
      while (i >= 0 && iz[i].p !== here) i--;
      if (i >= 0) iz = iz.slice(0, i + 1); else iz.push({ p: here, y: 0 });
    } else if (!last || last.p !== here) {
      iz.push({ p: here, y: 0 });
    }
    cur = iz[iz.length - 1];
    cur.t = document.title;
    write();
  }

  var nav = null;
  try { nav = performance.getEntriesByType('navigation')[0]; } catch (e) { /* eski tarayıcı */ }
  var type = nav && nav.type ? nav.type : 'navigate';
  arrive(type);
  addEventListener('pageshow', function (e) { if (e.persisted) arrive('back_forward'); });   // önbellekten geri gelindi

  // ---- kaydırma
  try { if ('scrollRestoration' in history) history.scrollRestoration = 'manual'; } catch (e) { /* çerçeve izin vermeyebilir */ }
  var target = location.hash ? null : (type === 'navigate' ? 0 : (cur.y || 0));
  var held = target !== null, t0 = Date.now();
  function jump(y) {
    var r = document.documentElement, s = r.style.scrollBehavior;
    r.style.scrollBehavior = 'auto';
    scrollTo(0, y);
    r.style.scrollBehavior = s;
  }
  function hold() {
    if (!held) return;
    if (Date.now() - t0 > 3000) { held = false; return; }
    if (Math.abs(scrollY - target) > 1) jump(target);
  }
  function release() { held = false; }
  ['wheel', 'touchstart', 'keydown', 'mousedown'].forEach(function (ev) { addEventListener(ev, release, { capture: true, passive: true }); });
  addEventListener('scroll', hold, { passive: true });
  document.addEventListener('DOMContentLoaded', hold);
  addEventListener('load', hold);
  [0, 60, 200, 500, 1000, 1800].forEach(function (ms) { setTimeout(hold, ms); });
  if (window.ResizeObserver) {
    var ro = new ResizeObserver(hold);
    var watch = function () { if (document.body) ro.observe(document.body); };
    if (document.body) watch(); else document.addEventListener('DOMContentLoaded', watch);
    setTimeout(function () { ro.disconnect(); }, 3100);
  }
  hold();

  // konumu kaydet (geri dönüldüğünde kalınan yerden açılsın)
  var saveT = 0;
  function save() { if (cur && !held) { cur.y = Math.round(scrollY); write(); } }
  addEventListener('scroll', function () { clearTimeout(saveT); saveT = setTimeout(save, 150); }, { passive: true });
  addEventListener('pagehide', save);

  // ---- geri
  function onceki() { return iz.length > 1 ? iz[iz.length - 2] : null; }
  function geri(yedek) {
    var prev = onceki();
    if (!prev) {                           // iz yoksa (barındırma depolamayı ya da çerçeve adını tutmadıysa) tarayıcının bildiği önceki sayfa
      var ref = '';
      try { var u = new URL(document.referrer); if (u.origin === location.origin && u.pathname !== location.pathname) ref = document.referrer; } catch (e) { /* referrer yok */ }
      location.href = ref || yedek || './';
      return;
    }
    var left = false;
    addEventListener('pagehide', function () { left = true; }, { once: true });
    history.back();
    setTimeout(function () { if (!left) location.href = prev.p; }, 600);   // tarayıcı geri gidemediyse önceki sayfayı aç
  }
  window.GEZINME = { geri: geri, onceki: onceki };
  // Dar ekranda (≤ 960 px) üst menü: ☰ düğmesiyle açılan liste (tanıtım sayfası ve alt sayfalar; atlasın kendi düzeni var)
  function mountMenu() {
    var hdr = document.querySelector('header.top'), nav = hdr && hdr.querySelector('nav');
    if (!nav || hdr.querySelector('.menu-ac')) return;
    if (!nav.id) nav.id = 'ust-menu';
    var b = document.createElement('button');
    b.type = 'button'; b.className = 'menu-ac';
    b.setAttribute('aria-expanded', 'false'); b.setAttribute('aria-controls', nav.id);
    b.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>' +
      '<span>Menú</span>';
    hdr.appendChild(b);
    var set = function (open) { hdr.classList.toggle('menu-acik', open); b.setAttribute('aria-expanded', String(open)); };
    b.addEventListener('click', function (e) { e.stopPropagation(); set(!hdr.classList.contains('menu-acik')); });
    nav.addEventListener('click', function (e) { if (e.target.closest('a')) set(false); });
    document.addEventListener('click', function (e) { if (!hdr.contains(e.target)) set(false); });
    addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
    placePrefs();
    if (narrow) { if (narrow.addEventListener) narrow.addEventListener('change', placePrefs); else narrow.addListener(placePrefs); }
  }
  // Dar ekranda dil kutusu (#prefs) ☰ menüsünün içinde durur: sağ alttaki yüzen kutu telefonda okurken satır sonlarını kapatıyordu
  // (kullanıcı 2026-10-11). Geniş ekranda yine sağ altta.
  var narrow = window.matchMedia ? matchMedia('(max-width: 960px)') : null;
  function placePrefs() {
    var p = document.getElementById('prefs'), nav = document.querySelector('header.top nav');
    if (!p || !nav || !document.querySelector('header.top .menu-ac')) return;
    var inMenu = !!(narrow && narrow.matches);
    if (inMenu && p.parentNode !== nav) nav.appendChild(p);
    else if (!inMenu && p.parentNode === nav) document.body.appendChild(p);
    document.documentElement.classList.toggle('prefs-menude', inMenu);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mountMenu); else mountMenu();
  // Sayfa içi çapalar (#bolgeler …): barındırmada sayfa bir çerçevede ve başka bir adresle sunulduğu için tarayıcı "#…" bağlantısını
  // sayfanın baştan yüklenmesine çevirebiliyor (kullanıcı 2026-10-13: Kütüphane'de "Bölgeler"e basınca sayfanın başına dönüyordu).
  // Hedef bu sayfadaysa kaydırmayı biz yaparız; atlasın kendi çapa yönlendirmesi var, ona dokunulmaz.
  document.addEventListener('click', function (e) {
    if (e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a || /atlas(\.html)?$/.test(location.pathname)) return;
    var id = a.getAttribute('href').slice(1), el = null;
    try { el = id ? document.getElementById(decodeURIComponent(id)) : null; } catch (err) { el = null; }
    if (!el) return;
    e.preventDefault();
    held = false;
    el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    try { history.replaceState(history.state, '', '#' + id); } catch (err) { /* çerçeve adres değiştirmeye izin vermeyebilir */ }
  });
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('[data-geri]') : null;
    if (!a || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    geri(a.href);
  });
  // ipucu: önceki sayfanın adı
  document.addEventListener('DOMContentLoaded', function () {
    var prev = onceki();
    document.querySelectorAll('[data-geri]').forEach(function (a) {
      var name = prev && prev.t ? prev.t.split(' · ')[0] : '';
      a.title = 'Atrás' + (name ? ': ' + name : '');
    });
  });
})();
