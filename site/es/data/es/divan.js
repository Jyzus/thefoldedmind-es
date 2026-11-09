/* Traducción al español: libro de la capa (Divandaki Yeşil Ceviz → The Green Walnut on the Couch), Capítulo 20. */
(function () {
  'use strict';
  const DV = window.DIVAN;
  if (!DV) return;
  DV.book.title = "La nuez verde en el diván";
  DV.book.subtitle = "Neurociencia afectiva y psicoanálisis desde antes del nacimiento hasta la adolescencia";
  DV.book.original = 'Divandaki Yeşil Ceviz';
  const put = (o, x) => { if (o && x) Object.assign(o, x); };

  const E = {
  "pag": {
    "title": "PAG (sustancia gris periacueductal)",
    "clinic": "TEPT y disociación, mutismo selectivo, agotamiento en la depresión, la hipótesis del EMDR",
    "role": "Un anillo de sustancia gris en el mesencéfalo que rodea el acueducto cerebral (acueducto de Silvio), que conecta el tercer y el cuarto ventrículo. En el modelo de Panksepp, el centro compartido de alarma y acción de todos los sistemas emocionales, dividido en columnas (dorsomedial, dorsolateral, lateral, ventrolateral), cada una de las cuales ejecuta un programa emocional-conductual distinto.",
    "links": "Columnas dorsales: RABIA (ataque) y el extremo de defensa activa del MIEDO. Columna lateral: escape activo, “lucha/huida”. Columna ventrolateral: congelación, el “hacerse el muerto” que se solapa con el sistema vagal dorsal. La llamada de separación del PÁNICO/DOLOR y algunos componentes del DESEO también pasan por el PAG.",
    "where": "La tesis de Solms sobre la conciencia y las columnas del PAG (capítulo 6, figura 6.1), la hipótesis del EMDR (capítulo 6), la división del sistema de MIEDO en subregiones, la distinción entre escape y congelación y los pasos de la defensa (capítulo 10), el circuito de la RABIA (capítulo 9), la llamada de separación del PÁNICO/DOLOR (capítulo 3), la respuesta de congelación en el mutismo selectivo (capítulo 10), la indefensión aprendida y el rafe dorsal (capítulo 6).",
    "note": "El PAG es la estructura mencionada con más frecuencia en el libro, y no es casualidad: es una prueba concreta de la tesis de Panksepp de que “las emociones son subcorticales”. Que sistemas emocionales distintos estén codificados en la misma región, en columnas diferentes, muestra que no están separados por fronteras nítidas, sino que son vecinos en una arquitectura compacta; esta es la base anatómica de por qué, en la clínica, la sobreactivación de un sistema también desencadena su vecino (por ejemplo, un MIEDO intenso que salta a la RABIA)."
  },
  "amygdala": {
    "title": "Amígdala",
    "clinic": "Ansiedad, inhibición conductual, TEPT, rasgos de insensibilidad emocional",
    "role": "Un grupo de núcleos en forma de almendra en el extremo medial del lóbulo temporal. El centro de detección de amenazas, de asignación de significado emocional y de condicionamiento del miedo; tiene grupos nucleares basolaterales, centrales y mediales; los dos más prominentes en el procesamiento de la amenaza son los núcleos basolateral y central.",
    "links": "La amígdala basolateral recibe y valora la información sensorial (visión, audición, olfato); el núcleo central dirige la salida al hipotálamo y al PAG e inicia la respuesta autonómica y conductual. Las proyecciones descendentes del PFC (especialmente de la vmPFC) frenan la amígdala.",
    "where": "La etapa de valoración del sistema de MIEDO antes del PAG y la “vía baja” (capítulo 10), la inhibición conductual de Kagan (capítulos 1 y 10), la programación fetal (el cortisol materno que afecta al desarrollo de la amígdala fetal; capítulo 1), el desequilibrio hipocampo-amígdala postraumático (capítulo 18), las respuestas atípicas de la amígdala a los estímulos sociales en el autismo (capítulo 7), el etiquetado afectivo que calma la amígdala (capítulo 7), la respuesta reducida en los rasgos de insensibilidad emocional (capítulo 9).",
    "note": "La amígdala se simplifica como el “centro del miedo”, pero en realidad es un motor de saliencia: puede marcar incluso un estímulo neutro como peligroso sobre la base de la experiencia pasada. Esto explica por qué la falta de CUIDADO temprano se convierte después en un estado generalizado de vigilancia: la amígdala aprende la etiqueta de “peligroso” en un contexto estrecho y la extiende a uno amplio."
  },
  "bnst": {
    "title": "BNST (núcleo de la cama de la estría terminal)",
    "sysLabel": "MIEDO (ansiedad sostenida), PÁNICO/DOLOR, CUIDADO, DESEO, RABIA",
    "clinic": "Ansiedad generalizada, estrés crónico",
    "role": "Un grupo de núcleos que se extiende entre la amígdala y el hipotálamo, considerado parte de la “amígdala extendida”. Mientras que el núcleo central de la amígdala da una respuesta de miedo rápida (fásica) a las amenazas cercanas y claras, el BNST ejecuta la respuesta de ansiedad sostenida (duradera) ante amenazas distantes, inciertas e impredecibles (Davis et al., 2010). La distinción no es absoluta, sino una cuestión de énfasis; ambas estructuras funcionan juntas como la “amígdala extendida”.",
    "links": "Amígdala, hipotálamo (PVN), PAG y los núcleos autonómicos del tronco del encéfalo; un regulador importante del eje HPA.",
    "where": "Una estación compartida de los circuitos de RABIA, CUIDADO, PÁNICO/DOLOR y DESEO de Panksepp (introducción, tabla; capítulos 3, 9 y 11), el puente entre el estrés crónico y la motivación sexual (capítulo 11).",
    "note": "La distinción entre MIEDO y “ansiedad” también existe anatómicamente: el miedo a una amenaza concreta y la ansiedad vaga y sostenida del tipo “algo va a pasar” dependen principalmente de circuitos distintos. La ansiedad generalizada y la “sensación de que algo malo va a pasar” (la descripción del PÁNICO en el capítulo 3) pueden explicarse mejor por un patrón dominado por el BNST."
  },
  "hypothalamus": {
    "title": "Hipotálamo",
    "sysLabel": "CUIDADO, DESEO, BÚSQUEDA (homeostática)",
    "clinic": "Respuesta al estrés, pubertad, problemas de alimentación",
    "role": "En el diencéfalo, por debajo del tálamo; el principal centro de mando del sistema nervioso autónomo y del sistema endocrino. No es una estructura única, sino muchos núcleos funcionalmente especializados.",
    "links": "Núcleo paraventricular: producción de oxitocina y vasopresina (CUIDADO, DESEO, apego) e inicio del eje HPA (liberación de CRF). Hipotálamo lateral: sincronización homeostática de la BÚSQUEDA (hambre, sed). Hipotálamo ventromedial: el circuito femenino del DESEO. Área preóptica medial: el circuito masculino del DESEO y parte del CUIDADO.",
    "where": "La distinción entre los ejes diana del CUIDADO y del DESEO (capítulo 11), la sincronización de la BÚSQUEDA con el hambre (capítulo 8), el eje HPA y la carga de cortisol del PÁNICO/DOLOR (capítulos 3 y 5), el ajuste prenatal del eje HPA en la programación fetal (capítulo 1), la supresión de GnRH en la latencia y su despertar en la pubertad (capítulo 13).",
    "note": "El hipotálamo funciona como el denominador común de casi todos los sistemas del libro, porque todo sistema emocional debe tener una contraparte corporal y hormonal, y la estación final que la produce es, en su mayor parte, el hipotálamo. La proximidad de sus distintos núcleos también contribuye a que el CUIDADO y el DESEO puedan mezclarse con tanta facilidad (por ejemplo, en la adolescencia)."
  },
  "vta_nacc": {
    "title": "VTA y núcleo accumbens",
    "clinic": "Depresión (anhedonia), TDAH, adicción, manía",
    "role": "El área tegmental ventral (en el mesencéfalo) es la fuente de los cuerpos celulares dopaminérgicos; el núcleo accumbens (en el prosencéfalo basal) es el centro de recompensa al que proyectan estas células, donde se produce la señal de “querer”.",
    "links": "La vía mesolímbica (VTA → NAcc) transporta la señal de motivación y querer; la vía mesocortical (VTA → PFC) convierte ese querer en un plan dirigido a un objetivo. Las subregiones shell y core del NAcc tienen funciones distintas: puntos calientes hedónicos en el shell, selección de acciones en el core.",
    "where": "La vía neuroanatómica de la BÚSQUEDA (capítulo 8), el mecanismo de acción del metilfenidato (capítulo 8), la extinción de la BÚSQUEDA y la anhedonia en la depresión (capítulo 8), la hipótesis del déficit crónico de dopamina tónica en el TDAH (capítulo 7), el componente de recompensa del JUEGO (capítulo 8), el sistema dopaminérgico que inicia el sueño (capítulo 6), la activación del sistema de recompensa en el amor romántico (capítulos 14 y 15).",
    "note": "Este circuito aparece una y otra vez en el libro en contextos diferentes, porque la BÚSQUEDA es, en palabras de Panksepp, el motor sobre el que funcionan la mayoría de los otros seis sistemas: la RABIA, el MIEDO, el DESEO y el CUIDADO ponen en marcha en algún grado la BÚSQUEDA, o se extinguen junto con ella."
  },
  "ofc_vmpfc": {
    "title": "OFC y vmPFC",
    "sysLabel": "Regulación de todos ellos",
    "clinic": "TOC, organización limítrofe y narcisista, toma de decisiones",
    "role": "La corteza orbitofrontal (justo por encima de los ojos) y la corteza prefrontal ventromedial; regiones prefrontales que codifican el valor emocional, integran información de distintos sistemas y participan en el razonamiento social y moral.",
    "links": "Combinan la señal de amenaza de la amígdala con la información contextual del hipocampo y la información del estado corporal de la ínsula para producir una respuesta integrada a la pregunta “¿cuánto peligro corro realmente en este momento?”. Envían proyecciones inhibidoras a la amígdala y al PAG.",
    "where": "Los marcadores somáticos y la Iowa Gambling Task (capítulo 2), la capacidad de integración (la tercera vía en el ejemplo de la envidia; capítulo 3), la desintonía en el TOC (capítulos 2 y 12), la integración insuficiente en las estructuras narcisistas y antisociales (capítulos 3 y 9), los experimentos de identidad sin matices en los periodos fálico y de latencia (capítulos 12 y 13), la percepción de controlabilidad (capítulo 6), el desplazamiento de la vmPFC al PAG a medida que se acerca la amenaza (capítulo 10).",
    "note": "La OFC es la contraparte anatómica del tema de la “maduración” del libro: mientras que los sistemas primitivos (PAG, amígdala, hipotálamo) funcionan ya listos desde el nacimiento, la OFC se moldea con años de experiencia. Todo lo que el libro llama “integración en lugar de escisión” o “una respuesta regulada en lugar de una respuesta en bruto” corresponde, en el plano neural, en gran medida al grado de madurez de esta región."
  },
  "hippocampus": {
    "title": "Hipocampo",
    "sysLabel": "El contexto del MIEDO",
    "clinic": "TEPT, ansiedad generalizada, amnesia infantil",
    "role": "En el lóbulo temporal, junto a la amígdala; la estructura de la memoria contextual y episódica, que también proporciona retroalimentación negativa al eje HPA (frena el cortisol).",
    "links": "Conectado estrecha y recíprocamente con la amígdala: mientras la amígdala dice “esto es peligroso”, el hipocampo lo equilibra con “pero no en este contexto”. Es especialmente vulnerable al cortisol crónico (alta densidad de receptores de glucocorticoides; el estrés crónico puede provocar atrofia dendrítica, neurogénesis reducida y pérdida de volumen).",
    "where": "La amnesia infantil y la memoria implícita (capítulo 2), el estrés crónico que lleva a una pérdida de contextualización (la sensación de “todo es peligroso” en el TEPT; capítulos 10 y 18), la dependencia del contexto de la extinción y la renovación (capítulo 10), el bucle de retroalimentación con el eje HPA (capítulo 5), la actividad hipocampal reducida en la supresión consciente (capítulo 17).",
    "note": "El equilibrio hipocampo-amígdala es la base anatómica de la distinción del libro entre una “respuesta generalizada” y una “respuesta específica de la situación”. Cuando este equilibrio se rompe (bajo una carga crónica de cortisol), el sistema deja de discriminar y empieza a procesar todo estímulo como una amenaza potencial: uno de los mecanismos compartidos de los trastornos de ansiedad."
  },
  "insula": {
    "title": "Ínsula",
    "sysLabel": "Sentir todos ellos",
    "clinic": "Alexitimia, somatización, interocepción en el autismo",
    "role": "El quinto lóbulo “oculto” entre los lóbulos frontal, parietal y temporal; la estación principal donde el estado del cuerpo (latido cardíaco, estómago, respiración) se lleva a la conciencia (interocepción).",
    "links": "Uno de los destinos de la vía aferente vagal (nervio craneal X → NTS → núcleo parabraquial → tálamo). La ínsula anterior se vincula especialmente con la experiencia emocional subjetiva: “sentir lo que siento”.",
    "where": "La teoría de los marcadores somáticos de Damasio (capítulo 2), la alexitimia y la relación de la respuesta empática de la ínsula con la alexitimia en el autismo (capítulo 2), las diferencias en la interocepción en el autismo (capítulos 2 y 7), el procesamiento de las formas de vitalidad en la ínsula dorsal-central (capítulo 7), el informe del estado corporal a la conciencia en la teoría polivagal (capítulo 5), el esquema corporal (capítulo 15).",
    "note": "La ínsula es la contraparte anatómica más concreta del tema del “puente entre el cuerpo y la mente” del libro. La tesis de que en la represión “el afecto permanece en el cuerpo pero no se representa” tiene que ver precisamente con que la ínsula no cumple esta función lo suficientemente bien: la sensación está ahí, pero la ínsula no puede convertirla en una emoción consciente y nombrable."
  },
  "acc": {
    "title": "ACC (corteza cingulada anterior)",
    "clinic": "Dolor social, duelo, monitorización de errores en el TOC",
    "role": "Una región en forma de franja en la superficie interna del lóbulo frontal, justo por encima del cuerpo calloso; participa en la monitorización del conflicto, la detección de errores, el procesamiento del dolor de separación y de exclusión social, y la regulación de la atención.",
    "links": "El ACC dorsal se vincula con el conflicto cognitivo y la monitorización de errores; el ACC subgenual y ventral, con la regulación emocional y el dolor de separación. Funciona como un “agente de tráfico” entre el PFC y las estructuras límbicas.",
    "where": "El dolor de separación social del PÁNICO/DOLOR que comparte circuito con el dolor físico y el experimento Cyberball (capítulo 3), la actividad del ACC dorsal en la envidia (capítulo 3), la hiperactividad del bucle de detección de errores en el TOC (capítulo 2), la regulación de la atención y el TDAH (capítulo 7).",
    "note": "Que el ACC se utilice tanto para el “dolor físico” como para el “dolor de separación social” respalda anatómicamente la afirmación central del apartado del libro sobre el PÁNICO/DOLOR: el dolor de la pérdida no es metafórico, sino que, en un sentido real, forma parte del sistema del dolor. Hasta dónde llega el solapamiento es objeto de debate: estudios posteriores mostraron que los dos tipos de dolor utilizan patrones vecinos pero distintos en el ACC."
  },
  "tpj_sts": {
    "title": "TPJ y STS (unión temporoparietal y surco temporal superior)",
    "sysLabel": "La cara social del CUIDADO y el JUEGO",
    "clinic": "Autismo, dificultades de mentalización",
    "role": "La TPJ es una región crítica para representar la perspectiva y las creencias de otra persona (teoría de la mente) y para la propiedad espacial del cuerpo; el STS convierte el movimiento biológico, la dirección de la mirada, la expresión facial y el tono de voz en significado social.",
    "links": "Junto con el PFC medial, el precúneo y el polo temporal, forma la “red de mentalización”; el STS transporta la información social de la corteza visual y auditiva a la amígdala y a las regiones prefrontales.",
    "where": "La neuroanatomía de la mentalización (capítulo 5), la moral heterónoma y la evaluación de las intenciones (capítulo 13), el procesamiento de señales sociales en el autismo (capítulo 7), los afectos de vitalidad (capítulo 7), el esquema corporal y la identidad de género (capítulo 15).",
    "note": "Estas regiones son la contraparte cortical de la capacidad de “ver la mente de otra persona”; pero, en consonancia con la tesis principal del libro, esta capacidad también se construye primero en una relación, a través de alguien que nos mentaliza."
  },
  "vagal": {
    "title": "Núcleos vagales (núcleo motor dorsal y núcleo ambiguo)",
    "sysLabel": "CUIDADO (ventral), MIEDO (congelación)",
    "clinic": "Disociación, apagamiento, función sexual",
    "role": "Dos salidas parasimpáticas distintas en el tronco del encéfalo, en el bulbo raquídeo; la base anatómica de la teoría polivagal de Porges.",
    "links": "Núcleo motor dorsal: amielínico y lento, regula los órganos por debajo del diafragma (estómago, intestinos); según la teoría, bajo una amenaza extrema produce congelación y colapso mediante una descarga masiva. Núcleo ambiguo: mielínico y rápido, regula los órganos por encima del diafragma (corazón, laringe, faringe) y el sistema de compromiso social vinculado a los músculos de la cara y la garganta.",
    "where": "Todo el marco de la teoría polivagal y sus críticas (capítulo 5), la neurocepción, la congelación en el mutismo selectivo (capítulo 10), las señales de seguridad del encuadre terapéutico, los músculos del oído medio que seleccionan la voz del terapeuta (capítulo 5), el reflejo inflamatorio (capítulo 5).",
    "note": "La existencia de dos salidas vagales distintas muestra que la palabra “calma” no describe un único estado: una es la calma de la seguridad y la conexión reales (ventral), la otra la calma del colapso y la rendición (dorsal). En la clínica, que un niño “se calme” puede significar cosas muy diferentes según el sistema que se active; esta distinción es una advertencia que reaparece a lo largo del libro."
  },
  "cerebellum": {
    "title": "Cerebelo",
    "clinic": "TOC, tics, defensas convertidas en hábitos",
    "role": "El cerebelo; aunque clásicamente se asocia con la coordinación motora, hoy se sabe que también desempeña un papel en la regulación emocional, el aprendizaje temporal y las funciones sociocognitivas.",
    "links": "Conectado con el tronco del encéfalo y los ganglios basales; sustenta la dimensión de coordinación motora y aprendizaje de reglas de la conducta de juego. Desempeña un papel en el almacenamiento de patrones de conducta automatizados y repetitivos (aprendizaje procedimental).",
    "where": "La memoria implícita (capítulo 2), el componente motor y de aprendizaje de reglas del sistema de JUEGO (capítulo 8), los mecanismos de defensa que se vuelven automáticos con el tiempo (capítulo 17).",
    "note": "El papel del cerebelo en el libro es limitado, pero respalda un punto importante: la experiencia repetida (juego, terapia, hábito) no solo se “aprende”, sino que, en un sentido real, se codifica en un circuito motor y procedimental; otra razón anatómica por la que el tratamiento lleva tiempo."
  },
  "bg": {
    "title": "Ganglios basales",
    "clinic": "TOC, tics, defensas convertidas en hábitos",
    "role": "Un grupo de núcleos formado por el estriado (caudado, putamen, núcleo accumbens), el globo pálido y la sustancia negra; central en el aprendizaje de hábitos, la conducta automatizada y la selección de acciones a través de la señal dopaminérgica.",
    "links": "El núcleo accumbens forma parte, de hecho, del estriado ventral: la dopamina del VTA moldea aquí la selección de acciones. Los bucles corticoestriatotalamocorticales hacen que la conducta sea cada vez más automática.",
    "where": "Las compulsiones que se vuelven automáticas y el cambio del metabolismo del caudado con el tratamiento (capítulo 2), los tics y las urgencias premonitorias (capítulo 9), la codificación de atajos y respuestas reflejas a nivel de los ganglios basales y los mecanismos de defensa convertidos en hábitos (capítulo 17).",
    "note": "Los ganglios basales son una de las respuestas a la pregunta del libro “¿por qué un patrón se vuelve tan obstinado?”: cuando una conducta (una compulsión, una defensa, un patrón relacional) se repite lo suficiente, sale del circuito consciente y flexible del PFC y pasa al circuito automático y rápido de los ganglios basales; un mecanismo que dificulta el tratamiento, pero que también muestra que un hábito nuevo y saludable puede construirse de la misma manera."
  },
  "pfc_dev": {
    "title": "La línea temporal de maduración del desarrollo del PFC",
    "role": "La corteza prefrontal es la región del cerebro que madura más tarde; sus subregiones dorsolateral (cognición “fría”, planificación) y ventromedial y orbitofrontal (cognición “caliente”, regulación emocional) se desarrollan a ritmos distintos, y la maduración continúa hasta la mitad de la tercera década de la vida.",
    "links": "Sus conexiones inhibidoras con la amígdala y otras estructuras subcorticales se fortalecen con los años mediante la mielinización y la poda sináptica; por eso, en un niño pequeño, la “regulación” tiene que ser aportada en gran medida desde fuera (por el PFC de los padres).",
    "where": "La función de PFC externa de la madre suficientemente buena (capítulo 3), el primer “entrenamiento” del PFC en la etapa anal (capítulo 12), la maduración cortical retrasada en el TDAH (capítulo 7), la internalización del superyó en el periodo de latencia (capítulo 13), la base del neurodesarrollo de la asunción de riesgos en la adolescencia (capítulo 11), el papel del PFC en la crisis de identidad de Erikson (capítulo 15).",
    "note": "Que el PFC madure tan tarde anatómicamente justifica el eje de psiquiatría infantil y adolescente del libro: casi toda la línea del desarrollo descrita en este libro es, en realidad, la historia de cuándo y hasta dónde puede el PFC regular los sistemas primitivos."
  }
};
  Object.keys(E).forEach((k) => put(DV.entries[k], E[k]));

  const P = {
  "mezo": {
    "carries": "La columna vertebral principal del sistema SEEKING. Las células dopaminérgicas del VTA se proyectan por dos ramas: la rama mesolímbica desciende al núcleo accumbens y produce la señal del «querer», mientras que la rama mesocortical asciende a la PFC y convierte ese querer en un plan concreto.",
    "links": "Si las dos ramas no funcionan juntas, hay querer sin plan (búsqueda impulsiva) o plan sin querer (cognición sin motivación). El glutamato excita el VTA y el GABA lo frena.",
    "where": "La neuroanatomía del SEEKING, el mecanismo de acción del metilfenidato (bloqueo de la recaptación de dopamina y noradrenalina mediante el bloqueo de DAT/NET), la hipoactivación de esta vía en la depresión y las hipótesis del TDAH (capítulos 7–8).",
    "note": "Esta vía es el correlato neural del concepto de «motivación» del libro — y la diana indirecta o directa de la mayoría de los fármacos utilizados en psiquiatría (estimulantes, antipsicóticos, incluso algunos antidepresivos). Que las dos ramas de la vía puedan fallar por separado muestra que una misma queja de «falta de atención» puede proceder de mecanismos subyacentes muy distintos."
  },
  "vagal_aff": {
    "carries": "La vía principal por la que el cuerpo envía al cerebro un «informe de situación». Alrededor del 80 % de las fibras vagales son aferentes (hacia el cerebro); por tanto, el vago, contrariamente a la creencia común, no es en su mayor parte un nervio que calma el cerebro, sino uno que le dice al cerebro cómo está el cuerpo.",
    "links": "El núcleo del tracto solitario (NTS) es la primera estación; desde allí, a través del núcleo parabraquial, se distribuye a la amígdala, al hipotálamo y (a través del tálamo) a la ínsula; la ínsula anterior lleva esta información a la conciencia.",
    "where": "El soporte anatómico de la teoría de los marcadores somáticos de Damasio (capítulo 2), el concepto de neurocepción de Porges (capítulo 5) y la transformación de las sensaciones gástricas y torácicas en conciencia en la ínsula (capítulo 5).",
    "note": "Esta vía es la columna vertebral de la tesis del libro de que «el cuerpo precede a la mente». Cuando un paciente en la consulta siente que «algo va mal», suele tratarse de una señal que llega por esta línea antes que el pensamiento consciente: el cuerpo ya ha informado antes de que se encuentren las palabras."
  },
  "hpa": {
    "carries": "La columna vertebral endocrina de la respuesta al estrés. Cuando la amígdala detecta una amenaza, estimula, en gran medida a través del BNST, el núcleo paraventricular (PVN) del hipotálamo; el PVN libera el factor liberador de corticotropina (CRF), que induce a la hipófisis a liberar ACTH, que a su vez induce a la corteza suprarrenal a liberar cortisol.",
    "links": "El hipocampo y la PFC frenan este bucle mediante retroalimentación negativa; la activación crónica puede debilitar este mecanismo de frenado.",
    "where": "La programación fetal y la 11β-HSD2 placentaria (capítulo 1), el estrés crónico que altera la función del hipocampo (capítulo 5), la carga de cortisol en el apego desorganizado (capítulo 3) y el reflejo inflamatorio y la carga alostática (capítulo 5).",
    "note": "El eje HPA es la evidencia más concreta y medible de la tesis del libro de que «la experiencia temprana se escribe en la biología»: la sensibilidad y la reactividad con que se ajusta este eje dependen en gran medida de la experiencia de los primeros meses de vida (incluso antes del nacimiento) y configuran la reactividad al estrés años después."
  },
  "pag_col": {
    "carries": "Varias «autopistas» que discurren en paralelo dentro de una misma estructura. Distintas columnas de la misma PAG ejecutan programas conductuales completamente distintos y mutuamente excluyentes (ataque, huida, congelación) según el sistema emocional que esté activado.",
    "links": "Las columnas dorsales se relacionan con RAGE y con FEAR activo, la columna lateral con la huida activa y la columna ventrolateral con la congelación y la superposición vagal dorsal. Qué columna se activa lo decide en gran medida el tipo de amenaza, su proximidad y la posibilidad percibida de escapar.",
    "where": "Los subtipos de FEAR (huida/lucha/congelación) y los pasos de la defensa (capítulo 10), el correlato de la respuesta de congelación en el mutismo selectivo (capítulo 10), el umbral de RAGE y la cadena que conduce a Thanatos (capítulo 9), las conexiones de la PAG en el TEPT y el subtipo disociativo (capítulo 6).",
    "note": "El conmutador entre estas columnas es el fundamento anatómico del fenómeno descrito en el libro de que «una emoción se transforma repentinamente en otra completamente distinta» (por ejemplo, FEAR que salta a RAGE, o una huida activa que se convierte de pronto en congelación): el cambio entre sistemas no ocurre entre regiones distantes, sino entre columnas vecinas de la misma estructura."
  },
  "oxt": {
    "carries": "Producidos en los núcleos paraventricular y supraóptico, ambos péptidos se liberan tanto como neurohormonas clásicas en el torrente sanguíneo (desde la hipófisis posterior) como en forma de neuromoduladores directamente en el cerebro (mediante proyecciones a la amígdala, el NAcc, la PFC y el tronco del encéfalo): un sistema de señalización «dual».",
    "links": "El principal transportador químico del sistema CARE, el componente de vínculo del LUST (en estudios animales, la oxitocina es más prominente en las hembras y la vasopresina en los machos), un facilitador del emparejamiento social en el PLAY y una señal de confianza y familiaridad.",
    "where": "La neuroanatomía de CARE (capítulo 3), la distinción y la superposición entre CARE y LUST, los estudios en topillos de la pradera (capítulo 11), los efectos de la oxitocina que varían según la persona y el contexto (capítulo 11) y los estudios de oxitocina intranasal en el autismo (capítulo 7).",
    "note": "Que esta vía funcione de dos maneras, a través del torrente sanguíneo y directamente dentro del cerebro, coincide exactamente con el énfasis del libro en que «el apego es a la vez un fenómeno corporal y mental»: la misma molécula participa tanto en la contracción uterina como en los sentimientos de confianza y cercanía. Pero su efecto depende del modelo que la interpreta: sobre una base insegura puede incluso reducir la confianza."
  },
  "opioid": {
    "carries": "La mitad no dopaminérgica del relato clásico de la «recompensa». Los opioides endógenos (endorfinas, encefalinas) y los endocannabinoides codifican cuánto se «disfruta» una experiencia (tono hedónico) más que cuánto se «desea»: la dopamina lleva el deseo, y los opioides y cannabinoides llevan la satisfacción.",
    "links": "Concentrados en los puntos calientes hedónicos del núcleo accumbens; también conectados con la PAG, el circuito PANIC/GRIEF (que calma el dolor de la separación) y el circuito PLAY.",
    "where": "La distinción entre «querer» (dopamina) y «disfrutar» (opioides) en el SEEKING (capítulo 8), los opioides que reducen las llamadas de separación (capítulo 3), el componente de recompensa del PLAY (capítulo 8), la neuroquímica del LUST tras el orgasmo (capítulo 11) y la sensación de calidez y contento de CARE.",
    "note": "Que el querer y el disfrutar sean sistemas separados es la clave de los temas del libro sobre la adicción y la insaciabilidad: una persona puede desear intensamente algo (una sustancia, una relación, una conducta) (dopamina alta) y, sin embargo, no obtener ya ningún placer de ello (opioides bajos); esta es la explicación neural del cuadro clínico «lo deseo tanto pero nunca quedo satisfecho»."
  },
  "schore": {
    "carries": "La afirmación central de la teoría de Allan Schore: los hemisferios derechos de la madre y del bebé «hablan» directamente entre sí a través de un canal no verbal e implícito (expresión facial, tono de voz, tacto, ritmo temporal). Esta vía funciona con relativa independencia del procesamiento verbal y analítico del hemisferio izquierdo.",
    "links": "Forma un bucle sincronizado entre los circuitos orbitofrontales-límbicos de la madre y del bebé; la maduración de la OFC derecha del bebé depende en gran medida de este bucle recíproco.",
    "where": "La naturaleza de arriba abajo de la TCC y la de abajo arriba de la terapia psicodinámica y relacional (capítulo 3), la «puerta del lenguaje cerrada» en el trauma temprano no representado (capítulos 2–3), los «now moments» y el saber relacional implícito (capítulo 5) y la necesidad de que el terapeuta sea «un buen rastreador» (capítulo 12).",
    "note": "Esta vía es el punto central de la comparación que hace el libro entre la TCC y la terapia psicodinámica: dado que algunos patrones nunca se representan en el nivel verbal-consciente del hemisferio izquierdo, no pueden alcanzarse solo con técnicas verbales; el cambio tiene que pasar por esta vía, por la experiencia relacional. La afirmación de que la vía está lateralizada «de derecha a derecha» es un modelo; la importancia de la comunicación no verbal está bien respaldada con independencia de él."
  },
  "vagal_hier": {
    "carries": "La organización filogenéticamente estratificada del sistema nervioso autónomo: en lugar de un sistema simpático y un único sistema parasimpático, tres circuitos separados: vagal ventral (compromiso social), simpático (lucha/huida) y vagal dorsal (congelación/colapso). A medida que aumenta la amenaza, el sistema activa esta jerarquía en orden, de lo evolutivamente más reciente a lo más antiguo.",
    "links": "El núcleo ambiguo (ventral) y el núcleo motor dorsal (dorsal) son eferencias distintas; la neurocepción decide de forma inconsciente qué escalón de esta jerarquía se activará.",
    "where": "Las señales de seguridad del entorno terapéutico (capítulo 5), la congelación en el mutismo selectivo (capítulo 10), la disociación postraumática y la ventana de tolerancia (capítulo 18), la supervisión y la necesidad de que los terapeutas regulen su propio sistema nervioso (capítulo 5) y la base autónoma de la función sexual (capítulo 14).",
    "note": "Esta jerarquía es la fuente directa de la advertencia del libro de que «la calma no es una sola cosa»: un mismo cuadro conductual (quietud, silencio) puede ocultar dos estados fisiológicos completamente opuestos (el estado ventral seguro y comprometido o el estado dorsal colapsado y disociativo); pasar por alto esta distinción es un error clínico grave. Esta jerarquía es el modelo de Porges; su base filogenética y el papel del vago dorsal en la congelación están discutidos (véase el capítulo 5); la advertencia clínica de que «la calma no es una sola cosa» se sostiene con independencia de él."
  },
  "amy_hip": {
    "carries": "El circuito del condicionamiento del miedo que codifica por separado el «qué» (amígdala) y el «dónde/cuándo» (hipocampo) y los combina. Mientras la amígdala aprende por sí sola que «esto es peligroso», el hipocampo fija ese aprendizaje a un contexto determinado: «peligroso solo en esa habitación, solo con esa persona».",
    "links": "Una conexión recíproca y mutuamente reguladora; cuando el cortisol crónico altera la función del hipocampo, se pierde la contextualización y prevalece el aprendizaje generalizado de la amígdala de que «todo es peligroso».",
    "where": "La generalización contextual en el TEPT (capítulo 18), el fácil aprendizaje de fobias evolutivamente «preparadas» (serpientes, arañas) (capítulo 10), la dependencia del contexto de la extinción y la repetición de la exposición en entornos diferentes (capítulo 10) y el estrés crónico que allana el camino a los trastornos de ansiedad.",
    "note": "El fallo de este circuito es el denominador común de los análisis del libro sobre el trauma y la ansiedad crónica: buena parte del tratamiento es en realidad un intento de reconstruir esta capacidad de contextualización, es decir, de frenar de nuevo la alarma generalizada de la amígdala con el saber del hipocampo de que «pero aquí no»."
  },
  "frontolimbic": {
    "carries": "El proceso por el cual las proyecciones inhibitorias que descienden de la PFC (especialmente la vmPFC y la OFC) hacia la amígdala y otras estructuras subcorticales se refuerzan a lo largo de los años posteriores al nacimiento mediante la mielinización y la reorganización sináptica. Al nacer, esta vía es inmadura; su función reguladora solo se hace evidente hacia la adolescencia: la regulación se aporta desde fuera (por el cuidador).",
    "links": "La velocidad y el grado de refuerzo de esta vía están directamente ligados a la calidad del CARE temprano — la experiencia de una regulación segura y predecible sostiene la maduración de este circuito.",
    "where": "La función de PFC externa de la madre suficientemente buena (capítulo 3), el refuerzo de la conexión PFC-amígdala en el ciclo de ruptura y reparación (capítulo 7), la interiorización del superyó en el periodo de latencia (capítulo 13), los mecanismos de defensa que se vuelven «maduros» (capítulo 17) y la asunción de riesgos en la adolescencia (capítulo 11).",
    "note": "Esta vía es el correlato anatómico directo de una de las tesis más fundamentales del libro: «la regulación primero viene de fuera y después se interioriza». Casi todas las transiciones del desarrollo descritas en el libro (un cambio de etapa, la maduración de un mecanismo de defensa, el cambio terapéutico) significan que esta vía se vuelve un poco más fuerte."
  }
};
  (DV.pathways || []).forEach((p) => put(p, P[p.id]));

  DV.closing = "Los sistemas de Panksepp, las etapas de Freud, las crisis de Erikson y las subfases de Mahler, tratados uno por uno a lo largo del libro, están de hecho producidos por distintas combinaciones de un conjunto compartido y limitado de componentes anatómicos (la PAG, la amígdala, el hipotálamo y unas pocas áreas corticales) y de un puñado de vías que los conectan.";
})();
