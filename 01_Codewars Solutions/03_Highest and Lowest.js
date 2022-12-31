
function highAndLow(numbers){
    // ...
    let arr = numbers.split(" ");
    console.log(arr);
    return Math.max(...arr) + " " + Math.min(...arr) 
  }