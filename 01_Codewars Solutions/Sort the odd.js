// Task

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
    // Return a sorted array.

    const odd = array.filter((odd) => odd % 2 !== 0).sort();
    return array.map((even) => (even % 2 ? odd.shift() : even));
    console.log(odd);
}

// solution 2

function sortArray(array) {
    const oddArr = [];
    const evenArr = [];
    const result = [];
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 === 0) {
            evenArr.push(array[i]);
        } else {
            oddArr.push(array[i]);
        }
    }
    oddArr.sort();
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 === 0) {
            result.push(evenArr.shift());
        } else {
            result.push(oddArr.shift());
        }
    }
    return result;
}