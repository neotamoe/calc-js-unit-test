// use unary operators in case input is a string
const add = (x, y) => +x + +y;

const subtract = (x, y) => +x - +y;

const multiply = (x, y) => +x * +y;

const divide = (x, y) => +x / +y;

const power = (x, y) => Math.pow(+x, +y);

const validateNumbers = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
        return false
    }
    return true
};

module.exports = { add, subtract, multiply, divide, power, validateNumbers }