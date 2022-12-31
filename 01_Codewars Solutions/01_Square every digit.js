// function squareDigits(num){
//   let str = num.toString();
//   let total = '';
//     for(let i in str){    
//      total = total + (parseInt(str[i])**2 + "");  
//     }  
//   return parseInt(total);
// }

function squareDigits(num) {
    let numStr = num.toString();
    let res = '';
    for(let i = 0; i < numStr.length; i++){
       let square = Math.pow(numStr[i], 2);
       res += square;
    };
    return parseInt(res);
 };