// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
  const digitRegex = /\d+$/;
  const numbers = str.match(digitRegex);

  if (numbers) {
    const num = parseInt(numbers[0]) + 1;
    const newStr = num.toString().padStart(numbers[0].length, "0");
    return str.replace(digitRegex, newStr);
  }
  return str + "1";

  //     const num1 = strng.match(/\d+/g);
  //     const letr = strng.match(/[a-zA-Z]+/g);
  //     const arr = []
  //     const num = num1[0]
  //     const intgr = parseInt(num) + 1
  //     console.log( )
  //     const str = intgr.toString()
  //     arr.push(letr[0])
  //     const inc = /^0[0-9].*$/.test(num) ? ("0000" + ((+num) + 1)).slice(-(num.length)) :  (parseInt(num1[0]) + 1).toString();
  //     arr.push(inc)
  //     console.log(arr)

  //     return arr.join('')
}
