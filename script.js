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