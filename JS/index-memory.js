const cardsElem = document.querySelectorAll('.memory-card');
const cardsParent = document.querySelector('.memory-cards');
const frontElem = document.querySelectorAll('.front');
const backElem = document.querySelectorAll('.back');
const overlayElem = document.querySelector('.overlay');
const closeElem = document.querySelector('.close');
const shuffleButton = document.querySelector('.shuffle-btn');
const resetElem = document.querySelector('.reset');
const resetButton = document.querySelector('.reset-button')

let flipCounter = 0;
let pairCounter = '';
let shuffleCounter = '';
let cardsToCompare = [];


shuffleButton.addEventListener('click', ()=> {shuffleCards()});

closeElem.addEventListener('click', ()=> {closeOverlay()});

function closeOverlay() {
   

   overlayElem.classList.toggle('show');
   resetElem.classList.toggle('show');
   resetButton.addEventListener('click', ()=> {newGame(resetElem)});
}

function newGame() {
   flipCounter = 0;
   cardsToCompare = [];
   pairCounter = '';
   shuffleCounter = '';

   for (i = 0; i < cardsElem.length; i++){
      let resetCards = cardsElem[i];
      resetElem.classList.toggle('show');
      resetCards.classList.toggle('hide', 'flip');
   }
}


function shuffleCards(shuffled) {
   for (i = cardsParent.children.length; i >= 0; i--) {
      let randomCards = cardsParent.appendChild(cardsParent.children[Math.random() * i | 0]);
      
      console.log(randomCards)
      shuffleCounter++;
   }
return shuffled;
}

// eventlistener 'click'. sends card to function flip(card)
for(i = 0; i < cardsElem.length; i++) {
   let card = cardsElem[i];

   card.addEventListener('click', ()=> {theGame(card)});
   
}
//---------------------------------------------------------
//START MEMORY-GAME
function theGame(card) {

   card.classList.toggle("flip");
   flipCounter++;
   
   if(flipCounter > 0 && flipCounter < 3) {
      cardsToCompare.push(card.attributes[1].value);
   }

   if(flipCounter == 2){
      if(cardsToCompare[0] == cardsToCompare[1]){
         pairCounter++;
         let cardValue = card.attributes[1].value;

         let cardElement = document.querySelectorAll(`[data-card="${cardValue}"]`);

         setTimeout(function() {

            for(i = 0; i < cardElement.length; i++) {
               let element = cardElement[i];
   
               element.classList.toggle('hide');
            }
         },1000);

         flipCounter = 0;
         cardsToCompare = [];
      }
      else{

         let cardElement = document.querySelectorAll(`.flip`);

         setTimeout(function(){
            for(i = 0; i < cardElement.length; i++) {
               let element = cardElement[i];

               element.classList.toggle('flip');
            }
         },1000);

         flipCounter = 0;
         cardsToCompare = [];
      }
   }
   if (pairCounter > 7) {
      overlayElem.classList.toggle('show');
   }

   console.log(cardsToCompare)
   console.log('antal flips: ', flipCounter);
   console.log('antal par: ', pairCounter)
   
}