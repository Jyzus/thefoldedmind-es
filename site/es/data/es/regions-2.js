/* Textos de regiones en español 2/8 (regions-2.js: parietal, temporal, occipital, ínsula, cíngulo posterior). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

somato: {
  name: "Corteza somatosensorial primaria", short: "S1",
  summary: "Hace que el cuerpo se sienta: cartografía el tacto, la presión, el dolor, la temperatura y la posición corporal.",
  anatomy: [
    "Giro poscentral y lóbulo paracentral posterior; AB 3a, 3b, 1 y 2.",
    "Organización somatotópica (homúnculo sensorial): la mano, los labios y la lengua tienen representaciones grandes.",
    "Recibe aferencias de los núcleos talámicos VPL (tronco y extremidades) y VPM (cara). S2 se sitúa en el opérculo parietal.",
    "Irrigación: ACM (lateral), ACA (medial — pierna)."
  ],
  functions: [
    "Tacto, presión, vibración; localización del dolor y la temperatura.",
    "Propiocepción: posición articular y muscular (AB 3a).",
    "Discriminación de textura y forma: estereognosia, discriminación de dos puntos, grafesia (AB 1, 2).",
    "Ajuste fino del movimiento con retroalimentación sensorial; contribución al esquema corporal."
  ],
  tests: [
    "Discriminación de dos puntos, estereognosia, grafesia",
    "Exploración de la sensibilidad posicional y vibratoria",
    "Perfil Sensorial (Dunn) — patrones de procesamiento sensorial"
  ],
  development: [
    "El tacto es uno de los sistemas sensoriales que más temprano se desarrolla prenatalmente.",
    "Los mapas somatosensoriales se moldean por la experiencia; la experiencia táctil temprana importa.",
    "El tacto afectivo en la infancia (fibras C-táctiles, con la ínsula) se relaciona con el apego y la regulación emocional."
  ],
  clinical: [
    "TEA: hiper o hiporreactividad sensorial (criterio del DSM-5), defensividad táctil.",
    "TDAH y dificultades de modulación sensorial.",
    "Síndrome de Tourette: implicación de S1/S2 y la ínsula en los fenómenos sensoriales y los impulsos premonitorios.",
    "Diferencias en el procesamiento del dolor en la autolesión."
  ],
  treatment: [
    "Terapias de integración sensorial: la Academia Americana de Pediatría (2012) desaconseja usar el “trastorno del procesamiento sensorial” como diagnóstico separado y recomienda evaluar la presencia de TEA, TDAH, trastornos motores o de ansiedad subyacentes. La evidencia de estas terapias es limitada e inconsistente; si se usan, deben fijarse metas funcionales y medirse el progreso. [B]",
    "Hiperreactividad sensorial en el TEA: adaptaciones del entorno (auriculares con cancelación de ruido, rutinas predecibles) y exposición gradual; TCC si coexiste ansiedad. [C]",
    "Las diferencias en el umbral del dolor en la autolesión son un marcador, no una diana terapéutica; la terapia dialéctica conductual (TDC) redujo los intentos de suicidio y las autolesiones más que la terapia de apoyo en 173 adolescentes con alto riesgo de suicidio (McCauley et al., 2018); el primer tratamiento bien establecido en este campo. [A]"
  ],
  lesion: [
    "Pérdida sensorial contralateral, astereognosia, pérdida de la grafesia.",
    "Ataxia sensorial por alteración de la propiocepción; crisis sensoriales focales."
  ],
  links: [
    "Tálamo VPL/VPM (vías del cordón posterior–lemnisco medial y espinotalámica)",
    "Corteza motora primaria",
    "Corteza parietal posterior",
    "Ínsula (S2 e interocepción)"
  ]
},

spl: {
  name: "Lóbulo parietal superior", short: "LPS / SIP",
  summary: "Une la visión con el movimiento: calcula dónde está un objeto, guía el alcance y la prensión y contribuye al sentido numérico.",
  anatomy: [
    "Detrás del surco poscentral, por encima del surco intraparietal (SIP); AB 5 y 7.",
    "Continúa medialmente como precúneo; el surco parietooccipital queda por detrás.",
    "La estación parietal de la vía visual dorsal (“dónde / cómo”).",
    "Irrigación: zona limítrofe entre ramas de la ACM y la ACA."
  ],
  functions: [
    "Integración visuomotora: alcance, prensión, coordinación ojo–mano.",
    "Atención espacial (red de atención dorsal — junto con el COF).",
    "Esquema corporal y seguimiento de la posición de las extremidades.",
    "Rotación mental y memoria de trabajo visuoespacial.",
    "Representación de la magnitud numérica (SIP — sentido numérico)."
  ],
  tests: [
    "Tareas de rotación mental",
    "Figura compleja de Rey-Osterrieth (copia), Cubos del WISC",
    "Cubos de Corsi, estimación en recta numérica"
  ],
  development: [
    "El SIP se especializa en el procesamiento numérico a lo largo de la infancia.",
    "La memoria de trabajo visuoespacial continúa desarrollándose hasta la adolescencia."
  ],
  clinical: [
    "Discalculia: diferencias estructurales y funcionales en el SIP.",
    "Síndrome de Williams: dificultades de la vía dorsal y visuoespaciales.",
    "Síndrome de Turner: dificultades visuoespaciales y aritméticas (parietales).",
    "TDC y TDAH: integración visuomotora y redes de atención.",
    "Gran muestra estructural en TOC (ENIGMA-TOC): corteza parietal inferior y superior más delgadas en niños (efecto pequeño); amplía la visión del TOC como trastorno “frontal” a la corteza parietal (ENIGMA-TOC, 2018). [A]"
  ],
  treatment: [
    "Para las dificultades visuoespaciales y visuomotoras (síndrome de Williams, síndrome de Turner, TDC): terapia ocupacional, compensación con estrategias verbales y adaptaciones escolares (p. ej., una lista verbal de pasos para geometría y tareas de mapas). [C]",
    "Entrenamiento del sentido numérico para la discalculia; detalles en la tarjeta del LPI."
  ],
  lesion: [
    "Ataxia óptica: alteración del alcance hacia objetivos visuales.",
    "Síndrome de Bálint (bilateral): simultagnosia, ataxia óptica, apraxia oculomotora.",
    "Negligencia contralateral con lesiones derechas."
  ],
  links: [
    "Corteza occipital (vía dorsal)",
    "Campo ocular frontal y corteza premotora",
    "CPFDL (red frontoparietal)",
    "Pulvinar (tálamo)",
    "Cerebelo"
  ]
},

ipl: {
  name: "Lóbulo parietal inferior", short: "LPI",
  summary: "La región de la lectura, el cálculo y la praxis (izquierda), y de la reorientación de la atención y la perspectiva ajena (derecha).",
  anatomy: [
    "Giro supramarginal (AB 40) y giro angular (AB 39); por debajo del SIP.",
    "Unión temporoparietal (UTP): donde los giros angular/supramarginal se unen al giro temporal superior posterior.",
    "Lateralización marcada: izquierda — lenguaje y número, derecha — atención y cognición social.",
    "Irrigación: división inferior de la ACM (arteria angular)."
  ],
  functions: [
    "Izquierda: lectura y escritura (mapeo grafema–fonema–significado), recuperación de hechos aritméticos.",
    "Supramarginal izquierda: almacén fonológico, praxis (programas de movimiento).",
    "Derecha: reorientación de la atención a estímulos inesperados (red de atención ventral), conciencia espacial.",
    "UTP derecha: representar las creencias de los demás (teoría de la mente), distinción yo–otro, toma de perspectiva.",
    "Integración multisensorial y sentido de propiedad corporal."
  ],
  tests: [
    "Pruebas de lectura, ortografía y conciencia fonológica",
    "Aritmética verbal, gnosis digital",
    "Evaluación de pantomimas/praxis",
    "Tareas de falsa creencia (UTP derecha); bisección de líneas y tareas de cancelación (negligencia)"
  ],
  development: [
    "Aprender a leer remodela los circuitos temporoparietales izquierdos.",
    "La comprensión de la falsa creencia emerge hacia los 4 años; la especialización de la UTP derecha aumenta a lo largo de la infancia."
  ],
  clinical: [
    "Dislexia: hipoactivación temporoparietal izquierda (procesamiento fonológico). En 20 niños de 8–12 años, ocho semanas de entrenamiento en lenguaje y procesamiento auditivo mejoraron la lectura; la actividad temporoparietal izquierda y del GFI izquierdo se acercó a la de los lectores típicos, y el aumento temporoparietal izquierdo se relacionó con las ganancias en lenguaje (Temple et al., 2003). El cerebro puede cambiar con la intervención. [B]",
    "TEA: diferencias de activación en la UTP derecha relacionadas con la mentalización.",
    "Discalculia y TDAH (red de atención ventral)."
  ],
  treatment: [
    "Dislexia: instrucción lectora estructurada y explícita basada en fonética; la intervención intensiva temprana es la más eficaz. Adaptaciones como tiempo extra en exámenes y audiolibros. [A]",
    "Discalculia: entrenamiento del sentido numérico y de la recta numérica, enseñanza paso a paso con materiales concretos. [C]",
    "En la negligencia (parietal derecha): adaptación con prismas y entrenamiento de barrido visual (rehabilitación en adultos). [B]"
  ],
  lesion: [
    "Síndrome de Gerstmann (angular izquierda): agrafia, acalculia, agnosia digital, confusión izquierda–derecha.",
    "Afasia de conducción (supramarginal/fascículo arqueado), apraxia ideomotora (izquierda).",
    "Lesión derecha: negligencia hemiespacial, anosognosia."
  ],
  links: [
    "Áreas de Broca y de Wernicke (fascículo arqueado)",
    "GFI derecho (red de atención ventral)",
    "CPFm y precúneo (red de mentalización)",
    "Área visual de la forma de las palabras (fusiforme)"
  ]
},

tpj: {
  name: "Unión temporoparietal", short: "UTP",
  summary: "La región que distingue el yo del otro, representa las creencias ajenas y dirige la atención a lo inesperado; la UTP derecha es uno de los nodos corticales de la teoría de la mente.",
  anatomy: [
    "Donde se unen el extremo posterior del surco temporal superior, el giro angular inferior y el giro supramarginal posterior.",
    "Áreas HCP-MMP1.0 en el modelo: TPOJ1–3, STV, PSL y PGi (Glasser et al., 2016).",
    "Lateralización marcada: la UTP derecha destaca en cognición social y atención; la UTP izquierda, en lenguaje y procesamiento semántico.",
    "Irrigación: división inferior de la ACM (ramas temporal posterior y angular)."
  ],
  functions: [
    "Teoría de la mente: representar la falsa creencia de otra persona (UTP derecha; Saxe y Kanwisher, 2003).",
    "Distinción yo–otro, toma de perspectiva y control de la imitación.",
    "Reorientación de la atención a estímulos inesperados pero importantes (red de atención ventral; Corbetta y Shulman, 2002).",
    "Integración multisensorial y propiedad corporal; se han descrito experiencias extracorporales al estimular esta región (Blanke et al., 2002)."
  ],
  tests: [
    "Tareas de falsa creencia (Sally-Anne, creencia de segundo orden)",
    "Tareas de toma de perspectiva visual",
    "Tarea de señalización de Posner (reorientación tras una señal inválida)"
  ],
  development: [
    "La comprensión de la falsa creencia emerge hacia los 4 años; la selectividad de la UTP derecha por los estados mentales aumenta a lo largo de la infancia (Gweon et al., 2012).",
    "La reorganización de las redes sociocognitivas (CPFm, UTP) continúa en la adolescencia."
  ],
  clinical: [
    "TEA: diferencias en la actividad y conectividad de la UTP derecha durante tareas de mentalización.",
    "Esquizofrenia: relacionada con la alteración de la distinción yo–otro y las experiencias de pasividad (ser controlado).",
    "Experiencias disociativas y extracorporales; implicación de la UTP derecha en la negligencia."
  ],
  treatment: [
    "Entrenamiento en habilidades sociales en el TEA: PEERS (programa grupal con ayuda de los padres) mejoró las habilidades de amistad, la respuesta social y la interacción entre pares en adolescentes; las ganancias se mantuvieron a las 14 semanas de seguimiento (Laugeson et al., 2012), con réplicas aleatorizadas independientes (Schohl et al., 2013). [B]",
    "Terapia basada en la mentalización (MBT-A): trabaja la capacidad de comprender la mente propia y ajena en la autolesión adolescente y los rasgos límite de personalidad. [B]",
    "Alteración yo–otro y experiencias de pasividad en la esquizofrenia: tratamiento antipsicótico y TCC para la psicosis. [A]"
  ],
  lesion: [
    "Daño de la UTP derecha: negligencia espacial y alteración de la reorientación de la atención.",
    "Daño de la UTP izquierda: dificultad de comprensión por su proximidad al área de Wernicke, alteraciones de la lectura y la escritura."
  ],
  links: [
    "CPFm y precúneo (red de mentalización)",
    "GFI derecho e ínsula anterior (red de atención ventral)",
    "Surco temporal superior posterior (percepción social)",
    "Fascículos arqueado y longitudinal medio"
  ]
},

stg: {
  name: "Giro temporal superior y Wernicke", short: "GTS / STS",
  summary: "Procesa lo que oímos y le da sentido; aquí convergen los sonidos, el habla, la prosodia y la percepción del movimiento social.",
  anatomy: [
    "Giro de Heschl (giro temporal transverso, AB 41–42): corteza auditiva primaria, en el fondo de la cisura de Silvio.",
    "Área de Wernicke: GTS posterior (AB 22), planum temporale (habitualmente mayor a la izquierda).",
    "Surco temporal superior (STS): una región de percepción social.",
    "Irrigación: división inferior de la ACM."
  ],
  functions: [
    "Percepción auditiva (mapa tonotópico), reconocimiento de sonidos.",
    "Decodificación de los sonidos del habla (fonemas) y comprensión del significado de las palabras (Wernicke).",
    "Derecha: inferir emoción a partir de la música, el tono de voz y la prosodia.",
    "STS: percepción del movimiento biológico, la dirección de la mirada y la dinámica de la expresión facial; integración voz–cara."
  ],
  tests: [
    "Escucha dicótica, pruebas de procesamiento auditivo",
    "Test de Fichas (comprensión verbal), discriminación fonológica",
    "Reconocimiento de prosodia; paradigmas de movimiento biológico (puntos de luz)"
  ],
  development: [
    "Especialización en los sonidos de la lengua materna durante el primer año (6–12 meses, estrechamiento perceptivo).",
    "La mielinización de las vías auditivas se completa en la primera infancia; la red de percepción social del STS se desarrolla en la infancia."
  ],
  clinical: [
    "TEA: respuesta reducida del STS a la voz humana (Gervais et al., 2004), diferencias en el procesamiento del movimiento biológico.",
    "Esquizofrenia de inicio temprano: activación del GTS durante las alucinaciones auditivas, menor volumen del GTS.",
    "Trastorno del desarrollo del lenguaje, trastorno del procesamiento auditivo, dislexia (fonológica).",
    "Síndrome de Landau-Kleffner: afasia adquirida por actividad epileptiforme temporal."
  ],
  treatment: [
    "Síndrome de Landau-Kleffner: corticoides y antiepilépticos para suprimir la actividad epileptiforme; el tratamiento temprano importa para la recuperación del lenguaje. Terapia del habla y del lenguaje, lengua de signos si es necesaria. [C]",
    "Alucinaciones auditivas en la esquizofrenia de inicio temprano: tratamiento antipsicótico; clozapina en casos resistentes (incluidos adolescentes). La TCC para las voces y las terapias de relación con la voz (avatar) son prometedoras en adultos. [A]",
    "Terapia del habla y del lenguaje para las dificultades de procesamiento auditivo y del lenguaje; sistema FM y reducción de ruido en el aula. [C]"
  ],
  lesion: [
    "Afasia de Wernicke: habla fluida pero sin sentido (parafasias, neologismos), alteración de la comprensión y la repetición.",
    "Daño bilateral de Heschl: sordera cortical o sordera pura de palabras.",
    "Derecha: amusia, aprosodia."
  ],
  links: [
    "Tálamo — cuerpo geniculado medial (aferencia auditiva)",
    "Área de Broca (fascículo arqueado)",
    "Amígdala (valor emocional del sonido)",
    "Área facial fusiforme (percepción social con el STS)"
  ]
},

itg: {
  name: "Corteza temporal inferior y fusiforme", short: "GTI / GF",
  summary: "Nos dice “qué” vemos: reconocimiento de caras, objetos y palabras escritas; un almacén de conocimiento conceptual.",
  anatomy: [
    "Giros temporales medio e inferior (AB 21, 20), giro fusiforme (AB 37), polo temporal (AB 38).",
    "Área facial fusiforme (AFF — dominancia derecha) y área visual de la forma de las palabras (AVFP — fusiforme izquierdo).",
    "Medialmente, el giro parahipocampal y la corteza entorrinal (AB 28, 35–36) forman la puerta de entrada al hipocampo.",
    "Irrigación: ACP (ramas temporales inferiores) y ACM (cara lateral)."
  ],
  functions: [
    "Vía visual ventral (“¿qué?”): reconocimiento de objetos y formas.",
    "Reconocimiento facial y discriminación de identidad (AFF).",
    "Lectura: reconocimiento rápido de las formas escritas de las palabras (AVFP).",
    "Memoria semántica: conocimiento de conceptos y significados de palabras (polo temporal, GTI).",
    "Procesamiento de escenas y lugares (área parahipocampal de los lugares), procesamiento del color."
  ],
  tests: [
    "Reconocimiento Facial de Benton, Test de Memoria Facial de Cambridge (versión infantil)",
    "Denominación de objetos, fluidez por categorías (nombres de animales)",
    "Velocidad y fluidez lectora"
  ],
  development: [
    "Las regiones selectivas para caras crecen y se especializan a lo largo de la infancia y la adolescencia.",
    "La AVFP emerge con el aprendizaje de la lectura (5–7 años) y se fortalece con la experiencia lectora.",
    "El área visual de la forma de las palabras (AVFP) se forma al aprender a leer: al comparar adultos analfabetos, alfabetizados de adultos y alfabetizados de niños, la alfabetización aumentó la respuesta del fusiforme izquierdo a la escritura e inició una pequeña competencia con el procesamiento facial en el mismo sitio; la mayoría de los cambios también se vieron en quienes aprendieron de adultos (Dehaene et al., 2010). Un invento cultural (la lectura) “recicla” un área visual antigua. [B]"
  ],
  clinical: [
    "TEA: respuesta fusiforme reducida a las caras; relacionada con el patrón de mirada hacia la región ocular.",
    "Dislexia: hipoactivación de la AVFP.",
    "Prosopagnosia del desarrollo.",
    "Epilepsia del lóbulo temporal: síntomas conductuales y emocionales, problemas de memoria."
  ],
  treatment: [
    "La intervención en dislexia aumenta la actividad de la AVFP y temporoparietal izquierda; detalles en la tarjeta del LPI. [B]",
    "En la prosopagnosia del desarrollo: estrategias compensatorias (claves de voz, pelo, marcha y vestimenta) y concienciación en la escuela. [C]"
  ],
  lesion: [
    "Prosopagnosia (fusiforme derecho/bilateral), agnosia visual de objetos.",
    "Alexia pura (AVFP izquierda), acromatopsia.",
    "Polo temporal: pérdida de memoria semántica, anomia. Temporal anterior bilateral: síndrome de Klüver-Bucy."
  ],
  links: [
    "Corteza occipital (vía ventral)",
    "Hipocampo y amígdala",
    "COF (fascículo uncinado)",
    "Fascículo longitudinal inferior"
  ]
},

occipital: {
  name: "Lóbulo occipital — corteza visual", short: "V1–V5",
  summary: "Donde se procesa primero la información visual: analiza bordes, orientación, color, movimiento y profundidad, y los distribuye a las vías dorsal y ventral.",
  anatomy: [
    "V1 (AB 17, corteza estriada): en ambas orillas del surco calcarino; la estría de Gennari.",
    "V2–V3 (AB 18) y áreas de asociación (AB 19); V4 (color) ventralmente, V5/MT (movimiento) en la unión temporooccipital.",
    "El cuneus (sobre el calcarino) representa el campo visual inferior; el giro lingual (bajo el calcarino), el campo visual superior.",
    "Aferencia del cuerpo geniculado lateral por la radiación óptica. Irrigación: ACP (arteria calcarina); el polo occipital es una zona limítrofe ACM–ACP."
  ],
  functions: [
    "Mapa visual retinotópico; análisis de bordes, orientación, contraste y frecuencia espacial.",
    "Color (V4), movimiento (V5/MT), profundidad binocular (estereopsis).",
    "Alimenta las vías dorsal (parietal — “dónde/cómo”) y ventral (temporal — “qué”)."
  ],
  tests: [
    "Campimetría (por confrontación, perimetría)",
    "Pruebas de percepción visual (subtest de percepción visual del Beery VMI)",
    "Potenciales evocados visuales (PEV), umbrales de percepción de movimiento"
  ],
  development: [
    "El período crítico de la visión binocular y la agudeza visual son los primeros años; la ambliopía necesita tratamiento temprano.",
    "La densidad sináptica en V1 alcanza su máximo en la infancia (hacia los 8 meses) y luego se poda (Huttenlocher).",
    "La corteza visual es una de las áreas corticales de maduración más temprana."
  ],
  clinical: [
    "Discapacidad visual cortical/cerebral (DVC): la causa más frecuente de discapacidad visual infantil en los países desarrollados (24 % en un registro estadounidense de 0–3 años; hasta el 48 % de la pérdida visual grave en el Reino Unido). La causa más común es la lesión hipóxico-isquémica, especialmente la leucomalacia periventricular en prematuros. La exploración ocular puede ser normal; puede confundirse con un problema de conducta o aprendizaje. [A]",
    "TEA: procesamiento visual local (centrado en el detalle).",
    "Epilepsias occipitales infantiles: síndrome de Panayiotopoulos (autonómico), tipo Gastaut (alucinaciones visuales).",
    "Aura de migraña (depresión cortical propagada)."
  ],
  treatment: [
    "Fármacos preventivos de la migraña infantil: en el ensayo CHAMP (8–17 años, 361 pacientes) la amitriptilina y el topiramato no fueron superiores al placebo (reducción de la frecuencia de crisis de al menos el 50 %: 52 %, 55 %, placebo 61 %) y tuvieron más efectos secundarios (Powers et al., 2017). Las medidas de estilo de vida y la TCC son la base de la prevención. [A]",
    "En la DVC: adaptar el entorno visual (alto contraste, fondo sencillo, objetos móviles y coloridos) y rehabilitación visual temprana. [C]",
    "La mayoría de las epilepsias occipitales (p. ej., síndrome de Panayiotopoulos) son benignas; antiepilépticos para crisis frecuentes."
  ],
  lesion: [
    "Hemianopsia homónima contralateral (la mácula puede estar preservada).",
    "Bilateral: ceguera cortical, síndrome de Anton (negación de la ceguera).",
    "Acinetopsia (V5), acromatopsia (V4), alucinaciones e ilusiones visuales."
  ],
  links: [
    "Tálamo — cuerpo geniculado lateral y pulvinar",
    "Corteza parietal (vía dorsal)",
    "Corteza temporal inferior/fusiforme (vía ventral)",
    "Campo ocular frontal",
    "Colículo superior"
  ]
},

insula: {
  latin: 'Lobus insularis (ínsula de Reil)',
  name: "Ínsula", short: "Ínsula",
  summary: "Siente el interior del cuerpo: convierte el latido, el hambre, el asco y el dolor en sensación subjetiva y dirige la atención hacia lo saliente.",
  anatomy: [
    "En el fondo del surco lateral, cubierta por los opérculos frontal, parietal y temporal; rodeada por el surco circular.",
    "Giros insulares cortos (anterior) y largos (posterior).",
    "La ínsula anterior contiene neuronas de von Economo.",
    "Irrigación: segmentos M2 de la ACM."
  ],
  functions: [
    "Interocepción: sentir los estados internos del cuerpo como el latido, la respiración, el hambre y la plenitud vesical.",
    "Experiencia emocional subjetiva y conciencia corporal.",
    "Procesamiento del asco; corteza gustativa primaria (ínsula anterior/opérculo frontal).",
    "Dolor y temperatura (ínsula posterior), regulación autonómica.",
    "Red de saliencia (con la CCA): alternancia entre la RND y la red ejecutiva.",
    "Empatía, evaluación de la incertidumbre y el riesgo, deseo intenso (craving)."
  ],
  tests: [
    "Tareas de detección/conteo de latidos",
    "Escalas de conciencia interoceptiva",
    "Reconocimiento de expresiones faciales de asco, paradigmas de empatía"
  ],
  development: [
    "La conciencia interoceptiva se desarrolla en la adolescencia.",
    "Las conexiones de la red de saliencia ínsula anterior–CCA se fortalecen en la adolescencia.",
    "Los adolescentes muestran una respuesta insular marcada a la exclusión social (Cyberball)."
  ],
  clinical: [
    "Trastornos de ansiedad: hiperactividad de la ínsula anterior, intolerancia a la incertidumbre.",
    "Anorexia nerviosa: alteración del procesamiento interoceptivo y de la percepción corporal.",
    "TEA: diferencias en la interocepción, alexitimia, diferencias en la red de saliencia.",
    "Consumo de sustancias: los fumadores con daño insular dejan de fumar con facilidad y sin deseo (el “craving” desaparece) (Naqvi et al., 2007). La ínsula convierte la sensación corporal de deseo en un impulso consciente. [B]",
    "Síndrome de Tourette: activación de la ínsula durante el impulso premonitorio.",
    "Un hallazgo transdiagnóstico compartido: los sitios más consistentes de pérdida de sustancia gris en los trastornos psiquiátricos son la ínsula anterior bilateral y la CCA dorsal (193 estudios; Goodkind et al., 2015). El debilitamiento de la red de saliencia se relaciona con dificultades ejecutivas independientemente del diagnóstico. [A]"
  ],
  treatment: [
    "EMT profunda (bobina H4): autorizada por la FDA en adultos como ayuda a corto plazo para dejar de fumar (agosto de 2020; ensayo controlado con placebo de 262 personas, 18 sesiones en 6 semanas). La primera autorización de EMT en adicciones. [A]",
    "Los enfoques centrados en la interocepción (conciencia corporal, de la respiración y del latido) se estudian en ansiedad, trastornos alimentarios y TEA; la ínsula es su diana teórica. [C]"
  ],
  lesion: [
    "Alteración del gusto, desregulación autonómica (ínsula derecha — arritmia).",
    "Alteración del reconocimiento del asco, anosognosia (posterior derecha).",
    "Ínsula anterior izquierda: apraxia del habla."
  ],
  links: [
    "CCA (red de saliencia)",
    "Amígdala",
    "COF y vmPFC",
    "Tálamo VMpo/VMb (aferencia interoceptiva)",
    "Hipotálamo y centros autonómicos del tronco del encéfalo"
  ]
},

pcc: {
  name: "Cíngulo posterior y precúneo", short: "CP / Precúneo",
  summary: "El nodo de la red neuronal por defecto: aquí convergen el pensamiento dirigido al interior, la memoria autobiográfica y la experiencia del yo.",
  anatomy: [
    "Corteza cingulada posterior (AB 23, 31), corteza retroesplenial (AB 29–30), precúneo (AB 7 medial).",
    "Alrededor y por encima del esplenio del cuerpo calloso; el surco parietooccipital queda por detrás.",
    "Una de las regiones metabólicamente más activas y más conectadas del cerebro.",
    "Irrigación: ACA (pericallosa), ACP (ramas parietooccipitales)."
  ],
  functions: [
    "Nodo de la red neuronal por defecto (RND): máxima actividad en reposo, pensamiento dirigido al interior.",
    "Recuperación de la memoria autobiográfica, procesamiento relacionado con el yo.",
    "Imaginar el futuro (simulación episódica), divagación mental.",
    "Retroesplenial: navegación espacial, transformación entre puntos de vista.",
    "Precúneo: imaginería visual, memoria episódica, conciencia."
  ],
  tests: [
    "fMRI en reposo (conectividad de la RND)",
    "Entrevista de memoria autobiográfica",
    "Tareas de navegación virtual e imaginería"
  ],
  development: [
    "La RND está fragmentada en la infancia; las conexiones de largo alcance se fortalecen en la infancia y la adolescencia (Fair et al., 2008).",
    "La anticorrelación entre la RND y las redes positivas a la tarea se vuelve más clara con la edad."
  ],
  clinical: [
    "TDAH: supresión insuficiente de la red neuronal por defecto (RND) durante las tareas y lapsos atencionales (Sonuga-Barke y Castellanos, 2007). En jóvenes con TDAH cuya supresión de la RND era débil sin medicación, un estimulante normalizó la supresión y la influencia de la CCA ventral sobre la CPF lateral (Peterson et al., 2009; 16 pacientes). [B]",
    "TEA: diferencias en la conectividad de la RND.",
    "Depresión: mayor actividad de la RND relacionada con la rumiación.",
    "Trauma: disociación y cambios en la percepción de uno mismo."
  ],
  treatment: [
    "Los estimulantes normalizan la supresión de la RND durante las tareas; regular la red ligada a la “divagación mental” puede ser un mecanismo de acción (Peterson et al., 2009). [B]",
    "En la depresión, la TCC centrada en la rumiación y la activación conductual trabajan el excesivo foco interno de la RND; hallazgos de red relacionados en la tarjeta de la CPFm (Kaiser et al., 2015). [B]",
    "En el trauma y la disociación, la TCC centrada en el trauma (TF-CBT) es de primera línea en niños y adolescentes. [A]"
  ],
  lesion: [
    "Desorientación topográfica (retroesplenial — perderse).",
    "Alteración de la memoria episódica, cambios en la conciencia."
  ],
  links: [
    "CPFm (nodo anterior de la RND)",
    "Hipocampo y corteza parahipocampal",
    "Giro angular",
    "Tálamo — núcleo anterior",
    "Haz del cíngulo"
  ]
}

});
