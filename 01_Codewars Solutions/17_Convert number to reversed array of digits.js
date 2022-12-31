function digitize(n) {
    //code here
    let arr = n.toString().split('').reverse()
    finalArr = []
  //   console.log(arr)
    let newArr = arr.map( str => {
      finalArr.push(Number(str))
    });
    return finalArr
  }