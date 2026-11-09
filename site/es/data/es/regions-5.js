/* Textos de regiones en español 5/8 (regions-5.js: SGP, ATV, BNST, núcleos vagales). */
Object.assign(window.NEURO_REGIONS_EN = window.NEURO_REGIONS_EN || {}, {

pag: {
  name: "Sustancia gris periacueductal", short: "SGP",
  summary: "Sustancia gris alrededor del acueducto en el mesencéfalo: la estación de salida compartida para la defensa (lucha, huida, congelación), la supresión del dolor y la vocalización emocional.",
  anatomy: [
    "Sustancia gris que rodea el acueducto cerebral (de Silvio) en el mesencéfalo; se extiende rostralmente hasta el tercer ventrículo y caudalmente hasta el cuarto ventrículo.",
    "Cuatro columnas longitudinales: dorsomedial, dorsolateral, lateral y ventrolateral.",
    "Aferencias: núcleo central de la amígdala, hipotálamo, mPFC/CCA, ínsula. Salidas: médula ventromedial rostral (RVM), núcleos autonómicos del tronco del encéfalo, tálamo.",
    "Irrigación: ramas de las arterias cerebral posterior y cerebelosa superior.",
    "Las columnas pueden visualizarse en humanos: en fMRI a 7 T (0,75 mm), las imágenes emocionales activaron regiones laterales y dorsomediales en la SGP rostral y regiones ventrolaterales en la SGP caudal; las regiones laterales y ventrolaterales se agruparon con distintas emociones (ira, tristeza) (Satpute et al., 2013). El modelo de columnas de los animales parece mantenerse en humanos. [B]"
  ],
  functions: [
    "Defensa activa (columna dorsolateral/lateral): lucha-huida, taquicardia, aumento de la presión arterial.",
    "Defensa pasiva (columna ventrolateral): congelación, inmovilidad, bradicardia, hipotensión.",
    "Control endógeno del dolor: inhibición descendente mediada por opioides (SGP → RVM → asta dorsal de la médula espinal); analgesia por estrés. La analgesia placebo usa la misma ruta: la naloxona redujo el efecto placebo y abolió el acoplamiento CCA rostral–SGP (Eippert et al., 2009). El correlato biológico de que la expectativa y la seguridad reduzcan el dolor. [B]",
    "Vocalización emocional: llanto, llamadas de separación.",
    "Ajuste de la respiración y las respuestas autonómicas al estado emocional."
  ],
  tests: [
    "Paradigmas de proximidad de amenaza (fMRI): a medida que la amenaza se acerca, la actividad se desplaza de la vmPFC a la SGP (Mobbs et al., 2007)",
    "Modulación condicionada del dolor",
    "Medición de la congelación con frecuencia cardíaca, conductancia de la piel y sobresalto"
  ],
  development: [
    "Una estructura filogenéticamente antigua, funcional al nacer; el llanto de separación del lactante y los reflejos defensivos básicos se organizan en este nivel.",
    "La regulación de arriba abajo desde la vmPFC/CCA madura a lo largo de años; en los niños pequeños la regulación depende en gran medida del cuidador."
  ],
  clinical: [
    "Trastorno de pánico: la estimulación de la SGP dorsal produce síntomas similares al pánico (sensación de ahogo, impulso de huir).",
    "TEPT y disociación: la SGP dorsolateral impulsa la defensa activa (lucha-huida); la SGP ventrolateral, la defensa pasiva (congelación, embotamiento autonómico). En el TEPT y su subtipo disociativo, la conectividad en reposo de la SGP con regiones de reactividad emocional y defensa está ampliamente aumentada; el subtipo disociativo se desplaza hacia la defensa pasiva (Harricharan et al., 2016). [B]",
    "Dolor crónico y funcional: inhibición descendente del dolor debilitada.",
    "Mutismo selectivo: una etapa defensiva ligada a la respuesta de congelación (un modelo teórico)."
  ],
  treatment: [
    "Los analgésicos opioides actúan en parte por los receptores μ-opioides de la SGP y la RVM; el mismo circuito vehicula los efectos placebo y de expectativa (Eippert et al., 2009). [B]",
    "El correlato psicoterapéutico: las señales de seguridad y la expectativa pueden cambiar el dolor y la respuesta defensiva (CCA rostral → SGP). Una base biológica para los abordajes cognitivo-conductuales en niños con dolor crónico.",
    "Estimulación cerebral profunda (sustancia gris periventricular/periacueductal): en una serie de adultos, cerca de dos tercios de los pacientes con dolor neuropático refractario se beneficiaron (Boccard et al.). Solo adultos, experimental. [C]"
  ],
  lesion: [
    "En estudios animales, pérdida de la vocalización emocional y de las conductas defensivas.",
    "Las lesiones del mesencéfalo dorsal pueden acompañarse de síndrome de Parinaud e hidrocefalia por estenosis del acueducto."
  ],
  links: [
    "Núcleo central de la amígdala → SGP (salida defensiva)",
    "Hipotálamo ↔ SGP",
    "vmPFC/CCA → SGP (regulación de arriba abajo)",
    "SGP → RVM → médula espinal (control descendente del dolor)",
    "Opioides endógenos, GABA, glutamato, endocannabinoides"
  ]
},

vta: {
  name: "Área tegmental ventral", short: "ATV",
  summary: "Fuente de la dopamina mesolímbica y mesocortical: produce la señal de motivación, expectativa de recompensa y aprendizaje.",
  anatomy: [
    "En el suelo del mesencéfalo, dorsal a la fosa interpeduncular y medial a la sustancia negra; a ambos lados de la línea media.",
    "La mayoría de las células (~60 %) son dopaminérgicas; el resto son GABAérgicas, con unas pocas neuronas glutamatérgicas.",
    "Proyecciones: núcleo accumbens, amígdala, hipocampo (mesolímbica); CPF y CCA (mesocortical).",
    "Aferencias: hipotálamo lateral (haz prosencefálico medial), glutamato de la CPF, tegmento laterodorsal; inhibición vía la habénula lateral."
  ],
  functions: [
    "Error de predicción de recompensa: una ráfaga fásica de dopamina cuando el resultado es mejor de lo esperado, una caída cuando es peor (Schultz).",
    "Saliencia de incentivo (“querer”): asignar valor motivacional a los estímulos.",
    "Conducta de aproximación, exploración y curiosidad (sistema BÚSQUEDA de Panksepp).",
    "Rama mesocortical: apoyo dopaminérgico a la memoria de trabajo y la planificación dirigida a metas."
  ],
  tests: [
    "Tarea de Retraso del Incentivo Monetario (MID)",
    "Aprendizaje probabilístico de recompensa y modelos de error de predicción de recompensa",
    "Liberación de dopamina con PET (investigación)"
  ],
  development: [
    "La densidad de fibras dopaminérgicas que llegan a la CPF aumenta hasta la adolescencia.",
    "El aumento de la sensibilidad a la recompensa en la adolescencia se relaciona con que el sistema mesolímbico madura antes que el control prefrontal."
  ],
  clinical: [
    "TDAH: en 53 adultos no tratados, los niveles del transportador de dopamina y de receptores D2/3 eran más bajos a lo largo de la vía de recompensa (accumbens, mesencéfalo, caudado izquierdo); los niveles en accumbens y mesencéfalo se relacionaban con la inatención (Volkow et al., 2009). Los estimulantes elevan la dopamina sináptica bloqueando el transportador de dopamina (el metilfenidato también el de noradrenalina). [B]",
    "Depresión y anhedonia: hipoactividad del sistema mesolímbico.",
    "Consumo de sustancias: las sustancias adictivas elevan la dopamina mesolímbica directa o indirectamente.",
    "Psicosis: el exceso de dopamina es principalmente presináptico. Un metaanálisis de 44 estudios PET/SPECT (618 pacientes, 606 controles) halló una síntesis y liberación de dopamina estriatal claramente aumentadas (d ≈ 0,79), muy poco cambio en los receptores D2/3 y ningún cambio en el transportador de dopamina (Howes et al., 2012). Correlato clínico: saliencia aberrante. [A]"
  ],
  treatment: [
    "Estimulantes (metilfenidato, anfetamina): bloquean la recaptación de dopamina y noradrenalina; la anfetamina también aumenta la liberación. Primera línea en TDAH. [A]",
    "Antipsicóticos: bloqueo del receptor D2; la eficacia y los efectos secundarios (SEP, prolactina) provienen del mismo receptor. [A]",
    "Xanomelina-trospio: el primer antipsicótico que no bloquea D2 (agonista muscarínico M1/M4; el trospio previene los efectos secundarios periféricos). Regula indirectamente la liberación de dopamina. Aprobado por la FDA para la esquizofrenia en adultos (septiembre de 2024); aún no aprobado en niños ni adolescentes. [A]",
    "Adicción: todas las sustancias adictivas elevan la dopamina mesolímbica; los abordajes que recalibran la recompensa (manejo de contingencias, entrevista motivacional) trabajan este sistema. [B]"
  ],
  lesion: [
    "Apatía y pérdida de motivación; en animales, una marcada reducción de la conducta exploratoria."
  ],
  links: [
    "ATV → núcleo accumbens (mesolímbica)",
    "ATV → CPF y CCA (mesocortical)",
    "Hipotálamo lateral → ATV (haz prosencefálico medial)",
    "Glutamato (+), GABA (−), orexina, opioides"
  ]
},

bnst: {
  name: "Núcleo del lecho de la estría terminal", short: "BNST",
  summary: "Parte de la amígdala extendida: impulsa la ansiedad sostenida ante amenazas inciertas y lejanas, y ajusta el eje del estrés.",
  anatomy: [
    "Un grupo de núcleos alrededor de la comisura anterior, ventral al ventrículo lateral y lateral al septum.",
    "Conectado con la amígdala por la estría terminal: este fino haz de fibras sigue la forma de C del núcleo caudado sobre el tálamo hasta alcanzar la amígdala (un arco fino en el modelo).",
    "Junto con la amígdala central y la corteza del accumbens se denomina “amígdala extendida”.",
    "Tiene subnúcleos sexualmente dimórficos."
  ],
  functions: [
    "Ansiedad sostenida en respuesta a amenazas inciertas, lejanas o impredecibles; el correlato de la respuesta de miedo fásica de la amígdala (Davis et al., 2010). En humanos, el BNST rastrea de forma continua los cambios en el nivel de amenaza; en individuos muy ansiosos este rastreo toma la forma de hipervigilancia (Somerville et al., 2010; 50 adultos). [B]",
    "Regulación del eje HHA (proyección al núcleo paraventricular).",
    "Mantenimiento de las respuestas autonómicas.",
    "Conductas social, sexual y materna; un puente entre los sistemas de estrés y de recompensa."
  ],
  tests: [
    "Tarea de amenaza NPU (neutra, predecible, impredecible — Grillon)",
    "fMRI durante la anticipación de amenaza",
    "Reflejo de sobresalto en el miedo sostenido"
  ],
  development: [
    "El temperamento ansioso es en parte heredable: en 592 macacos rhesus jóvenes, el riesgo heredable no lo vehiculaba la estructura cerebral sino el metabolismo de un circuito prefrontal–límbico–mesencefálico (Fox et al., 2015). Un estudio posterior vinculó el metabolismo de la amígdala extendida central (núcleo central y BNST) al temperamento. Un modelo para la biología de los niños inhibidos conductualmente. [B]",
    "En modelos animales, el estrés temprano tiene efectos duraderos sobre el sistema CRF del BNST; los datos pediátricos en humanos son limitados."
  ],
  clinical: [
    "Trastorno de ansiedad generalizada: intolerancia a la incertidumbre y ansiedad anticipatoria sostenida.",
    "TEPT: hipervigilancia constante, respuesta de amenaza sostenida.",
    "En el consumo de sustancias, abstinencia y recaída desencadenada por estrés (CRF)."
  ],
  treatment: [
    "Los ISRS y la TCC son la primera línea en el trastorno de ansiedad generalizada; benzodiacepinas a corto plazo.",
    "Los antagonistas del receptor CRF1 redujeron la ansiedad mediada por el BNST en modelos animales pero fracasaron en humanos: el pexacerfont no se separó del placebo en el trastorno de ansiedad generalizada (Coric et al., 2010), y ningún antagonista CRF1 ha completado la fase III. Un ejemplo de los límites de la traducción de animales a humanos. [B]",
    "Los componentes de TCC dirigidos a la intolerancia a la incertidumbre corresponden a la función del BNST (vigilar la amenaza incierta)."
  ],
  lesion: [
    "En estudios animales, las lesiones del BNST reducen la respuesta de ansiedad sostenida sin afectar el miedo fásico."
  ],
  links: [
    "Amígdala (estría terminal)",
    "Hipotálamo PVN (eje HHA)",
    "SGP y núcleos autonómicos del tronco del encéfalo",
    "Corteza del núcleo accumbens",
    "CRF, NPY, noradrenalina, oxitocina/vasopresina"
  ]
},

vagal: {
  name: "Núcleos vagales", short: "DMV / NA",
  summary: "Las dos salidas parasimpáticas de la médula oblongada: el núcleo ambiguo, que regula el corazón y los músculos de la cara y la garganta, y el núcleo motor dorsal, que regula los órganos internos.",
  anatomy: [
    "Núcleo motor dorsal del vago (DMV): en el suelo del cuarto ventrículo, lateral al núcleo del hipogloso (trígono vagal).",
    "Núcleo ambiguo (NA): en la médula ventrolateral, dentro de la formación reticular; fibras motoras de los pares IX, X y XI.",
    "El vecino núcleo del tracto solitario (NTS): la primera parada de las aferencias vagales.",
    "El nervio vago sale de la médula lateral entre la oliva y el pedúnculo cerebeloso inferior (la raíz nerviosa en el modelo)."
  ],
  functions: [
    "NA: freno rápido del corazón ligado a la respiración (arritmia sinusal respiratoria); músculos de la laringe y la faringe (voz, deglución).",
    "DMV: órganos por debajo del diafragma (estómago, intestino); digestión, motilidad, secreción.",
    "Las aferencias vagales (alrededor del 80 % de las fibras) informan del estado del cuerpo al cerebro vía el NTS.",
    "Reflejo inflamatorio: la vía antiinflamatoria colinérgica.",
    "Una nota sobre la teoría polivagal: el modelo de Porges, usado también en el libro, vincula el sistema vagal ventral (núcleo ambiguo) al compromiso social y el sistema vagal dorsal (DMV) a la congelación y el colapso. Las premisas centrales de la teoría (papeles cardíacos separados de los dos núcleos, ASR como reflejo del tono vagal global, ASR exclusiva de mamíferos) han sido seriamente criticadas en la literatura fisiológica (Grossman, 2023). Es un modelo explicativo útil en la clínica, pero debe enseñarse como teoría, no como hecho anatómico. [B]"
  ],
  tests: [
    "Variabilidad de la frecuencia cardíaca / ASR (índice del tono vagal)",
    "Prueba ortostática, maniobra de Valsalva",
    "Evaluación de la deglución y la fonación"
  ],
  development: [
    "La mielinización de las fibras vagales aumenta en el último trimestre y tras el nacimiento.",
    "El tono vagal (ASR) aumenta desde la infancia y se ha relacionado con la regulación emocional y el compromiso social."
  ],
  clinical: [
    "Ansiedad y trauma: variabilidad de la frecuencia cardíaca en reposo reducida (ASR); demostrada por metaanálisis en los trastornos de ansiedad (Chalmers et al., 2014). También se discute su relación con el riesgo cardiovascular a largo plazo. [A]",
    "Anorexia nerviosa: bradicardia por dominancia vagal.",
    "Fobia a la sangre-inyecciones-heridas y síncope vasovagal (frecuente en adolescentes): una respuesta bifásica.",
    "Estimulación del nervio vago: usada en epilepsia refractaria (también en niños) y en la depresión resistente al tratamiento en adultos."
  ],
  treatment: [
    "Estimulación del nervio vago (implantada): aprobada por la FDA desde los 4 años para la epilepsia farmacorresistente (2017; antes desde los 12). También aprobada para la depresión resistente al tratamiento en adultos. [A]",
    "VNS pareada para la rehabilitación del ictus: la estimulación vagal administrada con ejercicios de movimiento mejoró la función del miembro superior en el ictus isquémico crónico (108 pacientes); aprobación de la FDA en 2021. Se basa en el efecto “potenciador del aprendizaje” (plasticidad) del nervio vago. [A]",
    "El biofeedback de variabilidad de la frecuencia cardíaca y los ejercicios de respiración lenta son abordajes de bajo riesgo que trabajan la regulación vagal en la ansiedad. [C]"
  ],
  lesion: [
    "Ronquera, disfagia, desviación de la úvula (NA); desregulación autonómica."
  ],
  links: [
    "NTS → parabraquial → amígdala, hipotálamo, ínsula (rama aferente)",
    "NA → corazón (nodo SA), laringe, faringe",
    "DMV → estómago, intestino",
    "Acetilcolina (eferente), glutamato (aferente)"
  ]
}

});
