/* Textos de regiones en español 8/8 (regions-8.js: núcleos talámicos y subestructuras del cerebelo). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

th_ant: {
  name: "Grupo nuclear anterior", short: "NA",
  summary: "La estación talámica del circuito de Papez: retransmite información del cuerpo mamilar a la corteza cingulada, apoyando la memoria episódica y la navegación.",
  anatomy: [
    "En el extremo anterior del tálamo, entre las dos ramas de la lámina medular interna.",
    "Aferencia: cuerpo mamilar (tracto mamilotalámico) y formación hipocampal (fórnix); salida: corteza cingulada y retroesplenial."
  ],
  functions: [
    "Consolidación de la memoria episódica (circuito de Papez).",
    "Navegación espacial; señales de dirección de la cabeza."
  ],
  clinical: [
    "Alteración de la memoria en la amnesia talámica y el síndrome de Wernicke-Korsakoff (cuerpo mamilar–tálamo anterior).",
    "Estimulación cerebral profunda del núcleo talámico anterior en la epilepsia focal refractaria (adultos)."
  ],
  treatment: [
    "Estimulación cerebral profunda del núcleo talámico anterior en la epilepsia focal refractaria (SANTE; 110 pacientes): reducción mediana de la frecuencia de crisis del 40,4 % frente al 14,5 % con placebo en la fase ciega; 75 % a los 7 años en el seguimiento abierto. Aprobación de la FDA en 2018, a partir de 18 años (Fisher et al., 2010). [A]",
    "Tiamina de urgencia en la encefalopatía de Wernicke; también puede ocurrir en adolescentes con anorexia nerviosa y tras cirugía bariátrica. [A]"
  ]
},

th_md: {
  name: "Núcleo mediodorsal", short: "MD",
  summary: "El socio talámico de la corteza prefrontal: lleva a cabo la memoria de trabajo, la toma de decisiones y el aprendizaje de recompensa junto con los circuitos prefrontales.",
  anatomy: [
    "En el tálamo medial, junto al tercer ventrículo, medial a la lámina medular interna.",
    "Conectado recíprocamente con la CPFDL, la COF y la CCA; aferencias: amígdala, pálido ventral, SNr."
  ],
  functions: [
    "Memoria de trabajo y flexibilidad cognitiva: sostener la actividad prefrontal.",
    "Retransmisión de información de recompensa y valor a la corteza prefrontal (bucle límbico)."
  ],
  clinical: [
    "Esquizofrenia: menor volumen del núcleo mediodorsal y diferencias en la conectividad prefrontal–talámica.",
    "Contribuye a la alteración de la memoria en el síndrome de Korsakoff."
  ]
},

th_va: {
  name: "Núcleo ventral anterior", short: "VA",
  summary: "Una estación de planificación motora que retransmite la salida de los ganglios basales a la corteza premotora y prefrontal.",
  anatomy: [
    "En la parte ventral anterior del tálamo.",
    "Aferencia: GPi y SNr (GABAérgica); salida: corteza premotora, AMS y corteza prefrontal."
  ],
  functions: [
    "Planificación e inicio del movimiento (bucle ganglios basales–tálamo–corteza)."
  ],
  clinical: [
    "Los trastornos de la salida de los ganglios basales (parkinsonismo, distonía, tics) llegan a la corteza a través de este eslabón talámico."
  ]
},

th_vld: {
  name: "Grupo ventral lateral (parte dorsal)", short: "VLd",
  summary: "La parte dorsal de la región ventral lateral: el área que contiene los núcleos de relevo que pasan la aferencia cerebelosa y de ganglios basales a la corteza motora.",
  anatomy: [
    "El atlas define este grupo agrupando la información de orientación de la RM de difusión; lleva el nombre de los núcleos clásicos, pero sus límites no coinciden uno a uno con los núcleos histológicos.",
    "El núcleo ventral lateral recibe aferencias del cerebelo (dentado) y del globo pálido y las retransmite a la corteza motora."
  ],
  functions: [
    "Relevo de la aferencia cerebelosa y de ganglios basales a la corteza motora; coordinación del movimiento."
  ],
  clinical: [
    "El núcleo VIM de la región ventral lateral es la diana de la estimulación cerebral profunda y del ultrasonido focalizado en el temblor esencial (adultos)."
  ],
  treatment: [
    "Talamotomía con ultrasonido focalizado guiado por RM dirigida al tálamo ventral (VIM) en el temblor esencial: en 76 pacientes, el temblor de la mano cayó notablemente a los 3 meses en comparación con un procedimiento simulado (Elias et al., 2016); sin incisión y unilateral. Una alternativa a la estimulación cerebral profunda. Adultos. [A]"
  ]
},

th_vlv: {
  name: "Grupo ventral lateral (parte ventral)", short: "VLv",
  summary: "La parte ventral de la región ventral lateral: un área junto a los núcleos de relevo motor y sensorial, conectada recíprocamente con la corteza.",
  anatomy: [
    "El atlas define este grupo agrupando la información de orientación de la RM de difusión; sus límites no coinciden uno a uno con los núcleos histológicos.",
    "En el tálamo ventral y lateral, junto a los núcleos ventrales posteriores (relevo sensorial)."
  ],
  functions: [
    "Transferencia recíproca de información motora y sensorial con la corteza."
  ]
},

th_cl: {
  name: "Central lateral – lateral posterior – pulvinar medial", short: "CL-LP-MPu",
  summary: "Un grupo que contiene el núcleo intralaminar central lateral, relacionado con la activación, y los núcleos lateral posterior y pulvinar medial ligados a cortezas de asociación.",
  anatomy: [
    "El atlas agrupa estos núcleos por patrones compartidos de conectividad cortical.",
    "El núcleo central lateral pertenece al grupo intralaminar; el lateral posterior y el pulvinar medial se conectan con cortezas parietales y límbicas."
  ],
  functions: [
    "Mantenimiento de la vigilia y del nivel de conciencia (núcleos intralaminares; la red de activación).",
    "Atención e integración multisensorial (lateral posterior, pulvinar medial)."
  ],
  clinical: [
    "La estimulación del tálamo central se ha estudiado en los trastornos de la conciencia tras traumatismo craneoencefálico grave (Schiff et al., 2007)."
  ]
},

th_pul: {
  name: "Pulvinar", short: "Pul",
  summary: "El núcleo talámico más grande: regula la atención visual, la saliencia y la comunicación entre áreas corticales.",
  anatomy: [
    "En el extremo posterior del tálamo, por encima del cuerpo geniculado lateral.",
    "Conectado recíprocamente con cortezas visual y de asociación (parietal, temporal, prefrontal); recibe aferencia del colículo superior."
  ],
  functions: [
    "Orientación de la atención visual y filtrado de distractores.",
    "Regulación de la sincronía entre áreas corticales.",
    "Ruta colículo superior–pulvinar–amígdala: procesamiento rápido y no consciente de los estímulos de amenaza."
  ],
  clinical: [
    "Negligencia atencional contralateral con lesiones del pulvinar.",
    "Se han descrito diferencias en la estructura y conectividad del pulvinar en TEA y esquizofrenia."
  ]
},

cb_ant: {
  name: "Lóbulo anterior (lóbulos I–V)", short: "I–V",
  summary: "El lóbulo anterior sensoriomotor del cerebelo: el primer mapa somatotópico del tronco y las extremidades; regula la marcha y la postura.",
  anatomy: [
    "Delante de la fisura primaria; lóbulos I–V del vermis y los hemisferios.",
    "Recibe aferencias de la médula espinal (tractos espinocerebelosos) y de la corteza motora (vía los núcleos pontinos)."
  ],
  functions: [
    "Marcha, postura y coordinación de las extremidades.",
    "El primer mapa corporal sensoriomotor (continuo con los lóbulos V–VI)."
  ],
  clinical: [
    "Ataxia troncal y de la marcha con daño del lóbulo anterior (especialmente el vermis)."
  ]
},

cb_vi: {
  name: "Lóbulo VI", short: "VI",
  summary: "Un lóbulo de transición entre regiones sensoriomotoras y cognitivas: activo en tareas de movimiento, lenguaje y atención.",
  anatomy: [
    "Justo detrás de la fisura primaria; el primer lóbulo del lóbulo posterior (parte hemisférica; el vermis VI está en el vermis posterior)."
  ],
  functions: [
    "Continuación del mapa sensoriomotor (mano, cara).",
    "Contribución a la memoria de trabajo verbal y al procesamiento del lenguaje."
  ]
},

cb_crus1: {
  name: "Crus I", short: "Crus I",
  summary: "El núcleo cognitivo del cerebelo: forma bucles con la corteza prefrontal y parietal y apoya la función ejecutiva y el lenguaje.",
  anatomy: [
    "La parte superior del lóbulo VII (lóbulo ansiforme); el lóbulo más grande de los hemisferios.",
    "Conectado con la corteza prefrontal y parietal contralaterales vía los núcleos pontinos y el dentado–tálamo."
  ],
  functions: [
    "La representación cerebelosa de las redes de control ejecutivo y por defecto (Buckner et al., 2011).",
    "Lenguaje y memoria de trabajo verbal (especialmente el Crus I derecho)."
  ],
  tests: [
    "Escala del Síndrome Cognitivo-Afectivo Cerebeloso (escala CCAS): un cribado de cabecera con ítems como cambio de categoría, dígitos en orden inverso, fluidez de letras y registro verbal. Síndrome posible, probable y definido según el número de ítems fallados (Hoche et al., 2018). Útil a nivel de grupo, especificidad limitada para el diagnóstico individual; sin versión infantil. [B]"
  ],
  clinical: [
    "TEA: diferencias en la conectividad entre el Crus I derecho y la corteza prefrontal; estimular este circuito en ratones rescató la conducta social (Stoodley et al., 2017)."
  ]
},

cb_crus2: {
  name: "Crus II", short: "Crus II",
  summary: "Una región del lóbulo posterior implicada en el procesamiento social y cognitivo: conectada con las redes de mentalización y ejecutiva.",
  anatomy: [
    "La parte inferior del lóbulo VII; separada del Crus I por la fisura horizontal."
  ],
  functions: [
    "Activo durante la mentalización (comprender las intenciones y creencias de los demás) (Van Overwalle et al., 2014).",
    "Participación en las redes de control ejecutivo y por defecto."
  ],
  clinical: [
    "Se estudia la afectación cerebelosa posterior en el TEA y las dificultades sociocognitivas."
  ]
},

cb_viib: {
  name: "Lóbulo VIIb", short: "VIIb",
  summary: "Un lóbulo del lóbulo posterior entre el Crus II y el lóbulo VIII, conectado con las redes de atención y memoria de trabajo.",
  anatomy: [
    "La parte más baja del lóbulo VII; separada del lóbulo VIII por la fisura prepiramidal."
  ],
  functions: [
    "Activación en tareas de la red de atención dorsal y de memoria de trabajo."
  ]
},

cb_viii: {
  name: "Lóbulo VIII (VIIIa–VIIIb)", short: "VIII",
  summary: "El lóbulo que lleva el segundo mapa corporal sensoriomotor; también conectado con redes de atención.",
  anatomy: [
    "Lóbulo biventral; subdivisiones VIIIa y VIIIb (parte hemisférica; el vermis VIII está en el vermis posterior)."
  ],
  functions: [
    "El segundo mapa somatotópico sensoriomotor (Grodd et al., 2001).",
    "Participación en la red de atención dorsal (VIIIa)."
  ]
},

cb_ix: {
  name: "Lóbulo IX (amígdala cerebelosa)", short: "IX",
  summary: "Una región del lóbulo posterior conectada con la red por defecto; su parte hemisférica es la amígdala cerebelosa.",
  anatomy: [
    "Su parte hemisférica es la amígdala (tonsila) y su parte vermiana la úvula (en el modelo, la úvula está en el vermis posterior); justo por encima del foramen magno."
  ],
  functions: [
    "La representación cerebelosa de la red por defecto (Buckner et al., 2011)."
  ],
  clinical: [
    "Malformación de Chiari tipo I: las amígdalas cerebelosas se extienden por debajo del foramen magno; cefalea, apnea del sueño, dificultad para tragar."
  ]
},

cb_x: {
  name: "Lóbulo floculonodular (lóbulo X)", short: "X",
  summary: "El vestibulocerebelo: regula el equilibrio, la coordinación ojo–cabeza y el mantenimiento estable de la mirada.",
  anatomy: [
    "Flóculo (hemisferios) y nódulo (vermis); separados por la fisura posterolateral.",
    "Conectado directamente con los núcleos vestibulares."
  ],
  functions: [
    "Equilibrio y postura troncal.",
    "Calibración del reflejo vestíbulo-ocular y mantenimiento estable de la mirada."
  ],
  clinical: [
    "El daño causa ataxia troncal, marcha de base amplia y nistagmo.",
    "El meduloblastoma (el tumor cerebral maligno más frecuente de la infancia) suele surgir en la línea media, alrededor del vermis y el cuarto ventrículo."
  ]
},

cb_vermis: {
  name: "Vermis posterior (lóbulos VI–IX)", short: "Vermis",
  summary: "El “cerebelo límbico” de la línea media: ligado a la regulación emocional, los movimientos oculares y las respuestas autonómicas.",
  anatomy: [
    "La franja de la línea media entre los hemisferios: declive (VI), folium y tuber (VII), pirámide (VIII), úvula (IX).",
    "Envía salida a los núcleos vestibulares y la formación reticular vía el núcleo fastigial."
  ],
  functions: [
    "Regulación emocional y del afecto (el concepto de Schmahmann del “cerebelo límbico”).",
    "Calibración de los movimientos oculares sacádicos y de seguimiento lento (vermis oculomotor VI–VII)."
  ],
  clinical: [
    "TEA: se ha descrito hipoplasia del vermis VI–VII (Courchesne et al., 1988).",
    "TDAH: menor volumen del vermis posteroinferior.",
    "Síndrome de fosa posterior (mutismo cerebeloso): en niños tras cirugía de un tumor del vermis."
  ]
},

cb_dentate: {
  name: "Núcleo dentado", short: "ND",
  summary: "El núcleo cerebeloso profundo más grande: lleva la salida de los hemisferios laterales vía el tálamo a la corteza motora y prefrontal.",
  anatomy: [
    "En la sustancia blanca hemisférica, con forma de bolsa arrugada; su hilio mira medial y hacia delante.",
    "Salida: pedúnculo cerebeloso superior → núcleo rojo contralateral y tálamo (VL) → corteza."
  ],
  functions: [
    "Planificación y cronometraje motor (parte dorsal).",
    "Funciones cognitivas: su parte ventral forma un bucle con la corteza prefrontal (Dum y Strick, 2003)."
  ],
  clinical: [
    "Atrofia del núcleo dentado en la ataxia de Friedreich.",
    "Los trastornos de la vía dentado-tálamo-cortical causan temblor y ataxia."
  ]
},

cb_interposed: {
  name: "Núcleo interpuesto (emboliforme y globoso)", short: "IP",
  summary: "La salida de la región paravermal: corrige los movimientos de las extremidades sobre la marcha; participa en el aprendizaje del parpadeo condicionado.",
  anatomy: [
    "Entre los núcleos dentado y fastigial; formado por los núcleos emboliforme y globoso.",
    "Salida: núcleo rojo contralateral y tálamo."
  ],
  functions: [
    "Corrección de los errores de las extremidades durante el movimiento.",
    "Aprendizaje del reflejo de parpadeo condicionado (estudios animales)."
  ],
  clinical: [
    "El daño causa temblor intencional ipsilateral y dismetría."
  ]
}

});
