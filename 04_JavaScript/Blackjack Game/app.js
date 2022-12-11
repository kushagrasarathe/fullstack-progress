let cards = [];
let sum = 0;
let hasBalckJack = false;
let isAlive = false;
let message = "";
let display_message = document.querySelector("#message");
let display_sum = document.querySelector("#sum");
let display_cards = document.querySelector("#cards");

let player = {
  name: "Kushagra",
  chips: 145,
};

let playerEl = document.querySelector("#player");
playerEl.textContent = player.name + ": $" + player.chips;

function startGame() {
  isAlive = true;

  let firstCard = getRandomCard();
  let secondCard = getRandomCard();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;

  renderGame();
}

// random card function

function getRandomCard() {
  let random = Math.floor(Math.random() * 13) + 1;

  if (random === 1) {
    return 11;
  } else if (random > 10) {
    return 10;
  } else {
    return random;
  }
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
  display_sum.textContent = "Sum: " + sum;
  // display_cards.textContent += "Cards: "

  for (let i = 0; i < cards.length; i++) {
    display_cards.textContent += " " + cards[i] + " ";
  }
}

function newCard() {
  if (isAlive && hasBalckJack === false) {
    console.log("Drawing a new card from the deck!");
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
    console.log(cards);
  }
}
