document.addEventListener("DOMContentLoaded", function () {
    const version = "1713446499";
    console.log("Version: " + version);
    console.log('URL: ' + window.location.pathname)
    setLang();
    if(text) { setSpecialText();}

    const targetIds = ["jbu", "games", "faq"];

    function scrollToTarget(targetId) {
        const targetSection = document.getElementById(targetId);
        const offset = 98;
        const targetPosition = targetSection.offsetTop - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth"
        });
    }

    targetIds.forEach(function (targetId) {
        const link = document.querySelector(`li a[href="#${targetId}"], li a[href="index.html#${targetId}"]`);
        if (link) {
            link.addEventListener("click", function (event) {
                event.preventDefault();
                scrollToTarget(targetId);
            });
        }
    });
});


/**
 * 
 * @param {*} url asset to json
 * @returns load JSON
 */
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

const secsorry = document.getElementById("sorry");
const seclv = document.getElementById("gameslv");
var s1imgE = document.getElementById("s1img");
var s2img1E = document.getElementById("s2img1");
var s2img2E = document.getElementById("s2img2");
var s3img1E = document.getElementById("s3img1");
var s3img2E = document.getElementById("s3img2");
var s3img3E = document.getElementById("s3img3");
var s4imgE = document.getElementById("s4img");

async function setLang(lang) {
    const langArr = await loadJSON('../assets/json/langArr.json');
    if (!langArr.hasOwnProperty(lang)) return;
    if (window.hasOwnProperty("localStorage"))
        window.localStorage.setItem("lang", lang);
    for (let key in langArr[lang]) {
        let elem = document.querySelectorAll('[key="' + key + '"]');
        for (var i = 0; i < elem.length; i++) {
            if (elem) {
            elem[i].innerHTML = langArr[lang][key];
            }
        }
    }
    if (lang == "en") {
        console.log(langArr[lang]['lang']);
        setTimeout(() => {
            if (window.location.pathname === "/preload.html" || window.location.pathname === "/preload" ) {
                setTimeout(() => {
                    document.getElementById("qwelcome").style.display = "flex";
        
                    function setLangText(langId, langText) {
                        const langElement = document.getElementById(langId);
                        if (langElement) {
                            langElement.addEventListener("mouseover", function () {
                                document.getElementById("whatlang").textContent = langText;
                            });
                            langElement.addEventListener("mouseleave", function () {
                                document.getElementById("whatlang").textContent = "What language do you want to have fun in?";
                            });
                            langElement.addEventListener("click", function () {
                                console.log(langId);
                                setLang(langId);
                            });
                        }
                    }
                    setLangText("ee", "Lõbutsege!");
                    setLangText("lv", "Izklaidējies!");
                    setLangText("lt", "Gero laiko!");
                }, 6000)
            } else {
                if (window.location.pathname !== "/preload.html" || window.location.pathname !== "/preload") {
                    window.location.href = "../preload.html";
                } else {
                    console.log('Hey, are you alright?')
                }
            }
        }, 1000)
    }
    if (lang !== "en") {
        if (window.location.pathname === "/preload.html" || window.location.pathname === "/preload" ) {
            if (window.location.pathname !== "/index.html" || window.location.pathname !== "/") {
                window.location.href = "../index.html";
            }
        }
    }
    if (lang == "ee") {
        console.log(langArr[lang]['lang']);
        if (secsorry){
            secsorry.style.display = "flex";
        }
        if (seclv) {
            seclv.style.display = "none";
        }
    }
    if (carousel) {
        s1imgE.src = "./assets/img/faq/05_OneOwnerToHost.jpg";
        s2img1E.src = "./assets/img/faq/07_RoomCode.jpg",
        s2img2E.src = "./assets/img/faq/08_ControllerWebsite.jpg";
        s3img1E.src = "./assets/img/faq/10_EnterRoomCode.jpg";
        s3img2E.src = "./assets/img/faq/11_EnterName.jpg";
        s3img3E.src = "./assets/img/faq/12_PressPlay.jpg";
        s4imgE.src = "./assets/img/faq/13_FirstIsVIP.jpg";
    }
    if (lang == "lv") {
        console.log(langArr[lang]['lang']);
        if (carousel) {
            s1imgE.src = "./assets/img/faq/05_OneOwnerToHost_lv.jpg";
            s2img1E.src = "./assets/img/faq/07_RoomCode_lv.jpg",
            s2img2E.src = "./assets/img/faq/08_ControllerWebsite_lv.jpg";
            s3img1E.src = "./assets/img/faq/10_EnterRoomCode_lv.jpg";
            s3img2E.src = "./assets/img/faq/11_EnterName_lv.jpg";
            s3img3E.src = "./assets/img/faq/12_PressPlay_lv.jpg";
            s4imgE.src = "./assets/img/faq/13_FirstIsVIP_lv.jpg";
        }
        if (secsorry){
            secsorry.style.display = "none";
        } 
        if (seclv) {
            seclv.style.display = "block";
        }
    }
    if (lang == "lt") {
        console.log(langArr[lang]['lang']);
        if (secsorry){
            secsorry.style.display = "flex";
        }
        if (seclv) {
            seclv.style.display = "none";
        }
    }
}
var lang = (window.hasOwnProperty("localStorage") && window.localStorage.getItem("lang", lang)) || "en";
setLang(lang);

const langAEL = ["en", "ee", "lv", "lt"];
langAEL.forEach((lang) => {
  const langElements = document.querySelectorAll(`#lang-${lang}`);
    if (langElements.length > 0) {
      langElements.forEach((element) => {
        element.addEventListener("click", setLang.bind(null, lang));
    });
  }
});

// LANGUAGE DROP-SELECTION
let clickdrop = false;
var dropdownContent = document.querySelector('.dropdown-content');
if(document.getElementById('lbtn')) {
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
}

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
const carousel = document.querySelector(".carousel");
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

// BINJPIPE
const text = document.getElementById('random-text');
function setSpecialText() {
    var lang = window.localStorage.getItem("lang", lang);
    let specialTexts = {
        "14-02": {
            lt: "Su Valentino diena!",
            ru: "Head sõbrapäeva!",
            lv: "Priecīgus Sv. Valentīna dienu!"
        },
        "04-05": {
            lv: "Sveicam Latvijas Neatkarības atjaunošanas dienu!"
        },
        "18-11": {
            lv: "Sveicam Latvijas Republikas dzimšanas dienā!"
        },
        "25-12": {
            ee: "Häid jõule!",
            lt: "Linksmų Kalėdų!",
            lv: "Priecīgus Ziemassvētkus!"
        }
    };

    let texts = {
        lt: [
            "Sveiki atvykę į puslapį!",
            "iniciatyvinė komanda"
        ],
        ee: [
            "Tere tulemast kodulehele!",
            "algatusrühm"
        ],
        lv: [
            "Laipni lūgti mājāslapā!",
            "iniciatīva komanda"
        ]
    };

    let randomIndex = Math.floor(Math.random() * texts[lang].length);
    let randomText = texts[lang][randomIndex];

    function getSpecialText() {
        let today = new Date();
        let month = (today.getMonth() + 1).toString().padStart(2, "0");
        let day = today.getDate().toString().padStart(2, "0");
        let currentDate = `${day}-${month}`;
        return specialTexts[currentDate]?.[lang] || randomText;
    }
    text.innerHTML = getSpecialText();
}