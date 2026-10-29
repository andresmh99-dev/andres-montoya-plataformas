/* ==========================================================================
   VISUAL-FX.JS — MOTOR VISUAL, CAPTURAS REALES, SIMULADOR Y EFECTOS 3D
   Lenguaje 100% claro y amigable para dueños de negocios, empresas y familias
   Andrés Montoya Hernández · WhatsApp: +52 443 143 3732
   ========================================================================== */

(function () {
  const VISUAL_DATA = {
    'nailroomspa': {
      screenshot: 'assets/screenshots/nailroomspa.png',
      shortPitch: 'Tus clientes agendan solos por internet o mandando un audio de WhatsApp; el sistema cobra anticipos y evita citas encimadas.',
      visualKpis: ['🎙️ WhatsApp que entiende Audios', '📅 Cero Citas Encimadas', '💳 Cobro de Anticipos']
    },
    'control-ops': {
      screenshot: 'assets/screenshots/control-ops.png',
      shortPitch: 'Sigue tus entregas y camiones en vivo, lee documentos PDF en automático y cuida la ganancia de cada viaje.',
      visualKpis: ['📍 Rastreo en Vivo para Clientes', '📄 Lee Documentos Solo', '📈 Control de Ganancias']
    },
    'agenda-fenix': {
      screenshot: 'assets/screenshots/agenda-fenix.png',
      shortPitch: 'Administra la renta de consultorios o espacios por hora, vende paquetes y dale a cada especialista su agenda privada.',
      visualKpis: ['🏥 Renta por Hora o Mes', '🔒 Agenda Privada por Doctor', '💳 Paquetes y Corte en PDF']
    },
    'lievitum-pizzalab': {
      screenshot: 'assets/screenshots/lievitum-pizzalab.png',
      livePreviewUrl: 'https://lustrous-stardust-5c82d0.netlify.app/',
      shortPitch: 'Página atractiva para tu restaurante con menú interactivo con fotos, selector de sucursal y pedidos directos a WhatsApp.',
      visualKpis: ['🍕 Menú Digital con Fotos', '📍 Varias Sucursales', '📲 Pedidos a tu WhatsApp']
    },
    'psicoterapia-conductual': {
      screenshot: 'assets/screenshots/psicoterapia-conductual.png',
      shortPitch: 'Lleva tu consultorio en el celular: tus pacientes agendan solos, llenas su expediente rápido y mandas recordatorios automáticos.',
      visualKpis: ['📱 Se Instala en tu Celular', '📝 Expediente Rápido', '⏰ Recordatorios Automáticos']
    },
    'escalera-britania': {
      screenshot: 'assets/screenshots/escalera-britania.png',
      shortPitch: 'Olvídate del Excel en tus torneos: los jugadores suben su marcador desde el celular y la tabla de posiciones se actualiza sola.',
      visualKpis: ['🎾 Página + App para Jugadores', '🏆 Tabla de Posiciones Sola', '📅 Reserva de Canchas']
    },
    'inlog-quoter': {
      screenshot: 'assets/screenshots/inlog-quoter.png',
      shortPitch: 'Tus clientes cotizan en segundos desde tu página: el sistema compara opciones, suma tu ganancia y entrega un PDF formal.',
      visualKpis: ['⚡ Cotiza en Segundos', '💰 Suma tu Ganancia Solo', '📄 Descarga Cotización PDF']
    },
    'family-os': {
      screenshot: 'assets/screenshots/family-os.svg',
      shortPitch: 'Reenvía cualquier circular de la escuela o mensaje de WhatsApp y conviértelo al instante en un calendario familiar compartido.',
      visualKpis: ['👨‍👩‍👧‍👦 Calendario Mamá y Papá', '📄 Lee Circulares de Escuela', '✅ Avisa Materiales y Pagos']
    },
    'incubeit-landing': {
      screenshot: 'assets/screenshots/incubeit-landing.svg',
      shortPitch: 'Página de ventas moderna donde tus clientes calculan su presupuesto al instante y descargan una cotización con tu logo.',
      visualKpis: ['🧮 Calculadora de Precios', '📥 Descarga PDF al Instante', '📲 Manda Clientes a tu WhatsApp']
    }
  };

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
          <span style="font-size:10px;opacity:0.85;">✓ Ya funcionando</span>
        </div>
        <div class="vfx-shot-img-wrap" ${heightStyle}>
          <img src="${shot}" alt="Pantalla real de ${p.name}" loading="lazy" />
          <div class="vfx-shot-overlay">
            <button type="button" class="vfx-shot-cta primary" onclick="event.stopPropagation(); window.openVfxLightbox('${p.id}', 'live')">
              ▶ Ver Página en Vivo / Celular
            </button>
            <button type="button" class="vfx-shot-cta" onclick="event.stopPropagation(); window.openVfxLightbox('${p.id}', 'shot')">
              🔍 Ver Imagen Grande
            </button>
          </div>
        </div>
      </div>
    `;
  };

  // Escenarios del Simulador en lenguaje 100% cotidiano y comercial
  const SIM_SCENARIOS = {
    spa: {
      badge: '💅 Ejemplo en un Salón, Spa o Consultorio',
      incoming: `🎙️ <strong>Tu clienta manda una nota de voz por WhatsApp (0:11):</strong>
        <span class="vfx-waveform"><span></span><span></span><span></span><span></span><span></span></span>
        <br/><em>"Hola, ¿tienen lugar mañana a las 5 de la tarde para uñas y pedicure?"</em>`,
      steps: [
        '👂 <strong>Paso 1:</strong> El asistente escucha el audio al instante (aunque estés ocupada o sea de madrugada).',
        '📅 <strong>Paso 2:</strong> Revisa tu agenda sola y verifica quién está libre a las 5:00 pm sin encimar citas.',
        '✅ <strong>Paso 3:</strong> Le confirma su cita por WhatsApp y le manda link para pagar su anticipo.'
      ],
      resultMetric: 'Responde en 3 segundos · Sin perder clientas por tardar en contestar'
    },
    logistica: {
      badge: '🚛 Ejemplo en una Empresa, Transporte o Distribuidora',
      incoming: `📄 <strong>Subes un documento o pedido en PDF:</strong> <code>Pedido_Embarque_2026.pdf</code> (Ruta Morelia → Laredo)`,
      steps: [
        '👁️ <strong>Paso 1:</strong> El sistema lee el documento solo en segundos (sin que nadie capture datos a mano).',
        '📍 <strong>Paso 2:</strong> Crea un link de rastreo para que tu cliente vea en su celular por dónde va su entrega.',
        '💰 <strong>Paso 3:</strong> Calcula cuánto cobraste, cuánto gastaste y te avisa tu ganancia exacta (25.1%).'
      ],
      resultMetric: 'Te ahorra horas de captura en Excel y evita errores humanos'
    },
    restaurante: {
      badge: '🍕 Ejemplo en un Restaurante, Club o Escuela',
      incoming: `📲 <strong>Un cliente entra desde su celular:</strong> Elige sucursal → Ve fotos del menú → Pide <em>Pizza + Bebida</em>`,
      steps: [
        '🕒 <strong>Paso 1:</strong> La página le muestra si tu sucursal está abierta, el menú con fotos y cómo llegar.',
        '🍽️ <strong>Paso 2:</strong> El pedido llega directo y ordenado a tu WhatsApp (sin pagar 30% de comisión a aplicaciones).',
        '⭐ <strong>Paso 3:</strong> El cliente guarda tu página y vuelve a comprarte directo a ti.'
      ],
      resultMetric: 'Más pedidos directos y 0% de comisiones a intermediarios'
    }
  };

  function injectInteractiveVisualSections() {
    const platforms = window.PLATFORMS || [];
    if (!platforms.length) return;

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
            🎬 Galería de Sistemas Reales · Haz clic en cualquier pantalla para verla en grande
          </div>
          <div style="font-size:12px;opacity:0.75;">Pasa el mouse para pausar · 9 sistemas funcionando hoy</div>
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

      <!-- LABORATORIO INTERACTIVO: SIMULADOR + SLIDER ANTES/DESPUÉS -->
      <section class="vfx-interactive-hub">
        <div class="vfx-hub-grid">
          <!-- COLUMNA 1: SIMULADOR INTERACTIVO EN VIVO -->
          <div class="vfx-hub-card">
            <div>
              <span class="vfx-hub-eyebrow">⚡ ASÍ DE FÁCIL FUNCIONA · HAZ LA PRUEBA</span>
              <h3 class="vfx-hub-title">Mira cómo te ayuda el sistema en el día a día</h3>
              <p class="vfx-hub-sub">Toca uno de los botones de abajo para ver un ejemplo real de cómo atiende a tus clientes o te ahorra trabajo:</p>

              <div class="vfx-sim-tabs" id="vfxSimTabs">
                <button type="button" class="vfx-sim-tab active" data-sim="spa">💅 Salón / Spa / Clínica</button>
                <button type="button" class="vfx-sim-tab" data-sim="logistica">🚛 Empresa / Transporte</button>
                <button type="button" class="vfx-sim-tab" data-sim="restaurante">🍕 Restaurante / Club / Familia</button>
              </div>

              <div class="vfx-sim-stage" id="vfxSimStage"></div>
            </div>

            <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1);">
              <span id="vfxSimMetric" style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#34d399;font-weight:700;"></span>
              <button type="button" id="vfxReplayBtn" class="vfx-shot-cta primary" style="font-size:12px;">
                ↻ Volver a ver ejemplo
              </button>
            </div>
          </div>

          <!-- COLUMNA 2: COMPARADOR DESLIZANTE ANTES VS DESPUÉS -->
          <div class="vfx-hub-card">
            <div>
              <span class="vfx-hub-eyebrow">↔ DESLIZA PARA COMPARAR · ANTES VS. DESPUÉS</span>
              <h3 class="vfx-hub-title">La diferencia entre llevar todo a mano y tener tu sistema</h3>
              <p class="vfx-hub-sub">Mueve el círculo blanco hacia los lados para ver cómo cambia tu negocio:</p>

              <div class="vfx-ba-container" id="vfxBaContainer">
                <!-- CAPA DESPUÉS (FONDO) -->
                <div class="vfx-ba-layer vfx-ba-after">
                  <div style="display:flex;justify-content:space-between;align-items:center;">
                    <span style="background:#10b981;color:#052e16;font-weight:800;font-size:11px;padding:4px 10px;border-radius:999px;">
                      ✓ CON TU PROPIO SISTEMA
                    </span>
                    <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#6ee7b7;">Todo en Orden 24/7</span>
                  </div>
                  <div class="vfx-ba-card-list">
                    <div class="vfx-ba-item">🤖 Contesta WhatsApp y audios solo, a cualquier hora</div>
                    <div class="vfx-ba-item">📅 Ninguna cita se encima; cada quien ve su horario</div>
                    <div class="vfx-ba-item">💳 Tus clientes apartan con anticipo y tienes cuentas claras</div>
                    <div class="vfx-ba-item">🌐 Tu propia página oficial (.com) que da confianza</div>
                  </div>
                  <div style="font-size:12px;color:#a7f3d0;font-weight:700;">Resultado: Más clientes atendidos y más tranquilidad para ti</div>
                </div>

                <!-- CAPA ANTES (RECORTADA) -->
                <div class="vfx-ba-layer vfx-ba-before" id="vfxBaBefore">
                  <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;">
                    <span style="background:#ef4444;color:#ffffff;font-weight:800;font-size:11px;padding:4px 10px;border-radius:999px;">
                      ✕ LLEVANDO TODO A MANO
                    </span>
                    <span style="font-family:'JetBrains Mono',monospace;font-size:12px;color:#fca5a5;">Desgaste Diario</span>
                  </div>
                  <div class="vfx-ba-card-list">
                    <div class="vfx-ba-item">😰 Mensajes y audios acumulados sin responder en WhatsApp</div>
                    <div class="vfx-ba-item">📉 Citas encimadas en la libreta y confusiones de horario</div>
                    <div class="vfx-ba-item">💸 Clientes que dejan plantado porque no dieron anticipo</div>
                    <div class="vfx-ba-item">⏳ Horas perdidas anotando datos y haciendo cuentas a mano</div>
                  </div>
                  <div style="font-size:12px;color:#fecaca;font-weight:700;">Consecuencia: Ventas perdidas y estrés todos los días</div>
                </div>

                <div class="vfx-ba-divider" id="vfxBaDivider"></div>
                <div class="vfx-ba-handle" id="vfxBaHandle">↔</div>
                <input type="range" min="8" max="92" value="48" class="vfx-ba-range" id="vfxBaRange" aria-label="Comparar antes y después" />
              </div>
            </div>

            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,0.1);font-size:12px;color:#cbd5e1;">
              <span>👈 Arrastra el círculo blanco hacia los lados</span>
              <a href="https://wa.me/524431433732?text=Hola%20Andr%C3%A9s%2C%20me%20gustar%C3%ADa%20tener%20un%20sistema%20para%20mi%20negocio." target="_blank" rel="noopener" style="color:#38bdf8;font-weight:700;">
                Quiero mejorar mi negocio →
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
    if (metric) metric.textContent = '⏳ Viendo cómo responde el sistema...';

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
    const container = document.getElementById('vfxBaContainer');
    const range = document.getElementById('vfxBaRange');
    if (!container || !range) return;

    const update = () => {
      const val = range.value;
      container.style.setProperty('--ba-pos', val + '%');
    };
    range.addEventListener('input', update);
    update();
  }

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
          <button type="button" class="vfx-lb-dev-btn active" data-lb-mode="shot">📸 Ver Imagen Completa</button>
          <button type="button" class="vfx-lb-dev-btn" data-lb-mode="desktop">🖥️ Usar Página en Vivo (Computadora)</button>
          <button type="button" class="vfx-lb-dev-btn" data-lb-mode="mobile">📱 Ver cómo luce en Celular</button>
        </div>
        <div style="display:flex;gap:8px;">
          <a id="vfxLbWaBtn" href="#" target="_blank" rel="noopener" class="vfx-shot-cta primary" style="text-decoration:none;">
            💬 Quiero uno así
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
      viewport.innerHTML = `<img src="${p.screenshot}" alt="Pantalla de ${p.name}" />`;
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
    domLink.textContent = 'Ir a ' + p.displayDomain + ' ↗';
    domLink.href = p.livePreviewUrl || p.liveUrl || p.repoUrl;

    const waText = encodeURIComponent(
      `Hola Andrés, vi la pantalla de "${p.name}" (${p.displayDomain}) y me gustaría cotizar un sistema parecido para mí.`
    );
    document.getElementById('vfxLbWaBtn').href = `https://wa.me/524431433732?text=${waText}`;

    renderLightboxContent(platformId, initialMode === 'live' ? 'desktop' : 'shot');
    lb.classList.add('open');
  };

  function init3DTilt() {
    if (window.matchMedia && window.matchMedia('(hover: none)').matches) return;
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
