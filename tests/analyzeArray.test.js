import analyzeArray from "../code/analyzeArray.js";

describe('Analizar array', () => {
    test('Funciona-1', () => {
        expect(analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject({
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        });
    });

    test('Funciona-2', () => {
        expect(analyzeArray([4, 2, 0, 21, 65, 2, 30, 12])).toMatchObject({
            average: 17,
            min: 0,
            max: 65,
            length: 8,
        });
    });
});