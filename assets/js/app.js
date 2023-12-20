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
    href: "href=\"./games.html\"",
    image: "TJPSTeeLV",
    name: "Kre K.O.",
    span: "THE JACKBOX PARTY STARTER",
    date: "2023. gada 01. jūlijs",
    new: "<p class=\"new\">JAUNS</p>",
    view: ""
  },
  {
    href: "./games.html",
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

const gamessadData = [{
  ee: {
    nttext: "Hetkel meil ei ole tõlkeid, aga võid meie tõlketiimiga ühineda!",
    ds: "DISCORDI SERVER"
  },
  lt: {
    nttext: "Šiuo metu neturime jokių vertimų, bet galite prisijungti prie mūsų vertimų komandos!",
    ds: "DISCORDO SERVERIS"
  }
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

const carousel = document.querySelector(".carousel");
    
const langAEL = ["en", "ee", "lv", "lt"];
langAEL.forEach((lang) => {
  const langElements = document.querySelectorAll(`#lang-${lang}`);
    if (langElements.length > 0) {
      langElements.forEach((element) => {
        element.addEventListener("click", setLang.bind(null, lang));
    });
  }
});

var s1imgE = document.getElementById("s1img");
var s2img1E = document.getElementById("s2img1");
var s2img2E = document.getElementById("s2img2");
var s3img1E = document.getElementById("s3img1");
var s3img2E = document.getElementById("s3img2");
var s3img3E = document.getElementById("s3img3");
var s4imgE = document.getElementById("s4img");

function updateGamesContainer(containerId, DA, DAT, langu, D) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = DA.map((game) => DAT(game[langu])).join("");
    container.style.display = D;
  }
}

async function loadJSON(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error loading JSON:', error);
        return null;
      }
}

async function setLang(lang) {
      const langArr = await loadJSON('assets/json/langArr.json');
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
          if(document.getElementById("gamesne")) {
            document.getElementById("gamesne").style.display = "none";
          }
      }
        if (lang == "ee") {
            console.log(langArr[lang]['lang']);
            updateGamesContainer("games", gamessadData, gamessad, lang, "flex");
            updateGamesContainer("gamesne", gamessadData, gamessad, lang, "flex");
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
                <div class="split3">
                  <h1>Spēles</h1>
                  <div class="split">${gamesDatalv.map((game) => newgames(game)).join("")}</div>
                </div>
                <h3>Mūsu tulkojums ir izlaists Windows OS balstīta Steam (+ Humble/Fanatical). Citas platformas (Epic Games) nav pārbaudītas. Lai lejupielādētu tulkojumu, spēlei jābūt instalētai pakalpojumā Steam. Mēs neatbalstām pirātismu un nepalīdzēsim.<br>Šajā lapā jūs varat iegūt modifikāciju, kas pievieno spēli kādā valodā. Lūdzu, ņemiet vērā, ka ne visas spēles ir tulkotas un tajās var būt kļūdas vai neprecizitātes. Tomēr jūs varat mums palīdzēt, ieejot discord serverī.</h3>
              </div>
              `;
              document.getElementById("games").style.display = "flex";
            }
            if(document.getElementById("gamesne")){
              document.getElementById("gamesne").innerHTML = `
              <div class="control">
                <div class="split2">
                  <h1>Nesen tulkotās spēles</h1>
                  <div class="split">${newgamesDatalv.map((game) => newgames(game)).join("")}</div>
                </div>
              </div>
              `;
              document.getElementById("gamesne").style.display = "flex";
            }
        }
        if (lang == "lt") {
            console.log(langArr[lang]['lang']);
            updateGamesContainer("games", gamessadData, gamessad, lang, "flex");
            updateGamesContainer("gamesne", gamessadData, gamessad, lang, "flex");
        }
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
const version = "1703031360";
console.log('URL: ' + window.location.pathname)
document.addEventListener("DOMContentLoaded", setLang);
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

let clickdrop = false;
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
        const elementsToHide = [
          "header",
          "footer",
          "ltext",
          "games",
          "whi",
          "ltrcmain",
          "jbu",
          "gamesne",
          "faq",
          "ajg"
        ];
    
        elementsToHide.forEach((elementId) => {
            const element = document.getElementById(elementId);
            if (element) {
                element.style.display = "none";
            }
        });
    }
    
    }
  }
  window.addEventListener('load', checkScreenWidth);
  window.addEventListener('resize', checkScreenWidth);
});