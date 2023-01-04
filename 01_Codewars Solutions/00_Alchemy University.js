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
  let str = "";
  for (i = 1; i <= n; i++) {
    str = str + "a";
  }
  return str;
}

// return a string n number of times with aleternate capital letter
function scream(n) {
  let str = "";
  for (i = 1; i <= n; i++) {
    i % 2 == 0 ? (str = str + "A") : (str = str + "a");
  }
  return str;
}

// 🏁 Your Goal: Complete the Top Double
// Using whichever loop you'd like, complete the top double function to find the largest double for the value that is below the top.

function topDouble(value, top) {
  let dub = 1;

  while (value <= top) {
    value = value * 2;
  }
  return value / 2;
}

// Given an integer value num, determine if it is even.
// If it is even, return true. Return false otherwise.

function isEven(num) {
  return num % 2 === 0 ? true : false;
}

// 🏁 Your Goal: Return Smaller
// The function smallerNumber will be given two unequal numbers: num1 and num2.
// Your goal is to find the smaller number and return it!

function smallerNumber(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

// Replace John
// A string is stored in the variable fakeName.
// Take this fake name and use it to replace every occurrence of "John" in the message.
// Do not change the message in other way.

const fakeName = require("./fakeName");

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
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}

// 🏁 Your Goal: Sum it Up!
// The function maxSum takes a number argument num.
// Your goal is find the sum all of numbers, starting from 1, up to and including num.
// For example, if num is 5, your sum would be 1 + 2 + 3 + 4 + 5 or 15.

function maxSum(num) {
  let sum = 0;
  for (i = 0; i <= num; i++) {
    sum += i;
  }
  return sum;
}

// 🏁 Your Goal: Complete the Function
// Complete the startsWithX function to determine if the first character of the string argument is the lower-case x.
// If the first character is x return true. If not, return false.

function startsWithX(string) {
  return string.charAt(0) === "x" ? true : false;
}

//  🏁 Your Goal: Handle x and X
// Let's update our startsWithX function to return true for an upper-case X as well as a lower-case x.

function startsWithX(string) {
  return string.charAt(0) === "x" || string.charAt(0) === "X" ? true : false;
}

//  🏁 Your Goal: Complete Ends With X
//  Complete the endsWithX function by detecting if the last character in the string is a lower-case x or an upper-case X. Return true if it is, false if not.

function endsWithX(string) {
  return string.charAt(string.length - 1) === "x" ||
    string.charAt(string.length - 1) === "X"
    ? true
    : false;
}

// 🏁 Your Goal: Is All X?
// Complete the function isAllX to determine if the entire string is made of lower-case x or upper-case X. Return true if they are, false if not.

function isAllX(string) {
  let check = true;
  let str = string.toLowerCase();
  for (i = 0; i < str.length; i++) {
    // return string[i] === 'X' ? true : false
    if (str.charAt(i) !== "x") {
      check = false;
    }
    return check;
  }
}

// In the string argument find the index of the first lower-case "x" and return it.

function findFirstX(string) {
  return string.indexOf("x");
}

// Your Goal: Find the Longer Half
// Let's find the longer half of the string before and after the x!
// First, you'll need to find the lower-case x.
// Once you've found the x, split the string in half. The first half will be the string before the x, the second half will be the string after the x.
// Take the longer string and return it!

function splitAtX(string) {
  let xIndex = string.indexOf("x");
  let firstHalf = string.slice(0, xIndex);
  let secondHalf = string.slice(xIndex + 1, string.length);
  return firstHalf.length > secondHalf.length ? firstHalf : secondHalf;
  // Happyxdays
  // 0123456789
  // 12345678910
}

// Complete the function hasOne which takes in an array of numbers. Return true if any of the numbers in the array are 1. Return false if not.

function hasOne(arr) {
  let check = true;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] !== 1) {
      check = false;
    } else if (arr[i] === 1) {
      return true;
    }
  }
}

// 🏁 Your Goal: Find the Sum of Even Values
// Given an array, find the sum of all even values inside the array and return it.

function sumEven(arr) {
  let sum = 0;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum = sum + arr[i];
    }
  }
  return sum;
}

// 🏁 Your Goal: Find Unique Elements
// Write a function that will take an array of numbers and return a new array that only contains unique numbers.

function unique(arr) {
  return arr.filter((item, index, newArr) => newArr.indexOf(item) === index);
}

// 🏁 Your Goal: Add One to Each Element
// Complete the addOne function to add 1 to every element within the array. Since we are modifying the array directly do not return it.

function addOne(arr) {
  for (i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 1;
  }
}
