#!/usr/bin/env python3
"""
Populates all 104 site/es/bolge/*.html pages from site/es/data/es/regions-*.js
and content.js NOTES.
Zero LLM tokens spent. 100% deterministic and aligned with the 3D Atlas.
"""

import os
import sys
import subprocess
import json
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE_BOLGE = os.path.join(ROOT, 'site', 'es', 'bolge')
ORIG_BOLGE = os.path.join(ROOT, 'orig', 'thefoldedmind.com', 'en', 'bolge')

GROUP_NAMES = {
    'Frontal Lobe': 'Lóbulo frontal',
    'Parietal Lobe': 'Lóbulo parietal',
    'Temporal Lobe': 'Lóbulo temporal',
    'Occipital Lobe': 'Lóbulo occipital',
    'Limbic Cortex & Insula': 'Corteza límbica e ínsula',
    'Limbic Structures': 'Estructuras límbicas',
    'Basal Ganglia': 'Ganglios basales',
    'Diencephalon': 'Diencéfalo',
    'Commissures': 'Comisuras',
    'Brainstem': 'Tronco del encéfalo',
    'Cerebellum': 'Cerebelo'
}

def export_js_data():
    """Extract all regions data and model notes from JS to JSON via Node."""
    exporter = """
    const fs = require('fs');
    global.window = {};
    for (let i = 1; i <= 10; i++) {
      eval(fs.readFileSync('site/es/data/es/regions-' + i + '.js', 'utf8'));
    }
    global.FD = { NT: [{id:'da'},{id:'ne'},{id:'5ht'},{id:'ach'},{id:'his'},{id:'orx'},{id:'glu'},{id:'gaba'}] };
    global.DIVAN = { book: {} };
    const code = fs.readFileSync('site/es/data/es/content.js', 'utf8');
    eval(code.replace('const NOTES =', 'let NOTES = global.NOTES_EXPORT ='));

    const out = {
      regions: window.NEURO_REGIONS_EN,
      notes: global.NOTES_EXPORT || {}
    };
    console.log(JSON.stringify(out));
    """
    res = subprocess.run(['node', '-e', exporter], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0:
        raise RuntimeError("Failed to export JS data: " + res.stderr)
    return json.loads(res.stdout)

def format_ev(text):
    """Format [A], [B], [C] tags to HTML badges."""
    def repl_ev(m):
        letter = m.group(1).upper()
        title = {
            'A': 'Evidencia A: gran consorcio, metaanálisis o decisión reguladora',
            'B': 'Evidencia B: estudios replicados o caso clásico',
            'C': 'Evidencia C: estudio único o pionero, uso experimental'
        }.get(letter, '')
        return f'<span class="ev" title="{title}">{letter}</span>'
    return re.sub(r'\[([ABCabc])\]', repl_ev, text)

def format_ba(text):
    """Format BA codes if any."""
    return re.sub(r'\b(BA\s+\d+(?:,\s*\d+)*)\b', r'<span class="ba">\1</span>', text)

def format_item(text):
    """Clean and format an item text."""
    t = format_ev(text)
    # If text already contains <span class="ba">, preserve it, else format BA
    if '<span class="ba">' not in t:
        t = format_ba(t)
    return t

def translate_html_page(rid, rdata, note, orig_html):
    s = orig_html

    # Basic language and canonical tags
    s = s.replace('<html lang="en" data-sabit-dil="en">', '<html lang="es">')
    s = s.replace('<html lang="en">', '<html lang="es">')
    s = s.replace('<html lang="tr">', '<html lang="es">')

    name = rdata.get('name', '')
    summary = rdata.get('summary', '')

    # Page title and metadata
    title_pattern = r'<title>.*?</title>'
    s = re.sub(title_pattern, f'<title>{name}: funciones, anatomía y significado clínico</title>', s)

    s = re.sub(r'<meta property="og:site_name" content=".*?">', '<meta property="og:site_name" content="La Mente Doblada">', s)
    s = re.sub(r'<meta property="og:title" content=".*?">', f'<meta property="og:title" content="{name}: funciones, anatomía y significado clínico">', s)
    s = re.sub(r'<meta property="og:description" content=".*?">', f'<meta property="og:description" content="{summary}">', s)
    s = re.sub(r'<meta property="og:url" content=".*?">', f'<meta property="og:url" content="https://thefoldedmind.com/es/bolge/{rid}">', s)
    s = re.sub(r'<meta property="og:image:alt" content=".*?">', '<meta property="og:image:alt" content="La Mente Doblada: circuitos cerebrales detrás de la psique">', s)
    s = re.sub(r'<meta property="og:locale" content=".*?">', '<meta property="og:locale" content="es_ES">', s)
    s = re.sub(r'\s*<meta property="og:locale:alternate"[^>]*>', '', s)
    s = re.sub(r'<meta name="description" content=".*?">', f'<meta name="description" content="{summary}">', s)

    # Link tags
    s = re.sub(r'\s*<link rel="alternate" hreflang="tr"[^>]*>', '', s)
    s = re.sub(r'<link rel="alternate" hreflang="en" href=".*?">', f'<link rel="alternate" hreflang="es" href="{rid}.html">', s)

    # JSON-LD
    def repl_jsonld(m):
        try:
            d = json.loads(m.group(1))
            d['name'] = f"{name}: funciones, anatomía y significado clínico"
            d['description'] = summary
            d['inLanguage'] = "es"
            if 'audience' in d and isinstance(d['audience'], dict):
                d['audience']['audienceType'] = "Estudiantes de medicina y profesionales de la salud mental"
            if 'about' in d and isinstance(d['about'], dict):
                d['about']['name'] = name
                d['about']['description'] = summary
            if 'isPartOf' in d and isinstance(d['isPartOf'], dict):
                d['isPartOf']['name'] = "La Mente Doblada"
            return '<script type="application/ld+json">' + json.dumps(d, ensure_ascii=False) + '</script>'
        except Exception:
            return m.group(0)
    s = re.sub(r'<script type="application/ld\+json">(.*?)</script>', repl_jsonld, s, flags=re.DOTALL)

    # Top header navigation
    s = s.replace('<a class="brand" href="../../index.html" data-home="" translate="no">The Folded <em>Mind</em></a>',
                  '<a class="brand" href="../../index.html" data-home="" translate="no">La Mente <em>Doblada</em></a>')
    s = s.replace('<span>Library</span>', '<span>Biblioteca</span>')
    s = s.replace('<span data-l="en">Library</span>', '<span>Biblioteca</span>')
    s = s.replace('<span>Newsletter</span>', '<span>Boletín</span>')
    s = s.replace('<span data-l="en">Newsletter</span>', '<span>Boletín</span>')
    s = s.replace('<span>Community</span>', '<span>Comunidad</span>')
    s = s.replace('<span data-l="en">Community</span>', '<span>Comunidad</span>')
    s = s.replace('<span>About</span>', '<span>Acerca de</span>')
    s = s.replace('<span data-l="en">About</span>', '<span>Acerca de</span>')
    s = s.replace('<span>Go to the atlas</span>', '<span>Ir al atlas</span>')
    s = s.replace('<span data-l="en">Go to the atlas</span>', '<span>Ir al atlas</span>')

    # Breadcrumb
    s = s.replace('aria-label="Gezinme yolu"', 'aria-label="Ruta de navegación"')
    s = s.replace('<span>Home</span>', '<span>Inicio</span>')
    s = s.replace('<span data-l="en">Home</span>', '<span>Inicio</span>')
    s = s.replace('<span>Regions</span>', '<span>Regiones</span>')
    s = s.replace('<span data-l="en">Regions</span>', '<span>Regiones</span>')
    s = s.replace('<span>Back</span>', '<span>Atrás</span>')
    s = s.replace('<span data-l="en">Back</span>', '<span>Atrás</span>')
    s = re.sub(r'<span aria-current="page"><span>.*?</span></span>', f'<span aria-current="page"><span>{name}</span></span>', s)
    s = re.sub(r'<span aria-current="page"><span data-l="en">.*?</span></span>', f'<span aria-current="page"><span>{name}</span></span>', s)

    # Language wrapper
    s = s.replace('<div class="dil" data-l="en" lang="en">', '<div class="dil" lang="es">')
    s = s.replace('<div class="dil" lang="en">', '<div class="dil" lang="es">')

    # Header section
    for en_grp, es_grp in GROUP_NAMES.items():
        s = s.replace(f'>{en_grp}</a>', f'>{es_grp}</a>')

    s = re.sub(r'<h1>.*?</h1>', f'<h1>{name}</h1>', s, count=1)
    s = re.sub(r'(<p class="latin">.*?</p>\s*)<p>.*?</p>', r'\1<p>' + summary + '</p>', s, count=1)
    s = s.replace('Open in the 3D atlas', 'Abrir en el atlas 3D')
    s = s.replace('<span>All regions</span>', '<span>Todas las regiones</span>')
    s = s.replace('<span data-l="en">All regions</span>', '<span>Todas las regiones</span>')

    # Nav links in cam bas
    nav_repl = [
        ('aria-label="On this page"', 'aria-label="En esta página"'),
        ('>Anatomy</a>', '>Anatomía</a>'),
        ('>Substructures</a>', '>Subestructuras</a>'),
        ('>Functions</a>', '>Funciones</a>'),
        ('>Connections and chemistry</a>', '>Conexiones y química</a>'),
        ('>Development</a>', '>Desarrollo</a>'),
        ('>Clinical</a>', '>Clínico</a>'),
        ('>Treatment</a>', '>Tratamiento</a>'),
        ('>Assessment</a>', '>Evaluación</a>'),
        ('>Lesions and damage</a>', '>Lesiones y daño</a>'),
        ('>In the model</a>', '>En el modelo</a>'),
        ('>References</a>', '>Referencias</a>')
    ]
    for old_n, new_n in nav_repl:
        s = s.replace(old_n, new_n)

    # Sections replacement
    sec_map = [
        ('en-anatomi', 'Anatomía', rdata.get('anatomy', []), None),
        ('en-islevler', 'Funciones', rdata.get('functions', []), None),
        ('en-baglantilar', 'Conexiones y química', rdata.get('links', []), None),
        ('en-gelisim', 'Desarrollo', rdata.get('development', []), 'Evolución del desarrollo a lo largo de la infancia y la adolescencia.'),
        ('en-klinik', 'Clínico', rdata.get('clinical', []), 'Cuadros clínicos en los que destaca esta región.'),
        ('en-tedavi', 'Tratamiento', rdata.get('treatment', []), 'Esta región desde la perspectiva de medicamentos, psicoterapia y neuromodulación. Las insignias de letras son niveles de evidencia.'),
        ('en-degerlendirme', 'Evaluación', rdata.get('tests', []), 'Tareas y pruebas neuropsicológicas que indagan sobre la función de esta región.'),
        ('en-lezyon', 'Lesiones y daño', rdata.get('lesion', []), None)
    ]

    for sec_id, sec_title, items, lead_text in sec_map:
        if not items:
            continue
        pat = re.compile(rf'(<section class="cam blok" id="{sec_id}">\s*<h2>).*?(</h2>)(.*?)(</section>)', re.DOTALL)
        m = pat.search(s)
        if m:
            lead_html = f'\n<p class="lead">{lead_text}</p>' if lead_text else ''
            lis_html = ''.join([f'\n<li>{format_item(it)}</li>' for it in items])
            new_inner = f'{m.group(1)}{sec_title}{m.group(2)}{lead_html}\n<ul>{lis_html}\n</ul>\n'
            s = s[:m.start()] + new_inner + m.group(4) + s[m.end():]

    # In the model section
    if note:
        pat_model = re.compile(r'(<section class="cam blok" id="en-modelde">\s*<h2>).*?(</h2>)\s*<p>.*?</p>', re.DOTALL)
        s = pat_model.sub(rf'\g<1>En el modelo\g<2>\n<p>{note}</p>', s)

    # References title
    s = re.sub(r'(<section class="cam blok" id="en-kaynaklar">\s*<h2>).*?(</h2>)', r'\g<1>Referencias\g<2>', s)

    # Remove remaining data-l attributes
    s = re.sub(r'\s+data-l="[a-z]+"', '', s)

    return s

def main():
    print("Exporting regions and notes data from JS...")
    data = export_js_data()
    regions = data['regions']
    notes = data['notes']

    print(f"Loaded {len(regions)} regions and {len(notes)} model notes.")
    os.makedirs(SITE_BOLGE, exist_ok=True)

    count = 0
    for rid, rdata in regions.items():
        orig_file = os.path.join(ORIG_BOLGE, f'{rid}.html')
        if not os.path.exists(orig_file):
            print(f"WARN: Original HTML not found for {rid}")
            continue
        with open(orig_file, 'r', encoding='utf-8') as f:
            orig_html = f.read()

        note = notes.get(rid, '')
        es_html = translate_html_page(rid, rdata, note, orig_html)

        dst_file = os.path.join(SITE_BOLGE, f'{rid}.html')
        with open(dst_file, 'w', encoding='utf-8') as f:
            f.write(es_html)
        count += 1

    print(f"Successfully populated {count} bolge/*.html pages in Spanish!")

if __name__ == '__main__':
    main()
