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
arr.push('d');
console.log(arr.length); // returns 4
```

**Remove last item in array**
To remove last element from an array we use `.pop()` method.

Example:

```javascript
arr.pop();
console.log( arr.length ); // returns 3
```

## Loops

