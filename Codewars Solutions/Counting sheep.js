// Consider an array / list of sheep where some sheep may be missing from their place.We need a function that counts the number of sheep present in the array(true means present).

// For example,

//     [true, true, true, false,
//         true, true, true, true,
//         true, false, true, false,
//         true, false, false, true,
//         true, true, true, true,
//         false, false, true, true
//     ]

function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    let total = 0;
    arrayOfSheep.map(item => {
        item === true && (item != null || item != undefined) ? total += 1 : 'No matching value found'
    })
    return total
}