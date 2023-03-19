function findOdd(arr) {
    //happy coding!
    const newArr = [...new Set(arr)]
    console.log(newArr)

    for (i = 0; i < arr.length; i++) {
        const count = arr.filter(val => val === arr[i]).length
        if (count % 2 === 1) {
            return arr[i]
        }
    }

    return 0;
}
