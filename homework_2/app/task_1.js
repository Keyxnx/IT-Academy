function sumMin(array) {
    return array.reduce((acc, el) => {
        return acc += Math.min(...el);
    }, 0)
}
