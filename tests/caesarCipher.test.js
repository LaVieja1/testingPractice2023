import caesarCipher from "../code/caesarCipher.js";

describe('Caesar Cipher', () => {

    test('letra a key1', () => {
        expect(caesarCipher('a', 1)).toBe('b');
    });

    test('letra z key1', () => {
        expect(caesarCipher('z', 1)).toBe('a');
    });

    test('letra a key26', () => {
        expect(caesarCipher('a', 26)).toBe('z');
    });

    test('palabra hola key1', () => {
        expect(caesarCipher('hola', 1)).toBe('ipmb');
    });
})