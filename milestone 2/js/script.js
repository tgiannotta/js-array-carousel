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

const imageContainer = document.querySelector('.immagine-grande')


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
}





/* 


<div class="single-big-image">
                    <img src="img/01.jpg" alt="img-01">
                    <div class="rel">
                        <h3 class="title">prova</h3>
                        <p class="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quidem illum debitis? Provident facere cupiditate in, veritatis consequatur</p>
                    </div>
                    
                </div> */