const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]
//Dichiariamo le varie immagini grandi e il thumb
const imageContainer = document.querySelector('.immagine-grande')
const thumb = document.querySelector('.thumb');



//Le carichiamo sul broweser attraverso JS
for(let i = 0; i < items.length; i++) {
    thisPath = items[i];
    thisTitle = title[i];
    thisText = text[i];
    console.log(thisPath)
    console.log(thisTitle)
    console.log(thisText)


    let immagineAttuale = `
    <div class="single-big-image">
        <img src="${thisPath}" alt="img ${i}">
        <div class="rel">
            <h3 class="title">${thisTitle}</h3>
            <p class="text">${thisText}</p> 
        </div>
    </div>
    `;
    imageContainer.innerHTML += immagineAttuale;
    //dichiaro il Thumb attuale
    let thumbAttuale = `
    <div class="single-image">
        <img src="${thisPath}" alt="${i}">
    </div>  
    `
    thumb.innerHTML += thumbAttuale;
    //Popolo il Thumb

}


