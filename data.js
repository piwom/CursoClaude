// Shared course data + quizzes for all three directions
window.COURSE = {
  title: "Claude ABC para Creativos",
  subtitle: "Gratis · 4 módulos · 15 lecciones",
  modules: [
    {
      id: 0,
      num: "00",
      title: "Qué es Claude y por qué te importa",
      tagline: "No es un buscador. No es ChatGPT. Es otra cosa.",
      hue: 32, // ochre
      lessons: [
        {
          id: "00-01",
          title: "La diferencia que cambia todo",
          type: "lectura",
          usable: true,
          minutes: 4,
          content: `Claude no busca información en internet. No te trae links. No indexa páginas web.

Lo que hace es **razonar**. Y esa diferencia cambia completamente cómo lo usás.

Un buscador te devuelve lo que existe. Claude te ayuda a construir lo que no existe todavía: una idea, una propuesta, un concepto, una respuesta difícil, una estructura que no sabés cómo arrancar.

**¿Qué significa razonar?**

Significa que Claude puede:
- Tomar un problema complejo y descomponerlo en partes
- Mantener contexto a lo largo de una conversación larga
- Ajustar su tono, formato y profundidad según lo que le pedís
- Contradecirte si le pedís que lo haga
- Trabajar con lo que vos le das — no con lo que ya sabe de internet

**La analogía más útil:**

Imaginá que tenés un colaborador muy capaz que no duerme, no se queja, no tiene ego, y que sabe escribir, editar, estructurar, resumir, y pensar con vos a cualquier hora. Eso es Claude cuando lo usás bien.

Cuando lo usás mal, es una máquina de respuestas genéricas que suenan a IA.

La diferencia entre uno y otro es casi siempre cómo le hablás.`,
          quiz: {
            question: "Si Claude no busca en internet, ¿cuál es su valor real?",
            options: [
              "Indexa páginas más rápido que Google",
              "Razona contigo y construye lo que no existe todavía",
              "Recuerda todas tus conversaciones anteriores",
              "Reemplaza completamente a tu equipo creativo"
            ],
            correct: 1,
            feedback: "Exacto. Claude no te trae lo que existe — te ayuda a crear lo que falta."
          },
          printable: {
            title: "Claude no busca. Razona.",
            points: ["No trae links — construye con vos", "Mantiene contexto en conversaciones largas", "Ajusta tono, formato y profundidad", "Trabaja con lo que vos le das", "La calidad depende de cómo le hablás"]
          }
        },
        {
          id: "00-02",
          title: "Qué puede hacer y qué no",
          type: "lectura",
          usable: false,
          minutes: 3,
          content: `Sin hype. Sin promesas vacías. Esto es lo que Claude puede hacer por tu trabajo creativo — y lo que no.

**SÍ puede:**
- Escribir, reescribir, resumir, estructurar textos
- Generar ideas, variantes, nombres, conceptos
- Analizar un brief y señalar lo que falta
- Redactar emails, propuestas, guiones, captions
- Leer documentos que le subís y trabajar con ellos
- Darte feedback duro si le pedís que sea crítico
- Mantener un tono o estilo específico si le mostrás ejemplos

**NO puede:**
- Acceder a internet en tiempo real (salvo con herramientas específicas)
- Recordar conversaciones anteriores (cada chat empieza de cero)
- Generar imágenes, audio o video
- Garantizar que los datos numéricos sean exactos
- Reemplazar tu criterio, tu experiencia o tu voz

**Lo más importante:**

Claude es tan bueno como la información que le das. Un brief vago produce ideas vagas. Un contexto rico produce resultados que te sorprenden.`,
          quiz: {
            question: "¿Qué NO puede hacer Claude hoy?",
            options: [
              "Reescribir un texto en otro tono",
              "Recordar conversaciones de la semana pasada",
              "Resumir un PDF que le subís",
              "Generar 10 variantes de un caption"
            ],
            correct: 1,
            feedback: "Cada chat empieza de cero. Esto cambia cómo trabajás con él."
          },
          printable: {
            title: "Claude: sí / no",
            points: ["Escribe, resume, estructura, genera ideas", "Lee documentos y trabaja con ellos", "Mantiene tono si le mostrás ejemplos", "No navega internet en tiempo real", "No recuerda chats anteriores", "No reemplaza tu criterio"]
          }
        },
        {
          id: "00-03",
          title: "Tu primera conversación en 5 minutos",
          type: "práctica",
          usable: true,
          minutes: 5,
          content: `Basta de teoría. Abrí Claude ahora y hacé esto:

**Paso 1 — Abrí claude.ai**

Creá una cuenta gratuita si no tenés. No necesitás nada más.

**Paso 2 — Escribí este prompt exacto:**

*"Soy [tu profesión] y estoy trabajando en [proyecto actual]. Necesito que me ayudes a [tarea concreta que tenés esta semana]. Mi cliente o audiencia es [descripción breve]. Dame 3 opciones distintas."*

**Ejemplo real:**

*"Soy diseñador gráfico y estoy trabajando en la identidad de una cervecería artesanal premium pero accesible. Necesito que me ayudes a generar nombres para la marca. Mi cliente quiere algo que suene local pero con proyección. Dame 3 opciones distintas con una línea de fundamentación para cada una."*

**Paso 3 — Leé la respuesta y pedí ajustes:**

No aceptes la primera respuesta como final. Decile: *"La segunda opción me interesa más. Desarrollá esa con 5 variantes adicionales."*

**Lo que acabás de aprender:**

Cómo dar contexto, cómo pedir variantes, y cómo iterar. Eso es el 80% de saber usar Claude.`,
          quiz: {
            question: "Después de la primera respuesta de Claude, ¿qué deberías hacer?",
            options: [
              "Aceptarla como final si suena bien",
              "Empezar un chat nuevo con un prompt mejor",
              "Iterar: pedir variantes, ajustes, otra dirección",
              "Copiarla a Google Docs y editarla a mano"
            ],
            correct: 2,
            feedback: "La primera respuesta es punto de partida, no entregable. Iterar es el oficio."
          },
          printable: {
            title: "Tu primer prompt en 4 partes",
            points: ["1. Quién sos (profesión y contexto)", "2. En qué estás trabajando", "3. Qué necesitás exactamente", "4. Para quién es (audiencia o cliente)"]
          }
        }
      ]
    },
    {
      id: 1,
      num: "01",
      title: "Hablarle bien: el prompt en 4 pasos",
      tagline: "La habilidad que separa un resultado mediocre de uno que sirve.",
      hue: 78, // olive
      lessons: [
        {
          id: "01-01",
          title: "Contexto, rol, tarea, formato",
          type: "lectura",
          usable: true,
          minutes: 6,
          content: `Todo prompt que funciona tiene cuatro elementos. Podés usarlos en cualquier orden, pero si falta uno, la respuesta lo nota.

**1. CONTEXTO**

Claude no sabe nada de vos hasta que se lo contás. No asumas que "ya sabe" tu industria o tu situación.

*Mal:* "Escribime un email para mi cliente"
*Bien:* "Soy director creativo de una agencia y tengo que escribirle a un cliente de banca privada que rechazó nuestra propuesta sin dar motivos claros."

**2. ROL**

¿Qué querés que Claude sea en esta conversación? Tu editor, tu crítico, tu abogado del diablo, tu redactor, tu estratega.

*Ejemplo:* "Actuá como editor de una revista de diseño con criterio muy exigente."

**3. TAREA**

Específico, concreto, medible. No "ayudame con X" sino "escribí X de Y palabras que logre Z".

*Mal:* "Ayudame con mi bio"
*Bien:* "Escribí una bio profesional de 80 palabras para LinkedIn que destaque mi experiencia en producción audiovisual."

**4. FORMATO**

¿Cómo querés que te responda? Lista, párrafos, tabla, tono formal, tono conversacional.

*Ejemplo:* "Respondé en formato de lista numerada, máximo 5 ítems, tono directo sin florituras."

Usá los cuatro. La diferencia es inmediata.`,
          quiz: {
            question: "¿Cuál de estos prompts está mejor armado?",
            options: [
              "Dame ideas para un logo",
              "Necesito un logo bueno para mi cliente",
              "Soy diseñador. Dame 5 conceptos de logo para un estudio de arquitectura minimalista. Cada uno en 2 líneas.",
              "Hace un logo en blanco y negro"
            ],
            correct: 2,
            feedback: "Tiene los 4 elementos: contexto, rol, tarea específica y formato."
          },
          printable: {
            title: "El prompt en 4 partes",
            points: ["CONTEXTO: quién sos y en qué situación", "ROL: qué querés que Claude sea", "TAREA: qué necesitás exactamente", "FORMATO: cómo querés la respuesta"]
          }
        },
        {
          id: "01-02",
          title: "El prompt malo vs el que funciona",
          type: "ejemplos",
          usable: true,
          minutes: 5,
          content: `Cinco comparaciones reales. Leé la columna de la izquierda y sentís algo. Leé la derecha y entendés por qué la diferencia importa.

**Diseño**

❌ "Dame ideas para un logo"
✓ "Dame 5 conceptos de dirección visual para el logo de un estudio de arquitectura minimalista que trabaja viviendas de lujo. Cada concepto en 2 líneas: qué comunica y qué elementos visuales sugiere."

**Agencia**

❌ "Escribí una propuesta"
✓ "Escribí la sección de 'Enfoque Creativo' de una propuesta para una marca de vinos orgánicos que quiere renovar su identidad para mercado exportador. Tono: sofisticado pero cercano. 150 palabras."

**Redes sociales**

❌ "Haceme captions para Instagram"
✓ "Haceme 3 captions para Instagram de una marca de indumentaria sustentable. Audiencia: mujeres 28-40, Buenos Aires, interesadas en moda consciente. Tono: directo, sin greenwashing. Cada caption termina con una pregunta."

**Email difícil**

❌ "Ayudame a escribir un email para un cliente molesto"
✓ "Escribí un email para un cliente de fotografía enojado porque entregué las fotos 3 días tarde. El retraso fue mi culpa. Quiero disculparme sin sonar servil, recuperar la confianza, y ofrecer compensación concreta."

**Docente**

❌ "Dame una consigna para mis alumnos"
✓ "Diseñá una consigna de trabajo práctico para alumnos de 2° año de diseño gráfico sobre identidad visual. Resoluble en clase en 90 minutos, en grupos de 3."`,
          quiz: {
            question: "¿Qué le falta a un prompt para que sea útil?",
            options: [
              "Más palabras y adjetivos elegantes",
              "Audiencia, tono, formato, restricciones",
              "Emojis y signos de pregunta múltiples",
              "Mencionar que sos creativo"
            ],
            correct: 1,
            feedback: "Especificar audiencia, tono, formato y restricciones cambia todo."
          },
          printable: {
            title: "Checklist del buen prompt",
            points: ["Dijiste quién sos y en qué contexto", "La tarea es específica y medible", "Mencionaste audiencia o cliente", "Pediste un formato concreto", "Pusiste el tono que necesitás"]
          }
        },
        {
          id: "01-03",
          title: "Iterar: cuando la primera respuesta no alcanza",
          type: "lectura",
          usable: false,
          minutes: 4,
          content: `La primera respuesta de Claude es un punto de partida, no un resultado final. Los mejores usos son conversaciones, no preguntas sueltas.

**Cómo iterar bien:**

**Ajustá el tono:**
*"Está bien pero suena muy corporativo. Reescribilo con más personalidad, como si lo estuviera diciendo yo en una reunión."*

**Pedí más profundidad:**
*"La segunda opción es la más interesante. Desarrollá esa dirección con más detalle y dame 3 variantes."*

**Cambiá el formato:**
*"Está bien el contenido pero necesito que lo reescribas como un párrafo corrido, sin bullets."*

**Pedile que sea más duro:**
*"Ahora jugá de abogado del diablo. ¿Qué problemas tiene esta propuesta?"*

**Combiná respuestas:**
*"Tomá la estructura de la opción 1 y el tono de la opción 3."*

**Limitá el largo:**
*"Muy largo. Resumilo en máximo 3 oraciones sin perder la idea central."*

La clave es tratar cada respuesta como un borrador. Claude no se cansa, no se ofende, y cada iteración es gratuita.`,
          quiz: {
            question: "Si la respuesta es buena pero suena demasiado formal, ¿qué pedís?",
            options: [
              "Empezar el chat de nuevo desde cero",
              "Aceptarla y editarla a mano después",
              "\"Reescribilo con más personalidad, como si lo dijera yo\"",
              "Pedirle que use menos palabras"
            ],
            correct: 2,
            feedback: "Iterar el tono es una de las habilidades más útiles."
          },
          printable: {
            title: "Frases para iterar",
            points: ["Suena muy [X]. Reescribilo más [Y]", "La opción X me interesa. Desarrollá con 3 variantes", "Jugá de abogado del diablo. Qué falla", "Tomá la estructura de X y el tono de Y", "Resumilo en máximo [N] palabras"]
          }
        },
        {
          id: "01-04",
          title: "Ejercicio: reescribí tus últimos 3 prompts",
          type: "práctica",
          usable: true,
          minutes: 8,
          content: `Este ejercicio tarda 15 minutos y te cambia el hábito para siempre.

**Qué hacer:**

Pensá en las últimas 3 veces que usaste Claude, ChatGPT, o cualquier IA. Anotá cómo escribiste cada pedido.

Ahora aplicá la fórmula de las 4 partes a cada uno:

1. Agregá contexto (quién sos, en qué situación)
2. Definí el rol que querés que tome
3. Especificá la tarea con más precisión
4. Pedí un formato concreto

**Comparación:**

Enviá los dos prompts y compará las respuestas. No en calidad abstracta: en utilidad real para tu trabajo.

**Ejemplo de transformación:**

*Prompt original:* "Describí una tendencia en diseño para 2025"

*Prompt mejorado:* "Soy diseñador gráfico especializado en identidad para pymes. Describí 3 tendencias en diseño gráfico 2025 relevantes específicamente para marcas con presupuesto limitado. Para cada tendencia: nombre, descripción de 2 líneas, y cómo aplicarla con recursos básicos."

El ejercicio es simple. El resultado no lo es.`,
          quiz: {
            question: "Cuando reescribís un prompt viejo, ¿qué cambia más rápido?",
            options: [
              "La velocidad con la que Claude responde",
              "La utilidad concreta de la respuesta para tu trabajo",
              "El largo de la respuesta",
              "La cantidad de emojis que usa"
            ],
            correct: 1,
            feedback: "Lo que cambia es la utilidad — no la calidad teórica."
          },
          printable: {
            title: "Transformá tu prompt",
            points: ["1. Tomá un prompt de esta semana", "2. Agregá contexto: quién sos", "3. Definí el rol para Claude", "4. Especificá la tarea con más detalle", "5. Pedí un formato concreto", "6. Compará las respuestas"]
          }
        }
      ]
    },
    {
      id: 2,
      num: "02",
      title: "5 usos que cambian tu semana",
      tagline: "No teoría. Cinco aplicaciones que podés empezar hoy.",
      hue: 18, // terracotta
      lessons: [
        {
          id: "02-01",
          title: "Salir del bloqueo en 10 minutos",
          type: "práctica",
          usable: true,
          minutes: 5,
          content: `El bloqueo creativo casi nunca es falta de ideas. Es falta de punto de entrada.

Claude es extraordinariamente bueno para darte ese primer punto de entrada.

**El prompt del bloqueo:**

*"Estoy trabajando en [proyecto] para [cliente]. Llevo [tiempo] dando vueltas y no encuentro el ángulo. Dame 5 enfoques completamente distintos para atacar este proyecto — no quiero la respuesta obvia, quiero territorios inesperados. Para cada enfoque: una frase que defina la dirección y un ejemplo concreto."*

**Por qué funciona:**

No le pedís la solución — le pedís el mapa del territorio. Vos elegís por dónde ir.

**Variante para arrancar:**

*"Sé que quiero ir hacia [dirección]. No sé cómo arrancar. Dame las primeras 3 líneas que me saquen del lugar en blanco."*

**Después del desbloqueo:**

Cuando Claude te dé algo que encienda algo en vos, decile: *"Esa dirección me interesa. Seguí por ahí pero llevala más lejos."*`,
          quiz: {
            question: "¿Qué le pedís a Claude cuando estás bloqueado?",
            options: [
              "La respuesta correcta al problema",
              "5 enfoques distintos para atacar el proyecto",
              "Que te haga el trabajo entero",
              "Un resumen de lo que pensaste hasta ahora"
            ],
            correct: 1,
            feedback: "Pedile el mapa, no el destino. Vos elegís por dónde ir."
          },
          printable: {
            title: "El prompt del bloqueo",
            points: ["Describí el proyecto en una línea", "Aclará para quién es", "Pedí 5 enfoques distintos", "Pedí territorios inesperados", "Pedí ejemplo concreto por enfoque", "Cuando algo enciende: seguí por ahí"]
          }
        },
        {
          id: "02-02",
          title: "Escribir ese email difícil",
          type: "práctica",
          usable: true,
          minutes: 4,
          content: `Hay emails que te llevan una hora. Claude los resuelve en 3 minutos si le das contexto.

**Al cliente que rechazó sin explicar:**

*"Escribí un email para un cliente que rechazó nuestra propuesta sin dar feedback. Quiero entender qué falló sin sonar defensivo. Tono: profesional, curioso, abierto. Máximo 4 párrafos."*

**Al cliente que no paga:**

*"Recordatorio de pago para factura 30 días vencida. Cliente buena persona pero desorganizado. Firme pero sin romper la relación."*

**Al colega que no entrega:**

*"Colega freelance que prometió el trabajo para el lunes y hoy es miércoles. Directo sin ser agresivo."*

**Al jefe con una idea nueva:**

*"Email interno para presentar una idea no pedida que puede mejorar [proceso]. Quiero que tenga ganas de escucharme, no de ignorarme."*

El secreto: más contexto = menos vueltas. No le ahorres información a Claude.`,
          quiz: {
            question: "¿Cuál es el mayor error al pedir un email difícil?",
            options: [
              "Pedirlo en voz formal",
              "Dar poco contexto sobre la situación real",
              "Pedirlo en menos de 100 palabras",
              "No incluir emojis"
            ],
            correct: 1,
            feedback: "Sin contexto, el email es genérico. Con contexto, suena humano."
          },
          printable: {
            title: "Emails difíciles: qué incluir",
            points: ["Quién es el destinatario", "Qué pasó exactamente", "Qué resultado querés", "Tono: formal o informal", "Largo máximo", "Qué NO querés que suene"]
          }
        },
        {
          id: "02-03",
          title: "Generar nombres, conceptos, ideas",
          type: "práctica",
          usable: true,
          minutes: 5,
          content: `Claude es una máquina de variantes. Si le pedís opciones sin dirección, te da opciones sin personalidad.

**La fórmula:**

No: *"Dame nombres para mi marca"*
Sí: *"Dame 8 nombres para [descripción de marca]. Cada nombre tiene que: [criterio 1], [criterio 2], [criterio 3]. Evitá: [lo que no querés]. Para cada nombre una línea de por qué funciona."*

**Ejemplo — naming:**

*"Dame 8 nombres para una consultora de comunicación estratégica fundada por dos mujeres en Buenos Aires. Tiene que sonar a autoridad sin sonar corporativo, funcionar en inglés y español, y ser registrable. Evitá palabras genéricas como 'ideas', 'creative', 'studio'."*

**Para conceptos creativos:**

*"Necesito 5 territorios creativos distintos para una campaña de [producto]. Cada uno: nombre, idea central en una frase, ejemplo aplicado. Mutuamente excluyentes — no quiero variaciones del mismo enfoque."*

El filtro final siempre es tuyo. Claude te da el mapa. Vos elegís el camino.`,
          quiz: {
            question: "¿Cuántas opciones suele ser un buen rango para pedir?",
            options: [
              "1 o 2, para no abrumarse",
              "6 a 10, con criterios claros para filtrar",
              "30, así tenés mucho material",
              "Una sola, la mejor"
            ],
            correct: 1,
            feedback: "6-10 con criterios filtra señal del ruido."
          },
          printable: {
            title: "Pedir opciones que sirven",
            points: ["Describí el proyecto con precisión", "Pedí 6 a 10 opciones", "Dá 3 criterios que tiene que cumplir", "Decí qué querés evitar", "Pedí fundamentación por opción", "El filtro final es tuyo"]
          }
        },
        {
          id: "02-04",
          title: "Resumir y organizar información",
          type: "práctica",
          usable: true,
          minutes: 4,
          content: `Uno de los usos más subestimados: darle a Claude un documento, brief, o notas desordenadas — y pedirle que lo estructure.

**Qué podés subir:**
- PDFs de briefs o propuestas
- Textos copiados de emails largos
- Tus propias notas sin estructura
- Transcripciones de reuniones

**Cómo pedirlo bien:**

*"Te adjunto [documento]. Necesito que: [1] resumas los puntos clave en máximo 5 bullets, [2] identifiques qué falta o qué está poco claro, [3] me digas cuáles son los 2 puntos más críticos para responder a este cliente."*

**Para reuniones:**

*"Te paso las notas de un brief con un cliente. Organizalas en: qué quiere el cliente, qué no quiere, qué está implícito pero no dijo, y qué preguntas me quedan pendientes."*

**Para investigación:**

*"Tengo estos 4 fragmentos de fuentes distintas sobre [tema]. Sintetizalos en un único texto coherente de 200 palabras."*

Esto solo ya te ahorra horas por semana.`,
          quiz: {
            question: "Después de subir un PDF, ¿qué le pedís a Claude?",
            options: [
              "Que te lo lea palabra por palabra",
              "Resumen, lo que falta, y los puntos críticos",
              "Solo el resumen general",
              "Que invente lo que no está en el documento"
            ],
            correct: 1,
            feedback: "Pedir las 3 capas (resumen, gaps, críticos) te da material accionable."
          },
          printable: {
            title: "Organizar info con Claude",
            points: ["Subí el doc o pegá el texto", "Describí qué tipo de documento es", "Pedí resumen en bullets (máx 5)", "Pedí que identifique qué falta", "Pedí los puntos críticos", "Para reuniones: qué dijo y qué no"]
          }
        },
        {
          id: "02-05",
          title: "Pedirle que te critique",
          type: "práctica",
          usable: true,
          minutes: 4,
          content: `El uso más subestimado de Claude. Posiblemente el más valioso.

La mayoría le pide a Claude que produzca. Muy pocos le piden que destruya — y eso es un error.

**El prompt de la crítica:**

*"Te voy a pasar [mi propuesta]. Quiero que lo analices desde la perspectiva de [un cliente exigente / un director creativo veterano / un competidor]. Dame: qué está bien y por qué, qué no funciona y por qué, qué le falta, y qué pregunta incómoda haría alguien que quisiera rechazarlo."*

**Por qué funciona:**

Claude no tiene miedo de decirte que algo no funciona. No tiene ego comprometido. Te responde lo que le pedís.

Si le pedís validación, te valida. Si le pedís crítica real, te la da.

**Variante para presentaciones:**

*"Leé esta presentación como si fueras el cliente. ¿En qué punto perdiste el interés? ¿Qué slide no entendiste? ¿Qué te genera dudas sobre si este equipo puede ejecutar?"*

Usá lo que sirve. Ignorá lo que no aplica. El criterio final es tuyo. Pero al menos llegás a la reunión habiendo visto los agujeros antes que el cliente.`,
          quiz: {
            question: "¿Qué prompt te da feedback más útil?",
            options: [
              "\"¿Está bien esto?\"",
              "\"¿Te gusta mi propuesta?\"",
              "\"Analizalo como cliente exigente: ¿qué falla, qué falta, qué pregunta incómoda haría?\"",
              "\"Dame tu opinión sincera\""
            ],
            correct: 2,
            feedback: "Asignarle un rol crítico produce feedback de otro nivel."
          },
          printable: {
            title: "El prompt de la crítica",
            points: ["Analizá esto como [rol crítico]", "Qué está bien y por qué", "Qué no funciona y por qué", "Qué le falta", "Qué pregunta incómoda haría un cliente exigente", "El criterio final es tuyo"]
          }
        }
      ]
    },
    {
      id: 3,
      num: "03",
      title: "Antes de confiar ciegamente",
      tagline: "Límites reales. Errores comunes. Criterio propio.",
      hue: 8, // burnt sienna
      lessons: [
        {
          id: "03-01",
          title: "Claude se equivoca — y cómo detectarlo",
          type: "lectura",
          usable: false,
          minutes: 4,
          content: `Claude no es infalible. Y sus errores son particularmente peligrosos porque suenan muy seguros.

**El problema de las alucinaciones:**

Claude puede inventar datos, citas, nombres, fechas, y estadísticas con total confianza. Es una limitación técnica: el modelo genera texto probable, no texto verificado.

**Dónde ocurren los errores más comunes:**
- Datos numéricos específicos (porcentajes, estadísticas)
- Citas de personas o libros
- Fechas y cronologías
- Nombres de personas reales en contextos específicos
- Información muy reciente

**Cómo detectarlo:**

Si Claude te da un dato muy específico — un número, una cita, un nombre propio — verificalo. No porque mienta, sino porque puede estar equivocado con mucha seguridad.

**La regla práctica:**

Creatividad y estructura: confiar y iterar.
Datos y hechos: siempre verificar.`,
          quiz: {
            question: "¿Cuándo siempre tenés que verificar lo que dice Claude?",
            options: [
              "Cuando te da una idea creativa",
              "Cuando te ayuda a estructurar un texto",
              "Cuando da datos, citas, fechas o estadísticas",
              "Nunca, Claude no se equivoca"
            ],
            correct: 2,
            feedback: "Datos y hechos: siempre verificar. Creatividad: iterar."
          },
          printable: {
            title: "Cuándo verificar a Claude",
            points: ["Datos numéricos: siempre verificar", "Citas de personas o libros: verificar", "Fechas y cronologías: verificar", "Ideas y textos: confiar e iterar", "Información reciente: puede estar desactualizado"]
          }
        },
        {
          id: "03-02",
          title: "Tu voz vs la voz de la IA",
          type: "lectura",
          usable: false,
          minutes: 4,
          content: `El mayor riesgo de usar Claude sin criterio no es que te dé respuestas malas. Es que empieces a sonar como todos los demás que usan Claude sin criterio.

**Cómo se pierde la voz:**

Cuando aceptás el primer draft sin editarlo. Cuando dejás que Claude elija el tono. Cuando publicás el texto tal cual.

El resultado es ese estilo reconocible: oraciones que empiezan con "En el dinámico mundo de...", bullets que dicen lo mismo de tres formas distintas.

**Tres reglas simples:**

**1. Siempre editá al menos una oración**
Aunque el texto esté bien, reescribí algo en tus palabras. Eso ancla tu voz.

**2. Mostrá ejemplos**
Si tenés textos propios que te gustan, dáselos a Claude. *"Escribí en el mismo tono que estos ejemplos."*

**3. Usá a Claude para la estructura, no para la voz**
Pedile el esqueleto. Vos ponés la carne.

**La pregunta:**

*¿Yo diría esto así?* Si la respuesta es no, cambialo. Tu voz es tu diferencial. Cuidala.`,
          quiz: {
            question: "¿Cuál es la pregunta clave antes de publicar algo que escribiste con Claude?",
            options: [
              "¿Está bien escrito?",
              "¿Yo diría esto así?",
              "¿Es lo suficientemente largo?",
              "¿Tiene los keywords correctos?"
            ],
            correct: 1,
            feedback: "Tu voz es tu diferencial. No la delegues."
          },
          printable: {
            title: "Cuidar tu voz con Claude",
            points: ["Siempre editá al menos una oración", "Mostrá ejemplos de tu estilo", "Pedile la estructura, vos ponés la voz", "Si no lo dirías así: cambialo", "Tu voz es tu diferencial"]
          }
        },
        {
          id: "03-03",
          title: "Privacidad: qué no le mandes",
          type: "lectura",
          usable: false,
          minutes: 3,
          content: `Antes de subir cualquier documento, pensá un segundo en qué hay ahí adentro.

**Lo que nunca deberías subir:**
- Contratos con datos personales de clientes
- Información financiera confidencial
- Datos de menores de edad
- Información bajo NDA sin revisar el acuerdo
- Credenciales, contraseñas, tokens
- Información médica identificable

**La regla práctica:**

Si ese documento lo mandarías por email sin pensarlo dos veces, probablemente está bien.

Si requeriría un acuerdo de confidencialidad para compartirlo con alguien externo, no lo subas.

**Alternativa:**

Anonimizá. Reemplazá nombres por "[Cliente A]", montos por "[monto]", datos identificables por descripciones genéricas. El trabajo que le pedís a Claude sigue siendo útil sin exponer información real.

Esto no es paranoia. Es profesionalismo básico.`,
          quiz: {
            question: "¿Qué hacés con un contrato real de un cliente?",
            options: [
              "Lo subís entero, Claude tiene NDA",
              "Lo anonimizás antes de subirlo",
              "Lo mandás por email a Claude",
              "No usás Claude para nada confidencial nunca"
            ],
            correct: 1,
            feedback: "Anonimizar es el equilibrio: usás Claude sin exponer información real."
          },
          printable: {
            title: "Qué no subir a Claude",
            points: ["No: contratos con datos personales", "No: información financiera confidencial", "No: datos bajo NDA sin revisar", "No: credenciales o contraseñas", "Sí: anonimizá con [Cliente A]", "Regla: lo mandarías por email sin dudar?"]
          }
        }
      ]
    }
  ]
};
