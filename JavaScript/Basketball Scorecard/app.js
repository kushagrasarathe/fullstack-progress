let home = document.querySelector("#home_score");
let guest = document.querySelector("#guest_score");

let home_section = document.querySelector("#home");
let guest_section = document.querySelector("#guest");

let result = document.querySelector("#result");

let home_score = 0;
let guest_score = 0;

// home section
function onePointerHome() {
  home_score += 1;
  home.textContent = home_score;
}

function twoPointerHome() {
  home_score += 2;
  home.textContent = home_score;
}

function threePointerHome() {
  home_score += 3;
  home.textContent = home_score;
}

// guest section
function onePointerGuest() {
  guest_score += 1;
  guest.textContent = guest_score;
}

function twoPointerGuest() {
  guest_score += 2;
  guest.textContent = guest_score;
}

function threePointerGuest() {
  guest_score += 3;
  guest.textContent = guest_score;
}

//  new game

function newGame() {
  home_score = 0;
  home.textContent = home_score;
  guest_score = 0;
  guest.textContent = guest_score;
  home_section.classList.remove("winner");
  guest_section.classList.remove("winner");
  guest_section.classList.remove("draw");
  home_section.classList.remove("draw");
  result.textContent = "";
}

// end game

function endGame() {
  if (home_score > guest_score && guest_score != home_score) {
    home_section.classList.add("winner");
    guest_section.classList.remove("winner");
    result.textContent = "Home Team Wins";
    setTimeout(newGame, 2500)
  } else if (guest_score > home_score && home_score != guest_score) {
    guest_section.classList.add("winner");
    home_section.classList.remove("winner");
    result.textContent = "Guest Team Wins";
    setTimeout(newGame, 2500)

   
  } else {
    guest_section.classList.add("draw");
    home_section.classList.add("draw");
    result.textContent = "Match Draw";
    setTimeout(newGame, 2500)

   
  }
}

//  leader

function leader() {
  if (home_score > guest_score) {
    document.querySelector(".score").classList.toggle("leader");
  } else if (guest_score > home_score) {
  }
}

leader();
