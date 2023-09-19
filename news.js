const newsItems = [
  {
    text: "Академия ITEA объявляет о скидках в честь Ораза байрамы"
  },
  {
    text: "В рамках фестиваля «Каспийские сезоны-2023» состоялся День Туркменистана"
  },
  {
    text: "Посол Евросоюза Алонсо завершает дипмиссию в Туркменистане"
  },
  {
    text: "Глава Туркменистана поздравил Президента Беларуси с днём рождения"
  },
  {
    text: "К Дню знаний Русский Дом в Ашхабаде проведет творческий уро"
  },
  {
    text: "В Ашхабаде планируется построить автомобильный мост на пересечении улицы Г.Кулиева и ЖК «Тазе Заман»"
  },
  {
    text: "Академия ITEA объявляет о скидках в честь Ораза байрам"
  },
  {
    text: "В рамках фестиваля «Каспийские сезоны-2023» состоялся День Туркменистана"
  },
]

let news_items = document.querySelector(".news__items");

function setNews() {
  
  for(let i=0; i<newsItems.length; i++) {
    const div = document.createElement('div');
    div.setAttribute('class', 'item text-color-dark-gray font-size-20 font-weight-700 padding-20-12-20-10 border-bottom-grey');
    div.textContent = newsItems[i].text;
    news_items.appendChild(div);
  }
}

setNews();

function changeNews() {
  let news = document.querySelector(".news");
  
  let newsImage = document.querySelector(".news__image");
  
  let img = document.createElement('img');
  img.setAttribute('src', `./assets/images/${newsDatas[0].img}`);
  img.setAttribute('class', 'image__element');
  newsImage.appendChild(img);
  
  let title = document.createElement('h3');
  title.setAttribute('class', 'news__heading text-color-dark-gray font-size-20 font-weight-700 margin-bottom-18');
  title.textContent = newsDatas[0].title;
  news.appendChild(title);
  
  let date = document.createElement('div');
  date.setAttribute('class', 'date font-size-12 text-color-dark-gray margin-bottom-10');
  date.textContent = newsDatas[0].date;
  news.appendChild(date);
}


let newsDatas = [
  {
    img: 'Rectangle 253.png',
    title: 'В Ашхабаде планируется построить автомобильный мост на пересечении улицы Г.Кулиева и ЖК «Тазе Заман»',
    date: '11.04.2023',
    text: 'Министерство строительства и архитектуры Туркменистана объявило международный конкурс на подготовку и строительство проекта нового автомобильного моста на пересечении улицы Г.Кулиева и жилого комплекса «Тазе Заман» в г. Ашхабаде. Конкурс проводится по поручению Государственного агентства по управлению строительством автомобильных дорог. Заявки и предложения заинтересованных лиц принимаются и оформляются в отделе маркетинговых исследований и внешнеэкономических связей Министерства строительства и архитектуры. Заявки принимаются до 10 октября 2023 года по адресу: г. Ашхабад, проспект Арчабиль, 84. Для связи можно обращаться по телефонам: 44-46-64, 44-46-77.'
  }
]

changeNews();
