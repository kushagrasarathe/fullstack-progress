# JavaScript 101

1. console.log()

We can use this to write antything in our browser console. This is very usefull when debugging the code.

```javascript
console.log("Kushagra Sarathe");
console.log("Lets learn JavaScript");
console.log("Hey this is logged into browser console :D");
```

<br>

## Variables in JavaScript

Variables are used to store data. In much simple words think of variables as your school bag and the things you keep inside your bag as data. We usually keep our books, pencil-box, lunch and other stuff in our school bag, similarly we can store different type of data inside vaiables. This data can be anything like strings, numeric values, etc. and are therefore called [datatypes](#Datatypes-in-JavaScript).

**Variable assignment**

Before assigning any value to variables, there are a certain rules to follow while naming a variable:

1. variable name should start with letter (can be both uppercase and lowercase), underscore or dollar
2. name cannot start with a number but after first letter or sign number cab ve used
3. variable names are case sensitive and thus `kushagra` & `Kushagra` are both two different variables.

**There are 3 types of variables**

1. var : value can be changed, not recommended bez its outdated
2. let : value can be changed
3. cont : value cannot be changed

**Variable Declaration**

```javascript
let name = "Kushagra Sarathe";
console.log(name);

let Num = 101;
console.log(num);

let _topicName = "JavaScript 101";
console.log(_topicName);

let $number1 = 0.25;
console.log($number1);

let bool = "";
console.log(bool);
```

<br>

#### Datatypes in JavaScript

- String : used to store string type data
- Number : used to store float and integer values
- Boolean : used to store `true` or `false` values
- BigInt : useful when dealing with operations on very large numbers
- Null : it is just null value which means no value is there
- Undefined : this is assigned to variables declared without any initial value
- Arrays [] : arrays store multiple values inside single variable
- Objects {} : everything in js is an object

<br>

## Operators

Operators are used to perform operations, assign values & compare them.
Example of Some operators are:

```
+     : addition
-     : substract
*     : multiply
/     : divide
**    : exponent
%     : modular/remainder
=     : assignment
==    : comparison
===   : strict comparison
!     : logical NOT
etc...
```

Example:

```javascript
let sum = 2 + 5;
```

<br>

## Math properties and methods

**Math.PI** Returns value of `pi`

**Math.sqrt(5)** Returns square root of given number

**Math.cbrt(5)** Returns square root of given number

**Math.round()** Rounds number to nearest integer. If for example number is `4.5` or `4.89`, result would be `5`, but if number is `4.499`, result would be `4`.

**Math.floor()**
Rounds number **down** to nearest integer

**Math.ceil()** Rounds number **up** to nearest integer

**Math.random()** Returns a random number between 0(inclusive) and 1(exclusive)

<br>

## Conditionals

Conditions are used to compare values, variables or datatypes. Conditions always return a boolean value.

Example:

```javascript
let food = "pizza";

if (food == "pizza") {
  console.log("Eat pizza");
} else {
  console.log("pizza not found");
}
```

<br/>

## Functions

Function is a block of code that performs some task when/if something calls it.

Example:

```javascript
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
```

<br/>

## Document Object Model (DOM)

DOM allows accessing HTML elements using JavaScript and manipulate them.

**DOM Manipulation**

Adding elements to page:

```javascript
const body = document.body;
```

```javascript
body.append("Hello Kushagra!!!  ", "Lets Learn JavaScript!!!");

// appendChild method doesn't let us append string to page, to append strings use append() method
// appendChild can only append one element at a time
body.appendChild("Hello"); // this gives error
```

Creating elements in page:

```javascript
const newEl1 = document.createElement("div");
const newEl2 = document.createElement("div");
// adding text to new div using .innerText
newEl1.innerText = "This text is added using .innerText";
// appending new div to page
body.append(newEl1);
// adding text to new div using .textContent
newEl2.textContent = "This text is added using .textContent";
// appending new div to page
body.append(newEl2);
```

Modifying HTML:

```javascript
const strong = document.createElement("span");
// strong.innerText = "<strong>Kushagra</strong>";
strong.innerHTML = "<strong>Kushagra</strong>";
body.append(strong);

// removing html elements
const msg = document.querySelector("#message");
msg.remove(); // this completely removes the element from page
```

Modifying element properties:

```javascript
// console.log(strong.setAttribute('id', 'stronEl'));
console.log((strong.title = "stronEl")); //set
console.log(msg.getAttribute("id")); //get
msg.removeAttribute("id"); //remove
```

Modifying element classes:

```javascript
msg.classList.add("bg");
msg.classList.remove("bg");
msg.classList.toggle("bg", false);
msg.classList.toggle("bg");
```

Modifying element styles:

```javascript
msg.style.color = "white";
msg.style.background = "red";
```

## Arrays

Arrays are used to store multiple values, it can be of any type, e.g., boolean, string or number.

**Array index**
Index in arrays starts with 0, i.e.,

`let arr = ['a', 'b', 'c']`
The index of `a` element would be `0` and that of `c` element would be `2`.

**Array length**
The lenght of array is the number of elements it has. We can find array length using:

```javascript
let arr = ["a", "b", "c"];
console.log(arr.length); // returns 3
```

**Add elements in array**
To add elements to array we use `.push()` method.

Example:

```javascript
arr.push("d");
console.log(arr.length); // returns 4
```

**Add element in first position in an array**
To add element as first element in array we use `.unshift()` method.

Example:

```javascript
arr.unshift("d");
console.log(arr.length);
```

**Remove last item in array**
To remove last element from an array we use `.pop()` method.

Example:

```javascript
arr.pop();
console.log(arr.length); // returns 3
```

**Remove first item in array**
To remove first element from an array we use `.shift()` method.

Example:

```javascript
arr.shift();
console.log(arr.length);
```

**array.map()**

**Array Constructor**
Array Constructor can be used to create arrays.

```js
const newConstructor = new Array(10); // 10 is the length of array here

// to add values to array .fill method can be used
const newConstructor = new Array(10).fill("🚀");
```

## Object Destructuring

Easily extract properties from objects and bind them to variables.

```js
const favouriteFilm = {
  title: "Top Gun",
  year: "1986",
  genre: "action",
  star: "Tom Cruise",
  director: "Tony Scott",
};

const { title, year, name, star, direction } = favouriteFilm;

console.log(
  `My favourite film is ${title} starring ${star}. It's an ${genre} film that was directed by ${director} and released in ${year}`
);
```

## Constructor Functions

A `constructor` is a special function that creates and initializes an object instance. In JavaScript, a constructor gets called when an object is created using the `new` keyword. The purpose of a constructor is to create a new object and set values for any existing object properties.

Example of constructor:

```js
function Animal() {
  this.species = "tiger";
  this.weightKg = 56;
  this.age = 2;
}

// Note: **this** keyword refers to the new object we are creating

const animal1 = new Animal();

console.log(animal1);
```

Example of a flexible/dynamic constructor:

```js
const animalForRelease1 = {
  name: "Tilly",
  species: "tiger",
  weightKg: 56,
  age: 2,
  dateOfRelease: "03-02-2022",
};
const animalForRelease2 = {
  name: "Nelly",
  species: "elephant",
  weightKg: 320,
  age: 16,
  dateOfRelease: "03-02-2022",
};

function Animal(data) {
  this.name = data.name;
  this.species = data.species;
  this.weightKg = data.weightKg;
  this.age = data.age;
  this.dateOfRelease = data.dateOfRelease;
}

const tiger = new Animal(animalForRelease1);
const elephant = new Animal(animalForRelease2);
```

### Constructor Function Methods

Methods are properties on objects that contain functions.

```js
const animalForRelease1 = {
  name: "Tilly",
  species: "tiger",
  weightKg: 56,
  age: 2,
  dateOfRelease: "03-02-2022",
};
const animalForRelease2 = {
  name: "Nelly",
  species: "elephant",
  weightKg: 320,
  age: 16,
  dateOfRelease: "03-02-2022",
};

function Animal(data) {
  this.name = data.name;
  this.species = data.species;
  this.weightKg = data.weightKg;
  this.age = data.age;
  this.dateOfRelease = data.dateOfRelease;

  // method on constructor function
  this.summariseAnimal = function () {
    console.log(
      `${this.name} is a ${this.age} year old ${this.species} which weighs ${this.weightKg}kg and was released into the wild on ${this.dateOfRelease}`
    );
  };
}

const tiger = new Animal(animalForRelease1);
const elephant = new Animal(animalForRelease2);

tiger.summariseAnimal();
elephant.summariseAnimal();
```

## Object.assign

Copies properties from a source object to a target object and returns a new version of the target object.

Example:

```js
const studentDetails = {
  firstName: "Kushagra",
  lastName: "Sarathe",
  age: 20,
  country: "India",
  email: "kushagra@test.com",
  discordUsername: "kushargasarathe#9765",
};

const studentDetailsCopy = {};

Object.assign(studentDetailsCopy, studentDetails);

console.log(studentDetailsCopy);
```

## Promises

Promises in JS execute the code in background and notifies after the execution is finished using `.then` and `.catch`.

```js
let prom = new Promise((resolve, reject) => {
  console.log("Promise pending");
  setTimeout(() => {
    console.log("I'm a promise & I'm fulfilled");
    // resolve(true)
    reject(new Error("Errorrrrrrrrrr!!!!"));
  }, 5000);
});

console.log(prom);

// do this after promise is resolved
prom.then((value) => {
  console.log(value);
});

//  error handling
prom.catch((value) => {
  console.log("Error found in promise");
});
```

### Promise chaining

Promise chaining allows us to chain multiple asynchronous tasks in a specific order. This is useful when dealing with complex code where one asynchronous task is to be performed after completion of another asynchronous task.

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Resolved after 2 seconds");
    resolve(03);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2");
      console.log("Resolved after 5 seconds");
    }, 5000);
  });
  return p2;
})
  .then((value) => {
    console.log("Promise execution done");
  })
  .then((value) => {
    console.log("100% execution done");
  });
```

### Promise API

**Promise.all()** waits for all promises to resolve and returns a array of their results. If any promise fails, then it becomes a error and all other results are **ignored**

```js
let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1");
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Value 2")
    reject(new Error("Error"));
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3");
  }, 3000);
});

// p1.then((value) => {
//   console.log(value)
// })

// p2.then((value) => {
//   console.log(value)
// })

// p3.then((value) => {
//   console.log(value)
// })

// promise.all waits for all promises to resolve and returns a array of their results.
// if any promise fails, then it becomes a error and all other results are ignored
const promise_all = Promise.all([p1, p2, p3]);
promise_all.then((value) => {
  console.log(value);
});
```

**Promise.allSettled()** waits for all promises to settle (either resolve or reject) and returns a array of objects with status and value.
// if any promise fails, then its status is showed and results are not ignored

```js
// promise.allSettled waits for all promises to settle (either resolve or reject) and returns a array of objects with status and value.
// if any promise fails, then its status is showed and results are not ignored
const promise_allSettled = Promise.allSettled([p1, p2, p3]);
promise_allSettled.then((value) => {
  console.log(value);
});
```

**Promise.race()** waits for first result to settle and its results/error becomes the outcome. In simple words it returns the results of any promosi which is finished first, but if any promise fails then it becomes a error and other results are ignored. Ex: out of three promise above if p2 is resolved first then its results will be served.

```js
// promise.race() waits for first result to settle and its results/error becomes the outcome. In simple words it returns the results of
// any promosi which is finished first, but if any promise fails then it becomes a error and other results are ignored. Ex: out of three
// promise above if p2 is resolved first then its results will be served
const promise_race = Promise.race([p1, p2, p3]);
promise_race.then((value) => {
  console.log(value);
});
```

**Promise.any()** waits for first promise to fulfil (and not rejected), and its result becomes the outcome. Throws and aggregate error if all promises are rejected

```js
// promise.any() waits for first promise to fulfil (and not rejected), and its result becomes the outcome. Throws and aggregate error if all promises are rejected
const promise_any = Promise.any([p1, p2, p3]);
promise_any.then((value) => {
  console.log(value);
});
```

**Promise.resolve()** makes a resolved promise with the given value

```js
// promise.resolve() makes a resolved promise with the given value
const promise_resolve = Promise.resolve([p1, p2, p3]);
promise_resolve.then((value) => {
  console.log(value);
});
```

**Promise.rejected()** makes a rejected promise with the given error

```js
// promise.rejected() makes a rejected promise with the given error
const promise_rejected = Promise.rejected([p1, p2, p3]);
promise_rejected.then((value) => {
  console.log(value);
});
```

## Async/Await
