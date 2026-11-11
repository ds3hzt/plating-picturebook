/* 도금 그림백과 — 공통 그림 부품 (모든 용어 페이지가 공유)
   모든 함수는 SVG 조각(문자열)을 돌려줍니다. 패널 좌표계는 300 x 230 (가로 x 세로) 입니다.
   S.panel( 조각1 + 조각2 + ... ) 로 한 컷을 완성합니다. */
(function (root) {
  const C = { blue: '#2f8fe0', red: '#d6453d', green: '#1f8a55', gray: '#3b5163', gold: '#f0ad24', navy: '#103858', ink: '#172b3b' };
  // 도금층 색 (금·니켈·구리·아연·크롬·은·주석·팔라듐·로듐·바탕금속·도장)
  const PL = { gold: '#f0c43c', nickel: '#cfd8e0', copper: '#d9824b', zinc: '#a9b8c6', chrome: '#e6eef4', silver: '#eceff2', tin: '#c3cbd3', pd: '#b9bec6', rh: '#dde3e9', base: '#7b8794', paint: '#e2655a' };
  const AR = { blue: 'arrB', red: 'arrR', gray: 'arrK', green: 'arrG' };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const f = n => Math.round(n * 10) / 10;
  const S = { C, PL, esc };

  /* ---- 틀 ---- */
  // 한 컷(300x190). bg: 배경색
  S.panel = (inner, bg = '#eef5fb') => `<svg viewBox="0 0 300 230" role="img" aria-hidden="true"><rect width="300" height="230" fill="${bg}"/>${inner}</svg>`;
  // (예시용) 300x190 기준으로 그린 그림을 가운데에 놓는 틀
  S.panel19 = (inner, bg = '#eef5fb') => S.panel(`<g transform="translate(0 20)">${inner}</g>`, bg);

  /* ---- 글자 ---- */
  // 가운데 정렬 글자. '\n' 으로 줄바꿈. o:{size,fill,weight,anchor,stroke}
  S.text = (x, y, s, o = {}) => {
    const size = o.size || 12, fill = o.fill || C.gray, w = o.weight || 800, anchor = o.anchor || 'middle';
    const lines = String(s).split('\n');
    const st = o.stroke ? ` stroke="${o.stroke}" stroke-width="3" paint-order="stroke"` : '';
    const body = lines.map((l, i) => `<tspan x="${x}" dy="${i ? size * 1.25 : 0}">${esc(l)}</tspan>`).join('');
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" font-weight="${w}" fill="${fill}"${st}>${body}</text>`;
  };
  // 이모지(그림 문자). 크기 size(px)
  S.emoji = (x, y, ch, size = 28) => `<text x="${x}" y="${y}" text-anchor="middle" font-size="${size}">${ch}</text>`;
  // 알약형 이름표. (x,y)=중심. o:{color,fill,size}
  S.tag = (x, y, s, o = {}) => {
    const size = o.size || 11, col = o.color || C.blue, w = Math.max(...String(s).split('\n').map(l => l.length)) * size * 0.98 + 16, n = String(s).split('\n').length, h = size * 1.25 * n + 9;
    return `<rect x="${f(x - w / 2)}" y="${f(y - h / 2)}" width="${f(w)}" height="${f(h)}" rx="${f(Math.min(h / 2, 12))}" fill="${o.fill || '#fff'}" stroke="${col}" stroke-width="1.5"/>` + S.text(x, f(y - h / 2 + size + 3), s, { size, fill: col });
  };

  /* ---- 화살표·표시 ---- */
  // 화살표. color: blue|red|gray|green
  S.arrow = (x1, y1, x2, y2, color = 'blue', w = 2.5) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C[color] || color}" stroke-width="${w}" stroke-linecap="round" marker-end="url(#${AR[color] || 'arrK'})"/>`;
  S.line = (x1, y1, x2, y2, color = '#3b5163', w = 2, dash = '') => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${C[color] || color}" stroke-width="${w}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
  S.ok = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#1f8a55"/><path d="M${x - r * .5} ${y} L${x - r * .1} ${y + r * .4} L${x + r * .55} ${y - r * .4}" fill="none" stroke="#fff" stroke-width="${f(r * .25)}" stroke-linecap="round" stroke-linejoin="round"/>`;
  S.ng = (x, y, r = 11) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#d6453d"/><path d="M${x - r * .45} ${y - r * .45} L${x + r * .45} ${y + r * .45} M${x + r * .45} ${y - r * .45} L${x - r * .45} ${y + r * .45}" fill="none" stroke="#fff" stroke-width="${f(r * .25)}" stroke-linecap="round"/>`;
  // 번쩍(충격·불꽃) 별
  S.flash = (x, y, s = 1, fill = '#f0ad24') => { let p = ''; for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, r = (i % 2 ? 9 : 19) * s; p += `${f(x + Math.cos(a) * r)},${f(y + Math.sin(a) * r)} `; } return `<polygon points="${p}" fill="${fill}" stroke="#d68a00" stroke-width="1"/>`; };
  S.zap = (x, y, s = 1) => `<polygon points="${x + 4 * s},${y - 18 * s} ${x - 10 * s},${y + 2 * s} ${x - 1 * s},${y + 2 * s} ${x - 5 * s},${y + 18 * s} ${x + 11 * s},${y - 6 * s} ${x + 2 * s},${y - 6 * s}" fill="#f0ad24" stroke="#c98a10" stroke-width="1.2" stroke-linejoin="round"/>`;

  /* ---- 입자 ---- */
  S.h = (x, y, r = 10) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#2f8fe0" stroke="#1a5fa3"/><text x="${x}" y="${f(y + r * .4)}" text-anchor="middle" font-size="${f(r * 1.2)}" font-weight="800" fill="#fff">H</text>`;
  // 일반 원자/이온. label 예: 'Ni²⁺'
  S.atom = (x, y, r = 10, label = '', fill = '#c9d3dc', stroke = '#6d7f8d', tc = '#172b3b') => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}"/>` + (label ? `<text x="${x}" y="${f(y + r * .35)}" text-anchor="middle" font-size="${f(Math.min(r * 1.0, 11))}" font-weight="800" fill="${tc}">${esc(label)}</text>` : '');
  // 기포 n개 (x,y 중심, spread 폭)
  S.bubbles = (x, y, n = 5, spread = 40, color = '#2f8fe0') => { let o = ''; for (let i = 0; i < n; i++) { const px = x + (((i * 37) % 100) / 100 - .5) * spread, py = y - ((i * 53) % 100) / 100 * spread * .9, r = 2.5 + (i * 7) % 4; o += `<circle cx="${f(px)}" cy="${f(py)}" r="${r}" fill="#fff" fill-opacity=".7" stroke="${color}" stroke-width="1.5"/>`; } return o; };
  S.drop = (x, y, color = '#4aa3df', s = 1) => `<path d="M${x} ${y - 12 * s} C${x + 9 * s} ${y - 1 * s} ${x + 8 * s} ${y + 9 * s} ${x} ${y + 9 * s} C${x - 8 * s} ${y + 9 * s} ${x - 9 * s} ${y - 1 * s} ${x} ${y - 12 * s}z" fill="${color}" stroke="#2a6fa3"/>`;

  /* ---- 금속·도금층 ---- */
  // 금속 덩어리(원자 격자 무늬). lattice=false 면 단색
  S.metal = (x, y, w, h, lattice = true) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="url(#metal)"/>` + (lattice ? `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="url(#lattice)"/>` : '');
  // 도금층/재료 판. key: gold nickel copper zinc chrome silver tin pd rh base paint (또는 #색)
  S.layer = (x, y, w, h, key = 'nickel', label = '', tc = '#172b3b') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="${PL[key] || key}" stroke="#5f6c78" stroke-width="1"/>` + (label ? S.text(x + w / 2, f(y + h / 2 + 4), label, { size: Math.min(11, h * .7), fill: tc }) : '');
  // 단면 쌓기. rows: [[key,높이,'이름'], ...] 위→아래 순서. (x,y)=맨 위 왼쪽
  S.stack = (x, y, w, rows) => { let yy = y, o = ''; rows.forEach(r => { o += S.layer(x, yy, w, r[1], r[0], r[2] || '', r[0] === 'base' || r[0] === 'paint' ? '#fff' : '#172b3b'); yy += r[1]; }); return o; };
  // 부품(회색 둥근 사각)
  S.part = (x, y, w, h, fill = '#b8c3cd') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="${fill}" stroke="#6d7f8d" stroke-width="1.5"/>`;
  S.bolt = (x, y, s = 1) => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-30" y="-14" width="16" height="28" rx="2" fill="url(#pipe)" stroke="#6d7f8d"/><rect x="-14" y="-9" width="46" height="18" fill="url(#pipe)" stroke="#6d7f8d"/><g stroke="#5f6c78" stroke-width="1.6"><line x1="-6" y1="-9" x2="-6" y2="9"/><line x1="2" y1="-9" x2="2" y2="9"/><line x1="10" y1="-9" x2="10" y2="9"/><line x1="18" y1="-9" x2="18" y2="9"/><line x1="26" y1="-9" x2="26" y2="9"/></g></g>`;
  S.pipe = (x, y, w, h = 26) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="url(#pipe)" stroke="#6d7f8d"/><rect x="${x - 4}" y="${y - 5}" width="8" height="${h + 10}" rx="2" fill="#7c8a96"/><rect x="${x + w - 4}" y="${y - 5}" width="8" height="${h + 10}" rx="2" fill="#7c8a96"/>`;
  S.gear = (x, y, r = 16) => { let p = ''; for (let i = 0; i < 16; i++) { const a = i * Math.PI / 8, rr = i % 2 ? r * .8 : r; p += `${f(x + Math.cos(a) * rr)},${f(y + Math.sin(a) * rr)} `; } return `<polygon points="${p}" fill="#aab5c0" stroke="#5f6c78"/><circle cx="${x}" cy="${y}" r="${f(r * .35)}" fill="#eef5fb" stroke="#5f6c78"/>`; };

  /* ---- 설비·도구 ---- */
  // 탱크. liquid 액체색, o:{label, electrodes:true(양극+/음극−), pol:true}
  S.tank = (x, y, w, h, liquid = '#cfe8f6', o = {}) => {
    let s = `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#fff" stroke="#5a86a8" stroke-width="3"/><rect x="${x + 3}" y="${f(y + h * .28)}" width="${w - 6}" height="${f(h * .72 - 3)}" fill="${liquid}"/>`;
    if (o.electrodes) s += `<rect x="${x + 10}" y="${y - 6}" width="7" height="${f(h * .8)}" fill="#c9a227"/><rect x="${x + w - 17}" y="${y - 6}" width="7" height="${f(h * .8)}" fill="#8a97a3"/>` + S.text(x + 13.5, y - 10, '+', { size: 13, fill: C.red }) + S.text(x + w - 13.5, y - 10, '−', { size: 13, fill: C.blue });
    if (o.label) s += S.text(x + w / 2, y + h + 15, o.label, { size: 11 });
    return s;
  };
  S.beaker = (x, y, w = 40, h = 52, liquid = '#cfe8f6') => `<path d="M${x} ${y} L${x + 3} ${y + h} L${x + w - 3} ${y + h} L${x + w} ${y}" fill="#fff" fill-opacity=".6" stroke="#5a86a8" stroke-width="2.5"/><path d="M${x + 2} ${f(y + h * .4)} L${x + 3.5} ${y + h - 1.5} L${x + w - 3.5} ${y + h - 1.5} L${x + w - 2} ${f(y + h * .4)}z" fill="${liquid}"/>`;
  S.oven = (x, y, w = 80, h = 64) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="7" fill="#e8a24a" stroke="#a8641a" stroke-width="3"/><rect x="${x + 9}" y="${y + 10}" width="${w - 18}" height="${h - 24}" rx="4" fill="#fff3d6" stroke="#a8641a"/>`;
  S.clock = (x, y, r = 16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" stroke="#3b5163" stroke-width="2.5"/><path d="M${x} ${y} V${f(y - r * .6)} M${x} ${y} L${f(x + r * .45)} ${f(y + r * .2)}" stroke="#3b5163" stroke-width="2.2" stroke-linecap="round"/>`;
  S.thermo = (x, y, h = 50, level = .6) => `<rect x="${x - 5}" y="${y}" width="10" height="${h}" rx="5" fill="#fff" stroke="#3b5163" stroke-width="2"/><circle cx="${x}" cy="${y + h + 4}" r="9" fill="#d6453d" stroke="#3b5163" stroke-width="2"/><rect x="${x - 2.5}" y="${f(y + h * (1 - level))}" width="5" height="${f(h * level)}" fill="#d6453d"/>`;
  // 계기(반원 게이지). val 0~1
  S.gauge = (x, y, r = 28, val = .5, color = '#2f8fe0') => { const a = Math.PI * (1 - val); return `<path d="M${x - r} ${y} A${r} ${r} 0 0 1 ${x + r} ${y}" fill="#fff" stroke="#3b5163" stroke-width="2.5"/><path d="M${x - r} ${y} A${r} ${r} 0 0 1 ${f(x + r * Math.cos(a))} ${f(y - r * Math.sin(a))}" fill="none" stroke="${color}" stroke-width="5"/><line x1="${x}" y1="${y}" x2="${f(x + r * .8 * Math.cos(a))}" y2="${f(y - r * .8 * Math.sin(a))}" stroke="#172b3b" stroke-width="2.5" stroke-linecap="round"/><circle cx="${x}" cy="${y}" r="3.5" fill="#172b3b"/>`; };
  S.magnifier = (x, y, r = 16) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#fff" fill-opacity=".5" stroke="#3b5163" stroke-width="3.5"/><line x1="${f(x + r * .72)}" y1="${f(y + r * .72)}" x2="${f(x + r * 1.7)}" y2="${f(y + r * 1.7)}" stroke="#3b5163" stroke-width="5" stroke-linecap="round"/>`;
  // 작업자(머리+몸). color: 안전모 색
  S.worker = (x, y, s = 1, color = '#f0ad24') => `<g transform="translate(${x} ${y}) scale(${s})"><rect x="-13" y="-4" width="26" height="30" rx="8" fill="#4a7fa8"/><circle cx="0" cy="-14" r="10" fill="#f3d3b0" stroke="#a98765"/><path d="M-11 -16 A11 11 0 0 1 11 -16 Z" fill="${color}" stroke="#a87b0b"/><rect x="-13" y="-17" width="26" height="3.5" rx="1.5" fill="${color}" stroke="#a87b0b"/></g>`;
  S.wave = (x, y, w, color = '#9cc9e8') => { let d = `M${x} ${y}`; for (let i = 0; i < w / 20; i++) d += ` q5 -6 10 0 t10 0`; return `<path d="${d}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>`; };
  S.cloud = (x, y, s = 1, fill = '#dfe9f2') => `<g transform="translate(${x} ${y}) scale(${s})"><ellipse cx="0" cy="0" rx="26" ry="12" fill="${fill}"/><circle cx="-10" cy="-8" r="11" fill="${fill}"/><circle cx="8" cy="-11" r="13" fill="${fill}"/></g>`;
  // 바닥선/받침대
  S.ground = (y = 208, color = '#c3d0dc') => `<rect x="0" y="${y}" width="300" height="${230 - y}" fill="${color}"/>`;

  /* ---- 공통 defs (뷰어가 문서에 한 번 넣음) ---- */
  S.defs = `<defs>
    <linearGradient id="metal" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#8e9aa6"/><stop offset="1" stop-color="#5f6c78"/></linearGradient>
    <linearGradient id="pipe" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e3e9ee"/><stop offset=".5" stop-color="#9fb0bd"/><stop offset="1" stop-color="#6d7f8d"/></linearGradient>
    <pattern id="lattice" width="28" height="24" patternUnits="userSpaceOnUse"><circle cx="14" cy="12" r="8.5" fill="#d3dae0" stroke="#7e8b97" stroke-width="1.2"/></pattern>
    <radialGradient id="glow"><stop offset="0" stop-color="#ff3b30" stop-opacity=".75"/><stop offset="1" stop-color="#ff3b30" stop-opacity="0"/></radialGradient>
    <marker id="arrB" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#2f8fe0"/></marker>
    <marker id="arrR" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#d6453d"/></marker>
    <marker id="arrG" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#1f8a55"/></marker>
    <marker id="arrK" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0 0L10 5L0 10z" fill="#3b5163"/></marker>
  </defs>`;

  root.S = S;
})(typeof window !== 'undefined' ? window : globalThis);
