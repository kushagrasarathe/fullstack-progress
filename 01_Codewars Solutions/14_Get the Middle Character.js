function getMiddle(s){
    //Code goes here!
    let len = s.length
    console.log(len)
    if(len % 2 == 0) {
      let ic1 = Math.floor((len/2)-1)
       let ic2 = Math.ceil((len/2))
       return s.charAt(ic1)+s.charAt(ic2)
    } 
    else  {
          return s.charAt((len/2))
     }
  }