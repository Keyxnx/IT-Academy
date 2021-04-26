class Hex {

    constructor(decimal = 0) {
        this.decimal = decimal;
        this.obj;
        this.sign;
    }

    static parse(string) {
        return parseInt(string, 16);
    }

    valueOf() {
        return this.decimal;
    }

    toJSON() {
        if (this.obj) {
            return '0x' + (this.decimal + (this.sign === '+' ? this.obj.decimal : -this.obj.decimal)).toString(16).toUpperCase();           
        } else {
            return '0x' + this.decimal.toString(16).toUpperCase();
        }
    }

    plus(hexInstance) {
        if (hexInstance && hexInstance instanceof Hex) {
            this.obj = hexInstance;
            this.sign = '+';
        }
        return this;
    }

    minus(hexInstance) {
        if (hexInstance && hexInstance instanceof Hex) {
            this.obj = hexInstance;
            this.sign = '-';
        }
        return this;
    }
}

const a = new Hex(10);

console.log(a.toJSON())

