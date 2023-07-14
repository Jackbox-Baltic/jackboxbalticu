
// header
const div = document.createElement('div');
const ul = document.createElement('ul');

function createNavbar() {

  const left = document.createElement('div');
  left.className = 'ldiv';
  left.id = 'ldiv';

  const warnspan = document.createElement('span');
  warnspan.className = 'tooltiptext';
  warnspan.textContent = 'This site is not affiliated with Jackbox Games. Jackbox Games and the Jackbox Games logos are registered trademarks of Jackbox Games, Inc. All logos, images and videos displayed on this site may be trademarks of Jackbox Games, Inc. All other trademarks and logos are the property of their respective owners.';

  const warna = document.createElement('a');
  warna.id = 'warna';
  warna.innerHTML = '❗';
  warna.className = 'bang';
  warna.appendChild(warnspan);

  const warnli = document.createElement('li');
  warnli.className = 'centerli';
  warnli.appendChild(warna);


  const lbtn = document.createElement('a');
  lbtn.id = 'lbtn';
  lbtn.innerHTML = '🌐';
  lbtn.className = 'toggle toggle-lang';

  const lbtnli = document.createElement('li');
  lbtnli.className = 'centerli';
  lbtnli.appendChild(lbtn);

  
  const ee = document.createElement('a');
  ee.id = 'lang-ee';
  ee.textContent = 'Eesti';

  const lv = document.createElement('a');
  lv.id = 'lang-lv';
  lv.textContent = 'Latviešu';

  const lt = document.createElement('a');
  lt.id = 'lang-lt';
  lt.textContent = 'Lithuanian';

  const divlang = document.createElement('div');
  divlang.className = 'dropdown-content';
  divlang.appendChild(ee);
  divlang.appendChild(lv);
  divlang.appendChild(lt);


  const tct = document.createElement('a');
  tct.id = 'tct';
  tct.className = 'toggle toggle-theme';

  const tctli = document.createElement('li');
  tctli.className = 'centerli';
  tctli.appendChild(tct);

  div.appendChild(divlang);
  div.appendChild(warnli);
  div.appendChild(lbtnli);
  div.appendChild(tctli);

  ul.appendChild(left);
  ul.appendChild(div);

  return ul;

}

if (document.querySelector('header')) {
	const navbar = createNavbar();
	document.querySelector('header').appendChild(navbar);

  let clickdrop;

  var dropdownContent = document.querySelector('.dropdown-content');

  document.getElementById('lbtn').addEventListener('click', function() {
    if (!clickdrop) {
      dropdownContent.style.display = 'block';
      clickdrop = true;
    } else {
      dropdownContent.style.display = 'none';
      clickdrop = false;
    }
  });

  document.addEventListener('click', function(event) {
      var targetElement = event.target;
      var lbtnElement = document.getElementById('lbtn');
      
      if (targetElement !== lbtnElement) {
        dropdownContent.style.display = 'none';
        clickdrop = false;
      }
  });

  document.getElementById('lang-ee').addEventListener('click', function() {
      dropdownContent.style.display = 'none';
      clickdrop = false;
  });

  document.getElementById('lang-lv').addEventListener('click', function() {
      dropdownContent.style.display = 'none';
      clickdrop = false;
  });

  document.getElementById('lang-lt').addEventListener('click', function() {
      dropdownContent.style.display = 'none';
      clickdrop = false;
  });
}


// TCT

const tct = document.querySelectorAll("#tct");

tct.forEach(function(tct) {
	if (tct) {
		function ladtheme() {
			const toggleTheme = document.querySelectorAll('.toggle-theme')
			console.log('.toggle-theme is found!')
			let el = document.documentElement
			console.log('tct atrasts!')

			for (var i = 0; i < toggleTheme.length; i++) {
				toggleTheme[i].addEventListener('click', function() {
					console.log('nospiedis');
					if (el.hasAttribute('data-theme')) {
						el.removeAttribute('data-theme');
						console.log('The light theme has been turned on!');
						//x.classList.remove("lang-toggleladoff");
						//x.classList.add("lang-toggleladon");
						tct.innerHTML = '🌛';
						localStorage.removeItem('theme');
						console.log('Item removed from local storage');
					} else {
						el.setAttribute('data-theme', 'dark');
						console.log('The dark theme has been turned on!');
						//x.classList.remove("lang-toggleladon");
						//x.classList.add("lang-toggleladoff");
						tct.innerHTML = '🌞';
						localStorage.setItem('theme', 'dark');
						console.log('Item added in local storage');
					}
				})
			}

			if (localStorage.getItem('theme') !== null) {
				el.setAttribute('data-theme', 'dark');
				//x.classList.add("lang-toggleladoff");
				tct.innerHTML = '🌞';
			} else {
				//x.classList.add("lang-toggleladon");
				tct.innerHTML = '🌛';
			}
		}
		ladtheme()
		console.log('LAD working!');
	} else {
		alert('LAD not working');
	}
});



// LANGUAGE

const tjpp3lv = [{
  title: "Smiekcirte 2",
  status: "Nav tulkots",
  image: "Quiplash2Game",
  description: "\"Saki jebko\" turpinājums. Spēlējiet visus jaunus jautājumus vai izveidojiet savus!"
},
{
  title: "Viktorīna nāvējošā ballītē",
  status: "Nav tulkots",
  image: "TriviaDeathResults",
  description: "Nāvējošs viktorīnas šovs, kurā jūs sacenšaties asprātībā pret nieka apsēstu slepkavu."
},
{
  title: "Minspiegošana",
  status: "Nav tulkots",
  image: "Guess",
  description: "Minēšanas spēle, kurā jums ir jāuzzina rezultāti, kas iegūti, analizējot datus par citiem cilvēkiem."
},
{
  title: "Tēlo lomu",
  status: "Nav tulkots",
  image: "FakinIt",
  description: "Vienam no taviem draugiem ir kaut kas slēpjams šajā viltīgajā spēlē, kas paredzēta viltniekiem."
},
{
  title: "Kre K.O.",
  status: "Tulkots",
  image: "TeeKOGame",
  description: "T-kreklu kautiņš, kurā tu cīnies ar saviem pielāgotajiem t-krekliem līdz nāvei!"
}
];

const tjpslv = [{
  title: "Smiekcirte 3",
  status: "Nav tulkots",
  image: "quiplash3Game",
  description: ""
},
{
  title: "Kre K.O.",
  status: "Tulkots",
  image: "TeeKOGame",
  description: ""
},
{
  title: "Viktorīna nāvējošā ballītē 2",
  status: "Nav tulkots",
  image: "TriviaDeath2Game",
  description: ""
}
];

function tjpsg(text) {
return `
<div class="past-game home">
  <a class="card">
    <div class="content">
        <p class="name">${text.title}</p>
        <p class="date">${text.status}</p>
      </div>
    <div class="image fallback ${text.image}"></div>
    <div class="content">
        <p class="text">${text.description}</p>
    </div>
  </a>
</div>
`;
}

const gamesDatalv = [/*{
  href: "",
  image: "tjpp",
  name: "The Jackbox Party Pack",
  span: "",
  date: "",
  new: "",
  view: "",
  cp: "open-popup",
},
{
  href: "",
  image: "tjpp2",
  name: "The Jackbox Party Pack 2",
  span: "",
  date: "",
  new: "",
  view: "",
  cp: "open-popup",
},*/
{
  href: "href=\"tjpp3.html\"",
  image: "tjpp3",
  name: "The Jackbox Party Pack 3",
  span: "",
  date: "LV",
  new: "",
  view: "",
},/*
{
  href: "",
  image: "tjpp4",
  name: "The Jackbox Party Pack 4",
  span: "",
  date: "",
  new: "",
  view: "",
  cp: "open-popup",
},
{
  href: "",
  image: "tjpp5",
  name: "The Jackbox Party Pack 5",
  span: "",
  date: "",
  new: "",
  view: "",
  cp: "open-popup",
},
{
  href: "",
  image: "tjpp6",
  name: "The Jackbox Party Pack 6",
  span: "",
  date: "",
  new: "",
  view: "",
  cp: "open-popup",
},
{
  href: "",
  image: "tjpp7",
  name: "The Jackbox Party Pack 7",
  span: "",
  date: "",
  new: "",
  view: "",
  cp: "open-popup",
},
{
  href: "",
  image: "tjpp8",
  name: "The Jackbox Party Pack 8",
  span: "",
  date: "",
  new: "",
  view: "",
  cp: "open-popup",
},*/
{
  href: "href=\"tjps.html\"",
  image: "tjps",
  name: "The Jackbox Party Starter",
  span: "",
  date: "LV",
  new: "",
  view: ""
}/*,
{
  href: "",
  image: "tjpp9",
  name: "The Jackbox Party Pack 9",
  span: "",
  date: "",
  new: "<p data-v-556a942f=\"\" class=\"new\">NEW</p>",
  view: "<p data-v-556a942f=\"\" class=\"cta\">VIEW THIS GAME <svg data-v-556a942f=\"\" class=\"external-icon\" viewBox=\"0 0 200 200\"><path d=\"M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15S87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z\"></path><path d=\"M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z\"></path></svg></p>",
  cp: "open-popup",
}*/
];

const gamessadDataen = [{
  nttext: "At the moment, we don't have a translation. But you can help join the translation team!",
  ds: "DISCORD SERVER"
  }];
  
  const gamessadDataee = [{
  nttext: "Hetkel meil ei ole tõlkeid, aga võid meie tõlketiimiga ühineda!",
  ds: "DISCORDI SERVER"
  }];
  
  const gamessadDatalv = [{
  nttext: "Šobrīd mums nav tulkojuma. Bet tu vari palīdzēt pievienoties tulkošanas komandai!",
  ds: "DISCORD SERVERIS"
  }];
  
  const gamessadDatalt = [{}];
  
  function gamessad(text) {
  return `
    <div class="nongames">
      <p class="pipib">${text.nttext}</p>
      <li class="b">
        <a href="https://discord.gg/TNK3wsHHUW" target="_blank" class="lang-ds">${text.ds}<div style="border: 3px solid var(--bgrecent);" class="indicator"></div></a>
      </li>
    </div>
  `;
  }

const newgamesDataee = [{}];

const newgamesDatalv = [
  {
    href: "href=\"games/tjps.html\"",
    image: "TeeKOGame",
    name: "Kre K.O.",
    span: "THE JACKBOX PARTY STARTER",
    date: "2023. gada 01. jūlijs",
    new: "<p class=\"new\">JAUNS</p>",
    view: "<p class=\"cta\">APLŪKOT ŠO SPĒLI <svg data-v-556a942f=\"\" class=\"external-icon\" viewBox=\"0 0 200 200\"><path d=\"M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15S87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z\"></path><path d=\"M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z\"></path></svg></p>"
  },
  {
    href: "href=\"games/tjpp3.html\"",
    image: "TeeKOGame",
    name: "Kre K.O.",
    span: "THE JACKBOX PARTY PACK 3",
    date: "2022. gada 21. decembris",
    new: "<p data-v-556a942f=\"\" class=\"new\">JAUNS</p>",
    view: "<p data-v-556a942f=\"\" class=\"cta\">APLŪKOT ŠO SPĒLI <svg data-v-556a942f=\"\" class=\"external-icon\" viewBox=\"0 0 200 200\"><path d=\"M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15S87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z\"></path><path d=\"M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z\"></path></svg></p>"
  }
];

const newgamesDatalt = [{}];

function newgames(text) {
return `
<div class="past-game home ${text.cp}">
  <a ${text.href} class="card">
    <div class="image fallback ${text.image}"></div>
    ${text.view}
    <div class="content">
      <p class="name2">${text.name}</p>
      <p class="date2">
        <span >${text.span}</span>${text.date}
      </p>
    </div>
    ${text.new}
  </a>
</div>
`;
}
const ldivee = [
  {
    manual: "kuidas mängida",
    faq: "KKK",
    games: 'mängud',
  }
];
const ldivlv = [
  {
    manual: "kā spēlēt",
    faq: "BUJ",
    games: 'spēles',
  }
];
const ldivlt = [
  {
    faq: "DUK",
    games: 'žaidimai',
  }
];

function ldiv(text) {
return `
  <li class="centerli">
    <a href="../index.html" class="l">　　</a>
  </li>
  <li class="centerli">
    <a href="../games/index.html" class="lang-games">${text.games}</a>
  </li>
  <li class="centerli">
    <a href="../faq.html" class="lang-titlefaq">${text.faq}</a>
  </li>
  <li class="centerli">
    <a href="../manual.html" class="lang-manual">${text.manual}</a>
  </li>
`;
}


const langArr = {
en: {
    ds: 'DISCORD SERVER',
    test: 'Text',
    modaloops: 'Oops...',
    toggleladon: 'TURN ON DARK THEME',
    toggleladoff: 'TURN ON LIGHT THEME',
    modalsubtext: 'At the moment, the site is still not ready. Clicking on "OK" will take you to the English version.',
    havefun: 'What language do you want to have fun in?',
    faq: 'faq',
    news: 'news',
    games: 'games',
    site: 'Site: ',
    titlefaq: 'FAQ',
    titlenews: 'News',
    titlegames: 'Games',
    tjppd: 'Long gone are quiet nights in watching the same old TV shows – The Jackbox Party Pack is here! Experience five fun games in one great pack – giving you the perfect excuse for rounding up friends, family and fellow gamers for a few hours of gaming delight – whatever the day, whatever the occasion. You’re gonna need more than one party for this.',
    download: 'Download translation',
    downloadrn: 'Download translation right now!',
    statust: 'Translated',
    statusdnt: 'Not translated',
    statusip: 'In process',
    screenblocker: 'Unfortunately, this screen scale isn\'t supported!',
    aboutus: 'about us',
    titleaboutus: 'About Us',
    csoon: 'Coming Soon',
    stext: 'Status',
    view: 'VIEW THIS GAME',
    MMXXYYYY: 'MONTH XX, YEAR',

    welcome: "Welcome!",
    jackboxbaltic: "<strong>Jackbox Baltic United</strong> is the site where we upload unofficial Estonian, Latvian and Lithuanian translations for the games of Jackbox Games, known for being the creators of the Jackbox Party Pack. We are just starting our way into localization of games, so you can help us by joining our team on the discord server!",
    aboutjg: "About Jackbox Games",
    aboutjgd: "<strong>Jackbox Games</strong> is a small game production studio from Chicago (Illinois). The most famous franchise - You Don't Know Jack - has been released since 1995, and even existed as a TV show. Being a part of Jellyvision, in 2013 the company separated and was named Jackbox Games. In addition to The Jackbox Party Pack franchise, a variety of games are released, for example - Quiplash, Fibbage, Trivia Murder Party.",
    cons: "Contributors",
    ttcons: "Text Translators",
    tecons: "Technical Editor",
    fwcons: "Font Worker",
    gcons: "Graphics",
    sthanks: "Special Thanks",
    cont: "Contact",
    contd: "If you have a question, a suggestion or just want to chat, the best way to get in touch is via:",
    ds: "DISCORD SERVER",
    from: "from",
    rtg: "Recently translated game(s)",
    discorddi: "Jackbox Baltic United is the site where we upload unofficial Estonian, Latvian, and Lithuanian translations for the games of Jackbox Games, known for being the creators of the Jackbox Party Pack. We are just starting our way into game localization, so you can help us by joining our team on the Discord server!",

    howtoplay: "HOW TO PLAY?",
    howtoplayd: "So, you want to play Jackbox Games! Great choice.",
    space: "　",
    s1t1: "Getting started is easy! For Jackbox games, your phone or tablet is the controller and up to 8 people can play. Sometimes more! The main action of the game happens on your TV (or wherever you launched the game), but players use their own mobile devices to input answers and make choices.",
    s1t2: "All Jackbox games are rated T For Teen. Many games have a family-friendly mode that can be turned on in the game’s settings menu, which brings the game closer to an E10+ rating!",
    s1t3: "Remember, only one person in your group needs to own a Jackbox product in order to host the game.",
    s1img: "./assets/images/05_OneOwnerToHost.jpg",
    s2h1: "LAUNCH THE GAME AND GRAB A MOBILE DEVICE",
    s2t1: "Once you launch and pick the game you want to play, you’ll see a four-letter room code in the lobby.",
    s2t2: "To join, each player uses their phone or tablet and goes to jackbox.uno, then choose the language you are playing in, using whatever web browser you normally use.",
    s2img1: "./assets/images/07_RoomCode.jpg",
    s2img2: "./assets/images/08_ControllerWebsite.jpg",
    s3h1: "ENTER THE ROOM CODE AT JACKBOX.UNO",
    s3t1: "Once you’re there, enter that four-letter room code on your mobile device.",
    s3t2: "Then, enter whatever name you want to use in the game. Hit the PLAY button, and you should be connected!",
    s3t3: "In The Jackbox Party Pack 9, you can also connect by pointing your phone camera at the QR code in the lobby and then following the URL that appears.",
    s3t4: "If you get disconnected during a game, refresh your browser. This fixes most disconnects!",
    s3img1: "./assets/images/10_EnterRoomCode.jpg",
    s3img2: "./assets/images/11_EnterName.jpg",
    s3img3: "./assets/images/12_PressPlay.jpg",
    s4h1: "START PLAYING!",
    s4t1: "The very first person to connect is the VIP. When everyone who wants to play is connected and ready, the VIP can start the game from their device.",
    s4t2: "If you’ve enabled the “Start Game from Controller Only” setting (in the game’s settings menu), you’ll need to press the button shown onscreen to begin.",
    s4t3: "NOTE: “Everybody’s In” or “Start Game” will only appear on the screen if you have enough players to begin a game.",
    s4img: "./assets/images/13_FirstIsVIP.jpg",

    help: "Help",
    faqtext: "Frequently Asked Questions",
    q1: "Why do I get a black screen after installing my translation?",
    a1: "If the screen goes black after installing the translation, it means that your version is pirated. Pirated versions are often outdated and do not have the same file structure as current versions. We can only encourage you to get a legitimate version.",
    q2: "I want to play. Where do I get the room code?",
    a2: "<p>There are two options:</p><ul><li><strong>to start yourself</strong> – you need to buy the game on Steam, install <a href=\"games/index.html\">our translation</a> and then proceed according to <a href=\"/future/manual.html\">the manual</a>.<!--If there is no company or friends, then look <a href=\"finder.html\">here</a>.--></li><li><!--<a href=\"finder.html\">--><strong>to find someone else's game</strong><!--</a>--> — you DON't need to buy and install the game, just find out the room code and go through <a href=\"https://jackbox.uno\">jackbox.uno</a>, then watch the gameplay where you got the code.</li></ul><p>Once again: the purchased and installed game is needed only by the one who starts (the host).<br>He and the rest of the participants join the game from their browsers (phones, tablets or computers) via <a href=\"https://jackbox.uno\">Jackbox.UNO</a>, you don't need to install anything else.</p>",
    q3: "I bought a Party Pack on the Epic Games Store, how do I download the translation?",
    a3: "Apologies, but we are currently doing translations of the Steam version.",
    q4: "I found an error in one of the translations. Where can I report it?",
    a4: "In the <span class=\"discord\">🔹︙mistakes</span> channel of <a href=\"https://discord.gg/TNK3wsHHUW\">the Discord server</a>. <br>If possible, do not skimp on the details. This makes it easier to find the problem.",

    tjpsd: "Jackbox Party Starter is an indispensable party game! This pack contains three updated games: Quiplash 3, Tee K.O. and Trivia Murder Party 2.",
    tjppstext: "Our translation is released for Windows OS based version of Steam (+ Humble/Fanatical). Other platforms (Epic Games) have not been tested.<br>On this page you can get a modification that adds a language to the game. Please note that not all games are translated and there may be errors or inaccuracies. However you can help us by entering the Discord Server. <br>To download the translation you need to have the game on Steam. We do not support piracy and will not help!",
    tjpp3d: "The threequel to the party game phenomenon features the deadly quiz show Trivia Murder Party, the say-anything sequel Quiplash 2, the surprising survey game Guesspionage, the t-shirt slugfest Tee K.O., and the sneaky trickster game Fakin’ It.",
  },
ee: {
  lang: 'Eesti',
    ds: 'DISCORDI SERVER',
    test: 'Tekst',
    modaloops: 'Ups...',
    toggleladon: 'TUME REŽIIM',
    toggleladoff: 'HELE REŽIIM',
    modalsubtext: 'Sait ei ole veel valmis. "OK" nupp suunab sind töötavale inglisekeelsele saidile.',
    havefun: 'Lõbutsege!',
    faq: 'kkk',
    news: 'uudised',
    games: 'mängud',
    site: 'Kodu: ',
    titlefaq: 'KKK',
    titlenews: 'Uudised',
    titlegames: 'Mängud',
    tjppd: 'Vaiksed õhtud vanu telesarju vaadates on minevik, sest nüüd on võimalik saada endale Jackbox Party Pack! Naudi viis erinevat peomängu ühes - ideaalne vabandus sõprade, pere või muu seltskonna kokkukutsumiseks, et veeta mõni tund lahedalt mängides - sõltumata päevast ja sündmusest. Sul on vaja rohkem kui ühte pidu selleks.',
    download: 'Lae tõlge alla',
    downloadrn: 'Lae tõlge kohe alla!',
    statust: 'Tõlgitud',
    statusdnt: 'Tõlkimata',
    statusip: 'Töös',
    screenblocker: 'Kahjuks seda ekraanisuurust ei toetata!',
    aboutus: 'meist',
    titleaboutus: 'Meist',
    csoon: 'Varsti tulekul',
    stext: 'Staatus',
    view: 'VAATA',
    MMXXYYYY: 'XX. MONTH, YEAR',
    oopsd: "At the moment, we don't have a translation of this game.",
    pity: "PITY",

    welcome: "Tere tulemast!",
    jackboxbaltic: "<strong>Jackbox Baltic United</strong> on veebileht, kuhu me laeme üles mitteametlikud eesti-, läti- ja leedukeelsed tõlked Jackbox Games mängudele, tuntud kui Jackbox Party Pack'i loojad. Oleme alles oma tõlketeekonna alguses, seega võid meile appi tulla meie Discordi serveris!",
    aboutjg: "Mis on Jackbox Games",
    aboutjgd: "<strong>Jackbox Games</strong> on Chicagos asuv väike mängutegijate stuudio. Nende kuulsaim frantsiis - Sa ei tea mitte Essugi - on avaldatud alates 1995. aastast, mille all oli ka kunagi telesaade. 2013. aastal, olles seni olnud osa firmast Jellyvision, registreeris Jackbox Games ennast eraldi firmaks. Lisaks Jackbox Party Pack frantsiisile on stuudio mitmeid erinevaid mänge avaldanud, nende seas Kavalusekott, Luiskard ja Mõrvaviktoriinipralle.",
    cons: "Panustajad",
    ttcons: "Tõlkijad",
    tecons: "Tehnilised toimetajad",
    fwcons: "Fontide arendaja",
    gcons: "Graafiline disainer",
    sthanks: "Suured tänud",
    cont: "Kontakt",
    contd: "Küsimuste või ettepanekute puhul saab ühendust meiega:",
    ds: "DISCORDI SERVER",
    from: "tiimist",
    rtg: "Hiljuti tõlgitud mäng(ud)",
    discorddi: "Jackbox Baltic United on veebileht, kuhu me laeme üles mitteametlikud eesti-, läti- ja leedukeelsed tõlked Jackbox Games mängudele, tuntud ka kui Jackbox Party Packi loojatena. Oleme alles oma tõlketeekonna alguses, seega võid meile appi tulla meie Discordi serveris!",

    howtoplay: "KUIDAS MÄNGIDA?",
    howtoplayd: "Ehk siis soovid mängida Jackbox Games mänge? Ideaalne valik.",
    s1t1: "Mängu alustamine on imelihtne! Jackbox Games mängude mängimisel kasutad oma nutiseadet (telefoni, tahvlit või arvutit) ja koos saab mängida 8 inimest, kuid vahel veel rohkemgi! Põhitegevus toimub teleka või arvuti ekraanil, aga mängijad kasutavad oma nutiseadet vastuse sisestamiseks ja hääletamiseks.",
    s1t2: "Kõik Jackbox Games mängud on reitinguga T for Teen. Mitmel mängul on sätetes ka peresõbralik režiim, mis tekitab reitinguks E10+!",
    s1t3: "Meelespea: ainult üks inimene peab omama mängu, et mängu alustada.",

    s2h1: "AVA MÄNG JA KRABA NUTISEADE",
    s2t1: "Kui oled mängu välja valinud ja avanud, siis tekib ekraanile neljakohaline ruumikood.",
    s2t2: "Ruumiga ühinemiseks iga mängija läheb oma nutiseadmel veebilehele jackbox.uno ning valib õige keele.",

    s3h1: "SISESTA RUUMIKOOD LEHEL JACKBOX.UNO",
    s3t1: "Oma nutiseadmega veebilehel olles, sisesta neljakohaline ruumikood.",
    s3t2: "Seejärel vali enda ekraaninimi, vajuta MÄNGI ja sa oled mängus sees!",
    s3t3: "Jackbox Party Pack 9 mängus on võimalik ühineda mänguga ekraanilolevat QR-koodi skännides.",
    s3t4: "Kui ühendus kaob, siis värskenda oma brauser - lahendus enamus probleemidele!",

    s4h1: "HAKKA MÄNGIMA!",
    s4t1: "Ruumiga esimesena liitunud mängija on VIP. Kui kõik mängijad on ruumis ja valmis mängima, VIP saab alustada mängu oma nutiseadmest.",
    s4t2: "Kui oled valinud sätetest \"Alusta mängu kontrolleriga\", siis mängu peab alustama ekraanile ilmuvast nupust.",
    s4t3: "NB! \"KÕIK ON SEES\" või \"ALUSTA MÄNGU\" valikud ilmuvad ekraanile ainult juhul, kui ruumis on piisavalt mängijaid.",

    faqtext: "Korduma Kippuvad Küsimused",
    q1: "Miks on ekraan must peale tõlke allalaadimist?",
    a1: "Juhul, kui teie ekraan mustaks läheb peale tõlke allalaadimist, on teie mäng piraaditud. Paraku piraaditud versioonid ei pruugi olla regulaarselt uuendatud, seega failistruktuurid ei pruugi ühtida. Siinkohal julgustame teid siiski mängu ostma.",
    q2: "Sooviks mängida. Kust saab ruumikoodi?",
    a2: "<p>Mängimiseks on kaks valikut:</p><ul><li><strong>ise ruumi alustamiseks</strong> – hangi mäng Steamist, lae alla <a href=\"games/index.html\">meie tõlge</a> ja järgi <a href=\"/manual.html\">juhendis</a> olevaid juhtnööre.<!--Kui pole seltskonda, kellega mängida, siis vaata<a href=\"finder.html\">siia</a>.--></li><li><!--<a href=\"finder.html\">--><strong>mängida olemasolevas ruumis</strong><!--</a>--> — ei pea mängu alla laadima! Lihtsalt küsi mängu alustajalt ruumikoodi, ühine lehelt <a href=\"https://jackbox.uno\">jackbox.uno</a>, ning vaata ekraani, kus mängu näidatakse. </li></ul><p>Sellisel juhul on ainult mängu alustajal vaja omada ning alla laadida mäng.<br>Alustaja ning teised mängijad ühinevad läbi oma nutiseadmete (telefonide, tahvlite või arvutite) leheküljel <a href=\"https://jackbox.uno\">jackbox.UNO</a> – midagi pole vaja alla laadida.</p>",
    q3: "Ostsin Party Packi Epic Games poest, kuidas ma tõlke saan alla laadida?",
    a3: "Hetkel on tõlked saadaval Steami versioonidele.",
    q4: "Ma leidsin tõlkes vea. Kus ma saan sellest teada anda?",
    a4: "Vigadest saab teada anda <a href=\"https://discord.gg/TNK3wsHHUW\">meie Discordi serveris</a> kanalis <span class=\"discord\">🔹︙mistakes</span>. <br>Võimaluse korral olge detailsed, nii saame probleemi kiiremini lahendatud.",
     
},
lv: {
  lang: 'Latviešu',
    ds: 'DISCORD SERVERIS',
    test: 'Teksts',
    modaloops: 'Ūps...',
    toggleladon: 'IESLĒGT TUMŠO TĒMU',
    toggleladoff: 'IESLĒGT GAIŠO TĒMU',
    modalsubtext: 'Pašlaik vietne vēl nav gatava. Noklikšķinot uz "OK", tu pārcelsi uz angļu valodas versiju.',
    havefun: 'Izklaidējies!',
    faq: 'buj',
    news: 'jaunumi',
    games: 'spēles',
    site: 'Vietne: ',
    titlefaq: 'BUJ',
    titlenews: 'Jaunumi',
    titlegames: 'Spēles',
    download: 'Lejupielādēt tulkojumu',
    downloadrn: 'Lejupielādēt tulkojumu tūlīt!',
    statust: 'Tulkots',
    statusdnt: 'Nav tulkots',
    statusip: 'Procesā',
    drawful: 'Zīmurgs',
    screenblocker: 'Diemžēl šī ekrāna skala netiek atbalstīta!',
    aboutus: 'par mums',
    titleaboutus: 'Par mums',
    csoon: 'Drīzumā',
    stext: "Statuss",
    view: 'APLŪKOT ŠO SPĒLI',
    MMXXYYYY: 'YEAR. gada XX. MONTH',
    oopsd: "Pašlaik mums nav šīs spēles tulkojuma",
    pity: "ŽĒL",

    welcome: "Laipni lūgti!",
    jackboxbaltic: "<strong>Jackbox Baltic United</strong> ir neatkarīga iniciatīva, kas apvieno mīlestību pret Jackbox Games ballīšu spēlēm un vēlmi nodrošināt igauņu, latviešu un lietuviešu izcelsmes iespēju izbaudīt to pašu jautrību savā dzimtajā valodā! Mēs esam neliela komanda ar dažādu pieredzi, kas strādājam pie daudzu Jackbox Games spēļu izlaidumu tulkošanas, kodēšanas un lokalizēšanas.",
    aboutjg: "Par Jackbox Games",
    aboutjgd: "<strong>Jackbox Games</strong> ir neliela spēļu ražošanas studija no Čikāgas (Ilinoisas štatā). Slavenākā franšīze - You Don't Know Jack - tika izlaista kopš 1995. gada un pat pastāvēja kā TV šova. Būt par daļu no Jellyvision, 2013. gadā tas atdalījās un tika nosaukts par Jackbox Games. Līdzās The Jackbox Party Pack franšīzei tiek izlaistas dažādas spēles, piemēram - Quiplash, Fibbage, Trivia Murder Party.",
    cons: "Dalībnieki",
    ttcons: "Teksta tulkotāji",
    tecons: "Tehniskais redaktors",
    fwcons: "Fonta darbinieks",
    gcons: "Grafikas darbinieks",
    sthanks: "Īpašs paldies",
    cont: "Kontakts",
    contd: "Ja tev ir kāds jautājums, ieteikums vai vienkārši vēlies aprunāties, vislabāk sazinies, izmantojot:",
    ds: "DISCORD SERVERIS",
    from: "no",
    rtg: "Nesen tulkotās spēles",
    discorddi: "Šajā vietne, kurā mēs augšupielādējam neoficiālus tulkojumus igauņu, latviešu un lietuviešu valodās Jackbox Games spēlēm (kas ir pazīstami kā Jackbox Party Pack radītāji). Mēs tikai sākam savu ceļu spēļu lokalizācijā, tāpēc tu vari mums palīdzēt, pievienojoties mūsu komandai Discord serverī!",

    howtoplay: "KĀ SPĒLĒT?",
    howtoplayd: "Tātad, gribi spēlēt Jackbox Games! Lieliska izvēle.",
    s1t1: "Sākt ir viegli! Jackbox Games spēlēs tālrunis vai planšetdators ir kontrolieris, un spēlēt var līdz pat 8 cilvēkiem. Dažreiz arī vairāk! Spēles galvenā darbība notiek ekranā (jebkurā vietā, kur esi uzsācis spēli), bet spēlētāji izmanto savas mobilās ierīces, lai ievadītu atbildes un izdarītu izvēli.",
    s1t2: "Visas Jackbox spēles tiek vērtētas <a class=\"ast\" href=\"https://likumi.lv/ta/id/137101#piel1\">‘16+’</a>. Daudzām spēlēm ir ģimenei draudzīgs režīms, ko var ieslēgt spēles iestatījumu izvēlnē, tādējādi tuvinot spēli <a class=\"ast\" href=\"https://likumi.lv/ta/id/137101#piel1\">‘7+’</a> vecuma grupā!",
    s1t3: "Ņem vērā, ka tikai vienai personai tavā grupā ir jābūt Jackbox precei, lai varētu rīkot spēli.",
    s2h1: "PALAIDI SPĒLI UN PAŅEM IERĪCI",
    s2t1: "Kad uzsāksi un izvēlēsies spēli, lobijā redzēsi četru burtu telpas kodu.",
    s2t2: "Lai pievienotos, katrs spēlētājs, izmantojot tālruni vai planšetdatoru, dodas uz vietni jackbox.uno, pēc tam izvēlas valodu, un izmanto jebkuru pārlūkprogrammu, ko tava sirds vēlas.",
    s3h1: "IEVADI TELPAS KODU JACKBOX.UNO VIETNĒ",
    s3t1: "Kad jau esi tur, ierīcē ievadi četru burtu telpas kodu.",
    s3t2: "Pēc tam ievadi vārdu, ko velies izmantot spēlē. Nospiedi pogu SPĒLET, un tu būsi jau tur!",
    s3t3: "The Jackbox Party Pack 9 var arī pieslēgties caura tālruņa kameru pavēršot uz kvadrātkodu lobijā un pēc tam sekojot parādītajam URL adreses nosaukumam.",
    s3t4: "Ja spēles laikā tiek pārtraukts savienojums, atsvaidzini pārlūkprogrammu. Tas novērš lielāko daļu atvienošanās gadījumu!",
    s4h1: "SĀC SPĒLĒT!",
    s4t1: "Pirmā persona, kas pieslēdzas, ir VIP. Kad visi, kas vēlas spēlēt, ir pieslēgušies un gatavi, VIP var sākt spēli no savas ierīces.",
    s4t2: "Ja esi aktivizējis iestatījumu \"Sākt spēli tikai no kontroliera\" (spēles iestatījumu izvēlnē), lai sāktu spēli, ir jānospiež ekrānā redzamā poga.",
    s4t3: "PIEZĪME: \"Visi ir šeit\" vai \"Sāktu spēli\" uz ekrāna parādīsies tikai tad, ja būs pietiekami daudz spēlētāju, lai sāktu spēli.",

    help: "Mēs meklējam darbiniekus",
    faqtext: "Biežāk Uzdotie Jautājumi",
    q1: "Kāpēc pēc tulkojuma instalēšanas parādās melnais ekrāns?",
    a1: "Ja pēc tulkojuma instalēšanas ekrāns kļūst melns, tas nozīmē, ka tava versija ir pirātiska. Pirātiskās versijas bieži vien ir novecojušas, un to failu struktūra nav tāda pati kā pašreizējām versijām. Mēs varam tikai ieteikt iegādāties likumīgu versiju.",
    q2: "Es gribu spēlēt. Kur es varu iegūt telpas kodu?",
    a2: "<p>Ir divas iespējas:</p><ul><li><strong>pats sākt spēli</strong> – tev ir jāiegādājies spēle vietnē Steam, jāieinstalē <a href=\"games/index.html\">mūsu tulkojumu</a> un pēc tam rīkojas ar <a href=\"/manual.html\">rokasgrāmatu</a>.<!--Ja nav kompānijas vai draugu, tad meklē <a href=\"finder.html\">šeit</a>.--></li><li><!--<a href=\"finder.html\">--><strong>atrast kāda cita spēli</strong><!--</a>--> — tev NAV nepieciešams pirkt un instalēt spēli, vienkārši uzzini telpas kodu un dodies uz <a href=\"https://jackbox.lv\">jackbox.lv</a>, tad skaties spēli, kur esi saņēmis kodu.</li></ul><p>Atkārtošu: iegādātā un instalētā spēle ir nepieciešama tikai tam, kurš sāk spēli (īpašniekam).<br>iņš un pārējie dalībnieki pievienojas spēlei no savas pārlūkprogrammas (tālruņa, planšetdatora vai datora), izmantojot <a href=\"https://jackbox.lv\">Jackbox.LV</a>,  tev nekas cits nav jāinstalē.</p>",
    q3: "Es iegādājos Party Pack Epic Games veikalā, kā lejupielādēt tulkojumu?",
    a3: "Atvainojiet, bet pašlaik mēs tulkojam Steam versiju.",
    q4: "Es atradu kļūdu vienā no tulkojumiem. Kur es varu par to ziņot?",
    a4: "<a href=\"https://discord.gg/TNK3wsHHUW\">Discord serverā</a> <span class=\"discord\">🔹︙mistakes</span> kanalā. <br> Ja iespējams, neaizmirsti par detaļām. Tas atvieglo problēmas atrašanu.",

    tjpsd: "Tagad ir pieejams Jackbox Party Starter, lai palīdzētu sākt ballīti! Jackbox Games apkopojuši trīs atjauninātas spēles: Quiplash 3, Tee K.O. un Trivia Murder Party 2. Tā kā ir tik daudz spēļu, no kurām izvēlēties, izstrādatāji nolēma palīdzēt atbrīvoties no dažiem minējumiem un iedot jums trīs spēles, kas noteikti sagādās jums izklaides stundas!",
    tjppstext: "Mūsu tulkojums ir izlaists Windows OS balstīta Steam (+ Humble/Fanatical). Citas platformas (Epic Games) nav pārbaudītas.<br>Šajā lapā jūs varat iegūt modifikāciju, kas pievieno spēli kādā valodā. Lūdzu, ņemiet vērā, ka ne visas spēles ir tulkotas un tajās var būt kļūdas vai neprecizitātes. Tomēr jūs varat mums palīdzēt, ieejot discord serverī.<br>Lai lejupielādētu tulkojumu, spēlei jābūt instalētai pakalpojumā Steam. Mēs neatbalstām pirātismu un nepalīdzēsim.",
    tjpp3d: "Ballīšu spēļu triešais fenomens turpinājumā ir nāvējošais viktorīnas šovs Trivia Murder Party, \"saki jebko\" turpinājums Quiplash 2, pārsteidzošā aptauju spēle Guesspionage, t-kreklu kautiņu spēle Tee K.O. un viltīgā viltnieku spēle Fakin' It.",
  },
lt: {
  lang: 'Lietuvių',
    ds: 'DISCORDO SERVERIS',
    test: 'Tekstas',
    modaloops: 'Ups...',
    toggleladon: 'TAMSUSIS REŽIMAS',
    toggleladoff: 'ŠVIESUSIS REŽIMAS',
    modalsubtext: 'Tinklalapis šiuo metu nepasiekiamas. Paspaudus "OK" atidarysite versiją anglų kalba.',
    havefun: 'Gero laiko!',
    faq: 'duk',
    news: 'naujienos',
    games: 'žaidimai',
    site: 'Site: ',
    titlefaq: 'DUK',
    titlenews: 'Naujienos',
    titlegames: 'Žaidimai',
    drawful: "Škicas",

    ds: "DISCORDO SERVERIS",
}
};


const langEe = document.querySelectorAll("#lang-ee");
const langLv = document.querySelectorAll("#lang-lv");
const langLt = document.querySelectorAll("#lang-lt");

var s1imgE = document.getElementById("s1img");
var s2img1E = document.getElementById("s2img1");
var s2img2E = document.getElementById("s2img2");
var s3img1E = document.getElementById("s3img1");
var s3img2E = document.getElementById("s3img2");
var s3img3E = document.getElementById("s3img3");
var s4imgE = document.getElementById("s4img");

function setLang(lang) {
	if (!langArr.hasOwnProperty(lang)) return;
	if (window.hasOwnProperty("localStorage"))
		window.localStorage.setItem("lang", lang);
	for (let key in langArr[lang]) {
		let elem = document.querySelectorAll(".lang-" + key);
		for (var i = 0; i < elem.length; i++) {
			if (elem) {
				elem[i].innerHTML = langArr[lang][key];
			}
		}
	}
	if (lang == "ee") {
		console.log(langArr[lang]['lang']);
    if(document.getElementById("games")) {
      document.getElementById("games").innerHTML = `
        ${gamessadDataee.map((game) => gamessad(game)).join("")}
      `;
    }
    if(document.getElementById("ldiv")){
      document.getElementById("ldiv").innerHTML = `
          ${ldivee.map((game) => ldiv(game)).join("")}
        `;
    }
    if(document.getElementById("games2")) {
      document.getElementById("games2").innerHTML = `
        ${gamessadDataee.map((game) => gamessad(game)).join("")}
      `;
    }
	}
	if (lang == "lv") {
		console.log(langArr[lang]['lang']);
    if(document.getElementById("games")){
      document.getElementById("games").innerHTML = `
        ${newgamesDatalv.map((game) => newgames(game)).join("")}
      `;
    }
    if(document.getElementById("tjpsg")){
      document.getElementById("tjpsg").innerHTML = `
        ${tjpslv.map((game) => tjpsg(game)).join("")}
      `;
    }
    if(document.getElementById("tjpp3g")){
      document.getElementById("tjpp3g").innerHTML = `
        ${tjpp3lv.map((game) => tjpsg(game)).join("")}
      `;
    }
    const carousel = document.querySelector(".carousel");
    if (carousel) {
      s1imgE.src = "./assets/images/05_OneOwnerToHost_lv.jpg";
      s2img1E.src = "./assets/images/07_RoomCode_lv.jpg",
      s2img2E.src = "./assets/images/08_ControllerWebsite_lv.jpg";
      s3img1E.src = "./assets/images/10_EnterRoomCode_lv.jpg";
      s3img2E.src = "./assets/images/11_EnterName_lv.jpg";
      s3img3E.src = "./assets/images/12_PressPlay_lv.jpg";
      s4imgE.src = "./assets/images/13_FirstIsVIP_lv.jpg";
    }
    if(document.getElementById("ldiv")){
      document.getElementById("ldiv").innerHTML = `
          ${ldivlv.map((game) => ldiv(game)).join("")}
        `;
    }
    if(document.getElementById("games2")){
      document.getElementById("games2").innerHTML = `
            ${gamesDatalv.map((game) => newgames(game)).join("")}
          `;
    }
	}
	if (lang == "lt") {
		console.log(langArr[lang]['lang']);
    if(document.getElementById("games")){
      document.getElementById("games").innerHTML = `
        ${newgamesDatalt.map(newgames).join("")}
      `;
    }
    if(document.getElementById("ldiv")){
      document.getElementById("ldiv").innerHTML = `
          ${ldivlt.map((game) => ldiv(game)).join("")}
        `;
    }
    if(document.getElementById("games2")) {
      document.getElementById("games2").innerHTML = `
        ${gamessadDatalt.map((game) => gamessad(game)).join("")}
      `;
    }
	}
}

if (langEe) {
  langEe.forEach((element) => {
    element.addEventListener("click", setLang.bind(null, "ee"));
    element.addEventListener("click", loading);
    element.addEventListener("click", space);
  });
}
if (langLv) {
  langLv.forEach((element) => {
    element.addEventListener("click", setLang.bind(null, "lv"));
    element.addEventListener("click", loading);
    element.addEventListener("click", space);
  });
}
if (langLt) {
  langLt.forEach((element) => {
    element.addEventListener("click", setLang.bind(null, "lt"));
    element.addEventListener("click", loading);
    element.addEventListener("click", space);
  });
}

var lang = (window.hasOwnProperty("localStorage") && window.localStorage.getItem("lang", lang)) || "";
setLang(lang);



// CONF

"use strict";
const sv = document.getElementById("sv");
const modal = document.getElementById("modal");
const accordion = document.getElementById("accordion");
const popup = document.getElementById("popup");
function space() {
  if(document.querySelector(".space")) {
    if (localStorage.getItem('lang') === 'ee' || localStorage.getItem('lang') === 'lt') {
      document.querySelector(".space").style.display = "none";
    } else {
      document.querySelector(".space").style.display = "block";
    }
  }
}

if (!(localStorage.getItem('lang') === 'ee' || localStorage.getItem('lang') === 'lv' || localStorage.getItem('lang') === 'lt')) {
  if (window.location.href !== 'http://127.0.0.1:5500/preload.html') {
    window.location.href = 'http://127.0.0.1:5500/preload.html';
  }
} else if ((localStorage.getItem('lang') === 'ee' || localStorage.getItem('lang') === 'lv' || localStorage.getItem('lang') === 'lt')) {
  if (window.location.href == 'http://127.0.0.1:5500/preload.html') {
    window.location.href = 'http://127.0.0.1:5500/index.html';
  }
}




// POPUP
if (popup) {
  let popupBg = document.querySelector('.modal');
  let popup = document.querySelector('.contentt');
  let openPopupButtons = document.querySelectorAll('.open-popup');
  let closePopupButton = document.querySelector('.actions');
  openPopupButtons.forEach((button)=>{
      button.addEventListener('click', (e)=>{
          e.preventDefault();
          popupBg.classList.add('active');
          popup.classList.add('active');
      }
      )
  }
  );
  closePopupButton.addEventListener('click', ()=>{
      popupBg.classList.remove('active');
      popup.classList.remove('active');
  }
  );
  document.addEventListener('click', (e)=>{
      if (e.target === popupBg) {
          popupBg.classList.remove('active');
          popup.classList.remove('active');
      }
  }
  );
}



// FAQ

if(accordion){
    const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

    accordionItemHeaders.forEach(accordionItemHeader => {
      accordionItemHeader.addEventListener("click", event => {
        
        // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
        
        // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
        // if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
        //   currentlyActiveAccordionItemHeader.classList.toggle("active");
        //   currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
        // }

        accordionItemHeader.classList.toggle("active");
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if(accordionItemHeader.classList.contains("active")) {
          accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
          accordionItemBody.style.maxHeight = 0;
        }
      });
    });
    console.log('FAQ working!');
}



// SLIDESHOW

window.onload = function () {
    const carousels = document.querySelectorAll(".carousel") || [];
  
    carousels.forEach((carousel) => {
      setupCarousel(carousel);
    });
  
    function setupCarousel(carousel) {
        const nextButton = carousel.querySelector('.carousel-button-right');
        const prevButton = carousel.querySelector('.carousel-button-left');
        const track = carousel.querySelector('.carousel-track');

        const dotsNav = carousel.querySelector('.carousel-nav');
        const dots = Array.from(dotsNav.children);

        const slides = Array.from(track.children);
        const slideWidth = slides[0].getBoundingClientRect().width;
        console.log(slideWidth);
        const targetIndex = slides.findIndex;
    
        const setSlidePosition = (slide, index) => {
            slide.style.left = slideWidth * index + 'px';
        };
        slides.forEach(setSlidePosition);
    
        function moveToSlide(track, currentSlide, targetSlide) {
            track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
            currentSlide.classList.remove('current-slide');
            targetSlide.classList.add('current-slide');
        }
    
        function updateDots(currentDot, targetDot) {
            currentDot.classList.remove('current-slide');
            targetDot.classList.add('current-slide');
        }
    
        function hideShowArows(slides, prevButton, nextButton, targetIndex) {
            if (targetIndex === 0) {
                prevButton.classList.add('is-hidden');
                nextButton.classList.remove('is-hidden');
            } else if (targetIndex === slides.length - 1) {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.add('is-hidden'); 
            } else {
                prevButton.classList.remove('is-hidden');
                nextButton.classList.remove('is-hidden'); 
            }
        }

        nextButton.addEventListener('click', event => {
            const currentSlide = track.querySelector('.current-slide');
            const nextSlide = currentSlide.nextElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const nextDot = currentDot.nextElementSibling;
            const nextIndex = slides.findIndex(slide => slide === nextSlide);
    
            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
            hideShowArows(slides, prevButton, nextButton, nextIndex);
        });
    
        prevButton.addEventListener('click', event => {
            const currentSlide = track.querySelector('.current-slide');
            const prevSlide = currentSlide.previousElementSibling;
            const currentDot = dotsNav.querySelector('.current-slide');
            const prevDot = currentDot.previousElementSibling;
            const prevIndex = slides.findIndex(slide => slide === prevSlide);
    
            moveToSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
            hideShowArows(slides, prevButton, nextButton, prevIndex);
        });
    
        dotsNav.addEventListener('click', event => {
            const targetDot = event.target.closest('button');
    
            const currentSlide = track.querySelector('.current-slide');
            const currentDot = dotsNav.querySelector('.current-slide');
            const targetIndex = dots.findIndex(dot => dot === targetDot);
            const targetSlide = slides[targetIndex];

            if (!targetDot) return;
            console.log('OMG. YOU\'RE CLICKED ON THE ' + targetIndex + ' DOT! 🤯');
    
            moveToSlide(track, currentSlide, targetSlide);
            updateDots(currentDot, targetDot);
            hideShowArows(slides, prevButton, nextButton, targetIndex);
        });
    }
}



// qwelcome

const languages = [
  { id: "ee", text: "ee" },
  { id: "lv", text: "Ja tu saproti mani, nospied šo pogu" },
  { id: "lt", text: "lt" }
];

const whatLangElement = document.getElementById("whatlang");
var qwelcome = document.getElementById("qwelcome");
var black = document.getElementById("black");

if(qwelcome) {
  languages.forEach(language => {
    const langElement = document.getElementById(language.id);
    
    langElement.addEventListener('mouseenter', function() {
      whatLangElement.innerHTML = language.text;
    });
    
    langElement.addEventListener('mouseleave', function() {
      whatLangElement.innerHTML = 'What language do you want to have fun in?';
    });
  });

  var contentHeight = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  
  qwelcome.style.height = contentHeight + "px";
}



// LOADING

var yawelcome = document.getElementById("yawelcome");
var idheader = document.getElementById("header");

function loading() {
  if (localStorage.getItem('lang') === 'ee' || localStorage.getItem('lang') === 'lv' || localStorage.getItem('lang') === 'lt') {
    if(qwelcome) {
      qwelcome.style.display = "none";
    }
    if(yawelcome) {
      yawelcome.style.display = "flex";
    }
    idheader.style.display = "block";
  } else {
    if(qwelcome) {
      qwelcome.style.display = "flex";
    }
    if(yawelcome) {
      yawelcome.style.display = "none";
    }
    idheader.style.display = "none";
  }
  if(black) {
    black.style.display = "none";
  }
}

const version = "1689307296";
console.log('URL: ' + window.location.pathname)

window.addEventListener("DOMContentLoaded", () => {
  if(sv){
    function siteversion() {
        sv.innerHTML = version;
    }
    siteversion()
  }
  console.log("Version: " + version);
  function checkScreenWidth() {
    if (window.innerWidth <= 320) {
      if(qwelcome) {
        qwelcome.style.display = "none";
      }
      if(yawelcome) {
        yawelcome.style.display = "none";
      }
      if(black) {
        black.style.display = "flex";
      }
      idheader.style.display = "none";
    }
  }
  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);
  loading();
  space();
});


// CREDITS

// Carousel:  https://codepen.io/brianmarco/pen/WNdaNov
// Accordion: https://codepen.io/Coding_Journey/pen/RwNgYmm
// Homepages: https://stackoverflow.com/questions/28394649/check-if-homepage-using-window-location
// Language:  https://qna.habr.com/q/1001843
//            https://www.youtube.com/watch?v=Yh-9PrbzZAY
//            https://www.youtube.com/watch?v=DG4obitDvUA
//            https://stackoverflow.com/questions/228835/best-practice-javascript-and-multilanguage
// Other:     Dejelnieks