/* 도금 종류 (담당: p_03) — "도금" 항목은 p_00_예시.js 에 있음 */
window.PAGES = window.PAGES || {};
Object.assign(window.PAGES, (function () {
  const C = S.C, PL = S.PL;
  // 이온 동그라미 (label 2글자)
  const ion = (x, y, l, col = '#2f8fe0') => S.atom(x, y, 11, l, '#fff', col);
  // 전극 탱크 + 가운데 부품
  const bath = (fill) => S.tank(30, 50, 240, 150, '#d9ecf7', { electrodes: true }) + S.part(135, 100, 30, 76, fill || '#b8c3cd');
  // 윗면이 울퉁불퉁/매끈한 도금층 (x,y=윗면 기준, w, h)
  const surf = (x, y, w, h, rough, key) => {
    let p = '';
    const n = 10;
    for (let i = 0; i <= n; i++) {
      const dy = rough ? (i % 2 ? -10 : 3) + (i % 3) * 2 : 0;
      p += `${x + i * w / n},${y + dy} `;
    }
    p += `${x + w},${y + h} ${x},${y + h}`;
    return `<polygon points="${p}" fill="${PL[key] || key}" stroke="#5f6c78" stroke-width="1"/>`;
  };
  // 구멍 있는 부품 (가운데 구멍)
  const holed = (x, y, w, h) => S.part(x, y, w, h) + `<rect x="${x + w / 2 - 9}" y="${y + 8}" width="18" height="${h - 16}" rx="3" fill="#eef5fb" stroke="#6d7f8d"/>`;
  const sun = (x, y) => `<circle cx="${x}" cy="${y}" r="13" fill="#f7d54a" stroke="#d68a00" stroke-width="1.5"/>`;

  return {

    "광택도금": {
      hook: "거울처럼 빛을 되쏘는 매끈한 도금이에요.",
      steps: [
        { t: "거친 표면", d: "표면이 거칠면 빛이 사방으로 흩어져 뿌옇게 보여요.",
          svg: S.panel(sun(40, 36) + S.arrow(54, 46, 98, 118, 'gold') +
            surf(20, 150, 260, 60, true, 'nickel') +
            S.arrow(104, 124, 66, 80, 'gray', 2) + S.arrow(106, 124, 130, 76, 'gray', 2) + S.arrow(108, 124, 190, 90, 'gray', 2) +
            S.tag(220, 50, '흩어진 빛', { color: C.gray }) + S.ng(256, 120, 13)) },
        { t: "매끈한 면", d: "매끈하면 빛이 한 방향으로 반사되어 반짝여 보여요.",
          svg: S.panel(sun(40, 36) + S.arrow(54, 46, 120, 140, 'gold') +
            surf(20, 150, 260, 60, false, 'nickel') +
            S.arrow(126, 146, 200, 60, 'gold', 2.5) + S.arrow(150, 146, 224, 60, 'gold', 0) +
            S.tag(232, 100, '반짝!', { color: C.green }) + S.ok(256, 40, 13)) },
        { t: "광택제", d: "도금액에 광택제를 넣으면 매끈하고 밝은 층이 돼요.",
          svg: S.panel(S.tank(20, 70, 150, 120, '#d9ecf7', { electrodes: true }) + S.part(80, 112, 24, 60, '#e4e9ee') +
            S.beaker(196, 74, 44, 56, '#f5d98a') + S.drop(218, 56, '#f0c43c') + S.arrow(200, 142, 172, 160, 'gold', 2) +
            S.tag(218, 150, '광택제', { color: C.gold }) + S.flash(92, 112, .6)) }
      ],
      points: [
        { k: "빛의 반사", v: "표면이 매끈할수록 또렷하게 반사돼요" },
        { k: "광택제", v: "도금액에 넣는 첨가제가 만들어 줘요" },
        { k: "광택 니켈", v: "니켈 도금에 특화된 대표 사례예요" }
      ],
      care: "광택제는 쓰면서 줄어들어 광택이 떨어지니 농도와 보충량을 관리하세요.",
      related: ["광택 니켈", "광택제", "레벨링", "표면 거칠기"]
    },

    "광택 니켈": {
      hook: "크롬 밑에서 밝게 받쳐 주는 니켈이에요.",
      steps: [
        { t: "첨가제", d: "니켈 도금액에 광택용 첨가제를 넣고 도금해요.",
          svg: S.panel(S.tank(40, 80, 220, 110, '#d6ecdc', { electrodes: true }) + S.part(135, 116, 30, 56, '#dfe6ec') +
            S.beaker(120, 14, 40, 46, '#f5d98a') + S.drop(140, 70, '#f0c43c') +
            ion(80, 140, 'Ni') + ion(210, 150, 'Ni') + S.tag(220, 40, '니켈욕', { color: C.green })) },
        { t: "층의 차이", d: "무광 니켈은 결이 거칠고 광택 니켈은 매끈해요.",
          svg: S.panel(surf(20, 130, 120, 50, true, '#aab4bd') + surf(160, 130, 120, 50, false, 'nickel') +
            S.layer(20, 180, 120, 28, 'base') + S.layer(160, 180, 120, 28, 'base') +
            S.tag(80, 60, '무광 니켈', { color: C.gray }) + S.tag(220, 60, '광택 니켈', { color: C.blue }) +
            S.ng(80, 96, 11) + S.ok(220, 96, 11)) },
        { t: "크롬 아래", d: "장식 도금에서는 맨 위 크롬 밑의 밝은 바탕이 돼요.",
          svg: S.panel(S.stack(50, 40, 150, [['chrome', 12, ''], ['nickel', 36, '광택 니켈'], ['copper', 36, '구리'], ['base', 58, '바탕 금속']]) +
            S.text(244, 62, '크롬', { size: 12, fill: C.blue }) + S.arrow(226, 56, 204, 46, 'blue', 2) +
            S.tag(244, 110, '밝은\n바탕', { color: C.blue }) + S.arrow(222, 104, 204, 96, 'blue', 2)) }
      ],
      points: [
        { k: "니켈 전용", v: "광택도금 중 니켈에 쓰는 것이에요" },
        { k: "첨가제", v: "광택제가 결정을 곱게 만들어요" },
        { k: "바탕층", v: "크롬의 아름다움을 받쳐 주는 층이에요" }
      ],
      care: "광택제가 지나치게 많으면 층이 단단해져 깨지기 쉬우니 농도를 지키세요.",
      related: ["니켈 도금", "광택도금", "광택제", "크롬 도금"]
    },

    "구리 도금": {
      hook: "전기가 잘 통하는 붉은 구리 옷이에요.",
      steps: [
        { t: "구리 이온", d: "도금액 속 구리 이온이 음극인 부품으로 모여요.",
          svg: S.panel(bath('#b8c3cd').replace('#c9a227', '#d9824b') +
            ion(70, 110, 'Cu', '#d9824b') + ion(80, 160, 'Cu', '#d9824b') + ion(214, 120, 'Cu', '#d9824b') +
            S.arrow(98, 120, 130, 126, 'blue', 2) + S.arrow(200, 130, 172, 130, 'blue', 2) + S.tag(150, 24, 'Cu²⁺ 구리 이온', { color: C.red })) },
        { t: "구리층", d: "부품 표면에 붉은 구리층이 고르게 쌓여요.",
          svg: S.panel(S.layer(40, 100, 220, 36, 'copper', '구리층') + S.layer(40, 136, 220, 64, 'base', '바탕 금속', '#fff') +
            S.atom(80, 80, 10, '', PL.copper, '#9a5a30') + S.atom(150, 76, 10, '', PL.copper, '#9a5a30') + S.atom(220, 80, 10, '', PL.copper, '#9a5a30') +
            S.arrow(80, 88, 80, 98, 'gray', 2) + S.arrow(150, 84, 150, 98, 'gray', 2) + S.arrow(220, 88, 220, 98, 'gray', 2) +
            S.tag(150, 30, '구리 알갱이가 차곡차곡', { color: C.red })) },
        { t: "쓰임새", d: "전자 기판의 회로, 다른 도금의 밑층으로 쓰여요.",
          svg: S.panel(`<rect x="24" y="40" width="110" height="80" rx="6" fill="#2f7d4f" stroke="#1d5a37" stroke-width="2"/><path d="M36 60 H80 V90 H120 M36 100 H64 M90 52 V74" stroke="${PL.copper}" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="80" cy="90" r="5" fill="#f0c43c"/>` +
            S.text(79, 140, '기판 회로', { size: 12, fill: C.green }) +
            S.stack(170, 52, 106, [['nickel', 16, '니켈'], ['copper', 26, '구리'], ['base', 40, '바탕']]) +
            S.text(223, 140, '밑층', { size: 12, fill: C.red }) +
            S.text(150, 190, '전기가 잘 통해요', { size: 12, fill: C.navy })) }
      ],
      points: [
        { k: "전도성", v: "전기·열이 잘 통하는 금속이에요" },
        { k: "밑층", v: "니켈 등 위 도금의 바탕이 돼요" },
        { k: "붉은색", v: "표면 색이 붉은 구릿빛이에요" }
      ],
      care: "구리는 공기 중에 두면 산화되어 변색하니 도금 후 바로 다음 공정이나 보호가 필요해요.",
      related: ["구리 스트라이크", "화학동 도금", "구리 시안화욕", "다층 도금"]
    },

    "구리 스트라이크": {
      hook: "본 도금 전에 깔아 주는 얇은 구리 밑칠이에요.",
      steps: [
        { t: "밀착 문제", d: "철강에 바로 도금하면 층이 들뜨는 경우가 있어요.",
          svg: S.panel(S.layer(30, 150, 240, 50, 'base', '철강 바탕', '#fff') +
            `<path d="M30 150 V120 H130 Q150 108 168 124 L240 112 L270 112 V150Z" fill="${PL.nickel}" stroke="#5f6c78" stroke-width="1"/>` +
            S.arrow(160, 114, 190, 80, 'red', 2.5) + S.text(150, 60, '들떠서 일어나요', { size: 12, fill: C.red }) + S.ng(250, 80, 13)) },
        { t: "얇게 먼저", d: "짧은 시간에 아주 얇은 구리층부터 먼저 입혀요.",
          svg: S.panel(S.clock(70, 70, 24) + S.text(70, 112, '짧게', { size: 12, fill: C.navy }) +
            S.layer(130, 70, 140, 10, 'copper') + S.layer(130, 80, 140, 70, 'base', '철강', '#fff') +
            S.arrow(190, 36, 190, 66, 'blue', 2.5) + S.tag(220, 30, '얇은 구리', { color: C.red }) +
            S.magnifier(250, 180, 16)) },
        { t: "본 도금", d: "구리 밑층 위에 본 도금을 올리면 단단히 붙어요.",
          svg: S.panel(S.stack(60, 40, 180, [['nickel', 50, '본 도금'], ['copper', 12, ''], ['base', 70, '철강']]) +
            S.tag(150, 156, '구리 밑칠', { color: C.red }) + S.arrow(150, 142, 150, 108, 'red', 2) +
            S.ok(262, 64, 13)) }
      ],
      points: [
        { k: "목적", v: "위 도금층이 잘 붙게 하는 접착제예요" },
        { k: "아주 얇게", v: "최종 두께를 만드는 층이 아니에요" },
        { k: "바탕", v: "철강 등에 먼저 입히는 일이 많아요" }
      ],
      care: "스트라이크욕은 오염에 민감하니 앞 공정의 세정제와 산이 넘어오지 않게 수세하세요.",
      related: ["스트라이크 도금", "구리 도금", "밀착력", "니켈 스트라이크"]
    },

    "금 도금": {
      hook: "변색 없이 전기가 잘 통하는 금빛 옷이에요.",
      steps: [
        { t: "금 이온", d: "도금액 속 금 이온이 부품 표면에 금속 금으로 붙어요.",
          svg: S.panel(bath('#b8c3cd') +
            ion(70, 112, 'Au', '#c98a10') + ion(84, 160, 'Au', '#c98a10') + ion(212, 130, 'Au', '#c98a10') +
            S.arrow(98, 122, 130, 128, 'blue', 2) + S.arrow(198, 136, 172, 136, 'blue', 2) +
            S.tag(150, 24, '귀금속 도금액', { color: C.gold })) },
        { t: "얇은 금층", d: "금은 잘 녹슬지 않아 얇게 입혀도 표면이 안정적이에요.",
          svg: S.panel(S.stack(60, 70, 180, [['gold', 12, ''], ['nickel', 36, '니켈 밑층'], ['base', 64, '바탕 금속']]) +
            S.text(150, 100 - 8, '', {}) +
            S.tag(150, 34, '금층은 아주 얇아요', { color: C.gold }) + S.arrow(150, 50, 150, 68, 'gray', 2) +
            S.text(262, 80, '금', { size: 13, fill: C.gold }) + S.arrow(250, 76, 242, 76, 'gray', 1.5) + S.ok(262, 130, 12)) },
        { t: "커넥터", d: "접점에 입히면 전기 신호가 안정적으로 통해요.",
          svg: S.panel(`<rect x="20" y="92" width="110" height="26" rx="4" fill="${PL.gold}" stroke="#a8841c" stroke-width="2"/><rect x="170" y="86" width="110" height="38" rx="5" fill="#b8c3cd" stroke="#6d7f8d" stroke-width="2"/><rect x="170" y="98" width="62" height="14" fill="${PL.gold}" stroke="#a8841c"/>` +
            S.arrow(136, 105, 166, 105, 'gray', 3) + S.zap(150, 52, .9) +
            S.tag(75, 150, '금 핀', { color: C.gold }) + S.tag(225, 150, '접점', { color: C.gray }) +
            S.text(150, 196, '신호가 안정적으로 통해요', { size: 12, fill: C.navy })) }
      ],
      points: [
        { k: "접촉 안정", v: "산화막이 거의 안 생겨 접촉이 안정돼요" },
        { k: "내식성", v: "대부분의 환경에서 잘 변하지 않아요" },
        { k: "밑층 필요", v: "보통 니켈 밑층 위에 입혀요" }
      ],
      care: "금은 값이 비싸 두께가 곧 비용이니, 사양 두께를 넘지 않게 관리하세요.",
      related: ["접점 도금", "니켈 도금", "커넥터", "변색"]
    },

    "니켈 도금": {
      hook: "은빛 방패, 녹과 마모를 막아 주는 층이에요.",
      steps: [
        { t: "니켈 이온", d: "니켈 이온이 전기를 받아 부품 표면에 쌓여요.",
          svg: S.panel(bath('#b8c3cd') +
            ion(70, 110, 'Ni', '#5a8a6a') + ion(84, 162, 'Ni', '#5a8a6a') + ion(214, 120, 'Ni', '#5a8a6a') +
            S.arrow(98, 120, 130, 128, 'blue', 2) + S.arrow(200, 130, 172, 130, 'blue', 2) +
            S.tag(150, 24, 'Ni²⁺ 니켈 이온', { color: C.green })) },
        { t: "녹 막기", d: "니켈층이 물과 공기가 바탕에 닿는 것을 막아 줘요.",
          svg: S.panel(S.layer(20, 150, 110, 50, 'base', '맨 철', '#fff') +
            S.layer(170, 130, 110, 20, 'nickel', '니켈') + S.layer(170, 150, 110, 50, 'base', '철', '#fff') +
            S.drop(50, 60) + S.drop(100, 40) + S.drop(200, 60) + S.drop(250, 40) +
            S.arrow(50, 76, 50, 144, 'red', 2) + S.arrow(210, 76, 210, 124, 'gray', 2) +
            S.text(75, 128, '녹!', { size: 13, fill: C.red }) + S.ng(100, 100, 12) + S.ok(250, 100, 12)) },
        { t: "세 가지 힘", d: "장식, 내식, 내마모 등 목적에 맞춰 널리 써요.",
          svg: S.panel(S.emoji(52, 80, '✨', 34) + S.tag(52, 108, '장식', { color: C.blue }) +
            S.emoji(150, 80, '🛡️', 34) + S.tag(150, 108, '내식', { color: C.green }) +
            S.emoji(248, 80, '⚙️', 34) + S.tag(248, 108, '내마모', { color: C.gray }) +
            S.stack(70, 140, 160, [['nickel', 20, '니켈'], ['base', 40, '바탕']])) }
      ],
      points: [
        { k: "다목적", v: "장식·내식·내마모에 두루 써요" },
        { k: "바탕층", v: "금·크롬 등 위 도금의 밑에도 써요" },
        { k: "은백색", v: "밝은 은색 외관이에요" }
      ],
      care: "니켈은 알레르기를 일으킬 수 있고 도금액도 유해하니 피부 접촉에 주의하세요.",
      related: ["광택 니켈", "니켈 스트라이크", "화학 니켈 도금", "와트욕"]
    },

    "니켈 스트라이크": {
      hook: "까다로운 소재에 붙을 길을 내는 니켈 밑칠이에요.",
      steps: [
        { t: "안 붙는 소재", d: "스테인리스는 표면의 얇은 산화막 때문에 도금이 잘 안 붙어요.",
          svg: S.panel(S.layer(30, 150, 240, 50, '#9aa5b0', '스테인리스') +
            `<rect x="30" y="142" width="240" height="8" fill="#e4d9c4" stroke="#a88d4b"/>` +
            S.tag(230, 124, '산화막', { color: C.gold }) +
            S.atom(80, 70, 11, 'Ni', '#fff', '#5a8a6a') + S.atom(150, 50, 11, 'Ni', '#fff', '#5a8a6a') +
            S.arrow(80, 84, 80, 132, 'red', 2) + S.arrow(150, 64, 150, 132, 'red', 2) + S.ng(210, 80, 13)) },
        { t: "얇게 입히기", d: "산화막을 벗기며 곧바로 얇은 니켈층을 입혀요.",
          svg: S.panel(S.tank(30, 50, 240, 150, '#d6ecdc', { electrodes: true }) +
            S.part(125, 100, 50, 76, '#9aa5b0') + `<rect x="123" y="98" width="4" height="80" fill="${PL.nickel}"/><rect x="173" y="98" width="4" height="80" fill="${PL.nickel}"/>` +
            ion(70, 130, 'Ni', '#5a8a6a') + ion(228, 140, 'Ni', '#5a8a6a') +
            S.arrow(98, 134, 118, 134, 'blue', 2) + S.tag(150, 24, '산성 욕에서 짧게', { color: C.green })) },
        { t: "본 도금", d: "붙잡아 준 니켈 위에 본 도금을 올려요.",
          svg: S.panel(S.stack(60, 46, 180, [['gold', 28, '본 도금'], ['nickel', 10, ''], ['#9aa5b0', 66, '스테인리스']]) +
            S.tag(150, 168, '니켈 스트라이크', { color: C.gray }) + S.arrow(150, 154, 150, 118, 'gray', 2) + S.ok(262, 70, 13)) }
      ],
      points: [
        { k: "대상", v: "스테인리스 등 도금이 까다로운 소재" },
        { k: "원인", v: "표면 산화막이 밀착을 방해해요" },
        { k: "역할", v: "본 도금의 접착 발판이에요" }
      ],
      care: "스트라이크 전 활성화가 부족하면 소용없으니, 활성화 후 물기 마르기 전에 바로 넣으세요.",
      related: ["스트라이크 도금", "활성화", "산화막", "밀착력"]
    },

    "다층 도금": {
      hook: "여러 겹 껴입어 서로의 약점을 채워요.",
      steps: [
        { t: "한 층의 한계", d: "한 층만으로는 모든 성능을 얻기 어려워요.",
          svg: S.panel(S.layer(50, 100, 200, 30, 'nickel', '한 겹') + S.layer(50, 130, 200, 66, 'base', '바탕 금속', '#fff') +
            `<rect x="140" y="100" width="6" height="30" fill="#d6453d"/>` + S.drop(143, 52) + S.arrow(143, 66, 143, 118, 'red', 2.5) +
            S.tag(210, 56, '틈으로 침투', { color: C.red }) + S.ng(60, 66, 12)) },
        { t: "역할 분담", d: "밀착, 내식, 외관처럼 층마다 맡은 일이 달라요.",
          svg: S.panel(S.stack(30, 44, 130, [['chrome', 14, ''], ['nickel', 34, ''], ['copper', 34, ''], ['base', 54, '']]) +
            S.tag(222, 51, '외관', { color: C.blue }) + S.tag(222, 78, '내식', { color: C.green }) +
            S.tag(222, 112, '밀착', { color: C.red }) + S.tag(222, 160, '바탕 금속', { color: C.gray }) +
            S.line(162, 51, 190, 51, C.blue, 1.5, '3 3') + S.line(162, 78, 190, 78, C.green, 1.5, '3 3') + S.line(162, 112, 190, 112, C.red, 1.5, '3 3')) },
        { t: "이중 방어", d: "윗층에 틈이 있어도 아랫층이 한 번 더 막아 줘요.",
          svg: S.panel(S.layer(50, 80, 200, 24, 'nickel', '') + S.layer(50, 104, 200, 24, 'copper', '') + S.layer(50, 128, 200, 62, 'base', '바탕', '#fff') +
            `<rect x="130" y="80" width="6" height="24" fill="#d6453d"/>` + S.drop(133, 36) + S.arrow(133, 50, 133, 76, 'red', 2.5) +
            S.text(133, 120, '막힘', { size: 12, fill: C.green }) + S.ok(262, 100, 12)) }
      ],
      points: [
        { k: "층마다 목적", v: "밀착·내식·외관을 나눠 맡아요" },
        { k: "예시", v: "구리·니켈·크롬 순서로 쌓아요" },
        { k: "순서가 중요", v: "층 순서와 두께가 사양에 정해져요" }
      ],
      care: "층 사이에 오염이나 산화막이 끼면 층째로 벗겨지니 층마다 수세·활성화를 지키세요.",
      related: ["도금층", "광택 니켈", "크롬 도금", "밀착력"]
    },

    "무전해 도금": {
      hook: "전기선 없이 화학 반응만으로 입히는 도금이에요.",
      steps: [
        { t: "전기 없이", d: "정류기도 전극도 없이 부품을 액에 담가 둬요.",
          svg: S.panel(S.tank(50, 70, 200, 120, '#e3dcf0') + S.part(135, 100, 30, 60, '#b8c3cd') + `<line x1="150" y1="40" x2="150" y2="100" stroke="#6d7f8d" stroke-width="3"/>` +
            S.emoji(60, 40, '🔌', 26) + S.line(40, 28, 80, 52, C.red, 4) + S.line(80, 28, 40, 52, C.red, 4) +
            S.tag(220, 36, '전기 연결 없음', { color: C.red })) },
        { t: "화학 반응", d: "환원제가 금속 이온에 전자를 줘 금속이 석출해요.",
          svg: S.panel(S.layer(30, 160, 240, 40, 'base', '부품 표면', '#fff') +
            ion(70, 70, 'M', C.blue) + ion(150, 60, 'M', C.blue) + ion(228, 76, 'M', C.blue) +
            S.atom(110, 112, 11, 'R', '#ffe3a8', '#c98a10') + S.atom(190, 112, 11, 'R', '#ffe3a8', '#c98a10') +
            S.arrow(110, 100, 78, 86, 'gold', 2) + S.arrow(190, 100, 222, 90, 'gold', 2) +
            S.arrow(70, 84, 70, 152, 'blue', 2) + S.arrow(150, 74, 150, 152, 'blue', 2) +
            S.tag(150, 24, 'R = 환원제', { color: C.gold })) },
        { t: "고른 두께", d: "활성화한 면이면 구멍 안쪽까지 비교적 고르게 입혀져요.",
          svg: S.panel(holed(90, 50, 120, 140) +
            `<rect x="89" y="58" width="5" height="124" fill="${PL.nickel}" stroke="#5f6c78" stroke-width=".5"/><rect x="123" y="58" width="5" height="124" fill="${PL.nickel}" stroke="#5f6c78" stroke-width=".5"/><rect x="172" y="58" width="5" height="124" fill="${PL.nickel}" stroke="#5f6c78" stroke-width=".5"/>` +
            S.tag(40, 120, '구멍\n안쪽', { color: C.blue }) + S.arrow(66, 120, 118, 120, 'blue', 2) + S.ok(260, 100, 13)) }
      ],
      points: [
        { k: "전기 불필요", v: "정류기·전극 없이 도금해요" },
        { k: "환원제", v: "전자를 공급하는 약품이에요" },
        { k: "균일성", v: "복잡한 모양도 두께가 비교적 고르게" }
      ],
      care: "도금액이 스스로 분해되지 않도록 온도·pH·성분 관리와 여과를 지키세요.",
      related: ["화학 니켈 도금", "화학동 도금", "전기 도금", "치환 도금"]
    },

    "삼가 크롬": {
      hook: "육가 크롬의 부담을 줄인 +3가 크롬이에요.",
      steps: [
        { t: "이온 비교", d: "삼가는 전하가 +3인 크롬 이온, 육가는 +6이에요.",
          svg: S.panel(S.atom(80, 90, 24, 'Cr', '#dff2e6', C.green, C.navy) + S.text(80, 138, '삼가 (+3)', { size: 13, fill: C.green }) + S.ok(110, 62, 11) +
            S.atom(220, 90, 24, 'Cr', '#fde0dd', C.red, C.navy) + S.text(220, 138, '육가 (+6)', { size: 13, fill: C.red }) + S.ng(250, 62, 11) +
            S.text(80, 64, '+ + +', { size: 13, fill: C.green }) + S.text(220, 64, '+ + + + + +', { size: 11, fill: C.red }) +
            S.tag(150, 190, '숫자가 전하 크기예요', { color: C.gray })) },
        { t: "도금 장면", d: "삼가 크롬욕에서 크롬층을 입혀요.",
          svg: S.panel(bath('#b8c3cd') +
            ion(70, 112, 'Cr', C.green) + ion(84, 160, 'Cr', C.green) + ion(214, 130, 'Cr', C.green) +
            S.arrow(98, 122, 130, 128, 'blue', 2) + S.arrow(198, 136, 172, 136, 'blue', 2) +
            S.tag(150, 24, 'Cr³⁺ 크롬욕', { color: C.green })) },
        { t: "대체 흐름", d: "작업 환경 부담이 낮아 육가 대체로 검토돼요.",
          svg: S.panel(S.emoji(60, 90, '😷', 40) + S.tag(60, 130, '육가', { color: C.red }) +
            S.arrow(100, 90, 200, 90, 'green', 4) + S.text(150, 70, '대체 검토', { size: 12, fill: C.green }) +
            S.emoji(240, 90, '🙂', 40) + S.tag(240, 130, '삼가', { color: C.green }) +
            S.layer(70, 168, 160, 20, 'chrome', '크롬층')) }
      ],
      points: [
        { k: "삼가", v: "크롬 이온 전하 +3인 크롬이에요" },
        { k: "육가와 차이", v: "육가 크롬은 독성 규제 대상이에요" },
        { k: "색감", v: "육가 크롬과 색이 다를 수 있어요" }
      ],
      care: "욕 종류마다 조건이 달라 제품 사양과 공정 기준서를 먼저 확인하세요.",
      related: ["육가 크롬", "크롬 도금", "크로메이트", "하드 크롬"]
    },

    "스트라이크 도금": {
      hook: "본 도금 전에 잠깐 깔아 주는 접착 밑칠이에요.",
      steps: [
        { t: "짧게 처리", d: "짧은 시간만 전류를 흘려 아주 얇게 입혀요.",
          svg: S.panel(S.clock(70, 80, 28) + S.text(70, 128, '짧은 시간', { size: 12, fill: C.navy }) +
            S.zap(150, 80, 1.3) + S.text(150, 128, '높은 힘으로 빠르게', { size: 11, fill: C.gold }) +
            S.layer(190, 70, 80, 10, 'copper') + S.layer(190, 80, 80, 40, 'base') +
            S.tag(230, 150, '얇은 밑칠', { color: C.red })) },
        { t: "밀착 발판", d: "바탕과 단단히 붙는 층이 위 도금의 발판이 돼요.",
          svg: S.panel(S.layer(30, 150, 240, 50, 'base', '바탕', '#fff') + S.layer(30, 138, 240, 12, 'copper') +
            S.layer(30, 60, 240, 40, 'nickel', '본 도금') +
            S.arrow(150, 108, 150, 134, 'red', 2.5) +            S.tag(222, 119, '발판', { color: C.red }) + S.magnifier(60, 118, 14)) },
        { t: "순서", d: "바탕 준비 → 스트라이크 → 본 도금 순서로 가요.",
          svg: S.panel(S.emoji(50, 80, '🧼', 30) + S.tag(50, 112, '전처리', { color: C.blue }) +
            S.arrow(76, 84, 108, 84, 'gray', 2) + S.emoji(150, 80, '⚡', 30) + S.tag(150, 112, '스트라이크', { color: C.gold }) +
            S.arrow(190, 84, 212, 84, 'gray', 2) + S.emoji(250, 80, '🥇', 30) + S.tag(250, 112, '본 도금', { color: C.green }) +
            S.text(150, 170, '중간에 마르지 않게 이어서!', { size: 12, fill: C.navy })) }
      ],
      points: [
        { k: "아주 얇게", v: "두께보다 밀착이 목적이에요" },
        { k: "종류", v: "구리·니켈·금 스트라이크 등이 있어요" },
        { k: "타이밍", v: "본 도금 바로 앞 공정이에요" }
      ],
      care: "스트라이크 후 표면이 마르거나 오염되면 효과가 사라지니 지체 없이 본 도금하세요.",
      related: ["구리 스트라이크", "니켈 스트라이크", "밀착력", "활성화"]
    },

    "아연 도금": {
      hook: "철 대신 먼저 녹아 주며 지켜 주는 아연 옷이에요.",
      steps: [
        { t: "아연층", d: "철강 부품 표면에 은회색 아연층을 입혀요.",
          svg: S.panel(S.bolt(120, 100, 1.6) + `<rect x="62" y="82" width="36" height="36" rx="3" fill="${PL.zinc}" opacity=".0"/>` +
            S.stack(60, 160, 180, [['zinc', 14, '아연'], ['base', 36, '철강', ]]) + S.tag(150, 30, '볼트도 아연으로', { color: C.gray })) },
        { t: "희생 방식", d: "흠집이 나도 아연이 먼저 녹아 철을 지켜 줘요.",
          svg: S.panel(S.layer(30, 140, 110, 18, 'zinc') + S.layer(160, 140, 110, 18, 'zinc') + S.layer(30, 158, 240, 44, 'base', '', '#fff') +
            `<rect x="140" y="140" width="20" height="18" fill="#eef5fb"/>` + S.drop(150, 70) + S.arrow(150, 84, 150, 130, 'blue', 2) +
            S.atom(110, 120, 10, 'Zn', '#fff', C.blue) + S.atom(190, 120, 10, 'Zn', '#fff', C.blue) +
            S.arrow(128, 134, 142, 134, 'gray', 1.5) + S.arrow(172, 134, 158, 134, 'gray', 1.5) +
            S.tag(150, 30, '아연이 먼저 녹아요', { color: C.blue }) + S.ok(150, 186, 11)) },
        { t: "후처리", d: "크로메이트 같은 후처리를 더하면 더 오래 버텨요.",
          svg: S.panel(S.stack(60, 60, 180, [['#c9b6e0', 10, ''], ['zinc', 30, '아연'], ['base', 60, '철강']]) +
            S.tag(150, 34, '크로메이트', { color: C.gray }) + S.arrow(150, 46, 150, 60, 'gray', 2) +
            S.text(150, 190, '녹이 나기까지 시간을 벌어요', { size: 12, fill: C.navy })) }
      ],
      points: [
        { k: "희생 방식", v: "아연이 철보다 먼저 부식돼요" },
        { k: "쓰임", v: "볼트·너트·철판 등에 널리 써요" },
        { k: "백청", v: "아연이 부식되면 하얀 가루가 나요" }
      ],
      care: "아연 도금 후엔 수소취성에 취약한 고강도 부품이 있으니 베이킹 여부를 확인하세요.",
      related: ["아연니켈 도금", "백청", "크로메이트", "수소 제거 베이킹"]
    },

    "아연니켈 도금": {
      hook: "아연에 니켈을 섞어 더 오래 버티는 합금이에요.",
      steps: [
        { t: "함께 석출", d: "아연과 니켈 이온이 함께 석출해 합금층이 돼요.",
          svg: S.panel(S.layer(30, 150, 240, 46, 'base', '철강', '#fff') +
            ion(60, 60, 'Zn', C.blue) + ion(150, 50, 'Ni', C.green) + ion(230, 66, 'Zn', C.blue) +
            S.arrow(60, 74, 80, 130, 'blue', 2) + S.arrow(150, 64, 130, 130, 'blue', 2) + S.arrow(230, 80, 190, 130, 'blue', 2) +
            S.atom(80, 138, 10, 'Zn', PL.zinc, '#6d7f8d') + S.atom(110, 138, 10, 'Ni', PL.nickel, '#6d7f8d') + S.atom(140, 138, 10, 'Zn', PL.zinc, '#6d7f8d') +
            S.atom(170, 138, 10, 'Zn', PL.zinc, '#6d7f8d') + S.atom(200, 138, 10, 'Ni', PL.nickel, '#6d7f8d')) },
        { t: "시험 비교", d: "같은 시험 시간에 보통 아연보다 늦게 녹슬어요.",
          svg: S.panel(S.layer(30, 90, 100, 90, 'zinc', '아연') + S.layer(170, 90, 100, 90, '#b9c8cf', '아연니켈') +
            `<circle cx="60" cy="130" r="9" fill="#b5523a"/><circle cx="100" cy="150" r="7" fill="#b5523a"/><circle cx="80" cy="110" r="6" fill="#b5523a"/>` +
            S.ng(80, 62, 12) + S.ok(220, 62, 12) + S.drop(220, 30, '#4aa3df') + S.drop(80, 30, '#4aa3df') +
            S.tag(150, 205, '같은 시험 시간', { color: C.gray })) },
        { t: "자동차", d: "자동차 부품 등 내식 요구가 높은 곳에 쓸 수 있어요.",
          svg: S.panel(S.emoji(110, 100, '🚗', 56) + S.bolt(220, 110, .9) + S.gear(60, 160, 18) +
            S.tag(150, 36, '내식 요구가 높은 곳', { color: C.green }) + S.ok(250, 160, 13)) }
      ],
      points: [
        { k: "합금", v: "아연에 니켈을 섞은 도금층이에요" },
        { k: "내식성", v: "아연 단독보다 오래 버티는 편이에요" },
        { k: "관리", v: "니켈 비율을 규격 범위로 맞춰요" }
      ],
      care: "합금 비율이 도금 위치마다 달라지면 성능이 변하니 전류 분포와 욕 성분을 관리하세요.",
      related: ["아연 도금", "합금 도금", "내식성", "염수분무시험"]
    },

    "전기 도금": {
      hook: "전기로 금속 이온을 끌어와 붙이는 도금이에요.",
      steps: [
        { t: "회로 연결", d: "정류기의 전기를 양극과 음극인 부품에 연결해요.",
          svg: S.panel(`<rect x="20" y="30" width="70" height="46" rx="6" fill="#dfe9f2" stroke="#3b5163" stroke-width="2.5"/>` + S.text(55, 58, '정류기', { size: 12, fill: C.navy }) +
            S.tank(110, 90, 170, 110, '#d9ecf7', { electrodes: true }) + S.part(185, 120, 24, 56) +
            `<path d="M90 44 H133 V84" stroke="${C.red}" stroke-width="3" fill="none"/><path d="M90 62 H257 V84" stroke="${C.blue}" stroke-width="3" fill="none"/>`) },
        { t: "이온 이동", d: "금속 이온이 음극인 부품 쪽으로 끌려가요.",
          svg: S.panel(S.layer(30, 40, 20, 150, '#c9a227') + S.text(40, 30, '+', { size: 14, fill: C.red }) + S.layer(250, 40, 20, 150, 'base') + S.text(260, 30, '−', { size: 14, fill: C.blue }) +
            ion(100, 70, 'M') + ion(120, 130, 'M') + ion(170, 90, 'M') + ion(150, 160, 'M') +
            S.arrow(130, 70, 232, 90, 'blue', 2.5) + S.arrow(140, 130, 232, 130, 'blue', 2.5) + S.arrow(178, 160, 232, 160, 'blue', 2.5) +
            S.tag(150, 205, '양이온은 음극으로', { color: C.blue })) },
        { t: "금속이 됨", d: "이온이 전자를 받아 금속이 되어 표면에 쌓여요.",
          svg: S.panel(S.layer(30, 150, 240, 46, 'base', '음극 (부품)', '#fff') +
            ion(80, 60, 'M⁺') + ion(180, 50, 'M⁺') + S.text(130, 100, 'e⁻', { size: 14, fill: C.red }) + S.text(230, 100, 'e⁻', { size: 14, fill: C.red }) +
            S.arrow(128, 130, 88, 76, 'red', 1.5) + S.arrow(180, 66, 180, 116, 'blue', 2) +
            S.atom(70, 138, 10, '', PL.nickel, '#6d7f8d') + S.atom(100, 138, 10, '', PL.nickel, '#6d7f8d') + S.atom(130, 138, 10, '', PL.nickel, '#6d7f8d') + S.atom(160, 138, 10, '', PL.nickel, '#6d7f8d') +
            S.tag(235, 70, '전자를 받으면\n금속!', { color: C.green })) }
      ],
      points: [
        { k: "필요한 것", v: "도금액·양극·음극(부품)·정류기" },
        { k: "양이온", v: "음극인 부품 쪽으로 이동해요" },
        { k: "무전해와 차이", v: "외부 전기를 직접 흘려요" }
      ],
      care: "전류가 세면 타거나 거칠어지니 부품 면적에 맞는 전류로 조절하세요.",
      related: ["전착", "무전해 도금", "정류기", "전류 밀도"]
    },

    "전착": {
      hook: "전기의 힘으로 입자가 표면에 달라붙는 일이에요.",
      steps: [
        { t: "전기장", d: "두 전극 사이에 전기장이 생기면 입자가 움직여요.",
          svg: S.panel(S.layer(30, 40, 14, 150, '#c9a227') + S.layer(256, 40, 14, 150, 'base') +
            S.line(50, 70, 250, 70, C.blue, 1.5, '5 4') + S.line(50, 115, 250, 115, C.blue, 1.5, '5 4') + S.line(50, 160, 250, 160, C.blue, 1.5, '5 4') +
            S.atom(100, 70, 9, '', '#fff', C.blue) + S.atom(130, 115, 9, '', '#fff', C.blue) + S.atom(110, 160, 9, '', '#fff', C.blue) +
            S.arrow(120, 70, 190, 70, 'blue', 2.5) + S.arrow(150, 115, 220, 115, 'blue', 2.5) + S.arrow(130, 160, 200, 160, 'blue', 2.5) +
            S.tag(150, 205, '전기장', { color: C.blue })) },
        { t: "달라붙음", d: "입자가 표면에 닿아 달라붙어 얇은 막을 이뤄요.",
          svg: S.panel(S.layer(210, 30, 60, 170, 'base') +
            S.atom(194, 60, 9, '', '#fff', C.blue) + S.atom(194, 90, 9, '', '#fff', C.blue) + S.atom(194, 120, 9, '', '#fff', C.blue) + S.atom(194, 150, 9, '', '#fff', C.blue) +
            S.atom(160, 80, 9, '', '#fff', C.blue) + S.atom(150, 130, 9, '', '#fff', C.blue) +
            S.arrow(130, 80, 150, 80, 'blue', 2) + S.arrow(120, 130, 140, 130, 'blue', 2) +
            S.tag(70, 60, '표면에\n쌓임', { color: C.green }) + S.arrow(100, 70, 182, 80, 'green', 1.5)) },
        { t: "두 갈래", d: "금속 이온이면 도금, 코팅 입자면 전착 도장이에요.",
          svg: S.panel(S.layer(30, 110, 110, 18, 'nickel', '금속 층') + S.layer(30, 128, 110, 50, 'base') + S.atom(60, 80, 10, 'M', '#fff', C.blue) + S.atom(110, 76, 10, 'M', '#fff', C.blue) + S.tag(85, 40, '도금', { color: C.gray }) +
            S.layer(160, 110, 110, 18, 'paint', '도막') + S.layer(160, 128, 110, 50, 'base') + `<circle cx="190" cy="76" r="8" fill="${PL.paint}"/><circle cx="240" cy="82" r="8" fill="${PL.paint}"/>` + S.tag(215, 40, '전착 도장', { color: C.red })) }
      ],
      points: [
        { k: "뜻", v: "전기에 이끌려 붙는 현상 자체예요" },
        { k: "전기 도금", v: "금속 이온의 전착이에요" },
        { k: "도장", v: "페인트 입자의 전착도 있어요" }
      ],
      care: "전착은 전류 분포에 따라 두께가 달라지니 부품 모양과 극 배치를 고려하세요.",
      related: ["전기 도금", "석출", "이온", "전류 분포"]
    },

    "접점 도금": {
      hook: "서로 맞닿는 자리에서 신호를 지키는 도금이에요.",
      steps: [
        { t: "맞닿는 곳", d: "커넥터에서 핀과 소켓이 서로 닿는 부분에 입혀요.",
          svg: S.panel(`<rect x="20" y="96" width="120" height="30" rx="4" fill="#b8c3cd" stroke="#6d7f8d" stroke-width="2"/><rect x="170" y="84" width="110" height="54" rx="6" fill="#dfe6ec" stroke="#6d7f8d" stroke-width="2"/><rect x="170" y="100" width="70" height="22" fill="#eef5fb" stroke="#6d7f8d"/>` +
            `<rect x="96" y="96" width="44" height="30" fill="${PL.gold}" stroke="#a8841c" stroke-width="2"/>` +
            S.arrow(150, 112, 176, 112, 'gray', 3) + S.tag(118, 70, '접점', { color: C.gold }) + S.arrow(118, 82, 118, 94, 'gold', 2) +
            S.tag(75, 160, '핀', { color: C.gray }) + S.tag(225, 160, '소켓', { color: C.gray })) },
        { t: "마모", d: "꽂았다 뺄 때마다 마찰로 도금이 조금씩 닳아요.",
          svg: S.panel(S.layer(40, 80, 220, 16, 'gold') + S.layer(40, 96, 220, 60, 'base', '바탕 금속', '#fff') +
            S.arrow(70, 52, 230, 52, 'gray', 3) + S.arrow(230, 66, 70, 66, 'gray', 3) +
            `<rect x="120" y="80" width="60" height="16" fill="#9aa5b0"/>` + S.tag(150, 190, '많이 닳으면 바탕이 드러나요', { color: C.red }) + S.ng(256, 40, 12)) },
        { t: "고르기", d: "용도와 접촉 횟수에 맞춰 금·주석 등을 골라요.",
          svg: S.panel(S.layer(30, 60, 110, 70, 'gold', '금') + S.layer(160, 60, 110, 70, 'tin', '주석') +
            S.tag(85, 150, '신호 안정', { color: C.gold }) + S.tag(215, 150, '비용 부담 적음', { color: C.gray }) +
            S.text(150, 36, '용도에 맞게 선택', { size: 13, fill: C.navy }) + S.text(150, 200, '접촉 횟수·환경을 확인', { size: 12, fill: C.navy })) }
      ],
      points: [
        { k: "전기 접촉", v: "접촉 저항이 낮고 안정돼야 해요" },
        { k: "내마모", v: "끼웠다 뺄 때 닳음을 견뎌야 해요" },
        { k: "선택", v: "금·주석 등 용도별로 골라요" }
      ],
      care: "접점 두께와 소재는 사양이 정해져 있으니 임의로 바꾸지 말고 도면을 확인하세요.",
      related: ["금 도금", "주석 도금", "커넥터", "내마모성"]
    },

    "주석 도금": {
      hook: "납땜이 잘 붙는 은회색 옷이에요.",
      steps: [
        { t: "주석층", d: "구리로 된 단자 위에 주석층을 입혀요.",
          svg: S.panel(S.stack(60, 70, 180, [['tin', 18, '주석'], ['copper', 60, '구리 단자']]) +
            S.atom(100, 44, 10, 'Sn', '#fff', C.gray) + S.atom(150, 40, 10, 'Sn', '#fff', C.gray) + S.atom(200, 44, 10, 'Sn', '#fff', C.gray) +
            S.arrow(100, 56, 100, 66, 'gray', 2) + S.arrow(150, 52, 150, 66, 'gray', 2) + S.arrow(200, 56, 200, 66, 'gray', 2)) },
        { t: "납땜", d: "땜납이 매끄럽게 퍼져 붙는 납땜성이 좋아져요.",
          svg: S.panel(S.layer(30, 150, 110, 12, 'tin') + S.layer(30, 162, 110, 40, 'copper') +
            `<path d="M44 150 Q85 100 126 150Z" fill="#b8c3cd" stroke="#6d7f8d" stroke-width="2"/>` + S.ok(85, 70, 12) + S.text(85, 100, '낮게 퍼짐', { size: 11, fill: C.green }) +
            S.layer(160, 160, 110, 40, '#8a5a3a') + `<circle cx="215" cy="140" r="22" fill="#b8c3cd" stroke="#6d7f8d" stroke-width="2"/>` + S.ng(215, 70, 12) + S.text(215, 100, '둥글게 맺힘', { size: 11, fill: C.red })) },
        { t: "산화 방지", d: "구리가 산화되어 납땜이 어려워지는 걸 막아요.",
          svg: S.panel(S.layer(30, 110, 110, 60, '#7a5a40', '산화 구리', '#fff') + S.layer(160, 100, 110, 14, 'tin') + S.layer(160, 114, 110, 56, 'copper') +
            S.tag(85, 70, '그냥 구리', { color: C.red }) + S.tag(215, 70, '주석 도금', { color: C.green }) +
            S.ng(85, 190, 11) + S.ok(215, 190, 11)) }
      ],
      points: [
        { k: "납땜성", v: "땜납이 잘 퍼지게 해 줘요" },
        { k: "쓰임", v: "전자 부품 단자·리드 등" },
        { k: "산화 방지", v: "구리 표면을 보호해요" }
      ],
      care: "주석 도금은 오래되면 가는 침(휘스커)이 자랄 수 있으니 사양과 후처리를 확인하세요.",
      related: ["접점 도금", "커넥터", "산화막", "구리 도금"]
    },

    "치환 도금": {
      hook: "서로 자리를 바꿔 앉으며 입혀지는 도금이에요.",
      steps: [
        { t: "자리 교환", d: "바탕 금속이 녹아 나가고 그 자리에 용액 속 금속이 붙어요.",
          svg: S.panel(S.layer(30, 150, 240, 50, 'base', '철 (바탕)', '#fff') +
            ion(90, 120, 'Fe', C.gray) + S.arrow(118, 128, 118, 92, 'gray', 2) + S.text(90, 82, '녹아 나감', { size: 11, fill: C.gray }) +
            ion(210, 56, 'Cu', '#d9824b') + S.arrow(210, 72, 210, 124, 'blue', 2) + S.atom(210, 140, 10, 'Cu', PL.copper, '#9a5a30') +
            S.arrow(120, 96, 180, 96, 'gold', 0) + S.tag(150, 24, '철과 구리가 자리 바꿈', { color: C.blue })) },
        { t: "얇게 멈춤", d: "바탕이 덮이면 반응이 멎어 아주 얇게만 생겨요.",
          svg: S.panel(S.layer(60, 80, 180, 8, 'copper') + S.layer(60, 88, 180, 70, 'base', '바탕', '#fff') +
            ion(100, 40, 'Cu', '#d9824b') + ion(200, 40, 'Cu', '#d9824b') + S.line(100, 60, 100, 76, C.red, 3) + S.line(200, 60, 200, 76, C.red, 3) +
            S.text(150, 190, '덮이면 더는 안 자라요', { size: 12, fill: C.navy }) + S.ng(260, 50, 11)) },
        { t: "전기 없이", d: "전기를 연결하지 않고 담그기만 해도 일어나요.",
          svg: S.panel(S.tank(60, 70, 180, 120, '#dfeaf5') + S.part(135, 100, 30, 60) + `<line x1="150" y1="40" x2="150" y2="100" stroke="#6d7f8d" stroke-width="3"/>` +
            S.emoji(150, 32, '🤲', 20) + S.atom(100, 130, 9, '', '#fff', C.blue) + S.atom(200, 140, 9, '', '#fff', C.blue) +
            S.arrow(112, 130, 130, 130, 'blue', 2) + S.arrow(188, 140, 170, 140, 'blue', 2) +
            S.tag(52, 40, '전선 없음', { color: C.red })) }
      ],
      points: [
        { k: "원리", v: "금속 이온화 경향의 차이를 이용해요" },
        { k: "얇은 층", v: "바탕이 덮이면 반응이 멈춰요" },
        { k: "무전류", v: "전기를 흘리지 않아도 돼요" }
      ],
      care: "바탕 금속이 녹아 나오므로 도금액이 오염되니 액 수명과 불순물 농도를 관리하세요.",
      related: ["침지 도금", "무전해 도금", "스트라이크 도금", "이온"]
    },

    "침지 도금": {
      hook: "담가 두기만 하는 도금 방법이에요.",
      steps: [
        { t: "담그기", d: "부품을 도금액에 그냥 담가 두기만 해요.",
          svg: S.panel(S.tank(50, 100, 200, 100, '#dfeaf5') + S.part(135, 130, 30, 52) + `<line x1="150" y1="40" x2="150" y2="130" stroke="#6d7f8d" stroke-width="3"/>` +
            S.arrow(150, 20, 150, 36, 'gray', 3) + S.text(210, 46, '전기 연결 없음', { size: 11, fill: C.red })) },
        { t: "시간 경과", d: "담근 시간 동안 표면에서 반응이 일어나 층이 생겨요.",
          svg: S.panel(S.layer(20, 140, 80, 30, 'base') + S.layer(110, 140, 80, 30, 'base') + S.layer(200, 140, 80, 30, 'base') +
            S.layer(20, 136, 80, 4, 'copper') + S.layer(110, 132, 80, 8, 'copper') + S.layer(200, 128, 80, 12, 'copper') +
            S.clock(60, 70, 14) + S.clock(150, 70, 18) + S.clock(240, 70, 22) +
            S.tag(60, 104, '조금', { color: C.gray }) + S.tag(150, 104, '더', { color: C.gray }) + S.tag(240, 104, '충분', { color: C.gray })) },
        { t: "방법 이름", d: "침지는 담그는 방법, 치환은 대표적인 반응이에요.",
          svg: S.panel(S.tag(80, 60, '침지 = 방법', { color: C.blue }) + S.emoji(80, 120, '🫗', 40) +
            S.tag(220, 60, '치환 = 반응', { color: C.green }) + S.atom(200, 120, 14, 'A', '#fff', C.gray) + S.atom(240, 120, 14, 'B', '#fff', C.blue) +
            S.arrow(206, 100, 234, 100, 'green', 2) + S.arrow(234, 146, 206, 146, 'green', 2) +
            S.line(150, 44, 150, 190, '#c3d0dc', 2, '4 4')) }
      ],
      points: [
        { k: "방법", v: "담가서 반응시키는 방식이에요" },
        { k: "대표 반응", v: "치환 반응이 가장 흔해요" },
        { k: "전기 없음", v: "정류기를 쓰지 않아요" }
      ],
      care: "담그는 시간과 액 온도에 따라 층이 달라지니 조건을 일정하게 지키세요.",
      related: ["치환 도금", "무전해 도금", "전기 도금", "도금액"]
    },

    "크롬 도금": {
      hook: "단단하고 반짝이는 크롬 갑옷이에요.",
      steps: [
        { t: "두 가지 목적", d: "장식용은 얇게, 경질용은 두껍게 입혀요.",
          svg: S.panel(`<rect x="36" y="80" width="14" height="80" rx="6" fill="${PL.chrome}" stroke="#6d7f8d" stroke-width="2"/><path d="M50 90 Q96 60 96 110 V130" stroke="${PL.chrome}" stroke-width="12" fill="none" stroke-linecap="round"/>` +
            S.flash(110, 70, .6, '#fff') + S.tag(76, 40, '장식용', { color: C.blue }) +
            S.pipe(170, 94, 100, 40) + S.tag(220, 40, '경질용', { color: C.gray }) +
            S.text(220, 168, '두꺼워요', { size: 12, fill: C.navy }) + S.text(76, 190, '얇아요', { size: 12, fill: C.navy })) },
        { t: "장식 구조", d: "장식용은 구리·니켈 위에 아주 얇은 크롬을 올려요.",
          svg: S.panel(S.stack(50, 40, 150, [['chrome', 8, ''], ['nickel', 36, '니켈'], ['copper', 34, '구리'], ['base', 62, '바탕 금속']]) +
            S.tag(244, 44, '크롬\n(얇음)', { color: C.blue }) + S.arrow(226, 44, 204, 44, 'blue', 2)) },
        { t: "단단함", d: "단단해서 긁힘에 강하고 푸른 기가 도는 은색으로 빛나요.",
          svg: S.panel(S.layer(40, 130, 220, 20, 'chrome', '크롬') + S.layer(40, 150, 220, 40, 'base') +
            `<path d="M130 60 L150 124 L170 60Z" fill="#8a97a3" stroke="#5f6c78" stroke-width="2"/>` + S.arrow(150, 40, 150, 62, 'gray', 3) +
            S.flash(150, 126, .5) + S.tag(220, 80, '튕겨 내요', { color: C.green }) + S.ok(60, 90, 12)) }
      ],
      points: [
        { k: "장식용", v: "얇게 입혀 외관을 얻어요" },
        { k: "경질용", v: "두껍게 입혀 마모에 견뎌요" },
        { k: "바탕층", v: "보통 니켈 등 밑층 위에 올려요" }
      ],
      care: "육가 크롬욕은 독성·발암성이 있는 약품이므로 환기와 보호구 없이는 다루지 마세요.",
      related: ["하드 크롬", "삼가 크롬", "광택 니켈", "육가 크롬"]
    },

    "하드 크롬": {
      hook: "마모와 맞서는 두꺼운 크롬 갑옷이에요.",
      steps: [
        { t: "마모 현장", d: "유압 실린더 로드는 계속 미끄러지며 닳아요.",
          svg: S.panel(`<rect x="30" y="70" width="240" height="90" rx="6" fill="#dfe6ec" stroke="#6d7f8d" stroke-width="3"/><rect x="20" y="96" width="190" height="38" fill="url(#pipe)" stroke="#6d7f8d" stroke-width="2"/>` +
            S.arrow(220, 115, 270, 115, 'gray', 3) + S.arrow(70, 52, 70, 90, 'red', 2) + S.text(150, 190, '왕복하며 문질러요', { size: 12, fill: C.navy }) +
            S.tag(110, 44, '실린더 로드', { color: C.gray })) },
        { t: "두꺼운 층", d: "장식 크롬보다 훨씬 두껍게 입혀 직접 마모를 받아요.",
          svg: S.panel(S.stack(30, 50, 100, [['chrome', 10, ''], ['nickel', 30, ''], ['base', 70, '']]) + S.tag(80, 190, '장식', { color: C.blue }) +
            S.stack(170, 50, 100, [['chrome', 58, '크롬'], ['base', 52, '강']]) + S.tag(220, 190, '하드 크롬', { color: C.gray }) +
            S.arrow(150, 100, 150, 100, 'gray', 0)) },
        { t: "수명 연장", d: "마모가 줄어 부품이 오래 가고 교체가 줄어요.",
          svg: S.panel(`<rect x="30" y="100" width="100" height="40" rx="4" fill="#b8c3cd" stroke="#6d7f8d" stroke-width="2"/><path d="M30 120 Q80 110 130 120" stroke="#d6453d" stroke-width="2" fill="none"/>` +
            S.tag(80, 70, '도금 없음', { color: C.red }) + S.ng(80, 175, 12) +
            `<rect x="170" y="100" width="100" height="40" rx="4" fill="${PL.chrome}" stroke="#6d7f8d" stroke-width="2"/>` + S.tag(220, 70, '하드 크롬', { color: C.green }) + S.ok(220, 175, 12) +
            S.gear(150, 40, 12)) }
      ],
      points: [
        { k: "두께", v: "장식 크롬보다 훨씬 두꺼워요" },
        { k: "목적", v: "경도와 내마모, 기능성 크롬이에요" },
        { k: "쓰임", v: "실린더·롤·금형 표면 등에 써요" }
      ],
      care: "두꺼운 크롬은 수소를 품기 쉬워 고강도 소재는 베이킹 같은 후처리를 확인하세요.",
      related: ["크롬 도금", "내마모성", "경도", "수소 제거 베이킹"]
    },

    "합금 도금": {
      hook: "두 금속을 섞어 한 번에 입히는 도금이에요.",
      steps: [
        { t: "이온 섞기", d: "도금액에 두 가지 이상의 금속 이온을 함께 넣어요.",
          svg: S.panel(S.tank(50, 60, 200, 130, '#e3ecf5') + ion(90, 120, 'A', C.blue) + ion(140, 100, 'B', C.red) + ion(190, 130, 'A', C.blue) + ion(150, 160, 'B', C.red) + ion(100, 165, 'B', C.red) +
            S.tag(150, 30, '두 금속 이온이 함께', { color: C.gray })) },
        { t: "한 층으로", d: "두 금속이 섞인 하나의 층으로 석출해요.",
          svg: S.panel(S.layer(30, 150, 240, 50, 'base', '바탕', '#fff') +
            S.atom(54, 136, 12, 'A', PL.zinc, C.gray) + S.atom(82, 136, 12, 'B', PL.copper, '#9a5a30') + S.atom(110, 136, 12, 'A', PL.zinc, C.gray) + S.atom(138, 136, 12, 'A', PL.zinc, C.gray) +
            S.atom(166, 136, 12, 'B', PL.copper, '#9a5a30') + S.atom(194, 136, 12, 'A', PL.zinc, C.gray) + S.atom(222, 136, 12, 'B', PL.copper, '#9a5a30') + S.atom(250, 136, 12, 'A', PL.zinc, C.gray) +
            S.arrow(150, 50, 150, 112, 'blue', 3) + S.tag(150, 30, '합금층', { color: C.green })) },
        { t: "성질 조절", d: "성분 비율에 따라 내식성·경도 등이 달라져요.",
          svg: S.panel(`<rect x="40" y="90" width="220" height="22" rx="11" fill="#fff" stroke="#3b5163" stroke-width="2"/><rect x="40" y="90" width="110" height="22" rx="11" fill="${C.blue}"/><rect x="150" y="90" width="110" height="22" rx="11" fill="${C.red}" opacity=".0"/>` +
            `<circle cx="150" cy="101" r="14" fill="${C.gold}" stroke="#a8841c" stroke-width="2"/>` +
            S.text(60, 140, 'A 많이', { size: 12, fill: C.blue }) + S.text(240, 140, 'B 많이', { size: 12, fill: C.gray }) +
            S.tag(150, 50, '비율을 맞추면', { color: C.gray }) + S.text(150, 190, '성질이 달라져요', { size: 13, fill: C.navy })) }
      ],
      points: [
        { k: "합금", v: "금속 2종 이상이 섞인 도금층이에요" },
        { k: "비율", v: "성분 비율이 성능을 정해요" },
        { k: "예", v: "아연니켈 등이 대표적이에요" }
      ],
      care: "성분 비율이 흔들리지 않게 금속 이온 농도와 전류 조건을 함께 관리하세요.",
      related: ["아연니켈 도금", "다층 도금", "금속 이온", "도금액"]
    },

    "바렐 도금": {
      hook: "빨래통처럼 굴리며 작은 부품을 한꺼번에 입혀요.",
      steps: [
        { t: "부품 담기", d: "나사·와셔 같은 작은 부품을 통에 가득 담아요.",
          svg: S.panel(`<ellipse cx="150" cy="170" rx="90" ry="14" fill="#d9e1e8"/><path d="M60 100 H240 V170 A90 14 0 0 1 60 170Z" fill="#fff" fill-opacity=".6" stroke="#6d7f8d" stroke-width="3"/>` +
            S.bolt(100, 80, .5) + S.gear(150, 70, 12) + S.bolt(200, 50, .5) + S.gear(100, 140, 10) + S.gear(180, 140, 10) + S.gear(215, 125, 9) +
            S.arrow(150, 20, 150, 40, 'gray', 2.5) + S.tag(250, 40, '작은 부품', { color: C.gray })) },
        { t: "회전 도금", d: "통이 돌며 부품이 서로 굴러 도금액이 구멍으로 드나들어요.",
          svg: S.panel(S.tank(30, 60, 240, 140, '#d9ecf7', { electrodes: true }) +
            `<polygon points="115,100 185,100 205,130 185,160 115,160 95,130" fill="#fff" fill-opacity=".5" stroke="#6d7f8d" stroke-width="3"/>` +
            S.gear(135, 130, 8) + S.gear(160, 138, 8) + S.gear(150, 118, 7) +
            S.arrow(215, 100, 215, 160, 'gold', 2.5) + S.arrow(70, 125, 92, 125, 'blue', 2) + S.arrow(250, 125, 208, 125, 'blue', 2) +
            S.tag(150, 36, '구멍으로 도금액 출입', { color: C.blue })) },
        { t: "주의점", d: "부품끼리 부딪혀 흠이 나기 쉬워 약한 부품은 조심해요.",
          svg: S.panel(S.gear(80, 100, 24) + S.gear(150, 100, 24) + S.flash(115, 100, .8, '#fff') +
            S.arrow(70, 160, 100, 140, 'red', 2) + S.tag(200, 70, '부딪힘', { color: C.red }) +
            S.tag(150, 190, '얇거나 긁히기 쉬운 부품은 불리', { color: C.gray }) + S.ng(250, 100, 14)) }
      ],
      points: [
        { k: "대량 처리", v: "작은 부품을 한꺼번에 처리해요" },
        { k: "대상", v: "나사·와셔·핀 같은 소형 부품" },
        { k: "랙과 차이", v: "하나씩 걸지 않고 굴려요" }
      ],
      care: "부품이 서로 엉키거나 포개지면 도금 두께가 고르지 않으니 투입량을 지키세요.",
      related: ["랙 도금", "전류 분포", "도금 속도", "스크래치"]
    },

    "랙 도금": {
      hook: "옷걸이에 하나씩 걸어 정성껏 입히는 도금이에요.",
      steps: [
        { t: "걸이 고정", d: "부품을 걸이나 랙에 하나씩 단단히 고정해요.",
          svg: S.panel(`<rect x="30" y="34" width="240" height="8" rx="3" fill="#8a97a3"/>` +
            [60, 120, 180, 240].map(x => `<line x1="${x}" y1="42" x2="${x}" y2="90" stroke="#6d7f8d" stroke-width="3"/>` + S.part(x - 16, 90, 32, 70)).join('') +
            S.tag(150, 190, '하나씩 고정', { color: C.gray })) },
        { t: "위치 조절", d: "방향과 간격을 조절해 도금이 고르게 입혀지게 해요.",
          svg: S.panel(S.tank(20, 60, 260, 140, '#d9ecf7') + S.layer(30, 54, 10, 120, '#c9a227') + S.layer(260, 54, 10, 120, '#c9a227') +
            S.part(100, 90, 24, 64) + S.part(176, 90, 24, 64) +
            S.arrow(46, 120, 96, 120, 'blue', 2) + S.arrow(254, 120, 204, 120, 'blue', 2) +
            S.tag(150, 36, '양극을 바라보게', { color: C.blue })) },
        { t: "알맞은 부품", d: "크거나 복잡한 모양은 랙에 걸어 처리해요.",
          svg: S.panel(S.emoji(70, 90, '🔧', 44) + S.tag(70, 124, '큰 부품', { color: C.gray }) +
            S.gear(160, 90, 26) + S.tag(160, 134, '복잡한 모양', { color: C.gray }) +
            S.emoji(240, 90, '🪝', 40) + S.tag(240, 124, '랙에', { color: C.green }) +
            S.text(150, 190, '부품마다 접촉 자리를 관리해요', { size: 12, fill: C.navy })) }
      ],
      points: [
        { k: "방식", v: "걸이에 하나씩 걸어 도금해요" },
        { k: "장점", v: "방향·간격 조절이 쉬워요" },
        { k: "바렐과 차이", v: "큰 부품, 정밀한 외관에 알맞아요" }
      ],
      care: "랙 접촉 자국이 남는 자리가 있으니 외관면을 피해 걸이 위치를 정하세요.",
      related: ["바렐 도금", "걸이(랙)", "전류 분포", "가장자리 효과"]
    },

    "화학 니켈 도금": {
      hook: "전기 없이 약품끼리 반응해 입혀지는 니켈이에요.",
      steps: [
        { t: "도금액", d: "니켈 이온과 환원제가 든 액을 정해진 온도로 가열해요.",
          svg: S.panel(S.tank(60, 80, 180, 110, '#d6ecdc') + S.part(135, 106, 30, 60) +
            ion(90, 150, 'Ni', '#5a8a6a') + S.atom(200, 150, 11, 'R', '#ffe3a8', '#c98a10') +
            S.thermo(30, 60, 50, .8) + S.bubbles(150, 90, 4, 80, '#c98a10') +
            S.tag(150, 36, 'Ni²⁺ + 환원제', { color: C.green })) },
        { t: "표면 반응", d: "부품 표면에서 반응이 일어나 니켈이 차곡차곡 쌓여요.",
          svg: S.panel(S.layer(30, 160, 240, 40, 'base', '부품', '#fff') +
            S.layer(30, 140, 240, 20, 'nickel', '니켈층') +
            ion(80, 70, 'Ni', '#5a8a6a') + S.atom(150, 90, 11, 'R', '#ffe3a8', '#c98a10') + ion(220, 70, 'Ni', '#5a8a6a') +
            S.arrow(80, 84, 80, 134, 'blue', 2) + S.arrow(150, 104, 150, 134, 'gold', 2) + S.arrow(220, 84, 220, 134, 'blue', 2)) },
        { t: "고른 두께", d: "구멍 안쪽·모서리까지 전기 도금보다 고르게 입혀져요.",
          svg: S.panel(`<rect x="40" y="60" width="90" height="110" rx="6" fill="#b8c3cd" stroke="${C.green}" stroke-width="5"/>` + `<rect x="170" y="60" width="90" height="110" rx="6" fill="#b8c3cd" stroke="${C.red}" stroke-width="5"/>` +
            `<rect x="166" y="56" width="16" height="16" rx="5" fill="${C.red}"/><rect x="248" y="56" width="16" height="16" rx="5" fill="${C.red}"/>` +
            S.tag(85, 36, '화학 니켈', { color: C.green }) + S.tag(215, 36, '전기 도금', { color: C.red }) + S.text(85, 195, '두께 고름', { size: 12, fill: C.green }) + S.text(215, 195, '모서리 두꺼움', { size: 12, fill: C.red })) }
      ],
      points: [
        { k: "무전해 니켈", v: "무전해 도금 중 니켈 도금이에요" },
        { k: "균일성", v: "복잡한 모양도 두께가 일정해요" },
        { k: "층 성질", v: "환원제에 따라 성분이 달라져요" }
      ],
      care: "욕 온도와 pH가 벗어나면 도금액이 분해될 수 있으니 규정 범위로 관리하세요.",
      related: ["무전해 도금", "니켈 도금", "화학동 도금", "욕 온도"]
    },

    "화학동 도금": {
      hook: "전기가 안 통하는 곳에 구리 씨앗을 심어요.",
      steps: [
        { t: "전기 안 통함", d: "기판 수지는 전기가 안 통해 바로 전기 도금하기 어려워요.",
          svg: S.panel(`<rect x="60" y="50" width="180" height="130" rx="6" fill="#d8c9a0" stroke="#a58a3a" stroke-width="2"/><rect x="132" y="50" width="36" height="130" fill="#eef5fb" stroke="#a58a3a" stroke-width="2"/>` +
            S.tag(150, 30, '기판 수지 (절연)', { color: C.gray }) + S.zap(80, 110, .8) + S.line(60, 90, 100, 130, C.red, 3) + S.line(100, 90, 60, 130, C.red, 3) +
            S.tag(150, 196, '구멍 벽에 전기가 안 통해요', { color: C.red })) },
        { t: "촉매 후 구리", d: "촉매를 먼저 붙이면 구리가 화학 반응으로 쌓여요.",
          svg: S.panel(S.layer(30, 150, 240, 50, '#d8c9a0', '수지 표면') +
            [50, 90, 130, 170, 210, 250].map(x => `<circle cx="${x}" cy="146" r="5" fill="#6b4ba8"/>`).join('') +
            ion(80, 70, 'Cu', '#d9824b') + ion(180, 60, 'Cu', '#d9824b') + S.arrow(80, 84, 90, 132, 'blue', 2) + S.arrow(180, 74, 170, 132, 'blue', 2) +
            S.tag(222, 100, '촉매 입자', { color: '#6b4ba8' }) + S.arrow(222, 114, 214, 140, 'gray', 1.5)) },
        { t: "씨앗층 위에", d: "얇은 구리 씨앗층 위에 전기 구리 도금을 더 쌓아요.",
          svg: S.panel(S.layer(40, 60, 220, 30, 'copper', '전기 구리 도금') + S.layer(40, 90, 220, 8, '#f0b88c') + S.layer(40, 98, 220, 70, '#d8c9a0', '수지') +
            S.tag(150, 188, '씨앗층 = 화학동', { color: C.red }) + S.arrow(60, 188, 40, 100, 'red', 0) + S.arrow(236, 40, 236, 56, 'blue', 2) + S.ok(262, 120, 11)) }
      ],
      points: [
        { k: "목적", v: "절연체 표면을 전기가 통하게 해요" },
        { k: "씨앗층", v: "전기 구리 도금의 발판이 돼요" },
        { k: "쓰임", v: "기판 구멍(비아) 벽 도금 전 단계" }
      ],
      care: "촉매 처리가 빠진 부분은 구리가 안 입혀져 미도금이 되니 활성화 상태를 확인하세요.",
      related: ["무전해 도금", "구리 도금", "촉매", "미도금"]
    }

  };
})());
