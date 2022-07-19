// // tip calculator

// // food amount
// let food = Number(prompt("Enter food amount"))  ;
// console.log(typeof food);

// // tip percentage
// let tipPercentage = Number(prompt("Enter tip percentage")) / 100;
// console.log(typeof tipPercentage);

// // tip amount
// let tipAmount = food * tipPercentage;
// console.log("Tip is", tipAmount);

// // total
// let total = food + tipAmount;
// console.log("Your total bill is: ", total);

// baby whether app

let whether;

if (whether == "rain") {
  console.log("Stay home");
} else {
  console.log("Go for vacation");
}

// tip calculator using function

/**
 *  @function calculate tip
 *  @param {number} foodAmt cost of food
 *  @param {number} tipPercent tip percentage
 *  @return {number} total bill to be paid including tip based on the percentage
 */

function calcTip(foodAmt, tipPercent) {
  let tipAmt = (foodAmt * tipPercent) / 100;
  let totaBill = foodAmt + tipAmt;
  return `Tip percentage is $${tipAmt} and your total bill is $${totaBill}.`;
}

console.log(calcTip(500, 10));

// javascript exercise
/* 
  TODO: Write a function that sums two numbers
  TODO: Write a function that subtracts two numbers
  TODO: Write a function that divides two numbers.
  TODO: Write a function that multiplies two numbers.
  *NOTE* be sure to handle dividing by zero 😉
  ES5 Syntax: function Add(){}
  ES6 Syntax (Arrow function): const add = () => {}
*/

/**
 *  @function calculate tip
 *  @param {number} num1 first number
 *  @param {number} num2 second number
 *  @return {number} result
 */
const add = (num1, num2) => num1 + num2;

const sub = (num1, num2) => num1 - num2;

const div = (num1, num2) => num1 / num2;

const mul = (num1, num2) => num1 * num2;

console.log(`Sum is: ${add(50, 50)}`);
console.log(`Substraction is ${sub(50, 50)}`);
console.log(`Division is ${div(50, 50)}`);
console.log(`Multiplication is ${mul(50, 50)}`);


// DOM
const body = document.body;

// adding element to page
body.append("Hello Kushagra!!!  ", "Lets Learn JavaScript!!!");

// appendChild method doesn't let us append string to page, to append strings use append() method
// appendChild can only append one element at a time
// body.appendChild("Hello"); // this gives error

// creating elements in page
const newEl1 = document.createElement('div');
const newEl2 = document.createElement('div');
// adding text to new div using .innerText
newEl1.innerText = "This text is added using .innerText";
// appending new div to page
body.append(newEl1);
// adding text to new div using .textContent
newEl2.textContent = "This text is added using .textContent";
// appending new div to page
body.append(newEl2);

// modifying html using dom manipulation
const strong = document.createElement('span');
// strong.innerText = "<strong>Kushagra</strong>";
strong.innerHTML = "<strong>Kushagra</strong>";
body.append(strong);