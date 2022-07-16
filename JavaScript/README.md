# JavaScript 101

1. console.log()

We can use this to write antything in our browser console. This is very usefull when debugging the code.

```javascript=
console.log('Kushagra Sarathe')
console.log('Lets learn JavaScript')
console.log('Hey this is logged into browser console :D')
``` 

### Variables in JavaScript

Variables are used to store data. In much simple words think of variables as your school bag and the things you keep inside your bag as data. We usually keep our books, pencil-box, lunch and other stuff in our school bag, similarly we can store different type of data inside vaiables. This data can be anything like strings, numeric values, etc. and are therefore called [datatypes](#Datatypes-in-JavaScript).

**Variable assignment**

Before assigning any value to variables, there are a certain rules to follow while naming a variable:

1. variable name should start with letter (can be both uppercase and lowercase), underscore or dollar
2. name cannot start with a number but after first letter or sign number cab ve used
3. variable names are case sensitive and thus `kushagra` & `Kushagra` are both two different variables.


**Variable Declaration**

```javascript=
let name = 'Kushagra Sarathe';
console.log(name);

let Num = 101;
console.log(num);

let _topicName = 'JavaScript 101';
console.log(_topicName);

let $number1 = 0.25;
console.log($number1);

let bool = '';
console.log(bool);
```

#### Datatypes in JavaScript
- String : used to store string type data
- Number : used to store float and integer values
- Boolean : used to store `true` or `false` values
- BigInt : useful when dealing with operations on very large numbers
- Null : it is just null value which means no value is there
- Undefined : this is assigned to variables declared without any initial value