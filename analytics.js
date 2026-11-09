/**
 * ============================================================================
 * ANALÍTICA COMERCIAL & CONVERSIONES (GA4 + META PIXEL PARA REDES SOCIALES)
 * ============================================================================
 * Cuando actives campañas en Facebook/Instagram Ads o Google Ads, solo pega
 * tus IDs aquí abajo (ej. 'G-XXXXXXXXXX' o '123456789012345') y se activarán
 * automáticamente todos los eventos de clic a WhatsApp, descarga de PDF y demos.
 */
(function () {
  const ANALYTICS_CONFIG = {
    GA4_MEASUREMENT_ID: '', // Ejemplo: 'G-XXXXXXXXXX'
    META_PIXEL_ID: ''       // Ejemplo: '123456789012345'
  };

  // 1. Inicializar Google Analytics 4 si hay ID configurado
  if (ANALYTICS_CONFIG.GA4_MEASUREMENT_ID) {
    const s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + ANALYTICS_CONFIG.GA4_MEASUREMENT_ID;
    document.head.appendChild(s);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ANALYTICS_CONFIG.GA4_MEASUREMENT_ID);
  }

  // 2. Inicializar Meta Pixel (Facebook / Instagram Ads) si hay ID configurado
  if (ANALYTICS_CONFIG.META_PIXEL_ID) {
    !(function (f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function () {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', ANALYTICS_CONFIG.META_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  // Función auxiliar para disparar eventos a GA4 y Meta Pixel sin errores
  function trackCommercialEvent(eventName, metaStandardEvent, params) {
    const payload = params || {};
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, payload);
    }
    if (typeof window.fbq === 'function') {
      if (metaStandardEvent) {
        window.fbq('track', metaStandardEvent, payload);
      } else {
        window.fbq('trackCustom', eventName, payload);
      }
    }
  }

  window.trackCommercialEvent = trackCommercialEvent;

  // 3. Vincular eventos automáticos de conversión en toda la página
  document.addEventListener('DOMContentLoaded', () => {
    // Clics a cualquier liga de WhatsApp (Botón flotante, barra superior, footer)
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href*="wa.me"]');
      if (link) {
        trackCommercialEvent('whatsapp_contact_click', 'Contact', {
          location: link.classList.contains('wa-floating-btn') ? 'floating_button' : 'page_link'
        });
      }
    });

    // Botón de enviar cotización personalizada por WhatsApp
    const holoWaBtn = document.getElementById('holoWaBtn');
    if (holoWaBtn) {
      holoWaBtn.addEventListener('click', () => {
        const sel = document.getElementById('holoSelectPlatform');
        const activePlan = document.querySelector('#holoPlanGrid .holo-plan-card.active');
        trackCommercialEvent('quote_whatsapp_submit', 'Lead', {
          platform_id: sel ? sel.value : 'unknown',
          plan_mode: activePlan ? activePlan.getAttribute('data-plan') : 'renta'
        });
      });
    }

    // Botón de descargar cotización formal en PDF
    const holoPdfBtn = document.getElementById('holoPdfBtn');
    if (holoPdfBtn) {
      holoPdfBtn.addEventListener('click', () => {
        const sel = document.getElementById('holoSelectPlatform');
        const activePlan = document.querySelector('#holoPlanGrid .holo-plan-card.active');
        trackCommercialEvent('quote_pdf_download', 'InitiateCheckout', {
          platform_id: sel ? sel.value : 'unknown',
          plan_mode: activePlan ? activePlan.getAttribute('data-plan') : 'renta'
        });
      });
    }
  });
})();
