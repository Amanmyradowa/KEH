let accordionButtonContainer = document.querySelectorAll(".accordion-button-container");
let accordion = document.querySelectorAll(".accordion");


for(let i=0; i<accordionButtonContainer.length; i++){
  accordionButtonContainer[i].addEventListener("click", function(e){

    if(accordion[i].style.height === "90px") {
      accordion[i].style.height = "0"
    } else{
      accordion[i].style.height = "90px"
    }
  })
};
