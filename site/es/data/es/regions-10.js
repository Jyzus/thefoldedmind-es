/* Textos de regiones en español (regions-10.js: subáreas corticales e hipófisis). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

vmpfc: {
  name: "Corteza prefrontal ventromedial", short: "vmPFC",
  summary: "Rastrea el valor subjetivo de las opciones; calma la amígdala mediante el recuerdo del miedo extinguido.",
  anatomy: [
    "La base de la cara medial, debajo del polo frontal: áreas HCP-MMP 10r y 10v (Glasser et al., 2016). La COF medial queda debajo; el cíngulo subgenual y pregenual, detrás.",
    "Conectada con la amígdala y el polo temporal por el fascículo uncinado, y con el estriado ventral y el hipotálamo."
  ],
  functions: [
    "Valor subjetivo: en un metaanálisis de 206 estudios de fMRI, la vmPFC y el estriado ventral rastrean el valor subjetivo independientemente del tipo de recompensa (Bartra et al., 2013). [A]",
    "Extinción del miedo: en ratas, las neuronas infralímbicas señalan el recuerdo de la extinción al día siguiente (Milad y Quirk, 2002); en humanos la vmPFC está activa durante el recuerdo de la extinción (Phelps et al., 2004) y su grosor se correlaciona con la memoria de extinción (Milad et al., 2005). [B]"
  ],
  development: [
    "En fMRI de tareas entre los 4 y los 22 años, la conectividad amígdala–prefrontal es positiva en la infancia y se vuelve negativa durante la transición a la adolescencia (Gee et al., 2013). [B]"
  ],
  clinical: [
    "Los modelos de ansiedad y TEPT enfatizan una regulación insuficiente de la amígdala por la vmPFC y una memoria de extinción débil; son hallazgos de grupo y no diagnostican a un individuo."
  ],
  treatment: [
    "La terapia de exposición usa el aprendizaje de extinción: el nuevo aprendizaje “seguro” no borra el antiguo recuerdo de miedo, sino que compite con él."
  ],
  lesion: [
    "Tras el daño prefrontal ventromedial, insensibilidad a las consecuencias a largo plazo en la tarea de juego (Bechara et al., 1994). [B]"
  ],
  links: [
    "Amígdala (fascículo uncinado)",
    "Accumbens y estriado ventral",
    "ATV (dopamina mesolímbica)",
    "Hipotálamo"
  ]
},

dmpfc: {
  name: "Corteza prefrontal dorsomedial", short: "dmPFC",
  summary: "Apoya el pensamiento sobre los estados mentales de los demás y de uno mismo; el nodo medial anterior de la red por defecto.",
  anatomy: [
    "La cara medial del giro frontal superior: áreas HCP-MMP 9m, 8BM, 10d y áreas dorsales vecinas (Glasser et al., 2016)."
  ],
  functions: [
    "Teoría de la mente: la corteza frontal medial se activa de forma consistente al inferir las intenciones y creencias de los demás (Amodio y Frith, 2006; metaanálisis: Schurz et al., 2014). [A]",
    "Evaluación y expresión de la emoción negativa: las regiones dorsomediales se ligan a este papel; las ventrales, a la regulación (Etkin et al., 2011). [B]"
  ],
  clinical: [
    "Un metaanálisis de conectividad en reposo en la depresión describe una mayor conectividad dentro de la red por defecto (Kaiser et al., 2015). [A]"
  ],
  links: [
    "Red por defecto",
    "Cíngulo posterior y precúneo"
  ]
},

fpc: {
  name: "Polo frontal", short: "PF",
  summary: "Permite mantener una meta pendiente mientras se cambia a otra tarea; considerado el nivel superior del sistema ejecutivo.",
  anatomy: [
    "La punta más anterior del lóbulo frontal: áreas HCP-MMP 10pp, a10p y p10p (Glasser et al., 2016)."
  ],
  functions: [
    "Cambiar a otra tarea manteniendo en mente un plan inconcluso (Koechlin y Hyafil, 2007). [B]",
    "Dirigir la atención de los estímulos externos al pensamiento interno y de vuelta: la hipótesis de la “puerta de entrada” (Burgess et al., 2007). [B]"
  ],
  development: [
    "El desarrollo prefrontal rostral es prolongado: la disminución de la sustancia gris y de la densidad sináptica continúa en la adolescencia (Dumontheil et al., 2008). [B]"
  ],
  clinical: [
    "La misma revisión discute hallazgos prefrontales rostrales en TDAH y autismo; no tienen valor diagnóstico (Dumontheil et al., 2008). [C]"
  ],
  links: [
    "CPFDL",
    "Red de control frontoparietal"
  ]
},

sgacc: {
  name: "Cíngulo anterior subgenual", short: "sgACC",
  summary: "El cíngulo por debajo de la rodilla del cuerpo calloso: un nodo de regulación emocional y autonómica y una diana principal de la investigación sobre la depresión.",
  anatomy: [
    "Debajo de la rodilla, detrás de la vmPFC: áreas HCP-MMP 25 y s32 (Glasser et al., 2016).",
    "En el modelo de cuatro regiones del cíngulo es la parte inferior del cíngulo anterior (Vogt, 2005)."
  ],
  functions: [
    "Ligado a respuestas emocionales y autonómicas (Vogt, 2005; Drevets et al., 1997). [B]"
  ],
  clinical: [
    "En la depresión bipolar y unipolar familiar, actividad reducida en PET y pérdida de sustancia gris en RM en la corteza prefrontal subgenual (Drevets et al., 1997). En mujeres jóvenes con depresión de inicio adolescente, el volumen subgenual izquierdo es en promedio un 19 % menor, con una diferencia similar en mujeres de mediana edad (Botteron et al., 2002). [B]",
    "La dirección de la actividad difiere entre estudios: se ha descrito hiperactividad metabólica en la depresión resistente al tratamiento (Mayberg et al., 2005). Es un modelo y no diagnostica a un individuo. [B]"
  ],
  treatment: [
    "Estimulación cerebral profunda: un estudio abierto de 6 pacientes con depresión resistente al tratamiento describió mejoría sostenida en 4 (Mayberg et al., 2005), pero un ensayo controlado con placebo no mostró eficacia (Holtzheimer et al., 2017). Es experimental y solo se estudia en adultos. [B]",
    "EMT: apuntar al punto de la CPFDL izquierda más anticorrelacionado con el sgACC se relaciona con la eficacia (Fox et al., 2012). [B]"
  ],
  links: [
    "Amígdala",
    "Hipotálamo",
    "CPFDL (anticorrelación)"
  ]
},

pgacc: {
  name: "Cíngulo anterior pregenual", short: "pgACC",
  summary: "El cíngulo delante de la rodilla: regula la amígdala desde arriba mientras resuelve el conflicto emocional.",
  anatomy: [
    "Delante de la rodilla del cuerpo calloso: áreas HCP-MMP a24, p32 y d32 (Glasser et al., 2016). A menudo llamado CCA rostral en la literatura."
  ],
  functions: [
    "Al resolver el conflicto emocional, el cíngulo rostral reduce la actividad de la amígdala desde arriba (Etkin et al., 2006). [B]",
    "Las regiones mediales ventrales se ligan a la regulación de la emoción negativa (Etkin et al., 2011). [B]"
  ],
  clinical: [
    "Depresión: una mayor actividad de la CCA rostral en reposo predice la respuesta al tratamiento en un metaanálisis (Pizzagalli, 2011); es un hallazgo de grupo y no se usa para elegir el tratamiento de un individuo. [A]"
  ],
  links: [
    "Amígdala",
    "Red por defecto"
  ]
},

dacc: {
  name: "Cíngulo anterior dorsal y corteza cingulada media anterior", short: "dACC",
  summary: "Donde convergen el afecto negativo, el dolor y el control cognitivo; el nodo medial de la red de saliencia.",
  anatomy: [
    "Por encima y detrás de la rodilla: áreas HCP-MMP p24, a24pr, p24pr, a32pr, p32pr, 33pr. En el modelo las áreas motoras cinguladas (24dd, 24dv) también están en esta parte (Glasser et al., 2016)."
  ],
  functions: [
    "El afecto negativo, el dolor y el control cognitivo se superponen en el cíngulo medio anterior (metaanálisis: Shackman et al., 2011); también se argumenta la diferenciación de subregiones (Vogt, 2005). [A]",
    "Forma la red de saliencia junto con la ínsula anterior (Seeley et al., 2007). [B]"
  ],
  clinical: [
    "En el TOC pediátrico la respuesta cerebral relacionada con el error (ERN) es grande y permanece grande tras el tratamiento (Hajcak et al., 2008). [B]",
    "Pérdida transdiagnóstica de sustancia gris: un metaanálisis de 193 estudios destaca el cíngulo anterior dorsal y la ínsula anterior (Goodkind et al., 2015). [A]"
  ],
  links: [
    "Ínsula anterior (red de saliencia)",
    "Caudado (bucle del TOC)",
    "Tálamo"
  ]
},

mofc: {
  name: "Corteza orbitofrontal medial", short: "mOFC",
  summary: "Rastrea el valor de las recompensas; guía la elección representando el resultado esperado.",
  anatomy: [
    "La parte medial de la superficie orbitaria: áreas HCP-MMP OFC y pOFC (Glasser et al., 2016)."
  ],
  functions: [
    "La actividad orbitofrontal medial se relaciona con el valor de la recompensa (Kringelbach y Rolls, 2004); la ganancia monetaria activa las regiones mediales (O'Doherty et al., 2001). [B]",
    "Predicción y evaluación de resultados específicos (Rudebeck y Murray, 2014). [B]"
  ],
  links: [
    "vmPFC",
    "Accumbens",
    "Amígdala"
  ]
},

lofc: {
  name: "Corteza orbitofrontal lateral", short: "lOFC",
  summary: "Evalúa el castigo y los resultados negativos; señala que la conducta necesita cambiar.",
  anatomy: [
    "La parte lateral de la superficie orbitaria: áreas HCP-MMP 11l, 13l, 47m y, en el modelo, las demás partes del área 47 (Glasser et al., 2016)."
  ],
  functions: [
    "La actividad orbitofrontal lateral se relaciona con evaluar los castigos y con el consiguiente cambio de conducta (Kringelbach y Rolls, 2004; O'Doherty et al., 2001). [B]"
  ],
  clinical: [
    "TOC: más allá del modelo córtico-estriatal clásico, se discuten los circuitos de la COF lateral y medial, el cíngulo anterior dorsal y la amígdala; el aprendizaje de extinción también está alterado (Milad y Rauch, 2012). [B]"
  ],
  links: [
    "Caudado (bucle del TOC)",
    "Amígdala"
  ]
},

aic: {
  name: "Ínsula anterior", short: "aINS",
  summary: "Convierte las señales corporales en sentimiento y conciencia; marca lo que importa e inicia el cambio entre redes.",
  anatomy: [
    "La parte anterior de la ínsula: áreas HCP-MMP AVI, AAIC, MI, FOP5 y la parte piriforme vecina (Glasser et al., 2016)."
  ],
  functions: [
    "Conciencia subjetiva del estado corporal (Craig, 2009). [B]",
    "Forma la red de saliencia con el cíngulo anterior dorsal (Seeley et al., 2007); marca los acontecimientos salientes e inicia el cambio entre las redes de atención externa y de pensamiento interno (Menon y Uddin, 2010). [B]"
  ],
  clinical: [
    "Ansiedad: se propone hiperactividad de la ínsula anterior (Paulus y Stein, 2006); se describe actividad reducida en el autismo (Menon y Uddin, 2010). [B]",
    "La ínsula anterior destaca en la pérdida transdiagnóstica de sustancia gris (Goodkind et al., 2015). [A]"
  ],
  lesion: [
    "La mayoría de los pacientes que dejaron de fumar tras un daño insular lo hicieron de inmediato, con facilidad y sin recaídas. Es un pequeño estudio retrospectivo de toda la ínsula y no separa anterior de posterior (Naqvi et al., 2007). [C]"
  ],
  links: [
    "Cíngulo anterior dorsal (red de saliencia)",
    "Amígdala",
    "Ínsula posterior"
  ]
},

pic: {
  name: "Ínsula posterior", short: "pINS",
  summary: "El mapa primario del estado interno del cuerpo: la temperatura, el dolor y la sensación visceral llegan aquí.",
  anatomy: [
    "La parte posterior de la ínsula: áreas HCP-MMP PoI1, PoI2, Ig, PI y, en el modelo, áreas operculares vecinas (Glasser et al., 2016)."
  ],
  functions: [
    "La primera representación cortical de la sensación corporal, que se convierte en conciencia emocional hacia la ínsula anterior (Craig, 2009). [B]",
    "Dolor: el flujo sanguíneo de la ínsula posterior dorsal rastrea la intensidad de dolor referida (Segerdahl et al., 2015); se discute si es específica del dolor (Davis et al., 2015). [B]"
  ],
  links: [
    "Tálamo (VMb)",
    "Ínsula anterior"
  ]
},

sma: {
  name: "Área motora suplementaria y pre-AMS", short: "AMS / pre-AMS",
  summary: "Une la cognición con la acción; su estimulación puede evocar una urgencia de moverse.",
  anatomy: [
    "El grupo de la AMS, el campo ocular suplementario y la pre-AMS en la corteza frontal dorsomedial (Nachev et al., 2008). El modelo muestra las áreas HCP-MMP 6mp, 6ma y SCEF (Glasser et al., 2016) como una subestructura."
  ],
  functions: [
    "Une la cognición con la acción; más sensible que las áreas motoras primarias a tareas en las que las acciones posibles no están del todo fijadas por el entorno (Nachev et al., 2008). [B]",
    "La estimulación eléctrica suele evocar movimientos complejos en varias articulaciones y, en algunos casos, una “urgencia” de moverse (Fried et al., 1991). [C]"
  ],
  clinical: [
    "Síndrome de Tourette: en 10 adultos, una red paralímbica que incluye la AMS está activa en los 2 segundos previos a un tic (Bohlhalter et al., 2006); la muestra es pequeña. [C]",
    "TDAH: en un metaanálisis de tareas de inhibición, la activación de la AMS está reducida, y esta reducción aparece en muestras pediátricas (Hart et al., 2013); un hallazgo de grupo que no diagnostica a un individuo. [A]"
  ],
  lesion: [
    "Tras resecciones que afectan a la AMS, un curso en tres etapas que comienza con acinesia global y habla detenida (Laplane et al., 1977; 3 pacientes). [C]"
  ],
  links: [
    "Cíngulo anterior e ínsula (activos juntos antes de los tics)"
  ]
},

lpm: {
  name: "Corteza premotora lateral", short: "CPM lateral",
  summary: "Planifica y selecciona el movimiento; incluye las áreas premotoras dorsal y ventral y el campo ocular frontal.",
  anatomy: [
    "La parte lateral del área 6 y sus vecinas: áreas HCP-MMP 6a, 6d, 6v, 6r, 55b, COF, CPE (Glasser et al., 2016)."
  ],
  functions: [
    "Las áreas premotoras dorsal y ventral participan en distintos aspectos de la planificación motora y la toma de decisiones a través de redes corticales diferenciadas (Hoshi y Tanji, 2007; datos mayormente de monos). [B]"
  ]
},

ifg44: {
  name: "Pars opercularis (área 44)", short: "GFI 44",
  summary: "La parte posterior de la región de Broca a la izquierda; su homóloga derecha es una diana principal de la investigación sobre la inhibición de respuesta.",
  anatomy: [
    "La parte posterior del giro frontal inferior: área HCP-MMP 44 (Glasser et al., 2016). En un estudio citoarquitectónico, el área 44 fue asimétrica izquierda-derecha en todos los cerebros, y su volumen varió hasta unas diez veces entre personas (Amunts et al., 1999)."
  ],
  functions: [
    "GFI derecho e inhibición: los pacientes con daño frontal derecho tienen tiempos de reacción de parada más largos (Aron et al., 2003). La interpretación es debatida: un estudio de lesiones más reciente argumenta que el daño perjudica el inicio de la inhibición más que su ejecución (Choo et al., 2022). [B]",
    "La asimetría del área 44 se ha propuesto como un posible correlato anatómico de la lateralización izquierda de la producción del habla (Amunts et al., 1999). [C]"
  ],
  clinical: [
    "TDAH: en un metaanálisis de tareas de inhibición, la activación frontal inferior derecha está reducida; dividida por edad, esta reducción aparece en adultos (Hart et al., 2013); un hallazgo de grupo que no diagnostica a un individuo. [A]",
    "Trastorno bipolar: en ENIGMA, el adelgazamiento de la pars opercularis izquierda está entre los efectos regionales más fuertes (d ≈ −0,29; Hibar et al., 2018). El efecto es pequeño; un hallazgo de grupo que no diagnostica a un individuo. [A]"
  ],
  lesion: [
    "Nuevas RM de los cerebros de los dos pacientes históricos de Broca muestran lesiones que se extienden hacia regiones mediales, por lo que la afasia de Broca no debería explicarse solo por esta área (Dronkers et al., 2007). [B]"
  ],
  links: [
    "Pars triangularis (área 45)",
    "Giro temporal superior (vía dorsal)"
  ]
},

ifg45: {
  name: "Pars triangularis (área 45)", short: "GFI 45",
  summary: "Ayuda a seleccionar el ítem correcto entre las opciones recuperadas de la memoria; la parte anterior de la región de Broca a la izquierda.",
  anatomy: [
    "La parte triangular del giro frontal inferior: área HCP-MMP 45 (Glasser et al., 2016). Los límites citoarquitectónicos no siguen las líneas de los surcos, por lo que su localización no puede leerse con fiabilidad solo por los surcos (Amunts et al., 1999)."
  ],
  functions: [
    "La corteza prefrontal ventrolateral media izquierda (aproximadamente AB 45) resuelve la competencia entre representaciones recuperadas (Badre y Wagner, 2007). [B]",
    "Reevaluación cognitiva: en un metaanálisis de 48 estudios activa regiones de control cognitivo y corteza temporal lateral y modula la amígdala en ambos lados (Buhle et al., 2014). [A]"
  ],
  clinical: [
    "Alucinaciones verbales auditivas: en un metaanálisis de 68 pacientes, el área de Broca y regiones cercanas de producción del habla están activas durante las alucinaciones (Jardri et al., 2011); un hallazgo de grupo que no diagnostica a un individuo. [B]"
  ],
  links: [
    "Pars opercularis (área 44)",
    "Giros temporales medio e inferior (reevaluación)",
    "Amígdala (modulación funcional en la reevaluación)"
  ]
},

fop: {
  name: "Opérculo frontal", short: "FOP",
  summary: "La pared frontal que cubre la ínsula; asociada al control de tareas y al procesamiento del gusto.",
  anatomy: [
    "La pared frontal de la cisura de Silvio: las partes de las áreas HCP-MMP FOP1, FOP3, FOP4, FOP5, AVI y MI que caen dentro de la región del GFI (Glasser et al., 2016). Las partes de estas áreas en la región insular pertenecen a las subestructuras insulares anterior y posterior. Queda oculto desde el lateral; sus alrededores se vuelven transparentes al seleccionarlo."
  ],
  functions: [
    "Control de tareas: en un estudio combinado de fMRI y EMT, el opérculo frontal ajusta la actividad occipitotemporal según la categoría atendida, y la EMT debilita este ajuste (Higo et al., 2011). [B]",
    "La ínsula anterior y el opérculo frontal pertenecen a la red cíngulo-opercular, asociada al mantenimiento estable del set durante una tarea (Dosenbach et al., 2007). [B]",
    "Gusto: en una revisión de neuroimagen, los picos gustativos se reparten por la ínsula y los opérculos frontal y parietal (Small et al., 1999). [B]"
  ],
  links: [
    "Ínsula anterior",
    "CCA dorsal (red cíngulo-opercular)",
    "Áreas occipitotemporales (ajuste atencional)"
  ]
},

audstg: {
  name: "Giro temporal superior y corteza auditiva", short: "GTS / A1",
  summary: "Donde el sonido y el habla se procesan primero en la corteza: la corteza auditiva primaria en el giro de Heschl y sus alrededores.",
  anatomy: [
    "El giro transverso (de Heschl) y el giro temporal superior: áreas HCP-MMP A1, MBelt, LBelt, PBelt, RI, 52, A4, A5, TA2, STGa (Glasser et al., 2016). A la izquierda, una pequeña parte del opérculo parietal queda en esta subestructura por la regla del área más cercana.",
    "En fMRI a 7 Tesla, los dos mapas tonotópicos en espejo de la corteza auditiva primaria siguen la forma del giro de Heschl (Da Costa et al., 2011)."
  ],
  functions: [
    "Habla: el análisis temprano comienza bilateralmente en el giro temporal superior y luego se divide en una vía ventral para la comprensión y una vía dorsal hacia la articulación (Hickok y Poeppel, 2007). [B]"
  ],
  development: [
    "La corteza temporal superior fue la última región en madurar en 13 niños sanos seguidos entre los 4 y los 21 años (Gogtay et al., 2004). [B]"
  ],
  clinical: [
    "Alucinaciones verbales auditivas: en un metaanálisis, las cortezas de asociación auditiva están activas junto con las regiones de producción del habla (Jardri et al., 2011); un hallazgo de grupo que no diagnostica a un individuo. [B]"
  ],
  links: [
    "Surco temporal superior",
    "Red articulatoria frontal (vía dorsal)"
  ]
},

sts: {
  name: "Surco temporal superior", short: "STS",
  summary: "El surco donde convergen claves sociales como la mirada, el movimiento facial, la voz y el movimiento corporal.",
  anatomy: [
    "El surco entre los giros temporales superior y medio: áreas HCP-MMP STSda, STSdp, STSva, STSvp (Glasser et al., 2016). La mayor parte queda dentro del surco. En el modelo sus dos orillas caen en las regiones temporales superior e inferior; esta subestructura las une y aparece en ambas familias."
  ],
  functions: [
    "Percepción social: en monos y humanos responde a los movimientos de los ojos, la boca, las manos y el cuerpo, y se propone como una etapa temprana de la lectura de las intenciones ajenas (Allison et al., 2000). [B]",
    "Voz: las áreas selectivas para la voz se sitúan a lo largo de la orilla superior en ambos lados (Belin et al., 2000). [B]",
    "Las subregiones dispuestas de posterior a anterior son selectivas para distintas aferencias sociales; las respuestas al lenguaje y a la teoría de la mente, y a las caras y las voces, se superponen en parte (Deen et al., 2015). [B]"
  ],
  development: [
    "A diferencia de las áreas de caras y lugares, el volumen del STS se mantiene estable entre los 7–11, 12–16 años y la adultez (Golarai et al., 2007). [B]"
  ],
  clinical: [
    "Autismo: un primer estudio de 5 adultos no halló respuesta del STS selectiva a la voz (Gervais et al., 2004); un estudio posterior de 16 adultos halló respuestas típicas durante la escucha pasiva, con disfunción del STS/GTS posterior derecho durante el reconocimiento de la identidad de la voz (Schelinski et al., 2016). Muestras pequeñas; un hallazgo de grupo que no diagnostica a un individuo. [C]"
  ],
  links: [
    "Giro temporal superior",
    "Giro fusiforme (área de caras)"
  ]
},

tpole: {
  name: "Polo temporal", short: "PT",
  summary: "El extremo anterior del lóbulo temporal; se cree que une la percepción procesada con la respuesta emocional y el conocimiento conceptual.",
  anatomy: [
    "El extremo anterior del lóbulo temporal: áreas HCP-MMP TGd, TGv (Glasser et al., 2016). En el modelo su cara superior cae en la región temporal superior y su cara inferior en la temporal inferior; esta subestructura las une y aparece en ambas familias.",
    "El fascículo uncinado lo conecta con la corteza orbitofrontal; se propone que este tracto ajusta las representaciones de memoria temporales según la historia de recompensa y castigo (Von Der Heide et al., 2013)."
  ],
  functions: [
    "Procesamiento social y emocional: contribuye al reconocimiento de caras y a la teoría de la mente, y se propone que une la aferencia perceptiva procesada con la respuesta emocional visceral (Olson et al., 2007). [B]",
    "Significado: el lóbulo temporal anterior es el núcleo del modelo de núcleo y radios del conocimiento conceptual, basado en gran parte en datos de la demencia semántica (Patterson et al., 2007). [B]"
  ],
  clinical: [
    "Esquizofrenia: en ENIGMA, el adelgazamiento del polo temporal relacionado con la edad es más fuerte en ambos lados que en los controles (van Erp et al., 2018); un hallazgo de grupo que no diagnostica a un individuo. [A]"
  ],
  lesion: [
    "Demencia semántica: con marcada atrofia temporal focal, se pierden la denominación y la comprensión de palabras aisladas, mientras la fonología, la gramática y la memoria autobiográfica están relativamente preservadas (Hodges et al., 1992; 5 pacientes). [C]"
  ],
  links: [
    "Corteza orbitofrontal (fascículo uncinado)"
  ]
},

fusiform: {
  name: "Giro fusiforme", short: "GF",
  summary: "Participa en el reconocimiento de caras y formas de objetos; hogar del área de las caras.",
  anatomy: [
    "La cara inferior del lóbulo temporal: áreas HCP-MMP FFC, VVC, V8, VMV1–3 (Glasser et al., 2016). La vecina área PIT cae en la región occipital en el modelo y no forma parte de esta subestructura."
  ],
  functions: [
    "Caras: en 12 de 15 personas, una región del giro fusiforme respondió más a las caras que a los objetos (Kanwisher et al., 1997). [B]",
    "Lectura: el área visual de la forma de las palabras está al lado, en el surco occipitotemporal lateral izquierdo; la lectura recicla corteza evolucionada para el reconocimiento de objetos y caras (Dehaene y Cohen, 2011). [B]"
  ],
  development: [
    "El área de las caras crece desde los 7–11 años hasta la adultez, y este crecimiento sigue la mejoría del reconocimiento de caras (Golarai et al., 2007). [B]"
  ],
  clinical: [
    "Autismo: la activación fusiforme se correlaciona fuertemente con el tiempo de fijación de los ojos, por lo que parte de la baja respuesta descrita puede reflejar una mirada reducida (Dalton et al., 2005); un hallazgo de grupo que no diagnostica a un individuo. [B]",
    "Trastorno bipolar: en ENIGMA, el adelgazamiento del fusiforme izquierdo está entre los efectos regionales más fuertes (d ≈ −0,29; Hibar et al., 2018). El efecto es pequeño; un hallazgo de grupo que no diagnostica a un individuo. [A]"
  ],
  lesion: [
    "Prosopagnosia adquirida: los pacientes con lesiones fusiformes derechas tienen dificultad para detectar cambios en la disposición de los rasgos faciales (Barton et al., 2002). [C]"
  ],
  links: [
    "Surco temporal superior",
    "Corteza parahipocampal"
  ]
},

ento: {
  name: "Corteza entorrinal y perirrinal", short: "CE / CPR",
  summary: "Pasa la aferencia de la corteza parahipocampal al hipocampo; lleva información de posición y familiaridad, y es un sitio temprano de la patología de Alzheimer.",
  anatomy: [
    "El frente del giro parahipocampal: áreas HCP-MMP EC (entorrinal) y PeEc (perirrinal, ectorrinal) (Glasser et al., 2016).",
    "Recibe una aferencia mayor de la corteza parahipocampal y alimenta directamente al hipocampo (Aminoff et al., 2013)."
  ],
  functions: [
    "Posición: las células de red de la corteza entorrinal medial de la rata cartografían el entorno con una retícula de triángulos equiláteros (Hafting et al., 2005). [B]",
    "En un estudio de fMRI humana de 42 personas, una señal direccional séxtuple, más fuerte en la corteza entorrinal derecha, apunta a una representación similar a una retícula pero no muestra las células directamente (Doeller et al., 2010). [B]"
  ],
  clinical: [
    "Enfermedad de Alzheimer: en un estudio de estadificación de 83 cerebros, los cambios neurofibrilares aparecen primero en la región transentorrinal y luego en la corteza entorrinal (Braak y Braak, 1991); es una enfermedad del adulto. [B]"
  ],
  lesion: [
    "En un caso único tras cirugía que extirpó gran parte de la corteza perirrinal pero preservó el hipocampo, la familiaridad se debilitó mientras el recuerdo se conservó (Bowles et al., 2007). [C]"
  ],
  links: [
    "Hipocampo",
    "Corteza parahipocampal"
  ]
},

phg: {
  name: "Corteza parahipocampal", short: "CPH",
  summary: "Une la información de escenas y contexto a la memoria; incluye el área parahipocampal de los lugares.",
  anatomy: [
    "Áreas HCP-MMP TF, PHA1–3, PreS, H (Glasser et al., 2016). Se sitúa en la unión de regiones de memoria como el hipocampo y regiones visuales de alto nivel como el fusiforme (Aminoff et al., 2013)."
  ],
  functions: [
    "Lugar: responde selectivamente a las escenas; el factor clave es la información sobre la disposición espacial, y las habitaciones vacías evocan una respuesta igualmente fuerte (Epstein y Kanwisher, 1998). [B]",
    "Contexto: sus papeles en el procesamiento visuoespacial y la memoria episódica se unifican por su lugar en una red que procesa asociaciones contextuales (Aminoff et al., 2013). [B]"
  ],
  development: [
    "El área de los lugares crece desde los 7–11 años hasta la adultez, y este crecimiento sigue la memoria de reconocimiento de lugares (Golarai et al., 2007). [B]"
  ],
  lesion: [
    "La desorientación topográfica no es uniforme: sus variedades siguen el daño de distintas áreas, y una de ellas es la incapacidad de aprender entornos nuevos (Aguirre y D'Esposito, 1999). [C]"
  ],
  links: [
    "Hipocampo",
    "Corteza entorrinal",
    "Corteza retroesplenial",
    "Amígdala"
  ]
},

mitg: {
  name: "Giros temporales medio e inferior", short: "GTM / GTI",
  summary: "El nodo temporal de la red distribuida de conceptos y significados de palabras.",
  anatomy: [
    "La superficie temporal lateral e inferior: áreas HCP-MMP TE1a, TE1m, TE1p, TE2a, TE2p, PHT, PH y la parte de A5 en esta región (Glasser et al., 2016)."
  ],
  functions: [
    "Significado: en un metaanálisis de 120 estudios de imagen, es uno de los nodos de una red semántica lateralizada a la izquierda (Binder et al., 2009). [A]",
    "Reevaluación: el control cognitivo puede reducir la actividad de la amígdala cambiando las representaciones semánticas de la corteza temporal lateral (Buhle et al., 2014). [A]"
  ],
  clinical: [
    "Esquizofrenia: en ENIGMA, entre 4474 pacientes, la corteza es más delgada en conjunto (d ≈ −0,53), con diferencias regionales más allá de esto (van Erp et al., 2018); un hallazgo de grupo que no diagnostica a un individuo. [A]"
  ],
  links: [
    "Giro fusiforme",
    "Pars triangularis (área 45)",
    "Polo temporal"
  ]
},

pcing: {
  name: "Corteza cingulada posterior", short: "CCP",
  summary: "El nodo posterior de la red por defecto; densamente conectada y metabólicamente activa, con un papel cognitivo debatido.",
  anatomy: [
    "El giro cingulado posterior y la corteza retroesplenial: áreas HCP-MMP RSC, 23c, 23d, d23ab, v23ab, 31pv, 31pd, 31a (Glasser et al., 2016). Por los límites de la región madre, las áreas cinguladas medias posteriores (p24pr, 24dd, 24dv, 33pr) y 5m y 5mv también están en esta subestructura."
  ],
  functions: [
    "Densamente conectada y metabólicamente activa, sin consenso sobre su papel. Una propuesta es que su parte dorsal ajusta el foco atencional (Leech y Sharp, 2014). [B]"
  ],
  development: [
    "Las regiones de la red por defecto están escasamente conectadas a los 7–9 años y se integran en una red cohesiva con el desarrollo (Fair et al., 2008). [B]"
  ],
  clinical: [
    "Se describen anomalías en la enfermedad de Alzheimer, la esquizofrenia, el autismo, la depresión y el TDAH, por lo que no son específicas de un diagnóstico (Leech y Sharp, 2014). [B]",
    "TDAH: en 20 adultos, la conectividad en reposo entre el cíngulo anterior y el cíngulo posterior y el precúneo está reducida (Castellanos et al., 2008); un hallazgo de grupo que no diagnostica a un individuo. [C]"
  ],
  lesion: [
    "Se ha descrito que el daño que afecta a la región retroesplenial y al haz del cíngulo causa amnesia retrógrada y anterógrada (Valenstein et al., 1987; caso único). La región está bien protegida contra el ictus, por lo que los datos de lesiones focales son escasos (Leech y Sharp, 2014). [C]"
  ],
  links: [
    "Hipocampo y tálamo anterior (ruta retroesplenial)",
    "Cíngulo anterior",
    "Precúneo"
  ]
},

prek: {
  name: "Precúneo", short: "Precúneo",
  summary: "En la cara parietal medial; implicado en la imaginería visuoespacial, la recuperación de memoria y el procesamiento relacionado con el yo.",
  anatomy: [
    "La cara parietal medial: áreas HCP-MMP 7m, PCV, POS1, POS2, 7Am, 7Pm, 7PL, DVT, 5L (Glasser et al., 2016). En el modelo pertenece solo a esta madre; pequeñas partes de 7Am y 7PL que se extienden a la cara parietal superior quedan en la región parietal superior.",
    "La conectividad en reposo separa tres divisiones en humanos y monos: anterior sensoriomotora, central cognitiva y posterior visual (Margulies et al., 2009)."
  ],
  functions: [
    "Asociado con la imaginería visuoespacial, la recuperación de memoria episódica, el procesamiento del yo y la conciencia (Cavanna y Trimble, 2006). [B]",
    "Cambios de red: en 188 personas, su conectividad aumenta con la red por defecto en reposo y con la red frontoparietal izquierda durante las tareas (Utevsky et al., 2014). [B]"
  ],
  clinical: [
    "TDAH: en 20 adultos, la conectividad entre el precúneo y otros componentes de la red por defecto está reducida (Castellanos et al., 2008); un hallazgo de grupo que no diagnostica a un individuo. [C]"
  ],
  links: [
    "Corteza cingulada posterior",
    "Corteza parietal superior y motora (división anterior)",
    "Red por defecto y red frontoparietal izquierda"
  ]
},

pit: {
  name: "Glándula hipófisis", short: "Hipófisis",
  summary: "La glándula que convierte las órdenes hipotalámicas en señales sanguíneas: ACTH, prolactina, hormona de crecimiento y, del lóbulo posterior, oxitocina y vasopresina.",
  anatomy: [
    "Se asienta en la silla turca, unida al hipotálamo por el tallo. El lóbulo anterior se controla por vasos porta; el posterior, por axones hipotalámicos."
  ],
  functions: [
    "Eje del estrés: CRH del núcleo paraventricular, ACTH de la hipófisis, cortisol de la corteza suprarrenal; el cortisol apaga el eje por retroalimentación (Herman et al., 2016).",
    "Prolactina: la dopamina del núcleo arqueado la frena mediante los receptores D2 hipofisarios (Fitzgerald y Dinan, 2008)."
  ],
  development: [
    "La respuesta del eje del estrés cambia con el desarrollo y es moldeada por el entorno temprano de cuidados (Gunnar y Quevedo, 2007). [B]"
  ],
  clinical: [
    "La hiperprolactinemia por antipsicóticos se relaciona con efectos D2: más frecuente con amisulprida, risperidona y paliperidona; menos con aripiprazol y quetiapina (Peuskens et al., 2014). [B]"
  ],
  links: [
    "Hipotálamo (arqueado, paraventricular, supraóptico)",
    "Corteza suprarrenal (por sangre)"
  ]
}

});
