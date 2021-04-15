function shortestWord(string) {
    let count = 0,
        result = string.length;
    for (let i = 0, len = result; i < len; i++) {
        if (string[i].match(/[a-z-]/i)) {
            count++;
        } else {
            if (result > count) {
                result = count;
            }
            count = 0;
        }
    }
    return result > count ? count : result;
}

// second variant 

// function shortestWord(string) {
//     return string.split(/[ ,]+/).sort((a, b) => {
//         return a.length - b.length;
//     })[0].length
// }

// third variant

// function shortestWord(string) {
//     return Math.min(...string.split(/[ ,]+/).map(el => {
//         return el.length;
//     }))
// }

