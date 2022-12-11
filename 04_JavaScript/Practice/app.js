// // Promises in Js

// let prom = new Promise((resolve, reject) => {
//     console.log("Promise pending");
//     setTimeout(() => {
//       console.log("I'm a promise & I'm fulfilled");
//       // resolve(true)
//       reject(new Error("Errorrrrrrrrrr!!!!"));
//     }, 5000);
//   });

//   console.log(prom);

//   // do this after promise is resolved
//   prom.then((value) => {
//     console.log(value)
//   })

//   //  error handling
//   prom.catch((value) => {
//     console.log("Error found in promise")
//   })

// Promise chaining

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds")
//     resolve(03)
//   }, 2000)
// })

// p1.then((value) => {
//   console.log(value)
//   let p2 = new Promise((resolve, reject) => {
//       setTimeout(() => {
//           resolve("Promise 2")
//           console.log("Resolved after 5 seconds")
//       }, 5000);
//   })
//   return p2;
// }).then((value) => {
//   console.log("Promise execution done")
// }).then((value) => {
//   console.log("100% execution done")
// })

// Promise API

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 1");
    // reject(new Error("Error"));
    
  }, 1000);
});

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 2")
    // reject(new Error("Error"));
  }, 2000);
});

let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Value 3");
    // reject(new Error("Error"));

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

// promise.allSettled waits for all promises to settle (either resolve or reject) and returns a array of objects with status and value.
// if any promise fails, then its status is showed and results are not ignored
const promise_allSettled = Promise.allSettled([p1, p2, p3]);
promise_allSettled.then((value) => {
  console.log(value);
});

// promise.race() waits for first result to settle and its results/error becomes the outcome. In simple words it returns the results of
// any promosi which is finished first, but if any promise fails then it becomes a error and other results are ignored. Ex: out of three 
// promise above if p2 is resolved first then its results will be served
const promise_race = Promise.race([p1, p2, p3]);
promise_race.then((value) => {
  console.log(value);
});

// promise.any() waits for first promise to fulfil (and not rejected), and its result becomes the outcome. Throws and aggregate error if all promises are rejected
const promise_any= Promise.any([p1, p2, p3]);
promise_any.then((value) => {
  console.log(value);
});

// promise.resolve() makes a resolved promise with the given value
const promise_resolve= Promise.resolve([p1, p2, p3]);
promise_resolve.then((value) => {
  console.log(value);
});


// promise.rejected() makes a rejected promise with the given error
const promise_rejected= Promise.rejected([p1, p2, p3]);
promise_rejected.then((value) => {
  console.log(value);
});

