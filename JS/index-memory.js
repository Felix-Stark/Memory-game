const cardsElem = document.querySelectorAll('.memory-card');
const frontElem = document.querySelectorAll('.front');
const backElem = document.querySelectorAll('.back');
const overlayElem = document.querySelector('.overlay');
const closeElem = document.querySelector('close');



let flipCounter = 0;
let pairCounter = '';
let cardsToCompare = [];
let firstDraw = cardsToCompare[0];
let secondDraw = cardsToCompare[1];


// eventlistener 'click'. sends card to function flip(card)
for(i = 0; i < cardsElem.length; i++) {
   let card = cardsElem[i];
   
   card.addEventListener('click', ()=> {theGame(card)});
}
// , cardsToCompare.push(card.attributes[1].value)

// apply class="flip" on clicked card. send flipped cards value to function compareCards
function theGame(card) {
   card.classList.toggle("flip");
   flipCounter++;
   
   if(flipCounter > 0 && flipCounter < 3) {
      cardsToCompare.push(card.attributes[1].value);
   }
   if(cardsToCompare)
   
   console.log(cardsToCompare)
   console.log('antal flips: ', flipCounter);
}

