const json = require('./MorseCode.json');

const reversedJson = {}
for (let key in json) {
    reversedJson[json[key]] = key;
}

function decodeMorse(string) {
    let result = '';
    const arrayOfWords = string.split('   ');
    for (let i = 0; i < arrayOfWords.length; i++) {
        let eachWord = arrayOfWords[i].split(' ').reduce((acc,el) => {
            return acc += reversedJson[el];
        }, '');
        result += eachWord + ' ';
    }
    return result.toUpperCase();
}


