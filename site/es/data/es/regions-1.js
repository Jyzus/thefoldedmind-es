/* Textos de regiones en español 1/8 (regions-1.js: lóbulo frontal y cíngulo anterior). Mismos campos de la tarjeta turca,
   elemento por elemento en el mismo orden; I18N.loadEs lo carga y data/es/content.js lo aplica a las tarjetas. */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

dlpfc: {
  name: "Corteza prefrontal dorsolateral", short: "CPFDL",
  summary: "El centro de la función ejecutiva: mantiene la información en la mente, la procesa, planifica y dirige la conducta hacia las metas; una de las regiones corticales de maduración más tardía y de las más tratadas con fármacos y EMT.",
  anatomy: [
    "Giro frontal medio y la cara lateral del giro frontal superior; áreas de Brodmann (AB) 9 y 46, en parte 8.",
    "Limitada por detrás con la corteza premotora (AB 6), por debajo con el surco frontal inferior y el giro frontal inferior, y por delante con la corteza frontopolar (AB 10).",
    "Corteza de asociación granular (capa IV prominente); conectada con la corteza parietal por haces de sustancia blanca de largo alcance (fascículo longitudinal superior).",
    "Irrigación: ramas superiores de la arteria cerebral media (ACM); arteria cerebral anterior (ACA) a lo largo del borde dorsomedial.",
    "Límite en el modelo: áreas HCP-MMP1.0 46, 9-46 (d, a-v, p-v), 8Av, 8Ad, 8C, 8BL, 9a, 9p, i6-8, s6-8, SFL y las áreas de unión del surco frontal inferior (IFSa, IFSp, IFJa, IFJp). Las que caen en la cara medial van a la mPFC (Glasser et al., 2016). Para estudiantes: la “CPFDL” no es un área única, sino una familia de áreas."
  ],
  functions: [
    "Memoria de trabajo: mantener información brevemente en la mente y operar con ella (manipulación).",
    "Planificación, descomposición de tareas en pasos secuenciales, resolución de problemas y organización.",
    "Flexibilidad cognitiva (cambio de reglas o estrategias) y razonamiento abstracto.",
    "Control de arriba abajo de la atención y supresión de distractores.",
    "Reevaluación cognitiva en la regulación emocional.",
    "Fluidez verbal y generatividad (dominancia izquierda); memoria de trabajo visuoespacial (dominancia derecha).",
    "Neuroquímica de la memoria de trabajo (clave para entender los efectos de los fármacos): Noradrenalina, receptor α2A: cierra los canales de AMPc–HCN en las espinas dendríticas, fortaleciendo la conectividad de la red prefrontal y la resistencia a los distractores. Así actúa la guanfacina (Wang et al., 2007). [B] Dopamina, receptor D1: relación en U invertida; tanto el exceso como el defecto perjudican la memoria de trabajo (Arnsten). Bajo estrés, el exceso de catecolaminas deja la CPFDL “desconectada”. [B]"
  ],
  tests: [
    "N-back y Dígitos en orden inverso",
    "Test de clasificación de tarjetas de Wisconsin (WCST): errores perseverativos",
    "Torre de Londres / Torre de Hanói: planificación",
    "Trail Making Test B (TMT-B), Stroop (junto con la CCA)",
    "Fluidez verbal (fluidez de letras: F-A-S)"
  ],
  development: [
    "Una de las regiones de maduración más tardía del cerebro; el volumen de sustancia gris frontal alcanza su pico al final de la infancia y el adelgazamiento cortical por poda sináptica comienza en la adolescencia.",
    "La mielinización y el fortalecimiento de las conexiones frontoparietales continúan hasta mediados de los 20 años.",
    "Su maduración tardía respecto al sistema de recompensa en la adolescencia (el “modelo de sistemas duales / desequilibrio”) ayuda a explicar la asunción de riesgos.",
    "Eje sensoriomotor → asociación: la maduración cortical avanza de las áreas sensoriales y motoras hacia las cortezas de asociación. La CPFDL está en el extremo tardío de este eje; la plasticidad prolongada supone a la vez una oportunidad de aprendizaje y un riesgo de psicopatología (Sydnor et al., 2021). [B]",
    "Maduración de la función ejecutiva: una curva compartida entre 10.766 personas (8–35 años). Ganancias rápidas a los 10–15, desaceleración a los 15–17 y niveles adultos a los 18–20 (Tervo-Clemmens et al., 2023). Implicación clínica: las expectativas de planificación “como un adulto” en adolescentes deben ajustarse a la edad. [A]"
  ],
  clinical: [
    "TDAH: hipoactivación de los circuitos frontoestriatales; un retraso de unos 3 años en alcanzar el pico de grosor cortical, más marcado en la corteza prefrontal (Shaw et al., 2007). [B] Análisis cortical de ENIGMA (2.246 pacientes, 1.934 controles): menor superficie en niños, sobre todo en regiones frontales, cinguladas y temporales; sin diferencias en adolescentes ni adultos (Hoogman et al., 2019). Coherente con el modelo de retraso madurativo de Shaw 2007. [A] Los efectos son pequeños; la RM no puede diagnosticar a un paciente individual.",
    "Esquizofrenia de inicio temprano: disfunción de la CPFDL en tareas de memoria de trabajo (hipofrontalidad).",
    "Depresión: hipoactividad de la CPFDL izquierda; diana de la EMTr. Autorización de la FDA (2024) como tratamiento complementario de la depresión mayor a los 15–21 años.",
    "Relación con el rendimiento escolar en los trastornos específicos del aprendizaje y en los problemas de función ejecutiva."
  ],
  treatment: [
    "Los estimulantes (metilfenidato, anfetamina) y la atomoxetina aumentan la dopamina y noradrenalina prefrontales. La guanfacina fortalece la red prefrontal directamente vía α2A (Wang et al., 2007). [B]",
    "EMTr en adolescentes: NeuroStar recibió autorización de la FDA en marzo de 2024 como complemento de los antidepresivos para la depresión mayor a los 15–21 años. El primer tratamiento con EMT autorizado para adolescentes. [A] (decisión reguladora)",
    "Selección de diana: los puntos de la CPFDL izquierda anticorrelacionados con el sgACC funcionan mejor; las mejores coordenadas están en el AB 46 (Fox et al., 2012). [B]",
    "SAINT (iTBS acelerada guiada por fMRI durante 5 días): en depresión resistente al tratamiento, remisión del 78,6 % frente al 13,3 % con placebo (Cole et al., 2022; 14 frente a 15 pacientes, adultos). Autorización de la FDA en 2022. Aún en investigación en adolescentes. [B]"
  ],
  lesion: [
    "Síndrome disejecutivo: alteración de la planificación y la organización, perseveración.",
    "Menor capacidad de memoria de trabajo, distraibilidad.",
    "Incapacidad de generar estrategias; la conducta pasa a estar dirigida por claves del entorno."
  ],
  links: [
    "Núcleo caudado (bucle frontoestriatal cognitivo/dorsolateral)",
    "Tálamo — núcleo mediodorsal",
    "Corteza parietal posterior (red de control frontoparietal)",
    "Corteza cingulada anterior",
    "Cerebelo (Crus I/II) — bucle cerebeloso cognitivo",
    "Dopamina mesocortical (ATV), noradrenalina (locus coeruleus)",
    "Cíngulo subgenual (sgACC): conectividad anticorrelacionada (negativa); el éxito de la diana de EMT en la depresión se relaciona con la fuerza de esta anticorrelación (Fox et al., 2012)"
  ]
},

ofc: {
  name: "Corteza orbitofrontal", short: "COF",
  summary: "Calcula el valor de las recompensas y los castigos; actualiza con flexibilidad la conducta según las expectativas y vigila la adecuación social.",
  anatomy: [
    "Cara ventral del lóbulo frontal, sobre la órbita: giro recto (medial), giros orbitarios, surco olfatorio.",
    "AB 11, 12/47 (orbitario lateral), 13 y 14; la parte lateral se extiende hacia la pars orbitalis del giro frontal inferior.",
    "Corteza olfatoria y gustativa secundaria; donde convergen la información gustativa, olfativa, visual e interoceptiva.",
    "Irrigación: ACA (rama orbitofrontal medial) y ACM (arteria orbitofrontal lateral)."
  ],
  functions: [
    "Codificación del valor de recompensa/castigo de los estímulos y comparación de los resultados esperados con los reales.",
    "Aprendizaje de inversión: actualizar la conducta cuando cambia la relación estímulo–reforzador.",
    "Toma de decisiones emocional (hipótesis del marcador somático, junto con la vmPFC).",
    "Conducta social adecuada al contexto e inhibición de respuestas impulsivas.",
    "Combinación de la información olfativa y gustativa con el valor hedónico."
  ],
  tests: [
    "Iowa Gambling Task (IGT): existen versiones infantiles",
    "Aprendizaje de inversión probabilística",
    "Descuento por demora",
    "Go/No-Go y juegos de decisión social (juego del ultimátum)"
  ],
  development: [
    "Madura lentamente; en la adolescencia la sensibilidad a la recompensa es alta mientras la contribución reguladora de la COF aún no es completa.",
    "La adversidad temprana (negligencia, abuso) se ha relacionado con el volumen y la función de la COF.",
    "El autocontrol y la capacidad de retrasar la recompensa se desarrollan notablemente durante los años escolares."
  ],
  clinical: [
    "TOC: hiperactividad de la COF en el circuito córtico-estriado-tálamo-cortical (CETC); disminuye con la respuesta al tratamiento.",
    "Trastorno de conducta y rasgos insensibles-afectivos (CU): disfunción de la COF/vmPFC en el aprendizaje de recompensa/castigo.",
    "Trastorno por consumo de sustancias: valor de recompensa distorsionado, consumo compulsivo.",
    "TDAH: aversión a la demora, elección de una recompensa pequeña inmediata frente a una grande demorada.",
    "Trastornos de la conducta alimentaria: diferencias en el procesamiento de la recompensa y el gusto.",
    "Gran muestra estructural en TOC (ENIGMA-TOC; 1.905 pacientes, 1.760 controles): corteza parietal inferior y superior más delgadas en niños; adelgazamiento parietal y menor superficie temporal en adultos; efectos pequeños (d −0,10 a −0,33). Las diferencias frontales fueron más extensas en pacientes medicados. La hiperactividad de la COF es un hallazgo funcional; estructuralmente, la diferencia más consistente es parietal (ENIGMA-TOC, 2018). [A]"
  ],
  treatment: [
    "Primera línea en TOC: TCC con exposición y prevención de respuesta (EPR) e ISRS; a menudo se combinan en el TOC infantil moderado-grave. El tratamiento eficaz reduce la hiperactividad COF–caudado. [A]",
    "EMT profunda (bobina H7, mPFC y CCA): autorizada por la FDA para el TOC resistente al tratamiento en adultos (2018); detalles en la tarjeta de la mPFC. [A]",
    "Las intervenciones dirigidas al descuento por demora y la impulsividad (manejo de contingencias, entrenamiento en demora de recompensa) aprovechan el cálculo de valor de la COF en el TDAH y el consumo de sustancias."
  ],
  lesion: [
    "Cuadro “pseudopsicopático”: desinhibición, inadecuación social, impulsividad; ejemplo clásico: Phineas Gage.",
    "Moria / Witzelsucht (bromas inapropiadas), aumento de la actitud discutidora.",
    "Anosmia (proximidad a las vías olfatorias)."
  ],
  links: [
    "Amígdala (valor emocional)",
    "Núcleo accumbens / estriado ventral (bucle límbico)",
    "Cabeza del caudado (bucle COF–estriatal, TOC)",
    "Tálamo — núcleo mediodorsal",
    "Ínsula e hipotálamo",
    "Dopamina (ATV), serotonina (rafe)"
  ]
},

mpfc: {
  name: "Corteza prefrontal medial y frontopolar", short: "CPFm",
  summary: "Representa el yo y las mentes ajenas; al regular la amígdala favorece la extinción del miedo y el equilibrio emocional.",
  anatomy: [
    "Cara medial del giro frontal superior y el polo frontal; AB 10 y AB 9 medial.",
    "La parte ventromedial (vmPFC) abarca subdivisiones de AB 10–11–32; limita con el cíngulo subgenual (AB 25) y la COF.",
    "La CPF dorsomedial (dmPFC) destaca por la mentalización; la vmPFC, por el valor y la regulación emocional.",
    "Irrigación: ACA (ramas frontopolar y orbitofrontal medial)."
  ],
  functions: [
    "Pensamiento autorreferencial; el nodo anterior de la red neuronal por defecto (RND).",
    "Teoría de la mente: inferir las intenciones y creencias de los demás (dmPFC).",
    "Control inhibidor sobre la amígdala; recuerdo de la extinción del miedo (vmPFC).",
    "Toma de decisiones basada en el valor, juicio moral.",
    "Frontopolar: multitarea, memoria prospectiva, alternancia entre submetas."
  ],
  tests: [
    "Tareas de falsa creencia (Sally-Anne), test de Faux Pas",
    "Test de la Mirada (RMET — versión infantil)",
    "Paradigmas de condicionamiento y extinción del miedo",
    "Test de los Seis Elementos (BADS-C) — multitarea"
  ],
  development: [
    "La conectividad amígdala–mPFC pasa de positiva en la primera infancia a negativa (reguladora) en la adolescencia (Gee et al., 2013).",
    "En la adolescencia, la actividad de la mPFC durante tareas sociocognitivas es mayor que en adultos y disminuye con la edad (desarrollo del “cerebro social”).",
    "La sensibilidad a la evaluación de los pares alcanza su máximo en la adolescencia."
  ],
  clinical: [
    "Trastorno del espectro autista (TEA): diferencias en la activación de la mPFC durante tareas de mentalización.",
    "Ansiedad y TEPT: regulación insuficiente de la amígdala por la vmPFC, memoria de extinción débil. En adultos sanos, quienes tenían una vmPFC (COF medial) más gruesa recordaban mejor el miedo extinguido al día siguiente (Milad et al., 2005; 14 personas). Muestra pequeña, hallazgo pionero. [C]",
    "Depresión: un metaanálisis de conectividad en reposo (556 pacientes, 518 controles) halló menor conectividad dentro de la red de control frontoparietal y con la red de atención, y mayor conectividad con la red por defecto (incluida la mPFC). Coherente con un giro hacia el pensamiento interior (rumiación) y el retraimiento del mundo exterior (Kaiser et al., 2015). [A]",
    "Trastorno de conducta (rasgos CU): diferencias de la vmPFC en la empatía y los procesos de decisión moral."
  ],
  treatment: [
    "La terapia de exposición utiliza el aprendizaje de extinción, que depende de la vmPFC; el nuevo aprendizaje “seguro” no borra el antiguo recuerdo de miedo, sino que compite con él. Por eso el miedo puede reaparecer tras una recaída o un cambio de contexto. [B]",
    "Potenciación de la exposición con D-cicloserina (agonista parcial del NMDA): en un metaanálisis de datos individuales de 21 estudios (1.047 personas) el efecto fue pequeño y solo al final del tratamiento; no se considera clínicamente relevante (Mataix-Cols et al., 2017). [A]",
    "EMT profunda (bobina H7, mPFC y CCA): autorizada por la FDA como tratamiento complementario del TOC en adultos (agosto de 2018); respuesta a las 6 semanas de alrededor del 38 % frente al 11 % con placebo. Cada sesión va precedida de una provocación individualizada de síntomas. [A]"
  ],
  lesion: [
    "vmPFC: alteración de la toma de decisiones emocional (elecciones arriesgadas en el IGT), menor juicio social y empatía.",
    "dmPFC / medial bilateral: apatía, abulia, reducción de la conducta espontánea."
  ],
  links: [
    "Amígdala (regulación de arriba abajo)",
    "Hipocampo (memoria contextual, extinción)",
    "Cíngulo posterior / precúneo (RND)",
    "Hipotálamo y SGP (respuesta autonómica)",
    "Núcleo accumbens",
    "Serotonina (rafe), dopamina (ATV)"
  ]
},

broca: {
  name: "Área de Broca (giro frontal inferior)", short: "Broca / GFI",
  summary: "Producción del habla, sintaxis y memoria de trabajo verbal; su homólogo del hemisferio derecho contribuye a la inhibición de respuestas.",
  anatomy: [
    "Pars opercularis (AB 44) y pars triangularis (AB 45) del giro frontal inferior.",
    "El lenguaje está lateralizado al hemisferio izquierdo en alrededor del 95 % de los diestros y ~70 % de los zurdos.",
    "Conectada con el área de Wernicke por el fascículo arqueado y el fascículo longitudinal superior.",
    "Irrigación: división superior de la ACM."
  ],
  functions: [
    "Planificación motora del habla y secuenciación articulatoria.",
    "Sintaxis y procesamiento de estructuras oracionales complejas.",
    "Memoria de trabajo verbal (bucle fonológico — repaso articulatorio).",
    "Selección semántica y recuperación de palabras (AB 45).",
    "Imitación y comprensión de acciones (sistema de neuronas espejo, AB 44).",
    "GFI derecho: inhibición de respuesta (la señal de “parada”), prosodia emocional."
  ],
  tests: [
    "Fluidez de letras, Test de Denominación de Boston",
    "Repetición de frases, pruebas de comprensión gramatical",
    "Tareas Stop-Signal y Go/No-Go (GFI derecho)"
  ],
  development: [
    "La mielinización del fascículo arqueado es débil al nacer y aumenta durante la infancia.",
    "La maduración del procesamiento sintáctico complejo se extiende a los años escolares.",
    "Tras una lesión temprana del hemisferio izquierdo, el lenguaje puede desplazarse al hemisferio derecho (plasticidad temprana)."
  ],
  clinical: [
    "Trastorno del desarrollo del lenguaje (TDL): alrededor del 7,6 % en un cribado de 7.267 niños al entrar a la escuela (dos niños por cada clase de 30); el trastorno del lenguaje asociado a discapacidad intelectual o a un diagnóstico médico añade otro 2,3 % (Norbury et al., 2016). Diferencias estructurales y funcionales en el GFI izquierdo. Frecuente pero infradiagnosticado; puede confundirse con un problema de atención o de conducta. [A]",
    "Tartamudez: diferencias en el GFI izquierdo y en los haces de sustancia blanca relacionados, hiperactivación en el hemisferio derecho.",
    "TDAH: hipoactivación del GFI derecho, dificultad en la inhibición de respuestas.",
    "Síndrome de Tourette: el GFI derecho como parte de las redes de control inhibidor."
  ],
  treatment: [
    "En el trastorno del desarrollo del lenguaje: terapia del habla y del lenguaje; apoyo escolar y adaptaciones en el aula. Vigilancia de las dificultades lectoras y de los problemas socioemocionales.",
    "Tartamudez preescolar: el programa Lidcombe (aplicado por los padres, elogiando el habla fluida y corrigiendo suavemente la tartamudez) en 54 niños de 3–6 años: la proporción de sílabas tartamudeadas a los 9 meses fue del 1,5 % en el grupo Lidcombe y del 3,9 % en el control (Jones et al., 2005). Apoya la intervención temprana. [B]",
    "Inhibición de respuesta en el TDAH (GFI derecho): los estimulantes y la atomoxetina aumentan la actividad del GFI derecho; detalles en las tarjetas del NST y la CPFDL. [B]"
  ],
  lesion: [
    "Afasia de Broca: habla no fluida, telegráfica, agramatismo; comprensión relativamente preservada, repetición alterada.",
    "Apraxia del habla, alteración de la escritura."
  ],
  links: [
    "Área de Wernicke (fascículo arqueado — vía dorsal del lenguaje)",
    "Corteza premotora / AMS",
    "Ganglios basales (inicio del habla)",
    "GFI derecho → núcleo subtalámico (vía inhibidora hiperdirecta)"
  ]
},

premotor: {
  name: "Corteza premotora y AMS", short: "CPM / AMS",
  summary: "Planifica y secuencia el movimiento; gestiona las acciones iniciadas internamente, la coordinación bimanual y los movimientos oculares.",
  anatomy: [
    "AB 6: corteza premotora (CPM) lateralmente, área motora suplementaria (AMS) en la cara medial, y pre-AMS delante de ella.",
    "El campo ocular frontal (COF) se sitúa dentro del AB 8, delante de la corteza premotora.",
    "Inmediatamente anterior a la corteza motora primaria; también envía fibras al tracto corticoespinal.",
    "Irrigación: parte lateral ACM, AMS medial ACA."
  ],
  functions: [
    "Planificación y preparación del movimiento; movimiento guiado por claves externas (CPM lateral).",
    "Movimientos iniciados internamente y secuenciales (AMS).",
    "Coordinación bimanual y aprendizaje motor.",
    "Comprensión de acciones e imitación (CPM ventral — sistema de neuronas espejo).",
    "Pre-AMS: selección e inhibición de respuestas.",
    "COF: sacadas voluntarias y orientación de la atención visual."
  ],
  tests: [
    "Secuencia motora de Luria (puño–canto–palma)",
    "Golpeteo secuencial de dedos, Purdue Pegboard",
    "Tarea antisacádica (COF)",
    "Evaluación de praxias, signos neurológicos blandos (PANESS)"
  ],
  development: [
    "Las habilidades motoras finas y el aprendizaje de secuencias se desarrollan rápidamente en los años escolares.",
    "Los movimientos en espejo normalmente disminuyen de forma marcada hacia los 10 años; se relacionan con la maduración del cuerpo calloso."
  ],
  clinical: [
    "Síndrome de Tourette y trastornos de tics crónicos: hiperactividad de la AMS, parte de la red del impulso premonitorio.",
    "Trastorno del desarrollo de la coordinación (TDC): dificultad en la planificación motora.",
    "TDAH: aumento de movimientos en espejo, diferencias en la inhibición motora.",
    "TEA: diferencias en la imitación y la planificación motora (dispraxia)."
  ],
  treatment: [
    "Trastorno del desarrollo de la coordinación: enfoques orientados a la tarea (practicar directamente la habilidad que al niño le cuesta en la vida diaria; p. ej., CO-OP, entrenamiento neuromotor de tareas) e intervenciones motoras; el efecto medio en metaanálisis es grande (d ≈ 1,06) pero la calidad de los estudios es limitada (Smits-Engelsman et al., 2018). [B]",
    "Impulso premonitorio (AMS e ínsula): la TICC enseña a reconocer el impulso y una respuesta competidora; detalles en la tarjeta del putamen. [A]",
    "El TDAH y el TDC suelen coexistir; las dificultades motoras afectan la escritura y la participación en deportes, lo que requiere terapia ocupacional y adaptaciones escolares."
  ],
  lesion: [
    "Síndrome de la AMS: reducción del inicio del movimiento voluntario y del habla (acinesia transitoria).",
    "Síndrome de la mano ajena (frontal medial), apraxia ideomotora.",
    "Lesión del COF: alteración de las sacadas contralaterales, desviación de la mirada hacia el lado de la lesión."
  ],
  links: [
    "Corteza motora primaria",
    "Putamen (bucle motor)",
    "Tálamo — núcleos VA/VL",
    "Cerebelo (dentado → tálamo → corteza)",
    "Corteza parietal posterior (transformación visuomotora)"
  ]
},

motor: {
  name: "Corteza motora primaria", short: "M1",
  summary: "Ejecutora del movimiento voluntario: la principal fuente del tracto corticoespinal, que controla la mitad opuesta del cuerpo.",
  anatomy: [
    "Giro precentral y lóbulo paracentral anterior; AB 4. Separada de la corteza somatosensorial por el surco central.",
    "Organización somatotópica (homúnculo motor): pierna y pie en posición medial, luego tronco, brazo, mano (un área grande), y cara y lengua más abajo, lateralmente.",
    "Células piramidales gigantes (células de Betz) en la capa V.",
    "Irrigación: región cara–brazo ACM, región de la pierna (medial) ACA."
  ],
  functions: [
    "Ejecución del movimiento voluntario; tractos corticoespinal y corticobulbar.",
    "Codificación de fuerza, dirección y velocidad; movimientos finos de los dedos.",
    "Reorganización del mapa somatotópico con el aprendizaje motor (plasticidad)."
  ],
  tests: [
    "Velocidad de golpeteo de dedos, Grooved Pegboard",
    "Exploración de fuerza muscular y reflejos",
    "Potenciales evocados motores e inhibición cortical con EMT (investigación)"
  ],
  development: [
    "La mielinización corticoespinal es rápida desde el nacimiento hasta los 2 años; el control motor fino se desarrolla hasta la adolescencia.",
    "La desaparición de los reflejos primitivos refleja la maduración de la inhibición cortical.",
    "Las proyecciones ipsilaterales presentes al principio se podan en la infancia."
  ],
  clinical: [
    "Parálisis cerebral: espasticidad y retraso motor por lesión perinatal. El diagnóstico puede hacerse antes de los 6 meses (edad corregida): antes de los 5 meses, la Evaluación de Movimientos Generales (GMA) más RM tiene una precisión superior al 95 %; después, HINE más RM supera el 90 % (Novak et al., 2017). El diagnóstico precoz permite intervenir cuando la plasticidad cerebral es máxima. [A]",
    "Síndrome de Tourette y TDAH: reducción de la inhibición intracortical de intervalo corto (SICI) en estudios de EMT.",
    "Trastornos motores funcionales (conversivos): frecuentes en la adolescencia; signos positivos en la exploración sin hallazgos orgánicos."
  ],
  treatment: [
    "Intervención temprana y específica del diagnóstico en la parálisis cerebral: terapia de movimiento inducido por restricción y entrenamiento bimanual intensivo en la afectación unilateral (hemipléjica); toxina botulínica para la espasticidad; rizotomía dorsal selectiva en casos seleccionados. [A]",
    "Trastorno motor funcional (conversivo): se diagnostica por signos positivos (p. ej., signo de Hoover); explicación clara y segura del diagnóstico, fisioterapia y psicoterapia conjuntas. [B]",
    "Las medidas de excitabilidad cortical con EMT (SICI) son herramientas de investigación en el síndrome de Tourette y el TDAH, no tratamientos. [C]"
  ],
  lesion: [
    "Signos de neurona motora superior contralaterales: debilidad (sobre todo en los movimientos finos distales), espasticidad, hiperreflexia, signo de Babinski.",
    "Crisis motoras focales y la “marcha jacksoniana”; parálisis de Todd poscrítica."
  ],
  links: [
    "Tracto corticoespinal (cápsula interna → tronco del encéfalo → médula espinal)",
    "Corteza premotora / AMS",
    "Corteza somatosensorial",
    "Tálamo VL (aferencias cerebelosas y de ganglios basales)",
    "Putamen"
  ]
},

acc: {
  name: "Corteza cingulada anterior", short: "CCA",
  summary: "Detecta errores y conflictos y ajusta el esfuerzo; tiende un puente entre la emoción, el dolor y la atención.",
  anatomy: [
    "Parte anterior del giro cingulado que envuelve la parte frontal del cuerpo calloso; AB 24, 32, 33 y subgenual AB 25.",
    "Subdivisiones: CCA dorsal (control cognitivo), CCA pregenual/rostral (afectiva), CCA subgenual (sgACC — estado de ánimo y regulación autonómica).",
    "Contiene neuronas de von Economo, junto con la ínsula anterior.",
    "Irrigación: ACA (arterias pericallosa y callosomarginal)."
  ],
  functions: [
    "Detección de errores y monitorización del conflicto; origen de la negatividad relacionada con el error (ERN) en el EEG.",
    "Ajuste del control cognitivo, el esfuerzo y el cálculo coste–beneficio.",
    "La dimensión afectiva (desagradable) del dolor; respuesta a la exclusión social.",
    "Motivación e inicio de la conducta.",
    "Regulación emocional (CCA rostral); regulación del estado de ánimo y del eje HHA (sgACC).",
    "Núcleo de la red de saliencia junto con la ínsula."
  ],
  tests: [
    "Stroop, Flanker (Eriksen), tarea de Simon",
    "Go/No-Go; ERN y enlentecimiento posterior al error (EEG)",
    "Stroop emocional"
  ],
  development: [
    "La amplitud de la ERN aumenta de la infancia a la adolescencia; la monitorización del error madura.",
    "Las conexiones CCA–prefrontales se fortalecen en la adolescencia; el control cognitivo se vuelve más eficiente."
  ],
  clinical: [
    "TOC: hiperactividad de la CCA dorsal y una ERN aumentada (una “señal de error excesiva”). En el TOC pediátrico la ERN es grande y permanece grande incluso cuando los síntomas mejoran con TCC; se comporta como un marcador de rasgo (endofenotipo) más que de estado (Hajcak et al., 2008). [B]",
    "Trastornos de ansiedad: los niños con una ERN mayor a los 6 años tenían más probabilidad de desarrollar un nuevo trastorno de ansiedad a los 9 años, incluso tras ajustar por los síntomas basales y la ansiedad materna (236 niños; Meyer et al., 2015). Un marcador candidato para el cribado y la prevención tempranos. [B]",
    "TDAH: hipoactivación de la CCA dorsal (Bush et al., 1999), diferencias en la monitorización del error.",
    "Depresión: hiperactividad del sgACC. En la depresión resistente al tratamiento en adultos, la estimulación cerebral profunda del sgACC (subcalloso) parecía prometedora en estudios abiertos (Mayberg et al., 2005), pero en un ensayo multicéntrico controlado con placebo no fue superior al placebo a los 6 meses (Holtzheimer et al., 2017). [B]",
    "Un hallazgo transdiagnóstico compartido: un metaanálisis de 193 estudios de VBM (unas 15.900 personas) halló pérdida de sustancia gris en esquizofrenia, trastorno bipolar, depresión, adicción, TOC y ansiedad que convergía en las mismas tres regiones: la CCA dorsal y la ínsula bilateral. La reducción de esta red se relaciona con una función ejecutiva más débil (Goodkind et al., 2015). [A]"
  ],
  treatment: [
    "EMT: se apunta al punto de la CPFDL izquierda más anticorrelacionado con el sgACC; la CCA se modula de forma indirecta (Fox et al., 2012; SAINT). [B]",
    "Estimulación cerebral profunda (cíngulo subcalloso): experimental en la depresión resistente al tratamiento; la eficacia no se demostró en un ensayo controlado con placebo (Holtzheimer et al., 2017). Solo adultos. [B]",
    "Cingulotomía: cirugía de último recurso para el TOC refractario y el dolor oncológico; no se realiza en niños ni adolescentes. [C]",
    "Como la ERN no cambia con el tratamiento en el TOC, se usa para identificar el riesgo más que para seguir la respuesta al tratamiento (Hajcak et al., 2008)."
  ],
  lesion: [
    "Mutismo acinético con lesiones bilaterales; apatía y abulia con lesiones unilaterales.",
    "Alteración de la corrección de errores y del control atencional, indiferencia al dolor (cingulotomía)."
  ],
  links: [
    "CPFDL (control cognitivo)",
    "Ínsula anterior (red de saliencia)",
    "Amígdala e hipotálamo",
    "Caudado y estriado ventral",
    "Tálamo — anterior/mediodorsal",
    "Aferencias de dopamina, serotonina y noradrenalina"
  ]
}

});
