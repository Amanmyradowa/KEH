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


// let menuLinks = document.querySelector(".menu__list li a");

// for(let i=0; i<menuLinks.length; i++) {
//   menuLinks[i].addEventListener("click", function() {
//     for(let i=0; i<4; i++) {
//       menuLinks[i].classList.remove("text-color-blue");
//     }

//     menuLinks[i].classList.add("text-color-blue");
//   })
// }


const data = [
  {
    text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore quod natus totam ipsa blanditiis quae sequi nostrum, facilis fugit, cumque eum repellendus aliquam quis accusamus atque? Nam rem ad dolorum corrupti ullam ut illum, quasi sit odio vel. Esse cum consequuntur aperiam quasi, delectus ullam, autem ducimus eveniet laborum, in quaerat? Debitis eius porro iusto sunt vel, alias, magni officia voluptas, cupiditate incidunt eveniet vitae ratione possimus! Suscipit voluptatum neque itaque fuga perspiciatis labore soluta et aliquid culpa commodi alias provident saepe, minus ipsa? Maxime, nihil repellat corrupti suscipit architecto iste. Odit officiis ut iusto eum, ullam dolorem sequi!',
    image:'Rectangle 278.png',
  },
  {
    text:'1Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore quod natus totam ipsa blanditiis quae sequi nostrum, facilis fugit, cumque eum repellendus aliquam quis accusamus atque? Nam rem ad dolorum corrupti ullam ut illum, quasi sit odio vel. Esse cum consequuntur aperiam quasi, delectus ullam, autem ducimus eveniet laborum, in quaerat? Debitis eius porro iusto sunt vel, alias, magni officia voluptas, cupiditate incidunt eveniet vitae ratione possimus! Suscipit voluptatum neque itaque fuga perspiciatis labore soluta et aliquid culpa commodi alias provident saepe, minus ipsa? Maxime, nihil repellat corrupti suscipit architecto iste. Odit officiis ut iusto eum, ullam dolorem sequi!',
    image:'KEH-269.png',
  },
  {
    text:'2Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore quod natus totam ipsa blanditiis quae sequi nostrum, facilis fugit, cumque eum repellendus aliquam quis accusamus atque? Nam rem ad dolorum corrupti ullam ut illum, quasi sit odio vel. Esse cum consequuntur aperiam quasi, delectus ullam, autem ducimus eveniet laborum, in quaerat? Debitis eius porro iusto sunt vel, alias, magni officia voluptas, cupiditate incidunt eveniet vitae ratione possimus! Suscipit voluptatum neque itaque fuga perspiciatis labore soluta et aliquid culpa commodi alias provident saepe, minus ipsa? Maxime, nihil repellat corrupti suscipit architecto iste. Odit officiis ut iusto eum, ullam dolorem sequi!',
    image:'Rectangle 278.png',
  },
  {
    text:'3Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus tempore quod natus totam ipsa blanditiis quae sequi nostrum, facilis fugit, cumque eum repellendus aliquam quis accusamus atque? Nam rem ad dolorum corrupti ullam ut illum, quasi sit odio vel. Esse cum consequuntur aperiam quasi, delectus ullam, autem ducimus eveniet laborum, in quaerat? Debitis eius porro iusto sunt vel, alias, magni officia voluptas, cupiditate incidunt eveniet vitae ratione possimus! Suscipit voluptatum neque itaque fuga perspiciatis labore soluta et aliquid culpa commodi alias provident saepe, minus ipsa? Maxime, nihil repellat corrupti suscipit architecto iste. Odit officiis ut iusto eum, ullam dolorem sequi!',
    image:'Rectangle 278.png',
  },
]


const setData = (id)=>{
  const infoLeft = document.querySelector('.information__container__left');
  const infoRight = document.querySelector('.information__container__right p');
  
  // Set text
  infoRight.textContent = data[id].text;

  // Set Image
  const img = document.createElement('img');
  img.setAttribute('src',`./assets/images/${data[id].image}`);
  img.setAttribute('class','image__element')
  infoLeft.innerHTML = '';
  infoLeft.appendChild(img)
}

setData(0)

const buttons = document.querySelectorAll(".buttons-container button")
buttons[0].classList.add('color-background-blue')
buttons[0].classList.add('text-color-white')

for(let i = 0; i<buttons.length; i++){
  buttons[i].addEventListener('click',changeInfo);
}

function changeInfo(e){
  const id = e.target.id;
  const button = e.target;

  setData(id);

  for(let i= 0; i<buttons.length; i++){
    buttons[i].classList.remove('color-background-blue')
    buttons[i].classList.remove('text-color-white')
  }
  button.classList.add('color-background-blue')
  button.classList.add('text-color-white')
}