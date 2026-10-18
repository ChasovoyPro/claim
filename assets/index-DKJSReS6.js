(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(o){if(o.ep)return;o.ep=!0;const r=i(o);fetch(o.href,r)}})();const ue=[5,10],R=25,pe=1.2,dt=40,x=.5,ye=25,me=1e3,be=1.3,z=.1,xe=100,$t=["Заметка в газете","Праздник в городе","Портрет на доске объявлений","Табличка с вашим именем на салуне","Песня о вас в салуне","Памятник на площади"],St=["Дастфорд","Пыльная Станция","Медная Балка","Каньон Гремучей Змеи"],g={swings:10,shiftSec:600,maxShifts:3,nugget:{small:{sec:20,floor:15},medium:{sec:60,floor:50},large:{sec:240,floor:200}},chance:{small:.22,medium:.06,large:.02},ambushBase:.3,ambushPerMin:.1,ambushMax:.8,payoff:.3,duel:{perfectMs:700,goodMs:1e3}},q=[{id:"stone",name:"Булыжник",weight:30},{id:"quartz",name:"Кварцевый осколок",weight:15},{id:"horseshoe",name:"Ржавая подкова",weight:10},{id:"bone",name:"Окаменелая кость",weight:8},{id:"coin",name:"Старая монета",weight:5},{id:"spike",name:"Ржавый костыль",weight:2}],_t={intro:"Мэй: «Вот кирка. Десять ударов, и посмотрим, что даст порода. Главное, чтобы бандиты не прознали про самородки».",tutorialDone:"Мэй: «Такого в Дастфорде не видели годами! Теперь у тебя хватит и на кузницу. Заходи в рудник, когда захочешь, но осторожнее: бандиты любят чужую добычу»."},u={saloon:{name:"Салун «Последний глоток»",cost:100,income:1,desc:"Здесь пьют, играют и сплетничают. Сплетни — тоже деньги.",manager:{name:"Мэй",cost:200,mission:"saloon_tribute",line:"Мэй: «Договорились. Выручку теперь забираю я, а ты занимайся делами»."}},smithy:{name:"Кузница Дерека",cost:240,income:2,desc:"Подковы, ножи и пули. Без кузнеца город — просто кучка домов.",unlockAfter:"saloon_tribute",requiresFlag:"mineIntro",manager:{name:"Дерек",cost:600,mission:"smithy_tools",line:"Дерек: «Касса — это тоже наковальня: я буду бить по ней сам. Иди, у тебя дела»."}},sheriff:{name:"Офис шерифа",cost:600,income:4,desc:"Доска розыска и закон. Пока что закон — это ты.",unlockAfter:"smithy_tools",manager:{name:"Помощник Томми",cost:1400,level:3,line:"Томми: «Выручку и награды за поимки беру на себя, шериф»."}},telegraph:{name:"Телеграф",cost:1200,income:8,desc:"Единственная ниточка к большому миру. И к Железной Компании.",unlockAfter:"smithy_tools",manager:{name:"Вилли",cost:3e3,mission:"telegraph_wire",line:"Вилли: «Я и так сижу у аппарата круглые сутки. Выручку заберу заодно»."}},bank:{name:"Дастфордский банк",cost:8e4,income:10,chapter:2,desc:"Каменный банк с решётками на окнах. Здесь лежат деньги города и закладные на его землю.",manager:{name:"Банкир Эдгар",cost:16e4,mission:"bank_mortgages",line:"Эдгар: «Касса банка должна быть в надёжных руках. В моих»."}},church:{name:"Церковь Дастфорда",cost:26e4,income:33,chapter:2,desc:"Белая церковь на краю улицы. Сюда приходят за надеждой, а иногда за убежищем.",manager:{name:"Пастор Иона",cost:52e4,mission:"church_confession",line:"Иона: «Пожертвования я буду собирать сам и пускать на добрые дела»."}}},Pt={id:"prologue",building:null,title:"Пролог",blurb:"",steps:[{say:["Закат. Дорога привела тебя в Дастфорд — городок, который Железная Компания решила стереть с карты.","В кармане письмо от старого друга, шерифа Хэнка: «Приезжай. Последний контракт. Заплачу всем, что от города осталось».","Хэнка ты не нашёл. Нашёл пепелище, десяток упрямых людей и банду у руин салуна.","Громила Бык: «Эй, чужак! Это земля Железной Компании. Убирайся, пока цел».","ОБУЧЕНИЕ. Жди, пока противник вскинет руку. Как только это случится — жми «Огонь» (или пробел). Нажмёшь раньше — фол и минус репутация. Чем быстрее, тем лучше награда."]},{duel:{foe:"Громила Бык",reason:"Бык хватается за кобуру. Стреляй первым!",perfectMs:800,goodMs:1200}},{say:["Бык бежит прочь. Из укрытий выходят люди: «Если останешься — мы отстроим салун. Нам нужен тот, кто умеет стрелять»."]},{reward:{gold:50,rep:1}}],after:["Салун Дастфорда снова открыт. Выручка копится в кассе, а над зданием появляются монеты: нажми на них, чтобы забрать золото.","Нажми на само здание, чтобы улучшить его или взять задание. Когда найдёшь помощников, они начнут забирать выручку сами."],onDone:t=>{t.buildings.saloon=1,t.tutorialDone=!0,t.lastSeen=Date.now()}},$=[{id:"saloon_tribute",building:"saloon",title:"Сборщики дани",blurb:"Люди Компании пришли за «налогом». Защити салун.",incomeBonus:x,steps:[{say:["Хозяйка Мэй: «Вчера они забрали всю выручку. Сегодня придут снова. Без салуна городу конец»."]},{duel:{foe:"Сборщик дани",place:"saloon",reason:"Сборщик дани входит в салун и кладёт руку на кобуру. Ты стоишь у стойки.",perfectMs:650,goodMs:950}},{reward:{gold:120,rep:1}}],after:["Мэй: «Эти больше не придут. Теперь посетители не боятся заходить». Доход салуна вырос.","Мэй: «Хочешь, я буду заведовать кассой? Недорого. Сама буду забирать выручку, пока ты занят».","Мэй: «И вот ещё: на краю города стоит старый рудник. Бывает, там находят самородки. Загляни, пока не расхватали». На улице появился знак «Рудник»."]},{id:"smithy_tools",building:"smithy",title:"Украденные инструменты",blurb:"У кузнеца украли инструменты. Вор прячется в заброшенной лавке.",incomeBonus:x,steps:[{say:["Кузнец Дерек: «Без молота я ничего не выкую. Вор засел в лавке „Ржавая подкова“ за городом. Он вооружён»."]},{duel:{foe:"Вор",kind:"feint",place:"alley",reason:"Ты входишь в лавку первым. Вор тянется к револьверу — не дай ему шанса.",perfectMs:600,goodMs:900}},{choice:{id:"thief",q:"Вор поднимает руки: «Меня заставили! Компания платит за каждую кражу». Что с ним делать?",options:[{label:"Отпустить",value:"spare"},{label:"Отвести к шерифу",value:"punish"}]}},{reward:{gold:240,rep:1}}],after:["Дерек получает инструменты обратно. Кузница заработала на полную, доход вырос.","Дерек: «Могу ещё и кассой заняться, если возьмёшь меня на службу»."]},{id:"sheriff_bounty",building:"sheriff",title:"Охота за головами",blurb:"На доске новая бумага. Можно брать снова и снова.",repeatable:!0,steps:[{say:["Помощник шерифа: «На доске свежий розыск. Кто-то обстрелял обоз на дороге. Награда небольшая, но платят сразу»."]},{duel:{foe:"Беглецы",kind:"gang",rounds:2,place:"waterhole",reason:"Беглец ждёт у водопоя, а с ним ещё один. Они знают, что за ними пришли.",perfectMs:600,goodMs:850}},{reward:{gold:80,rep:1}}]},{id:"telegraph_wire",building:"telegraph",title:"Депеша Компании",blurb:"Телеграфист перехватил странное сообщение. Нужна защита.",incomeBonus:x,steps:[{say:["Телеграфист Вилли: «Я перехватил депешу Компании. К Дастфорду едет человек по имени Кроу. Он не любит свидетелей»."]},{say:["Вилли: «Кстати, вор из лавки теперь на свободе. Говорит, ты его пощадил. И уже шепнул мне, о чём болтают люди Компании»."],when:["thief","spare"]},{say:["Вилли: «Вор сидит под замком. В городе шепчутся, что ты слишком жёсток. Но Компания теперь знает, что тебя лучше не злить»."],when:["thief","punish"]},{duel:{foe:"Разведчик Кроу",kind:"feint",reason:"Разведчик Кроу целится в провод. Если телеграф замолчит — город ослепнет.",perfectMs:500,goodMs:750}},{reward:{gold:400,rep:2}}],after:["Вилли: «Теперь мы слышим Компанию, а Компания не слышит нас. Доход телеграфа вырос». Он готов сам забирать выручку, если ты наймёшь его управляющим.","Конец первой главы. Кроу уже в пути… Продолжение следует."]},{id:"expand_saloon_1",building:"saloon",gate:0,incomeBonus:x,title:"Расширение: второй этаж",blurb:"Мэй хочет достроить второй этаж, но Компания присылает «проверяющих».",steps:[{say:["Мэй: «Народу всё больше, а мест нет. Хочу второй этаж с комнатами. Только Компания уже прислала проверяющего — требует остановить стройку»."]},{duel:{foe:"Проверяющий Компании",place:"saloon",reason:"Проверяющий Компании стоит у лестницы и тянется к кобуре. Стройка не остановится.",perfectMs:600,goodMs:900}},{reward:{gold:200,rep:1}}],after:["Второй этаж готов. В салуне появились комнаты для постояльцев, а над входом зажёгся фонарь."]},{id:"expand_saloon_2",building:"saloon",gate:1,incomeBonus:x,title:"Расширение: игорный зал",blurb:"Заезжие игроки хотят открыть зал, но у них есть враги.",steps:[{say:["Мэй: «Игроки готовы платить за отдельный зал. Но один из них задолжал не тем людям, и те пришли за ним сюда»."]},{duel:{foe:"Кредитор и его люди",kind:"gang",rounds:3,place:"saloon",reason:"В зал входит кредитор с двумя помощниками. Ты у карточного стола.",perfectMs:550,goodMs:850}},{reward:{gold:400,rep:1}}],after:["Над салуном выросла башенка с флагом. Игорный зал полон до утра."]},{id:"expand_smithy_1",building:"smithy",gate:0,incomeBonus:x,title:"Расширение: новый горн",blurb:"Дереку нужен большой горн, но уголь перехватила банда.",steps:[{say:["Дерек: «С таким горном я бы ковал вдвое быстрее. Но весь уголь с дороги перехватила банда. Они ждут у рудника»."]},{duel:{foe:"Главарь угольщиков",place:"mine",reason:"Главарь угольщиков загораживает тебе дорогу к руднику.",perfectMs:600,goodMs:900}},{reward:{gold:300,rep:1}}],after:["Новый горн гудит день и ночь. Над кузницей поднимается дым."]},{id:"expand_smithy_2",building:"smithy",gate:1,incomeBonus:x,title:"Расширение: оружейная",blurb:"Кузнице нужна отдельная мастерская под револьверы.",steps:[{say:["Дерек: «Хочу делать револьверы, а не только подковы. Но чертежи у человека в соседнем городе. Он требует за них дуэль»."]},{duel:{foe:"Оружейный мастер",kind:"feint",reason:"Оружейный мастер вышел на улицу и держит руку у пояса. Это проверка.",perfectMs:550,goodMs:800}},{reward:{gold:500,rep:1}}],after:["Рядом с кузницей выросла оружейная пристройка. Револьверы Дерека скоро узнают по всей округе."]},{id:"expand_sheriff_1",building:"sheriff",gate:0,incomeBonus:x,title:"Расширение: тюрьма",blurb:"Задержанных некуда сажать. Нужна камера.",steps:[{say:["Помощник: «Мы поймали троих, а запереть негде. Нужна камера. Но у одного из них осталась подельница, и она не отпустит его просто так»."]},{duel:{foe:"Подельница",kind:"feint",reason:"Подельница беглеца ждёт у здания шерифа. Она быстрее, чем кажется.",perfectMs:550,goodMs:850}},{reward:{gold:360,rep:1}}],after:["У офиса шерифа выросла пристройка с решётками. На флагштоке развевается новое знамя."]},{id:"expand_sheriff_2",building:"sheriff",gate:1,incomeBonus:x,title:"Расширение: гарнизон",blurb:"Шерифу нужно больше людей и оружия.",steps:[{say:["Помощник: «Если мы наймём ещё людей, Компания перестанет считать нас лёгкой добычей. Но им надо показать силу»."]},{duel:{foe:"Наёмник Компании",kind:"feint",reason:"Наёмник Компании приезжает «проверить» нового шерифа. Покажи, кто здесь закон.",perfectMs:500,goodMs:800}},{reward:{gold:600,rep:2}}],after:["В Дастфорде появился настоящий гарнизон. Люди идут к шерифу за порядком."]},{id:"expand_telegraph_1",building:"telegraph",gate:0,incomeBonus:x,title:"Расширение: вторая линия",blurb:"Вилли хочет протянуть вторую линию до соседнего города.",steps:[{say:["Вилли: «Вторая линия даст нам связь с соседним городом. Но по пути кто-то срезает провода, и я знаю кто»."]},{duel:{foe:"Диверсант",reason:"Диверсант целится в провод. Если он выстрелит — линия замолчит.",perfectMs:500,goodMs:800}},{reward:{gold:500,rep:1}}],after:["Рядом с телеграфом вырос второй столб. Провода тянутся в обе стороны."]},{id:"expand_telegraph_2",building:"telegraph",gate:1,incomeBonus:x,title:"Расширение: мачта",blurb:"Высокая мачта поймает даже слабые сигналы Компании.",steps:[{say:["Вилли: «Мне нужна высокая мачта. С неё мы услышим всё, что говорят в штабе Компании. Но её придётся охранять»."]},{duel:{foe:"Разведчик Компании",reason:"Разведчик Компании идёт к мачте. Он знает, зачем она нужна.",perfectMs:450,goodMs:750}},{reward:{gold:800,rep:2}}],after:["Над телеграфом поднялась мачта с красным огоньком. Ночью её видно за много миль."]},{id:"bank_mortgages",building:"bank",incomeBonus:x,title:"Закладные на город",blurb:"Банк держит закладные на землю горожан. Агент Компании пришёл их выкупить.",steps:[{say:["Банкир Эдгар: «Половина Дастфорда заложила дома под ссуды. Если Компания выкупит закладные, город достанется ей целиком. Её агент сидит у меня в кабинете и ждёт ответа»."]},{duel:{place:"bank",foe:"Агент Компании",kind:"feint",reason:"Агент выходит на крыльцо банка с папкой закладных. Он не собирается уходить с пустыми руками.",perfectMs:550,goodMs:800}},{choice:{id:"mortgage",q:"В папке агента лежат закладные горожан. Что с ними сделать?",options:[{label:"Вернуть горожанам",value:"return"},{label:"Оставить себе как рычаг",value:"keep"}]}},{reward:{gold:400,rep:2},when:["mortgage","return"]},{reward:{gold:900,rep:-1},when:["mortgage","keep"]}],after:["Эдгар: «Теперь банк дышит свободнее. Деньги потекут в город»."]},{id:"church_confession",building:"church",incomeBonus:x,title:"Беглец в церкви",blurb:"В церкви прячется беглец. За ним пришли люди с оружием.",steps:[{say:["Пастор Иона: «Он пришёл под утро, дрожал и просил убежища. А у дверей уже стоят люди с револьверами. Что мне ему сказать?»"]},{choice:{id:"refuge",q:"Как поступить с беглецом?",options:[{label:"Спрятать в церкви",value:"hide"},{label:"Выдать преследователям",value:"give"}]}},{duel:{place:"road",foe:"Преследователи",kind:"gang",rounds:3,reason:"Преследователи требуют открыть двери церкви. Ты выходишь им навстречу.",perfectMs:650,goodMs:950},when:["refuge","hide"]},{reward:{gold:300,rep:2},when:["refuge","hide"]},{reward:{gold:700,rep:-2},when:["refuge","give"]}],after:["Иона тихо благодарит вас и записывает что-то в церковную книгу. Пожертвования выросли."]},{id:"train_defense",building:"telegraph",finale:1,title:"Защитить поезд",blurb:"Все здания на пределе. Вилли перехватил депешу: Компания хочет ограбить ночной поезд.",steps:[{say:["Вилли: «Перехвачена депеша. Ночной поезд везёт почту, бумаги из столицы и письма агентов Пинкертона. Люди Компании собираются ограбить его у водокачки».","Вилли: «Зачем им бумаги, не знаю. Депеша подписана только печатью с железнодорожным костылём. Если поезд пропадёт, виноватым сделают Дастфорд. Нужно защитить его»."]},{duel:{place:"train",foe:"Налётчики Компании",kind:"gang",rounds:6,reason:"Налётчики выходят на рельсы один за другим. Шестеро против вас одного.",perfectMs:800,goodMs:1100}},{say:["Налётчики разбежались. В седельных сумках и в почтовом вагоне нашлись донесения агентов Пинкертона о Дастфорде и письма с печатью-костылём.","Кто стоит за печатью, по бумагам не понять: имена вымараны. Но Компания очень не хочет, чтобы эти письма кто-то прочёл."]},{set:["clue_pinkerton","1"]},{set:["clue_seal","1"]},{reward:{gold:500,rep:3}}],after:["ГЛАВА 2. Поезд спасён, и железная дорога наконец связала Дастфорд с большим миром: в город потекли деньги.",`Ваш прогресс остаётся при вас. Каждый новый уровень зданий (с 26-го по 50-й) приносит в ${dt} раз больше дохода, а предел уровня вырос до 50.`,"На улице открыты новые здания: Банк и Церковь. Прокрутите город вправо."],onDone:t=>{t.chapter=2}},{id:"bank_defense",building:"bank",finale:2,prestige:!0,title:"Защитить банк",blurb:"Все здания на пределе. Эдгар ждёт вас: Компания готовит налёт на банк.",steps:[{say:["Эдгар: «Они придут ночью, за деньгами и за закладными. Это последний рывок Компании, и они не остановятся».","Эдгар: «Отстоим банк, и о Дастфорде заговорят по всей границе. Но после этого вам придётся уйти: Компания не оставит вас в покое, а город слишком хорошо запомнит героя»."]},{duel:{place:"bank",foe:"Налётчики Компании",kind:"gang",rounds:7,reason:"Налётчики выходят из темноты к дверям банка. Семеро. Свет фонаря дрожит.",perfectMs:900,goodMs:1200}},{say:["Банк устоял. Среди бумаг налётчиков нашлось письмо без подписи, адресованное лично вам.","«Мы знаем, кто вы и откуда. Скоро встретимся». Печать с железнодорожным костылём.","Вы начинаете понимать: за Компанией стоит человек, знающий ваше прошлое. Но кто, пока неизвестно."]},{set:["clue_letter","1"]},{reward:{rep:5}}]}],jt=[{id:"ev_saloon_1",building:"saloon",event:!0,minLevel:3,guaranteed:!0,title:"Драка в салуне",blurb:"",steps:[{say:["В салуне драка: двое фермеров крушат мебель. Мэй кричит: «Сделай что-нибудь!»"]},{choice:{id:"ev_s1",q:"Что делаешь?",options:[{label:"Разнять силой",value:"fight"},{label:"Заплатить за порядок (60)",value:"pay"}]}},{duel:{foe:"Фермер",place:"saloon",reason:"Один из фермеров хватается за обрез. Придётся стрелять.",perfectMs:650,goodMs:950},when:["ev_s1","fight"]},{reward:{gold:100,rep:1},when:["ev_s1","fight"]},{reward:{gold:-60},when:["ev_s1","pay"]},{say:["Мэй: «Спасибо. В следующий раз постараюсь обойтись без бутылок»."]}]},{id:"ev_saloon_2",building:"saloon",event:!0,minLevel:5,title:"Заезжий шулер",blurb:"",steps:[{say:["В салун заходит улыбчивый незнакомец с колодой. Через час он уже выиграл почти у всех."]},{choice:{id:"ev_s2",q:"Как поступить?",options:[{label:"Прогнать шулера",value:"expel"},{label:"Взять долю за молчание (+160)",value:"share"}]}},{reward:{rep:1},when:["ev_s2","expel"]},{reward:{gold:160,rep:-1},when:["ev_s2","share"]}]},{id:"ev_smithy_1",building:"smithy",event:!0,minLevel:3,guaranteed:!0,title:"Крупный заказ",blurb:"",steps:[{say:["Незнакомец в сером плаще заказывает двадцать револьверов и платит вдвое. Не говорит, зачем."]},{choice:{id:"ev_m1",q:"Принять заказ?",options:[{label:"Взять заказ (+240)",value:"take"},{label:"Отказать",value:"refuse"}]}},{reward:{gold:240,rep:-1},when:["ev_m1","take"]},{reward:{rep:1},when:["ev_m1","refuse"]},{say:["Дерек: «Ты принял решение. Теперь надо жить с последствиями»."]}]},{id:"ev_smithy_2",building:"smithy",event:!0,minLevel:5,title:"Ученик Дерека",blurb:"",steps:[{say:["Мальчишка из города просится в ученики. Руки у него золотые, но денег на еду нет."]},{choice:{id:"ev_m2",q:"Что скажешь Дереку?",options:[{label:"Взять и оплатить еду (-80)",value:"take"},{label:"Не сейчас",value:"no"}]}},{reward:{gold:-80,rep:1},when:["ev_m2","take"]}]},{id:"ev_sheriff_1",building:"sheriff",event:!0,minLevel:3,guaranteed:!0,title:"Беглый заключённый",blurb:"",steps:[{say:["Из камеры сбежал заключённый. Он прячется в амбаре и не собирается сдаваться."]},{duel:{foe:"Беглый заключённый",kind:"feint",place:"alley",reason:"Беглец выходит из амбара с револьвером. Он знает, что терять нечего.",perfectMs:600,goodMs:850}},{reward:{gold:140,rep:1}}]},{id:"ev_sheriff_2",building:"sheriff",event:!0,minLevel:5,title:"Подношение",blurb:"",steps:[{say:["К шерифу приходит человек Компании с конвертом: «Просто закройте глаза на пару ночных обозов»."]},{choice:{id:"ev_h2",q:"Что ответишь?",options:[{label:"Отказаться",value:"refuse"},{label:"Взять конверт (+200)",value:"take"}]}},{reward:{rep:2},when:["ev_h2","refuse"]},{reward:{gold:200,rep:-2},when:["ev_h2","take"]}]},{id:"ev_telegraph_1",building:"telegraph",event:!0,minLevel:3,guaranteed:!0,title:"Перерезанные провода",blurb:"",steps:[{say:["Утром связь пропала: кто-то перерезал провода. Вилли клянётся, что видел силуэт у столба."]},{duel:{foe:"Диверсант",place:"road",reason:"Диверсант ещё у столба. Он оборачивается и тянется к поясу.",perfectMs:550,goodMs:800}},{reward:{gold:180,rep:1}}]},{id:"ev_telegraph_2",building:"telegraph",event:!0,minLevel:5,title:"Секретная депеша",blurb:"",steps:[{say:["Вилли показывает странную депешу: в ней названия станций и ночные поезда Компании."]},{choice:{id:"ev_t2",q:"Что с ней делать?",options:[{label:"Продать копию газете (+300)",value:"sell"},{label:"Передать шерифу",value:"give"}]}},{reward:{gold:300,rep:-1},when:["ev_t2","sell"]},{reward:{gold:40,rep:1},when:["ev_t2","give"]}]},{id:"ev_bank_1",building:"bank",event:!0,minLevel:3,guaranteed:!0,title:"Шаги у хранилища",blurb:"",steps:[{say:["Ночной сторож банка слышал шаги у хранилища. Эдгар просит вас проверить, пока не поздно."]},{duel:{place:"bank",foe:"Взломщик",kind:"feint",reason:"У двери хранилища кто-то возится с замком. Он оборачивается, увидев вас.",perfectMs:550,goodMs:800}},{reward:{gold:300,rep:1}}]},{id:"ev_bank_2",building:"bank",event:!0,minLevel:5,title:"Крупный вклад",blurb:"",steps:[{say:["В банк пришёл незнакомец с тяжёлым сундуком. Он просит принять вклад и никому о нём не говорить."]},{choice:{id:"ev_b2",q:"Принять вклад?",options:[{label:"Принять (+600)",value:"take"},{label:"Отказаться",value:"refuse"}]}},{reward:{gold:600,rep:-1},when:["ev_b2","take"]},{reward:{rep:1},when:["ev_b2","refuse"]}]},{id:"ev_church_1",building:"church",event:!0,minLevel:3,guaranteed:!0,title:"Анонимное пожертвование",blurb:"",steps:[{say:["На ступенях церкви кто-то оставил кошель с золотом и записку без подписи."]},{choice:{id:"ev_c1",q:"Что сделать с деньгами?",options:[{label:"Раздать бедным",value:"give"},{label:"Оставить церкви (+500)",value:"keep"}]}},{reward:{rep:2},when:["ev_c1","give"]},{reward:{gold:500},when:["ev_c1","keep"]}]},{id:"ev_church_2",building:"church",event:!0,minLevel:5,title:"Колокол",blurb:"",steps:[{say:["Старый колокол треснул. Иона просит денег на новый: звон слышен за много миль."]},{choice:{id:"ev_c2",q:"Оплатить новый колокол?",options:[{label:"Оплатить (-400)",value:"pay"},{label:"Не сейчас",value:"no"}]}},{reward:{gold:-400,rep:2},when:["ev_c2","pay"]}]}],we={1:["Все здания Дастфорда достигли предела. Город стоит крепко, как никогда.","Из телеграфа выбегает Вилли и машет депешей: Компания что-то затевает. Загляните к нему."],2:["Все здания достигли предела главы. Эдгар просит зайти в банк: Компания готовит налёт."]},Lt=document.getElementById("dialog"),ke=document.getElementById("dialogText"),ve=document.getElementById("dialogBtns");function A(t,e){return new Promise(i=>{ke.textContent=t,ve.replaceChildren(...e.map((n,o)=>{const r=document.createElement("button");return r.textContent=n,r.onclick=()=>{Lt.hidden=!0,i(o)},r})),Lt.hidden=!1})}async function w(t){for(const e of t)await A(e,["Дальше"])}function Me(t,e=450,i=750){return t===null?"foul":t<=e?"perfect":t<=i?"good":"miss"}function Vt(t,e){return t==="perfect"?{gold:20*Math.min(e+1,5),rep:1,combo:e+1}:t==="good"?{gold:10,rep:0,combo:0}:t==="foul"?{gold:0,rep:-1,combo:0}:{gold:0,rep:0,combo:0}}const $e=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
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
  <g id="bg-bank" visibility="hidden">
    <rect y="140" width="400" height="100" fill="url(#ground)"/>
    <rect y="138" width="400" height="4" fill="#ffb347" opacity="0.55"/>
    <circle cx="200" cy="118" r="62" fill="url(#lamp)" opacity="0.6"/>
    <rect x="70" y="84" width="260" height="58" fill="#3a2230" stroke="#ff9a5a" stroke-opacity="0.25"/>
    <polygon points="62,84 200,50 338,84" fill="#2e1a26"/>
    <rect x="148" y="62" width="104" height="16" fill="#1a0f18"/>
    <text x="200" y="74.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#ffd27a">БАНК</text>
    <g fill="#1a0f18"><rect x="92" y="94" width="8" height="48"/><rect x="128" y="94" width="8" height="48"/><rect x="264" y="94" width="8" height="48"/><rect x="300" y="94" width="8" height="48"/></g>
    <rect x="106" y="100" width="28" height="26" fill="#ffd27a" opacity="0.85"/><rect x="266" y="100" width="28" height="26" fill="#ffd27a" opacity="0.85"/>
    <g stroke="#1a0f18" stroke-width="1.5"><path d="M114 100 v26 M122 100 v26 M274 100 v26 M282 100 v26 M106 113 h28 M266 113 h28"/></g>
    <rect x="180" y="98" width="40" height="44" fill="#5a3a22"/><rect x="178" y="140" width="44" height="5" fill="#2a1a22"/>
    <polygon points="196,142 204,142 262,240 138,240" fill="url(#road)" opacity="0.6"/>
    <g fill="#0b0608"><rect x="46" y="106" width="3" height="38"/><circle cx="47.5" cy="104" r="4"/><rect x="326" y="164" width="44" height="3"/><rect x="330" y="167" width="3" height="12"/><rect x="363" y="167" width="3" height="12"/></g>
    <circle cx="47.5" cy="104" r="22" fill="url(#lamp)" opacity="0.7"/>
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
`,ft=document.getElementById("scene");ft.innerHTML=$e;const H=document.getElementById("status"),Et=document.getElementById("foe"),et=document.getElementById("fire"),At=document.getElementById("town"),Bt=document.getElementById("duel"),N=t=>ft.querySelector("#"+t),O=(t,e)=>N(t).setAttribute("visibility",e?"visible":"hidden"),it={road:{label:"Дорога",outdoor:!0},waterhole:{label:"Водопой",outdoor:!0},train:{label:"Поезд",outdoor:!0},mine:{label:"Рудник",outdoor:!0},alley:{label:"Переулок",outdoor:!1},saloon:{label:"Салун",outdoor:!1},bank:{label:"Банк",outdoor:!0}};function Se(t){for(const e of Object.keys(it))O(`bg-${e}`,e===t);O("bg-sky",it[t].outdoor)}const _e={foul:"Слишком рано! Фол",perfect:"Идеальный выстрел!",good:"Попал",miss:"Промах"},Le={e:"12 -66",p:"15 -68"},m={p:{arm:0,fall:0,flash:0},e:{arm:0,fall:0,flash:0},hit:0};let P=0;const Ee=t=>1-(1-t)**3,Ae=t=>t*t,F=t=>new Promise(e=>setTimeout(e,t)),nt=t=>t==="perfect"||t==="good";function _(t,e,i=Ee){const n=P,o=performance.now();return new Promise(r=>{const a=f=>{if(n!==P)return r();const h=Math.min(1,(f-o)/t);e(i(h)),h<1?requestAnimationFrame(a):r()};requestAnimationFrame(a)})}function Rt(t){for(const e of["p","e"]){const i=m[e],n=i.fall===0?Math.sin(t/450+(e==="p"?0:2))*.6:0;N(e+"-arm").setAttribute("transform",`rotate(${i.arm} ${Le[e]})`),N(e+"-body").setAttribute("transform",`translate(0 ${n}) rotate(${i.fall})`),N(e+"-flash").setAttribute("opacity",String(i.flash))}N("p-hit").setAttribute("opacity",String(m.hit*.4)),requestAnimationFrame(Rt)}function ot(){P++,m.p={arm:0,fall:0,flash:0},m.e={arm:0,fall:0,flash:0},m.hit=0,O("p-gun",!1),O("p-grip",!0)}const Be=(t,e)=>ft.animate([{transform:"translate(0,0)"},{transform:`translate(${-t}px,${t/2}px)`},{transform:`translate(${t}px,${-t/2}px)`},{transform:"translate(0,0)"}],{duration:e}),Ot=t=>(m[t].flash=1,_(220,e=>m[t].flash=1-e)),It=(t,e)=>_(380,i=>m[t].fall=e*i,Ae),Oe=()=>_(110,t=>m.e.arm=-35*t).then(()=>_(160,t=>m.e.arm=-35*(1-t)));async function Ie(t){const e=nt(t),i=P;if(O("p-gun",!0),O("p-grip",!1),_(90,n=>m.p.arm=-80*n).then(()=>_(160,n=>m.p.arm=-80+12*Math.sin(n*Math.PI))),t!=="foul"&&Ot("p"),Be(e?3:6,e?150:280),await F(e?110:140),i===P){if(e)return void It("e",80);t==="miss"&&(_(100,n=>m.e.arm=-80*n),Ot("e")),_(200,n=>m.hit=n),It("p",-70)}}let L=null;et.addEventListener("pointerdown",()=>L==null?void 0:L());addEventListener("keydown",t=>{t.code==="Space"&&!t.repeat&&L&&(t.preventDefault(),L())});const Ce=()=>new Promise(t=>{L=()=>{L=null,t()}});function qe(t,e){return new Promise(i=>{let n=0;const o=1e3+Math.random()*2500,r=[setTimeout(()=>{n=performance.now(),_(140,a=>m.e.arm=-80*a),H.textContent="ДОСТАВАЙ!"},o)];if(t.kind==="feint")for(const a of[.35,.65])r.push(setTimeout(Oe,o*a));L=()=>{L=null,r.forEach(clearTimeout),i(Me(n?performance.now()-n:null,t.perfectMs*e,t.goodMs*e))}})}async function Ht(t){At.hidden=!0,Bt.hidden=!1;const e=t.kind==="gang"?t.rounds??3:1,i=t.place??"road",n=r=>[it[i].label,t.foe&&`Против: ${t.foe}`,e>1&&`раунд ${r+1} из ${e}`].filter(Boolean).join(" · ");Se(i),Et.textContent=n(0),ot(),H.textContent=t.reason,et.textContent="Начать дуэль",await Ce(),et.textContent="Огонь";let o="perfect";for(let r=0;r<e&&(r>0&&(ot(),Et.textContent=n(r),await F(500)),H.textContent="Ждёшь...",await F(300),o=await qe(t,.9**r),H.textContent=_e[o],Ie(o),!!nt(o));r++)r<e-1&&await F(1100);return await F(1500),Bt.hidden=!0,At.hidden=!1,{shot:o,win:nt(o)}}for(const t of["p-flash","e-flash","p-hit"])O(t,!0);ot();requestAnimationFrame(Rt);function j(t){const e=[[1e15,"Q"],[1e12,"T"],[1e9,"B"],[1e6,"M"],[1e3,"k"]];for(const[i,n]of e)if(t>=i)return(t/i).toFixed(t/i>=100?0:1).replace(/\.0$/,"")+n;return String(Math.floor(t))}const y=t=>t<1e4?String(Math.floor(t)):j(t),De=(t,e)=>Math.max(g.nugget[t].floor,Math.round(e*g.nugget[t].sec));function Te(t){const e=q.reduce((n,o)=>n+o.weight,0);let i=t()*e;for(const n of q)if((i-=n.weight)<0)return n.id;return q[0].id}const Yt=t=>({tier:"trash",find:Te(t),gold:0}),D=(t,e)=>({tier:t,gold:De(t,e)});function Ge(t,e){const i=t(),{large:n,medium:o,small:r}=g.chance;return i<n?D("large",e):i<n+o?D("medium",e):i<n+o+r?D("small",e):Yt(t)}function Ne(t,e,i=!1){const n=[];for(let o=0;o<g.swings;o++){const r=o===g.swings-1;let a;i?a=r?D("large",e):o===4?D("small",e):Yt(t):(a=Ge(t,e),r&&a.tier==="trash"&&!n.some(f=>f.tier!=="trash")&&(a=D("small",e))),n.push(a)}return n}function ht(t,e){const i=g.shiftSec*1e3;if(t.mineShifts>=g.maxShifts){t.mineAt=e;return}const n=Math.floor((e-t.mineAt)/i);n<=0||(t.mineShifts=Math.min(g.maxShifts,t.mineShifts+n),t.mineAt=t.mineShifts>=g.maxShifts?e:t.mineAt+n*i)}function Fe(t,e){return ht(t,e),t.mineShifts<1?!1:(t.mineShifts>=g.maxShifts&&(t.mineAt=e),t.mineShifts--,!0)}const ze=(t,e)=>t.mineShifts>=g.maxShifts?0:Math.max(0,t.mineAt+g.shiftSec*1e3-e),Qt=(t,e)=>t/Math.max(1,e*60),Pe=(t,e)=>t<=0?0:Math.min(g.ambushMax,g.ambushBase+g.ambushPerMin*Qt(t,e));function je(t,e){const i=Qt(t,e);return i<2?3:i<5?4:5}const Ve=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice">
  <defs>
    <linearGradient id="m-wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#1b1018"/><stop offset="1" stop-color="#2e1a1c"/>
    </linearGradient>
    <radialGradient id="m-lamp">
      <stop offset="0" stop-color="#ffd27a" stop-opacity="0.85"/><stop offset="1" stop-color="#ffb347" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="m-vein">
      <stop offset="0" stop-color="#ffe3a0"/><stop offset="1" stop-color="#e0a030"/>
    </radialGradient>
    <style>
      .s { fill: #0b0608; stroke: #ff9a5a; stroke-opacity: .35; stroke-width: .8; }
    </style>
  </defs>

  <!-- стены забоя -->
  <rect width="400" height="240" fill="url(#m-wall)"/>
  <polygon points="0,0 70,0 44,76 0,96" fill="#241420"/>
  <polygon points="400,0 330,0 352,84 400,104" fill="#241420"/>
  <polygon points="0,150 92,142 72,240 0,240" fill="#2a1a20"/>
  <polygon points="400,150 308,150 330,240 400,240" fill="#2a1a20"/>

  <!-- деревянные крепи и фонарь -->
  <g fill="#5a3a22"><rect x="18" y="0" width="14" height="240"/><rect x="368" y="0" width="14" height="240"/><rect x="10" y="8" width="380" height="14"/></g>
  <g fill="#46290f"><rect x="22" y="0" width="3" height="240"/><rect x="372" y="0" width="3" height="240"/></g>
  <circle cx="72" cy="46" r="64" fill="url(#m-lamp)"/>
  <line x1="72" y1="22" x2="72" y2="40" stroke="#0b0608" stroke-width="1.5"/>
  <rect x="66" y="38" width="12" height="14" rx="3" fill="#ffd27a"/>

  <!-- пол -->
  <rect y="200" width="400" height="40" fill="#1d1016"/>
  <g fill="#0b0608"><ellipse cx="60" cy="216" rx="12" ry="5"/><ellipse cx="352" cy="224" rx="10" ry="4"/><ellipse cx="300" cy="212" rx="6" ry="3"/></g>

  <!-- порода с золотыми прожилками -->
  <g id="rock">
    <polygon points="118,204 106,152 138,98 200,74 264,100 296,152 286,204" fill="#4a3a44" stroke="#ff9a5a" stroke-opacity="0.3" stroke-width="1"/>
    <polygon points="138,98 200,74 200,130 160,150" fill="#5b4753"/>
    <polygon points="200,74 264,100 240,140 200,130" fill="#3b2d36"/>
    <polygon points="106,152 160,150 150,204 118,204" fill="#3a2c34"/>
    <polygon points="296,152 240,140 250,204 286,204" fill="#55424e"/>
    <g fill="url(#m-vein)">
      <polygon points="168,113 172,118 168,123 164,118"/><polygon points="222,105 226,110 222,115 218,110"/>
      <polygon points="194,156 198,161 194,166 190,161"/><polygon points="252,162 256,167 252,172 248,167"/>
      <polygon points="140,170 144,175 140,180 136,175"/><polygon points="212,186 216,191 212,196 208,191"/>
    </g>
    <g fill="none" stroke="#0b0608" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path id="crack1" opacity="0" d="M196 100 L204 126 L190 146 L200 176"/>
      <path id="crack2" opacity="0" d="M150 130 L176 142 L170 168"/>
      <path id="crack3" opacity="0" d="M250 126 L232 152 L246 180"/>
      <path id="crack4" opacity="0" d="M170 190 L200 176 L228 196"/>
    </g>
  </g>
  <polygon id="glint" opacity="0" points="200,118 207,140 230,148 207,156 200,180 193,156 170,148 193,140" fill="#ffe28a"/>

  <!-- кирка: поворот вокруг рукояти внизу справа (в mineScene.ts) -->
  <g id="pick" class="s">
    <path d="M338,238 L345,238 L307,124 L300,126 Z"/>
    <path d="M268,120 Q302,90 336,120 L330,128 Q302,108 274,128 Z"/>
  </g>
</svg>
`,U=document.getElementById("mineScene");U.innerHTML=Ve;const Ct=document.getElementById("mine"),qt=document.getElementById("town"),Re=document.getElementById("mineInfo"),tt=document.getElementById("mineStatus"),He=document.getElementById("mineBag"),Ye=document.getElementById("mineHit"),Zt=U.querySelector("svg"),Y=t=>U.querySelector("#"+t),Qe=()=>matchMedia("(prefers-reduced-motion: reduce)").matches,Ut="http://www.w3.org/2000/svg",Dt=t=>{var e;return((e=q.find(i=>i.id===t))==null?void 0:e.name)??"Камень"},Tt={x:232,y:176},Ze={small:"#ffe28a",medium:"#ffd24a",large:"#fff3b0"},X=Y("pick");X.style.transformBox="view-box";X.style.transformOrigin="340px 236px";X.style.transform="rotate(10deg)";function Ue(t,e,i=200,n=80){const o=document.createElementNS(Ut,"text");o.textContent=t;for(const[r,a]of Object.entries({x:i,y:n,"text-anchor":"middle","font-size":13,"font-weight":"bold",fill:e,stroke:"#0b0608","stroke-width":.8}))o.setAttribute(r,String(a));o.style.pointerEvents="none",Zt.appendChild(o),o.animate([{transform:"translateY(0)",opacity:1},{transform:"translateY(-30px)",opacity:0}],{duration:900,easing:"ease-out"}).onfinish=()=>o.remove()}function Xe(){for(let t=0;t<4;t++){const e=document.createElementNS(Ut,"circle");for(const[o,r]of Object.entries({cx:Tt.x+(Math.random()-.5)*20,cy:Tt.y+(Math.random()-.5)*10,r:2+Math.random()*2,fill:"#b99a7a"}))e.setAttribute(o,String(r));Zt.appendChild(e);const i=(Math.random()-.5)*36,n=-8-Math.random()*18;e.animate([{transform:"translate(0,0)",opacity:.9},{transform:`translate(${i}px,${n}px)`,opacity:0}],{duration:450,easing:"ease-out"}).onfinish=()=>e.remove()}}function Ke(t){if(Qe())return;if(X.animate([{transform:"rotate(10deg)"},{transform:"rotate(-45deg)",offset:.4},{transform:"rotate(10deg)"}],{duration:200,easing:"ease-out"}),Y("rock").animate([{transform:"translate(0,0)"},{transform:"translate(-3px,1px)",offset:.4},{transform:"translate(2px,-1px)",offset:.7},{transform:"translate(0,0)"}],{duration:180,delay:80}),Y("crack"+(1+Math.floor(Math.random()*4))).animate([{opacity:1},{opacity:0}],{duration:450,delay:80}),Xe(),t.tier!=="trash"){const i=Y("glint");i.setAttribute("fill",Ze[t.tier]),i.style.transformBox="view-box",i.style.transformOrigin="200px 148px",i.animate([{opacity:0,transform:"scale(0.3)"},{opacity:1,transform:"scale(1.15)",offset:.4},{opacity:0,transform:"scale(1.3)"}],{duration:320,delay:100})}}function We(t,e){qt.hidden=!0,Ct.hidden=!1;let i=0,n=0,o=0,r=0;const a=()=>{Re.textContent=`Рудник · осталось ударов: ${t.length-i}`,He.textContent=`В сумке: ${n} золота · находок: ${o}`};return tt.textContent="Бей по породе",a(),new Promise(f=>{const h=new AbortController,d=()=>{const s=performance.now();if(s-r<100||i>=t.length)return;r=s;const c=t[i++];Ke(c),n+=c.gold,c.find&&o++,e(c,i-1),tt.textContent=c.tier==="trash"?`Находка: ${Dt(c.find)}`:`Самородок! +${c.gold} золота`,Ue(c.tier==="trash"?Dt(c.find):`+${c.gold}`,c.tier==="trash"?"#c9b8a8":"#ffd27a"),a(),i>=t.length&&(h.abort(),tt.textContent="Смена окончена",setTimeout(()=>{Ct.hidden=!0,qt.hidden=!1,f()},900))};Ye.addEventListener("pointerdown",d,{signal:h.signal}),U.addEventListener("pointerdown",d,{signal:h.signal}),addEventListener("keydown",s=>{s.code==="Space"&&!s.repeat&&(s.preventDefault(),d())},{signal:h.signal})})}const Xt="tlc-save",Je=7200,Gt=[600,1200,2400],ti=.35,Kt=()=>({v:1,chapter:1,gold:0,rep:0,combo:0,legend:0,prestiges:0,fameBought:0,mineShifts:1,mineAt:Date.now(),finds:{},buildings:{},till:{},managers:{},missionsDone:[],eventsSeen:[],flags:{},tutorialDone:!1,lastSeen:Date.now()}),ei=1e3,rt=(t,e)=>typeof t=="number"&&Number.isFinite(t)?Math.min(Math.max(t,0),e):0,S=(t,e)=>Math.floor(rt(t,e)),G=t=>typeof t=="object"&&t!==null&&!Array.isArray(t)?t:{},ii=/^[A-Za-z0-9_]{1,40}$/,ni=new Set(["__proto__","constructor","prototype"]);function oi(t,e=Date.now()){const i=Kt();if(typeof t!="object"||t===null)return i;const n=t;i.chapter=Math.max(1,S(n.chapter,20)),i.gold=rt(n.gold,1e18),i.rep=S(n.rep,1e9),i.combo=S(n.combo,1e6),i.legend=S(n.legend,1e6),i.prestiges=S(n.prestiges,1e6),i.fameBought=S(n.fameBought,1e3),i.tutorialDone=n.tutorialDone===!0,i.lastSeen=typeof n.lastSeen=="number"&&Number.isFinite(n.lastSeen)?Math.min(Math.max(n.lastSeen,0),e):e,i.mineShifts=typeof n.mineShifts=="number"?S(n.mineShifts,g.maxShifts):i.mineShifts,i.mineAt=typeof n.mineAt=="number"&&Number.isFinite(n.mineAt)?Math.min(Math.max(n.mineAt,0),e):e;const o=G(n.finds);for(const d of q){const s=S(Object.hasOwn(o,d.id)?o[d.id]:0,1e6);s>0&&(i.finds[d.id]=s)}const[r,a,f]=[G(n.buildings),G(n.till),G(n.managers)];for(const d of Object.keys(u)){const s=S(Object.hasOwn(r,d)?r[d]:0,ei);s>0&&(i.buildings[d]=s);const c=rt(Object.hasOwn(a,d)?a[d]:0,1e18);c>0&&(i.till[d]=c),Object.hasOwn(f,d)&&f[d]===!0&&(i.managers[d]=!0)}const h=d=>s=>typeof s=="string"&&d.includes(s);i.missionsDone=Array.isArray(n.missionsDone)?n.missionsDone.filter(h([Pt.id,...$.map(d=>d.id)])):[],i.eventsSeen=Array.isArray(n.eventsSeen)?n.eventsSeen.filter(h(jt.map(d=>d.id))):[];for(const[d,s]of Object.entries(G(n.flags)))ii.test(d)&&!ni.has(d)&&typeof s=="string"&&s.length<=40&&(i.flags[d]=s);return i}function ri(){try{return oi(JSON.parse(localStorage.getItem(Xt)??"null"))}catch{}return Kt()}function b(t){try{localStorage.setItem(Xt,JSON.stringify(t))}catch{}}const gt=(t,e)=>Math.ceil(u[t].cost*pe**e),li=(t,e)=>$.filter(i=>i.building===e&&t.missionsDone.includes(i.id)).reduce((i,n)=>i+(n.incomeBonus??0),0),K=t=>u[t].chapter??1,Wt=t=>dt**(t.chapter-1),Q=(t,e)=>Math.round(e*Wt(t));function ai(t,e){let i=0;for(let n=0;R*n<t;n++)i+=Math.min(R,t-R*n)*dt**(n+e-1);return i}function W(t,e){return u[e].income*ai(t.buildings[e]??0,K(e))*(1+li(t,e))*(1+z*t.legend)}const lt=(t,e)=>Math.max(0,R*(t.chapter-K(e)+1));function Jt(t){const e=Object.keys(u).filter(n=>K(n)<=t.chapter),i=e.reduce((n,o)=>n+lt(t,o),0);return e.reduce((n,o)=>n+Math.min(t.buildings[o]??0,lt(t,o)),0)/i}const ut=t=>Jt(t)>=1;function te(t){return t.tutorialDone?Object.keys(u).reduce((e,i)=>e+W(t,i),0):0}function pt(t,e){const i=u[e];return!(K(e)>t.chapter||i.unlockAfter&&!t.missionsDone.includes(i.unlockAfter)||i.requiresFlag&&!t.flags[i.requiresFlag]&&!((t.buildings[e]??0)>0))}const yt=t=>t.missionsDone.includes("saloon_tribute")||t.flags.mineIntro==="1",T=(t,e)=>$.filter(i=>i.building===e&&i.gate!==void 0&&t.missionsDone.includes(i.id)).length,ee=t=>$.filter(e=>e.building===t&&e.gate!==void 0).length,ie=(t,e)=>T(t,e)<ee(e)?ue[T(t,e)]:lt(t,e),mt=(t,e)=>(t.buildings[e]??0)>=ie(t,e),si=(t,e)=>T(t,e)>=ee(e),ne=(t,e)=>W(t,e)*Gt[Math.min(T(t,e),Gt.length-1)];function oe(t,e){const i=Math.min(Je,Math.max(0,(e-t.lastSeen)/1e3));let n=0,o=0;if(t.tutorialDone)for(const r of Object.keys(u)){const a=W(t,r)*i;if(!a)continue;if(t.managers[r]){t.gold+=a,n+=a;continue}const f=Math.min(a,Math.max(0,ne(t,r)-(t.till[r]??0)));t.till[r]=(t.till[r]??0)+f,o+=f}return t.lastSeen=e,{auto:n,stored:o}}function Nt(t,e){const i=t.till[e]??0;return i<1?0:(t.gold+=i,t.till[e]=0,i)}function bt(t,e){const i=u[e].manager,n=t.buildings[e]??0;return!i||t.managers[e]||n<1?!1:n>=(i.level??1)&&(!i.mission||t.missionsDone.includes(i.mission))}function V(t,e){if((t.buildings[e]??0)<1)return[];const i=$.filter(r=>r.building===e&&r.gate===void 0&&r.finale===void 0&&(r.repeatable||!t.missionsDone.includes(r.id))),n=$.find(r=>r.building===e&&r.gate===T(t,e));n&&!t.missionsDone.includes(n.id)&&mt(t,e)&&i.push(n);const o=$.find(r=>r.building===e&&r.finale===t.chapter&&!t.missionsDone.includes(r.id));return o&&ut(t)&&i.push(o),i}function ci(t,e,i=Math.random){const n=t.buildings[e]??0,o=jt.filter(a=>a.building===e&&(a.minLevel??0)<=n&&!t.eventsSeen.includes(a.id)),r=o.find(a=>a.guaranteed);return r||(o.length&&i()<ti?o[Math.floor(i()*o.length)]:void 0)}function re(t){if(!t.tutorialDone)return null;const e=Object.keys(u),i=e.find(n=>(t.till[n]??0)>=10);if(i&&!t.flags.firstCollect)return{id:i,kind:"collect",text:`Забери выручку: нажми на монеты над зданием — ${u[i].name}`};if(yt(t)&&t.flags.mineIntro!=="1")return{id:"mine",kind:"mine",text:"Загляни в рудник: на улице появился знак «Рудник», Мэй говорит, там можно найти самородок"};for(const n of e){const o=V(t,n).find(r=>r.finale!==void 0);if(o)return{id:n,kind:"mission",text:`Глава ${t.chapter} выполнена на 100%: «${o.title}», ${u[n].name}`}}for(const n of e){const o=u[n];if((t.buildings[n]??0)>0){const r=V(t,n).find(a=>!a.repeatable);if(r){const a=r.gate!==void 0?`${o.name}: достигнут предел уровня, возьми задание на расширение`:`Загляни: ${o.name} — там есть задание`;return{id:n,kind:"mission",text:a}}if(bt(t,n))return{id:n,kind:"hire",text:`Найми менеджера: ${o.manager.name} — ${y(o.manager.cost)} золота (${o.name})`}}else if(pt(t,n)){const r=gt(n,0);return{id:n,kind:"build",text:t.gold>=r?`Построй: ${o.name} — ${y(r)} золота`:`Копи золото: ${o.name} — ${y(r)}`}}}return null}const le=()=>ye,xt=t=>Math.ceil(me*be**t.fameBought*Wt(t)),di=t=>t.fameBought<le()&&t.gold>=xt(t);function fi(t){return di(t)?(t.gold-=xt(t),t.fameBought++,t.rep++,!0):!1}const ae=t=>Math.max(1,Math.floor(Math.sqrt(t/10))),wt=t=>ae(t.rep);function hi(t,e){t.legend+=wt(t),t.prestiges++,t.gold=xe,t.rep=0,t.combo=0,t.fameBought=0,t.buildings={saloon:1},t.till={},t.missionsDone=[],t.eventsSeen=[],t.chapter=1;for(const i of Object.keys(t.flags))/^(ch|ready)\d+$/.test(i)&&delete t.flags[i];t.lastSeen=e}const gi=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" preserveAspectRatio="xMidYMid slice">
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

  <rect width="600" height="150" fill="url(#t-sky)"/>
  <circle cx="300" cy="150" r="80" fill="url(#t-glow)"/>
  <circle cx="300" cy="150" r="26" fill="#ffe3a0"/>
  <g class="cloud" fill="#ff9a5a" opacity="0.4"><rect x="20" y="50" width="110" height="5" rx="2.5"/><rect x="250" y="40" width="120" height="5" rx="2.5"/></g>
  <polygon points="0,150 0,122 30,110 60,120 100,100 140,124 170,150" fill="#5a2347"/>
  <polygon points="230,150 260,126 290,132 330,104 370,120 400,110 400,150" fill="#5a2347"/>
  <polygon points="400,150 400,110 430,124 470,100 520,128 560,108 600,120 600,150" fill="#5a2347"/>
  <g class="cloud" fill="#ff9a5a" opacity="0.4"><rect x="440" y="52" width="110" height="5" rx="2.5"/><rect x="470" y="62" width="70" height="4" rx="2"/></g>
  <rect y="148" width="600" height="92" fill="url(#t-ground)"/>
  <rect y="190" width="600" height="50" fill="#2a1316" opacity="0.55"/>

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
      <circle cx="104" cy="100" r="22" fill="transparent"/>
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
      <circle cx="148" cy="122" r="22" fill="transparent"/>
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
      <circle cx="226" cy="126" r="22" fill="transparent"/>
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
      <circle cx="318" cy="140" r="22" fill="transparent"/>
      <circle cx="318" cy="140" r="9" fill="#ffd27a" stroke="#8a5a1a" stroke-width="1.5"/>
      <text x="318" y="143" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b2415">0</text>
    </g>
    <g id="m-telegraph" class="mk" visibility="hidden"><circle cx="335" cy="92" r="8" fill="#ffd27a"/><text x="335" y="96.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#3b2415">!</text></g>
  </g>


  <!-- банк (глава 2) -->
  <g id="g-bank" data-b="bank" visibility="hidden">
    <rect x="390" y="98" width="96" height="98" fill="transparent"/>
    <g id="b-bank-ruin" class="r">
      <polygon points="398,190 398,168 412,160 424,172 440,164 456,176 472,168 480,190"/>
      <rect x="430" y="150" width="3" height="20"/>
    </g>
    <g id="b-bank-built" class="s" visibility="hidden">
      <rect x="400" y="130" width="76" height="60"/>
      <polygon points="394,130 438,108 482,130"/>
      <rect x="404" y="138" width="5" height="52"/><rect x="420" y="138" width="5" height="52"/><rect x="451" y="138" width="5" height="52"/><rect x="467" y="138" width="5" height="52"/>
      <rect x="428" y="150" width="22" height="40" fill="#3b2415" stroke="none"/>
      <rect x="410" y="142" width="8" height="12" class="lit flick" stroke="none"/><rect x="458" y="142" width="8" height="12" class="lit flick" stroke="none"/>
      <rect x="420" y="116" width="36" height="9" class="lit" stroke="none"/>
    </g>
    <g id="c-bank" data-c="bank" visibility="hidden">
      <circle cx="476" cy="124" r="22" fill="transparent"/>
      <circle cx="476" cy="124" r="9" fill="#ffd27a" stroke="#8a5a1a" stroke-width="1.5"/>
      <text x="476" y="127" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b2415">0</text>
    </g>
    <g id="m-bank" class="mk" visibility="hidden"><circle cx="438" cy="96" r="8" fill="#ffd27a"/><text x="438" y="100.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#3b2415">!</text></g>
  </g>

  <!-- церковь (глава 2) -->
  <g id="g-church" data-b="church" visibility="hidden">
    <rect x="492" y="56" width="94" height="140" fill="transparent"/>
    <g id="b-church-ruin" class="r">
      <polygon points="504,190 504,170 516,162 526,176 540,166 552,178 566,172 572,190"/>
      <rect x="520" y="156" width="3" height="16"/><rect x="514" y="160" width="14" height="3"/>
    </g>
    <g id="b-church-built" class="s" visibility="hidden">
      <rect x="504" y="142" width="64" height="48"/>
      <polygon points="498,142 536,118 574,142"/>
      <rect x="524" y="92" width="24" height="52"/>
      <polygon points="520,92 536,62 552,92"/>
      <rect x="535" y="46" width="2" height="18"/><rect x="530" y="52" width="12" height="2"/>
      <path d="M531 160 q5 -10 10 0 v30 h-10 z" fill="#3b2415" stroke="none"/>
      <rect x="512" y="152" width="8" height="14" rx="4" class="lit flick" stroke="none"/><rect x="552" y="152" width="8" height="14" rx="4" class="lit flick" stroke="none"/>
      <rect x="531" y="100" width="10" height="14" rx="5" class="lit" stroke="none"/>
    </g>
    <g id="c-church" data-c="church" visibility="hidden">
      <circle cx="572" cy="136" r="22" fill="transparent"/>
      <circle cx="572" cy="136" r="9" fill="#ffd27a" stroke="#8a5a1a" stroke-width="1.5"/>
      <text x="572" y="139" text-anchor="middle" font-size="8" font-weight="bold" fill="#3b2415">0</text>
    </g>
    <g id="m-church" class="mk" visibility="hidden"><circle cx="536" cy="38" r="8" fill="#ffd27a"/><text x="536" y="42.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#3b2415">!</text></g>
  </g>

  <!-- вход в рудник: знак на улице, виден после миссии салуна -->
  <g id="mine-sign" data-mine="" visibility="hidden">
    <rect x="296" y="190" width="62" height="50" fill="transparent"/>
    <g class="s">
      <rect x="324" y="206" width="5" height="32"/>
      <rect x="300" y="196" width="54" height="20" rx="2"/>
    </g>
    <text x="327" y="209" text-anchor="middle" font-size="8" font-weight="bold" fill="#ffd27a">РУДНИК</text>
    <path d="M308 213 l38 0" stroke="#ff9a5a" stroke-opacity="0.5" stroke-width="1"/>
    <g id="c-mine" visibility="hidden">
      <circle cx="354" cy="196" r="9" fill="#ffd27a" stroke="#8a5a1a" stroke-width="1.5"/>
      <text x="354" y="199" text-anchor="middle" font-size="9" font-weight="bold" fill="#3b2415">0</text>
    </g>
    <g id="m-mine" class="mk" visibility="hidden"><circle cx="327" cy="184" r="8" fill="#ffd27a"/><text x="327" y="188.5" text-anchor="middle" font-size="12" font-weight="bold" fill="#3b2415">!</text></g>
  </g>
</svg>
`,I=document.getElementById("townScene");I.innerHTML=gi;const Z=I.querySelector("svg"),se=document.getElementById("hud"),ui=document.getElementById("goal"),pi=document.getElementById("chapterTxt"),yi=document.getElementById("chapterFill"),B=document.getElementById("panel"),ce=document.getElementById("fameBtn"),k=t=>I.querySelector("#"+t),at=t=>I.querySelector("#"+t);let E,v=null,J,Ft=null,zt="";function mi(t){E=t,ce.addEventListener("click",()=>{v="fame",st()}),I.addEventListener("click",e=>{var r,a;const i=e.target;if(i.closest("[data-mine]"))return E.mine();const n=(r=i.closest("[data-c]"))==null?void 0:r.getAttribute("data-c");if(n)return E.collect(n);const o=(a=i.closest("[data-b]"))==null?void 0:a.getAttribute("data-b");o&&(v=o,st())}),B.addEventListener("click",e=>{const i=e.target.closest("button"),n=i==null?void 0:i.dataset.act;n==="close"?(v=null,B.hidden=!0):n==="build"?E.build(v):n==="collect"?E.collect(v):n==="hire"?E.hire(v):n==="fame"?E.fame():n==="mission"&&E.mission(i.dataset.id)})}const de=t=>t<1e4?t%1===0?String(t):t.toFixed(1):j(t);function bi(){v=null,B.hidden=!0}function xi(){const t=J,e=le()-t.fameBought,i=xt(t),n=wt(t);B.innerHTML=`<h3>Слава</h3><p>Репутация: ${t.rep} · Легенда: ${t.legend} (+${Math.round(z*t.legend*100)}% к доходу навсегда)</p><p>После защиты банка (финал главы 2) город начнётся заново. Легенда, которую вы получите, зависит от репутации: сейчас +${n} (+${Math.round(n*z*100)}% к доходу).</p>`+(e>0?`<p>Купить известность: ${$t[t.fameBought%$t.length]} (+1 репутации). Осталось покупок: ${e}.</p><button data-act="fame" data-cost="${i}">Купить — ${y(i)}</button>`:"<p>Известность за золото больше не купить: остальное добывается в дуэлях и заданиях.</p>")+'<button data-act="close">Закрыть</button>',B.hidden=!1,C(t)}function st(){var s;if(!v)return;if(v==="fame")return xi();const t=v,e=J,i=u[t],n=e.buildings[t]??0,o=(s=$.find(c=>c.id===i.unlockAfter))==null?void 0:s.title,r=gt(t,n),a=V(e,t),f=$.find(c=>c.finale===e.chapter);let h;pt(e,t)?n>0&&mt(e,t)?h=`<p>Предел уровня главы. ${si(e,t)?ut(e)&&f?`Глава выполнена на 100%: финал ждёт в здании «${u[f.building].name}».`:"Остальные здания главы ещё не достигли предела.":"Выше — только после задания на расширение."}</p>`:h=`<button data-act="build" data-cost="${r}">${n?"Улучшить":"Построить"} — ${y(r)}</button>`:h=`<p>Пока недоступно. ${(i.chapter??1)>e.chapter?"Это здание появится в следующей главе.":i.unlockAfter&&!e.missionsDone.includes(i.unlockAfter)?`Сначала выполни задание «${o}».`:"Сначала сходи в рудник: знак на улице."}</p>`;let d="";if(n>0){const c=i.manager;d=e.managers[t]?`<p>Менеджер: ${c.name} — забирает кассу сам.</p>`:`<p>Касса: ${y(e.till[t]??0)} / ${y(ne(e,t))} <button data-act="collect">Забрать</button></p>`+(bt(e,t)?`<button data-act="hire" data-cost="${c.cost}">Нанять: ${c.name} — ${y(c.cost)}</button>`:"")}B.innerHTML=`<h3>${i.name}${n?` · ур. ${n}/${ie(e,t)}`:" (руины)"}</h3><p>${i.desc}</p>`+(n?`<p>Доход: +${de(W(e,t))}/с</p>`:"")+d+h+a.map(c=>`<p><b>${c.title}</b><br>${c.blurb}</p><button data-act="mission" data-id="${c.id}">${c.finale!==void 0?"Начать финал главы":"Взять задание"}</button>`).join("")+(!a.length&&n?"<p>Заданий пока нет.</p>":"")+'<button data-act="close">Закрыть</button>',B.hidden=!1,C(e)}function C(t){var r;J=t;const e=Object.values(t.till).reduce((a,f)=>a+f,0);se.textContent=`Золото: ${y(t.gold)} · +${de(te(t))}/с · Репутация: ${t.rep}`+(e>=1?` · в кассах: ${j(e)}`:""),ce.hidden=!t.tutorialDone;const i=Jt(t);pi.textContent=`Глава ${t.chapter}: ${Math.floor(i*100)}%`,yi.style.width=`${i*100}%`;const n=re(t);ui.textContent=((n==null?void 0:n.text)??"")+(n&&(((r=kt[n.id])==null?void 0:r[0])??0)>380?" (город прокручивается вправо)":"");for(const a of Object.keys(u)){const f=V(t,a).some(c=>!c.repeatable),h=(n==null?void 0:n.id)===a?{build:"+",hire:"+",mission:"!",collect:"$",mine:"!"}[n.kind]:f?"!":"";k(`m-${a}`).setAttribute("visibility",h?"visible":"hidden"),h&&(k(`m-${a}`).querySelector("text").textContent=h);const d=t.till[a]??0,s=d>=1&&!t.managers[a];k(`c-${a}`).setAttribute("visibility",s?"visible":"hidden"),s&&(k(`c-${a}`).querySelector("text").textContent=j(d))}const o=yt(t);Ft===!1&&o&&vt("mine","Рудник!","#ffffff"),Ft=o,k("mine-sign").setAttribute("visibility",o?"visible":"hidden"),k("c-mine").setAttribute("visibility",o&&t.mineShifts>=1?"visible":"hidden"),k("c-mine").querySelector("text").textContent=String(t.mineShifts),k("m-mine").setAttribute("visibility",(n==null?void 0:n.kind)==="mine"?"visible":"hidden"),B.querySelectorAll("button[data-cost]").forEach(a=>{a.disabled=t.gold<Number(a.dataset.cost)})}function M(t){var i,n;J=t;const e=t.chapter>=2;Z.setAttribute("viewBox",e?"0 0 600 240":"0 0 400 240"),Z.style.width=e?"150%":"100%";for(const o of Object.keys(u)){const r=(t.buildings[o]??0)>0,a=T(t,o);(i=at(`g-${o}`))==null||i.setAttribute("visibility",(u[o].chapter??1)<=t.chapter?"visible":"hidden"),k(`b-${o}-ruin`).setAttribute("visibility",r?"hidden":"visible"),k(`b-${o}-built`).setAttribute("visibility",r?"visible":"hidden");for(const f of[1,2])(n=at(`b-${o}-s${f}`))==null||n.setAttribute("visibility",r&&a>=f?"visible":"hidden")}C(t),st(),wi(t)}function wi(t){const e=re(t),i=e?`${e.id}:${e.kind}`:"";if(i===zt)return;zt=i;const n=e&&kt[e.id];if(!n||t.chapter<2)return;const o=Z.getBoundingClientRect().width/600;I.scrollTo({left:Math.max(0,n[0]*o-I.clientWidth/2),behavior:"smooth"})}const kt={saloon:[72,96],smithy:[166,118],sheriff:[247,120],telegraph:[335,128],mine:[327,190],bank:[438,96],church:[536,56]};function vt(t,e,i="#ffd27a"){const[n,o]=kt[t],r=document.createElementNS("http://www.w3.org/2000/svg","text");r.textContent=e;for(const[a,f]of Object.entries({x:n,y:o,"text-anchor":"middle","font-size":11,"font-weight":"bold",fill:i,stroke:"#2a1316","stroke-width":.6}))r.setAttribute(a,String(f));r.style.pointerEvents="none",Z.appendChild(r),r.animate([{transform:"translateY(0)",opacity:1},{transform:"translateY(-26px)",opacity:0}],{duration:1100,easing:"ease-out"}).onfinish=()=>r.remove()}function ki(t,e){vt(t,`+${j(e)}`),se.animate([{transform:"scale(1)"},{transform:"scale(1.08)"},{transform:"scale(1)"}],{duration:220})}function fe(t,e){for(const i of["built","s1","s2"]){const n=at(`b-${t}-${i}`);!n||n.getAttribute("visibility")!=="visible"||(n.style.transformBox="fill-box",n.style.transformOrigin="50% 100%",n.animate([{transform:"scale(0.88,0.72)"},{transform:"scale(1.06,1.1)"},{transform:"scale(1)"}],{duration:450,easing:"ease-out"}))}vt(t,e,"#ffffff")}const l=ri();let p=!1;const vi=t=>t.replace(/\(([+-]?)(\d+)\)/,(e,i,n)=>`(${i}${y(Q(l,Number(n)))})`);async function ct(t){var e;p=!0;for(const i of t.steps)if(!(i.when&&l.flags[i.when[0]]!==i.when[1]))if("say"in i)await w(i.say);else if("choice"in i){const n=i.choice;l.flags[n.id]=n.options[await A(n.q,n.options.map(o=>vi(o.label)))].value}else if("set"in i)l.flags[i.set[0]]=i.set[1];else if("reward"in i)l.gold=Math.max(0,l.gold+Q(l,i.reward.gold??0)),l.rep=Math.max(0,l.rep+(i.reward.rep??0)),C(l);else for(;;){const n=await Ht(i.duel),o=Vt(n.shot,l.combo);if(l.gold+=Q(l,o.gold),l.rep=Math.max(0,l.rep+o.rep),l.combo=o.combo,C(l),n.win)break;await A(n.shot==="foul"?"Слишком рано! Репутация падает. Соберись и попробуй ещё раз.":"Противник оказался быстрее. Ничего, ещё раз.",["Ещё раз"])}t.event?l.eventsSeen.push(t.id):t.repeatable||l.missionsDone.push(t.id),(e=t.onDone)==null||e.call(t,l),b(l),M(l),t.gate!==void 0&&fe(t.building,"Расширено!"),t.after&&await w(t.after),p=!1}async function Mi(){p=!0,bi();const t=wt(l);hi(l,Date.now()),b(l),M(l),await w([`Новая территория: ${St[l.prestiges%St.length]}. Легенда +${t}: доход растёт на ${t*Math.round(z*100)}% навсегда.`,"Менеджеры остались с вами и снова собирают выручку. Салун отстроен заново, а находки из рудника остались в вашей коллекции."]),p=!1}async function $i(){if(!p){p=!0;try{ht(l,Date.now());const t=l.flags.mineIntro!=="1";if(!t&&l.mineShifts<1){const s=Math.ceil(ze(l,Date.now())/1e3);await A(`Смена в руднике уже была. Следующая будет через ${Math.floor(s/60)} мин ${s%60} с.`,["Понятно"]);return}const e=t?_t.intro:`Смен в запасе: ${l.mineShifts}. Идём в шахту?`;if(await A(e,["В шахту","Позже"])!==0)return;t||Fe(l,Date.now()),b(l),C(l);const i=te(l),n=Ne(Math.random,i,t),o={};let r=0;await We(n,s=>{r+=s.gold,s.find&&(l.finds[s.find]=(l.finds[s.find]??0)+1,o[s.find]=(o[s.find]??0)+1,b(l))}),b(l);const a=s=>{l.gold+=s,b(l),M(l)},f=Object.entries(o).map(([s,c])=>{var Mt;return`${((Mt=q.find(ge=>ge.id===s))==null?void 0:Mt.name)??s} ×${c}`}).join(", ")||"ничего, кроме пыли";if(t){l.flags.mineIntro="1",a(r),await w([`Среди породы блеснул самородок! Находки: ${f}. В кошелёк легло ${y(r)} золота.`,_t.tutorialDone]);return}if(r<=0){await w([`Одни камни: ${f}. Золота в этот раз нет.`]);return}if(await w([`Смена окончена. Находки: ${f}. В сумке ${y(r)} золота.`]),Math.random()>=Pe(r,i)){a(r),await w([`Вы вышли из шахты без происшествий. В кошелёк легло ${y(r)} золота.`]);return}const h=je(r,i),d=await A(`У выхода из шахты вас ждут бандиты: ${h} человек, и они знают про добычу. Что делаете?`,["Драться",`Откупиться (потерять ${Math.round(g.payoff*100)}% добычи)`,"Бросить добычу и уйти"]);if(d===1){const s=Math.floor(r*(1-g.payoff));a(s),await w([`Бандиты забрали свою долю. В кошелёк легло ${y(s)} золота.`])}else if(d===2)await w(["Вы бросили сумку и скрылись в темноте. Добыча осталась бандитам, кошелёк цел."]);else{const s=await Ht({place:"mine",foe:"Бандиты",kind:"gang",rounds:h,reason:"Бандиты выходят из тени у входа в шахту. Они пришли не разговаривать.",perfectMs:g.duel.perfectMs,goodMs:g.duel.goodMs}),c=Vt(s.shot,l.combo);l.gold+=Q(l,c.gold),l.rep=Math.max(0,l.rep+c.rep),l.combo=c.combo,s.win?(a(r),await w([`Бандиты разбежались. В кошелёк легло ${y(r)} золота.`])):(b(l),M(l),await w(["Бандиты оказались быстрее. Добыча пропала, но кошелёк цел."]))}}finally{p=!1}}}async function he(){const t=`ready${l.chapter}`;!ut(l)||l.flags[t]||(l.flags[t]="done",b(l),p=!0,await w(we[l.chapter]??[]),p=!1)}mi({mine(){$i()},async build(t){const e=l.buildings[t]??0,i=gt(t,e);if(p||l.gold<i||!pt(l,t)||e>0&&mt(l,t))return;l.gold-=i,l.buildings[t]=e+1,b(l),M(l),fe(t,e?`Ур. ${e+1}`:"Построено!");const n=ci(l,t);n&&await ct(n),await he()},mission(t){if(p)return;const e=$.find(i=>i.id===t);!e||!V(l,e.building).includes(e)||(async()=>{if(e.prestige){const i=e.steps.reduce((r,a)=>"reward"in a?r+(a.reward.rep??0):r,0),n=ae(l.rep+i);p=!0;const o=await A(`После победы город начнётся заново на новой территории. Вы получите Легенду не меньше +${n} (+${n*Math.round(z*100)}% к доходу навсегда); менеджеры и находки останутся. Легенда зависит от репутации (сейчас ${l.rep}): её можно докупить в разделе «Слава» или добыть в дуэлях. Если проиграете раунд, схватка начнётся с первого. Начинаем защиту?`,["Начать защиту","Подготовиться ещё"]);if(p=!1,o!==0)return}await ct(e),e.prestige&&await Mi()})()},collect(t){if(p)return;const e=Nt(l,t);e&&(l.flags.firstCollect="1",b(l),M(l),ki(t,e))},fame(){p||!fi(l)||(b(l),M(l))},async hire(t){const e=u[t].manager;p||!e||!bt(l,t)||l.gold<e.cost||(p=!0,Nt(l,t),l.gold-=e.cost,l.managers[t]=!0,b(l),M(l),await w([e.line]),p=!1)}});setInterval(()=>{const t=Date.now();oe(l,t),yt(l)?ht(l,t):l.mineAt=t,C(l)},250);setInterval(()=>b(l),1e4);document.addEventListener("visibilitychange",()=>{document.hidden&&b(l)});M(l);(async()=>{if(!l.tutorialDone)return void await ct(Pt);const{auto:t,stored:e}=oe(l,Date.now()),i=[];t>=1&&i.push(`менеджеры собрали ${y(t)} золота`),e>=1&&i.push(`в кассах ждёт ${y(e)} золота`),M(l),i.length&&await A(`Пока тебя не было: ${i.join(", ")}.`,["Отлично"]),await he()})();
