# NodeJs Notes  

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

```

### app.