/* Textos de regiones en español 4/8 (regions-4.js: tálamo, hipotálamo, cuerpo calloso, tronco del encéfalo, cerebelo). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

thalamus: {
  name: "Tálamo", short: "TAL",
  summary: "La puerta de entrada a la corteza: filtra y retransmite todos los sentidos excepto el olfato; regula la vigilia, la atención y los bucles motores.",
  anatomy: [
    "La parte más grande del diencéfalo; dos masas ovoides que forman las paredes laterales del tercer ventrículo, unidas por la adherencia intertalámica.",
    "Grupos anterior, medial y lateral divididos por la lámina medular interna.",
    "Núcleos: VPL/VPM (somatosensorial), CGL (visión), CGM (audición), VA/VL (motor), mediodorsal (CPF), anterior (límbico), pulvinar (atención visual), reticular (compuerta GABAérgica), intralaminares (activación).",
    "Irrigación: ACP (arterias talamoperforantes y talamogeniculadas), arterias comunicante posterior y coroidea anterior."
  ],
  functions: [
    "Retransmisión y filtrado de la información sensorial a la corteza (excepto el olfato).",
    "Sueño–vigilia y nivel de conciencia; ritmos talamocorticales y husos del sueño (núcleo reticular).",
    "Atención: el pulvinar y el mecanismo de “compuerta” reticular.",
    "Retransmisión de la salida de los ganglios basales y el cerebelo a la corteza motora (VA/VL).",
    "Memoria de trabajo y función ejecutiva (mediodorsal–CPF); memoria (núcleo anterior — Papez)."
  ],
  tests: [
    "EEG: husos del sueño, punta-onda de 3 Hz en las crisis de ausencia",
    "Filtrado sensorial: supresión P50, inhibición por prepulso (IPP)",
    "Pruebas de atención"
  ],
  development: [
    "Los axones talamocorticales guían el mapeo de las áreas corticales en el período fetal.",
    "Los husos del sueño aparecen en la infancia (~2–3 meses); las conexiones talamocorticales maduran durante la infancia.",
    "Menor volumen y conectividad talámica tras el nacimiento prematuro."
  ],
  clinical: [
    "Epilepsia de ausencias infantil: un trastorno del ritmo talamocortical; los canales de calcio tipo T son la diana de la etosuximida. La etosuximida y el valproato son más eficaces que la lamotrigina; como el valproato causa problemas de atención con más frecuencia, la etosuximida es la primera elección (Glauser et al., 2010). [A]",
    "Esquizofrenia: menor volumen talámico y conectividad CPF–tálamo (también en casos de inicio temprano). En estudios de adultos, los husos del sueño (oscilaciones NREM de 12–16 Hz generadas por el núcleo reticular talámico) están marcadamente reducidos; el hallazgo es estable durante la noche, no se debe a los antipsicóticos y se relaciona con el rendimiento cognitivo (Ferrarelli et al., 2007, 2010). Un biomarcador candidato. [B]",
    "Síndrome de Tourette y TOC: el eslabón talámico del circuito CETC. En ENIGMA-TOC, el tálamo es más grande en niños no medicados (d = 0,38), mientras que en adultos el pálido es más grande y el hipocampo más pequeño. La biología del TOC infantil y del adulto puede diferir (Boedhoe et al., 2017). [A]",
    "Diferencias en el filtrado sensorial en TEA y esquizofrenia."
  ],
  treatment: [
    "Epilepsia de ausencias: comenzar con etosuximida; la ausencia de fracaso terapéutico a las 16 semanas fue del 53 % con etosuximida, 58 % con valproato y 29 % con lamotrigina; problemas de atención en el 49 % con valproato frente al 33 % con etosuximida (Glauser et al., 2010; 453 niños). La etosuximida no basta si también hay crisis tónico-clónicas generalizadas. [A]",
    "Estimulación cerebral profunda en el síndrome de Tourette: en un registro internacional (185 pacientes, 31 centros) la diana más frecuente fue el tálamo centromediano; a los 12 meses los tics motores cayeron alrededor del 38 % y los vocales un 43 %; la alteración del habla y la parestesia relacionadas con la estimulación son frecuentes pero reversibles (Martinez-Ramirez et al., 2018). Solo en casos refractarios y graves. [C]",
    "Estimulación cerebral profunda y ultrasonido focalizado del núcleo VIM talámico en el temblor esencial (adultos). [B]"
  ],
  lesion: [
    "Síndrome de dolor talámico (Dejerine-Roussy), pérdida sensorial contralateral.",
    "Amnesia talámica (anterior/mediodorsal); encefalopatía de Wernicke (déficit de tiamina — descrita en adolescentes con anorexia o tras cirugía bariátrica).",
    "Infarto paramediano bilateral: hipersomnia, apatía, parálisis de la mirada vertical."
  ],
  links: [
    "Toda la corteza (proyecciones talamocorticales y corticotalámicas)",
    "Ganglios basales (GPi → VA/VL)",
    "Cerebelo (dentado → VL)",
    "Hipocampo y cuerpo mamilar (núcleo anterior)",
    "Glutamato (proyección), GABA (reticular), aferencias de acetilcolina y noradrenalina"
  ]
},

hypothalamus: {
  name: "Hipotálamo e hipófisis", short: "HT",
  summary: "El gestor del equilibrio interno: regula la temperatura, el hambre, el sueño, el estrés y la pubertad mediante hormonas y el sistema nervioso autónomo.",
  anatomy: [
    "Suelo y paredes laterales inferiores del tercer ventrículo; debajo del tálamo (surco hipotalámico). La lámina terminal y el quiasma óptico quedan delante; los cuerpos mamilares, detrás.",
    "Núcleos: supraquiasmático (NSQ — reloj circadiano), paraventricular (CRH, oxitocina, vasopresina), supraóptico (ADH), arqueado (apetito, red de GnRH, dopamina), ventromedial (saciedad, defensa), lateral (orexina/hipocretina), preóptico (temperatura, sueño — VLPO).",
    "Hipófisis: lóbulo anterior (control hormonal por vasos porta), lóbulo posterior (liberación axonal de oxitocina y ADH).",
    "Irrigación: ramas del polígono de Willis, arteria hipofisaria superior."
  ],
  functions: [
    "Homeostasis: temperatura corporal, hambre–saciedad, sed y equilibrio hídrico.",
    "Sueño–vigilia y ritmo circadiano (NSQ, orexina, VLPO).",
    "Ejes neuroendocrinos: HHA (estrés–cortisol), HHG (pubertad), HHT (tiroides), hormona de crecimiento, prolactina.",
    "Control superior del sistema nervioso autónomo.",
    "Conductas motivadas básicas: alimentación, sexo, defensa; apego y vínculo social (oxitocina, vasopresina)."
  ],
  tests: [
    "Evaluación endocrina: ritmo de cortisol, prolactina (monitorización de antipsicóticos), tiroides",
    "Actigrafía y diario de sueño",
    "Curva de crecimiento, estadificación puberal de Tanner"
  ],
  development: [
    "Inicio de la pubertad: reactivación de la liberación pulsátil de GnRH (kisspeptina).",
    "Retraso de fase circadiano en la adolescencia: la melatonina se libera más tarde, tendencia a acostarse tarde.",
    "El estrés en la vida temprana cambia la programación del eje HHA."
  ],
  clinical: [
    "Anorexia nerviosa: amenorrea hipotalámica (supresión del HHG), activación del HHA.",
    "Aumento de peso por antipsicóticos (H1, 5-HT2C) e hiperprolactinemia (bloqueo tuberoinfundibular D2).",
    "Narcolepsia tipo 1: se pierde el 85–95 % de las neuronas de orexina (hipocretina) del hipotálamo lateral; las neuronas vecinas de MCH se conservan, y la gliosis sugiere un proceso degenerativo (probablemente autoinmune) (Thannickal et al., 2000). El inicio suele ser en la infancia y la adolescencia; puede confundirse con un problema de atención o depresión. [B]",
    "Síndrome de Prader-Willi (hiperfagia), craneofaringioma (obesidad hipotalámica, cambio de conducta).",
    "Hamartoma hipotalámico: crisis gelásticas (de risa), pubertad precoz, problemas de conducta.",
    "La pubertad temprana en niñas se asocia a mayor riesgo de depresión y ansiedad.",
    "Oxitocina en el autismo: en 290 niños de 3–17 años, 24 semanas de oxitocina intranasal no mejoraron la función social más que el placebo (SOARS-B; Sikich et al., 2021). El uso fuera de indicación no está respaldado. [B]"
  ],
  treatment: [
    "Narcolepsia (niños): el oxibato de sodio está aprobado por la FDA desde los 7 años para la cataplejía y la somnolencia diurna (2018); el pitolisant (agonista inverso del receptor H3 que aumenta la liberación de histamina) está aprobado desde los 6 años para la somnolencia diurna (2024). Ambos compensan aguas abajo la pérdida de orexina. [A]",
    "Síndrome de Prader-Willi: el diazóxido de colina (liberación prolongada) es el primer fármaco aprobado por la FDA para la hiperfagia, desde los 4 años (marzo de 2025). [A]",
    "Obesidad monogénica y sindrómica: la setmelanotida (agonista de MC4R) está aprobada por la FDA desde los 2 años para el déficit de POMC, PCSK1 o LEPR y el síndrome de Bardet-Biedl, y desde los 4 años para la obesidad hipotalámica adquirida (p. ej., tras craneofaringioma). Dirigida directamente a la vía de saciedad hipotalámica. [A]",
    "Pubertad precoz central: los agonistas de GnRH detienen la progresión puberal desensibilizando la hipófisis. [B]",
    "Monitorización de antipsicóticos: peso, glucemia en ayunas, lípidos y prolactina; la hiperprolactinemia proviene del bloqueo tuberoinfundibular D2.",
    "Oxitocina: ineficaz para la función social en el autismo (Sikich et al., 2021). [B]"
  ],
  lesion: [
    "Diabetes insípida, hipo/hipertermia.",
    "Hiperfagia y obesidad o caquexia; trastornos del sueño.",
    "Crisis de ira (ventromedial), deficiencias endocrinas, alteración de la memoria (cuerpos mamilares)."
  ],
  links: [
    "Hipófisis (sistema porta, neurohipófisis)",
    "Amígdala y BNST (estría terminal)",
    "Hipocampo (fórnix)",
    "Núcleos autonómicos del tronco del encéfalo y SGP",
    "Retina → NSQ (tracto retinohipotalámico)",
    "Orexina, histamina (tuberomamilar), oxitocina, CRH"
  ]
},

cc: {
  name: "Cuerpo calloso", short: "CC",
  summary: "El mayor puente de sustancia blanca que une los dos hemisferios; comparte entre ellos información sensorial, motora y cognitiva.",
  anatomy: [
    "La comisura más grande, formada por unos 200 millones de axones.",
    "Partes: pico (rostrum), rodilla (genu — frontal, fórceps menor), cuerpo (motor/somatosensorial), istmo, esplenio (occipitotemporal — fórceps mayor).",
    "Techo de los ventrículos laterales; el giro cingulado queda encima, el fórnix y el septum pellucidum debajo.",
    "Irrigación: arteria pericallosa (ACA); esplenio ACP."
  ],
  functions: [
    "Transferencia interhemisférica de información y coordinación.",
    "Coordinación motora bimanual.",
    "Dar acceso de la información del hemisferio derecho al sistema del lenguaje (denominación).",
    "Inhibición interhemisférica y apoyo a la lateralización; velocidad de procesamiento."
  ],
  tests: [
    "Escucha dicótica, localización cruzada de dedos",
    "Tareas de coordinación bimanual",
    "Medidas de anisotropía fraccional (AF) con DTI"
  ],
  development: [
    "Se mieliniza rápidamente tras el nacimiento; la maduración continúa en la adolescencia y la adultez temprana.",
    "La disminución de los movimientos en espejo se relaciona con la maduración callosa.",
    "El área transversal aumenta en la infancia y la adolescencia."
  ],
  clinical: [
    "Agenesia o hipoplasia del cuerpo calloso: alrededor de 1,8 por 10.000 nacimientos en un registro poblacional de California (3,4 millones de nacidos vivos); unas 4 veces más frecuente en prematuros (estudio poblacional de California, 2008). Aislada o sindrómica; asociada a dificultades sociocognitivas y TEA. Los resultados del desarrollo en casos aislados varían mucho, y el consejo prenatal debe reflejarlo. [A]",
    "TEA: menor volumen y AF del CC (metaanálisis).",
    "Negligencia en la vida temprana: menor área del CC (Teicher et al., 2004).",
    "Las anomalías del CC son frecuentes en el espectro alcohólico fetal y la prematuridad."
  ],
  treatment: [
    "En la agenesia: seguimiento del desarrollo e intervención temprana (habla, motricidad, habilidades sociales); evaluación de epilepsia y anomalías asociadas, estudio genético. [B]",
    "Tras la negligencia temprana (Teicher et al., 2004), la colocación temprana en un entorno de cuidado seguro y las intervenciones centradas en el apego son los mayores apoyos para el desarrollo. [B]"
  ],
  lesion: [
    "Síndrome de desconexión (cerebro dividido): anomia táctil y apraxia de la mano izquierda.",
    "Síndrome de la mano ajena; alexia sin agrafia con una lesión occipital izquierda + esplenio."
  ],
  links: [
    "Áreas corticales homotópicas (ambos hemisferios)",
    "Fórceps menor (frontal), fórceps mayor (occipital)",
    "Haz del cíngulo (encima)"
  ]
},

midbrain: {
  name: "Mesencéfalo", short: "Mesencéfalo",
  summary: "La fuente de dopamina: movimiento (sustancia negra) y recompensa–motivación (ATV); defensa, dolor y reflejos oculares.",
  anatomy: [
    "Entre el puente y el diencéfalo; el acueducto cerebral (de Silvio) recorre su centro.",
    "Tectum: colículo superior (orientación visual, sacadas), colículo inferior (audición).",
    "Tegmentum: sustancia negra pars compacta (dopamina nigroestriatal), área tegmental ventral (ATV — dopamina mesolímbica/mesocortical), núcleo rojo, sustancia gris periacueductal (SGP), núcleos de los pares craneales III y IV.",
    "Pedúnculos cerebrales (crus cerebri): fibras corticoespinales y corticopontinas. Irrigación: ACP, arteria cerebelosa superior."
  ],
  functions: [
    "Sistemas dopaminérgicos: movimiento (SNc) y recompensa–motivación–aprendizaje (ATV → NAcc, CPF).",
    "Orientación refleja de la mirada y la cabeza (colículo superior), orientación auditiva.",
    "SGP: conductas defensivas (congelación/huida), control endógeno opioide del dolor, vocalización.",
    "Movimientos oculares (III, IV), reflejo pupilar (Edinger-Westphal), vigilia (formación reticular)."
  ],
  tests: [
    "Reflejos pupilares a la luz y a la acomodación, exploración de movimientos oculares",
    "Imagen PET de dopamina (investigación)",
    "Paradigmas de error de predicción de recompensa"
  ],
  development: [
    "Las proyecciones de dopamina mesocortical se reorganizan en la adolescencia; los receptores dopaminérgicos estriatales alcanzan su máximo en la adolescencia (estudios animales) — sensibilidad a la recompensa.",
    "La orientación del recién nacido hacia las caras se explica en parte por una ruta subcortical (colículo superior–pulvinar) (Johnson)."
  ],
  clinical: [
    "TDAH: la hipótesis dopaminérgica; el metilfenidato y las anfetaminas actúan sobre el transportador de dopamina (DAT).",
    "Esquizofrenia: hiperdopaminergia mesolímbica (síntomas positivos), hipodopaminergia mesocortical (síntomas negativos/cognitivos).",
    "Consumo de sustancias: plasticidad en las neuronas dopaminérgicas del ATV.",
    "Síndrome de Tourette: hipersensibilidad dopaminérgica; tratamientos antagonistas y agonistas parciales D2.",
    "Tumores de la región pineal (adolescentes): compresión del mesencéfalo dorsal — síndrome de Parinaud, estenosis del acueducto e hidrocefalia."
  ],
  treatment: [
    "Los tratamientos dirigidos al sistema dopaminérgico (estimulantes, antipsicóticos, el nuevo antipsicótico no D2 xanomelina-trospio) están en las tarjetas del ATV y la SN. [A]",
    "Hidrocefalia por estenosis del acueducto en tumores de la región pineal: ventriculostomía endoscópica del tercer ventrículo o derivación; cirugía específica del tumor, quimioterapia, radioterapia. [A]",
    "El glioma difuso de línea media (H3 K27M) también puede aparecer en el mesencéfalo y el tálamo; el tratamiento está en la tarjeta del puente."
  ],
  lesion: [
    "Síndrome de Parinaud: parálisis de la mirada hacia arriba, disociación luz–acomodación.",
    "Síndrome de Weber: parálisis del III par ipsilateral + hemiparesia contralateral.",
    "Alucinosis peduncular; estenosis del acueducto → hidrocefalia obstructiva."
  ],
  links: [
    "Vía nigroestriatal (SNc → estriado dorsal)",
    "Vía mesolímbica (ATV → NAcc, amígdala, hipocampo)",
    "Vía mesocortical (ATV → CPF)",
    "SGP ↔ amígdala, hipotálamo",
    "Colículo superior ↔ COF, pulvinar"
  ]
},

pons: {
  name: "Puente (protuberancia)", short: "Puente",
  summary: "El puente entre la corteza y el cerebelo; fuente de noradrenalina (locus coeruleus) y serotonina (rafe), y generador del sueño REM.",
  anatomy: [
    "La parte media del tronco del encéfalo. Porción basilar ventral: núcleos pontinos y fibras transversas → pedúnculo cerebeloso medio.",
    "Tegmentum dorsal: locus coeruleus (noradrenalina), núcleos del rafe (serotonina), formación reticular pontina, PPN/LDT colinérgicos (REM).",
    "Núcleos de los pares craneales V, VI, VII y VIII; fascículo longitudinal medial (FLM).",
    "Irrigación: arteria basilar (ramas paramedianas y circunferenciales), AICA."
  ],
  functions: [
    "Vía corticopontocerebelosa: retransmite los planes motores de la corteza al cerebelo.",
    "Locus coeruleus: activación, atención (relación en U invertida con el rendimiento), respuesta de estrés.",
    "Rafe: regulación serotoninérgica del ánimo, la impulsividad, el sueño y el apetito.",
    "Sueño REM y atonía REM; transiciones sueño–vigilia.",
    "Sensibilidad facial y masticación (V), expresión facial (VII), audición y equilibrio (VIII), mirada lateral (VI), ajuste del ritmo respiratorio."
  ],
  tests: [
    "Polisomnografía (sueño REM)",
    "Potenciales evocados auditivos de tronco (PEAT)",
    "Pupilometría (índice indirecto de actividad del LC — investigación); exploración de pares craneales"
  ],
  development: [
    "El sueño REM supone cerca de la mitad del sueño total en el recién nacido y disminuye en la infancia.",
    "Los PEAT son un índice de maduración del tronco del encéfalo en prematuros.",
    "La serotonina también actúa como señal neurotrófica en el desarrollo cerebral temprano."
  ],
  clinical: [
    "Ansiedad y pánico: hiperactividad del LC. TEPT: hiperactivación, pesadillas (el antagonista α1 prazosina, agonistas α2).",
    "TDAH: tratamientos noradrenérgicos (atomoxetina; los agonistas α2A guanfacina y clonidina).",
    "Depresión, ansiedad, TOC: tratamientos serotoninérgicos (ISRS).",
    "Cataplejía en la narcolepsia (la atonía REM irrumpe en la vigilia); trastorno de pesadillas.",
    "Glioma difuso de línea media (H3 K27M, antes DIPG): un tumor pontino (también talámico y espinal) que afecta sobre todo a niños de 3–10 años; el tratamiento estándar es la radioterapia y el pronóstico es malo. [A]",
    "Síndrome de Möbius (afectación de los nervios VI y VII); se ha descrito coexistencia con TEA."
  ],
  treatment: [
    "Dordaviprona (ONC201; antagonista D2/3 y activador mitocondrial de ClpP): aprobación acelerada de la FDA (agosto de 2025) desde 1 año para el glioma difuso de línea media con mutación H3 K27M que ha progresado pese al tratamiento previo; tasa de respuesta del 22 % en 50 pacientes, mediana de duración de la respuesta 10,3 meses. El primer fármaco sistémico aprobado para este tumor; hay un ensayo de fase III al diagnóstico en curso. [A]",
    "Los tratamientos noradrenérgicos y serotoninérgicos (atomoxetina, agonistas α2, ISRS) están en las tarjetas del LC y el rafe. [A]",
    "En el síndrome de Möbius: cirugía de la parálisis facial (cirugía de la sonrisa) y terapia del habla y la alimentación; la ausencia de expresión facial en la comunicación social puede complicar la evaluación de TEA. [C]"
  ],
  lesion: [
    "Síndrome de enclaustramiento: puente ventral — se conservan la conciencia y los movimientos oculares verticales.",
    "Oftalmoplejía internuclear (FLM), síndrome de Millard-Gubler.",
    "Trastorno de conducta del sueño REM."
  ],
  links: [
    "Locus coeruleus → toda la corteza, hipocampo, amígdala, tálamo (noradrenalina)",
    "Rafe → corteza, sistema límbico, estriado (serotonina)",
    "Núcleos pontinos → cerebelo",
    "PPN/LDT → tálamo (acetilcolina)"
  ]
},

medulla: {
  name: "Médula oblongada (bulbo raquídeo)", short: "MO",
  summary: "Centros vitales: ritmo respiratorio, corazón y presión arterial, deglución y vómito; el último paso entre el cerebro y la médula espinal.",
  anatomy: [
    "La parte más baja del tronco del encéfalo; continúa con la médula espinal en el foramen magno.",
    "Ventralmente las pirámides (tracto corticoespinal; el 85–90 % se decusa) y la oliva (núcleo olivar inferior — fibras trepadoras al cerebelo).",
    "Dorsalmente los núcleos grácil y cuneiforme; núcleo del tracto solitario (NTS — sensibilidad visceral, gusto, barorreflejo), núcleo motor dorsal del vago, núcleo ambiguo (IX, X), núcleo del XII.",
    "Área postrema (zona gatillo quimiorreceptora del vómito); el complejo pre-Bötzinger en la médula ventrolateral (generador del ritmo respiratorio). Irrigación: arteria vertebral, PICA, arteria espinal anterior."
  ],
  functions: [
    "Ritmo respiratorio; control de la frecuencia cardíaca y la presión arterial (barorreflejo).",
    "Deglución, tos, estornudo, vómito (área postrema).",
    "Salida vagal (parasimpática) y retransmisión de la sensibilidad visceral al cerebro (NTS → parabraquial → hipotálamo, amígdala, ínsula).",
    "Paso y decusación de las vías sensitivas y motoras; movimientos de la lengua (XII), voz (X)."
  ],
  tests: [
    "Variabilidad de la frecuencia cardíaca (VFC — índice del tono vagal)",
    "Arritmia sinusal respiratoria (ASR) — en investigación de regulación emocional",
    "Evaluación de la deglución, pruebas autonómicas ortostáticas"
  ],
  development: [
    "El control respiratorio madura después del nacimiento (apnea del prematuro).",
    "Se han demostrado anomalías serotoninérgicas bulbares en el síndrome de muerte súbita del lactante (SMSL) (Kinney y Richerson, 2009).",
    "El tono vagal (ASR) se desarrolla en la infancia en relación con las habilidades de regulación emocional."
  ],
  clinical: [
    "VFC reducida en los trastornos de ansiedad.",
    "Anorexia nerviosa: bradicardia por dominancia vagal.",
    "Náuseas al iniciar ISRS (5-HT3 del área postrema); depresión respiratoria en la sobredosis de opioides (receptores μ del complejo pre-Bötzinger).",
    "Síndrome de Rett: irregularidades respiratorias por disfunción autonómica del tronco del encéfalo.",
    "Malformación de Chiari: cefalea, apnea del sueño, dificultad para tragar."
  ],
  treatment: [
    "Síndrome de Rett: la trofinetida (un análogo tripeptídico derivado del extremo N-terminal del IGF-1) es el primer fármaco aprobado por la FDA, desde los 2 años (marzo de 2023). En 187 niñas de 5–20 años fue superior al placebo en una escala de conducta a las 12 semanas; la diarrea (82 %) y el vómito (29 %) son frecuentes. Las irregularidades respiratorias requieren vigilancia aparte. [A]",
    "Las náuseas al iniciar ISRS (5-HT3 del área postrema) suelen pasar en 1–2 semanas; tomar el fármaco con comida y una titulación lenta ayudan. [B]",
    "En la sobredosis de opioides, la naloxona rápida revierte el efecto del receptor μ sobre el centro respiratorio (pre-Bötzinger); se recomienda formación en naloxona para adolescentes y sus familias. [A]",
    "Descompresión de la fosa posterior en la malformación de Chiari sintomática. [B]"
  ],
  lesion: [
    "Síndromes medular lateral (Wallenberg) y medular medial.",
    "Disfagia, disartria; el fallo respiratorio y cardiovascular es potencialmente mortal."
  ],
  links: [
    "Nervio vago (aferente/eferente visceral)",
    "NTS → hipotálamo, amígdala, ínsula",
    "Oliva inferior → cerebelo",
    "Tracto corticoespinal (decusación piramidal)",
    "Rafe oscuro/magno → médula espinal (modulación del dolor)"
  ]
},

cerebellum: {
  name: "Cerebelo", short: "CB",
  summary: "Cronometra y corrige el movimiento, y aplica el mismo cálculo al pensamiento, el lenguaje y la emoción. Aquí están la mayoría de las neuronas del cerebro.",
  anatomy: [
    "En la fosa craneal posterior, debajo de la tienda del cerebelo; el vermis en la línea media y dos hemisferios. Lóbulos anterior, posterior y floculonodular; folias.",
    "Corteza: capas molecular, de Purkinje y granular. Núcleos profundos: dentado, interpuesto (emboliforme + globoso), fastigial.",
    "Pedúnculos: superior (salida — dentado-rubro-talámico), medio (aferencia pontina), inferior (aferencia espinal y olivar).",
    "Aquí están cerca del 80 % de las neuronas del cerebro (células granulares). Irrigación: SCA, AICA, PICA."
  ],
  functions: [
    "Coordinación motora, equilibrio y postura (vermis, lóbulo floculonodular).",
    "Cronometraje y predicción del movimiento (modelos internos), aprendizaje motor.",
    "Movimientos oculares y adaptación del reflejo vestíbulo-ocular.",
    "Funciones cognitivas: los hemisferios posteriores laterales (Crus I/II) forman bucles con la CPF — memoria de trabajo, lenguaje, cronometraje.",
    "Regulación emocional (vermis posterior — el “cerebelo límbico”), cognición social."
  ],
  tests: [
    "Dedo–nariz, talón–rodilla, movimientos alternantes rápidos (disdiadococinesia)",
    "Marcha en tándem, Romberg",
    "Tareas de ritmo y cronometraje; condicionamiento del parpadeo"
  ],
  development: [
    "Crece muy rápido en el último trimestre y los primeros años; su volumen aumenta alrededor del 240 % en el primer año (Knickmeyer et al., 2008).",
    "El volumen máximo llega más tarde que en la corteza, en la adolescencia (Tiemeier et al., 2010).",
    "La lesión cerebelosa tras el nacimiento prematuro se ha relacionado con un cribado positivo de TEA (Limperopoulos et al., 2007)."
  ],
  clinical: [
    "TEA: pérdida posmortem de células de Purkinje, hipoplasia del vermis; la lesión cerebelosa temprana se ha propuesto como uno de los factores de riesgo más fuertes (Wang, Kloth y Badura, 2014).",
    "TDAH: menor volumen del vermis posteroinferior, dificultades de cronometraje.",
    "Síndrome de fosa posterior (mutismo cerebeloso): apareció en el 24 % de 450 niños tras cirugía de meduloblastoma; la afectación preoperatoria del tronco del encéfalo fue el único factor de riesgo. Al año, los problemas de habla-lenguaje y cognitivos y la ataxia persistían en una gran proporción (Robertson et al., 2006). [A]",
    "Síndrome cognitivo-afectivo cerebeloso (Schmahmann).",
    "Síndrome de Joubert (el signo del “diente molar”), TEAF (vermis), “dismetría cognitiva” en la esquizofrenia (Andreasen).",
    "Síntomas negativos en la esquizofrenia: cuanto más débil es la conectividad entre la CPFDL derecha y el cerebelo, más graves son los síntomas negativos; en 11 pacientes, 5 días de EMT sobre el vermis (lóbulo VIIb) restauraron la conectividad, y el aumento se relacionó con la mejoría sintomática (Brady et al., 2019). Un estudio posterior controlado con placebo no halló diferencias entre brazos (Basavaraju et al., 2021; 60 pacientes; la conectividad aumentó y los síntomas mejoraron en ambos brazos); la diana es prometedora pero no está probada. [C]"
  ],
  treatment: [
    "En el síndrome de fosa posterior: terapia intensiva del habla-lenguaje y rehabilitación neuropsicológica; se informa a las familias de que el mutismo es transitorio. [B]",
    "La EMT cerebelosa (vermis) para los síntomas negativos en la esquizofrenia es experimental (Brady et al., 2019). [C]",
    "En TEA y TDAH el cerebelo no es una diana terapéutica; terapia ocupacional para las dificultades motoras y de cronometraje."
  ],
  lesion: [
    "Ataxia ipsilateral, dismetría, temblor intencional, disdiadococinesia, nistagmo, disartria escandida, hipotonía.",
    "Vermis: ataxia troncal.",
    "Lóbulo posterior: alteraciones ejecutivas, visuoespaciales, del lenguaje y afectivas (afecto aplanado, desinhibición)."
  ],
  links: [
    "Puente (aferencia corticopontocerebelosa)",
    "Oliva inferior (fibras trepadoras)",
    "Dentado → tálamo VL → corteza motora y prefrontal",
    "Núcleo rojo",
    "Núcleos vestibulares"
  ]
}

});
