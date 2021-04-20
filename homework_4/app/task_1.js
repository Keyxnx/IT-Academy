function ipsBetween(firstIp, secondIp) {
  const arrayOfIps = [firstIp, secondIp].map(el => {
    return el.split('.').map(Number);
  });
  
  for (let i = 0; i < arrayOfIps.length; i++) {
    arrayOfIps[i] = arrayOfIps[i].map(el => {
      let result = el.toString(2);
      if (result.length < 8) {
        while(result.length < 8) {
          result = '0' + result;
        }
      }
      return result;
    }).join('');
  }
  return parseInt(arrayOfIps[1], 2) - parseInt(arrayOfIps[0], 2);
}

  
  