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
