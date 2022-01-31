
const memoryCards = document.querySelectorAll('.memory-cards');

let pickedCards = [];
let foundPairs = 0;
let flipCounter = 0;


for(i = 0; i < memoryCards.length; i++) {
    memoryCards[i].addEventListener('click', (event) => {
        if (pickedCards.length < 2) {
            event.target.classList.toggle('flip')
            addCard(event.target);
        }
    });
}

function flipCards() {
    memoryCards[i].classList.toggle('flip');
    compareCards;
}

function flipBackCards() {
    setTimeout(() => {
        pickedCards[0].classList.toggle('flip')
        pickedCards[1].classList.toggle('flip')
        resetCards();
    }, 1000);

}

function resetCards() {
    pickedCards = [];
}

function compareCards() {
    const cardOne = pickedCards[0].getAttribute('data-card');
    const cardTwo = pickedCards[1].getAttribute('data-card');

    if (cardOne == cardTwo) {
        foundPairs++;
        
    } else {
        flipBackCards();
    }
    resetCards;
}


function addCard(card) {
    if(flipCounter > 0 && < 3);
}