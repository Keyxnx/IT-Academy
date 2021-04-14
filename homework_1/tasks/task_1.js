function amountOfDye(length, width, height) {
    const P = 2 * (length + width);
    const S = P * height;
    return Math.ceil(S / 16);
  }
  