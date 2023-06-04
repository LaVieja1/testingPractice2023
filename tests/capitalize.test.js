import capitalize from "../code/capitalize.js";

test('capitalizes a string', () => {
    expect(capitalize('hola')).toBe('Hola');
})