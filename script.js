let accordionButtonContainer = document.querySelectorAll(".accordion-button-container");
let accordion = document.querySelectorAll(".accordion");


for(let i=0; i<accordionButtonContainer.length; i++){
  accordionButtonContainer[i].addEventListener("click", function(e){
    accordion[i].classList.toggle('active')
  })
};

document.addEventListener("click", function(e) {
  let accordionButtonContainer = document.querySelectorAll(".accordion-button-container");
  let accordion = document.querySelectorAll(".accordion");
  for(let i=0; i<accordionButtonContainer.length; i++) {
    if(!accordionButtonContainer[i].contains(e.target)) {
      accordion[i].classList.remove('active');
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
let languageDropdownText = document.querySelector("#language-toggle p");
let languageList = document.querySelector(".language__list-dropdown");
let languageListItems = document.querySelectorAll(".language__list-dropdown li");
let languageToggleIcon = document.querySelector(".language__toggle-icon");


document.addEventListener("click", function(e) {
  languageList.classList.toggle("show");
  languageToggleIcon.classList.toggle("show");
  if(!languageDropdown.contains(e.target)) {
    languageList.classList.remove("show");
    languageToggleIcon.classList.remove("show");
  }
});

for(let i=0; i<languageListItems.length; i++) {
  languageListItems[i].addEventListener("click", function() {
    languageDropdownText.textContent = languageListItems[i].textContent;
  })
};


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

document.addEventListener("click", function(e) {
  if(!mobileBtns.contains(e.target) && !menuMobile.contains(e.target)) {
    menuBtn = false;
    menuDropdownOn.style.display = "none";
    menuDropdownOff.style.display = "block";
    menuMobile.remove('show');
  }
});
