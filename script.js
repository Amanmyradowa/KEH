let accordionButtonContainer = document.querySelectorAll(".accordion-button-container");
let accordion = document.querySelectorAll(".accordion");


for(let i=0; i<accordionButtonContainer.length; i++){
  accordionButtonContainer[i].addEventListener("click", function(e){

    if(accordion[i].style.height === "93px") {
      accordion[i].style.height = "0"
      // console.log("Salam");
    } else{
      accordion[i].style.height = "93px"
    }

  })
};
