function amountOfDye(length, width, height) {
    const perimeter = 2 * (length + width);
    const squareOfWalls = perimeter * height;
    return Math.ceil(squareOfWalls / 16);
  }
  