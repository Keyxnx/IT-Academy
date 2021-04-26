function tickets(array) {

    const bills = {
        25: 0,
        50: 0,
        100: 0,
    };

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 25) {
            bills[25]++;
        } else if (array[i] === 50 && bills[25]) {
            bills[25]--;
            bills[50]++;
        } else if (array[i] === 100 && ((bills[50] && bills[25]) || bills[25] >= 3)) {
            bills[100]++;
            if (bills[25] >= 3) {
                bills[25] -= 3;
            } else {
                bills[50]--;
                bills[25]--;
            } 
        } else {
            return 'NO';
        }
    }
    return 'YES';
}





