function profitable(price_1, price_2, price_3, weight_1, weight_2, weight_3) {
  let result = 0;
  const price = [price_1, price_2, price_3];
  const buckets = [weight_1, weight_2, weight_3];
  
  const sortedPrice = sorting(price);
  const sortedBuckets = sorting(buckets)
  
  for (let i = 0, n = price.length; i < n; i ++) {
    result += sortedPrice[i] * sortedBuckets[i];
  }
  return result;
}

function sorting(arr) {
  return arr.sort((a, b) => {
    return b - a;
  })
}