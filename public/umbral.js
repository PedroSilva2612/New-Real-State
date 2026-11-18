// The threshold hero: an intro that turns the drawing into the house, then a scroll walk through the door.
// Only transform, opacity, clip-path and stroke-dashoffset move. Any scroll, key or touch during the intro
// finishes it at once, so the visitor is never made to wait.
const root = document.querySelector('[data-umbral]');
const html = document.documentElement;
const calm = matchMedia('(prefers-reduced-motion: reduce)');

if (root) {
  const stage = root.querySelector('.umbral__stage');
  const media = root.querySelector('[data-umbral-media]');
  const img = root.querySelector('.umbral__img');
  const plan = root.querySelector('.umbral__plan');
  const groups = [...root.querySelectorAll('.umbral__g')];
  const shade = root.querySelector('.umbral__shade');
  const lines = [...root.querySelectorAll('.umbral__line > span')];
  const rest = [...root.querySelectorAll('.umbral__lead, .umbral__facts')];
  const pasa = root.querySelector('.umbral__pasa');
  const fade = root.querySelector('.umbral__fade');

  const EASE_OUT = 'cubic-bezier(0.23, 1, 0.32, 1)';
  const EASE_IN_OUT = 'cubic-bezier(0.77, 0, 0.175, 1)';
  const DRAW = 'cubic-bezier(0.65, 0, 0.35, 1)';

  // ---- intro
  const anims = [];
  const done = () => html.classList.add('umbral-done');
  const play = () => {
    const run = (el, frames, opts) => { const a = el.animate(frames, { fill: 'both', ...opts }); anims.push(a); return a; };
    // 1. the elevation draws itself, ground first, then the structure, the openings, the stair, the dimensions
    groups.forEach((g, i) => {
      [...g.querySelectorAll('path')].forEach((p, j) => run(p, [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }],
        { duration: 820, delay: 120 + i * 170 + j * 26, easing: DRAW }));
      g.querySelectorAll('text').forEach(t => run(t, [{ opacity: 0 }, { opacity: 1 }], { duration: 300, delay: 120 + i * 170 + 500, easing: 'ease' }));
    });
    // 2. the photograph develops under the drawing, from the ground up, settling from a slight zoom
    run(img, [{ clipPath: 'inset(100% 0 0 0)', transform: 'scale(1.08)' }, { clipPath: 'inset(0% 0 0 0)', transform: 'scale(1)' }],
      { duration: 1250, delay: 1150, easing: EASE_IN_OUT });
    // the drawing hands over: it turns white on the photograph, then lets go
    run(plan, [{ opacity: 1 }, { opacity: 1, offset: .35 }, { opacity: 0 }], { duration: 1300, delay: 1350, easing: 'ease' });
    groups.forEach(g => g.querySelectorAll('path').forEach(p => run(p, [{ stroke: getComputedStyle(p).stroke }, { stroke: '#ffffff' }],
      { duration: 700, delay: 1450, easing: 'ease' })));
    // 3. the words: the shade, the headline out of its masks, then the lead, the buttons and the facts
    run(shade, [{ opacity: 0 }, { opacity: 1 }], { duration: 700, delay: 2000, easing: 'ease' });
    lines.forEach((l, i) => run(l, [{ transform: 'translateY(105%)' }, { transform: 'translateY(0)' }],
      { duration: 900, delay: 2100 + i * 90, easing: EASE_OUT }));
    rest.forEach((el, i) => run(el, [{ opacity: 0, transform: 'translateY(12px)' }, { opacity: 1, transform: 'none' }],
      { duration: 600, delay: 2400 + i * 110, easing: EASE_OUT }));
    Promise.all(anims.map(a => a.finished)).then(finish, finish);
  };
  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    anims.forEach(a => { try { a.finish(); } catch {} });
    done();
    anims.forEach(a => { try { a.cancel(); } catch {} });
    off();
  };
  const skip = () => finish();
  const off = () => ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(t => removeEventListener(t, skip));

  if (html.classList.contains('umbral-intro') && !calm.matches && !html.classList.contains('umbral-done') && scrollY < 40) {
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(t => addEventListener(t, skip, { passive: true }));
    play();
  } else {
    done();
  }

  // ---- the walk through the door, scrubbed to the scroll inside the hero's own two screens
  // the zoom aims at the open ground floor: (385, 372) in the photograph's 1000 x 667 coordinates
  const aim = () => {
    const w = media.clientWidth, h = media.clientHeight;
    const s = Math.max(w / 1000, h / 667);
    const ox = (w - 1000 * s) / 2 + 385 * s, oy = (h - 667 * s) / 2 + 372 * s;
    media.style.setProperty('--umbral-ox', `${ox}px`);
    media.style.setProperty('--umbral-oy', `${oy}px`);
  };
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const span = (p, a, b) => clamp((p - a) / (b - a));
  const ease = t => 1 - Math.pow(1 - t, 3);
  const copy = root.querySelector('.umbral__copy');
  const head = root.querySelector('.umbral__copy h1');
  let ticking = false;
  const draw = () => {
    ticking = false;
    if (calm.matches) return;
    const travel = root.offsetHeight - innerHeight;
    if (travel <= 0) return;
    const p = clamp((scrollY - root.offsetTop) / travel);
    const z = ease(span(p, 0, .82));
    media.style.transform = `scale(${1 + z * 2.6})`;
    // the headline parts like a pair of doors, the rest steps back
    const open = ease(span(p, 0, .4));
    const ls = head.querySelectorAll('.umbral__line');
    if (ls[0]) ls[0].style.transform = `translateX(${-open * 18}vw)`;
    if (ls[1]) ls[1].style.transform = `translateX(${open * 18}vw)`;
    copy.style.opacity = String(1 - span(p, .04, .34));
    shade.style.opacity = String(1 - span(p, .1, .45));
    // the line arrives in the room and stays on the stone, so the tour's heading follows it up the screen
    const inP = span(p, .36, .52);
    pasa.style.opacity = String(inP);
    pasa.style.transform = `translate(-50%, calc(-50% + ${(1 - inP) * 16}px))`;
    fade.style.opacity = String(span(p, .72, .94));
  };
  const request = () => { if (!ticking) { ticking = true; requestAnimationFrame(draw); } };
  aim();
  draw();
  addEventListener('scroll', request, { passive: true });
  addEventListener('resize', () => { aim(); request(); });
  calm.addEventListener?.('change', () => { media.style.transform = ''; copy.style.opacity = ''; shade.style.opacity = ''; fade.style.opacity = ''; request(); });
}
