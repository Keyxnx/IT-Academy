function convert(string) {
    let result = ['', '', ''];
    let counterDigits = 0;
    let counterZeros = 0;
    let index = 0;
  
    for (let i = 0; i < string.length; i++) {
      if (string[i] === '@') {
        if (counterZeros) {
          counterZeros = 0;
        }
        counterDigits++;
      } else  {
        if (counterDigits) {
          result[index] += counterDigits;
          counterDigits = 0;
        }
        if (string[i] === '~') {
            counterZeros++;
          if (string[i + 1] !== '~' && counterZeros === 1) {
            counterZeros = 0;
          } else if (counterZeros > 1){
            result[index] += 0;
          }
        } else {
            result[2] = string[i];
            index++;
        }
      } 
    }
    if (counterDigits) {
      result[index] += counterDigits;
    }
    
    return result;
  }

  function reverseConvert(string) {
    let result = '';
    for (let i = 0; i < string.length; i++) {
      if (string[i] > '0') {
        result += '@'.repeat(+string[i]) + '~';
      }  else {
        result += '~';
      }
    }
    if (result[result.length - 2] === '@' && result[result.length - 1]=== '~') {
      result = result.slice(0, result.length - 1);
    }
    return result;
  }

  function calculate(string) {
    let result = 0;
    let expression = convert(string);
    if (expression[2] === '*') {
      result = +expression[0] * +expression[1];
    } else if (expression[2] === '/') {
        if (expression[1] === '0') {
            return 'Division by zero!'
        }
      result = +expression[0] / +expression[1];
    } else if (expression[2] === '+') {
      result = +expression[0] + +expression[1];
    } else {
      result = +expression[0] - +expression[1];
    }
    return reverseConvert(result.toString());
  }

  console.log(convert("@~@@*@@"))