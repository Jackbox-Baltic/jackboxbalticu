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
  href: "href=\"https://github.com/Jackbox-Baltic/JPP3lv/releases/download/13.1688686056/JPP3lv.14082023.1.zip\"",
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
  href: "href=\"https://github.com/Jackbox-Baltic/JPSbaltic/releases/download/216.1688768495/JPSbaltic.080723.1.zip\"",
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

const newgamesDatalv = [
  {
    href: "",
    image: "TJPSTeeLV",
    name: "Kre K.O.",
    span: "THE JACKBOX PARTY STARTER",
    date: "2023. gada 01. jūlijs",
    new: "<p class=\"new\">JAUNS</p>",
    view: ""
  },
  {
    href: "",
    image: "TeeKOGameLV",
    name: "Kre K.O.",
    span: "THE JACKBOX PARTY PACK 3",
    date: "2022. gada 21. decembris",
    new: "<p data-v-556a942f=\"\" class=\"new\">JAUNS</p>",
    view: ""
  }
];

//view: "<p class=\"cta\">APLŪKOT ŠO SPĒLI <svg data-v-556a942f=\"\" class=\"external-icon\" viewBox=\"0 0 200 200\"><path d=\"M185,106c-8.3,0-15,6.7-15,15v44c0,2.8-2.2,5-5,5H35c-2.8,0-5-2.2-5-5V35c0-2.8,2.2-5,5-5h44c8.3,0,15-6.7,15-15S87.3,0,79,0H35C15.7,0,0,15.7,0,35v130c0,19.3,15.7,35,35,35h130c19.3,0,35-15.7,35-35v-44C200,112.7,193.3,106,185,106z\"></path><path d=\"M184,0h-54c-8.3,0-15,6.7-15,15s6.7,15,15,15h18.8L90.4,88.4c-5.9,5.9-5.9,15.4,0,21.2c2.9,2.9,6.8,4.4,10.6,4.4s7.7-1.5,10.6-4.4L170,51.2V70c0,8.3,6.7,15,15,15s15-6.7,15-15V16C200,7.2,192.8,0,184,0z\"></path></svg></p>"
//href: "href=\"games/tjpp3.html\"",

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

const gamessadDataee = [{
  nttext: "Hetkel meil ei ole tõlkeid, aga võid meie tõlketiimiga ühineda!",
  ds: "DISCORDI SERVER"
}];

const gamessadDatalt = [{
  nttext: "Šiuo metu neturime jokių vertimų, bet galite prisijungti prie mūsų vertimų komandos!",
  ds: "DISCORDO SERVERIS"
}];

function gamessad(text) {
  return `
  <div class="control">
    <div class="nongames">
      <p>${text.nttext}</p>
      <li class="b">
        <a href="https://discord.gg/TNK3wsHHUW" target="_blank" class="lang-ds">${text.ds}<div style="border: 3px solid var(--bgrecent);" class="indicator"></div></a>
      </li>
    </div>
  </div>
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
        faq: 'FAQ',
        news: 'NEWS',
        games: 'GAMES',
        manual: "HOW TO PLAY",
        site: 'Site: ',
        titlefaq: 'FAQ',
        titlenews: 'News',
        titlegames: 'Games',
        home: "HOME",
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
        s2t2: "To join, each player uses their phone or tablet and goes to jackbox.tv, then choose the language you are playing in, using whatever web browser you normally use.",
        s2img1: "./assets/images/07_RoomCode.jpg",
        s2img2: "./assets/images/08_ControllerWebsite.jpg",
        s3h1: "ENTER THE ROOM CODE AT JACKBOX.TV",
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
        a2: "<p>There are two options:</p><ul><li><strong>to start yourself</strong> – you need to buy the game on Steam, install <a href=\"games/index.html\">our translation</a> and then proceed according to <a href=\"/future/manual.html\">the manual</a>.<!--If there is no company or friends, then look <a href=\"finder.html\">here</a>.--></li><li><!--<a href=\"finder.html\">--><strong>to find someone else's game</strong><!--</a>--> — you DON't need to buy and install the game, just find out the room code and go through <a href=\"https://jackbox.tv\">jackbox.tv</a>, then watch the gameplay where you got the code.</li></ul><p>Once again: the purchased and installed game is needed only by the one who starts (the host).<br>He and the rest of the participants join the game from their browsers (phones, tablets or computers) via <a href=\"https://jackbox.tv\">Jackbox.TV</a>, you don't need to install anything else.</p>",
        q3: "I bought a Party Pack on the Epic Games Store, how do I download the translation?",
        a3: "Apologies, but we are currently doing translations of the Steam version.",
        q4: "I found an error in one of the translations. Where can I report it?",
        a4: "In the <span class=\"discord\">🔹︙mistakes</span> channel of <a href=\"https://discord.gg/TNK3wsHHUW\">the Discord server</a>. <br>If possible, do not skimp on the details. This makes it easier to find the problem.",
    
        tjpsd: "Jackbox Party Starter is an indispensable party game! This pack contains three updated games: Quiplash 3, Tee K.O. and Trivia Murder Party 2.",
        tjppstext: "Our translation is released for Windows OS based version of Steam (+ Humble/Fanatical). Other platforms (Epic Games) have not been tested.<br>On this page you can get a modification that adds a language to the game. Please note that not all games are translated and there may be errors or inaccuracies. However you can help us by entering the Discord Server. <br>To download the translation you need to have the game on Steam. We do not support piracy and will not help!",
        tjpp3d: "The threequel to the party game phenomenon features the deadly quiz show Trivia Murder Party, the say-anything sequel Quiplash 2, the surprising survey game Guesspionage, the t-shirt slugfest Tee K.O., and the sneaky trickster game Fakin’ It.",
      
        legalinfo: 'Legal Information',
        l1p: 'We (hereinafter referred to as JBU) strive to create high-quality translations of The Jackbox Party Pack franchises (hereinafter referred to as the game) for your enjoyment and convenience. Our goal is to make these games accessible to everyone who does not speak the original language of Jackbox Games (hereinafter referred to as the developer). However, we want to openly and honestly declare our disclaimer and the terms of use for our translations.',
        l2h: 'Unofficial Translations',
        l2p: 'JBU is not an official representative of the game developers and does not have their permission for translation. Our translations are a creative effort by participants and are based on their skills and knowledge. Please remember that we do not have any official status with respect to these games.',
        l3h: 'Unsupported Errors',
        l3p: 'During the translation and adaptation process, errors or discrepancies may occur. We make every effort to ensure the quality of our translations, but we cannot guarantee their flawless accuracy. Please understand that some issues may arise.',
        l4h: 'Piracy',
        l4p: 'We strongly disapprove of the pirated distribution of games. Our translations are intended only for users who own original copies of the games. Please comply with the law and respect the intellectual property of the game developers.',
        l5h: 'Updates',
        l5p: 'Our team may periodically update the translations to improve quality or correct errors. We do not commit to supporting outdated versions of the translations.',
        l6h: 'Use at Your Own Risk',
        l6p: 'By using our translations, you do so at your own risk. Risks include compatibility and stability, legality, updates, and support. We are not responsible for any damage that may occur as a result of using our translations.',
        l7p: 'We hope that our efforts will help you enjoy the games in your native language, but we ask you to adhere to the above-mentioned terms and understand that we are not official representatives of the developers. Thank you for your support and understanding.',
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
        home: "KODU",
        faq: 'KKK',
        news: 'UUDISED',
        games: 'MÄNGUD',
        manual: "JUHENDIS",
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
        s2t2: "Ruumiga ühinemiseks iga mängija läheb nutiseadmel veebilehele jackbox.tv.",
    
        s3h1: "SISESTA RUUMIKOOD LEHEL JACKBOX.TV",
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
        a2: "<p>Mängimiseks on kaks valikut:</p><ul><li><strong>ise ruumi alustamiseks</strong> – hangi mäng Steamist, lae alla <a href=\"games/index.html\">meie tõlge</a> ja järgi <a href=\"/manual.html\">juhendis</a> olevaid juhtnööre.<!--Kui pole seltskonda, kellega mängida, siis vaata<a href=\"finder.html\">siia</a>.--></li><li><!--<a href=\"finder.html\">--><strong>mängida olemasolevas ruumis</strong><!--</a>--> — ei pea mängu alla laadima! Lihtsalt küsi mängu alustajalt ruumikoodi, ühine lehelt <a href=\"https://jackbox.tv\">jackbox.tv</a>, ning vaata ekraani, kus mängu näidatakse. </li></ul><p>Sellisel juhul on ainult mängu alustajal vaja omada ning alla laadida mäng.<br>Alustaja ning teised mängijad ühinevad läbi oma nutiseadmete (telefonide, tahvlite või arvutite) leheküljel <a href=\"https://jackbox.tv\">jackbox.TV</a> – midagi pole vaja alla laadida.</p>",
        q3: "Ostsin Party Packi Epic Games poest, kuidas ma tõlke saan alla laadida?",
        a3: "Hetkel on tõlked saadaval Steami versioonidele.",
        q4: "Ma leidsin tõlkes vea. Kus ma saan sellest teada anda?",
        a4: "Vigadest saab teada anda <a href=\"https://discord.gg/TNK3wsHHUW\">meie Discordi serveris</a> kanalis <span class=\"discord\">🔹︙mistakes</span>. <br>Võimaluse korral olge detailsed, nii saame probleemi kiiremini lahendatud.",
      
        legalinfo: 'Õiguslik teave',
        l1p: 'Meie (edaspidi "JBU") püüdleme selle nimel, et luua kvaliteetseid tõlkeid Jackbox Party Packi frantsiisidest (edaspidi "mäng"), teile meelelahutuseks ja mugavuseks. Meie eesmärk on teha need mängud kättesaadavaks kõigile, kes ei räägi Jackbox Gamesi (edaspidi "arendaja") originaalkeeli. Tahame siiski avalikult ja ausalt deklareerida oma vastutuse lahtiütlemist ja meie tõlgete kasutustingimusi.',
        l2h: 'Mitteametlikud tõlked',
        l2p: 'JBU ei ole mänguarendajate ametlik esindaja ja meil puudub nende luba tõlkimiseks. Meie tõlked on asjaosaliste loominguline jõupingutus ja põhinevad nende oskustel ja teadmistel. Palun pidage meeles, et meil ei ole nende mängude suhtes mingit ametlikku staatust.',
        l3h: 'Toetamata vead',
        l3p: 'Tõlkimise ja kohandamise käigus võib esineda vigu või lahknevusi. Me teeme kõik endast oleneva, et tagada meie tõlgete kvaliteet, kuid me ei saa garanteerida nende veatut täpsust. Palun mõistke, et mõned tõrked võivad tekkida.',
        l4h: 'Piraatlus',
        l4p: 'Me mõistame sügavalt hukka mängude ebaseadusliku levitamise. Meie tõlked on mõeldud ainult neile kasutajatele, kes omavad mängude originaalkoopiaid. Palun järgige seadust ja austage mänguarendajate intellektuaalset omandit.',
        l5h: 'Uuendused',
        l5p: 'Meie meeskond võib tõlkeid perioodiliselt uuendada, et parandada kvaliteeti või parandada vigu. Me ei võta endale kohustust toetada vananenud tõlkeversioone.',
        l6h: 'Kasutamine omal vastutusel',
        l6p: 'Kasutades meie tõlkeid teete seda omal vastutusel. Riskid hõlmavad ühilduvust ja stabiilsust, õiguspärasust, uuendusi ja tuge. Me ei vastuta võimalike kahjude eest, mis võivad tekkida meie tõlgete kasutamise tagajärjel.',
        l7p: 'Loodame, et meie jõupingutused aitavad teil mänge oma emakeeles nautida, kuid palume teil järgida ülalnimetatud tingimusi ja mõista, et me ei ole arendajate ametlikud esindajad. Täname teid toetuse ja mõistmise eest.',
        tjppstext: "Meie tõlked on avaldatud Windowsi operatsioonisüsteemil põhinevale Steami versioonile (+ Humble/Fanatical). Teisi platvorme (Epic Games) ei ole testitud.<br>Sellel leheküljel saate versiooni, mis lisab mängule vastava keele. Siinkohal mainime, et kõik mängud ei ole tõlgitud ja tõlkes võib esineda vigu või ebatäpsusi, milles saate meid aidata, kui ühinete meie Discord serveriga. <br>Tõlke allalaadimiseks peab teil olema mäng Steamis. Me ei toeta piraatlust ja ei aita!",
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
        home: "SĀKUMS",
        faq: 'BUJ',
        news: 'JAUNUMI',
        games: 'SPĒLES',
        manual: "KĀ SPĒLĒT?",
        site: 'Vietne: ',
        titlefaq: 'BUJ',
        titlenews: 'Jaunumi',
        titlegames: 'Spēles',
        statust: 'Tulkots',
        statusdnt: 'Nav tulkots',
        statusip: 'Procesā',
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
        cont: "Kontakts",
        contd: "Ja tev ir kāds jautājums, ieteikums vai vienkārši vēlies aprunāties, vislabāk sazinies, izmantojot:",
        ds: "DISCORD SERVERIS",
        from: "no",
        discorddi: "Šajā vietne, kurā mēs augšupielādējam neoficiālus tulkojumus igauņu, latviešu un lietuviešu valodās Jackbox Games spēlēm (kas ir pazīstami kā Jackbox Party Pack radītāji). Mēs tikai sākam savu ceļu spēļu lokalizācijā, tāpēc tu vari mums palīdzēt, pievienojoties mūsu komandai Discord serverī!",
    
        howtoplay: "KĀ SPĒLĒT?",
        howtoplayd: "Tātad, gribi spēlēt Jackbox Games! Lieliska izvēle.",
        s1t1: "Sākt ir viegli! Jackbox Games spēlēs tālrunis vai planšetdators ir kontrolieris, un spēlēt var līdz pat 8 cilvēkiem. Dažreiz arī vairāk! Spēles galvenā darbība notiek ekranā (jebkurā vietā, kur esi uzsācis spēli), bet spēlētāji izmanto savas mobilās ierīces, lai ievadītu atbildes un izdarītu izvēli.",
        s1t2: "Visas Jackbox spēles tiek vērtētas <a class=\"ast\" href=\"https://likumi.lv/ta/id/137101#piel1\">‘16+’</a>. Daudzām spēlēm ir ģimenei draudzīgs režīms, ko var ieslēgt spēles iestatījumu izvēlnē, tādējādi tuvinot spēli <a class=\"ast\" href=\"https://likumi.lv/ta/id/137101#piel1\">‘7+’</a> vecuma grupā!",
        s1t3: "Ņem vērā, ka tikai vienai personai tavā grupā ir jābūt Jackbox precei, lai varētu rīkot spēli.",
        s2h1: "PALAIDI SPĒLI UN PAŅEM IERĪCI",
        s2t1: "Kad uzsāksi un izvēlēsies spēli, lobijā redzēsi četru burtu telpas kodu.",
        s2t2: "Lai pievienotos, katrs spēlētājs, izmantojot tālruni vai planšetdatoru, dodas uz vietni jackbox.lv, un izmanto jebkuru pārlūkprogrammu, ko tava sirds vēlas.",
        s3h1: "IEVADI TELPAS KODU JACKBOX.LV VIETNĒ",
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
      
        legalinfo: 'Juridiskā informācija',
        l1p: 'Mēs (turpmāk saukti par JBU) cenšamies radīt augstas kvalitātes tulkojumus The Jackbox Party Pack franšīzēm (turpmāk sauktu par spēli), lai jūs varētu baudīt un izmantot ērtībā. Mūsu mērķis ir padarīt šīs spēles pieejamas visiem, kuri nerunā oriģinālā Jackbox Games valodā (turpmāk sauktu par izstrādātāju). Tomēr mēs vēlamies atklāti un godīgi izteikt savu atbrīvojumu un lietošanas noteikumus attiecībā uz mūsu tulkojumiem.',
        l2h: 'Neoficiāli Tulkojumi',
        l2p: 'JBU nav oficiāls spēles izstrādātāju pārstāvis un mums nav viņu atļaujas tulkojumiem. Mūsu tulkojumi ir dalībnieku radošs centiens un balstīti uz viņu prasmēm un zināšanām. Lūdzu, atcerieties, ka mums nav nekāda oficiāla statusa attiecībā uz šīm spēlēm.',
        l3h: 'Nesniegti Kļūdas',
        l3p: 'Tulkojuma un pielāgošanas procesā var rasties kļūdas vai nesakritības. Mēs veicam visus iespējamos pasākumus, lai nodrošinātu mūsu tulkojumu kvalitāti, bet nevaram garantēt to bezkļūdainu precizitāti. Lūdzu, saprotiet, ka var rasties daži problēmas.',
        l4h: 'Pirātisms',
        l4p: 'Mēs stingri nosodām spēļu pirātisku izplatīšanu. Mūsu tulkojumi ir paredzēti tikai tiem lietotājiem, kuriem ir oriģinālas spēļu kopijas. Lūdzu, ievērojiet likumu un cieniet spēļu izstrādātāju intelektuālo īpašumu.',
        l5h: 'Atjauninājumi',
        l5p: 'Mūsu komanda var periodiski atjaunināt tulkojumus, lai uzlabotu kvalitāti vai novērstu kļūdas. Mēs neuzņemamies atbalstīt vecās tulkojumu versijas.',
        l6h: 'Izmantojiet uz savu risku',
        l6p: 'Izmantojot mūsu tulkojumus, jūs to darāt uz savu risku. Riski ietver saderību un stabilitāti, legalitāti, atjauninājumus un atbalstu. Mēs neesam atbildīgi par jebkādiem bojājumiem, kas var rasties, izmantojot mūsu tulkojumus.',
        l7p: 'Mēs ceram, ka mūsu centieni palīdzēs jums baudīt spēles savā dzimtajā valodā, bet lūdzam jūs ievērot iepriekš minētos noteikumus un saprast, ka mēs neesam spēles izstrādātāju oficiālie pārstāvji. Paldies par jūsu atbalstu un sapratni.'      
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
        home: "PRADŽIA",
        faq: 'DUK',
        news: 'NAUJIENOS',
        games: 'ŽAIDIMAI',
        manual: "KAIP ŽAISTI?",
        aboutus: 'apie mus',
        site: 'Puslapis: ',
        titlefaq: 'DUK',
        titlenews: 'Naujienos',
        titlegames: 'Žaidimai',
        titleaboutus: 'Apie muss',
        titlemanual: 'Kaip žaisti?',
        drawful: "Škicas",
    
        ds: "DISCORDO SERVERIS",
        jackboxbaltic: "<strong>Jackbox Baltic</strong>, nepriklausoma iniciatyva sujungianti meilę Jackbox žaidimams ir norą suteikti Estijos, Latvijos ir Lietuvos kilmės žmonėms galimybę linksmai praleisti laiką savo gimtąja kalba! Mes esame maža ir įvairialypė komanda, dirbanti su vertimų, programavimo ir vietinimo darbais įvairiems Jackbox Games žaidimams.",
        download: 'Parsisiųsti vertimus',
        downloadrn: 'Parsisiųsti vertimus dabar!',
        statust: 'Išversta',
        statusdnt: 'Neišversta',
        statusip: 'Vis dar dirbama',
        screenblocker: 'Deja, šis ekrano dydis nėra palaikomas!',
        pity: "PITY",
        discorddi: 'Jackbox Baltic yra svetainė, kurioje mes talpiname neoficialias estų, latvių ir lietuvių kalbų vertimus Jackbox Games žaidimams, žinomiems kaip Jackbox Party Packs. Mes dar tik pačioje savo žaidimų lokalizacijos pradžioje, todėl galite mums padėti prisijungę prie mūsų komandos Discord serverio!',
        welcome: "Sveiki!",
        aboutjg: "Apie Jackbox Games",
        aboutjgd: "<strong>Jackbox Games</strong> yra nedidelė žaidimų kūrimo studija iš Čikagos (Ilinojaus). Žinomiausia jų prekės ženklų serija - \"You Don\'t Know Jack\" - yra leidžiama nuo 1995 metų ir net egzistavo kaip televizijos šou. Būdama Jellyvision dalis, įmonė 2013 metais atsiskyrė ir buvo pavadinta \"Jackbox Games\". Be \"Jackbox Party Pack\" prekės ženklo, yra leidžiami ir kiti įvairūs žaidimai, pavyzdžiui - \"Quiplash\", \"Fibbage\", \"Trivia Murder Party\".",
        
        cont: "Kontaktai",
        contd: "Jeigu turite klausimų, pasiūlymų arba tiesiog norite pasikalbėti, geriausias būdas susisiekti yra per:",
        from: "nuo",
        csoon: 'Jau greitai',
        stext: "Būsena",
        recentlytgtitle: "Naujai išversti žaidimai",
        view: "ŽIŪRĖTI ŠĮ ŽAIDIMĄ",

        faqtext: "Dažniausiai Užduodami Klausimai",
        q1: "Kodėl mano ekranas užtemsta įrašius vertimus?",
        a1: "Jeigu po vertimų įdiegimo ekranas tampa juodas, tai reiškia, kad jūsų versija yra suklastota (piratinė). Suklastotos versijos dažnai yra pasenusios ir neturi tokios pačios failų struktūros kaip dabartinės versijos. Mes galime tik paskatinti jus įsigyti legalią versiją.",
        q2: "Noriu žaisti. Kur gauti žaidimo (kambario) kodą?",
        a2: "<p>Yra du būdai:</p><ul><li><strong>pradžiai</strong> – įsigykite žaidimą naudodami steam platformą, įrašykite <a href=\"ndex.html#games\">mūsų vertimą</a> , o tada tęskite naudodami <a href=\"/manual.html\">instrukcijas</a>.<!--Jei šiuo metu neturite su kuo žaisti <a href=\"finder.html\">here</a>.--></li><li><!--<a href=\"finder.html\">--><strong>visada galite prisijungti prie kitų žmonių sukurtų žaidimų kambarių</strong><!--</a>--> — nepamirškite, kad jūs NEPRIVALOTE pirkti žaidimo norint tik dalyvauti juose, tiesiog įveskite žinomą kambario kodą puslapyje <a href=\"https://jackbox.tv\">jackbox.tv</a>, ir iškart dalyvaukite to kambario žaidimo sesijoje.</li></ul><p>Ir dar kartelį: tik žmogus sukuriantis žaidimo kambarį (žaidimo vedėjas) privalo turėti mokamą žaidimo licenziją.<br>Vedėjas ar vedėja sukūrus žaidimo kambarį, prisijungia prie jo naudodami savo naršyklę (telefonais, planšetėmis arba kompiuteriais) per<a href=\"https://jackbox.tv\">jackbox.TV</a>, nieko papildomo įdiegti nereikia.</p>",
        q3: "Aš pirkau Party Pack per Epic Games Parduotuvę, kaip galėčiau įrašyti vertimus?",
        a3: "Atsiprašome, bet šiuo metu darome vertimus tik Steam platformai.",
        q4: "Radau klaidą viename iš vertimų, kur man apie tai pranešti?",
        a4: "Apsilankykite <span class=\"discord\">🔹︙mistakes</span> kanale <a href=\"https://discord.gg/TNK3wsHHUW\">kurį rasite mūsų diskordo serveryje</a>. <br> Jei įmanoma, duokite kuo daugiau informacijos, kas mums padeda sutvarkyti tokias bėdas kuo greičiau.",
      
        howtoplay: "KAIP ŽAISTI?",
        howtoplayd: "Taigi panorai žaisti Jackbox Games! puikus sprendimas.",
        s1t1: "Pradėti lengva! Jackbox games, žaidimuose tavo telefonas ar planšetė veikia kaip žaidimų pultai, dažniausiai leidžiantys prisijungti apie 8 žmones, kartais ir daugiau! Pagrindinė žaidimo veiksmo dalis vyksta jūsų televizoriaus ekrane (arba bet kur kitur kur tik paleidote žaidimą), tačiau žaidėjai naudoja savo mobilius įrenginius, įvesti atsakymams ir priimti tam tikriems sprendimams.",
        s1t2: "Visi Jackbox žaidimai yra tinkami paaugliams. Daugelyje žaidimų egzistuoja šeimai draugiškas režimas, kurį galima įjungti per žaidimo nustatymų meniu, kuris pritraukia žaidimą arti E10+ įvertinimo!",
        s1t3: "Atminkite, Jackbox produktą privalo turėti tik vienas žmogus, kuris dažniausiai yra traktuojamas vedėju.",
        s2h1: "ĮJUNKITE ŽAIDIMĄ IR GRIEBKITE SAVO MOBILIUOSIUS",
        s2t1: "Kai išsirinksite ir paleisite žaidimą, kurį norite žaisti, pamatysite keturių raidžių kambario kodą..",
        s2t2: "Norėdami prisijungti, kiekvienas žaidėjas naudoja savo telefoną arba planšetinį kompiuterį ir eina į svetainę jackbox.tv, kuria žaisite.",
        s3h1: "ĮVESKITE ŽAIDIMO KAMBARIO KODĄ PER JACKBOX.TV",
        s3t1: "Kai ten atsidursite, įveskite keturių raidžių kambario kodą savo mobiliuoju įrenginiu..",
        s3t2: "Tada įveskite bet kokį vardą, kurį norite naudoti žaidime. Paspauskite mygtuką ŽAISTI, ir turėtumėte būti prisijungę!",
        s3t3: "The Jackbox Party Pack 9 versijoje taip pat galima nuskanuoti QR kodą naudojant savo mobiliojo įrenginio kamerą, kuris jus nusiųs į reikiamą nuorodą.",
        s3t4: "Jeigu atsijungiate žaidimo metu, atnaujinkite (atidarykite svetainę iš naujo) puslapį. Tai ištaiso daugumą trigdžių!",
        s4h1: "PRADĖKITE ŽAIDIMĄ!",
        s4t1: "Pirmasis prisijungęs asmuo tampa VIP (vedėjas). Kai visi, kurie nori žaisti, prisijungia ir yra pasiruošę, VIP gali pradėti žaidimą savo įrenginyje.",
        s4t2: "Jeigu įjungėte „Pradėti žaidimą tik iš valdiklio“ funkciją (žaidimo nustatymų meniu), jums reikės spausti ekrane rodomą mygtuką, norint pradėti žaidimą.",
        s4t3: "PASTABA: \"Visi prisijungę\" arba \"Pradėti žaidimą\" ekrane atsiras tik tada, jei turite pakankamai žaidėjų pradėti žaidimą..",
        
        help: "Ieškome bendraminčių",
        oopsd: "Šiuo metu šiam žaidimui vertimo neturime.",
        pity: "GAILA",
        tjppstext: "Mūsų išleisti vertimai yra skirti „Steam“ platformai, „Windows“ operacinei sistemai (+ „Humble/Fanatical“). Kitos platformos („Epic Games“) kol kas nebuvo išbandytos.<br>Šiame puslapyje galite gauti modifikacijų, kurios prideda jūsų norimas kalbas prie Jackbox žaidimų. Atkreipkite dėmesį, kad kol kas ne visi žaidimai yra išversti, ir vertimai gali turįti klaidų ar netikslumų. Tačiau visada galite mums padėti prisijungdami prie mūsų „Discord“ serverio. <br>Vertimui atsisiųsti turite turėti žaidimą „Steam“ platformoje. Mes nepalaikome piratavimo ir neskiriame pagalbos jo atvejais!",
        
        legalinfo: 'Teisinė informacija',
        l1p: 'Mes (toliau vadinami JBU) siekiame sukurti aukštos kokybės vertimus "The Jackbox Party Pack" franšizėms (toliau vadinamoms žaidimu) jūsų malonumui ir patogumui. Mūsų tikslas yra padaryti šiuos žaidimus prieinamus visiems, kurie nekalba Jackbox Games (toliau vadinama kūrėjais) žaidimams naudojamomis kalbomis. Tačiau norime atvirai ir sąžiningai pareikšti savo atsakomybės ribojimo ir vertimų naudojimo sąlygas.',
        l2h: 'Neoficialūs vertimai',
        l2p: 'JBU nėra oficialus žaidimo kūrėjų atstovas ir neturi jų leidimo daryti vertimus. Mūsų vertimai yra projekto dalyvių kūrybinės pastangos ir remiasi jų įgūdžiais ir žiniomis. Prašome nepamiršti, kad mes neturime oficialaus statuso šių žaidimų atžvilgiu.',
        l3h: 'Nepalaikomos klaidos',
        l3p: 'Vertimo ir adaptacijos proceso metu gali atsirasti klaidų ar nesutapimų. Mes dedame visas pastangas užtikrinti mūsų vertimų kokybę, tačiau negalime garantuoti jų tikslumo. Supraskite, kad gali kilti kai kurių problemų.',
        l4h: 'Piratavimas',
        l4p: 'Mes griežtai nepalaikome žaidimų platinimo nelegaliai. Mūsų vertimai skirti tik tiems vartotojams, kurie turi originalias žaidimų kopijas. Prašome laikytis įstatymų ir gerbti žaidimo kūrėjų intelektinę nuosavybę.',
        l5h: 'Atnaujinimai',
        l5p: 'Mūsų komanda gali periodiškai atnaujinti vertimus, siekdama pagerinti kokybę ar ištaisyti klaidas. Mes neįsipareigojame palaikyti pasenusių vertimų versijų.',
        l6h: 'Naudojimas savo rizika',
        l6p: 'Mūsų vertimus naudojate savo rizika. Rizikos gali apimti suderinamumą ir stabilumą, teisėtumą, atnaujinimus ir palaikymą. Mes neatsakome už jokius galimus nuostolius, atsirandančius naudojant mūsų vertimus.',
        l7p: 'Tikimės, kad mūsų pastangos padės jums mėgautis žaidimais savo gimtąja kalba, bet prašome laikytis aukščiau paminėtų sąlygų ir suprasti, kad mes nesame oficialūs kūrėjų atstovai. Dėkojame už jūsų paramą ir supratimą.',
      },
  };

  const carousel = document.querySelector(".carousel");
    
    const langEn = document.querySelectorAll("#lang-en");
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
        if (lang == "en") {
          console.log(langArr[lang]['lang']);
          if(document.getElementById("games")) {
            document.getElementById("games").style.display = "none";
          }
      }
        if (lang == "ee") {
            console.log(langArr[lang]['lang']);
            if(document.getElementById("games")) {
              document.getElementById("games").innerHTML = `
                ${gamessadDataee.map((game) => gamessad(game)).join("")}
              `;
              document.getElementById("games").style.display = "flex";
            }
        }
        if (lang == "lv") {
            console.log(langArr[lang]['lang']);
            if (carousel) {
              s1imgE.src = "./assets/img/05_OneOwnerToHost_lv.jpg";
              s2img1E.src = "./assets/img/07_RoomCode_lv.jpg",
              s2img2E.src = "./assets/img/08_ControllerWebsite_lv.jpg";
              s3img1E.src = "./assets/img/10_EnterRoomCode_lv.jpg";
              s3img2E.src = "./assets/img/11_EnterName_lv.jpg";
              s3img3E.src = "./assets/img/12_PressPlay_lv.jpg";
              s4imgE.src = "./assets/img/13_FirstIsVIP_lv.jpg";
            }
            if(document.getElementById("games")){
              document.getElementById("games").innerHTML = `
              <div class="control">
                <div class="split2">
                  <h1>Nesen tulkotās spēles</h1>
                  <div class="split">${newgamesDatalv.map((game) => newgames(game)).join("")}</div>
                </div>
                <div class="split3">
                  <h1>Spēles</h1>
                  <div class="split">${gamesDatalv.map((game) => newgames(game)).join("")}</div>
                </div>
                <h3>Mūsu tulkojums ir izlaists Windows OS balstīta Steam (+ Humble/Fanatical). Citas platformas (Epic Games) nav pārbaudītas. Lai lejupielādētu tulkojumu, spēlei jābūt instalētai pakalpojumā Steam. Mēs neatbalstām pirātismu un nepalīdzēsim.<br>Šajā lapā jūs varat iegūt modifikāciju, kas pievieno spēli kādā valodā. Lūdzu, ņemiet vērā, ka ne visas spēles ir tulkotas un tajās var būt kļūdas vai neprecizitātes. Tomēr jūs varat mums palīdzēt, ieejot discord serverī.</h3>
              </div>
              `;
              document.getElementById("games").style.display = "flex";
            }
        }
        if (lang == "lt") {
            console.log(langArr[lang]['lang']);
            if(document.getElementById("games")) {
              document.getElementById("games").innerHTML = `
                ${gamessadDatalt.map((game) => gamessad(game)).join("")}
              `;
              document.getElementById("games").style.display = "flex";
            }
        }
    }

    if (langEn) {
      langEn.forEach((element) => {
        element.addEventListener("click", setLang.bind(null, "en"));
      });
    }
    if (langEe) {
      langEe.forEach((element) => {
        element.addEventListener("click", setLang.bind(null, "ee"));
      });
    }
    if (langLv) {
      langLv.forEach((element) => {
        element.addEventListener("click", setLang.bind(null, "lv"));
      });
    }
    if (langLt) {
      langLt.forEach((element) => {
        element.addEventListener("click", setLang.bind(null, "lt"));
      });
    }
    
    var lang = (window.hasOwnProperty("localStorage") && window.localStorage.getItem("lang", lang)) || "en";
    setLang(lang);

// FAQ
const accordion = document.getElementById("accordion");
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
if(carousel){
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
}

const sv = document.getElementById("sv");
var black = document.getElementById("black");
const version = "1695840767";
console.log('URL: ' + window.location.pathname)
document.addEventListener("DOMContentLoaded", function () {
  const targetIds = ["jbu", "games", "faq"];

  targetIds.forEach(function (targetId) {
      const link = document.querySelector(`ul a[href="#${targetId}"]`);
      if (link) {
          link.addEventListener("click", function (event) {
              event.preventDefault();
              const targetSection = document.getElementById(targetId);
              const offset = 40;
              const targetPosition = targetSection.offsetTop - offset;
              window.scrollTo({
                  top: targetPosition,
                  behavior: "smooth"
              });
          });
      }
  });
});

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
      if (black) {
        black.style.display = "flex";
        document.getElementById("jbu").style.display = "none";
        document.getElementById("games").style.display = "none";
        document.getElementById("faq").style.display = "none";
        document.getElementById("ajg").style.display = "none";
        document.querySelector("header").style.display = "none";
      }
    }
  }
  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);
});