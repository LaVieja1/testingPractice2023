import capitalize from "../code/capitalize.js";

test('capitalizes a string', () => {
    expect(capitalize('hola')).toBe('Hola');
})

test('capitalizes a string', () => {
    expect(capitalize('hola yo soy santi')).toBe('Hola yo soy santi');
})

test('no change in uppercase string', () => {
    expect(capitalize('HOLA')).toBe('HOLA');
})

test('Not a string', () => {
    expect(capitalize()).toBe("Not a string");
})

test('Not a string', () => {
    expect(capitalize(null)).toBe("Not a string");
})