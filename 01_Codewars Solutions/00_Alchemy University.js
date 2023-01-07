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

// 🏁 Your Goal: Accumulate the Pizza Orders
// Given an array of pizza orders, return the total number of pizzas ordered.
// The orders are an array of objects, each with pizzas key inside:
// const orders = [
//     { pizzas: 3 },
//     { pizzas: 5 },
//     { pizzas: 10 }
// ];

function numberOfPizzas(orders) {
  let total = 0;
  for (i = 0; i < orders.length; i++) {
    total += orders[i].pizzas;
  }
  return total;
}

// 🏁 Your Goal: Find the Number of Keys
// Given an object, find the number of keys inside the object. Return this number.

function numberOfKeys(object) {
  return Object.keys(object).length;
}

// 🏁 Your Goal: Find the Shorter String
// The function shortestString takes two string arguments: str1 and str2.
// Determine which of the two strings is shorter, return that string.

function shortestString(str1, str2) {
  return str1.length < str2.length ? str1 : str2;
}

// 🏁 Your Goal: Halve 'em! 🔪
// The function halfValue takes an array of numbers. It should return a new array with all the original values halved.
// Odd numbers should be rounded up to the nearest whole number.

function halfValue(numbers) {
  return numbers.map((num) => Math.ceil(num / 2));
}

// 🏁 Your Goal: Count the C's
// The function countC takes a string str as its only argument.
// This function should return the number of c's found in the string. It must count both lower-case c and upper-case C.

function countC(str) {
  let total = 0;
  let arr = str.split("");
  arr.map((char) => {
    if (char.toLowerCase() === "c") {
      return (total += 1);
    }
  });
  return total;
}

// Count Vowels
// Write a function countVowels that takes in a string and counts how many vowels there are in the word. Vowels include: "a", "e", "i", "o", and "u".
// Handle lowercase and uppercase vowels.

function countVowels(str) {
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let arr = str.split("");
  arr.map((item) => {
    for (i = 0; i < arr.length; i++) {
      if (item.toLowerCase() === vowels[i]) {
        vowelCount += 1;
      }
    }
  });
  return vowelCount;
}

// Reverse
// Write a function reverse that takes a string as an argument and returns a string with all the letters reversed.
// For example, reverse("cat") would return the string "tac".

function reverse(string) {
  return string.split("").reverse().join("");
}

// Palindrome
// Write a function isPalindrome that takes a word string and returns true if the word is a palindrome or false if it is not.
// A palindrome is a word that is spelled the same forwards as it is backwards.

function isPalindrome(string) {
  return string.split("").reverse().join("") === string ? true : false;
}

// Sum Together
// Write a function sumTogether that takes two arrays of numbers and returns a single array with the sum of each corresponding index value.
// Assume both arrays are the same length.

function sumTogether(arr1, arr2) {
  let arr = [];
  for (i = 0; i < arr1.length; i++) {
    arr.push(arr1[i] + arr2[i]);
  }
  return arr;
}

// Count the Elements
// Write a function countElements that takes in an array and returns an object a count of each element in the array.

function countElements(arr) {
  let obj = {};
  for (item of arr) {
    obj[item] = obj[item] ? obj[item] + 1 : 1;
  }
  return obj;
}
// Player Hand Score
// The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.
// The cards are represented by the first letter in the name of the card:
//     A "K" is 4 points
//     A "Q" is 3 points
//     A "J" is 2 points

function playerHandScore(hand) {
  let total = 0;

  for (i = 0; i < hand.length; i++) {
    if (hand.charAt(i) === "K") {
      total += 4;
    } else if (hand.charAt(i) === "Q") {
      total += 3;
    } else if (hand.charAt(i) === "J") {
      total += 2;
    }
  }
  return total;
}

// 🏁 Your Goal: Handle an Undefined
// The double function here is almost complete! We also want double to be able to handle when x is undefined.

function double(x) {
  return x * 2 || 0;
}

// 🏁 Your Goal: Go Scuba Diving!
// We're going Scuba Diving! 🐠
// We need a function that can determine if the diver can breathe. The function canBreathe will be passed three boolean values:
//     isConnected - Is true if the diver connected to the tank
//     hasOxygen - Is true if the tank has oxygen
//     aboveWater - Is true if the diver is still above water

function canBreathe(isConnected, hasOxygen, aboveWater) {
  return (isConnected && hasOxygen) || aboveWater ? true : false;
}

// 🏁 Your Goal: Guard it
// The function friendName currently retrieves the name property from the friend.
// The problem is, sometimes friend is undefined. When this is the case, let's return undefined without throwing an exception.

function friendName(friend) {
  return friend && friend.name;
}

// 🏁 Your Goal: Car Crossing the Bridge
// There's a river that runs right between two towns. In order for cars to cross the river, we built a bridge!
// XOR
// Trouble is, there's only room for 1 car to cross the bridge at a time. This means that if both cars were to be crossing at the same time, neither would be able to cross.
// Complete the carCrossing function to return true if and only if one car is crossing.

function carCrossing(aCrossing, bCrossing) {
  return (aCrossing && !bCrossing) || (!aCrossing && bCrossing) ? true : false;
}

// 🏁 Your Goal: Throw an Error
// Time to throw your first error! Simply throw a new error inside the throwError function.
// If you throw an error properly the tests will catch the error and you will pass the stage!

function throwError() {
  throw new Error("you got an error");
}

// 🏁 Your Goal: Catch an Error!
// The argument fn is a function that will throw an error when invoked. Catch the error that is thrown when invoking fn.
// The tests will pass as long as the function is called and the exception is caught.

function catchError(fn) {
  try {
    fn();
  } catch (e) {
    e;
  }
}

// 🏁 Your Goal: Return in our Function
// Modify catchError to return the error if one is thrown.
// If no error is thrown, return false.

function catchError(fn) {
  try {
    fn();
  } catch (e) {
    return e;
  }
  return false;
}

// 🏁 Your Goal: Start an Error
// Pick an error from one of the situations mentioned in details. Write code that will make one of these errors occur.
// As long as any of the error types mentioned above are thrown, the test cases will pass.

function startError() {
  return z;
}

