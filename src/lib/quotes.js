// Frases motivacionales de culturistas famosos - traducidas al español
const quotes = [
  // Arnold Schwarzenegger
  { text: "La última repetición es la que te hace crecer. Esta es la que marca la diferencia entre el campeón y alguien que no lo es.", author: "Arnold Schwarzenegger" },
  { text: "La mente siempre falla primero, no el cuerpo. El secreto es hacer que tu mente trabaje para ti, no contra ti.", author: "Arnold Schwarzenegger" },
  { text: "La fuerza no viene de ganar. Tus luchas desarrollan tu fuerza. Cuando pasas por dificultades y decides no rendirte, eso es fuerza.", author: "Arnold Schwarzenegger" },
  { text: "Si quieres algo, ve y consíguelo. Punto.", author: "Arnold Schwarzenegger" },
  { text: "No tengo tiempo para entrenar a medias. O lo das todo, o no lo hagas.", author: "Arnold Schwarzenegger" },
  { text: "El peor crimen es abandonarte a ti mismo.", author: "Arnold Schwarzenegger" },
  { text: "No puedes escalar la escalera del éxito con las manos en los bolsillos.", author: "Arnold Schwarzenegger" },
  { text: "Para mí, la vida se trata de mejorar constantemente y ser mejor cada día.", author: "Arnold Schwarzenegger" },
  { text: "La visión de un campeón es alguien que está agachado, empapado en sudor, al punto del agotamiento, cuando nadie más está mirando.", author: "Arnold Schwarzenegger" },
  { text: "Mientras más sudas en el entrenamiento, menos sangras en la batalla.", author: "Arnold Schwarzenegger" },

  // Ronnie Coleman
  { text: "Todo el mundo quiere ser fisicoculturista, pero nadie quiere levantar pesas pesadas.", author: "Ronnie Coleman" },
  { text: "¡Peso liviano, nene! ¡Peso liviano!", author: "Ronnie Coleman" },
  { text: "No hay secreto. Solo se necesita disciplina y trabajo duro.", author: "Ronnie Coleman" },
  { text: "Yo entreno para ganar. No entreno solo para competir.", author: "Ronnie Coleman" },
  { text: "Si puedo hacerlo yo, con mi genética promedio, vos también podés.", author: "Ronnie Coleman" },

  // Dorian Yates
  { text: "La intensidad es la clave. Si no estás dispuesto a dar todo en cada serie, no esperes resultados.", author: "Dorian Yates" },
  { text: "El crecimiento solo ocurre cuando te empujas más allá de lo que creías posible.", author: "Dorian Yates" },
  { text: "Entrena con tu cerebro, no solo con tu ego.", author: "Dorian Yates" },
  { text: "No necesitás dos horas en el gimnasio. Necesitás cuarenta y cinco minutos de verdadera intensidad.", author: "Dorian Yates" },
  { text: "Si te sentís cómodo entrenando, no estás entrenando lo suficientemente duro.", author: "Dorian Yates" },

  // Jay Cutler
  { text: "No entreno para ser mejor que los demás. Entreno para ser mejor que yo mismo ayer.", author: "Jay Cutler" },
  { text: "La disciplina supera a la motivación. La motivación va y viene, la disciplina se queda.", author: "Jay Cutler" },
  { text: "No te compares con otros. Compará tu progreso con tu versión anterior.", author: "Jay Cutler" },
  { text: "No hay atajos. Solo hay trabajo duro, dedicación y sacrificio.", author: "Jay Cutler" },
  { text: "El éxito en el fisicoculturismo, como en la vida, se reduce a constancia.", author: "Jay Cutler" },

  // Phil Heath
  { text: "No busco la perfección. Busco el progreso constante.", author: "Phil Heath" },
  { text: "Ganar no es algo que pasa de la noche a la mañana. Es algo que pasa cada día en el gimnasio.", author: "Phil Heath" },
  { text: "Cuando la gente duda de vos, usá eso como combustible.", author: "Phil Heath" },
  { text: "La diferencia entre un campeón y un competidor es la mentalidad.", author: "Phil Heath" },

  // Lee Haney
  { text: "Estimulá, no aniquilés. El objetivo es estimular el músculo, no destruirlo.", author: "Lee Haney" },
  { text: "El ejercicio es rey. La nutrición es reina. Juntos, tenés un reino.", author: "Lee Haney" },
  { text: "Los campeones no se hacen en los gimnasios. Se hacen con algo muy dentro de ellos: un deseo, un sueño, una visión.", author: "Lee Haney" },

  // Frank Zane
  { text: "No se trata de cuánto peso levantás, sino de cómo lo levantás.", author: "Frank Zane" },
  { text: "La conexión mente-músculo es la herramienta más poderosa que tenés.", author: "Frank Zane" },
  { text: "La simetría y la proporción son más importantes que el tamaño puro.", author: "Frank Zane" },
  { text: "Entrená inteligente, no solo duro.", author: "Frank Zane" },

  // Tom Platz
  { text: "Las sentadillas no son solo un ejercicio, son una forma de vida.", author: "Tom Platz" },
  { text: "El dolor que sentís hoy será la fuerza que sentís mañana.", author: "Tom Platz" },
  { text: "Cuando tus piernas dicen que pares, tu mente dice una repetición más.", author: "Tom Platz" },
  { text: "No hay nada que no puedas lograr si estás dispuesto a sufrir por ello.", author: "Tom Platz" },

  // Kai Greene
  { text: "Pensá en grande y no escuches a la gente que te dice que no se puede.", author: "Kai Greene" },
  { text: "Cada repetición cuenta una historia. Hacé que cada una valga la pena.", author: "Kai Greene" },
  { text: "El gimnasio es mi santuario. Ahí es donde me encuentro a mí mismo.", author: "Kai Greene" },
  { text: "Tu cuerpo puede hacer casi cualquier cosa. Es tu mente la que tenés que convencer.", author: "Kai Greene" },
  { text: "El fisicoculturismo es una forma de arte. Vos sos el escultor y tu cuerpo es la arcilla.", author: "Kai Greene" },

  // Rich Piana
  { text: "Hacé lo que sea necesario. No hay excusas, no hay atajos.", author: "Rich Piana" },
  { text: "Amá el proceso. Los resultados vendrán solos.", author: "Rich Piana" },
  { text: "Un día más, una oportunidad más de mejorar.", author: "Rich Piana" },

  // CT Fletcher
  { text: "¡Tus músculos todavía no saben de qué sos capaz!", author: "CT Fletcher" },
  { text: "Es tu obligación ser la mejor versión de vos mismo.", author: "CT Fletcher" },
  { text: "No necesitás permiso para ser grande.", author: "CT Fletcher" },

  // Greg Plitt
  { text: "El reloj sigue corriendo. Hacé el máximo de cada momento que tenés.", author: "Greg Plitt" },
  { text: "El cuerpo logra lo que la mente cree.", author: "Greg Plitt" },
  { text: "La comodidad es el enemigo del progreso.", author: "Greg Plitt" },
  { text: "Si hoy te resulta fácil, no te estás esforzando lo suficiente.", author: "Greg Plitt" },

  // Mike Mentzer
  { text: "Entrenar más no es entrenar mejor. La calidad siempre supera a la cantidad.", author: "Mike Mentzer" },
  { text: "Cada serie debería ser un esfuerzo máximo. Si no lo es, ¿para qué entrenar?", author: "Mike Mentzer" },
  { text: "El músculo crece durante el descanso, no durante el entrenamiento.", author: "Mike Mentzer" },

  // Lou Ferrigno
  { text: "Usé el fisicoculturismo como vehículo para transformar mi vida entera.", author: "Lou Ferrigno" },
  { text: "Lo que te define no es lo que te pasa, sino cómo respondés.", author: "Lou Ferrigno" },
  { text: "El gimnasio me enseñó que los límites están en la cabeza.", author: "Lou Ferrigno" },

  // Franco Columbu
  { text: "Ser fuerte no significa solo levantar peso. Significa tener la voluntad de seguir adelante.", author: "Franco Columbu" },
  { text: "Cada día es una oportunidad para ser más fuerte que ayer.", author: "Franco Columbu" },

  // Kevin Levrone
  { text: "El tamaño impresiona, pero la condición gana shows.", author: "Kevin Levrone" },
  { text: "Nunca dejé que nadie me dijera lo que podía o no podía lograr.", author: "Kevin Levrone" },
  { text: "La pasión es lo que te levanta de la cama a las 5 de la mañana para entrenar.", author: "Kevin Levrone" },

  // Flex Wheeler
  { text: "La genética te da potencial. El trabajo duro te da resultados.", author: "Flex Wheeler" },
  { text: "No dejes que tus miedos sean más grandes que tus sueños.", author: "Flex Wheeler" },

  // Dexter Jackson
  { text: "La consistencia es el ingrediente secreto. Año tras año, día tras día.", author: "Dexter Jackson" },
  { text: "No importa la edad. Lo que importa es la actitud.", author: "Dexter Jackson" },
  { text: "Cuando pensás que ya diste todo, siempre hay un poco más.", author: "Dexter Jackson" },

  // Shawn Ray
  { text: "No esperes resultados extraordinarios con un esfuerzo ordinario.", author: "Shawn Ray" },
  { text: "El fisicoculturismo no es un hobby, es un estilo de vida.", author: "Shawn Ray" },

  // Branch Warren
  { text: "No hay sustituto para el trabajo duro. Punto final.", author: "Branch Warren" },
  { text: "Entrená como si tu vida dependiera de ello.", author: "Branch Warren" },

  // Lee Priest
  { text: "No necesitás el gimnasio más lujoso. Necesitás la actitud más fuerte.", author: "Lee Priest" },
  { text: "Disfrutá el proceso. Si no disfrutás entrenar, estás en el deporte equivocado.", author: "Lee Priest" },

  // Sergio Oliva
  { text: "El fisicoculturismo es 80% nutrición y 20% entrenamiento.", author: "Sergio Oliva" },
  { text: "No hay campeón que no haya sido primero un competidor que se negó a rendirse.", author: "Sergio Oliva" },

  // Chris Bumstead
  { text: "No entrenes para impresionar a otros. Entrená para superarte a vos mismo.", author: "Chris Bumstead" },
  { text: "El progreso no es lineal. Tené paciencia con el proceso.", author: "Chris Bumstead" },
  { text: "Sé la versión más fuerte de vos mismo, por dentro y por fuera.", author: "Chris Bumstead" },

  // Larry Wheels
  { text: "Cada día que entrenás, estás un paso más cerca de tu mejor versión.", author: "Larry Wheels" },
  { text: "La fuerza se construye con consistencia, no con perfección.", author: "Larry Wheels" },

  // Markus Rühl
  { text: "Cuando entrás al gimnasio, dejá tus problemas afuera. Este es tu momento.", author: "Markus Rühl" },
  { text: "El hierro no miente. Siempre te muestra exactamente dónde estás.", author: "Markus Rühl" },

  // Dennis Wolf
  { text: "No importa cuántas veces caigas. Lo que importa es cuántas veces te levantás.", author: "Dennis Wolf" },

  // Samir Bannout
  { text: "La dedicación al detalle es lo que separa a los buenos de los grandes.", author: "Samir Bannout" },

  // Nasser El Sonbaty
  { text: "El conocimiento aplicado con disciplina produce resultados extraordinarios.", author: "Nasser El Sonbaty" },

  // Victor Martinez
  { text: "Creé en vos mismo cuando nadie más lo haga. Ese es el primer paso.", author: "Victor Martinez" },

  // Evan Centopani
  { text: "No existe un mal día de entrenamiento. Cada sesión te hace mejor.", author: "Evan Centopani" },

  // Flex Lewis
  { text: "El tamaño de tu sueño debe ser siempre más grande que tu miedo al fracaso.", author: "Flex Lewis" },

  // Cita general del deporte
  { text: "Hoy es un gran día para romper tus propios límites.", author: "Motivación Fitness" },
  { text: "Tu único competidor sos vos mismo de ayer.", author: "Motivación Fitness" },
  { text: "El dolor de hoy es la victoria de mañana.", author: "Motivación Fitness" },
  { text: "No cuentes los días, hacé que los días cuenten.", author: "Muhammad Ali" },
  { text: "El sufrimiento de la disciplina pesa gramos. El sufrimiento del arrepentimiento pesa toneladas.", author: "Jim Rohn" },
]

export function getTodayQuote() {
  // Seeded random basado en la fecha - cambia cada día, distinto orden cada día
  const now = new Date()
  const seed = now.getFullYear() * 10000 + (now.getMonth() + 1) * 100 + now.getDate()
  // Simple hash para generar pseudo-random desde la fecha
  let hash = seed
  hash = ((hash >> 16) ^ hash) * 0x45d9f3b
  hash = ((hash >> 16) ^ hash) * 0x45d9f3b
  hash = (hash >> 16) ^ hash
  const idx = Math.abs(hash) % quotes.length
  return quotes[idx]
}

export default quotes
