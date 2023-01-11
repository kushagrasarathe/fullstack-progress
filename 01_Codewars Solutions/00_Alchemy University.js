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

// 🏁 Your Goal: Remove the Occurrences
// Given an array of integers and a number, num, find all the occurrences of the number and remove it from the array.
// Modify the array directly and do not return anything from this function.

function removeOccurrences(arr, num) {
  for (i = arr.length; i--; ) {
    if (arr[i] === num) {
      arr.splice(i, 1);
    }
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

// 🏁 Your Goal: Convert to Number
// Given a string, convert it to a number.
// If the string is not a number, return 0.

function toNumber(string) {
  const num = Number(string);
  if (isNaN(num)) {
    return 0;
  }
  return num;
}

// 🏁 Your Goal: Combine Two Values
// Given two values a and b, combine them together as strings and return the result. The values may be a number, a boolean or a string

function combineToString(a, b) {
  return a.toString() + b.toString();
}

// 🏁 Your Goal: Is it Truthy?
// Given some value a return whether or not the value is truthy.

function isTruthy(a) {
  return a ? true : false;
}

// 🏁 Your Goal: Is Loosely Equal?
// Return true if a and b are loosely equal to each other. If not, return false.

function looseEquals(a, b) {
  return a == b ? true : false;
}

// 🏁 Your Goal: To JSON
// Given an object, turn it into JSON and return the resulting string.

function toJSON(obj) {
  return JSON.stringify(obj);
}

// 🏁 Your Goal: Create Valid JSON
// Create JSON that can be parsed to a person object with 3 properties:
//     name: with any string value
//     age: with any number value
//     isReal: with any boolean value

const personJSON = `
    {
        "name": "Kushagra",
        "age": 21,
        "isReal": true 
    } 
`;

// EITHER NOT BOTH
// 1: Either Not Both
// Either Not Both
// Write a function eitherNotBoth that takes in a number and returns true if the the number is divisible by either 3 or 5, but not both. Return false otherwise.

function eitherNotBoth(num) {
  let check = false;
  if (num % 3 === 0 && num % 5 === 0) {
    return check;
  } else if (num % 3 === 0) {
    check = true;
  } else if (num % 5 === 0) {
    check = true;
  }
  return check;
}

// Fizz Buzz

// Write a function fizzBuzz that takes an array of numbers and replaces any number divisible by three with the word "fizz" and any number divisible by five with the word "buzz". If a number is divisible by both three and five, replace it with "fizzbuzz"

// Once the appropriate numbers are replaced, return a concatenated string with only the words "fizz" or "buzz" included.

// const numbers = [1, 3, 5, 9, 11, 12, 20];
// fizzBuzz(numbers); // returns "fizzbuzzfizzfizzbuzz"

function fizzBuzz(numbers) {
  let newArr = [];

  numbers.map((num) => {
    if (num % 3 === 0 && num % 5 === 0) {
      newArr.push("fizzbuzz");
    } else if (num % 3 === 0 && num % 5 != 0) {
      newArr.push("fizz");
    } else if (num % 5 === 0 && num % 3 !== 0) {
      newArr.push("buzz");
    }
  });
  return newArr.join("");
}

// 🏁 Your Goal: Get Name

// Create a function which retrieves the property name on this.

// You can expect the property to exist. Example:

// const name = thisName.call({ name: 'Ted' });

// console.log(name); // Ted

function thisName() {
  return this.name;
}

// 🏁 Your Goal: Bind it Bob

// Create a new function from thisName that is bound to an object with the name "Bob".

// Export this new function instead of thisName.

// When it is called, it should return "Bob":

// const result = newFunction();

// console.log(result); // "Bob"

function thisName() {
  return this.name;
}

const newFunc = thisName.bind({ name: "Bob" });

module.exports = newFunc;

// 🏁 Your Goal: Add Get Name

// Add a function getName to the obj that will retrieve the name when it is called on an object.

// For example:

// const name = obj.getName();

// console.log(name); // Bob

const obj = {
  name: "Bob",
  getName: function () {
    return this.name;
  },
};

// 🏁 Your Goal: Fix the Context

// Within the function Celebrity, a method is used to fetch the celebrity's age. The second argument to fetchAge is a callback function. The callback function will receive age as an argument.

//     ⚠️ Unfortunately, due to the function call-site, this will be re-defined to not refer to the celebrity. Running the tests without modifying the code will result in a TypeError.

// Fix this.age to refer to the same this as the function Celebrity.

const fetchAge = require("./fetchAge");

function Celebrity(name) {
  this.name = name;

  fetchAge(this.name, (age) => {
    this.age = age;
  });
}

// or

const fetchAge = require("./fetchAge");

function Celebrity(name) {
  const that = this;
  that.name = name;

  fetchAge(this.name, function (age) {
    that.age = age;
  });
}

// 🏁 Your Goal: Complete the Shape Function

// The Shape function will take two arguments: x and y. Store these values in an object position on the instance (this).

//     🔍 For reference see this example. The tests will invoke Shape with the new keyword, creating an object and setting it to this within the function.

// The position should have keys x and y containing the corresponding values:

// const shape = new Shape(5, 10);

// console.log(shape.position.x) // 5
// console.log(shape.position.y) // 10

//     👁️ Notice that position is an object with two keys x and y!

// Our Shape "Constructor"
function Shape(x, y) {
  // store x and y in this.position
  this.position = { x, y };
}

// 🏁 Your Goal: Add Move Function

// Create a function move that will be added to the Shape.prototype. This function should take two arguments: x and y.

// It should move the shape's position by adding the corresponding arguments value:

// const shape = new Shape(1, 1);

// shape.move(1, 4);

// console.log( shape.position.x ); // 2
// console.log( shape.position.y ); // 5

// Our Shape "Constructor"
function Shape(x, y) {
  // store x and y in this.position
  this.position = { x, y };
}

Shape.prototype.move = function (x, y) {
  this.position.x += x;
  this.position.y += y;
};

// 🏁 Your Goal: Complete the Circle Function

// In Circle.js, you'll need to do two things:

//     Pass the arguments to Shape via call.

//     👁️ Notice we are binding Circle with this using call. This way when Shape is invoked, it will store x and y on the Circle instance!

//     Store radius on our Circle instance. You can do this exactly how we stored position on the Shape class.

// The final result behavior should be:

// const circle = new Circle(5,10,15);

// console.log(circle.position.x); // 5
// console.log(circle.position.y); // 10
// console.log(circle.radius); // 15

const Shape = require("./Shape");

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  // store radius on this
  this.radius = radius;
}

// 🏁 Your Goal: Link the prototypes

// Use Object.create to link Circle.prototype to Shape.prototype.

// This will ensure that any methods on Shape.prototype will also become available on new Circle instances. For instance, we'll be able to use circle.move(1,1); just like we did on the shape instance!

const Shape = require("./Shape");

function Circle(x, y, radius) {
  Shape.call(this, x, y);
  this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);

module.exports = Circle;

// 🏁 Your Goal: Complete the Rectangle

// Complete the Rectangle function and link its prototype to Shape's prototype.

// This will be similar to our Circle! Rectangle will be a Shape plus a couple properties: height and width. We'll want to store these on the Rectangle instance.

// const rect = new Rectangle(0, 0, 20, 40);

// console.log(rect.x, rect.y); // 0, 0
// console.log(rect.height, rect.width); // 20, 40

const Shape = require("./Shape");

function Rectangle(x, y, height, width) {
  Shape.call(this, x, y);
  this.height = height;
  this.width = width;
}

Rectangle.prototype = Object.create(Shape.prototype);

module.exports = Rectangle;

// 🏁 Your Goal: Create a Flip Function

// Create a function flip on the rectangle prototype! This function will switch the height and width dimensions of the rectangle. It will take no arguments.

//     🔑 You may need to store a temporary variable in order to flip the dimensions!

// Example:

// const rectangle = new Rectangle(10, 20);

// console.log(rectangle.height, rectangle.width); // 10, 20

// rectangle.flip();

// console.log(rectangle.height, rectangle.width); // 20, 10

//     ⚠️ Be careful you don't declare the method flip on Rectangle.prototype before using Object.create! The Object.create method will return a completely new object to which you can attach the method.

const Shape = require("./Shape");

function Rectangle(x, y, height, width) {
  Shape.call(this, x, y);
  this.height = height;
  this.width = width;
  temp = this.width;
}

Rectangle.prototype = Object.create(Shape.prototype);

Rectangle.prototype.flip = function () {
  const width = this.width;
  this.width = this.height;
  this.height = width;
};

// 🏁 Your Goal: Hero Health

// Within your constructor function, add a health property to a hero instance and set it to 50.

// When creating a new hero, it should work like this:

// const hero = new Hero();

// console.log(hero.health); // 50

class Hero {
  constructor() {
    this.health = 50;
  }
}

module.exports = Hero;

// 🏁 Your Goal: Take Damage method

// Add a method takeDamage to the hero class. This method should take one number argument representing the damage. This number should be directly subtracted from the hero's health.

// For example:

// const hero = new Hero();

// console.log(hero.health); // 50

// hero.takeDamage(5);

// console.log(hero.health); // 45

class Hero {
  constructor() {
    this.health = 50;
  }
  takeDamage(num) {
    this.health -= num;
  }
}

// 🏁 Your Goal: Extend Hero

// In the new file, Warrior.js, modify the Warrior to extend the Hero class.

//     No need to add anything to Warrior just yet, simply extend the class for now!

const Hero = require("./Hero");

class Warrior extends Hero {}

// 🏁 Your Goal: Add Rage

// Add a rage property to the Warrior. The value of rage will start at 0.

// const warrior = new Warrior();

// console.log(warrior.rage); // 0

const Hero = require("./Hero");

class Warrior extends Hero {
  constructor() {
    super();
    this.rage = 0;
  }
}

// 🏁 Your Goal: Extend takeDamage

// Add a method takeDamage to the Warrior class that will increment rage by 1 each time the warrior takes damage.

// It should also invoke takeDamage method on Hero which will inflict the damage on the hero's health.

// const warrior = new Warrior();

// console.log(warrior.health, warrior.rage); // 50, 0

// warrior.takeDamage(10);

// console.log(warrior.health, warrior.rage); // 40, 1

//     Be sure to pass the damage argument into the super.takeDamage call!

const Hero = require("./Hero");

class Warrior extends Hero {
  constructor() {
    super();
    this.rage = 0;
  }
  takeDamage(damage) {
    super.takeDamage(damage);
    this.rage += 1;
  }
}

// 🏁 Configurable Health

// Final Task! Let's make both the Hero and Warrior classes have configurable health.

// When creating a warrior/hero, we'll pass a number which should be stored as their health:

// const warrior1 = new Warrior(50);
// const warrior2 = new Warrior(25);
// const hero1 = new Hero(10);

// console.log(warrior1.health); // 50
// console.log(warrior2.health); // 25
// console.log(hero1.health); // 10

// Arguments that are passed when calling a class with new will be passed directly to the constructor.

//     You'll need to change the constructor of both the Hero and Warrior for this one!

class Hero {
  constructor(health) {
    this.health = health;
  }
  takeDamage(damage) {
    this.health -= damage;
  }
}

//

const Hero = require("./Hero");

class Warrior extends Hero {
  constructor(health) {
    super(health);
    this.rage = 0;
  }
  takeDamage(damage) {
    super.takeDamage(damage);
    this.rage += 1;
  }
}


