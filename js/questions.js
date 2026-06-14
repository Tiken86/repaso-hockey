/* Banco de preguntas — Deportes Colectivos II · Hockey hierba
   Sesiones 1-5 + exámenes reales. Enfoque comprensión/aplicación.
   Sin historia, fechas, pesos, hockey sala ni parámetros WIMU. 5 opciones por pregunta. */

const TEMAS = [
  {
    "id": "t1",
    "titulo": "Iniciación y Lógica del Juego",
    "icono": "🏑",
    "desc": "Naturaleza del juego, categorías de iniciación y modelo de enseñanza.",
    "estudio": [
      "Hockey hierba = deporte de equipo, de <b>cooperación-oposición</b>, en espacio compartido con alta incertidumbre y alta complejidad técnica por el uso del implemento (stick).",
      "Categorías de iniciación por formato: Pre-benjamín <b>3x3</b>, Benjamín <b>5x5</b>, Alevín <b>7x7</b>, Infantil <b>9x9</b>, Cadete/Senior <b>11x11</b>.",
      "Etapas del modelo de enseñanza: <b>Aprendizaje inicial</b> (6-11: pre-benjamín, benjamín, alevín) → <b>Aprendizaje avanzado</b> (12-15: infantil, cadete) → <b>Rendimiento</b> (16+: juvenil, senior).",
      "En Benjamín y Pre-benjamín se contabilizan <b>partes ganadas</b> (1 punto por parte), no los goles. En Pre-benjamín no se hace acta oficial ni se publican resultados.",
      "Por superficie y uso del stick, el hockey requiere adaptaciones técnicas y tácticas; es un deporte de interacción en espacio compartido con alta incertidumbre."
    ],
    "preguntas": [
      {
        "q": "Un entrenador define el hockey como un deporte en el que compañeros colaboran entre sí mientras se enfrentan a rivales en el mismo espacio. ¿A qué categoría estructural corresponde?",
        "opts": [
          "Oposición pura",
          "Cooperación pura",
          "Cooperación-oposición",
          "Adversario con red de separación",
          "Individual de precisión"
        ],
        "a": 2,
        "exp": "Colaborar con compañeros y oponerse a rivales en espacio compartido define un deporte de cooperación-oposición."
      },
      {
        "q": "¿Cuál de estos rasgos NO es propio de la lógica interna del hockey hierba?",
        "opts": [
          "Espacio compartido con los rivales",
          "Alta incertidumbre en las acciones",
          "Interacción de cooperación-oposición",
          "Espacios separados por una red entre equipos",
          "Alta complejidad técnica por el implemento"
        ],
        "a": 3,
        "exp": "El hockey se juega en espacio compartido, no separado por red; lo demás sí lo caracteriza."
      },
      {
        "q": "Dos deportes colectivos tienen el mismo número de jugadores y campo similar, pero uno exige manejar un stick. ¿Qué consecuencia tiene esto principalmente en el hockey?",
        "opts": [
          "Reduce el número de reglas",
          "Eleva la complejidad técnica del juego",
          "Disminuye la incertidumbre táctica",
          "Obliga a jugar en espacio separado",
          "Elimina la necesidad de cooperación"
        ],
        "a": 1,
        "exp": "El uso del implemento (stick) añade dificultad técnica respecto a deportes donde se maneja el móvil con el cuerpo."
      },
      {
        "q": "Un niño de 6 años se inicia en hockey. ¿En qué formato de juego le corresponde competir?",
        "opts": [
          "3x3",
          "5x5",
          "7x7",
          "9x9",
          "11x11"
        ],
        "a": 0,
        "exp": "Pre-benjamín (6-7 años) juega 3x3."
      },
      {
        "q": "Ordenadas de menor a mayor edad, ¿qué secuencia de formatos siguen las categorías de iniciación?",
        "opts": [
          "5x5 → 3x3 → 7x7 → 9x9 → 11x11",
          "3x3 → 5x5 → 7x7 → 9x9 → 11x11",
          "3x3 → 7x7 → 5x5 → 9x9 → 11x11",
          "3x3 → 5x5 → 9x9 → 7x7 → 11x11",
          "5x5 → 7x7 → 9x9 → 3x3 → 11x11"
        ],
        "a": 1,
        "exp": "Pre-benjamín 3x3, benjamín 5x5, alevín 7x7, infantil 9x9, cadete/senior 11x11."
      },
      {
        "q": "La categoría Alevín se juega en formato…",
        "opts": [
          "3x3",
          "5x5",
          "6x6",
          "7x7",
          "9x9"
        ],
        "a": 3,
        "exp": "Alevín (10-11 años) juega 7x7 (6+1)."
      },
      {
        "q": "La categoría Infantil se juega en formato…",
        "opts": [
          "5x5",
          "7x7",
          "9x9",
          "11x11",
          "6x6"
        ],
        "a": 2,
        "exp": "Infantil juega 9x9 (en 3/4 de campo)."
      },
      {
        "q": "¿Cuál es el primer formato que coincide con el reglamentario oficial completo?",
        "opts": [
          "7x7 en alevín",
          "9x9 en infantil",
          "11x11 en cadete y senior",
          "5x5 en benjamín",
          "3x3 en pre-benjamín"
        ],
        "a": 2,
        "exp": "El 11x11 es el formato oficial; aparece en cadete y senior."
      },
      {
        "q": "Un jugador pasa de jugar 7x7 a jugar 9x9 al cambiar de categoría. ¿Qué transición ha hecho?",
        "opts": [
          "De benjamín a alevín",
          "De alevín a infantil",
          "De infantil a cadete",
          "De pre-benjamín a benjamín",
          "De cadete a senior"
        ],
        "a": 1,
        "exp": "Alevín juega 7x7 e infantil 9x9; es el paso de alevín a infantil."
      },
      {
        "q": "Según el modelo de enseñanza, ¿qué categorías integran la etapa de Aprendizaje inicial (6-11 años)?",
        "opts": [
          "Infantil, cadete y juvenil",
          "Pre-benjamín, benjamín y alevín",
          "Benjamín, alevín e infantil",
          "Pre-benjamín, benjamín y senior",
          "Alevín, infantil y cadete"
        ],
        "a": 1,
        "exp": "Aprendizaje inicial (6-11): pre-benjamín, benjamín y alevín."
      },
      {
        "q": "Un técnico planifica para deportistas de 12 a 15 años. ¿En qué etapa del modelo de enseñanza está trabajando?",
        "opts": [
          "Aprendizaje inicial",
          "Aprendizaje avanzado",
          "Rendimiento",
          "Tecnificación previa",
          "Alto rendimiento"
        ],
        "a": 1,
        "exp": "El aprendizaje avanzado (12-15 años) comprende infantil y cadete."
      },
      {
        "q": "Las categorías juvenil y senior, a partir de los 16 años, pertenecen a la etapa de…",
        "opts": [
          "Aprendizaje inicial",
          "Aprendizaje avanzado",
          "Rendimiento",
          "Iniciación básica",
          "Tecnificación"
        ],
        "a": 2,
        "exp": "La etapa de Rendimiento corresponde a 16 años en adelante (juvenil y senior)."
      },
      {
        "q": "¿Por qué en pre-benjamín y benjamín se contabilizan partes ganadas y no goles?",
        "opts": [
          "Porque no existe portería en esas edades",
          "Para priorizar la participación y restar peso al marcador global",
          "Porque está prohibido marcar gol",
          "Porque el árbitro no puede contar goles",
          "Para favorecer al equipo con más jugadores"
        ],
        "a": 1,
        "exp": "Contar partes ganadas (1 punto por parte) reduce la importancia del resultado total y orienta la iniciación a la participación."
      },
      {
        "q": "En un partido benjamín un equipo encaja muchos goles en la primera parte pero gana las otras tres. ¿Cómo se resuelve el resultado?",
        "opts": [
          "Pierde por goles totales encajados",
          "Gana por haber ganado más partes",
          "Se decide por número de córners",
          "Empate, porque no se cuentan partes",
          "Gana quien más posesión tuvo"
        ],
        "a": 1,
        "exp": "En benjamín se contabilizan partes ganadas (1 punto por parte), no el cómputo total de goles."
      },
      {
        "q": "¿Qué caracteriza a la categoría Pre-benjamín respecto al resultado y al acta?",
        "opts": [
          "Se publican los goles totales en una clasificación",
          "No se hace acta oficial ni se publican resultados",
          "Se cuentan solo los penaltis convertidos",
          "Gana quien más córners ejecute",
          "Se juega a un único gol decisivo"
        ],
        "a": 1,
        "exp": "En pre-benjamín no se hace acta oficial ni se contabilizan o publican resultados."
      },
      {
        "q": "En pre-benjamín no hay portero. ¿Qué solución estructural se adopta para que exista finalización?",
        "opts": [
          "Dos porterías oficiales con red",
          "Cuatro porterías pequeñas de 2 m, dos por equipo",
          "Una sola portería central compartida",
          "Conos sin portería definida",
          "Porterías reglamentarias de 11x11"
        ],
        "a": 1,
        "exp": "Al no haber portero, se usan 4 porterías pequeñas de 2 m (dos por equipo)."
      },
      {
        "q": "En pre-benjamín, ¿cómo se delimitan las áreas?",
        "opts": [
          "Con áreas reglamentarias",
          "Con una línea recta a 10 m del fondo",
          "Con una línea recta a 6 m del fondo",
          "Con un semicírculo de 6 m",
          "No existen áreas delimitadas"
        ],
        "a": 2,
        "exp": "En pre-benjamín las áreas son una línea recta a 6 m del fondo."
      },
      {
        "q": "¿Qué limitación técnica define al pre-benjamín y lo distingue del benjamín?",
        "opts": [
          "No se permite ni golpeo derecho ni de revés",
          "Solo se prohíbe el golpeo de revés",
          "No hay ninguna limitación técnica",
          "Solo se prohíbe la conducción",
          "Solo se prohíbe el pase aéreo"
        ],
        "a": 0,
        "exp": "En pre-benjamín no se permite ni el golpeo derecho ni el de revés; en benjamín ya se permite el derecho."
      },
      {
        "q": "¿Por qué en pre-benjamín el penalti córner se juega 1vs1 contra un defensa y no contra un portero?",
        "opts": [
          "Porque el reglamento lo prohíbe contra portero",
          "Porque en esa categoría no existe la figura del portero",
          "Porque hay cuatro porterías oficiales",
          "Porque el área es demasiado grande",
          "Porque solo juegan tres jugadores por equipo"
        ],
        "a": 1,
        "exp": "Al no haber portero en pre-benjamín, el penalti córner se resuelve 1vs1 contra un defensa."
      },
      {
        "q": "¿Qué categoría introduce por primera vez la figura del portero obligatorio?",
        "opts": [
          "Pre-benjamín",
          "Benjamín",
          "Alevín",
          "Infantil",
          "Cadete"
        ],
        "a": 1,
        "exp": "En benjamín el portero pasa a ser obligatorio, a diferencia del pre-benjamín."
      },
      {
        "q": "En benjamín, con portería oficial, ¿cuándo se considera válido el gol?",
        "opts": [
          "En cualquier zona de la portería",
          "Solo cuando entra en la tabla",
          "Solo a ras de suelo",
          "Solo por encima del larguero",
          "Solo en penalti córner"
        ],
        "a": 1,
        "exp": "En benjamín se usa portería oficial pero el gol solo es válido si entra por la tabla."
      },
      {
        "q": "¿Qué única limitación técnica conserva el benjamín?",
        "opts": [
          "El golpeo derecho",
          "El golpeo de revés",
          "La conducción de balón",
          "El pase corto",
          "Ninguna, no hay limitaciones"
        ],
        "a": 1,
        "exp": "En benjamín la única limitación es el golpeo de revés; el derecho ya se permite."
      },
      {
        "q": "Como en benjamín ya existe portero obligatorio, el penalti córner se ejecuta…",
        "opts": [
          "1vs1 contra un defensa",
          "1vs1 contra el portero",
          "Con 3 defensas más portero",
          "De forma reglamentaria con 4 defensas",
          "No existe penalti córner"
        ],
        "a": 1,
        "exp": "En benjamín, al haber portero, el penalti córner se juega 1vs1 contra el portero."
      },
      {
        "q": "¿En qué categoría aparecen por primera vez el córner y el stroke?",
        "opts": [
          "Benjamín",
          "Alevín",
          "Infantil",
          "Cadete",
          "Pre-benjamín"
        ],
        "a": 1,
        "exp": "Tanto el córner (sacado a altura de medio campo) como el stroke se introducen en alevín."
      },
      {
        "q": "Un equipo alevín obtiene un córner. ¿Desde dónde se saca en esta categoría?",
        "opts": [
          "Desde la línea de 22",
          "A altura de medio campo",
          "Desde el fondo, junto a la portería",
          "Desde el punto de penalti",
          "Desde la banda lateral"
        ],
        "a": 1,
        "exp": "En alevín el córner se saca a altura de medio campo."
      },
      {
        "q": "Respecto a las limitaciones técnicas, ¿qué supone el paso a la categoría alevín?",
        "opts": [
          "Se prohíbe el golpeo de revés",
          "Se prohíben derecho y revés",
          "Desaparecen las limitaciones técnicas",
          "Se prohíbe la conducción",
          "Se prohíbe el pase aéreo"
        ],
        "a": 2,
        "exp": "En alevín ya no hay limitaciones técnicas: se permite todo el repertorio."
      },
      {
        "q": "En alevín el penalti córner evoluciona respecto a benjamín. ¿Cómo se ejecuta?",
        "opts": [
          "1vs1 contra el portero",
          "1vs1 contra un defensa",
          "Con 3 defensas más el portero",
          "Con 4 defensas más el portero",
          "No existe penalti córner"
        ],
        "a": 2,
        "exp": "En alevín el penalti córner se juega con 3 defensas más el portero."
      },
      {
        "q": "Comparando alevín con las categorías inferiores, ¿qué cambia en la distancia de falta?",
        "opts": [
          "Se reduce de 5 m a 3 m",
          "Aumenta de 3 m a 5 m",
          "Se mantiene en 3 m",
          "Aumenta de 5 m a 10 m",
          "Desaparece la distancia mínima"
        ],
        "a": 1,
        "exp": "En alevín la distancia en falta pasa a 5 m, frente a los 3 m de categorías inferiores."
      },
      {
        "q": "En alevín se puede aplicar una sanción personal, pero ¿qué ocurre con el número de jugadores en pista?",
        "opts": [
          "Se reduce un jugador, como en infantil",
          "Se mantiene el número de jugadores",
          "Se expulsa al jugador de forma definitiva",
          "Se añade un jugador al rival",
          "Se muestra tarjeta verde temporal"
        ],
        "a": 1,
        "exp": "En alevín aún no hay tarjetas; puede haber sanción personal, pero se mantiene el número de jugadores."
      },
      {
        "q": "¿Qué categoría introduce por primera vez las tarjetas y el uso de 2 árbitros?",
        "opts": [
          "Alevín",
          "Benjamín",
          "Infantil",
          "Pre-benjamín",
          "Cadete"
        ],
        "a": 2,
        "exp": "En infantil aparecen las tarjetas y se pasa a 2 árbitros; hasta alevín hay 1 solo árbitro y no hay tarjetas."
      },
      {
        "q": "¿Cuántos árbitros dirigen los partidos en las categorías hasta alevín incluido?",
        "opts": [
          "1 árbitro",
          "2 árbitros",
          "3 árbitros",
          "Ninguno, autoarbitraje",
          "Depende del torneo"
        ],
        "a": 0,
        "exp": "Hasta alevín hay 1 solo árbitro; desde infantil se utilizan 2."
      },
      {
        "q": "En infantil, ¿desde dónde se saca el córner?",
        "opts": [
          "A altura de medio campo",
          "Desde la línea de 22",
          "Desde el fondo",
          "Desde el punto de penalti",
          "Desde la banda"
        ],
        "a": 1,
        "exp": "En infantil el córner ya se saca desde la línea de 22."
      },
      {
        "q": "¿En qué categoría el penalti córner pasa a ser reglamentario, con 4 defensas más portero?",
        "opts": [
          "Alevín",
          "Benjamín",
          "Infantil",
          "Pre-benjamín",
          "Benjamín y alevín por igual"
        ],
        "a": 2,
        "exp": "En infantil el penalti córner es ya reglamentario: 4 defensas más el portero."
      },
      {
        "q": "Ordena la evolución del penalti córner conforme suben las categorías:",
        "opts": [
          "Reglamentario → 3 defensas+portero → 1vs1",
          "1vs1 contra defensa → 1vs1 contra portero → 3 defensas+portero → reglamentario",
          "1vs1 contra portero → 1vs1 contra defensa → reglamentario",
          "3 defensas+portero → 1vs1 → reglamentario",
          "Reglamentario en todas las categorías"
        ],
        "a": 1,
        "exp": "Pre-benjamín 1vs1 contra defensa, benjamín 1vs1 contra portero, alevín 3 defensas+portero, infantil reglamentario."
      },
      {
        "q": "Un equipo juega 5x5 ocupando solo un cuarto del campo. ¿En qué categoría está?",
        "opts": [
          "Pre-benjamín",
          "Benjamín",
          "Alevín",
          "Infantil",
          "Cadete"
        ],
        "a": 1,
        "exp": "Benjamín juega 5x5 en 1/4 de campo."
      },
      {
        "q": "¿Qué fracción de campo utiliza el pre-benjamín?",
        "opts": [
          "1/8 de campo",
          "1/4 de campo",
          "1/2 campo",
          "3/4 de campo",
          "Campo completo"
        ],
        "a": 0,
        "exp": "Pre-benjamín juega 3v3 en 1/8 de campo."
      },
      {
        "q": "¿Qué fracción de campo corresponde al alevín?",
        "opts": [
          "1/8 de campo",
          "1/4 de campo",
          "1/2 campo",
          "3/4 de campo",
          "Campo completo"
        ],
        "a": 2,
        "exp": "Alevín juega 7v7 en 1/2 campo."
      },
      {
        "q": "El infantil juega 9v9. ¿Sobre qué fracción de campo lo hace?",
        "opts": [
          "1/2 campo",
          "3/4 de campo",
          "Campo completo",
          "1/4 de campo",
          "1/8 de campo"
        ],
        "a": 1,
        "exp": "Infantil juega en 3/4 de campo."
      },
      {
        "q": "Relacionando formato y espacio, ¿qué progresión de campo siguen pre-benjamín, benjamín, alevín e infantil?",
        "opts": [
          "1/4 → 1/8 → 1/2 → 3/4",
          "1/8 → 1/4 → 1/2 → 3/4",
          "1/8 → 1/2 → 1/4 → 3/4",
          "1/4 → 1/2 → 3/4 → completo",
          "1/8 → 1/4 → 3/4 → completo"
        ],
        "a": 1,
        "exp": "Pre-benjamín 1/8, benjamín 1/4, alevín 1/2 y infantil 3/4 de campo."
      },
      {
        "q": "¿Qué categoría es la primera en jugar sobre el campo completo (11x11)?",
        "opts": [
          "Infantil",
          "Alevín",
          "Cadete",
          "Benjamín",
          "Pre-benjamín"
        ],
        "a": 2,
        "exp": "El campo completo en 11x11 aparece en cadete (y senior); infantil usa 3/4."
      },
      {
        "q": "Un partido se disputa en 4x15 min. ¿A qué categoría de iniciación corresponde esa duración?",
        "opts": [
          "Pre-benjamín",
          "Benjamín",
          "Alevín",
          "Infantil",
          "Cadete inicial"
        ],
        "a": 3,
        "exp": "Infantil juega 4x15 min, coincidiendo con la duración del juego senior."
      },
      {
        "q": "¿Qué principio metodológico justifica que las reglas (córner, stroke, tarjetas, portero) se vayan incorporando categoría a categoría?",
        "opts": [
          "Igualar todas las edades con el reglamento oficial",
          "Adaptar progresivamente la complejidad a la etapa de aprendizaje",
          "Reducir el número de partidos por temporada",
          "Premiar al equipo con más jugadores",
          "Eliminar la figura del árbitro en la base"
        ],
        "a": 1,
        "exp": "La progresión reglamentaria adapta gradualmente la complejidad táctica y técnica al nivel madurativo de cada etapa."
      },
      {
        "q": "Un mismo elemento técnico (golpeo) está prohibido en pre-benjamín, parcialmente permitido en benjamín y libre en alevín. ¿Qué refleja esta secuencia?",
        "opts": [
          "Una restricción arbitraria sin criterio",
          "Una progresión técnica adaptada a la edad",
          "Una norma exclusiva del campo reducido",
          "Una consecuencia de jugar sin portero",
          "Una diferencia entre formatos pares e impares"
        ],
        "a": 1,
        "exp": "El golpeo se libera progresivamente (nada en pre-benjamín, solo derecho en benjamín, todo en alevín) siguiendo la lógica de progresión técnica."
      }
    ]
  },
  {
    "id": "t2",
    "titulo": "Técnica en Ataque",
    "icono": "⚡",
    "desc": "Empuñaduras, posición, conducción, pases, recepción y definición.",
    "estudio": [
      "<b>5 puntos para la corrección del gesto técnico</b>: empuñadura, posición del cuerpo, posición del stick, posición de la bola y fluidez del gesto. (La 'utilidad' NO es uno de ellos.)",
      "Empuñaduras: <b>aplauso</b> (V del pulgar-índice con el canto interior), <b>reloj</b> (V de la mano izq. sobre la parte curva) y <b>sartén</b> (V con la parte plana). Las intermedias combinan las 3.",
      "Posición básica sin bola: espalda recta, rodillas semiflexionadas, <b>mano izquierda arriba</b> y derecha abajo cerca de la mitad del stick, stick separado del cuerpo.",
      "Conducción de <b>control</b> (manos separadas, CDG bajo, bola en contacto) · <b>velocidad</b> (bola adelantada, CDG alto) · <b>protección/escape</b> (1º el cuerpo protege la bola, 2º escape al espacio) · <b>3D</b> (empuñadura aplauso+sartén, bola aérea).",
      "Pases manos separadas: <b>push</b> (stick por el suelo) y push arrastrado (permite amagar). Manos juntas: <b>látigo/barrida</b> (CDG muy bajo, lunge), <b>golpeo derecho</b> y <b>golpeo revés/'coreano'</b> (toma sartén).",
      "El golpeo tiene <b>3 fases</b>: el palo dibuja un péndulo hacia atrás → contacto perpendicular al suelo → el peso del cuerpo avanza. Error común: separar las manos (no permite muñequear).",
      "Recepción: <b>parar ≠ recibir</b>. El brazo izquierdo empuja adelante y la <b>mano derecha amortigua</b>. Abiertas/ofensivas y cerradas/defensivas (contrabola recto o media luna).",
      "Definición: <b>desvío</b> (la trayectoria iba fuera) y <b>pinche</b> (iba a puerta, se desvía en 3D). La <b>zona de 8 metros</b> es donde se crean más goles. La técnica de tiro se elige según la <b>zona del área y el tiempo disponible</b>.",
      "El penalti <b>stroke</b> se ejecuta con <b>push o flick sin arrastre</b>; NO con golpeo."
    ],
    "preguntas": [
      {
        "q": "Un entrenador corrige el gesto técnico de un jugador y revisa 5 puntos. ¿Cuál de estos NO forma parte de esa metodología?",
        "opts": [
          "Posición del stick",
          "Empuñadura",
          "Utilidad del gesto",
          "Posición de la bola",
          "Fluidez del gesto"
        ],
        "a": 2,
        "exp": "Los 5 puntos son empuñadura, posición del cuerpo, posición del stick, posición de la bola y fluidez. La 'utilidad' no es un punto de corrección."
      },
      {
        "q": "Vas a colocar a un jugador en la postura básica sin bola. ¿Cómo deben ir las manos?",
        "opts": [
          "Izquierda arriba y derecha abajo, cerca de la mitad del stick",
          "Ambas juntas en la parte superior del mango",
          "Izquierda abajo y derecha arriba",
          "Una sola mano para más control",
          "Las dos en el centro del stick"
        ],
        "a": 0,
        "exp": "Mano izquierda arriba (manda) y derecha abajo cerca de la mitad del stick, con espalda recta y rodillas semiflexionadas."
      },
      {
        "q": "Quieres ejecutar un gesto de cara plana del palo en contacto con la bola. ¿Qué empuñadura alinea la 'V' del pulgar-índice con el canto interior del stick?",
        "opts": [
          "Reloj",
          "Sartén",
          "Aplauso",
          "Intermedia reloj-sartén",
          "Sartén invertida"
        ],
        "a": 2,
        "exp": "En la empuñadura aplauso la 'V' del pulgar e índice se alinea con el canto interior del stick."
      },
      {
        "q": "Un jugador sitúa la 'V' de la mano izquierda sobre la parte curva del palo. ¿Qué empuñadura está usando?",
        "opts": [
          "Aplauso",
          "Sartén",
          "Intermedia aplauso-sartén",
          "Reloj",
          "Aplauso girada"
        ],
        "a": 3,
        "exp": "La empuñadura reloj coloca la 'V' de la mano izquierda sobre la parte curva del palo."
      },
      {
        "q": "Para manejar la bola con la cara plana del stick por el lado del revés, la empuñadura sartén alinea la 'V' con…",
        "opts": [
          "El canto interior",
          "La parte curva",
          "La parte plana del palo",
          "El extremo del mango",
          "La cabeza del stick"
        ],
        "a": 2,
        "exp": "Sartén: la 'V' del pulgar e índice se alinea con la parte plana del palo."
      },
      {
        "q": "Las empuñaduras intermedias se caracterizan por…",
        "opts": [
          "Ser exclusivas del juego de revés",
          "Combinar las tres empuñaduras (aplauso, reloj y sartén)",
          "Ser un agarre fijo a dos manos juntas",
          "Prescindir del contacto del pulgar",
          "Usar solo la mano derecha"
        ],
        "a": 1,
        "exp": "Las intermedias son combinaciones de las tres empuñaduras básicas según el gesto."
      },
      {
        "q": "Quieres conducir muy pegado para superar a un defensor en un espacio reducido, sin perder la bola. ¿Qué conducción eliges?",
        "opts": [
          "Velocidad",
          "Control",
          "3D",
          "Protección con escape",
          "Conducción a una mano"
        ],
        "a": 1,
        "exp": "La conducción de control (manos separadas, CDG bajo, bola pegada al stick) es la indicada en espacios reducidos."
      },
      {
        "q": "Tienes espacio libre por delante y quieres avanzar lo más rápido posible con la bola. ¿Qué conducción es la adecuada?",
        "opts": [
          "Control",
          "Protección",
          "Velocidad, con la bola adelantada y CDG alto",
          "3D aérea",
          "Conducción afeitando el suelo"
        ],
        "a": 2,
        "exp": "La conducción de velocidad adelanta la bola y eleva el CDG para correr; se usa con espacio libre."
      },
      {
        "q": "Un defensor te presiona de cerca por un costado. ¿Qué conducción te conviene para no perder la bola?",
        "opts": [
          "Velocidad con bola muy adelantada",
          "Protección/escape: primero el cuerpo protege, luego escapas al espacio",
          "3D elevando la bola",
          "Control sin uso del cuerpo",
          "Conducción a una mano"
        ],
        "a": 1,
        "exp": "En protección/escape la fase 1 es interponer el cuerpo entre defensor y bola; la fase 2, escapar al espacio libre."
      },
      {
        "q": "En la conducción de protección/escape, ¿qué ocurre en la primera fase?",
        "opts": [
          "Se adelanta la bola para acelerar",
          "El cuerpo se interpone protegiendo la bola del defensor",
          "Se eleva la bola en 3D",
          "Se ejecuta un pase inmediato",
          "Se golpea la bola al espacio"
        ],
        "a": 1,
        "exp": "Fase 1: el cuerpo protege la bola. Fase 2: adelantar la bola y escapar al espacio."
      },
      {
        "q": "Para manejar la bola por el aire (en 3D), ¿qué combinación de empuñaduras se utiliza?",
        "opts": [
          "Reloj + sartén",
          "Aplauso + sartén",
          "Solo reloj",
          "Solo aplauso",
          "Reloj + intermedia"
        ],
        "a": 1,
        "exp": "La conducción 3D combina aplauso + sartén para botar y manejar la bola aérea."
      },
      {
        "q": "La conducción 3D consiste esencialmente en…",
        "opts": [
          "Llevar la bola pegada al suelo con CDG bajo",
          "Manejar la bola aérea empujándola hacia arriba tras botar",
          "Proteger la bola solo con el cuerpo",
          "Conducir muy adelantada a ras de suelo",
          "Pasar con las manos juntas"
        ],
        "a": 1,
        "exp": "La 3D maneja la bola por el aire, empujándola hacia arriba tras el bote, con empuñadura aplauso+sartén."
      },
      {
        "q": "Quieres dar un pase raso, controlado y, además, poder amagar antes de soltarlo. ¿Qué técnica eliges?",
        "opts": [
          "Golpeo derecho",
          "Push arrastrado",
          "Látigo/barrida",
          "Flick",
          "Golpeo de revés"
        ],
        "a": 1,
        "exp": "El push arrastrado mantiene la bola en contacto, lo que permite amagar antes de pasar."
      },
      {
        "q": "El push se ejecuta con…",
        "opts": [
          "Las manos juntas y un gesto de golpe",
          "Las manos separadas y el stick por el suelo",
          "Una sola mano y toma sartén",
          "El revés del stick",
          "Las manos juntas y CDG muy bajo"
        ],
        "a": 1,
        "exp": "El push es un pase de manos separadas en el que el stick va siempre por el suelo (no golpea)."
      },
      {
        "q": "En el pase push, ¿dónde se produce el contacto con la bola respecto a los pies?",
        "opts": [
          "A la altura del pie de atrás",
          "Entre el pie izquierdo y el derecho",
          "Por detrás del pie izquierdo",
          "A la altura del pie derecho solamente",
          "Por delante del cuerpo a un stick"
        ],
        "a": 1,
        "exp": "En el push el contacto se da entre ambos pies, con el stick deslizando por el suelo."
      },
      {
        "q": "Observas a un jugador hacer push con las manos muy juntas. ¿Qué efecto tiene ese error?",
        "opts": [
          "Aumenta la fuerza del pase",
          "Resta fuerza y obliga a erguirse en exceso",
          "Mejora la precisión",
          "Permite amagar mejor",
          "Mantiene la bola más pegada"
        ],
        "a": 1,
        "exp": "Juntar las manos en el push resta fuerza y obliga a erguir el cuerpo; deben ir separadas."
      },
      {
        "q": "Un jugador cruza los pies al terminar un push. ¿Por qué es un error?",
        "opts": [
          "Eleva la bola sin querer",
          "Genera inestabilidad e impide la rotación de cadera",
          "Reduce el alcance del stick",
          "Obliga a usar toma sartén",
          "Hace el pase de revés"
        ],
        "a": 1,
        "exp": "Cruzar los pies provoca inestabilidad e impide rotar la cadera, restando potencia y equilibrio."
      },
      {
        "q": "Necesitas un pase potente con las manos juntas, agachándote mucho con un gesto de zancada. ¿Qué técnica es?",
        "opts": [
          "Push",
          "Látigo/barrida",
          "Golpeo derecho",
          "Jab",
          "Recepción ofensiva"
        ],
        "a": 1,
        "exp": "El látigo/barrida se ejecuta con manos juntas, CDG muy bajo y gesto de lunge (zancada)."
      },
      {
        "q": "El golpeo derecho impacta la bola…",
        "opts": [
          "A la altura del pie adelantado",
          "A la altura del pie de atrás",
          "Entre ambos pies, como el push",
          "Por detrás del cuerpo",
          "A la altura de la rodilla derecha"
        ],
        "a": 0,
        "exp": "En el golpeo derecho el impacto se produce a la altura del pie adelantado, con piernas semiflexionadas."
      },
      {
        "q": "El golpeo tiene 3 fases. ¿Cuál es la secuencia correcta?",
        "opts": [
          "Contacto perpendicular → péndulo atrás → avance del peso",
          "Péndulo del palo hacia atrás → contacto perpendicular al suelo → avance del peso del cuerpo",
          "Avance del peso → contacto → péndulo atrás",
          "Amago → péndulo → recepción",
          "Péndulo atrás → avance del peso → contacto"
        ],
        "a": 1,
        "exp": "Las fases del golpeo son: péndulo hacia atrás, contacto perpendicular al suelo y avance del peso del cuerpo."
      },
      {
        "q": "Un jugador golpea con las manos separadas. ¿Qué problema genera ese error?",
        "opts": [
          "Eleva demasiado la bola",
          "No permite muñequear y resta eficacia al golpeo",
          "Reduce el péndulo del palo",
          "Obliga a usar toma sartén",
          "Mejora la precisión pero baja la potencia"
        ],
        "a": 1,
        "exp": "Separar las manos en el golpeo impide muñequear, perdiendo eficacia; deben ir juntas."
      },
      {
        "q": "El golpeo de revés o 'coreano' se ejecuta con la empuñadura…",
        "opts": [
          "Aplauso",
          "Reloj",
          "Sartén",
          "Intermedia aplauso-reloj",
          "Reloj invertida"
        ],
        "a": 2,
        "exp": "El golpeo de revés ('coreano') utiliza toma sartén, golpeando con el canto interior."
      },
      {
        "q": "El golpeo de revés también recibe el nombre de…",
        "opts": [
          "Flick",
          "Coreano",
          "Slap",
          "Jab",
          "Push arrastrado"
        ],
        "a": 1,
        "exp": "Se le llama 'coreano' y se ejecuta con toma sartén."
      },
      {
        "q": "¿Cuál es la secuencia correcta de las fases del regate?",
        "opts": [
          "Péndulo atrás → contacto → avance del peso",
          "Aproximación/amago → toque amplio con movimiento de pies → escape y aceleración",
          "Parar → recibir → pasar",
          "Botar → controlar → empujar",
          "Amortiguar → girar → golpear"
        ],
        "a": 1,
        "exp": "El regate sigue: aproximación y amago, toque amplio con juego de pies, escape y aceleración."
      },
      {
        "q": "En el regate derecho-revés con toma reloj, ¿qué hace el peso del cuerpo?",
        "opts": [
          "Permanece fijo en el centro",
          "Bascula acompañando el movimiento de la bola",
          "Se carga siempre en la pierna derecha",
          "Sube hacia una postura erguida",
          "Se mantiene atrás todo el gesto"
        ],
        "a": 1,
        "exp": "El peso del cuerpo bascula acompañando el movimiento de la bola de un lado a otro."
      },
      {
        "q": "Un compañero te envía un pase y quieres seguir jugando en movimiento, no solo frenar la bola. ¿Qué concepto aplicas?",
        "opts": [
          "Parar, que equivale a recibir",
          "Recibir, que mantiene la bola y el juego en movimiento (parar ≠ recibir)",
          "Bloquear con el cuerpo",
          "Amortiguar deteniéndote por completo",
          "Desviar la bola"
        ],
        "a": 1,
        "exp": "Parar no es recibir: recibir implica controlar la bola manteniendo el juego en movimiento."
      },
      {
        "q": "En la técnica básica de recepción, ¿qué hace cada mano?",
        "opts": [
          "La derecha empuja adelante y la izquierda amortigua",
          "El brazo izquierdo empuja adelante y la mano derecha amortigua",
          "Ambas manos amortiguan por igual",
          "La izquierda fija y la derecha golpea",
          "Ambas empujan hacia delante"
        ],
        "a": 1,
        "exp": "El brazo izquierdo empuja el stick adelante y la mano derecha amortigua para controlar la bola."
      },
      {
        "q": "En la recepción frontal, ¿a la altura de qué pie se busca la bola con el stick?",
        "opts": [
          "Pie izquierdo",
          "Pie derecho",
          "Entre ambos pies",
          "Pie de apoyo trasero",
          "Es indistinto"
        ],
        "a": 1,
        "exp": "Se busca la bola con el stick a la altura del pie derecho."
      },
      {
        "q": "Quieres recibir cerrando el cuerpo entre el rival y la bola para protegerla. ¿Qué tipo de recepción usas?",
        "opts": [
          "Recepción frontal abierta",
          "Recepción ofensiva en carrera",
          "Recepción cerrada/defensiva: contrabola recto o media luna",
          "Recepción lateral abierta",
          "Parada simple sin control"
        ],
        "a": 2,
        "exp": "Las recepciones cerradas/defensivas son la contrabola recta o en media luna, interponiendo el cuerpo."
      },
      {
        "q": "Una recepción falla porque la bola rebota y se escapa. ¿Cuál es la causa típica?",
        "opts": [
          "Manos muy juntas o empuñadura demasiado rígida/débil",
          "Buscar la bola a la altura del pie derecho",
          "Amortiguar con la mano derecha",
          "Empujar con el brazo izquierdo",
          "Mantener el stick separado del cuerpo"
        ],
        "a": 0,
        "exp": "Manos muy juntas o una empuñadura rígida/débil hacen que la bola rebote o se pierda al recibir."
      },
      {
        "q": "Una bola lleva trayectoria que se iría fuera de portería y tú la rediriges a puerta. ¿Qué técnica de definición es?",
        "opts": [
          "Desvío",
          "Pinche",
          "Flick",
          "Penalti stroke",
          "Push arrastrado"
        ],
        "a": 0,
        "exp": "En el desvío la trayectoria original iba fuera y se redirige hacia portería (típico segundo palo)."
      },
      {
        "q": "Una bola va hacia puerta y tú la elevas para desviarla en 3D al fondo. ¿Qué técnica de definición es?",
        "opts": [
          "Desvío",
          "Pinche",
          "Látigo",
          "Recepción ofensiva",
          "Golpeo derecho"
        ],
        "a": 1,
        "exp": "En el pinche la bola ya iba a puerta y la acción provoca una desviación elevada (3D)."
      },
      {
        "q": "¿En qué zona del campo se generan más situaciones de gol?",
        "opts": [
          "En la línea de 22",
          "En la zona de 8 metros",
          "En el medio campo",
          "En las bandas",
          "En toda el área por igual"
        ],
        "a": 1,
        "exp": "La zona de 8 metros concentra la mayoría de las situaciones de gol."
      },
      {
        "q": "Para decidir qué técnica de tiro emplear en una jugada, ¿qué dos factores son determinantes?",
        "opts": [
          "Solo la fuerza del jugador",
          "La zona del área y el tiempo disponible para ejecutar",
          "El color de la portería",
          "El número de defensas y la posición del árbitro",
          "La marca del stick y el viento"
        ],
        "a": 1,
        "exp": "La técnica de tiro se elige según la zona del área en que estés y el tiempo disponible para ejecutarla."
      },
      {
        "q": "Vas a lanzar un penalti stroke. ¿Con qué técnica está permitido ejecutarlo?",
        "opts": [
          "Golpeo o látigo",
          "Push o flick, sin arrastre",
          "Cualquier técnica con rebote previo",
          "Solo de revés",
          "Solo golpeo coreano"
        ],
        "a": 1,
        "exp": "El stroke se ejecuta con push o flick sin arrastre; NO puede hacerse con golpeo."
      },
      {
        "q": "El flick se diferencia del push principalmente en que…",
        "opts": [
          "Se ejecuta con las manos juntas",
          "Eleva la bola del suelo",
          "Solo se usa de revés",
          "Mantiene la bola pegada al palo",
          "Necesita un golpe seco como el hit"
        ],
        "a": 1,
        "exp": "El flick parte de la mecánica del push pero eleva la bola; por eso es válido para el stroke."
      },
      {
        "q": "En el push arrastrado, ¿sobre qué pie se realiza el empuje final?",
        "opts": [
          "El pie derecho",
          "El pie izquierdo",
          "Ambos a la vez",
          "Por detrás del cuerpo",
          "En salto, sin apoyo"
        ],
        "a": 1,
        "exp": "El empuje final del push arrastrado se hace sobre el pie izquierdo adelantado."
      },
      {
        "q": "En la conducción de control, ¿qué empuñadura y posición de manos se emplean?",
        "opts": [
          "Toma reloj con manos separadas y CDG bajo",
          "Toma aplauso con manos juntas",
          "Toma sartén con la mano derecha arriba",
          "Intermedia aplauso+reloj con bola adelantada",
          "Toma reloj con manos juntas"
        ],
        "a": 0,
        "exp": "Control: toma reloj, manos separadas, codo izquierdo fuera y centro de gravedad bajo."
      },
      {
        "q": "¿Qué describe correctamente la conducción de velocidad?",
        "opts": [
          "CDG bajo y bola en contacto constante",
          "Intermedia aplauso+reloj, derecha más arriba, bola adelantada y CDG alto",
          "Toma sartén con bola aérea",
          "Mano izquierda abajo y postura agachada",
          "Manos juntas y gesto de lunge"
        ],
        "a": 1,
        "exp": "Velocidad: empuñadura intermedia aplauso+reloj, mano derecha arriba, bola adelantada y CDG alto."
      },
      {
        "q": "En la postura básica sin bola, mantener el core activo sirve sobre todo para…",
        "opts": [
          "Aumentar la velocidad de carrera",
          "Proteger la zona lumbar manteniendo la espalda recta",
          "Sujetar el stick con más fuerza",
          "Elevar el centro de gravedad",
          "Mejorar la puntería en el tiro"
        ],
        "a": 1,
        "exp": "Un core activo protege la zona lumbar y ayuda a mantener la espalda recta en la postura básica."
      },
      {
        "q": "Un jugador flexiona en exceso las rodillas en la postura básica. ¿Qué consecuencia tiene?",
        "opts": [
          "Mayor estabilidad sin coste",
          "Movimientos más lentos",
          "Mejor protección lumbar",
          "Más alcance del stick",
          "Bola más adelantada"
        ],
        "a": 1,
        "exp": "Una flexión excesiva de rodillas ralentiza los movimientos; la flexión debe ser moderada."
      },
      {
        "q": "Frente a un rival que conduce la bola elevada (3D), ¿qué técnica de pase con manos juntas y CDG muy bajo NO sería adecuada para iniciar tu salida rápida en carrera?",
        "opts": [
          "Push de manos separadas",
          "Látigo/barrida con lunge",
          "Push arrastrado",
          "Flick elevado",
          "Recepción y conducción de velocidad"
        ],
        "a": 1,
        "exp": "El látigo exige bajar mucho el CDG con lunge; no es el gesto más ágil para una salida rápida en carrera tras recuperar."
      },
      {
        "q": "Quieres pasar raso y fuerte a media distancia con un gesto de manos juntas tipo péndulo. ¿Qué técnica usas?",
        "opts": [
          "Push",
          "Golpeo derecho (hit)",
          "Push arrastrado",
          "Recepción ofensiva",
          "Jab"
        ],
        "a": 1,
        "exp": "El golpeo derecho (hit) con manos juntas y gesto de péndulo es el pase potente a media-larga distancia."
      },
      {
        "q": "Un jugador quiere usar la cara plana del palo por el lado del revés para controlar una bola aérea. ¿Qué empuñadura debe predominar?",
        "opts": [
          "Aplauso pura",
          "Reloj pura",
          "Sartén",
          "Intermedia reloj-aplauso",
          "Agarre a dos manos juntas"
        ],
        "a": 2,
        "exp": "La empuñadura sartén alinea la cara plana para jugar de revés; combinada con aplauso permite el manejo 3D."
      },
      {
        "q": "Resumen de empuñaduras: ¿qué asociación es la CORRECTA?",
        "opts": [
          "Aplauso = parte plana del palo",
          "Reloj = canto interior del stick",
          "Sartén = parte plana del palo",
          "Aplauso = parte curva del palo",
          "Sartén = canto interior del stick"
        ],
        "a": 2,
        "exp": "Aplauso = canto interior; reloj = parte curva; sartén = parte plana del palo."
      }
    ]
  },
  {
    "id": "t3",
    "titulo": "Técnica en Defensa (Recuperación)",
    "icono": "🛡️",
    "desc": "Triángulo defensivo, pasos del juego defensivo, quites y portero.",
    "estudio": [
      "Ciclo de juego: 4 momentos — <b>MPP</b> (posesión), <b>MTF</b> (transición-finalización), <b>MRO</b> (recuperación organizada), <b>MRC</b> (recuperación circunstancial).",
      "Solo un <b>30%</b> de las bolas se recuperan por quites; el <b>70%</b> por intercepciones o pérdidas del rival. Defender es entrenar <b>actitud</b> y se defiende siempre <b>en equipo</b>.",
      "<b>Triángulo defensivo</b>: lo conforman el <b>stick del defensor y sus dos pies</b> (pala adelantada, pies en planos diferentes, cuerpo semiflexionado, mirada en la bola).",
      "Pasos del juego defensivo: <b>Posicionarse → Aproximarse → Orientar/Canalizar → Presión → Recuperar</b>. Aproximarse = cortar con el cuerpo el pase más peligroso a portería. En la presión se ataca con el <b>pie izquierdo</b> y NO pasarse.",
      "Quites: <b>tackle</b> (toma reloj, frontal, palo horizontal, CDG muy bajo, piernas separadas — no usar ante 3D), <b>jab</b> (toma sartén, estocada a una mano), <b>shaving</b> (palo afeitando el suelo) y <b>stealing</b> (acompaña y roba con un tirón).",
      "<b>Canalizar</b>: orientar al atacante hacia una zona reduciendo su velocidad y espacio. <b>Carril</b>: 5 divisiones longitudinales. En el 1vs1 el ataque busca ganar el <b>carril interior</b> y la defensa defenderlo. 'Marcas' = emparejamiento individual.",
      "Posicionamiento individual: el defensor más cerca de la línea portería-bola que el atacante.",
      "Portero: dentro del área juega con stick, pies, protecciones y cualquier parte del cuerpo. Equipado (casco+guardas) <b>no puede salir del 23 m</b>; fuera del área solo juega con stick; no puede tenderse sobre la bola.",
      "Defensa del PC <b>1-2-1</b>: el jugador 1 presiona el tiro; los jugadores 2-3 cortan pases; el 4 tapa el poste izquierdo y ayuda al portero. Zona crítica del portero: <b>6 m</b>."
    ],
    "preguntas": [
      {
        "q": "Tu rival acaba de perder la bola y tu equipo se reorganiza sin posesión con el contrario aún colocado en su MPP. ¿En qué momento del ciclo estás?",
        "opts": [
          "MTF (transición-finalización)",
          "MRC (recuperación circunstancial)",
          "MRO (recuperación organizada)",
          "MPP (momento de posesión)",
          "Momento de saque neutral"
        ],
        "a": 2,
        "exp": "El MRO es organizarse sin posesión, cerrar espacios y orientar a zonas de recuperación con el rival en su MPP."
      },
      {
        "q": "Acabas de perder la bola en plena jugada y el rival sale rápido a portería. ¿Cuál es la prioridad y en qué momento está el rival?",
        "opts": [
          "Recuperar cuanto antes; el rival está en MPP",
          "Proteger primero la portería y luego recuperar; el rival está en MTF",
          "Cerrar espacios con calma; el rival está en MRO",
          "Presionar la salida; el rival está en MRC",
          "Replegar todo el equipo; el rival está en MPP"
        ],
        "a": 1,
        "exp": "La MRC se da sin posesión tras una jugada: primero proteger la portería y después recuperar, con el rival en su MTF."
      },
      {
        "q": "¿Cuál es el orden correcto de los cuatro momentos del ciclo de juego?",
        "opts": [
          "MTF, MPP, MRC, MRO",
          "MPP, MTF, MRO, MRC",
          "MRO, MRC, MPP, MTF",
          "MPP, MRO, MTF, MRC",
          "MTF, MRO, MPP, MRC"
        ],
        "a": 1,
        "exp": "MPP (posesión), MTF (transición-finalización), MRO y MRC (recuperación)."
      },
      {
        "q": "Solo un 30% de las bolas se recuperan por quites. ¿Cómo se recupera el 70% restante?",
        "opts": [
          "Por penaltis córner y bolas paradas",
          "Por faltas provocadas al rival",
          "Por intercepciones o pérdidas del propio rival",
          "Por strokes y rebotes del portero",
          "Por tackles frontales en el área"
        ],
        "a": 2,
        "exp": "El 70% se recupera por intercepciones o pérdidas del rival; solo el 30% por quites, de ahí que defender sea sobre todo actitud."
      },
      {
        "q": "¿Qué tres elementos forman el 'triángulo defensivo'?",
        "opts": [
          "El atacante, la bola y la portería",
          "El stick del defensor y sus dos pies",
          "La bola, el portero y el defensor más cercano",
          "Los dos defensores de banda y el central",
          "La empuñadura, la pala y la distancia a la bola"
        ],
        "a": 1,
        "exp": "El triángulo lo forman el stick del defensor (pala adelantada) y sus dos pies en planos diferentes, con cuerpo semiflexionado y mirada en la bola."
      },
      {
        "q": "Además de la pala adelantada, ¿qué postura corporal exige el triángulo defensivo?",
        "opts": [
          "Pies juntos, cuerpo erguido y mirada al rival",
          "Pies en el mismo plano y CDG alto",
          "Pies en planos diferentes, cuerpo semiflexionado y mirada en la bola",
          "Una sola mano en el palo y peso atrasado",
          "Pies paralelos y palo vertical"
        ],
        "a": 2,
        "exp": "Pies en planos diferentes, cuerpo semiflexionado, pala adelantada y mirada en la bola."
      },
      {
        "q": "¿Cuál es el orden correcto de los pasos del juego defensivo?",
        "opts": [
          "Posicionarse, Aproximarse, Presión, Orientar/Canalizar, Recuperar",
          "Aproximarse, Posicionarse, Orientar/Canalizar, Recuperar, Presión",
          "Presión, Posicionarse, Aproximarse, Orientar/Canalizar, Recuperar",
          "Posicionarse, Aproximarse, Orientar/Canalizar, Presión, Recuperar",
          "Recuperar, Presión, Orientar/Canalizar, Aproximarse, Posicionarse"
        ],
        "a": 3,
        "exp": "Posicionarse → Aproximarse → Orientar/Canalizar → Presión → Recuperar."
      },
      {
        "q": "En el paso de 'posicionarse', ¿qué debe hacer el defensor?",
        "opts": [
          "Cortar con el cuerpo el pase más peligroso",
          "Enfrentar al atacante situándose detrás de la línea de la bola",
          "Atacar con el pie izquierdo y la pala al suelo",
          "Acompañar la jugada y robar con el canto",
          "Tenderse para bloquear el tiro"
        ],
        "a": 1,
        "exp": "Posicionarse implica enfrentar al atacante colocándose detrás de la línea de la bola."
      },
      {
        "q": "Estás en la fase de aproximación al portador. ¿Qué tarea concreta tienes?",
        "opts": [
          "Robar la bola directamente con un tackle",
          "Replegar hasta la línea de fondo",
          "Cortar con el cuerpo el pase más peligroso hacia portería",
          "Saltar a marcar a tu par",
          "Esperar parado a que el rival falle"
        ],
        "a": 2,
        "exp": "Aproximarse = cortar con el cuerpo el pase más peligroso hacia la portería."
      },
      {
        "q": "Un atacante encara con espacio hacia tu portería. Quieres canalizarlo. ¿Qué buscas conseguir?",
        "opts": [
          "Recuperar la bola de inmediato con un quite",
          "Reducir su velocidad y espacio orientándolo a una zona menos peligrosa",
          "Marcarlo individualmente por todo el campo",
          "Tapar tú mismo el segundo palo",
          "Provocar un fuera de juego"
        ],
        "a": 1,
        "exp": "Canalizar es orientar al atacante hacia una zona reduciendo su velocidad y su espacio, evitando que avance hacia gol."
      },
      {
        "q": "En la fase de presión, ¿con qué pie se ataca y qué error hay que evitar?",
        "opts": [
          "Con el pie derecho, evitando replegar",
          "Con el pie izquierdo, sin pasarse del atacante",
          "Con ambos pies juntos, sin saltar",
          "Con el pie de atrás, sin bajar la pala",
          "Con el pie izquierdo, llegando a tenderse"
        ],
        "a": 1,
        "exp": "Se ataca con el pie izquierdo y el brazo del mismo lado, pala cerca del suelo, y SIN pasarse del atacante."
      },
      {
        "q": "Un atacante conduce la bola elevada (3D) en tu zona. ¿Qué quite NO debes intentar?",
        "opts": [
          "El jab",
          "El shaving",
          "El tackle",
          "El stealing",
          "La intercepción"
        ],
        "a": 2,
        "exp": "El tackle no se usa ante conducción elevada o 3D: con el CDG muy bajo y palo horizontal es ineficaz y arriesgado en ese caso."
      },
      {
        "q": "Decides ejecutar un tackle. ¿Qué combinación técnica es la correcta?",
        "opts": [
          "Toma sartén, palo vertical y piernas juntas",
          "Toma reloj, palo casi horizontal, CDG muy bajo y piernas separadas",
          "Toma aplauso, palo a la cintura y CDG alto",
          "Toma intermedia, una sola mano y postura erguida",
          "Toma sartén, estocada a una mano y zancada"
        ],
        "a": 1,
        "exp": "El tackle usa toma reloj, palo casi horizontal en el contacto, CDG muy bajo y piernas separadas semiflexionadas."
      },
      {
        "q": "¿Qué quite consiste en una estocada a una mano para presionar y preparar la recuperación?",
        "opts": [
          "El tackle, con toma reloj",
          "El jab, con toma sartén",
          "El shaving, con palo a ras de suelo",
          "El stealing, acompañando al rival",
          "La intercepción, cortando el pase"
        ],
        "a": 1,
        "exp": "El jab se realiza con toma sartén: estocada a una mano para presionar y preparar la recuperación."
      },
      {
        "q": "¿Cuáles son las tres fases del jab?",
        "opts": [
          "Posicionarse, canalizar y recuperar",
          "Aproximación de revés, estocada con zancada a una mano y vuelta a dos manos",
          "Frontal, lateral y trasero",
          "Reloj, aplauso y sartén",
          "Shaving, stealing y tackle"
        ],
        "a": 1,
        "exp": "El jab tiene tres fases: aproximación de revés, estocada con zancada a una mano y vuelta a dos manos."
      },
      {
        "q": "Vas corriendo junto a un atacante y, sin entrar de frente, llevas el palo a ras de suelo 'afeitando' para robarle con el canto. ¿Qué técnica es?",
        "opts": [
          "Tackle",
          "Jab",
          "Shaving",
          "Stealing",
          "Canalizar"
        ],
        "a": 2,
        "exp": "El shaving lleva el palo a ras de suelo, afeitando, y roba la bola con el canto."
      },
      {
        "q": "Acompañas al atacante a su ritmo y, en un descuido, le robas la bola con un tirón. ¿Cómo se llama esta técnica?",
        "opts": [
          "Tackle",
          "Jab",
          "Stealing",
          "Shaving",
          "Marcas"
        ],
        "a": 2,
        "exp": "Stealing: el defensor acompaña al atacante y le roba con un tirón de la bola."
      },
      {
        "q": "¿Cuáles son las empuñaduras (tomas) defensivas?",
        "opts": [
          "Reloj, aplauso, sartén e intermedias",
          "Reloj, martillo y pinza",
          "Aplauso, abanico y cuchara",
          "Sartén, gancho y revés",
          "Reloj, sartén y tijera"
        ],
        "a": 0,
        "exp": "Las empuñaduras defensivas son la de reloj, aplauso, sartén e intermedias."
      },
      {
        "q": "En la técnica básica defensiva (a distancia media, sin invadir el radio del atacante), ¿qué toma y colocación de pala se emplea?",
        "opts": [
          "Toma reloj con la pala casi horizontal",
          "Toma sartén con estocada a una mano",
          "Toma de aplauso con la pala delante de los pies",
          "Toma intermedia con la pala a la cintura",
          "Toma de aplauso con la pala atrasada"
        ],
        "a": 2,
        "exp": "La técnica básica defensiva usa toma de aplauso, con la pala delante de los pies, a distancia media sin invadir el radio del atacante."
      },
      {
        "q": "La postura de prevención/intercepción y la de presión se diferencian principalmente en:",
        "opts": [
          "El color de la empuñadura y la altura del salto",
          "La colocación del palo, la actividad del triángulo de pies y la intención de invadir el espacio del atacante",
          "La distancia a la portería y el número de defensores",
          "La orientación del portero y la zona del campo",
          "La velocidad de carrera y la dirección del pase rival"
        ],
        "a": 1,
        "exp": "Difieren en la colocación del palo, la actividad del triángulo de pies y la intención de invadir o no el espacio del atacante."
      },
      {
        "q": "¿Cuál es un error común en la técnica defensiva que debes corregir?",
        "opts": [
          "Colocar los pies en el mismo plano",
          "Llevar la pala adelantada",
          "Mantener los pies en planos diferentes",
          "Mantener el CDG equilibrado y bajo",
          "Fijar la mirada en la bola"
        ],
        "a": 0,
        "exp": "Colocar los pies en el mismo plano es un error común; deben ir en planos diferentes para reaccionar a ambos lados."
      },
      {
        "q": "El defensor avanza hacia el portador en línea recta. ¿Para qué sirve ese desplazamiento hacia delante?",
        "opts": [
          "Para presionar al portador",
          "Para prevenir y cerrar espacios",
          "Para acompañar la jugada",
          "Para provocar el fuera de juego",
          "Para iniciar el contraataque"
        ],
        "a": 0,
        "exp": "El desplazamiento hacia delante sirve para presionar; hacia atrás para prevenir; en diagonal para acompañar la jugada."
      },
      {
        "q": "Cuando el defensor se desplaza hacia atrás, ¿cuál es su objetivo?",
        "opts": [
          "Presionar al atacante con jab",
          "Prevenir y cerrar espacios",
          "Acompañar la jugada en diagonal",
          "Saltar al quite frontal",
          "Provocar el fuera de juego"
        ],
        "a": 1,
        "exp": "El desplazamiento hacia atrás sirve para prevenir y cerrar espacios."
      },
      {
        "q": "El desplazamiento defensivo en diagonal se utiliza sobre todo para:",
        "opts": [
          "Presionar al portador de frente",
          "Replegar hasta el área",
          "Acompañar la jugada",
          "Saltar al tackle",
          "Cerrar la línea de fondo"
        ],
        "a": 2,
        "exp": "Hacia delante presionar, hacia atrás prevenir y en diagonal acompañar la jugada."
      },
      {
        "q": "El campo se divide longitudinalmente en 'carriles'. ¿Cuántas divisiones son?",
        "opts": [
          "3 divisiones",
          "4 divisiones",
          "5 divisiones",
          "6 divisiones",
          "7 divisiones"
        ],
        "a": 2,
        "exp": "El término 'carril' hace referencia a 5 divisiones longitudinales del campo."
      },
      {
        "q": "En un 1vs1, el atacante intenta ganar el carril interior. ¿Qué debe hacer la defensa?",
        "opts": [
          "Cederle el interior y cerrar el exterior",
          "Defender el carril interior y canalizarlo hacia fuera",
          "Marcar al hombre por todo el campo",
          "Replegar hasta la línea de fondo",
          "Saltar a un tackle frontal inmediato"
        ],
        "a": 1,
        "exp": "El ataque busca ganar el carril interior; la defensa debe defenderlo y canalizar al atacante hacia el exterior."
      },
      {
        "q": "En el posicionamiento defensivo individual respecto a la línea portería-bola, el defensor debe situarse:",
        "opts": [
          "Más lejos de la portería que el atacante",
          "A la misma altura que el atacante",
          "Más cerca de la línea portería-bola que el atacante",
          "Siempre pegado a la línea de fondo",
          "Detrás del atacante en todo momento"
        ],
        "a": 2,
        "exp": "El defensor se coloca más cerca de la línea portería-bola que el atacante, cerrando el triángulo bola-portería-atacante."
      },
      {
        "q": "Tu técnico dice 'MARCAS'. Según el glosario defensivo, eso significa:",
        "opts": [
          "Emparejamiento individual con un jugador",
          "La distancia que permite saltar a presionar",
          "La carrera defensiva de repliegue",
          "La división del campo en carriles",
          "Orientar el ataque hacia una zona"
        ],
        "a": 0,
        "exp": "En el glosario, MARCAS significa emparejamiento individual (marcaje al hombre)."
      },
      {
        "q": "Según el glosario defensivo, el término BAJAR se refiere a:",
        "opts": [
          "La carrera defensiva de repliegue",
          "Orientar el ataque hacia una zona",
          "La distancia de presión en duelos",
          "El emparejamiento individual",
          "Saltar a presionar al portador"
        ],
        "a": 0,
        "exp": "En el glosario, BAJAR es la carrera defensiva de repliegue."
      },
      {
        "q": "Según el glosario defensivo, ¿qué significa AGUANTAR?",
        "opts": [
          "La carrera defensiva de repliegue",
          "El emparejamiento individual",
          "La distancia que permite saltar a presionar",
          "Orientar el ataque a una zona",
          "Las divisiones longitudinales del campo"
        ],
        "a": 2,
        "exp": "AGUANTAR es la distancia que permite saltar a presionar al portador."
      },
      {
        "q": "La actitud defensiva, base del trabajo sin balón, se entrena para defender siempre:",
        "opts": [
          "De forma individual",
          "En equipo",
          "Replegados al área",
          "Sin presionar nunca",
          "Solo al poseedor de la bola"
        ],
        "a": 1,
        "exp": "Un pilar de la actitud defensiva es defender siempre en equipo."
      },
      {
        "q": "¿Cuál de estos NO es uno de los pilares de la actitud defensiva?",
        "opts": [
          "Defender siempre en equipo",
          "Buscar siempre el quite individual antes que el repliegue",
          "Equilibrio entre paciencia y agresividad",
          "Máxima concentración y comunicación",
          "Ser responsable tras recuperar la bola"
        ],
        "a": 1,
        "exp": "Buscar siempre el quite individual NO es un pilar; recuérdese que solo el 30% se recupera por quites. Los pilares son trabajar en equipo, equilibrio paciencia-agresividad, concentración/comunicación, saber qué hacer en cada zona y ser responsable tras recuperar."
      },
      {
        "q": "En la fase de recuperación, ¿cuáles son los tres principios fundamentales?",
        "opts": [
          "Presionar, replegar y contraatacar",
          "Recuperar la posesión, evitar la progresión del rival a portería y proteger la portería",
          "Marcar al hombre, cerrar líneas y temporizar",
          "Recuperar, finalizar y celebrar",
          "Atacar, defender y transitar"
        ],
        "a": 1,
        "exp": "Los tres principios de la fase de recuperación son recuperar la posesión, evitar la progresión del rival hacia portería y proteger la portería."
      },
      {
        "q": "Entre las zonas de riesgo del campo, ¿cuál figura como una de las más peligrosas?",
        "opts": [
          "El carril exterior derecho de ataque",
          "El círculo central",
          "El carril central",
          "La banda derecha de la defensa",
          "El medio campo ofensivo"
        ],
        "a": 2,
        "exp": "Entre las más peligrosas están el carril central, la banda izquierda de la defensa, la cercanía a portería propia, el último cuarto, dentro del área y la zona crítica de 6 m."
      },
      {
        "q": "Respecto a las zonas de riesgo, ¿qué banda de la defensa se considera de las más peligrosas?",
        "opts": [
          "La banda izquierda",
          "La banda derecha",
          "Ambas bandas por igual",
          "Ninguna banda, solo el centro",
          "La banda más alejada de la portería"
        ],
        "a": 0,
        "exp": "La banda izquierda de la defensa figura entre las zonas más peligrosas."
      },
      {
        "q": "El portero está equipado con casco y guardas. ¿Hasta dónde puede participar en el juego?",
        "opts": [
          "Hasta el medio campo",
          "Solo dentro de su área de 14,63 m",
          "No puede tomar parte fuera del 23 m defensivo",
          "Hasta el círculo central",
          "Hasta la línea de fondo contraria"
        ],
        "a": 2,
        "exp": "Equipado con casco y guardas, el portero no puede participar fuera del 23 m defensivo (salvo en el stroke)."
      },
      {
        "q": "El portero sale fuera de su área a despejar. ¿Con qué puede jugar la bola allí?",
        "opts": [
          "Con cualquier parte del cuerpo",
          "Solo con el stick",
          "Con los pies y las protecciones",
          "Solo con las protecciones",
          "Con las manos"
        ],
        "a": 1,
        "exp": "Fuera del área el portero solo puede jugar la bola con el stick; dentro del área, con cualquier parte del cuerpo."
      },
      {
        "q": "Dentro de su área, ¿qué puede y qué NO puede hacer el portero?",
        "opts": [
          "Usar stick, pies, protecciones y cualquier parte del cuerpo, pero no tenderse sobre la bola",
          "Usar únicamente el stick y tenderse sobre la bola",
          "Jugar solo con los pies y detener con las manos",
          "Detener la bola únicamente con las protecciones",
          "Tenderse sobre la bola para detenerla con seguridad"
        ],
        "a": 0,
        "exp": "Dentro del área puede usar stick, pies, protecciones y cualquier parte del cuerpo, pero no puede tenderse sobre la bola."
      },
      {
        "q": "La 'zona crítica' del portero, la más comprometida, se sitúa a:",
        "opts": [
          "3 metros",
          "6 metros",
          "10 metros",
          "16 metros",
          "23 metros"
        ],
        "a": 1,
        "exp": "La zona crítica es la de 6 metros; más allá se habla de zona de incertidumbre y zona lejana."
      },
      {
        "q": "En la defensa del penalti córner con estructura 1-2-1, ¿qué función tiene el jugador 1?",
        "opts": [
          "Tapar el poste izquierdo",
          "Salir a presionar el tiro",
          "Cortar el pase exterior",
          "Quedarse fijo en la línea de gol",
          "Ayudar únicamente al portero"
        ],
        "a": 1,
        "exp": "En el 1-2-1, el jugador 1 sale a presionar el tiro; los 2-3 cortan pases y el 4 tapa el poste izquierdo y ayuda al portero."
      },
      {
        "q": "En la estructura 1-2-1 del penalti córner, ¿qué hacen los jugadores 2 y 3?",
        "opts": [
          "Cortan los pases",
          "Presionan ambos el tiro directo",
          "Tapan los dos postes",
          "Se quedan en la línea de gol",
          "Ayudan al portero en el rebote"
        ],
        "a": 0,
        "exp": "En el 1-2-1, los jugadores 2 y 3 cortan los pases mientras el 1 presiona el tiro."
      },
      {
        "q": "En la estructura 1-2-1 del penalti córner, ¿qué hace el jugador 4?",
        "opts": [
          "Presiona el tiro directo",
          "Corta el pase exterior",
          "Tapa el poste izquierdo y ayuda al portero",
          "Sale a presionar a la sacadora",
          "Corta el pase interior"
        ],
        "a": 2,
        "exp": "El jugador 4 tapa el poste izquierdo y ayuda al portero."
      },
      {
        "q": "En la defensa del penalti córner, ¿qué describe la salida 3-1 frente a la 2-2?",
        "opts": [
          "3 jugadores en banda y 1 en profundidad central; la 2-2 son dos parejas simétricas",
          "Dos parejas simétricas; la 2-2 lleva 3 en banda",
          "Jugador 1 presiona y 2-3 cortan; la 2-2 es una caja",
          "Una caja que tapa stroke y rebote; la 2-2 es en línea",
          "3 en profundidad y 1 en banda; la 2-2 es en diagonal"
        ],
        "a": 0,
        "exp": "La salida 3-1 sitúa 3 jugadores en banda y 1 en profundidad central; la 2-2 son dos parejas simétricas."
      },
      {
        "q": "Un compañero quiere robar siempre con tackle en cualquier situación. ¿Por qué es un planteamiento equivocado?",
        "opts": [
          "Porque el tackle es ilegal en el hockey hierba",
          "Porque solo el 30% de las bolas se recuperan por quites y el tackle no sirve ante 3D ni en cualquier contexto",
          "Porque el tackle solo se permite dentro del área",
          "Porque el tackle exige toma sartén difícil de dominar",
          "Porque hay que recuperar siempre con jab"
        ],
        "a": 1,
        "exp": "Solo el 30% se recupera por quites y el tackle, con CDG muy bajo, no se usa ante conducción elevada/3D; defender es sobre todo posicionarse y trabajar en equipo."
      },
      {
        "q": "Quieres presionar a un portador para forzar un error, pero sin entrar al quite todavía. ¿Qué técnica encaja mejor?",
        "opts": [
          "El tackle frontal con toma reloj",
          "El jab con toma sartén",
          "Tenderte para bloquear",
          "El shaving por delante del rival",
          "Un repliegue hasta el área"
        ],
        "a": 1,
        "exp": "El jab (estocada a una mano con toma sartén) sirve para presionar y preparar la recuperación sin comprometerte como en el tackle."
      }
    ]
  },
  {
    "id": "t4",
    "titulo": "Prevención de Lesiones",
    "icono": "🩹",
    "desc": "Epidemiología, factores de riesgo, postura y calentamiento preventivo.",
    "estudio": [
      "El <b>80%</b> de las lesiones ocurren <b>sin contacto</b> directo. Muchas se producen <b>sin la bola</b>, por colisión no controlada.",
      "Localización más frecuente: <b>isquiotibiales</b>, rodilla, cadera y zona lumbar (predominio de la cadena posterior y la zona lumbopélvica).",
      "Postura en flexión del hockey: <b>menor activación del glúteo mayor</b> y <b>mayor del glúteo medio</b> → dolor lumbar. Activar la cadena posterior mejora la transferencia de fuerza en carrera.",
      "<b>Joint by joint</b> (Boyle): movilidad en <b>tobillos y caderas</b>; estabilidad en <b>rodillas y zona lumbar</b>.",
      "Factores de riesgo: inestabilidad del core (↑riesgo), déficit de fuerza excéntrica de isquios (→ nordic curls), déficit de dorsiflexión (→ riesgo en frenadas). A mayor experiencia, menor incidencia por choque.",
      "5 pasos del proceso preventivo: <b>Valorar → Enseñar → Entrenar → Controlar → Integrar</b>.",
      "Estructura del calentamiento preventivo (5 bloques): <b>movilidad/estabilidad, activación neuromuscular, pliometría, habilidades de movimiento y específico</b>.",
      "El <b>CMJ</b> (salto con contramovimiento) sirve para perfiles de rendimiento, monitorizar la <b>fatiga neuromuscular</b> y la rehabilitación."
    ],
    "preguntas": [
      {
        "q": "La mayoría de las lesiones en hockey se producen…",
        "opts": [
          "Con contacto directo entre jugadores",
          "Sin contacto directo",
          "Solo por golpes de stick",
          "Exclusivamente en el penalti córner",
          "Por choque con la portería"
        ],
        "a": 1,
        "exp": "La mayoría de las lesiones se producen sin contacto directo."
      },
      {
        "q": "Muchas lesiones en hockey ocurren en acciones…",
        "opts": [
          "Siempre en contacto con la bola",
          "Sin la bola, por colisión no controlada",
          "Solo durante el penalti córner",
          "Únicamente en saques de banda",
          "Solo en el saque inicial"
        ],
        "a": 1,
        "exp": "Muchas se producen sin la bola, por colisión no controlada."
      },
      {
        "q": "¿Qué grupo muscular se lesiona con más frecuencia en hockey?",
        "opts": [
          "Cuádriceps",
          "Isquiotibiales",
          "Gemelos",
          "Bíceps",
          "Trapecio"
        ],
        "a": 1,
        "exp": "Los isquiotibiales son la localización lesional más frecuente, seguidos de la rodilla."
      },
      {
        "q": "¿Qué zona corporal predomina como localización lesional en hockey?",
        "opts": [
          "Miembros superiores",
          "Cabeza y cuello",
          "Miembros inferiores, cadena posterior y zona lumbopélvica",
          "Manos y muñecas",
          "Tronco anterior"
        ],
        "a": 2,
        "exp": "Predominan los miembros inferiores, la cadena posterior y la zona lumbopélvica."
      },
      {
        "q": "Tras los isquiotibiales, ¿qué articulación es de las más lesionadas?",
        "opts": [
          "El hombro",
          "La rodilla",
          "La muñeca",
          "El codo",
          "La cervical"
        ],
        "a": 1,
        "exp": "La rodilla es una de las localizaciones lesionales más frecuentes tras los isquiotibiales."
      },
      {
        "q": "La postura flexionada característica del hockey provoca…",
        "opts": [
          "Mayor activación del glúteo mayor y menor del glúteo medio",
          "Menor activación del glúteo mayor y mayor del glúteo medio",
          "Activación nula de ambos glúteos",
          "Efecto neutro sobre la zona lumbar",
          "Mayor activación de los cuádriceps únicamente"
        ],
        "a": 1,
        "exp": "La posición flexionada reduce la activación del glúteo mayor y aumenta la del glúteo medio, lo que se relaciona con dolor lumbar."
      },
      {
        "q": "El patrón postural del hockey (glúteo mayor inhibido) se asocia clínicamente a…",
        "opts": [
          "Tendinopatía rotuliana",
          "Dolor lumbar",
          "Esguince de tobillo",
          "Lesión de muñeca",
          "Sobrecarga de hombro"
        ],
        "a": 1,
        "exp": "La menor activación del glúteo mayor en la postura flexionada se asocia a dolor lumbar."
      },
      {
        "q": "Activar la cadena posterior mejora sobre todo…",
        "opts": [
          "La potencia de tiro de revés",
          "La transferencia de fuerza durante la carrera",
          "La flexibilidad de la muñeca",
          "El ROM cervical",
          "La precisión del pase corto"
        ],
        "a": 1,
        "exp": "Activar la cadena posterior mejora la transferencia de fuerza durante la carrera."
      },
      {
        "q": "Según el enfoque 'joint by joint' (Boyle), ¿qué articulaciones requieren MOVILIDAD?",
        "opts": [
          "Rodillas y zona lumbar",
          "Tobillos y caderas",
          "Hombros y codos",
          "Muñecas y dedos",
          "Cuello y zona dorsal"
        ],
        "a": 1,
        "exp": "Tobillos y caderas requieren movilidad; rodillas y zona lumbar, estabilidad."
      },
      {
        "q": "Según el 'joint by joint', ¿qué articulaciones requieren ESTABILIDAD?",
        "opts": [
          "Tobillos y caderas",
          "Rodillas y zona lumbar",
          "Hombros y muñecas",
          "Cervicales y caderas",
          "Tobillos y rodillas"
        ],
        "a": 1,
        "exp": "Rodillas y zona lumbar requieren estabilidad; tobillos y caderas, movilidad."
      },
      {
        "q": "Una rodilla que 'pide' estabilidad suele estar comprometida cuando falla la movilidad de…",
        "opts": [
          "El hombro",
          "El tobillo y la cadera adyacentes",
          "La muñeca",
          "La columna cervical",
          "El codo"
        ],
        "a": 1,
        "exp": "En el joint by joint, la rodilla (estabilidad) sufre cuando fallan la movilidad del tobillo y de la cadera vecinas."
      },
      {
        "q": "Un jugador con poca dorsiflexión de tobillo, ¿en qué acción tiene más riesgo?",
        "opts": [
          "En los saltos verticales",
          "En las frenadas y deceleraciones",
          "En los pases largos",
          "En la conducción de bola",
          "En el juego aéreo"
        ],
        "a": 1,
        "exp": "El déficit de dorsiflexión aumenta el riesgo en frenadas y cambios de dirección."
      },
      {
        "q": "Para prevenir lesiones de isquiotibiales, ¿qué tipo de trabajo es más adecuado?",
        "opts": [
          "Estiramientos pasivos prolongados",
          "Trabajo excéntrico (nordic curls)",
          "Movilidad de hombro",
          "Carrera continua de baja intensidad",
          "Pliometría de tobillo"
        ],
        "a": 1,
        "exp": "El déficit de fuerza excéntrica de isquios se previene con excéntricos y nordic curls."
      },
      {
        "q": "Para abordar un déficit de dorsiflexión de tobillo, ¿qué estrategia es la indicada?",
        "opts": [
          "Nordic curls",
          "Movilidad de tobillo y excéntricos de gemelos y sóleo",
          "Antirrotación de core",
          "Monster walks",
          "Puente de glúteo"
        ],
        "a": 1,
        "exp": "Para el déficit de dorsiflexión: movilidad de tobillo y excéntricos de gemelos y sóleo."
      },
      {
        "q": "Para mejorar la co-activación glútea, ¿qué trabajo previo se utiliza?",
        "opts": [
          "Carrera continua",
          "Monster walks y extensiones de cadera",
          "Estiramientos pasivos de isquios",
          "Press de banca",
          "Sprints máximos"
        ],
        "a": 1,
        "exp": "Para la co-activación glútea se emplean activaciones previas como monster walks y extensiones."
      },
      {
        "q": "Ante una inestabilidad del core (pobre control lumbopélvico), ¿qué trabajo es prioritario?",
        "opts": [
          "Nordic curls",
          "Antirrotación, planchas dinámicas y ejercicios asimétricos",
          "Movilidad de tobillo",
          "Estiramientos PNF de cadera",
          "Trabajo aeróbico de descarga"
        ],
        "a": 1,
        "exp": "Para el core inestable: antirrotación, planchas dinámicas y ejercicios asimétricos."
      },
      {
        "q": "La inestabilidad del core (pobre control lumbopélvico) se asocia a…",
        "opts": [
          "Menor riesgo lesivo",
          "Mayor riesgo lesivo",
          "Mejor transferencia de fuerza",
          "Ningún efecto sobre la lesión",
          "Más flexibilidad"
        ],
        "a": 1,
        "exp": "Un pobre control lumbopélvico (core inestable) aumenta el riesgo lesivo."
      },
      {
        "q": "Respecto al ratio de fuerza relativa y la lesión, ¿qué relación existe?",
        "opts": [
          "Mayor ratio de fuerza relativa = más lesión",
          "Menor ratio de fuerza relativa = más lesión",
          "El ratio no influye en la lesión",
          "Solo influye en miembros superiores",
          "Mayor ratio = más dolor lumbar"
        ],
        "a": 1,
        "exp": "Un menor ratio de fuerza relativa se asocia con mayor riesgo de lesión."
      },
      {
        "q": "Respecto a la experiencia del jugador y las lesiones por choque…",
        "opts": [
          "A mayor experiencia, mayor incidencia por choque",
          "A mayor experiencia, menor incidencia por choque",
          "No hay relación con la experiencia",
          "A mayor experiencia, mayor riesgo muscular",
          "A mayor experiencia, mayor fatiga neuromuscular"
        ],
        "a": 1,
        "exp": "A mayor experiencia, menor incidencia lesional por choque (mejor lectura y control de la colisión)."
      },
      {
        "q": "¿Por qué tiende a aumentar la incidencia lesional durante los torneos?",
        "opts": [
          "Por menor calentamiento",
          "Por la fatiga acumulada",
          "Por cambio de superficie",
          "Por el uso de un stick más rígido",
          "Por mayor hidratación"
        ],
        "a": 1,
        "exp": "En los torneos la incidencia sube por la fatiga acumulada de partidos seguidos."
      },
      {
        "q": "Cuando predomina el VOLUMEN de trabajo, ¿qué localización lesional tiende a aparecer?",
        "opts": [
          "La rodilla",
          "El tobillo",
          "La cadera",
          "La zona lumbar",
          "El hombro"
        ],
        "a": 1,
        "exp": "Más volumen tiende a sobrecargar el tobillo; más intensidad, la rodilla."
      },
      {
        "q": "Cuando predomina la INTENSIDAD (sprints, RSA), ¿qué localización lesional tiende a aparecer?",
        "opts": [
          "El tobillo",
          "La rodilla",
          "La muñeca",
          "El hombro",
          "El codo"
        ],
        "a": 1,
        "exp": "Más intensidad (sprints, RSA) se asocia a la rodilla; más volumen, al tobillo."
      },
      {
        "q": "Un déficit de fuerza plantar afecta principalmente a…",
        "opts": [
          "El equilibrio monopodal y la cadena posterior",
          "La movilidad de hombro",
          "El ROM cervical",
          "La fuerza de prensión de la mano",
          "La flexibilidad lumbar únicamente"
        ],
        "a": 0,
        "exp": "El déficit de fuerza plantar afecta a la cadena posterior y al equilibrio monopodal."
      },
      {
        "q": "Para trabajar apoyos, equilibrio y cadena posterior, ¿qué pilar preventivo se destaca?",
        "opts": [
          "Trabajo bilateral exclusivo",
          "Trabajo unilateral",
          "Estiramientos pasivos largos",
          "Carrera continua de baja intensidad",
          "Trabajo isométrico de tronco anterior"
        ],
        "a": 1,
        "exp": "El trabajo unilateral se señala como pilar preventivo de los apoyos y la cadena posterior."
      },
      {
        "q": "Ante un dolor lumbar agudo, ¿qué enfoque de carga se asocia a mejoría?",
        "opts": [
          "Reposo absoluto prolongado",
          "Trabajo de fuerza-resistencia en extensión",
          "Reducir al máximo el ROM lumbosacro",
          "Evitar toda extensión lumbar",
          "Estiramientos de isquios únicamente"
        ],
        "a": 1,
        "exp": "El trabajo de fuerza-resistencia en extensión mejora el dolor lumbar agudo."
      },
      {
        "q": "Una reducción del ROM y de la fuerza en extensión lumbosacra se asocia a…",
        "opts": [
          "Mejor co-activación glútea",
          "Dolor lumbar",
          "Mayor dorsiflexión",
          "Más estabilidad de rodilla",
          "Menor riesgo en frenadas"
        ],
        "a": 1,
        "exp": "La disminución de ROM y de fuerza en extensión lumbosacra se asocia a dolor lumbar."
      },
      {
        "q": "Una pérdida de ROM torácico tiende a producir…",
        "opts": [
          "Mejor dorsiflexión",
          "Tensiones compensatorias en otras zonas",
          "Más estabilidad lumbar",
          "Mejor equilibrio monopodal",
          "Menor carga en el drag"
        ],
        "a": 1,
        "exp": "La pérdida de ROM torácico genera tensiones compensatorias en zonas vecinas."
      },
      {
        "q": "El gesto del arrastre (drag) estresa especialmente…",
        "opts": [
          "Hombro y codo",
          "Cadera y zona lumbar",
          "Tobillo y rodilla",
          "Muñeca y mano",
          "Columna cervical"
        ],
        "a": 1,
        "exp": "El arrastre (drag) estresa de forma especial la cadera y la zona lumbar."
      },
      {
        "q": "¿Cuáles son, en orden, los 5 pasos del proceso preventivo?",
        "opts": [
          "Calentar, estirar, entrenar, competir, descansar",
          "Valorar, enseñar, entrenar, controlar, integrar",
          "Medir, planificar, ejecutar, evaluar, repetir",
          "Movilidad, fuerza, potencia, velocidad, resistencia",
          "Valorar, prevenir, fortalecer, competir, evaluar"
        ],
        "a": 1,
        "exp": "El proceso es Valorar → Enseñar → Entrenar → Controlar → Integrar."
      },
      {
        "q": "En el proceso preventivo de 5 pasos, ¿qué paso sigue a 'Valorar'?",
        "opts": [
          "Entrenar",
          "Enseñar",
          "Controlar",
          "Integrar",
          "Monitorizar"
        ],
        "a": 1,
        "exp": "El orden es Valorar, Enseñar, Entrenar, Controlar e Integrar."
      },
      {
        "q": "En el proceso preventivo, la fase de 'Entrenar' desarrolla…",
        "opts": [
          "Patrones motores y asimetrías iniciales",
          "Fuerza, agilidad, potencia, velocidad y resistencia",
          "Eslabones débiles según sexo y maduración",
          "Habilidades técnico-tácticas",
          "Solo movilidad y simetría"
        ],
        "a": 1,
        "exp": "En 'Entrenar' se desarrolla fuerza, agilidad, potencia, velocidad y resistencia."
      },
      {
        "q": "En el proceso preventivo, el paso 'Controlar' se ocupa de…",
        "opts": [
          "Las habilidades técnico-tácticas",
          "Vigilar los eslabones débiles según sexo y maduración",
          "Los patrones de movimiento iniciales",
          "La potencia y la velocidad",
          "Las asimetrías iniciales de fuerza"
        ],
        "a": 1,
        "exp": "En 'Controlar' se vigilan los eslabones débiles según el sexo y la maduración."
      },
      {
        "q": "El último paso del proceso preventivo, donde se aplican las habilidades técnico-tácticas, es…",
        "opts": [
          "Controlar",
          "Entrenar",
          "Integrar",
          "Enseñar",
          "Valorar"
        ],
        "a": 2,
        "exp": "'Integrar' es el último paso: aplicar lo trabajado en habilidades técnico-tácticas."
      },
      {
        "q": "¿En cuántos bloques se estructura el calentamiento preventivo?",
        "opts": [
          "3 bloques",
          "5 bloques",
          "Un único bloque de estiramientos",
          "2 bloques",
          "4 bloques"
        ],
        "a": 1,
        "exp": "El calentamiento preventivo se organiza en 5 bloques."
      },
      {
        "q": "¿Cuáles son los 5 bloques del calentamiento preventivo?",
        "opts": [
          "Estiramientos, fuerza, cardio, técnica y partido",
          "Movilidad/estabilidad, activación neuromuscular, pliometría, habilidades de movimiento y específico",
          "Calentar, estirar, correr, saltar y competir",
          "Aeróbico, anaeróbico, fuerza, velocidad y vuelta a la calma",
          "Movilidad, fuerza máxima, resistencia, velocidad y técnica"
        ],
        "a": 1,
        "exp": "Los bloques son movilidad/estabilidad, activación neuromuscular, pliometría, habilidades de movimiento y específico."
      },
      {
        "q": "En el calentamiento preventivo, el bloque de activación neuromuscular incluye…",
        "opts": [
          "Trabajo isométrico, concéntrico y excéntrico",
          "Saltos monopodales y bipodales",
          "Desplazamientos lineales y multidireccionales",
          "Estiramientos PNF de cadera",
          "Tareas específicas según el puesto"
        ],
        "a": 0,
        "exp": "El bloque de activación neuromuscular incluye trabajo isométrico, concéntrico y excéntrico."
      },
      {
        "q": "¿Cuáles son las claves de aplicación del calentamiento preventivo?",
        "opts": [
          "Sesiones largas y máxima carga",
          "Mini dosis, constancia y foco en la calidad de ejecución",
          "Trabajo exclusivamente bilateral",
          "Solo aplicable en alto rendimiento",
          "Máximo volumen y mínima frecuencia"
        ],
        "a": 1,
        "exp": "Las claves son mini dosis, constancia, foco en la calidad y aplicabilidad en todas las etapas."
      },
      {
        "q": "El test CMJ (salto con contramovimiento) se utiliza principalmente para…",
        "opts": [
          "Medir la flexibilidad",
          "Monitorizar la fatiga neuromuscular y el rendimiento",
          "Valorar la técnica de tiro",
          "Medir la frecuencia cardíaca máxima",
          "Calcular la masa muscular"
        ],
        "a": 1,
        "exp": "El CMJ sirve para perfiles de rendimiento, monitorizar la fatiga neuromuscular y la rehabilitación."
      },
      {
        "q": "Si tras varios partidos el CMJ de un jugador baja respecto a su valor habitual, lo más probable es que indique…",
        "opts": [
          "Mejor estado de forma",
          "Fatiga neuromuscular acumulada",
          "Mayor flexibilidad",
          "Mejor técnica de tiro",
          "Aumento de masa muscular"
        ],
        "a": 1,
        "exp": "Una caída del CMJ respecto al valor habitual sugiere fatiga neuromuscular, indicación para ajustar la carga."
      },
      {
        "q": "En la metáfora del 'chasis', ¿qué representa el chasis del jugador?",
        "opts": [
          "La base: epidemiología, control motor y patrones de movimiento",
          "Solo la fuerza máxima",
          "El calendario competitivo",
          "La velocidad de sprint",
          "La táctica del equipo"
        ],
        "a": 0,
        "exp": "El chasis es la base del jugador (control motor y patrones de movimiento); un buen chasis permite tolerar la carga del calendario."
      },
      {
        "q": "Siguiendo la metáfora del 'chasis', un jugador con buena base de control motor podrá…",
        "opts": [
          "Prescindir del calentamiento",
          "Tolerar mejor la carga del calendario competitivo",
          "Evitar por completo cualquier lesión",
          "Reducir su fuerza sin consecuencias",
          "Entrenar siempre a máxima intensidad"
        ],
        "a": 1,
        "exp": "Un chasis sólido (base motora) permite tolerar la carga y afrontar el calendario con menor riesgo."
      },
      {
        "q": "Un jugador con poca movilidad de cadera, según el joint by joint, tenderá a compensar sobrecargando…",
        "opts": [
          "El hombro contrario",
          "La zona lumbar y la rodilla",
          "La muñeca",
          "El cuello",
          "El codo"
        ],
        "a": 1,
        "exp": "Si la cadera (movilidad) falla, las estructuras vecinas que piden estabilidad (zona lumbar y rodilla) se sobrecargan."
      },
      {
        "q": "Para reducir el dolor lumbar derivado de la postura del hockey, lo más coherente es…",
        "opts": [
          "Estirar pasivamente los isquios y descansar",
          "Activar el glúteo mayor y reforzar la extensión lumbosacra",
          "Aumentar la flexión de tronco en juego",
          "Evitar todo trabajo de cadena posterior",
          "Reducir la movilidad de cadera"
        ],
        "a": 1,
        "exp": "Como la postura inhibe el glúteo mayor, conviene activarlo y reforzar la fuerza-resistencia en extensión lumbosacra."
      }
    ]
  },
  {
    "id": "t5",
    "titulo": "Preparación Física",
    "icono": "💪",
    "desc": "Capacidades, monitorización (WIMU), microciclo competitivo y juegos reducidos.",
    "estudio": [
      "Capacidad física fundamental (Tous): la <b>fuerza</b>. Se mide en 3 dimensiones: <b>nivel aplicado</b> (N en una acción), <b>tasa de desarrollo</b> (N por segundo) y <b>mantenimiento</b> (tiempo que se sostiene).",
      "Tras un partido se necesitan <b>48-72 h</b> para recuperar la fuerza rápida y explosiva.",
      "Microciclo: <b>MD+1</b> recuperación (regeneración) · <b>MD-4</b> desarrollo (FUERZA; espacio reducido 25x25, series 1'-4', descanso corto) · <b>MD-3</b> resistencia/RSA (espacio el más grande) · <b>MD-2</b> velocidad/activación (afinamiento) · MD-1 muy ligero.",
      "WIMU: lo replicable con stick y bola en campo son aceleraciones, desaceleraciones y distancia; lo más difícil de replicar es el <b>nº de sprints a máxima velocidad</b>.",
      "Umbrales: alta intensidad (HIA/HSR) <b>>16 km/h</b>; sprint <b>>21 km/h</b>. Player Load = indicador de carga global.",
      "Juegos reducidos (Castellano y Casamichana): pocos jugadores + poco espacio relativo → <b>fuerza</b>; muchos jugadores + mucho espacio → <b>velocidad/sprint</b>; mucho espacio con pocos jugadores → resistencia.",
      "RSA = encadenar sprints con recuperaciones cortas. HIIT = trabajo interválico de alta intensidad."
    ],
    "preguntas": [
      {
        "q": "Según Tous, la capacidad física fundamental de la que derivan las demás es…",
        "opts": [
          "La resistencia",
          "La velocidad",
          "La fuerza",
          "La flexibilidad",
          "La coordinación"
        ],
        "a": 2,
        "exp": "Para Tous la fuerza es la capacidad fundamental; resistencia y velocidad derivan de ella."
      },
      {
        "q": "En el modelo de Tous, ¿qué papel cumplen la flexibilidad y la coordinación respecto a la fuerza?",
        "opts": [
          "Derivan directamente de ella",
          "La facilitan",
          "La sustituyen",
          "No tienen ninguna relación",
          "Son más importantes que ella"
        ],
        "a": 1,
        "exp": "Flexibilidad y coordinación facilitan la fuerza; resistencia y velocidad derivan de ella."
      },
      {
        "q": "La resistencia y la velocidad, en el modelo de Tous, ¿cómo se relacionan con la fuerza?",
        "opts": [
          "Son independientes de la fuerza",
          "Solo la facilitan",
          "Derivan de la fuerza",
          "Sustituyen a la fuerza",
          "Son anteriores a la fuerza"
        ],
        "a": 2,
        "exp": "Resistencia y velocidad derivan de la fuerza; flexibilidad y coordinación solo la facilitan."
      },
      {
        "q": "Tras un partido, ¿es recomendable aplicar un estímulo de fuerza explosiva máxima al día siguiente?",
        "opts": [
          "Sí, conviene aprovechar la activación del partido",
          "No, la fuerza rápida y explosiva necesita varios días para recuperarse",
          "Sí, siempre que sea con poco volumen",
          "Solo si el jugador no es titular",
          "Sí, es el mejor día para ganar fuerza"
        ],
        "a": 1,
        "exp": "La fuerza rápida y explosiva necesita uno a tres días para recuperarse; no se da estímulo máximo inmediato."
      },
      {
        "q": "Respecto a la fuerza explosiva tras competir, el concepto clave es que…",
        "opts": [
          "Se recupera en pocas horas",
          "No se afecta con el partido",
          "Necesita varios días de recuperación antes de un nuevo estímulo máximo",
          "Mejora si se entrena al día siguiente",
          "Solo se recupera con descanso total absoluto"
        ],
        "a": 2,
        "exp": "La fuerza explosiva queda mermada tras el partido y necesita varios días, no un estímulo máximo inmediato."
      },
      {
        "q": "Tras un partido, ¿es recomendable programar sprints máximos al día siguiente (MD+1)?",
        "opts": [
          "Sí, es el objetivo principal del MD+1",
          "No, el MD+1 es de recuperación / regeneración",
          "Sí, pero solo cuesta arriba",
          "Sí, para fijar la velocidad ganada",
          "Solo con los jugadores titulares"
        ],
        "a": 1,
        "exp": "El MD+1 es recuperación activa; los sprints máximos se reservan para días de desarrollo o activación."
      },
      {
        "q": "El día MD+1 del microciclo se dedica principalmente a…",
        "opts": [
          "Recuperación activa / regeneración",
          "Máxima fuerza",
          "Velocidad máxima",
          "Resistencia específica",
          "Partido simulado de alta carga"
        ],
        "a": 0,
        "exp": "MD+1 es recuperación activa (regeneración), con carga muy baja y sin oposición intensa."
      },
      {
        "q": "¿Qué tipo de contenido encaja mejor en un MD+1 de regeneración?",
        "opts": [
          "Sprints repetidos a máxima intensidad",
          "Trote suave, movilidad y foam roller",
          "Luchas y frenadas con contacto",
          "Juegos amplios de velocidad",
          "Series largas de resistencia"
        ],
        "a": 1,
        "exp": "El MD+1 incluye trabajo regenerativo: trote suave, movilidad, foam roller y aeróbico de descarga."
      },
      {
        "q": "El día del microciclo cuyo objetivo prioritario es el desarrollo de la FUERZA es…",
        "opts": [
          "MD+1",
          "MD-4",
          "MD-3",
          "MD-2",
          "MD-1"
        ],
        "a": 1,
        "exp": "El MD-4 es el día de desarrollo, con prioridad condicional de fuerza."
      },
      {
        "q": "El día del microciclo cuyo objetivo prioritario es la RESISTENCIA / RSA es…",
        "opts": [
          "MD+1",
          "MD-4",
          "MD-3",
          "MD-2",
          "MD-1"
        ],
        "a": 2,
        "exp": "El MD-3 es el día con prioridad de resistencia específica (RSA), con el espacio más amplio."
      },
      {
        "q": "El día del microciclo cuyo objetivo prioritario es la VELOCIDAD / activación es…",
        "opts": [
          "MD+1",
          "MD-4",
          "MD-3",
          "MD-2",
          "MD+2"
        ],
        "a": 3,
        "exp": "El MD-2 es afinamiento: prioridad de velocidad y activación antes del partido."
      },
      {
        "q": "El objetivo prioritario del MD-2 (afinamiento) es…",
        "opts": [
          "Fuerza estructural máxima",
          "Velocidad y activación",
          "Resistencia aeróbica de base",
          "Recuperación regenerativa",
          "Descanso total"
        ],
        "a": 1,
        "exp": "El MD-2 prioriza velocidad y activación con tareas breves e intensas (afinamiento)."
      },
      {
        "q": "El objetivo prioritario del MD-3 es…",
        "opts": [
          "Recuperación pasiva",
          "Fuerza máxima en espacio reducido",
          "Resistencia específica (RSA)",
          "Velocidad pura",
          "Descanso total"
        ],
        "a": 2,
        "exp": "El MD-3 es día mixto técnico-físico con prioridad de resistencia, usando el espacio más amplio."
      },
      {
        "q": "Para priorizar la FUERZA en un juego reducido, el espacio relativo y el número de jugadores deben ser…",
        "opts": [
          "Mucho espacio y muchos jugadores",
          "Poco espacio y pocos jugadores",
          "Mucho espacio y pocos jugadores",
          "Poco espacio y muchos jugadores",
          "Indiferente, no influye"
        ],
        "a": 1,
        "exp": "Poco espacio y pocos jugadores generan duelos y acciones explosivas: prioridad de fuerza."
      },
      {
        "q": "Para priorizar la VELOCIDAD / sprint en un juego reducido, el espacio y el número de jugadores deben ser…",
        "opts": [
          "Poco espacio y pocos jugadores",
          "Mucho espacio y muchos jugadores",
          "Poco espacio y muchos jugadores",
          "Indiferente",
          "Mucho espacio pero un solo jugador"
        ],
        "a": 1,
        "exp": "Mucho espacio relativo y muchos jugadores favorecen la carrera y las velocidades altas: velocidad/sprint."
      },
      {
        "q": "Un juego con mucho espacio pero pocos jugadores prioriza sobre todo…",
        "opts": [
          "Fuerza",
          "Resistencia",
          "Activación suave",
          "Recuperación",
          "Movilidad articular"
        ],
        "a": 1,
        "exp": "Mucho espacio con pocos jugadores obliga a cubrir grandes distancias de forma continua: resistencia."
      },
      {
        "q": "Para priorizar la RESISTENCIA frente al día de fuerza, ¿cómo deben cambiar el espacio y el número de jugadores?",
        "opts": [
          "Reducir el espacio y los jugadores",
          "Ampliar el espacio y aumentar los jugadores, con series más largas",
          "Mantener todo igual pero con más descanso",
          "Reducir solo el número de jugadores",
          "Quitar la oposición"
        ],
        "a": 1,
        "exp": "Respecto al día de fuerza, la resistencia pide más espacio, más jugadores y series más largas."
      },
      {
        "q": "En un MD-4 (desarrollo de fuerza), ¿sería coherente plantear un 3vs3 en un espacio reducido?",
        "opts": [
          "No, el MD-4 exige muchos jugadores y mucho espacio",
          "Sí: pocos jugadores y poco espacio encajan con la fuerza",
          "No, el 3vs3 solo sirve para velocidad",
          "Sí, pero solo sin oposición",
          "No, el MD-4 es de recuperación"
        ],
        "a": 1,
        "exp": "Pocos jugadores en espacio reducido generan duelos explosivos, coherente con la prioridad de fuerza del MD-4."
      },
      {
        "q": "Un 10vs10 en un espacio muy amplio con repeticiones de carrera largas encaja mejor con…",
        "opts": [
          "Fuerza explosiva",
          "Resistencia / RSA (MD-3)",
          "Recuperación (MD+1)",
          "Activación breve (MD-2)",
          "Movilidad"
        ],
        "a": 1,
        "exp": "Muchos jugadores y mucho espacio con esfuerzos largos corresponden a resistencia, propio del MD-3."
      },
      {
        "q": "Un 3vs3 en espacio reducido con acciones cortas e intensas y muchos duelos prioriza…",
        "opts": [
          "Resistencia",
          "Fuerza",
          "Recuperación",
          "Movilidad",
          "Flexibilidad"
        ],
        "a": 1,
        "exp": "Pocos jugadores y poco espacio relativo concentran duelos y acciones explosivas: fuerza."
      },
      {
        "q": "En un entreno con tareas técnicas reducidas, ¿qué tiende a quedar por debajo de lo que exige el partido?",
        "opts": [
          "Las aceleraciones cortas",
          "Los sprints a máxima velocidad",
          "La distancia total",
          "Las desaceleraciones",
          "El número de pases"
        ],
        "a": 1,
        "exp": "Las tareas reducidas replican bien aceleraciones y distancia, pero no el sprint a máxima velocidad."
      },
      {
        "q": "El RSA como contenido de entrenamiento consiste en…",
        "opts": [
          "Trabajo continuo de baja intensidad",
          "Encadenar sprints con recuperaciones cortas",
          "Estiramientos analíticos",
          "Fuerza máxima en gimnasio",
          "Movilidad articular guiada"
        ],
        "a": 1,
        "exp": "RSA (Repeated Sprint Ability) consiste en encadenar sprints con recuperaciones cortas."
      },
      {
        "q": "El concepto de HIIT hace referencia a…",
        "opts": [
          "Trabajo continuo de larga duración",
          "Trabajo interválico de alta intensidad",
          "Estiramientos pasivos",
          "Recuperación regenerativa",
          "Fuerza isométrica sostenida"
        ],
        "a": 1,
        "exp": "HIIT es trabajo interválico de alta intensidad, alternando esfuerzos intensos y pausas."
      },
      {
        "q": "El trabajo de RSA encaja sobre todo con el objetivo del día…",
        "opts": [
          "MD+1 (recuperación)",
          "MD-4 (fuerza)",
          "MD-3 (resistencia)",
          "MD-1 (previa muy ligera)",
          "MD-2 (activación)"
        ],
        "a": 2,
        "exp": "La RSA, como resistencia específica, encaja con la prioridad del MD-3."
      },
      {
        "q": "¿Cuál es el orden lógico de las fases del microciclo competitivo?",
        "opts": [
          "Activación → Desarrollo → Recuperación",
          "Recuperación → Desarrollo → Activación",
          "Desarrollo → Recuperación → Activación",
          "Recuperación → Activación → Desarrollo",
          "Activación → Recuperación → Desarrollo"
        ],
        "a": 1,
        "exp": "Tras el partido se recupera, luego se desarrolla y finalmente se activa de cara al siguiente partido."
      },
      {
        "q": "Justo después del partido, el microciclo entra en fase de…",
        "opts": [
          "Desarrollo de fuerza",
          "Recuperación / regeneración",
          "Activación y velocidad",
          "Carga máxima",
          "Resistencia específica"
        ],
        "a": 1,
        "exp": "La primera fase del microciclo tras competir es la recuperación (MD+1)."
      },
      {
        "q": "En la parte final del microciclo, los días previos al partido buscan…",
        "opts": [
          "Acumular la mayor carga posible",
          "Afinar: velocidad y activación con carga decreciente",
          "Desarrollar fuerza máxima",
          "Hacer la sesión más larga de la semana",
          "Resistencia de base prolongada"
        ],
        "a": 1,
        "exp": "Los días previos (MD-2, MD-1) afinan con velocidad/activación y carga decreciente."
      },
      {
        "q": "Según Tous, la fuerza se valora en tres dimensiones. ¿Cuáles son?",
        "opts": [
          "Máxima, rápida y de resistencia",
          "Nivel aplicado, tasa de desarrollo y mantenimiento",
          "Concéntrica, excéntrica e isométrica",
          "Aeróbica, anaeróbica y mixta",
          "Tren superior, inferior y core"
        ],
        "a": 1,
        "exp": "Las tres dimensiones son el nivel aplicado, la tasa de desarrollo y el mantenimiento."
      },
      {
        "q": "La dimensión de la fuerza que mide cuánta fuerza se produce en una acción es…",
        "opts": [
          "La tasa de desarrollo",
          "El nivel aplicado",
          "El mantenimiento",
          "La potencia mecánica",
          "La cadencia"
        ],
        "a": 1,
        "exp": "El nivel aplicado es la fuerza producida en una acción concreta."
      },
      {
        "q": "La dimensión de la fuerza que mide la rapidez con que se genera (cuánta fuerza por unidad de tiempo) es…",
        "opts": [
          "El nivel aplicado",
          "La tasa de desarrollo",
          "El mantenimiento",
          "La potencia mecánica",
          "La amplitud"
        ],
        "a": 1,
        "exp": "La tasa de desarrollo expresa cuán rápido se genera la fuerza (fuerza por segundo)."
      },
      {
        "q": "La dimensión de la fuerza llamada 'mantenimiento' se refiere a…",
        "opts": [
          "La fuerza de una acción puntual",
          "La rapidez con que se genera la fuerza",
          "El tiempo durante el cual se sostiene la fuerza",
          "La distancia recorrida",
          "El número de sprints realizados"
        ],
        "a": 2,
        "exp": "El mantenimiento es el tiempo durante el cual se logra sostener la fuerza."
      },
      {
        "q": "¿Cuál de estas NO es una de las tres dimensiones de la fuerza según Tous?",
        "opts": [
          "Nivel aplicado",
          "Tasa de desarrollo",
          "Mantenimiento",
          "Amplitud articular del movimiento",
          "Todas las anteriores son dimensiones de la fuerza"
        ],
        "a": 3,
        "exp": "La amplitud articular es flexibilidad; las tres dimensiones son nivel aplicado, tasa de desarrollo y mantenimiento."
      },
      {
        "q": "En hockey, el cambio de dirección exige sobre todo fuerza en…",
        "opts": [
          "Apoyo bipodal",
          "Apoyo monopodal",
          "Tren superior",
          "Core isométrico",
          "Cadena posterior aislada"
        ],
        "a": 1,
        "exp": "El cambio de dirección se ejecuta sobre una pierna: exige fuerza en apoyo monopodal."
      },
      {
        "q": "¿Para qué sirve principalmente la resistencia en hockey?",
        "opts": [
          "Para el contacto cuerpo a cuerpo",
          "Para la aceleración en pocos pasos",
          "Para encadenar acciones, recuperar entre esfuerzos y mantener calidad bajo fatiga",
          "Para el cambio de dirección monopodal",
          "Para aumentar la flexibilidad"
        ],
        "a": 2,
        "exp": "La resistencia permite encadenar acciones, recuperarse entre esfuerzos y mantener la calidad bajo fatiga."
      },
      {
        "q": "Una sesión con luchas, frenadas y duelos en espacio pequeño está orientada principalmente a…",
        "opts": [
          "Recuperación",
          "Fuerza",
          "Resistencia aeróbica",
          "Velocidad máxima",
          "Flexibilidad"
        ],
        "a": 1,
        "exp": "Luchas, frenadas y duelos en poco espacio cargan acciones explosivas: fuerza."
      },
      {
        "q": "Si un jugador llega muy fatigado del partido, ¿qué tipo de sesión es coherente al día siguiente?",
        "opts": [
          "Sprints máximos repetidos",
          "Regeneración: movilidad, trote suave y aeróbico de descarga",
          "Fuerza máxima en gimnasio",
          "Juego amplio de velocidad",
          "RSA de alta exigencia"
        ],
        "a": 1,
        "exp": "El día posterior al partido (MD+1) es de recuperación: cargas muy bajas y regenerativas."
      },
      {
        "q": "Un entrenador quiere que el equipo corra mucho a velocidades altas. ¿Cómo debe diseñar el juego?",
        "opts": [
          "Espacio pequeño y pocos jugadores",
          "Espacio amplio y muchos jugadores",
          "Espacio pequeño y muchos jugadores",
          "Sin oposición y estático",
          "Indiferente, depende solo del descanso"
        ],
        "a": 1,
        "exp": "Espacio amplio y muchos jugadores favorecen la carrera y las velocidades altas."
      },
      {
        "q": "El bici, la elíptica y el trote muy suave son contenidos propios de…",
        "opts": [
          "MD-4 (fuerza)",
          "MD+1 (recuperación / aeróbico de descarga)",
          "MD-3 (resistencia)",
          "MD-2 (velocidad)",
          "El propio partido"
        ],
        "a": 1,
        "exp": "El aeróbico de descarga del MD+1 usa bici, elíptica y trote suave de baja intensidad."
      },
      {
        "q": "Combinar el mapa día-objetivo, ¿qué secuencia de prioridades es correcta a lo largo de la semana?",
        "opts": [
          "Recuperación (MD+1) → Fuerza (MD-4) → Resistencia (MD-3) → Velocidad (MD-2)",
          "Fuerza (MD+1) → Velocidad (MD-4) → Recuperación (MD-3) → Resistencia (MD-2)",
          "Velocidad (MD+1) → Resistencia (MD-4) → Fuerza (MD-3) → Recuperación (MD-2)",
          "Resistencia (MD+1) → Recuperación (MD-4) → Velocidad (MD-3) → Fuerza (MD-2)",
          "Recuperación (MD+1) → Velocidad (MD-4) → Fuerza (MD-3) → Resistencia (MD-2)"
        ],
        "a": 0,
        "exp": "El orden es MD+1 recuperación, MD-4 fuerza, MD-3 resistencia/RSA, MD-2 velocidad/activación."
      },
      {
        "q": "¿Por qué no se programan estímulos de fuerza explosiva máxima inmediatamente después del partido?",
        "opts": [
          "Porque la fuerza explosiva no se entrena nunca",
          "Porque la fuerza rápida y explosiva queda mermada y necesita días para recuperarse",
          "Porque solo se entrena fuerza en pretemporada",
          "Porque el partido ya la desarrolla por completo",
          "Porque es mejor entrenarla justo antes del siguiente partido"
        ],
        "a": 1,
        "exp": "Tras competir, la fuerza explosiva está mermada y requiere varios días antes de un nuevo estímulo máximo."
      }
    ]
  },
  {
    "id": "t6",
    "titulo": "Modelo de Juego",
    "icono": "🧠",
    "desc": "Momentos del juego, comportamientos tácticos y sistemas complejos.",
    "estudio": [
      "4 momentos: <b>MPP</b> (posesión, objetivo hacer gol, horizontalidad>verticalidad) · <b>MTF</b> (transición-finalización, verticalidad>horizontalidad) · <b>MRO</b> (recuperación organizada, evitar gol, rival en MPP) · <b>MRC</b> (recuperación circunstancial, evitar gol, rival en MTF).",
      "Comportamientos de <b>MPP</b>: estructura, cuidar bola, líneas de pase, pase y apoyo, perfil de recepción, horizontalidad/amplitud, fijar y pasar. La <b>verticalidad</b> NO es de MPP.",
      "Comportamientos de <b>MTF</b>: verticalidad + cambio de pasillo, <b>pase y voy</b>, pase de descarga, ocupación de área (2º palo, pinche).",
      "Comportamientos de <b>MRC</b>: <b>presión 3 segundos</b>, repliegue, cortar el 1er pase de contraataque, priorizar el carril central.",
      "Principios de sistemas complejos: <b>sinergia</b> (el todo es más que la suma de las partes), <b>no-linealidad</b> (A no siempre lleva a B), <b>orden vs caos</b> (autoorganización) y <b>efecto mariposa</b> (pequeños cambios → grandes efectos)."
    ],
    "preguntas": [
      {
        "q": "Tu equipo tiene la bola con el rival bien colocado y replegado. ¿En qué momento del juego estáis?",
        "opts": [
          "MTF",
          "MPP",
          "MRO",
          "MRC",
          "Saque de fondo"
        ],
        "a": 1,
        "exp": "Con bola y rival organizado, el equipo está en MPP (Posesión-Posición): se busca hacer gol priorizando la horizontalidad."
      },
      {
        "q": "Acabáis de recuperar la bola y el rival está descolocado tras su ataque. ¿Qué momento debéis aprovechar?",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque de banda"
        ],
        "a": 1,
        "exp": "Tras recuperar con el rival desorganizado se entra en MTF (Transición-Finalización), aprovechando con verticalidad."
      },
      {
        "q": "Pierdes la bola y el rival sale rápido al contraataque, tu equipo en desequilibrio. ¿En qué momento estás?",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Posesión propia"
        ],
        "a": 3,
        "exp": "Pérdida con el equipo descolocado y rival en transición = MRC (Recuperación Circunstancial)."
      },
      {
        "q": "No tenéis la bola, pero el equipo está colocado y el rival construye con posesión paciente. ¿Qué momento es?",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Bully"
        ],
        "a": 2,
        "exp": "Sin bola, equipo organizado y rival en posesión (MPP) = MRO (Recuperación Organizada)."
      },
      {
        "q": "En el MPP, ¿qué se prioriza para hacer gol ante un rival ordenado?",
        "opts": [
          "Verticalidad sobre horizontalidad",
          "Repliegue y duelo",
          "Horizontalidad sobre verticalidad",
          "Presión de 3 segundos",
          "Cortar el primer pase"
        ],
        "a": 2,
        "exp": "En MPP se prioriza la horizontalidad ante un rival organizado para abrir espacios y progresar."
      },
      {
        "q": "Un jugador recibe, fija a su par y descarga a un compañero en mejor posición. Ese 'fijar y pasar' es propio de…",
        "opts": [
          "MTF",
          "MRO",
          "MPP",
          "MRC",
          "Saque de fondo"
        ],
        "a": 2,
        "exp": "Fijar y pasar es un comportamiento ofensivo del MPP."
      },
      {
        "q": "Tras recuperar, un jugador hace un pase y arranca de inmediato hacia el espacio. Ese 'pase y voy' es típico de…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Balance defensivo"
        ],
        "a": 1,
        "exp": "El 'pase y voy', con verticalidad y cambio de pasillo, es un comportamiento del MTF."
      },
      {
        "q": "Nada más perder la bola, el equipo aprieta intensamente unos segundos para recuperar o frenar. Ese comportamiento es de…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque inicial"
        ],
        "a": 3,
        "exp": "La presión de 3 segundos tras la pérdida es un comportamiento del MRC."
      },
      {
        "q": "¿Cuál de estos comportamientos NO pertenece al MPP?",
        "opts": [
          "Horizontalidad y amplitud",
          "Cuidar la bola",
          "Verticalidad",
          "Líneas de pase",
          "Pase y apoyo"
        ],
        "a": 2,
        "exp": "La verticalidad es propia del MTF; en MPP se prioriza la horizontalidad."
      },
      {
        "q": "El objetivo táctico común a MPP y MTF es…",
        "opts": [
          "Evitar el gol",
          "Recuperar la bola",
          "Hacer gol",
          "Replegar",
          "Ralentizar el juego"
        ],
        "a": 2,
        "exp": "MPP y MTF son momentos con balón: su objetivo es hacer gol."
      },
      {
        "q": "El objetivo táctico común a MRO y MRC es…",
        "opts": [
          "Hacer gol",
          "Mantener la posesión",
          "Finalizar en área",
          "Evitar el gol",
          "Cambiar de orientación"
        ],
        "a": 3,
        "exp": "MRO y MRC son momentos sin balón: su objetivo es evitar el gol."
      },
      {
        "q": "La defensa va perfectamente colocada, cierra líneas de pase y obliga al rival a circular sin progresar. ¿Qué momento es?",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque de fondo"
        ],
        "a": 2,
        "exp": "Cerrar líneas de pase con el equipo organizado frente a un rival en posesión es propio del MRO."
      },
      {
        "q": "Un delantero corre al segundo palo a la espera del centro. Esa 'ocupación de área' es un comportamiento de…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Repliegue"
        ],
        "a": 1,
        "exp": "La ocupación de área (segundo palo, pinche) es un comportamiento del MTF."
      },
      {
        "q": "El equipo, tras perder, retrocede ordenadamente y trata de cortar el primer pase del contraataque. Eso describe el…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque de banda"
        ],
        "a": 3,
        "exp": "El repliegue y cortar el primer pase del contraataque son comportamientos del MRC."
      },
      {
        "q": "Dar amplitud, abrir el campo y estructurar la posesión son comportamientos de…",
        "opts": [
          "MTF",
          "MPP",
          "MRO",
          "MRC",
          "Saque inicial"
        ],
        "a": 1,
        "exp": "Estructura, amplitud y cuidar la bola son comportamientos del MPP."
      },
      {
        "q": "El principio de 'sinergia' en los sistemas complejos significa que…",
        "opts": [
          "A siempre conduce a B",
          "Cada parte funciona aislada",
          "El todo es más que la suma de las partes",
          "El sistema tiende al desorden",
          "Pequeños cambios generan grandes efectos"
        ],
        "a": 2,
        "exp": "Sinergia: el todo es más que la suma de las partes; el conjunto emerge de la interacción."
      },
      {
        "q": "Que una pequeña variación inicial provoque una gran transformación en el juego ilustra el principio de…",
        "opts": [
          "Sinergia",
          "No-linealidad",
          "Orden vs caos",
          "Efecto mariposa",
          "Redundancia"
        ],
        "a": 3,
        "exp": "El efecto mariposa: pequeñas variaciones iniciales producen grandes cambios."
      },
      {
        "q": "Un entrenador asume que un mismo estímulo no produce siempre la misma respuesta en el jugador. Aplica el principio de…",
        "opts": [
          "Sinergia",
          "No-linealidad",
          "Efecto mariposa",
          "Orden vs caos",
          "Linealidad determinista"
        ],
        "a": 1,
        "exp": "No-linealidad: A no siempre conduce a B; hay que evitar enfoques reduccionistas."
      },
      {
        "q": "Que el equipo se autorregule y se autoorganice sin instrucciones constantes refleja el principio de…",
        "opts": [
          "Sinergia",
          "No-linealidad",
          "Efecto mariposa",
          "Orden vs caos",
          "Reduccionismo"
        ],
        "a": 3,
        "exp": "La autorregulación y la autoorganización son rasgos del principio orden vs caos."
      },
      {
        "q": "¿Cuántos momentos distingue el ciclo de juego del modelo?",
        "opts": [
          "Dos",
          "Tres",
          "Cuatro",
          "Cinco",
          "Seis"
        ],
        "a": 2,
        "exp": "El ciclo de juego distingue 4 momentos: MPP, MTF, MRO y MRC."
      },
      {
        "q": "¿Qué significan las siglas MPP?",
        "opts": [
          "Momento de Presión y Pase",
          "Posesión-Posición",
          "Progresión-Penetración",
          "Presión-Posición",
          "Posesión-Penetración"
        ],
        "a": 1,
        "exp": "MPP es el momento de Posesión-Posición."
      },
      {
        "q": "¿Qué significan las siglas MTF?",
        "opts": [
          "Marca-Transición-Fondo",
          "Transición-Fijación",
          "Transición-Finalización",
          "Toque-Finalización",
          "Transición-Frontal"
        ],
        "a": 2,
        "exp": "MTF es el momento de Transición-Finalización."
      },
      {
        "q": "En el MRO, ¿qué principio se prioriza?",
        "opts": [
          "PASE sobre RECUPERACIÓN",
          "RECUPERACIÓN sobre PASE",
          "Verticalidad sobre horizontalidad",
          "Presión sobre repliegue",
          "Amplitud sobre profundidad"
        ],
        "a": 1,
        "exp": "En el MRO se prioriza recuperar la bola (REC > PASE) con el equipo organizado."
      },
      {
        "q": "En el MRC, una vez perdida la bola, ¿qué carril interesa proteger primero?",
        "opts": [
          "Carril lateral derecho",
          "Carril central",
          "Carril exterior izquierdo",
          "Ambos laterales a la vez",
          "El fondo propio"
        ],
        "a": 1,
        "exp": "En el MRC se prioriza defender el carril central para frenar el contraataque."
      },
      {
        "q": "Un rondo posicional y la construcción desde el portero son ejercicios típicos de…",
        "opts": [
          "MTF",
          "MRO",
          "MPP",
          "MRC",
          "MRO defensivo"
        ],
        "a": 2,
        "exp": "Rondos posicionales y construcción desde el portero entrenan el MPP."
      },
      {
        "q": "Oleadas en superioridad del atacante y rutas de bola sin oposición se usan para entrenar…",
        "opts": [
          "MPP",
          "MRO",
          "MTF",
          "MRC",
          "Saque de fondo"
        ],
        "a": 2,
        "exp": "Las oleadas en superioridad y las rutas de bola buscan finalizar rápido: entrenan el MTF."
      },
      {
        "q": "El 'press tras pérdida' como tarea de entrenamiento busca mejorar especialmente el…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque inicial"
        ],
        "a": 3,
        "exp": "El press tras pérdida entrena la reacción inmediata del MRC."
      },
      {
        "q": "Las 'posesiones con pivotes ofensivos' como tarea sirven para trabajar sobre todo el…",
        "opts": [
          "MTF",
          "MRC",
          "MRO",
          "Estrategia a balón parado",
          "MPP de finalización"
        ],
        "a": 2,
        "exp": "Posesiones con pivotes y rondos defensivos sirven para entrenar el MRO."
      },
      {
        "q": "El pase de descarga y las líneas desde el fondo para salir rápido son comportamientos de…",
        "opts": [
          "MPP",
          "MRO",
          "MTF",
          "MRC",
          "Bully"
        ],
        "a": 2,
        "exp": "El pase de descarga y las líneas desde el fondo, orientados a finalizar, son del MTF."
      },
      {
        "q": "El pase y apoyo con distancia de seguridad y el perfil de recepción son comportamientos ofensivos de…",
        "opts": [
          "MTF",
          "MPP",
          "MRO",
          "MRC",
          "Saque de banda"
        ],
        "a": 1,
        "exp": "Pase y apoyo con distancia de seguridad y perfil de recepción son del MPP."
      },
      {
        "q": "Decir que el jugador es 'un sistema abierto con subsistemas dentro de un deporte abierto' ilustra el principio de…",
        "opts": [
          "No-linealidad",
          "Sinergia",
          "Efecto mariposa",
          "Orden vs caos",
          "Linealidad"
        ],
        "a": 1,
        "exp": "Esa idea de partes que interactúan formando un todo ilustra la sinergia."
      },
      {
        "q": "¿Cuál de estos NO es un principio de los sistemas complejos?",
        "opts": [
          "Sinergia",
          "No-linealidad",
          "Orden vs caos",
          "Efecto mariposa",
          "Linealidad determinista"
        ],
        "a": 4,
        "exp": "La linealidad determinista no es un principio; precisamente se defiende la no-linealidad."
      },
      {
        "q": "El comportamiento 'cuidar la bola' para no perderla es propio de…",
        "opts": [
          "MTF",
          "MPP",
          "MRO",
          "MRC",
          "Saque de fondo"
        ],
        "a": 1,
        "exp": "Cuidar la bola es un comportamiento ofensivo del MPP."
      },
      {
        "q": "Con el equipo colocado y sin bola, 'seguir la marca' y 'anticipar/interceptar' son comportamientos de…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque inicial"
        ],
        "a": 2,
        "exp": "Seguir la marca y anticipar/interceptar son comportamientos defensivos del MRO."
      },
      {
        "q": "Tras la pérdida, hacer 'saltos de marcas' para tapar al portador rival es un comportamiento de…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Bully"
        ],
        "a": 3,
        "exp": "Los saltos de marcas para frenar el contraataque son comportamientos del MRC."
      },
      {
        "q": "Mantenerse en el duelo y ralentizar el juego para ganar tiempo a recolocarse es un comportamiento de…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque de banda"
        ],
        "a": 3,
        "exp": "Mantenerse en el duelo y ralentizar el juego son comportamientos del MRC."
      },
      {
        "q": "'No pasarse' (aproximar-canalizar) y 'juntar líneas' con el equipo organizado son comportamientos de…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque de fondo"
        ],
        "a": 2,
        "exp": "Aproximar-canalizar y juntar líneas son comportamientos defensivos del MRO."
      },
      {
        "q": "El 'balance defensivo' y las 'ayudas' del equipo bien colocado son comportamientos de…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque inicial"
        ],
        "a": 2,
        "exp": "Balance defensivo, ayudas y anticipar/interceptar son comportamientos del MRO."
      },
      {
        "q": "Un jugador recibe en MTF y, en vez de seguir en su pasillo, conduce y cambia de carril buscando portería. Eso es…",
        "opts": [
          "Horizontalidad y amplitud",
          "Verticalidad con cambio de pasillo",
          "Repliegue",
          "Presión de 3 segundos",
          "Cuidar la bola"
        ],
        "a": 1,
        "exp": "Verticalidad más cambio de pasillo es un comportamiento característico del MTF."
      },
      {
        "q": "¿En qué momento se aprovecha la desorganización del rival inmediatamente tras la recuperación?",
        "opts": [
          "MPP",
          "MRO",
          "MTF",
          "MRC",
          "Ninguno"
        ],
        "a": 2,
        "exp": "El MTF aprovecha la desorganización del rival tras la transición, con verticalidad."
      },
      {
        "q": "La verticalidad, ¿es la prioridad del MPP?",
        "opts": [
          "Sí, es su seña principal",
          "No, el MPP prioriza la horizontalidad",
          "Sí, junto con la amplitud",
          "Solo durante la construcción",
          "Sí, igual que en el MRO"
        ],
        "a": 1,
        "exp": "No: el MPP prioriza la horizontalidad; la verticalidad es propia del MTF."
      },
      {
        "q": "Un entrenador que solo corrige patrones aislados sin atender a la interacción del equipo descuida el principio de…",
        "opts": [
          "Efecto mariposa",
          "Sinergia",
          "Estructura temporal",
          "Linealidad",
          "Repliegue"
        ],
        "a": 1,
        "exp": "Reducir el equipo a partes aisladas ignora la sinergia: el todo emerge de la interacción."
      },
      {
        "q": "El equipo recupera, pero el rival vuelve a apretar de inmediato y no hay espacio para correr; lo más coherente es pasar de MTF a…",
        "opts": [
          "MRC",
          "MPP",
          "MRO",
          "Saque de fondo",
          "Bully"
        ],
        "a": 1,
        "exp": "Si la transición no progresa y el rival presiona alto, conviene reorganizar la posesión en MPP."
      },
      {
        "q": "¿Qué pareja de momentos se da CON balón en posesión propia?",
        "opts": [
          "MRO y MRC",
          "MPP y MTF",
          "MPP y MRO",
          "MTF y MRC",
          "MRC y MTF"
        ],
        "a": 1,
        "exp": "Con balón están MPP y MTF; MRO y MRC son momentos sin balón."
      },
      {
        "q": "En el MTF el principio dominante respecto al juego es…",
        "opts": [
          "Horizontalidad sobre verticalidad",
          "Verticalidad sobre horizontalidad",
          "Recuperación sobre pase",
          "Repliegue sobre presión",
          "Amplitud sobre profundidad"
        ],
        "a": 1,
        "exp": "El MTF prioriza la verticalidad sobre la horizontalidad para finalizar rápido."
      },
      {
        "q": "Que en hockey una misma jugada ensayada no garantice el mismo resultado en partido es ejemplo de…",
        "opts": [
          "Sinergia",
          "No-linealidad",
          "Efecto mariposa",
          "Orden vs caos",
          "Redundancia"
        ],
        "a": 1,
        "exp": "La no-linealidad explica que el mismo estímulo no produzca siempre el mismo resultado."
      },
      {
        "q": "Tu equipo defiende organizado, recupera la bola y el rival queda descolocado. El momento al que debes transitar es…",
        "opts": [
          "MPP",
          "MTF",
          "MRO",
          "MRC",
          "Saque de banda"
        ],
        "a": 1,
        "exp": "De recuperación con rival desorganizado se pasa al MTF para finalizar con verticalidad."
      }
    ]
  },
  {
    "id": "t7",
    "titulo": "Diseño de Tareas",
    "icono": "🧩",
    "desc": "Elementos del juego, taxonomía/especificidad y manipulación de variables.",
    "estudio": [
      "Elementos <b>formales</b> (manipulables): <b>espacio, tiempo, meta móvil, compañero-adversario y reglamento</b>. Elementos <b>funcionales</b> (emergen): fase, momento, <b>medios técnicos</b>, sistema/roles, comportamientos.",
      "Taxonomía clásica de tareas, de menos a más específica: <b>genérica → general → dirigida → estructurada → especial → competitiva</b>. ('Hockey-tenis' o 'pañuelo con stick' = general; partido 9v9 a 3/4 = la más específica.)",
      "Taxonomía revisada: 3 ejes independientes — <b>especificidad decisional</b>, <b>estructura temporal</b> (cíclica/episódica/continua) y <b>densidad táctica</b> (baja/media/alta; la alta es la cercana al partido).",
      "Modificar variables: <b>reducir espacio</b> → más 1v1 y presión; ampliar → más desplazamientos. <b>Aumentar nº de porterías</b> → más cambios de orientación. <b>Limitar toques</b> → más movilidad sin balón.",
      "Diseño en 4 decisiones: ¿qué fase/momento? → ¿qué comportamiento? → ¿qué combinación de ejes? → ¿qué elementos formales manipulo?",
      "Progresión en sesión: <b>Introductoria → Optimización → Estrategia/Competición</b> (de menor a mayor densidad y especificidad)."
    ],
    "preguntas": [
      {
        "q": "El entrenador diseña un rondo 5v2 y luego un partido 9v9 a 3/4 de campo. ¿Cuál es la diferencia clave entre ambas en cuanto a especificidad?",
        "opts": [
          "El rondo es más específico porque tiene oposición",
          "Ambas tienen la misma especificidad porque hay oposición",
          "El rondo es competitiva y el 9v9 es dirigida",
          "Ninguna de las dos es específica al no usar portería reglamentaria",
          "El 9v9 es más específico por su cercanía a la competición real"
        ],
        "a": 4,
        "exp": "El 9v9 a 3/4 reproduce mejor las condiciones del partido (decisión, fases, densidad), por eso es más específico que un rondo."
      },
      {
        "q": "Un técnico quiere que sus jugadores mejoren la movilidad SIN balón. ¿Qué variable conviene manipular?",
        "opts": [
          "Ampliar el espacio de juego",
          "Aumentar el tamaño de las porterías",
          "Limitar el número de toques permitidos",
          "Añadir superioridad numérica al equipo en posesión",
          "Reducir el número de porterías a una sola"
        ],
        "a": 2,
        "exp": "Limitar los toques obliga a desmarcarse y ofrecer líneas de pase, generando más movilidad sin balón."
      },
      {
        "q": "Para forzar duelos 1v1 y aumentar la presión sobre el poseedor, ¿qué modificación es la más directa?",
        "opts": [
          "Ampliar las dimensiones del campo",
          "Reducir el espacio de juego",
          "Aumentar el número de porterías",
          "Limitar los toques a uno solo",
          "Dar superioridad numérica al atacante"
        ],
        "a": 1,
        "exp": "Reducir el espacio acerca a rivales y compañeros: más 1v1, más presión y ritmo más alto."
      },
      {
        "q": "Si en una tarea queremos provocar más CAMBIOS DE ORIENTACIÓN y mejor aprovechamiento del ancho, lo más eficaz es:",
        "opts": [
          "Reducir el espacio",
          "Aumentar el número de porterías a defender/atacar",
          "Limitar el número de toques",
          "Quitar las porterías y jugar a conservación",
          "Reducir el tamaño de las porterías"
        ],
        "a": 1,
        "exp": "Varias porterías obligan a buscar la menos protegida, lo que multiplica los cambios de orientación."
      },
      {
        "q": "Un entrenador amplía mucho el espacio de un 4v4. ¿Qué efecto cabe esperar?",
        "opts": [
          "Más duelos 1v1 y más presión",
          "Circulaciones de balón más rápidas",
          "Mayor densidad táctica automáticamente",
          "Más finalizaciones por minuto",
          "Más desplazamientos largos y menor presión"
        ],
        "a": 4,
        "exp": "Más espacio separa a los jugadores: aumentan los desplazamientos y baja la presión."
      },
      {
        "q": "Reducir el TAMAÑO de las porterías (no su número) en una tarea de finalización tiende a producir:",
        "opts": [
          "Más cambios de orientación",
          "Más 1v1 en zona central",
          "Más precisión y selección del momento de tiro",
          "Circulaciones más rápidas sin balón",
          "Mayor número de desplazamientos largos"
        ],
        "a": 2,
        "exp": "Porterías pequeñas castigan el tiro impreciso, obligando a seleccionar mejor cuándo y cómo finalizar."
      },
      {
        "q": "El técnico condiciona el marcador para que el equipo azul vaya perdiendo 0-2. ¿Qué efecto busca en ese equipo?",
        "opts": [
          "Reducir su ritmo y conservar más",
          "Mayor pasividad defensiva",
          "Menos interacciones entre jugadores",
          "Más afán recuperador y ritmo más alto",
          "Más precisión en el tiro lejano"
        ],
        "a": 3,
        "exp": "Ir por detrás en el marcador estimula la búsqueda del balón y eleva el ritmo y la intensidad."
      },
      {
        "q": "Dar superioridad numérica al equipo en posesión (p. ej. 5v3) busca, sobre todo:",
        "opts": [
          "Limitar interacciones y dificultar el ataque",
          "Aumentar la presión sobre el poseedor",
          "Reducir el ritmo al mínimo",
          "Estimular interacciones positivas y facilitar la fase ofensiva",
          "Exigir más precisión de tiro"
        ],
        "a": 3,
        "exp": "La superioridad facilita encontrar líneas de pase y favorece el éxito de la fase ofensiva."
      },
      {
        "q": "Trabajar en INFERIORIDAD numérica (p. ej. atacar 3v4) sirve principalmente para:",
        "opts": [
          "Facilitar el ataque y la posesión",
          "Estimular interacciones positivas sin oposición",
          "Exigir soluciones bajo presión, limitando las interacciones fáciles",
          "Aumentar el aprovechamiento del espacio",
          "Reducir la presión defensiva"
        ],
        "a": 2,
        "exp": "La inferioridad dificulta el ataque y obliga a resolver con menos opciones, exigiendo más al jugador."
      },
      {
        "q": "Un técnico observa demasiada conducción individual y poco juego asociativo. ¿Qué modificación lo corregiría mejor?",
        "opts": [
          "Limitar el número de toques",
          "Ampliar el espacio",
          "Aumentar el tamaño de las porterías",
          "Dar superioridad al atacante",
          "Quitar la oposición"
        ],
        "a": 0,
        "exp": "Limitar toques impide la conducción larga y obliga a pasar y moverse, fomentando lo asociativo."
      },
      {
        "q": "Clasifica la siguiente tarea: 'carrera continua de 10 minutos sin balón'.",
        "opts": [
          "Genérica",
          "General",
          "Dirigida",
          "Estructurada",
          "Competitiva"
        ],
        "a": 0,
        "exp": "Sin decisión, sin oposición y cíclica: es el ejemplo típico de tarea genérica."
      },
      {
        "q": "Clasifica: 'hockey-tenis' o 'pañuelo con stick y bola'.",
        "opts": [
          "Genérica",
          "General",
          "Dirigida",
          "Especial",
          "Competitiva"
        ],
        "a": 1,
        "exp": "Usa el stick pero no reproduce situaciones reales de juego: tarea general (inespecífica)."
      },
      {
        "q": "Clasifica: 'ruta de pase con oposición pasiva que marca el recorrido'.",
        "opts": [
          "Genérica",
          "General",
          "Dirigida",
          "Especial",
          "Competitiva"
        ],
        "a": 2,
        "exp": "Hay gesto específico y un recorrido pautado con oposición pasiva: tarea dirigida."
      },
      {
        "q": "Clasifica: '3v2 con finalización y reinicio tras cada acción'.",
        "opts": [
          "General",
          "Dirigida",
          "Estructurada",
          "Especial",
          "Competitiva"
        ],
        "a": 2,
        "exp": "Situación reducida con oposición real, finalización y reinicio: tarea estructurada."
      },
      {
        "q": "Clasifica: 'juego reducido 5v5+2 con direccionalidad a porterías reglamentarias'.",
        "opts": [
          "Genérica",
          "General",
          "Dirigida",
          "Especial",
          "Competitiva"
        ],
        "a": 3,
        "exp": "Muy cercana al juego real con comodines y direccionalidad: tarea especial."
      },
      {
        "q": "Clasifica: 'partido 9v9 a tres cuartos de campo con reglas oficiales'.",
        "opts": [
          "Dirigida",
          "Estructurada",
          "Especial",
          "Competitiva",
          "General"
        ],
        "a": 3,
        "exp": "Reproduce la competición real: tarea competitiva, la más específica de la taxonomía."
      },
      {
        "q": "Clasifica: 'circuito coordinativo de conducción entre conos, sin oposición'.",
        "opts": [
          "Genérica",
          "General",
          "Dirigida",
          "Estructurada",
          "Especial"
        ],
        "a": 1,
        "exp": "Usa el stick en gesto coordinativo pero sin situación real de juego: tarea general."
      },
      {
        "q": "Un 'rondo 4v1 a un toque para mantener posesión' encaja mejor como tarea:",
        "opts": [
          "Genérica",
          "General",
          "Dirigida",
          "Estructurada",
          "Competitiva"
        ],
        "a": 2,
        "exp": "Hay oposición y decisión pero sin direccionalidad ni finalización real: tarea dirigida."
      },
      {
        "q": "Si paso de un '2v0 de conducción y pase' a un '2v1 con defensor activo y portería', sobre todo aumento:",
        "opts": [
          "La estructura temporal cíclica",
          "La especificidad (más decisión y oposición real)",
          "El número de elementos formales",
          "La duración de la tarea",
          "El componente físico únicamente"
        ],
        "a": 1,
        "exp": "Añadir oposición activa, decisión y finalización acerca la tarea al juego real: sube la especificidad."
      },
      {
        "q": "Una tarea de densidad táctica BAJA se caracteriza por:",
        "opts": [
          "Pocos jugadores y una sola fase",
          "Varios jugadores con 1-2 fases conectadas",
          "Densidad cercana a la del partido",
          "Mucha incertidumbre decisional",
          "Juego continuo sin cortes"
        ],
        "a": 0,
        "exp": "Densidad baja: pocos jugadores y una única fase implicada."
      },
      {
        "q": "Una densidad táctica MEDIA implica:",
        "opts": [
          "Ausencia total de oposición",
          "Varios jugadores con 1-2 fases conectadas",
          "Un solo jugador ejecutando un gesto",
          "Densidad idéntica a la del partido",
          "Una única decisión técnica"
        ],
        "a": 1,
        "exp": "Densidad media: varios jugadores y una o dos fases del juego conectadas."
      },
      {
        "q": "Decir que una tarea tiene densidad táctica ALTA equivale a afirmar que:",
        "opts": [
          "Tiene muchos jugadores aunque sin oposición",
          "Su complejidad es cercana a la del partido real",
          "Es necesariamente cíclica",
          "No exige ninguna decisión",
          "Dura más tiempo que las demás"
        ],
        "a": 1,
        "exp": "La densidad alta es la que más se aproxima a la complejidad táctica del partido."
      },
      {
        "q": "En el eje de ESTRUCTURA TEMPORAL, una tarea en la que el juego fluye sin cortes es:",
        "opts": [
          "Cíclica",
          "Episódica",
          "Continua",
          "Abierta",
          "Dirigida"
        ],
        "a": 2,
        "exp": "Continua: el juego fluye sin paradas ni reinicios marcados."
      },
      {
        "q": "Una secuencia que se repite una y otra vez igual (ej. ida y vuelta de pase) tiene estructura temporal:",
        "opts": [
          "Cíclica",
          "Episódica",
          "Continua",
          "Abierta",
          "Inespecífica"
        ],
        "a": 0,
        "exp": "Cíclica: la misma secuencia se repite de forma reiterada."
      },
      {
        "q": "Una tarea con inicio y fin claros que se reinicia tras cada acción (ej. 3v2 con reinicio) tiene estructura temporal:",
        "opts": [
          "Cíclica",
          "Episódica",
          "Continua",
          "Especial",
          "Nula"
        ],
        "a": 1,
        "exp": "Episódica: cada repetición es un episodio con inicio/fin y posterior reinicio."
      },
      {
        "q": "En el eje de especificidad DECISIONAL, ejecutar un gesto SIN tener que decidir corresponde al nivel:",
        "opts": [
          "Nula",
          "Inespecífica",
          "Específica cerrada",
          "Específica abierta",
          "Continua"
        ],
        "a": 0,
        "exp": "Especificidad decisional nula: se ejecuta sin tomar decisiones."
      },
      {
        "q": "Decidir en un contexto real con incertidumbre y oposición corresponde a la especificidad decisional:",
        "opts": [
          "Nula",
          "Inespecífica",
          "Específica cerrada",
          "Específica abierta",
          "Genérica"
        ],
        "a": 3,
        "exp": "Específica abierta: decisión en contexto real con incertidumbre, como en el partido."
      },
      {
        "q": "Si quiero subir la DENSIDAD TÁCTICA de una tarea sin tocar los otros ejes, una opción válida es:",
        "opts": [
          "Hacerla cíclica en lugar de continua",
          "Conectar más fases del juego e implicar a más jugadores",
          "Quitar la decisión a los jugadores",
          "Reducir la duración total",
          "Eliminar la oposición"
        ],
        "a": 1,
        "exp": "Implicar más jugadores y encadenar fases aumenta la densidad táctica, que es un eje independiente."
      },
      {
        "q": "Los 3 ejes independientes de la taxonomía revisada de tareas son:",
        "opts": [
          "Volumen, intensidad y densidad",
          "Especificidad decisional, estructura temporal y densidad táctica",
          "Ataque, defensa y transición",
          "Técnica, táctica y físico",
          "Inicio, desarrollo y cierre"
        ],
        "a": 1,
        "exp": "Tres ejes independientes: especificidad decisional, estructura temporal y densidad táctica."
      },
      {
        "q": "La taxonomía clásica, ordenada de MENOS a MÁS específica, es:",
        "opts": [
          "Competitiva → especial → general → genérica",
          "Genérica → general → dirigida → estructurada → especial → competitiva",
          "Dirigida → general → genérica → competitiva",
          "Especial → estructurada → dirigida → general",
          "General → competitiva → dirigida → especial"
        ],
        "a": 1,
        "exp": "Genérica → general → dirigida → estructurada → especial → competitiva."
      },
      {
        "q": "¿Cuál de estas tareas es la MENOS específica?",
        "opts": [
          "Partido 9v9 a 3/4",
          "Carrera continua sin balón",
          "Juego reducido 5v5+2 con direccionalidad",
          "3v2 con finalización",
          "Ruta de pase con oposición pasiva"
        ],
        "a": 1,
        "exp": "La carrera continua (genérica) es la más alejada del juego real, la menos específica."
      },
      {
        "q": "Una tarea combina especificidad NULA + cíclica + densidad BAJA. Equivale, en la taxonomía clásica, a:",
        "opts": [
          "Genérica",
          "Dirigida",
          "Especial",
          "Competitiva",
          "Estructurada"
        ],
        "a": 0,
        "exp": "Nula + cíclica + baja = tarea genérica (ej. carrera continua)."
      },
      {
        "q": "Una tarea con especificidad ABIERTA + continua + densidad ALTA equivale a:",
        "opts": [
          "Genérica",
          "Dirigida",
          "Especial",
          "Competitiva",
          "General"
        ],
        "a": 3,
        "exp": "Abierta + continua + alta = tarea competitiva (juego real)."
      },
      {
        "q": "¿Cuál de los siguientes NO es un elemento FORMAL (manipulable) de la tarea?",
        "opts": [
          "Espacio",
          "Tiempo",
          "Medios técnicos",
          "Reglamento",
          "Meta móvil"
        ],
        "a": 2,
        "exp": "Los medios técnicos son funcionales (emergen). Los formales son espacio, tiempo, meta móvil, compañero-adversario y reglamento."
      },
      {
        "q": "El entrenador quiere intervenir directamente sobre la tarea. ¿Cuál de estos puede manipular DIRECTAMENTE?",
        "opts": [
          "La fase de juego que emerge",
          "El sistema y los roles que aparecen",
          "El espacio y el reglamento",
          "Los comportamientos tácticos resultantes",
          "Los medios técnicos empleados"
        ],
        "a": 2,
        "exp": "Espacio y reglamento son formales (manipulables); fase, sistema, comportamientos y medios técnicos son funcionales (emergen)."
      },
      {
        "q": "¿Cuál de los siguientes es un elemento FUNCIONAL (que emerge del juego)?",
        "opts": [
          "El espacio",
          "El reglamento",
          "Los medios técnicos",
          "El tiempo",
          "La meta móvil"
        ],
        "a": 2,
        "exp": "Los medios técnicos emergen del juego: son funcionales. Espacio, tiempo, meta y reglamento son formales."
      },
      {
        "q": "El 'momento' (MPP, MTF, MRO, MRC) dentro de una tarea es un elemento:",
        "opts": [
          "Formal",
          "Funcional",
          "Reglamentario",
          "Espacial",
          "Temporal-manipulable"
        ],
        "a": 1,
        "exp": "El momento emerge del juego: es funcional, no se manipula directamente."
      },
      {
        "q": "Los cinco elementos FORMALES manipulables de una tarea son:",
        "opts": [
          "Espacio, tiempo, meta móvil, compañero-adversario, reglamento",
          "Fase, momento, medios técnicos, sistema, comportamientos",
          "Espacio, fase, roles, reglamento, tiempo",
          "Tiempo, momento, meta móvil, sistema, espacio",
          "Espacio, medios técnicos, reglamento, fase, tiempo"
        ],
        "a": 0,
        "exp": "Formales: espacio, tiempo, meta móvil, compañero-adversario y reglamento."
      },
      {
        "q": "En el diseño de tareas con 4 decisiones encadenadas, ¿por cuál se EMPIEZA?",
        "opts": [
          "Por elegir los elementos formales a manipular",
          "Por decidir qué fase/momento se quiere entrenar",
          "Por fijar el número de jugadores",
          "Por establecer la duración",
          "Por definir el resultado buscado"
        ],
        "a": 1,
        "exp": "Orden: fase/momento → comportamiento → combinación de ejes → elementos formales. Se empieza por la fase/momento."
      },
      {
        "q": "En la secuencia de las cuatro decisiones, la manipulación de los elementos FORMALES se sitúa:",
        "opts": [
          "En primer lugar",
          "En segundo lugar",
          "En tercer lugar",
          "En cuarto y último lugar",
          "Antes de elegir la fase"
        ],
        "a": 3,
        "exp": "Los elementos formales se concretan en la última decisión, una vez definidos fase, comportamiento y ejes."
      },
      {
        "q": "Un entrenador empieza la sesión: ¿qué decide ANTES, el comportamiento a entrenar o el espacio del campo?",
        "opts": [
          "El espacio, porque es lo más concreto",
          "Es indiferente el orden",
          "Ambos a la vez en la primera decisión",
          "El comportamiento, porque guía qué elementos formales manipular después",
          "El espacio, porque condiciona la fase"
        ],
        "a": 3,
        "exp": "El comportamiento (2ª decisión) precede a los elementos formales (4ª): primero se sabe qué entrenar y luego cómo."
      },
      {
        "q": "La PROGRESIÓN de densidad/especificidad dentro de una sesión sigue el orden:",
        "opts": [
          "Competición → optimización → introductoria",
          "Introductoria → optimización → estrategia/competición",
          "Estrategia → introductoria → optimización",
          "Optimización → introductoria → competición",
          "Una única fase sin progresión"
        ],
        "a": 1,
        "exp": "De menor a mayor densidad y especificidad: introductoria → optimización → estrategia/competición."
      },
      {
        "q": "La parte INTRODUCTORIA de la sesión se caracteriza por:",
        "opts": [
          "Decisional abierta, continua y densidad alta",
          "Decisional nula→cerrada, temporal cíclica y densidad baja",
          "Decisional cerrada→abierta, episódica→continua y densidad media",
          "Juego real y situaciones especiales",
          "Densidad alta con juego global reducido"
        ],
        "a": 1,
        "exp": "Introductoria: nula→cerrada, cíclica y densidad baja (calentamiento, gestos)."
      },
      {
        "q": "La parte de OPTIMIZACIÓN (principal) de la sesión se caracteriza por:",
        "opts": [
          "Decisional nula, cíclica y densidad baja",
          "Decisional cerrada→abierta, episódica→continua y densidad media",
          "Decisional abierta, continua y densidad alta",
          "Solo juego predeportivo",
          "Únicamente rutas de pase y rondos"
        ],
        "a": 1,
        "exp": "Optimización: cerrada→abierta, episódica→continua y densidad media."
      },
      {
        "q": "La parte de ESTRATEGIA/COMPETICIÓN de la sesión se caracteriza por:",
        "opts": [
          "Densidad baja y temporal cíclica",
          "Decisional abierta, continua y densidad alta",
          "Solo rondos y rutas de pase",
          "Decisional nula sin oposición",
          "Ausencia de oposición"
        ],
        "a": 1,
        "exp": "Estrategia/competición: abierta, continua y densidad alta (juego real, situaciones especiales)."
      },
      {
        "q": "Si en una sesión un entrenador propone una tarea de densidad alta y decisión abierta justo al inicio, el problema es que:",
        "opts": [
          "Ha respetado bien la progresión",
          "Ha invertido la progresión, empezando por lo que debería ir al final",
          "Falta añadir oposición",
          "La tarea es genérica y sobra",
          "No hay ningún problema metodológico"
        ],
        "a": 1,
        "exp": "La densidad alta y la decisión abierta corresponden a la fase de estrategia/competición (final), no al inicio."
      },
      {
        "q": "Quiero mejorar la finalización bajo presión real. ¿Qué tipo de tarea encaja mejor en la fase principal?",
        "opts": [
          "Una genérica de carrera continua",
          "Una general tipo hockey-tenis",
          "Una dirigida sin oposición",
          "Una estructurada o especial con oposición y finalización",
          "Una tarea de densidad baja y decisión nula"
        ],
        "a": 3,
        "exp": "Para finalizar bajo presión se necesita oposición real y decisión: tareas estructuradas/especiales de densidad media-alta."
      },
      {
        "q": "Para entrenar la TRANSICIÓN ofensiva-defensiva tras pérdida, lo coherente es diseñar una tarea con estructura temporal:",
        "opts": [
          "Cíclica, repitiendo siempre lo mismo",
          "Nula, sin secuencia",
          "Genérica sin balón",
          "Continua o episódica, que permita encadenar fases tras la pérdida",
          "Estática sin reinicio"
        ],
        "a": 3,
        "exp": "La transición exige encadenar fases y reaccionar al cambio: estructura continua o episódica, no cíclica cerrada."
      },
      {
        "q": "Un técnico quiere AISLAR un gesto técnico concreto con poca carga decisional. ¿Qué tarea elige?",
        "opts": [
          "Competitiva 9v9",
          "Dirigida (gesto específico, oposición pasiva, decisión cerrada)",
          "Especial 5v5+2",
          "Estructurada 3v2 con reinicio",
          "Tarea de densidad alta y decisión abierta"
        ],
        "a": 1,
        "exp": "Para aislar un gesto con baja decisión conviene una tarea dirigida (cerrada, oposición pasiva)."
      },
      {
        "q": "Diferencia clave entre una tarea ESTRUCTURADA y una ESPECIAL:",
        "opts": [
          "La especial no tiene oposición y la estructurada sí",
          "La especial es más cercana al juego real (mayor densidad y direccionalidad) que la estructurada",
          "La estructurada es competitiva y la especial es general",
          "No hay diferencia, son sinónimos",
          "La estructurada usa porterías reglamentarias y la especial no"
        ],
        "a": 1,
        "exp": "En la progresión, la especial es más específica que la estructurada: más densidad, direccionalidad y contexto real."
      },
      {
        "q": "Si reduzco el espacio Y limito los toques a la vez en un 4v4, el efecto combinado será:",
        "opts": [
          "Menos presión y más conducción individual",
          "Más desplazamientos largos y juego pausado",
          "Más cambios de orientación con balones largos",
          "Más presión, más ritmo y más movilidad sin balón",
          "Menor densidad táctica"
        ],
        "a": 3,
        "exp": "Reducir espacio sube presión y ritmo; limitar toques añade movilidad sin balón: efectos que se suman."
      },
      {
        "q": "Un entrenador modifica el REGLAMENTO de una tarea (ej. 'gol solo válido tras 3 pases'). Esto es manipular un elemento:",
        "opts": [
          "Funcional",
          "Formal",
          "Emergente",
          "Decisional puro",
          "Temporal cíclico"
        ],
        "a": 1,
        "exp": "El reglamento es un elemento formal, manipulable directamente por el entrenador."
      },
      {
        "q": "La taxonomía revisada se organiza en torno a:",
        "opts": [
          "Un único continuo de dificultad",
          "Tres ejes independientes",
          "Dos categorías opuestas",
          "Cinco niveles jerárquicos fijos",
          "Cuatro fases de juego"
        ],
        "a": 1,
        "exp": "Tres ejes independientes: especificidad decisional, estructura temporal y densidad táctica."
      },
      {
        "q": "El interés de que los 3 ejes sean INDEPENDIENTES es que permiten:",
        "opts": [
          "Que al cambiar uno cambien siempre los otros dos",
          "Reducir la taxonomía a una sola variable",
          "Eliminar la taxonomía clásica por completo",
          "Diseñar solo tareas competitivas",
          "Combinarlos libremente para graduar la tarea con precisión"
        ],
        "a": 4,
        "exp": "Al ser independientes, se pueden combinar a voluntad (ej. subir densidad sin tocar la decisión) para ajustar la tarea."
      }
    ]
  },
  {
    "id": "t8",
    "titulo": "Reglamento y Adaptaciones",
    "icono": "📋",
    "desc": "Reglas, castigos, penalti córner/stroke, tarjetas, señales y adaptaciones.",
    "estudio": [
      "4 ejes para arbitrar una jugada: <b>Seguridad, Intención, Jugabilidad y Zona</b> de la acción.",
      "Mapa de castigos: atacante (cualquier sitio) → <b>golpe franco</b>. Defensor en último cuarto: sin intención → golpe franco; <b>con intención → PC</b>. Defensor en área: sin intención → <b>PC</b>; intencionada o evita gol → <b>stroke</b>.",
      "<b>Penalti córner</b>: <b>4 defensas + portero</b> (o 5 defensas) tras la línea de fondo; <b>40 s</b> de preparación; en tiro de golpeo/látigo la bola debe ir a altura de tabla.",
      "Tarjetas: <b>verde</b> = 2 min; <b>amarilla</b> = mín. 5 min (10 si hay riesgo de lesión); <b>roja</b> = expulsión permanente (+1 partido). Hasta infantil no se usan tarjetas.",
      "Sustituciones: <b>sin límite</b> y sin parar el tiempo (salvo portero). <b>NO se puede sustituir durante un penalti córner</b> (salvo portero lesionado). En una falta, el mismo jugador que saca puede poner la bola en juego conduciéndola (auto-pase).",
      "Un gol solo es válido si la bola es jugada por un atacante <b>dentro del área</b> y pasa por debajo del larguero. Una bola es <b>peligrosa</b> cuando provoca una 'acción evasiva razonable'.",
      "Regla del <b>23 m / último cuarto</b>: un golpe franco atacante NO puede entrar directo al área; debe moverse 5 m (pase/conducción) o tocarla un defensa. Despeje voluntario del portero a fondo sin peligro → <b>PC en contra</b>.",
      "Señales arbitrales: <b>bully</b> = manos alternas arriba/abajo con palmas enfrentadas; <b>penalti córner o gol</b> = ambos brazos extendidos en horizontal (a portería = PC; a medio campo = gol); <b>penalti stroke</b> = una mano apunta al punto de penalti y la otra al cielo.",
      "Adaptaciones — <b>Benjamín (8-9)</b>: áreas rectas (10 m), portero obligatorio, <b>no hay stroke</b>, PC en 1vs1 contra portero. Pre-benjamín: sin derecho ni revés. Córner desde mediocampo en Alevín; desde línea 22 en Infantil/Senior. Inicio: sorteo y cambio de orientación en el 3er cuarto."
    ],
    "preguntas": [
      {
        "q": "Un atacante carga con el cuerpo a un defensa en el medio campo para arrebatarle la bola. ¿Qué decide el árbitro?",
        "opts": [
          "Golpe franco a favor de la defensa",
          "Penalti córner",
          "Penalti stroke",
          "Bully en el lugar de la acción",
          "Ventaja para el atacante"
        ],
        "a": 0,
        "exp": "Falta de un atacante en cualquier zona del campo → golpe franco a favor del equipo contrario (la defensa)."
      },
      {
        "q": "Un defensa, dentro de su área, detiene con el pie de forma involuntaria un disparo que no iba a entrar. ¿Qué se sanciona?",
        "opts": [
          "Golpe franco para el ataque",
          "Penalti córner",
          "Penalti stroke",
          "Salida de fondo",
          "Bully"
        ],
        "a": 1,
        "exp": "Falta del defensor dentro del área sin intención y sin evitar gol claro → penalti córner."
      },
      {
        "q": "Un defensa, dentro del área, frena con el cuerpo de forma deliberada un disparo que entraba a portería. ¿Qué corresponde?",
        "opts": [
          "Golpe franco",
          "Penalti córner",
          "Penalti stroke",
          "Tarjeta verde y se repite",
          "Salida de fondo"
        ],
        "a": 2,
        "exp": "Falta intencionada del defensor en el área o que evita un gol → penalti stroke."
      },
      {
        "q": "Un defensa comete una falta intencionada (no en el área) dentro de su último cuarto de campo. ¿Qué corresponde?",
        "opts": [
          "Golpe franco para el ataque",
          "Penalti córner",
          "Penalti stroke",
          "Salida de fondo",
          "Bully"
        ],
        "a": 1,
        "exp": "Defensor con intención en el último cuarto (fuera del área) → penalti córner."
      },
      {
        "q": "Un defensa comete una falta SIN intención en su último cuarto, fuera del área. ¿Qué corresponde?",
        "opts": [
          "Golpe franco para el ataque",
          "Penalti córner",
          "Penalti stroke",
          "Bully",
          "Saque de banda"
        ],
        "a": 0,
        "exp": "Defensor sin intención en el último cuarto (fuera del área) → golpe franco; solo con intención sería PC."
      },
      {
        "q": "¿Cuáles son los cuatro ejes que guían al árbitro al valorar una jugada?",
        "opts": [
          "Tiempo, espacio, número y meta",
          "Seguridad, intención, jugabilidad y zona de la acción",
          "Saque, gol, falta y córner",
          "Bola, stick, pie y cuerpo",
          "Ataque, defensa, transición y posesión"
        ],
        "a": 1,
        "exp": "Seguridad, intención, jugabilidad y zona de la acción son los cuatro ejes de arbitraje."
      },
      {
        "q": "¿Cuántos jugadores defensores se sitúan tras la línea de fondo en un penalti córner?",
        "opts": [
          "3 defensas y 1 portero",
          "4 defensas y 1 portero (o 5 defensas)",
          "5 defensas y 1 portero",
          "2 defensas y 2 atacantes",
          "6 defensas sin portero"
        ],
        "a": 1,
        "exp": "En el PC defienden 4 jugadores más el portero, o bien 5 jugadores de campo, tras la línea de fondo."
      },
      {
        "q": "¿Cuánto tiempo de preparación, con el reloj parado, tiene un penalti córner?",
        "opts": [
          "10 segundos",
          "23 segundos",
          "40 segundos",
          "60 segundos",
          "90 segundos"
        ],
        "a": 2,
        "exp": "El penalti córner dispone de 40 segundos de preparación con el tiempo detenido."
      },
      {
        "q": "En un penalti córner, ¿qué tiros deben ir obligatoriamente a altura de tabla?",
        "opts": [
          "El push y el arrastre",
          "El golpeo y el látigo (flick alto prohibido)",
          "El pinche y el desvío",
          "Solo el arrastre",
          "Todos los tiros sin excepción"
        ],
        "a": 1,
        "exp": "En el PC el primer tiro de golpeo y el de látigo (flick) solo valen a altura de tabla; pinche, desvío, push y arrastre pueden ir a cualquier altura."
      },
      {
        "q": "En un penalti córner, antes de poder lanzar a portería la bola debe…",
        "opts": [
          "Botar dos veces",
          "Salir del área y volver a entrar",
          "Recorrer 23 metros",
          "Ser tocada por el portero",
          "Pasar por el punto de stroke"
        ],
        "a": 1,
        "exp": "La bola debe salir del área y volver a entrar antes de poder tirar a gol en el PC."
      },
      {
        "q": "Durante un penalti córner, un defensa sale antes de tiempo de detrás de la línea de fondo. ¿Qué ocurre?",
        "opts": [
          "Se concede penalti stroke",
          "Va al medio campo y defienden con uno menos",
          "Se repite el córner sin más",
          "Tarjeta roja directa al defensa",
          "No hay sanción si no toca la bola"
        ],
        "a": 1,
        "exp": "El defensor adelantado se retira al medio campo y su equipo defiende el córner con un jugador menos."
      },
      {
        "q": "El portero defensor se lesiona en pleno penalti córner. Respecto a las sustituciones…",
        "opts": [
          "No se puede sustituir a nadie bajo ningún concepto",
          "Se permite sustituir al portero lesionado (excepción a la regla del PC)",
          "Se puede cambiar a cualquier jugador",
          "Se anula el córner y se reanuda con bully",
          "Se concede stroke por la pausa"
        ],
        "a": 1,
        "exp": "Durante un PC no se puede sustituir, salvo precisamente el portero lesionado, que sí puede ser reemplazado."
      },
      {
        "q": "En un penalti stroke, ¿qué debe hacer el portero hasta que el árbitro pite?",
        "opts": [
          "Salir a achicar el ángulo",
          "Permanecer sobre la línea de gol sin moverse",
          "Tumbarse cubriendo el suelo",
          "Colocarse a 5 m del punto",
          "Cubrir solo uno de los palos"
        ],
        "a": 1,
        "exp": "El portero debe estar sobre la línea de gol y no puede moverse hasta el pitido del árbitro."
      },
      {
        "q": "En un penalti stroke el lanzador adelanta la bola antes del pitido y marca. ¿Qué decide el árbitro?",
        "opts": [
          "Gol válido",
          "Se anula el gol",
          "Se repite el stroke",
          "Penalti córner",
          "Tarjeta verde y gol válido"
        ],
        "a": 1,
        "exp": "Si el lanzador comete la infracción, se anula el gol; si la comete el portero, se repite el lanzamiento."
      },
      {
        "q": "Un penalti stroke se ejecuta y el portero ataja la bola (no es gol). ¿Cómo se reanuda el juego?",
        "opts": [
          "Con otro stroke",
          "Salida de fondo para el equipo defensor",
          "Penalti córner para el ataque",
          "Bully en el punto de penalti",
          "Golpe franco para el ataque"
        ],
        "a": 1,
        "exp": "Si el stroke no termina en gol, el juego se reanuda con una salida de fondo del equipo defensor."
      },
      {
        "q": "¿A qué distancia del punto de portería se ejecuta el penalti stroke?",
        "opts": [
          "5 m",
          "6,40 m",
          "10 m",
          "14,63 m",
          "23 m"
        ],
        "a": 1,
        "exp": "El punto de penalti stroke está a 6,40 m de la línea de gol."
      },
      {
        "q": "Un jugador recibe tarjeta verde. ¿Cuánto tiempo queda fuera?",
        "opts": [
          "1 minuto",
          "2 minutos",
          "5 minutos",
          "10 minutos",
          "Solo aviso, sin salir"
        ],
        "a": 1,
        "exp": "La tarjeta verde supone 2 minutos de suspensión temporal."
      },
      {
        "q": "Un jugador recibe tarjeta amarilla por una entrada dura. ¿Cuánto tiempo está fuera como mínimo?",
        "opts": [
          "2 minutos",
          "Mínimo 5 minutos (10 si hubo riesgo de lesión)",
          "Exactamente 5 minutos siempre",
          "Máximo 5 minutos",
          "El resto del cuarto"
        ],
        "a": 1,
        "exp": "Amarilla: mínimo 5 minutos fuera; pueden ser 10 si la acción conllevó riesgo de lesión."
      },
      {
        "q": "La tarjeta roja conlleva…",
        "opts": [
          "5 minutos fuera y vuelve",
          "10 minutos fuera",
          "Expulsión permanente del partido (más sanción de al menos 1 partido)",
          "Repetir la jugada",
          "Solo una advertencia formal"
        ],
        "a": 2,
        "exp": "Roja = expulsión definitiva del encuentro, con sanción mínima de un partido adicional."
      },
      {
        "q": "¿A partir de qué categoría se empiezan a usar las tarjetas?",
        "opts": [
          "Se usan desde benjamín",
          "No se usan tarjetas hasta superar la categoría infantil",
          "Solo en senior",
          "Desde alevín",
          "Desde pre-benjamín"
        ],
        "a": 1,
        "exp": "Hasta la categoría infantil (inclusive) no se utilizan tarjetas; aparecen en categorías superiores."
      },
      {
        "q": "El árbitro mueve las manos alternativamente arriba y abajo con las palmas enfrentadas. ¿Qué señala?",
        "opts": [
          "Penalti córner",
          "Bully (reanudación sin sanción)",
          "Ventaja",
          "Juego peligroso",
          "Salida de fondo"
        ],
        "a": 1,
        "exp": "Esa señal de manos alternas con palmas enfrentadas indica un bully."
      },
      {
        "q": "El árbitro apunta con una mano al punto de penalti y levanta la otra hacia el cielo. ¿Qué señala?",
        "opts": [
          "Penalti córner",
          "Gol",
          "Penalti stroke",
          "Bully",
          "Obstrucción"
        ],
        "a": 2,
        "exp": "Una mano al punto y la otra al cielo es la señal del penalti stroke."
      },
      {
        "q": "El árbitro extiende ambos brazos horizontales apuntando hacia la portería. ¿Qué señala?",
        "opts": [
          "Gol",
          "Penalti córner",
          "Salida de fondo",
          "Bully",
          "Ventaja"
        ],
        "a": 1,
        "exp": "Brazos horizontales hacia la portería = penalti córner; los mismos brazos hacia el medio campo = gol."
      },
      {
        "q": "El árbitro extiende ambos brazos horizontales señalando hacia el medio campo. ¿Qué indica?",
        "opts": [
          "Penalti córner",
          "Gol concedido",
          "Bully",
          "Tiempo muerto",
          "Salida de banda"
        ],
        "a": 1,
        "exp": "Los brazos en horizontal apuntando al medio campo señalan gol; apuntando a portería sería PC."
      },
      {
        "q": "El árbitro cruza ambos brazos por encima de la cabeza. ¿Qué señala?",
        "opts": [
          "Ventaja",
          "Detención del tiempo de juego",
          "Penalti stroke",
          "Bully",
          "Gol"
        ],
        "a": 1,
        "exp": "Brazos cruzados sobre la cabeza indican que se para el tiempo de juego."
      },
      {
        "q": "El árbitro alza un brazo en la dirección del juego sin pitar la falta. ¿Qué está aplicando?",
        "opts": [
          "Bully",
          "Ley de la ventaja",
          "Penalti córner",
          "Salida de fondo",
          "Detención de tiempo"
        ],
        "a": 1,
        "exp": "Alzar el brazo en la dirección del juego es la señal de ventaja: hubo falta pero conviene seguir."
      },
      {
        "q": "El árbitro extiende ambos brazos en cruz horizontal apuntando hacia un lateral del fondo. Habitualmente indica…",
        "opts": [
          "Penalti stroke",
          "Salida de fondo / saque de esquina según quién tocó",
          "Gol",
          "Bully",
          "Ventaja"
        ],
        "a": 1,
        "exp": "Los brazos en cruz horizontal hacia el fondo señalan la reanudación por línea de fondo (salida o córner) según quién la tocó por última vez."
      },
      {
        "q": "Para que un gol sea válido, la bola debe…",
        "opts": [
          "Entrar limpia desde cualquier punto del campo",
          "Ser jugada por un atacante dentro del área y pasar bajo el larguero",
          "Marcarse únicamente de penalti córner",
          "Pasar por encima del larguero",
          "Ser tocada por un defensa dentro del área"
        ],
        "a": 1,
        "exp": "El gol solo vale si un atacante juega la bola dentro del área y esta cruza por debajo del larguero."
      },
      {
        "q": "Un disparo desde fuera del área entra en portería sin tocar a nadie dentro del área. ¿Es gol?",
        "opts": [
          "Sí, si entra limpio",
          "No, porque no fue jugado por un atacante dentro del área",
          "Sí, pero solo en senior",
          "Sí, si va a ras de suelo",
          "Solo si lo desvía el portero"
        ],
        "a": 1,
        "exp": "No es gol: la bola no fue jugada por un atacante dentro del área, requisito imprescindible."
      },
      {
        "q": "¿Cuándo se considera que una bola es 'peligrosa'?",
        "opts": [
          "Cuando supera la altura de la rodilla",
          "Cuando provoca una acción evasiva razonable en otro jugador",
          "Cuando va a más de 20 km/h",
          "Cuando sale del área",
          "Cuando la juega el portero"
        ],
        "a": 1,
        "exp": "Bola peligrosa es la que obliga a un jugador a realizar una acción evasiva razonable."
      },
      {
        "q": "En el último cuarto (regla del 23 m), el ataque dispone de un golpe franco a 18 m del fondo. ¿Qué condición tiene?",
        "opts": [
          "Puede ir directo al área sin restricciones",
          "No puede entrar directo al área: debe moverse 5 m (pase/conducción) o tocarla un defensa",
          "Se convierte automáticamente en córner",
          "Solo puede ejecutarse de golpeo",
          "Debe lanzarse antes de 5 segundos"
        ],
        "a": 1,
        "exp": "El golpe franco atacante en el 23 m no puede ir directo al área; primero debe recorrer 5 m o ser tocada por un defensa."
      },
      {
        "q": "El portero despeja voluntariamente la bola hacia su propia línea de fondo, sin que hubiera peligro de gol. ¿Qué se sanciona?",
        "opts": [
          "Salida de fondo a su favor",
          "Penalti córner en contra",
          "Penalti stroke",
          "Golpe franco para él",
          "Bully"
        ],
        "a": 1,
        "exp": "El despeje voluntario a fondo sin peligro de gol se castiga con penalti córner en contra del defensor."
      },
      {
        "q": "Un atacante toca la bola por última vez y esta sale por la línea de fondo sin ser gol. ¿Cómo se reanuda?",
        "opts": [
          "Penalti córner",
          "Salida de fondo para el defensor (máx. 15 m del fondo)",
          "Saque de esquina para el ataque",
          "Bully en el área",
          "Penalti stroke"
        ],
        "a": 1,
        "exp": "Si la bola sale por fondo tocada en último lugar por un atacante, hay salida de fondo del defensor, colocada hasta a 15 m del fondo."
      },
      {
        "q": "Tras una falta normal, ¿puede el mismo jugador que la saca poner la bola en juego conduciéndola él mismo?",
        "opts": [
          "No, debe pasarla obligatoriamente a un compañero",
          "Sí, puede autopasarse y conducirla (auto-pase)",
          "Solo si lo autoriza el árbitro",
          "Solo en el último cuarto",
          "No, debe esperar el pitido"
        ],
        "a": 1,
        "exp": "En una falta, el mismo jugador puede poner la bola en juego y seguir conduciéndola: es el auto-pase."
      },
      {
        "q": "En un golpe franco, ¿a qué distancia mínima deben colocarse los jugadores contrarios?",
        "opts": [
          "2 m",
          "5 m",
          "3 m",
          "6,40 m",
          "10 m"
        ],
        "a": 1,
        "exp": "Los adversarios deben situarse a un mínimo de 5 m de la bola en un golpe franco."
      },
      {
        "q": "Antes de tocar la bola un atacante que va a recibir un flick alto, existen los '5 m sagrados'. ¿Qué se considera peligroso?",
        "opts": [
          "Que un defensa esté a menos de 5 m del receptor",
          "Que un atacante esté a más de 5 m",
          "Que la bola vaya a ras de suelo",
          "Cualquier interceptación segura",
          "Que el receptor esté a distancia de juego"
        ],
        "a": 0,
        "exp": "Antes del toque hay 5 m de protección: si un defensa está a menos de 5 m del receptor de un balón alto, es peligroso."
      },
      {
        "q": "¿Cuál de estas afirmaciones es FALSA?",
        "opts": [
          "En hockey no hay límite de sustituciones",
          "El penalti stroke no se ejecuta de golpeo",
          "Se puede sustituir a cualquier jugador durante un penalti córner",
          "El portero juega la bola con cualquier parte del cuerpo dentro del área",
          "El mismo jugador que saca una falta puede conducir la bola"
        ],
        "a": 2,
        "exp": "Es falsa: durante un PC no se puede sustituir (salvo el portero lesionado)."
      },
      {
        "q": "Sobre las sustituciones en hockey, ¿qué condición es correcta?",
        "opts": [
          "Solo entra el sustituto cuando el sustituido ha abandonado el campo",
          "Hay que parar el tiempo en cada cambio",
          "Máximo tres cambios por partido",
          "Solo se puede cambiar en el descanso",
          "El árbitro debe autorizar cada cambio uno a uno"
        ],
        "a": 0,
        "exp": "El sustituto solo entra cuando el sustituido ya ha salido; los cambios son ilimitados y sin parar el reloj (salvo portero)."
      },
      {
        "q": "Durante el juego se detecta que un equipo tiene un jugador de más en el campo. ¿Qué se sanciona?",
        "opts": [
          "Golpe franco en contra",
          "Tarjeta amarilla al capitán",
          "Penalti córner",
          "Penalti stroke",
          "Tarjeta verde al jugador extra"
        ],
        "a": 1,
        "exp": "El exceso de jugadores en campo se sanciona con tarjeta amarilla al capitán del equipo infractor."
      },
      {
        "q": "¿Cuántos jugadores como máximo puede tener un equipo simultáneamente en el campo?",
        "opts": [
          "9",
          "11",
          "10",
          "12",
          "13"
        ],
        "a": 1,
        "exp": "Máximo 11 jugadores en campo, con o sin portero."
      },
      {
        "q": "¿Qué equipamiento es obligatorio para el portero?",
        "opts": [
          "Solo casco",
          "Casco, guardas de piernas y pies, y camiseta distinta a ambos equipos",
          "Máscara y guantes de campo",
          "Espinilleras y protector bucal",
          "Casco y guantes normales"
        ],
        "a": 1,
        "exp": "El portero debe llevar casco, guardas de piernas y pies, y una camiseta diferenciada de ambos equipos."
      },
      {
        "q": "Respecto a los cascos de los jugadores de campo, ¿qué es correcto?",
        "opts": [
          "Pueden llevar casco en todo momento",
          "No se permite casco a jugadores de campo (máscara solo defendiendo un PC)",
          "El casco es obligatorio para todos",
          "Solo lo lleva el capitán",
          "Se permite casco únicamente en saques"
        ],
        "a": 1,
        "exp": "Los jugadores de campo no pueden usar casco; sí se admite máscara protectora únicamente al defender un penalti córner."
      },
      {
        "q": "¿Cómo se decide el inicio del partido y la orientación?",
        "opts": [
          "Con un bully en el centro del campo",
          "Por sorteo con moneda, cambiando de orientación en el 3er cuarto",
          "Con un penalti córner inicial",
          "Saca siempre el equipo local",
          "Con saque desde el área"
        ],
        "a": 1,
        "exp": "El comienzo se decide por sorteo de moneda y se cambia de orientación al iniciar el tercer cuarto."
      },
      {
        "q": "¿Qué dimensiones tiene el terreno de juego de hockey 11 contra 11?",
        "opts": [
          "100 × 60 m",
          "91,4 × 55 m",
          "90 × 45 m",
          "91,4 × 50 m",
          "80 × 40 m"
        ],
        "a": 1,
        "exp": "El campo de hockey 11x11 mide 91,4 × 55 m."
      },
      {
        "q": "¿Cuáles son las medidas reglamentarias de la portería?",
        "opts": [
          "3 m de ancho × 2 m de alto",
          "3,66 m de ancho × 2,14 m de alto",
          "4 m de ancho × 2,5 m de alto",
          "3,66 m de ancho × 2 m de alto",
          "2,14 m de ancho × 3,66 m de alto"
        ],
        "a": 1,
        "exp": "La portería mide 3,66 m de ancho por 2,14 m de alto."
      },
      {
        "q": "¿Dónde se colocan las porterías respecto al campo?",
        "opts": [
          "Dentro del campo, sobre la línea de fondo",
          "Fuera del campo, en el centro de cada línea de fondo y en contacto con ella",
          "Dentro del área, en el centro",
          "A 1 m por fuera del fondo",
          "En las esquinas del campo"
        ],
        "a": 1,
        "exp": "Las porterías se sitúan por fuera del campo, centradas en cada línea de fondo y en contacto con ella."
      },
      {
        "q": "¿Hasta qué distancia máxima del fondo puede colocarse la bola en una salida de fondo?",
        "opts": [
          "5 m",
          "10 m",
          "15 m",
          "23 m",
          "Sin límite"
        ],
        "a": 2,
        "exp": "La salida de fondo se ejecuta como máximo a 15 m de la línea de fondo."
      },
      {
        "q": "Categoría BENJAMÍN (8-9 años): ¿cuál de estas afirmaciones es correcta?",
        "opts": [
          "Áreas rectas y se defienden dos porterías",
          "Hay portero obligatorio pero no existe el penalti stroke",
          "El PC se defiende con 3 jugadores y portero",
          "Áreas rectas y sin portero",
          "Áreas semicirculares y una sola portería"
        ],
        "a": 1,
        "exp": "En benjamín las áreas son rectas (10 m), el portero es obligatorio y no existe el penalti stroke."
      },
      {
        "q": "En categoría BENJAMÍN, ¿cómo se resuelve un penalti córner?",
        "opts": [
          "Con un penalti stroke",
          "En un 1 contra 1 del atacante contra el portero",
          "Con 4 defensas y portero como en senior",
          "No existe el PC en esta categoría",
          "Lanzando desde el medio campo"
        ],
        "a": 1,
        "exp": "En benjamín el PC se resuelve en un 1vs1 del atacante frente al portero, ya que no hay stroke."
      },
      {
        "q": "En categoría PRE-BENJAMÍN, ¿qué limitación técnica existe?",
        "opts": [
          "Sin revés únicamente",
          "Sin golpeo de derecha ni de revés",
          "Sin push",
          "No hay limitaciones técnicas",
          "Sin recepción de la bola"
        ],
        "a": 1,
        "exp": "Pre-benjamín: no se permite golpeo ni de derecha ni de revés; en benjamín solo se prohíbe el revés."
      },
      {
        "q": "¿Desde dónde se saca el penalti córner en categoría ALEVÍN?",
        "opts": [
          "Desde la línea de fondo",
          "Desde el medio campo",
          "Desde la línea de 22",
          "Desde el punto de stroke",
          "No hay córner en alevín"
        ],
        "a": 1,
        "exp": "En alevín el córner se ejecuta desde la altura del medio campo."
      },
      {
        "q": "¿Desde dónde se saca el córner en categorías INFANTIL y SENIOR?",
        "opts": [
          "Desde el medio campo",
          "Desde la línea de 22",
          "Desde la línea central",
          "Desde el punto de penalti",
          "Desde la esquina exacta"
        ],
        "a": 1,
        "exp": "En infantil y senior el córner se saca desde la línea de 22 (último cuarto)."
      },
      {
        "q": "Resumiendo el mapa de castigos: un atacante que comete falta en cualquier zona provoca…",
        "opts": [
          "Penalti córner",
          "Golpe franco para el rival",
          "Penalti stroke",
          "Tarjeta amarilla automática",
          "Bully"
        ],
        "a": 1,
        "exp": "Falta de atacante en cualquier punto → golpe franco a favor del equipo contrario."
      }
    ]
  }
];
