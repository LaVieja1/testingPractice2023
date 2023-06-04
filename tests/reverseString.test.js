import reverseString from "../code/reverseString.js";

test('string("hola") to be "aloh"', () => {
    expect(reverseString('hola')).toBe('aloh');
})

test('string("hola soy santi") to be "itnas yos aloh"', () => {
    expect(reverseString('hola soy santi')).toBe('itnas yos aloh');
})

test('Not a string', () => {
    expect(reverseString()).toBe("Not a string");
})