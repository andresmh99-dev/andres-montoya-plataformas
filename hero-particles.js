/* AM Kortex · portada de partículas
 * Una figura de partículas cambia entre los 3 giros (calendario, celular con pedidos y globo con rutas)
 * sobre un piso de ondas. Las tarjetas .kx-giro la controlan al pasar el mouse.
 * Requiere three.js r128 (cargado antes con defer). Sin WebGL, la portada queda con un fondo fijo.
 */
(function () {
  const canvas = document.getElementById('kxScene');
  const hero = canvas && canvas.closest('.kx-hero');
  if (!canvas || !hero) return;

  const label = document.getElementById('kxNowLabel');
  const nowPill = hero.querySelector('.kx-now');
  const cards = Array.from(hero.querySelectorAll('.kx-giro'));
  const NAMES = ['Citas y agendas', 'Comercios, clubes y escuelas', 'Empresas y logística'];
  const reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let renderer;
  try {
    if (!window.THREE) throw new Error('three.js no cargó');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: 'high-performance' });
  } catch (e) {
    document.documentElement.classList.add('kx-no-webgl');
    return;
  }

  const small = () => window.innerWidth < 980;
  const N = small() ? 4200 : 9000;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.35, 7.2);
  camera.lookAt(0, -0.25, 0);

  // Textura redonda y suave para cada partícula
  function dotTexture() {
    const c = document.createElement('canvas');
    c.width = c.height = 64;
    const g = c.getContext('2d');
    const grd = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    grd.addColorStop(0, 'rgba(255,255,255,1)');
    grd.addColorStop(0.35, 'rgba(255,255,255,0.55)');
    grd.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = grd;
    g.fillRect(0, 0, 64, 64);
    return new THREE.CanvasTexture(c);
  }
  const DOT = dotTexture();

  // ---------- figuras (nubes de puntos)
  const R = Math.random;
  const jitter = (s) => (R() - 0.5) * s;

  function boxSurface(out, i, w, h, d) {
    const aXY = w * h, aXZ = w * d, aYZ = h * d, tot = 2 * (aXY + aXZ + aYZ);
    let r = R() * tot, x, y, z;
    if ((r -= 2 * aXY) < 0) { x = jitter(w); y = jitter(h); z = (R() < 0.5 ? -1 : 1) * d / 2; }
    else if ((r -= 2 * aXZ) < 0) { x = jitter(w); z = jitter(d); y = (R() < 0.5 ? -1 : 1) * h / 2; }
    else { y = jitter(h); z = jitter(d); x = (R() < 0.5 ? -1 : 1) * w / 2; }
    out[i * 3] = x; out[i * 3 + 1] = y; out[i * 3 + 2] = z;
  }
  function rectOutline(out, i, cx, cy, z, w, h, t) {
    const per = 2 * (w + h);
    let s = R() * per, x, y;
    if (s < w) { x = cx - w / 2 + s; y = cy + h / 2; }
    else if ((s -= w) < h) { x = cx + w / 2; y = cy + h / 2 - s; }
    else if ((s -= h) < w) { x = cx + w / 2 - s; y = cy - h / 2; }
    else { s -= w; x = cx - w / 2; y = cy - h / 2 + s; }
    out[i * 3] = x + jitter(t); out[i * 3 + 1] = y + jitter(t); out[i * 3 + 2] = z + jitter(t);
  }
  function fillRect(out, i, cx, cy, z, w, h) {
    out[i * 3] = cx + jitter(w); out[i * 3 + 1] = cy + jitter(h); out[i * 3 + 2] = z + jitter(0.03);
  }

  // Citas: calendario con argollas y un día marcado
  function calendar(n) {
    const o = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const k = R();
      if (k < 0.34) boxSurface(o, i, 2.5, 2.5, 0.22);
      else if (k < 0.44) fillRect(o, i, 0, 0.98, 0.13, 2.5, 0.5);
      else if (k < 0.5) {
        const side = R() < 0.5 ? -0.7 : 0.7, a = R() * Math.PI * 2;
        o[i * 3] = side + Math.cos(a) * 0.12; o[i * 3 + 1] = 1.32 + Math.sin(a) * 0.22; o[i * 3 + 2] = Math.sin(a) * 0.12;
      } else if (k < 0.92) {
        const c = Math.floor(R() * 5), r = Math.floor(R() * 4);
        rectOutline(o, i, -0.96 + c * 0.48, 0.42 - r * 0.46, 0.13, 0.36, 0.34, 0.025);
      } else fillRect(o, i, -0.96 + 3 * 0.48, 0.42 - 0.46, 0.16, 0.34, 0.32);
    }
    return o;
  }
  // Comercios: celular con mensajes de pedido
  function phone(n) {
    const o = new Float32Array(n * 3);
    const bubbles = [[-0.95, 0.75, 0.75, 1.0, 0.36], [0.95, 0.1, 0.75, 0.9, 0.36], [-0.9, -0.6, 0.75, 1.15, 0.4]];
    for (let i = 0; i < n; i++) {
      const k = R();
      if (k < 0.5) boxSurface(o, i, 1.35, 2.7, 0.16);
      else if (k < 0.62) rectOutline(o, i, 0, 0, 0.09, 1.15, 2.3, 0.02);
      else if (k < 0.66) fillRect(o, i, 0, 1.2, 0.1, 0.32, 0.05);
      else {
        const b = bubbles[Math.floor(R() * bubbles.length)];
        if (R() < 0.55) rectOutline(o, i, b[0], b[1], b[2], b[3], b[4], 0.025);
        else {
          const line = Math.floor(R() * 2);
          fillRect(o, i, b[0] - 0.08, b[1] + 0.07 - line * 0.14, b[2], b[3] * (line ? 0.5 : 0.72), 0.03);
        }
      }
    }
    return o;
  }
  // Logística: globo con rutas entre ciudades
  function globe(n) {
    const o = new Float32Array(n * 3);
    const rad = 1.3;
    const toVec = (lat, lon, r) => [r * Math.cos(lat) * Math.sin(lon), r * Math.sin(lat), r * Math.cos(lat) * Math.cos(lon)];
    const routes = [[[0.33, -0.35], [0.5, 0.55]], [[0.33, -0.35], [-0.2, 0.25]], [[0.5, 0.55], [0.05, 1.1]], [[0.33, -0.35], [0.62, -0.95]]];
    for (let i = 0; i < n; i++) {
      const k = R();
      if (k < 0.62) {
        const u = R() * 2 - 1, th = R() * Math.PI * 2, s = Math.sqrt(1 - u * u);
        o[i * 3] = rad * s * Math.cos(th); o[i * 3 + 1] = rad * u; o[i * 3 + 2] = rad * s * Math.sin(th);
      } else if (k < 0.72) {
        const a = R() * Math.PI * 2;
        if (R() < 0.5) o.set(toVec(a, Math.floor(R() * 6) * Math.PI / 6, rad * 1.004), i * 3);
        else o.set(toVec((Math.floor(R() * 5) - 2) * 0.45, a, rad * 1.004), i * 3);
      } else {
        const rt = routes[Math.floor(R() * routes.length)], t = R();
        const lat = rt[0][0] + (rt[1][0] - rt[0][0]) * t, lon = rt[0][1] + (rt[1][1] - rt[0][1]) * t;
        const v = toVec(lat, lon, rad + Math.sin(t * Math.PI) * 0.45 + 0.02);
        o[i * 3] = v[0] + jitter(0.02); o[i * 3 + 1] = v[1] + jitter(0.02); o[i * 3 + 2] = v[2] + jitter(0.02);
      }
    }
    return o;
  }
  const SHAPES = [calendar(N), phone(N), globe(N)];

  // ---------- partículas de la figura
  const pos = new Float32Array(N * 3);
  const from = new Float32Array(N * 3);
  const delay = new Float32Array(N);
  const phase = new Float32Array(N);
  const swirl = new Float32Array(N * 3);
  const col = new Float32Array(N * 3);
  const cA = new THREE.Color('#34d399'), cB = new THREE.Color('#5eead4'), cW = new THREE.Color('#e8fff6');
  for (let i = 0; i < N; i++) {
    const u = R() * 2 - 1, th = R() * Math.PI * 2, s = Math.sqrt(1 - u * u), r = 3 + R() * 3;
    pos[i * 3] = r * s * Math.cos(th); pos[i * 3 + 1] = r * u; pos[i * 3 + 2] = r * s * Math.sin(th);
    delay[i] = R() * 0.35; phase[i] = R() * Math.PI * 2;
    swirl[i * 3] = jitter(1.6); swirl[i * 3 + 1] = jitter(1.6); swirl[i * 3 + 2] = jitter(1.6);
    const c = R() < 0.06 ? cW : cA.clone().lerp(cB, R());
    col[i * 3] = c.r; col[i * 3 + 1] = c.g; col[i * 3 + 2] = c.b;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
  const figure = new THREE.Points(geo, new THREE.PointsMaterial({
    size: small() ? 0.05 : 0.042, map: DOT, vertexColors: true, transparent: true,
    depthWrite: false, blending: THREE.AdditiveBlending, opacity: 0.95, sizeAttenuation: true
  }));
  const group = new THREE.Group();
  group.add(figure);
  scene.add(group);

  // ---------- piso de ondas
  const G = small() ? 70 : 120, SPAN = 16;
  const fpos = new Float32Array(G * G * 3), fcol = new Float32Array(G * G * 3), fbase = new Float32Array(G * G * 2);
  for (let a = 0, i = 0; a < G; a++) for (let b = 0; b < G; b++, i++) {
    const x = (a / (G - 1) - 0.5) * SPAN, z = (b / (G - 1) - 0.5) * SPAN;
    fbase[i * 2] = x; fbase[i * 2 + 1] = z;
    fpos[i * 3] = x; fpos[i * 3 + 1] = -1.95; fpos[i * 3 + 2] = z;
  }
  const fgeo = new THREE.BufferGeometry();
  fgeo.setAttribute('position', new THREE.BufferAttribute(fpos, 3));
  fgeo.setAttribute('color', new THREE.BufferAttribute(fcol, 3));
  const floor = new THREE.Points(fgeo, new THREE.PointsMaterial({
    size: 0.05, map: DOT, vertexColors: true, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true
  }));
  scene.add(floor);

  // ---------- estrellas lejanas
  const S = small() ? 300 : 700, spos = new Float32Array(S * 3);
  for (let i = 0; i < S; i++) { spos[i * 3] = jitter(40); spos[i * 3 + 1] = jitter(22) + 4; spos[i * 3 + 2] = -8 - R() * 20; }
  const sgeo = new THREE.BufferGeometry();
  sgeo.setAttribute('position', new THREE.BufferAttribute(spos, 3));
  scene.add(new THREE.Points(sgeo, new THREE.PointsMaterial({ size: 0.06, map: DOT, color: 0x9fb4c8, transparent: true, opacity: 0.55, depthWrite: false })));

  // ---------- cambio de figura
  const clock = new THREE.Clock();
  let current = 0, morphStart = -10;
  const MORPH = reduced ? 0.001 : 2.1;
  function morphTo(k) {
    current = k;
    from.set(pos);
    morphStart = clock.getElapsedTime();
    if (label) label.textContent = NAMES[k];
    cards.forEach((c) => c.classList.toggle('is-active', Number(c.dataset.shape) === k));
  }

  let hoverLock = false, lastAuto = 0;
  cards.forEach((c) => {
    const k = Number(c.dataset.shape);
    c.addEventListener('mouseenter', () => { hoverLock = true; if (k !== current) morphTo(k); });
    c.addEventListener('focus', () => { if (k !== current) morphTo(k); });
    c.addEventListener('mouseleave', () => { hoverLock = false; lastAuto = clock.getElapsedTime(); });
  });

  // ---------- mouse
  let mx = 0, my = 0;
  window.addEventListener('pointermove', (e) => {
    mx = (e.clientX / window.innerWidth - 0.5) * 2;
    my = (e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  // ---------- tamaño y posición según pantalla
  function pixelToWorldY(py, h) {
    const v = new THREE.Vector3(0, 1 - 2 * (py / h), 0.5).unproject(camera);
    const dir = v.sub(camera.position).normalize();
    return camera.position.y + dir.y * (-camera.position.z / dir.z);
  }
  function resize() {
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (w < 980 && nowPill) {
      // centra la figura en el espacio libre arriba del indicador de giro
      const heroTop = hero.getBoundingClientRect().top;
      const pillTop = nowPill.getBoundingClientRect().top - heroTop;
      const gap = parseFloat(getComputedStyle(nowPill).marginTop) || 240;
      const topY = pixelToWorldY(pillTop - gap + 10, h), botY = pixelToWorldY(pillTop - 6, h);
      group.position.set(0, (topY + botY) / 2, 0);
      group.scale.setScalar(Math.min(1, (topY - botY) / 3.3));
    } else {
      group.position.set(1.45, -0.12, 0);
      group.scale.setScalar(0.9);
    }
    floor.position.y = group.position.y + 0.25;
  }
  window.addEventListener('resize', resize);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(resize);

  // ---------- pausa cuando no se ve
  let visible = true;
  if ('IntersectionObserver' in window) new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(hero);

  const ease = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);
  morphTo(0);
  resize();

  function frame() {
    requestAnimationFrame(frame);
    if (!visible || document.hidden) return;
    const t = clock.getElapsedTime();

    if (!reduced && !hoverLock && t - morphStart > 6 && t - lastAuto > 2) morphTo((current + 1) % 3);

    const target = SHAPES[current];
    const raw = (t - morphStart) / MORPH;
    for (let i = 0; i < N; i++) {
      const p = Math.min(1, Math.max(0, (raw - delay[i]) / 0.65));
      const e = ease(p), lift = Math.sin(p * Math.PI);
      const j = i * 3, sh = reduced ? 0 : Math.sin(t * 1.3 + phase[i]) * 0.012;
      pos[j] = from[j] + (target[j] - from[j]) * e + swirl[j] * lift + sh;
      pos[j + 1] = from[j + 1] + (target[j + 1] - from[j + 1]) * e + swirl[j + 1] * lift + sh;
      pos[j + 2] = from[j + 2] + (target[j + 2] - from[j + 2]) * e + swirl[j + 2] * lift;
    }
    geo.attributes.position.needsUpdate = true;

    const cx = group.position.x, amp = reduced ? 0 : 0.11;
    for (let i = 0; i < G * G; i++) {
      const x = fbase[i * 2] - cx, z = fbase[i * 2 + 1];
      const d = Math.sqrt(x * x + z * z);
      const wave = Math.sin(d * 2.2 - t * 1.8);
      fpos[i * 3 + 1] = -1.95 + wave * amp * 1.4 * Math.exp(-d * 0.2);
      const glow = Math.min(1, Math.max(0, 0.25 + 0.75 * (wave * 0.5 + 0.5)) * Math.exp(-d * 0.24) * 1.5);
      fcol[i * 3] = 0.12 * glow; fcol[i * 3 + 1] = 0.85 * glow; fcol[i * 3 + 2] = 0.75 * glow;
    }
    fgeo.attributes.position.needsUpdate = true;
    fgeo.attributes.color.needsUpdate = true;

    const spin = reduced ? 0 : t * 0.18;
    group.rotation.y += ((Math.sin(spin) * 0.55 + mx * 0.35) - group.rotation.y) * 0.05;
    group.rotation.x += ((-0.08 + my * 0.12) - group.rotation.x) * 0.05;
    if (!reduced) figure.position.y = Math.sin(t * 0.8) * 0.06;

    renderer.render(scene, camera);
  }
  frame();
})();
