/* 검사·품질 분야 그림백과 페이지 (24개) */
(function () {
  const P = S.panel, T = S.text, G = S.tag, C = S.C, N = '#172b3b';
  const wave = (x0, y0, n, a, w) => { let d = `M${x0} ${y0}`; for (let i = 0; i < n; i++) d += ` l${w / 2} ${i % 2 ? a : -a} l${w / 2} ${i % 2 ? -a : a}`; return d; };

  window.PAGES = window.PAGES || {};
  Object.assign(window.PAGES, {

    "각인": {
      hook: "표시를 새기면 도금이 그 위를 덮어요.",
      steps: [
        { t: "새기기", d: "펀치나 레이저로 글자를 표면에 새겨요.",
          svg: P(S.metal(40, 140, 220, 56, false) + T(150, 175, 'A1', { size: 22, fill: '#eef5fb' }) +
            `<rect x="120" y="50" width="60" height="44" rx="5" fill="#8a97a3" stroke="#3b5163" stroke-width="2"/><rect x="134" y="94" width="32" height="14" fill="#5f6c78"/>` +
            T(150, 77, '펀치', { size: 12, fill: '#fff' }) + S.arrow(150, 112, 150, 134, 'red') + S.emoji(232, 80, '🔨', 34)) },
        { t: "도금 후", d: "도금층이 홈을 덮어 글자가 얕아질 수 있어요.",
          svg: P(`<polygon points="30,130 130,130 130,150 170,150 170,130 270,130 270,200 30,200" fill="#7b8794" stroke="#5f6c78"/>` +
            `<path d="M30 125 H126 V145 H174 V125 H270" fill="none" stroke="#f0c43c" stroke-width="8"/>` +
            G(80, 95, '도금층', { color: C.gold }) + G(150, 80, '홈이 얕아져요', { color: C.red }) + S.arrow(150, 94, 150, 138, 'red', 2)) },
        { t: "확인", d: "도금 후에도 글자가 또렷한지 확대해서 봐요.",
          svg: P(`<rect x="20" y="80" width="116" height="80" rx="5" fill="#cfd8e0" stroke="#5f6c78"/><rect x="164" y="80" width="116" height="80" rx="5" fill="#f0c43c" stroke="#5f6c78"/>` +
            T(78, 130, 'A1', { size: 26, fill: N }) + T(222, 130, 'A1', { size: 26, fill: '#f0c43c', stroke: '#e9cf7a' }) +
            S.ok(78, 60, 11) + S.ng(222, 60, 11) + G(78, 188, '또렷해요', { color: C.green }) + G(222, 188, '흐릿해요', { color: C.red }) + S.magnifier(150, 40, 12)) }
      ],
      points: [
        { k: "깊이", v: "홈이 얕으면 도금에 묻혀요" },
        { k: "시점", v: "도금 전·후 중 언제 새길지 정해요" },
        { k: "확인", v: "도금 후 육안·확대경으로 읽어 봐요" }
      ],
      care: "각인 시점과 깊이를 미리 정하고, 도금 후에도 표시가 읽히는지 꼭 확인하세요.",
      related: ["도금 두께", "균일 전착성", "표면 거칠기"]
    },

    "검전": {
      hook: "전기가 남았는지 눈으로 확인하는 안전 습관이에요.",
      steps: [
        { t: "전원 차단", d: "정비 전에 스위치를 내려 전원을 끊어요.",
          svg: P(`<rect x="90" y="40" width="120" height="140" rx="6" fill="#dfe6ec" stroke="#5f6c78" stroke-width="2.5"/>` + T(150, 62, '분전반', { size: 12 }) +
            `<rect x="138" y="80" width="24" height="70" rx="4" fill="#fff" stroke="#3b5163" stroke-width="2"/><rect x="140" y="124" width="20" height="24" rx="3" fill="#d6453d"/>` + G(150, 168, 'OFF', { color: C.red }) +
            S.zap(246, 100, 1.1) + S.ng(250, 130, 10) + S.worker(44, 150, 1.2)) },
        { t: "검전하기", d: "검전기를 단자에 대어 전압이 없는지 확인해요.",
          svg: P(`<rect x="30" y="70" width="100" height="60" rx="9" fill="#f0ad24" stroke="#a87b0b" stroke-width="2.5"/><rect x="40" y="80" width="80" height="24" rx="3" fill="#fff"/>` + T(80, 97, '전압 없음', { size: 11, fill: C.green }) +
            `<rect x="170" y="140" width="80" height="30" rx="4" fill="#9fb0bd" stroke="#5f6c78"/><circle cx="190" cy="150" r="6" fill="#c9a227"/><circle cx="230" cy="150" r="6" fill="#c9a227"/>` +
            S.line(130, 108, 188, 148, C.red, 3) + S.line(130, 120, 228, 148, N, 3) + G(150, 40, '단자에 대고 확인', { color: C.blue })) },
        { t: "안전 작업", d: "잠금과 표지를 걸고 안심하고 정비해요.",
          svg: P(S.ground(190) + S.worker(80, 140, 1.7) + S.emoji(190, 120, '🔒', 44) + G(190, 156, '잠금·표지', { color: C.red }) + S.ok(250, 60, 13) + T(150, 34, '작업 시작!', { size: 14, fill: C.green })) }
      ],
      points: [
        { k: "순서", v: "차단 → 검전 → 잠금 → 작업" },
        { k: "확인", v: "검전기가 정상인지 먼저 확인해요" },
        { k: "표지", v: "작업 중임을 모두가 알게 해요" }
      ],
      care: "전원을 끊었다고 믿지 말고 반드시 검전하고, 사내 안전 절차를 따르세요.",
      related: ["경도", "불량률"]
    },

    "경도": {
      hook: "눌러도 긁어도 얼마나 버티는지 보는 표면의 힘이에요.",
      steps: [
        { t: "눌러 보기", d: "뾰족한 끝으로 눌렀을 때 자국이 얼마나 깊은지 봐요.",
          svg: P(`<rect x="20" y="120" width="120" height="60" rx="3" fill="#b8c3cd" stroke="#6d7f8d"/><rect x="160" y="120" width="120" height="60" rx="3" fill="#7b8794" stroke="#5f6c78"/>` +
            `<polygon points="60,120 100,120 80,160" fill="#eef5fb" stroke="#6d7f8d"/><polygon points="212,120 228,120 220,132" fill="#eef5fb" stroke="#5f6c78"/>` +
            `<polygon points="72,96 88,96 80,152" fill="#3b5163"/><polygon points="212,96 228,96 220,134" fill="#3b5163"/>` +
            S.arrow(80, 40, 80, 70, 'gray') + S.arrow(220, 40, 220, 70, 'gray') + G(80, 204, '자국 깊음', { color: C.red }) + G(220, 204, '자국 얕음', { color: C.green })) },
        { t: "긁어 보기", d: "바늘로 긁었을 때 흠이 얼마나 생기는지 봐요.",
          svg: P(`<rect x="20" y="90" width="260" height="100" rx="5" fill="#7b8794" stroke="#5f6c78"/>` +
            `<path d="M40 122 L240 122" stroke="#e8edf1" stroke-width="9" stroke-linecap="round"/><path d="M40 166 L240 166" stroke="#e8edf1" stroke-width="2" stroke-linecap="round"/>` +
            G(150, 104, '무른 면: 굵게 긁힘', { color: C.red }) + G(150, 148, '단단한 면: 가늘게', { color: C.green }) + S.ng(264, 122, 9) + S.ok(264, 166, 9) +
            `<polygon points="30,112 40,122 30,132" fill="#3b5163"/>`) },
        { t: "주의점", d: "단단해도 잘 깨지면 쉽게 갈라질 수 있어요.",
          svg: P(`<rect x="70" y="110" width="160" height="70" rx="4" fill="#cfd8e0" stroke="#5f6c78" stroke-width="2"/>` +
            `<path d="M150 110 L140 128 L158 142 L144 160 L152 180" fill="none" stroke="#d6453d" stroke-width="3"/><path d="M158 142 L196 150" fill="none" stroke="#d6453d" stroke-width="2.5"/>` +
            S.emoji(150, 84, '🔨', 38) + S.flash(150, 110, .7) + G(150, 206, '단단해도 깨질 수 있어요', { color: C.red })) }
      ],
      points: [
        { k: "뜻", v: "눌림·긁힘에 버티는 정도예요" },
        { k: "측정", v: "압자로 눌러 자국 크기를 비교해요" },
        { k: "함께 보기", v: "단단함과 깨짐(취성)을 같이 봐요" }
      ],
      care: "경도 값은 시험 방법과 하중 조건에 따라 달라지니 같은 조건끼리 비교하세요.",
      related: ["내마모성", "밀착력", "수소취성"]
    },

    "내마모성": {
      hook: "문지르고 긁혀도 쉽게 닳지 않는 힘이에요.",
      steps: [
        { t: "마찰 발생", d: "맞닿아 움직이는 부분이 서로 문질러져요.",
          svg: P(S.layer(40, 150, 220, 20, 'gold') + S.layer(40, 170, 220, 30, 'base') + S.part(110, 110, 80, 40, '#aab5c0') +
            S.arrow(130, 60, 80, 60, 'gray') + S.arrow(170, 60, 220, 60, 'gray') + S.arrow(150, 78, 150, 106, 'red') +
            `<circle cx="100" cy="147" r="2.5" fill="#6d7f8d"/><circle cx="206" cy="146" r="2" fill="#6d7f8d"/><circle cx="218" cy="143" r="2.5" fill="#6d7f8d"/>` + G(150, 28, '문지름 + 누름', { color: C.red })) },
        { t: "닳는 비교", d: "도금이 약하면 닳아 바탕이 드러나요.",
          svg: P(`<rect x="30" y="140" width="100" height="50" fill="#7b8794" stroke="#5f6c78"/><rect x="30" y="128" width="26" height="12" fill="#f0c43c"/><rect x="104" y="128" width="26" height="12" fill="#f0c43c"/><rect x="56" y="136" width="48" height="4" fill="#d6453d"/>` +
            `<rect x="170" y="140" width="100" height="50" fill="#7b8794" stroke="#5f6c78"/><rect x="170" y="116" width="100" height="24" fill="#f0c43c" stroke="#5f6c78"/>` +
            S.ng(80, 92, 12) + S.ok(220, 92, 12) + G(80, 212, '다 닳음', { color: C.red }) + G(220, 212, '잘 버팀', { color: C.green })) },
        { t: "반복 사용", d: "꽂고 빼기를 되풀이해도 도금이 남아야 해요.",
          svg: P(`<rect x="100" y="125" width="100" height="65" rx="5" fill="#9fb0bd" stroke="#5f6c78" stroke-width="2"/><rect x="132" y="125" width="36" height="22" fill="#eef5fb"/>` +
            `<rect x="140" y="40" width="20" height="100" rx="3" fill="#f0c43c" stroke="#a87b0b" stroke-width="2"/>` +
            S.arrow(215, 120, 215, 56, 'gray') + S.arrow(235, 56, 235, 120, 'gray') + G(60, 70, '꽂고 빼기', { color: C.blue }) + G(60, 100, '수없이 반복', { color: C.blue }) + S.ok(60, 150, 12)) }
      ],
      points: [
        { k: "필요한 곳", v: "움직이는 부품, 접점, 슬라이드" },
        { k: "영향", v: "경도·두께·윤활에 따라 달라져요" },
        { k: "선택", v: "용도에 맞는 도금 종류를 골라요" }
      ],
      care: "내마모성이 좋아도 두께가 부족하면 금방 닳으니 규격 두께를 확인하세요.",
      related: ["경도", "도금 두께", "밀착력", "내식성"]
    },

    "내식성": {
      hook: "습기와 소금물에도 녹슬지 않고 버티는 힘이에요.",
      steps: [
        { t: "녹의 원인", d: "비, 습기, 염분이 금속 표면에 닿아요.",
          svg: P(S.cloud(150, 44, 1.6) + S.drop(90, 100) + S.drop(150, 112) + S.drop(210, 100) + S.metal(40, 150, 220, 40, false) +
            S.emoji(256, 80, '🧂', 26) + G(52, 70, '습기·비', { color: C.blue })) },
        { t: "비교", d: "도금이 없으면 녹이 생기고 있으면 깨끗해요.",
          svg: P(`<rect x="20" y="100" width="115" height="90" rx="4" fill="#7b8794" stroke="#5f6c78"/><circle cx="50" cy="130" r="9" fill="#b5651d"/><circle cx="90" cy="150" r="12" fill="#b5651d"/><circle cx="62" cy="168" r="7" fill="#b5651d"/><circle cx="108" cy="122" r="6" fill="#b5651d"/>` +
            `<rect x="165" y="100" width="115" height="90" rx="4" fill="#cfd8e0" stroke="#5f6c78"/>` +
            S.ng(77, 72, 12) + S.ok(222, 72, 12) + G(77, 210, '도금 없음', { color: C.red }) + G(222, 210, '도금 있음', { color: C.green })) },
        { t: "차단", d: "도금층이 물과 염분이 바탕에 닿는 걸 막아요.",
          svg: P(S.layer(40, 128, 220, 22, 'nickel', '도금층') + S.layer(40, 150, 220, 50, 'base') +
            S.arrow(80, 56, 80, 122, 'blue') + S.arrow(150, 56, 150, 122, 'blue') + S.arrow(220, 56, 220, 122, 'blue') +
            S.ng(80, 100, 9) + S.ng(150, 100, 9) + S.ng(220, 100, 9) + G(150, 28, '물·염분 차단', { color: C.blue }) + S.ok(150, 178, 12)) }
      ],
      points: [
        { k: "시험", v: "염수분무 등으로 비교해요" },
        { k: "결정 요소", v: "도금 종류·두께·핀홀 유무" },
        { k: "환경", v: "쓰는 곳에 따라 요구가 달라요" }
      ],
      care: "도금에 핀홀이나 흠이 있으면 그곳부터 녹이 시작되니 외관도 함께 보세요.",
      related: ["염수분무시험", "도금 두께", "밀착력"]
    },

    "도금 두께": {
      hook: "도금층이 쌓인 높이, 얇아도 너무 얇아도 문제예요.",
      steps: [
        { t: "쌓인 높이", d: "바탕 위에 올라간 도금층의 두께를 말해요.",
          svg: P(S.stack(70, 80, 160, [['gold', 12, ''], ['nickel', 24, '니켈'], ['base', 60, '바탕 금속']]) +
            S.line(244, 80, 256, 80) + S.line(244, 116, 256, 116) + S.line(250, 80, 250, 116, N, 2) + T(272, 102, '두께', { size: 11 }) + G(150, 44, '위에서 쌓인 높이', { color: C.blue })) },
        { t: "위치별 차이", d: "모서리는 두껍고 안쪽 홈은 얇아지기 쉬워요.",
          svg: P(`<polygon points="60,70 110,70 110,150 190,150 190,70 240,70 240,200 60,200" fill="#7b8794" stroke="#5f6c78"/>` +
            `<path d="M110 70 V150 H190 V70" fill="none" stroke="#f0c43c" stroke-width="3"/>` + `<circle cx="110" cy="70" r="9" fill="#f0c43c"/><circle cx="190" cy="70" r="9" fill="#f0c43c"/><circle cx="60" cy="70" r="9" fill="#f0c43c"/><circle cx="240" cy="70" r="9" fill="#f0c43c"/>` +
            G(150, 36, '모서리는 두꺼움', { color: C.red }) + G(150, 110, '안쪽\n얇음', { color: C.blue })) },
        { t: "맞춰야 해요", d: "너무 얇아도, 너무 두꺼워도 기능에 문제가 생겨요.",
          svg: P(`<rect x="35" y="160" width="50" height="30" fill="#7b8794"/><rect x="125" y="160" width="50" height="30" fill="#7b8794"/><rect x="215" y="160" width="50" height="30" fill="#7b8794"/>` +
            `<rect x="35" y="154" width="50" height="6" fill="#f0c43c" stroke="#5f6c78"/><rect x="125" y="144" width="50" height="16" fill="#f0c43c" stroke="#5f6c78"/><rect x="215" y="120" width="50" height="40" fill="#f0c43c" stroke="#5f6c78"/>` +
            S.ng(60, 90, 11) + S.ok(150, 90, 11) + S.ng(240, 90, 11) + T(60, 212, '너무 얇음', { size: 11 }) + T(150, 212, '적정', { size: 11 }) + T(240, 212, '너무 두꺼움', { size: 11 })) }
      ],
      points: [
        { k: "단위", v: "마이크로미터(µm)로 표시해요" },
        { k: "얇으면", v: "보호·내식 성능이 부족해요" },
        { k: "두꺼우면", v: "치수가 안 맞고 비용이 늘어요" }
      ],
      care: "측정 위치마다 두께가 다르니 규격이 정한 위치에서 재고 비교하세요.",
      related: ["두께 측정", "균일 전착성", "도금량", "도금 속도"]
    },

    "도전율": {
      hook: "전기가 얼마나 술술 지나가는지 나타내는 값이에요.",
      steps: [
        { t: "전기의 길", d: "금속 속 전자가 움직이며 전기가 흘러요.",
          svg: P(`<rect x="30" y="95" width="240" height="40" rx="6" fill="url(#pipe)" stroke="#6d7f8d"/>` +
            [55, 105, 155, 205, 245].map((x, i) => `<circle cx="${x}" cy="${i % 2 ? 123 : 106}" r="5.5" fill="#2f8fe0" stroke="#1a5fa3"/>`).join('') +
            S.arrow(60, 165, 240, 165, 'blue') + G(150, 56, '전자의 흐름', { color: C.blue })) },
        { t: "차이", d: "잘 통하는 금속은 전기가 잘 흘러 불이 밝아요.",
          svg: P(`<circle cx="75" cy="60" r="24" fill="#ffe27a" stroke="#c98a10" stroke-width="2.5"/><circle cx="225" cy="60" r="24" fill="#f3efe0" stroke="#b9b29a" stroke-width="2.5"/>` +
            `<g stroke="#f0ad24" stroke-width="3" stroke-linecap="round"><line x1="75" y1="22" x2="75" y2="14"/><line x1="40" y1="34" x2="34" y2="28"/><line x1="110" y1="34" x2="116" y2="28"/></g>` +
            `<rect x="30" y="130" width="90" height="26" rx="5" fill="url(#pipe)" stroke="#6d7f8d"/><rect x="180" y="130" width="90" height="26" rx="5" fill="url(#pipe)" stroke="#6d7f8d"/>` +
            [45, 62, 79, 96, 112].map((x, i) => `<circle cx="${x}" cy="${i % 2 ? 147 : 138}" r="4.5" fill="#2f8fe0"/>`).join('') + `<circle cx="205" cy="143" r="4.5" fill="#2f8fe0"/><circle cx="245" cy="143" r="4.5" fill="#2f8fe0"/>` +
            S.line(75, 84, 75, 130, N, 2) + S.line(225, 84, 225, 130, N, 2) + G(75, 190, '잘 흐름', { color: C.green }) + G(225, 190, '덜 흐름', { color: C.red })) },
        { t: "접점에서", d: "접촉 부분은 도금으로 저항을 낮추려 해요.",
          svg: P(`<rect x="80" y="50" width="140" height="42" rx="4" fill="#7b8794" stroke="#5f6c78"/><rect x="80" y="92" width="140" height="8" fill="#f0c43c" stroke="#a87b0b"/>` +
            `<rect x="80" y="104" width="140" height="8" fill="#f0c43c" stroke="#a87b0b"/><rect x="80" y="112" width="140" height="42" rx="4" fill="#7b8794" stroke="#5f6c78"/>` +
            T(150, 76, '단자 A', { size: 11, fill: '#fff' }) + T(150, 138, '단자 B', { size: 11, fill: '#fff' }) +
            S.arrow(34, 80, 76, 80, 'blue') + S.arrow(224, 130, 266, 130, 'blue') + G(150, 190, '접촉 저항도 확인', { color: C.blue })) }
      ],
      points: [
        { k: "높으면", v: "전기가 잘 통하는 재료예요" },
        { k: "접점", v: "도전율과 접촉 저항을 함께 봐요" },
        { k: "영향", v: "순도·표면 상태에 따라 달라져요" }
      ],
      care: "도금층이 두껍다고 접촉이 좋아지는 건 아니니 재료와 규격을 함께 확인하세요.",
      related: ["도금 두께", "밀착력", "내식성"]
    },

    "두께 측정": {
      hook: "도금이 기준만큼 입혀졌는지 재는 자예요.",
      steps: [
        { t: "측정기", d: "측정기 끝을 제품에 대고 값을 읽어요.",
          svg: P(`<rect x="160" y="30" width="110" height="66" rx="10" fill="#3b5163" stroke="#172b3b" stroke-width="2"/><rect x="172" y="42" width="86" height="26" rx="3" fill="#dff6e6"/>` + T(215, 60, '측정값', { size: 12, fill: C.green }) +
            `<rect x="209" y="96" width="12" height="38" fill="#9fb0bd" stroke="#5f6c78"/>` + S.layer(100, 134, 170, 14, 'nickel') + S.layer(100, 148, 170, 42, 'base') + G(60, 166, '도금층', { color: C.blue }) + S.arrow(86, 160, 118, 142, 'blue', 2)) },
        { t: "위치 정하기", d: "측정할 자리를 정해 같은 곳을 반복해서 재요.",
          svg: P(S.part(40, 80, 220, 90) + [[75, 105, 1], [150, 105, 2], [225, 105, 3], [100, 150, 4], [200, 150, 5]].map(a => `<circle cx="${a[0]}" cy="${a[1]}" r="12" fill="#fff" stroke="${C.red}" stroke-width="2.5"/>` + T(a[0], a[1] + 4, a[2], { size: 12, fill: C.red })).join('') + G(150, 42, '정한 위치를 반복 측정', { color: C.blue })) },
        { t: "방식 3가지", d: "소재와 코팅에 따라 알맞은 방식을 골라요.",
          svg: P(`<rect x="12" y="58" width="82" height="100" rx="8" fill="#fff" stroke="#5a86a8" stroke-width="2"/><rect x="109" y="58" width="82" height="100" rx="8" fill="#fff" stroke="#5a86a8" stroke-width="2"/><rect x="206" y="58" width="82" height="100" rx="8" fill="#fff" stroke="#5a86a8" stroke-width="2"/>` +
            S.emoji(53, 112, '🧲', 38) + S.emoji(150, 112, '〰️', 34) + T(247, 112, 'X', { size: 38, fill: C.red }) + `<path d="M222 126 l-6 14 M247 126 v16 M272 126 l6 14" stroke="${C.red}" stroke-width="2.5" fill="none"/>` +
            T(53, 186, '자석식', { size: 12 }) + T(150, 186, '와전류식', { size: 12 }) + T(247, 186, 'X선식', { size: 12 })) }
      ],
      points: [
        { k: "자석식", v: "철 위 비자성 도금층" },
        { k: "와전류식", v: "전도성 금속 위 비전도 코팅" },
        { k: "X선식", v: "작은 부위·여러 층도 잴 수 있어요" }
      ],
      care: "측정기는 기준 시편으로 먼저 교정하고, 같은 방법·위치로 재세요.",
      related: ["자석식 두께 측정", "와전류식 두께 측정", "도금 두께", "도금량"]
    },

    "밀착력": {
      hook: "도금이 바탕에 얼마나 단단히 붙었는지의 힘이에요.",
      steps: [
        { t: "붙는 모습", d: "도금층이 바탕의 요철에 맞물려 붙어 있어요.",
          svg: P(S.layer(20, 90, 260, 66, 'gold') + `<path d="M20 230 V150 L40 134 L60 156 L80 134 L100 156 L120 134 L140 156 L160 134 L180 156 L200 134 L220 156 L240 134 L260 156 L280 140 V230Z" fill="#7b8794" stroke="#5f6c78"/>` +
            S.arrow(150, 84, 150, 40, 'red') + G(222, 50, '떼려는 힘', { color: C.red }) + G(150, 192, '맞물려 붙어요', { color: C.green })) },
        { t: "안 붙으면", d: "기름·이물질이 있으면 그 자리가 들떠요.",
          svg: P(`<rect x="30" y="148" width="240" height="52" fill="#7b8794" stroke="#5f6c78"/><rect x="30" y="140" width="240" height="8" fill="#8a6d3b"/>` +
            `<path d="M30 140 V124 H100 Q150 70 200 124 H270 V140Z" fill="#f0c43c" stroke="#a87b0b" stroke-width="2"/>` + G(60, 178, '이물질', { color: C.red }) + G(150, 46, '들뜸', { color: C.red }) + S.ng(250, 90, 11)) },
        { t: "당겨 보기", d: "층을 당겨 떨어지는 힘으로 붙은 정도를 봐요.",
          svg: P(`<rect x="40" y="152" width="200" height="38" fill="#7b8794" stroke="#5f6c78"/><rect x="40" y="140" width="140" height="12" fill="#f0c43c" stroke="#a87b0b"/>` +
            `<path d="M180 146 Q215 146 215 110 L215 76" fill="none" stroke="#f0c43c" stroke-width="12"/>` + S.arrow(215, 70, 215, 34, 'red') + S.gauge(80, 108, 28, .7, C.red) + G(80, 66, '당기는 힘', { color: C.red })) }
      ],
      points: [
        { k: "좌우하는 것", v: "바탕의 깨끗함과 전처리" },
        { k: "불량 모습", v: "들뜸·벗겨짐·부풀음" },
        { k: "확인", v: "밀착 시험으로 점검해요" }
      ],
      care: "밀착 불량은 전처리 문제인 경우가 많으니 세정·산세 상태부터 살펴보세요.",
      related: ["밀착 시험", "전처리", "산세", "도금층"]
    },

    "불량률": {
      hook: "만든 제품 중 기준에 못 미친 것의 비율이에요.",
      steps: [
        { t: "세어 보기", d: "전체 중 불량이 몇 개인지 세어요.",
          svg: P(Array.from({ length: 20 }, (_, i) => { const x = 55 + (i % 5) * 40, y = 34 + Math.floor(i / 5) * 34, bad = i === 3 || i === 13; return `<rect x="${x}" y="${y}" width="30" height="24" rx="4" fill="${bad ? '#f6b3ae' : '#cfe3d4'}" stroke="${bad ? C.red : C.green}" stroke-width="2"/>`; }).join('') +
            S.ng(215, 46, 8) + S.ng(135, 114, 8) + G(150, 204, '불량 ÷ 전체 × 100', { color: C.blue })) },
        { t: "종류별 보기", d: "불량 종류별로 나눠 가장 큰 원인부터 봐요.",
          svg: P(S.line(30, 185, 275, 185) + [[50, 100, C.red], [110, 62, '#e58a85'], [170, 38, '#e8b3b0'], [230, 18, '#e8b3b0']].map(a => `<rect x="${a[0]}" y="${185 - a[1]}" width="36" height="${a[1]}" fill="${a[2]}" stroke="${N}"/>`).join('') +
            ['얼룩', '긁힘', '들뜸', '치수'].map((s, i) => T(68 + i * 60, 204, s, { size: 11 })).join('') + G(150, 30, '가장 큰 막대부터!', { color: C.red }) + S.arrow(110, 44, 80, 78, 'red', 2)) },
        { t: "줄이기", d: "원인을 고치면 막대가 낮아져요.",
          svg: P(S.line(30, 185, 275, 185) + `<rect x="60" y="75" width="60" height="110" fill="${C.red}" stroke="${N}"/><rect x="180" y="145" width="60" height="40" fill="${C.green}" stroke="${N}"/>` +
            S.arrow(128, 90, 172, 140, 'green', 3) + S.emoji(150, 70, '🔧', 30) + T(90, 204, '개선 전', { size: 12 }) + T(210, 204, '개선 후', { size: 12 })) }
      ],
      points: [
        { k: "계산", v: "불량 수 ÷ 전체 수" },
        { k: "분류", v: "불량 종류·원인별로 나눠요" },
        { k: "활용", v: "개선 효과를 숫자로 확인해요" }
      ],
      care: "숫자만 보지 말고 불량 사진·종류를 함께 기록해야 원인을 찾을 수 있어요.",
      related: ["밀착력", "도금 두께", "침투력"]
    },

    "염수분무시험": {
      hook: "소금물 안개 속에 두고 얼마나 버티나 보는 시험이에요.",
      steps: [
        { t: "시험 장비", d: "밀폐된 상자 안에서 소금물 안개를 뿌려요.",
          svg: P(`<rect x="24" y="44" width="252" height="146" rx="10" fill="#f4f8fb" stroke="#5a86a8" stroke-width="3"/>` +
            `<rect x="140" y="50" width="20" height="26" fill="#9fb0bd" stroke="#5f6c78"/>` + [[100, 90], [130, 104], [170, 100], [200, 88], [150, 118], [115, 130], [190, 130], [160, 140], [125, 78]].map(a => `<circle cx="${a[0]}" cy="${a[1]}" r="3" fill="#cfe8f6" stroke="#2f8fe0"/>`).join('') +
            `<g transform="rotate(-10 60 140)"><rect x="46" y="100" width="28" height="70" fill="#cfd8e0" stroke="#5f6c78" stroke-width="2"/></g><g transform="rotate(10 240 140)"><rect x="226" y="100" width="28" height="70" fill="#cfd8e0" stroke="#5f6c78" stroke-width="2"/></g>` +
            G(150, 24, '염수 안개', { color: C.blue }) + G(150, 208, '시험품을 매달아 둬요', { color: C.gray })) },
        { t: "시간 경과", d: "시간이 지나면 약한 시험품부터 부식이 보여요.",
          svg: P([0, 1, 2].map(i => `<rect x="${24 + i * 90}" y="64" width="62" height="100" rx="4" fill="#cfd8e0" stroke="#5f6c78" stroke-width="2"/>` + Array.from({ length: i * 4 }, (_, j) => `<circle cx="${34 + i * 90 + (j * 13) % 44}" cy="${80 + (j * 23) % 76}" r="${3 + j % 3}" fill="#b5651d"/>`).join('') + T(55 + i * 90, 52, ['처음', '중간', '나중'][i], { size: 12 })).join('') +
            S.arrow(30, 192, 270, 192, 'gray') + T(150, 214, '시간', { size: 11 })) },
        { t: "판정", d: "부식 정도를 눈으로 보고 기준과 비교해요.",
          svg: P(`<rect x="24" y="48" width="100" height="128" rx="4" fill="#cfd8e0" stroke="#5f6c78" stroke-width="2"/><circle cx="60" cy="100" r="9" fill="#b5651d"/><circle cx="92" cy="130" r="6" fill="#b5651d"/>` + S.magnifier(78, 92, 20) +
            `<rect x="164" y="48" width="112" height="128" rx="6" fill="#fff" stroke="#3b5163" stroke-width="2"/>` + T(220, 72, '판정 기준', { size: 12 }) + S.ok(186, 104, 9) + T(232, 108, '합격', { size: 11, fill: C.green }) + S.ng(186, 146, 9) + T(232, 150, '불합격', { size: 11, fill: C.red })) }
      ],
      points: [
        { k: "목적", v: "내식성을 빠르게 비교해요" },
        { k: "정할 것", v: "시험 시간·판정 기준(규격)" },
        { k: "한계", v: "실제 수명을 그대로 뜻하진 않아요" }
      ],
      care: "시험 시간과 판정 기준은 제품 규격마다 다르니 반드시 규격서를 확인하세요.",
      related: ["내식성", "도금 두께", "밀착력"]
    },

    "와전류식 두께 측정": {
      hook: "코일로 소용돌이 전류를 만들어 코팅을 재요.",
      steps: [
        { t: "원리", d: "코일의 자기장이 금속에 소용돌이 전류를 만들어요.",
          svg: P(`<rect x="120" y="36" width="60" height="38" rx="6" fill="#3b5163"/>` + T(150, 60, '코일', { size: 12, fill: '#fff' }) +
            `<g fill="none" stroke="#2f8fe0" stroke-width="2"><ellipse cx="150" cy="88" rx="30" ry="9"/><ellipse cx="150" cy="95" rx="52" ry="12"/></g>` +
            S.layer(50, 108, 200, 16, 'paint') + S.layer(50, 124, 200, 48, 'base') + `<g fill="none" stroke="#1f8a55" stroke-width="2.5"><ellipse cx="110" cy="148" rx="26" ry="10"/><ellipse cx="190" cy="148" rx="26" ry="10"/></g>` +
            G(226, 62, '자기장', { color: C.blue }) + G(150, 196, '소용돌이 전류', { color: C.green })) },
        { t: "두께 차이", d: "코팅이 두꺼우면 전류가 약해져 신호가 달라져요.",
          svg: P(S.layer(20, 142, 110, 8, 'paint') + S.layer(20, 150, 110, 40, 'base') + S.layer(170, 126, 110, 24, 'paint') + S.layer(170, 150, 110, 40, 'base') +
            `<rect x="55" y="96" width="40" height="38" rx="5" fill="#3b5163"/><rect x="205" y="80" width="40" height="38" rx="5" fill="#3b5163"/>` +
            S.arrow(75, 80, 75, 94, 'blue') + S.arrow(225, 64, 225, 78, 'blue') + G(75, 212, '얇음 → 강한 신호', { color: C.blue, size: 11 }).replace('', '') + G(225, 40, '두꺼움 → 약한 신호', { color: C.red })) },
        { t: "쓰는 곳", d: "금속 위 도장·산화막 같은 코팅 두께를 재요.",
          svg: P(`<rect x="30" y="70" width="110" height="62" rx="10" fill="#3b5163" stroke="#172b3b" stroke-width="2"/><rect x="40" y="80" width="90" height="26" rx="3" fill="#dff6e6"/>` + T(85, 98, '코팅 두께', { size: 12, fill: C.green }) +
            S.line(85, 132, 190, 148, N, 3) + S.layer(160, 148, 120, 14, 'paint') + S.layer(160, 162, 120, 36, 'base') + S.emoji(60, 175, '🎨', 30) + G(220, 120, '도장 막', { color: C.red }) + T(220, 218, '금속', { size: 11 })) }
      ],
      points: [
        { k: "바탕", v: "전기가 통하는 금속이어야 해요" },
        { k: "코팅", v: "전기가 안 통하는 막이에요" },
        { k: "교정", v: "기준 시편으로 먼저 맞춰요" }
      ],
      care: "바탕 금속의 종류와 모양이 값에 영향을 주니 같은 소재 시편으로 교정하세요.",
      related: ["두께 측정", "자석식 두께 측정", "도금 두께"]
    },

    "음극 효율": {
      hook: "부품 쪽에서 전기가 실제로 금속이 되는 비율이에요.",
      steps: [
        { t: "음극 표면", d: "금속 이온은 도금으로, 수소 이온은 기포로 변해요.",
          svg: P(`<rect x="196" y="30" width="34" height="165" rx="4" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/>` + T(213, 22, '부품(−)', { size: 11 }) +
            S.atom(80, 60, 11, 'M⁺', '#fff', C.gold) + S.arrow(96, 60, 190, 60, 'green') + `<circle cx="193" cy="60" r="4" fill="#f0c43c"/>` +
            S.h(80, 150, 11) + S.arrow(96, 150, 164, 150, 'blue') + S.bubbles(168, 168, 4, 24) + G(60, 100, '금속 이온', { color: C.gold }) + G(60, 196, '수소 이온', { color: C.blue })) },
        { t: "나누어 쓰임", d: "전류 일부는 도금에, 나머지는 다른 반응에 쓰여요.",
          svg: P(T(150, 62, '흘려준 전류 전체', { size: 12 }) + S.line(40, 78, 260, 78, N, 2) + S.line(40, 72, 40, 84, N, 2) + S.line(260, 72, 260, 84, N, 2) +
            `<rect x="40" y="96" width="140" height="44" fill="#f0c43c" stroke="${N}" stroke-width="2"/><rect x="180" y="96" width="80" height="44" fill="#9cc9e8" stroke="${N}" stroke-width="2"/>` +
            T(110, 123, '도금에 사용', { size: 12 }) + T(220, 123, '다른 반응', { size: 12 }) + S.ok(110, 170, 11) + S.ng(220, 170, 11)) },
        { t: "결과 차이", d: "효율이 다르면 같은 시간에도 두께가 달라져요.",
          svg: P(S.clock(150, 60, 18) + `<rect x="40" y="150" width="80" height="34" fill="#7b8794" stroke="#5f6c78"/><rect x="40" y="110" width="80" height="40" fill="#f0c43c" stroke="#a87b0b"/>` +
            `<rect x="180" y="150" width="80" height="34" fill="#7b8794" stroke="#5f6c78"/><rect x="180" y="136" width="80" height="14" fill="#f0c43c" stroke="#a87b0b"/>` + G(80, 90, '효율 높음', { color: C.green }) + G(220, 90, '효율 낮음', { color: C.red }) + T(150, 212, '같은 시간', { size: 12 })) }
      ],
      points: [
        { k: "남은 전류", v: "수소 발생 등 다른 반응에 쓰여요" },
        { k: "달라지는 것", v: "도금 속도, 두께, 피막 상태" },
        { k: "영향", v: "도금액 종류·전류 밀도·온도" }
      ],
      care: "효율은 일정하지 않으니 도금액 상태가 바뀌면 시간으로 두께를 맞추지 마세요.",
      related: ["전류 효율", "도금 속도", "도금량", "수소 발생"]
    },

    "자석식 두께 측정": {
      hook: "자석이 끌리는 힘으로 위의 층 두께를 알아내요.",
      steps: [
        { t: "자석의 힘", d: "자석은 철 바탕을 끌어당겨 붙으려 해요.",
          svg: P(S.emoji(150, 80, '🧲', 50) + S.layer(50, 152, 200, 38, 'base', '철 바탕', '#fff') +
            `<path d="M118 100 Q90 130 100 150 M182 100 Q210 130 200 150" fill="none" stroke="#2f8fe0" stroke-width="2" stroke-dasharray="5 4"/>` + S.arrow(150, 148, 150, 112, 'red') + G(240, 100, '끌어당김', { color: C.red })) },
        { t: "두께와 힘", d: "도금층이 두꺼울수록 끌림이 약해져요.",
          svg: P(S.layer(20, 168, 110, 22, 'base') + S.layer(20, 160, 110, 8, 'zinc') + `<rect x="60" y="136" width="15" height="22" fill="#d6453d"/><rect x="75" y="136" width="15" height="22" fill="#2f8fe0"/>` +
            S.layer(170, 168, 110, 22, 'base') + S.layer(170, 138, 110, 30, 'zinc') + `<rect x="210" y="108" width="15" height="28" fill="#d6453d"/><rect x="225" y="108" width="15" height="28" fill="#2f8fe0"/>` +
            G(75, 80, '얇다 → 강하게', { color: C.red }) + G(225, 80, '두껍다 → 약하게', { color: C.blue })) },
        { t: "쓸 수 있는 곳", d: "바탕이 철일 때만 쓸 수 있어요.",
          svg: P(S.layer(20, 130, 115, 12, 'zinc') + S.layer(20, 142, 115, 40, 'base', '철', '#fff') + S.layer(165, 130, 115, 12, 'zinc') + S.layer(165, 142, 115, 40, '#dfe3e6', '비자성 바탕') +
            S.emoji(78, 108, '🧲', 28) + S.emoji(222, 108, '🧲', 28) + S.ok(78, 60, 12) + S.ng(222, 60, 12) + T(78, 208, '측정 가능', { size: 12 }) + T(222, 208, '측정 불가', { size: 12 })) }
      ],
      points: [
        { k: "바탕", v: "철 같은 자성 금속이어야 해요" },
        { k: "코팅", v: "자성이 없는 층(아연 등)" },
        { k: "비교", v: "비전도 코팅은 와전류식이에요" }
      ],
      care: "니켈처럼 자성이 있는 층은 값이 달라질 수 있으니 방식 적합성을 확인하세요.",
      related: ["와전류식 두께 측정", "두께 측정", "도금 두께"]
    },

    "전류 효율": {
      hook: "공급한 전류 중 진짜 도금에 쓰인 몫이에요.",
      steps: [
        { t: "전류의 몫", d: "공급 전류가 도금 반응과 다른 반응으로 나뉘어요.",
          svg: P(`<circle cx="105" cy="115" r="58" fill="#9cc9e8" stroke="${N}" stroke-width="2"/><path d="M105 115 L105 57 A58 58 0 1 1 47 115 Z" fill="#f0c43c" stroke="${N}" stroke-width="2"/>` +
            `<rect x="185" y="86" width="14" height="14" fill="#f0c43c" stroke="${N}"/>` + T(206, 98, '도금 반응', { size: 11, anchor: 'start' }) + `<rect x="185" y="130" width="14" height="14" fill="#9cc9e8" stroke="${N}"/>` + T(206, 142, '그 밖의 반응', { size: 11, anchor: 'start' }) + G(105, 28, '공급 전류 전체', { color: C.blue })) },
        { t: "도금액 상태", d: "같은 전류라도 욕이 나쁘면 덜 쌓여요.",
          svg: P(S.tank(18, 60, 120, 110, '#d9ecf7', { electrodes: true }) + S.tank(162, 60, 120, 110, '#d9d3b4', { electrodes: true }) +
            `<rect x="68" y="110" width="20" height="42" fill="#7b8794"/><rect x="62" y="102" width="32" height="10" fill="#f0c43c"/>`.replace('<rect x="62" y="102" width="32" height="10" fill="#f0c43c"/>', '<rect x="66" y="108" width="24" height="46" fill="#f0c43c" fill-opacity=".8"/>') +
            `<rect x="214" y="110" width="20" height="42" fill="#7b8794"/><rect x="212" y="134" width="24" height="18" fill="#f0c43c" fill-opacity=".8"/>` + G(78, 196, '욕 좋음', { color: C.green }) + G(222, 196, '욕 나쁨', { color: C.red }) + S.zap(150, 38, .8)) },
        { t: "계산에 활용", d: "이론값에 효율을 곱해 실제 도금량을 예상해요.",
          svg: P(`<rect x="12" y="72" width="78" height="62" rx="8" fill="#fff" stroke="#5a86a8" stroke-width="2.5"/><rect x="112" y="72" width="78" height="62" rx="8" fill="#fff" stroke="#5a86a8" stroke-width="2.5"/><rect x="210" y="72" width="78" height="62" rx="8" fill="#fff" stroke="#5a86a8" stroke-width="2.5"/>` +
            T(51, 100, '이론\n도금량', { size: 12 }) + T(151, 108, '효율', { size: 14, fill: C.blue }) + T(249, 100, '실제\n도금량', { size: 12, fill: C.green }) + T(101, 109, '×', { size: 18 }) + T(200, 109, '=', { size: 18 }) + S.emoji(150, 180, '⚖️', 34)) }
      ],
      points: [
        { k: "100%보다", v: "대개 작아요(다른 반응이 있어서)" },
        { k: "낮아지면", v: "도금이 느려지고 전기를 낭비해요" },
        { k: "관리", v: "도금액 상태·전류 밀도를 점검해요" }
      ],
      care: "효율은 도금액 종류에 따라 크게 다르니 일반값을 그대로 쓰지 말고 확인하세요.",
      related: ["음극 효율", "도금량", "도금 속도"]
    },

    "조도": {
      hook: "표면의 높낮이를 숫자로 바꾼 값이에요.",
      steps: [
        { t: "훑어 읽기", d: "뾰족한 촉침이 표면을 따라 움직이며 읽어요.",
          svg: P(`<path d="${wave(20, 170, 13, 12, 20)}" fill="none" stroke="#5f6c78" stroke-width="3"/>`.replace('fill="none"', 'fill="none"') +
            `<path d="${wave(20, 170, 13, 12, 20)} L280 200 L20 200 Z" fill="#7b8794"/>` + `<rect x="128" y="56" width="34" height="46" rx="5" fill="#3b5163"/><polygon points="139,102 151,102 145,160" fill="#172b3b"/>` +
            S.arrow(180, 80, 246, 80, 'gray') + G(64, 70, '촉침으로 훑기', { color: C.blue })) },
        { t: "그래프", d: "높낮이를 그래프로 그려 평균선과 비교해요.",
          svg: P(S.line(30, 40, 30, 190) + S.line(30, 190, 272, 190) + `<path d="M30 118 L50 95 L70 132 L90 90 L110 126 L130 100 L150 136 L170 95 L190 122 L210 92 L230 128 L250 106 L270 118" fill="none" stroke="${C.blue}" stroke-width="3"/>` +
            S.line(30, 114, 270, 114, C.gray, 2, '6 4') + T(70, 172, '평균선', { size: 11 }) + G(180, 40, '높낮이 그래프', { color: C.blue })) },
        { t: "전후 비교", d: "도금 전후 값을 비교해 표면 변화를 알아요.",
          svg: P(T(20, 36, '도금 전', { size: 12, anchor: 'start', fill: N }) + `<path d="M20 74 L50 52 L80 92 L110 48 L140 90 L170 56 L200 94 L230 52 L260 80" fill="none" stroke="${C.red}" stroke-width="3"/>` +
            T(20, 130, '도금 후', { size: 12, anchor: 'start', fill: N }) + `<path d="M20 170 L50 158 L80 176 L110 156 L140 174 L170 160 L200 176 L230 158 L260 170" fill="none" stroke="${C.green}" stroke-width="3"/>` + S.arrow(272, 90, 272, 150, 'gray', 2)) }
      ],
      points: [
        { k: "뜻", v: "높낮이 평균 같은 수치로 표시해요" },
        { k: "측정", v: "접촉식(촉침)·비접촉식이 있어요" },
        { k: "비교", v: "도금 전후 같은 위치를 재요" }
      ],
      care: "측정 방향과 길이에 따라 값이 달라지니 조건을 같게 하고 기록하세요.",
      related: ["표면 거칠기", "도금 두께", "밀착력"]
    },

    "침투력": {
      hook: "도금액이 좁고 깊은 곳까지 파고드는 힘이에요.",
      steps: [
        { t: "들어가기", d: "도금액이 홈 입구에서 안쪽으로 흘러 들어가요.",
          svg: P(`<rect x="20" y="40" width="260" height="52" fill="#cfe8f6"/><polygon points="40,92 126,92 126,196 156,196 156,92 262,92 262,208 40,208" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/>` +
            `<rect x="126" y="92" width="30" height="60" fill="#cfe8f6"/><circle cx="141" cy="174" r="8" fill="#fff" stroke="#5a86a8" stroke-width="2"/>` + S.arrow(141, 60, 141, 130, 'blue', 3) + G(60, 66, '도금액', { color: C.blue }) + G(222, 130, '막다른 홈', { color: C.gray })) },
        { t: "깊이별 두께", d: "깊이 들어갈수록 도금이 점점 얇아져요.",
          svg: P(`<rect x="60" y="30" width="180" height="170" rx="4" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/><rect x="130" y="30" width="40" height="150" fill="#eef5fb"/>` +
            `<polygon points="130,30 138,30 133,180 130,180" fill="#f0c43c"/><polygon points="170,30 162,30 167,180 170,180" fill="#f0c43c"/>` + G(94, 70, '입구\n두꺼움', { color: C.red }) + G(206, 140, '안쪽\n얇음', { color: C.blue })) },
        { t: "비교 판정", d: "끝까지 도달하는 쪽이 침투력이 좋아요.",
          svg: P(`<rect x="30" y="40" width="110" height="130" rx="4" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/><rect x="75" y="40" width="20" height="110" fill="#eef5fb"/>` +
            `<rect x="159" y="40" width="110" height="130" rx="4" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/><rect x="204" y="40" width="20" height="110" fill="#eef5fb"/>` +
            `<path d="M75 40 V150 M95 40 V150" stroke="#f0c43c" stroke-width="4" fill="none"/><path d="M204 40 V96 M224 40 V96" stroke="#f0c43c" stroke-width="4" fill="none"/>` + S.ng(214, 130, 9) + S.ok(85, 190, 12) + T(85, 212, '끝까지', { size: 11 }) + T(214, 212, '중간까지', { size: 11 })) }
      ],
      points: [
        { k: "대상", v: "깊은 구멍·좁은 홈·복잡한 모양" },
        { k: "영향", v: "도금액 종류·교반·기포 빼기" },
        { k: "확인", v: "구멍 안쪽 두께를 재서 비교해요" }
      ],
      care: "구멍 안에 공기가 갇히면 도금이 안 되니 거는 각도와 교반도 점검하세요.",
      related: ["피복력", "균일 전착성", "도금 두께"]
    },

    "표면 거칠기": {
      hook: "표면의 울퉁불퉁한 정도, 도금 외관을 좌우해요.",
      steps: [
        { t: "확대해 보면", d: "매끈해 보여도 확대하면 요철이 있어요.",
          svg: P(`<rect x="20" y="130" width="120" height="66" fill="#7b8794" stroke="#5f6c78"/><polygon points="160,130 180,114 200,134 220,110 240,136 260,116 280,130 280,196 160,196" fill="#7b8794" stroke="#5f6c78"/>` +
            S.magnifier(60, 64, 18) + G(80, 104, '매끈', { color: C.green }) + G(220, 84, '거침', { color: C.red }) + T(80, 214, '잔 굴곡 적음', { size: 11 }) + T(220, 214, '요철 많음', { size: 11 })) },
        { t: "그대로 따라가", d: "도금층도 바탕 요철을 따라 올라가요.",
          svg: P(`<polygon points="20,150 50,125 80,155 110,120 140,155 170,125 200,155 230,120 260,150 280,140 280,205 20,205" fill="#7b8794" stroke="#5f6c78"/>` +
            `<polyline points="20,150 50,125 80,155 110,120 140,155 170,125 200,155 230,120 260,150 280,140" fill="none" stroke="#f0c43c" stroke-width="8" stroke-linejoin="round"/>` + G(150, 56, '요철을 따라가요', { color: C.red }) + S.arrow(150, 72, 140, 108, 'red', 2) + T(150, 190, '소재', { size: 12, fill: '#fff' })) },
        { t: "겉보기", d: "매끈하면 빛이 가지런히, 거칠면 흩어져요.",
          svg: P(`<rect x="20" y="150" width="110" height="18" fill="#cfd8e0" stroke="#5f6c78"/><polygon points="170,168 170,152 185,142 200,156 215,142 230,156 245,142 260,152 260,168" fill="#cfd8e0" stroke="#5f6c78"/>` +
            S.arrow(34, 70, 66, 144, '#f0ad24', 2.5) + S.arrow(74, 144, 106, 70, '#f0ad24', 2.5) + S.arrow(176, 70, 208, 140, '#f0ad24', 2.5) + S.arrow(214, 138, 190, 74, '#f0ad24', 2) + S.arrow(214, 138, 240, 74, '#f0ad24', 2) + S.arrow(214, 138, 262, 100, '#f0ad24', 2) +
            G(75, 196, '번쩍', { color: C.green }) + G(215, 196, '흐려 보임', { color: C.red })) }
      ],
      points: [
        { k: "영향", v: "광택·외관·마찰 특성이 달라져요" },
        { k: "원인", v: "소재 표면, 연마, 전처리 상태" },
        { k: "대처", v: "필요하면 연마·평활 도금을 해요" }
      ],
      care: "소재가 거칠면 도금으로 가려지지 않으니 도금 전 표면 상태를 먼저 확인하세요.",
      related: ["조도", "도금 두께", "밀착력"]
    },

    "할셀 시험": {
      hook: "작은 통 하나로 도금액의 건강을 미리 보는 시험이에요.",
      steps: [
        { t: "특수한 통", d: "비스듬한 음극판을 넣어 전류 세기가 자리마다 달라요.",
          svg: P(`<polygon points="50,60 262,60 262,180 130,180" fill="#d9ecf7" stroke="#5a86a8" stroke-width="3"/>` +
            S.line(50, 60, 130, 180, C.gray, 6) + S.line(262, 60, 262, 180, C.gold, 6) + G(76, 158, '음극판', { color: C.gray }) + G(222, 120, '양극', { color: C.gold }) + G(160, 36, '사다리꼴 시험통', { color: C.blue })) },
        { t: "판 읽기", d: "한쪽은 전류가 세고 반대쪽은 약해요.",
          svg: P(`<rect x="40" y="72" width="55" height="84" fill="#7a5a46"/><rect x="95" y="72" width="55" height="84" fill="#e7edf2"/><rect x="150" y="72" width="55" height="84" fill="#b9c2cb"/><rect x="205" y="72" width="55" height="84" fill="#7b8794"/><rect x="40" y="72" width="220" height="84" fill="none" stroke="${N}" stroke-width="2"/>` +
            S.arrow(60, 56, 240, 56, 'red', 2.5) + G(150, 30, '전류 높음 → 낮음', { color: C.red }) +
            T(67, 176, '탄 부분', { size: 11 }) + T(122, 176, '정상', { size: 11 }) + T(177, 176, '흐림', { size: 11 }) + T(232, 176, '안 입혀짐', { size: 11 })) },
        { t: "비교", d: "시험판 모양으로 첨가제가 맞는지 견줘 봐요.",
          svg: P(`<rect x="30" y="60" width="100" height="90" fill="#b9c2cb" stroke="${N}" stroke-width="2"/><rect x="170" y="60" width="100" height="90" fill="#7b8794" stroke="${N}" stroke-width="2"/><rect x="195" y="60" width="50" height="90" fill="#e7edf2"/>` +
            S.magnifier(150, 50, 12) + S.ng(80, 175, 11) + S.ok(220, 175, 11) + G(80, 206, '밝은 구간 없음', { color: C.red }) + G(220, 206, '밝은 구간 넓음', { color: C.green })) }
      ],
      points: [
        { k: "필요한 양", v: "도금액을 조금만 떠서 써요" },
        { k: "알 수 있는 것", v: "전류 범위별 도금 상태" },
        { k: "활용", v: "첨가제 부족·과다를 가늠해요" }
      ],
      care: "판정은 경험이 필요하니 기준 사진과 함께 보고, 조건을 늘 같게 하세요.",
      related: ["균일 전착성", "침투력", "도금 속도"]
    },

    "도금 속도": {
      hook: "시간당 도금이 얼마나 빨리 쌓이는지예요.",
      steps: [
        { t: "쌓이는 중", d: "시간이 지날수록 층이 점점 두꺼워져요.",
          svg: P([0, 1, 2].map(i => S.clock(60 + i * 90, 52, 16) + `<rect x="${30 + i * 90}" y="170" width="60" height="24" fill="#7b8794" stroke="#5f6c78"/><rect x="${30 + i * 90}" y="${170 - [8, 22, 38][i]}" width="60" height="${[8, 22, 38][i]}" fill="#f0c43c" stroke="#a87b0b"/>` + T(60 + i * 90, 214, ['조금', '더', '많이'][i], { size: 11 })).join('') + S.arrow(100, 100, 140, 100, 'gray') + S.arrow(190, 100, 230, 100, 'gray')) },
        { t: "전류 영향", d: "전류가 클수록 빨리 쌓이는 경향이 있어요.",
          svg: P(S.gauge(80, 110, 40, .8, C.red) + S.gauge(220, 110, 40, .3, C.blue) + G(80, 140, '전류 높음', { color: C.red }) + G(220, 140, '전류 낮음', { color: C.blue }) +
            `<rect x="40" y="168" width="80" height="22" fill="#f0c43c" stroke="#a87b0b"/><rect x="180" y="184" width="80" height="6" fill="#f0c43c" stroke="#a87b0b"/>` + G(150, 28, '같은 시간 동안', { color: C.gray })) },
        { t: "시간 정하기", d: "목표 두께에 닿는 시간을 속도로 계산해요.",
          svg: P(S.line(50, 108, 250, 108, C.red, 2.5, '7 5') + G(272, 108, '목표', { color: C.red, size: 11 }).replace('', '') + `<rect x="105" y="152" width="90" height="34" fill="#7b8794" stroke="#5f6c78"/><rect x="105" y="108" width="90" height="44" fill="#f0c43c" stroke="#a87b0b"/>` +
            S.arrow(80, 150, 80, 114, 'green') + S.clock(240, 50, 18) + G(150, 36, '목표 ÷ 속도 = 시간', { color: C.blue }) + S.ok(150, 208, 10)) }
      ],
      points: [
        { k: "단위", v: "시간당 쌓이는 두께(µm/분 등)" },
        { k: "영향", v: "전류·온도·도금액·교반" },
        { k: "주의", v: "빠르다고 품질이 좋은 건 아니에요" }
      ],
      care: "속도를 높이려 전류를 올리면 거침·타는 불량이 생길 수 있으니 범위를 지키세요.",
      related: ["전류 효율", "도금 두께", "도금량", "음극 효율"]
    },

    "균일 전착성": {
      hook: "모서리도 안쪽도 두께를 고르게 쌓는 성질이에요.",
      steps: [
        { t: "전류 쏠림", d: "전류는 튀어나온 모서리로 몰리기 쉬워요.",
          svg: P(S.layer(40, 36, 220, 12, 'gold') + `<rect x="90" y="120" width="120" height="66" rx="3" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/>` +
            S.arrow(92, 56, 92, 114, 'red', 3.5) + S.arrow(102, 56, 102, 114, 'red', 3.5) + S.arrow(198, 56, 198, 114, 'red', 3.5) + S.arrow(208, 56, 208, 114, 'red', 3.5) + S.arrow(150, 56, 150, 114, 'gray', 1.5) + G(150, 208, '모서리로 몰려요', { color: C.red })) },
        { t: "두께 비교", d: "쏠리면 모서리만 두껍고, 고르면 한결같아요.",
          svg: P(`<rect x="60" y="80" width="180" height="24" fill="#7b8794" stroke="#5f6c78"/><polygon points="60,80 60,54 90,68 150,74 210,68 240,54 240,80" fill="#f0c43c" stroke="#a87b0b"/>` +
            `<rect x="60" y="164" width="180" height="24" fill="#7b8794" stroke="#5f6c78"/><rect x="60" y="150" width="180" height="14" fill="#f0c43c" stroke="#a87b0b"/>` +
            G(150, 28, '모서리만 두꺼움', { color: C.red }) + G(150, 128, '고르게 쌓임', { color: C.green }) + S.ng(268, 68, 10) + S.ok(268, 156, 10)) },
        { t: "해결 방법", d: "보조 음극으로 모서리 전류를 나눠 가져요.",
          svg: P(S.layer(40, 36, 220, 12, 'gold') + `<rect x="100" y="130" width="100" height="56" rx="3" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/><rect x="62" y="130" width="12" height="56" fill="#d9824b" stroke="#5f6c78"/><rect x="226" y="130" width="12" height="56" fill="#d9824b" stroke="#5f6c78"/>` +
            S.arrow(68, 60, 68, 124, 'red', 3) + S.arrow(232, 60, 232, 124, 'red', 3) + S.arrow(130, 60, 130, 124, 'green', 2.5) + S.arrow(170, 60, 170, 124, 'green', 2.5) + G(68, 208, '보조 음극', { color: C.red }) + G(150, 208, '부품', { color: C.green })) }
      ],
      points: [
        { k: "문제", v: "모서리는 두껍고 오목부는 얇아요" },
        { k: "영향", v: "도금액 성질·전류 밀도·배치" },
        { k: "침투력과", v: "여기선 '두께의 고름'을 말해요" }
      ],
      care: "복잡한 부품은 거는 위치와 보조 음극으로 전류 분포를 조절해 보세요.",
      related: ["피복력", "침투력", "도금 두께", "할셀 시험"]
    },

    "피복력": {
      hook: "전류가 약한 곳까지 도금이 덮이는 능력이에요.",
      steps: [
        { t: "전류가 약한 곳", d: "오목한 곳은 전류가 거의 닿지 않아요.",
          svg: P(S.layer(30, 34, 240, 12, 'gold') + `<polygon points="40,100 110,100 110,160 190,160 190,100 260,100 260,205 40,205" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/>` +
            S.arrow(60, 56, 60, 94, 'red', 3) + S.arrow(90, 56, 90, 94, 'red', 3) + S.arrow(210, 56, 210, 94, 'red', 3) + S.arrow(240, 56, 240, 94, 'red', 3) + S.arrow(150, 56, 150, 96, 'gray', 1.5) + G(150, 130, '전류 약함', { color: C.red })) },
        { t: "덮이는지", d: "약한 곳에도 도금이 덮였는지가 핵심이에요.",
          svg: P(`<g transform="translate(15 70) scale(.5)"><polygon points="40,100 110,100 110,160 190,160 190,100 260,100 260,205 40,205" fill="#7b8794" stroke="#5f6c78" stroke-width="3"/><path d="M40 98 H110 M190 98 H260" fill="none" stroke="#f0c43c" stroke-width="12"/></g>` +
            `<g transform="translate(165 70) scale(.5)"><polygon points="40,100 110,100 110,160 190,160 190,100 260,100 260,205 40,205" fill="#7b8794" stroke="#5f6c78" stroke-width="3"/><path d="M40 98 H110 V158 H190 V98 H260" fill="none" stroke="#f0c43c" stroke-width="12"/></g>` +
            S.ng(75, 52, 12) + S.ok(225, 52, 12) + G(75, 200, '바닥 도금 없음', { color: C.red }) + G(225, 200, '바닥까지 덮임', { color: C.green })) },
        { t: "확인", d: "안쪽 바닥이 도금됐는지 잘라서 살펴봐요.",
          svg: P(`<rect x="50" y="64" width="200" height="126" rx="4" fill="#7b8794" stroke="#5f6c78" stroke-width="2"/><rect x="110" y="84" width="80" height="86" fill="#eef5fb"/>` +
            `<path d="M110 84 V170 H190 V84" fill="none" stroke="#f0c43c" stroke-width="5"/>` + S.magnifier(205, 128, 17) + S.emoji(78, 46, '✂️', 26) + G(150, 36, '단면에서 바닥까지 확인', { color: C.blue })) }
      ],
      points: [
        { k: "핵심", v: "도금이 '되느냐/안 되느냐'예요" },
        { k: "구별", v: "균일 전착성은 두께의 고름이에요" },
        { k: "영향", v: "도금액·전류 범위·부품 형상" }
      ],
      care: "오목부 바닥이 안 덮이면 부식이 먼저 시작되니 단면으로 꼭 확인하세요.",
      related: ["균일 전착성", "침투력", "할셀 시험"]
    },

    "도금량": {
      hook: "표면에 쌓인 금속의 실제 양이에요.",
      steps: [
        { t: "무게로 재기", d: "도금 전후 무게 차이가 곧 도금량이에요.",
          svg: P(S.emoji(150, 92, '⚖️', 56) + S.part(34, 130, 62, 40) + `<rect x="204" y="130" width="62" height="40" rx="4" fill="#e9c24a" stroke="#a87b0b" stroke-width="1.5"/>` + S.arrow(104, 150, 196, 150, 'gray') +
            G(65, 190, '도금 전', { color: C.gray }) + G(235, 190, '도금 후', { color: C.gold }) + G(150, 24, '늘어난 무게 = 도금량', { color: C.blue })) },
        { t: "무엇이 정하나", d: "전류, 시간, 효율이 도금량을 정해요.",
          svg: P(S.zap(50, 56, 1.2) + S.clock(150, 56, 20) + S.emoji(250, 66, '📊', 38) + T(50, 100, '전류', { size: 12 }) + T(150, 100, '시간', { size: 12 }) + T(250, 100, '효율', { size: 12 }) +
            S.arrow(60, 112, 130, 160, 'blue') + S.arrow(150, 112, 150, 156, 'blue') + S.arrow(240, 112, 170, 160, 'blue') + G(150, 184, '도금량', { color: C.gold, size: 13 })) },
        { t: "두께로 환산", d: "면적이 넓을수록 같은 양도 얇게 펴져요.",
          svg: P(`<polygon points="34,170 84,170 76,140 42,140" fill="#f0c43c" stroke="#a87b0b" stroke-width="2"/><polygon points="50,140 70,140 60,118" fill="#f0c43c" stroke="#a87b0b" stroke-width="2"/>` + S.arrow(96, 150, 128, 150, 'gray') +
            `<rect x="140" y="160" width="140" height="30" fill="#7b8794" stroke="#5f6c78"/><rect x="140" y="152" width="140" height="8" fill="#f0c43c" stroke="#a87b0b"/>` + G(210, 120, '넓게 펴면 얇아요', { color: C.blue }) + T(60, 196, '같은 양', { size: 11 }) + T(210, 212, '평균 두께 추정', { size: 11 })) }
      ],
      points: [
        { k: "단위", v: "무게(g, mg)나 면적당 양" },
        { k: "계산 요소", v: "전류 × 시간 × 효율" },
        { k: "활용", v: "평균 두께와 금 사용량을 추정해요" }
      ],
      care: "도금량은 평균값이라 모서리·안쪽의 실제 두께는 따로 재서 확인하세요.",
      related: ["도금 두께", "전류 효율", "음극 효율", "도금 속도"]
    },

    "밀착 시험": {
      hook: "일부러 힘과 열을 줘서 붙은 정도를 확인해요.",
      steps: [
        { t: "굽힘", d: "시편을 꺾어 도금이 갈라지는지 봐요.",
          svg: P(`<path d="M40 150 H120 Q150 150 162 128 L204 66" fill="none" stroke="#7b8794" stroke-width="18" stroke-linecap="round"/><path d="M40 143 H122 Q154 143 166 122 L208 60" fill="none" stroke="#f0c43c" stroke-width="5" stroke-linecap="round"/>` +
            `<rect x="170" y="150" width="8" height="5" fill="#f0c43c" transform="rotate(25 174 152)"/><rect x="186" y="168" width="9" height="5" fill="#f0c43c" transform="rotate(-20 190 170)"/>` + G(70, 90, '구부리기', { color: C.blue }) + S.ng(246, 130, 12) + G(220, 190, '벗겨진 조각', { color: C.red })) },
        { t: "열충격", d: "뜨겁게 데웠다 차갑게 식혀 들뜸을 확인해요.",
          svg: P(S.oven(20, 56, 90, 70) + S.emoji(65, 104, '🔥', 26) + S.arrow(116, 92, 184, 92, 'red') + S.beaker(190, 62, 72, 66, '#bfe3f5') + S.emoji(226, 112, '🧊', 24) +
            G(65, 150, '가열', { color: C.red }) + G(226, 150, '급냉', { color: C.blue }) + G(150, 200, '들뜸·부풀음 확인', { color: C.gray })) },
        { t: "테이프", d: "테이프를 붙였다 떼어 벗겨진 조각을 봐요.",
          svg: P(`<rect x="40" y="152" width="200" height="38" fill="#7b8794" stroke="#5f6c78"/><rect x="40" y="140" width="200" height="12" fill="#f0c43c" stroke="#a87b0b"/><rect x="62" y="128" width="110" height="12" fill="#f4e9a8" stroke="#bda95a"/>` +
            `<path d="M172 134 Q214 134 218 96 L226 62" fill="none" stroke="#f4e9a8" stroke-width="12"/><rect x="198" y="94" width="6" height="4" fill="#f0c43c"/><rect x="210" y="76" width="6" height="4" fill="#f0c43c"/>` + G(90, 80, '테이프 떼기', { color: C.blue }) + G(150, 210, '묻어나오는지 확인', { color: C.red })) }
      ],
      points: [
        { k: "방법", v: "굽힘·열충격·테이프 등" },
        { k: "판정", v: "벗겨짐·들뜸·갈라짐 유무" },
        { k: "파괴 시험", v: "시험한 시편은 제품으로 못 써요" }
      ],
      care: "시험법과 판정 기준은 규격마다 다르니 해당 제품 규격서를 따르세요.",
      related: ["밀착력", "전처리", "산세", "도금층"]
    }

  });
})();
