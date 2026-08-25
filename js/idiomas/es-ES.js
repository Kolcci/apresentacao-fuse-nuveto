/* ============================================================
   es-ES — español de España

   TABELA DE TEXTO, NÃO ROTEIRO. Ver o cabeçalho de
   js/idiomas/pt-PT.js: mesma regra, mesmas posições.

   Registro: español peninsular, "vosotros" quando fala com a
   sala, "ordenador" e não "computadora", "móvil" e não
   "celular". O tom é o mesmo do original — alguém a contar a
   própria história em voz alta. As frases de `destaque` mantêm
   a quebra de linha curta que o layout pede (~19 caracteres
   por linha nas maiores), e por isso algumas foram encurtadas
   em vez de traduzidas ao pé da letra.
   ============================================================ */
window.TRADUCOES = window.TRADUCOES || {};
window.TRADUCOES['es-ES'] = {

  marcos: {
    'jul-24': { rot: 'JUL/24',  cargo: 'Becario de preventa' },
    'btg':    { rot: '2024–25', cargo: 'BTG' },
    'abr-25': { rot: 'ABR/25',  cargo: 'Arquitecto de Soluciones' },
    'set-25': { rot: 'SEP/25',  cargo: 'Head de Formación Intl.' },
    'fev-26': { rot: 'FEB/26',  cargo: 'Líder Técnico Fuse IoT' }
  },

  secoes: [

    /* 00 — Capa */
    { curto: 'Portada', bloco_nome: 'APERTURA',
      passos: [
        { texto: 'Dos años.' },
        { texto: 'De becario de preventa a Líder Técnico.',
          deixa: '(se queda en pantalla mientras la sala se sienta)' },
        { texto: 'DANILO D’ELIA  ·  FUSE IOT  ·  GRUPO NUVETO',
          deixa: '(último paso de la portada — aguanta aquí hasta empezar)' }
      ] },

    /* 01 */
    { curto: 'La línea de tiempo (vacía)', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'Una línea de tiempo.', deixa: 'Buenas tardes.' },
        { texto: 'Hay bastante gente aquí que no me conoce, y creo que así es más rápido.',
          deixa: 'Voy a empezar por una línea de tiempo…' }
      ] },

    /* 02 */
    { curto: 'Jul/24 · Becario', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'JUL/24', deixa: '…creo que así es más rápido.' },
        { texto: 'Becario de preventa.', deixa: 'En julio de 2024 entré aquí…' },
        { texto: 'Sin la carrera terminada, sin ninguna experiencia en preventa.',
          deixa: '…como becario de preventa.' }
      ] },

    /* 03 */
    { curto: 'Flamarion · la primera apuesta', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      pausa: 'PAUSA 1 de 5 — él es la primera apuesta y merece separación',
      passos: [
        { rotulo: 'Flamarion', deixa: '[PAUSA] …sin ninguna experiencia en preventa.' },
        { texto: 'quien me contrató', deixa: 'Quien me contrató fue Flamarion.' },
        { deixa: '(entra junto con el cargo)' },
        { texto: 'Se la jugó por un chaval que no había entregado absolutamente nada todavía. Ni un primer día de empresa tenía.',
          deixa: 'Y necesito dejar esto claro desde el principio…' },
        { linhas: ['Apostó antes de tener', 'ningún motivo para apostar.'],
          deixa: '…ni un primer día de empresa tenía.' },
        { texto: 'Y después siguió apostando, dándome cada vez más responsabilidad de la que yo había demostrado aguantar.',
          deixa: '…de tener ningún motivo para apostar.' }
      ] },

    /* 04 */
    { curto: 'El puesto', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'mi puesto, en la práctica', deixa: '…de la que había demostrado aguantar.' },
        { linhas: ['Dar apoyo a los', 'otros preventas.'], deixa: 'Porque mi puesto, en la práctica, era…' },
        { texto: 'Era eso.', deixa: '…dar apoyo a los otros preventas.' }
      ] },

    /* 05 */
    { curto: 'BTG · Leandro Kojo', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { rotulo: 'Leandro Kojo', deixa: 'Era eso.' },
        { texto: 'comercial de BTG', deixa: 'Y todavía como becario empecé a llevar BTG.' },
        { deixa: 'Eso pasó porque Leandro Kojo lo permitió.' },
        { texto: 'Podía simplemente haberme usado de apoyo, que era mi puesto. En vez de eso me formó, me dejó llevar el proyecto y hablar con el cliente por mí mismo.',
          deixa: 'Kojo, estás aquí, así que lo digo delante de ti.' },
        { linhas: ['No hizo el trabajo por mí —', 'me dejó hacerlo,', 'y me sostuvo cuando hizo falta.'],
          deixa: '…y se quedó al lado dándome pistas y guiándome.' }
      ] },

    /* 06 */
    { curto: 'La comida de BTG', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'íbamos a cerrar una venta grande', deixa: '…y me sostuvo cuando hizo falta.' },
        { texto: 'Pedí llevarlos a comer.',
          deixa: 'Y hubo un momento en esa cuenta que lo explica mejor que cualquier adjetivo.' },
        { texto: '80', rotulo: 'R$ aprobados', deixa: 'Pedí llevarlos a comer.' },
        { texto: '130', rotulo: 'R$ que pedí', deixa: 'Aprobaron ochenta reales por persona.' },
        { texto: 'El restaurante que yo quería es de un amigo mío, y sabía exactamente el tipo de recibimiento que íbamos a tener allí dentro.',
          deixa: 'Volví y pedí ciento treinta…' },
        { linhas: ['Lo aprobaron.'], deixa: '…el tipo de recibimiento que íbamos a tener allí dentro.' },
        { texto: 'Nunca habían visto a BTG tan impresionado con un recibimiento.',
          deixa: 'Lo aprobaron. Y fue lo que dije que sería.' }
      ] },

    /* 07 */
    { curto: 'Abr/25 · Web Summit + Vitor', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { rotulo: 'Vitor Carvalho', deixa: '…se abrió de una forma que antes no se abría.' },
        { texto: 'country manager Brasil · Web Summit Río, abr/25',
          deixa: 'Abril de 2025. Conseguí dos entradas para el Web Summit Río.' },
        { deixa: '(entra el cargo)' },
        { texto: 'Trabajamos juntos allí, y fue en ese viaje cuando empezó a apostar por mí de otra manera.',
          deixa: '…y fui con Vitor Carvalho, country manager Brasil.' },
        { linhas: ['Después de eso empezó a meterme', 'en conversaciones a las que yo', 'no llegaba solo.'],
          deixa: '…apostar por mí de otra manera.' }
      ] },

    /* 08 */
    { curto: 'Arquitecto de Soluciones', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'DESPUÉS DEL WEB SUMMIT', deixa: '…conversaciones a las que no llegaba solo.' },
        { texto: 'Arquitecto de Soluciones.', deixa: 'Y fue después del Web Summit cuando me hicieron oficial…' }
      ] },

    /* 09 */
    { curto: 'Sep/25 · Head de Formación', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'SEP/25', deixa: '…como Arquitecto de Soluciones.' },
        { texto: 'Head de Formación Internacional.', deixa: 'Septiembre.' },
        { texto: 'La formación aquí dentro estaba floja, y otra vez fue Flamarion el que vio algo.',
          deixa: '…Head de Formación Internacional.' },
        { texto: 'Lo que mejor se me daba era encontrar el problema real del cliente — no el que él decía que era el problema.',
          deixa: '…fue Flamarion el que vio algo.' }
      ] },

    /* 10 */
    { curto: 'Formación · tres continentes', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'ÁFRICA · EUROPA · AMÉRICAS', deixa: '…no el que decía que era el problema.' },
        { texto: 'Y no era solo formar. Era formar de verdad, calmar a quien estaba descontento, encontrar las grietas, y convertir aquello en upsell después.',
          deixa: 'Así que me pusieron en Formación Internacional.' },
        { linhas: ['Y sostuve las dos', 'sillas a la vez.'], deixa: '…y convertir aquello en upsell después.' }
      ] },

    /* 11 */
    { curto: 'Flamarion · el blindaje', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      pausa: 'PAUSA 2 de 5 — cambia de "me dio responsabilidad" a "me protegió"',
      passos: [
        { texto: 'algo que solo entendí mucho después',
          deixa: '[PAUSA] …y sostuve las dos sillas a la vez.' },
        { texto: 'Flamarion me blindó de problemas de organización que yo aún no tenía madurez para recibir, sin quitarme nunca lo que ya aguantaba.',
          deixa: 'Flamarion no está hoy aquí, pero hay algo que hizo…' },
        { linhas: ['Proteger a alguien de lo que', 'aún no aguanta,', 'sin podar lo que', 'ya aguanta.'],
          deixa: '…sin quitarme nunca lo que ya aguantaba.' },
        { texto: 'Eso es dificilísimo de calibrar. Y él lo calibró.', deixa: '…sin podar lo que ya aguanta.' }
      ] },

    /* 12 */
    { curto: 'Feb/26 · Líder Técnico', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'FEB/26', deixa: 'Eso es dificilísimo de calibrar, y él lo calibró.' },
        { texto: 'Líder Técnico de Fuse IoT.', deixa: 'En febrero de este año…' },
        { texto: 'Con el equipo de I+D e Innovación.', deixa: '…pasé a Líder Técnico de Fuse IoT.' },
        { texto: 'SEBRAE · USP · RECORD NEWS', deixa: '…con el equipo de I+D e Innovación.' },
        { texto: 'Y me siento en reuniones que hace dos años no sabía que existían.',
          deixa: 'Hoy doy charlas con Sebrae, hablé en la USP, salí en Record News…' }
      ] },

    /* 13 */
    { curto: '"Yo era un crío metiéndome"', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      pausa: 'PAUSA 3 de 5 — la más importante del bloque. Separa los logros de la versión honesta.',
      passos: [
        { texto: 'ahora, cómo funcionó esto de verdad', deixa: '[PAUSA] …que no sabía que existían.' },
        { linhas: ['Yo era un crío', 'metiendo las narices', 'donde no me llamaban.'],
          deixa: 'Quiero ser honesto, porque no fue "lo pedí y me lo dieron".' },
        { texto: 'Me ignoraron, me dieron con la puerta en las narices, hubo mucho que pedí y simplemente no llegó.',
          deixa: '…donde no me llamaban.' },
        { texto: 'Pero no era con mala intención, y quiero dejarlo muy claro. Era que yo aún no había demostrado nada y nadie me conocía. Así que me empeñaba en darme a conocer por las grietas.',
          deixa: '…y simplemente no llegó.' }
      ] },

    /* 14 */
    { curto: 'La constelación de nombres', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      centro: 'Todo esto ya estaba aquí dentro. Yo solo lo junté en un mismo sitio.',
      passos: [
        { texto: 'y lo que hice en esas grietas no fue inventar nada',
          deixa: '…darme a conocer por las grietas.' },
        {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
        { deixa: '(respira) No traje conocimiento nuevo aquí.' }
      ] },

    /* 15 */
    { curto: 'Lo que era mío', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'y encima puse lo que era mío', deixa: '…y lo junté todo en un mismo sitio.' },
        { linhas: ['Perfeccionismo', 'y empatía llevada', 'al extremo.'], deixa: 'Y encima puse lo que era mío:' }
      ] },

    /* 16 */
    { curto: 'El método', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'En la práctica era así.', deixa: '…perfeccionismo y empatía llevada al extremo.' },
        { titulo: 'Me convertía en ellos',
          texto: 'Cuando iba a hacer slides para una empresa, estudiaba su material visual antes. Iconografía, tipografía, identidad entera. Y montaba la propuesta ya dentro de su identidad. Adaptaba mi tono de voz también.',
          deixa: 'En la práctica era así.' },
        { titulo: 'No parece un proveedor',
          texto: 'Porque cuando haces eso, no parece un proveedor presentando. Parece un colega hablando.',
          deixa: 'Por un momento me convertía en ellos.' },
        { titulo: 'Y luego un paso más atrás',
          texto: 'Intentaba ponerme en la piel del cliente de mi cliente. Sentir la frustración que él siente, y pensar la solución a esa frustración como si fuera mía. Eso iba siempre al pitch.',
          deixa: 'Parece un colega hablando.' }
      ] },

    /* 17 */
    { curto: 'Challenger', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { texto: 'en una formación de Vitor Carvalho', deixa: 'Eso iba siempre al pitch.' },
        { texto: 'Explicó lo de los vendedores que atravesaron la crisis de 2008 y el perfil challenger — deconstruir lo que el cliente cree saber y construir de nuevo desde ahí.',
          deixa: 'Y este perfil solo descubrí que lo tenía en una formación de Vitor Carvalho.' },
        { linhas: ['Yo ya hacía esto.', 'Solo no sabía que tenía nombre.'],
          deixa: '…y construir de nuevo desde ahí.' },
        { texto: 'Y hubo algo que dijo que se me quedó: aun siendo challenger, se puede aprender lo fuerte de los otros perfiles. No hace falta elegir uno y tirar el resto.',
          deixa: 'Yo ya hacía esto, solo no sabía que tenía nombre.' },
        { linhas: ['Porque deconstruir solo funciona', 'si la persona se siente', 'escuchada primero.'],
          deixa: '…no hace falta elegir uno y tirar el resto.' }
      ] },

    /* 18 */
    { curto: 'Leonardo · CTO', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { rotulo: 'Leonardo · CTO', deixa: '…se sienta escuchada primero.' },
        { texto: 'nuestro CTO', deixa: 'Y quien me dio la clave de esto fue Leonardo.' },
        { deixa: '(entra junto con el cargo)' },
        { linhas: ['Quien resuelve problemas todo', 'el día se engancha a resolverlos.', 'Pero la mayoría de la gente', 'solo quiere ser escuchada.'],
          deixa: 'Me dijo algo que no he olvidado nunca.' },
        { texto: 'También en el trabajo. Eso cambió por completo la forma en que entro en una reunión.',
          deixa: '…solo quiere ser escuchada.' }
      ] },

    /* 19 */
    { curto: '"No era porque yo fuera especial"', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      passos: [
        { linhas: ['No fue porque', 'yo fuera especial.'], deixa: '(respira) Así que…' },
        { texto: 'Fue que este Grupo tiene un conocimiento bestial repartido entre la gente, y yo fui a por cada trozo hasta juntarlo.',
          deixa: '…no fue porque yo fuera especial.' }
      ] },

    /* 20 */
    { curto: 'Transición — el salto a Fuse', bloco_nome: 'BLOQUE 1 — TRAYECTORIA',
      pausa: 'ANTI-PAUSA — habla y engancha directo. Si pausas aquí, se convierte en tema.',
      passos: [
        { texto: 'y fue con este conjunto con el que me fui a Fuse', deixa: '…hasta juntarlo.' },
        { texto: 'Fuse es una empresa del Grupo, pero funciona aparte. Y sé que mi salto allí no gustó a todo el mundo.',
          deixa: 'Y fue con este conjunto con el que me fui a Fuse.' },
        { texto: 'No fue insatisfacción, no fue una oferta mejor. Fue que quería apostar todo lo que aprendí aquí en otro terreno y ver hasta dónde llegaba.',
          deixa: '…no gustó a todo el mundo.' },
        { linhas: ['Así que lo que vengo a enseñar', 'es lo que pasó', 'cuando lo hice.'],
          deixa: '…y ver hasta dónde llegaba.' }
      ] },

    /* 21 */
    { curto: 'Cómo opera la industria hoy', bloco_nome: 'BLOQUE 2 — EL PROBLEMA',
      passos: [
        { texto: 'La industria hoy, de media, funciona así.', deixa: '…lo que pasó cuando lo hice.' },
        { titulo: 'SCADA de hace veinte años',
          deixa: 'Dejadme empezar por el problema, porque sin él el resto no tiene sentido.' },
        { titulo: 'Hoja de cálculo y papel', deixa: 'SCADA de hace veinte años,' },
        { titulo: 'Software que ya nadie sabe quién mantiene', deixa: '…hoja de cálculo, papel,' }
      ] },

    /* 22 */
    { curto: 'Lo que hay en el mercado', bloco_nome: 'BLOQUE 2 — EL PROBLEMA',
      passos: [
        { texto: 'Y no es falta de dinero. Es que lo que hay en el mercado para salir de ahí tampoco es bueno.',
          deixa: '…que ya nadie sabe quién mantiene.' },
        { deixa: 'Y no es falta de dinero.' },
        { deixa: 'IBM,' },
        { deixa: 'Siemens,' },
        { linhas: ['Todos entregan algo.', 'Ninguno entrega lo que la', 'operación necesita de verdad.'],
          deixa: 'Tractian —' }
      ] },

    /* 23 */
    { curto: 'VÍDEO · digital twin', bloco_nome: 'BLOQUE 2 — EL PROBLEMA',
      pausa: 'NO NARRAR — déjalo correr unos segundos',
      passos: [
        { texto: 'Y ahí llegamos nosotros con esto.', deixa: '…necesita de verdad.' },
        { rotulo: 'Digital twin funcionando · sin audio, en bucle',
          planta: 'PLANTA DEMO · SÃO PAULO', deixa: 'Y ahí llegamos nosotros con esto.' },
        { texto: 'la versión completa está en el stand',
          deixa: '[NO NARRAR — déjalo correr unos segundos]' }
      ] },

    /* 24 */
    { curto: '"¿Esto es real?"', bloco_nome: 'BLOQUE 2 — EL PROBLEMA',
      pausa: 'PAUSA 4 de 5 — el público necesita un segundo para pillar que es un elogio disfrazado de problema',
      passos: [
        { linhas: ['¿Esto es real?'], deixa: '¿Y sabéis cuál es la reacción que más recibimos?' },
        { texto: 'Es la reacción que más recibimos.', deixa: '[PAUSA] "¿Esto es real?"' }
      ] },

    /* 25 */
    { curto: 'El mayor problema comercial', bloco_nome: 'BLOQUE 2 — EL PROBLEMA',
      passos: [
        { texto: 'este es hoy nuestro mayor problema comercial', deixa: '…la reacción que más recibimos.' },
        { linhas: ['No es el precio ni el competidor.', 'Es que lo que entregamos', 'está tan fuera de lo que el', 'mercado está acostumbrado a ver', 'que genera desconfianza', 'antes que interés.'],
          deixa: 'Este es hoy nuestro mayor problema comercial.' },
        { texto: 'Guardad ese "¿esto es real?", porque voy a volver a él.',
          deixa: '…antes que interés.' }
      ] },

    /* 26 */
    { curto: 'Iris', bloco_nome: 'BLOQUE 3 — IRIS',
      passos: [
        { texto: 'nuestra plataforma', deixa: '…porque voy a volver a él.' },
        { deixa: 'Iris es nuestra plataforma.' },
        { texto: 'Voy a explicarlo de la forma más directa que puedo.', deixa: '(entra el nombre)' }
      ] },

    /* 27 */
    { curto: 'VÍDEO · la operación en 3D', bloco_nome: 'BLOQUE 3 — IRIS',
      pausa: 'NO NARRAR al principio — deja que la imagen trabaje',
      passos: [
        { rotulo: 'Digital twin · segunda toma, ángulo distinto del primero',
          planta: 'DATOS REALES · TIEMPO REAL', deixa: '…de la forma más directa que puedo.' },
        { linhas: ['La operación entera replicada en 3D,', 'viva, con los datos reales de los', 'equipos corriendo ahí dentro.'],
          deixa: '[NO NARRAR unos segundos]' },
        { texto: 'No es una maqueta y no es un dashboard bonito. Es la planta funcionando dentro de la pantalla.',
          deixa: '…corriendo ahí dentro.' }
      ] },

    /* 28 */
    { curto: 'Anomalía', bloco_nome: 'BLOQUE 3 — IRIS',
      passos: [
        { texto: 'detrás de esto', deixa: '…es la planta funcionando dentro de la pantalla.' },
        { texto: 'Entrenamos redes neuronales que aprenden cómo se comporta esa operación cuando todo está normal. Cuando empieza a salirse de lo normal, avisa.',
          deixa: 'Detrás de esto…' },
        { linhas: ['No es alarma de avería.', 'Es aviso de que', 'la avería viene.'],
          deixa: 'Y quiero ser específico:' },
        { texto: 'Son cosas muy distintas en la cuenta del cliente.',
          deixa: '…es aviso de que la avería viene.' }
      ] },

    /* 29 */
    { curto: 'Zero Trust', bloco_nome: 'BLOQUE 3 — IRIS',
      passos: [
        { texto: 'Zero Trust.', deixa: '…en la cuenta del cliente.' },
        { titulo: 'Nadie accede a nada sin probar quién es',
          texto: 'Y no es una vez en el login. Es siempre.',
          deixa: 'Nuestra arquitectura es Zero Trust. Traduciendo:' },
        { titulo: 'Varias nubes, con ruta de fallback probada',
          texto: 'Si un proveedor cae, cambiamos y el cliente no lo nota.',
          deixa: '…es siempre.' }
      ] },

    /* 30 */
    { curto: 'Patentes', bloco_nome: 'BLOQUE 3 — IRIS',
      passos: [
        { linhas: ['Parte de lo que desarrollamos', 'ya tiene las patentes escritas,', 'listas para registrar.'],
          deixa: '…y el cliente no lo nota.' }
      ] },

    /* 31 */
    { curto: 'Puente al stand', bloco_nome: 'BLOQUE 3 — IRIS',
      passos: [
        { texto: 'No voy a abrir la plataforma aquí, y es a propósito.', deixa: '…listas para registrar.' },
        { linhas: ['Lo que pasa en la pantalla es mejor', 'que cualquier cosa que yo', 'describa en cuatro minutos.'],
          deixa: 'Hay un stand ahí fuera…' },
        { texto: 'Iris está funcionando en el stand', deixa: '…en cuatro minutos.' }
      ] },

    /* 32 */
    { curto: 'La pregunta vuelve', bloco_nome: 'BLOQUE 4 — RESPONDIENDO',
      passos: [
        { texto: '"¿Esto es real?"', deixa: '…Iris está funcionando en el stand.' },
        { texto: 'Hay tres formas de responder a eso.', deixa: 'Volviendo a la pregunta. "¿Esto es real?"' },
        { titulo: 'Vender', deixa: 'Hay tres formas de responder a eso…' },
        { titulo: 'Que te evalúe quien no se deja engañar', deixa: '(la primera)' },
        { titulo: 'Aparecer', deixa: '(la segunda)' },
        { texto: 'Y trabajamos las tres este semestre.', deixa: '(la tercera)' }
      ] },

    /* 33 */
    { curto: '01 · Vendiendo', bloco_nome: 'BLOQUE 4 — RESPONDIENDO',
      passos: [
        { texto: 'la primera es vender', deixa: '…trabajamos las tres este semestre.' },
        { deixa: 'La primera es vender.' },
        { texto: 'Alpargatas: proyecto cerrado. Cerramos parcial y el rollout va el año que viene.',
          deixa: '(entra el logo de Alpargatas)' },
        { deixa: '…y el rollout va el año que viene.' },
        { texto: 'Enfil: ya validamos con Diego Tarabini y con Ellen, jefa de ingeniería de allí. En septiembre empezamos un proyecto nuevo suyo.',
          deixa: '(entra el logo de Enfil)' }
      ] },

    /* 34 */
    { curto: '"El discurso no paga nóminas"', bloco_nome: 'BLOQUE 4 — RESPONDIENDO',
      passos: [
        { linhas: ['El discurso no', 'paga nóminas.'], deixa: '…empezamos un proyecto nuevo suyo.' },
        { texto: 'Un cliente pagando es la respuesta más corta que existe a "esto es real".',
          deixa: 'Porque al final…' }
      ] },

    /* 35 */
    { curto: '02 · EY', bloco_nome: 'BLOQUE 4 — RESPONDIENDO',
      passos: [
        { texto: 'la segunda es que te evalúe quien no se deja engañar',
          deixa: '…la respuesta más corta que existe.' },
        { deixa: 'La segunda es que te evalúe quien no se deja engañar.' },
        { texto: 'Y no fue a un analista. Fue a socios jefes de EY Brasil y al director ejecutivo.',
          deixa: 'Lo presentamos a EY.' },
        { texto: 'Gente que evalúa tecnología como profesión, todos los días, y que tiene todo el incentivo del mundo para encontrar el fallo.',
          deixa: '…y al director ejecutivo.' },
        { linhas: ['Validaron y mostraron interés.'],
          deixa: '…todo el incentivo del mundo para encontrar el fallo.' }
      ] },

    /* 36 */
    { curto: '02 · Google', bloco_nome: 'BLOQUE 4 — RESPONDIENDO',
      passos: [
        { deixa: '…validaron y mostraron interés.' },
        { linhas: ['Lo presentamos a Google.', 'Lo mismo.'], deixa: '(entra el logo de Google)' }
      ] },

    /* 37 */
    { curto: '02 · Inversores', bloco_nome: 'BLOQUE 4 — RESPONDIENDO',
      passos: [
        { linhas: ['Y tuvimos grandes inversores', 'mirando la plataforma.'],
          deixa: 'Lo presentamos a Google. Lo mismo.' },
        { texto: 'También validaron, también mostraron interés.', deixa: '…mirando la plataforma.' }
      ] },

    /* 38 */
    { curto: 'Dra. Itamar Illiuk', bloco_nome: 'BLOQUE 4 — RESPONDIENDO',
      pausa: 'PAUSA 5 de 5 — sácala de la lista. Sin pausa se convierte en un ítem.',
      passos: [
        { rotulo: 'Dra. Itamar Illiuk', deixa: '[PAUSA] …también mostraron interés.' },
        { texto: 'posdoctora · embajadora NVIDIA · socia Google DeepMind',
          deixa: 'Y hay una que quiero sacar de la lista y contar aparte.' },
        { deixa: '(entra el cargo)' },
        { linhas: ['No solo validó técnicamente.', 'Quiere trabajar con nosotros', 'comercialmente.'],
          deixa: '…socia de Google DeepMind.' },
        { texto: 'Cuando alguien de ese nivel entra como socia y no como evaluadora, la pregunta del "esto es real" se acabó.',
          deixa: '…trabajar con nosotros comercialmente.' }
      ] },

    /* 39 */
    { curto: '03 · Apareciendo', bloco_nome: 'BLOQUE 4 — RESPONDIENDO',
      passos: [
        { texto: 'y la tercera forma es aparecer', deixa: '…la pregunta del "esto es real" se acabó.' },
        { texto: 'Parte de la desconfianza es simplemente que todavía nadie nos conoce. Así que este semestre fuimos donde había gente.',
          deixa: 'Y la tercera forma es aparecer.' },
        { rotulo: 'Summit de IA', deixa: '…fuimos donde había gente.' },
        { rotulo: 'Record News · Log In Space', deixa: 'Summit de IA, varias presentaciones.' },
        { rotulo: 'Sebrae · con Murilo Mello, de SigmaCX', deixa: 'Log In Space, en Record News.' },
        { rotulo: 'USP · con Murilo Silva', deixa: 'Sebrae, junto a Murilo Mello de SigmaCX.' },
        { linhas: ['Cuando la persona ya ha oído', 'hablar de nosotros, no', 'empiezas de cero.'],
          deixa: 'USP, junto a Murilo Silva.' }
      ] },

    /* 40 */
    { curto: 'Transición — cómo llegamos ahí', bloco_nome: 'BLOQUE 5 — CÓMO CONSTRUIMOS',
      passos: [
        { texto: 'No vine aquí solo a enseñar resultados, porque resultados los mete cualquiera en un slide.',
          deixa: '…no empiezas de cero.' },
        { linhas: ['Vine a enseñar', 'cómo llegamos', 'a ellos.'], deixa: '…los mete cualquiera en un slide.' },
        { texto: 'Y esta parte le interesa a todo el mundo aquí, sea cual sea la empresa en la que trabajéis.',
          deixa: '…cómo llegamos a ellos.' }
      ] },

    /* 41 */
    { curto: 'VÍDEO · InFuse', bloco_nome: 'BLOQUE 5 — CÓMO CONSTRUIMOS',
      pausa: 'NO NARRAR al principio',
      passos: [
        { texto: 'primera cosa', deixa: '…sea cual sea la empresa en la que trabajéis.' },
        { texto: 'InFuse.',
          deixa: 'Necesitábamos una herramienta de gestión que siguiera el ritmo del equipo. Buscamos en el mercado y no encontramos nada. Así que la construimos.' },
        { rotulo: 'InFuse funcionando · tarea, roadmap, pantalla de KPI',
          marca: 'INFUSE · GESTIÓN', planta: 'EQUIPO I+D · FUSE IOT', badge: 'INTERNO',
          deixa: 'Se llama InFuse.' },
        { texto: 'Tarea, roadmap, archivo protegido, y una pantalla con el KPI de todo: horas trabajadas, tiempo medio por tarea, entregado contra previsto, avance de cada roadmap.',
          deixa: '[NO NARRAR — déjalo correr]' },
        { linhas: ['Y lo ve todo el equipo.', 'Incluido su propio rendimiento.'],
          deixa: '…avance de cada roadmap.' },
        { texto: 'Lo cual es bastante incómodo al principio y después se vuelve lo más útil que existe.',
          deixa: '…incluido su propio rendimiento.' }
      ] },

    /* 42 */
    { curto: 'Deploy', bloco_nome: 'BLOQUE 5 — CÓMO CONSTRUIMOS',
      passos: [
        { texto: 'segunda cosa', deixa: '…lo más útil que existe.' },
        { texto: 'Nada va a producción porque alguien lo decidió sobre la marcha.', deixa: 'Segunda cosa: deploy.' },
        { titulo: 'Los scripts validan y prueban',
          texto: 'Validan los puntos de seguridad y prueban todo.',
          deixa: '…porque alguien lo decidió sobre la marcha.' },
        { titulo: 'Solo entonces promueven',
          texto: 'De desarrollo a homologación, y de homologación a producción.',
          deixa: 'Los scripts validan los puntos de seguridad, prueban todo…' },
        { titulo: 'Y nada corre sin GMUD aprobada',
          texto: 'Que es exactamente lo siguiente que iba a contar.',
          deixa: '…y de homologación a producción.' },
        { linhas: ['Cuando el roadmap cierra, la', 'release note se dispara sola', 'en nuestra web.'],
          deixa: '…lo siguiente que iba a contar.' },
        { texto: 'El cliente descubre lo que cambió sin que nadie escriba un correo.',
          deixa: '…se dispara sola en nuestra web.' }
      ] },

    /* 43 */
    { curto: 'Gobernanza e ISOs', bloco_nome: 'BLOQUE 5 — CÓMO CONSTRUIMOS',
      passos: [
        { texto: 'tercera cosa — la que menos se ve y más importa',
          deixa: '…sin que nadie escriba un correo.' },
        { texto: 'Gobernanza.', deixa: 'Tercera cosa, y es la que menos se ve y más importa.' },
        { texto: 'Tenemos GMUD. Ninguna implementación ocurre sin documento y sin alguien que asuma la responsabilidad.',
          deixa: 'Gobernanza.' },
        { linhas: ['Si no hay responsable nombrado,', 'no se ejecuta.'],
          deixa: '…sin alguien que asuma la responsabilidad.' },
        { deixa: 'Así de simple.' },
        { texto: 'La norma de gestión de IA. Estamos en certificación — si lo conseguimos, estamos entre los primeros del país. La 27001 está en el radar.',
          deixa: '(entra la ISO)' }
      ] },

    /* 44 */
    { curto: 'La invitación al Grupo', bloco_nome: 'BLOQUE 5 — CÓMO CONSTRUIMOS',
      pausa: 'TONO SUELTO — comentario lanzado, no propuesta. Si lo ensayas de más se vuelve pitch.',
      passos: [
        { texto: 'Mucho de lo que construimos no va de IoT. InFuse no. El proceso de deploy no. La gobernanza no.',
          deixa: 'Y ya que estoy hablando de esto…' },
        { linhas: ['Esto se puede usar', 'en cualquier empresa', 'de este Grupo.'], deixa: '…la gobernanza no.' },
        { texto: 'Y nos gustaría mucho hablar con quien tenga interés en construirlo con nosotros.',
          deixa: '…en cualquier empresa de este Grupo.' }
      ] },

    /* 45 */
    { curto: 'La línea de tiempo completa', bloco_nome: 'BLOQUE 6 — CIERRE',
      passos: [
        { texto: 'Abrí esto con una línea de tiempo de dos años. De becario de preventa a Líder Técnico.',
          deixa: '…en construirlo con nosotros.' },
        { linhas: ['Y en cada hito de esta línea', 'está el nombre de alguien que', 'decidió dejarme hacer.'],
          deixa: '…becario de preventa a Líder Técnico.' }
      ] },

    /* 46 */
    { curto: 'Fuse', bloco_nome: 'BLOQUE 6 — CIERRE',
      passos: [
        { linhas: ['Fuse es lo que', 'pasó con', 'ese espacio.'], deixa: '…que decidió dejarme hacer.' },
        { texto: 'Y lo que quiero dejaros es que aquí hay mucho más espacio disponible del que la gente imagina.',
          deixa: '…con ese espacio.' },
        { texto: 'No va de puesto, no va de antigüedad, no va de título.',
          deixa: '…del que la gente imagina.' }
      ] },

    /* 47 */
    { curto: '"Va de pedir. Y entregar."', bloco_nome: 'BLOQUE 6 — CIERRE',
      passos: [
        { linhas: ['Va de pedir.', 'Y entregar.'], deixa: '…no va de título.' }
      ] },

    /* 48 */
    { curto: 'Gracias', bloco_nome: 'BLOQUE 6 — CIERRE',
      passos: [
        { linhas: ['Iris está funcionando en el stand.'], deixa: '…va de pedir y entregar.' },
        { texto: 'Id a verlo y preguntadme lo que queráis.', deixa: '…funcionando en el stand.' },
        { texto: 'Gracias.', deixa: '…preguntadme lo que queráis.' }
      ] }
  ]
};
