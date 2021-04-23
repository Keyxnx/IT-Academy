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
            return '0x' + eval(this.decimal + this.sign + this.obj.decimal).toString(16).toUpperCase();           
        } else {
            return 'Error';
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



