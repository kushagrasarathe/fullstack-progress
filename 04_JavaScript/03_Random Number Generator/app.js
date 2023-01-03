let display = document.querySelector(".display");

const button = document.querySelector(".button");

button.addEventListener('click', generate)

function generate() {
  let randomNumber = Math.round(Math.random() * 100 + 1);
  display.textContent = randomNumber;
  console.log(randomNumber);
}
