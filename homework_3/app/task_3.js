function checkFreeChairs(array, amountOfChairs) {
    const result = [];
    
    if (amountOfChairs === 0) {
      return 'Game On!';
    }
    for (let i = 0; i < array.length; i++) {
      let emptyChairs = array[i][1] - array[i][0].length;
      const sumOfChairs = result.reduce((acc, el) => {
        return acc += el;
      }, 0);
      let necessary = amountOfChairs - sumOfChairs;
      if (necessary > emptyChairs) {
        result.push(emptyChairs < 0 ? 0 : emptyChairs)
      } else if(necessary > 0) {
        result.push(necessary);
        return result;
      }
    }
    return 'Not Enough';
}
