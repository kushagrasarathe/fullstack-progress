let firstCard = 5;
let secondCard = 8;
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
  display_cards.textContent = "Cards: " +  cards[0] + " " +  cards[1];
}

function newCard() {
    console.log("Drawing a new card from the deck!");
    let card = 2;
    sum += card;
    cards.push(card);
    renderGame();
    console.log(cards);
}

