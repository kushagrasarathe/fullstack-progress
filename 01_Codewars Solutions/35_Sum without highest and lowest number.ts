export function sumArray(array: number[] | null): number {
    let sortedArr: number[] = [];
  
    let total: number = 0;
  
    if (array) {
      sortedArr = array.sort((n1, n2) => n1 - n2);
      console.log(sortedArr);
  
      for (let i = 1; i < sortedArr.length - 1; i++) {
        total += sortedArr[i];
        console.log(total);
      }
      return total;
    }
  
    return total;
  }
  