/* Textos de regiones en español 3/8 (regions-3.js: hipocampo, amígdala, ganglios basales). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

hippocampus: {
  name: "Hipocampo", short: "HC",
  summary: "Codifica y consolida nuevos recuerdos; cartografía el espacio y el contexto, y frena la respuesta de estrés.",
  anatomy: [
    "En el lóbulo temporal medial, en el suelo del asta temporal del ventrículo lateral; cabeza (pes), cuerpo y cola.",
    "Subcampos: giro dentado, CA1–CA4, subículo. La principal puerta de entrada es la corteza entorrinal (vía perforante).",
    "Salida: fimbria–fórnix → cuerpos mamilares → núcleo anterior del tálamo → cíngulo (circuito de Papez).",
    "Irrigación: ACP (arterias hipocampales) y arteria coroidea anterior."
  ],
  functions: [
    "Codificación y consolidación de nuevos recuerdos declarativos (episódicos).",
    "Memoria espacial y navegación (células de lugar; células de red entorrinales).",
    "Memoria contextual: ligar el miedo al contexto y permitir que el contexto regule la respuesta.",
    "Separación de patrones (giro dentado) y completamiento de patrones (CA3).",
    "Retroalimentación negativa sobre el eje HHA (densos receptores de glucocorticoides)."
  ],
  tests: [
    "Aprendizaje de listas verbales (RAVLT, CVLT-C)",
    "Recuerdo de historias, Escala de Memoria Infantil (CMS)",
    "Recuerdo diferido de la figura de Rey, navegación virtual"
  ],
  development: [
    "Amnesia infantil: los recuerdos de la primera infancia no perduran; los circuitos hipocampales (sobre todo el giro dentado) maduran en los años preescolares.",
    "El volumen aumenta durante la infancia y la adolescencia; las partes anterior y posterior se desarrollan a ritmos distintos.",
    "La crianza de apoyo en la primera infancia se ha asociado a un mayor volumen hipocampal (Luby et al., 2012).",
    "El estrés crónico, la pobreza y el abuso se asocian a un menor volumen hipocampal. El maltrato infantil afecta especialmente a CA2–CA3 izquierdo, CA4–giro dentado y el subículo; la asociación no se explica por una historia de depresión o TEPT (Teicher et al., 2012; 193 adultos jóvenes). Son los mismos sitios donde el estrés suprime la neurogénesis y poda las dendritas en animales. [B]"
  ],
  clinical: [
    "TEPT y estrés crónico: menor volumen en adultos; los hallazgos en niños son menos consistentes.",
    "Depresión: en ENIGMA (1.728 pacientes, 7.199 controles) el hipocampo es más pequeño (d = −0,14). La diferencia es marcada en la depresión recurrente y está ausente en el primer episodio. Es mayor cuando la depresión comenzó a los 21 años o antes (d = −0,20) (Schmaal et al., 2016). Apoya la importancia del inicio temprano y de prevenir la recurrencia. [A]",
    "Epilepsia del lóbulo temporal: esclerosis mesial temporal (puede relacionarse con antecedentes de convulsiones febriles prolongadas).",
    "Esquizofrenia de inicio temprano, síndrome de Down, prematuridad: diferencias en el volumen hipocampal."
  ],
  treatment: [
    "TEC: el volumen hipocampal aumenta alrededor de un 0,28 % por sesión (281 pacientes), pero este aumento no explica la respuesta clínica; el cambio de volumen no es un marcador de respuesta (Oltedal et al., 2018). [A]",
    "En la depresión, el tratamiento temprano y adecuado y la prevención de recurrencias encajan con los hallazgos de ENIGMA sobre recurrencia e inicio temprano (Schmaal et al., 2016). [B]",
    "Para los problemas de memoria, se usan la rehabilitación cognitiva y ayudas externas de memoria (agenda, recordatorios) tras la cirugía de epilepsia y en la epilepsia del lóbulo temporal."
  ],
  lesion: [
    "Bilateral: amnesia anterógrada (el caso de H.M.); la amnesia retrógrada es de gradiente temporal.",
    "La memoria a corto plazo y la memoria procedimental se conservan.",
    "Las lesiones izquierdas afectan más la memoria verbal; las derechas, la memoria visuoespacial."
  ],
  links: [
    "Corteza entorrinal (vía perforante)",
    "Fórnix → cuerpo mamilar → tálamo anterior (circuito de Papez)",
    "Amígdala",
    "CPFm y CP",
    "Hipotálamo (retroalimentación del HHA)",
    "Aferencias colinérgicas septales, glutamato"
  ]
},

amygdala: {
  name: "Amígdala", short: "AMY",
  summary: "Un detector de saliencia emocional: responde rápido a “¿esto me importa — es peligroso, es valioso?”, aprende esa asociación y prepara el cuerpo (autonómico, endocrino, conductual) en consecuencia.",
  anatomy: [
    "Complejo nuclear con forma de almendra en el lóbulo temporal medial, delante de la cabeza del hipocampo, dentro del uncus.",
    "Tres grupos principales y una división del trabajo: Complejo basolateral (lateral, basal, basal accesorio): la puerta de entrada de la información sensorial y el sitio del aprendizaje. Núcleo central: la salida principal. Núcleos medial y cortical: señales olfatorias y sociorreproductivas. [B]",
    "Las células intercaladas median la inhibición vía la vmPFC. El núcleo del lecho de la estría terminal (BNST) es la “amígdala extendida”.",
    "Irrigación: arteria coroidea anterior, ramas de la ACM.",
    "Las salidas son un mapa de síntomas. Núcleo central → hipotálamo y BNST (eje HHA, cortisol), SGP (congelación), locus coeruleus (activación), núcleos parabraquial y vagal (frecuencia cardíaca, respiración). Los síntomas corporales de la ansiedad pueden leerse en estas salidas. [B]",
    "Dos rutas de entrada: una rápida y tosca desde el tálamo y una lenta y detallada desde la corteza (la “vía baja y alta” de LeDoux). La importancia de la vía rápida en humanos es debatida; en la docencia debe presentarse como un modelo. [B]"
  ],
  functions: [
    "Detección de amenazas y condicionamiento pavloviano del miedo.",
    "Saliencia emocional: atención a estímulos negativos y positivos.",
    "Procesamiento rápido de expresiones faciales (especialmente el miedo) y de la región ocular.",
    "Fortalecimiento de los recuerdos emocionales (modulación del hipocampo).",
    "Inicio de la respuesta de estrés autonómica y endocrina (hipotálamo–HHA).",
    "Evaluación social: confiabilidad, espacio personal.",
    "Valor de recompensa: aprende y actualiza asociaciones estímulo–valor; la vía amígdala basolateral → núcleo accumbens guía la conducta motivada. La amígdala no es solo un centro del miedo (Baxter y Murray, 2002). [B]",
    "Sentir miedo ante amenazas externas depende de la amígdala: S.M., con daño amigdalino bilateral, no sentía miedo a serpientes, arañas ni a una casa encantada (Feinstein et al., 2011). [B]",
    "Pero la amígdala no es necesaria para la amenaza interna: los mismos pacientes sintieron miedo y crisis de pánico tras inhalar CO₂ al 35 % (Feinstein et al., 2013). Un hallazgo importante que muestra el papel de las vías interoceptivas (tronco del encéfalo, ínsula) en el trastorno de pánico. [B]",
    "Incertidumbre e imprevisibilidad: cuando no se sabe cuándo llegará la amenaza, la respuesta se desplaza al BNST. Se distingue entre miedo fásico (amígdala) y ansiedad sostenida (BNST). [B]"
  ],
  tests: [
    "Paradigmas de condicionamiento y extinción del miedo",
    "Reconocimiento facial emocional (Reconocimiento de Afectos del NEPSY-II)",
    "Sesgo atencional (dot-probe), reflejo de sobresalto",
    "Test de la Mirada (versión infantil): la amígdala y la red temporal en la cognición social."
  ],
  development: [
    "Se desarrolla temprano; en la infancia la presencia del cuidador amortigua la respuesta de la amígdala.",
    "En la adolescencia, la reactividad de la amígdala a las caras emocionales aumenta mientras la regulación de la mPFC aún no es madura.",
    "Cuidado institucional: la adopción posterior se asoció a mayor volumen amigdalino, peor regulación emocional y más ansiedad (Tottenham et al., 2010). En niños que vivieron deprivación, la conectividad negativa amígdala–mPFC aparece temprano; esta “maduración acelerada” se interpreta como una adaptación al estrés (Gee et al., 2013, PNAS). [B]",
    "El cambio de signo de la conectividad amígdala–mPFC: positiva (inmadura) antes de los 10 años, negativa (reguladora) después de los 10. La reactividad de la amígdala disminuye al mismo tiempo (Gee et al., 2013, J Neurosci; edades 4–22). [B]",
    "Amortiguación parental: una foto de la madre suprime la respuesta de la amígdala en niños y acerca la conectividad al patrón maduro; el efecto está ausente en adolescentes. La infancia puede ser un período sensible para este circuito (Gee et al., 2014). [B]",
    "El volumen de sustancia gris subcortical alcanza su máximo vital hacia los 14,4 años (Bethlehem et al., 2022; 123.984 resonancias). [A]"
  ],
  clinical: [
    "Trastornos de ansiedad: un metaanálisis de fMRI en niños y adolescentes (48 estudios, más de 2.000 participantes) halló hiperactivación amigdalina bilateral en los trastornos internalizantes, especialmente la ansiedad (Ashworth et al., 2021). [A] En el TAG adolescente, la respuesta de la amígdala derecha a caras de enfado inconscientes (enmascaradas) está aumentada y se relaciona con la gravedad, sin un aumento compensatorio de la vlPFC (Monk et al., 2008). [B]",
    "Trastorno de conducta + rasgos CU: respuesta amigdalina reducida a las caras de miedo. En la agresión reactiva, en cambio, la respuesta está aumentada.",
    "TEA: amígdala grande en niños de 7–12 años, con la diferencia desapareciendo en la adolescencia (Schumann et al., 2004). En una gran muestra de ciclo vital (ENIGMA-TEA) la amígdala es ligeramente más pequeña en promedio (d ≈ 0,11–0,16) (van Rooij et al., 2018). La diferencia depende de la edad; debe evitarse la generalización “la amígdala está agrandada en el TEA”. [A/B]",
    "Depresión y TEPT: hiperreactividad amigdalina; extinción del miedo alterada en el TEPT (junto con la vmPFC). [B]",
    "TDAH: ENIGMA (1.713 pacientes, 1.529 controles) halló menor volumen amigdalino en el TDAH; la diferencia es marcada en niños y desaparece en adultos (Hoogman et al., 2017). El efecto es pequeño y no diagnóstico. [A]",
    "Trastorno de conducta: ENIGMA-Conducta Antisocial: menor volumen amigdalino (d ≈ 0,13); las diferencias son más extensas en quienes tienen rasgos insensibles-afectivos (CU) altos (Gao et al., 2024). [A]",
    "Síndrome de Williams (microdeleción 7q11.23): respuesta amigdalina reducida a caras de enfado o miedo (intrepidez social) pero aumentada a escenas de amenaza no social (ansiedad no social). La misma estructura funciona en direcciones opuestas según el tipo de estímulo (Meyer-Lindenberg et al., 2005). [B]"
  ],
  treatment: [
    "TAG pediátrico: quienes tenían mayor respuesta amigdalina antes del tratamiento respondieron mejor a la fluoxetina o a la TCC; el tratamiento eficaz reduce la hiperactividad amigdalina (McClure et al., 2007). [C]",
    "Benzodiacepinas: actúan vía los densos receptores GABA-A de la amígdala. Uso breve y prudente en niños.",
    "Neurofeedback: 6 sesiones de entrenamiento con una firma EEG derivada de fMRI (la “huella eléctrica amigdalina”) redujeron la alexitimia y mejoraron el afrontamiento del estrés en 180 adultos sanos sometidos a un entrenamiento militar estresante (Keynan et al., 2019). Barato y portátil; hay estudios en adolescentes en curso. [C]",
    "Estimulación cerebral profunda: estimulación de la amígdala basolateral en el TEPT de combate refractario (Langevin et al., 2016). Solo adultos, experimental. [C]"
  ],
  lesion: [
    "Enfermedad de Urbach-Wiethe (el caso de S.M.): ausencia de miedo a amenazas externas, ausencia de sentido del espacio personal; pero pánico con CO₂ (Feinstein 2011, 2013).",
    "Síndrome de Klüver-Bucy (temporal anterior bilateral): hiperoralidad, hipersexualidad, ausencia de miedo, agnosia visual.",
    "Epilepsia del lóbulo temporal mesial: aura de origen amigdalino (sensación epigástrica ascendente, miedo súbito). En niños puede confundirse con una crisis de pánico."
  ],
  links: [
    "vmPFC / mPFC (regulación)",
    "Hipotálamo (eje HHA, CRH)",
    "SGP y tronco del encéfalo (defensa, autonómico)",
    "Hipocampo",
    "Núcleo accumbens",
    "Locus coeruleus (noradrenalina), serotonina, receptores GABA–benzodiacepínicos",
    "Red de saliencia: junto con la CCA dorsal y la ínsula anterior",
    "Fascículo uncinado: COF y polo temporal",
    "Estría terminal: BNST e hipotálamo; vía amigdalofugal ventral: hipotálamo y tálamo mediodorsal",
    "CRF: impulsa la respuesta de estrés en el núcleo central",
    "Oxitocina: reduce la respuesta de la amígdala; una dosis única de oxitocina intranasal redujo la activación ante estímulos de miedo (Kirsch et al., 2005, hombres adultos) [C]",
    "Endocannabinoide (CB1): necesario para la extinción del miedo (Marsicano et al., 2002, ratones) [B]"
  ]
},

caudate: {
  name: "Núcleo caudado", short: "NC",
  summary: "El socio estriatal de la corteza prefrontal: apoya la conducta dirigida a metas, el aprendizaje por retroalimentación y la flexibilidad cognitiva.",
  anatomy: [
    "Con forma de C; cabeza (pared lateral del asta frontal del ventrículo lateral), cuerpo y cola (techo del asta temporal, alcanzando la amígdala).",
    "Junto con el putamen forma el estriado dorsal; separados por la cápsula interna y unidos por puentes de sustancia gris (el aspecto estriado).",
    "Aferencias: CPFDL, COF, CCA; sustancia negra pars compacta (dopamina nigroestriatal).",
    "Irrigación: arterias lenticuloestriadas (ACM), arteria recurrente de Heubner (ACA) — cabeza."
  ],
  functions: [
    "Conducta dirigida a metas y aprendizaje acción–resultado.",
    "Bucle cognitivo (CPFDL–caudado–tálamo): apoyo a la memoria de trabajo y la planificación.",
    "Aprendizaje basado en retroalimentación y expectativa de recompensa.",
    "Flexibilidad cognitiva e inhibición; bucle oculomotor (movimientos oculares)."
  ],
  tests: [
    "Aprendizaje probabilístico de categorías",
    "Tareas de cambio de set, TMT-B",
    "Tareas de aprendizaje por retroalimentación"
  ],
  development: [
    "El volumen estriatal aumenta hasta la infancia media–adolescencia temprana y luego desciende (una curva en U invertida similar a la corteza).",
    "Las conexiones corticoestriatales maduran a lo largo de la adolescencia."
  ],
  clinical: [
    "TOC: hiperactividad del caudado en el circuito CETC. La hipótesis PANS/PANDAS (controvertida); implicación del caudado en la corea de Sydenham.",
    "Síndrome de Tourette: menor volumen del caudado (Peterson et al., 2003); el volumen del caudado en la infancia predice la gravedad de los tics en la adultez (Bloch et al., 2005).",
    "TDAH: menor volumen del caudado (una diferencia que disminuye con la edad).",
    "Enfermedad de Huntington juvenil (variante de Westphal): atrofia del caudado."
  ],
  treatment: [
    "TOC: exposición con prevención de respuesta (EPR) e ISRS; el tratamiento eficaz reduce la hiperactividad del caudado y la COF. [A]",
    "Corea de Huntington: los inhibidores de VMAT2 (tetrabenazina, deutetrabenazina) alivian la corea reduciendo el almacenamiento de dopamina; se requiere vigilar depresión e ideas suicidas. [A]",
    "Corea de Sydenham: tratamiento de la infección estreptocócica y profilaxis prolongada con penicilina; tratamiento sintomático de la corea y los síntomas conductuales. [B]",
    "El tratamiento conductual y farmacológico de los tics está en la tarjeta del putamen."
  ],
  lesion: [
    "Abulia/apatía, disfunción ejecutiva de tipo frontal, desinhibición.",
    "Corea (Huntington), síntomas similares al TOC."
  ],
  links: [
    "CPFDL y COF (aferencia corticoestriatal)",
    "Globo pálido / SNr (salida)",
    "Tálamo VA y mediodorsal",
    "Sustancia negra (dopamina — receptores D1/D2)",
    "GABA (neuronas espinosas medianas), acetilcolina (interneuronas)"
  ]
},

putamen: {
  name: "Putamen", short: "PUT",
  summary: "La puerta de entrada del bucle motor: inicio del movimiento, hábitos que se automatizan y aprendizaje de secuencias motoras.",
  anatomy: [
    "La parte lateral del núcleo lenticular (junto con el globo pálido).",
    "Separado del claustro por la cápsula externa y del caudado y el tálamo por la cápsula interna.",
    "Aferencias: corteza motora primaria y somatosensorial, AMS (bucle motor); sustancia negra pars compacta.",
    "Irrigación: arterias lenticuloestriadas (ACM)."
  ],
  functions: [
    "Inicio y escalado del movimiento.",
    "Hábitos (aprendizaje estímulo–respuesta) y conductas automáticas.",
    "Aprendizaje de secuencias motoras y memoria procedimental.",
    "Ritmo y sincronización; articulación del habla.",
    "Recepción de señales dopaminérgicas de error de predicción de recompensa."
  ],
  tests: [
    "Tarea de tiempo de reacción serial (SRTT — aprendizaje implícito)",
    "Dibujo en espejo, sincronización rítmica (golpeteo)",
    "Persecución rotatoria"
  ],
  development: [
    "Los sistemas de hábito funcionan temprano; la automatización motora se acelera en la infancia.",
    "El volumen del putamen aumenta en la infancia."
  ],
  clinical: [
    "Síndrome de Tourette y trastornos de tics: disfunción del bucle motor; los tics son conductas similares a hábitos.",
    "TDAH: en el estudio ENIGMA, los volúmenes del putamen, caudado, accumbens, amígdala e hipocampo fueron menores en niños (Hoogman et al., 2017).",
    "TEA: relación entre conductas motoras repetitivas y tamaño estriatal.",
    "Enfermedad de Wilson: puede comenzar con síntomas psiquiátricos en la adolescencia; depósito de cobre en el putamen.",
    "Efectos secundarios extrapiramidales relacionados con antipsicóticos (bloqueo estriatal D2)."
  ],
  treatment: [
    "La primera línea para los tics es la terapia conductual (TICC: notar el impulso antes del tic y un movimiento competidor incompatible con el tic): en 126 niños de 9–17 años, mejoría marcada en el 52,5 % frente al 18,5 % con terapia de apoyo (número necesario a tratar 3); el efecto duró 6 meses en el 87 % de los respondedores (Piacentini et al., 2010). [A]",
    "Fármacos para los tics: agonistas α2 (guanfacina, clonidina; cuando coexiste TDAH), bloqueantes D2 (aripiprazol, haloperidol, pimozida). [A]",
    "Ecopipam (antagonista D1, un mecanismo nuevo): en un ensayo de fase III (167 niños) la recaída entre respondedores fue del 41,9 % frente al 68,1 % con placebo; sin efectos secundarios de peso ni trastorno del movimiento. Aún no aprobado por la FDA; la solicitud fue aceptada para revisión prioritaria en agosto de 2026, con decisión prevista en el primer trimestre de 2027. [B]",
    "Enfermedad de Wilson: quelación del cobre (penicilamina, trientina) y zinc; con diagnóstico temprano los síntomas neurológicos y psiquiátricos pueden revertir. [B]",
    "Discinesia tardía inducida por antipsicóticos: los inhibidores de VMAT2 (valbenazina, deutetrabenazina) están aprobados en adultos. [A]"
  ],
  lesion: [
    "Distonía, parkinsonismo (pérdida de dopamina).",
    "Alteración del aprendizaje procedimental."
  ],
  links: [
    "Corteza motora y somatosensorial, AMS",
    "Globo pálido (vía directa/indirecta)",
    "Tálamo VL",
    "Sustancia negra pars compacta (dopamina nigroestriatal)"
  ]
},

gp: {
  name: "Globo pálido", short: "GPe / GPi",
  summary: "El freno de salida de los ganglios basales: suprime tónicamente el tálamo, libera el movimiento deseado y detiene el no deseado.",
  anatomy: [
    "La parte medial del núcleo lenticular; dividido por la lámina medular medial en segmentos externo (GPe) e interno (GPi).",
    "Junto con la sustancia negra pars reticulata, el GPi es el principal núcleo de salida de los ganglios basales.",
    "Pálido ventral: parte del circuito de recompensa y motivación.",
    "Irrigación: arteria coroidea anterior (GPi), arterias lenticuloestriadas."
  ],
  functions: [
    "Vía directa (estriado → GPi): desinhibición del tálamo → liberación del movimiento deseado.",
    "Vía indirecta (estriado → GPe → NST → GPi): supresión de movimientos no deseados.",
    "Regulación de la amplitud y velocidad del movimiento.",
    "Pálido ventral: “gusto” hedónico y motivación."
  ],
  tests: [
    "Escalas de trastornos del movimiento: YGTSS (tics), AIMS (discinesia tardía), Simpson-Angus (SEP)",
    "Exploración neurológica: distonía, corea, bradicinesia"
  ],
  development: [
    "El kernícterus (hiperbilirrubinemia neonatal) afecta selectivamente al globo pálido.",
    "Patrón de lesión ganglios basales–tálamo en la hipoxia-isquemia perinatal."
  ],
  clinical: [
    "Kernícterus → parálisis cerebral discinética (coreoatetosis).",
    "Distonía: la ECP del GPi es eficaz en niños (especialmente DYT1).",
    "Síndrome de Tourette: el GPi como diana de ECP en casos refractarios (adolescencia tardía y adultos).",
    "PKAN (neurodegeneración asociada a pantotenato quinasa): el signo del “ojo de tigre” en la RM.",
    "Intoxicación por monóxido de carbono: necrosis palidal bilateral."
  ],
  treatment: [
    "Distonía generalizada primaria (especialmente DYT1): la estimulación cerebral profunda bilateral del GPi redujo notablemente el trastorno del movimiento y la discapacidad en ensayos controlados (Vidailhet et al., 2005; Kupsch et al., 2006, controlado con placebo). El tratamiento más temprano en niños se asocia a mejores resultados. [B]",
    "En el síndrome de Tourette, el GPi anterior es la diana de estimulación cerebral profunda más frecuente después del tálamo centromediano; detalles en la tarjeta del tálamo (Martinez-Ramirez et al., 2018). [C]",
    "Prevención del kernícterus: fototerapia guiada por curvas de riesgo en la ictericia neonatal y exanguinotransfusión si es necesaria; el daño palidal es permanente. [A]"
  ],
  lesion: [
    "Lesiones palidales bilaterales: apatía, abulia (“acinesia psíquica”), parkinsonismo o distonía."
  ],
  links: [
    "Estriado (aferencia)",
    "Núcleo subtalámico (vías indirecta e hiperdirecta)",
    "Tálamo VA/VL (salida GABAérgica)",
    "Núcleo pedunculopontino",
    "GABA, encefalina, sustancia P"
  ]
},

nacc: {
  name: "Núcleo accumbens", short: "NAcc / EV",
  summary: "Donde la recompensa se convierte en motivación: “querer”, conducta de aproximación y aprendizaje por refuerzo.",
  anatomy: [
    "En la unión ventral de la cabeza del caudado y el putamen, lateral al septum; el componente principal del estriado ventral.",
    "Regiones núcleo (core) y corteza (shell).",
    "Aferencias: ATV (dopamina mesolímbica), vmPFC/COF, amígdala, hipocampo. Salida: pálido ventral.",
    "Irrigación: arterias lenticuloestriadas, arteria recurrente de Heubner."
  ],
  functions: [
    "Anticipación de la recompensa y motivación (“querer”, saliencia de incentivo).",
    "Aprendizaje por refuerzo mediante el error de predicción de recompensa (la señal de dopamina del ATV).",
    "Traducción de la información límbica en acción motora (la “interfaz límbico-motora”).",
    "Placer hedónico (“puntos calientes” opioides en la corteza), recompensa social, respuesta placebo."
  ],
  tests: [
    "Tarea de Retraso del Incentivo Monetario (MID, fMRI)",
    "Tarea esfuerzo–recompensa (EEfRT), descuento por demora",
    "Tarea Analógica de Riesgo del Globo (BART)"
  ],
  development: [
    "En la adolescencia, la respuesta del accumbens a la recompensa es mayor que en niños y adultos, mientras la COF sigue en un nivel infantil. La maduración del circuito de recompensa por delante del circuito de control puede explicar la búsqueda de novedad y la asunción de riesgos (Galván et al., 2006; edades 7–29). [B]",
    "En presencia de pares, la asunción de riesgos y la actividad estriatal ventral de los adolescentes aumentan (Chein et al., 2011).",
    "Las hormonas puberales afectan la sensibilidad a la recompensa."
  ],
  clinical: [
    "Trastornos por consumo de sustancias: la adolescencia es un período especialmente vulnerable.",
    "TDAH: hipoactivación estriatal ventral durante la anticipación de recompensa (Plichta y Scheres, 2014), aversión a la demora. En el TDAH adulto, los niveles de D2/3 del accumbens se relacionan con la inatención y la motivación (Volkow et al., 2009). [B]",
    "Depresión y anhedonia: en 1.576 adolescentes (IMAGEN), la actividad estriatal ventral durante la anticipación de recompensa fue menor en la depresión. En adolescentes sanos, la baja actividad predijo la transición a depresión subumbral o clínica en 2 años. El hallazgo se relaciona más con la anhedonia que con el ánimo bajo (Stringaris et al., 2015). Un marcador de grupo, no una herramienta diagnóstica individual. [A]",
    "Adicciones conductuales (trastorno por videojuegos), trastorno de conducta."
  ],
  treatment: [
    "Activación conductual: aumenta sistemáticamente las actividades gratificantes en la anhedonia; una psicoterapia que actúa a través del circuito de recompensa.",
    "Estimulantes y riesgo de adicción: el metilfenidato oral a dosis terapéuticas produce una elevación lenta de dopamina, a diferencia de la elevación rápida que impulsa la adicción.",
    "Estimulación cerebral profunda (accumbens): en el TOC refractario, el Y-BOCS cayó un 46 % a los 8 meses en 16 adultos, con 9 respondedores; una diferencia del 25 % frente a la estimulación simulada (Denys et al., 2010). Solo adultos, una opción de última línea. [C]"
  ],
  lesion: [
    "Anhedonia, apatía, pérdida de motivación.",
    "Una diana de ECP en el TOC y la depresión refractarios en adultos."
  ],
  links: [
    "ATV (vía dopaminérgica mesolímbica)",
    "vmPFC y COF",
    "Amígdala e hipocampo",
    "Pálido ventral → tálamo mediodorsal",
    "Dopamina, opioides endógenos, glutamato"
  ]
}

});
