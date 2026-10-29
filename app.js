/* ==========================================================================
   ANDRÉS MONTOYA HERNÁNDEZ — CATÁLOGO DE PÁGINAS Y SISTEMAS DIGITALES (app.js)
   9 Sistemas Reales Funcionando Hoy · Explicados en lenguaje claro para todos
   WhatsApp Oficial: +52 443 143 3732
   ========================================================================== */

const OWNER_INFO = {
  fullName: 'Andrés Montoya Hernández',
  whatsapp: '524431433732',
  whatsappDisplay: '443 143 3732',
  githubUrl: 'https://github.com/andresmh99-dev'
};

const PLATFORMS = [
  {
    id: 'nailroomspa',
    name: 'Nail Room Spa · Sistema de Citas y Recepción',
    repo: 'andresmh99-dev/Nailroomspa',
    repoUrl: 'https://github.com/andresmh99-dev/Nailroomspa',
    liveUrl: 'https://www.nailroomspa.com',
    displayDomain: 'www.nailroomspa.com',
    category: 'negocios',
    sectorLabel: 'Salones de Belleza, Spas, Barberías y Clínicas',
    statusLabel: 'Funcionando hoy · Querétaro y Morelia',
    basePrice: 22000,
    setupFee: 8500,
    monthlyFee: 1990,
    codeReadyPct: 85,
    timeEstimate: '2 a 3 semanas',
    tagline:
      'Tus clientes agendan solos por internet o mandando una nota de voz por WhatsApp; el sistema cobra anticipos y evita que se encimen citas.',
    idealFor:
      'Salones de uñas, spas, barberías, clínicas de belleza, estudios de pestañas, consultorios dentales y negocios con una o varias sucursales.',
    problemSolved:
      'Las clientas mandan mensajes o audios de noche cuando no hay quien conteste, en recepción se enciman horarios por error y se pierde dinero cuando alguien agenda y no llega.',
    solutionBuilt:
      'Une todo en un solo lugar: una página donde el cliente elige servicio y horario en 1 minuto, un asistente de WhatsApp que escucha notas de voz y agenda solo las 24 horas, y un calendario para recepción donde es imposible encimar dos citas.',
    highlights: [
      'Asistente de WhatsApp que escucha audios y agenda solo 24/7',
      'Calendario fácil de usar donde nunca se enciman dos citas',
      'Permite reservar varios servicios en una misma visita',
      'Cobro de anticipos con tarjeta y corte de caja del día'
    ],
    modulesDetailed: [
      'Página de reservas en 5 pasos muy simples: sucursal, servicio, persona que atiende, día/hora y confirmación.',
      'Asistente automático en WhatsApp que entiende mensajes escritos y notas de voz para agendar sin que tengas que contestar tú.',
      'Aviso inmediato a tu celular si una clienta necesita atención personal de recepción.',
      'Calendario visual para recepción donde puedes mover citas arrastrándolas con el dedo o el mouse.',
      'Bloqueo inteligente de horarios: una vez que alguien toma una hora, nadie más puede encimarse.',
      'Enlace por WhatsApp para que el cliente pueda confirmar, cambiar su cita o calificar el servicio.'
    ],
    stack: [
      'Funciona en Celular y Computadora',
      'WhatsApp que Contesta Solo',
      'Escucha Notas de Voz',
      'Cobro de Anticipos con Tarjeta',
      'Cero Citas Encimadas',
      'Para 1 o Varias Sucursales'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>💬 nailroomspa.com · WhatsApp + Recepción</span>
          <span class="mini-chip green">Sin Citas Encimadas</span>
        </div>
        <div class="mini-ui-row">
          <span>🎙️ <em>Audio de clienta: "Hola, ¿tienen lugar mañana a las 5 para uñas y pedi?"</em></span>
          <span class="mini-chip purple">Audio Escuchado</span>
        </div>
        <div class="mini-ui-row">
          <span>✨ <strong>Cita Agendada:</strong> Uñas + Pedi · 5:00 pm · Atiende: Valeria</span>
          <span class="mini-chip cyan">Anticipo Pagado</span>
        </div>
      </div>
    `
  },
  {
    id: 'control-ops',
    name: 'InLog · Control de Embarques, Rutas y Cobranza',
    repo: 'andresmh99-dev/control-ops',
    repoUrl: 'https://github.com/andresmh99-dev/control-ops',
    liveUrl: 'https://ops.in-log.net',
    displayDomain: 'ops.in-log.net',
    category: 'empresas',
    sectorLabel: 'Empresas de Transporte, Logística y Distribución',
    statusLabel: 'Funcionando hoy · Morelia y Laredo TX',
    basePrice: 44000,
    setupFee: 16500,
    monthlyFee: 3900,
    codeReadyPct: 82,
    timeEstimate: '3 a 5 semanas',
    tagline:
      'Panel de control para seguir tus entregas y camiones en vivo, leer documentos automáticamente y cuidar la ganancia de cada viaje.',
    idealFor:
      'Empresas de transporte de carga, agencias aduanales, distribuidoras, comercializadoras y negocios que coordinan entregas o rutas.',
    problemSolved:
      'Cuando llevas tus envíos en hojas de Excel y grupos de WhatsApp, se pierden documentos, los clientes llaman todo el día preguntando dónde va su pedido y no sabes cuánto ganaste realmente en cada viaje.',
    solutionBuilt:
      'Un panel donde todo tu equipo ve en vivo qué envíos van a tiempo y cuáles tienen urgencia. Tus clientes reciben un link para ver en su celular por dónde va su entrega, el sistema lee documentos PDF sin capturarlos a mano y te avisa si un viaje deja poca ganancia.',
    highlights: [
      'Link de rastreo en vivo para que tu cliente vea dónde va su entrega',
      'Lee documentos PDF automáticamente sin capturarlos a mano',
      'Cartas de instrucciones con firma digital desde el celular',
      'Control de facturas, cuentas por cobrar y alertas de ganancia'
    ],
    modulesDetailed: [
      'Tablero principal con semáforo de colores: qué entregas salen hoy, cuáles llevan retraso y qué papeles faltan.',
      'Rutas con varias paradas donde cada cliente solo ve el avance de su propia entrega.',
      'Seguimiento especial cuando una carga cambia de camión o cruza la frontera.',
      'Lectura automática de documentos de embarque para detectar errores antes de que cuesten dinero.',
      'Envío de órdenes de trabajo al transportista para que las firme desde su celular.',
      'Control de dinero claro: cuánto cobraste, cuánto costó el viaje, quién te debe facturas vencidas y cuánto ganaste libre.'
    ],
    stack: [
      'Panel en Tiempo Real',
      'Link de Rastreo para Clientes',
      'Lee Documentos PDF Solo',
      'Firma Digital en Celular',
      'Control de Cobranza y Ganancias',
      'Español e Inglés'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🚛 ops.in-log.net · Envío #26-007</span>
          <span class="mini-chip cyan">Ganancia: 24.8%</span>
        </div>
        <div class="mini-ui-row">
          <span>📍 Salida: Planta Morelia → Cruce Laredo TX → Entrega a tiempo</span>
          <span class="mini-chip green">En Camino</span>
        </div>
        <div class="mini-ui-row">
          <span>📄 <strong>Documento revisado:</strong> Datos y contenedor verificados sin errores</span>
          <span class="mini-chip purple">Revisado Automático</span>
        </div>
      </div>
    `
  },
  {
    id: 'agenda-fenix',
    name: 'Consultorios Fénix · Renta de Espacios y Agenda Médica',
    repo: 'andresmh99-dev/agenda-fenix',
    repoUrl: 'https://github.com/andresmh99-dev/agenda-fenix',
    liveUrl: 'https://agenda-fenix-one.vercel.app',
    displayDomain: 'consultoriosfenix.com',
    category: 'negocios',
    sectorLabel: 'Centros Médicos, Torres de Consultorios y Coworking',
    statusLabel: 'Funcionando hoy · Morelia Las Américas',
    basePrice: 24000,
    setupFee: 9000,
    monthlyFee: 2200,
    codeReadyPct: 88,
    timeEstimate: '2 a 3 semanas',
    tagline:
      'Administra la renta de consultorios, oficinas o salas por hora, cobra paquetes de horas y dale a cada especialista su propia agenda privada.',
    idealFor:
      'Torres de consultorios médicos o psicológicos, clínicas dentales, coworkings, centros de rehabilitación y renta de cabinas, estudios o salas por hora.',
    problemSolved:
      'Cuando rentas varios consultorios o salas por hora a distintos profesionales, es muy difícil llevar la cuenta de cuántas horas usó cada quien, evitar que dos doctores aparten el mismo consultorio y cobrarles a fin de mes.',
    solutionBuilt:
      'Un sistema que conecta dos cosas a la vez: la administración del edificio (qué consultorio está ocupado, cuántas horas le quedan a cada doctor en su paquete y su estado de cuenta mensual) y la agenda privada de cada especialista con sus propios pacientes.',
    highlights: [
      'Controla qué consultorio o sala está ocupada sin encimar horarios',
      'Privacidad total: recepción ve horarios ocupados pero no los datos del paciente',
      'Control de paquetes de horas prepagadas y pagos con tarjeta',
      'Estado de cuenta mensual en PDF enviado en automático cada día 1'
    ],
    modulesDetailed: [
      'Bloqueo automático que impide que dos especialistas aparten el mismo consultorio a la misma hora, dejando tiempo para limpieza.',
      'Dos formas de rentar: por horario fijo del mes o pagando únicamente las horas en que el doctor tuvo paciente.',
      'Total confidencialidad médica: la administración sabe qué consultorio está en uso, pero solo el doctor ve el nombre y expediente de su paciente.',
      'Compra y descuento automático de paquetes de horas (ej. paquete de 10 o 20 horas) con pago en línea.',
      'Corte mensual en PDF que se genera y envía solo el día 1 de cada mes.',
      'Mensajes automáticos de WhatsApp con botones para que el paciente confirme o cambie su cita.'
    ],
    stack: [
      'Renta por Hora o por Mes',
      'Agenda Privada para cada Doctor',
      'Control de Paquetes de Horas',
      'Pagos con Tarjeta',
      'Estado de Cuenta Mensual en PDF',
      'Confirmación por WhatsApp'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🏥 Consultorios Fénix · Control de Espacios</span>
          <span class="mini-chip green">Datos de Pacientes Privados</span>
        </div>
        <div class="mini-ui-row">
          <span>🔑 Consultorio 2 · 11:00 - 12:00 · Dr. Mauricio Rangel</span>
          <span class="mini-chip cyan">Apartado con Paciente</span>
        </div>
        <div class="mini-ui-row">
          <span>💳 Paquete de 20 horas: se descontó 1 hora (le quedan 14 hrs)</span>
          <span class="mini-chip amber">Corte Mensual Listo</span>
        </div>
      </div>
    `
  },
  {
    id: 'lievitum-pizzalab',
    name: 'Lievitum Pizza LAB · Página y Menú para Restaurantes',
    repo: 'www.lievitum.com',
    repoUrl: 'https://lustrous-stardust-5c82d0.netlify.app/',
    liveUrl: 'https://lustrous-stardust-5c82d0.netlify.app/',
    displayDomain: 'www.lievitum.com',
    category: 'negocios',
    sectorLabel: 'Restaurantes, Pizzerías, Cafeterías y Bares',
    statusLabel: 'Funcionando hoy · Morelia y Querétaro',
    basePrice: 11500,
    setupFee: 3900,
    monthlyFee: 690,
    codeReadyPct: 92,
    timeEstimate: '5 a 10 días',
    tagline:
      'Página atractiva para tu restaurante con menú digital con fotos, cambio de sucursal en un toque y botón directo para pedir por WhatsApp.',
    idealFor:
      'Restaurantes, pizzerías, cafeterías, bares, pastelerías, cocinas para llevar y negocios de comida con una o varias sucursales.',
    problemSolved:
      'Muchos restaurantes solo tienen un menú en PDF que tarda en abrir y se ve chiquito en el celular, o pierden hasta 30% de sus ventas pagando comisiones altas en aplicaciones de entrega.',
    solutionBuilt:
      'Una página propia que abre al instante en el celular, enamora con fotos grandes de tus platillos, indica automáticamente si tu sucursal está abierta o cerrada en ese momento y lleva al cliente a pedirte directo por WhatsApp o reservar mesa.',
    highlights: [
      'Selector de sucursal (ej. Morelia / Querétaro) que muestra si está Abierto hoy',
      'Menú interactivo por categorías con fotos grandes y filtros rápidos',
      'Botones directos para pedir por WhatsApp, Uber Eats o ver cómo llegar',
      'Configurada para aparecer primero cuando buscan dónde comer en Google'
    ],
    modulesDetailed: [
      'Botón para cambiar de ciudad o sucursal que actualiza al instante la dirección, el horario, el teléfono de WhatsApp y el mapa.',
      'Menú dividido por secciones (Entradas, Pizzas, Pastas, Bebidas, Postres) con filtros como "Más pedidas", "Vegetarianas" o "Picantes".',
      'Ventana con foto en grande, ingredientes y precio de cada platillo, más opción de descargar el menú para código QR en mesas.',
      'Preparada para que Google muestre tu restaurante, horario y ubicación cuando la gente busque comida en tu ciudad.'
    ],
    stack: [
      'Se Ve Increíble en Celular',
      'Menú Interactivo con Fotos',
      'Pedidos Directos a tu WhatsApp',
      'Para 1 o Varias Sucursales',
      'Menú QR para Mesas',
      'Aparece en Google'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🍕 lievitum.com · Sucursal Morelia / Querétaro</span>
          <span class="mini-chip green">Abierto Hoy · 1:00 pm a 10:00 pm</span>
        </div>
        <div class="mini-ui-row">
          <span>🍽️ Menú con Fotos: Pizza La Regina ($275) · Quattro Formaggi ($245)</span>
          <span class="mini-chip amber">Las Más Pedidas</span>
        </div>
        <div class="mini-ui-row">
          <span>📲 En 1 toque: Pedir por WhatsApp · Ver en Mapa · Menú QR</span>
          <span class="mini-chip cyan">Sin Comisiones</span>
        </div>
      </div>
    `
  },
  {
    id: 'psicoterapia-conductual',
    name: 'Psicoterapia Conductual · Consultorio Digital en tu Celular',
    repo: 'andresmh99-dev/PsicoterapiaConductual',
    repoUrl: 'https://github.com/andresmh99-dev/PsicoterapiaConductual',
    liveUrl: 'https://psicoterapiaconductual.net',
    displayDomain: 'psicoterapiaconductual.net',
    category: 'personas',
    sectorLabel: 'Psicólogos, Médicos, Nutriólogos, Dentistas y Terapeutas',
    statusLabel: 'Funcionando hoy · Especialistas de Salud',
    basePrice: 15500,
    setupFee: 5500,
    monthlyFee: 1190,
    codeReadyPct: 90,
    timeEstimate: '1 a 2 semanas',
    tagline:
      'Lleva todo tu consultorio desde el celular: tus pacientes agendan solos en tu página, llenas sus notas clínicas en segundos y se envían recordatorios automáticos.',
    idealFor:
      'Psicólogos, médicos especialistas, nutriólogos, fisioterapeutas, odontólogos, pediatras y cualquier profesional que atienda por cita.',
    problemSolved:
      'Los especialistas pierden mucho tiempo contestando mensajes para cuadrar una hora libre, se les pasa mandar recordatorios y terminan con notas clínicas sueltas en cuadernos o archivos difíciles de buscar.',
    solutionBuilt:
      'Tu propia página profesional junto con una aplicación que se instala en tu celular. Tus pacientes ven tus horarios disponibles y solicitan cita sin llamarte; tú la apruebas con un toque, llenas el expediente con formatos listos y el sistema les recuerda su cita antes de que falten.',
    highlights: [
      'Se instala en tu celular para que manejes tu agenda con una sola mano',
      'Formatos listos para anotar el seguimiento de cada consulta en 1 minuto',
      'Envía indicaciones o tareas al WhatsApp del paciente en un toque',
      'Recordatorios automáticos 48h y 24h antes para que no falten a consulta'
    ],
    modulesDetailed: [
      'Botón rápido en tu celular para registrar una cita nueva o un paciente en 10 segundos.',
      'Configuración fácil de tus días y horarios de atención (incluyendo horario de comida, vacaciones o días libres).',
      'Expediente clínico ordenado y protegido conforme a la normativa mexicana de salud, con copia de seguridad en 1 clic.',
      'Envío de resumen de sesión o recomendaciones al paciente por WhatsApp o correo al terminar la consulta.',
      'Avisos automáticos antes de cada cita y recordatorio de cumpleaños de tus pacientes.',
      'Resumen claro de cuántas consultas diste en el mes y cuánto llevas cobrado.'
    ],
    stack: [
      'Se Instala en tu Celular',
      'Página para Agendar Citas',
      'Expediente de Pacientes Seguro',
      'Recordatorios Automáticos',
      'Resumen de Ingresos del Mes',
      'Respaldo en 1 Clic'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🧠 psicoterapiaconductual.net · Mi Consultorio</span>
          <span class="mini-chip green">Expediente Seguro</span>
        </div>
        <div class="mini-ui-row">
          <span>📅 4:00 pm · Consulta confirmada (Recordatorio enviado ayer)</span>
          <span class="mini-chip cyan">Asistió Puntual</span>
        </div>
        <div class="mini-ui-row">
          <span>📝 Nota de sesión guardada → Recomendaciones enviadas por WhatsApp</span>
          <span class="mini-chip purple">En 1 Toque</span>
        </div>
      </div>
    `
  },
  {
    id: 'escalera-britania',
    name: 'Escalera Britania · Sistema para Torneos y Clubes Deportivos',
    repo: 'andresmh99-dev/escalera-britania2',
    repoUrl: 'https://github.com/andresmh99-dev/escalera-britania2',
    liveUrl: 'https://www.escalerabritania.com',
    displayDomain: 'www.escalerabritania.com',
    category: 'negocios',
    sectorLabel: 'Clubes de Tenis, Pádel, Golf, Fútbol, Gimnasios y Ligas',
    statusLabel: 'Funcionando hoy · +160 Jugadores Activos',
    basePrice: 23500,
    setupFee: 8900,
    monthlyFee: 2190,
    codeReadyPct: 84,
    timeEstimate: '2 a 3 semanas',
    tagline:
      'Digitaliza los torneos de tu club: los jugadores registran sus resultados desde el celular, la tabla de posiciones se calcula sola y apartan cancha en línea.',
    idealFor:
      'Clubes deportivos, clubes de tenis y pádel, country clubs, academias deportivas, ligas de fútbol/básquetbol y gimnasios.',
    problemSolved:
      'Llevar los torneos de un club en hojas pegadas en la pared, libretas o grupos de WhatsApp provoca discusiones por los puntos, días enteros haciendo cuentas a mano y desorden al subir o bajar jugadores de categoría.',
    solutionBuilt:
      'Una plataforma completa (página web y app para celular) probada con 167 jugadores reales. Cada jugador sube el marcador de su partido desde su teléfono, su rival lo confirma con un toque y la tabla general, puntos y ascensos del mes se actualizan solos al instante.',
    highlights: [
      'Página web y aplicación de celular para los socios y jugadores del club',
      'Tabla de posiciones y puntos que se calculan solos sin usar Excel',
      'Armado automático de grupos, jornadas y quién sube o baja de categoría',
      'Confirmación de marcador entre rivales + Apartado de canchas'
    ],
    modulesDetailed: [
      'Probado en la vida real con 167 jugadores divididos en 29 grupos y distintas categorías.',
      'Reglas de puntuación adaptables a tu torneo (puntos por partido jugado, penalizaciones por no presentarse, etc.).',
      'Cada jugador sube su marcador desde la cancha en 30 segundos y su oponente recibe un aviso para confirmarlo.',
      'Al terminar el mes, el sistema calcula automáticamente quiénes suben y quiénes bajan de grupo.',
      'Incluye apartado de canchas y panel para que el organizador resuelva cualquier duda en segundos.'
    ],
    stack: [
      'Página Web + App en Celular',
      'Tabla de Posiciones en Vivo',
      'Cálculo Automático de Puntos',
      'Ascensos y Grupos Automáticos',
      'Apartado de Canchas',
      'Probado con +160 Jugadores'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🎾 escalerabritania.com · 167 Jugadores Activos</span>
          <span class="mini-chip green">Tabla al Día</span>
        </div>
        <div class="mini-ui-row">
          <span>🏆 Grupo 1-A: 1° R. Méndez (12.8 pts) · 2° A. Montoya (11.5 pts)</span>
          <span class="mini-chip cyan">Sube de Grupo ↑</span>
        </div>
        <div class="mini-ui-row">
          <span>📱 Marcador subido desde el celular: 6-4, 6-3 (Confirmado por rival)</span>
          <span class="mini-chip purple">Puntos Sumados</span>
        </div>
      </div>
    `
  },
  {
    id: 'inlog-quoter',
    name: 'InLog · Cotizador Automático para Clientes',
    repo: 'andresmh99-dev/INLOG',
    repoUrl: 'https://github.com/andresmh99-dev/INLOG',
    liveUrl: 'https://www.in-log.net',
    displayDomain: 'www.in-log.net',
    category: 'empresas',
    sectorLabel: 'Comercializadoras, Logística y Empresas que Cotizan Servicios',
    statusLabel: 'Funcionando hoy · Cotizaciones 24/7',
    basePrice: 38000,
    setupFee: 14500,
    monthlyFee: 3400,
    codeReadyPct: 80,
    timeEstimate: '3 a 4 semanas',
    tagline:
      'Tus clientes cotizan en segundos desde tu página: el sistema compara tarifas, agrega tu margen de ganancia y les entrega una cotización formal en PDF.',
    idealFor:
      'Empresas de transporte y logística, distribuidoras, mayoristas, comercializadoras y negocios donde cotizar rápido hace ganar la venta.',
    problemSolved:
      'Cuando un cliente pide una cotización y tu equipo tarda horas o días buscando precios en varias páginas, sumando márgenes en Excel y armando un PDF, el cliente se desespera y le compra a la competencia.',
    solutionBuilt:
      'Un cotizador en línea conectado a tus listas de precios y proveedores. El cliente llena qué necesita en 4 pasos sencillos, el sistema calcula el precio con tu ganancia incluida en segundos y le entrega su cotización formal en PDF lista para aprobar.',
    highlights: [
      'Compara precios y tiempos de entrega automáticamente en segundos',
      'Suma tu porcentaje de ganancia en automático sin errores de dedo',
      'Área privada para que el cliente acepte la cotización y siga su pedido',
      'Genera cotización formal en PDF con el logotipo de tu empresa'
    ],
    modulesDetailed: [
      'Formulario guiado en 4 pasos muy fáciles (en español e inglés) para que el cliente solicite su cotización.',
      'Conexión directa con tarifas de proveedores y posibilidad de subir tus propias listas de precios desde Excel.',
      'Configuración del porcentaje de ganancia general o precios preferenciales para tus mejores clientes.',
      'Panel para el dueño donde ves quién cotizó hoy, qué ventas se cerraron y cuánto dinero representan.',
      'Acceso fácil para el cliente (sin recordar contraseñas difíciles) para aprobar su propuesta en un clic.'
    ],
    stack: [
      'Cotizaciones en Segundos',
      'Suma tu Ganancia Solo',
      'Sube tus Precios desde Excel',
      'Portal Privado para Clientes',
      'Descarga Cotización en PDF',
      'Español e Inglés'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🌐 in-log.net · Cotización en Línea</span>
          <span class="mini-chip cyan">Respuesta en 5 seg</span>
        </div>
        <div class="mini-ui-row">
          <span>⚓ Opción 1 calculada con tu margen de ganancia del 20% incluido</span>
          <span class="mini-chip green">Lista para Cliente</span>
        </div>
        <div class="mini-ui-row">
          <span>📄 Cotización en PDF descargada y guardada en el portal del cliente</span>
          <span class="mini-chip amber">Venta en Proceso</span>
        </div>
      </div>
    `
  },
  {
    id: 'family-os',
    name: 'Family OS · Organizador Escolar y Familiar',
    repo: 'andresmh99-dev/agenda-familiar',
    repoUrl: 'https://github.com/andresmh99-dev/agenda-familiar',
    liveUrl: 'https://family-os-ten.vercel.app',
    displayDomain: 'familyos.mx',
    category: 'personas',
    sectorLabel: 'Familias con Hijos, Colegios y Asociaciones de Padres',
    statusLabel: 'Funcionando hoy · App Familiar',
    basePrice: 14500,
    setupFee: 4900,
    monthlyFee: 990,
    codeReadyPct: 82,
    timeEstimate: '1 a 2 semanas',
    tagline:
      'Reenvía cualquier aviso de la escuela, circular en PDF o foto del grupo de WhatsApp y conviértelo en segundos en un plan familiar compartido.',
    idealFor:
      'Familias ocupadas, colegios privados, kínders, academias infantiles y grupos de papás que quieren que no se les pase ningún evento o material escolar.',
    problemSolved:
      'En los grupos de WhatsApp del colegio mandan decenas de mensajes, fotos y PDFs con fechas de exámenes, festivales, pagos y materiales (como "mañana traer cartulina verde"), y todo se olvida o recae en una sola persona en casa.',
    solutionBuilt:
      'Una aplicación muy sencilla en el celular donde solo reenvías o subes el aviso de la escuela; el sistema lee la imagen o el PDF solo y saca la fecha, a qué hijo le toca, qué material hay que comprar y cuánto hay que pagar, compartiéndolo entre mamá y papá.',
    highlights: [
      'Lee circulares en PDF, fotos y mensajes de la escuela sin escribir a mano',
      'Separa solito qué día es el evento, qué material llevar y qué pago hacer',
      'Calendario compartido entre mamá, papá y familia para repartir pendientes',
      'Manda recordatorios a tiempo para que nunca se olvide nada del colegio'
    ],
    modulesDetailed: [
      'Lectura automática de circulares escolares y fotos con un botón para confirmar antes de guardar en el calendario.',
      'Color e identificación por cada hijo, escuela o actividad de la tarde (natación, inglés, fútbol, pediatra).',
      'Permite asignar quién se encarga de cada pendiente (ej. "Papá compra el material", "Mamá hace la transferencia").',
      'Información 100% privada: cada familia tiene su propio espacio seguro donde nadie externo puede ver sus actividades.'
    ],
    stack: [
      'Muy Fácil de Usar en Celular',
      'Lee Fotos y PDFs de la Escuela',
      'Calendario Compartido Mamá y Papá',
      'Avisa Materiales y Pagos',
      'Recordatorios a Tiempo',
      '100% Privado para tu Familia'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>👨‍👩‍👧‍👦 Family OS · Aviso de la Escuela Leído</span>
          <span class="mini-chip purple">Sin Escribir a Mano</span>
        </div>
        <div class="mini-ui-row">
          <span>📄 <em>"Circular Primaria: Viernes 24 festival, llevar playera blanca y $150"</em></span>
          <span class="mini-chip cyan">Detectado al Instante</span>
        </div>
        <div class="mini-ui-row">
          <span>✅ Viernes 24: Festival · Mamá: Playera blanca · Papá: Pago de $150</span>
          <span class="mini-chip green">Ambos Avisados</span>
        </div>
      </div>
    `
  },
  {
    id: 'incubeit-landing',
    name: 'INCUBEIT · Página Comercial con Cotizador en Vivo',
    repo: 'andresmh99-dev/incubeit-landing',
    repoUrl: 'https://incube-it.com/',
    liveUrl: 'https://incube-it.com/',
    displayDomain: 'incube-it.com',
    category: 'empresas',
    sectorLabel: 'Empresas de Servicios, Constructoras, Consultoras y Negocios',
    statusLabel: 'Funcionando hoy · incube-it.com',
    basePrice: 12000,
    setupFee: 4200,
    monthlyFee: 790,
    codeReadyPct: 95,
    timeEstimate: '5 a 10 días',
    tagline:
      'Página comercial moderna donde tus clientes calculan el precio aproximado de tu servicio al instante y descargan una cotización formal en PDF.',
    idealFor:
      'Despachos, constructoras, arquitectos, agencias, consultoras, proveedores de eventos y negocios que quieren que su página web cotice y venda 24/7.',
    problemSolved:
      'La mayoría de las páginas web solo tienen texto fijo de "Quiénes somos" y el cliente se sale sin dejar sus datos porque no sabe cuánto cuesta tu servicio ni recibe respuesta rápida.',
    solutionBuilt:
      'Una página vendedora con una calculadora interactiva adaptada a tus precios: el visitante elige qué necesita, ve el presupuesto en pantalla al momento, descarga una propuesta formal en PDF con tu logo y te contacta directo por WhatsApp.',
    highlights: [
      'Calculadora interactiva para que el cliente cotice tu servicio al momento',
      'Descarga inmediata de cotización formal en PDF con tu logotipo',
      'Botón que te envía el pedido completo directo a tu WhatsApp',
      'Abre rapidísimo en cualquier celular o computadora las 24 horas'
    ],
    modulesDetailed: [
      'Calculadora adaptada exactamente a cómo cobras tú (por paquete, por metro cuadrado, por persona, por hora o por servicio).',
      'Documento PDF con presentación ejecutiva que el cliente puede guardar o imprimir para autorizar la compra.',
      'Diseño elegante con opción de fondo oscuro o claro que proyecta una imagen de gran empresa.'
    ],
    stack: [
      'Calculadora de Precios en Vivo',
      'Entrega Cotización en PDF',
      'Conectada a tu WhatsApp',
      'Abre al Instante en Celular',
      'Con Tu Propio Dominio .com'
    ],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>⚡ Página con Cotizador Automático + PDF</span>
          <span class="mini-chip green">Vende 24/7</span>
        </div>
        <div class="mini-ui-row">
          <span>🧮 El cliente elige qué servicios necesita y ve su presupuesto al instante</span>
          <span class="mini-chip cyan">Precio Claro</span>
        </div>
        <div class="mini-ui-row">
          <span>📥 Descarga <code>Cotizacion-Formal.pdf</code> y te escribe a tu WhatsApp</span>
          <span class="mini-chip purple">En 1 Clic</span>
        </div>
      </div>
    `
  }
];

window.OWNER_INFO = OWNER_INFO;
window.PLATFORMS = PLATFORMS;

const state = {
  filter: 'all',
  searchQuery: '',
  heroIndex: 0,
  selectedAudienceKey: 'negocio',
  selectedAudienceMultiplier: 1,
  selectedAudienceLabel: 'Negocio / Clínica / Restaurante / Club',
  paymentMode: 'onetime',
  selectedBasePlatformId: 'nailroomspa',
  activeModalPlatformId: null
};

document.addEventListener('DOMContentLoaded', () => {
  if (!document.getElementById('platformsGrid')) return;
  initTheme();
  initMobileNav();
  renderHeroDeck();
  renderPlatformsCatalog();
  initCatalogFilters();
  initConfigurator();
  initModals();
  lucide.createIcons();
});

function initTheme() {
  const saved = localStorage.getItem('am_showroom_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('am_showroom_theme', next);
    });
  }
}

function initMobileNav() {
  const btn = document.getElementById('mobileMenuBtn');
  const links = document.getElementById('navLinks');
  if (!btn || !links) return;

  btn.addEventListener('click', () => {
    links.classList.toggle('open');
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => links.classList.remove('open'));
  });
}

function renderHeroDeck() {
  const featuredIds = ['nailroomspa', 'control-ops', 'lievitum-pizzalab', 'escalera-britania'];
  const featured = featuredIds.map((id) => PLATFORMS.find((p) => p.id === id)).filter(Boolean);

  const urlBar = document.getElementById('heroDeckUrl');
  const body = document.getElementById('heroDeckBody');
  const tabsContainer = document.getElementById('heroDeckTabs');

  function updateSlide(index) {
    state.heroIndex = index;
    const item = featured[index];
    if (!item) return;

    urlBar.innerHTML = `<i data-lucide="lock"></i><span>${item.displayDomain}</span>`;
    const shotImg = item.screenshot || `assets/screenshots/${item.id}.png`;
    const kpis = item.visualKpis || item.highlights.slice(0, 3);

    body.innerHTML = `
      <div>
        <div class="vfx-shot-frame" data-vfx-tilt onclick="window.openVfxLightbox ? window.openVfxLightbox('${item.id}', 'shot') : openPlatformModal('${item.id}', 'overview')" style="margin-bottom:0.85rem;">
          <div class="vfx-shot-img-wrap" style="aspect-ratio:16/9;">
            <img src="${shotImg}" alt="${item.name}" />
            <div class="vfx-shot-overlay">
              <button type="button" class="vfx-shot-cta primary" onclick="event.stopPropagation(); window.openVfxLightbox ? window.openVfxLightbox('${item.id}', 'live') : openPlatformModal('${item.id}', 'live')">
                ▶ Ver Página en Vivo
              </button>
              <button type="button" class="vfx-shot-cta" onclick="event.stopPropagation(); window.openVfxLightbox ? window.openVfxLightbox('${item.id}', 'shot') : openPlatformModal('${item.id}', 'overview')">
                🔍 Ver Imagen Grande
              </button>
            </div>
          </div>
        </div>

        <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.35rem;">
          <span style="font-size:0.74rem;font-weight:700;color:var(--accent-cyan);text-transform:uppercase;letter-spacing:0.06em;">
            ${item.sectorLabel}
          </span>
          <span class="preview-repo-tag">Desde $${item.basePrice.toLocaleString('es-MX')} MXN</span>
        </div>
        <h3 style="font-family:var(--font-display);font-size:1.35rem;margin-bottom:0.3rem;">
          ${item.name}
        </h3>
        <p style="font-size:0.85rem;color:var(--text-secondary);margin-bottom:0.55rem;">
          ${item.shortPitch || item.tagline}
        </p>
        <div class="vfx-kpi-row">
          ${kpis.map((k) => `<span class="vfx-kpi-pill">${k}</span>`).join('')}
        </div>
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;margin-top:0.85rem;padding-top:0.75rem;border-top:1px solid var(--border-subtle);flex-wrap:wrap;">
        <div style="font-size:0.78rem;color:var(--text-secondary);">
          ⚡ <strong>Ya probado y funcionando</strong> · Listo para ti en ${item.timeEstimate}
        </div>
        <div style="display:flex;gap:0.5rem;">
          <button type="button" class="btn btn-glass btn-sm" onclick="window.openVfxLightbox ? window.openVfxLightbox('${item.id}', 'live') : openPlatformModal('${item.id}', 'overview')">
            <i data-lucide="monitor-play"></i> Ver Pantalla
          </button>
          <button type="button" class="btn btn-primary btn-sm" onclick="selectPlatformForQuote('${item.id}')">
            <i data-lucide="wand-2"></i> Quiero uno así
          </button>
        </div>
      </div>
    `;

    tabsContainer.innerHTML = featured
      .map(
        (p, idx) => `
        <button type="button" class="deck-tab ${idx === index ? 'active' : ''}" data-deck-idx="${idx}">
          ${p.name.split('·')[0].trim()}
        </button>
      `
      )
      .join('');

    tabsContainer.querySelectorAll('.deck-tab').forEach((btn) => {
      btn.addEventListener('click', () => {
        updateSlide(Number(btn.getAttribute('data-deck-idx')));
      });
    });

    lucide.createIcons();
  }

  updateSlide(0);
}

function renderPlatformsCatalog() {
  const grid = document.getElementById('platformsGrid');
  if (!grid) return;

  const filtered = PLATFORMS.filter((p) => {
    const matchesCategory = state.filter === 'all' || p.category === state.filter;
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) return matchesCategory;

    const haystack = [
      p.name,
      p.displayDomain,
      p.sectorLabel,
      p.tagline,
      p.idealFor,
      p.problemSolved,
      ...p.highlights,
      ...p.stack
    ]
      .join(' ')
      .toLowerCase();

    return matchesCategory && haystack.includes(q);
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: var(--bg-card); border-radius: 20px; border: 1px solid var(--border-subtle);">
        <h3 style="font-family: var(--font-display); margin-bottom: 0.5rem;">No encontramos un sistema con esa palabra exacta</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.25rem;">Pero podemos adaptar cualquiera de nuestros 9 sistemas a tu negocio o actividad.</p>
        <button type="button" class="btn btn-primary btn-sm" onclick="resetCatalogFilters()">Ver los 9 sistemas</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map((p) => {
      const kpis = p.visualKpis || p.highlights.slice(0, 3);
      const famPrice = Math.round((p.basePrice * 0.62) / 100) * 100;
      const frameHtml = window.renderVfxScreenshotFrame
        ? window.renderVfxScreenshotFrame(p)
        : `<div class="platform-preview-window">${p.miniUiHtml}</div>`;

      return `
      <article class="platform-card" data-category="${p.category}">
        <div style="padding:14px 14px 0;">
          ${frameHtml}
        </div>

        <div class="platform-body">
          <div class="platform-sector-row">
            <span class="platform-sector">${p.sectorLabel}</span>
            ${
              p.liveUrl
                ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" style="font-size:0.76rem;color:var(--accent-emerald);font-weight:700;display:inline-flex;align-items:center;gap:0.25rem;">
                    ${p.displayDomain} <i data-lucide="external-link" style="width:13px;height:13px;"></i>
                  </a>`
                : ''
            }
          </div>

          <h3 class="platform-title">${p.name}</h3>
          <p class="platform-tagline" style="margin-bottom:0.55rem;">${p.shortPitch || p.tagline}</p>

          <div class="vfx-kpi-row">
            ${kpis.map((k) => `<span class="vfx-kpi-pill">${k}</span>`).join('')}
          </div>

          <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:6px;padding:10px;border-radius:12px;background:rgba(15,23,42,0.55);border:1px solid var(--border-subtle);margin:10px 0;font-size:0.76rem;">
            <div>
              <div style="opacity:0.7;font-size:0.68rem;">PAGO ÚNICO</div>
              <strong>$${p.basePrice.toLocaleString('es-MX')}</strong>
            </div>
            <div>
              <div style="opacity:0.7;font-size:0.68rem;">PLAN MENSUAL</div>
              <strong style="color:var(--accent-cyan);">$${p.monthlyFee.toLocaleString('es-MX')}/mes</strong>
            </div>
            <div>
              <div style="opacity:0.7;font-size:0.68rem;">FAMILIAR -38%</div>
              <strong style="color:var(--accent-emerald);">$${famPrice.toLocaleString('es-MX')}</strong>
            </div>
          </div>

          <details class="vfx-details-drawer">
            <summary>➕ ¿Para quién sirve y qué incluye?</summary>
            <div class="vfx-details-content">
              <div style="margin-bottom:6px;"><strong>Ideal para:</strong> ${p.idealFor}</div>
              <div class="platform-stack" style="margin-top:8px;">
                ${p.stack.map((tech) => `<span class="stack-pill">✓ ${tech}</span>`).join('')}
              </div>
            </div>
          </details>

          <div class="platform-actions" style="margin-top:12px;">
            <button type="button" class="btn btn-glass btn-sm" onclick="window.openVfxLightbox ? window.openVfxLightbox('${p.id}', 'live') : openPlatformModal('${p.id}', '${p.liveUrl ? 'live' : 'overview'}')">
              <i data-lucide="monitor-play"></i>
              <span>Ver Página en Vivo</span>
            </button>
            <button type="button" class="btn btn-primary btn-sm" onclick="selectPlatformForQuote('${p.id}')">
              <i data-lucide="sparkles"></i>
              <span>Quiero uno así</span>
            </button>
          </div>
        </div>
      </article>
    `;
    })
    .join('');

  lucide.createIcons();
}

function initCatalogFilters() {
  const filterTabs = document.querySelectorAll('#catalogFilters .filter-tab');
  filterTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      setCatalogFilter(tab.getAttribute('data-filter'));
    });
  });

  document.querySelectorAll('[data-goto-filter]').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetFilter = btn.getAttribute('data-goto-filter');
      setCatalogFilter(targetFilter);

      document.querySelectorAll('.audience-pill').forEach((pill) => {
        pill.classList.toggle('active', pill.getAttribute('data-goto-filter') === targetFilter);
      });

      const catalogEl = document.getElementById('catalogo');
      if (catalogEl) catalogEl.scrollIntoView({ behavior: 'smooth' });
    });
  });

  const searchInput = document.getElementById('platformSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value;
      renderPlatformsCatalog();
    });
  }
}

function setCatalogFilter(filterValue) {
  state.filter = filterValue;
  document.querySelectorAll('#catalogFilters .filter-tab').forEach((tab) => {
    tab.classList.toggle('active', tab.getAttribute('data-filter') === filterValue);
  });
  renderPlatformsCatalog();
}

window.resetCatalogFilters = function () {
  state.filter = 'all';
  state.searchQuery = '';
  const searchInput = document.getElementById('platformSearch');
  if (searchInput) searchInput.value = '';
  setCatalogFilter('all');
};

function initModals() {
  const modal = document.getElementById('platformModal');
  const closeBtn = document.getElementById('modalCloseBtn');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closePlatformModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePlatformModal();
    });
  }

  document.querySelectorAll('#modalViewSwitcher .view-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const viewMode = btn.getAttribute('data-view');
      if (state.activeModalPlatformId) {
        renderModalView(state.activeModalPlatformId, viewMode);
      }
    });
  });

  const quoteBtn = document.getElementById('modalSelectForQuoteBtn');
  if (quoteBtn) {
    quoteBtn.addEventListener('click', () => {
      const id = state.activeModalPlatformId;
      closePlatformModal();
      if (id) selectPlatformForQuote(id);
    });
  }
}

window.openPlatformModal = function (platformId, initialView = 'overview') {
  const modal = document.getElementById('platformModal');
  const p = PLATFORMS.find((item) => item.id === platformId);
  if (!modal || !p) return;

  state.activeModalPlatformId = platformId;

  document.getElementById('modalCategory').textContent = p.sectorLabel;
  document.getElementById('modalTitle').textContent = p.name;

  const liveTabBtn = document.getElementById('modalLiveTabBtn');
  if (liveTabBtn) {
    liveTabBtn.style.display = p.liveUrl ? 'inline-flex' : 'none';
  }

  const effectiveView = p.liveUrl ? initialView : 'overview';
  renderModalView(platformId, effectiveView);

  const footerLinks = document.getElementById('modalFooterLinks');
  footerLinks.innerHTML = `
    ${
      p.liveUrl
        ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-glass btn-sm">
            <i data-lucide="external-link"></i> Visitar Página (${p.displayDomain})
          </a>`
        : ''
    }
  `;

  modal.classList.add('open');
  lucide.createIcons();
};

function renderModalView(platformId, viewMode) {
  const p = PLATFORMS.find((item) => item.id === platformId);
  const content = document.getElementById('modalContent');
  if (!p || !content) return;

  document.querySelectorAll('#modalViewSwitcher .view-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-view') === viewMode);
  });

  if (viewMode === 'live' && p.liveUrl) {
    content.innerHTML = `
      <div class="live-iframe-wrapper">
        <div class="live-iframe-bar">
          <span>🟢 Viendo en vivo la página real: <strong>${p.displayDomain}</strong></span>
          <a href="${p.liveUrl}" target="_blank" rel="noopener" style="color:var(--accent-cyan);font-weight:700;">
            Abrir ${p.displayDomain} en pestaña completa ↗
          </a>
        </div>
        <iframe src="${p.liveUrl}" title="Sitio oficial de ${p.name}" loading="lazy"></iframe>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="modal-overview-grid">
        <div>
          <div class="modal-section-box">
            <h4>🎯 ¿Qué problema te quita de encima?</h4>
            <p style="font-size:0.92rem;color:var(--text-secondary);">${p.problemSolved}</p>
          </div>

          <div class="modal-section-box">
            <h4>🚀 ¿Cómo funciona este sistema?</h4>
            <p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:0.9rem;">${p.solutionBuilt}</p>
            <ul class="modal-feature-list">
              ${p.modulesDetailed.map((m) => `<li>${m}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div>
          <div class="modal-section-box">
            <h4>🏢 ¿Para qué giros es ideal?</h4>
            <p style="font-size:0.92rem;color:var(--text-primary);font-weight:600;margin-bottom:0.75rem;">
              ${p.idealFor}
            </p>
            <p style="font-size:0.84rem;color:var(--text-secondary);">
              Como este sistema <strong>ya está hecho y probado en ${p.displayDomain}</strong>, no empezamos desde cero: le ponemos tu logotipo, tus colores, tus precios y tu propia dirección <code>.com</code> en solo <strong>${p.timeEstimate}</strong>.
            </p>
          </div>

          <div class="modal-section-box">
            <h4>💰 Formas de Adquirirlo</h4>
            <p style="font-size:0.86rem;color:var(--text-secondary);margin-bottom:0.4rem;">
              • <strong>Un Solo Pago (Tuyo para siempre):</strong> Desde <strong>$${p.basePrice.toLocaleString('es-MX')} MXN</strong>
            </p>
            <p style="font-size:0.86rem;color:var(--accent-emerald);font-weight:600;">
              • <strong>Plan Renta Mensual (Todo incluido):</strong> Activación $${p.setupFee.toLocaleString('es-MX')} + $${p.monthlyFee.toLocaleString('es-MX')}/mes
            </p>
          </div>

          <div class="modal-section-box">
            <h4>✨ Beneficios Incluidos</h4>
            <div style="display:flex;flex-wrap:wrap;gap:0.45rem;margin-top:0.5rem;">
              ${p.stack.map((s) => `<span class="tech-chip">✓ ${s}</span>`).join('')}
            </div>
          </div>

          ${p.miniUiHtml}
        </div>
      </div>
    `;
  }

  lucide.createIcons();
}

function closePlatformModal() {
  const modal = document.getElementById('platformModal');
  if (modal) modal.classList.remove('open');
}

function initConfigurator() {
  const step2Container = document.getElementById('step2BasePlatform');
  if (!step2Container) return;

  step2Container.innerHTML = PLATFORMS.map(
    (p) => `
      <button type="button" class="config-opt ${p.id === state.selectedBasePlatformId ? 'active' : ''}" data-base-id="${p.id}">
        <strong>${p.name}</strong>
        <span>Ejemplo real: ${p.displayDomain} · Entrega: ${p.timeEstimate}</span>
      </button>
    `
  ).join('');

  document.querySelectorAll('#step1Audience .config-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#step1Audience .config-opt').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedAudienceKey = btn.getAttribute('data-audience');
      state.selectedAudienceMultiplier = Number(btn.getAttribute('data-multiplier')) || 1;
      state.selectedAudienceLabel = btn.querySelector('strong').textContent;
      updateQuoteSummary();
    });
  });

  document.querySelectorAll('#paymentModeBar .pay-mode-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#paymentModeBar .pay-mode-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.paymentMode = btn.getAttribute('data-paymode');
      updateQuoteSummary();
    });
  });

  step2Container.querySelectorAll('.config-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      step2Container.querySelectorAll('.config-opt').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedBasePlatformId = btn.getAttribute('data-base-id');
      updateQuoteSummary();
    });
  });

  document.querySelectorAll('#step3Modules input[type="checkbox"]').forEach((chk) => {
    chk.addEventListener('change', updateQuoteSummary);
  });

  const waBtn = document.getElementById('sendWhatsappQuoteBtn');
  if (waBtn) waBtn.addEventListener('click', sendConfigurationViaWhatsapp);

  const pdfBtn = document.getElementById('downloadPdfQuoteBtn');
  if (pdfBtn) pdfBtn.addEventListener('click', generateProposalPdf);

  updateQuoteSummary();
}

window.selectPlatformForQuote = function (platformId) {
  state.selectedBasePlatformId = platformId;
  const step2Container = document.getElementById('step2BasePlatform');
  if (step2Container) {
    step2Container.querySelectorAll('.config-opt').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-base-id') === platformId);
    });
  }
  updateQuoteSummary();
  const cotizador = document.getElementById('cotizador');
  if (cotizador) cotizador.scrollIntoView({ behavior: 'smooth' });
};

window.activateFamilyDiscount = function () {
  const familyBtn = document.querySelector('#step1Audience .config-opt[data-audience="familiar"]');
  if (familyBtn) familyBtn.click();
  const cotizador = document.getElementById('cotizador');
  if (cotizador) cotizador.scrollIntoView({ behavior: 'smooth' });
};

function getCalculatedQuote() {
  const basePlatform = PLATFORMS.find((p) => p.id === state.selectedBasePlatformId) || PLATFORMS[0];
  const checkedModules = Array.from(document.querySelectorAll('#step3Modules input[type="checkbox"]:checked')).map(
    (chk) => ({
      label: chk.getAttribute('data-label'),
      cost: Number(chk.getAttribute('data-cost')) || 0,
      monthly: Number(chk.getAttribute('data-monthly')) || 0
    })
  );

  const modulesOneTimeTotal = checkedModules.reduce((acc, m) => acc + m.cost, 0);
  const modulesMonthlyTotal = checkedModules.reduce((acc, m) => acc + m.monthly, 0);

  const oneTimeTotal = Math.round(((basePlatform.basePrice + modulesOneTimeTotal) * state.selectedAudienceMultiplier) / 500) * 500;
  const setupTotal = Math.round(((basePlatform.setupFee + modulesOneTimeTotal * 0.35) * state.selectedAudienceMultiplier) / 100) * 100;
  const monthlyTotal = Math.round(((basePlatform.monthlyFee + modulesMonthlyTotal) * state.selectedAudienceMultiplier) / 50) * 50;

  return {
    basePlatform,
    checkedModules,
    oneTimeTotal,
    setupTotal,
    monthlyTotal
  };
}

function updateQuoteSummary() {
  const { basePlatform, checkedModules, oneTimeTotal, setupTotal, monthlyTotal } = getCalculatedQuote();

  document.getElementById('summaryPlatformTitle').textContent = `Sistema: ${basePlatform.name}`;
  document.getElementById('summaryPlatformRepo').innerHTML = `Ejemplo real funcionando: <code>${basePlatform.displayDomain}</code>`;
  document.getElementById('summaryCodeReady').textContent = `${basePlatform.codeReadyPct}% ya avanzado`;
  document.getElementById('summaryCodeBar').style.width = `${basePlatform.codeReadyPct}%`;
  document.getElementById('summaryTimeEstimate').innerHTML = `Tiempo estimado de entrega: <strong>${basePlatform.timeEstimate}</strong>`;

  const priceLabelEl = document.getElementById('summaryPriceLabel');
  const priceEl = document.getElementById('summaryPrice');
  const secondaryEl = document.getElementById('summarySecondaryPrice');
  const noteEl = document.getElementById('summaryPriceNote');

  if (state.paymentMode === 'onetime') {
    priceLabelEl.textContent = 'Pago Único (El sistema es tuyo, sin rentas)';
    priceEl.textContent = `$${oneTimeTotal.toLocaleString('es-MX')} MXN`;
    secondaryEl.textContent = `O si prefieres Renta Mensual: $${setupTotal.toLocaleString('es-MX')} de inicio + $${monthlyTotal.toLocaleString('es-MX')}/mes`;
  } else {
    priceLabelEl.textContent = 'Plan Renta Mensual (Todo Incluido)';
    priceEl.textContent = `$${monthlyTotal.toLocaleString('es-MX')} / mes`;
    secondaryEl.textContent = `+ Pago inicial de activación: $${setupTotal.toLocaleString('es-MX')} MXN (o $${oneTimeTotal.toLocaleString('es-MX')} en Pago Único)`;
  }

  if (state.selectedAudienceKey === 'familiar') {
    noteEl.textContent =
      '💚 Descuento Especial para Familiares y Amigos aplicado (-38% directo sobre el precio normal).';
  } else {
    noteEl.textContent =
      '*Ahorras más de la mitad de lo que cobra una agencia tradicional porque partimos de un sistema que ya funciona. Incluye tu logotipo, colores y te enseño a usarlo paso a paso.';
  }

  const listEl = document.getElementById('summaryModulesList');
  const items = [
    `Sistema completo tipo ${basePlatform.name} adaptado con tu nombre y logotipo`,
    `Para: ${state.selectedAudienceLabel}`,
    ...checkedModules.map((m) => m.label),
    'Tu propia página .com + Capacitación práctica para ti y tu equipo'
  ];

  listEl.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function sendConfigurationViaWhatsapp() {
  const { basePlatform, checkedModules, oneTimeTotal, setupTotal, monthlyTotal } = getCalculatedQuote();
  const clientName = document.getElementById('clientName')?.value.trim() || 'Interesado';
  const clientNote = document.getElementById('clientNote')?.value.trim() || 'Me gustaría tener un sistema parecido.';

  const modulesText = checkedModules.map((m) => `• ${m.label}`).join('\n');
  const modalityText =
    state.paymentMode === 'onetime'
      ? `Pago Único: *$${oneTimeTotal.toLocaleString('es-MX')} MXN* (o en Plan Mensual: $${setupTotal.toLocaleString('es-MX')} inicio + $${monthlyTotal.toLocaleString('es-MX')}/mes)`
      : `Plan Mensual: *$${monthlyTotal.toLocaleString('es-MX')} MXN/mes* + Inicio $${setupTotal.toLocaleString('es-MX')} MXN (o Pago Único: $${oneTimeTotal.toLocaleString('es-MX')} MXN)`;

  const message =
    `¡Hola Andrés! 👋 Soy *${clientName}*.\n\n` +
    `Vi tu página de sistemas digitales y me interesó esta opción:\n` +
    `🔹 *Sistema de referencia:* ${basePlatform.name} (${basePlatform.displayDomain})\n` +
    `🔹 *Para:* ${state.selectedAudienceLabel}\n` +
    `🔹 *Forma de pago:* ${modalityText}\n` +
    `🔹 *Tiempo de entrega:* ${basePlatform.timeEstimate}\n\n` +
    `*Funciones que me interesan:*\n${modulesText}\n\n` +
    `*Comentarios:* ${clientNote}`;

  const url = `https://wa.me/${OWNER_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener');
}

function generateProposalPdf() {
  if (!window.jspdf || !window.jspdf.jsPDF) {
    alert('El generador de PDF se está cargando, intenta de nuevo en un segundo.');
    return;
  }

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  const { basePlatform, checkedModules, oneTimeTotal, setupTotal, monthlyTotal } = getCalculatedQuote();
  const clientName =
    document.getElementById('holoClientName')?.value.trim() ||
    document.getElementById('clientName')?.value.trim() ||
    'Cliente / Negocio Interesado';
  const clientNote = document.getElementById('clientNote')?.value.trim() || 'Sistema personalizado con tu logotipo, colores y dominio .com';
  const dateStr = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  doc.setFillColor(13, 16, 24);
  doc.rect(0, 0, 210, 42, 'F');

  doc.setTextColor(6, 182, 212);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('ANDRÉS MONTOYA HERNÁNDEZ · SISTEMAS Y PÁGINAS DIGITALES PARA NEGOCIOS', 15, 16);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(17);
  doc.text('PRESUPUESTO Y PROPUESTA DE SISTEMA DIGITAL', 15, 26);

  doc.setTextColor(148, 163, 184);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`Fecha: ${dateStr}   |   WhatsApp Directo: +52 ${OWNER_INFO.whatsappDisplay}`, 15, 35);

  let y = 53;
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Preparado para: ${clientName}`, 15, y);

  y += 6.5;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Tipo de negocio o proyecto: ${state.selectedAudienceLabel}`, 15, y);

  y += 6;
  doc.text(`Notas: ${clientNote}`, 15, y);

  y += 9;
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(15, y, 180, 30, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(`Sistema de Referencia: ${basePlatform.name} (${basePlatform.displayDomain})`, 20, y + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Giro: ${basePlatform.sectorLabel}`, 20, y + 16);
  doc.text(
    `Ventaja: Sistema ya probado en operación real  |  Tiempo estimado de entrega: ${basePlatform.timeEstimate}`,
    20,
    y + 23
  );

  y += 40;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('¿Qué incluye tu sistema?', 15, y);

  y += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.8);

  const allItems = [
    `Personalización completa de ${basePlatform.name} con tu nombre, logotipo, colores y tu propia dirección .com.`,
    ...basePlatform.highlights.map((h) => `Incluye: ${h}`),
    ...checkedModules.map((m) => `Adicional incluido: ${m.label}`),
    'Puesta en marcha en internet y capacitación práctica para ti y tu equipo.'
  ];

  allItems.forEach((item) => {
    const lines = doc.splitTextToSize(`• ${item}`, 175);
    doc.text(lines, 18, y);
    y += lines.length * 5.2 + 1.2;
  });

  y += 6;
  doc.setFillColor(13, 16, 24);
  doc.roundedRect(15, y, 180, 36, 3, 3, 'F');

  doc.setTextColor(6, 182, 212);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('OPCIONES DE PAGO:', 22, y + 9);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12.5);
  doc.text(`Opción 1 · Pago Único (Sistema tuyo sin rentas): $${oneTimeTotal.toLocaleString('es-MX')} MXN`, 22, y + 18);

  doc.setTextColor(52, 211, 153);
  doc.setFontSize(11);
  doc.text(
    `Opción 2 · Plan Renta Mensual (Todo incluido): $${setupTotal.toLocaleString('es-MX')} inicio + $${monthlyTotal.toLocaleString('es-MX')} MXN/mes`,
    22,
    y + 26
  );

  doc.setTextColor(148, 163, 184);
  doc.setFontSize(8.5);
  doc.setFont('helvetica', 'normal');
  doc.text('En Pago Único: 50% al iniciar y 50% al entregarte tu sistema funcionando.', 22, y + 32.5);

  y += 48;
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(9.5);
  doc.text(
    `Para comenzar o ver una demostración en vivo, escríbeme por WhatsApp al +52 ${OWNER_INFO.whatsappDisplay} (${OWNER_INFO.fullName}).`,
    15,
    y
  );

  const safeSlug = basePlatform.id.replace(/[^a-z0-9]/gi, '-');
  doc.save(`Presupuesto-${safeSlug}-Andres-Montoya.pdf`);
}
