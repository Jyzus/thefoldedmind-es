#!/usr/bin/env python3
"""
Task Manager for orchestrating thefoldedmind-es translations with Worker LLMs (deepseek-flash via pi).
Extracts translatable text into atomic JSON tasks and injects worker results back into code.
"""

import os
import sys
import json
import subprocess
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TASKS_PENDING = os.path.join(ROOT, 'tasks', 'pending')
TASKS_DONE = os.path.join(ROOT, 'tasks', 'done')
ES_DATA = os.path.join(ROOT, 'site', 'es', 'data', 'es')
ORIG_DATA = os.path.join(ROOT, 'orig', 'thefoldedmind.com', 'data', 'en')

GLOSSARY = {
    "ADHD": "TDAH",
    "OCD": "TOC",
    "ASD": "TEA",
    "autism": "autismo",
    "PTSD": "TEPT",
    "SSRIs": "ISRS",
    "CBT": "TCC",
    "DLPFC": "CPFDL (corteza prefrontal dorsolateral)",
    "rTMS": "EMTr",
    "TMS": "EMT",
    "MRI": "RM",
    "CSF": "LCR",
    "brainstem": "tronco del encéfalo",
    "anterior cingulate cortex": "corteza cingulada anterior (CCA)",
    "basal ganglia": "ganglios basales",
    "default mode network": "red neuronal por defecto (RND)",
    "salience network": "red de saliencia",
    "working memory": "memoria de trabajo",
    "executive function": "función ejecutiva",
    "sham-controlled": "controlado con placebo / simulación",
    "deep brain stimulation": "estimulación cerebral profunda (ECP)"
}

RULES = [
    "Traducir SOLO los valores de texto al español, manteniendo un tono formal, médico y riguroso.",
    "NO traducir identificadores ni modificar las claves del diccionario JSON.",
    "Conservar las citas científicas exactamente: autores y años sin traducir (ej: '(Glasser et al., 2016)').",
    "Conservar los marcadores de evidencia [A], [B], [C] intactos en su misma posición.",
    "Conservar números, unidades y siglas técnicas (fMRI, PET, EEG, 7 T, BA 46, d ≈ −0.14).",
    "El nombre de la marca 'The Folded Mind' no se traduce.",
    "Devolver EXCLUSIVAMENTE el objeto JSON con las mismas claves y los valores traducidos."
]

def ensure_dirs():
    os.makedirs(TASKS_PENDING, exist_ok=True)
    os.makedirs(TASKS_DONE, exist_ok=True)

def extract_tanilar():
    """Extracts translatable text from tanilar.js into task batches."""
    ensure_dirs()
    script = """
    const fs = require('fs');
    global.window = global;
    const code = fs.readFileSync('orig/thefoldedmind.com/data/en/tanilar.js', 'utf8').replace('const EN =', 'global.EN_EXPORT =');
    eval(code);

    function extractStrings(obj, prefix, out) {
      for (const [k, v] of Object.entries(obj)) {
        if (k === 'src' || k === 'id' || k === 'dtxt') continue;
        const path = prefix ? prefix + '.' + k : k;
        if (typeof v === 'string') {
          if (v.trim().length > 0) out[path] = v;
        } else if (Array.isArray(v)) {
          v.forEach((item, i) => {
            if (typeof item === 'string') {
              if (item.trim().length > 0) out[path + '.' + i] = item;
            } else if (typeof item === 'object' && item !== null) {
              extractStrings(item, path + '.' + i, out);
            }
          });
        } else if (typeof v === 'object' && v !== null) {
          extractStrings(v, path, out);
        }
      }
    }

    const out = {};
    extractStrings(global.EN_EXPORT, '', out);
    console.log(JSON.stringify(out));
    """
    res = subprocess.run(['node', '-e', script], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0:
        raise RuntimeError("Failed to extract tanilar: " + res.stderr)
    all_items = json.loads(res.stdout)

    part1_keys = ['dehb', 'osb', 'okb', 'depresyon', 'yab']
    part2_keys = ['tssb', 'bipolar', 'sizofreni', 'borderline', 'tik']

    items_part1 = {k: v for k, v in all_items.items() if any(k.startswith(p + '.') for p in part1_keys)}
    items_part2 = {k: v for k, v in all_items.items() if any(k.startswith(p + '.') for p in part2_keys)}

    task1 = {
        "task_id": "tanilar_part1",
        "target": "site/es/data/es/tanilar.js",
        "diagnoses": part1_keys,
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": items_part1
    }

    task2 = {
        "task_id": "tanilar_part2",
        "target": "site/es/data/es/tanilar.js",
        "diagnoses": part2_keys,
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": items_part2
    }

    f1 = os.path.join(TASKS_PENDING, 'task_01_tanilar_part1.json')
    f2 = os.path.join(TASKS_PENDING, 'task_01_tanilar_part2.json')

    with open(f1, 'w', encoding='utf-8') as fp:
        json.dump(task1, fp, indent=2, ensure_ascii=False)
    with open(f2, 'w', encoding='utf-8') as fp:
        json.dump(task2, fp, indent=2, ensure_ascii=False)

    print(f"Created task: {f1} ({len(items_part1)} items)")
    print(f"Created task: {f2} ({len(items_part2)} items)")

def apply_tanilar(done_task_path):
    """Applies translated items from a done task to site/es/data/es/tanilar.js."""
    with open(done_task_path, 'r', encoding='utf-8') as fp:
        data = json.load(fp)

    translated_items = data.get('items', data)
    print(f"Applying {len(translated_items)} translated items from {done_task_path}...")

    # Verification: check evidence markers
    for k, trans in translated_items.items():
        ev_orig = re.findall(r'\[[ABCabc]\]', trans)
        # Check if translation broke evidence tags
        for ev in ev_orig:
            if ev.upper() not in ('[A]', '[B]', '[C]'):
                print(f"WARN: Unusual evidence marker in {k}: {ev}")

    patcher = """
    const fs = require('fs');
    global.window = global;
    const items = JSON.parse(process.argv[1]);

    const file = 'site/es/data/es/tanilar.js';
    const code = fs.readFileSync(file, 'utf8');

    // Run to get EN object
    let EN_OBJ = null;
    eval(code.replace('const EN =', 'global.EN_EXPORT ='));
    EN_OBJ = global.EN_EXPORT;

    function setDeep(obj, path, val) {
      const parts = path.split('.');
      let curr = obj;
      for (let i = 0; i < parts.length - 1; i++) {
        const p = parts[i];
        if (curr[p] === undefined) return;
        curr = curr[p];
      }
      const last = parts[parts.length - 1];
      if (curr[last] !== undefined) {
        curr[last] = val;
      }
    }

    for (const [k, v] of Object.entries(items)) {
      setDeep(EN_OBJ, k, v);
    }

    // Write back
    const jsonStr = JSON.stringify(EN_OBJ, null, 2);
    const newCode = `/* Textos de diagnósticos en español (traducción de data/tanilar.js) */\\n(function () {\\n  'use strict';\\n  const EN = ` + jsonStr + `;\\n\\n  function merge(dst, src) {\\n    Object.keys(src).forEach((k) => {\\n      const v = src[k];\\n      if (Array.isArray(v) && Array.isArray(dst[k]) && v.some((x) => x && typeof x === 'object')) {\\n        v.forEach((x, i) => { const t = x.id ? dst[k].find((y) => y && y.id === x.id) : dst[k][i]; if (t) merge(t, x); });\\n      } else if (v && typeof v === 'object' && !Array.isArray(v) && dst[k] && typeof dst[k] === 'object') merge(dst[k], v);\\n      else dst[k] = Array.isArray(v) ? v.slice() : v;\\n    });\\n  }\\n  (window.TANILAR || []).forEach((d) => { if (EN[d.id]) merge(d, EN[d.id]); });\\n})();\\n`;

    fs.writeFileSync(file, newCode, 'utf8');
    console.log('Successfully updated site/es/data/es/tanilar.js');
    """
    res = subprocess.run(['node', '-e', patcher, json.dumps(translated_items)], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0:
        raise RuntimeError("Failed to apply tanilar: " + res.stderr)
    print(res.stdout.strip())

    # Run verification suite immediately
    print("\nRunning verification suite...")
    subprocess.run(['python3', 'tools/verify.py'], cwd=ROOT)

def extract_divan():
    """Extracts translatable text from divan.js into task batches for p2 and p3."""
    ensure_dirs()
    script = """
    const fs = require('fs');
    global.window = { DIVAN: { book: {}, entries: {} } };
    const code = fs.readFileSync('orig/thefoldedmind.com/data/en/divan.js', 'utf8');
    eval(code.replace('const E =', 'let E = global.E_EXPORT =').replace('const P =', 'let P = global.P_EXPORT ='));

    const outE = {};
    for (const [k, v] of Object.entries(global.E_EXPORT)) {
      for (const [prop, val] of Object.entries(v)) {
        if (typeof val === 'string' && val.trim().length > 0) outE['E.' + k + '.' + prop] = val;
      }
    }

    const outP = {
      'book.title': 'The Green Walnut on the Couch',
      'book.subtitle': 'Affective Neuroscience and Psychoanalysis from Before Birth to Adolescence',
      'closing': 'Panksepp’s systems, Freud’s stages, Erikson’s crises and Mahler’s subphases, discussed one by one throughout the book, are in fact produced by different combinations of a shared, limited number of anatomical components (the PAG, amygdala, hypothalamus and a few cortical areas) and a handful of pathways that connect them.'
    };
    for (const [k, v] of Object.entries(global.P_EXPORT)) {
      for (const [prop, val] of Object.entries(v)) {
        if (typeof val === 'string' && val.trim().length > 0) outP['P.' + k + '.' + prop] = val;
      }
    }

    console.log(JSON.stringify({ E: outE, P: outP }));
    """
    res = subprocess.run(['node', '-e', script], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0:
        raise RuntimeError("Failed to extract divan: " + res.stderr)
    data = json.loads(res.stdout)

    task_e = {
        "task_id": "divan_part1_entries",
        "target": "site/es/data/es/divan.js",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": data['E']
    }

    task_p = {
        "task_id": "divan_part2_pathways",
        "target": "site/es/data/es/divan.js",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": data['P']
    }

    f1 = os.path.join(TASKS_PENDING, 'task_02_divan_part1.json')
    f2 = os.path.join(TASKS_PENDING, 'task_02_divan_part2.json')

    with open(f1, 'w', encoding='utf-8') as fp:
        json.dump(task_e, fp, indent=2, ensure_ascii=False)
    with open(f2, 'w', encoding='utf-8') as fp:
        json.dump(task_p, fp, indent=2, ensure_ascii=False)

    print(f"Created task: {f1} ({len(data['E'])} items)")
    print(f"Created task: {f2} ({len(data['P'])} items)")

def apply_divan():
    """Applies translated items from tasks/done/task_02_divan_part1.json and part2.json to site/es/data/es/divan.js."""
    f1 = os.path.join(TASKS_DONE, 'task_02_divan_part1.json')
    f2 = os.path.join(TASKS_DONE, 'task_02_divan_part2.json')
    items = {}
    if os.path.exists(f1):
        with open(f1, 'r', encoding='utf-8') as fp:
            d = json.load(fp)
            items.update(d.get('items', d))
    if os.path.exists(f2):
        with open(f2, 'r', encoding='utf-8') as fp:
            d = json.load(fp)
            items.update(d.get('items', d))

    print(f"Applying {len(items)} translated items to site/es/data/es/divan.js...")
    patcher = """
    const fs = require('fs');
    global.window = { DIVAN: { book: {}, entries: {} } };
    const items = JSON.parse(process.argv[1]);

    const code = fs.readFileSync('orig/thefoldedmind.com/data/en/divan.js', 'utf8');
    eval(code.replace('const E =', 'let E = global.E_EXPORT =').replace('const P =', 'let P = global.P_EXPORT ='));

    const E = global.E_EXPORT;
    const P = global.P_EXPORT;

    for (const [k, v] of Object.entries(items)) {
      if (k.startsWith('E.')) {
        const parts = k.slice(2).split('.');
        if (E[parts[0]] && E[parts[0]][parts[1]] !== undefined) E[parts[0]][parts[1]] = v;
      } else if (k.startsWith('P.')) {
        const parts = k.slice(2).split('.');
        if (P[parts[0]] && P[parts[0]][parts[1]] !== undefined) P[parts[0]][parts[1]] = v;
      }
    }

    const title = items['book.title'] || 'The Green Walnut on the Couch';
    const subtitle = items['book.subtitle'] || 'Affective Neuroscience and Psychoanalysis from Before Birth to Adolescence';
    const closing = items['closing'] || '';

    const newCode = `/* Traducción al español: libro de la capa (Divandaki Yeşil Ceviz → The Green Walnut on the Couch), Capítulo 20. */
(function () {
  'use strict';
  const DV = window.DIVAN;
  if (!DV) return;
  DV.book.title = ` + JSON.stringify(title) + `;
  DV.book.subtitle = ` + JSON.stringify(subtitle) + `;
  DV.book.original = 'Divandaki Yeşil Ceviz';
  const put = (o, x) => { if (o && x) Object.assign(o, x); };

  const E = ` + JSON.stringify(E, null, 2) + `;
  Object.keys(E).forEach((k) => put(DV.entries[k], E[k]));

  const P = ` + JSON.stringify(P, null, 2) + `;
  (DV.pathways || []).forEach((p) => put(p, P[p.id]));

  DV.closing = ` + JSON.stringify(closing) + `;
})();
`;
    fs.writeFileSync('site/es/data/es/divan.js', newCode, 'utf8');
    console.log('Successfully updated site/es/data/es/divan.js');
    """
    res = subprocess.run(['node', '-e', patcher, json.dumps(items)], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0:
        raise RuntimeError("Failed to apply divan: " + res.stderr)
    print(res.stdout.strip())
    subprocess.run(['python3', 'tools/verify.py'], cwd=ROOT)

def extract_index():
    """Extracts translatable text from site/index.html."""
    ensure_dirs()
    fpath = os.path.join(ROOT, 'site', 'index.html')
    with open(fpath, 'r', encoding='utf-8') as f:
        content = f.read()

    pattern = re.compile(r'<span(?:\s+[^>]*)?>((?:(?!<span).)*?)</span>', re.DOTALL)
    matches = list(pattern.finditer(content))

    items = {}
    m = re.search(r'<title>(.*?)</title>', content)
    if m: items['index__title'] = m.group(1).strip()
    m = re.search(r'<meta name="description" content="(.*?)"', content)
    if m: items['index__meta_desc'] = m.group(1).strip()
    m = re.search(r'<meta property="og:title" content="(.*?)"', content)
    if m: items['index__og_title'] = m.group(1).strip()
    m = re.search(r'<meta property="og:description" content="(.*?)"', content)
    if m: items['index__og_desc'] = m.group(1).strip()
    m = re.search(r'<meta property="og:image:alt" content="(.*?)"', content)
    if m: items['index__og_alt'] = m.group(1).strip()

    skip_exact = {'Instagram', '→', '←', '›', '●', 'The Folded', 'Mind', 'A', 'B', 'C'}
    for i, match in enumerate(matches):
        txt = match.group(1).strip()
        if not any(c.isalpha() for c in txt):
            continue
        if txt in skip_exact:
            continue
        if len(txt) <= 2 and not any(c.isalpha() for c in txt):
            continue
        items[f'index__span_{i}'] = txt

    task = {
        "task_id": "index_homepage",
        "target": "site/index.html",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": items
    }
    out_file = os.path.join(TASKS_PENDING, 'task_03_index.json')
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(task, f, indent=2, ensure_ascii=False)
    print(f"Created task: {out_file} ({len(items)} items)")

def apply_index():
    """Applies translated items from tasks/done/task_03_index.json to site/index.html."""
    fpath_done = os.path.join(TASKS_DONE, 'task_03_index.json')
    if not os.path.exists(fpath_done):
        raise FileNotFoundError(f"Missing done task: {fpath_done}")

    with open(fpath_done, 'r', encoding='utf-8') as f:
        data = json.load(f)
        items = data.get('items', data)

    target_file = os.path.join(ROOT, 'site', 'index.html')
    with open(target_file, 'r', encoding='utf-8') as f:
        content = f.read()

    # Meta updates
    if 'index__title' in items:
        content = re.sub(r'<title>.*?</title>', f'<title>{items["index__title"]}</title>', content, count=1)
    if 'index__meta_desc' in items:
        content = re.sub(r'<meta name="description" content=".*?"', f'<meta name="description" content="{items["index__meta_desc"]}"', content, count=1)
    if 'index__og_title' in items:
        content = re.sub(r'<meta property="og:title" content=".*?"', f'<meta property="og:title" content="{items["index__og_title"]}"', content, count=1)
    if 'index__og_desc' in items:
        content = re.sub(r'<meta property="og:description" content=".*?"', f'<meta property="og:description" content="{items["index__og_desc"]}"', content, count=1)
    if 'index__og_alt' in items:
        content = re.sub(r'<meta property="og:image:alt" content=".*?"', f'<meta property="og:image:alt" content="{items["index__og_alt"]}"', content, count=1)

    pattern = re.compile(r'<span(?:\s+[^>]*)?>((?:(?!<span).)*?)</span>', re.DOTALL)
    matches = list(pattern.finditer(content))

    for i in reversed(range(len(matches))):
        k = f'index__span_{i}'
        if k in items:
            m = matches[i]
            content = content[:m.start(1)] + items[k] + content[m.end(1):]

    with open(target_file, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Successfully updated {target_file}")
    subprocess.run(['python3', 'tools/verify.py'], cwd=ROOT)

def extract_bulten():
    """Extracts translatable text from newsletter pages (bulten/*.html and bulten.html)."""
    ensure_dirs()
    pattern = re.compile(r'<span(?:\s+[^>]*)?>((?:(?!<span).)*?)</span>', re.DOTALL)
    skip_exact = {'Instagram', '→', '←', '›', '●', 'The Folded', 'Mind', 'A', 'B', 'C'}

    def extract_file(rel_path, prefix):
        p = os.path.join(ROOT, rel_path)
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()
        items = {}
        m = re.search(r'<title>(.*?)</title>', content)
        if m: items[f'{prefix}__title'] = m.group(1).strip()
        m = re.search(r'<meta name="description" content="(.*?)"', content)
        if m: items[f'{prefix}__meta_desc'] = m.group(1).strip()
        m = re.search(r'<meta property="og:title" content="(.*?)"', content)
        if m: items[f'{prefix}__og_title'] = m.group(1).strip()
        m = re.search(r'<meta property="og:description" content="(.*?)"', content)
        if m: items[f'{prefix}__og_desc'] = m.group(1).strip()
        m = re.search(r'<meta property="og:image:alt" content="(.*?)"', content)
        if m: items[f'{prefix}__og_alt'] = m.group(1).strip()

        matches = list(pattern.finditer(content))
        for i, match in enumerate(matches):
            txt = match.group(1).strip()
            if not any(c.isalpha() for c in txt):
                continue
            if txt in skip_exact:
                continue
            if len(txt) <= 2 and not any(c.isalpha() for c in txt):
                continue
            items[f'{prefix}__span_{i}'] = txt
        return items

    # Part 1: issues 001 and 002
    p1_items = {}
    p1_items.update(extract_file('site/es/bulten/001.html', 'bulten_001'))
    p1_items.update(extract_file('site/es/bulten/002.html', 'bulten_002'))

    # Part 2: issues 003 and 004
    p2_items = {}
    p2_items.update(extract_file('site/es/bulten/003.html', 'bulten_003'))
    p2_items.update(extract_file('site/es/bulten/004.html', 'bulten_004'))

    # Part 3: issue 005 and bulten.html
    p3_items = {}
    p3_items.update(extract_file('site/es/bulten/005.html', 'bulten_005'))
    p3_items.update(extract_file('site/es/bulten.html', 'bulten_index'))

    task1 = {
        "task_id": "bulten_part1_001_002",
        "target": "site/es/bulten/001.html, site/es/bulten/002.html",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": p1_items
    }
    task2 = {
        "task_id": "bulten_part2_003_004",
        "target": "site/es/bulten/003.html, site/es/bulten/004.html",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": p2_items
    }
    task3 = {
        "task_id": "bulten_part3_005_index",
        "target": "site/es/bulten/005.html, site/es/bulten.html",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": p3_items
    }

    f1 = os.path.join(TASKS_PENDING, 'task_04_bulten_part1.json')
    f2 = os.path.join(TASKS_PENDING, 'task_04_bulten_part2.json')
    f3 = os.path.join(TASKS_PENDING, 'task_04_bulten_part3.json')
    with open(f1, 'w', encoding='utf-8') as fp:
        json.dump(task1, fp, indent=2, ensure_ascii=False)
    with open(f2, 'w', encoding='utf-8') as fp:
        json.dump(task2, fp, indent=2, ensure_ascii=False)
    with open(f3, 'w', encoding='utf-8') as fp:
        json.dump(task3, fp, indent=2, ensure_ascii=False)
    print(f"Created task: {f1} ({len(p1_items)} items)")
    print(f"Created task: {f2} ({len(p2_items)} items)")
    print(f"Created task: {f3} ({len(p3_items)} items)")

def apply_bulten(done_file):
    """Applies translated items from a bulten done file to the corresponding HTML files."""
    fpath = os.path.join(TASKS_DONE, os.path.basename(done_file))
    if not os.path.exists(fpath):
        fpath = done_file
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        items = data.get('items', data)

    file_prefixes = {
        'bulten_001': 'site/es/bulten/001.html',
        'bulten_002': 'site/es/bulten/002.html',
        'bulten_003': 'site/es/bulten/003.html',
        'bulten_004': 'site/es/bulten/004.html',
        'bulten_005': 'site/es/bulten/005.html',
        'bulten_index': 'site/es/bulten.html'
    }

    pattern = re.compile(r'<span(?:\s+[^>]*)?>((?:(?!<span).)*?)</span>', re.DOTALL)

    for prefix, rel_path in file_prefixes.items():
        sub_items = {k: v for k, v in items.items() if k.startswith(f'{prefix}__')}
        if not sub_items:
            continue
        p = os.path.join(ROOT, rel_path)
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()

        if f'{prefix}__title' in sub_items:
            content = re.sub(r'<title>.*?</title>', f'<title>{sub_items[f"{prefix}__title"]}</title>', content, count=1)
        if f'{prefix}__meta_desc' in sub_items:
            content = re.sub(r'<meta name="description" content=".*?"', f'<meta name="description" content="{sub_items[f"{prefix}__meta_desc"]}"', content, count=1)
        if f'{prefix}__og_title' in sub_items:
            content = re.sub(r'<meta property="og:title" content=".*?"', f'<meta property="og:title" content="{sub_items[f"{prefix}__og_title"]}"', content, count=1)
        if f'{prefix}__og_desc' in sub_items:
            content = re.sub(r'<meta property="og:description" content=".*?"', f'<meta property="og:description" content="{sub_items[f"{prefix}__og_desc"]}"', content, count=1)
        if f'{prefix}__og_alt' in sub_items:
            content = re.sub(r'<meta property="og:image:alt" content=".*?"', f'<meta property="og:image:alt" content="{sub_items[f"{prefix}__og_alt"]}"', content, count=1)

        matches = list(pattern.finditer(content))
        for i in reversed(range(len(matches))):
            k = f'{prefix}__span_{i}'
            if k in sub_items:
                m = matches[i]
                content = content[:m.start(1)] + sub_items[k] + content[m.end(1):]

        with open(p, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully updated {p} with {len(sub_items)} items")

    subprocess.run(['python3', 'tools/verify.py'], cwd=ROOT)

def extract_core():
    """Extracts translatable text from core pages: kutuphane, hakkinda, bolgeler, psikopatoloji, yasal."""
    ensure_dirs()
    pattern = re.compile(r'<span(?:\s+[^>]*)?>((?:(?!<span).)*?)</span>', re.DOTALL)
    skip_exact = {'Instagram', '→', '←', '›', '●', 'The Folded', 'Mind', 'A', 'B', 'C'}

    def extract_file(rel_path, prefix):
        p = os.path.join(ROOT, rel_path)
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()
        items = {}
        m = re.search(r'<title>(.*?)</title>', content)
        if m: items[f'{prefix}__title'] = m.group(1).strip()
        m = re.search(r'<meta name="description" content="(.*?)"', content)
        if m: items[f'{prefix}__meta_desc'] = m.group(1).strip()
        m = re.search(r'<meta property="og:title" content="(.*?)"', content)
        if m: items[f'{prefix}__og_title'] = m.group(1).strip()
        m = re.search(r'<meta property="og:description" content="(.*?)"', content)
        if m: items[f'{prefix}__og_desc'] = m.group(1).strip()
        m = re.search(r'<meta property="og:image:alt" content="(.*?)"', content)
        if m: items[f'{prefix}__og_alt'] = m.group(1).strip()

        matches = list(pattern.finditer(content))
        for i, match in enumerate(matches):
            txt = match.group(1).strip()
            if not any(c.isalpha() for c in txt):
                continue
            if txt in skip_exact:
                continue
            if len(txt) <= 2 and not any(c.isalpha() for c in txt):
                continue
            items[f'{prefix}__span_{i}'] = txt
        return items

    # Task 5: kutuphane + hakkinda
    t5_items = {}
    t5_items.update(extract_file('site/es/kutuphane.html', 'kutuphane'))
    t5_items.update(extract_file('site/es/hakkinda.html', 'hakkinda'))

    # Task 6: bolgeler
    t6_items = {}
    t6_items.update(extract_file('site/es/bolgeler.html', 'bolgeler'))

    # Task 8: psikopatoloji + yasal
    t8_items = {}
    t8_items.update(extract_file('site/es/psikopatoloji.html', 'psikopatoloji'))
    t8_items.update(extract_file('site/es/yasal.html', 'yasal'))

    task5 = {
        "task_id": "core_kutuphane_hakkinda",
        "target": "site/es/kutuphane.html, site/es/hakkinda.html",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": t5_items
    }
    task6 = {
        "task_id": "core_bolgeler",
        "target": "site/es/bolgeler.html",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": t6_items
    }
    task8 = {
        "task_id": "core_psikopatoloji_yasal",
        "target": "site/es/psikopatoloji.html, site/es/yasal.html",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": t8_items
    }

    f5 = os.path.join(TASKS_PENDING, 'task_05_kutuphane_hakkinda.json')
    f6 = os.path.join(TASKS_PENDING, 'task_06_bolgeler.json')
    f8 = os.path.join(TASKS_PENDING, 'task_08_psiko_yasal.json')
    with open(f5, 'w', encoding='utf-8') as fp:
        json.dump(task5, fp, indent=2, ensure_ascii=False)
    with open(f6, 'w', encoding='utf-8') as fp:
        json.dump(task6, fp, indent=2, ensure_ascii=False)
    with open(f8, 'w', encoding='utf-8') as fp:
        json.dump(task8, fp, indent=2, ensure_ascii=False)
    print(f"Created task: {f5} ({len(t5_items)} items)")
    print(f"Created task: {f6} ({len(t6_items)} items)")
    print(f"Created task: {f8} ({len(t8_items)} items)")

def apply_core(done_file):
    """Applies translated items from core done file to HTML files."""
    fpath = os.path.join(TASKS_DONE, os.path.basename(done_file))
    if not os.path.exists(fpath):
        fpath = done_file
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        items = data.get('items', data)

    file_prefixes = {
        'kutuphane': 'site/es/kutuphane.html',
        'hakkinda': 'site/es/hakkinda.html',
        'bolgeler': 'site/es/bolgeler.html',
        'psikopatoloji': 'site/es/psikopatoloji.html',
        'yasal': 'site/es/yasal.html'
    }

    pattern = re.compile(r'<span(?:\s+[^>]*)?>((?:(?!<span).)*?)</span>', re.DOTALL)

    for prefix, rel_path in file_prefixes.items():
        sub_items = {k: v for k, v in items.items() if k.startswith(f'{prefix}__')}
        if not sub_items:
            continue
        p = os.path.join(ROOT, rel_path)
        with open(p, 'r', encoding='utf-8') as f:
            content = f.read()

        if f'{prefix}__title' in sub_items:
            content = re.sub(r'<title>.*?</title>', f'<title>{sub_items[f"{prefix}__title"]}</title>', content, count=1)
        if f'{prefix}__meta_desc' in sub_items:
            content = re.sub(r'<meta name="description" content=".*?"', f'<meta name="description" content="{sub_items[f"{prefix}__meta_desc"]}"', content, count=1)
        if f'{prefix}__og_title' in sub_items:
            content = re.sub(r'<meta property="og:title" content=".*?"', f'<meta property="og:title" content="{sub_items[f"{prefix}__og_title"]}"', content, count=1)
        if f'{prefix}__og_desc' in sub_items:
            content = re.sub(r'<meta property="og:description" content=".*?"', f'<meta property="og:description" content="{sub_items[f"{prefix}__og_desc"]}"', content, count=1)
        if f'{prefix}__og_alt' in sub_items:
            content = re.sub(r'<meta property="og:image:alt" content=".*?"', f'<meta property="og:image:alt" content="{sub_items[f"{prefix}__og_alt"]}"', content, count=1)

        matches = list(pattern.finditer(content))
        for i in reversed(range(len(matches))):
            k = f'{prefix}__span_{i}'
            if k in sub_items:
                m = matches[i]
                content = content[:m.start(1)] + sub_items[k] + content[m.end(1):]

        with open(p, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Successfully updated {p} with {len(sub_items)} items")

    subprocess.run(['python3', 'tools/verify.py'], cwd=ROOT)

def extract_ilaclar():
    """Extracts translatable text from site/es/data/es/ilaclar.js (12 medications + constants)."""
    ensure_dirs()
    script = """
    const fs = require('fs');
    global.window = {};
    let code = fs.readFileSync('site/es/data/es/ilaclar.js', 'utf8');
    code = code.replace('const EN =', 'global.EN_EXPORT =');
    code = code.replace('(function () {', 'global.RUN = function() {').replace('})();', '};');
    eval(code);
    global.RUN();
    const EN = global.EN_EXPORT;
    const out = {
      'CONST.G_SSRI': 'Antidepressants (SSRIs)',
      'CONST.G_AP': 'Antipsychotics',
      'CONST.G_ADHD': 'ADHD medications',
      'CONST.SGA': 'Second-generation antipsychotic',
      'CONST.SSRI_text': 'With the serotonin transporter (SERT) blocked, serotonin stays longer in the synapse: serotonin rises at the targets along the pathways leaving the raphe. SERT is densest in the raphe, thalamus, hypothalamus, striatum and amygdala (Beliveau et al., 2017). Emotional processing changes in the first week: the amygdala’s threat response falls before mood improves (Godlewska et al., 2012); the clinical response comes over weeks. [B]',
      'CONST.SSRI_hotTxt': 'where SERT is dense and serotonin rises most',
      'CONST.AP_COLD': 'where D2 (striatum) and 5-HT2A (cortex) receptors are blocked',
      'CONST.EPS_name': 'Movement side effects',
      'CONST.EPS_sub': 'Nigrostriatal pathway: SNc → putamen and caudate',
      'CONST.PRL_name': 'Prolactin',
      'CONST.PRL_sub': 'Tuberoinfundibular pathway: hypothalamus → pituitary',
      'CONST.H1_name': 'Sleepiness, appetite and weight',
      'CONST.H1_sub': 'Histamine (H1) and 5-HT2C: hypothalamus',
      'CONST.H1_coldTxt': 'the wakefulness and appetite center where H1 receptors are blocked'
    };

    for (const [drugId, data] of Object.entries(EN)) {
      if (drugId === 'guanfasin') continue; // already Spanish
      for (const [k, v] of Object.entries(data)) {
        if (k === 'grup' || k === 'sinif' || k === 'renk' || k === 'doz' || k === 'yariOmur' || k === 'reseptor' || k === 'etki') continue;
        if (typeof v === 'string') {
          out[drugId + '.' + k] = v;
        } else if (Array.isArray(v)) {
          v.forEach((item, i) => {
            if (typeof item === 'string') out[drugId + '.' + k + '.' + i] = item;
            else if (typeof item === 'object' && item !== null) {
              for (const [prop, val] of Object.entries(item)) {
                if (typeof val === 'string') out[drugId + '.' + k + '.' + i + '.' + prop] = val;
              }
            }
          });
        } else if (typeof v === 'object' && v !== null) {
          for (const [prop, val] of Object.entries(v)) {
            if (typeof val === 'string') out[drugId + '.' + k + '.' + prop] = val;
          }
        }
      }
    }
    console.log(JSON.stringify(out));
    """
    res = subprocess.run(['node', '-e', script], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0:
        raise RuntimeError("Failed to extract ilaclar: " + res.stderr)
    items = json.loads(res.stdout)

    task = {
        "task_id": "data_ilaclar_12_drugs",
        "target": "site/es/data/es/ilaclar.js",
        "rules": RULES,
        "glossary": GLOSSARY,
        "items": items
    }
    out_file = os.path.join(TASKS_PENDING, 'task_07_ilaclar.json')
    with open(out_file, 'w', encoding='utf-8') as f:
        json.dump(task, f, indent=2, ensure_ascii=False)
    print(f"Created task: {out_file} ({len(items)} items)")

def apply_ilaclar(done_file):
    """Applies translated items from tasks/done/task_07_ilaclar.json to site/es/data/es/ilaclar.js."""
    fpath = os.path.join(TASKS_DONE, os.path.basename(done_file))
    if not os.path.exists(fpath):
        fpath = done_file
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        items = data.get('items', data)

    patcher = """
    const fs = require('fs');
    const items = JSON.parse(process.argv[1]);
    global.window = {};
    let code = fs.readFileSync('site/es/data/es/ilaclar.js', 'utf8');
    code = code.replace('const EN =', 'global.EN_EXPORT =');
    code = code.replace('(function () {', 'global.RUN = function() {').replace('})();', '};');
    eval(code);
    global.RUN();
    const EN = global.EN_EXPORT;

    // Apply translations
    for (const [k, v] of Object.entries(items)) {
      if (k.startsWith('CONST.')) continue;
      const parts = k.split('.');
      const drugId = parts[0];
      if (!EN[drugId]) continue;
      if (parts.length === 2) {
        EN[drugId][parts[1]] = v;
      } else if (parts.length === 3) {
        if (Array.isArray(EN[drugId][parts[1]])) {
          EN[drugId][parts[1]][parseInt(parts[2])] = v;
        } else if (typeof EN[drugId][parts[1]] === 'object' && EN[drugId][parts[1]] !== null) {
          EN[drugId][parts[1]][parts[2]] = v;
        }
      } else if (parts.length === 4) {
        if (Array.isArray(EN[drugId][parts[1]])) {
          const idx = parseInt(parts[2]);
          if (EN[drugId][parts[1]][idx] && typeof EN[drugId][parts[1]][idx] === 'object') {
            EN[drugId][parts[1]][idx][parts[3]] = v;
          }
        }
      }
    }

    const g_ssri = items['CONST.G_SSRI'] || 'Antidepresivos (ISRS)';
    const g_ap = items['CONST.G_AP'] || 'Antipsicóticos';
    const g_adhd = items['CONST.G_ADHD'] || 'Medicamentos para el TDAH';
    const sga = items['CONST.SGA'] || 'Antipsicótico de segunda generación';
    const ssri_text = items['CONST.SSRI_text'] || 'Con el transportador de serotonina (SERT) bloqueado, la serotonina permanece más tiempo en la sinapsis... [B]';
    const ssri_hot = items['CONST.SSRI_hotTxt'] || 'donde el SERT es denso y la serotonina aumenta más';
    const ap_cold = items['CONST.AP_COLD'] || 'donde se bloquean los receptores D2 (estriado) y 5-HT2A (corteza)';
    const eps_name = items['CONST.EPS_name'] || 'Efectos secundarios motores';
    const eps_sub = items['CONST.EPS_sub'] || 'Vía nigroestriatal: SNc → putamen y caudado';
    const prl_name = items['CONST.PRL_name'] || 'Prolactina';
    const prl_sub = items['CONST.PRL_sub'] || 'Vía tuberoinfundibular: hipotálamo → hipófisis';
    const h1_name = items['CONST.H1_name'] || 'Somnolencia, apetito y peso';
    const h1_sub = items['CONST.H1_sub'] || 'Histamina (H1) y 5-HT2C: hipotálamo';
    const h1_cold = items['CONST.H1_coldTxt'] || 'el centro de vigilia y apetito donde se bloquean los receptores H1';

    const newCode = `/* Contenido en español: medicamentos (traducción de data/ilaclar.js). */
(function () {
  'use strict';
  const G_SSRI = ` + JSON.stringify(g_ssri) + `, G_AP = ` + JSON.stringify(g_ap) + `, G_ADHD = ` + JSON.stringify(g_adhd) + `, SGA = ` + JSON.stringify(sga) + `;
  const SSRI = {
    text: ` + JSON.stringify(ssri_text) + `,
    hotTxt: ` + JSON.stringify(ssri_hot) + `
  };
  const AP_COLD = ` + JSON.stringify(ap_cold) + `;
  const EPS = (text) => ({ id: 'eps', name: ` + JSON.stringify(eps_name) + `, sub: ` + JSON.stringify(eps_sub) + `, text });
  const PRL = (text, ek) => Object.assign({ id: 'prl', name: ` + JSON.stringify(prl_name) + `, sub: ` + JSON.stringify(prl_sub) + `, text }, ek || {});
  const H1 = (text) => ({ id: 'h1', name: ` + JSON.stringify(h1_name) + `, sub: ` + JSON.stringify(h1_sub) + `, text,
    coldTxt: ` + JSON.stringify(h1_cold) + ` });

  const EN = ` + JSON.stringify(EN, null, 2) + `;

  // Inyección de veriedades y fusión
  function merge(dst, src) {
    Object.keys(src).forEach((k) => {
      const v = src[k];
      if (Array.isArray(v) && Array.isArray(dst[k]) && v.some((x) => x && typeof x === 'object')) {
        v.forEach((x, i) => { const t = x.id ? dst[k].find((y) => y && y.id === x.id) : dst[k][i]; if (t) merge(t, x); });
      } else if (v && typeof v === 'object' && !Array.isArray(v) && dst[k] && typeof dst[k] === 'object') merge(dst[k], v);
      else dst[k] = Array.isArray(v) ? v.slice() : v;
    });
  }
  (window.ILACLAR || []).forEach((d) => { if (EN[d.id]) merge(d, EN[d.id]); });
})();
`;
    fs.writeFileSync('site/es/data/es/ilaclar.js', newCode, 'utf8');
    console.log('Successfully updated site/es/data/es/ilaclar.js');
    """
    res = subprocess.run(['node', '-e', patcher, json.dumps(items)], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0:
        raise RuntimeError("Failed to apply ilaclar: " + res.stderr)
    print(res.stdout.strip())
    subprocess.run(['python3', 'tools/verify.py'], cwd=ROOT)

def extract_pages(folder):
    """Extracts translatable text from HTML detail folders (ag, sistem, tani, ilac)."""
    ensure_dirs()
    pattern = re.compile(r'<(h[1-6]|p|li|a|summary)(?:\s+[^>]*?)?>((?:(?!<(?:h[1-6]|p|li|a|summary)).)*?)</\1>', re.DOTALL)
    skip_exact = {'Instagram', '→', '←', '›', '●', 'The Folded', 'Mind', 'A', 'B', 'C', 'Geri', 'Ana sayfa', 'Kütüphane', 'Home', 'Library', 'Newsletter', 'Community', 'About', 'Legal'}

    import glob
    files = sorted(glob.glob(os.path.join(ROOT, 'site', 'es', folder, '*.html')))

    def extract_file(fpath):
        prefix = f'{folder}_' + os.path.basename(fpath).replace('.html', '')
        with open(fpath, 'r', encoding='utf-8') as fp:
            c = fp.read()
        items = {}
        m = re.search(r'<title>(.*?)</title>', c)
        if m: items[f'{prefix}__title'] = m.group(1).strip()
        m = re.search(r'<meta name="description" content="(.*?)"', c)
        if m: items[f'{prefix}__meta_desc'] = m.group(1).strip()
        m = re.search(r'<meta property="og:title" content="(.*?)"', c)
        if m: items[f'{prefix}__og_title'] = m.group(1).strip()
        m = re.search(r'<meta property="og:description" content="(.*?)"', c)
        if m: items[f'{prefix}__og_desc'] = m.group(1).strip()
        m = re.search(r'<meta property="og:image:alt" content="(.*?)"', c)
        if m: items[f'{prefix}__og_alt'] = m.group(1).strip()

        matches = list(pattern.finditer(c))
        for i, match in enumerate(matches):
            txt = match.group(2).strip()
            if not any(ch.isalpha() for ch in txt):
                continue
            if txt in skip_exact:
                continue
            if len(txt) <= 2 and not any(ch.isalpha() for ch in txt):
                continue
            items[f'{prefix}__item_{i}'] = txt
        return items

    if folder == 'ag':
        part1_files = files[:4] # dan, dmn, fpn, lim
        part2_files = files[4:] # md, sal, smn, vis

        p1_items = {}
        for f in part1_files: p1_items.update(extract_file(f))
        p2_items = {}
        for f in part2_files: p2_items.update(extract_file(f))

        task1 = {
            "task_id": "pages_ag_part1",
            "target": "site/es/ag/ (dan, dmn, fpn, lim)",
            "rules": RULES,
            "glossary": GLOSSARY,
            "items": p1_items
        }
        task2 = {
            "task_id": "pages_ag_part2",
            "target": "site/es/ag/ (md, sal, smn, vis)",
            "rules": RULES,
            "glossary": GLOSSARY,
            "items": p2_items
        }
        f1 = os.path.join(TASKS_PENDING, 'task_09_ag_part1.json')
        f2 = os.path.join(TASKS_PENDING, 'task_09_ag_part2.json')
        with open(f1, 'w', encoding='utf-8') as fp: json.dump(task1, fp, indent=2, ensure_ascii=False)
        with open(f2, 'w', encoding='utf-8') as fp: json.dump(task2, fp, indent=2, ensure_ascii=False)
        print(f"Created task: {f1} ({len(p1_items)} items)")
        print(f"Created task: {f2} ({len(p2_items)} items)")

    elif folder == 'sistem':
        items = {}
        for f in files: items.update(extract_file(f))
        task = {
            "task_id": "pages_sistem_7_systems",
            "target": "site/es/sistem/ (7 systems)",
            "rules": RULES,
            "glossary": GLOSSARY,
            "items": items
        }
        fpath = os.path.join(TASKS_PENDING, 'task_10_sistem.json')
        with open(fpath, 'w', encoding='utf-8') as fp: json.dump(task, fp, indent=2, ensure_ascii=False)
        print(f"Created task: {fpath} ({len(items)} items)")

    elif folder in ('tani', 'ilac'):
        # Split in 2 parts each
        mid = len(files) // 2
        p1_files = files[:mid]
        p2_files = files[mid:]
        p1_items = {}
        for f in p1_files: p1_items.update(extract_file(f))
        p2_items = {}
        for f in p2_files: p2_items.update(extract_file(f))

        task1 = {
            "task_id": f"pages_{folder}_part1",
            "target": f"site/es/{folder}/ part 1",
            "rules": RULES,
            "glossary": GLOSSARY,
            "items": p1_items
        }
        task2 = {
            "task_id": f"pages_{folder}_part2",
            "target": f"site/es/{folder}/ part 2",
            "rules": RULES,
            "glossary": GLOSSARY,
            "items": p2_items
        }
        f1 = os.path.join(TASKS_PENDING, f'task_{folder}_part1.json')
        f2 = os.path.join(TASKS_PENDING, f'task_{folder}_part2.json')
        with open(f1, 'w', encoding='utf-8') as fp: json.dump(task1, fp, indent=2, ensure_ascii=False)
        with open(f2, 'w', encoding='utf-8') as fp: json.dump(task2, fp, indent=2, ensure_ascii=False)
        print(f"Created task: {f1} ({len(p1_items)} items)")
        print(f"Created task: {f2} ({len(p2_items)} items)")

def apply_pages(done_file):
    """Applies translated items from a pages done file to the corresponding HTML files."""
    fpath = os.path.join(TASKS_DONE, os.path.basename(done_file))
    if not os.path.exists(fpath):
        fpath = done_file
    with open(fpath, 'r', encoding='utf-8') as f:
        data = json.load(f)
        items = data.get('items', data)

    pattern = re.compile(r'<(h[1-6]|p|li|a|summary)(?:\s+[^>]*?)?>((?:(?!<(?:h[1-6]|p|li|a|summary)).)*?)</\1>', re.DOTALL)

    # Group items by file prefix
    prefixes = set(k.split('__')[0] for k in items.keys() if '__' in k)
    for prefix in prefixes:
        folder, filename = prefix.split('_', 1)
        target_path = os.path.join(ROOT, 'site', 'es', folder, f'{filename}.html')
        if not os.path.exists(target_path):
            continue

        with open(target_path, 'r', encoding='utf-8') as fp:
            content = fp.read()

        sub_items = {k: v for k, v in items.items() if k.startswith(f'{prefix}__')}
        if f'{prefix}__title' in sub_items:
            content = re.sub(r'<title>.*?</title>', f'<title>{sub_items[f"{prefix}__title"]}</title>', content, count=1)
        if f'{prefix}__meta_desc' in sub_items:
            content = re.sub(r'<meta name="description" content=".*?"', f'<meta name="description" content="{sub_items[f"{prefix}__meta_desc"]}"', content, count=1)
        if f'{prefix}__og_title' in sub_items:
            content = re.sub(r'<meta property="og:title" content=".*?"', f'<meta property="og:title" content="{sub_items[f"{prefix}__og_title"]}"', content, count=1)
        if f'{prefix}__og_desc' in sub_items:
            content = re.sub(r'<meta property="og:description" content=".*?"', f'<meta property="og:description" content="{sub_items[f"{prefix}__og_desc"]}"', content, count=1)
        if f'{prefix}__og_alt' in sub_items:
            content = re.sub(r'<meta property="og:image:alt" content=".*?"', f'<meta property="og:image:alt" content="{sub_items[f"{prefix}__og_alt"]}"', content, count=1)

        matches = list(pattern.finditer(content))
        for i in reversed(range(len(matches))):
            k = f'{prefix}__item_{i}'
            if k in sub_items:
                m = matches[i]
                content = content[:m.start(2)] + sub_items[k] + content[m.end(2):]

        # Update language container
        content = content.replace('<div lang="en">', '<div lang="es">')

        with open(target_path, 'w', encoding='utf-8') as fp:
            fp.write(content)
        print(f"Successfully updated {target_path} with {len(sub_items)} items")

    subprocess.run(['python3', 'tools/verify.py'], cwd=ROOT)

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 tools/task_manager.py [prepare-tanilar | apply-tanilar <file> | prepare-divan | apply-divan | prepare-index | apply-index | prepare-bulten | apply-bulten <file> | prepare-core | apply-core <file> | prepare-ilaclar | apply-ilaclar <file> | prepare-pages <folder> | apply-pages <file> | status]")
        sys.exit(1)

    cmd = sys.argv[1]
    if cmd == 'prepare-tanilar':
        extract_tanilar()
    elif cmd == 'apply-tanilar':
        if len(sys.argv) < 3:
            print("Usage: python3 tools/task_manager.py apply-tanilar tasks/done/<file>.json")
            sys.exit(1)
        apply_tanilar(sys.argv[2])
    elif cmd == 'prepare-divan':
        extract_divan()
    elif cmd == 'apply-divan':
        apply_divan()
    elif cmd == 'prepare-index':
        extract_index()
    elif cmd == 'apply-index':
        apply_index()
    elif cmd == 'prepare-bulten':
        extract_bulten()
    elif cmd == 'apply-bulten':
        if len(sys.argv) < 3:
            print("Usage: python3 tools/task_manager.py apply-bulten tasks/done/<file>.json")
            sys.exit(1)
        apply_bulten(sys.argv[2])
    elif cmd == 'prepare-core':
        extract_core()
    elif cmd == 'apply-core':
        if len(sys.argv) < 3:
            print("Usage: python3 tools/task_manager.py apply-core tasks/done/<file>.json")
            sys.exit(1)
        apply_core(sys.argv[2])
    elif cmd == 'prepare-ilaclar':
        extract_ilaclar()
    elif cmd == 'apply-ilaclar':
        if len(sys.argv) < 3:
            print("Usage: python3 tools/task_manager.py apply-ilaclar tasks/done/<file>.json")
            sys.exit(1)
        apply_ilaclar(sys.argv[2])
    elif cmd == 'prepare-pages':
        if len(sys.argv) < 3:
            print("Usage: python3 tools/task_manager.py prepare-pages [ag | sistem | tani | ilac]")
            sys.exit(1)
        extract_pages(sys.argv[2])
    elif cmd == 'apply-pages':
        if len(sys.argv) < 3:
            print("Usage: python3 tools/task_manager.py apply-pages tasks/done/<file>.json")
            sys.exit(1)
        apply_pages(sys.argv[2])
    elif cmd == 'status':
        # Show status
        subprocess.run(['python3', '-c', """
import os, re
def check_file(p):
    with open(p, 'r', encoding='utf-8', errors='ignore') as f: txt = f.read()
    en = len(re.findall(r'\\b(the|and|of|in|for|with|between|from|treatment|symptoms|disorder)\\b', txt, re.I))
    es = len(re.findall(r'\\b(el|la|los|las|de|en|por|con|entre|desde|tratamiento|síntomas|trastorno)\\b', txt, re.I))
    return en, es

print('=== DATA FILES STATUS ===')
for f in ['content.js', 'tanilar.js', 'ilaclar.js', 'divan.js', 'divan-sistem-metin.js']:
    p = os.path.join('site/es/data/es', f)
    en, es = check_file(p)
    print(f'{f:25} EN: {en:4} | ES: {es:4}')
"""], cwd=ROOT)
    else:
        print(f"Unknown command: {cmd}")

if __name__ == '__main__':
    main()
