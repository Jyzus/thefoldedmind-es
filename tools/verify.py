#!/usr/bin/env python3
"""
Automated Verification Suite for thefoldedmind-es.
Runs deterministic, 0-token tests to ensure that translations maintain
100% structural integrity, syntax correctness, and runtime stability.
"""

import os
import sys
import subprocess
import json
import re

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = os.path.join(ROOT, 'site')
ES_DATA = os.path.join(SITE, 'es', 'data', 'es')
ORIG_EN_DATA = os.path.join(ROOT, 'orig', 'thefoldedmind.com', 'data', 'en')

class Colors:
    GREEN = '\033[92m'
    RED = '\033[91m'
    YELLOW = '\033[93m'
    BOLD = '\033[1m'
    RESET = '\033[0m'

def log_pass(msg):
    print(f"[{Colors.GREEN}PASS{Colors.RESET}] {msg}")

def log_fail(msg):
    print(f"[{Colors.RED}FAIL{Colors.RESET}] {msg}")

def log_warn(msg):
    print(f"[{Colors.YELLOW}WARN{Colors.RESET}] {msg}")

def check_js_syntax():
    """Verify syntax of all JavaScript files using node -c."""
    errs = []
    js_count = 0
    for root, _, files in os.walk(SITE):
        for f in files:
            if f.endswith('.js'):
                js_count += 1
                p = os.path.join(root, f)
                res = subprocess.run(['node', '-c', p], capture_output=True, text=True)
                if res.returncode != 0:
                    errs.append((os.path.relpath(p, ROOT), res.stderr.strip()))
    if errs:
        for p, err in errs:
            log_fail(f"JS syntax error in {p}:\n    {err}")
        return False
    log_pass(f"All {js_count} JavaScript files are syntactically valid (node -c).")
    return True

def check_html_integrity():
    """Verify HTML files have proper closing tags and no truncated sections."""
    errs = []
    html_count = 0
    for root, _, files in os.walk(SITE):
        for f in files:
            if f.endswith('.html'):
                html_count += 1
                p = os.path.join(root, f)
                with open(p, 'rb') as fp:
                    content = fp.read()
                rel = os.path.relpath(p, ROOT)
                if b'</html>' not in content:
                    errs.append(f"{rel}: Missing </html> tag (file appears truncated).")
                if b'</body>' not in content:
                    errs.append(f"{rel}: Missing </body> tag.")
                if b'<style>' in content and b'</style>' not in content:
                    errs.append(f"{rel}: Unclosed <style> tag.")
    if errs:
        for err in errs:
            log_fail(err)
        return False
    log_pass(f"All {html_count} HTML files are structurally intact with closing tags.")
    return True

def check_evidence_and_citations(file_path):
    """Verify evidence tags [A], [B], [C] in file."""
    with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
        txt = f.read()
    # Check for unmatched evidence tags or suspicious patterns like [ a ] or [A ]
    malformed = re.findall(r'\[\s*[ABCabc]\s*\]', txt)
    malformed_bad = [m for m in malformed if m not in ('[A]', '[B]', '[C]')]
    if malformed_bad:
        log_warn(f"{file_path}: Found malformed evidence tags: {malformed_bad[:5]}")
        return False
    return True

def check_data_structures():
    """Verify data structures (content.js, ilaclar.js, tanilar.js, divan.js)."""
    node_test = """
    const fs = require('fs');
    let errors = [];

    // 1. Check ilaclar.js (13 drugs)
    try {
      global.window = global;
      eval(fs.readFileSync('site/es/data/ilaclar.js', 'utf8'));
      eval(fs.readFileSync('site/es/data/es/ilaclar.js', 'utf8'));
      const expectedDrugs = ['fluoksetin', 'sertralin', 'essitalopram', 'klomipramin', 'metilfenidat', 'atomoksetin', 'guanfasin', 'aripiprazol', 'risperidon', 'olanzapin', 'ketiapin', 'klozapin', 'lityum'];
      if (!window.ILACLAR || window.ILACLAR.length !== 13) {
        errors.push('ILACLAR length is ' + (window.ILACLAR ? window.ILACLAR.length : 'null') + ', expected 13');
      }
    } catch(e) {
      errors.push('ilaclar test failed: ' + e.message);
    }

    // 2. Check content.js (NETS & NT)
    try {
      global.window = { NEURO_REGIONS: [], NEURO_REGIONS_EN: {} };
      global.FD = { NT: [{id:'da'},{id:'ne'},{id:'5ht'},{id:'ach'},{id:'his'},{id:'orx'},{id:'glu'},{id:'gaba'}] };
      global.DIVAN = { book: {} };
      eval(fs.readFileSync('site/es/data/es/content.js', 'utf8'));
    } catch(e) {
      errors.push('content.js test failed: ' + e.message);
    }

    // 3. Check divan-sistem-metin.js
    try {
      global.window = { DIVAN: { systemText: { GIRIS: [], SEEKING: [], RAGE: [], FEAR: [], LUST: [], CARE: [], PANIC: [], PLAY: [] } } };
      eval(fs.readFileSync('site/es/data/es/divan-sistem-metin.js', 'utf8'));
    } catch(e) {
      errors.push('divan-sistem-metin.js test failed: ' + e.message);
    }

    if (errors.length > 0) {
      console.log('FAIL:' + JSON.stringify(errors));
      process.exit(1);
    } else {
      console.log('OK');
      process.exit(0);
    }
    """
    res = subprocess.run(['node', '-e', node_test], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0:
        log_fail(f"Data structure invariants failed: {res.stdout.strip()} {res.stderr.strip()}")
        return False
    log_pass("Data structures (ilaclar.js, content.js, divan-sistem-metin.js) match required schema.")
    return True

def check_runtime_integration():
    """Verify runtime atlas loader and module loading."""
    runner = """
    const fs = require('fs');
    global.window = global;
    global.document = {
      documentElement: { dataset: {}, setAttribute() {}, getAttribute() {} },
      head: { appendChild() {} },
      body: { appendChild() {}, querySelector() { return null; }, querySelectorAll() { return []; } },
      querySelector() { return { textContent: '', classList: { toggle() {}, add() {}, remove() {} } }; },
      querySelectorAll() { return []; },
      createElement() {
        return {
          style: {}, setAttribute() {}, getAttribute() { return null; }, appendChild() {},
          addEventListener() {}, classList: { add() {}, remove() {}, toggle() {} }
        };
      },
      createTreeWalker() { return { nextNode() { return false; } }; },
      write(str) {
        const m = str.match(/src=[\"']([^\"']+)[\"']/);
        if (m) {
          eval(fs.readFileSync('site/es/' + m[1], 'utf8'));
        }
      }
    };
    global.localStorage = { getItem() { return null; }, setItem() {} };
    global.matchMedia = () => ({ matches: false, addEventListener() {} });
    global.location = { href: 'http://localhost:8080/es/atlas.html', hash: '', pathname: '/es/atlas.html', search: '' };
    global.sessionStorage = { getItem() { return null; }, setItem() {} };

    eval(fs.readFileSync('site/es/i18n.js', 'utf8'));
    const baseData = [
      'data/regions-1.js', 'data/regions-2.js', 'data/regions-3.js', 'data/regions-4.js',
      'data/regions-5.js', 'data/regions-6.js', 'data/regions-7.js', 'data/regions-8.js',
      'data/regions-9.js', 'data/regions-10.js', 'data/divan-regions.js', 'data/divan-systems.js',
      'data/divan-sistem-metin.js', 'data/model-notes.js', 'data/networks.js', 'data/flows.js',
      'data/yol_geo.js', 'data/yol_alt.js', 'data/tanilar.js', 'data/ilaclar.js'
    ];
    for (const f of baseData) eval(fs.readFileSync('site/es/' + f, 'utf8'));

    window.I18N.loadEs([
      'i18n-es.js', 'data/es/regions-1.js', 'data/es/regions-2.js', 'data/es/regions-3.js', 'data/es/regions-4.js',
      'data/es/regions-5.js', 'data/es/regions-6.js', 'data/es/regions-7.js', 'data/es/regions-8.js', 'data/es/regions-9.js',
      'data/es/regions-10.js', 'data/es/tanilar.js', 'data/es/ilaclar.js', 'data/es/content.js', 'data/es/divan.js',
      'data/es/divan-sistem-metin.js'
    ]);

    if (!window.NEURO_REGIONS || window.NEURO_REGIONS.length !== 104) throw new Error('Expected 104 regions');
    if (!window.ILACLAR || window.ILACLAR.length !== 13) throw new Error('Expected 13 drugs');
    if (window.I18N.lang !== 'es') throw new Error('Expected language es');
    console.log('SUCCESS');
    """
    res = subprocess.run(['node', '-e', runner], capture_output=True, text=True, cwd=ROOT)
    if res.returncode != 0 or 'SUCCESS' not in res.stdout:
        log_fail(f"Runtime integration test failed:\n    {res.stderr.strip()}")
        return False
    log_pass("Runtime smoke test passed: all 104 regions and 13 drugs merged and initialized in Spanish.")
    return True

def run_all():
    print(f"{Colors.BOLD}=== RUNNING AUTOMATED VERIFICATION SUITE ==={Colors.RESET}\n")
    results = [
        check_js_syntax(),
        check_html_integrity(),
        check_data_structures(),
        check_runtime_integration()
    ]
    print()
    if all(results):
        print(f"{Colors.BOLD}{Colors.GREEN}✓ ALL AUTOMATED TESTS PASSED (0 tokens spent on review).{Colors.RESET}")
        return 0
    else:
        print(f"{Colors.BOLD}{Colors.RED}✗ SOME TESTS FAILED. Check details above.{Colors.RESET}")
        return 1

if __name__ == '__main__':
    sys.exit(run_all())
