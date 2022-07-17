# JavaScript 101

1. console.log()

We can use this to write antything in our browser console. This is very usefull when debugging the code.

```javascript
console.log("Kushagra Sarathe");
console.log("Lets learn JavaScript");
console.log("Hey this is logged into browser console :D");
```

### Variables in JavaScript

Variables are used to store data. In much simple words think of variables as your school bag and the things you keep inside your bag as data. We usually keep our books, pencil-box, lunch and other stuff in our school bag, similarly we can store different type of data inside vaiables. This data can be anything like strings, numeric values, etc. and are therefore called [datatypes](#Datatypes-in-JavaScript).

**Variable assignment**

Before assigning any value to variables, there are a certain rules to follow while naming a variable:

1. variable name should start with letter (can be both uppercase and lowercase), underscore or dollar
2. name cannot start with a number but after first letter or sign number cab ve used
3. variable names are case sensitive and thus `kushagra` & `Kushagra` are both two different variables.

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

#### Datatypes in JavaScript

- String : used to store string type data
- Number : used to store float and integer values
- Boolean : used to store `true` or `false` values
- BigInt : useful when dealing with operations on very large numbers
- Null : it is just null value which means no value is there
- Undefined : this is assigned to variables declared without any initial value
- Arrays [] : arrays store multiple values inside single variable
- Objects {} : everything in js is an object

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

## Math properties and methods

**Math.PI** Returns value of `pi`

**Math.sqrt(5)** Returns square root of given number

**Math.cbrt(5)** Returns square root of given number

**Math.round()** Rounds number to nearest integer. If for example number is `4.5` or `4.89`, result would be `5`, but if number is `4.499`, result would be `4`.

**Math.floor()**
Rounds number **down** to nearest integer

**Math.ceil()** Rounds number **up** to nearest integer
