// find factorial of a given number
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

// return a string n number of times
function scream(n) {
    let str = ''
    for ( i = 1; i <= n; i++) {
        str = str + 'a'
    }
    return str
}

// return a string n number of times with aleternate capital letter
function scream(n) {
    let str = ''
    for ( i = 1; i <= n; i++) {
        i % 2 == 0 ? str = str + 'A' : str = str + 'a'
    }
    return str
}

// 🏁 Your Goal: Complete the Top Double
// Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.

function topDouble(value, top) {
    let dub = 1;
    
    while ( value <= top ) {
      value = value * 2
    } 
    return value/2
}

// Given an integer value num, determine if it is even.
// If it is even, return true. Return false otherwise.

function isEven(num) {
    return num % 2 === 0 ? true : false
}

// 🏁 Your Goal: Return Smaller
// The function smallerNumber will be given two unequal numbers: num1 and num2.
// Your goal is to find the smaller number and return it!

function smallerNumber(num1, num2) {
    return num1 > num2 ? num2 : num1
}


// Replace John
// A string is stored in the variable fakeName.
// Take this fake name and use it to replace every occurrence of "John" in the message.
// Do not change the message in other way.

const fakeName = require('./fakeName');

const message = `
    Hello, ${fakeName}! You left a package at the office today.
    You can pick up tomorrow at 10am, ${fakeName}. 
    If not I will drop it off this weekend.
    Goodbye ${fakeName}!
`;

// 🏁 Your Goal: Describe the Number
// The function checkNumber takes a single argument: a number num.
// The function should return the string positive if the number is positive, negative if the number is negative, and zero if the number is zero.

function checkNumber(num) {
    return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero' 
}


// 🏁 Your Goal: Sum it Up!
// The function maxSum takes a number argument num.
// Your goal is find the sum all of numbers, starting from 1, up to and including num.
// For example, if num is 5, your sum would be 1 + 2 + 3 + 4 + 5 or 15.


function maxSum(num) {
    let sum = 0
    for ( i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}