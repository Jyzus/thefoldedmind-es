/* Textos de regiones en español 6/8 (regions-6.js: núcleos del tronco del encéfalo del Harvard AAN). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

lc: {
  name: "Locus coeruleus", short: "LC",
  summary: "La principal fuente de noradrenalina del cerebro: ajusta la vigilia, la atención y la respuesta de estrés; un núcleo pequeño que alcanza casi todo el cerebro.",
  anatomy: [
    "Una fina columna de células de unos 15 mm de largo en el tegmento pontino dorsolateral, cerca del suelo del cuarto ventrículo; llamado así por el color azulado que le da el pigmento neuromelanina.",
    "Solo unas decenas de miles de neuronas noradrenérgicas por lado; sin embargo, sus axones se ramifican en casi todas las regiones del cerebro.",
    "Salidas: corteza, hipocampo, amígdala, tálamo e hipotálamo (haz noradrenérgico dorsal); cerebelo y médula espinal. Poca contribución al estriado.",
    "Aferencias: núcleo paragigantocelular y prepositus hypoglossi en la médula oblongada, corteza prefrontal (CCA, COF), núcleo central de la amígdala (CRF), hipotálamo lateral (orexina)."
  ],
  functions: [
    "Nivel de vigilia y activación: activo al despertar, se enlentece en el sueño NREM y queda casi en silencio en el sueño REM.",
    "Atención: las respuestas fásicas apoyan la concentración en una tarea; la actividad tónica alta apoya la distraibilidad y la exploración (teoría de la ganancia adaptativa; Aston-Jones y Cohen, 2005).",
    "Corteza prefrontal: la noradrenalina moderada fortalece la memoria de trabajo vía receptores α2A; los niveles altos de estrés la perjudican vía receptores α1 y β (relación en U invertida).",
    "Respuesta de estrés: activado por CRF de la amígdala, aumenta la vigilancia y la activación simpática.",
    "Fortalece la consolidación de los acontecimientos emocionalmente importantes (noradrenalina en la amígdala y el hipocampo).",
    "Inhibición descendente del dolor: fibras noradrenérgicas a la médula espinal suprimen la transmisión del dolor."
  ],
  tests: [
    "Pupilometría: el diámetro pupilar y las respuestas pupilares fásicas son índices indirectos de la actividad del LC (investigación)",
    "Paradigma oddball y el componente P3: ligados a la respuesta fásica del LC (Nieuwenhuis et al., 2005)",
    "Pruebas de ejecución continua y variabilidad del tiempo de reacción: regulación de la activación y la atención",
    "Intensidad de señal del LC con RM sensible a neuromelanina (investigación)"
  ],
  development: [
    "Las neuronas del LC se forman temprano en la vida embrionaria; la noradrenalina también actúa como señal que influye en la migración neuronal y la formación de sinapsis durante el desarrollo cortical (estudios animales).",
    "En modelos animales, el estrés temprano puede aumentar de forma permanente la sensibilidad del LC al CRF y su reactividad al estrés.",
    "Se ha demostrado disfunción de las neuronas del LC en modelos de ratón del síndrome de Rett."
  ],
  clinical: [
    "TDAH: la atomoxetina (inhibidor de la recaptación de noradrenalina), la guanfacina y la clonidina (agonistas α2A) apoyan la función prefrontal; los estimulantes también elevan la noradrenalina.",
    "Ansiedad y pánico: mayor reactividad noradrenérgica; el antagonista α2 yohimbina puede desencadenar síntomas similares al pánico en personas con trastorno de pánico.",
    "TEPT: hiperactivación, sobresalto exagerado, pesadillas. El antagonista α1 prazosina se ha usado para las pesadillas, pero no fue superior al placebo en un gran ensayo (Raskind et al., 2018).",
    "Depresión: antidepresivos con acción noradrenérgica (IRSN, bupropión).",
    "Abstinencia de opioides: la hiperactividad del LC contribuye a los síntomas autonómicos de abstinencia; la clonidina y la lofexidina los alivian."
  ],
  treatment: [
    "Atomoxetina: inhibidor de la recaptación de noradrenalina; eleva la noradrenalina y la dopamina prefrontales (en la corteza prefrontal, la dopamina también es recaptada por el transportador de noradrenalina). Una opción no estimulante en TDAH. [A]",
    "Clonidina y guanfacina (agonistas α2A): la clonidina reduce la descarga del LC; la guanfacina actúa principalmente cerrando los canales HCN de las espinas prefrontales, fortaleciendo la red de memoria de trabajo (Wang et al., 2007). Eficaces en TDAH. [A] La evidencia para los tics es más débil: la clonidina tiene ensayos positivos, mientras que la guanfacina de liberación prolongada no superó al placebo en un pequeño ensayo pediátrico (Murphy et al., 2017). [B]",
    "Lofexidina y clonidina: reducen los síntomas autonómicos de la hiperactividad del LC en la abstinencia de opioides; la lofexidina está aprobada por la FDA en adultos (2018). [A]",
    "Prazosina (antagonista α1): muy usada para las pesadillas del TEPT, pero no superior al placebo en un gran ensayo multicéntrico (Raskind et al., 2018). [B]",
    "Propranolol (antagonista β): usado para los síntomas corporales de la ansiedad de rendimiento; su uso para bloquear la reconsolidación de recuerdos traumáticos es experimental. [C]"
  ],
  lesion: [
    "Las lesiones aisladas del LC son raras en humanos; en animales se alteran la vigilia, la reorientación de la atención y la respuesta de estrés.",
    "Déficit de dopamina β-hidroxilasa (no se puede fabricar noradrenalina): hipotensión ortostática congénita grave, ptosis, congestión nasal.",
    "En la enfermedad de Parkinson y la de Alzheimer, las neuronas del LC se pierden temprano (adultos)."
  ],
  links: [
    "LC → corteza, hipocampo, amígdala, tálamo (haz noradrenérgico dorsal)",
    "LC → cerebelo y médula espinal (inhibición descendente del dolor)",
    "Núcleo central de la amígdala → LC (CRF; estrés)",
    "Corteza prefrontal (CCA, COF) → LC (control de arriba abajo)",
    "Hipotálamo lateral → LC (orexina; vigilia)",
    "Noradrenalina: receptores α1, α2A y β"
  ]
},

raphe: {
  name: "Núcleos del rafe (dorsal y mediano)", short: "RD / RM",
  summary: "La principal fuente de serotonina del prosencéfalo: regula el ánimo, el control de impulsos, el sueño y el afrontamiento del estrés; el centro del sistema sobre el que actúan los ISRS.",
  anatomy: [
    "El grupo superior (rostral) de núcleos serotoninérgicos alineados a lo largo de la línea media del tronco del encéfalo (rafe: costura); el grupo inferior (rafe magno, oscuro, pálido) está en la médula oblongada y proyecta a la médula espinal.",
    "Rafe dorsal (RD): en el mesencéfalo y el puente superior, ventral al acueducto y a la SGP; la fuente de la mayoría de las fibras serotoninérgicas del prosencéfalo.",
    "Rafe mediano (RM, núcleo central superior): en la línea media del puente superior, ventral al RD; proyecta especialmente al hipocampo y al septum.",
    "Algunas neuronas no son serotoninérgicas: también hay neuronas GABA, glutamato y dopamina."
  ],
  functions: [
    "Regulación del ánimo y de la reactividad emocional a los estímulos negativos.",
    "Control de impulsos: poder esperar una recompensa demorada y detener la conducta ante el castigo.",
    "Sueño–vigilia: más activo al despertar, reducido en el sueño NREM y silente en el REM; contribuye al apetito y al ritmo circadiano.",
    "Afrontamiento del estrés: el estrés incontrolable sobreactiva el RD; la controlabilidad percibida lo frena vía la mPFC (el modelo de indefensión aprendida; Maier y Seligman, 2016).",
    "RM: regulación del ritmo hipocampal y la memoria contextual."
  ],
  tests: [
    "Tareas de procesamiento emocional y sesgo negativo (reconocimiento facial emocional, dot-probe)",
    "Tareas de descuento por demora y de espera: impulsividad",
    "Paradigma de depleción aguda de triptófano (investigación)",
    "Imagen del transportador de serotonina (SERT) y del receptor 5-HT1A con PET (investigación)"
  ],
  development: [
    "Las neuronas serotoninérgicas se forman en las primeras semanas de vida embrionaria; la serotonina también actúa como señal trófica que influye en la migración neuronal y la formación de circuitos.",
    "En ratones, bloquear el transportador de serotonina temprano en la vida aumenta la conducta ansiosa en la adultez (Ansorge et al., 2004); los efectos a largo plazo de la exposición a ISRS en el embarazo humano son debatidos.",
    "Se ha hallado un curso de desarrollo distinto de la capacidad de síntesis cerebral de serotonina en niños con TEA (Chugani et al., 1999)."
  ],
  clinical: [
    "Depresión, ansiedad y TOC: la diana de los ISRS es el transportador de serotonina. La sertralina, la fluoxetina y la fluvoxamina están aprobadas por la FDA para el TOC pediátrico; la fluoxetina y el escitalopram, para la depresión adolescente.",
    "Los antidepresivos llevan una advertencia de recuadro sobre el riesgo de pensamientos y conductas suicidas en menores de 25 años; se requiere vigilancia estrecha en las primeras semanas de tratamiento.",
    "Síndrome serotoninérgico: agitación, hipertermia y clonus con combinaciones de fármacos serotoninérgicos.",
    "Se han descrito hallazgos de baja función serotoninérgica en la agresión impulsiva y la autolesión.",
    "TEA: algunos niños tienen serotonina sanguínea elevada (hiperserotoninemia)."
  ],
  treatment: [
    "Depresión adolescente (TADS; 12–17 años, 439 pacientes, 12 semanas): respuesta del 71 % con fluoxetina + TCC, 61 % con fluoxetina sola, 43 % con TCC sola y 35 % con placebo. La mayor reducción del pensamiento suicida fue con el tratamiento combinado (TADS, 2004). En la semana 36 los tres brazos activos alcanzaron el 81–86 %. [A]",
    "Ansiedad infantil (CAMS; 7–17 años, 488 pacientes): mucha mejoría con sertralina + TCC 80,7 %, TCC 59,7 %, sertralina 54,9 %, placebo 23,7 %; el tratamiento combinado fue superior a ambos (Walkup et al., 2008). [A]",
    "Inicio de un ISRS: comenzar con dosis baja y vigilar de cerca en las primeras semanas los pensamientos suicidas y la activación (inquietud, insomnio); continuar el tratamiento al menos 6–12 meses. [A]",
    "Para prevenir el síndrome serotoninérgico, se revisan las combinaciones de fármacos serotoninérgicos (p. ej., un ISRS con tramadol, linezolid o triptanes). [B]"
  ],
  lesion: [
    "Las lesiones aisladas del rafe son raras en humanos; en animales, la depleción de serotonina lleva a impulsividad, agresión y alteración del sueño.",
    "En estudios animales, dosis altas de MDMA (éxtasis) dañan los axones serotoninérgicos."
  ],
  links: [
    "RD → corteza prefrontal, estriado, amígdala, tálamo, hipotálamo",
    "RM → hipocampo y septum",
    "mPFC → RD (controlabilidad; freno del estrés)",
    "Habénula lateral → RD y ATV (inhibición)",
    "Serotonina: receptores 5-HT1A (autorreceptor), 5-HT2A, 5-HT2C, 5-HT3; SERT (la diana de los ISRS)"
  ]
},

pbc: {
  name: "Complejo parabraquial", short: "PBN",
  summary: "El cruce de las señales de peligro del cuerpo: retransmite la información visceral, gustativa, de dolor, temperatura y falta de aire a la amígdala, el hipotálamo y la ínsula.",
  anatomy: [
    "En el puente superior dorsolateral, alrededor del pedúnculo cerebeloso superior (brachium conjunctivum); llamado así por estar a ambos lados de este pedúnculo.",
    "Subnúcleos medial y lateral; el vecino núcleo de Kölliker-Fuse participa en el ritmo respiratorio.",
    "Aferencias: núcleo del tracto solitario (sensibilidad visceral, gusto, barorreflejo) y asta dorsal de la médula espinal (vía espinoparabraquial: dolor, temperatura).",
    "Salidas: núcleo central de la amígdala, BNST, hipotálamo y área preóptica, tálamo (y desde allí la ínsula), SGP."
  ],
  functions: [
    "La principal estación que retransmite la información interoceptiva de los órganos internos (estómago, corazón, respiración) al prosencéfalo límbico.",
    "Alarma general: informa a la amígdala de peligros corporales como el dolor, el calor excesivo, las náuseas y la falta de aire (Palmiter, 2018).",
    "Apetito y saciedad: las neuronas CGRP del parabraquial lateral suprimen la ingesta con señales de náusea y saciedad (Carter et al., 2013).",
    "Respiración: con el núcleo de Kölliker-Fuse ajusta el ritmo respiratorio; dispara la respuesta de activación cuando sube el CO₂ sanguíneo (Kaur et al., 2013).",
    "Termorregulación: retransmite la información de calor y frío de la piel al área preóptica."
  ],
  tests: [
    "Prueba de inhalación de CO₂: se ha descrito mayor sensibilidad en el trastorno de pánico y los trastornos de ansiedad infantil (Pine et al., 2000)",
    "Tareas de conciencia interoceptiva (detección de latidos): evaluación indirecta",
    "Umbrales de dolor (pruebas sensoriales cuantitativas), umbrales de gusto"
  ],
  development: [
    "En el recién nacido, el control respiratorio y la respuesta de activación al aumento de CO₂ aún están madurando; el fallo de esta respuesta figura en modelos que intentan explicar el síndrome de muerte súbita del lactante.",
    "Aprender a evitar un alimento emparejado con náuseas (aversión condicionada al sabor) depende de circuitos parabraquiales (estudios animales)."
  ],
  clinical: [
    "Trastorno de pánico: la teoría de la “falsa alarma de asfixia”, hipersensibilidad al CO₂ (Klein, 1993); la vía parabraquial–amígdala es uno de los circuitos candidatos.",
    "Dolor crónico y trastornos de síntomas somáticos: la vía espinoparabraquial–amígdala vehicula la carga emocional del dolor.",
    "Problemas alimentarios y náuseas por fármacos: las neuronas CGRP parabraquiales participan en la supresión del apetito (estudios animales).",
    "Depresión respiratoria por opioides: contribuyen los receptores μ-opioides de la región parabraquial y de Kölliker-Fuse."
  ],
  treatment: [
    "En el trastorno de pánico, la exposición interoceptiva (p. ej., hiperventilar deliberadamente, girar, aguantar la respiración) forma parte de la TCC; busca la habituación a las señales corporales de alarma (la vía parabraquial–amígdala). [B]",
    "La depresión respiratoria inducida por opioides se revierte con naloxona; los receptores μ-opioides de la región parabraquial y de Kölliker-Fuse están entre los principales sitios de este efecto secundario. [B]",
    "Antieméticos para las náuseas por quimioterapia y fármacos; la aversión condicionada al sabor (asco hacia un alimento emparejado con náuseas) puede alterar la alimentación de los niños durante el tratamiento, y se aconseja mantener los alimentos nuevos alejados de los días de tratamiento. [C]"
  ],
  lesion: [
    "En animales, el daño parabraquial lateral reduce las respuestas emocionales al dolor y la aversión condicionada al sabor, y abole la respuesta de activación al aumento de CO₂.",
    "Las lesiones del puente superior dorsolateral (centro neumotáxico) pueden alterar el ritmo respiratorio."
  ],
  links: [
    "NTS → PBN (sensibilidad visceral, gusto): la vía aferente vagal del libro",
    "Asta dorsal de la médula espinal → PBN (dolor, temperatura)",
    "PBN → núcleo central de la amígdala y BNST (alarma, el lado emocional del dolor)",
    "PBN → hipotálamo y área preóptica (temperatura, apetito)",
    "PBN → tálamo → ínsula (interocepción)",
    "Glutamato, CGRP; receptores μ-opioides"
  ]
},

ppn: {
  name: "Núcleos pedunculopontino y tegmental laterodorsal", short: "PPN / LDT",
  summary: "La fuente de acetilcolina del tronco del encéfalo: enciende la vigilia y el sueño REM, apoya la atención y la orientación a la recompensa; el PPN también contribuye a la marcha y la postura.",
  anatomy: [
    "En la unión mesencéfalo–puente: el PPN alrededor y lateral al pedúnculo cerebeloso superior; el LDT más medial, en el extremo caudal de la SGP, cerca del suelo del cuarto ventrículo.",
    "Las neuronas colinérgicas forman los grupos Ch5 (PPN) y Ch6 (LDT); se intercalan neuronas glutamatérgicas y GABAérgicas.",
    "En el atlas Harvard AAN el PPN aparece como el “núcleo pedunculotegmental (PTg)”.",
    "Conexiones: tálamo, ganglios basales (GPi, núcleo subtalámico, sustancia negra), ATV, formación reticular, médula espinal."
  ],
  functions: [
    "Vigilia y sueño REM: las fibras colinérgicas al tálamo encienden la actividad talamocortical; participan en el inicio del sueño REM.",
    "Atención y filtrado sensorial: contribución a la inhibición del reflejo de sobresalto por un prepulso (inhibición por prepulso).",
    "Recompensa y motivación: el LDT y el PPN excitan las neuronas dopaminérgicas del ATV y la sustancia negra, apoyando la liberación fásica de dopamina.",
    "Movimiento: el PPN forma parte de la región locomotora mesencefálica; inicio de la marcha y control postural."
  ],
  tests: [
    "Polisomnografía: latencia y duración del sueño REM",
    "Inhibición por prepulso (IPP) y reflejo de sobresalto",
    "Análisis de la marcha y el equilibrio (en trastornos del movimiento)"
  ],
  development: [
    "Alrededor de la mitad del sueño del recién nacido es sueño REM; se ha propuesto que la actividad REM estimula el cerebro en desarrollo desde dentro (Roffwarg et al., 1966).",
    "La proporción de sueño REM disminuye durante la infancia y las transiciones sueño–vigilia se consolidan."
  ],
  clinical: [
    "Narcolepsia tipo 1: con la pérdida de orexina, los circuitos del tronco del encéfalo que regulan el sueño REM quedan sin control; cataplejía, parálisis del sueño, alucinaciones hipnagógicas.",
    "Trastorno de pesadillas y alteraciones del sueño postraumáticas: cambios en la regulación del sueño REM.",
    "Esquizofrenia: filtrado sensorial alterado (IPP); estudios posmortem han descrito más neuronas colinérgicas en el PPN/LDT.",
    "Los fármacos anticolinérgicos (p. ej., difenhidramina, algunos antipsicóticos, tricíclicos) pueden alterar la arquitectura del sueño, la memoria y la atención, y causar delirio.",
    "Congelación de la marcha en la enfermedad de Parkinson: el PPN se estudia como diana de estimulación cerebral profunda (adultos)."
  ],
  treatment: [
    "Carga anticolinérgica: combinar varios fármacos anticolinérgicos (difenhidramina, hidroxicina, tricíclicos, algunos antipsicóticos) perjudica la atención, la memoria y la arquitectura del sueño; el riesgo de delirio es mayor en niños y en personas con discapacidad del desarrollo. Se recomienda revisar la medicación. [B]",
    "Los síntomas relacionados con el REM de la narcolepsia (cataplejía, parálisis del sueño) se reducen con oxibato de sodio y pitolisant; detalles en la tarjeta del hipotálamo. [A]",
    "Estimulación cerebral profunda del PPN: experimental en adultos para la congelación de la marcha en la enfermedad de Parkinson. [C]"
  ],
  lesion: [
    "Daño bilateral del PPN: menor vigilia y alteración de la marcha; menor sueño REM en estudios animales.",
    "Las lesiones del tegmento pontomesencefálico pueden alterar la conciencia (la red de activación)."
  ],
  links: [
    "PPN/LDT → tálamo (vigilia, actividad talamocortical)",
    "LDT → ATV, PPN → sustancia negra (excitación de neuronas dopaminérgicas)",
    "PPN ↔ ganglios basales (GPi, núcleo subtalámico): movimiento",
    "PPN → formación reticular y médula espinal (postura, marcha)",
    "Acetilcolina (receptores nicotínicos y muscarínicos), glutamato, GABA"
  ]
},

rf: {
  name: "Formación reticular (mesencefálica y pontina)", short: "mRt / PnO",
  summary: "El núcleo en forma de red del tronco del encéfalo: lleva la señal ascendente de vigilia a la corteza (SRAA) y fija el nivel de conciencia y el tono muscular.",
  anatomy: [
    "Un área en el centro del tegmento del tronco del encéfalo sin límites nítidos, donde las neuronas están dispersas entre haces de fibras (reticular: en forma de red).",
    "Dos partes en el modelo: la formación reticular mesencefálica (mRt; mesencéfalo) y el núcleo pontis oralis (PnO; puente superior).",
    "Sistema reticular activador ascendente (SRAA): llega a la corteza vía los núcleos intralaminares del tálamo (ruta dorsal) y vía el hipotálamo y el prosencéfalo basal (ruta ventral).",
    "El atlas Harvard AAN cartografió los nodos de esta red de activación en el tronco del encéfalo humano posmortem con histología y RM (Edlow et al., 2012; atlas versión 2.0, 2023)."
  ],
  functions: [
    "Mantenimiento de la vigilia y del nivel de conciencia.",
    "Transiciones sueño–vigilia; el PnO participa en la generación del sueño REM.",
    "Tono muscular y postura (tractos reticuloespinales); contribución a la atonía muscular del sueño REM.",
    "Respuestas de orientación y activación ante estímulos nuevos e inesperados.",
    "Integración con la regulación respiratoria y circulatoria junto con las áreas reticulares del tronco del encéfalo inferior."
  ],
  tests: [
    "Nivel de conciencia: Escala de Coma de Glasgow (versión pediátrica)",
    "EEG: ritmos de vigilia y fases del sueño",
    "Potenciales evocados auditivos de tronco (PEAT): integridad del tronco del encéfalo"
  ],
  development: [
    "En el recién nacido, el sueño y la vigilia están dispersos a lo largo del día; la vigilia diurna y el sueño nocturno se consolidan en los primeros meses.",
    "La maduración del tronco del encéfalo puede seguirse con PEAT en prematuros."
  ],
  clinical: [
    "Trastornos de la conciencia (coma, estado de mínima conciencia): daño de la red de activación del tronco del encéfalo; las causas principales en niños son el traumatismo craneoencefálico y la lesión hipóxico-isquémica.",
    "TDAH: las teorías de baja activación y de regulación de la activación destacan los sistemas de activación del tronco del encéfalo y el tálamo; la evidencia es indirecta.",
    "Los tumores del tronco del encéfalo infantil (p. ej., glioma difuso de línea media) y la malformación de Chiari pueden afectar la conciencia, el sueño y las funciones autonómicas."
  ],
  treatment: [
    "Amantadina: en 184 adultos (16–65 años; en estado vegetativo o de mínima conciencia tras traumatismo craneoencefálico en las semanas 4–16), 4 semanas de tratamiento aceleraron la recuperación funcional; 2 semanas después de suspender el fármaco, la diferencia entre grupos desapareció (Giacino et al., 2012). No está claro si el efecto es duradero o solo una aceleración. La evidencia en niños se limita a series de casos. [B]",
    "En los trastornos de la conciencia, la evaluación estructurada (p. ej., la Escala de Recuperación del Coma Revisada) reduce el error diagnóstico; se estudian versiones adaptadas a niños. [C]",
    "Los fármacos que actúan sobre el sistema de activación (antihistamínicos sedantes, benzodiacepinas, antipsicóticos) pueden manifestarse en niños como somnolencia diurna y problemas de atención."
  ],
  lesion: [
    "El daño del tegmento pontomesencefálico, sobre todo bilateral, causa coma (Parvizi y Damasio, 2003).",
    "Con daño limitado al puente ventral, la conciencia se conserva (síndrome de enclaustramiento); que el tegmento esté afectado es decisivo."
  ],
  links: [
    "mRt/PnO → núcleos intralaminares del tálamo → corteza (ruta dorsal del SRAA)",
    "Formación reticular → hipotálamo y prosencéfalo basal (ruta ventral del SRAA)",
    "Red de activación junto con el PPN/LDT (acetilcolina), locus coeruleus (noradrenalina) y rafe (serotonina)",
    "Tractos reticuloespinales → médula espinal (tono muscular, postura)",
    "Glutamato, acetilcolina, GABA"
  ]
}

});
