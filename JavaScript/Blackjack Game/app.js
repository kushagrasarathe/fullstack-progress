let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBalckJack = false;
let isAlive = true;
let message = "";
let display_message = document.querySelector("#message");
let display_sum = document.querySelector("#sum");
let display_cards = document.querySelector("#cards");

function startGame() {
    renderGame();
}

// random card function

function getRandomCard() {
  let random = Math.floor( Math.random() * 11 );
  return random;
}

function renderGame() {
  if (sum < 21) {
    message = "Draw a new card?";
  } else if (sum === 21) {
    hasBalckJack = true;
    message = "You've got Blackjack!";
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }

  display_message.textContent = message;
  display_sum.textContent = "Sum: " + sum ;
  // display_cards.textContent += "Cards: "
  
  for( let i = 0;  i < cards.length ; i++) {
    display_cards.textContent += ' ' + cards[i] + ' ';
  }

}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    console.log(cards);
}

