# Andrés Montoya — Showroom & Catálogo Comercial de Plataformas Digitales

Página personal y catálogo comercial interactivo diseñado para presentar y vender las **8 plataformas digitales** desarrolladas en la cuenta de GitHub [`@andresmh99-dev`](https://github.com/andresmh99-dev) a **empresas, negocios, clínicas, clubes deportivos, profesionales independientes y familias**.

## 🚀 Plataformas Incluidas (Extraídas de tus Repositorios de GitHub)

### 1. Para Empresas e Industria (B2B / Logística / IA)
- **`control-ops` (InLog · Control-Ops TMS/ERP)** — Demo: <https://control-ops-zeta.vercel.app>
  - Seguimiento de importación/exportación, rutas multiparada (*ruta lechera*) con links de rastreo por parada, lectura y cotejo de BL con IA (Anthropic Claude), copiloto operativo, cartas de instrucciones con firma electrónica pública, prefacturas, cobranza con antigüedad de cartera y alertas de margen.
- **`INLOG` (Cotizador Multicarrier B2B)**
  - Motor de cotizaciones logísticas en tiempo real (FCL, LCL, Terrestre y Aéreo) conectado a SeaRates Logistics Explorer, Maersk, MSC, CMA CGM, DHL, FedEx y Freightos, cálculo automático de margen (`BASE_MARKUP_PCT`), portal de clientes con Magic Link y caché en Redis.
- **`incubeit-landing` (INCUBEIT · Cotizador Comercial & Agencia IA)**
  - Landing ejecutiva de alta conversión con calculadora interactiva de presupuestos en tiempo real y descarga instantánea de cotización en PDF (`jsPDF`).

### 2. Para Negocios, Clínicas, Spas y Clubes Deportivos
- **`Nailroomspa` (Nail Room Spa OS)** — Demo: <https://nailroomspa.vercel.app>
  - Sistema omnicanal (Querétaro y Morelia): Portal web en 5 pasos, Bot de WhatsApp con IA (Anthropic Claude + transcripción de notas de voz con OpenAI Whisper), recepción con agenda drag-and-drop, candados anti-overbooking (`pg_try_advisory_xact_lock`), visitas multi-servicio, caja diaria y anticipos con Mercado Pago.
- **`agenda-fenix` (Agenda Fénix · Coworking Clínico y Renta de Consultorios)** — Demo: <https://agenda-fenix-one.vercel.app>
  - Doble agenda anidada multi-tenant: renta de consultorios por bloque fijo o *per_session* al vuelo con restricción `EXCLUDE USING gist (tstzrange)`, privacidad blindada por RLS para pacientes (fuera de NOM-024 para recepción + derechos ARCO), ledger financiero, paquetes con Mercado Pago y corte mensual automático en PDF.
- **`escalera-britania2` (Escalera Britania · SaaS Deportivo Web + App Móvil)** — Demo: <https://escalera-britania2.vercel.app>
  - Plataforma Web (Next.js) + App Móvil (Expo React Native) probada con 167 jugadores reales y 29 grupos. Standings en vivo con puntuación ponderada por semana, generación automática de grupos round-robin, confirmación cruzada de resultados, ascensos/descensos automáticos y reservas de cancha.

### 3. Para Profesionales Independientes y Familias
- **`PsicoterapiaConductual` (Consultorio Digital PWA)** — Demo: <https://psicoterapia-conductual.vercel.app>
  - PWA móvil instalable en iOS y Android para psicólogos, médicos y terapeutas. Autoagendado público (`/agendar`), turnos partidos, expedientes clínicos con plantillas rápidas (TCC, SOAP, Entrevista), envío de recomendaciones por WhatsApp en 1 toque y cumplimiento **NOM-004-SSA3-2012** con respaldos `.json` en 1 clic.
- **`agenda-familiar` (Family OS · Agenda Escolar y Familiar con IA)** — Demo: <https://agenda-familiar-umber.vercel.app>
  - PWA móvil que transforma circulares escolares, PDFs, fotos y mensajes de WhatsApp en eventos, materiales por llevar y pagos pendientes confirmables y compartidos entre mamá, papá y cuidadores.

---

## 💻 Cómo abrir y usar tu página

1. **Apertura directa:** Haz doble clic sobre [`index.html`](./index.html) para abrirla en cualquier navegador, o sírvela localmente.
2. **Configurar tu WhatsApp y Correo:** En la tarjeta del **Cotizador Instantáneo**, haz clic en **"Configurar mis datos de contacto"** para definir el número de WhatsApp y correo donde recibirás las cotizaciones.
3. **Publicar en Vercel / GitHub Pages:** Sube esta carpeta a un repositorio de GitHub y conéctalo a Vercel (no requiere configuración de compilación).
