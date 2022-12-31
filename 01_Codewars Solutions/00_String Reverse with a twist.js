// Reverse the following string "Welcome to JavaScript World" to "emocleW ot tpircSavaJ dlroW"

let str = "Welcome to JavScript World";

function reverse() {
  // split into array
  let arr = str.split(" ");

  // map each word in the array
  return arr.map((word) => {
    return word.split("").reverse().join("");
  });
}
console.log(reverse().join(" "));
reverse();