/* ==========================================================================
   VISUAL-FX.JS — MOTOR VISUAL, CAPTURAS REALES, SIMULADOR IA Y EFECTOS 3D
   Andrés Montoya Hernández · WhatsApp: +52 443 143 3732
   ========================================================================== */

(function () {
  const VISUAL_DATA = {
    'nailroomspa': {
      screenshot: 'assets/screenshots/nailroomspa.png',
      shortPitch: 'Agenda 24/7 + Bot WhatsApp que transcribe audios con IA y cobra anticipos sin encimar citas.',
      visualKpis: ['🎙️ Bot Voz IA (Whisper)', '🔒 0% Sobreventa', '💳 Anticipos Online']
    },
    'control-ops': {
      screenshot: 'assets/screenshots/control-ops.png',
      shortPitch: 'Centro de mando logístico MX/US con rastreo multiparada en vivo, lectura de BL por IA y finanzas.',
      visualKpis: ['🛰️ Rastreo Multiparada', '🤖 Lectura BL con IA', '📈 Alerta de Margen']
    },
    'agenda-fenix': {
      screenshot: 'assets/screenshots/agenda-fenix.png',
      shortPitch: 'Renta de consultorios por hora o bloque fijo con doble agenda privada, paquetes y corte PDF.',
      visualKpis: ['🏥 Doble Agenda Anidada', '🛡️ Privacidad NOM', '💳 Paquetes + Corte PDF']
    },
    'lievitum-pizzalab': {
      screenshot: 'assets/screenshots/lievitum-pizzalab.png',
      livePreviewUrl: 'https://lustrous-stardust-5c82d0.netlify.app/',
      shortPitch: 'Web gastronómica multi-sucursal (Morelia / Querétaro) con menú interactivo, filtros y pedidos en 1 clic.',
      visualKpis: ['🍕 Menú Interactivo 7 Cat.', '📍 Selector Sucursal', '📲 Pedidos WhatsApp/Uber']
    },
    'psicoterapia-conductual': {
      screenshot: 'assets/screenshots/psicoterapia-conductual.png',
      shortPitch: 'App móvil instalable (PWA) para consultorios con autoagendado, expediente clínico SOAP/TCC y recordatorios.',
      visualKpis: ['📱 App Instalable PWA', '🧠 Expediente TCC/SOAP', '⏰ Recordatorios 48h/24h']
    },
    'escalera-britania': {
      screenshot: 'assets/screenshots/escalera-britania.png',
      shortPitch: 'SaaS para clubes de tenis y pádel (Web + App iOS/Android) con standings en vivo, grupos y ascensos.',
      visualKpis: ['🎾 167 Jugadores Reales', '🏆 Ranking en Vivo', '📱 Web + App Nativa']
    },
    'inlog-quoter': {
      screenshot: 'assets/screenshots/inlog-quoter.png',
      shortPitch: 'Cotizador B2B multicarrier conectado a +15 navieras y transportistas en tiempo real con portal de clientes.',
      visualKpis: ['🚢 +15 Navieras en Vivo', '⚡ Caché Redis Instantánea', '📄 Cotización PDF 1-Clic']
    },
    'family-os': {
      screenshot: 'assets/screenshots/family-os.svg',
      shortPitch: 'Reenvía cualquier circular escolar PDF o mensaje de WhatsApp y conviértelo en plan familiar compartido.',
      visualKpis: ['👨‍👩‍👧‍👦 Agenda Familiar IA', '📄 Lee PDFs y Capturas', '✅ Reparte Tareas y Pagos']
    },
    'incubeit-landing': {
      screenshot: 'assets/screenshots/incubeit-landing.svg',
      shortPitch: 'Portal comercial de alta conversión con simulador interactivo de precios y descarga de propuesta PDF.',
      visualKpis: ['🧮 Simulador ROI en Vivo', '📥 Generador PDF A4', '🚀 Conversión 24/7']
    }
  };

  // Enriquecer window.PLATFORMS inmediatamente al cargar el script
  function enrichPlatforms() {
    if (!window.PLATFORMS) return;
    window.PLATFORMS.forEach((p) => {
      const v = VISUAL_DATA[p.id];
      if (v) {
        p.screenshot = v.screenshot;
        p.shortPitch = v.shortPitch;
        p.visualKpis = v.visualKpis;
        if (v.livePreviewUrl) {
          p.livePreviewUrl = v.livePreviewUrl;
        }
      }
      if (!p.livePreviewUrl) {
        p.livePreviewUrl = p.liveUrl || '';
      }
    });
  }

  enrichPlatforms();

  // Renderizador reutilizable de Marco 3D con Captura Real
  window.renderVfxScreenshotFrame = function (p, options = {}) {
    const heightStyle = options.height ? `style="height:${options.height};"` : '';
    const shot = p.screenshot || 'assets/screenshots/nailroomspa.png';
    return `
      <div class="vfx-shot-frame" data-vfx-tilt onclick="window.openVfxLightbox('${p.id}', 'shot')">
        <div class="vfx-shot-chrome">
          <div class="vfx-shot-dots"><span></span><span></span><span></span></div>
          <span class="vfx-shot-domain">
            <span class="vfx-shot-live-dot"></span>
            ${p.displayDomain}
          </span>
          <span style="font-size:10px;opacity:0.75;">${p.codeReadyPct}% LISTO</span>
        </div>
        <div class="vfx-shot-img-wrap" ${heightStyle}>
          <img src="${shot}" alt="Captura real de ${p.name}" loading="lazy" />
          <div class="vfx-shot-overlay">
            <button type="button" class="vfx-shot-cta primary" onclick="event.stopPropagation(); window.openVfxLightbox('${p.id}', 'live')">
              ▶ Probar Interactivo / Móvil
            </button>
            <button type="button" class="vfx-shot-cta" onclick="event.stopPropagation(); window.openVfxLightbox('${p.id}', 'shot')">
              🔍 Ampliar Captura HD
            </button>
          </div>
        </div>
      </div>
    `;
  };

  // Escenarios del Simulador Interactivo de IA
  const SIM_SCENARIOS = {
    spa: {
      badge: '💅 Escenario Real: Nail Room Spa & Clínicas',
      incoming: `🎙️ <strong>Nota de voz de Clienta en WhatsApp (0:11):</strong>
        <span class="vfx-waveform"><span></span><span></span><span></span><span></span><span></span></span>
        <br/><em>"Hola, ¿tienen espacio mañana a las 5 pm en Morelia para gelish y pedi spa?"</em>`,
      steps: [
        '🧠 <strong>OpenAI Whisper:</strong> Audio transcrito en 0.8 segundos sin intervención humana.',
        '🔒 <strong>Candado PostgreSQL:</strong> Verificando especialista libre en sucursal Morelia (17:00 - 18:30)...',
        '✅ <strong>Cita Creada + Anticipo:</strong> Especialista Valeria asignada · Link de anticipo Mercado Pago enviado.'
      ],
      resultMetric: 'Tiempo de respuesta: 2.4 seg · 0% citas encimadas'
    },
    logistica: {
      badge: '🚛 Escenario Real: Control-Ops & InLog B2B',
      incoming: `📄 <strong>PDF Subido:</strong> <code>Bill_of_Lading_ILP_2026.pdf</code> (Ruta Morelia → Laredo TX → Chicago)`,
      steps: [
        '🤖 <strong>Claude Vision IA:</strong> Extrayendo Booking, Contenedor 40HC, Peso y Consignatario...',
        '🛰️ <strong>Ruta Multiparada:</strong> Generando links públicos de rastreo por planta y cruce fronterizo MX/US.',
        '💰 <strong>Control Financiero:</strong> Tarifa $4,250 USD · Costo $3,180 USD · Margen neto verificado: <strong>25.1%</strong>.'
      ],
      resultMetric: 'Captura manual ahorrada: 45 min por embarque'
    },
    restaurante: {
      badge: '🍕 Escenario Real: Lievitum Pizza LAB & FamilyOS',
      incoming: `📲 <strong>Cliente / Familia en Celular:</strong> Selecciona sucursal Morelia → Filtra "Favoritas de la Casa" → Pide <em>Pizza La Regina + Aperol</em>`,
      steps: [
        '📍 <strong>Geolocalización & Horario:</strong> Sucursal Morelia detectada como ABIERTA (13:00 - 22:00).',
        '🍽️ <strong>Comanda Directa:</strong> Pedido estructurado enviado al WhatsApp de cocina sin pagar 30% de comisión a apps.',
        '📈 <strong>Resultado Comercial:</strong> Cliente fidelizado directamente en tu propio dominio <code>.com</code>.'
      ],
      resultMetric: 'Ahorro en comisiones de terceros: hasta $18,000 MXN/mes'
    }
  };

  function injectInteractiveVisualSections() {
    const platforms = window.PLATFORMS || [];
    if (!platforms.length) return;

    // Encontrar dónde insertar la cinta visual y el laboratorio interactivo
    const anchor =
      document.querySelector('.hero') ||
      document.querySelector('.hero-grid') ||
      document.querySelector('.atelier-hero');

    if (!anchor || document.getElementById('vfxInteractiveRoot')) return;

    const doubled = [...platforms, ...platforms];
    const wrapper = document.createElement('div');
    wrapper.id = 'vfxInteractiveRoot';

    wrapper.innerHTML = `
      <!-- CINTA CINEMATOGRÁFICA DE CAPTURAS REALES -->
      <section class="vfx-filmstrip-section" aria-label="Galería visual en movimiento">
        <div style="max-width:1280px;margin:0 auto 14px;padding:0 20px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px;">
          <div style="font-size:12px;font-weight:800;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">
            🎬 Galería en Vivo · Haz clic en cualquier pantalla para probarla o ampliarla
          </div>
          <div style="font-size:12px;opacity:0.75;">Pasa el cursor para pausar · 9 plataformas reales</div>
        </div>
        <div class="vfx-filmstrip-track">
          ${doubled
            .map(
              (p) => `
            <div class="vfx-filmstrip-card" onclick="window.openVfxLightbox('${p.id}', 'shot')">
              <img src="${p.screenshot}" alt="${p.name}" loading="lazy" />
              <div class="vfx-filmstrip-meta">
                <span>${p.name.split('·')[0].trim()}</span>
                <span class="vfx-filmstrip-domain">● ${p.displayDomain}</span>
              </div>
            </div>
          `
            )
            .join('')}
        </div>
      </section>

      <!-- LABORATORIO INTERACTIVO: SIMULADOR IA + SLIDER ANTES/DESPUÉS -->
      <section class="vfx-interactive-hub">
        <div class="vfx-hub-grid">
          <!-- COLUMNA 1: SIMULADOR INTERACTIVO EN VIVO -->
          <div class="vfx-hub-card">
            <div>
              <span class="vfx-hub-eyebrow">⚡ INTERACCIÓN EN VIVO · PRUÉBALO TÚ MISMO</span>
              <h3 class="vfx-hub-title">Mira cómo trabaja tu plataforma en 3 segundos</h3>
              <p class="vfx-hub-sub">Haz clic en un giro para simular en vivo cómo la Inteligencia Artificial atiende clientes, agenda o procesa documentos:</p>

              <div class="vfx-sim-tabs" id="vfxSimTabs">
                <button type="button" class="vfx-sim-tab active" data-sim="spa">💅 Spa / Clínica (Voz IA)</button>
                <button type="button" class="vfx-sim-tab" data-sim="logistica">🚛 Empresa / Logística (PDF IA)</button>
                <button type="button" class="vfx-sim-tab" data-sim="restaurante">🍕 Restaurante / Club / Hogar</button>
              </div>

              <div class="vfx-sim-stage" id="vfxSimStage"></div>
            </div>

            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1);">
              <span id="vfxSimMetric" style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#34d399;font-weight:700;"></span>
              <button type="button" id="vfxReplayBtn" class="vfx-shot-cta primary" style="font-size:12px;">
                ↻ Repetir Animación en Vivo
              </button>
            </div>
          </div>

          <!-- COLUMNA 2: COMPARADOR DESLIZANTE ANTES VS DESPUÉS -->
          <div class="vfx-hub-card">
            <div>
              <span class="vfx-hub-eyebrow">↔ ARRASTRA EL CONTROL · ANTES VS. DESPUÉS</span>
              <h3 class="vfx-hub-title">Del caos manual a tu propio motor digital</h3>
              <p class="vfx-hub-sub">Desliza de izquierda a derecha para comparar operar por libreta/Excel vs. tener tu propia plataforma:</p>

              <div class="vfx-ba-container" id="vfxBaContainer">
                <!-- CAPA DESPUÉS (FONDO) -->
                <div class="vfx-ba-layer vfx-ba-after">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="background:#10b981;color:#052e16;font-weight:800;font-size:11px;padding:4px 10px;border-radius:999px;">
                      ✓ CON TU PLATAFORMA PROPIA
                    </span>
                    <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6ee7b7;">Operación 24/7 Automática</span>
                  </div>
                  <div class="vfx-ba-card-list">
                    <div class="vfx-ba-item">🤖 Bot WhatsApp IA contesta audios y agenda en 3 seg</div>
                    <div class="vfx-ba-item">🔒 0% citas encimadas con candado en base de datos</div>
                    <div class="vfx-ba-item">💳 Anticipos cobrados con Mercado Pago y corte PDF</div>
                    <div class="vfx-ba-item">🌐 Tu propio dominio oficial (.com / .net) que da prestigio</div>
                  </div>
                  <div style="font-size:12px;color:#a7f3d0;font-weight:700;">Resultado: +40% más ventas y horas libres cada semana</div>
                </div>

                <!-- CAPA ANTES (RECORTADA) -->
                <div class="vfx-ba-layer vfx-ba-before" id="vfxBaBefore">
                  <div style="display:flex;justify-content:space-between;align-items:center;width:440px;">
                    <span style="background:#ef4444;color:#ffffff;font-weight:800;font-size:11px;padding:4px 10px;border-radius:999px;">
                      ✕ ANTES (CAOS MANUAL)
                    </span>
                    <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#fca5a5;">Pérdida de Clientes</span>
                  </div>
                  <div class="vfx-ba-card-list">
                    <div class="vfx-ba-item">😰 47 mensajes y audios sin responder en WhatsApp</div>
                    <div class="vfx-ba-item">📉 Citas encimadas en libreta y hojas de Excel rotas</div>
                    <div class="vfx-ba-item">💸 Clientes que no llegan porque no dejaron anticipo</div>
                    <div class="vfx-ba-item">⏳ Horas perdidas capturando datos y haciendo cuentas</div>
                  </div>
                  <div style="font-size:12px;color:#fecaca;font-weight:700;width:440px;">Costo oculto: miles de pesos perdidos cada mes</div>
                </div>

                <div class="vfx-ba-handle" id="vfxBaHandle">↔</div>
                <input type="range" min="8" max="92" value="48" class="vfx-ba-range" id="vfxBaRange" aria-label="Comparar antes y después" />
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1);font-size:12px;color:#cbd5e1;">
              <span>👈 Arrastra el círculo blanco hacia los lados</span>
              <a href="https://wa.me/524431433732?text=Hola%20Andr%C3%A9s%2C%20quiero%20automatizar%20mi%20operaci%C3%B3n%20con%20una%20plataforma." target="_blank" rel="noopener" style="color:#38bdf8;font-weight:700;">
                Automatizar mi negocio →
              </a>
            </div>
          </div>
        </div>
      </section>
    `;

    anchor.insertAdjacentElement('afterend', wrapper);
    initSimulatorEvents();
    initBeforeAfterSlider();
  }

  let simTimers = [];
  function runSimulation(key) {
    simTimers.forEach((t) => clearTimeout(t));
    simTimers = [];

    const data = SIM_SCENARIOS[key] || SIM_SCENARIOS.spa;
    const stage = document.getElementById('vfxSimStage');
    const metric = document.getElementById('vfxSimMetric');
    if (!stage) return;

    stage.innerHTML = `
      <div>
        <div style="font-size:11px;font-weight:700;color:#38bdf8;margin-bottom:8px;">${data.badge}</div>
        <div class="vfx-chat-bubble vfx-chat-incoming">${data.incoming}</div>
        <div id="vfxSimSteps"></div>
      </div>
    `;
    if (metric) metric.textContent = '⏳ Procesando con Inteligencia Artificial...';

    const stepsContainer = document.getElementById('vfxSimSteps');
    data.steps.forEach((stepHtml, idx) => {
      const t = setTimeout(() => {
        if (!stepsContainer) return;
        const div = document.createElement('div');
        div.className = 'vfx-chat-bubble vfx-chat-ai';
        div.innerHTML = stepHtml;
        stepsContainer.appendChild(div);
        if (idx === data.steps.length - 1 && metric) {
          metric.textContent = '✨ ' + data.resultMetric;
        }
      }, (idx + 1) * 650);
      simTimers.push(t);
    });
  }

  function initSimulatorEvents() {
    let activeKey = 'spa';
    const tabs = document.querySelectorAll('#vfxSimTabs .vfx-sim-tab');
    tabs.forEach((btn) => {
      btn.addEventListener('click', () => {
        tabs.forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        activeKey = btn.getAttribute('data-sim');
        runSimulation(activeKey);
      });
    });

    const replay = document.getElementById('vfxReplayBtn');
    if (replay) {
      replay.addEventListener('click', () => runSimulation(activeKey));
    }

    runSimulation('spa');
  }

  function initBeforeAfterSlider() {
    const range = document.getElementById('vfxBaRange');
    const before = document.getElementById('vfxBaBefore');
    const handle = document.getElementById('vfxBaHandle');
    if (!range || !before || !handle) return;

    const update = () => {
      const val = range.value;
      before.style.width = val + '%';
      handle.style.left = val + '%';
    };
    range.addEventListener('input', update);
    update();
  }

  // Lightbox Multi-Dispositivo (Desktop / Tablet / Mobile / Captura HD / Sitio en Vivo)
  function ensureLightbox() {
    if (document.getElementById('vfxLightbox')) return;
    const lb = document.createElement('div');
    lb.id = 'vfxLightbox';
    lb.className = 'vfx-lightbox';
    lb.innerHTML = `
      <div class="vfx-lb-topbar">
        <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <strong id="vfxLbTitle" style="font-size:15px;"></strong>
          <a id="vfxLbDomainLink" href="#" target="_blank" rel="noopener" style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#34d399;text-decoration:underline;"></a>
        </div>
        <div class="vfx-lb-devices">
          <button type="button" class="vfx-lb-dev-btn active" data-lb-mode="shot">📸 Captura Real HD</button>
          <button type="button" class="vfx-lb-dev-btn" data-lb-mode="desktop">🖥️ Sitio en Vivo (Desktop)</button>
          <button type="button" class="vfx-lb-dev-btn" data-lb-mode="mobile">📱 Vista Celular (iPhone)</button>
        </div>
        <div style="display:flex;gap:8px;">
          <a id="vfxLbWaBtn" href="#" target="_blank" rel="noopener" class="vfx-shot-cta primary" style="text-decoration:none;">
            💬 Cotizar una similar
          </a>
          <button type="button" id="vfxLbClose" class="vfx-shot-cta">Cerrar ✕</button>
        </div>
      </div>
      <div class="vfx-lb-stage">
        <div class="vfx-lb-viewport" id="vfxLbViewport"></div>
      </div>
    `;
    document.body.appendChild(lb);

    document.getElementById('vfxLbClose').addEventListener('click', () => {
      lb.classList.remove('open');
      document.getElementById('vfxLbViewport').innerHTML = '';
    });
    lb.addEventListener('click', (e) => {
      if (e.target === lb) {
        lb.classList.remove('open');
        document.getElementById('vfxLbViewport').innerHTML = '';
      }
    });

    lb.querySelectorAll('[data-lb-mode]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const mode = btn.getAttribute('data-lb-mode');
        renderLightboxContent(lb.dataset.activeId, mode);
      });
    });
  }

  function renderLightboxContent(platformId, mode) {
    const p = (window.PLATFORMS || []).find((item) => item.id === platformId);
    if (!p) return;

    const lb = document.getElementById('vfxLightbox');
    const viewport = document.getElementById('vfxLbViewport');
    lb.querySelectorAll('[data-lb-mode]').forEach((b) => {
      b.classList.toggle('active', b.getAttribute('data-lb-mode') === mode);
    });

    viewport.classList.remove('tablet', 'mobile');
    if (mode === 'mobile') viewport.classList.add('mobile');

    const targetLive = p.livePreviewUrl || p.liveUrl;
    if ((mode === 'desktop' || mode === 'mobile') && targetLive) {
      viewport.innerHTML = `<iframe src="${targetLive}" title="Vista en vivo de ${p.name}"></iframe>`;
    } else {
      viewport.innerHTML = `<img src="${p.screenshot}" alt="Captura HD de ${p.name}" />`;
    }
  }

  window.openVfxLightbox = function (platformId, initialMode = 'shot') {
    ensureLightbox();
    const p = (window.PLATFORMS || []).find((item) => item.id === platformId);
    if (!p) return;

    const lb = document.getElementById('vfxLightbox');
    lb.dataset.activeId = platformId;
    document.getElementById('vfxLbTitle').textContent = p.name;

    const domLink = document.getElementById('vfxLbDomainLink');
    domLink.textContent = p.displayDomain + ' ↗';
    domLink.href = p.livePreviewUrl || p.liveUrl || p.repoUrl;

    const waText = encodeURIComponent(
      `Hola Andrés, estuve viendo la pantalla de "${p.name}" (${p.displayDomain}) y me gustaría cotizar una plataforma similar.`
    );
    document.getElementById('vfxLbWaBtn').href = `https://wa.me/524431433732?text=${waText}`;

    renderLightboxContent(platformId, initialMode === 'live' ? 'desktop' : 'shot');
    lb.classList.add('open');
  };

  // Efecto 3D Tilt suave al mover el mouse sobre cualquier captura
  function init3DTilt() {
    document.addEventListener('mousemove', (e) => {
      const frame = e.target.closest('[data-vfx-tilt]');
      if (!frame) return;
      const rect = frame.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      frame.style.transform = `perspective(900px) rotateY(${(x * 7).toFixed(2)}deg) rotateX(${(-y * 7).toFixed(2)}deg) translateY(-3px)`;
    });

    document.addEventListener('mouseout', (e) => {
      const frame = e.target.closest('[data-vfx-tilt]');
      if (!frame) return;
      if (!frame.contains(e.relatedTarget)) {
        frame.style.transform = '';
      }
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    enrichPlatforms();
    injectInteractiveVisualSections();
    init3DTilt();
  });
})();
