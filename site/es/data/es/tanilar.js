/* Textos de diagnósticos en español (traducción de data/tanilar.js) */
(function () {
  'use strict';
  const EN = {
  "dehb": {
    "name": "Trastorno por déficit de atención e hiperactividad",
    "short": "TDAH",
    "kitapta": [
      {},
      {},
      {
        "snippet": "la hipótesis del déficit crónico de dopamina tónica en el TDAH (capítulo 7)"
      }
    ],
    "summary": "Circuitos de atención, control de impulsos y recompensa; redes frontoestriatales y frontoparietales, dopamina y noradrenalina.",
    "mercek": {
      "devre": {
        "title": "Bucle frontoestriatal y catecolaminas",
        "text": "La CPFDL (corteza prefrontal dorsolateral) y la corteza cingulada anterior (CCA) orientan la atención y la conducta mediante un bucle que atraviesa el caudado y el putamen hasta el tálamo y vuelve a la corteza. La dopamina del área tegmental ventral (ATV) modula el estriado y la corteza prefrontal; la noradrenalina del locus coeruleus modula la corteza prefrontal. Los medicamentos para el TDAH refuerzan ambos sistemas.",
        "modes": {
          "tipik": {
            "name": "Desarrollo típico",
            "text": "Durante una tarea, las señales de dopamina y noradrenalina alcanzan de forma estable sus dianas prefrontales y estriatales; el bucle sostiene la atención y frena las respuestas innecesarias."
          },
          "dehb": {
            "name": "Modelo del TDAH",
            "text": "Las señales de dopamina y noradrenalina son débiles y fluctuantes, y el bucle frontoestriatal no se activa lo suficiente durante las tareas. En un metaanálisis de 55 estudios de fMRI, los niños con TDAH mostraron hipoactivación de los sistemas ejecutivos (frontoparietal) y de atención ventral, e hiperactivación de la red neuronal por defecto (RND)."
          }
        },
        "src": "Loop: Alexander et al., 1986. Functional imaging: Cortese et al., 2012 (American Journal of Psychiatry, 55 studies). Dopamine: Volkow et al., 2009. The model is a theory."
      },
      "bulgular": {
        "text": "El color muestra la dirección y el tamaño de un hallazgo: frío = más pequeño, más fino o menos activo; cálido = más grande o más activo. Las diferencias son promedios grupales y pequeñas; la imagen no puede diagnosticar el TDAH en un niño individual.",
        "gruplar": [
          {
            "name": "Estructura (ENIGMA)",
            "text": "ENIGMA-ADHD (1,713 con TDAH, 1,529 controles): el accumbens, la amígdala, el caudado, el hipocampo y el putamen son más pequeños. Las diferencias son claras por debajo de los 15 años y no significativas en adultos; la medicación no modificó los resultados.",
            "items": [
              {
                "dtxt": "d = −0.19",
                "txt": "Amígdala más pequeña (mayor diferencia)."
              },
              {
                "dtxt": "d = −0.15",
                "txt": "Núcleo accumbens más pequeño."
              },
              {
                "dtxt": "d = −0.14",
                "txt": "Putamen más pequeño."
              },
              {
                "dtxt": "d = −0.11",
                "txt": "Caudado más pequeño."
              },
              {
                "dtxt": "d = −0.11",
                "txt": "Hipocampo más pequeño."
              }
            ],
            "src": "Hoogman et al., 2017 (Lancet Psychiatry)."
          },
          {
            "name": "Maduración",
            "text": "La corteza madura en el orden habitual (de atrás hacia delante), pero en promedio unos 3 años más tarde, sobre todo en las regiones frontales; la corteza motora madura algo antes (446 niños, 824 escaneos). Aquí el color muestra la dirección del retraso, no un tamaño del efecto. El hallazgo apoya la visión del TDAH como un retraso en la maduración.",
            "items": [
              {
                "dtxt": "delayed",
                "txt": "Corteza prefrontal dorsolateral: el pico de grosor llega tarde."
              },
              {
                "dtxt": "delayed",
                "txt": "Corteza prefrontal medial: madura tarde."
              },
              {
                "dtxt": "slightly early",
                "txt": "Corteza motora: madura algo antes."
              }
            ],
            "src": "Shaw et al., 2007 (PNAS)."
          },
          {
            "name": "Función (fMRI)",
            "text": "Durante las tareas, los niños con TDAH hipoactivan el sistema frontoparietal que sustenta la función ejecutiva y el sistema de atención ventral, e hiperactivan la red neuronal por defecto que sustenta el pensamiento autodirigido.",
            "items": [
              {
                "dtxt": "under-active",
                "txt": "Nodo anterior del sistema frontoparietal."
              },
              {
                "dtxt": "under-active",
                "txt": "Nodo posterior del sistema frontoparietal."
              },
              {
                "dtxt": "over-active",
                "txt": "Nodo posterior de la red neuronal por defecto."
              }
            ],
            "src": "Cortese et al., 2012 (meta-analysis of 55 fMRI studies)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "denetim",
          "name": "Atención e inhibición",
          "sub": "Distraibilidad, impulsividad, mala planificación",
          "devre": "Vía frontoestriatal dorsal (control cognitivo)",
          "text": "La CPFDL y el giro frontal inferior (GFI) sostienen la atención y detienen una respuesta en curso a través del caudado dorsal. En algunos niños con TDAH la dificultad reside principalmente en esta vía."
        },
        {
          "id": "odul",
          "name": "Recompensa y espera",
          "sub": "Querer la recompensa ahora, evitar la demora",
          "devre": "Vía frontoestriatal ventral (recompensa)",
          "text": "La corteza orbitofrontal (OFC) y el núcleo accumbens valoran las recompensas, alimentados por la dopamina. El valor de una recompensa demorada cae rápidamente, de modo que el niño elige una recompensa pequeña ahora antes que una mayor después."
        },
        {
          "id": "zaman",
          "name": "Cronometraje",
          "sub": "Estimar el tiempo, el ritmo, la secuenciación",
          "devre": "Vía frontocerebelosa (cronometraje)",
          "text": "La corteza prefrontal conecta con el cerebelo a través del puente, y el núcleo dentado conecta de vuelta con la corteza prefrontal a través del tálamo. La salida cerebelosa cruza al tálamo contralateral; el dibujo es esquemático."
        },
        {
          "id": "dalgalanma",
          "name": "Lapsos de atención",
          "sub": "Divagación mental, desconexión durante las tareas",
          "devre": "Red neuronal por defecto (hipótesis de interferencia)",
          "text": "La red neuronal por defecto, que debería silenciarse durante una tarea, no se suprime lo suficiente y desvía la atención de la tarea. Es una hipótesis; se ha encontrado hiperactivación de la RND durante las tareas."
        }
      ],
      "belirtilerSrc": "Tres vías: Sonuga-Barke et al., 2010; de Zeeuw et al., 2012 (149 participantes; el 80% de quienes tenían TDAH y algún déficit lo presentaban en un solo dominio). Interferencia de la red por defecto: Sonuga-Barke y Castellanos, 2007 (hipótesis); Cortese et al., 2012.",
      "tedavi": [
        {
          "id": "mph",
          "name": "Metilfenidato",
          "sub": "Bloquea los transportadores de dopamina y noradrenalina",
          "text": "Fármaco de primera elección a corto plazo en niños y adolescentes; anfetaminas en adultos (metaanálisis en red de 133 ensayos doble ciego). El bloqueo de los transportadores eleva la dopamina y la noradrenalina en el estriado y la corteza prefrontal; las anfetaminas también aumentan la liberación. Los datos a largo plazo son limitados.",
          "src": "Cortese et al., 2018 (Lancet Psychiatry)."
        },
        {
          "id": "atx",
          "name": "Atomoxetina",
          "sub": "Inhibidor selectivo de la recaptación de noradrenalina",
          "text": "Una opción no estimulante. Eleva la noradrenalina y la dopamina en la corteza prefrontal. El efecto se desarrolla a lo largo de unas semanas.",
          "src": "Cortese et al., 2018."
        },
        {
          "id": "guanfasin",
          "name": "Guanfacina",
          "sub": "Agonista de los receptores adrenérgicos α2A",
          "text": "Al estimular los receptores α2A de la corteza prefrontal refuerza la señalización en las redes de memoria de trabajo. La forma de liberación prolongada se usa sola o añadida a los estimulantes.",
          "src": "Cortese et al., 2018."
        },
        {
          "id": "davranis",
          "name": "Entrenamiento parental e intervención conductual",
          "sub": "Primera línea en niños preescolares",
          "text": "Primera línea por debajo de los cinco años. Efectos pequeños a moderados sobre los síntomas y sobre los problemas de oposición, mayores cuando los evalúan quienes están más cerca del tratamiento (21 estudios, más de 2,200 niños). En teoría, el refuerzo consistente e inmediato pretende compensar la dificultad de la vía de recompensa.",
          "src": "NICE NG87; Groenman et al., 2022 (JAACAP)."
        },
        {
          "id": "amfetamin",
          "name": "Anfetaminas",
          "sub": "Estimulantes; no se usan en Turquía",
          "text": "En un metaanálisis en red de 133 ensayos doble ciego, este grupo es la primera elección sugerida en adultos, mientras que en niños y adolescentes se sugiere el metilfenidato. Además de bloquear los transportadores, aumenta la liberación de dopamina y noradrenalina. No se usa en Turquía; aprobado en EE. UU.",
          "src": "Cortese et al., 2018 (Lancet Psychiatry)."
        }
      ]
    }
  },
  "osb": {
    "name": "Trastorno del espectro autista",
    "short": "TEA",
    "kitapta": [
      {},
      {
        "snippet": "estudios de oxitocina intranasal en el autismo (capítulo 7)"
      },
      {
        "snippet": "diferencias en la interocepción en el autismo (capítulos 2 y 7)"
      },
      {
        "snippet": "respuestas atípicas de la amígdala a los estímulos sociales en el autismo (capítulo 7)"
      },
      {
        "snippet": "procesamiento de señales sociales en el autismo (capítulo 7)"
      }
    ],
    "summary": "Circuitos de percepción social, teoría de la mente, procesamiento sensorial e interocepción; las diferencias en imagen son pequeñas y a nivel grupal.",
    "mercek": {
      "devre": {
        "title": "Red de percepción social",
        "text": "La información de caras y ojos procede de la región fusiforme de la corteza temporal inferior, y el movimiento biológico y la voz del surco temporal superior; la amígdala pondera la importancia de estas señales sociales. La unión temporoparietal y la corteza prefrontal medial sustentan la comprensión de otras mentes (teoría de la mente); la ínsula porta la conciencia corporal y emocional.",
        "modes": {
          "tipik": {
            "name": "Desarrollo típico",
            "text": "Desde los primeros meses el bebé se gira hacia las caras y la región de los ojos; las señales sociales se procesan en esta red y con el tiempo se convierten en comprensión de las intenciones de los demás."
          },
          "osb": {
            "name": "Modelo del autismo",
            "text": "Las señales sociales llegan a la red de forma más débil y diferente: en bebés diagnosticados después de autismo, la mirada a la región de los ojos empieza a declinar entre los 2 y los 6 meses; muchos estudios encuentran respuestas distintas del fusiforme y la amígdala ante las caras. Los hallazgos varían mucho entre individuos; este dibujo es un esquema posible, no un único «circuito roto»."
          }
        },
        "src": "Looking at the eyes: Jones and Klin, 2013 (Nature). The model is schematic; autism is not a single circuit disorder."
      },
      "bulgular": {
        "text": "El color muestra la dirección de un hallazgo: frío = más pequeño o más fino, cálido = más grueso. Las diferencias son pequeñas y a nivel grupal; la imagen no puede diagnosticar a un individuo.",
        "gruplar": [
          {
            "name": "Estructura (ENIGMA)",
            "text": "ENIGMA-ASD (1,571 autistas, 1,651 controles, de 2 a 64 años): el globo pálido, el putamen, la amígdala y el accumbens son más pequeños; la corteza frontal es más gruesa y la temporal más fina. Las diferencias corticales alcanzan su máximo en torno a la adolescencia. Se dan los rangos del estudio en lugar de tamaños del efecto región por región; la intensidad del color es aproximada. En bebés con un hermano autista, la superficie cortical también se expande rápidamente entre los 6 y los 12 meses (15 bebés diagnosticados después).",
            "items": [
              {
                "dtxt": "d ≈ −0.1 to −0.16",
                "txt": "Globo pálido más pequeño."
              },
              {
                "dtxt": "d ≈ −0.1 to −0.16",
                "txt": "Putamen más pequeño."
              },
              {
                "dtxt": "d ≈ −0.1 to −0.16",
                "txt": "Amígdala más pequeña."
              },
              {
                "dtxt": "d ≈ −0.1 to −0.16",
                "txt": "Accumbens más pequeño."
              },
              {
                "dtxt": "d ≈ 0.2",
                "txt": "Corteza frontal más gruesa."
              },
              {
                "dtxt": "d ≈ −0.2",
                "txt": "Corteza temporal más fina."
              }
            ],
            "src": "van Rooij et al., 2018 (American Journal of Psychiatry); Hazlett et al., 2017 (Nature)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "sosyal",
          "name": "Comunicación social y teoría de la mente",
          "sub": "Reciprocidad, comprensión de intenciones y sentimientos",
          "devre": "Red de la teoría de la mente",
          "text": "El surco temporal superior, la unión temporoparietal y la corteza prefrontal medial nos permiten comprender la perspectiva y las intenciones de otra persona."
        },
        {
          "id": "yuz",
          "name": "Caras y contacto visual",
          "sub": "Mirar a los ojos, leer expresiones faciales",
          "devre": "Vía de procesamiento de caras",
          "text": "La región fusiforme procesa las caras y la amígdala la importancia de una expresión. En bebés diagnosticados después de autismo, el tiempo dedicado a mirar a los ojos declina temprano."
        },
        {
          "id": "yinelenen",
          "name": "Conductas repetitivas e insistencia en la invariancia",
          "sub": "Intereses restringidos, apego a las rutinas",
          "devre": "Bucles corticostriatales",
          "text": "Circuitos de hábito y flexibilidad; ENIGMA encontró diferencias de volumen en los ganglios basales. La base circuital de estos síntomas aún no está clara."
        },
        {
          "id": "duyusal",
          "name": "Diferencias sensoriales y sentido corporal interno",
          "sub": "Hipersensibilidad o hiposensibilidad, interocepción",
          "devre": "Ínsula y corteza sensorial",
          "text": "La corteza sensorial lleva la información del mundo exterior y la ínsula la del interior del cuerpo hacia la conciencia emocional. El libro describe diferencias en la interocepción en el autismo."
        },
        {
          "id": "dil",
          "name": "Lenguaje",
          "sub": "Retraso del habla y diferencias de uso",
          "devre": "Red del lenguaje",
          "text": "El giro temporal superior percibe el habla y el giro frontal inferior (Broca) la produce; la conexión entre ambos transporta el lenguaje. El nivel de lenguaje en el autismo varía mucho entre individuos."
        }
      ],
      "belirtilerSrc": "Percepción social: Allison et al., 2000; teoría de la mente: Saxe y Kanwisher, 2003. Caras y mirada: Dalton et al., 2005; Jones y Klin, 2013. Estructura: van Rooij et al., 2018. Habla: Hickok y Poeppel, 2007. La correspondencia síntoma-circuito es un marco teórico; los hallazgos en el autismo varían mucho entre individuos.",
      "tedavi": [
        {
          "id": "ndbi",
          "name": "Intervención temprana del desarrollo y conductual",
          "sub": "En entornos naturales, dentro del juego y las rutinas diarias",
          "text": "Las intervenciones conductuales del desarrollo naturalistas (NDBI) y las intervenciones del desarrollo tienen la evidencia más sólida para la comunicación social (130 muestras, de 0 a 8 años). Se dirigen a la atención conjunta y el interés social; la intervención conductual intensiva temprana es prometedora pero necesita mejores estudios.",
          "src": "Sandbank et al., 2020 (Psychological Bulletin)."
        },
        {
          "id": "antipsikotik",
          "name": "Risperidona y aripiprazol",
          "sub": "Para la irritabilidad y la agresividad comórbidas",
          "text": "Se dirigen a la irritabilidad y la agresividad comórbidas, no a los síntomas nucleares; aprobados por la FDA (risperidona desde los 5 años, aripiprazol de 6 a 17 años). Actúan sobre los receptores de dopamina y serotonina; se vigilan el aumento de peso y los efectos metabólicos. Ningún fármaco está aprobado para los síntomas nucleares.",
          "src": "FDA approvals (2006, 2009)."
        },
        {
          "id": "oksitosin",
          "name": "Oxitocina intranasal (investigación)",
          "sub": "Hormona del vínculo social",
          "text": "En 290 niños, 24 semanas de oxitocina intranasal no mejoraron el funcionamiento social en comparación con el placebo. El libro describe la vía de la oxitocina y los estudios de oxitocina en el autismo.",
          "src": "Sikich et al., 2021 (NEJM)."
        },
        {
          "id": "melatonin",
          "name": "Melatonina de liberación prolongada",
          "sub": "Insomnio",
          "text": "En 125 niños con insomnio (la mayoría con autismo, de 2 a 17 años) cuyo sueño no mejoró con intervención conductual, el sueño total aumentó unos 57 minutos en 13 semanas (placebo 9), y la latencia del sueño se acortó. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Gringras et al., 2017 (JAACAP)."
        },
        {
          "id": "osbdehb",
          "name": "Hiperactividad comórbida: metilfenidato",
          "sub": "Respuesta menor",
          "text": "En un ensayo cruzado de 72 niños de 5 a 14 años con hiperactividad, redujo la hiperactividad, pero la respuesta fue menor que en niños con desarrollo típico y TDAH; el 18% lo abandonó por efectos secundarios, y el retraimiento social aumentó con la dosis alta.",
          "src": "RUPP Autism Network, 2005 (Archives of General Psychiatry)."
        }
      ]
    }
  },
  "okb": {
    "name": "Trastorno obsesivo-compulsivo",
    "short": "TOC",
    "kitapta": [
      {
        "snippet": "desintonía en el TOC (capítulos 2 y 12)"
      },
      {
        "snippet": "hiperactividad del bucle de detección de errores en el TOC (capítulo 2)"
      },
      {
        "snippet": "compulsiones que se vuelven automáticas y el cambio del metabolismo del caudado con el tratamiento (capítulo 2)"
      },
      {
        "snippet": "Los ganglios basales son una de las respuestas a la pregunta del libro «¿por qué un patrón se vuelve tan obstinado?»: cuando una conducta (una compulsión, una defensa, un patrón relacional) se repite lo suficiente, sale del circuito consciente y flexible de la CPF y pasa al circuito automático y rápido de los ganglios basales; un mecanismo que dificulta el tratamiento, pero que también muestra que un hábito nuevo y saludable puede construirse de la misma manera."
      }
    ],
    "summary": "Bucles a través de la corteza orbitofrontal, la corteza cingulada, el estriado y el tálamo que «se atascan».",
    "mercek": {
      "devre": {
        "title": "Bucle corticoestriatotalamocortical",
        "text": "La corteza orbitofrontal (OFC) y la corteza cingulada anterior (CCA) impulsan el caudado. Dos vías salen del caudado: la vía directa libera el freno sobre el tálamo («sigue»), la vía indirecta lo aprieta a través del GPe y el núcleo subtalámico (NST) («detente»). El tálamo reexcita la OFC y la CCA y cierra el bucle.",
        "modes": {
          "saglikli": {
            "name": "Saludable",
            "text": "Las dos vías están equilibradas: la señal de «algo va mal» se desvanece cuando la tarea termina o el peligro ha pasado. El bucle responde a un desencadenante y luego se estabiliza."
          },
          "okb": {
            "name": "Modelo del TOC",
            "text": "La vía directa domina y la indirecta es débil: el freno sobre el tálamo se afloja, el tálamo impulsa más la corteza y el bucle se retroalimenta. La señal de error no se desvanece; una compulsión aporta un alivio breve y el bucle vuelve a empezar. Pulso naranja: estructuras que se han encontrado más activas en reposo y ante la provocación de síntomas."
          }
        },
        "src": "Loop: Alexander et al., 1986. OCD model: Saxena and Rauch, 2000. PET: Baxter et al., 1987 (14 patients; increased glucose use in the left orbital gyrus and both caudate nuclei). The model is a theory; not every patient fits it."
      },
      "bulgular": {
        "text": "Las regiones se colorean según la dirección y el tamaño de un hallazgo: cálido = más grande, más grueso o más activo; frío = más pequeño o más fino. Las diferencias son promedios grupales y pequeñas (d por debajo de 0.2 se considera pequeño); la imagen no puede diagnosticar el TOC en un individuo.",
        "gruplar": [
          {
            "name": "Niños y adolescentes",
            "text": "ENIGMA-OCD: los hallazgos en niños y adolescentes difieren de los de adultos, lo que sugiere que el trastorno afecta al cerebro en desarrollo en etapas distintas.",
            "items": [
              {
                "dtxt": "+0.38",
                "txt": "Tálamo más grande (en niños y adolescentes sin medicación, en torno al 3%)."
              },
              {
                "dtxt": "−0.10 to −0.33",
                "txt": "Corteza parietal inferior más fina."
              },
              {
                "dtxt": "−0.10 to −0.33",
                "txt": "Corteza parietal superior más fina."
              }
            ],
            "src": "Subcortical: Boedhoe et al., 2017 (1,830 patients, 1,759 controls). Cortex: Boedhoe et al., 2018 (1,905 patients, 1,760 controls). For the parietal findings the range of all cortical effects in the study is given; color intensity is approximate."
          },
          {
            "name": "Adultos",
            "text": "En adultos destacan el globo pálido y el hipocampo; las diferencias son mayores en pacientes medicados (globo pálido +0.29, hipocampo −0.29). Esto no demuestra que la medicación las cause: los pacientes medicados pueden tener una enfermedad más grave.",
            "items": [
              {
                "dtxt": "+0.16",
                "txt": "Globo pálido más grande (en torno al 3%)."
              },
              {
                "dtxt": "−0.13",
                "txt": "Hipocampo más pequeño (en torno al 3%)."
              },
              {
                "dtxt": "−0.10 to −0.33",
                "txt": "Corteza parietal inferior más fina."
              }
            ],
            "src": "Boedhoe et al., 2017; 2018 (ENIGMA-OCD). For the parietal finding the study's effect range is given."
          },
          {
            "name": "Función (PET)",
            "text": "Más la función que la estructura: el consumo de glucosa en reposo está aumentado en la OFC y el caudado. Tras un tratamiento exitoso (ISRS o TCC) disminuye la actividad del caudado y la OFC.",
            "items": [
              {
                "dtxt": "increased",
                "txt": "Corteza orbitofrontal: mayor consumo de glucosa (giro orbital izquierdo en el primer estudio)."
              },
              {
                "dtxt": "increased",
                "txt": "Caudado: mayor consumo de glucosa en ambos lados; disminuye con el tratamiento."
              }
            ],
            "src": "Baxter et al., 1987 (FDG-PET, 14 patients). Decrease with treatment: Baxter et al., 1992; van der Straten et al., 2017 (meta-analysis)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "korku",
          "name": "Miedo y ansiedad",
          "sub": "Obsesiones basadas en el miedo, miedo que no se desvanece",
          "devre": "Circuito frontolímbico",
          "text": "La corteza prefrontal ventromedial regula el aprendizaje y la extinción del miedo y frena la amígdala. La extinción del miedo es débil en el TOC; la terapia de exposición actúa a través de este circuito. Los anillos muestran efectos inhibidores (de frenado)."
        },
        {
          "id": "eksik",
          "name": "Incompletitud y hábito",
          "sub": "Sensación de «no estar bien del todo», compulsiones automáticas",
          "devre": "Circuito sensoriomotor",
          "text": "El área motora suplementaria (AMS) y el putamen posterior ejecutan hábitos desencadenados por señales e integración sensoriomotora. La conducta repetida por una sensación de «no estar bien del todo» se asienta con el tiempo en este circuito automático."
        },
        {
          "id": "dur",
          "name": "Dificultad para detenerse",
          "sub": "No poder detener una conducta en curso",
          "devre": "Circuito cognitivo ventral",
          "text": "El giro frontal inferior (corteza prefrontal ventrolateral, sobre todo en el lado derecho) y el caudado ventral proporcionan la inhibición de la respuesta. La orden de «detente» también se envía por una vía rápida desde el GFI directamente al NST (vía hiperdirecta). Se han descrito diferencias en este circuito en el TOC durante tareas de inhibición."
        },
        {
          "id": "esneklik",
          "name": "Planificación y flexibilidad",
          "sub": "Flexibilidad mental, memoria de trabajo",
          "devre": "Circuito cognitivo dorsal",
          "text": "La corteza prefrontal dorsolateral y el caudado dorsal sustentan la planificación, la memoria de trabajo y la regulación emocional de arriba abajo. La hipoactividad de este circuito se considera junto con la hiperactividad del circuito frontolímbico en las obsesiones basadas en el miedo."
        },
        {
          "id": "odul",
          "name": "Recompensa y alivio",
          "sub": "Alivio breve tras una compulsión, motivación",
          "devre": "Circuito afectivo ventral",
          "text": "La OFC y el núcleo accumbens procesan la recompensa y la motivación, alimentados por la dopamina del área tegmental ventral. El alivio que aporta una compulsión refuerza la conducta."
        }
      ],
      "belirtilerSrc": "Cinco circuitos: van den Heuvel et al., 2016; Shephard et al., 2021 (Molecular Psychiatry). La correspondencia síntoma-circuito es un marco teórico; las tareas suelen implicar varios circuitos a la vez.",
      "tedavi": [
        {
          "id": "ssri",
          "name": "ISRS y clomipramina",
          "sub": "Inhiben la recaptación de serotonina",
          "text": "Fármaco de primera línea. El TOC necesita dosis más altas y ensayos más largos (8–12 semanas) que la depresión. Aprobados por la FDA en niños: sertralina (desde los 6 años), fluoxetina (7), fluvoxamina (8), clomipramina (10). En la información del producto turca (KÜB), la clomipramina está indicada entre los 10 y los 17 años solo para el TOC. Tras un tratamiento exitoso disminuye la actividad del caudado y la OFC.",
          "src": "POTS, 2004 (JAMA); van der Straten et al., 2017 (meta-analysis)."
        },
        {
          "id": "erp",
          "name": "Exposición y prevención de respuesta",
          "sub": "Terapia cognitivo-conductual (TCC)",
          "text": "Primera línea en niños y adolescentes; mayor remisión cuando se combina con medicación (POTS: combinado 53.6%, TCC sola 39.3%, placebo 3.6%). Utiliza el aprendizaje de extinción del miedo: la corteza prefrontal ventromedial frena la amígdala. En el atlas esta regulación se dibuja con la «vía de maduración frontolímbica» del libro. El metabolismo del caudado disminuye en los respondedores.",
          "src": "POTS, 2004; Baxter et al., 1992."
        },
        {
          "id": "dbs-vcvs",
          "name": "Estimulación cerebral profunda: VC/VS",
          "sub": "Cápsula ventral y estriado ventral",
          "text": "Para el TOC grave y resistente al tratamiento en adultos. El electrodo recorre el brazo anterior de la cápsula interna con sus contactos distales en el estriado ventral (alrededor del accumbens). Exención de dispositivo humanitario de la FDA en 2009. En un metaanálisis que abarca todas las dianas de ECP (31 estudios, 116 pacientes; en su mayoría dianas estriatales) los síntomas cayeron un 45% de media y el 60% respondió. No se usa en niños.",
          "src": "Alonso et al., 2015 (meta-analysis). The lead path is schematic."
        },
        {
          "id": "dbs-stn",
          "name": "Estimulación cerebral profunda: NST",
          "sub": "Núcleo subtalámico anteromedial",
          "text": "La parte emocional-cognitiva situada por delante y medial a la diana motora usada en la enfermedad de Parkinson. En un ensayo cruzado doble ciego de 16 pacientes la media de la Y-BOCS fue 19 con estimulación activa y 28 con estimulación simulada; también se produjeron acontecimientos adversos graves. No se usa en niños.",
          "src": "Mallet et al., 2008 (NEJM). The lead path is schematic."
        },
        {
          "id": "dtms",
          "name": "EMT profunda (bobina H7)",
          "sub": "Corteza prefrontal medial y cingulada anterior",
          "text": "Estimulación magnética a través del cráneo; la bobina H7 llega más profundo, hasta la cingulada anterior. Los síntomas se provocan antes de cada sesión. En 99 adultos la tasa de respuesta fue del 38.1% al final del tratamiento (simulación 11.1%) y del 45.2% un mes después (simulación 17.8%). FDA 2018. No se usa en niños.",
          "src": "Carmi et al., 2019 (American Journal of Psychiatry). Coil and field are schematic."
        },
        {
          "id": "apgucl",
          "name": "Potenciación con antipsicóticos",
          "sub": "Sin respuesta a ISRS y TCC",
          "text": "En un metaanálisis en adultos, el aripiprazol fue eficaz a corto plazo y la risperidona tuvo un efecto pequeño; la quetiapina y la olanzapina no difirieron del placebo. Los autores aconsejan un uso prudente y una revisión a las 4 semanas. Se tienen en cuenta los riesgos a largo plazo.",
          "src": "Veale et al., 2014 (BMC Psychiatry)."
        }
      ]
    }
  },
  "depresyon": {
    "name": "Depresión",
    "short": "Depresión",
    "kitapta": [
      {},
      {},
      {},
      {},
      {
        "snippet": "la extinción del SEEKING y la anhedonia en la depresión (capítulo 8)"
      },
      {}
    ],
    "summary": "Circuitos de recompensa, respuesta al estrés y regulación emocional; la irritabilidad y la anhedonia pueden aparecer primero en la adolescencia.",
    "mercek": {
      "devre": {
        "title": "Equilibrio entre recompensa y regulación emocional",
        "text": "La vía dopaminérgica del área tegmental ventral al accumbens y la corteza prefrontal medial transporta la recompensa y la motivación. La cingulada anterior (especialmente su parte subgenual) y la amígdala transportan la emoción negativa, que la CPFDL regula desde arriba. La habénula lateral frena los núcleos dopaminérgicos con una señal de «la recompensa esperada no llegó»; la amígdala impulsa el eje del estrés a través del hipotálamo.",
        "modes": {
          "saglikli": {
            "name": "Saludable",
            "text": "La señal de recompensa alimenta la motivación; cuando surge una emoción negativa, la corteza prefrontal la regula y la respuesta al estrés se desvanece."
          },
          "depresyon": {
            "name": "Modelo de la depresión",
            "text": "La señal de recompensa se debilita (anhedonia); la cingulada anterior y la amígdala están más activas y la regulación de arriba abajo de la CPFDL es débil (modelo de desregulación límbico-cortical). La habénula frena más los núcleos dopaminérgicos y el eje del estrés funciona de forma crónica."
          }
        },
        "src": "Limbic-cortical model: Mayberg, 1997. Habenula: Hikosaka, 2010. The model is a theory; depression spans several circuit patterns."
      },
      "bulgular": {
        "text": "El color muestra la dirección y el tamaño de un hallazgo: frío = más pequeño o más fino, cálido = más grande. Las diferencias son promedios grupales y pequeñas; la imagen no puede diagnosticar a un individuo.",
        "gruplar": [
          {
            "name": "Hipocampo",
            "text": "ENIGMA-MDD (1,728 pacientes, 7,199 controles): el hipocampo es más pequeño. La diferencia es clara en la depresión recurrente y en la que comienza antes de los 21 años; los pacientes en el primer episodio no difieren de los controles.",
            "items": [
              {
                "dtxt": "d = −0.14",
                "txt": "Hipocampo más pequeño (1.2%); −0.17 en la depresión recurrente, −0.20 en la de inicio temprano."
              }
            ],
            "src": "Schmaal et al., 2016 (Molecular Psychiatry)."
          },
          {
            "name": "Adultos (corteza)",
            "text": "ENIGMA-MDD (2,148 pacientes, 7,957 controles): en adultos las cortezas orbitofrontal, cingulada anterior y posterior, insular y temporal son más finas; el adelgazamiento se observa en casos de inicio en la edad adulta. Los tamaños del efecto son pequeños; la intensidad del color es aproximada.",
            "items": [
              {
                "dtxt": "thinner",
                "txt": "Corteza orbitofrontal más fina."
              },
              {
                "dtxt": "thinner",
                "txt": "Cingulada anterior más fina."
              },
              {
                "dtxt": "thinner",
                "txt": "Cingulada posterior más fina."
              },
              {
                "dtxt": "thinner",
                "txt": "Ínsula más fina."
              },
              {
                "dtxt": "thinner",
                "txt": "Corteza temporal más fina."
              }
            ],
            "src": "Schmaal et al., 2017 (Molecular Psychiatry)."
          },
          {
            "name": "Adolescentes (corteza)",
            "text": "En adolescentes no hay diferencia en el grosor cortical; la superficie total es menor, sobre todo en regiones frontales y sensoriomotoras y en adolescentes con episodios recurrentes. El efecto en el cerebro en desarrollo difiere del de los adultos.",
            "items": [
              {
                "dtxt": "smaller surface area",
                "txt": "Superficie de la corteza frontal menor."
              },
              {
                "dtxt": "smaller surface area",
                "txt": "Superficie de la corteza motora menor."
              },
              {
                "dtxt": "smaller surface area",
                "txt": "Superficie de la corteza sensorial menor."
              }
            ],
            "src": "Schmaal et al., 2017."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "anhedoni",
          "name": "Pérdida de placer",
          "sub": "Pérdida de interés y de impulso",
          "devre": "Circuito de recompensa",
          "text": "En el circuito de recompensa formado por el ATV, el núcleo accumbens y la corteza prefrontal, las respuestas a la recompensa están reducidas. El libro describe este circuito como el sistema SEEKING."
        },
        {
          "id": "ruminasyon",
          "name": "Rumia",
          "sub": "Pensamiento repetitivo y autocentrado",
          "devre": "Red neuronal por defecto",
          "text": "La corteza prefrontal medial y la cingulada posterior sustentan el pensamiento autodirigido; en la depresión la conectividad de esta red está aumentada y los pensamientos negativos siguen girando."
        },
        {
          "id": "olumsuz",
          "name": "Emoción negativa y estrés",
          "sub": "Estado de ánimo bajo, sensibilidad a la amenaza, sueño y apetito",
          "devre": "Circuito del afecto negativo y eje del estrés",
          "text": "La amígdala y la cingulada anterior responden con más fuerza a los estímulos negativos; la amígdala impulsa el eje del estrés (cortisol) a través del hipotálamo."
        },
        {
          "id": "denetim",
          "name": "Concentración y toma de decisiones",
          "sub": "Dificultad para focalizar y concentrarse",
          "devre": "Circuito de control cognitivo",
          "text": "La CPFDL y la cingulada anterior dorsal gestionan la atención y las decisiones; la hipoactividad de este circuito se ha relacionado con la mala concentración y, en algunos pacientes, con la respuesta al tratamiento."
        }
      ],
      "belirtilerSrc": "Circuitos: Williams, 2016 (Lancet Psychiatry; una taxonomía de circuitos para la depresión y la ansiedad). La correspondencia síntoma-circuito es un marco teórico.",
      "tedavi": [
        {
          "id": "ssri",
          "name": "ISRS (fluoxetina, escitalopram)",
          "sub": "Inhiben la recaptación de serotonina",
          "text": "Se añaden a la psicoterapia en la depresión moderada y grave. Aprobados por la FDA en niños y adolescentes: fluoxetina (desde los 8 años), escitalopram (desde los 12). Por debajo de los 25 años existe una advertencia de ideación suicida y se necesita una vigilancia estrecha. Respuesta a las 12 semanas en adolescentes: fluoxetina + TCC 71.0%, fluoxetina sola 60.6%, placebo 34.8%.",
          "src": "TADS, 2004 (JAMA)."
        },
        {
          "id": "bdt",
          "name": "Terapia cognitivo-conductual",
          "sub": "Patrones de pensamiento y conducta",
          "text": "Primera línea en la depresión leve y combinada con medicación en la moderada y grave. Se dirige a los pensamientos negativos y al retraimiento conductual y se piensa que actúa a través de vías de regulación prefrontal (dibujadas en el atlas con la vía frontolímbica del libro). En adolescentes la TCC sola alcanzó el 43.2% a las 12 semanas; en la semana 36 tanto la TCC sola como la fluoxetina sola alcanzaron el 81%.",
          "src": "TADS, 2004."
        },
        {
          "id": "rtms",
          "name": "EMTr repetitiva (CPFDL izquierda)",
          "sub": "Estimulación magnética a través del cráneo",
          "text": "Se usa en la depresión resistente al tratamiento en adultos. En 2024 recibió la autorización de la FDA para los 15–21 años como complemento a los antidepresivos (basada en datos del mundo real de la empresa, no en un ensayo aleatorizado). La bobina se coloca sobre la CPFDL izquierda; el efecto se propaga a la red de la cingulada anterior conectada.",
          "src": "FDA, 2024 (NeuroStar). The left DLPFC target is anticorrelated with the subgenual cingulate: Fox et al., 2012. Coil, field and pathway are schematic."
        },
        {
          "id": "dbs",
          "name": "Estimulación cerebral profunda (cingulada subgenual)",
          "sub": "Fase de investigación",
          "text": "En el primer estudio 4 de 6 pacientes mejoraron notablemente; un ensayo aleatorizado multicéntrico posterior no superó a la estimulación simulada en su fase inicial. Solo para uso en investigación, en adultos. No se usa en niños.",
          "src": "Mayberg et al., 2005 (Neuron); Holtzheimer et al., 2017 (Lancet Psychiatry). The lead path is schematic."
        },
        {
          "id": "ekt",
          "name": "Terapia electroconvulsiva (TEC)",
          "sub": "Depresión grave o resistente",
          "text": "En un metaanálisis de estudios en adultos es superior a los fármacos antidepresivos. En adolescentes la evidencia es un parámetro de práctica basado en informes de casos y estudios pequeños; se recomienda la evaluación de síntomas y cognitiva antes y después, y los niños prepúberes quedan fuera del parámetro. En un estudio de RM de 281 pacientes, el volumen del hipocampo aumenta alrededor de un 0.28% por sesión, pero esto no explica la mejoría. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "UK ECT Review Group, 2003 (Lancet); Ghaziuddin et al., 2004 (JAACAP); Oltedal et al., 2018 (Biological Psychiatry)."
        },
        {
          "id": "ketamin",
          "name": "Ketamina y esketamina",
          "sub": "Depresión resistente de acción rápida",
          "text": "En la depresión resistente en adultos, la esketamina intranasal añadida a un antidepresivo oral mostró un efecto rápido y dependiente de la dosis (67 pacientes); la aprobación de la FDA en 2019 es para adultos y se administra en centros certificados. En un ensayo cruzado de 17 adolescentes, una dosis intravenosa única de ketamina superó al midazolam a las 24 horas, con más aumento de la presión arterial y síntomas disociativos; faltan datos de seguridad a largo plazo. Se piensa que actúa a través del sistema glutamatérgico.",
          "src": "Daly et al., 2018 (JAMA Psychiatry); Dwyer et al., 2021 (American Journal of Psychiatry); FDA, 2019."
        },
        {
          "id": "kat",
          "name": "Psicoterapia interpersonal",
          "sub": "Depresión en adolescentes",
          "text": "En un ensayo en una clínica escolar con 63 adolescentes, 12 sesiones de psicoterapia interpersonal redujeron más los síntomas y mejoraron más el funcionamiento que la atención habitual. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Mufson et al., 2004 (Archives of General Psychiatry)."
        },
        {
          "id": "obur",
          "name": "Otros antidepresivos",
          "sub": "Bupropión, IRSN, mirtazapina",
          "text": "En un metaanálisis en red de 21 antidepresivos en 522 ensayos en adultos, todos superaron al placebo. El panorama difiere en niños y adolescentes: en un metaanálisis en red, la fluoxetina fue el único fármaco significativamente mejor que el placebo. La advertencia sobre la ideación suicida se aplica por debajo de los 25 años.",
          "src": "Cipriani et al., 2018; Cipriani et al., 2016 (Lancet)."
        }
      ]
    }
  },
  "yab": {
    "name": "Trastorno de ansiedad generalizada",
    "short": "TAG",
    "kitapta": [
      {},
      {
        "snippet": "La ansiedad generalizada y la «sensación de que algo malo va a pasar» (la descripción de PANIC en el capítulo 3) pueden explicarse mejor por un patrón dominado por el BNST."
      },
      {},
      {},
      {}
    ],
    "summary": "Percepción de la amenaza (amígdala), ansiedad sostenida ante una amenaza incierta (BNST), sensación corporal (ínsula) y regulación prefrontal.",
    "mercek": {
      "devre": {
        "title": "Bucle de amenaza y regulación",
        "text": "La amígdala responde a la amenaza cercana y clara, el BNST a la amenaza incierta y distante; ambos preparan el cuerpo a través del hipotálamo (eje del estrés) y la PAG (defensa). La corteza prefrontal ventromedial y ventrolateral frenan la amígdala; la ínsula porta las sensaciones corporales de la ansiedad; el locus coeruleus eleva la activación.",
        "modes": {
          "saglikli": {
            "name": "Saludable",
            "text": "La señal de amenaza coincide con el peligro real; la corteza prefrontal frena la amígdala y la respuesta al estrés se desvanece una vez que el peligro ha pasado."
          },
          "yab": {
            "name": "Modelo del TAG",
            "text": "La señal de amenaza es fuerte y el freno prefrontal débil: en niños y adolescentes con TAG la amígdala derecha responde más a las caras de enfado y la contrarregulación de la corteza prefrontal ventrolateral es débil. El BNST sostiene la ansiedad ante una amenaza incierta; el bucle alimenta la sensación de que «algo malo va a pasar»."
          }
        },
        "src": "Child and adolescent GAD: Monk et al., 2008. BNST and sustained anxiety: Davis et al., 2010; Grupe and Nitschke, 2013. The model is a theory."
      },
      "bulgular": {
        "text": "El color muestra la dirección de un hallazgo: cálido = hiperactivo, frío = hipoactivo o conexión débil. Las diferencias estructurales en el TAG son pequeñas; los hallazgos residen más en la función y la conectividad.",
        "gruplar": [
          {
            "name": "Función (niños y adolescentes)",
            "text": "Los jóvenes con TAG muestran una respuesta más fuerte de la amígdala derecha ante caras de enfado presentadas demasiado brevemente (17 ms) para ser percibidas, y esta respuesta se correlaciona con la gravedad de la ansiedad; la conexión de la corteza prefrontal ventrolateral derecha que equilibra la amígdala en jóvenes sanos tiende a ser más débil en el TAG.",
            "items": [
              {
                "dtxt": "over-active",
                "txt": "Respuesta de la amígdala derecha mayor."
              },
              {
                "dtxt": "weak regulation",
                "txt": "Contrarregulación de la corteza prefrontal ventrolateral (giro frontal inferior) débil."
              }
            ],
            "src": "Monk et al., 2008 (Archives of General Psychiatry)."
          },
          {
            "name": "Estructura (ENIGMA)",
            "text": "En el estudio de TAG de 28 centros de ENIGMA-Anxiety (de 5 a 90 años) las diferencias estructurales cerebrales fueron pequeñas. El TAG probablemente se apoya más en la función y la conectividad que en la estructura; la región aparece en gris.",
            "items": [
              {
                "dtxt": "no clear difference",
                "txt": "Las diferencias estructurales son pequeñas."
              }
            ],
            "src": "Harrewijn et al., 2021 (Translational Psychiatry)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "endise",
          "name": "Preocupación",
          "sub": "Pensamiento repetitivo incontrolable orientado al futuro",
          "devre": "Red neuronal por defecto",
          "text": "La corteza prefrontal medial y la cingulada posterior sustentan el pensamiento autodirigido y orientado al futuro; en el TAG esta red subyace al pensamiento repetitivo relacionado con la preocupación."
        },
        {
          "id": "tehdit",
          "name": "Sensibilidad a la amenaza",
          "sub": "Percibir lo incierto como peligroso",
          "devre": "Circuito del afecto negativo",
          "text": "La amígdala y la cingulada anterior responden con fuerza a las señales de amenaza; cuando la regulación prefrontal sigue siendo débil, la percepción de amenaza se extiende."
        },
        {
          "id": "belirsizlik",
          "name": "Intolerancia a la incertidumbre",
          "sub": "La sensación de «¿y si pasa algo malo?»",
          "devre": "BNST e ínsula (ansiedad sostenida)",
          "text": "La amenaza incierta e impredecible activa el BNST y la ínsula; la respuesta dura hasta que la amenaza se vuelve clara. El libro describe el vínculo del BNST con la sensación de que «algo malo va a pasar»."
        },
        {
          "id": "beden",
          "name": "Tensión corporal y activación",
          "sub": "Tensión muscular, inquietud, mal sueño",
          "devre": "Activación y eje del estrés",
          "text": "El locus coeruleus impulsa la activación con noradrenalina y el hipotálamo gestiona el eje del estrés (cortisol); ambos se refuerzan con las señales de la amígdala."
        }
      ],
      "belirtilerSrc": "Circuitos: Williams, 2016 (Lancet Psychiatry); incertidumbre y ansiedad sostenida: Grupe y Nitschke, 2013. La correspondencia síntoma-circuito es un marco teórico.",
      "tedavi": [
        {
          "id": "bdt",
          "name": "TCC con exposición",
          "sub": "Primera línea; con implicación de los padres",
          "text": "Rompe el bucle de ansiedad que alimenta la evitación; utiliza la extinción del miedo y la regulación prefrontal (dibujadas en el atlas con la vía frontolímbica del libro). Romper el ciclo de reaseguración y acomodación a la evitación de los padres forma parte del tratamiento. En niños y adolescentes, la mejoría marcada a las 12 semanas con TCC sola fue del 59.7%.",
          "src": "CAMS: Walkup et al., 2008 (NEJM)."
        },
        {
          "id": "ssri",
          "name": "ISRS e IRSN",
          "sub": "Inhiben la recaptación de serotonina (y noradrenalina)",
          "text": "Los ISRS (sertralina, fluoxetina, fluvoxamina) son eficaces; el fármaco aprobado por la FDA para el TAG en niños y adolescentes es la duloxetina (de 7 a 17 años, un IRSN). En 488 niños de 7 a 17 años, mejoría marcada a las 12 semanas: sertralina + TCC 80.7%, sertralina sola 54.9%, placebo alrededor del 24%. Se aplican la advertencia sobre la ideación suicida y la vigilancia estrecha.",
          "src": "CAMS: Walkup et al., 2008."
        }
      ]
    }
  },
  "tssb": {
    "name": "Trastorno de estrés postraumático",
    "short": "TEPT",
    "kitapta": [
      {},
      {},
      {
        "snippet": "estrés crónico que conduce a una pérdida de contextualización (la sensación de «todo es peligroso» en el TEPT; capítulos 10 y 18)"
      },
      {
        "snippet": "desequilibrio postraumático entre hipocampo y amígdala (capítulo 18)"
      },
      {
        "snippet": "Generalización contextual en el TEPT (capítulo 18)"
      },
      {
        "snippet": "disociación postraumática y la ventana de tolerancia (capítulo 18)"
      }
    ],
    "summary": "Circuito de aprendizaje y extinción del miedo: una amígdala hiperactiva, con un freno débil de la corteza prefrontal ventromedial y una entrada contextual débil procedente del hipocampo.",
    "mercek": {
      "devre": {
        "title": "Circuito de aprendizaje y extinción del miedo",
        "text": "La amígdala evalúa la amenaza y desencadena la respuesta al estrés y la defensa (huida, lucha, congelación) a través del hipotálamo y la PAG; el locus coeruleus eleva la activación. El hipocampo aporta el contexto («¿es seguro este lugar?»); la corteza prefrontal ventromedial recupera la extinción aprendida y frena la amígdala.",
        "modes": {
          "saglikli": {
            "name": "Saludable",
            "text": "Una vez que el peligro ha pasado, el hipocampo reconoce el contexto seguro y la corteza prefrontal ventromedial frena la amígdala; el miedo se extingue y el cuerpo se calma."
          },
          "tssb": {
            "name": "Modelo de TEPT",
            "text": "La amígdala reacciona de forma excesiva a las señales de amenaza; el freno de la corteza prefrontal ventromedial y la entrada contextual del hipocampo son débiles. Incluso cuando la extinción se ha aprendido, no se recupera, y el miedo se generaliza a todo lo que recuerda al trauma («todo es peligroso»). La activación y el eje del estrés permanecen encendidos."
          }
        },
        "src": "Fear learning and extinction is a classic neurocircuit model; hippocampus: Logue et al., 2018. The model is a theory."
      },
      "bulgular": {
        "text": "El color muestra la dirección y el tamaño de un hallazgo: frío = menor. Las diferencias son promedios de grupo y pequeñas; las imágenes no permiten diagnosticar a una persona.",
        "gruplar": [
          {
            "name": "Estructura (ENIGMA-PGC)",
            "text": "ENIGMA-PGC (1,868 personas, 794 con TEPT, 16 cohortes): en el TEPT actual el hipocampo es menor que en las personas expuestas a trauma sin TEPT. La diferencia de la amígdala no es significativa tras la corrección por comparaciones múltiples.",
            "items": [
              {
                "dtxt": "d = −0.17",
                "txt": "Hipocampo menor."
              },
              {
                "dtxt": "d = −0.11",
                "txt": "Amígdala menor (no significativo tras la corrección)."
              }
            ],
            "src": "Logue et al., 2018 (Biological Psychiatry)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "yeniden",
          "name": "Reexperimentación",
          "sub": "Recuerdos intrusivos, pesadillas, juego traumático",
          "devre": "Circuito de memoria amígdala-hipocampo",
          "text": "El recuerdo del trauma se almacena junto con su carga emocional; cuando el hipocampo no procesa con suficiente precisión su contexto y su ubicación temporal, el recuerdo se revive como si estuviera «ocurriendo ahora». El libro describe esta vía como «generalización contextual en el TEPT»."
        },
        {
          "id": "uyarilma",
          "name": "Hiperactivación",
          "sub": "Sobresalto, hipervigilancia, sueño deficiente",
          "devre": "Eje de activación y estrés",
          "text": "El locus coeruleus (noradrenalina) y el hipotálamo (eje del estrés, cortisol) mantienen el cuerpo en alerta constante; ambos se refuerzan con las señales procedentes de la amígdala."
        },
        {
          "id": "kacinma",
          "name": "Evitación y miedo no extinguido",
          "sub": "Alejarse de los recordatorios",
          "devre": "Circuito frontolímbico de extinción",
          "text": "La corteza prefrontal ventromedial frena la amígdala al recuperar la extinción aprendida; en el TEPT este freno es débil. La evitación mantiene el miedo porque no deja ninguna oportunidad para el aprendizaje de extinción."
        },
        {
          "id": "dissosiyasyon",
          "name": "Disociación y congelación",
          "sub": "Desapego, embotamiento, congelación",
          "devre": "PAG y defensa vagal",
          "text": "Cuando la huida es imposible, la PAG desencadena la congelación y la desconexión; el libro explica la disociación a través de la PAG y de la jerarquía polivagal. En el subtipo disociativo se propone que la corteza prefrontal suprime en exceso las respuestas límbicas."
        }
      ],
      "belirtilerSrc": "Contexto: Liberzon y Abelson, 2016. Extinción: Milad et al., 2009 (16 pacientes). Respuesta al estrés: Ulrich-Lai y Herman, 2009. Subtipo disociativo: Lanius et al., 2010. La correspondencia entre síntomas y circuitos es un marco teórico.",
      "tedavi": [
        {
          "id": "tobdt",
          "name": "TCC centrada en el trauma",
          "sub": "Primera línea en niños y adolescentes",
          "text": "Eficaz independientemente de la edad, el sexo y el tipo de trauma (metaanálisis de datos individuales de los participantes). La narrativa del trauma y la exposición graduada utilizan la extinción del miedo (corteza prefrontal ventromedial → amígdala) y reconstruyen una sensación de contexto seguro. El atlas dibuja la vía frontolímbica del libro.",
          "src": "The Lancet Child & Adolescent Health, 2023 (individual participant data meta-analysis)."
        },
        {
          "id": "ssri",
          "name": "ISRS",
          "sub": "No es la primera elección en niños",
          "text": "En 131 niños y adolescentes, 10 semanas de sertralina no superaron al placebo. Los ISRS son eficaces en adultos; en niños pueden utilizarse para la depresión y la ansiedad concurrentes.",
          "src": "Robb et al., 2010."
        },
        {
          "id": "emdr",
          "name": "EMDR",
          "sub": "Desensibilización por movimientos oculares",
          "text": "En un metaanálisis en red de 32 ensayos en niños y jóvenes es eficaz, aunque menos que la TCC individual centrada en el trauma; la evidencia es de calidad moderada a baja. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Mavranezouli et al., 2020 (Journal of Child Psychology and Psychiatry)."
        },
        {
          "id": "pe",
          "name": "Exposición prolongada",
          "sub": "Versión para adolescentes",
          "text": "En 61 chicas de 13 a 18 años con TEPT relacionado con abuso sexual superó al asesoramiento de apoyo, y la diferencia se mantuvo durante 12 meses; lo aplicaron orientadores de clínicas comunitarias. Utiliza la extinción del miedo (la vía frontolímbica del libro en el atlas).",
          "src": "Foa et al., 2013 (JAMA)."
        }
      ]
    }
  },
  "bipolar": {
    "name": "Trastorno bipolar",
    "short": "Bipolar",
    "summary": "Regulación emocional (amígdala, corteza prefrontal ventrolateral) y circuitos de recompensa; oscilaciones entre la manía y los episodios depresivos.",
    "mercek": {
      "devre": {
        "title": "Regulación emocional y equilibrio de la recompensa",
        "text": "La amígdala aporta la intensidad de un estímulo emocional; la corteza prefrontal ventrolateral (giro frontal inferior) y la OFC (corteza orbitofrontal) la regulan. La vía dopaminérgica que va del VTA (área tegmental ventral) al accumbens alimenta la recompensa y la motivación. En el trastorno bipolar, el equilibrio entre estos dos sistemas se desplaza en ambas direcciones a lo largo de los episodios.",
        "modes": {
          "saglikli": {
            "name": "Equilibrado",
            "text": "La señal de recompensa alimenta la motivación y la corteza prefrontal regula las respuestas emocionales; el ánimo sube y baja con los acontecimientos y después vuelve al equilibrio."
          },
          "depresif": {
            "name": "Episodio depresivo",
            "text": "La vía de la recompensa se debilita (anhedonia, pérdida de energía) y aumenta la emoción negativa. En la depresión bipolar los antidepresivos no se utilizan en monoterapia."
          },
          "mani": {
            "name": "Modelo de manía",
            "text": "La vía de la recompensa trabaja en exceso: aumentan la motivación, la energía y la asunción de riesgos, y disminuye la necesidad de dormir. La amígdala es más reactiva y el freno de la corteza prefrontal ventrolateral y de la OFC es débil. El aumento de la sensibilidad a la recompensa en la manía es una teoría."
          }
        },
        "src": "In ENIGMA, the largest cortical thinning is in the left pars opercularis (inferior frontal gyrus; Hibar et al., 2018). The reward sensitivity model is theoretical."
      },
      "bulgular": {
        "text": "El color muestra la dirección y el tamaño de un hallazgo: frío = menor o más delgado. Las diferencias son promedios de grupo y pequeñas; las imágenes no permiten diagnosticar a una persona.",
        "gruplar": [
          {
            "name": "Subcortical (ENIGMA)",
            "text": "ENIGMA-BD (1,710 pacientes, 2,594 controles): hipocampo y tálamo menores, ventrículos laterales mayores. Los usuarios de litio tenían un tálamo mayor (exploratorio).",
            "items": [
              {
                "dtxt": "d = −0.23",
                "txt": "Hipocampo menor."
              },
              {
                "dtxt": "d = −0.15",
                "txt": "Tálamo menor."
              }
            ],
            "src": "Hibar et al., 2016 (Molecular Psychiatry)."
          },
          {
            "name": "Corteza (ENIGMA)",
            "text": "ENIGMA-BD (1,837 pacientes, 2,582 controles): corteza frontal, temporal y parietal más delgada; el adelgazamiento aumenta con la duración de la enfermedad. El litio, los antiepilépticos y los antipsicóticos se asocian con las medidas corticales.",
            "items": [
              {
                "dtxt": "d = −0.29",
                "txt": "Pars opercularis izquierda (giro frontal inferior) más delgada."
              },
              {
                "dtxt": "d = −0.29",
                "txt": "Giro fusiforme izquierdo más delgado."
              },
              {
                "dtxt": "d = −0.28",
                "txt": "Corteza frontal media rostral izquierda más delgada."
              }
            ],
            "src": "Hibar et al., 2018 (Molecular Psychiatry)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "mani",
          "name": "Manía: aumento de la energía y de la asunción de riesgos",
          "sub": "Menor necesidad de dormir, aceleración, conductas de riesgo",
          "devre": "Circuito de recompensa",
          "text": "Aumentan la anticipación de la recompensa y la motivación; se ha propuesto una mayor sensibilidad del circuito de recompensa. El libro incluye la manía entre los correlatos clínicos del sistema SEEKING."
        },
        {
          "id": "duygu",
          "name": "Cambios de ánimo e irritabilidad",
          "sub": "Emoción intensa y de cambio rápido",
          "devre": "Circuito de regulación emocional",
          "text": "La amígdala responde con fuerza a los estímulos emocionales; cuando el freno de la corteza prefrontal ventrolateral y de la OFC sigue siendo débil, la emoción se eleva rápidamente."
        },
        {
          "id": "depresif",
          "name": "Episodio depresivo",
          "sub": "Ánimo bajo, pérdida de energía",
          "devre": "Circuitos de recompensa y de emoción negativa",
          "text": "En la depresión bipolar disminuye la respuesta de recompensa y aumenta la emoción negativa. El primer episodio suele ser depresivo, por lo que los antecedentes familiares importan en la depresión adolescente."
        }
      ],
      "belirtilerSrc": "Emoción y recompensa: Phillips y Swartz, 2014. Sistema de aproximación conductual: Urošević et al., 2008. La correspondencia entre síntomas y circuitos es un marco teórico.",
      "tedavi": [
        {
          "id": "lityum",
          "name": "Litio",
          "sub": "Estabilizador del ánimo",
          "text": "Aprobado por la FDA en 2018 para la manía aguda y el mantenimiento en edades de 7 a 17 años (incluido un ensayo controlado con placebo de 81 niños). Es necesario monitorizar los niveles sanguíneos, la función renal y la función tiroidea. En ENIGMA, los usuarios de litio presentaban un mayor volumen talámico (exploratorio). La información de producto turca (KÜB) indica que no debe utilizarse en menores de 12 años. Dado que el mecanismo no se conoce con certeza, en esta tarjeta no se dibuja ninguna vía cerebral ni ningún resaltado regional.",
          "src": "FDA, 2018; Hibar et al., 2016."
        },
        {
          "id": "antipsikotik",
          "name": "Antipsicóticos de segunda generación",
          "sub": "Manía aguda",
          "text": "Aprobados para la manía aguda en adolescentes (p. ej., aripiprazol, risperidona, quetiapina); bloquean los receptores D2 y atenúan la señalización dopaminérgica excesiva en la vía de la recompensa. Se monitorizan el peso y los efectos metabólicos.",
          "src": "FDA approvals."
        },
        {
          "id": "psikoegitim",
          "name": "Psicoeducación y terapia centrada en la familia",
          "sub": "Prevención de episodios",
          "text": "En un ensayo aleatorizado de 58 adolescentes, la terapia centrada en la familia produjo una recuperación más rápida de los síntomas depresivos y menos semanas en episodios depresivos; el tiempo hasta la recurrencia y la manía no difirieron. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Miklowitz et al., 2008 (Archives of General Psychiatry)."
        },
        {
          "id": "lamotrijin",
          "name": "Lamotrigina",
          "sub": "Mantenimiento adyuvante",
          "text": "En un ensayo aleatorizado de retirada en edades de 10 a 17 años, el análisis principal no fue significativo; apareció un beneficio entre los 13 y los 17 años, pero no entre los 10 y los 12. Se monitorizan las reacciones cutáneas. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Findling et al., 2015 (JAACAP)."
        },
        {
          "id": "valproat",
          "name": "Valproato",
          "sub": "Evidencia débil, alto riesgo en el embarazo",
          "text": "En 150 jóvenes de 10 a 17 años, el divalproex de liberación prolongada no redujo la manía más que el placebo a lo largo de 4 semanas. El riesgo de malformaciones y de problemas del desarrollo en el embarazo es alto: en Europa está contraindicado en niñas y mujeres con capacidad de gestación, salvo que se siga un programa de prevención del embarazo, y no se utiliza en el embarazo para el trastorno bipolar. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Wagner et al., 2009 (JAACAP); EMA, 2018."
        }
      ]
    }
  },
  "sizofreni": {
    "name": "Esquizofrenia",
    "short": "Esquizofrenia",
    "kitapta": [
      {},
      {
        "snippet": "la diana indirecta o directa de la mayoría de los fármacos utilizados en psiquiatría (estimulantes, antipsicóticos, incluso algunos antidepresivos)"
      }
    ],
    "summary": "Aumento de la dopamina estriatal, el hipocampo y la corteza prefrontal; síntomas positivos, negativos y cognitivos.",
    "mercek": {
      "devre": {
        "title": "Vías dopaminérgicas y el hipocampo",
        "text": "Las vías dopaminérgicas van del VTA (área tegmental ventral) al accumbens y al estriado asociativo (mesolímbica) y a la corteza prefrontal (mesocortical); la sustancia negra inerva el estriado dorsal. El hipocampo modula la actividad de las neuronas dopaminérgicas del VTA a través del accumbens y del pálido ventral.",
        "modes": {
          "saglikli": {
            "name": "Saludable",
            "text": "La dopamina señala la saliencia solo ante acontecimientos importantes e inesperados; la corteza prefrontal ejecuta la memoria de trabajo y la planificación con suficiente dopamina."
          },
          "psikoz": {
            "name": "Modelo de psicosis",
            "text": "La síntesis y la liberación de dopamina en el estriado están aumentadas (metaanálisis de 44 estudios, d = 0.79): los estímulos neutros adquieren una saliencia excesiva, y de esta experiencia surgen los delirios y las alucinaciones. Se propone que la hiperactividad del hipocampo impulsa a las neuronas dopaminérgicas; la dopamina que llega a la corteza prefrontal está reducida (síntomas negativos y cognitivos)."
          }
        },
        "src": "Dopamine: Howes et al., 2012; aberrant salience: Kapur, 2003. The hippocampus-dopamine model is theoretical."
      },
      "bulgular": {
        "text": "El color muestra la dirección y el tamaño de un hallazgo: cálido = mayor o más, frío = menor. Las diferencias son promedios de grupo; las imágenes no permiten diagnosticar a una persona.",
        "gruplar": [
          {
            "name": "Subcortical (ENIGMA)",
            "text": "ENIGMA-SZ (2,028 pacientes, 2,540 controles): hipocampo, amígdala, tálamo y accumbens menores; pálido y ventrículos laterales mayores. La diferencia del hipocampo se relaciona con la proporción de pacientes sin medicación.",
            "items": [
              {
                "dtxt": "d = −0.46",
                "txt": "Hipocampo menor (la mayor diferencia)."
              },
              {
                "dtxt": "d = −0.31",
                "txt": "Amígdala menor."
              },
              {
                "dtxt": "d = −0.31",
                "txt": "Tálamo menor."
              },
              {
                "dtxt": "d = −0.25",
                "txt": "Accumbens menor."
              },
              {
                "dtxt": "d = +0.21",
                "txt": "Pálido mayor."
              }
            ],
            "src": "van Erp et al., 2016 (Molecular Psychiatry)."
          },
          {
            "name": "Dopamina (PET)",
            "text": "En un metaanálisis de 44 estudios, la función dopaminérgica presináptica del estriado (síntesis y liberación) estaba claramente aumentada; el transportador de dopamina no estaba alterado, y el pequeño aumento de los receptores D2/3 no se observó en pacientes sin medicación.",
            "items": [
              {
                "dtxt": "d = 0.79",
                "txt": "Función dopaminérgica presináptica del estriado aumentada (más en el estriado asociativo)."
              }
            ],
            "src": "Howes et al., 2012 (Archives of General Psychiatry)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "olumlu",
          "name": "Alucinaciones y delirios",
          "sub": "Síntomas positivos",
          "devre": "Dopamina mesolímbica y saliencia aberrante",
          "text": "La liberación desregulada de dopamina confiere saliencia a estímulos neutros; los delirios se consideran un intento de explicar esta experiencia. El giro temporal superior también está activo en las alucinaciones auditivas. En relación con SEEKING, el libro menciona la «atribución excesiva de significado en la psicosis»."
        },
        {
          "id": "olumsuz",
          "name": "Síntomas negativos",
          "sub": "Reducción de la motivación y del afecto, retraimiento social",
          "devre": "Vía mesocortical y recompensa",
          "text": "La reducción de la dopamina que llega a la corteza prefrontal y los cambios en el circuito de recompensa se relacionan con la pérdida de motivación y de afecto; los antipsicóticos ayudan poco con estos síntomas."
        },
        {
          "id": "bilissel",
          "name": "Dificultades cognitivas",
          "sub": "Memoria de trabajo, atención, planificación",
          "devre": "Circuito prefrontal dorsolateral",
          "text": "La memoria de trabajo y la planificación dependen del bucle del CPFDL (corteza prefrontal dorsolateral) con el estriado y el tálamo; las dificultades cognitivas limitan claramente el funcionamiento cotidiano."
        }
      ],
      "belirtilerSrc": "Dopamina: Howes et al., 2012; Kapur, 2003; dopamina prefrontal: Slifstein et al., 2015 (20 pacientes). Alucinaciones: Jardri et al., 2011. Cognición y funcionamiento: Green, 1996. La correspondencia entre síntomas y circuitos es un marco teórico.",
      "tedavi": [
        {
          "id": "antipsikotik",
          "name": "Antipsicóticos",
          "sub": "Bloqueo de los receptores D2",
          "text": "Su acción común es el bloqueo de los receptores D2; reducen los síntomas positivos y tienen un efecto limitado sobre los síntomas negativos y cognitivos. Muchos antipsicóticos de segunda generación están aprobados para adolescentes; se monitorizan el peso y los efectos metabólicos. El libro describe la vía mesolímbica como la diana de los antipsicóticos.",
          "src": "Howes et al., 2012."
        },
        {
          "id": "klozapin",
          "name": "Clozapina",
          "sub": "Casos resistentes al tratamiento",
          "text": "La opción más eficaz en la esquizofrenia de inicio temprano resistente al tratamiento: en un ensayo doble ciego de 39 adolescentes, la respuesta fue del 66 % con clozapina y del 33 % con olanzapina. Se monitorizan el hemograma (neutropenia) y las convulsiones. La información de producto turca (KÜB) indica que no debe utilizarse en menores de 16 años.",
          "src": "Kumra et al., 2008 (Biological Psychiatry)."
        },
        {
          "id": "psikososyal",
          "name": "Intervención familiar y apoyo psicosocial",
          "sub": "Reducción de las recaídas",
          "text": "La intervención familiar reduce las recaídas en las personas con esquizofrenia; en la actualización de 2024 esta evidencia a corto plazo tiene una certeza baja, y el ingreso hospitalario mostró poca o ninguna diferencia en el plazo de un mes. La mayoría de los datos proceden de adultos. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Pharoah et al., 2010; Chien et al., 2024 (Cochrane)."
        },
        {
          "id": "lai",
          "name": "Antipsicóticos inyectables de acción prolongada",
          "sub": "Prevención de recaídas",
          "text": "En un metaanálisis de 137 estudios, el riesgo de hospitalización o de recaída es menor que con antipsicóticos orales (RR 0.88 en los ensayos aleatorizados). La calidad de los estudios observacionales limita la interpretación.",
          "src": "Kishimoto et al., 2021 (Lancet Psychiatry)."
        },
        {
          "id": "bdtp",
          "name": "TCC para la psicosis",
          "sub": "Apoyo añadido para los síntomas",
          "text": "En un metaanálisis de 34 estudios el efecto es pequeño (síntomas globales −0.33; positivos −0.25; negativos −0.13) y se reduce aún más cuando se controlan las fuentes de sesgo, especialmente el enmascaramiento. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Jauhar et al., 2014 (British Journal of Psychiatry)."
        },
        {
          "id": "erken",
          "name": "Servicios de intervención temprana",
          "sub": "Primer episodio y psicosis en fase temprana",
          "text": "En 10 ensayos aleatorizados (2,176 pacientes), la intervención temprana reduce la interrupción del tratamiento y la hospitalización en comparación con la atención habitual; la ventaja aparece hasta los 24 meses, excepto en la gravedad de los síntomas generales y depresivos a los 18–24 meses. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Correll et al., 2018 (JAMA Psychiatry)."
        },
        {
          "id": "ksanomelin",
          "name": "Xanomelina-trospio",
          "sub": "Diana muscarínica M1 y M4",
          "text": "Actúa sobre los receptores muscarínicos M1 y M4 sin bloquear los receptores D2; la FDA lo aprobó en 2024 solo para adultos. En un ensayo de 5 semanas la puntuación PANSS descendió 8.4 puntos más que con placebo.",
          "src": "Kaul et al., 2024 (JAMA Psychiatry); FDA, 2024."
        }
      ]
    }
  },
  "borderline": {
    "name": "Trastorno límite de la personalidad",
    "short": "Límite",
    "summary": "Circuito de regulación emocional: una amígdala hiperactiva y un CPFDL (corteza prefrontal dorsolateral) hipoactivo en respuesta a la emoción negativa; mentalización y dolor social.",
    "mercek": {
      "devre": {
        "title": "Circuito de regulación emocional",
        "text": "La amígdala y la ínsula aportan la intensidad de los estímulos emocionales, y la corteza cingulada anterior (CCA) aporta el dolor emocional; el CPFDL, la OFC (corteza orbitofrontal) y la corteza prefrontal medial regulan esta respuesta desde arriba. La unión temporoparietal y la corteza prefrontal medial sostienen la comprensión de la propia mente y de la de los demás (mentalización).",
        "modes": {
          "saglikli": {
            "name": "Saludable",
            "text": "Cuando se eleva un estímulo emocional, la corteza prefrontal lo regula; la capacidad de comprenderse a uno mismo y a los demás se mantiene bajo estrés."
          },
          "bpd": {
            "name": "Modelo límite",
            "text": "En respuesta a estímulos emocionales negativos, la amígdala izquierda reacciona en exceso y el CPFDL reacciona de menos (un acelerador fuerte y un freno débil de la emoción); la emoción se eleva rápidamente y se desvanece despacio. La mentalización se derrumba bajo una emoción intensa."
          }
        },
        "src": "Schulze et al., 2016 (multimodal meta-analysis; findings inconsistent across studies). The mentalizing model is theoretical."
      },
      "bulgular": {
        "text": "El color muestra la dirección de un hallazgo: cálido = más activo, frío = menos activo. Los hallazgos son inconsistentes entre los estudios; las imágenes no permiten diagnosticar a una persona.",
        "gruplar": [
          {
            "name": "Función (metaanálisis)",
            "text": "19 estudios funcionales (281 pacientes, 293 controles): ante estímulos emocionales negativos, la amígdala izquierda y la cingulada posterior están más activas, y el CPFDL de ambos lados está menos activo. El volumen de sustancia gris de la amígdala izquierda también es menor; la hiperactividad de la amígdala es más clara en las muestras sin medicación.",
            "items": [
              {
                "dtxt": "more active",
                "txt": "La amígdala izquierda reacciona en exceso; el volumen de sustancia gris es menor."
              },
              {
                "dtxt": "more active",
                "txt": "Cingulada posterior más activa."
              },
              {
                "dtxt": "less active",
                "txt": "Respuesta del CPFDL (corteza prefrontal dorsolateral) atenuada."
              }
            ],
            "src": "Schulze et al., 2016 (Biological Psychiatry)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "duygu",
          "name": "Inestabilidad emocional",
          "sub": "Emoción intensa y de cambio rápido",
          "devre": "Circuito de regulación emocional",
          "text": "La amígdala y la ínsula aportan una emoción intensa; cuando el freno del CPFDL sigue siendo débil, la emoción se eleva rápidamente y se desvanece despacio."
        },
        {
          "id": "terk",
          "name": "Miedo al abandono y relaciones interpersonales",
          "sub": "Sensibilidad al rechazo",
          "devre": "Circuito del dolor social",
          "text": "La exclusión social activa la corteza cingulada anterior (CCA) y la ínsula anterior en voluntarios sanos; se debate si se trata de la misma red que el dolor físico. El libro describe el dolor social y la separación a través del sistema PANIC/GRIEF."
        },
        {
          "id": "durtu",
          "name": "Impulsividad y autolesiones",
          "sub": "Conductas repentinas de riesgo",
          "devre": "Control de impulsos orbitofrontal",
          "text": "La OFC (corteza orbitofrontal) sopesa las recompensas y las consecuencias y frena los impulsos; cuando sigue siendo débil, una emoción intensa se convierte en una acción repentina."
        },
        {
          "id": "kimlik",
          "name": "Identidad y mentalización",
          "sub": "Comprenderse a uno mismo y a los demás",
          "devre": "Red de mentalización",
          "text": "La unión temporoparietal y la corteza prefrontal medial sostienen la comprensión de los estados mentales propios y ajenos; el tratamiento basado en la mentalización se dirige a esta capacidad."
        }
      ],
      "belirtilerSrc": "Emoción: Schulze et al., 2016. Exclusión social: Eisenberger et al., 2003; Cacioppo et al., 2013. Mentalización: Fonagy y Luyten, 2009. La correspondencia entre síntomas y circuitos es un marco teórico.",
      "tedavi": [
        {
          "id": "dbt",
          "name": "Terapia dialéctica conductual (DBT-A)",
          "sub": "Para adolescentes",
          "text": "En jóvenes de 12 a 18 años con autolesiones repetidas, una reducción clara de la ideación suicida y de la depresión; la ventaja en la frecuencia de autolesiones se mantuvo hasta el seguimiento de 3 años. Enseña habilidades de regulación emocional y de tolerancia al malestar, y se considera que actúa sobre las vías de regulación prefrontal. No se recomienda medicación para el trastorno límite en sí.",
          "src": "Mehlum et al., 2014; 2019. NICE CG78."
        },
        {
          "id": "mbt",
          "name": "Tratamiento basado en la mentalización (MBT)",
          "sub": "Refuerzo de la mentalización",
          "text": "Refuerza la comprensión de la mente propia y de la ajena, especialmente bajo intensidad emocional; después de la DBT es el tratamiento más estudiado en adultos, y los estudios en adolescentes están en curso.",
          "src": "Stoffers-Winterling et al., 2012; Storebø et al., 2020 (Cochrane)."
        },
        {
          "id": "ilacyeri",
          "name": "El lugar de la medicación",
          "sub": "Ninguna medicación para el trastorno en sí",
          "text": "Cochrane 2022: ningún medicamento parece eficaz para tratar específicamente la patología límite, y el registro de acontecimientos adversos es deficiente. Las decisiones de medicación para las condiciones concurrentes las valora el médico por separado. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Stoffers-Winterling et al., 2022 (Cochrane)."
        },
        {
          "id": "sema",
          "name": "Terapia de esquemas",
          "sub": "Ensayo en adultos",
          "text": "En un ensayo aleatorizado de 3 años con 88 pacientes, ambos tratamientos mejoraron los síntomas y la calidad de vida; la terapia de esquemas superó a la psicoterapia centrada en la transferencia, con menos abandonos. El ensayo es en adultos. En esta tarjeta no se dibuja ninguna vía cerebral.",
          "src": "Giesen-Bloo et al., 2006 (Archives of General Psychiatry)."
        }
      ]
    }
  },
  "tik": {
    "name": "Trastornos de tics y síndrome de Tourette",
    "short": "Tics",
    "kitapta": [
      {
        "snippet": "tics y urgencias premonitorias (capítulo 9)"
      },
      {}
    ],
    "summary": "Bucle sensitivomotor corticoestriatotalamocortical; la urgencia premonitoria previa a los tics se relaciona con la ínsula y el área motora suplementaria.",
    "mercek": {
      "devre": {
        "title": "Bucle sensitivomotor y urgencia premonitoria",
        "text": "El área motora suplementaria y la corteza motora se conectan con el putamen, el putamen con el tálamo a través del GPi, y el tálamo de nuevo con la corteza; este bucle selecciona programas motores y ejecuta hábitos. La sustancia negra modula el bucle con dopamina. La ínsula aporta la urgencia desagradable que precede al tic (urgencia premonitoria); esta vía se dibuja en Síntomas → Urgencia premonitoria.",
        "modes": {
          "tipik": {
            "name": "Típico",
            "text": "El bucle selecciona el movimiento pretendido y retiene los demás; la señal de urgencia es débil y los movimientos son propositivos."
          },
          "tik": {
            "name": "Modelo de tic",
            "text": "Los frenos del bucle no son lo bastante selectivos: los programas motores no deseados se liberan de vez en cuando. La ínsula y la corteza cingulada anterior (CCA) aportan la urgencia premonitoria (Síntomas); el tic alivia brevemente la urgencia y refuerza el bucle. Que los bloqueantes de dopamina reduzcan los tics apunta a un papel de la dopamina."
          }
        },
        "src": "Sensorimotor loop: Alexander et al., 1986. Premonitory urge: Bohlhalter et al., 2006 (10 adults). The model is a theory."
      },
      "bulgular": {
        "text": "El color muestra la dirección de un hallazgo. Los estudios son pequeños; las imágenes no aportan diagnóstico ni pronóstico para una persona.",
        "gruplar": [
          {
            "name": "Estructura",
            "text": "Los niños (menores de 14 años) con un caudado menor en RM tenían síntomas de tics y de TOC más graves unos 7.5 años después (43 niños). El volumen del caudado no se relacionó con la gravedad en el momento de la exploración.",
            "items": [
              {
                "dtxt": "inverse link",
                "txt": "Caudado menor, síntomas más graves al inicio de la edad adulta."
              }
            ],
            "src": "Bloch et al., 2005 (Neurology)."
          },
          {
            "name": "Función (antes de los tics)",
            "text": "Justo antes de un tic se activan la corteza cingulada anterior, la ínsula y el área motora suplementaria; durante el tic, la corteza sensitivomotora y el cerebelo (10 adultos, fMRI de eventos).",
            "items": [
              {
                "dtxt": "before tic",
                "txt": "Ínsula: relacionada con la urgencia premonitoria."
              },
              {
                "dtxt": "before tic",
                "txt": "Corteza cingulada anterior: activa antes del tic."
              },
              {
                "dtxt": "before tic",
                "txt": "Área motora suplementaria: activa antes del tic."
              },
              {
                "dtxt": "during tic",
                "txt": "Corteza motora: activa durante el tic."
              }
            ],
            "src": "Bohlhalter et al., 2006 (Brain)."
          }
        ]
      },
      "belirtiler": [
        {
          "id": "motor",
          "name": "Tics motores y vocales",
          "sub": "Parpadeo, sacudidas de cabeza, carraspeo",
          "devre": "Bucle sensitivomotor",
          "text": "El bucle que atraviesa el área motora suplementaria, el putamen, el GPi y el tálamo selecciona programas motores; cuando sus frenos resultan insuficientes, los programas no deseados aparecen como tics."
        },
        {
          "id": "durtu",
          "name": "Urgencia premonitoria",
          "sub": "Sensación desagradable antes del tic",
          "devre": "Ínsula y corteza cingulada anterior",
          "text": "La ínsula y la corteza cingulada anterior (CCA) aportan una sensación de malestar procedente del interior del cuerpo; el tic la alivia durante un breve periodo. El libro trata los «tics y urgencias premonitorias» en el apartado de los ganglios basales."
        },
        {
          "id": "bastirma",
          "name": "Supresión de los tics",
          "sub": "Retenerlos durante un tiempo",
          "devre": "Inhibición prefrontal",
          "text": "Los tics pueden suprimirse durante un breve periodo; la actividad de los ganglios basales y del tálamo cambia durante la supresión, y una vía va de la corteza frontal inferior al núcleo subtalámico. La CBIT utiliza esta capacidad con una respuesta competitiva."
        },
        {
          "id": "eslik",
          "name": "Comorbilidad con TDAH y TOC",
          "sub": "Condiciones que a menudo coexisten",
          "devre": "Bucles corticostriatales adyacentes",
          "text": "El TDAH y el TOC son frecuentes en los trastornos de tics; estas condiciones comparten bucles adyacentes del mismo sistema corticostriatal."
        }
      ],
      "belirtilerSrc": "Red pretíc: Bohlhalter et al., 2006. Supresión: Peterson et al., 1998; vía frontal inferior-subtalámica: Aron et al., 2007. Condiciones concurrentes: Hirschtritt et al., 2015. La correspondencia entre síntomas y circuitos es un marco teórico.",
      "tedavi": [
        {
          "id": "cbit",
          "name": "Intervención conductual integral para los tics (CBIT)",
          "sub": "Primera línea",
          "text": "En 126 niños (de 9 a 17 años), la mejoría clara con CBIT fue del 52.5 % frente a alrededor del 18.5 % con terapia de apoyo; el efecto es similar al de los ensayos con medicación. Concienciación sobre los tics y entrenamiento en respuesta competitiva, con implicación de los padres.",
          "src": "Piacentini et al., 2010 (JAMA)."
        },
        {
          "id": "aripiprazol",
          "name": "Aripiprazol y antipsicóticos",
          "sub": "Modulan la señalización dopaminérgica",
          "text": "El aripiprazol está aprobado por la FDA para el síndrome de Tourette en edades de 6 a 18 años; reduce los tics modulando la señalización dopaminérgica. Se monitorizan el peso y los efectos metabólicos.",
          "src": "FDA label."
        },
        {
          "id": "alfa2",
          "name": "Guanfacina y clonidina",
          "sub": "Agonistas α2",
          "text": "En un metaanálisis de ensayos aleatorizados el efecto sobre los tics fue menor que el de los antipsicóticos; fue de magnitud media a grande en los ensayos con personas con tics y TDAH, y pequeño y no significativo en los ensayos que excluían el TDAH.",
          "src": "Weisman et al., 2013 (Neuroscience and Biobehavioral Reviews)."
        },
        {
          "id": "dbs",
          "name": "Estimulación cerebral profunda (ECP) del tálamo",
          "sub": "Casos adultos graves y resistentes",
          "text": "Se dirige al complejo centromediano-parafascicular del tálamo o al GPi; en un registro internacional, la gravedad de los tics disminuyó al año, mientras que alrededor de un tercio de los pacientes notificó un acontecimiento adverso; la técnica quirúrgica y los criterios de inclusión variaron. No se utiliza en niños.",
          "src": "Martinez-Ramirez et al., 2018 (JAMA Neurology). The electrode path is schematic."
        }
      ]
    }
  }
};

  function merge(dst, src) {
    Object.keys(src).forEach((k) => {
      const v = src[k];
      if (Array.isArray(v) && Array.isArray(dst[k]) && v.some((x) => x && typeof x === 'object')) {
        v.forEach((x, i) => { const t = x.id ? dst[k].find((y) => y && y.id === x.id) : dst[k][i]; if (t) merge(t, x); });
      } else if (v && typeof v === 'object' && !Array.isArray(v) && dst[k] && typeof dst[k] === 'object') merge(dst[k], v);
      else dst[k] = Array.isArray(v) ? v.slice() : v;
    });
  }
  (window.TANILAR || []).forEach((d) => { if (EN[d.id]) merge(d, EN[d.id]); });
})();
