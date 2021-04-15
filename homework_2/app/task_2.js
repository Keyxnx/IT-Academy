function twoOldestAges(array) {
    return array.sort((a, b) => {
        return a - b;
    }).slice(-2)
}

//second variant

// function twoOldestAges(array) {
//     let result = [0, 0];
//     result[1] = Math.max(...array);
//     array.splice(array.indexOf(result[1]), 1);
//     result[0] = Math.max(...array);
//     return result;
// }


