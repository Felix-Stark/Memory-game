const cardsElem = document.querySelectorAll('.memory-card');
const cardsParent = document.querySelector('.memory-cards');
const frontElem = document.querySelectorAll('.front');
const backElem = document.querySelectorAll('.back');
const overlayElem = document.querySelector('.overlay');
const closeElem = document.querySelector('close');



let flipCounter = 0;
let pairCounter = '';
let cardsToCompare = [];
let firstDraw = cardsToCompare[0];
let secondDraw = cardsToCompare[1];

let shuffleButton = document.querySelector('.shuffle-btn').addEventListener('click', ()=> {shuffleCards(shuffle)});

function shuffleCards() {
   //let cardArr = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
 
   for (let i = cardsParent.children.length; i >= 0; i--) {
      cardsParent.appendChild(cardsParent.children[Math.random() * i | 0]);
   }
}


// eventlistener 'click'. sends card to function flip(card)
for(i = 0; i < cardsElem.length; i++) {
   let card = cardsElem[i];
   
   card.addEventListener('click', ()=> {theGame(card)});
}

function theGame(card) {
   card.classList.toggle("flip");
   flipCounter++;
   
   if(flipCounter > 0 && flipCounter < 3) {
      cardsToCompare.push(card.attributes[1].value);
   }

   if(flipCounter == 2){
      if(cardsToCompare[0] == cardsToCompare[1]){

         let cardValue = card.attributes[1].value;

         let cardElement = document.querySelectorAll(`[data-card="${cardValue}"]`);

         for(i = 0; i < cardElement.length; i++) {
            let element = cardElement[i];

            element.classList.toggle('hide');
         }

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
   
   console.log(cardsToCompare)
   console.log('antal flips: ', flipCounter);
}

