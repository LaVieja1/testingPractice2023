import Calculator from "../code/calculator.js";

describe('Operaciones de calculadora', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('add', () => {
        expect(calculator.add(4, 6)).toEqual(10);
    });

    test('subtract', () => {
        expect(calculator.subtract(10, 5)).toEqual(5);
    });

    test('multiply', () => {
        expect(calculator.multiply(10, 8)).toEqual(80);
    });

    test('divide', () => {
        expect(calculator.divide(10, 2)).toEqual(5);
    });

    test('undefined', () => {
        expect(calculator.add()).toBe(NaN);
    });

})