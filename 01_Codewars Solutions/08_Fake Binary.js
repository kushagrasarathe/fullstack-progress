function fakeBin(x){
    let arr = x.split('')
    arr.forEach( x => {
      let index = arr.indexOf(x)
      if( x < 5 ){
        arr[index] = 0
      } else {
        arr[index] = 1
      } 
    })    
      return arr.join('')
  }