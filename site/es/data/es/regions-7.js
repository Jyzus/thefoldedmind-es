/* Textos de regiones en español 7/8 (regions-7.js: núcleos CIT168 y subestructuras). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

sn: {
  name: "Sustancia negra", short: "SN",
  summary: "La “sustancia negra” del mesencéfalo: formada por la compacta, que alimenta el movimiento y el aprendizaje de hábitos con dopamina, y la reticulada, que vehicula la salida de los ganglios basales.",
  anatomy: [
    "A ambos lados del suelo del mesencéfalo, dorsal al pedúnculo cerebral y lateral al ATV; oscura porque sus neuronas contienen neuromelanina.",
    "Dos partes: la pars compacta dorsal (SNc; neuronas dopaminérgicas) y la pars reticulata ventral (SNr; neuronas de salida GABAérgicas).",
    "La SNc proyecta al estriado dorsal (vía nigroestriatal); la SNr al tálamo (VA/VL y mediodorsal), colículo superior y PPN.",
    "Irrigación: ramas de la arteria cerebral posterior."
  ],
  functions: [
    "SNc: aporta dopamina al estriado dorsal, apoyando el inicio y la velocidad del movimiento y el aprendizaje motor.",
    "Aprendizaje de hábitos y habilidades: la señal de dopamina en el estriado dorsal ayuda a que las acciones se automaticen.",
    "SNr: junto con el GPi, el núcleo de salida de los ganglios basales; frena tónicamente el tálamo y el colículo superior, y el freno se levanta para el movimiento deseado.",
    "Movimientos oculares: la vía SNr → colículo superior controla las sacadas voluntarias."
  ],
  tests: [
    "Exploración neurológica: bradicinesia, rigidez, temblor, postura (signos extrapiramidales)",
    "Escalas de trastornos del movimiento: Simpson-Angus (parkinsonismo farmacológico), AIMS",
    "Imagen del transportador de dopamina (DaT-SPECT)",
    "RM sensible a neuromelanina: la señal de la SN se relaciona con la capacidad de liberación de dopamina estriatal; en la esquizofrenia y en personas con alto riesgo clínico de psicosis, una mayor señal se relaciona con la gravedad de los síntomas (Cassidy et al., 2019). Un marcador de dopamina sin radiación ni procedimiento invasivo; aún en fase de investigación. [C]"
  ],
  development: [
    "Las neuronas dopaminérgicas se forman en el suelo del mesencéfalo en la vida embrionaria; las conexiones nigroestriatales se establecen antes del nacimiento.",
    "El pigmento neuromelanina se acumula con la edad; en niños la sustancia negra no se ve tan oscura como en adultos.",
    "En estudios posmortem humanos, la densidad de receptores dopaminérgicos estriatales alcanza su máximo en la infancia y luego desciende."
  ],
  clinical: [
    "Efectos secundarios extrapiramidales de los antipsicóticos (distonía aguda, acatisia, parkinsonismo): bloqueo D2 en la vía nigroestriatal; los niños y adolescentes tienen mayor riesgo de distonía aguda.",
    "Síndrome de Tourette y trastornos de tics: la hipótesis de hipersensibilidad dopaminérgica; los antagonistas D2 y los agonistas parciales (aripiprazol) reducen los tics.",
    "TDAH: los estimulantes elevan la dopamina estriatal; se ha descrito mayor ecogenicidad de la SN en la ecografía transcraneal en niños con TDAH (Romanos et al., 2010).",
    "Distonía sensible a dopa (enfermedad de Segawa): distonía y alteración de la marcha en la infancia que empeoran durante el día; respuesta marcada a dosis bajas de levodopa.",
    "Síndrome neuroléptico maligno: un cuadro potencialmente mortal ligado al bloqueo dopaminérgico (rigidez, hipertermia, inestabilidad autonómica)."
  ],
  treatment: [
    "Distonía aguda inducida por antipsicóticos: un anticolinérgico (biperideno) o difenhidramina; el riesgo es mayor en adolescentes y varones jóvenes. Para el parkinsonismo, reducción de dosis o un anticolinérgico; para la acatisia, propranolol. [A]",
    "Síndrome neuroléptico maligno: una urgencia; suspender de inmediato el antipsicótico y dar cuidados de soporte intensivos (líquidos, enfriamiento). En casos graves se usan dantroleno o bromocriptina; la evidencia de estos fármacos proviene de series de casos. [B]",
    "Distonía sensible a dopa (Segawa): respuesta espectacular y duradera a dosis bajas de levodopa; se recomienda una prueba de levodopa en la distonía infantil inexplicada. [A]"
  ],
  lesion: [
    "Pérdida de neuronas de la SNc: enfermedad de Parkinson (bradicinesia, rigidez, temblor de reposo); los síntomas aparecen una vez perdida la mayoría de las neuronas.",
    "Toxicidad por MPTP: daño selectivo de la SNc y parkinsonismo."
  ],
  links: [
    "SNc → estriado dorsal (vía dopaminérgica nigroestriatal)",
    "Estriado → SNr (vía directa, GABA)",
    "SNr → tálamo VA/VL y mediodorsal, colículo superior, PPN",
    "Núcleo subtalámico → SNr (glutamato)",
    "Dopamina (receptores D1, D2), GABA"
  ]
},

snc: {
  name: "Sustancia negra pars compacta", short: "SNc",
  summary: "Fuente de la vía dopaminérgica nigroestriatal: apoya el movimiento y el aprendizaje de hábitos alimentando el estriado dorsal.",
  anatomy: [
    "La parte dorsal de la SN; neuronas dopaminérgicas densamente empaquetadas y con neuromelanina (grupo celular A9).",
    "Continua medialmente con el ATV (A10)."
  ],
  functions: [
    "Dopamina al estriado dorsal: inicio y escalado del movimiento.",
    "Señales de error de predicción de recompensa y aprendizaje de habilidades/hábitos."
  ],
  clinical: [
    "El grupo de células dopaminérgicas afectado más temprano y con mayor gravedad en la enfermedad de Parkinson.",
    "El bloqueo nigroestriatal D2 por los antipsicóticos subyace a los efectos secundarios extrapiramidales."
  ]
},

snr: {
  name: "Sustancia negra pars reticulata", short: "SNr",
  summary: "Uno de los dos núcleos de salida de los ganglios basales, junto con el GPi: neuronas GABAérgicas que frenan el tálamo y el colículo superior.",
  anatomy: [
    "La parte ventral de la SN; neuronas GABAérgicas laxamente dispuestas junto al pedúnculo cerebral.",
    "Recibe aferencias del estriado (vía directa) y del núcleo subtalámico."
  ],
  functions: [
    "Inhibición tónica del tálamo (VA/VL, mediodorsal) y del colículo superior; la inhibición se levanta para el movimiento o la sacada deseados.",
    "Descrita en modelos animales como una compuerta que controla la propagación de las crisis."
  ],
  clinical: [
    "El desequilibrio en la salida de los ganglios basales contribuye a trastornos del movimiento como la distonía y la corea."
  ]
},

gpe: {
  name: "Globo pálido, segmento externo", short: "GPe",
  summary: "La estación de relevo de la vía indirecta: ajusta la supresión de movimientos no deseados frenando el núcleo subtalámico.",
  anatomy: [
    "La parte externa del núcleo lenticular, junto al putamen; separada del GPi por la lámina medular medial.",
    "Recibe aferencia GABAérgica del estriado (vía indirecta, neuronas encefalinérgicas); conectada recíprocamente con el núcleo subtalámico."
  ],
  functions: [
    "Vía indirecta: estriado → GPe → núcleo subtalámico → GPi/SNr.",
    "El bucle GPe–NST regula los ritmos de los ganglios basales (oscilaciones beta)."
  ],
  clinical: [
    "El exceso de ritmo beta en el bucle GPe–NST se observa en la enfermedad de Parkinson."
  ]
},

gpi: {
  name: "Globo pálido, segmento interno", short: "GPi",
  summary: "El principal núcleo de salida de los ganglios basales: frena el tálamo; una diana de estimulación cerebral profunda en la distonía y el síndrome de Tourette refractario.",
  anatomy: [
    "La parte más medial del núcleo lenticular; junto al brazo posterior de la cápsula interna.",
    "Recibe aferencias de la vía directa (estriado) y del núcleo subtalámico (vías indirecta e hiperdirecta)."
  ],
  functions: [
    "Salida GABAérgica tónica al tálamo VA/VL; cuando la vía directa lo inhibe, el tálamo se libera y comienza el movimiento deseado.",
    "Su parte ventromedial (límbica) participa en circuitos relacionados con la motivación."
  ],
  clinical: [
    "Estimulación cerebral profunda del GPi en la distonía (especialmente DYT1) y el síndrome de Tourette refractario.",
    "Afectación palidal en el kernícterus, la intoxicación por monóxido de carbono y el PKAN."
  ]
},

stn: {
  name: "Núcleo subtalámico", short: "NST",
  summary: "El botón de “parada” de los ganglios basales: recibe señales rápidas de la corteza por la vía hiperdirecta y frena brevemente movimientos y decisiones.",
  anatomy: [
    "Un pequeño núcleo en forma de lente en el diencéfalo ventral, debajo del tálamo y medial a la cápsula interna; la sustancia negra queda justo debajo.",
    "El único núcleo glutamatérgico (excitador) de los ganglios basales.",
    "Aferencias: corteza (vía hiperdirecta: GFI derecho, pre-AMS, corteza motora) y GPe; salidas: GPi, SNr y GPe.",
    "Subregiones motora, asociativa y límbica de dorsolateral a ventromedial."
  ],
  functions: [
    "Inhibición de respuesta: transmisión rápida de la señal de “parada” (GFI derecho → NST).",
    "Frenado durante el conflicto de decisión: eleva el umbral de decisión cuando las opciones se vuelven difíciles (Frank, 2006).",
    "Suprime movimientos no deseados excitando el GPi/SNr por las vías indirecta e hiperdirecta."
  ],
  tests: [
    "Tarea Stop-Signal (tiempo de reacción de parada)",
    "Tarea Go/No-Go",
    "Exploración de trastornos del movimiento (balismo, corea)"
  ],
  development: [
    "La inhibición de respuesta (tiempo de reacción de parada) se desarrolla notablemente de la infancia a la adolescencia; ligada a la maduración de la red fronto-subtalámica."
  ],
  clinical: [
    "TDAH: dificultad en la inhibición de respuesta; se han descrito diferencias en la red GFI derecho–NST.",
    "TOC: la estimulación cerebral profunda del NST se ha estudiado en el TOC refractario del adulto (Mallet et al., 2008).",
    "En la enfermedad de Parkinson, la estimulación cerebral profunda del NST mejora los síntomas motores; en algunos pacientes aparecen impulsividad e hipomanía como efectos secundarios."
  ],
  treatment: [
    "En la enfermedad de Parkinson, la estimulación cerebral profunda del NST reduce los síntomas motores y las necesidades de medicación; en algunos pacientes pueden aparecer impulsividad e hipomanía, lo que muestra el papel de la función de “parada” del NST en la toma de decisiones. [A]",
    "En el TOC refractario, la estimulación del NST redujo los síntomas en un ensayo cruzado controlado con placebo (Mallet et al., 2008); adultos, una opción de última línea. [B]",
    "En el TDAH, el metilfenidato aumenta la activación del GFI derecho durante tareas de inhibición de respuesta (metaanálisis de fMRI); la evidencia humana de un efecto correspondiente a nivel del NST es limitada. [C]"
  ],
  lesion: [
    "Hemibalismo contralateral: movimientos involuntarios bruscos y de lanzamiento del brazo y la pierna (clásicamente por un infarto del NST)."
  ],
  links: [
    "Corteza (GFI derecho, pre-AMS, corteza motora) → NST (vía hiperdirecta, glutamato)",
    "GPe ↔ NST (vía indirecta, ritmo beta)",
    "NST → GPi y SNr (salida excitadora)",
    "Glutamato (salida), GABA (aferencia)"
  ]
},

rn: {
  name: "Núcleo rojo", short: "NR",
  summary: "Una estación mesencefálica entre el cerebelo y el sistema motor: contribuye a la coordinación del movimiento y al aprendizaje motor.",
  anatomy: [
    "En el tegmento mesencefálico, a nivel del colículo superior, dorsomedial a la sustancia negra; se ve oscuro en la RM potenciada en T2 por su contenido en hierro.",
    "Partes magnocelular (tracto rubroespinal) y parvocelular (tracto rubro-olivar); en humanos predomina la parte parvocelular.",
    "Aferencias: del núcleo dentado contralateral vía el pedúnculo cerebeloso superior, y de la corteza motora y premotora.",
    "Las fibras del nervio oculomotor atraviesan el núcleo."
  ],
  functions: [
    "Retransmisión de la salida cerebelosa al sistema motor.",
    "Contribución al aprendizaje motor y a la corrección de errores mediante el bucle rubro-olivar.",
    "Tracto rubroespinal: pequeño en humanos, contribuye a los movimientos del brazo y la mano."
  ],
  tests: [
    "Exploración cerebelosa: dedo–nariz, temblor intencional",
    "Movimientos oculares (nervio oculomotor)",
    "RM sensible al hierro (SWI): imagen del núcleo rojo y la sustancia negra"
  ],
  development: [
    "El hierro cerebral aumenta con la edad; el hierro del núcleo rojo y la sustancia negra crece rápidamente en la infancia y la adolescencia."
  ],
  clinical: [
    "Temblor de Holmes (rubral): un temblor lento y grosero en reposo, con la postura y con el movimiento, tras lesiones mesencefálicas.",
    "Se estudian hallazgos relacionados con ferritina baja y hierro cerebral en el síndrome de piernas inquietas y el TDAH.",
    "El signo de la “cara del panda gigante” en la RM del mesencéfalo en la enfermedad de Wilson (alrededor del núcleo rojo y la sustancia negra)."
  ],
  lesion: [
    "Síndrome de Benedikt: parálisis del oculomotor ipsilateral, temblor y ataxia contralaterales.",
    "Síndrome de Claude: parálisis del oculomotor ipsilateral, ataxia cerebelosa contralateral."
  ],
  links: [
    "Núcleo dentado (contralateral) → núcleo rojo (pedúnculo cerebeloso superior)",
    "Núcleo rojo → oliva inferior (tracto rubro-olivar) → cerebelo",
    "Núcleo rojo → médula espinal (tracto rubroespinal)",
    "Corteza motora y premotora → núcleo rojo"
  ]
},

hb: {
  name: "Habénula", short: "Hb",
  summary: "La señal de la decepción y la evitación: se activa cuando una recompensa esperada no llega y frena las neuronas de dopamina y serotonina; se cree hiperactiva en la depresión.",
  anatomy: [
    "Un pequeño núcleo par en el epitálamo, dorsomedial al tálamo, en el borde posterosuperior del tercer ventrículo, delante de la glándula pineal.",
    "Habénula medial y lateral; la habénula lateral (LHb) es una parte clave del circuito de recompensa y castigo.",
    "Aferencia vía la estría medular desde el prosencéfalo basal, el hipotálamo lateral y la región del borde palidal; salida vía el fascículo retroflejo al núcleo interpeduncular, RMTg, ATV y rafe."
  ],
  functions: [
    "Error de predicción de recompensa negativo: se activa cuando una recompensa esperada no llega o llega el castigo (Matsumoto y Hikosaka, 2007).",
    "Inhibe las neuronas dopaminérgicas del ATV vía el RMTg, así como las neuronas serotoninérgicas del rafe; apoya la evitación y la renuncia.",
    "Contribución a la regulación del sueño y el ritmo circadiano."
  ],
  tests: [
    "Tareas de aprendizaje probabilístico de recompensa y castigo (error de predicción negativo)",
    "RM de alta resolución y fMRI (investigación; su pequeño tamaño dificulta la medición)"
  ],
  development: [
    "Una estructura evolutivamente conservada y de desarrollo temprano; los datos de desarrollo en humanos son limitados.",
    "Los modelos animales describen que el estrés temprano aumenta la actividad de la habénula lateral."
  ],
  clinical: [
    "Depresión: se ha demostrado hiperactividad de la habénula lateral en modelos animales; el efecto antidepresivo rápido de la ketamina se ha atribuido en parte al bloqueo de la descarga en ráfagas de la LHb (Yang et al., 2018).",
    "La estimulación cerebral profunda habenular se ha probado a nivel de casos en la depresión resistente al tratamiento en adultos.",
    "Consumo de sustancias y el afecto negativo de la abstinencia: parte del circuito de evitación."
  ],
  treatment: [
    "Esketamina (pulverización nasal, antagonista NMDA): aprobada por la FDA para la depresión resistente al tratamiento en adultos (2019); en estudios animales su efecto rápido se ha atribuido al bloqueo de la descarga en ráfagas de la habénula lateral (Yang et al., 2018). Sin uso habitual en adolescentes. [B]",
    "Estimulación cerebral profunda habenular: solo a nivel de casos en la depresión resistente al tratamiento, experimental. [C]"
  ],
  lesion: [
    "En animales, las lesiones de la habénula lateral reducen la conducta similar a la indefensión aprendida."
  ],
  links: [
    "Prosencéfalo basal, hipotálamo lateral y región del borde palidal → habénula (estría medular)",
    "Habénula lateral → RMTg → ATV y sustancia negra (inhibición de la dopamina)",
    "Habénula lateral → núcleos del rafe (serotonina)",
    "Habénula medial → núcleo interpeduncular (nicotina, ansiedad)"
  ]
},

vp: {
  name: "Pálido ventral", short: "PV",
  summary: "La salida del “gusto” por la recompensa y la motivación: retransmite señales del núcleo accumbens al tálamo y al tronco del encéfalo; contiene puntos calientes hedónicos.",
  anatomy: [
    "En el prosencéfalo basal, debajo de la comisura anterior, ventral al globo pálido y detrás del núcleo accumbens.",
    "Recibe la salida GABAérgica del estriado ventral (accumbens); su salida va al tálamo mediodorsal, la habénula lateral, el ATV y el hipotálamo lateral.",
    "Entremezclado con las neuronas colinérgicas del prosencéfalo basal (núcleo basal de Meynert)."
  ],
  functions: [
    "“Gusto” hedónico: un punto caliente opioide potencia la respuesta de agrado a los sabores dulces (Berridge y Kringelbach, 2015).",
    "Convertir la motivación en acción: parte del bucle límbico (accumbens → PV → tálamo mediodorsal → CPF).",
    "Vínculo social: en ratones de pradera, los receptores V1a de vasopresina del pálido ventral participan en la formación del vínculo de pareja (Lim et al., 2004); la oxitocina actúa principalmente a través del núcleo accumbens."
  ],
  tests: [
    "Reacciones hedónicas al sabor (investigación)",
    "Tareas de fMRI que separan las fases de anticipación y consumo de la recompensa"
  ],
  development: [
    "Como parte del circuito de recompensa, se cree que contribuye al aumento de la sensibilidad a la recompensa en la adolescencia; los datos directos de desarrollo son limitados."
  ],
  clinical: [
    "Anhedonia y depresión: función reducida en los circuitos hedónicos.",
    "Trastornos por consumo de sustancias: el PV participa en la reinstauración de la búsqueda de droga (recaída) (estudios animales)."
  ],
  lesion: [
    "En animales, las lesiones del PV pueden convertir la respuesta de agrado a lo dulce en asco."
  ],
  links: [
    "Núcleo accumbens → pálido ventral (GABA, encefalina)",
    "Pálido ventral → tálamo mediodorsal → CPF (bucle límbico)",
    "Pálido ventral ↔ ATV, habénula lateral, hipotálamo lateral",
    "Receptores μ-opioides, GABA y de vasopresina (V1a)"
  ]
}

});
