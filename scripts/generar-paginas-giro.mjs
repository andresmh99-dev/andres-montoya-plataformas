#!/usr/bin/env node
/*
 * Genera las páginas por giro (HTML estático, bueno para Google) a partir de los
 * mismos datos del catálogo: PLATFORMS en app.js, capturas de visual-fx.js y la
 * agrupación GROUP_MAP / TIER_INFO de index.html.
 *
 * Uso (desde la raíz del repo):  node scripts/generar-paginas-giro.mjs
 * Vuelve a correrlo cada vez que cambien precios, textos o sistemas del catálogo.
 */
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE = 'https://amkortex.com/';
const WA = '524431433732';
const EMAIL = 'contacto@amkortex.com';

// ---------------------------------------------------------------- datos del catálogo
function loadPlatforms() {
  const listeners = [];
  const doc = {
    addEventListener: (ev, fn) => { if (ev === 'DOMContentLoaded') listeners.push(fn); },
    getElementById: () => null,
    querySelector: () => null,
    querySelectorAll: () => [],
    body: { dataset: { executiveMode: 'true' } },
    documentElement: { setAttribute() {} }
  };
  const win = { matchMedia: () => ({ matches: true }), addEventListener() {} };
  win.window = win;
  const ctx = vm.createContext({ window: win, document: doc, console, localStorage: { getItem: () => null, setItem() {} } });
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'app.js'), 'utf8') + '\n;window.PLATFORMS = PLATFORMS;', ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, 'visual-fx.js'), 'utf8'), ctx);
  listeners.forEach((fn) => fn());
  return ctx.window.PLATFORMS;
}

function loadFromIndex() {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const grab = (name) => {
    const m = html.match(new RegExp(`const ${name} = (\\{[\\s\\S]*?\\}|\\[[\\s\\S]*?\\]);`));
    if (!m) throw new Error(`No encontré ${name} en index.html`);
    return vm.runInNewContext(`(${m[1]})`);
  };
  const faq = html.match(/<!-- FAQ-OBJECIONES:INICIO[^>]*-->([\s\S]*?)<!-- FAQ-OBJECIONES:FIN -->/);
  if (!faq) throw new Error('No encontré el bloque FAQ-OBJECIONES en index.html');
  return {
    GROUP_MAP: grab('GROUP_MAP'),
    TIER_INFO: grab('TIER_INFO'),
    TIER_SHORT_NAMES: grab('TIER_SHORT_NAMES'),
    FAQ_HTML: faq[1].trim()
  };
}

// ---------------------------------------------------------------- páginas
const GIROS = [
  {
    group: 'citas',
    file: 'sistemas-de-citas-y-agendas.html',
    label: 'Citas y agendas',
    title: 'Sistema de citas y agenda con WhatsApp para spas y consultorios | AM Kortex',
    description:
      'Agenda en línea con WhatsApp para spas, salones de belleza, psicólogos, médicos y torres de consultorios. Sistemas ya operando en Morelia y Querétaro, con tu marca en 1 a 3 semanas. Desde $1,190/mes + IVA.',
    h1: 'Agenda en línea y citas por WhatsApp para tu spa o consultorio',
    lede:
      'Tus clientes o pacientes reservan solos, el sistema evita citas encimadas y manda recordatorios por WhatsApp. Son sistemas que ya operan con negocios reales; los adaptamos con tu marca, horarios y precios.',
    wa: 'Hola Andrés, vi la página de sistemas de citas y agendas de AM Kortex y quiero agendar una demo de 15 minutos.'
  },
  {
    group: 'comercios',
    file: 'sistemas-para-comercios-clubes-y-escuelas.html',
    label: 'Comercios, clubes y escuelas',
    title: 'Menú digital para restaurantes, sistema para clubes deportivos y escuelas | AM Kortex',
    description:
      'Menú digital con pedidos directos a WhatsApp sin comisiones, sistema de torneos y ranking para clubes deportivos y organizador escolar. Con tu marca en 5 días a 3 semanas, desde $790/mes + IVA.',
    h1: 'Menú digital, torneos y organización escolar con tu marca',
    lede:
      'Pedidos directos a tu WhatsApp sin pagar comisión a las apps, tablas de torneos que se calculan solas y avisos escolares que no se pierden en el chat. Sistemas probados, listos para personalizar.',
    wa: 'Hola Andrés, vi la página de sistemas para comercios, clubes y escuelas de AM Kortex y quiero agendar una demo de 15 minutos.'
  },
  {
    group: 'empresas',
    file: 'sistemas-para-empresas-y-logistica.html',
    label: 'Empresas y logística',
    title: 'Sistema de logística, cotizador en línea y páginas B2B | AM Kortex',
    description:
      'Control de embarques con rastreo en vivo, cotizador automático con tu margen y páginas comerciales que cotizan solas. Sistemas operando en Morelia y Laredo, con tu marca en 5 días a 5 semanas.',
    h1: 'Control de embarques, cotizador automático y página comercial para tu empresa',
    lede:
      'Deja el Excel para seguir entregas, cotizar y cobrar. Rastreo en vivo para tus clientes, cotizaciones en segundos con tu margen y una página que convierte visitas en prospectos.',
    wa: 'Hola Andrés, vi la página de sistemas para empresas y logística de AM Kortex y quiero agendar una demo de 15 minutos.'
  }
];

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
const fmt = (n) => Number(n).toLocaleString('es-MX');
const waLink = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;
const shortName = (p, names) => names[p.id] || p.name.split('·')[0].trim();

const WA_ICON =
  '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>';

function systemCard(p) {
  const live = p.liveUrl || p.livePreviewUrl;
  const host = (p.displayDomain || '').replace(/^Demo · /, '');
  return `
        <article class="giro-system" id="${esc(p.id)}">
          <a class="giro-shot" href="${esc(live)}" target="_blank" rel="noopener" aria-label="Abrir ${esc(p.name)} en una pestaña nueva">
            <img src="${esc(p.screenshot)}" width="1600" height="1000" loading="lazy" alt="Pantalla real de ${esc(p.name)}" />
            <span class="giro-shot-cap"><span>${p.inDevelopment ? 'Demo en desarrollo' : 'Ver sitio en vivo'}</span><span class="domain-mono">${esc(host)} ↗</span></span>
          </a>
          <div>
            <div class="giro-meta">
              <span>${esc(p.sectorLabel)}</span>
              <span class="giro-status ${p.inDevelopment ? 'is-dev' : ''}">${esc(p.statusLabel)}</span>
            </div>
            <h3>${esc(p.name)}</h3>
            <p class="giro-problem"><strong>Problema:</strong> ${esc(p.problemSolved)}</p>
            <p class="giro-pitch">${esc(p.shortPitch || p.tagline)}</p>
            <ul class="giro-features">
              ${(p.highlights || []).map((h) => `<li>${esc(h)}</li>`).join('\n              ')}
            </ul>
            <p class="giro-ideal"><strong>Ideal para:</strong> ${esc(p.idealFor)}</p>
            <div class="sys-price-bar">
              <div>
                <span class="price-inline-sub">Plan Mensual</span>
                <strong class="price-inline-val" style="color:var(--color-ink-emerald);">$${fmt(p.monthlyFee)}/mes</strong>
                <span class="price-inline-sub">+ $${fmt(p.setupFee)} activación · + IVA</span>
              </div>
              <div>
                <span class="price-inline-sub">Pago Único</span>
                <strong class="price-inline-val">$${fmt(p.basePrice)} MXN</strong>
                <span class="price-inline-sub">+ IVA · entrega en ${esc(p.timeEstimate)}</span>
              </div>
            </div>
            <div class="sys-actions">
              <a class="btn btn-secondary" style="flex:1;" href="${esc(live)}" target="_blank" rel="noopener">${p.inDevelopment ? 'Ver demo' : 'Ver en vivo'} ↗</a>
              <a class="btn btn-primary" style="flex:1;" href="./?sistema=${esc(p.id)}#cotizador-holo">Cotizar este sistema</a>
            </div>
          </div>
        </article>`;
}

function tierCards(list, allPlatforms, TIER_INFO, names) {
  const prices = [...new Set(allPlatforms.map((p) => p.basePrice))].sort((a, b) => a - b);
  const byTier = new Map();
  list.forEach((p) => {
    const i = prices.indexOf(p.basePrice);
    if (!byTier.has(i)) byTier.set(i, []);
    byTier.get(i).push(p);
  });
  return [...byTier.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([i, ps]) => {
      const p0 = ps[0];
      const info = TIER_INFO[i] || { name: `Escalón ${i + 1}`, fit: '' };
      return `
          <article class="tier-card">
            <div>
              <span class="tier-num">Escalón ${i + 1}</span>
              <h3 class="tier-name">${esc(info.name)}</h3>
              <p class="tier-fit">${esc(info.fit)}</p>
            </div>
            <div class="tier-price">
              <span class="tier-price-main">$${fmt(p0.monthlyFee)}<small> /mes</small></span>
              <span class="tier-price-sub">+ $${fmt(p0.setupFee)} de activación</span>
            </div>
            <div class="tier-alt">
              o <strong>$${fmt(p0.basePrice)}</strong> en Pago Único
              <span>Póliza opcional desde el 4° mes: $${fmt(p0.polizaFee)}/mes</span>
            </div>
            <ul class="tier-systems" aria-label="Sistemas de este escalón en este giro">
              ${ps.map((p) => `<li><a href="#${esc(p.id)}" class="tier-system-link">${esc(shortName(p, names))}</a></li>`).join('\n              ')}
            </ul>
            <a class="btn btn-secondary" href="./?sistema=${esc(p0.id)}#cotizador-holo">Cotizar este escalón</a>
          </article>`;
    })
    .join('');
}

function page(g, list, all, idx) {
  const { TIER_INFO, TIER_SHORT_NAMES } = idx;
  const url = SITE + g.file;
  const others = GIROS.filter((o) => o.file !== g.file);
  const pains = [...new Set(list.map((p) => p.problemSolved).filter(Boolean))];
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'AM Kortex', item: SITE },
      { '@type': 'ListItem', position: 2, name: g.label, item: url }
    ]
  };
  return `<!DOCTYPE html>
<!-- Generado por scripts/generar-paginas-giro.mjs a partir de app.js e index.html. No editar a mano: cambia los datos y vuelve a correr el script. -->
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <!-- Sitio anterior en GitHub Pages: manda cada visita a la misma página en amkortex.com -->
  <script>
    if (location.hostname === 'andresmh99-dev.github.io') {
      location.replace('https://amkortex.com' + location.pathname.replace(/^\\/andres-montoya-plataformas/, '') + location.search + location.hash);
    }
  </script>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
  <title>${esc(g.title)}</title>
  <meta name="description" content="${esc(g.description)}" />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content="#080d16" />
  <link rel="canonical" href="${url}" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_MX" />
  <meta property="og:site_name" content="AM Kortex" />
  <meta property="og:url" content="${url}" />
  <meta property="og:title" content="${esc(g.title)}" />
  <meta property="og:description" content="${esc(g.description)}" />
  <meta property="og:image" content="${SITE}assets/og-image.jpg?v=2" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="${SITE}assets/og-image.jpg?v=2" />
  <script type="application/ld+json">${JSON.stringify(ld)}</script>
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' rx='14' fill='%230d1522'/%3E%3Crect x='2' y='2' width='60' height='60' rx='12' fill='none' stroke='%2310b981' stroke-width='3'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' fill='%23edf3f8' font-family='sans-serif' font-weight='800' font-size='25'%3EAM%3C/text%3E%3C/svg%3E" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="site.css?v=3" />
  <script src="analytics.js?v=1" defer></script>
</head>
<body>
  <header class="b2b-nav">
    <div class="container b2b-nav-inner">
      <a href="./" class="brand-lockup" aria-label="AM Kortex, ir al inicio">
        <span class="brand-square">AM</span>
        <span>
          <span class="brand-name">AM Kortex</span>
          <span class="brand-role">por Andrés Montoya Hernández</span>
        </span>
      </a>
      <nav class="b2b-nav-links" aria-label="Menú principal">
        <a href="./#galeria-3d" class="b2b-nav-link">Todos los sistemas</a>
        <a href="#precios" class="b2b-nav-link">Precios</a>
        <a href="./#como-trabajamos" class="b2b-nav-link">Implementación</a>
        <a href="./#cotizador-holo" class="b2b-nav-link">Cotizador PDF</a>
      </nav>
      <a href="${esc(waLink(g.wa))}" target="_blank" rel="noopener" class="btn btn-primary nav-cta">
        ${WA_ICON} <span>Agendar demo</span>
      </a>
    </div>
  </header>

  <main>
    <section class="giro-hero">
      <div class="container">
        <nav class="giro-crumbs" aria-label="Estás en">
          <a href="./">Inicio</a><span aria-hidden="true">›</span><span>${esc(g.label)}</span>
        </nav>
        <h1 class="hero-h1">${esc(g.h1)}</h1>
        <p class="hero-lede">${esc(g.lede)}</p>
        <div class="hero-cta-group">
          <a href="${esc(waLink(g.wa))}" target="_blank" rel="noopener" class="btn btn-primary">Agenda una demo de 15 min</a>
          <a href="#sistemas" class="btn btn-secondary">Ver los ${list.length} sistemas</a>
        </div>
        <span class="giro-pains-label">Problemas que resuelve:</span>
        <ul class="giro-pains">
          ${pains.map((t) => `<li>${esc(t)}</li>`).join('\n          ')}
        </ul>
      </div>
    </section>

    <section class="catalog-band" id="sistemas">
      <div class="container">
        <div class="section-header-split">
          <h2 class="section-h2">Sistemas que ya operan con clientes reales</h2>
          <p class="section-desc">Abre cada uno en vivo antes de decidir. Lo adaptamos con tu logotipo, colores, precios y tu propio dominio.</p>
        </div>
        <div class="giro-systems">${list.map(systemCard).join('\n')}
        </div>
      </div>
    </section>

    <section class="pricing-band" id="precios">
      <div class="container">
        <div class="section-header-split">
          <h2 class="section-h2">¿Cuánto cuesta?</h2>
          <p class="section-desc">Precio cerrado por escalón. Eliges Plan Mensual o Pago Único, sin sorpresas.</p>
        </div>
        <div class="tier-grid is-compact">${tierCards(list, all, TIER_INFO, TIER_SHORT_NAMES)}
        </div>
        <p class="pricing-note">Precios en MXN + IVA, con factura. Plan Mensual con plazo mínimo de 12 meses y soporte de hasta 2 h/mes (horas adicionales a $500 + IVA). Pago Único: 50% al iniciar y 50% al entregar.</p>
        <p class="giro-others"><a href="./#precios">Ver los 4 escalones →</a></p>
      </div>
    </section>

    <section class="process-band" id="preguntas">
      <div class="container">
        <div class="section-header-split">
          <h2 class="section-h2">Preguntas antes de contratar</h2>
          <p class="section-desc">Lo que más nos preguntan sobre propiedad, datos, WhatsApp y cambios.</p>
        </div>
        <div class="faq-columns">
          ${idx.FAQ_HTML}
        </div>
      </div>
    </section>

    <section class="process-band" style="border-top:1px solid var(--color-line);">
      <div class="container">
        <div class="section-header-split">
          <h2 class="section-h2">Cómo lo implementamos</h2>
          <p class="section-desc">Configuramos la plataforma con tu imagen y capacitamos a tu equipo para que arranques sin fricción.</p>
        </div>
        <div class="process-list">
          <div class="process-step">
            <h3>01. Revisión operativa de 15 minutos</h3>
            <p>Analizamos cómo atiende hoy tu negocio, elegimos el sistema base ideal y definimos reglas, precios y usuarios.</p>
          </div>
          <div class="process-step">
            <h3>02. Personalización con tu marca</h3>
            <p>Configuro logotipo, colores corporativos, catálogos, horarios y conecto tu dominio oficial <code>.com</code> o <code>.mx</code>.</p>
          </div>
          <div class="process-step">
            <h3>03. Capacitación y soporte directo</h3>
            <p>Entregamos funcionando en celular y computadora, capacitamos a tu equipo y quedamos disponibles vía WhatsApp directo.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="giro-cta-band">
      <div class="container">
        <h2 class="section-h2">¿Lo vemos funcionando con tu negocio?</h2>
        <p>En 15 minutos te muestro el sistema en vivo y te digo cuál conviene para tu operación y cuánto costaría con tu marca.</p>
        <div class="hero-cta-group">
          <a href="${esc(waLink(g.wa))}" target="_blank" rel="noopener" class="btn btn-primary">Agenda una demo de 15 min</a>
          <a href="./#cotizador-holo" class="btn btn-secondary">Cotizar en PDF</a>
        </div>
        <p class="giro-others">También: ${others.map((o) => `<a href="${o.file}">${esc(o.label)}</a>`).join(' · ')} · <a href="./">Todos los sistemas</a></p>
      </div>
    </section>
  </main>

  <footer class="b2b-footer">
    <div class="container b2b-footer-inner">
      <div class="footer-brand">
        <strong style="color:var(--color-ink);">AM Kortex</strong>, Sistemas Web y Automatización por Andrés Montoya Hernández
        <span class="footer-meta">Morelia, Michoacán · Atención remota en todo México · Precios en MXN + IVA, con factura</span>
      </div>
      <div class="b2b-footer-links">
        <a href="https://wa.me/${WA}" target="_blank" rel="noopener" style="color:var(--color-ink-emerald);font-weight:700;">WhatsApp +52 443 143 3732</a>
        <a href="mailto:${EMAIL}?subject=${encodeURIComponent('Contacto desde AM Kortex · ' + g.label)}">${EMAIL}</a>
        <a href="aviso-de-privacidad.html">Aviso de Privacidad</a>
      </div>
      <nav class="footer-giros" aria-label="Soluciones por giro">
        ${GIROS.map((o) => `<a href="${o.file}"${o.file === g.file ? ' aria-current="page"' : ''}>${esc(o.label)}</a>`).join('\n        ')}
      </nav>
    </div>
  </footer>

  <a href="${esc(waLink(g.wa))}" target="_blank" rel="noopener" class="wa-dock" aria-label="Contactar por WhatsApp">
    ${WA_ICON}
    <span>WhatsApp 443 143 3732</span>
  </a>
  <script>
    // WhatsApp flotante: aparece cuando los botones de arriba salen de pantalla
    (function () {
      var dock = document.querySelector('.wa-dock');
      var ctas = document.querySelector('.giro-hero .hero-cta-group');
      if (!dock || !ctas || !('IntersectionObserver' in window)) return;
      dock.classList.add('is-hidden');
      new IntersectionObserver(function (entries) {
        dock.classList.toggle('is-hidden', entries[0].isIntersecting);
      }).observe(ctas);
    })();
  </script>
</body>
</html>
`;
}

// ---------------------------------------------------------------- main
const all = loadPlatforms();
const idx = loadFromIndex();
for (const g of GIROS) {
  const list = all.filter((p) => idx.GROUP_MAP[p.id] === g.group);
  if (!list.length) throw new Error(`El giro ${g.group} no tiene sistemas`);
  fs.writeFileSync(path.join(ROOT, g.file), page(g, list, all, idx));
  console.log(`✓ ${g.file} (${list.length} sistemas)`);
}
