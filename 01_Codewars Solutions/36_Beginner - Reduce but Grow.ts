export function grow(arr: number[]): number {
    // your code here
    let total : number = 1
    arr.map( num => {
      total = num * total
    } )
    return total
  }