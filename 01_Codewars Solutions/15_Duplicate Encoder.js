function duplicateEncode(word){
    return word.toLowerCase().split('').map( 
    function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
  }