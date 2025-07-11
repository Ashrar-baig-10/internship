let card1=[
    {
        img:"images/card1_images/slippers.jpeg",
        span_1:"Men's slippers and flipflops",
        span_2:"Min 70% off"

    },
    {
        img:"images/card1_images/sarees.webp",
        span_1:"Women's Sarees",
        span_2:"Special Offer"

    },
    {
        img:"images/card1_images/shirts.jpeg",
        span_1:"Casual Shirts ",
        span_2:"Special Offer"

    },
    {
        img:"images/card1_images/tshirt.webp",
        span_1:"Men's T-shirts",
        span_2:"In Focus Now"
    }
]
// Note: Multiple cards can be created too. I have used same array of objects of card1.  

function generateCards(){
    let html1=``
    card1.forEach((card) => {
        html1+=`<a class="card-item">
                        <img class="card-img"src="${card.img}" alt="">
                        <span class="card-text">${card.span_1}</span>
                        <span class="card-text-bot">${card.span_2}</span>
                    </a>`
    });
    document.querySelector(".card-items2").innerHTML=html1;

    let html2=``
    card1.forEach((card) => {
        html2+=`<a class="card-item">
                        <img class="card-img"src="${card.img}" alt="">
                        <span class="card-text">${card.span_1}</span>
                        <span class="card-text-bot">${card.span_2}</span>
                    </a>`
    });
    document.querySelector(".card-items3").innerHTML=html2;

    let html3=``
    card1.forEach((card) => {
        html3+=`<a class="card-item">
                        <img class="card-img"src="${card.img}" alt="">
                        <span class="card-text">${card.span_1}</span>
                        <span class="card-text-bot">${card.span_2}</span>
                    </a>`
    });
    document.querySelector(".card-items4").innerHTML=html3;

    let html4=``
    card1.forEach((card) => {
        html4+=`<a class="card-item">
                        <img class="card-img"src="${card.img}" alt="">
                        <span class="card-text">${card.span_1}</span>
                        <span class="card-text-bot">${card.span_2}</span>
                    </a>`
    });
    document.querySelector(".card-items1").innerHTML=html4;
}

generateCards();