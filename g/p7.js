/* 불량·대책 분야 (수소취성 제외) */
window.PAGES = window.PAGES || {};
Object.assign(window.PAGES, {

  "가장자리 효과": {
    hook: "전기는 뾰족한 곳으로 몰려요. 모서리가 뚱뚱해져요.",
    steps: [
      { t: "전류 몰림", d: "전류는 모서리와 튀어나온 곳으로 모여 들어가요.",
        svg: S.panel(
          S.layer(40, 24, 220, 10, 'gold') + S.text(150, 20, '양극', { size: 11 }) +
          S.part(105, 100, 90, 70) +
          S.arrow(70, 40, 103, 96, 'red', 4) + S.arrow(230, 40, 197, 96, 'red', 4) + S.arrow(150, 40, 150, 94, 'gray', 1.5) +
          S.tag(150, 196, '모서리에 전류가 몰려요', { color: S.C.red })) },
      { t: "모서리 두꺼움", d: "많이 모인 모서리만 도금이 두껍게 올라가요.",
        svg: S.panel(
          `<rect x="104" y="89" width="92" height="92" rx="4" fill="none" stroke="#f0c43c" stroke-width="5"/>` +
          `<circle cx="106" cy="91" r="13" fill="#f0c43c"/><circle cx="194" cy="91" r="13" fill="#f0c43c"/><circle cx="106" cy="179" r="13" fill="#f0c43c"/><circle cx="194" cy="179" r="13" fill="#f0c43c"/>` +
          `<rect x="110" y="95" width="80" height="80" rx="3" fill="url(#metal)"/>` +
          S.tag(46, 62, '두꺼움', { color: S.C.red }) + S.arrow(62, 74, 94, 88, 'red', 2) +
          S.tag(248, 150, '얇음', { color: S.C.blue }) + S.arrow(228, 146, 200, 138, 'blue', 2)) },
      { t: "보조 음극", d: "옆에 보조 음극을 두면 전류를 대신 받아 줘요.",
        svg: S.panel(
          S.layer(40, 24, 220, 10, 'gold') + S.text(150, 20, '양극', { size: 11 }) +
          S.part(120, 100, 60, 70) + S.part(60, 100, 14, 70, '#7c8a96') + S.part(226, 100, 14, 70, '#7c8a96') +
          S.arrow(67, 42, 67, 94, 'red', 3) + S.arrow(233, 42, 233, 94, 'red', 3) + S.arrow(150, 42, 150, 94, 'blue', 2.5) +
          S.tag(67, 190, '보조\n음극', { color: S.C.gray }) + S.tag(233, 190, '보조\n음극', { color: S.C.gray }) + S.ok(150, 196, 12)) }
    ],
    points: [
      { k: "원인", v: "전기가 뾰족한 끝에 집중해요" },
      { k: "모양", v: "뼈다귀처럼 끝만 두꺼워져요" },
      { k: "대책", v: "보조 음극·차폐판, 걸이 위치 조정" }
    ],
    care: "치수 공차가 좁은 부품은 모서리 두께를 따로 재서 확인하세요.",
    related: ["보조 음극", "전류 분포", "과도금", "불균일 도금"]
  },

  "공극": {
    hook: "도금층 속에 숨은 작은 빈방이에요.",
    steps: [
      { t: "이물 붙음", d: "표면의 먼지·기포 주변으로 도금이 자라요.",
        svg: S.panel(
          S.layer(30, 160, 240, 40, 'base') + S.layer(30, 130, 108, 30, 'gold') + S.layer(162, 130, 108, 30, 'gold') +
          `<circle cx="150" cy="154" r="12" fill="#8a6a4a" stroke="#5b432b" stroke-width="1.5"/>` +
          S.tag(150, 50, '먼지·기포', { color: S.C.red }) + S.arrow(150, 66, 150, 136, 'red', 2.5) +
          S.arrow(50, 100, 80, 124, 'gray', 2) + S.arrow(250, 100, 220, 124, 'gray', 2)) },
      { t: "덮어 버림", d: "도금이 위를 덮으면 안쪽에 빈 곳이 갇혀요.",
        svg: S.panel(
          S.layer(30, 160, 240, 40, 'base') + S.layer(30, 110, 240, 50, 'gold') +
          `<circle cx="150" cy="154" r="13" fill="#fff" stroke="#d6453d" stroke-width="2" stroke-dasharray="4 3"/>` +
          S.arrow(60, 64, 100, 104, 'gray', 2) + S.arrow(240, 64, 200, 104, 'gray', 2) + S.text(150, 66, '위가 닫혀요', { size: 12 }) +
          S.tag(236, 190, '빈 공간', { color: S.C.red }) ) },
      { t: "숨은 구멍", d: "단면에 빈 곳이 여럿 보여요. 겉은 멀쩡해 보여요.",
        svg: S.panel(
          S.layer(30, 140, 240, 56, 'base') + S.layer(30, 90, 240, 50, 'gold') +
          `<g fill="#fff" stroke="#9a7a10" stroke-width="1.5"><circle cx="70" cy="120" r="6"/><circle cx="118" cy="108" r="8"/><circle cx="168" cy="124" r="5"/><circle cx="210" cy="110" r="7"/><circle cx="244" cy="128" r="4"/></g>` +
          S.magnifier(60, 46, 18) + S.ng(250, 44, 13) + S.tag(150, 50, '속에 숨어 있어요', { color: S.C.red }) ) }
    ],
    points: [
      { k: "원인", v: "이물·기포·세정 부족" },
      { k: "위치", v: "표면이 아니라 층 안쪽에 있어요" },
      { k: "영향", v: "보호력과 외관이 떨어져요" }
    ],
    care: "세정 상태와 도금 조건을 함께 점검하고, 의심되면 단면을 확인하세요.",
    related: ["기공", "핀홀", "포로시티", "기포"]
  },

  "과도금": {
    hook: "옷을 너무 껴입어서 몸이 안 들어가요.",
    steps: [
      { t: "목표보다 두꺼움", d: "정해진 두께보다 도금층이 훨씬 두껍게 올라가요.",
        svg: S.panel(
          S.stack(40, 90, 80, [['gold', 20, ''], ['base', 90, '']]) + S.stack(180, 70, 80, [['gold', 40, ''], ['base', 70, '']]) +
          S.line(30, 90, 130, 90, S.C.green, 2, '5 4') + S.text(80, 76, '목표', { size: 12, fill: S.C.green }) +
          S.text(220, 56, '실제', { size: 12, fill: S.C.red }) + S.arrow(150, 150, 168, 150, 'red', 2.5) +
          S.ok(80, 40, 11) + S.ng(220, 28, 11)) },
      { t: "안 맞아요", d: "나사산이 두꺼워져 너트가 끝까지 들어가지 않아요.",
        svg: S.panel(
          S.bolt(110, 120, 1.7) + `<rect x="196" y="88" width="42" height="64" rx="5" fill="#cfd8e0" stroke="#5f6c78" stroke-width="2"/><circle cx="217" cy="120" r="12" fill="#fff" stroke="#5f6c78"/>` +
          S.arrow(260, 120, 242, 120, 'red', 2.5) + S.ng(217, 70, 13) + S.tag(150, 196, '치수 공차를 넘었어요', { color: S.C.red })) },
      { t: "시간·전류 조절", d: "도금 시간과 전류를 줄이고 두께를 재서 확인해요.",
        svg: S.panel(
          S.clock(70, 80, 28) + S.gauge(190, 100, 40, .3, S.C.green) +
          S.tag(70, 130, '시간 짧게', { color: S.C.blue }) + S.tag(190, 130, '전류 낮게', { color: S.C.blue }) +
          S.arrow(70, 150, 70, 178, 'blue', 2) + S.arrow(190, 150, 190, 178, 'blue', 2) + S.ok(130, 200, 12) + S.text(30, 200, '두께 확인', { size: 11, anchor: 'start' }) ) }
    ],
    points: [
      { k: "원인", v: "시간 과다·전류 과다" },
      { k: "피해", v: "끼움 불량·재료 낭비" },
      { k: "관리", v: "두께 측정으로 규격 확인" }
    ],
    care: "나사·핀처럼 공차가 좁은 부품은 도금 후 조립 치수를 꼭 확인하세요.",
    related: ["도금 두께", "도금 시간", "가장자리 효과", "두께 측정"]
  },

  "기공": {
    hook: "도금층에 난 작은 통로로 녹이 스며들어요.",
    steps: [
      { t: "작은 통로", d: "도금층 중간중간에 바탕까지 이어진 구멍이 있어요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 112, 240, 38, 'nickel') +
          `<rect x="90" y="112" width="7" height="38" fill="#eef5fb"/><rect x="176" y="112" width="6" height="38" fill="#eef5fb"/>` +
          S.tag(94, 68, '기공', { color: S.C.red }) + S.arrow(94, 82, 94, 108, 'red', 2) + S.tag(180, 68, '기공', { color: S.C.red }) + S.arrow(180, 82, 180, 108, 'red', 2)) },
      { t: "물이 스밈", d: "물과 습기가 통로를 따라 바탕 금속까지 닿아요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 112, 240, 38, 'nickel') +
          `<rect x="120" y="112" width="8" height="38" fill="#eef5fb"/>` +
          S.drop(124, 50, '#4aa3df', 1.3) + S.drop(80, 76) + S.drop(180, 70) +
          S.arrow(124, 70, 124, 130, 'blue', 3) + S.text(210, 100, '습기', { size: 12, fill: S.C.blue })) },
      { t: "속부터 부식", d: "바탕이 녹슬어 도금 아래가 먼저 상해요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 112, 240, 38, 'nickel') +
          `<rect x="120" y="112" width="8" height="38" fill="#eef5fb"/><ellipse cx="124" cy="152" rx="40" ry="12" fill="#b4562d" fill-opacity=".85"/><rect x="118" y="130" width="12" height="20" fill="#b4562d"/>` +
          S.tag(224, 100, '녹', { color: S.C.red }) + S.arrow(210, 110, 170, 148, 'red', 2) + S.ng(60, 70, 13)) }
    ],
    points: [
      { k: "정의", v: "도금층을 뚫고 지나는 작은 구멍" },
      { k: "위험", v: "바탕 금속이 부식되는 길목" },
      { k: "줄이기", v: "두께를 늘리고 다층으로 막아요" }
    ],
    care: "기공이 많으면 겉이 멀쩡해도 일찍 녹슬 수 있어요. 시험으로 확인하세요.",
    related: ["핀홀", "다공성", "포로시티", "내식성"]
  },

  "기포": {
    hook: "가스 방울이 표면에 달라붙어 도금을 막아요.",
    steps: [
      { t: "가스 발생", d: "도금 중 생긴 가스가 작은 방울로 부품에 붙어요.",
        svg: S.panel(
          S.tank(40, 40, 220, 150, '#d9ecf7', { electrodes: true }) + S.part(120, 90, 60, 70, '#b8c3cd') +
          `<circle cx="132" cy="110" r="6" fill="#fff" stroke="#2f8fe0" stroke-width="2"/><circle cx="165" cy="130" r="8" fill="#fff" stroke="#2f8fe0" stroke-width="2"/><circle cx="140" cy="148" r="5" fill="#fff" stroke="#2f8fe0" stroke-width="2"/>` +
          S.tag(215, 120, '기포', { color: S.C.blue }) + S.arrow(196, 122, 172, 128, 'blue', 2)) },
      { t: "도금이 빔", d: "방울이 덮은 자리는 도금이 안 올라가요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 120, 96, 30, 'gold') + S.layer(174, 120, 96, 30, 'gold') +
          `<path d="M126 150 A24 28 0 0 1 174 150Z" fill="#fff" fill-opacity=".8" stroke="#2f8fe0" stroke-width="2.5"/>` +
          S.tag(150, 80, '방울 밑은 빈 곳', { color: S.C.red }) + S.arrow(150, 94, 150, 124, 'red', 2.5) + S.ng(250, 80, 12)) },
      { t: "털어 내기", d: "부품을 흔들고 걸이 방향을 바꿔 방울을 빼요.",
        svg: S.panel(
          `<g transform="rotate(-25 150 120)">` + S.part(112, 78, 76, 84, '#e9c24a') + `</g>` +
          S.bubbles(150, 70, 4, 40) + S.arrow(205, 150, 205, 70, 'blue', 3) + S.arrow(95, 150, 95, 70, 'blue', 3) +
          S.text(45, 180, '기울여서\n위로 빼요', { size: 11 }) + S.ok(250, 180, 13)) }
    ],
    points: [
      { k: "정체", v: "수소 같은 가스 방울이에요" },
      { k: "모양", v: "붙은 자리가 비거나 얼룩져요" },
      { k: "대책", v: "교반·흔들기·걸이 각도 조정" }
    ],
    care: "오목한 곳은 방울이 잘 고여요. 걸이 방향을 먼저 점검하세요.",
    related: ["피트", "미도금", "수소 발생", "습윤제"]
  },

  "다공성": {
    hook: "구멍이 송송 난 스펀지 같은 도금이에요.",
    steps: [
      { t: "구멍이 많음", d: "표면에 작은 구멍이 곳곳에 퍼져 있어요.",
        svg: S.panel(
          S.layer(30, 110, 240, 30, 'nickel') + S.layer(30, 140, 240, 50, 'base') +
          `<g fill="#eef5fb" stroke="#7e8b97"><ellipse cx="60" cy="125" rx="6" ry="9"/><ellipse cx="100" cy="122" rx="5" ry="8"/><ellipse cx="140" cy="127" rx="7" ry="9"/><ellipse cx="182" cy="122" rx="5" ry="8"/><ellipse cx="222" cy="126" rx="6" ry="9"/><ellipse cx="252" cy="124" rx="4" ry="7"/></g>` +
          S.emoji(150, 78, '🧽', 40) + S.tag(240, 60, '구멍 송송', { color: S.C.gray })) },
      { t: "스며듦", d: "물과 부식 물질이 여러 구멍으로 안쪽에 스며들어요.",
        svg: S.panel(
          S.layer(30, 110, 240, 30, 'nickel') + S.layer(30, 140, 240, 50, 'base') +
          `<g fill="#eef5fb" stroke="#7e8b97"><ellipse cx="70" cy="125" rx="6" ry="9"/><ellipse cx="130" cy="125" rx="6" ry="9"/><ellipse cx="190" cy="125" rx="6" ry="9"/><ellipse cx="240" cy="125" rx="6" ry="9"/></g>` +
          S.drop(70, 60) + S.drop(130, 54) + S.drop(190, 62) + S.drop(240, 56) +
          S.arrow(70, 78, 70, 116, 'blue', 2) + S.arrow(130, 78, 130, 116, 'blue', 2) + S.arrow(190, 78, 190, 116, 'blue', 2) + S.arrow(240, 78, 240, 116, 'blue', 2)) },
      { t: "치밀 vs 다공", d: "치밀한 도금은 막아 주고 다공성은 보호가 약해요.",
        svg: S.panel(
          S.layer(24, 120, 120, 22, 'nickel') + S.layer(24, 142, 120, 40, 'base') +
          S.layer(156, 120, 120, 22, 'nickel') + S.layer(156, 142, 120, 40, 'base') +
          `<g fill="#eef5fb" stroke="#7e8b97"><rect x="176" y="120" width="6" height="22"/><rect x="206" y="120" width="6" height="22"/><rect x="244" y="120" width="6" height="22"/></g>` +
          S.ok(84, 84, 14) + S.ng(216, 84, 14) + S.text(84, 108, '치밀', { size: 12, fill: S.C.green }) + S.text(216, 108, '다공성', { size: 12, fill: S.C.red })) }
    ],
    points: [
      { k: "상태", v: "구멍이 많은 ‘성질’ 이에요" },
      { k: "영향", v: "물이 들어가 바탕이 상해요" },
      { k: "판단", v: "구멍 수·두께로 보호력을 봐요" }
    ],
    care: "다공성 도금에는 두께를 높이거나 실링 같은 후처리로 구멍을 막아요.",
    related: ["기공", "포로시티", "실링", "내식성"]
  },

  "박리": {
    hook: "스티커가 떨어지듯 도금이 벗겨져요.",
    steps: [
      { t: "오염막", d: "바탕에 기름·산화막이 남으면 도금이 붙지 못해요.",
        svg: S.panel(
          S.layer(30, 160, 240, 36, 'base') + `<rect x="30" y="152" width="240" height="8" fill="#c9a86a" fill-opacity=".85"/>` + S.layer(30, 116, 240, 36, 'gold') +
          S.tag(150, 60, '기름·산화막', { color: S.C.red }) + S.arrow(150, 76, 150, 154, 'red', 2.5)) },
      { t: "들뜸", d: "굽힘이나 열을 받으면 붙지 않은 곳부터 들떠요.",
        svg: S.panel(
          S.layer(30, 170, 240, 30, 'base') +
          `<path d="M30 170 L110 170 Q150 120 200 150 L270 130 L270 106 L200 124 Q150 96 110 144 L30 144Z" fill="#f0c43c" stroke="#5f6c78" stroke-width="1"/>` +
          S.arrow(210, 100, 230, 70, 'red', 3) + S.zap(70, 80, .9) + S.text(90, 56, '굽힘·열', { size: 12, fill: S.C.red })) },
      { t: "벗겨짐", d: "도금층이 조각으로 떨어져 바탕이 드러나요.",
        svg: S.panel(
          S.layer(40, 140, 220, 50, 'base') + `<polygon points="40,140 120,140 100,122 60,126" fill="#f0c43c" stroke="#5f6c78"/>` +
          `<polygon points="150,70 190,64 200,92 160,100" fill="#f0c43c" stroke="#5f6c78"/><polygon points="220,110 250,100 256,124 230,130" fill="#f0c43c" stroke="#5f6c78" transform="rotate(14 235 115)"/>` +
          S.arrow(140, 128, 160, 106, 'red', 2) + S.ng(60, 70, 14) + S.tag(222, 168, '바탕 노출', { color: S.C.red })) }
    ],
    points: [
      { k: "핵심 원인", v: "전처리 부족·표면 오염" },
      { k: "블리스터와", v: "박리는 떨어져 나가는 불량이에요" },
      { k: "확인", v: "테이프·굽힘 등 밀착 시험" }
    ],
    care: "박리가 보이면 도금 조건보다 전처리 공정을 먼저 점검하세요.",
    related: ["밀착력", "밀착 시험", "블리스터", "전처리"]
  },

  "백청": {
    hook: "아연이 젖은 채 방치되면 하얀 가루가 피어요.",
    steps: [
      { t: "아연 보호막", d: "아연 도금은 철을 대신 녹슬며 지켜 주는 층이에요.",
        svg: S.panel(
          S.layer(30, 160, 240, 40, 'base') + S.layer(30, 134, 240, 26, 'zinc') + S.text(150, 152, '아연', { size: 12 }) +
          S.text(150, 190, '철 소재', { size: 12, fill: '#fff' }) + S.emoji(150, 94, '🛡️', 34) + S.ok(244, 100, 13)) },
      { t: "젖은 채 밀봉", d: "물기 있는 채로 포장하면 습기가 계속 닿아요.",
        svg: S.panel(
          S.layer(60, 160, 180, 34, 'zinc') + `<rect x="46" y="90" width="208" height="110" rx="10" fill="#cfe8f6" fill-opacity=".45" stroke="#5a86a8" stroke-width="2.5" stroke-dasharray="6 4"/>` +
          S.drop(90, 124) + S.drop(150, 114) + S.drop(210, 126) + S.tag(150, 66, '비닐 속 물기', { color: S.C.blue }) + S.arrow(150, 80, 150, 98, 'blue', 2)) },
      { t: "하얀 가루", d: "아연이 산화되어 하얀 부식 생성물이 생겨요.",
        svg: S.panel(
          S.layer(40, 150, 220, 44, 'zinc') +
          `<g fill="#fff" stroke="#c3cbd3" stroke-width="1.5"><circle cx="80" cy="146" r="12"/><circle cx="104" cy="140" r="14"/><circle cx="150" cy="144" r="16"/><circle cx="196" cy="140" r="13"/><circle cx="226" cy="147" r="11"/></g>` +
          S.cloud(150, 90, .9, '#fff') + S.tag(150, 50, '백청', { color: S.C.red }) + S.ng(250, 90, 13)) }
    ],
    points: [
      { k: "대상", v: "아연 도금에서 생겨요" },
      { k: "붉은 녹과", v: "철이 아니라 아연이 삭은 거예요" },
      { k: "예방", v: "건조·통풍, 크로메이트 후처리" }
    ],
    care: "수세 후 완전히 말리고, 습기 없는 환경에서 보관·포장하세요.",
    related: ["아연 도금", "크로메이트", "후처리", "내식성"]
  },

  "변색": {
    hook: "반짝이던 색이 얼룩덜룩 달라져요.",
    steps: [
      { t: "처음 색", d: "도금 직후엔 색이 고르고 반짝여요.",
        svg: S.panel(
          S.part(70, 80, 160, 90, '#f0c43c') + `<path d="M90 92 L150 92 L110 158 L90 158Z" fill="#fff" fill-opacity=".45"/>` +
          S.ok(250, 70, 14) + S.tag(150, 196, '고른 색', { color: S.C.green })) },
      { t: "원인", d: "물자국·습기·후처리 불량이 표면을 변하게 해요.",
        svg: S.panel(
          S.part(90, 120, 120, 56, '#f0c43c') + S.drop(100, 60, '#4aa3df', 1.2) + S.drop(150, 50, '#4aa3df', 1.2) + S.drop(200, 62, '#4aa3df', 1.2) +
          S.arrow(100, 76, 110, 114, 'blue', 2) + S.arrow(150, 66, 150, 114, 'blue', 2) + S.arrow(200, 78, 190, 114, 'blue', 2) +
          S.text(150, 202, '물자국·습기·약품', { size: 11, fill: S.C.red }) + S.emoji(246, 150, '🌫️', 28)) },
      { t: "얼룩진 색", d: "무지개빛 띠나 어두운 반점으로 색이 달라져요.",
        svg: S.panel(
          S.part(70, 70, 160, 100, '#f0c43c') +
          `<ellipse cx="120" cy="116" rx="36" ry="22" fill="#b4562d" fill-opacity=".55"/><ellipse cx="120" cy="116" rx="24" ry="13" fill="#7a2f8a" fill-opacity=".45"/><ellipse cx="120" cy="116" rx="12" ry="6" fill="#2f8fe0" fill-opacity=".55"/>` +
          `<rect x="186" y="80" width="30" height="80" fill="#3b5163" fill-opacity=".35"/>` +
          S.ng(250, 60, 14) + S.tag(150, 196, '색이 달라졌어요', { color: S.C.red })) }
    ],
    points: [
      { k: "원인", v: "수세 불량·습기·후처리 문제" },
      { k: "모양", v: "얼룩·무지개띠·어두운 변화" },
      { k: "예방", v: "충분히 헹구고 바로 말려요" }
    ],
    care: "세척수 자국이 남지 않게 마지막 수세와 건조 조건을 관리하세요.",
    related: ["수세", "후처리", "흐름자국", "내식성"]
  },

  "블리스터": {
    hook: "도금 피부에 물집이 잡혀요.",
    steps: [
      { t: "갇힌 원인", d: "바탕 오염이나 가스가 도금 밑에 갇혀요.",
        svg: S.panel(
          S.layer(30, 170, 240, 28, 'base') + S.layer(30, 138, 240, 32, 'gold') +
          `<g fill="#8a6a4a"><circle cx="120" cy="170" r="6"/><circle cx="134" cy="172" r="4"/><circle cx="148" cy="169" r="5"/></g>` +
          S.tag(150, 88, '밑에 갇힌 오염·가스', { color: S.C.red }) + S.arrow(150, 104, 138, 164, 'red', 2.5)) },
      { t: "부풀어 올라", d: "열이나 시간이 지나면 갇힌 가스가 늘어나 층을 밀어요.",
        svg: S.panel(
          S.layer(30, 170, 240, 28, 'base') +
          `<path d="M30 170 L100 170 Q150 90 200 170 L270 170 L270 140 L205 140 Q150 56 95 140 L30 140Z" fill="#f0c43c" stroke="#5f6c78"/><path d="M104 168 Q150 110 196 168Z" fill="#fff" fill-opacity=".7"/>` +
          S.arrow(150, 160, 150, 118, 'red', 3) + S.emoji(230, 100, '🔥', 28)) },
      { t: "물집 모양", d: "표면에 둥근 혹이 보이고 누르면 얇은 층이 눌려요.",
        svg: S.panel(
          S.part(40, 70, 220, 110, '#f0c43c') +
          `<g fill="#fff" fill-opacity=".55" stroke="#9a7a10" stroke-width="2"><ellipse cx="100" cy="110" rx="22" ry="16"/><ellipse cx="170" cy="130" rx="16" ry="12"/><ellipse cx="214" cy="100" rx="12" ry="9"/></g>` +
          S.magnifier(60, 44, 16) + S.ng(250, 46, 13) + S.tag(170, 44, '둥근 혹', { color: S.C.red })) }
    ],
    points: [
      { k: "모양", v: "일부만 둥글게 부풀어요" },
      { k: "원인", v: "바탕 오염·층 사이 가스" },
      { k: "끝은", v: "터지면 박리로 이어져요" }
    ],
    care: "전처리와 세정 상태를 먼저 보고, 열처리 후 부풂도 함께 확인하세요.",
    related: ["박리", "밀착력", "전처리", "기포"]
  },

  "스크래치": {
    hook: "도금은 흠을 덮지 못하고 따라 그려요.",
    steps: [
      { t: "부딪힘", d: "이송 중 부품끼리 부딪혀 가느다란 흠이 생겨요.",
        svg: S.panel(
          S.part(40, 100, 90, 56) + S.part(170, 100, 90, 56) + S.flash(150, 118, 1.1) +
          S.arrow(30, 70, 70, 94, 'gray', 2) + S.arrow(270, 70, 230, 94, 'gray', 2) +
          `<path d="M60 130 L110 124 M190 140 L240 132" stroke="#d6453d" stroke-width="2.5" stroke-linecap="round"/>` +
          S.tag(150, 196, '부품끼리 부딪힘', { color: S.C.red })) },
      { t: "흠 위 도금", d: "도금이 흠을 따라 얇게 입혀져 자국이 그대로 남아요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') +
          `<path d="M30 150 L120 150 L150 184 L180 150 L270 150 L270 124 L190 124 L150 160 L110 124 L30 124Z" fill="#f0c43c" stroke="#5f6c78"/><path d="M120 150 L150 184 L180 150Z" fill="#7b8794" fill-opacity="0"/>` +
          S.tag(150, 66, '흠 자리는 오목', { color: S.C.red }) + S.arrow(150, 82, 150, 138, 'red', 2.5) + S.magnifier(236, 70, 14)) },
      { t: "칸막이", d: "부품 사이를 띄우고 칸막이 트레이로 옮겨요.",
        svg: S.panel(
          `<rect x="30" y="120" width="240" height="70" rx="6" fill="#e3e9ee" stroke="#6d7f8d" stroke-width="3"/>` +
          `<line x1="110" y1="120" x2="110" y2="190" stroke="#6d7f8d" stroke-width="3"/><line x1="190" y1="120" x2="190" y2="190" stroke="#6d7f8d" stroke-width="3"/>` +
          S.part(50, 140, 40, 36, '#e9c24a') + S.part(130, 140, 40, 36, '#e9c24a') + S.part(210, 140, 40, 36, '#e9c24a') +
          S.worker(150, 60, 1.1) + S.ok(236, 60, 13) + S.arrow(180, 80, 200, 124, 'green', 2)) }
    ],
    points: [
      { k: "시점", v: "도금 전에 생긴 흠이 많아요" },
      { k: "도금 후", v: "흠을 메우지 못하고 남아요" },
      { k: "대책", v: "취급·이송 때 접촉 줄이기" }
    ],
    care: "의심되는 흠은 도금 전에 확인해서 불량을 앞 공정에서 걸러 내세요.",
    related: ["연마", "버프 연마", "표면 거칠기", "랙 도금"]
  },

  "타는 도금": {
    hook: "전기를 너무 세게 주면 도금이 타 버려요.",
    steps: [
      { t: "전류 과다", d: "양극이 너무 가깝거나 전류가 높으면 한곳에 몰려요.",
        svg: S.panel(
          S.layer(30, 30, 20, 120, 'gold') + S.part(210, 60, 30, 90) + S.gauge(130, 100, 36, .95, S.C.red) +
          S.zap(128, 150, 1) + S.arrow(56, 90, 204, 90, 'red', 5) + S.tag(150, 196, '전류가 너무 세요', { color: S.C.red })) },
      { t: "거친 석출", d: "금속이 가지처럼 삐죽삐죽 자라 검게 탄 듯 보여요.",
        svg: S.panel(
          S.layer(30, 150, 240, 44, 'base') +
          `<path d="M30 150 L50 110 L66 150 L88 96 L104 150 L130 104 L148 150 L172 90 L190 150 L214 108 L230 150 L250 118 L270 150Z" fill="#4a3a2c" stroke="#222" stroke-width="1.5"/>` +
          S.text(150, 66, '삐죽삐죽 검은 도금', { size: 13, fill: S.C.red }) + S.emoji(250, 80, '🔥', 28) + S.ng(40, 66, 13)) },
      { t: "전류 낮추기", d: "전류를 낮추고 양극·걸이 위치를 조절해요.",
        svg: S.panel(
          S.layer(30, 40, 20, 120, 'gold') + S.part(210, 60, 30, 90) + S.gauge(130, 100, 36, .35, S.C.green) +
          S.arrow(56, 90, 204, 90, 'green', 2) + S.arrow(60, 170, 100, 170, 'gray', 2) + S.arrow(60, 170, 30, 170, 'gray', 2) +
          S.tag(150, 196, '낮은 전류·알맞은 거리', { color: S.C.green }) + S.ok(260, 40, 13)) }
    ],
    points: [
      { k: "원인", v: "높은 전류 밀도·가까운 양극" },
      { k: "모양", v: "거칠고 검거나 가루처럼 부스스" },
      { k: "잘 생기는 곳", v: "모서리·돌출부" }
    ],
    care: "전류를 올리기 전에 부품 면적을 계산하고, 접촉 불량도 확인하세요.",
    related: ["전류 밀도", "고전류 밀도", "가장자리 효과", "정류기"]
  },

  "포로시티": {
    hook: "구멍이 얼마나 많은지 헤아리는 말이에요.",
    steps: [
      { t: "구멍 밀도", d: "같은 면적에 구멍이 적은지 많은지로 정도를 나눠요.",
        svg: S.panel(
          `<rect x="24" y="50" width="118" height="110" rx="6" fill="#cfd8e0" stroke="#5f6c78" stroke-width="2"/><rect x="158" y="50" width="118" height="110" rx="6" fill="#cfd8e0" stroke="#5f6c78" stroke-width="2"/>` +
          `<g fill="#3b5163"><circle cx="60" cy="84" r="3.5"/><circle cx="104" cy="126" r="3.5"/></g>` +
          `<g fill="#3b5163"><circle cx="180" cy="74" r="3.5"/><circle cx="210" cy="90" r="3.5"/><circle cx="244" cy="72" r="3.5"/><circle cx="190" cy="118" r="3.5"/><circle cx="226" cy="132" r="3.5"/><circle cx="256" cy="108" r="3.5"/><circle cx="172" cy="146" r="3.5"/><circle cx="248" cy="148" r="3.5"/><circle cx="214" cy="110" r="3.5"/></g>` +
          S.ok(83, 190, 12) + S.ng(217, 190, 12) + S.text(83, 38, '적음', { size: 12, fill: S.C.green }) + S.text(217, 38, '많음', { size: 12, fill: S.C.red })) },
      { t: "시험하기", d: "시험지를 대면 구멍 자리에 색 점이 나타나요.",
        svg: S.panel(
          S.part(50, 100, 200, 70, '#cfd8e0') + `<rect x="62" y="84" width="176" height="62" fill="#fff" fill-opacity=".85" stroke="#2f8fe0" stroke-width="2" stroke-dasharray="5 3"/>` +
          `<g fill="#2f8fe0"><circle cx="100" cy="112" r="4"/><circle cx="150" cy="126" r="4"/><circle cx="196" cy="108" r="4"/><circle cx="214" cy="130" r="4"/></g>` +
          S.tag(150, 52, '시험지에 점 표시', { color: S.C.blue }) + S.arrow(150, 68, 150, 90, 'blue', 2) + S.magnifier(262, 56, 12)) },
      { t: "정도 판정", d: "점을 세어 보호층의 빈틈이 규격 안인지 봐요.",
        svg: S.panel(
          S.gauge(100, 120, 52, .72, S.C.red) + S.text(100, 150, '점 수', { size: 12 }) +
          S.tag(220, 70, '규격 이내?', { color: S.C.gray }) + S.ok(190, 130, 14) + S.ng(250, 130, 14) +
          S.text(190, 168, '합격', { size: 11, fill: S.C.green }) + S.text(250, 168, '불합격', { size: 11, fill: S.C.red })) }
    ],
    points: [
      { k: "뜻", v: "구멍이 많은 ‘정도’(밀도)예요" },
      { k: "기공과", v: "기공은 구멍, 포로시티는 많고 적음" },
      { k: "확인", v: "포로시티 시험으로 빈틈을 봐요" }
    ],
    care: "합격 기준은 도금 종류와 규격마다 다르니 해당 규격을 확인하세요.",
    related: ["기공", "다공성", "핀홀", "염수분무시험"]
  },

  "피트": {
    hook: "도금 표면에 콕콕 찍힌 작은 웅덩이예요.",
    steps: [
      { t: "방울 붙음", d: "기포나 이물이 표면에 붙은 채 도금이 시작돼요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 134, 110, 16, 'gold') + S.layer(160, 134, 110, 16, 'gold') +
          `<circle cx="150" cy="140" r="11" fill="#fff" stroke="#2f8fe0" stroke-width="2.5"/>` +
          S.tag(150, 84, '기포·이물', { color: S.C.blue }) + S.arrow(150, 100, 150, 124, 'blue', 2)) },
      { t: "둘러 자람", d: "방울은 두고 주변만 두껍게 자라 구멍이 깊어져요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 100, 112, 50, 'gold') + S.layer(158, 100, 112, 50, 'gold') +
          `<circle cx="150" cy="130" r="10" fill="#fff" stroke="#2f8fe0" stroke-width="2.5"/><rect x="142" y="100" width="16" height="30" fill="#eef5fb"/>` +
          S.arrow(60, 80, 60, 98, 'gray', 2) + S.arrow(240, 80, 240, 98, 'gray', 2) + S.text(150, 70, '주변만 위로', { size: 12 })) },
      { t: "콕콕 자국", d: "방울이 떠난 뒤 작고 깊은 구멍이 남아요.",
        svg: S.panel(
          S.part(40, 80, 220, 100, '#f0c43c') +
          `<g fill="#6b5410" stroke="#3a2d06"><circle cx="90" cy="116" r="5"/><circle cx="140" cy="140" r="4"/><circle cx="180" cy="108" r="5"/><circle cx="220" cy="136" r="4"/><circle cx="116" cy="160" r="3.5"/></g>` +
          S.magnifier(250, 50, 16) + S.ng(50, 50, 13) + S.tag(150, 52, '깊은 점 구멍', { color: S.C.red })) }
    ],
    points: [
      { k: "원인", v: "기포·오염·이물질" },
      { k: "모양", v: "좁고 깊은 점 모양 구멍" },
      { k: "대책", v: "교반·습윤제·욕 여과" }
    ],
    care: "구멍 크기와 분포를 보고 기포인지 오염인지 원인을 가려 내세요.",
    related: ["기포", "핀홀", "습윤제", "욕 여과"]
  },

  "핀홀": {
    hook: "바늘로 찌른 듯 바탕까지 뚫린 구멍이에요.",
    steps: [
      { t: "자리 비움", d: "작은 기포·이물이 붙은 자리에는 도금이 안 올라가요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 110, 114, 40, 'nickel') + S.layer(156, 110, 114, 40, 'nickel') +
          `<circle cx="150" cy="144" r="6" fill="#8a6a4a"/>` + S.tag(150, 66, '작은 이물', { color: S.C.red }) + S.arrow(150, 82, 150, 134, 'red', 2.5)) },
      { t: "관통", d: "좁은 구멍이 층을 끝까지 뚫고 바탕이 드러나요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 110, 117, 40, 'nickel') + S.layer(153, 110, 117, 40, 'nickel') +
          S.tag(150, 66, '바탕이 보여요', { color: S.C.red }) + S.arrow(150, 82, 150, 146, 'red', 3) + S.magnifier(236, 70, 14) +
          S.text(150, 214, '(실제론 머리카락보다 가늘어요)', { size: 11, weight: 700 })) },
      { t: "밑에서 부식", d: "물이 구멍으로 들어가 도금 아래에서 녹이 퍼져요.",
        svg: S.panel(
          S.layer(30, 150, 240, 46, 'base') + S.layer(30, 110, 117, 40, 'nickel') + S.layer(153, 110, 117, 40, 'nickel') +
          `<ellipse cx="150" cy="150" rx="60" ry="10" fill="#b4562d" fill-opacity=".85"/>` +
          S.drop(150, 70, '#4aa3df', 1.1) + S.arrow(150, 86, 150, 130, 'blue', 2.5) +
          S.arrow(150, 174, 100, 174, 'red', 2) + S.arrow(150, 174, 200, 174, 'red', 2) + S.ng(250, 80, 13)) }
    ],
    points: [
      { k: "크기", v: "눈에 거의 안 보이는 가는 구멍" },
      { k: "특징", v: "도금층을 끝까지 관통해요" },
      { k: "위험", v: "겉은 멀쩡해도 속이 녹슬어요" }
    ],
    care: "중요한 접점·방식 부품은 핀홀 시험이나 확대 검사로 확인하세요.",
    related: ["기공", "피트", "포로시티", "내식성"]
  },

  "흐름자국": {
    hook: "마르다 만 물이 남긴 눈물 자국이에요.",
    steps: [
      { t: "물이 맺힘", d: "꺼낸 부품에 헹굼물·약품이 맺혀 아래로 흘러요.",
        svg: S.panel(
          S.part(100, 40, 100, 110, '#e9c24a') + S.drop(120, 60, '#4aa3df', 1) + S.drop(160, 70, '#4aa3df', 1) + S.drop(184, 56, '#4aa3df', 1) +
          S.arrow(120, 76, 120, 130, 'blue', 2) + S.arrow(160, 86, 160, 140, 'blue', 2) + S.arrow(184, 72, 184, 124, 'blue', 2) +
          S.drop(150, 190, '#4aa3df', 1.3) + S.tag(236, 196, '떨어짐', { color: S.C.blue })) },
      { t: "마르며 남음", d: "흐른 길을 따라 얼룩 줄이 그대로 말라붙어요.",
        svg: S.panel(
          S.part(100, 40, 100, 130, '#e9c24a') +
          `<path d="M120 50 Q116 100 124 160 M150 50 Q156 110 148 160 M180 50 Q176 90 182 160" stroke="#8a6a4a" stroke-width="5" fill="none" stroke-opacity=".6" stroke-linecap="round"/>` +
          S.ng(236, 60, 14) + S.tag(236, 110, '줄 얼룩', { color: S.C.red }) + S.emoji(50, 100, '💨', 30)) },
      { t: "배액·건조", d: "물이 한쪽으로 빠지게 걸고 바로 건조해요.",
        svg: S.panel(
          `<g transform="rotate(18 150 100)">` + S.part(112, 40, 76, 110, '#e9c24a') + `</g>` +
          S.arrow(110, 160, 90, 192, 'blue', 3) + S.drop(80, 196, '#4aa3df', 1) + S.oven(206, 120, 70, 60) + S.arrow(196, 150, 208, 150, 'red', 2) + S.ok(246, 80, 13) + S.text(60, 60, '기울여\n빼기', { size: 11 })) }
    ],
    points: [
      { k: "원인", v: "배액 불량·건조 지연" },
      { k: "모양", v: "위에서 아래로 흐른 줄무늬" },
      { k: "관리", v: "걸이 각도와 건조 조건 점검" }
    ],
    care: "마지막 수세수 상태와 건조까지의 대기시간도 같이 점검하세요.",
    related: ["수세", "수세수", "변색", "후처리"]
  },

  "미도금": {
    hook: "옷을 입히다 만 맨살이 드러난 곳이에요.",
    steps: [
      { t: "막는 것", d: "오염막·기포·가림 때문에 금속 이온이 닿지 못해요.",
        svg: S.panel(
          S.layer(40, 160, 220, 36, 'base') + `<rect x="120" y="150" width="60" height="10" fill="#8a6a4a"/>` +
          S.atom(60, 80, 10, 'M⁺', '#fff', '#2f8fe0') + S.atom(110, 60, 10, 'M⁺', '#fff', '#2f8fe0') + S.atom(190, 60, 10, 'M⁺', '#fff', '#2f8fe0') + S.atom(240, 80, 10, 'M⁺', '#fff', '#2f8fe0') +
          S.arrow(60, 94, 60, 146, 'blue', 2) + S.arrow(240, 94, 240, 146, 'blue', 2) + S.arrow(140, 94, 140, 126, 'red', 2.5) + S.text(150, 120, '못 닿음', { size: 11, fill: S.C.red })) },
      { t: "건너뜀", d: "막힌 넓은 자리만 도금이 안 올라가고 비어요.",
        svg: S.panel(
          S.layer(30, 160, 240, 36, 'base') + S.layer(30, 126, 90, 34, 'gold') + S.layer(180, 126, 90, 34, 'gold') +
          S.tag(150, 110, '맨 바탕', { color: S.C.red }) + S.arrow(150, 124, 150, 156, 'red', 2.5) + S.ng(150, 64, 14)) },
      { t: "접점 불량", d: "드러난 면 때문에 접촉·내식 성능이 달라져요.",
        svg: S.panel(
          S.part(60, 80, 180, 60, '#f0c43c') + `<rect x="110" y="80" width="64" height="60" fill="#7b8794"/>` +
          S.tag(142, 60, '도금 없음', { color: S.C.red }) +
          S.magnifier(228, 168, 14) + S.tag(100, 180, '접촉 불량·부식', { color: S.C.red }) + S.ng(260, 60, 13)) }
    ],
    points: [
      { k: "크기", v: "핀홀보다 훨씬 넓은 빈 부분" },
      { k: "원인", v: "오염·기포·차폐·접촉 불량" },
      { k: "확인", v: "걸이 접점과 마스킹 상태" }
    ],
    care: "마스킹 설계가 아닌 미도금이면 세정·걸이 접촉부터 점검하세요.",
    related: ["마스킹", "기포", "전처리", "접점 도금"]
  },

  "불균일 도금": {
    hook: "같은 통 안인데 어떤 건 두껍고 어떤 건 얇아요.",
    steps: [
      { t: "위치 차이", d: "양극과의 거리·방향이 달라 전류가 다르게 닿아요.",
        svg: S.panel(
          S.layer(30, 24, 240, 10, 'gold') + S.text(150, 20, '양극', { size: 11 }) +
          S.part(60, 120, 36, 70) + S.part(132, 90, 36, 70) + S.part(204, 120, 36, 70) +
          S.arrow(78, 44, 78, 112, 'gray', 1.5) + S.arrow(150, 44, 150, 82, 'red', 4) + S.arrow(222, 44, 222, 112, 'gray', 1.5)) },
      { t: "두께 차이", d: "전류를 많이 받은 부품은 두껍고 적게 받으면 얇아요.",
        svg: S.panel(
          S.layer(30, 170, 240, 24, 'base') + S.layer(40, 140, 50, 30, 'gold') + S.layer(125, 112, 50, 58, 'gold') + S.layer(210, 148, 50, 22, 'gold') +
          S.text(65, 130, '보통', { size: 12 }) + S.text(150, 100, '두꺼움', { size: 12, fill: S.C.red }) + S.text(235, 138, '얇음', { size: 12, fill: S.C.blue }) + S.ng(150, 56, 13)) },
      { t: "고르게", d: "간격을 맞추고 교반해서 전류가 고르게 닿게 해요.",
        svg: S.panel(
          S.layer(30, 24, 240, 10, 'gold') + S.text(150, 20, '양극', { size: 11 }) +
          S.part(66, 100, 36, 70) + S.part(132, 100, 36, 70) + S.part(198, 100, 36, 70) +
          S.arrow(84, 44, 84, 94, 'blue', 2.5) + S.arrow(150, 44, 150, 94, 'blue', 2.5) + S.arrow(216, 44, 216, 94, 'blue', 2.5) +
          S.wave(50, 190, 100) + S.wave(160, 190, 100) + S.ok(260, 60, 13)) }
    ],
    points: [
      { k: "원인", v: "부품 간격·위치·교반 차이" },
      { k: "과도금과", v: "과도금은 전체가 두꺼운 것" },
      { k: "확인", v: "여러 위치에서 두께를 재요" }
    ],
    care: "부품을 너무 빽빽하게 걸지 말고, 위치별 두께를 샘플로 측정하세요.",
    related: ["전류 분포", "균일 전착성", "욕 교반", "두께 측정"]
  }

});
