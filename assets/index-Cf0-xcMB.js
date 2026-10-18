(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const et=[5,10,25],_t=25,Et=1.2,h=.5,B=50,St=.5,Bt=1e3,At=1.3,F=.1,Ot=100,it=["Заметка в газете","Праздник в городе","Портрет на доске объявлений","Табличка с вашим именем на салуне","Песня о вас в салуне","Памятник на площади"],nt=["Дастфорд","Пыльная Станция","Медная Балка","Каньон Гремучей Змеи"],f={saloon:{name:"Салун «Последний глоток»",cost:100,income:1,desc:"Здесь пьют, играют и сплетничают. Сплетни — тоже деньги.",manager:{name:"Мэй",cost:200,mission:"saloon_tribute",line:"Мэй: «Договорились. Выручку теперь забираю я, а ты занимайся делами»."}},smithy:{name:"Кузница Дерека",cost:240,income:2,desc:"Подковы, ножи и пули. Без кузнеца город — просто кучка домов.",unlockAfter:"saloon_tribute",manager:{name:"Дерек",cost:600,mission:"smithy_tools",line:"Дерек: «Касса — это тоже наковальня: я буду бить по ней сам. Иди, у тебя дела»."}},sheriff:{name:"Офис шерифа",cost:600,income:4,desc:"Доска розыска и закон. Пока что закон — это ты.",unlockAfter:"smithy_tools",manager:{name:"Помощник Томми",cost:1400,level:3,line:"Томми: «Выручку и награды за поимки беру на себя, шериф»."}},telegraph:{name:"Телеграф",cost:1200,income:8,desc:"Единственная ниточка к большому миру. И к Железной Компании.",unlockAfter:"smithy_tools",manager:{name:"Вилли",cost:3e3,mission:"telegraph_wire",line:"Вилли: «Я и так сижу у аппарата круглые сутки. Выручку заберу заодно»."}}},Ct={id:"prologue",building:null,title:"Пролог",blurb:"",steps:[{say:["Закат. Дорога привела тебя в Дастфорд — городок, который Железная Компания решила стереть с карты.","В кармане письмо от старого друга, шерифа Хэнка: «Приезжай. Последний контракт. Заплачу всем, что от города осталось».","Хэнка ты не нашёл. Нашёл пепелище, десяток упрямых людей и банду у руин салуна.","Громила Бык: «Эй, чужак! Это земля Железной Компании. Убирайся, пока цел».","ОБУЧЕНИЕ. Жди, пока противник вскинет руку. Как только это случится — жми «Огонь» (или пробел). Нажмёшь раньше — фол и минус репутация. Чем быстрее, тем лучше награда."]},{duel:{foe:"Громила Бык",reason:"Бык хватается за кобуру. Стреляй первым!",perfectMs:800,goodMs:1200}},{say:["Бык бежит прочь. Из укрытий выходят люди: «Если останешься — мы отстроим салун. Нам нужен тот, кто умеет стрелять»."]},{reward:{gold:50,rep:1}}],after:["Салун Дастфорда снова открыт. Выручка копится в кассе, а над зданием появляются монеты: нажми на них, чтобы забрать золото.","Нажми на само здание, чтобы улучшить его или взять задание. Когда найдёшь помощников, они начнут забирать выручку сами."],onDone:t=>{t.buildings.saloon=1,t.tutorialDone=!0,t.lastSeen=Date.now()}},$=[{id:"saloon_tribute",building:"saloon",title:"Сборщики дани",blurb:"Люди Компании пришли за «налогом». Защити салун.",incomeBonus:h,steps:[{say:["Хозяйка Мэй: «Вчера они забрали всю выручку. Сегодня придут снова. Без салуна городу конец»."]},{duel:{foe:"Сборщик дани",place:"saloon",reason:"Сборщик дани входит в салун и кладёт руку на кобуру. Ты стоишь у стойки.",perfectMs:650,goodMs:950}},{reward:{gold:120,rep:1}}],after:["Мэй: «Эти больше не придут. Теперь посетители не боятся заходить». Доход салуна вырос.","Мэй: «Хочешь, я буду заведовать кассой? Недорого. Сама буду забирать выручку, пока ты занят»."]},{id:"smithy_tools",building:"smithy",title:"Украденные инструменты",blurb:"У кузнеца украли инструменты. Вор прячется в заброшенной лавке.",incomeBonus:h,steps:[{say:["Кузнец Дерек: «Без молота я ничего не выкую. Вор засел в лавке „Ржавая подкова“ за городом. Он вооружён»."]},{duel:{foe:"Вор",kind:"feint",place:"alley",reason:"Ты входишь в лавку первым. Вор тянется к револьверу — не дай ему шанса.",perfectMs:600,goodMs:900}},{choice:{id:"thief",q:"Вор поднимает руки: «Меня заставили! Компания платит за каждую кражу». Что с ним делать?",options:[{label:"Отпустить",value:"spare"},{label:"Отвести к шерифу",value:"punish"}]}},{reward:{gold:240,rep:1}}],after:["Дерек получает инструменты обратно. Кузница заработала на полную, доход вырос.","Дерек: «Могу ещё и кассой заняться, если возьмёшь меня на службу»."]},{id:"sheriff_bounty",building:"sheriff",title:"Охота за головами",blurb:"На доске новая бумага. Можно брать снова и снова.",repeatable:!0,steps:[{say:["Помощник шерифа: «На доске свежий розыск. Кто-то обстрелял обоз на дороге. Награда небольшая, но платят сразу»."]},{duel:{foe:"Беглецы",kind:"gang",rounds:2,place:"waterhole",reason:"Беглец ждёт у водопоя, а с ним ещё один. Они знают, что за ними пришли.",perfectMs:600,goodMs:850}},{reward:{gold:80,rep:1}}]},{id:"telegraph_wire",building:"telegraph",title:"Депеша Компании",blurb:"Телеграфист перехватил странное сообщение. Нужна защита.",incomeBonus:h,steps:[{say:["Телеграфист Вилли: «Я перехватил депешу Компании. К Дастфорду едет человек по имени Кроу. Он не любит свидетелей»."]},{say:["Вилли: «Кстати, вор из лавки теперь на свободе. Говорит, ты его пощадил. И уже шепнул мне, о чём болтают люди Компании»."],when:["thief","spare"]},{say:["Вилли: «Вор сидит под замком. В городе шепчутся, что ты слишком жёсток. Но Компания теперь знает, что тебя лучше не злить»."],when:["thief","punish"]},{duel:{foe:"Разведчик Кроу",kind:"feint",reason:"Разведчик Кроу целится в провод. Если телеграф замолчит — город ослепнет.",perfectMs:500,goodMs:750}},{reward:{gold:400,rep:2}}],after:["Вилли: «Теперь мы слышим Компанию, а Компания не слышит нас. Доход телеграфа вырос». Он готов сам забирать выручку, если ты наймёшь его управляющим.","Конец первой главы. Кроу уже в пути… Продолжение следует."]},{id:"expand_saloon_1",building:"saloon",gate:0,incomeBonus:h,title:"Расширение: второй этаж",blurb:"Мэй хочет достроить второй этаж, но Компания присылает «проверяющих».",steps:[{say:["Мэй: «Народу всё больше, а мест нет. Хочу второй этаж с комнатами. Только Компания уже прислала проверяющего — требует остановить стройку»."]},{duel:{foe:"Проверяющий Компании",place:"saloon",reason:"Проверяющий Компании стоит у лестницы и тянется к кобуре. Стройка не остановится.",perfectMs:600,goodMs:900}},{reward:{gold:200,rep:1}}],after:["Второй этаж готов. В салуне появились комнаты для постояльцев, а над входом зажёгся фонарь."]},{id:"expand_saloon_2",building:"saloon",gate:1,incomeBonus:h,title:"Расширение: игорный зал",blurb:"Заезжие игроки хотят открыть зал, но у них есть враги.",steps:[{say:["Мэй: «Игроки готовы платить за отдельный зал. Но один из них задолжал не тем людям, и те пришли за ним сюда»."]},{duel:{foe:"Кредитор и его люди",kind:"gang",rounds:3,place:"saloon",reason:"В зал входит кредитор с двумя помощниками. Ты у карточного стола.",perfectMs:550,goodMs:850}},{reward:{gold:400,rep:1}}],after:["Над салуном выросла башенка с флагом. Игорный зал полон до утра."]},{id:"expand_smithy_1",building:"smithy",gate:0,incomeBonus:h,title:"Расширение: новый горн",blurb:"Дереку нужен большой горн, но уголь перехватила банда.",steps:[{say:["Дерек: «С таким горном я бы ковал вдвое быстрее. Но весь уголь с дороги перехватила банда. Они ждут у рудника»."]},{duel:{foe:"Главарь угольщиков",place:"mine",reason:"Главарь угольщиков загораживает тебе дорогу к руднику.",perfectMs:600,goodMs:900}},{reward:{gold:300,rep:1}}],after:["Новый горн гудит день и ночь. Над кузницей поднимается дым."]},{id:"expand_smithy_2",building:"smithy",gate:1,incomeBonus:h,title:"Расширение: оружейная",blurb:"Кузнице нужна отдельная мастерская под револьверы.",steps:[{say:["Дерек: «Хочу делать револьверы, а не только подковы. Но чертежи у человека в соседнем городе. Он требует за них дуэль»."]},{duel:{foe:"Оружейный мастер",kind:"feint",reason:"Оружейный мастер вышел на улицу и держит руку у пояса. Это проверка.",perfectMs:550,goodMs:800}},{reward:{gold:500,rep:1}}],after:["Рядом с кузницей выросла оружейная пристройка. Револьверы Дерека скоро узнают по всей округе."]},{id:"expand_sheriff_1",building:"sheriff",gate:0,incomeBonus:h,title:"Расширение: тюрьма",blurb:"Задержанных некуда сажать. Нужна камера.",steps:[{say:["Помощник: «Мы поймали троих, а запереть негде. Нужна камера. Но у одного из них осталась подельница, и она не отпустит его просто так»."]},{duel:{foe:"Подельница",kind:"feint",reason:"Подельница беглеца ждёт у здания шерифа. Она быстрее, чем кажется.",perfectMs:550,goodMs:850}},{reward:{gold:360,rep:1}}],after:["У офиса шерифа выросла пристройка с решётками. На флагштоке развевается новое знамя."]},{id:"expand_sheriff_2",building:"sheriff",gate:1,incomeBonus:h,title:"Расширение: гарнизон",blurb:"Шерифу нужно больше людей и оружия.",steps:[{say:["Помощник: «Если мы наймём ещё людей, Компания перестанет считать нас лёгкой добычей. Но им надо показать силу»."]},{duel:{foe:"Наёмник Компании",kind:"feint",reason:"Наёмник Компании приезжает «проверить» нового шерифа. Покажи, кто здесь закон.",perfectMs:500,goodMs:800}},{reward:{gold:600,rep:2}}],after:["В Дастфорде появился настоящий гарнизон. Люди идут к шерифу за порядком."]},{id:"expand_telegraph_1",building:"telegraph",gate:0,incomeBonus:h,title:"Расширение: вторая линия",blurb:"Вилли хочет протянуть вторую линию до соседнего города.",steps:[{say:["Вилли: «Вторая линия даст нам связь с соседним городом. Но по пути кто-то срезает провода, и я знаю кто»."]},{duel:{foe:"Диверсант",reason:"Диверсант целится в провод. Если он выстрелит — линия замолчит.",perfectMs:500,goodMs:800}},{reward:{gold:500,rep:1}}],after:["Рядом с телеграфом вырос второй столб. Провода тянутся в обе стороны."]},{id:"expand_telegraph_2",building:"telegraph",gate:1,incomeBonus:h,title:"Расширение: мачта",blurb:"Высокая мачта поймает даже слабые сигналы Компании.",steps:[{say:["Вилли: «Мне нужна высокая мачта. С неё мы услышим всё, что говорят в штабе Компании. Но её придётся охранять»."]},{duel:{foe:"Разведчик Компании",reason:"Разведчик Компании идёт к мачте. Он знает, зачем она нужна.",perfectMs:450,goodMs:750}},{reward:{gold:800,rep:2}}],after:["Над телеграфом поднялась мачта с красным огоньком. Ночью её видно за много миль."]}],It=[{id:"ev_saloon_1",building:"saloon",event:!0,minLevel:3,guaranteed:!0,title:"Драка в салуне",blurb:"",steps:[{say:["В салуне драка: двое фермеров крушат мебель. Мэй кричит: «Сделай что-нибудь!»"]},{choice:{id:"ev_s1",q:"Что делаешь?",options:[{label:"Разнять силой",value:"fight"},{label:"Заплатить за порядок (60)",value:"pay"}]}},{duel:{foe:"Фермер",place:"saloon",reason:"Один из фермеров хватается за обрез. Придётся стрелять.",perfectMs:650,goodMs:950},when:["ev_s1","fight"]},{reward:{gold:100,rep:1},when:["ev_s1","fight"]},{reward:{gold:-60},when:["ev_s1","pay"]},{say:["Мэй: «Спасибо. В следующий раз постараюсь обойтись без бутылок»."]}]},{id:"ev_saloon_2",building:"saloon",event:!0,minLevel:5,title:"Заезжий шулер",blurb:"",steps:[{say:["В салун заходит улыбчивый незнакомец с колодой. Через час он уже выиграл почти у всех."]},{choice:{id:"ev_s2",q:"Как поступить?",options:[{label:"Прогнать шулера",value:"expel"},{label:"Взять долю за молчание (+160)",value:"share"}]}},{reward:{rep:1},when:["ev_s2","expel"]},{reward:{gold:160,rep:-1},when:["ev_s2","share"]}]},{id:"ev_smithy_1",building:"smithy",event:!0,minLevel:3,guaranteed:!0,title:"Крупный заказ",blurb:"",steps:[{say:["Незнакомец в сером плаще заказывает двадцать револьверов и платит вдвое. Не говорит, зачем."]},{choice:{id:"ev_m1",q:"Принять заказ?",options:[{label:"Взять заказ (+240)",value:"take"},{label:"Отказать",value:"refuse"}]}},{reward:{gold:240,rep:-1},when:["ev_m1","take"]},{reward:{rep:1},when:["ev_m1","refuse"]},{say:["Дерек: «Ты принял решение. Теперь надо жить с последствиями»."]}]},{id:"ev_smithy_2",building:"smithy",event:!0,minLevel:5,title:"Ученик Дерека",blurb:"",steps:[{say:["Мальчишка из города просится в ученики. Руки у него золотые, но денег на еду нет."]},{choice:{id:"ev_m2",q:"Что скажешь Дереку?",options:[{label:"Взять и оплатить еду (-80)",value:"take"},{label:"Не сейчас",value:"no"}]}},{reward:{gold:-80,rep:1},when:["ev_m2","take"]}]},{id:"ev_sheriff_1",building:"sheriff",event:!0,minLevel:3,guaranteed:!0,title:"Беглый заключённый",blurb:"",steps:[{say:["Из камеры сбежал заключённый. Он прячется в амбаре и не собирается сдаваться."]},{duel:{foe:"Беглый заключённый",kind:"feint",place:"alley",reason:"Беглец выходит из амбара с револьвером. Он знает, что терять нечего.",perfectMs:600,goodMs:850}},{reward:{gold:140,rep:1}}]},{id:"ev_sheriff_2",building:"sheriff",event:!0,minLevel:5,title:"Подношение",blurb:"",steps:[{say:["К шерифу приходит человек Компании с конвертом: «Просто закройте глаза на пару ночных обозов»."]},{choice:{id:"ev_h2",q:"Что ответишь?",options:[{label:"Отказаться",value:"refuse"},{label:"Взять конверт (+200)",value:"take"}]}},{reward:{rep:2},when:["ev_h2","refuse"]},{reward:{gold:200,rep:-2},when:["ev_h2","take"]}]},{id:"ev_telegraph_1",building:"telegraph",event:!0,minLevel:3,guaranteed:!0,title:"Перерезанные провода",blurb:"",steps:[{say:["Утром связь пропала: кто-то перерезал провода. Вилли клянётся, что видел силуэт у столба."]},{duel:{foe:"Диверсант",place:"road",reason:"Диверсант ещё у столба. Он оборачивается и тянется к поясу.",perfectMs:550,goodMs:800}},{reward:{gold:180,rep:1}}]},{id:"ev_telegraph_2",building:"telegraph",event:!0,minLevel:5,title:"Секретная депеша",blurb:"",steps:[{say:["Вилли показывает странную депешу: в ней названия станций и ночные поезда Компании."]},{choice:{id:"ev_t2",q:"Что с ней делать?",options:[{label:"Продать копию газете (+300)",value:"sell"},{label:"Передать шерифу",value:"give"}]}},{reward:{gold:300,rep:-1},when:["ev_t2","sell"]},{reward:{gold:40,rep:1},when:["ev_t2","give"]}]}],qt={id:"heist",building:null,title:"Ограбление поезда",blurb:"",repeatable:!0,steps:[{say:["Вилли: «Ночной поезд Компании везёт жалованье всей округе и бумаги на землю. Он встанет у водокачки на двадцать минут. Возьмём его — и Компания надолго забудет дорогу в Дастфорд».","Мэй: «Это безумие. Но я принесла патронов». Ночью, без свидетелей, вы выходите на рельсы."]},{duel:{place:"train",foe:"Охрана поезда",kind:"gang",rounds:3,reason:"Охранники выходят из вагона один за другим. Первый уже на подножке.",perfectMs:500,goodMs:750}},{say:["Сейфы вскрыты, деньги и бумаги ваши. В одной из папок печать с железнодорожным костылём, такая же, как на письмах Компании. Но кто стоит за печатью, по бумагам не понять.","Поезд уходит в ночь. Дастфорд придётся начинать заново, зато вас теперь знают. Вы — Легенда."]}]},ot=document.getElementById("dialog"),Tt=document.getElementById("dialogText"),Dt=document.getElementById("dialogBtns");function A(t,e){return new Promise(i=>{Tt.textContent=t,Dt.replaceChildren(...e.map((n,o)=>{const r=document.createElement("button");return r.textContent=n,r.onclick=()=>{ot.hidden=!0,i(o)},r})),ot.hidden=!1})}async function M(t){for(const e of t)await A(e,["Дальше"])}function Gt(t,e=450,i=750){return t===null?"foul":t<=e?"perfect":t<=i?"good":"miss"}function Pt(t,e){return t==="perfect"?{gold:20*Math.min(e+1,5),rep:1,combo:e+1}:t==="good"?{gold:10,rep:0,combo:0}:t==="foul"?{gold:0,rep:-1,combo:0}:{gold:0,rep:0,combo:0}}const Vt=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
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
`,Z=document.getElementById("scene");Z.innerHTML=Vt;const q=document.getElementById("status"),lt=document.getElementById("foe"),N=document.getElementById("fire"),rt=document.getElementById("town"),at=document.getElementById("duel"),E=t=>Z.querySelector("#"+t),L=(t,e)=>E(t).setAttribute("visibility",e?"visible":"hidden"),z={road:{label:"Дорога",outdoor:!0},waterhole:{label:"Водопой",outdoor:!0},train:{label:"Поезд",outdoor:!0},mine:{label:"Рудник",outdoor:!0},alley:{label:"Переулок",outdoor:!1},saloon:{label:"Салун",outdoor:!1}};function Ft(t){for(const e of Object.keys(z))L(`bg-${e}`,e===t);L("bg-sky",z[t].outdoor)}const Nt={foul:"Слишком рано! Фол",perfect:"Идеальный выстрел!",good:"Попал",miss:"Промах"},zt={e:"12 -66",p:"15 -68"},s={p:{arm:0,fall:0,flash:0},e:{arm:0,fall:0,flash:0},hit:0};let O=0;const Rt=t=>1-(1-t)**3,Ht=t=>t*t,S=t=>new Promise(e=>setTimeout(e,t)),R=t=>t==="perfect"||t==="good";function y(t,e,i=Rt){const n=O,o=performance.now();return new Promise(r=>{const a=c=>{if(n!==O)return r();const b=Math.min(1,(c-o)/t);e(i(b)),b<1?requestAnimationFrame(a):r()};requestAnimationFrame(a)})}function pt(t){for(const e of["p","e"]){const i=s[e],n=i.fall===0?Math.sin(t/450+(e==="p"?0:2))*.6:0;E(e+"-arm").setAttribute("transform",`rotate(${i.arm} ${zt[e]})`),E(e+"-body").setAttribute("transform",`translate(0 ${n}) rotate(${i.fall})`),E(e+"-flash").setAttribute("opacity",String(i.flash))}E("p-hit").setAttribute("opacity",String(s.hit*.4)),requestAnimationFrame(pt)}function H(){O++,s.p={arm:0,fall:0,flash:0},s.e={arm:0,fall:0,flash:0},s.hit=0,L("p-gun",!1),L("p-grip",!0)}const jt=(t,e)=>Z.animate([{transform:"translate(0,0)"},{transform:`translate(${-t}px,${t/2}px)`},{transform:`translate(${t}px,${-t/2}px)`},{transform:"translate(0,0)"}],{duration:e}),st=t=>(s[t].flash=1,y(220,e=>s[t].flash=1-e)),ct=(t,e)=>y(380,i=>s[t].fall=e*i,Ht),Yt=()=>y(110,t=>s.e.arm=-35*t).then(()=>y(160,t=>s.e.arm=-35*(1-t)));async function Qt(t){const e=R(t),i=O;if(L("p-gun",!0),L("p-grip",!1),y(90,n=>s.p.arm=-80*n).then(()=>y(160,n=>s.p.arm=-80+12*Math.sin(n*Math.PI))),t!=="foul"&&st("p"),jt(e?3:6,e?150:280),await S(e?110:140),i===O){if(e)return void ct("e",80);t==="miss"&&(y(100,n=>s.e.arm=-80*n),st("e")),y(200,n=>s.hit=n),ct("p",-70)}}let x=null;N.addEventListener("pointerdown",()=>x==null?void 0:x());addEventListener("keydown",t=>{t.code==="Space"&&!t.repeat&&x&&(t.preventDefault(),x())});const Zt=()=>new Promise(t=>{x=()=>{x=null,t()}});function Ut(t,e){return new Promise(i=>{let n=0;const o=1e3+Math.random()*2500,r=[setTimeout(()=>{n=performance.now(),y(140,a=>s.e.arm=-80*a),q.textContent="ДОСТАВАЙ!"},o)];if(t.kind==="feint")for(const a of[.35,.65])r.push(setTimeout(Yt,o*a));x=()=>{x=null,r.forEach(clearTimeout),i(Gt(n?performance.now()-n:null,t.perfectMs*e,t.goodMs*e))}})}async function Xt(t){rt.hidden=!0,at.hidden=!1;const e=t.kind==="gang"?t.rounds??3:1,i=t.place??"road",n=r=>[z[i].label,t.foe&&`Против: ${t.foe}`,e>1&&`раунд ${r+1} из ${e}`].filter(Boolean).join(" · ");Ft(i),lt.textContent=n(0),H(),q.textContent=t.reason,N.textContent="Начать дуэль",await Zt(),N.textContent="Огонь";let o="perfect";for(let r=0;r<e&&(r>0&&(H(),lt.textContent=n(r),await S(500)),q.textContent="Ждёшь...",await S(300),o=await Ut(t,.9**r),q.textContent=Nt[o],Qt(o),!!R(o));r++)r<e-1&&await S(1100);return await S(1500),at.hidden=!0,rt.hidden=!1,{shot:o,win:R(o)}}for(const t of["p-flash","e-flash","p-hit"])L(t,!0);H();requestAnimationFrame(pt);const ut="tlc-save",Wt=7200,dt=[600,1200,2400],Jt=.35,ft=()=>({v:1,chapter:1,gold:0,rep:0,combo:0,legend:0,prestiges:0,fameBought:0,buildings:{},till:{},managers:{},missionsDone:[],eventsSeen:[],flags:{},tutorialDone:!1,lastSeen:Date.now()});function Kt(){try{const t=JSON.parse(localStorage.getItem(ut)??"null");if((t==null?void 0:t.v)===1)return{...ft(),...t}}catch{}return ft()}function p(t){try{localStorage.setItem(ut,JSON.stringify(t))}catch{}}const U=(t,e)=>Math.ceil(f[t].cost*Et**e),te=(t,e)=>$.filter(i=>i.building===e&&t.missionsDone.includes(i.id)).reduce((i,n)=>i+(n.incomeBonus??0),0);function D(t,e){return f[e].income*(t.buildings[e]??0)*(1+te(t,e))*(1+F*t.legend)}const ee=t=>_t*t.chapter;function yt(t){const e=Object.keys(f),i=ee(t);return e.reduce((n,o)=>n+Math.min(t.buildings[o]??0,i),0)/(i*e.length)}const ie=t=>yt(t)>=1;function ne(t){return t.tutorialDone?Object.keys(f).reduce((e,i)=>e+D(t,i),0):0}function X(t,e){const i=f[e].unlockAfter;return!i||t.missionsDone.includes(i)}const C=(t,e)=>$.filter(i=>i.building===e&&i.gate!==void 0&&t.missionsDone.includes(i.id)).length,xt=(t,e)=>et[Math.min(C(t,e),et.length-1)],W=(t,e)=>(t.buildings[e]??0)>=xt(t,e),oe=(t,e)=>C(t,e)>=$.filter(i=>i.building===e&&i.gate!==void 0).length,bt=(t,e)=>D(t,e)*dt[Math.min(C(t,e),dt.length-1)];function mt(t,e){const i=Math.min(Wt,Math.max(0,(e-t.lastSeen)/1e3));let n=0,o=0;if(t.tutorialDone)for(const r of Object.keys(f)){const a=D(t,r)*i;if(!a)continue;if(t.managers[r]){t.gold+=a,n+=a;continue}const c=Math.min(a,Math.max(0,bt(t,r)-(t.till[r]??0)));t.till[r]=(t.till[r]??0)+c,o+=c}return t.lastSeen=e,{auto:n,stored:o}}function ht(t,e){const i=t.till[e]??0;return i<1?0:(t.gold+=i,t.till[e]=0,i)}function J(t,e){const i=f[e].manager,n=t.buildings[e]??0;return!i||t.managers[e]||n<1?!1:n>=(i.level??1)&&(!i.mission||t.missionsDone.includes(i.mission))}function G(t,e){if((t.buildings[e]??0)<1)return[];const i=$.filter(o=>o.building===e&&o.gate===void 0&&(o.repeatable||!t.missionsDone.includes(o.id))),n=$.find(o=>o.building===e&&o.gate===C(t,e));return n&&!t.missionsDone.includes(n.id)&&W(t,e)&&i.push(n),i}function le(t,e,i=Math.random){const n=t.buildings[e]??0,o=It.filter(a=>a.building===e&&(a.minLevel??0)<=n&&!t.eventsSeen.includes(a.id)),r=o.find(a=>a.guaranteed);return r||(o.length&&i()<Jt?o[Math.floor(i()*o.length)]:void 0)}function re(t){if(!t.tutorialDone)return null;const e=Object.keys(f),i=e.find(n=>(t.till[n]??0)>=10);if(i&&!t.flags.firstCollect)return{id:i,kind:"collect",text:`Забери выручку: нажми на монеты над зданием — ${f[i].name}`};for(const n of e){const o=f[n];if((t.buildings[n]??0)>0){const r=G(t,n).find(a=>!a.repeatable);if(r){const a=r.gate!==void 0?`${o.name}: достигнут предел уровня, возьми задание на расширение`:`Загляни: ${o.name} — там есть задание`;return{id:n,kind:"mission",text:a}}if(J(t,n))return{id:n,kind:"hire",text:`Найми менеджера: ${o.manager.name} — ${o.manager.cost} золота (${o.name})`}}else if(X(t,n)){const r=U(n,0);return{id:n,kind:"build",text:t.gold>=r?`Построй: ${o.name} — ${r} золота`:`Копи золото: ${o.name} — ${r}`}}}return null}const wt=()=>Math.floor(B*St),K=t=>Math.ceil(Bt*At**t.fameBought),ae=t=>t.fameBought<wt()&&t.gold>=K(t);function se(t){return ae(t)?(t.gold-=K(t),t.fameBought++,t.rep++,!0):!1}const j=t=>t.rep>=B,tt=t=>Math.floor(Math.sqrt(t.rep/10));function ce(t,e){t.legend+=tt(t),t.prestiges++,t.gold=Ot,t.rep=0,t.combo=0,t.fameBought=0,t.buildings={saloon:1},t.till={},t.missionsDone=[],t.eventsSeen=[],delete t.flags[`ch${t.chapter}`],t.lastSeen=e}const de=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
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
`,P=document.getElementById("townScene");P.innerHTML=de;const vt=document.getElementById("hud"),fe=document.getElementById("goal"),he=document.getElementById("chapterTxt"),ge=document.getElementById("chapterFill"),k=document.getElementById("panel"),kt=document.getElementById("fameBtn"),w=t=>P.querySelector("#"+t);let m,u=null,V;function pe(t){m=t,kt.addEventListener("click",()=>{u="fame",Q()}),P.addEventListener("click",e=>{var r,a;const i=e.target,n=(r=i.closest("[data-c]"))==null?void 0:r.getAttribute("data-c");if(n)return m.collect(n);const o=(a=i.closest("[data-b]"))==null?void 0:a.getAttribute("data-b");o&&(u=o,Q())}),k.addEventListener("click",e=>{const i=e.target.closest("button"),n=i==null?void 0:i.dataset.act;n==="close"?(u=null,k.hidden=!0):n==="build"?m.build(u):n==="collect"?m.collect(u):n==="hire"?m.hire(u):n==="fame"?m.fame():n==="heist"?m.heist():n==="mission"&&m.mission(i.dataset.id)})}const Mt=t=>t%1===0?String(t):t.toFixed(1),Y=t=>t>=1e6?(t/1e6).toFixed(1)+"M":t>=1e3?(t/1e3).toFixed(1)+"k":String(Math.floor(t));function ue(){u=null,k.hidden=!0}function ye(){const t=V,e=wt()-t.fameBought,i=K(t),n=tt(t);k.innerHTML=`<h3>Слава</h3><p>Репутация: ${t.rep} · Легенда: ${t.legend} (+${Math.round(F*t.legend*100)}% к доходу)</p>`+(e>0?`<p>Купить известность: ${it[t.fameBought%it.length]} (+1 репутации). Осталось покупок: ${e}.</p><button data-act="fame" data-cost="${i}">Купить — ${i}</button>`:"<p>Известность за золото больше не купить: остальное добывается в дуэлях и заданиях.</p>")+(t.rep>=B/2?`<p><b>Ограбление поезда</b><br>Откроется при репутации ${B}. Даст Легенду: +${n} (+${Math.round(n*F*100)}% к доходу навсегда). Город, золото и репутация обнулятся, менеджеры и улики останутся.</p><button data-act="heist" ${j(t)?"":"disabled"}>Начать ограбление</button>`:"")+'<button data-act="close">Закрыть</button>',k.hidden=!1,_(t)}function Q(){var I;if(!u)return;if(u==="fame")return ye();const t=u,e=V,i=f[t],n=e.buildings[t]??0,o=(I=$.find(g=>g.id===i.unlockAfter))==null?void 0:I.title,r=U(t,n),a=G(e,t);let c;X(e,t)?n>0&&W(e,t)?c=`<p>Предел уровня. ${oe(e,t)?"Выше — только в следующей главе.":"Выше — только после задания на расширение."}</p>`:c=`<button data-act="build" data-cost="${r}">${n?"Улучшить":"Построить"} — ${r}</button>`:c=`<p>Пока недоступно. Сначала выполни задание «${o}».</p>`;let b="";if(n>0){const g=i.manager;b=e.managers[t]?`<p>Менеджер: ${g.name} — забирает кассу сам.</p>`:`<p>Касса: ${Math.floor(e.till[t]??0)} / ${Math.floor(bt(e,t))} <button data-act="collect">Забрать</button></p>`+(J(e,t)?`<button data-act="hire" data-cost="${g.cost}">Нанять: ${g.name} — ${g.cost}</button>`:"")}k.innerHTML=`<h3>${i.name}${n?` · ур. ${n}/${xt(e,t)}`:" (руины)"}</h3><p>${i.desc}</p>`+(n?`<p>Доход: +${Mt(D(e,t))}/с</p>`:"")+b+c+a.map(g=>`<p><b>${g.title}</b><br>${g.blurb}</p><button data-act="mission" data-id="${g.id}">Взять задание</button>`).join("")+(!a.length&&n?"<p>Заданий пока нет.</p>":"")+'<button data-act="close">Закрыть</button>',k.hidden=!1,_(e)}function _(t){V=t;const e=Object.values(t.till).reduce((o,r)=>o+r,0);vt.textContent=`Золото: ${Math.floor(t.gold)} · +${Mt(ne(t))}/с · Репутация: ${t.rep}`+(e>=1?` · в кассах: ${Y(e)}`:""),kt.hidden=!t.tutorialDone;const i=yt(t);he.textContent=`Глава ${t.chapter}: ${Math.floor(i*100)}%`,ge.style.width=`${i*100}%`;const n=re(t);fe.textContent=(n==null?void 0:n.text)??"";for(const o of Object.keys(f)){const r=G(t,o).some(I=>!I.repeatable),a=(n==null?void 0:n.id)===o?{build:"+",hire:"+",mission:"!",collect:"$"}[n.kind]:r?"!":"";w(`m-${o}`).setAttribute("visibility",a?"visible":"hidden"),a&&(w(`m-${o}`).querySelector("text").textContent=a);const c=t.till[o]??0,b=c>=1&&!t.managers[o];w(`c-${o}`).setAttribute("visibility",b?"visible":"hidden"),b&&(w(`c-${o}`).querySelector("text").textContent=Y(c))}k.querySelectorAll("button[data-cost]").forEach(o=>{o.disabled=t.gold<Number(o.dataset.cost)})}function v(t){V=t;for(const e of Object.keys(f)){const i=(t.buildings[e]??0)>0,n=C(t,e);w(`b-${e}-ruin`).setAttribute("visibility",i?"hidden":"visible"),w(`b-${e}-built`).setAttribute("visibility",i?"visible":"hidden");for(const o of[1,2])w(`b-${e}-s${o}`).setAttribute("visibility",i&&n>=o?"visible":"hidden")}_(t),Q()}const xe={saloon:[72,96],smithy:[166,118],sheriff:[247,120],telegraph:[335,128]};function $t(t,e,i="#ffd27a"){const[n,o]=xe[t],r=document.createElementNS("http://www.w3.org/2000/svg","text");r.textContent=e;for(const[a,c]of Object.entries({x:n,y:o,"text-anchor":"middle","font-size":11,"font-weight":"bold",fill:i,stroke:"#2a1316","stroke-width":.6}))r.setAttribute(a,String(c));r.style.pointerEvents="none",P.querySelector("svg").appendChild(r),r.animate([{transform:"translateY(0)",opacity:1},{transform:"translateY(-26px)",opacity:0}],{duration:1100,easing:"ease-out"}).onfinish=()=>r.remove()}function be(t,e){$t(t,`+${Y(e)}`),vt.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:220})}function Lt(t,e){for(const i of["built","s1","s2"]){const n=w(`b-${t}-${i}`);n.getAttribute("visibility")==="visible"&&(n.style.transformBox="fill-box",n.style.transformOrigin="50% 100%",n.animate([{transform:"scale(0.88,0.72)"},{transform:"scale(1.06,1.1)"},{transform:"scale(1)"}],{duration:450,easing:"ease-out"}))}$t(t,e,"#ffffff")}const l=Kt();let d=!1;async function T(t){var e;d=!0;for(const i of t.steps)if(!(i.when&&l.flags[i.when[0]]!==i.when[1]))if("say"in i)await M(i.say);else if("choice"in i){const n=i.choice;l.flags[n.id]=n.options[await A(n.q,n.options.map(o=>o.label))].value}else if("reward"in i)l.gold=Math.max(0,l.gold+(i.reward.gold??0)),l.rep=Math.max(0,l.rep+(i.reward.rep??0)),_(l);else for(;;){const n=await Xt(i.duel),o=Pt(n.shot,l.combo);if(l.gold+=o.gold,l.rep=Math.max(0,l.rep+o.rep),l.combo=o.combo,_(l),n.win)break;await A(n.shot==="foul"?"Слишком рано! Репутация падает. Соберись и попробуй ещё раз.":"Противник оказался быстрее. Ничего, ещё раз.",["Ещё раз"])}t.event?l.eventsSeen.push(t.id):t.repeatable||l.missionsDone.push(t.id),(e=t.onDone)==null||e.call(t,l),p(l),v(l),t.gate!==void 0&&Lt(t.building,"Расширено!"),t.after&&await M(t.after),d=!1}async function gt(){await T(qt),d=!0;const t=tt(l);ce(l,Date.now()),p(l),v(l),await M([`Новая территория: ${nt[l.prestiges%nt.length]}. Легенда +${t}: доход растёт на ${t*10}% навсегда.`,"Менеджеры остались с вами и снова собирают выручку. Салун отстроен заново."]),d=!1}pe({async build(t){const e=l.buildings[t]??0,i=U(t,e);if(d||l.gold<i||!X(l,t)||e>0&&W(l,t))return;l.gold-=i,l.buildings[t]=e+1,p(l),v(l),Lt(t,e?`Ур. ${e+1}`:"Построено!");const n=le(l,t);n&&await T(n);const o=`ch${l.chapter}`;if(ie(l)&&!l.flags[o]){if(l.flags[o]="done",p(l),d=!0,await M(["Все здания Дастфорда достигли предела. Город стоит крепко, как никогда.","С запада по рельсам тянется далёкий гудок. Ночной поезд Компании приближается."]),j(l)){if(await A("Поезд пройдёт через Дастфорд. Что делаем?",["Ограбить поезд","Подготовить оборону"])===0)return void await gt();l.flags.path="defense",p(l),await M(["Дастфорд готов встретить гостей. Глава 2 пока в разработке. Продолжение следует."])}else await M([`Ограбить поезд пока нельзя: нужна репутация ${B}, у вас ${l.rep}. Набирайте её в дуэлях или покупайте известность в разделе «Слава».`,"Продолжение следует."]);d=!1}},mission(t){if(d)return;const e=$.find(i=>i.id===t);e&&G(l,e.building).includes(e)&&T(e)},collect(t){if(d)return;const e=ht(l,t);e&&(l.flags.firstCollect="1",p(l),v(l),be(t,e))},fame(){d||!se(l)||(p(l),v(l))},heist(){d||!j(l)||(ue(),gt())},async hire(t){const e=f[t].manager;d||!e||!J(l,t)||l.gold<e.cost||(d=!0,ht(l,t),l.gold-=e.cost,l.managers[t]=!0,p(l),v(l),await M([e.line]),d=!1)}});setInterval(()=>{mt(l,Date.now()),_(l)},250);setInterval(()=>p(l),1e4);document.addEventListener("visibilitychange",()=>{document.hidden&&p(l)});v(l);(async()=>{if(!l.tutorialDone)return void await T(Ct);const{auto:t,stored:e}=mt(l,Date.now()),i=[];t>=1&&i.push(`менеджеры собрали ${Math.floor(t)} золота`),e>=1&&i.push(`в кассах ждёт ${Math.floor(e)} золота`),v(l),i.length&&await A(`Пока тебя не было: ${i.join(", ")}.`,["Отлично"])})();
