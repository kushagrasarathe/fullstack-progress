function squareSum(numbers){
    let sum = 0
    for ( i = 0; i < numbers.length; i++) {
      sum = sum + numbers[i]**2
    }
      return sum
  }