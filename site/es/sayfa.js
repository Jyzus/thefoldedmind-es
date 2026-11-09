/* sayfa.js — alt sayfaların ortak davranışı.
   - Ana sayfa bağlantıları: yayında ana sayfanın adresi barındırmaya bağlıdır; tanıtım sayfası kendi adresini sessionStorage → atlas.ana'ya
     yazar. data-home="#topluluk" gibi bir öznitelik taşıyan bağlantılar o adrese (çapasıyla) gider; yoksa işaretlemedeki göreli yol kalır.
   - Sağ alttaki dil kutusu (tema düğmesi bu sayfalarda gizli), e-posta kopyalama düğmeleri, kısayollar: A atlas, L dil.
   - Sekme başlığı: <title data-en="…"> varsa İngilizcede o kullanılır. */
(function () {
  'use strict';
  var home = null;
  try { home = sessionStorage.getItem('atlas.ana'); } catch (e) { /* depolama kapalı */ }
  if (home) document.querySelectorAll('a[data-home]').forEach(function (a) { a.href = home + (a.getAttribute('data-home') || ''); });
  if (window.I18N) window.I18N.mountBox();
  // başa dön oku (TR/EN kutusunun üstünde)
  (function () {
    var up = document.createElement('button');
    up.id = 'yukari'; up.type = 'button'; up.textContent = '↑';
    up.title = 'Volver arriba'; up.setAttribute('aria-label', up.title);
    document.body.appendChild(up);
    var tick = function () { up.classList.toggle('on', scrollY > 500); };
    addEventListener('scroll', tick, { passive: true }); tick();
    up.addEventListener('click', function () {   // (gezinme.js'in kaydırma tutucusu fare/dokunma ile zaten bırakılmıştır)
      var still = false; try { still = matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) { /* eski tarayıcı */ }
      scrollTo({ top: 0, behavior: still ? 'auto' : 'smooth' });
    });
  })();
  var en = window.I18N && window.I18N.lang === 'es';
  var ttl = document.querySelector('title[data-en]');   // título: si existe data-en se usa (compatibilidad)
  if (en && ttl) document.title = ttl.getAttribute('data-en');
  document.querySelectorAll('[data-copy]').forEach(function (b) {
    b.addEventListener('click', function () {
      var el = document.querySelector(b.getAttribute('data-copy')), txt = el ? el.textContent.trim() : '';
      var done = function () {
        var s = b, old = s.textContent;
        s.textContent = 'Copiado';
        setTimeout(function () { s.textContent = old; }, 1600);
      };
      var select = function () { var r = document.createRange(); r.selectNodeContents(el); var sel = getSelection(); sel.removeAllRanges(); sel.addRange(r); };
      try { navigator.clipboard.writeText(txt).then(done, select); } catch (e) { select(); }
    });
  });
  var atlas = document.querySelector('a[data-atlas]');
  addEventListener('keydown', function (e) {
    if (e.ctrlKey || e.metaKey || e.altKey || /input|textarea|select/i.test(e.target.tagName)) return;
    var k = e.key.toLowerCase();
    if (k === 'a' && atlas) location.href = atlas.href;
  });
})();
