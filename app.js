/* ==========================================================================
   ANDRÉS MONTOYA HERNÁNDEZ — PLATAFORMAS DIGITALES & IA SHOWROOM (app.js)
   9 Plataformas Reales en Producción + Cotizador de Mercado (Pago Único / Mensual)
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
    name: 'Nail Room Spa OS',
    repo: 'andresmh99-dev/Nailroomspa',
    repoUrl: 'https://github.com/andresmh99-dev/Nailroomspa',
    liveUrl: 'https://nailroomspa.vercel.app',
    category: 'negocios',
    sectorLabel: 'Belleza, Spas y Salones Multi-Sucursal',
    statusLabel: 'En Producción · Querétaro & Morelia',
    basePrice: 22000,
    setupFee: 8500,
    monthlyFee: 1990,
    codeReadyPct: 85,
    timeEstimate: '2 a 3 semanas',
    tagline:
      'Sistema omnicanal de agendamiento, recepción drag-and-drop, caja diaria y Bot de WhatsApp con IA que entiende notas de voz y agenda sola.',
    idealFor:
      'Salones de uñas, spas, barberías, clínicas de belleza, estudios de pestañas y franquicias con varias sucursales.',
    problemSolved:
      'Las clientas mandan audios o mensajes a deshoras por WhatsApp, recepción tarda en contestar, se enciman citas entre especialistas y se pierden ventas por falta de anticipo.',
    solutionBuilt:
      'Sincroniza 3 canales en tiempo real: portal web de autoservicio en 5 pasos, Bot de WhatsApp con IA (Anthropic Claude + transcripción de audios con OpenAI Whisper) y un tablero de recepción interactivo con candados matemáticos anti-overbooking en PostgreSQL.',
    highlights: [
      'Bot WhatsApp con IA + Notas de Voz (Whisper)',
      'Agenda Drag & Drop con candado anti-overbooking',
      'Visitas multi-servicio en serie o paralelo',
      'Anticipos con Mercado Pago + Caja diaria'
    ],
    modulesDetailed: [
      'Portal público de reservas en 5 pasos (sucursal, servicios, especialista, horario y pago/confirmación).',
      'Bot conversacional en Meta WhatsApp Cloud API con Anthropic Claude y transcripción de voz OpenAI Whisper.',
      'Sistema de alerta automática de salud de IA (avisa al personal por correo, push y WhatsApp si falla una API).',
      'Tablero de recepción con vista de rejilla, arrastrar y soltar, bloques de comida y walk-ins.',
      'Candados transaccionales pg_try_advisory_xact_lock en PostgreSQL: 0% sobreventa garantizada.',
      'Autogestión de cita por token (/cita/[token]) para reagendar, cancelar y calificar.'
    ],
    stack: ['Next.js 16', 'React 19', 'Prisma', 'PostgreSQL / Supabase', 'Claude AI', 'OpenAI Whisper', 'WhatsApp Cloud API', 'Mercado Pago'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>💬 Bot WhatsApp IA + Agenda Recepción</span>
          <span class="mini-chip green">Anti-Overbooking Activo</span>
        </div>
        <div class="mini-ui-row">
          <span>🎙️ <em>Audio clienta (0:14): "Hola, ¿tienen lugar mañana a las 5 en Morelia para gelish y pedi?"</em></span>
          <span class="mini-chip purple">Whisper + Claude</span>
        </div>
        <div class="mini-ui-row">
          <span>✨ <strong>Cita Creada:</strong> Gelish + Spa Pedi · 17:00 - 18:30 · Esp. Valeria</span>
          <span class="mini-chip cyan">Anticipo Pagado</span>
        </div>
      </div>
    `
  },
  {
    id: 'control-ops',
    name: 'InLog · Control-Ops TMS/ERP',
    repo: 'andresmh99-dev/control-ops',
    repoUrl: 'https://github.com/andresmh99-dev/control-ops',
    liveUrl: 'https://control-ops-zeta.vercel.app',
    category: 'empresas',
    sectorLabel: 'Logística Internacional · Importación / Exportación',
    statusLabel: 'En Producción · Morelia & Laredo TX',
    basePrice: 44000,
    setupFee: 16500,
    monthlyFee: 3900,
    codeReadyPct: 82,
    timeEstimate: '3 a 5 semanas',
    tagline:
      'Centro de mando logístico B2B para importación, exportación y rutas multiparada con lectura de documentos por IA, cartas de instrucciones y finanzas.',
    idealFor:
      'Freight Forwarders, agencias aduanales, empresas de transporte de carga, comercializadoras y operadores logísticos.',
    problemSolved:
      'Operaciones dispersas en hojas de cálculo, pérdida de visibilidad en cruces fronterizos (cambio de unidad MX/US), captura manual de BLs, retrasos en paradas y descontrol de márgenes y cobranza.',
    solutionBuilt:
      'Plataforma integral multi-oficina (Morelia / Laredo) con centro de control en vivo, rutas multiparada ("ruta lechera") con link de rastreo público individual por planta, lectura y cotejo de BL/BOL con IA Claude, cartas porte/instrucciones con aceptación digital y control financiero antes de IVA.',
    highlights: [
      'Rutas multiparada con rastreo público por entrega',
      'Lectura de BL/Documentos y Copiloto con IA Claude',
      'Cartas de instrucciones con firma electrónica',
      'Prefacturas, cobranza, antigüedad y alerta de margen'
    ],
    modulesDetailed: [
      'Centro de control con semáforo de urgencias, citas en riesgo, entregas del día y documentos faltantes.',
      'Rutas multiparada ("ruta lechera") con huso horario por planta y links públicos /rastreo/p/[token].',
      'Manejo de cruce fronterizo y cambio de unidad (tramo MX / tramo US con ocultamiento inteligente de GPS).',
      'Extracción asistida de documentos (BL/BOL) y cotejo automático de discrepancias con Anthropic Claude.',
      'Generación de Cartas de Instrucciones / Load Agreements bilingües (ES/EN) con link de firma pública.',
      'Módulo financiero completo: tarifarios, contratos, costos, prefacturas, antigüedad de cartera (+60 días) y alertas de margen bajo (<10%).'
    ],
    stack: ['Next.js 16', 'React 19', 'Tailwind CSS 4', 'Supabase RLS & Storage', 'Anthropic Claude', 'Resend', 'Vercel Cron'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🚢 Centro de Control · Operación ILP-EXPO-26-007</span>
          <span class="mini-chip cyan">Margen: 24.8%</span>
        </div>
        <div class="mini-ui-row">
          <span>📍 Parada 1: Planta Morelia → Parada 2: Laredo TX (Cambio Unidad)</span>
          <span class="mini-chip green">En Tránsito</span>
        </div>
        <div class="mini-ui-row">
          <span>🤖 <strong>IA Cotejo BL:</strong> Booking, Contenedor y Consignatario verificados</span>
          <span class="mini-chip purple">Claude Verificado</span>
        </div>
      </div>
    `
  },
  {
    id: 'agenda-fenix',
    name: 'Agenda Fénix · Coworking Clínico',
    repo: 'andresmh99-dev/agenda-fenix',
    repoUrl: 'https://github.com/andresmh99-dev/agenda-fenix',
    liveUrl: 'https://agenda-fenix-one.vercel.app',
    category: 'negocios',
    sectorLabel: 'Centros Médicos, Consultorios y Renta de Espacios',
    statusLabel: 'En Producción · 166 Tests en Verde',
    basePrice: 24000,
    setupFee: 9000,
    monthlyFee: 2200,
    codeReadyPct: 88,
    timeEstimate: '2 a 3 semanas',
    tagline:
      'Motor multi-tenant de doble agenda anidada: renta de consultorios por hora o bloque, cobro de paquetes, directorio médico y agenda privada de pacientes.',
    idealFor:
      'Torre de consultorios, coworking médico/psicológico, clínicas dentales, centros de rehabilitación y renta de salas o estudios por hora.',
    problemSolved:
      'Rentar consultorios por hora o bloque fijo a decenas de especialistas sin traslapes, cobrar paquetes de horas, emitir cortes mensuales y permitir que los pacientes agenden sin que recepción vea datos clínicos privados.',
    solutionBuilt:
      'Arquitectura de doble capa: Capa 1 administra la renta de los consultorios (modo bloque fijo o per_session al vuelo) con ledger contable inmutable y Mercado Pago; Capa 2 da a cada especialista su propio portal y link público (/[slug]) blindado con RLS y cumplimiento ARCO.',
    highlights: [
      'Doble agenda anidada (Consultorio ↔ Especialista ↔ Paciente)',
      'Privacidad clínica blindada por RLS + Derechos ARCO',
      'Ledger financiero, paquetes de horas y Mercado Pago',
      'Corte mensual automático en PDF + WhatsApp oficial'
    ],
    modulesDetailed: [
      'Restricción matemática EXCLUDE USING gist (tstzrange) en PostgreSQL con buffer de limpieza integrado.',
      'Dos modalidades de renta por especialista: Bloque fijo (block) o Pago por sesión agendada al vuelo (per_session).',
      'Privacidad total: Recepción ve ocupación en tiempo real (v_reception_agenda) sin acceso a nombres de pacientes (fuera de NOM-024).',
      'Venta de paquetes de horas, ledger contable auditable y pasarela Mercado Pago Checkout Pro.',
      'Corte mensual automático en PDF generado el día 1 de cada mes vía pg_cron y enviado por correo.',
      'Confirmación y reagendado por WhatsApp mediante botones interactivos oficiales de Meta.'
    ],
    stack: ['Next.js 16.3', 'Drizzle ORM', 'Supabase Postgres (GiST + RLS)', 'Realtime', 'Meta WhatsApp API', 'Mercado Pago', 'PDFKit'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🏥 Doble Agenda Anidada · 5 Espacios</span>
          <span class="mini-chip green">RLS Privacidad Activa</span>
        </div>
        <div class="mini-ui-row">
          <span>🔑 Consultorio 2 · 11:00 - 12:00 · Dr. Mauricio Rangel (per_session)</span>
          <span class="mini-chip cyan">Con Cita Paciente</span>
        </div>
        <div class="mini-ui-row">
          <span>💳 Ledger Especialista: Paquete 20 hrs (-1 hr descontada)</span>
          <span class="mini-chip amber">Corte PDF Auto</span>
        </div>
      </div>
    `
  },
  {
    id: 'lievitum-pizzalab',
    name: 'Lievitum Pizza LAB · Plataforma Gastronómica',
    repo: 'Proyecto en Producción / Multi-Sucursal',
    repoUrl: 'https://lustrous-stardust-5c82d0.netlify.app/',
    liveUrl: 'https://lustrous-stardust-5c82d0.netlify.app/',
    category: 'negocios',
    sectorLabel: 'Restaurantes, Cafeterías, Bares y Franquicias',
    statusLabel: 'En Producción · Morelia & Querétaro',
    basePrice: 11500,
    setupFee: 3900,
    monthlyFee: 690,
    codeReadyPct: 92,
    timeEstimate: '5 a 10 días',
    tagline:
      'Experiencia web gastronómica de lujo con selector dinámico de sucursal, estado Abierto/Cerrado en tiempo real, menú interactivo por categorías y pedidos directos.',
    idealFor:
      'Restaurantes, pizzerías, cafeterías de especialidad, bares, dark kitchens y franquicias gastronómicas con 1 o más sucursales.',
    problemSolved:
      'Los restaurantes suelen tener solo un PDF pesado o dependen al 100% de comisiones altas en apps de delivery sin tener una web propia que enamore al comensal y convierta visitas en reservas de WhatsApp.',
    solutionBuilt:
      'Plataforma gastronómica editorial con conmutador inteligente entre sucursales (Morelia y Querétaro) que cambia horarios, links de WhatsApp, Uber Eats y Google Maps al instante; incluye menú interactivo con 7 categorías, filtros dinámicos (Más pedidas, Vegetarianas, Picantes, Premium), modal de platillos, maridaje y SEO Schema.org.',
    highlights: [
      'Selector multi-sucursal (Morelia / Querétaro) en vivo',
      'Menú digital interactivo con 7 categorías y filtros rápidos',
      'Conversión directa a WhatsApp, Uber Eats y Google Maps',
      'SEO Local Restaurant (Schema.org) + Caché ultrarrápida'
    ],
    modulesDetailed: [
      'Selector interactivo de ciudad/sucursal que actualiza dirección, estado Abierto/Cerrado según la hora real, WhatsApp de pedidos, liga de Uber Eats y mapa.',
      'Menú digital filtrable por categoría (Pizzas, Pastas, Ensaladas, Bebidas, Aperitivos, Dolci, Bambini) y etiquetas dietéticas (Vegana, Picante, Favoritas).',
      'Modal de detalle de platillo con fotografía de alta resolución, ingredientes y precio, más descarga de Menú QR en PDF.',
      'Sección de historia editorial, trazabilidad de ingredientes y datos estructurados JSON-LD para aparecer primero en Google.'
    ],
    stack: ['HTML5 Editorial', 'CSS3 Custom Design', 'JavaScript Vanilla', 'Schema.org JSON-LD', 'Netlify Edge Headers', 'WhatsApp & UberEats Deep Links'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🍕 Lievitum Pizza LAB · Sucursal Morelia / Querétaro</span>
          <span class="mini-chip green">Abierto Hoy · 13:00–22:00</span>
        </div>
        <div class="mini-ui-row">
          <span>🍽️ Menú Interactivo: La Regina ($275) · Quattro Formaggi ($245)</span>
          <span class="mini-chip amber">Favoritas de la Casa</span>
        </div>
        <div class="mini-ui-row">
          <span>📲 Conversión 1-Clic: Pedido WhatsApp Sucursal · Uber Eats · Cómo llegar</span>
          <span class="mini-chip cyan">SEO Restaurant JSON-LD</span>
        </div>
      </div>
    `
  },
  {
    id: 'psicoterapia-conductual',
    name: 'Psicoterapia Conductual · Consultorio PWA',
    repo: 'andresmh99-dev/PsicoterapiaConductual',
    repoUrl: 'https://github.com/andresmh99-dev/PsicoterapiaConductual',
    liveUrl: 'https://psicoterapia-conductual.vercel.app',
    category: 'personas',
    sectorLabel: 'Psicólogos, Médicos, Nutriólogos y Especialistas',
    statusLabel: 'En Producción · Cumple NOM-004',
    basePrice: 15500,
    setupFee: 5500,
    monthlyFee: 1190,
    codeReadyPct: 90,
    timeEstimate: '1 a 2 semanas',
    tagline:
      'App instalable en celular (PWA) para consultorios privados: autoagendado público, expediente clínico con plantillas rápidas (TCC/SOAP) y recordatorios.',
    idealFor:
      'Psicólogos, psiquiatras, médicos especialistas, nutriólogos, fisioterapeutas, odontólogos y consultores independientes.',
    problemSolved:
      'Los profesionales independientes pierden horas coordinando horarios por mensaje, olvidan enviar recordatorios y llevan notas clínicas sueltas sin respaldo normativo.',
    solutionBuilt:
      'Aplicación móvil instalable (iOS y Android) pensada para operarse con el pulgar. Incluye link de autoagendado público (/agendar) con aprobación en 1 toque, expedientes con plantillas clínicas (TCC, SOAP, Primera Entrevista), resumen de recomendaciones por WhatsApp y respaldos en 1 clic.',
    highlights: [
      'App instalable (PWA) para usar con una mano en celular',
      'Plantillas clínicas TCC, SOAP, Entrevista y Seguimiento',
      'Cumplimiento NOM-004-SSA3-2012 + Respaldo en 1 clic',
      'Link público /agendar + Recordatorios 48h y 24h'
    ],
    modulesDetailed: [
      'PWA nativa en iPhone y Android con botón flotante (FAB) para crear cita o paciente en 10 segundos.',
      'Horarios laborales configurables por día con soporte para turnos partidos (ej. mañana y tarde) y días inhábiles.',
      'Módulo clínico post-consulta con plantillas de 1 toque y envío de recomendaciones al paciente por WhatsApp o email.',
      'Protección legal NOM-004-SSA3-2012 (ON DELETE RESTRICT en expedientes + bitácora de auditoría + exportación JSON).',
      'Recordatorios automáticos 48h y 24h antes de la sesión + aviso de cumpleaños de pacientes.',
      'Panel de analítica privada: visitas al link de agendado, tasa de conversión e ingresos cobrados vs proyectados.'
    ],
    stack: ['Next.js 16', 'TypeScript', 'Tailwind CSS', 'Supabase (Postgres + RLS)', 'PWA Mobile', 'Resend', 'Vercel Cron'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🧠 Consultorio Digital · Vista Móvil PWA</span>
          <span class="mini-chip green">NOM-004 Blindado</span>
        </div>
        <div class="mini-ui-row">
          <span>📅 16:00 · Sesión TCC · Paciente confirmado (Recordatorio 24h enviado)</span>
          <span class="mini-chip cyan">Completada</span>
        </div>
        <div class="mini-ui-row">
          <span>📝 Plantilla SOAP aplicada → Recomendaciones listas para WhatsApp</span>
          <span class="mini-chip purple">1 Toque</span>
        </div>
      </div>
    `
  },
  {
    id: 'escalera-britania',
    name: 'Escalera Britania · SaaS Deportivo',
    repo: 'andresmh99-dev/escalera-britania2',
    repoUrl: 'https://github.com/andresmh99-dev/escalera-britania2',
    liveUrl: 'https://escalera-britania2.vercel.app',
    category: 'negocios',
    sectorLabel: 'Clubes Deportivos, Ligas de Tenis, Pádel y Golf',
    statusLabel: 'En Producción · Web + App Móvil Expo',
    basePrice: 23500,
    setupFee: 8900,
    monthlyFee: 2190,
    codeReadyPct: 84,
    timeEstimate: '2 a 3 semanas',
    tagline:
      'Plataforma SaaS multi-club (Web + App iOS/Android) que digitaliza torneos round-robin, rankings en vivo, confirmación de partidos, ascensos y reservas de cancha.',
    idealFor:
      'Clubes de tenis, clubes de pádel, country clubs, academias deportivas, ligas amateurs y gimnasios.',
    problemSolved:
      'Los torneos de clubes se llevan en libretas físicas en la caseta o grupos caóticos de WhatsApp; calcular puntos ponderados por semana, defaults, penalizaciones y ascensos toma días de trabajo manual.',
    solutionBuilt:
      'Digitalización completa probada con 167 jugadores reales en 29 grupos. Calcula standings en vivo directamente en PostgreSQL según la semana jugada, genera roles round-robin automáticos, solicita confirmación del marcador al rival y calcula ascensos/descensos al cierre de mes.',
    highlights: [
      'Web Pública + App Móvil Nativa (Expo React Native)',
      'Standings en vivo con puntuación ponderada por semana',
      'Generador automático de grupos Round-Robin y ascensos',
      'Confirmación cruzada de resultados y Comité de Disputas'
    ],
    modulesDetailed: [
      'Sembrado y probado con el padrón real de 167 jugadores y 29 grupos (Categorías A, B, C y D).',
      'Motor de reglas parametrizable: puntos por semana jugada (3.30 a 3.00 pts), defaults, no jugados y Regla 10 de inactividad.',
      'Flujo de jugador desde el celular: captura sets, el oponente recibe notificación para confirmar o disputar.',
      'Algoritmo automático de promociones y descensos al cierre mensual (2 suben, 2 bajan por grupo) ajustable por el director.',
      'Módulo de reserva de canchas integrado y bandeja del Comité Disciplinario para sanciones.'
    ],
    stack: ['Next.js 14', 'Expo (React Native)', 'TypeScript', 'Supabase Realtime & RLS', 'Tailwind + shadcn/ui'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🎾 Torneo Escalera · 167 Jugadores · 29 Grupos</span>
          <span class="mini-chip green">Standings en Vivo</span>
        </div>
        <div class="mini-ui-row">
          <span>🏆 Grupo 1-A: 1° R. Méndez (12.8 pts) · 2° A. Montoya (11.5 pts)</span>
          <span class="mini-chip cyan">Zona Ascenso ↑</span>
        </div>
        <div class="mini-ui-row">
          <span>📱 Partido registrado: 6-4, 6-3 (Semana 1: +3.30 pts confirmados)</span>
          <span class="mini-chip purple">Web + App iOS/Android</span>
        </div>
      </div>
    `
  },
  {
    id: 'inlog-quoter',
    name: 'InLog · Cotizador Multicarrier B2B',
    repo: 'andresmh99-dev/INLOG',
    repoUrl: 'https://github.com/andresmh99-dev/INLOG',
    liveUrl: '',
    category: 'empresas',
    sectorLabel: 'Comercio Exterior · Cotizador Marítimo, Terrestre y Aéreo',
    statusLabel: 'Arquitectura Monorepo · Fly.io + Redis',
    basePrice: 38000,
    setupFee: 14500,
    monthlyFee: 3400,
    codeReadyPct: 80,
    timeEstimate: '3 a 4 semanas',
    tagline:
      'Motor de cotización automática y comparador de tarifas en vivo conectado a SeaRates, navieras globales y transportistas terrestres con portal de clientes.',
    idealFor:
      'Empresas de logística, comercializadoras, distribuidoras B2B y empresas que cotizan fletes o servicios complejos con márgenes variables.',
    problemSolved:
      'Cotizar un embarque marítimo o terrestre toma horas consultando portales de distintas navieras, aplicando márgenes a mano en Excel y redactando PDFs uno por uno.',
    solutionBuilt:
      'Monorepo de alto rendimiento con caché en Redis que consulta simultáneamente tarifas en vivo (SeaRates Logistics Explorer, Maersk, MSC, Hapag-Lloyd, CMA CGM, DHL, FedEx, Freightos y tarifario propio), aplica el margen comercial automáticamente y entrega al cliente un comparador interactivo y PDF al instante.',
    highlights: [
      'Integración con +15 adaptadores (SeaRates, Maersk, DHL, FedEx)',
      'Wizard RFQ bilingüe (ES/EN) + Cálculo automático de margen',
      'Portal de clientes con Magic Link y Scorecards de carriers',
      'Generación de cotizaciones en PDF + Caché ultrarrápido Redis'
    ],
    modulesDetailed: [
      'Wizard público de RFQ en 4 pasos (Servicio → Ruta → Mercancía → Contacto) en español e inglés.',
      'Integración en vivo con SeaRates GraphQL API con geocodificación inteligente de puertos y control de presupuesto.',
      'Aplicación automática de markup general (BASE_MARKUP_PCT) y markup personalizado por cliente.',
      'Panel administrativo con importación/exportación de tarifarios en Excel (XLSX/CSV) y reportes de revenue.',
      'Portal de cliente sin contraseña (Magic Link) para aceptar ofertas, reservar bookings y rastrear envíos.'
    ],
    stack: ['TypeScript Monorepo', 'Express 4 API', 'Drizzle ORM', 'PostgreSQL 16', 'Redis 7', 'React 18 + Vite', 'Docker + Fly.io'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>🌐 Motor Multicarrier · Ningbo, CN → Lázaro Cárdenas, MX</span>
          <span class="mini-chip cyan">40HC · FCL</span>
        </div>
        <div class="mini-ui-row">
          <span>⚓ Oferta 1: SeaRates / CMA CGM · 18 días tránsito · Markup 20%</span>
          <span class="mini-chip green">Mejor Tarifa</span>
        </div>
        <div class="mini-ui-row">
          <span>📄 Cotización PDF enviada al portal del cliente + Tracking activo</span>
          <span class="mini-chip amber">Redis Cache 8h</span>
        </div>
      </div>
    `
  },
  {
    id: 'family-os',
    name: 'Family OS · Agenda Escolar & Familiar con IA',
    repo: 'andresmh99-dev/agenda-familiar',
    repoUrl: 'https://github.com/andresmh99-dev/agenda-familiar',
    liveUrl: 'https://agenda-familiar-umber.vercel.app',
    category: 'personas',
    sectorLabel: 'Familias, Colegios y Organización Personal',
    statusLabel: 'En Producción · PWA Multi-Hogar',
    basePrice: 14500,
    setupFee: 4900,
    monthlyFee: 990,
    codeReadyPct: 82,
    timeEstimate: '1 a 2 semanas',
    tagline:
      'Convierte avisos escolares de WhatsApp, circulares en PDF y fotos en un plan familiar compartido y confirmable sin capturar fechas a mano.',
    idealFor:
      'Familias con hijos en edad escolar, asociaciones de padres de familia, colegios privados, clubes infantiles y coordinación del hogar.',
    problemSolved:
      'Mamá o papá reciben decenas de mensajes en grupos de WhatsApp del colegio, PDFs y fotos con fechas de exámenes, disfraces, pagos y materiales; todo recae en la cabeza de una sola persona.',
    solutionBuilt:
      'App web instalable (PWA) donde reenvías o subes el aviso escolar y la IA extrae evento, fecha, hijo correspondiente, material necesario y pago pendiente para confirmarlo en segundos y compartir la responsabilidad con tu pareja o cuidadores.',
    highlights: [
      'Convierte capturas, PDFs y chats escolares en eventos con IA',
      'Separa eventos, materiales por llevar y pagos pendientes',
      'Vista compartida entre mamá, papá y cuidadores con roles',
      'Seguridad multi-hogar blindada con Row-Level Security'
    ],
    modulesDetailed: [
      'Extracción inteligente de avisos desestructurados con confirmación humana antes de agendar.',
      'Asignación clara por hijo, colegio o actividad extracurricular y distribución de responsables.',
      'Acceso instantáneo sin contraseñas complicadas mediante Magic Link e invitaciones familiares por liga.',
      'Arquitectura multi-hogar con aislamiento estricto de datos (tests automatizados anti-fuga entre familias).'
    ],
    stack: ['Next.js 16', 'TypeScript', 'Supabase Auth & RLS', 'Tailwind CSS', 'shadcn/ui', 'PWA Mobile-First'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>👨‍👩‍👧‍👦 Family OS · Aviso Escolar Detectado</span>
          <span class="mini-chip purple">IA Extraído</span>
        </div>
        <div class="mini-ui-row">
          <span>📄 <em>"Circular Primaria: Viernes 24 festival, traer playera blanca y $150"</em></span>
          <span class="mini-chip cyan">2 Acciones</span>
        </div>
        <div class="mini-ui-row">
          <span>✅ Evento: Festival (Vie 24) · Tarea Mamá: Playera · Pago Papá: $150</span>
          <span class="mini-chip green">Confirmado</span>
        </div>
      </div>
    `
  },
  {
    id: 'incubeit-landing',
    name: 'INCUBEIT · Cotizador Comercial & Agencia IA',
    repo: 'andresmh99-dev/incubeit-landing',
    repoUrl: 'https://github.com/andresmh99-dev/incubeit-landing',
    liveUrl: '',
    category: 'empresas',
    sectorLabel: 'Páginas Comerciales de Alto Impacto & Cotizadores PDF',
    statusLabel: 'Repositorio Público · 100% Velocidad',
    basePrice: 12000,
    setupFee: 4200,
    monthlyFee: 790,
    codeReadyPct: 95,
    timeEstimate: '5 a 10 días',
    tagline:
      'Plataforma comercial de alta conversión con calculadora interactiva de presupuestos en tiempo real y descarga instantánea de cotización formal en PDF.',
    idealFor:
      'Empresas de servicios, consultoras, constructoras, agencias, despachos e industriales que quieren que su página web cotice y cierre ventas sola 24/7.',
    problemSolved:
      'Las páginas web informativas tradicionales son folletos estáticos que no enganchan al visitante ni le dan una idea clara de inversión, perdiendo prospectos calificados.',
    solutionBuilt:
      'Landing page ejecutiva con diseño Glassmorphism & Neon, modo oscuro/claro, contadores animados, calculadora dinámica parametrizable y motor jsPDF que genera una cotización membretada lista para descargar en el momento.',
    highlights: [
      'Calculadora interactiva de precios y ROI en tiempo real',
      'Generación instantánea de cotización formal en PDF (jsPDF)',
      'Diseño Glassmorphism con modo Oscuro / Claro persistente',
      'Carga instantánea (Zero-bloat) + Integración WhatsApp y CRM'
    ],
    modulesDetailed: [
      'Calculadora comercial personalizable a cualquier fórmula de precios (por usuarios, metros cuadrados, horas, módulos o servicios).',
      'Generador de documento PDF A4 con membrete corporativo, desglose técnico y folio único en el navegador.',
      'Diseño ultra-moderno adaptable a celulares, tablets y pantallas ejecutivas con animaciones fluidas.'
    ],
    stack: ['HTML5 Semántico', 'CSS3 Design System', 'JavaScript ES6+', 'jsPDF Engine', 'Formspree / Webhooks'],
    miniUiHtml: `
      <div class="mini-ui">
        <div class="mini-ui-header">
          <span>⚡ Calculadora Comercial Interactiva + PDF</span>
          <span class="mini-chip green">Conversión 24/7</span>
        </div>
        <div class="mini-ui-row">
          <span>🧮 Configuración: 3 Agentes IA + 2 Integraciones ERP + Nube Privada</span>
          <span class="mini-chip cyan">Cálculo en Vivo</span>
        </div>
        <div class="mini-ui-row">
          <span>📥 Propuesta Formal generada: <code>Cotizacion-Ejecutiva.pdf</code></span>
          <span class="mini-chip purple">Descarga 1 Clic</span>
        </div>
      </div>
    `
  }
];

// Estado global de la aplicación
const state = {
  filter: 'all',
  searchQuery: '',
  heroIndex: 0,
  selectedAudienceKey: 'negocio',
  selectedAudienceMultiplier: 1,
  selectedAudienceLabel: 'Negocio / Clínica / Club',
  paymentMode: 'onetime', // 'onetime' | 'monthly'
  selectedBasePlatformId: 'nailroomspa',
  activeModalPlatformId: null
};

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  renderHeroDeck();
  renderPlatformsCatalog();
  initCatalogFilters();
  initConfigurator();
  initModals();
  lucide.createIcons();
});

/* ==========================================================================
   1. THEME (DARK / LIGHT) & NAVIGATION
   ========================================================================== */
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

/* ==========================================================================
   2. INTERACTIVE HERO DECK (TOP 4 LIVE PLATFORMS SHOWCASE)
   ========================================================================== */
function renderHeroDeck() {
  const featuredIds = ['control-ops', 'nailroomspa', 'agenda-fenix', 'lievitum-pizzalab'];
  const featured = featuredIds.map((id) => PLATFORMS.find((p) => p.id === id)).filter(Boolean);

  const urlBar = document.getElementById('heroDeckUrl');
  const body = document.getElementById('heroDeckBody');
  const tabsContainer = document.getElementById('heroDeckTabs');

  function updateSlide(index) {
    state.heroIndex = index;
    const item = featured[index];
    if (!item) return;

    const cleanHost = item.liveUrl ? item.liveUrl.replace('https://', '').replace(/\/$/, '') : item.repo;
    urlBar.innerHTML = `<i data-lucide="lock"></i><span>${cleanHost}</span>`;

    body.innerHTML = `
      <div>
        <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.65rem;">
          <span style="font-size:0.75rem;font-weight:700;color:var(--accent-cyan);text-transform:uppercase;letter-spacing:0.06em;">
            ${item.sectorLabel}
          </span>
          <span class="preview-repo-tag">${item.repo}</span>
        </div>
        <h3 style="font-family:var(--font-display);font-size:1.45rem;margin-bottom:0.45rem;">
          ${item.name}
        </h3>
        <p style="font-size:0.88rem;color:var(--text-secondary);margin-bottom:1rem;">
          ${item.tagline}
        </p>
        ${item.miniUiHtml}
      </div>

      <div style="display:flex;align-items:center;justify-content:space-between;gap:0.75rem;margin-top:1.15rem;padding-top:0.9rem;border-top:1px solid var(--border-subtle);flex-wrap:wrap;">
        <div style="font-size:0.78rem;color:var(--text-secondary);">
          ⚡ <strong>${item.codeReadyPct}% del motor listo</strong> · Entrega en ${item.timeEstimate}
        </div>
        <div style="display:flex;gap:0.5rem;">
          <button type="button" class="btn btn-glass btn-sm" onclick="openPlatformModal('${item.id}', 'overview')">
            <i data-lucide="eye"></i> Ver Demo y Detalles
          </button>
          <button type="button" class="btn btn-primary btn-sm" onclick="selectPlatformForQuote('${item.id}')">
            <i data-lucide="wand-2"></i> Quiero una similar
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

/* ==========================================================================
   3. CATALOG RENDERING & FILTERING
   ========================================================================== */
function renderPlatformsCatalog() {
  const grid = document.getElementById('platformsGrid');
  if (!grid) return;

  const filtered = PLATFORMS.filter((p) => {
    const matchesCategory = state.filter === 'all' || p.category === state.filter;
    const q = state.searchQuery.trim().toLowerCase();
    if (!q) return matchesCategory;

    const haystack = [
      p.name,
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
        <h3 style="font-family: var(--font-display); margin-bottom: 0.5rem;">No encontramos una plataforma con ese término exacto</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.25rem;">Pero podemos construirla o adaptar cualquiera de nuestros 9 motores base a tu giro.</p>
        <button type="button" class="btn btn-primary btn-sm" onclick="resetCatalogFilters()">Ver las 9 plataformas</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered
    .map(
      (p) => `
      <article class="platform-card" data-category="${p.category}">
        <div class="platform-preview-window">
          <div class="preview-topbar">
            <span class="preview-repo-tag">
              <i data-lucide="git-branch" style="width:13px;height:13px;"></i>
              ${p.repo}
            </span>
            <span class="preview-status-pill">
              <span class="live-dot"></span>
              ${p.statusLabel}
            </span>
          </div>

          ${p.miniUiHtml}
        </div>

        <div class="platform-body">
          <div class="platform-sector-row">
            <span class="platform-sector">${p.sectorLabel}</span>
            ${
              p.liveUrl
                ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" style="font-size:0.76rem;color:var(--accent-emerald);font-weight:700;display:inline-flex;align-items:center;gap:0.25rem;">
                    Abrir sitio en vivo <i data-lucide="external-link" style="width:13px;height:13px;"></i>
                  </a>`
                : ''
            }
          </div>

          <h3 class="platform-title">${p.name}</h3>
          <p class="platform-tagline">${p.tagline}</p>

          <div class="ideal-for-box">
            <strong>Ideal para vender/adaptar a:</strong> ${p.idealFor}
          </div>

          <div class="platform-highlights">
            ${p.highlights
              .map(
                (h) => `
              <div class="highlight-item">
                <i data-lucide="check-circle-2"></i>
                <span>${h}</span>
              </div>
            `
              )
              .join('')}
          </div>

          <div class="platform-stack">
            ${p.stack.map((tech) => `<span class="stack-pill">${tech}</span>`).join('')}
          </div>

          <div class="platform-actions">
            <button type="button" class="btn btn-glass btn-sm" onclick="openPlatformModal('${p.id}', '${p.liveUrl ? 'live' : 'overview'}')">
              <i data-lucide="${p.liveUrl ? 'monitor-play' : 'layers'}"></i>
              <span>${p.liveUrl ? 'Probar Demo / Detalles' : 'Inspeccionar Arquitectura'}</span>
            </button>
            <button type="button" class="btn btn-primary btn-sm" onclick="selectPlatformForQuote('${p.id}')">
              <i data-lucide="sparkles"></i>
              <span>Cotizar una Similar</span>
            </button>
          </div>
        </div>
      </article>
    `
    )
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

/* ==========================================================================
   4. INTERACTIVE PLATFORM INSPECTOR MODAL (CASE STUDY + LIVE IFRAME DEMO)
   ========================================================================== */
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
            <i data-lucide="external-link"></i> Abrir Sitio en Pestaña Nueva
          </a>`
        : ''
    }
    <a href="${p.repoUrl}" target="_blank" rel="noopener" class="btn btn-glass btn-sm">
      <i data-lucide="code-2"></i> Ver Referencia (${p.repo})
    </a>
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
          <span>🟢 Conectado en vivo a: <strong>${p.liveUrl}</strong></span>
          <a href="${p.liveUrl}" target="_blank" rel="noopener" style="color:var(--accent-cyan);font-weight:700;">
            Abrir en pantalla completa ↗
          </a>
        </div>
        <iframe src="${p.liveUrl}" title="Demo en vivo de ${p.name}" loading="lazy"></iframe>
      </div>
    `;
  } else {
    content.innerHTML = `
      <div class="modal-overview-grid">
        <div>
          <div class="modal-section-box">
            <h4>🎯 El Problema Real que Resuelve</h4>
            <p style="font-size:0.92rem;color:var(--text-secondary);">${p.problemSolved}</p>
          </div>

          <div class="modal-section-box">
            <h4>🚀 La Solución Construida por Andrés Montoya Hernández</h4>
            <p style="font-size:0.92rem;color:var(--text-secondary);margin-bottom:0.9rem;">${p.solutionBuilt}</p>
            <ul class="modal-feature-list">
              ${p.modulesDetailed.map((m) => `<li>${m}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div>
          <div class="modal-section-box">
            <h4>🏢 ¿Para quién es ideal esta plataforma?</h4>
            <p style="font-size:0.92rem;color:var(--text-primary);font-weight:600;margin-bottom:0.75rem;">
              ${p.idealFor}
            </p>
            <p style="font-size:0.84rem;color:var(--text-secondary);">
              Como ya tengo el <strong>${p.codeReadyPct}% del motor programado y probado</strong>, podemos lanzar tu propia versión personalizada con tu logo, tus reglas y tu dominio en <strong>${p.timeEstimate}</strong>.
            </p>
          </div>

          <div class="modal-section-box">
            <h4>💰 Opciones de Inversión (Referencia Base)</h4>
            <p style="font-size:0.86rem;color:var(--text-secondary);margin-bottom:0.4rem;">
              • <strong>Pago Único Llave en Mano:</strong> Desde <strong>$${p.basePrice.toLocaleString('es-MX')} MXN</strong>
            </p>
            <p style="font-size:0.86rem;color:var(--accent-emerald);font-weight:600;">
              • <strong>Plan Renta Mensual:</strong> Setup $${p.setupFee.toLocaleString('es-MX')} + $${p.monthlyFee.toLocaleString('es-MX')}/mes
            </p>
          </div>

          <div class="modal-section-box">
            <h4>🛠️ Stack Tecnológico de Producción</h4>
            <div style="display:flex;flex-wrap:wrap;gap:0.45rem;margin-top:0.5rem;">
              ${p.stack.map((s) => `<span class="tech-chip">${s}</span>`).join('')}
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

/* ==========================================================================
   5. INTERACTIVE CONFIGURATOR, QUOTER & PDF / WHATSAPP GENERATOR
   ========================================================================== */
function initConfigurator() {
  const step2Container = document.getElementById('step2BasePlatform');
  if (!step2Container) return;

  // Render the 9 platforms as base choices
  step2Container.innerHTML = PLATFORMS.map(
    (p) => `
      <button type="button" class="config-opt ${p.id === state.selectedBasePlatformId ? 'active' : ''}" data-base-id="${p.id}">
        <strong>${p.name}</strong>
        <span>${p.sectorLabel} · ${p.codeReadyPct}% listo</span>
      </button>
    `
  ).join('');

  // Step 1 Audience listeners
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

  // Payment mode listeners (Pago Único vs Renta Mensual)
  document.querySelectorAll('#paymentModeBar .pay-mode-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#paymentModeBar .pay-mode-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.paymentMode = btn.getAttribute('data-paymode');
      updateQuoteSummary();
    });
  });

  // Step 2 Base Platform listeners
  step2Container.querySelectorAll('.config-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      step2Container.querySelectorAll('.config-opt').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      state.selectedBasePlatformId = btn.getAttribute('data-base-id');
      updateQuoteSummary();
    });
  });

  // Step 3 Modules listeners
  document.querySelectorAll('#step3Modules input[type="checkbox"]').forEach((chk) => {
    chk.addEventListener('change', updateQuoteSummary);
  });

  // Actions: WhatsApp & PDF
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

  document.getElementById('summaryPlatformTitle').textContent = `Base: ${basePlatform.name}`;
  document.getElementById('summaryPlatformRepo').innerHTML = `Referencia: <code>${basePlatform.repo}</code>`;
  document.getElementById('summaryCodeReady').textContent = `${basePlatform.codeReadyPct}% listo`;
  document.getElementById('summaryCodeBar').style.width = `${basePlatform.codeReadyPct}%`;
  document.getElementById('summaryTimeEstimate').innerHTML = `Tiempo estimado de adaptación: <strong>${basePlatform.timeEstimate}</strong>`;

  const priceLabelEl = document.getElementById('summaryPriceLabel');
  const priceEl = document.getElementById('summaryPrice');
  const secondaryEl = document.getElementById('summarySecondaryPrice');
  const noteEl = document.getElementById('summaryPriceNote');

  if (state.paymentMode === 'onetime') {
    priceLabelEl.textContent = 'Inversión Llave en Mano (Pago Único)';
    priceEl.textContent = `$${oneTimeTotal.toLocaleString('es-MX')} MXN`;
    secondaryEl.textContent = `También disponible en Renta Mensual: $${setupTotal.toLocaleString('es-MX')} setup + $${monthlyTotal.toLocaleString('es-MX')}/mes`;
  } else {
    priceLabelEl.textContent = 'Plan Renta Mensual (Iguala Todo Incluido)';
    priceEl.textContent = `$${monthlyTotal.toLocaleString('es-MX')} / mes`;
    secondaryEl.textContent = `+ Setup inicial de activación: $${setupTotal.toLocaleString('es-MX')} MXN (o $${oneTimeTotal.toLocaleString('es-MX')} en Pago Único)`;
  }

  if (state.selectedAudienceKey === 'familiar') {
    noteEl.textContent =
      '💚 Tarifa Preferencial Familiar / Amigo Aplicada (-38% de descuento sobre precio comercial de lista).';
  } else {
    noteEl.textContent =
      '*Inversión competitiva de mercado partiendo de motor pre-construido (ahorro ~65% vs agencia desde cero). Incluye personalización con tu marca y capacitación.';
  }

  const listEl = document.getElementById('summaryModulesList');
  const items = [
    `Núcleo completo de ${basePlatform.name} personalizado con tu marca`,
    `Perfil: ${state.selectedAudienceLabel}`,
    ...checkedModules.map((m) => m.label),
    'Despliegue en la nube + Dominio + Capacitación de uso'
  ];

  listEl.innerHTML = items.map((item) => `<li>${item}</li>`).join('');
}

function sendConfigurationViaWhatsapp() {
  const { basePlatform, checkedModules, oneTimeTotal, setupTotal, monthlyTotal } = getCalculatedQuote();
  const clientName = document.getElementById('clientName')?.value.trim() || 'Interesado';
  const clientNote = document.getElementById('clientNote')?.value.trim() || 'Me interesa adaptar esta plataforma.';

  const modulesText = checkedModules.map((m) => `• ${m.label}`).join('\n');
  const modalityText =
    state.paymentMode === 'onetime'
      ? `Pago Único Llave en Mano: *$${oneTimeTotal.toLocaleString('es-MX')} MXN* (o Plan Mensual: $${setupTotal.toLocaleString('es-MX')} setup + $${monthlyTotal.toLocaleString('es-MX')}/mes)`
      : `Plan Renta Mensual: *$${monthlyTotal.toLocaleString('es-MX')} MXN/mes* + Setup $${setupTotal.toLocaleString('es-MX')} MXN (o Pago Único: $${oneTimeTotal.toLocaleString('es-MX')} MXN)`;

  const message =
    `¡Hola Andrés! 👋 Soy *${clientName}*.\n\n` +
    `Vi tu catálogo de plataformas digitales y armé esta configuración en el simulador:\n` +
    `🔹 *Plataforma Base:* ${basePlatform.name}\n` +
    `🔹 *Perfil:* ${state.selectedAudienceLabel}\n` +
    `🔹 *Modalidad elegida:* ${modalityText}\n` +
    `🔹 *Tiempo estimado:* ${basePlatform.timeEstimate}\n\n` +
    `*Módulos seleccionados:*\n${modulesText}\n\n` +
    `*Notas:* ${clientNote}`;

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
  const clientName = document.getElementById('clientName')?.value.trim() || 'Cliente / Empresa Interesada';
  const clientNote = document.getElementById('clientNote')?.value.trim() || 'Adaptación sobre motor pre-construido';
  const dateStr = new Date().toLocaleDateString('es-MX', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Header Ejecutivo
  doc.setFillColor(13, 16, 24);
  doc.rect(0, 0, 210, 42, 'F');

  doc.setTextColor(6, 182, 212);
  doc.setFontSize(10);
  doc.setFont('helvetica', 'bold');
  doc.text('ANDRÉS MONTOYA HERNÁNDEZ · ARQUITECTO DE PLATAFORMAS DIGITALES & IA', 15, 16);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(17);
  doc.text('PROPUESTA TÉCNICA Y COTIZACIÓN COMERCIAL', 15, 26);

  doc.setTextColor(148, 163, 184);
  doc.setFontSize(9);
  doc.setFont('helvetica', 'normal');
  doc.text(`Fecha: ${dateStr}   |   WhatsApp Directo: +52 ${OWNER_INFO.whatsappDisplay}   |   GitHub: @andresmh99-dev`, 15, 35);

  // Datos del cliente
  let y = 53;
  doc.setTextColor(15, 23, 42);
  doc.setFontSize(12);
  doc.setFont('helvetica', 'bold');
  doc.text(`Preparado para: ${clientName}`, 15, y);

  y += 6.5;
  doc.setFontSize(10);
  doc.setFont('helvetica', 'normal');
  doc.text(`Perfil de proyecto: ${state.selectedAudienceLabel}`, 15, y);

  y += 6;
  doc.text(`Notas: ${clientNote}`, 15, y);

  // Caja de Plataforma Base
  y += 9;
  doc.setFillColor(241, 245, 249);
  doc.roundedRect(15, y, 180, 30, 3, 3, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(15, 23, 42);
  doc.text(`Plataforma Base Seleccionada: ${basePlatform.name}`, 20, y + 9);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text(`Sector: ${basePlatform.sectorLabel}`, 20, y + 16);
  doc.text(
    `Avance acelerado: ${basePlatform.codeReadyPct}% del motor ya construido  |  Tiempo estimado: ${basePlatform.timeEstimate}`,
    20,
    y + 23
  );

  // Módulos Incluidos
  y += 40;
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('Alcance y Capacidades Incluidas:', 15, y);

  y += 7;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.8);

  const allItems = [
    `Personalización completa del motor ${basePlatform.name} con tu marca, logotipo y dominio.`,
    ...basePlatform.highlights.map((h) => `Capacidad base: ${h}`),
    ...checkedModules.map((m) => `Módulo integrado: ${m.label}`),
    'Despliegue en infraestructura en la nube, certificados SSL y capacitación de operación.'
  ];

  allItems.forEach((item) => {
    const lines = doc.splitTextToSize(`• ${item}`, 175);
    doc.text(lines, 18, y);
    y += lines.length * 5.2 + 1.2;
  });

  // Caja Comparativa de las 2 Opciones de Inversión
  y += 6;
  doc.setFillColor(13, 16, 24);
  doc.roundedRect(15, y, 180, 36, 3, 3, 'F');

  doc.setTextColor(6, 182, 212);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.text('OPCIONES DE INVERSIÓN COMERCIAL:', 22, y + 9);

  doc.setTextColor(255, 255, 255);
  doc.setFontSize(12);
  doc.text(`Opción A — Pago Único Llave en Mano: $${oneTimeTotal.toLocaleString('es-MX')} MXN`, 22, y + 18);
  doc.text(
    `Opción B — Plan Renta Mensual: Setup $${setupTotal.toLocaleString('es-MX')} MXN + $${monthlyTotal.toLocaleString('es-MX')} MXN / mes`,
    22,
    y + 26
  );

  doc.setTextColor(148, 163, 184);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.text(
    `Atención directa: Andrés Montoya Hernández  |  WhatsApp: +52 ${OWNER_INFO.whatsappDisplay}`,
    22,
    y + 33
  );

  doc.save(`Cotizacion-${basePlatform.id}-Andres-Montoya.pdf`);
}
