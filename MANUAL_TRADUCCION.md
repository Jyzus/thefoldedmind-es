# Manual de traducción al español — The Folded Mind

Este documento explica **cómo** y **dónde** traducir el contenido restante de la web. Está pensado para que un modelo LLM pequeño (o una persona) pueda hacer la traducción de forma segura, sin romper la aplicación.

---

## 1. Estado actual (leer primero)

| Elemento | Estado |
|---|---|
| Clon original | `orig/` — intacto, no tocar |
| Sitio español | `site/` — en construcción |
| Infraestructura (i18n, navegación, idioma) | ✅ Hecha |
| Diccionario de interfaz `es/i18n-es.js` | ✅ Traducido |
| Las 104 regiones `es/data/es/regions-1…10.js` | ✅ Traducidas |
| **Redes + neurotransmisores + sistemas Panksepp** | ❌ `es/data/es/content.js` (inglés) |
| **Diagnósticos** | ❌ `es/data/es/tanilar.js` (inglés) |
| **Fármacos** | ❌ `es/data/es/ilaclar.js` (inglés) |
| **Pasajes del libro** | ❌ `es/data/es/divan.js` y `divan-sistem-metin.js` (inglés) |
| **155 páginas HTML** | ❌ (inglés) |

**Directorio base de trabajo:** `/home/julian-agama/Kaymer/thefoldedmind-es/site`

---

## 2. Cómo ver el sitio (servidor local)

Ya está levantado. En el navegador:

- **Atlas 3D:** http://localhost:8080/es/atlas.html
- **Portada:** http://localhost:8080/index.html

Si se cae, reiniciar:
```bash
cd /home/julian-agama/Kaymer/thefoldedmind-es/site
python3 -m http.server 8080 --bind 0.0.0.0
```

---

## 3. Reglas generales (CRÍTICAS — se aplican a todo)

1. **Traducir SOLO el texto en inglés** (lo que va entre comillas `"..."` o `'...'` en los JS, y el texto visible entre etiquetas en el HTML). Todo lo demás se deja exactamente igual.
2. **NO traducir identificadores**: nombres de variables, claves de objetos, `id`, `class`, `data-*`, nombres de archivo, rutas, URLs.
3. **Preservar los marcadores de evidencia** `[A]`, `[B]`, `[C]` tal cual, en su misma posición.
4. **Preservar las citas científicas** exactamente: nombres de autores y años. Ej.: `(Glasser et al., 2016)`, `Hoogman et al., 2017 (Lancet Psychiatry)`, `Shaw et al., 2007 (PNAS)`. **No traducir los nombres de autores ni las revistas.**
5. **Preservar números, unidades, siglas técnicas de imagen**: `fMRI`, `MRI`, `PET`, `EEG`, `7 T`, `BA 46`, `0.25 mm`, `d ≈ −0.14`, porcentajes.
6. **Preservar el orden y el número de elementos** de las listas/arrays. No añadir ni quitar ítems.
7. **Preservar las etiquetas HTML** y sus atributos en el HTML; solo se traduce el texto de dentro.
8. **El nombre de la marca "The Folded Mind" no se traduce** (aparece con `translate="no"`).
9. **Usar terminología consistente** (ver glosario en §6).

### Acrónimos de trastornos/técnicas (traducir al español cuando aparezcan como texto, no dentro de citas)

| Inglés | Español |
|---|---|
| ADHD | TDAH |
| OCD | TOC |
| ASD / autism | TEA / autismo |
| PTSD | TEPT |
| SSRIs | ISRS |
| CBT | TCC |
| DLPFC | CPFDL (corteza prefrontal dorsolateral) |
| rTMS / TMS | EMTr / EMT |
| MRI | RM |
| CSF | LCR |

---

## 4. Archivos a traducir y formato de cada uno

### Grupo A — Datos del atlas (JavaScript)

Estos archivos son objetos JavaScript. **Se traducen solo los valores de cadena (string)**, manteniendo claves, comillas, comas y estructura intactas.

#### A1. `es/data/es/content.js` (~70 KB)
Contiene 5 bloques:

1. **Constantes** `TH`, `CB`, `HCP`, `NEU` (cerca de la línea 15-17): son plantillas de "nota del modelo". Traducir el texto en inglés; conservar los nombres de atlas y las listas de áreas técnicas.
2. **`NOTES`** (objeto `id → "nota"`): traducir cada cadena. Conservar los códigos de área (`46, 9-46d, a9-46v, …`), los atlas (`Najdenovska et al. (2018)`, `SUIT`, `CIT168`, `HCP-MMP1.0`, `Harvard AAN v2.0`) y las citas.
3. **`NETS`** (redes `dmn`, `fpn`, `md`, `sal`, `dan`, `smn`, `vis`, `lim`): cada red tiene `name`, `short`, `summary`, `anatomy[]`, `functions[]`, `development[]`, `clinical[]`, `treatment[]`, `tests[]`, `links[]`. Traducir todo el texto.
4. **`FD`** (datos de flujo):
   - `CHEM`: claves `da`, `ne`, `5ht`, `ach`, `his`, `orx`, `glu`, `gaba`, `oxt`, `crf`, `opi`, `sp`, `hor` → **traducir solo los valores** (ej. `'Dopamine'` → `'Dopamina'`).
   - `PTS`: igual, traducir valores.
   - `NOTE`: claves tipo `'sys:RAGE'`, `'path:hpa'`, `'nt:glu'` → traducir los valores (son notas explicativas).
   - `LBL`: **las claves están en TURCO** (son las claves de búsqueda); traducir solo los **valores** al español. Ej.:
     ```js
     'ACTH (kanla) → adrenal korteks': 'ACTH (via the blood) → adrenal cortex',
     ```
     → dejar la clave igual y traducir el valor:
     ```js
     'ACTH (kanla) → adrenal korteks': 'ACTH (por la sangre) → corteza suprarrenal',
     ```
   - `NT`: sistemas de neurotransmisores (`da`, `5ht`, `ne`, `ach`, `his`, `orx`, `glu`, `gaba`): traducir `name`, `short`, `summary`, `anatomy[]`, `functions[]`, `clinical[]`, `treatment[]`, `links[]`.
   - `DV` (al final): sistemas de Panksepp (`SEEKING`, `RAGE`, `FEAR`, `LUST`, `CARE`, `PANIC/GRIEF`, `PLAY`): traducir los campos `feel`, `circuit`, `chem`, `clinic` y `systemsNote`. También `PATH` (nombres de vías y `chain`).

#### A2. `es/data/es/tanilar.js` (10 diagnósticos)
Objeto `EN = { dehb: {...}, okb: {...}, ... }`. Cada diagnóstico tiene:
`name`, `short`, `summary`, `kitapta[]` (solo el campo `snippet` es texto traducible; los `{}` vacíos se dejan), y `mercek` (lupa) con:
- `devre`: `title`, `text`, `modes` (`tipik`, `dehb`, etc. → `name` y `text`), `src`.
- `bulgular`: `text`, `gruplar[]` (cada grupo: `name`, `text`, `items[]` con `dtxt` y `txt`, `src`).
- `belirtiler`, `tedavi`: similares.

**Regla:** traducir todos los `name`, `title`, `text`, `txt`, `summary`, `snippet`. **NO tocar** `dtxt` (son valores estadísticos tipo `'d = −0.19'`), ni `src` (citas), ni los `id`. Preservar `[A]/[B]/[C]`.

#### A3. `es/data/es/ilaclar.js` (13 fármacos)
Objeto `EN = { fluoksetin: {...}, risperidon: {...}, ... }`. Cada fármaco: `name`, `grup`, `sinif`, `ozet`, `hedef`, `etki` (objeto), `cocuk[]`, `etkilesim[]`, `kaynak`.
También hay constantes al inicio (`G_SSRI`, `SSRI`, `AP_COLD`, `EPS`, `PRL`, `H1`) que contienen texto.
**Regla:** traducir los strings; conservar `name` de fármacos en su forma española habitual (ej. `Fluoxetine` → `Fluoxetina`), conservar `grup`/`sinif` traducidos, conservar `kaynak` (citas), y **preservar el orden y número de ítems** de `cocuk[]` y `etkilesim[]`.

#### A4. `es/data/es/divan.js` (pasajes del libro)
Objeto `E = { pag: {...}, amygdala: {...}, ... }`. Cada entrada: `title`, `clinic`, `role`, `links`, `where`, `note`. Traducir todos los valores. Conservar los nombres de capítulos (`Chapter 6`, `Chapter 10`), figuras (`Figure 6.1`) y citas.

#### A5. `es/data/es/divan-sistem-metin.js` (sistemas de Panksepp en el libro)
Objeto `EN = { GIRIS: [...], SEEKING: [...], RAGE: [...], ... }`. Cada sistema es un array de objetos `{ baslik: "...", p: ["...", "..."] }`. Traducir `baslik` y cada string de `p[]`. Preservar el orden y número de párrafos.

---

### Grupo B — Páginas HTML (155 archivos)

Son HTML estáticos con el texto en inglés dentro de las etiquetas. **Se traduce solo el texto visible y los atributos de texto** (`title`, `alt`, `aria-label`, `content` de los meta), conservando todo el marcado.

#### B1. Portada — `index.html`
Traducir:
- `<title>`, `meta name="description"`, `og:title`, `og:description`, `og:image:alt`.
- Todo el texto visible del `<body>`.
- Los `alt` y `aria-label` que estén en inglés.
- **Además**, en el JavaScript inline hay restos del sistema bilingüe que deben simplificarse:
  - Botón copiar: `s.textContent = en ? 'Copied' : 'Kopyalandı';` → `s.textContent = 'Copiado';`
  - Las líneas con `en ? 'data-alt-en' : 'data-alt-tr'` y similares → usar directamente el valor en español o el atributo `data-alt-*` en español.
  - `I18N.setLang(...)` en el atajo de teclado `l` → eliminar.

#### B2. Páginas principales — `es/atlas.html`, `es/kutuphane.html`, `es/bolgeler.html`, `es/psikopatoloji.html`, `es/bulten.html`, `es/yasal.html`, `es/hakkinda.html`
- `es/atlas.html`: su interfaz ya se traduce vía `i18n-es.js` (no tocar los textos turcos que están en el HTML; **solo traducir el `<title>`** si aún está en inglés). En la práctica, `es/atlas.html` ya está listo salvo verificación.
- Las demás: traducir `<title>`, metadescripción, JSON-LD (`name`, `description`, `audienceType`, etc.) y todo el texto visible del cuerpo.

#### B3. Páginas de región — `es/bolge/*.html` (104 archivos)
Cada página tiene secciones fijas. Traducir:
- `<title>`, `meta description`, JSON-LD completo (nombres, descripciones).
- Texto visible: encabezados (`Anatomy`, `Functions`, `Substructures`, …), listas `<li>`, párrafos.
- **Conservar** `<span class="ba">`, `<span class="ev" title="...">A/B/C</span>`, enlaces `<a href>`, y los `href`/`id` de anclas (`#en-anatomi`, etc.).
- El breadcrumb (`Home › Library › Regions › …`) y botones (`Open in the 3D atlas`, `All regions`, `Back`).

#### B4. Redes / sistemas / diagnósticos / fármacos / boletines
- `es/ag/*.html` (8), `es/sistem/*.html` (7), `es/tani/*.html` (10), `es/ilac/*.html` (13), `es/bulten/*.html` (5 + `es/bulten.html`).
- Misma regla: traducir título, meta, JSON-LD y texto visible; conservar marcado, enlaces, `[A]/[B]/[C]`, citas.
- En las páginas de boletín hay JavaScript inline con `document.documentElement.lang === 'en'` y textos de botón copiar → simplificar a español ("Copiado", "Menú", etc.).

---

## 5. Orden recomendado de trabajo

1. `es/data/es/content.js` (es el más grande y alimenta las capas de redes/neurotransmisores/sistemas del atlas).
2. `es/data/es/tanilar.js` y `es/data/es/ilaclar.js`.
3. `es/data/es/divan.js` y `es/data/es/divan-sistem-metin.js`.
4. Portada `index.html`.
5. Páginas principales `es/*.html`.
6. `es/bolge/*.html` (104), `es/ag/*`, `es/sistem/*`, `es/tani/*`, `es/ilac/*`, `es/bulten/*`.

---

## 6. Glosario de términos (usar SIEMPRE estas formas)

| Inglés | Español |
|---|---|
| brain | cerebro |
| brainstem | tronco del encéfalo |
| cortex | corteza |
| prefrontal cortex | corteza prefrontal |
| anterior cingulate cortex | corteza cingulada anterior (CCA) |
| amygdala | amígdala |
| hippocampus | hipocampo |
| basal ganglia | ganglios basales |
| thalamus | tálamo |
| hypothalamus | hipotálamo |
| cerebellum | cerebelo |
| white matter | sustancia blanca |
| gray matter | sustancia gris |
| network | red |
| pathway | vía |
| neurotransmitter | neurotransmisor |
| default mode network | red neuronal por defecto (RND) |
| salience network | red de saliencia |
| working memory | memoria de trabajo |
| executive function | función ejecutiva |
| reward | recompensa |
| punishment | castigo |
| fear | miedo |
| threat | amenaza |
| stress | estrés |
| seizure | crisis (epiléptica) |
| stroke | ictus |
| disorder | trastorno |
| diagnosis | diagnóstico |
| treatment | tratamiento |
| medication / drug | medicamento / fármaco |
| side effect | efecto secundario |
| dose | dosis |
| evidence | evidencia |
| lesion | lesión |
| assessment | evaluación |
| development | desarrollo |
| clinical | clínico/clínica |
| outcome | resultado |
| trial | ensayo |
| sham-controlled | controlado con placebo |
| deep brain stimulation | estimulación cerebral profunda (ECP) |
| spinal cord | médula espinal |
| pituitary gland | hipófisis / glándula hipófisis |
| dopamine | dopamina |
| noradrenaline | noradrenalina |
| serotonin | serotonina |
| acetylcholine | acetilcolina |
| histamine | histamina |
| glutamate | glutamato |
| GABA | GABA |
| oxytocin | oxitocina |
| vasopressin | vasopresina |
| cortisol | cortisol |
| prolactin | prolactina |

---

## 7. Cómo verificar cada cambio

**JavaScript (sintaxis):**
```bash
node --check es/data/es/content.js
node --check es/data/es/tanilar.js
node --check es/data/es/ilaclar.js
node --check es/data/es/divan.js
node --check es/data/es/divan-sistem-metin.js
```
Debe responder sin errores.

**Visual:** recargar la página en el navegador (servidor en §2) y comprobar que el atlas y las páginas se ven en español y sin errores de consola.

**Reglas de integridad (muy importantes):**
- No cambiar el número de elementos de los arrays.
- No eliminar ni duplicar `[A]/[B]/[C]`.
- No alterar claves de objetos ni nombres de archivo.
- No cambiar comillas ni comas (los archivos deben seguir siendo JavaScript válido).

---

## 8. Checklist final por archivo

- [ ] `content.js` traducido y `node --check` OK
- [ ] `tanilar.js` traducido y `node --check` OK
- [ ] `ilaclar.js` traducido y `node --check` OK
- [ ] `divan.js` traducido y `node --check` OK
- [ ] `divan-sistem-metin.js` traducido y `node --check` OK
- [ ] `index.html` traducido (incluye botón "Copiado")
- [ ] 7 páginas principales traducidas
- [ ] 104 páginas `es/bolge/*.html` traducidas
- [ ] 8 `es/ag/*`, 7 `es/sistem/*`, 10 `es/tani/*`, 13 `es/ilac/*` traducidas
- [ ] 6 `es/bulten/*.html` traducidas
- [ ] Navegación y atlas verificados en el navegador
