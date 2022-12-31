function betterThanAverage(classPoints, yourPoints) {
    let sum = 0
    let students = classPoints.length + 1
    console.log(students)
    
    classPoints.forEach( x => {
      sum += x
    })
    let total = sum + yourPoints
    let average = total / students
    let compare = average > yourPoints ? false : true;
    return compare
  }
  