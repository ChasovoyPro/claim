(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const a of l.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(o){if(o.ep)return;o.ep=!0;const l=i(o);fetch(o.href,l)}})();const ot=[5,10,25],Ot=25,It=1.2,u=.5,O=50,Ct=.5,qt=1e3,Dt=1.3,z=.1,Tt=100,lt=["Заметка в газете","Праздник в городе","Портрет на доске объявлений","Табличка с вашим именем на салуне","Песня о вас в салуне","Памятник на площади"],rt=["Дастфорд","Пыльная Станция","Медная Балка","Каньон Гремучей Змеи"],f={saloon:{name:"Салун «Последний глоток»",cost:100,income:1,desc:"Здесь пьют, играют и сплетничают. Сплетни — тоже деньги.",manager:{name:"Мэй",cost:200,mission:"saloon_tribute",line:"Мэй: «Договорились. Выручку теперь забираю я, а ты занимайся делами»."}},smithy:{name:"Кузница Дерека",cost:240,income:2,desc:"Подковы, ножи и пули. Без кузнеца город — просто кучка домов.",unlockAfter:"saloon_tribute",manager:{name:"Дерек",cost:600,mission:"smithy_tools",line:"Дерек: «Касса — это тоже наковальня: я буду бить по ней сам. Иди, у тебя дела»."}},sheriff:{name:"Офис шерифа",cost:600,income:4,desc:"Доска розыска и закон. Пока что закон — это ты.",unlockAfter:"smithy_tools",manager:{name:"Помощник Томми",cost:1400,level:3,line:"Томми: «Выручку и награды за поимки беру на себя, шериф»."}},telegraph:{name:"Телеграф",cost:1200,income:8,desc:"Единственная ниточка к большому миру. И к Железной Компании.",unlockAfter:"smithy_tools",manager:{name:"Вилли",cost:3e3,mission:"telegraph_wire",line:"Вилли: «Я и так сижу у аппарата круглые сутки. Выручку заберу заодно»."}}},yt={id:"prologue",building:null,title:"Пролог",blurb:"",steps:[{say:["Закат. Дорога привела тебя в Дастфорд — городок, который Железная Компания решила стереть с карты.","В кармане письмо от старого друга, шерифа Хэнка: «Приезжай. Последний контракт. Заплачу всем, что от города осталось».","Хэнка ты не нашёл. Нашёл пепелище, десяток упрямых людей и банду у руин салуна.","Громила Бык: «Эй, чужак! Это земля Железной Компании. Убирайся, пока цел».","ОБУЧЕНИЕ. Жди, пока противник вскинет руку. Как только это случится — жми «Огонь» (или пробел). Нажмёшь раньше — фол и минус репутация. Чем быстрее, тем лучше награда."]},{duel:{foe:"Громила Бык",reason:"Бык хватается за кобуру. Стреляй первым!",perfectMs:800,goodMs:1200}},{say:["Бык бежит прочь. Из укрытий выходят люди: «Если останешься — мы отстроим салун. Нам нужен тот, кто умеет стрелять»."]},{reward:{gold:50,rep:1}}],after:["Салун Дастфорда снова открыт. Выручка копится в кассе, а над зданием появляются монеты: нажми на них, чтобы забрать золото.","Нажми на само здание, чтобы улучшить его или взять задание. Когда найдёшь помощников, они начнут забирать выручку сами."],onDone:t=>{t.buildings.saloon=1,t.tutorialDone=!0,t.lastSeen=Date.now()}},k=[{id:"saloon_tribute",building:"saloon",title:"Сборщики дани",blurb:"Люди Компании пришли за «налогом». Защити салун.",incomeBonus:u,steps:[{say:["Хозяйка Мэй: «Вчера они забрали всю выручку. Сегодня придут снова. Без салуна городу конец»."]},{duel:{foe:"Сборщик дани",place:"saloon",reason:"Сборщик дани входит в салун и кладёт руку на кобуру. Ты стоишь у стойки.",perfectMs:650,goodMs:950}},{reward:{gold:120,rep:1}}],after:["Мэй: «Эти больше не придут. Теперь посетители не боятся заходить». Доход салуна вырос.","Мэй: «Хочешь, я буду заведовать кассой? Недорого. Сама буду забирать выручку, пока ты занят»."]},{id:"smithy_tools",building:"smithy",title:"Украденные инструменты",blurb:"У кузнеца украли инструменты. Вор прячется в заброшенной лавке.",incomeBonus:u,steps:[{say:["Кузнец Дерек: «Без молота я ничего не выкую. Вор засел в лавке „Ржавая подкова“ за городом. Он вооружён»."]},{duel:{foe:"Вор",kind:"feint",place:"alley",reason:"Ты входишь в лавку первым. Вор тянется к револьверу — не дай ему шанса.",perfectMs:600,goodMs:900}},{choice:{id:"thief",q:"Вор поднимает руки: «Меня заставили! Компания платит за каждую кражу». Что с ним делать?",options:[{label:"Отпустить",value:"spare"},{label:"Отвести к шерифу",value:"punish"}]}},{reward:{gold:240,rep:1}}],after:["Дерек получает инструменты обратно. Кузница заработала на полную, доход вырос.","Дерек: «Могу ещё и кассой заняться, если возьмёшь меня на службу»."]},{id:"sheriff_bounty",building:"sheriff",title:"Охота за головами",blurb:"На доске новая бумага. Можно брать снова и снова.",repeatable:!0,steps:[{say:["Помощник шерифа: «На доске свежий розыск. Кто-то обстрелял обоз на дороге. Награда небольшая, но платят сразу»."]},{duel:{foe:"Беглецы",kind:"gang",rounds:2,place:"waterhole",reason:"Беглец ждёт у водопоя, а с ним ещё один. Они знают, что за ними пришли.",perfectMs:600,goodMs:850}},{reward:{gold:80,rep:1}}]},{id:"telegraph_wire",building:"telegraph",title:"Депеша Компании",blurb:"Телеграфист перехватил странное сообщение. Нужна защита.",incomeBonus:u,steps:[{say:["Телеграфист Вилли: «Я перехватил депешу Компании. К Дастфорду едет человек по имени Кроу. Он не любит свидетелей»."]},{say:["Вилли: «Кстати, вор из лавки теперь на свободе. Говорит, ты его пощадил. И уже шепнул мне, о чём болтают люди Компании»."],when:["thief","spare"]},{say:["Вилли: «Вор сидит под замком. В городе шепчутся, что ты слишком жёсток. Но Компания теперь знает, что тебя лучше не злить»."],when:["thief","punish"]},{duel:{foe:"Разведчик Кроу",kind:"feint",reason:"Разведчик Кроу целится в провод. Если телеграф замолчит — город ослепнет.",perfectMs:500,goodMs:750}},{reward:{gold:400,rep:2}}],after:["Вилли: «Теперь мы слышим Компанию, а Компания не слышит нас. Доход телеграфа вырос». Он готов сам забирать выручку, если ты наймёшь его управляющим.","Конец первой главы. Кроу уже в пути… Продолжение следует."]},{id:"expand_saloon_1",building:"saloon",gate:0,incomeBonus:u,title:"Расширение: второй этаж",blurb:"Мэй хочет достроить второй этаж, но Компания присылает «проверяющих».",steps:[{say:["Мэй: «Народу всё больше, а мест нет. Хочу второй этаж с комнатами. Только Компания уже прислала проверяющего — требует остановить стройку»."]},{duel:{foe:"Проверяющий Компании",place:"saloon",reason:"Проверяющий Компании стоит у лестницы и тянется к кобуре. Стройка не остановится.",perfectMs:600,goodMs:900}},{reward:{gold:200,rep:1}}],after:["Второй этаж готов. В салуне появились комнаты для постояльцев, а над входом зажёгся фонарь."]},{id:"expand_saloon_2",building:"saloon",gate:1,incomeBonus:u,title:"Расширение: игорный зал",blurb:"Заезжие игроки хотят открыть зал, но у них есть враги.",steps:[{say:["Мэй: «Игроки готовы платить за отдельный зал. Но один из них задолжал не тем людям, и те пришли за ним сюда»."]},{duel:{foe:"Кредитор и его люди",kind:"gang",rounds:3,place:"saloon",reason:"В зал входит кредитор с двумя помощниками. Ты у карточного стола.",perfectMs:550,goodMs:850}},{reward:{gold:400,rep:1}}],after:["Над салуном выросла башенка с флагом. Игорный зал полон до утра."]},{id:"expand_smithy_1",building:"smithy",gate:0,incomeBonus:u,title:"Расширение: новый горн",blurb:"Дереку нужен большой горн, но уголь перехватила банда.",steps:[{say:["Дерек: «С таким горном я бы ковал вдвое быстрее. Но весь уголь с дороги перехватила банда. Они ждут у рудника»."]},{duel:{foe:"Главарь угольщиков",place:"mine",reason:"Главарь угольщиков загораживает тебе дорогу к руднику.",perfectMs:600,goodMs:900}},{reward:{gold:300,rep:1}}],after:["Новый горн гудит день и ночь. Над кузницей поднимается дым."]},{id:"expand_smithy_2",building:"smithy",gate:1,incomeBonus:u,title:"Расширение: оружейная",blurb:"Кузнице нужна отдельная мастерская под револьверы.",steps:[{say:["Дерек: «Хочу делать револьверы, а не только подковы. Но чертежи у человека в соседнем городе. Он требует за них дуэль»."]},{duel:{foe:"Оружейный мастер",kind:"feint",reason:"Оружейный мастер вышел на улицу и держит руку у пояса. Это проверка.",perfectMs:550,goodMs:800}},{reward:{gold:500,rep:1}}],after:["Рядом с кузницей выросла оружейная пристройка. Револьверы Дерека скоро узнают по всей округе."]},{id:"expand_sheriff_1",building:"sheriff",gate:0,incomeBonus:u,title:"Расширение: тюрьма",blurb:"Задержанных некуда сажать. Нужна камера.",steps:[{say:["Помощник: «Мы поймали троих, а запереть негде. Нужна камера. Но у одного из них осталась подельница, и она не отпустит его просто так»."]},{duel:{foe:"Подельница",kind:"feint",reason:"Подельница беглеца ждёт у здания шерифа. Она быстрее, чем кажется.",perfectMs:550,goodMs:850}},{reward:{gold:360,rep:1}}],after:["У офиса шерифа выросла пристройка с решётками. На флагштоке развевается новое знамя."]},{id:"expand_sheriff_2",building:"sheriff",gate:1,incomeBonus:u,title:"Расширение: гарнизон",blurb:"Шерифу нужно больше людей и оружия.",steps:[{say:["Помощник: «Если мы наймём ещё людей, Компания перестанет считать нас лёгкой добычей. Но им надо показать силу»."]},{duel:{foe:"Наёмник Компании",kind:"feint",reason:"Наёмник Компании приезжает «проверить» нового шерифа. Покажи, кто здесь закон.",perfectMs:500,goodMs:800}},{reward:{gold:600,rep:2}}],after:["В Дастфорде появился настоящий гарнизон. Люди идут к шерифу за порядком."]},{id:"expand_telegraph_1",building:"telegraph",gate:0,incomeBonus:u,title:"Расширение: вторая линия",blurb:"Вилли хочет протянуть вторую линию до соседнего города.",steps:[{say:["Вилли: «Вторая линия даст нам связь с соседним городом. Но по пути кто-то срезает провода, и я знаю кто»."]},{duel:{foe:"Диверсант",reason:"Диверсант целится в провод. Если он выстрелит — линия замолчит.",perfectMs:500,goodMs:800}},{reward:{gold:500,rep:1}}],after:["Рядом с телеграфом вырос второй столб. Провода тянутся в обе стороны."]},{id:"expand_telegraph_2",building:"telegraph",gate:1,incomeBonus:u,title:"Расширение: мачта",blurb:"Высокая мачта поймает даже слабые сигналы Компании.",steps:[{say:["Вилли: «Мне нужна высокая мачта. С неё мы услышим всё, что говорят в штабе Компании. Но её придётся охранять»."]},{duel:{foe:"Разведчик Компании",reason:"Разведчик Компании идёт к мачте. Он знает, зачем она нужна.",perfectMs:450,goodMs:750}},{reward:{gold:800,rep:2}}],after:["Над телеграфом поднялась мачта с красным огоньком. Ночью её видно за много миль."]}],mt=[{id:"ev_saloon_1",building:"saloon",event:!0,minLevel:3,guaranteed:!0,title:"Драка в салуне",blurb:"",steps:[{say:["В салуне драка: двое фермеров крушат мебель. Мэй кричит: «Сделай что-нибудь!»"]},{choice:{id:"ev_s1",q:"Что делаешь?",options:[{label:"Разнять силой",value:"fight"},{label:"Заплатить за порядок (60)",value:"pay"}]}},{duel:{foe:"Фермер",place:"saloon",reason:"Один из фермеров хватается за обрез. Придётся стрелять.",perfectMs:650,goodMs:950},when:["ev_s1","fight"]},{reward:{gold:100,rep:1},when:["ev_s1","fight"]},{reward:{gold:-60},when:["ev_s1","pay"]},{say:["Мэй: «Спасибо. В следующий раз постараюсь обойтись без бутылок»."]}]},{id:"ev_saloon_2",building:"saloon",event:!0,minLevel:5,title:"Заезжий шулер",blurb:"",steps:[{say:["В салун заходит улыбчивый незнакомец с колодой. Через час он уже выиграл почти у всех."]},{choice:{id:"ev_s2",q:"Как поступить?",options:[{label:"Прогнать шулера",value:"expel"},{label:"Взять долю за молчание (+160)",value:"share"}]}},{reward:{rep:1},when:["ev_s2","expel"]},{reward:{gold:160,rep:-1},when:["ev_s2","share"]}]},{id:"ev_smithy_1",building:"smithy",event:!0,minLevel:3,guaranteed:!0,title:"Крупный заказ",blurb:"",steps:[{say:["Незнакомец в сером плаще заказывает двадцать револьверов и платит вдвое. Не говорит, зачем."]},{choice:{id:"ev_m1",q:"Принять заказ?",options:[{label:"Взять заказ (+240)",value:"take"},{label:"Отказать",value:"refuse"}]}},{reward:{gold:240,rep:-1},when:["ev_m1","take"]},{reward:{rep:1},when:["ev_m1","refuse"]},{say:["Дерек: «Ты принял решение. Теперь надо жить с последствиями»."]}]},{id:"ev_smithy_2",building:"smithy",event:!0,minLevel:5,title:"Ученик Дерека",blurb:"",steps:[{say:["Мальчишка из города просится в ученики. Руки у него золотые, но денег на еду нет."]},{choice:{id:"ev_m2",q:"Что скажешь Дереку?",options:[{label:"Взять и оплатить еду (-80)",value:"take"},{label:"Не сейчас",value:"no"}]}},{reward:{gold:-80,rep:1},when:["ev_m2","take"]}]},{id:"ev_sheriff_1",building:"sheriff",event:!0,minLevel:3,guaranteed:!0,title:"Беглый заключённый",blurb:"",steps:[{say:["Из камеры сбежал заключённый. Он прячется в амбаре и не собирается сдаваться."]},{duel:{foe:"Беглый заключённый",kind:"feint",place:"alley",reason:"Беглец выходит из амбара с револьвером. Он знает, что терять нечего.",perfectMs:600,goodMs:850}},{reward:{gold:140,rep:1}}]},{id:"ev_sheriff_2",building:"sheriff",event:!0,minLevel:5,title:"Подношение",blurb:"",steps:[{say:["К шерифу приходит человек Компании с конвертом: «Просто закройте глаза на пару ночных обозов»."]},{choice:{id:"ev_h2",q:"Что ответишь?",options:[{label:"Отказаться",value:"refuse"},{label:"Взять конверт (+200)",value:"take"}]}},{reward:{rep:2},when:["ev_h2","refuse"]},{reward:{gold:200,rep:-2},when:["ev_h2","take"]}]},{id:"ev_telegraph_1",building:"telegraph",event:!0,minLevel:3,guaranteed:!0,title:"Перерезанные провода",blurb:"",steps:[{say:["Утром связь пропала: кто-то перерезал провода. Вилли клянётся, что видел силуэт у столба."]},{duel:{foe:"Диверсант",place:"road",reason:"Диверсант ещё у столба. Он оборачивается и тянется к поясу.",perfectMs:550,goodMs:800}},{reward:{gold:180,rep:1}}]},{id:"ev_telegraph_2",building:"telegraph",event:!0,minLevel:5,title:"Секретная депеша",blurb:"",steps:[{say:["Вилли показывает странную депешу: в ней названия станций и ночные поезда Компании."]},{choice:{id:"ev_t2",q:"Что с ней делать?",options:[{label:"Продать копию газете (+300)",value:"sell"},{label:"Передать шерифу",value:"give"}]}},{reward:{gold:300,rep:-1},when:["ev_t2","sell"]},{reward:{gold:40,rep:1},when:["ev_t2","give"]}]}],Gt={id:"heist",building:null,title:"Ограбление поезда",blurb:"",repeatable:!0,steps:[{say:["Вилли: «Ночной поезд Компании везёт жалованье всей округе и бумаги на землю. Он встанет у водокачки на двадцать минут. Возьмём его — и Компания надолго забудет дорогу в Дастфорд».","Мэй: «Это безумие. Но я принесла патронов». Ночью, без свидетелей, вы выходите на рельсы."]},{duel:{place:"train",foe:"Охрана поезда",kind:"gang",rounds:3,reason:"Охранники выходят из вагона один за другим. Первый уже на подножке.",perfectMs:500,goodMs:750}},{say:["Сейфы вскрыты, деньги и бумаги ваши. В одной из папок печать с железнодорожным костылём, такая же, как на письмах Компании. Но кто стоит за печатью, по бумагам не понять.","Поезд уходит в ночь. Дастфорд придётся начинать заново, зато вас теперь знают. Вы — Легенда."]}]},at=document.getElementById("dialog"),Pt=document.getElementById("dialogText"),Ft=document.getElementById("dialogBtns");function I(t,e){return new Promise(i=>{Pt.textContent=t,Ft.replaceChildren(...e.map((n,o)=>{const l=document.createElement("button");return l.textContent=n,l.onclick=()=>{at.hidden=!0,i(o)},l})),at.hidden=!1})}async function L(t){for(const e of t)await I(e,["Дальше"])}function Vt(t,e=450,i=750){return t===null?"foul":t<=e?"perfect":t<=i?"good":"miss"}function Nt(t,e){return t==="perfect"?{gold:20*Math.min(e+1,5),rep:1,combo:e+1}:t==="good"?{gold:10,rep:0,combo:0}:t==="foul"?{gold:0,rep:-1,combo:0}:{gold:0,rep:0,combo:0}}const zt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#24153a"/>
      <stop offset="0.35" stop-color="#7a2a52"/>
      <stop offset="0.7" stop-color="#e8603a"/>
      <stop offset="1" stop-color="#ffb347"/>
    </linearGradient>
    <radialGradient id="glow">
      <stop offset="0" stop-color="#ffd27a" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#ffd27a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#8a4430"/>
      <stop offset="1" stop-color="#2a1316"/>
    </linearGradient>
    <linearGradient id="road" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#e08a4a" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#5a2a24" stop-opacity="0.2"/>
    </linearGradient>
    <linearGradient id="pond" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ff9a5a"/>
      <stop offset="1" stop-color="#5a2a6a"/>
    </linearGradient>
    <radialGradient id="lamp">
      <stop offset="0" stop-color="#ffd27a" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#ffb347" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="floor" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#6a3c20"/>
      <stop offset="1" stop-color="#2a150c"/>
    </linearGradient>
    <style>
      .s { fill: #0b0608; stroke: #ff9a5a; stroke-opacity: .35; stroke-width: .8; }
    </style>
  </defs>

  <g id="bg-sky">
  <!-- небо, солнце, облака, птицы -->
  <rect width="400" height="145" fill="url(#sky)"/>
  <circle cx="290" cy="138" r="90" fill="url(#glow)"/>
  <circle cx="290" cy="138" r="30" fill="#ffe3a0"/>
  <g fill="#ff9a5a" opacity="0.45">
    <rect x="20" y="62" width="120" height="5" rx="2.5"/>
    <rect x="60" y="72" width="90" height="4" rx="2"/>
    <rect x="230" y="50" width="130" height="5" rx="2.5"/>
    <rect x="260" y="60" width="80" height="4" rx="2"/>
  </g>
  <g fill="none" stroke="#1a0c14" stroke-width="1.3" stroke-linecap="round">
    <path d="M100 38 q4 -5 8 0 q4 -5 8 0"/>
    <path d="M130 30 q3 -4 6 0 q3 -4 6 0"/>
  </g>

  <!-- горы: два слоя силуэтов -->
  <polygon points="0,140 0,112 28,100 55,108 90,92 120,112 150,106 185,140" fill="#5a2347"/>
  <polygon points="215,140 240,116 262,122 290,98 322,112 352,90 380,108 400,100 400,140" fill="#5a2347"/>
  <polygon points="0,140 0,124 40,118 70,126 110,120 160,140" fill="#33172c"/>
  <polygon points="240,140 280,126 320,130 360,122 400,128 400,140" fill="#33172c"/>

  </g>

  <g id="bg-road">
  <!-- земля, дорога, дымка на горизонте -->
  <rect y="140" width="400" height="100" fill="url(#ground)"/>
  <polygon points="192,140 208,140 350,240 50,240" fill="url(#road)"/>
  <rect y="138" width="400" height="4" fill="#ffb347" opacity="0.55"/>

  <!-- кактусы и камни -->
  <g fill="#1a0c14">
    <rect x="352" y="120" width="8" height="46" rx="4"/>
    <rect x="344" y="132" width="6" height="16" rx="3"/><rect x="344" y="144" width="14" height="5" rx="2.5"/>
    <rect x="362" y="126" width="6" height="14" rx="3"/><rect x="354" y="136" width="14" height="5" rx="2.5"/>
    <path d="M128 168 q6 -10 16 -8 q8 2 10 8 z"/>
    <path d="M370 214 q10 -18 28 -14 l2 14 z"/>
  </g>

  </g>

  <g id="bg-waterhole" visibility="hidden">
    <rect y="140" width="400" height="100" fill="url(#ground)"/>
    <rect y="138" width="400" height="4" fill="#ffb347" opacity="0.55"/>
    <ellipse cx="292" cy="184" rx="104" ry="20" fill="#3a2038"/>
    <ellipse cx="292" cy="182" rx="96" ry="16" fill="url(#pond)"/>
    <g fill="#ffe3a0" opacity="0.5"><rect x="250" y="177" width="44" height="2" rx="1"/><rect x="300" y="184" width="30" height="2" rx="1"/><rect x="262" y="190" width="22" height="2" rx="1"/></g>
    <polygon points="196,140 204,140 236,190 160,190" fill="url(#road)" opacity="0.6"/>
    <g fill="#1a0c14">
      <rect x="112" y="170" width="46" height="8" rx="2"/><rect x="116" y="178" width="3" height="10"/><rect x="151" y="178" width="3" height="10"/>
      <polygon points="342,142 352,142 349,106 345,106"/><rect x="332" y="104" width="30" height="3" transform="rotate(-25 347 105)"/><rect x="332" y="104" width="30" height="3" transform="rotate(65 347 105)"/>
      <path d="M214 184 l-2 -16 M219 184 l1 -18 M224 184 l-1 -13 M360 192 l-2 -15 M366 192 l2 -17" stroke="#1a0c14" stroke-width="1.6" fill="none"/>
      <path d="M44 176 q8 -12 20 -9 q10 3 12 9 z"/>
    </g>
  </g>

  <g id="bg-train" visibility="hidden">
    <rect y="140" width="400" height="100" fill="url(#ground)"/>
    <polygon points="170,142 230,142 392,240 8,240" fill="#3a2428" opacity="0.8"/>
    <g fill="#2a1316" stroke="#ff9a5a" stroke-opacity="0.25" stroke-width="0.8">
      <rect x="-4" y="108" width="122" height="34"/><rect x="122" y="108" width="122" height="34"/><rect x="248" y="108" width="122" height="34"/>
      <rect x="-4" y="104" width="122" height="6"/><rect x="122" y="104" width="122" height="6"/><rect x="248" y="104" width="122" height="6"/>
      <polygon points="372,142 372,96 392,96 392,86 408,86 408,142"/>
    </g>
    <g fill="#0b0608">
      <rect x="40" y="114" width="34" height="28"/><rect x="166" y="114" width="34" height="28"/><rect x="292" y="114" width="34" height="28"/>
      <circle cx="20" cy="142" r="5"/><circle cx="100" cy="142" r="5"/><circle cx="146" cy="142" r="5"/><circle cx="226" cy="142" r="5"/><circle cx="272" cy="142" r="5"/><circle cx="352" cy="142" r="5"/>
    </g>
    <circle cx="398" cy="96" r="6" fill="#ffd27a" opacity="0.9"/>
    <g fill="#1a0c14" opacity="0.7"><circle cx="392" cy="78" r="8"/><circle cx="380" cy="66" r="10"/><circle cx="366" cy="52" r="11"/></g>
    <g stroke="#1a0c14" stroke-width="2.2" fill="none"><path d="M193.0 143 L120.0 240 M207.0 143 L280.0 240"/></g>
    <g stroke="#1a0c14" stroke-width="2" fill="none"><path d="M183.2 150 L216.8 150"/><path d="M177.5 157 L222.5 157"/><path d="M170.1 166 L229.9 166"/><path d="M161.0 177 L239.0 177"/><path d="M149.5 191 L250.5 191"/><path d="M135.5 208 L264.5 208"/><path d="M119.1 228 L280.9 228"/></g>
  </g>

  <g id="bg-mine" visibility="hidden">
    <polygon points="0,30 90,58 150,140 0,140" fill="#2a1318"/>
    <polygon points="400,44 312,70 250,140 400,140" fill="#2a1318"/>
    <polygon points="104,142 134,98 168,72 232,66 268,94 296,142" fill="#3a1a28" stroke="#ff9a5a" stroke-opacity="0.2"/>
    <polygon points="140,142 164,108 190,92 214,96 244,116 262,142" fill="#4a2234" opacity="0.8"/>
    <circle cx="200" cy="124" r="64" fill="url(#lamp)" opacity="0.7"/>
    <rect y="140" width="400" height="100" fill="url(#ground)"/>
    <rect x="170" y="92" width="60" height="50" fill="#5a3038"/>
    <g fill="#5a3a22"><rect x="164" y="88" width="7" height="56"/><rect x="229" y="88" width="7" height="56"/><rect x="160" y="84" width="80" height="7"/></g>
    <circle cx="176" cy="102" r="3" fill="#ffd27a"/>
    <g stroke="#1a0c14" stroke-width="2" fill="none"><path d="M188 142 L150 240 M212 142 L250 240"/><path d="M184 150 L216 150 M178 164 L222 164 M168 184 L232 184 M158 210 L242 210"/></g>
    <g fill="#0b0608"><path d="M150 196 l100 0 l-8 18 l-84 0 z"/><path d="M162 196 q8 -10 18 -6 q8 -8 20 -2 q10 -6 22 2 q8 -4 14 6 z"/><circle cx="159" cy="216" r="4.5"/><circle cx="241" cy="216" r="4.5"/></g>
    <g fill="#1a0c14"><path d="M44 176 q8 -12 20 -9 q10 3 12 9 z"/><path d="M360 168 q8 -10 18 -8 q8 2 10 8 z"/></g>
  </g>

  <g id="bg-alley" visibility="hidden">
    <rect width="400" height="240" fill="#1a0f1a"/>
    <rect x="120" y="0" width="160" height="62" fill="url(#sky)"/>
    <rect x="120" y="62" width="160" height="90" fill="#3a1f2a"/>
    <rect x="185" y="92" width="30" height="60" fill="#120a10"/>
    <rect x="138" y="82" width="26" height="24" fill="#ffd27a" opacity="0.9"/><rect x="236" y="82" width="26" height="24" fill="#ffd27a" opacity="0.7"/>
    <polygon points="0,0 120,32 120,152 0,240" fill="#24131c" stroke="#ff9a5a" stroke-opacity="0.2"/>
    <polygon points="400,0 280,32 280,152 400,240" fill="#24131c" stroke="#ff9a5a" stroke-opacity="0.2"/>
    <polygon points="16,66 46,74 46,108 16,118" fill="#ffd27a" opacity="0.75"/><polygon points="384,66 354,74 354,108 384,118" fill="#ffd27a" opacity="0.55"/>
    <polygon points="0,240 120,152 280,152 400,240" fill="url(#ground)"/>
    <polygon points="186,152 214,152 300,240 100,240" fill="url(#road)" opacity="0.7"/>
    <circle cx="200" cy="44" r="40" fill="url(#lamp)" opacity="0.7"/><rect x="199" y="0" width="2" height="38" fill="#0b0608"/><circle cx="200" cy="40" r="4" fill="#ffd27a"/>
    <g fill="#0b0608"><rect x="306" y="196" width="40" height="34"/><rect x="326" y="170" width="30" height="26"/><ellipse cx="364" cy="214" rx="14" ry="18"/><ellipse cx="262" cy="166" rx="9" ry="12"/></g>
  </g>

  <g id="bg-saloon" visibility="hidden">
    <rect width="400" height="240" fill="#5a3820"/>
    <path d="M0 0 V150 M22 0 V150 M44 0 V150 M66 0 V150 M88 0 V150 M110 0 V150 M132 0 V150 M154 0 V150 M176 0 V150 M198 0 V150 M220 0 V150 M242 0 V150 M264 0 V150 M286 0 V150 M308 0 V150 M330 0 V150 M352 0 V150 M374 0 V150 M396 0 V150 " stroke="#46290f" stroke-width="1" fill="none"/>
    <rect x="30" y="70" width="340" height="5" fill="#2a170d"/>
    <rect x="50" y="50" width="7" height="20" rx="2" fill="#3a7a4a"/><rect x="67" y="54" width="7" height="16" rx="2" fill="#a8482f"/><rect x="84" y="50" width="7" height="20" rx="2" fill="#e0b84a"/><rect x="101" y="54" width="7" height="16" rx="2" fill="#3a5a8a"/><rect x="118" y="50" width="7" height="20" rx="2" fill="#3a7a4a"/><rect x="135" y="54" width="7" height="16" rx="2" fill="#a8482f"/><rect x="152" y="50" width="7" height="20" rx="2" fill="#e0b84a"/><rect x="169" y="54" width="7" height="16" rx="2" fill="#3a5a8a"/><rect x="186" y="50" width="7" height="20" rx="2" fill="#3a7a4a"/><rect x="203" y="54" width="7" height="16" rx="2" fill="#a8482f"/><rect x="220" y="50" width="7" height="20" rx="2" fill="#e0b84a"/><rect x="237" y="54" width="7" height="16" rx="2" fill="#3a5a8a"/><rect x="254" y="50" width="7" height="20" rx="2" fill="#3a7a4a"/><rect x="271" y="54" width="7" height="16" rx="2" fill="#a8482f"/><rect x="288" y="50" width="7" height="20" rx="2" fill="#e0b84a"/><rect x="305" y="54" width="7" height="16" rx="2" fill="#3a5a8a"/>
    <rect x="168" y="30" width="64" height="30" fill="#8a6a5a" stroke="#e0b84a" stroke-width="2"/>
    <circle cx="90" cy="14" r="46" fill="url(#lamp)"/><circle cx="310" cy="14" r="46" fill="url(#lamp)"/>
    <rect x="0" y="116" width="400" height="38" fill="#7a4a2a"/><rect x="0" y="112" width="400" height="7" fill="#9a6a3a"/>
    <rect y="154" width="400" height="86" fill="url(#floor)"/>
    <path d="M-160 240 L74.0 152 M-100 240 L95.0 152 M-40 240 L116.0 152 M20 240 L137.0 152 M80 240 L158.0 152 M140 240 L179.0 152 M200 240 L200.0 152 M260 240 L221.0 152 M320 240 L242.0 152 M380 240 L263.0 152 M440 240 L284.0 152 M500 240 L305.0 152 M560 240 L326.0 152 " stroke="#2a150c" stroke-width="1.2" fill="none"/>
    <g fill="#1a0c14"><rect x="306" y="186" width="44" height="6"/><rect x="326" y="192" width="4" height="30"/><rect x="298" y="204" width="14" height="14" rx="2"/><rect x="346" y="204" width="14" height="14" rx="2"/></g>
  </g>
  <!-- противник вдали, лицом к игроку -->
  <g transform="translate(200,172) scale(0.9)">
    <g id="e-body" class="s">
      <rect x="-10" y="-34" width="8" height="34"/>
      <rect x="2" y="-34" width="8" height="34"/>
      <path d="M-11,-74 L11,-74 L26,-30 L-26,-30 Z"/>
      <g id="e-arm" transform="rotate(0 12 -66)">
        <rect x="9" y="-68" width="6" height="28" rx="3"/>
        <rect x="10.5" y="-42" width="3" height="14"/>
        <rect x="8" y="-44" width="8" height="6"/>
        <rect x="6" y="-42" width="3" height="8"/>
        <polygon id="e-flash" points="12,-26 18,-14 32,-10 18,-6 12,8 6,-6 -8,-10 6,-14" fill="#ffe28a" stroke="none" visibility="hidden"/>
      </g>
      <circle cx="0" cy="-81" r="8"/>
      <ellipse cx="0" cy="-87" rx="19" ry="3.5"/>
      <path d="M-9,-87 L-8,-99 Q0,-103 8,-99 L9,-87 Z"/>
    </g>
  </g>

  <!-- игрок слева, вид со спины: смотрит на противника, правая рука на кобуре -->
  <g transform="translate(58,252) scale(1.5)">
    <g id="p-body" class="s">
      <rect x="-10" y="-30" width="8" height="30"/>
      <rect x="2" y="-30" width="8" height="30"/>
      <rect x="-11" y="-5" width="10" height="6" rx="2"/>
      <rect x="1" y="-5" width="10" height="6" rx="2"/>
      <path d="M-13,-74 L13,-74 L18,-22 L2,-27 L-2,-27 L-18,-22 Z"/>
      <rect x="-17" y="-70" width="6" height="28" rx="3"/>
      <!-- кобура на правом бедре -->
      <rect x="14" y="-46" width="10" height="20" rx="3"/>
      <rect id="p-grip" x="16" y="-53" width="6" height="8" rx="1"/>
      <!-- правая рука на кобуре; при выстреле вскидывается с пистолетом -->
      <g id="p-arm" transform="rotate(0 15 -68)">
        <rect x="12" y="-70" width="6" height="24" rx="3"/>
        <rect x="11" y="-50" width="9" height="9" rx="3"/>
        <g id="p-gun" visibility="hidden">
          <rect x="13.5" y="-42" width="3" height="14"/>
          <rect x="11" y="-44" width="8" height="6"/>
          <rect x="9" y="-42" width="3" height="8"/>
        </g>
        <polygon id="p-flash" points="15,-30 21,-18 35,-14 21,-10 15,2 9,-10 -5,-14 9,-18" fill="#ffe28a" stroke="none" visibility="hidden"/>
      </g>
      <circle cx="0" cy="-81" r="8"/>
      <ellipse cx="0" cy="-87" rx="19" ry="3.5"/>
      <path d="M-9,-87 L-8,-99 Q0,-103 8,-99 L9,-87 Z"/>
    </g>
  </g>

  <!-- красная вспышка, если подстрелили игрока -->
  <rect id="p-hit" width="400" height="240" fill="#a01919" opacity="0.4" visibility="hidden"/>
</svg>
`,U=document.getElementById("scene");U.innerHTML=zt;const T=document.getElementById("status"),st=document.getElementById("foe"),j=document.getElementById("fire"),ct=document.getElementById("town"),dt=document.getElementById("duel"),A=t=>U.querySelector("#"+t),E=(t,e)=>A(t).setAttribute("visibility",e?"visible":"hidden"),R={road:{label:"Дорога",outdoor:!0},waterhole:{label:"Водопой",outdoor:!0},train:{label:"Поезд",outdoor:!0},mine:{label:"Рудник",outdoor:!0},alley:{label:"Переулок",outdoor:!1},saloon:{label:"Салун",outdoor:!1}};function jt(t){for(const e of Object.keys(R))E(`bg-${e}`,e===t);E("bg-sky",R[t].outdoor)}const Rt={foul:"Слишком рано! Фол",perfect:"Идеальный выстрел!",good:"Попал",miss:"Промах"},Ht={e:"12 -66",p:"15 -68"},d={p:{arm:0,fall:0,flash:0},e:{arm:0,fall:0,flash:0},hit:0};let C=0;const Yt=t=>1-(1-t)**3,Zt=t=>t*t,B=t=>new Promise(e=>setTimeout(e,t)),H=t=>t==="perfect"||t==="good";function b(t,e,i=Yt){const n=C,o=performance.now();return new Promise(l=>{const a=c=>{if(n!==C)return l();const s=Math.min(1,(c-o)/t);e(i(s)),s<1?requestAnimationFrame(a):l()};requestAnimationFrame(a)})}function bt(t){for(const e of["p","e"]){const i=d[e],n=i.fall===0?Math.sin(t/450+(e==="p"?0:2))*.6:0;A(e+"-arm").setAttribute("transform",`rotate(${i.arm} ${Ht[e]})`),A(e+"-body").setAttribute("transform",`translate(0 ${n}) rotate(${i.fall})`),A(e+"-flash").setAttribute("opacity",String(i.flash))}A("p-hit").setAttribute("opacity",String(d.hit*.4)),requestAnimationFrame(bt)}function Y(){C++,d.p={arm:0,fall:0,flash:0},d.e={arm:0,fall:0,flash:0},d.hit=0,E("p-gun",!1),E("p-grip",!0)}const Qt=(t,e)=>U.animate([{transform:"translate(0,0)"},{transform:`translate(${-t}px,${t/2}px)`},{transform:`translate(${t}px,${-t/2}px)`},{transform:"translate(0,0)"}],{duration:e}),ft=t=>(d[t].flash=1,b(220,e=>d[t].flash=1-e)),ht=(t,e)=>b(380,i=>d[t].fall=e*i,Zt),Xt=()=>b(110,t=>d.e.arm=-35*t).then(()=>b(160,t=>d.e.arm=-35*(1-t)));async function Kt(t){const e=H(t),i=C;if(E("p-gun",!0),E("p-grip",!1),b(90,n=>d.p.arm=-80*n).then(()=>b(160,n=>d.p.arm=-80+12*Math.sin(n*Math.PI))),t!=="foul"&&ft("p"),Qt(e?3:6,e?150:280),await B(e?110:140),i===C){if(e)return void ht("e",80);t==="miss"&&(b(100,n=>d.e.arm=-80*n),ft("e")),b(200,n=>d.hit=n),ht("p",-70)}}let x=null;j.addEventListener("pointerdown",()=>x==null?void 0:x());addEventListener("keydown",t=>{t.code==="Space"&&!t.repeat&&x&&(t.preventDefault(),x())});const Ut=()=>new Promise(t=>{x=()=>{x=null,t()}});function Wt(t,e){return new Promise(i=>{let n=0;const o=1e3+Math.random()*2500,l=[setTimeout(()=>{n=performance.now(),b(140,a=>d.e.arm=-80*a),T.textContent="ДОСТАВАЙ!"},o)];if(t.kind==="feint")for(const a of[.35,.65])l.push(setTimeout(Xt,o*a));x=()=>{x=null,l.forEach(clearTimeout),i(Vt(n?performance.now()-n:null,t.perfectMs*e,t.goodMs*e))}})}async function Jt(t){ct.hidden=!0,dt.hidden=!1;const e=t.kind==="gang"?t.rounds??3:1,i=t.place??"road",n=l=>[R[i].label,t.foe&&`Против: ${t.foe}`,e>1&&`раунд ${l+1} из ${e}`].filter(Boolean).join(" · ");jt(i),st.textContent=n(0),Y(),T.textContent=t.reason,j.textContent="Начать дуэль",await Ut(),j.textContent="Огонь";let o="perfect";for(let l=0;l<e&&(l>0&&(Y(),st.textContent=n(l),await B(500)),T.textContent="Ждёшь...",await B(300),o=await Wt(t,.9**l),T.textContent=Rt[o],Kt(o),!!H(o));l++)l<e-1&&await B(1100);return await B(1500),dt.hidden=!0,ct.hidden=!1,{shot:o,win:H(o)}}for(const t of["p-flash","e-flash","p-hit"])E(t,!0);Y();requestAnimationFrame(bt);const xt="tlc-save",te=7200,gt=[600,1200,2400],ee=.35,wt=()=>({v:1,chapter:1,gold:0,rep:0,combo:0,legend:0,prestiges:0,fameBought:0,buildings:{},till:{},managers:{},missionsDone:[],eventsSeen:[],flags:{},tutorialDone:!1,lastSeen:Date.now()}),ie=1e3,Z=(t,e)=>typeof t=="number"&&Number.isFinite(t)?Math.min(Math.max(t,0),e):0,_=(t,e)=>Math.floor(Z(t,e)),D=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)?t:{},ne=/^[A-Za-z0-9_]{1,40}$/,oe=new Set(["__proto__","constructor","prototype"]);function le(t,e=Date.now()){const i=wt();if(typeof t!="object"||t===null)return i;const n=t;i.chapter=Math.max(1,_(n.chapter,20)),i.gold=Z(n.gold,1e18),i.rep=_(n.rep,1e9),i.combo=_(n.combo,1e6),i.legend=_(n.legend,1e6),i.prestiges=_(n.prestiges,1e6),i.fameBought=_(n.fameBought,1e3),i.tutorialDone=n.tutorialDone===!0,i.lastSeen=typeof n.lastSeen=="number"&&Number.isFinite(n.lastSeen)?Math.min(Math.max(n.lastSeen,0),e):e;const[o,l,a]=[D(n.buildings),D(n.till),D(n.managers)];for(const s of Object.keys(f)){const h=_(Object.hasOwn(o,s)?o[s]:0,ie);h>0&&(i.buildings[s]=h);const p=Z(Object.hasOwn(l,s)?l[s]:0,1e18);p>0&&(i.till[s]=p),Object.hasOwn(a,s)&&a[s]===!0&&(i.managers[s]=!0)}const c=s=>h=>typeof h=="string"&&s.includes(h);i.missionsDone=Array.isArray(n.missionsDone)?n.missionsDone.filter(c([yt.id,...k.map(s=>s.id)])):[],i.eventsSeen=Array.isArray(n.eventsSeen)?n.eventsSeen.filter(c(mt.map(s=>s.id))):[];for(const[s,h]of Object.entries(D(n.flags)))ne.test(s)&&!oe.has(s)&&typeof h=="string"&&h.length<=40&&(i.flags[s]=h);return i}function re(){try{return le(JSON.parse(localStorage.getItem(xt)??"null"))}catch{}return wt()}function y(t){try{localStorage.setItem(xt,JSON.stringify(t))}catch{}}const W=(t,e)=>Math.ceil(f[t].cost*It**e),ae=(t,e)=>k.filter(i=>i.building===e&&t.missionsDone.includes(i.id)).reduce((i,n)=>i+(n.incomeBonus??0),0);function P(t,e){return f[e].income*(t.buildings[e]??0)*(1+ae(t,e))*(1+z*t.legend)}const se=t=>Ot*t.chapter;function vt(t){const e=Object.keys(f),i=se(t);return e.reduce((n,o)=>n+Math.min(t.buildings[o]??0,i),0)/(i*e.length)}const ce=t=>vt(t)>=1;function de(t){return t.tutorialDone?Object.keys(f).reduce((e,i)=>e+P(t,i),0):0}function J(t,e){const i=f[e].unlockAfter;return!i||t.missionsDone.includes(i)}const q=(t,e)=>k.filter(i=>i.building===e&&i.gate!==void 0&&t.missionsDone.includes(i.id)).length,Mt=(t,e)=>ot[Math.min(q(t,e),ot.length-1)],tt=(t,e)=>(t.buildings[e]??0)>=Mt(t,e),fe=(t,e)=>q(t,e)>=k.filter(i=>i.building===e&&i.gate!==void 0).length,kt=(t,e)=>P(t,e)*gt[Math.min(q(t,e),gt.length-1)];function $t(t,e){const i=Math.min(te,Math.max(0,(e-t.lastSeen)/1e3));let n=0,o=0;if(t.tutorialDone)for(const l of Object.keys(f)){const a=P(t,l)*i;if(!a)continue;if(t.managers[l]){t.gold+=a,n+=a;continue}const c=Math.min(a,Math.max(0,kt(t,l)-(t.till[l]??0)));t.till[l]=(t.till[l]??0)+c,o+=c}return t.lastSeen=e,{auto:n,stored:o}}function pt(t,e){const i=t.till[e]??0;return i<1?0:(t.gold+=i,t.till[e]=0,i)}function et(t,e){const i=f[e].manager,n=t.buildings[e]??0;return!i||t.managers[e]||n<1?!1:n>=(i.level??1)&&(!i.mission||t.missionsDone.includes(i.mission))}function F(t,e){if((t.buildings[e]??0)<1)return[];const i=k.filter(o=>o.building===e&&o.gate===void 0&&(o.repeatable||!t.missionsDone.includes(o.id))),n=k.find(o=>o.building===e&&o.gate===q(t,e));return n&&!t.missionsDone.includes(n.id)&&tt(t,e)&&i.push(n),i}function he(t,e,i=Math.random){const n=t.buildings[e]??0,o=mt.filter(a=>a.building===e&&(a.minLevel??0)<=n&&!t.eventsSeen.includes(a.id)),l=o.find(a=>a.guaranteed);return l||(o.length&&i()<ee?o[Math.floor(i()*o.length)]:void 0)}function ge(t){if(!t.tutorialDone)return null;const e=Object.keys(f),i=e.find(n=>(t.till[n]??0)>=10);if(i&&!t.flags.firstCollect)return{id:i,kind:"collect",text:`Забери выручку: нажми на монеты над зданием — ${f[i].name}`};for(const n of e){const o=f[n];if((t.buildings[n]??0)>0){const l=F(t,n).find(a=>!a.repeatable);if(l){const a=l.gate!==void 0?`${o.name}: достигнут предел уровня, возьми задание на расширение`:`Загляни: ${o.name} — там есть задание`;return{id:n,kind:"mission",text:a}}if(et(t,n))return{id:n,kind:"hire",text:`Найми менеджера: ${o.manager.name} — ${o.manager.cost} золота (${o.name})`}}else if(J(t,n)){const l=W(n,0);return{id:n,kind:"build",text:t.gold>=l?`Построй: ${o.name} — ${l} золота`:`Копи золото: ${o.name} — ${l}`}}}return null}const _t=()=>Math.floor(O*Ct),it=t=>Math.ceil(qt*Dt**t.fameBought),pe=t=>t.fameBought<_t()&&t.gold>=it(t);function ue(t){return pe(t)?(t.gold-=it(t),t.fameBought++,t.rep++,!0):!1}const Q=t=>t.rep>=O,nt=t=>Math.floor(Math.sqrt(t.rep/10));function ye(t,e){t.legend+=nt(t),t.prestiges++,t.gold=Tt,t.rep=0,t.combo=0,t.fameBought=0,t.buildings={saloon:1},t.till={},t.missionsDone=[],t.eventsSeen=[],delete t.flags[`ch${t.chapter}`],t.lastSeen=e}const me=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="t-sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#24153a"/>
      <stop offset="0.4" stop-color="#7a2a52"/>
      <stop offset="0.75" stop-color="#e8603a"/>
      <stop offset="1" stop-color="#ffb347"/>
    </linearGradient>
    <radialGradient id="t-glow">
      <stop offset="0" stop-color="#ffd27a" stop-opacity="0.8"/>
      <stop offset="1" stop-color="#ffd27a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="t-ground" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#7a3b2a"/>
      <stop offset="1" stop-color="#22101a"/>
    </linearGradient>
    <style>
      .s { fill: #0b0608; stroke: #ff9a5a; stroke-opacity: .35; stroke-width: .8; }
      .r { fill: #1d0f14; stroke: #ff9a5a; stroke-opacity: .2; stroke-width: .8; }
      .lit { fill: #ffd27a; }
      .mk { animation: p 0.9s infinite alternate; }
      .smoke { animation: rise 3s ease-out infinite; transform-box: fill-box; }
      .smoke:nth-child(2) { animation-delay: 1s; } .smoke:nth-child(3) { animation-delay: 2s; }
      .flag { transform-box: fill-box; transform-origin: left center; animation: wave 1.3s ease-in-out infinite alternate; }
      .flick { animation: flick 2.7s steps(1) infinite; }
      .cloud { animation: drift 45s ease-in-out infinite alternate; }
      @keyframes rise { from { transform: translateY(8px); opacity: .8 } to { transform: translateY(-16px); opacity: 0 } }
      @keyframes wave { from { transform: scaleX(1) skewY(0deg) } to { transform: scaleX(.8) skewY(8deg) } }
      @keyframes flick { 0%, 90% { opacity: 1 } 93% { opacity: .6 } 96% { opacity: 1 } 98% { opacity: .7 } }
      @keyframes drift { from { transform: translateX(-18px) } to { transform: translateX(24px) } }
      @media (prefers-reduced-motion: reduce) { .smoke, .flag, .flick, .cloud, .mk { animation: none; } }
      @keyframes p { from { opacity: .55 } to { opacity: 1 } }
    </style>
  </defs>

  <rect width="400" height="150" fill="url(#t-sky)"/>
  <circle cx="300" cy="150" r="80" fill="url(#t-glow)"/>
  <circle cx="300" cy="150" r="26" fill="#ffe3a0"/>
  <g class="cloud" fill="#ff9a5a" opacity="0.4"><rect x="20" y="50" width="110" height="5" rx="2.5"/><rect x="250" y="40" width="120" height="5" rx="2.5"/></g>
  <polygon points="0,150 0,122 30,110 60,120 100,100 140,124 170,150" fill="#5a2347"/>
  <polygon points="230,150 260,126 290,132 330,104 370,120 400,110 400,150" fill="#5a2347"/>
  <rect y="148" width="400" height="92" fill="url(#t-ground)"/>
  <rect y="190" width="400" height="50" fill="#2a1316" opacity="0.55"/>

  <!-- салун -->
  <g data-b="saloon">
    <rect x="22" y="104" width="100" height="92" fill="transparent"/>
    <g id="b-saloon-ruin" class="r">
      <polygon points="34,190 34,162 46,152 56,164 70,174 82,160 96,178 110,170 110,190"/>
      <rect x="60" y="150" width="3" height="26"/><rect x="94" y="162" width="3" height="20"/>
    </g>
    <g id="b-saloon-built" class="s" visibility="hidden">
      <rect x="34" y="132" width="76" height="58"/>
      <rect x="28" y="112" width="88" height="24"/>
      <polygon points="28,112 72,100 116,112"/>
      <rect x="28" y="150" width="88" height="4"/>
      <rect x="44" y="160" width="12" height="14" class="lit flick" stroke="none"/>
      <rect x="88" y="160" width="12" height="14" class="lit flick" stroke="none"/>
      <rect x="66" y="166" width="12" height="24" fill="#3b2415" stroke="none"/>
    </g>
    <g id="b-saloon-s1" class="s" visibility="hidden">
      <rect x="23" y="140" width="3" height="26"/><rect x="118" y="140" width="3" height="26"/>
      <circle cx="24.5" cy="168" r="3.5" class="lit flick" stroke="none"/><circle cx="119.5" cy="168" r="3.5" class="lit flick" stroke="none"/>
      <rect x="52" y="118" width="40" height="10" class="lit flick" stroke="none"/>
    </g>
    <g id="b-saloon-s2" class="s" visibility="hidden">
      <rect x="60" y="84" width="24" height="18"/><polygon points="56,84 72,70 88,84"/>
      <rect x="71" y="56" width="2" height="16"/><polygon class="flag" points="73,56 88,61 73,66" fill="#a8482f" stroke="none"/>
      <rect x="66" y="90" width="12" height="8" class="lit flick" stroke="none"/>
    </g>
    <g id="c-saloon" data-c="saloon" visibility="hidden">
      <circle cx="104" cy="100" r="15" fill="transparent"/>
      <circle cx="104" cy="100" r="9" fill="#ffd27a" stroke="#8a5a1a" stroke-width="1.5"/>
      <text x="104" y="103" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b2415">0</text>
    </g>
    <g id="m-saloon" class="mk" visibility="hidden"><circle cx="72" cy="86" r="8" fill="#ffd27a"/><text x="72" y="90.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#3b2415">!</text></g>
  </g>

  <!-- кузница -->
  <g data-b="smithy">
    <rect x="128" y="112" width="78" height="84" fill="transparent"/>
    <g id="b-smithy-ruin" class="r">
      <polygon points="136,190 136,174 150,168 162,180 180,170 196,190"/>
      <rect x="182" y="150" width="6" height="24"/>
    </g>
    <g id="b-smithy-built" class="s" visibility="hidden">
      <rect x="136" y="150" width="60" height="40"/>
      <polygon points="130,150 166,128 202,150"/>
      <rect x="180" y="116" width="9" height="30"/>
      <rect x="148" y="160" width="16" height="16" fill="#ff8a3a" stroke="none"/>
      <rect x="172" y="164" width="14" height="26" fill="#3b2415" stroke="none"/>
    </g>
    <g id="b-smithy-s1" visibility="hidden">
      <circle class="smoke" cx="187" cy="108" r="6" fill="#2a1a22" opacity="0.75"/><circle class="smoke" cx="192" cy="97" r="7" fill="#2a1a22" opacity="0.6"/><circle class="smoke" cx="189" cy="85" r="6" fill="#2a1a22" opacity="0.45"/>
    </g>
    <g id="b-smithy-s2" class="s" visibility="hidden">
      <rect x="198" y="168" width="14" height="22"/><polygon points="195,168 205,158 215,168"/>
      <rect x="201" y="174" width="8" height="8" fill="#ff8a3a" stroke="none"/>
    </g>
    <g id="c-smithy" data-c="smithy" visibility="hidden">
      <circle cx="148" cy="122" r="15" fill="transparent"/>
      <circle cx="148" cy="122" r="9" fill="#ffd27a" stroke="#8a5a1a" stroke-width="1.5"/>
      <text x="148" y="125" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b2415">0</text>
    </g>
    <g id="m-smithy" class="mk" visibility="hidden"><circle cx="166" cy="102" r="8" fill="#ffd27a"/><text x="166" y="106.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#3b2415">!</text></g>
  </g>

  <!-- офис шерифа -->
  <g data-b="sheriff">
    <rect x="210" y="112" width="76" height="84" fill="transparent"/>
    <g id="b-sheriff-ruin" class="r">
      <polygon points="218,190 218,172 232,164 246,178 262,168 276,190"/>
    </g>
    <g id="b-sheriff-built" class="s" visibility="hidden">
      <rect x="216" y="146" width="62" height="44"/>
      <rect x="212" y="136" width="70" height="14"/>
      <polygon points="247,118 250,127 259,127 252,132 255,141 247,136 239,141 242,132 235,127 244,127" fill="#ffd27a" stroke="none"/>
      <rect x="226" y="158" width="12" height="14" class="lit flick" stroke="none"/>
      <rect x="252" y="158" width="12" height="32" fill="#3b2415" stroke="none"/>
    </g>
    <g id="b-sheriff-s1" class="s" visibility="hidden">
      <rect x="274" y="100" width="2" height="38"/><polygon class="flag" points="276,100 294,107 276,114" fill="#a8482f" stroke="none"/>
    </g>
    <g id="b-sheriff-s2" class="s" visibility="hidden">
      <rect x="278" y="156" width="26" height="34"/>
      <rect x="284" y="164" width="2" height="14" fill="#ffd27a" stroke="none"/><rect x="291" y="164" width="2" height="14" fill="#ffd27a" stroke="none"/><rect x="298" y="164" width="2" height="14" fill="#ffd27a" stroke="none"/>
    </g>
    <g id="c-sheriff" data-c="sheriff" visibility="hidden">
      <circle cx="226" cy="126" r="15" fill="transparent"/>
      <circle cx="226" cy="126" r="9" fill="#ffd27a" stroke="#8a5a1a" stroke-width="1.5"/>
      <text x="226" y="129" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b2415">0</text>
    </g>
    <g id="m-sheriff" class="mk" visibility="hidden"><circle cx="247" cy="104" r="8" fill="#ffd27a"/><text x="247" y="108.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#3b2415">!</text></g>
  </g>

  <!-- телеграф -->
  <g data-b="telegraph">
    <rect x="292" y="100" width="82" height="96" fill="transparent"/>
    <g id="b-telegraph-ruin" class="r">
      <polygon points="300,190 300,176 314,170 326,182 340,174 346,190"/>
      <polygon points="352,190 356,150 361,148 358,190"/>
    </g>
    <g id="b-telegraph-built" class="s" visibility="hidden">
      <rect x="300" y="160" width="42" height="30"/>
      <polygon points="296,160 321,146 346,160"/>
      <rect x="352" y="108" width="5" height="82"/>
      <rect x="344" y="116" width="21" height="3"/>
      <rect x="344" y="126" width="21" height="3"/>
      <rect x="312" y="168" width="12" height="12" class="lit flick" stroke="none"/>
      <path d="M344 117 Q320 128 300 122 M365 117 L400 124" fill="none" stroke="#0b0608" stroke-width="1"/>
    </g>
    <g id="b-telegraph-s1" class="s" visibility="hidden">
      <rect x="374" y="122" width="4" height="68"/><rect x="368" y="128" width="16" height="3"/>
      <path d="M357 118 Q368 126 374 129" fill="none" stroke="#0b0608" stroke-width="1"/>
    </g>
    <g id="b-telegraph-s2" class="s" visibility="hidden">
      <rect x="353" y="82" width="3" height="28"/><circle cx="354.5" cy="80" r="3" fill="#ff4a3a" stroke="none" class="mk"/>
    </g>
    <g id="c-telegraph" data-c="telegraph" visibility="hidden">
      <circle cx="318" cy="140" r="15" fill="transparent"/>
      <circle cx="318" cy="140" r="9" fill="#ffd27a" stroke="#8a5a1a" stroke-width="1.5"/>
      <text x="318" y="143" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b2415">0</text>
    </g>
    <g id="m-telegraph" class="mk" visibility="hidden"><circle cx="335" cy="92" r="8" fill="#ffd27a"/><text x="335" y="96.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#3b2415">!</text></g>
  </g>
</svg>
`,V=document.getElementById("townScene");V.innerHTML=me;const Lt=document.getElementById("hud"),be=document.getElementById("goal"),xe=document.getElementById("chapterTxt"),we=document.getElementById("chapterFill"),$=document.getElementById("panel"),Et=document.getElementById("fameBtn"),v=t=>V.querySelector("#"+t);let w,m=null,N;function ve(t){w=t,Et.addEventListener("click",()=>{m="fame",K()}),V.addEventListener("click",e=>{var l,a;const i=e.target,n=(l=i.closest("[data-c]"))==null?void 0:l.getAttribute("data-c");if(n)return w.collect(n);const o=(a=i.closest("[data-b]"))==null?void 0:a.getAttribute("data-b");o&&(m=o,K())}),$.addEventListener("click",e=>{const i=e.target.closest("button"),n=i==null?void 0:i.dataset.act;n==="close"?(m=null,$.hidden=!0):n==="build"?w.build(m):n==="collect"?w.collect(m):n==="hire"?w.hire(m):n==="fame"?w.fame():n==="heist"?w.heist():n==="mission"&&w.mission(i.dataset.id)})}const St=t=>t%1===0?String(t):t.toFixed(1),X=t=>t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"k":String(Math.floor(t));function Me(){m=null,$.hidden=!0}function ke(){const t=N,e=_t()-t.fameBought,i=it(t),n=nt(t);$.innerHTML=`<h3>Слава</h3><p>Репутация: ${t.rep} · Легенда: ${t.legend} (+${Math.round(z*t.legend*100)}% к доходу)</p>`+(e>0?`<p>Купить известность: ${lt[t.fameBought%lt.length]} (+1 репутации). Осталось покупок: ${e}.</p><button data-act="fame" data-cost="${i}">Купить — ${i}</button>`:"<p>Известность за золото больше не купить: остальное добывается в дуэлях и заданиях.</p>")+(t.rep>=O/2?`<p><b>Ограбление поезда</b><br>Откроется при репутации ${O}. Даст Легенду: +${n} (+${Math.round(n*z*100)}% к доходу навсегда). Город, золото и репутация обнулятся, менеджеры и улики останутся.</p><button data-act="heist" ${Q(t)?"":"disabled"}>Начать ограбление</button>`:"")+'<button data-act="close">Закрыть</button>',$.hidden=!1,S(t)}function K(){var h;if(!m)return;if(m==="fame")return ke();const t=m,e=N,i=f[t],n=e.buildings[t]??0,o=(h=k.find(p=>p.id===i.unlockAfter))==null?void 0:h.title,l=W(t,n),a=F(e,t);let c;J(e,t)?n>0&&tt(e,t)?c=`<p>Предел уровня. ${fe(e,t)?"Выше — только в следующей главе.":"Выше — только после задания на расширение."}</p>`:c=`<button data-act="build" data-cost="${l}">${n?"Улучшить":"Построить"} — ${l}</button>`:c=`<p>Пока недоступно. Сначала выполни задание «${o}».</p>`;let s="";if(n>0){const p=i.manager;s=e.managers[t]?`<p>Менеджер: ${p.name} — забирает кассу сам.</p>`:`<p>Касса: ${Math.floor(e.till[t]??0)} / ${Math.floor(kt(e,t))} <button data-act="collect">Забрать</button></p>`+(et(e,t)?`<button data-act="hire" data-cost="${p.cost}">Нанять: ${p.name} — ${p.cost}</button>`:"")}$.innerHTML=`<h3>${i.name}${n?` · ур. ${n}/${Mt(e,t)}`:" (руины)"}</h3><p>${i.desc}</p>`+(n?`<p>Доход: +${St(P(e,t))}/с</p>`:"")+s+c+a.map(p=>`<p><b>${p.title}</b><br>${p.blurb}</p><button data-act="mission" data-id="${p.id}">Взять задание</button>`).join("")+(!a.length&&n?"<p>Заданий пока нет.</p>":"")+'<button data-act="close">Закрыть</button>',$.hidden=!1,S(e)}function S(t){N=t;const e=Object.values(t.till).reduce((o,l)=>o+l,0);Lt.textContent=`Золото: ${Math.floor(t.gold)} · +${St(de(t))}/с · Репутация: ${t.rep}`+(e>=1?` · в кассах: ${X(e)}`:""),Et.hidden=!t.tutorialDone;const i=vt(t);xe.textContent=`Глава ${t.chapter}: ${Math.floor(i*100)}%`,we.style.width=`${i*100}%`;const n=ge(t);be.textContent=(n==null?void 0:n.text)??"";for(const o of Object.keys(f)){const l=F(t,o).some(h=>!h.repeatable),a=(n==null?void 0:n.id)===o?{build:"+",hire:"+",mission:"!",collect:"$"}[n.kind]:l?"!":"";v(`m-${o}`).setAttribute("visibility",a?"visible":"hidden"),a&&(v(`m-${o}`).querySelector("text").textContent=a);const c=t.till[o]??0,s=c>=1&&!t.managers[o];v(`c-${o}`).setAttribute("visibility",s?"visible":"hidden"),s&&(v(`c-${o}`).querySelector("text").textContent=X(c))}$.querySelectorAll("button[data-cost]").forEach(o=>{o.disabled=t.gold<Number(o.dataset.cost)})}function M(t){N=t;for(const e of Object.keys(f)){const i=(t.buildings[e]??0)>0,n=q(t,e);v(`b-${e}-ruin`).setAttribute("visibility",i?"hidden":"visible"),v(`b-${e}-built`).setAttribute("visibility",i?"visible":"hidden");for(const o of[1,2])v(`b-${e}-s${o}`).setAttribute("visibility",i&&n>=o?"visible":"hidden")}S(t),K()}const $e={saloon:[72,96],smithy:[166,118],sheriff:[247,120],telegraph:[335,128]};function At(t,e,i="#ffd27a"){const[n,o]=$e[t],l=document.createElementNS("http://www.w3.org/2000/svg","text");l.textContent=e;for(const[a,c]of Object.entries({x:n,y:o,"text-anchor":"middle","font-size":11,"font-weight":"bold",fill:i,stroke:"#2a1316","stroke-width":.6}))l.setAttribute(a,String(c));l.style.pointerEvents="none",V.querySelector("svg").appendChild(l),l.animate([{transform:"translateY(0)",opacity:1},{transform:"translateY(-26px)",opacity:0}],{duration:1100,easing:"ease-out"}).onfinish=()=>l.remove()}function _e(t,e){At(t,`+${X(e)}`),Lt.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:220})}function Bt(t,e){for(const i of["built","s1","s2"]){const n=v(`b-${t}-${i}`);n.getAttribute("visibility")==="visible"&&(n.style.transformBox="fill-box",n.style.transformOrigin="50% 100%",n.animate([{transform:"scale(0.88,0.72)"},{transform:"scale(1.06,1.1)"},{transform:"scale(1)"}],{duration:450,easing:"ease-out"}))}At(t,e,"#ffffff")}const r=re();let g=!1;async function G(t){var e;g=!0;for(const i of t.steps)if(!(i.when&&r.flags[i.when[0]]!==i.when[1]))if("say"in i)await L(i.say);else if("choice"in i){const n=i.choice;r.flags[n.id]=n.options[await I(n.q,n.options.map(o=>o.label))].value}else if("reward"in i)r.gold=Math.max(0,r.gold+(i.reward.gold??0)),r.rep=Math.max(0,r.rep+(i.reward.rep??0)),S(r);else for(;;){const n=await Jt(i.duel),o=Nt(n.shot,r.combo);if(r.gold+=o.gold,r.rep=Math.max(0,r.rep+o.rep),r.combo=o.combo,S(r),n.win)break;await I(n.shot==="foul"?"Слишком рано! Репутация падает. Соберись и попробуй ещё раз.":"Противник оказался быстрее. Ничего, ещё раз.",["Ещё раз"])}t.event?r.eventsSeen.push(t.id):t.repeatable||r.missionsDone.push(t.id),(e=t.onDone)==null||e.call(t,r),y(r),M(r),t.gate!==void 0&&Bt(t.building,"Расширено!"),t.after&&await L(t.after),g=!1}async function ut(){await G(Gt),g=!0;const t=nt(r);ye(r,Date.now()),y(r),M(r),await L([`Новая территория: ${rt[r.prestiges%rt.length]}. Легенда +${t}: доход растёт на ${t*10}% навсегда.`,"Менеджеры остались с вами и снова собирают выручку. Салун отстроен заново."]),g=!1}ve({async build(t){const e=r.buildings[t]??0,i=W(t,e);if(g||r.gold<i||!J(r,t)||e>0&&tt(r,t))return;r.gold-=i,r.buildings[t]=e+1,y(r),M(r),Bt(t,e?`Ур. ${e+1}`:"Построено!");const n=he(r,t);n&&await G(n);const o=`ch${r.chapter}`;if(ce(r)&&!r.flags[o]){if(r.flags[o]="done",y(r),g=!0,await L(["Все здания Дастфорда достигли предела. Город стоит крепко, как никогда.","С запада по рельсам тянется далёкий гудок. Ночной поезд Компании приближается."]),Q(r)){if(await I("Поезд пройдёт через Дастфорд. Что делаем?",["Ограбить поезд","Подготовить оборону"])===0)return void await ut();r.flags.path="defense",y(r),await L(["Дастфорд готов встретить гостей. Глава 2 пока в разработке. Продолжение следует."])}else await L([`Ограбить поезд пока нельзя: нужна репутация ${O}, у вас ${r.rep}. Набирайте её в дуэлях или покупайте известность в разделе «Слава».`,"Продолжение следует."]);g=!1}},mission(t){if(g)return;const e=k.find(i=>i.id===t);e&&F(r,e.building).includes(e)&&G(e)},collect(t){if(g)return;const e=pt(r,t);e&&(r.flags.firstCollect="1",y(r),M(r),_e(t,e))},fame(){g||!ue(r)||(y(r),M(r))},heist(){g||!Q(r)||(Me(),ut())},async hire(t){const e=f[t].manager;g||!e||!et(r,t)||r.gold<e.cost||(g=!0,pt(r,t),r.gold-=e.cost,r.managers[t]=!0,y(r),M(r),await L([e.line]),g=!1)}});setInterval(()=>{$t(r,Date.now()),S(r)},250);setInterval(()=>y(r),1e4);document.addEventListener("visibilitychange",()=>{document.hidden&&y(r)});M(r);(async()=>{if(!r.tutorialDone)return void await G(yt);const{auto:t,stored:e}=$t(r,Date.now()),i=[];t>=1&&i.push(`менеджеры собрали ${Math.floor(t)} золота`),e>=1&&i.push(`в кассах ждёт ${Math.floor(e)} золота`),M(r),i.length&&await I(`Пока тебя не было: ${i.join(", ")}.`,["Отлично"])})();
