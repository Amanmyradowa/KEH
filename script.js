let accordionButtonContainer = document.querySelectorAll(".accordion-button-container");
let accordion = document.querySelectorAll(".accordion");


for(let i=0; i<accordionButtonContainer.length; i++){
  accordionButtonContainer[i].addEventListener("click", function(e){

    if(accordion[i].style.height === "90px") {
      accordion[i].style.height = "0"
    }else{
      accordion[i].style.height = "90px"
    }

  })
};

document.addEventListener("click", function(e) {
  let accordionButtonContainer = document.querySelectorAll(".accordion-button-container");
  let accordion = document.querySelectorAll(".accordion");
  for(let i=0; i<accordionButtonContainer.length; i++) {
    if(!accordionButtonContainer[i].contains(e.target)) {
      accordion[i].style.height = '0';
    }
  }
})


let langs = document.querySelectorAll(".language__content div");

for(let i=0; i<langs.length; i++) {
  langs[i].addEventListener("click", function() {
    for(let i=0; i<3; i++) {
      langs[i].classList.remove("text-color-blue")
    }
    langs[i].classList.add("text-color-blue");
  })
}

// mobile dropdowns

let languageDropdown = document.querySelector("#language-toggle");
let languageList = document.querySelector(".language__list-dropdown");
let languageToggleIcon = document.querySelector(".language__toggle-icon");

languageDropdown.addEventListener("click", function() {
  languageList.classList.toggle("show");
  languageToggleIcon.classList.toggle("show")
})


let menuDropdownOff = document.querySelector(".header-toogle-icon-off"); // hamburger
let menuDropdownOn = document.querySelector(".header-toogle-icon-on"); // X
let menuMobile = document.querySelector(".menu-mobile");
let mobileBtns = document.querySelector(".mobile-menu-close-btns");

let menuBtn = false;

mobileBtns.addEventListener("click", function() {

  if(menuBtn == false) {
    menuBtn = true;
    menuDropdownOff.style.display = "none";
    menuDropdownOn.style.display = "block";
  } else {
    menuDropdownOn.style.display = "none";
    menuDropdownOff.style.display = "block";
    menuBtn = false;
  }
  menuMobile.classList.toggle("show");
});
