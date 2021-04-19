function correctOrderOfWords(string) {
    const result = [];
    const splittedString = string.split(' ');
    const objectOfWords = splittedString.reduce((acc, el) => {
         acc[el.match(/[1-9]/)] = el;
         return acc;
    }, {})
    for (let i = 1, len = splittedString.length; i <= len; i++) {
      result[i - 1] = objectOfWords[i];
    }
    return result.join(' ');
  }

// Second variant 

// function correctOrderOfWords(string) {
//   return string.split(' ').sort((a, b) => {
//     return a.match(/[1-9]/) - b.match(/[1-9]/);
//   }).join(' ');
// }
  
  
  