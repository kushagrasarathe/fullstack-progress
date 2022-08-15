const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let first_pass = document.querySelector(".one");
let second_pass = document.querySelector(".two");
let generate_btn = document.querySelector(".btn");


let arr_len = characters.length;

const empty = "";

let pwd_one
let pwd_two

function generatePassword() {

  pwd_one = []
  pwd_two = []

  for (let i = 1; i <= 15; i++) {
    let random1 = Math.floor(Math.random() * arr_len);
    let random2 = Math.floor(Math.random() * arr_len);

    pwd_one.push(characters[random1]);
    pwd_two.push(characters[random2]);
    // console.log(pwd_one);
  }
  first_pass.textContent = pwd_one.join('');
  second_pass.textContent = pwd_two.join(''); 

}

generate_btn.addEventListener("click", generatePassword);
