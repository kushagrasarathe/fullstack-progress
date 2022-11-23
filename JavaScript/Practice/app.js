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
      resolve("Value 1")
    }, 1000);
  })

  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 2")
      // reject(new Error("Error"))
    }, 2000);
  })

  let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Value 3")
    }, 3000);
  })

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
  const promise_all = Promise.all([p1, p2, p3])
   promise_all.then((value) => {
    console.log(value)
  })
