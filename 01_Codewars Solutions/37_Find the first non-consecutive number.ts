export function firstNonConsecutive(arr: number[]): null | number {
  let newArr: number[] = [];
  arr.map((num, idx) => {
    num + 1 === arr[idx + 1]
      ? console.log("Found consecutive number")
      : newArr.push(arr[idx + 1]);
  });
  return arr ? newArr[0] : null;
}
