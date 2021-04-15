function sumMin(array) {
    return array.reduce((acc, el) => acc += Math.min(...el), 0)
}
