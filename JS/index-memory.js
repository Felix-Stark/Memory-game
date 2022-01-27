const cardsElem = document.querySelectorAll('.memory-card');
const frontElem = document.querySelectorAll('.front');
const backElem = document.querySelectorAll('.back');
const overlayElem = document.querySelector('.overlay');
const closeElem = document.querySelector('close');


let flipCounter = 0;
let cardsToCompare = [];
let firstDraw = cardsToCompare[0];
let secondDraw = cardsToCompare[1];


for(i = 0; i < cardsElem.length; i++) {
   let pickedCard = cardsElem[i];
   pickedCard.addEventListener('click', ()=> {flip(pickedCard)});
   cardsToCompare.push(pickedCard);
}

function flip(pick) {
   pick.classList.toggle("flip");
   flipCounter++;
   console.log(flipCounter)
   if(flipCounter == 2) {
      ()=> {compareCards(cardsToCompare)}
      
   }
}

function compareCards() {
   

   for(i = 0; j < cardsToCompare.length; j++)
   if(cardsToCompare[0] == cardsToCompare[1]) {
      cardsToCompare.slice()
   }
}
