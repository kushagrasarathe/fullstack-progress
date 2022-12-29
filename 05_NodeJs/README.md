<!-- # NodeJs Notes

## app.METHOD(PATH, HANDLER)
`METHOD` is the HTTP method like GET, POST, PUT etc..., `path` is the path on server on which the function has to called and `handler or callback function` is the function which gets executed when the route gets matched.

### app.get()

```js
app.get("/", (req, res) => {
    res.send("Hello Express")
});
```

**.sendFile** method can be used to serve a file as response in nodeJs.

```js
app.get("/", (req, res) => {
  
    // __dirname is global varibale in nodejs which gives the path of current directory
    const absolutePath = __dirname + '/' + 'views/index.html';
    res.sendFile(absolutePath);
});

``` -->

# NodeJs Core Concepts

## Modules

Module is a resuable piece of code written to perform a specific task. Each javascript file in nodejs is treated as a module and is isolated by default.

### Local Module

Modules that we write are loccal modules.

Example:

```js
function add(a, b) {
  return a + b;
}

const sum = add(2, 5);
console.log(sum);
```

To use a module inside another module we use `require()` function.

Example:

```js
require('path/to/module')
```

### Export Module


### In-Built Moudles

### Third-party Mdoules
