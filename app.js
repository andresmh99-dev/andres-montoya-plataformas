/* ==========================================================================
   ANDRÉS MONTOYA HERNÁNDEZ — CATÁLOGO DE PÁGINAS Y SISTEMAS DIGITALES (app.js)
   Datos de los 9 sistemas (precios, textos y enlaces) + generador del PDF de propuesta.
   Lo usan index.html y scripts/generar-paginas-giro.mjs (páginas por giro).
   WhatsApp Oficial: +52 443 143 3732
   ========================================================================== */

const OWNER_INFO = {
  brandName: 'AM Kortex',
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
    basePrice: 23500,
    setupFee: 8900,
    monthlyFee: 2190,
    polizaFee: 890,
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
    ]
  },
  {
    id: 'control-ops',
    name: 'InLog · Control de Embarques, Rutas y Cobranza',
    repo: 'andresmh99-dev/control-ops',
    repoUrl: 'https://github.com/andresmh99-dev/control-ops',
    liveUrl: 'https://ops.in-log.net/sitio',
    displayDomain: 'ops.in-log.net/sitio',
    category: 'empresas',
    sectorLabel: 'Empresas de Transporte, Logística y Distribución',
    statusLabel: 'Funcionando hoy · Morelia y Laredo TX',
    basePrice: 40000,
    setupFee: 15000,
    monthlyFee: 3600,
    polizaFee: 1490,
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
    ]
  },
  {
    id: 'agenda-fenix',
    name: 'Consultorios Fénix · Renta de Espacios y Agenda Médica',
    repo: 'andresmh99-dev/agenda-fenix',
    repoUrl: 'https://github.com/andresmh99-dev/agenda-fenix',
    liveUrl: 'https://www.agendafenix.app',
    displayDomain: 'agendafenix.app',
    category: 'negocios',
    sectorLabel: 'Centros Médicos, Torres de Consultorios y Coworking',
    statusLabel: 'Funcionando hoy · Morelia Las Américas',
    basePrice: 23500,
    setupFee: 8900,
    monthlyFee: 2190,
    polizaFee: 890,
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
    ]
  },
  {
    id: 'lievitum-pizzalab',
    name: 'Lievitum Pizza LAB · Página y Menú para Restaurantes',
    repo: 'lustrous-stardust-5c82d0.netlify.app',
    repoUrl: 'https://lustrous-stardust-5c82d0.netlify.app/',
    liveUrl: 'https://lustrous-stardust-5c82d0.netlify.app/',
    displayDomain: 'Demo · Lievitum Pizza LAB',
    category: 'negocios',
    sectorLabel: 'Restaurantes, Pizzerías, Cafeterías y Bares',
    statusLabel: 'Funcionando hoy · Morelia y Querétaro',
    basePrice: 12000,
    setupFee: 4000,
    monthlyFee: 790,
    polizaFee: 490,
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
    ]
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
    basePrice: 15000,
    setupFee: 5200,
    monthlyFee: 1190,
    polizaFee: 590,
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
    ]
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
    polizaFee: 890,
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
    ]
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
    basePrice: 40000,
    setupFee: 15000,
    monthlyFee: 3600,
    polizaFee: 1490,
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
    ]
  },
  {
    id: 'family-os',
    name: 'Family OS · Organizador Escolar y Familiar',
    repo: 'andresmh99-dev/agenda-familiar',
    repoUrl: 'https://github.com/andresmh99-dev/agenda-familiar',
    liveUrl: 'https://family-os-ten.vercel.app',
    displayDomain: 'Demo en desarrollo',
    inDevelopment: true,
    category: 'personas',
    sectorLabel: 'Familias con Hijos, Colegios y Asociaciones de Padres',
    statusLabel: 'En desarrollo · Demo disponible',
    basePrice: 15000,
    setupFee: 5200,
    monthlyFee: 1190,
    polizaFee: 590,
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
    ]
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
    setupFee: 4000,
    monthlyFee: 790,
    polizaFee: 490,
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
    ]
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

  const baseOneTimeRaw = basePlatform.basePrice + modulesOneTimeTotal;
  const baseSetupRaw = basePlatform.setupFee + modulesOneTimeTotal * 0.35;
  const baseMonthlyRaw = basePlatform.monthlyFee + modulesMonthlyTotal;

  let oneTimeTotal;
  let setupTotal;
  let monthlyTotal;

  if (state.selectedAudienceMultiplier === 1) {
    oneTimeTotal = Math.round(baseOneTimeRaw);
    setupTotal = Math.round(baseSetupRaw);
    monthlyTotal = Math.round(baseMonthlyRaw);
  } else {
    oneTimeTotal = Math.round((baseOneTimeRaw * state.selectedAudienceMultiplier) / 100) * 100;
    setupTotal = Math.round((baseSetupRaw * state.selectedAudienceMultiplier) / 100) * 100;
    monthlyTotal = Math.round((baseMonthlyRaw * state.selectedAudienceMultiplier) / 50) * 50;
  }

  return {
    basePlatform,
    checkedModules,
    oneTimeTotal,
    setupTotal,
    monthlyTotal
  };
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

  doc.setFillColor(8, 18, 33);
  doc.rect(0, 0, 210, 42, 'F');

  doc.setTextColor(16, 185, 129);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('AM KORTEX · DIRIGIDO POR ANDRÉS MONTOYA HERNÁNDEZ · SISTEMAS DIGITALES', 15, 16);

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
  doc.roundedRect(15, y, 180, 55, 3, 3, 'F');

  doc.setTextColor(6, 182, 212);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('MODALIDADES DE INVERSIÓN (PRECIOS EN MXN + IVA):', 22, y + 8.5);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(11.8);
  doc.text(`1) Pago Único (Licencia Llave en Mano): $${oneTimeTotal.toLocaleString('es-MX')} MXN + IVA`, 22, y + 17);

  doc.setTextColor(52, 211, 153);
  doc.setFontSize(11);
  doc.text(
    `2) Plan Mensual (Recomendado): $${setupTotal.toLocaleString('es-MX')} activación + $${monthlyTotal.toLocaleString('es-MX')} MXN/mes + IVA`,
    22,
    y + 25
  );

  doc.setTextColor(148, 163, 184);
  doc.setFontSize(8.2);
  doc.setFont('helvetica', 'normal');
  doc.text(
    '• Pago Único: 50% anticipo y 50% contra entrega. Incluye 1er año dominio .com y 3 meses de servidor y soporte técnico.',
    22,
    y + 32.5
  );
  doc.text(
    `  (A partir del 4° mes: póliza opcional de hospedaje/soporte de $${basePlatform.polizaFee.toLocaleString('es-MX')}/mes + IVA o nube/WhatsApp propios del cliente).`,
    22,
    y + 38
  );
  doc.text(
    '• Plan Mensual: plazo mínimo de 12 meses. Incluye servidor, base de datos, respaldos, dominio .com y soporte',
    22,
    y + 44.5
  );
  doc.text(
    '  directo con ajustes y mejoras de hasta 2 horas al mes (horas adicionales: $500/hora + IVA).',
    22,
    y + 50
  );

  y += 65;
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(9.5);
  doc.text(
    doc.splitTextToSize(
      `Para comenzar o ver una demostración en vivo, escríbeme por WhatsApp al +52 ${OWNER_INFO.whatsappDisplay} (${OWNER_INFO.brandName} · ${OWNER_INFO.fullName}).`,
      180
    ),
    15,
    y
  );

  const safeSlug = basePlatform.id.replace(/[^a-z0-9]/gi, '-');
  doc.save(`Propuesta-AM-Kortex-${safeSlug}.pdf`);
}
