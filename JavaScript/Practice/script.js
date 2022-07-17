// tip calculator

// food amount
let food = Number(prompt("Enter food amount"));
console.log(typeof food);

// tip percentage
let tipPercentage = Number(prompt("Enter tip percentage")) / 100;
console.log(typeof tipPercentage);

// tip amount
let tipAmount = food * tipPercentage;
console.log("Tip is", tipAmount);

// total
let total = food + tipAmount;
console.log("Your total bill is: ", total);

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
