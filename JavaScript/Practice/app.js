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
  
  let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Resolved after 2 seconds")
      resolve(03)
    }, 2000)
  })
  
  p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2") 
            console.log("Resolved after 5 seconds")
        }, 5000);
    })
    return p2;
  }).then((value) => {
    console.log("Promise execution done")
  }).then((value) => {
    console.log("100% execution done")
  })