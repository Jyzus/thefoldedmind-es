import os
import sys
import re


def es_texto_traducible(line):
    # Busca texto inglés "fácil" y patrones clave centrales del sitio (puedes mejorar)
    palabras_clave = [
        'the ', 'and ', 'of ', 'is ', 'in ', 'for ', 'to ', 'that ', 'by ',
        'with ', 'between ', 'from ', 'study', 'results', 'findings', 'may ',
        'network', 'brain', 'cortex', 'treatment', 'symptoms', 'diagnosis', 'disorder',
        'risk', 'side effect', 'function', 'structure', 'neuro', 'psych', 'lateral', 'medial', 'frontal', 'default mode',
        'depression', 'schizophrenia', 'ADHD', 'autism', 'anxiety', 'cognitive',
    ]
    for w in palabras_clave:
        if w.lower() in line.lower():
            return True
    # Párrafos largos con muchas palabras seguidas en inglés
    if re.search(r'[a-z]{6,}\s+[a-z]{6,}', line.lower()):
        return True
    return False

def revisar_archivo_html(ruta):
    pendientes = 0
    with open(ruta, encoding='utf-8') as f:
        for line in f:
            if es_texto_traducible(line):
                pendientes += 1
    return pendientes

def main(directorio):
    htmls = []
    for root, dirs, files in os.walk(directorio):
        for f in files:
            if f.endswith('.html'):
                htmls.append(os.path.join(root, f))
    report = []
    for ruta in htmls:
        pendientes = revisar_archivo_html(ruta)
        report.append((ruta, pendientes))
    # Mostrar resumen
    incompletos = [r for r in report if r[1] > 0]
    print(f'Archivos HTML con texto sin traducir: {len(incompletos)} de {len(htmls)}\n')
    for r in incompletos:
        print(f'{r[0]}: {r[1]} posibles líneas pendientes')
    return 0 if len(incompletos) == 0 else 1

if __name__ == '__main__':
    sys.exit(main(sys.argv[1] if len(sys.argv)>1 else 'site'))
