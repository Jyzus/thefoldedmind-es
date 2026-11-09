#!/usr/bin/env python3
"""Limpia el HTML: idioma español, quita mecanismo bilingüe."""
import os, re, glob

DST = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'site')

def process(p):
    s = open(p, encoding='utf-8').read()
    orig = s
    # 1) idioma
    s = s.replace('<html lang="en" data-sabit-dil="en">', '<html lang="es">')
    s = s.replace('<html lang="tr" data-sabit-dil="tr">', '<html lang="es">')
    # 2) quitar atributos data-l
    s = re.sub(r'\s+data-l="[a-z]+"', '', s)
    # 3) quitar regla CSS bilingüe
    s = re.sub(r'html\[lang="en"\] \[data-l="tr"\],\s*html:not\(\[lang="en"\]\) \[data-l="en"\]\s*\{\s*display:\s*none\s*!important;\s*\}', '', s)
    # 4) enlaces internos de la portada en/*.html -> es/*.html
    s = s.replace('en/atlas.html', 'es/atlas.html').replace('en/kutuphane.html', 'es/kutuphane.html')
    s = s.replace('en/bolgeler.html', 'es/bolgeler.html').replace('en/psikopatoloji.html', 'es/psikopatoloji.html')
    s = s.replace('en/bulten.html', 'es/bulten.html').replace('en/yasal.html', 'es/yasal.html').replace('en/hakkinda.html', 'es/hakkinda.html')
    # 5) datos overlay del atlas
    s = s.replace('data/en/', 'data/es/')
    # 6) URLs canónicas
    s = s.replace('https://thefoldedmind.com/en/', 'https://thefoldedmind.com/es/')
    # 7) og locale
    s = s.replace('content="en_US"', 'content="es_ES"')
    s = re.sub(r'\s*<meta property="og:locale:alternate"[^>]*>', '', s)
    # 8) hreflang
    s = s.replace('hreflang="en"', 'hreflang="es"')
    s = re.sub(r'\s*<link rel="alternate" hreflang="tr"[^>]*>', '', s)
    s = s.replace('hreflang="x-default" href="acc.html"', 'hreflang="x-default" href="acc.html"')
    # 9) JSON-LD idioma
    s = s.replace('"inLanguage":"en"', '"inLanguage":"es"').replace('"inLanguage":"en-US"', '"inLanguage":"es"')
    if s != orig:
        open(p, 'w', encoding='utf-8').write(s)
    return s != orig

n = 0
for p in glob.glob(os.path.join(DST, '**', '*.html'), recursive=True):
    if process(p): n += 1
print("HTML procesados:", n)
