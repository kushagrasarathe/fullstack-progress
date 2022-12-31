function isPangram(string) {
  let newStr = string.toLowerCase();
  let len = newStr.length;
  let exm = "abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i <= 26; i++) {
    if (newStr.indexOf(exm.charAt(i)) == -1) {
      // i =10
      // k
      //         newStr.indexOf( k )
      // 16

      // 16 == -1

      //  i = 0,  exm.charAt(0)  a ,    newStr.indexOf( a ),  anupam , 0 ,

      //           if ( 0 == -1 ) {

      //         }

      return false;
    }
  }
  return true;
}
