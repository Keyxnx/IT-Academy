function checkLuckyTicket(number) {
    if (number < 0 || number >= 1_000_000) {
      return 'Wrong number';
    }
      
    let splitted = number.toString().split('');

    while (splitted.length < 6) {
        splitted.unshift('0');
    } 

    let result = +splitted[0] + +splitted[1] + +splitted[2] === +splitted[3] + +splitted[4] + +splitted[5];

    return result ? 'YES' : 'NO';
  }
  