class Fighter {
    constructor(name, health, damagePerAttack) {
        this._name = name;
        this._health = health;
        this._damagePerAttack = damagePerAttack;
    }
    get name() {
        return this._name;
    }
    get health() {
        return this._health;
    }
    get damagePerAttack() {
        return this._damagePerAttack;
    }
    set name(newName) {
        this._name = newName;
    }
    set health(newHealth) {
        this._health = newHealth;
    }
    set damagePerAttack(newDamagePerAttack) {
        this._damagePerAttack = newDamagePerAttack;
    }
}

function declareWinner(_1st, _2nd, name) {
    if (name.toLowerCase() !== _1st.name.toLowerCase()) {
        [_1st, _2nd] = [_2nd, _1st];
    }
    _2nd.health -= _1st.damagePerAttack;
    if (_2nd.health > 0) {
        declareWinner(_2nd, _1st, _2nd.name)
    }
    return _1st.health > 0 ? _1st.name : _2nd.name;

}


console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Lew'));
console.log(declareWinner(new Fighter('Lew', 10, 2), new Fighter('Harry', 5, 4), 'Harry'));
console.log(declareWinner(new Fighter('Harald', 20, 5), new Fighter('Harry', 5, 4), 'Harry'));
console.log(declareWinner(new Fighter('Harald', 10, 2), new Fighter('Harry', 5, 4), 'Harald'));
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Jerry'));
console.log(declareWinner(new Fighter('Jerry', 30, 3), new Fighter('Harald', 20, 5), 'Harald'));


