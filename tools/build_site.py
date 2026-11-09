#!/usr/bin/env python3
"""Construye site/ (versión española) a partir del clon orig/."""
import os, shutil, re, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'orig', 'thefoldedmind.com')
DST = os.path.join(ROOT, 'site')

if os.path.exists(DST):
    shutil.rmtree(DST)

# 1) Páginas inglesas -> site/es/
shutil.copytree(os.path.join(SRC, 'en'), os.path.join(DST, 'es'))

# 2) Portada (homepage inglesa, está en la raíz por el redirect) -> site/index.html
shutil.copy(os.path.join(SRC, 'index.html'), os.path.join(DST, 'index.html'))

# 3) Assets compartidos y favicon en la raíz (referenciados vía ../ desde es/)
shutil.copytree(os.path.join(SRC, 'assets'), os.path.join(DST, 'assets'))
for f in ('favicon.ico', 'favicon.svg'):
    shutil.copy(os.path.join(SRC, f), os.path.join(DST, f))

# 4) Reescribir referencias en/ -> es/  (por el rename de directorio) en todos los archivos de texto
text_exts = ('.html', '.js', '.css')
for dirpath, _, files in os.walk(DST):
    for fn in files:
        if not fn.endswith(text_exts):
            continue
        p = os.path.join(dirpath, fn)
        s = open(p, encoding='utf-8').read()
        if 'en/' in s or '"en"' in s or "'en'" in s:
            # solo rutas/refs, no el idioma general aún (el lang se ajusta después)
            s = s.replace('en/assets/', 'es/assets/').replace('en/data/', 'es/data/').replace('en/i18n', 'es/i18n').replace('en/gezinme', 'es/gezinme').replace('en/sahne', 'es/sahne').replace('en/sayfa', 'es/sayfa').replace('en/brain', 'es/brain').replace('en/mri', 'es/mri').replace('en/app', 'es/app')
            open(p, 'w', encoding='utf-8').write(s)

print("OK: estructura base creada en", DST)
# Resumen
html = [p for p in glob.glob(os.path.join(DST, '**', '*.html'), recursive=True)]
print("páginas html:", len(html))
