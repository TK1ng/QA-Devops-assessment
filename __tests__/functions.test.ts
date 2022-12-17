const { shuffleArray } = require('../utils')

describe('shuffleArray should', () => {
    const testArr = [1, 2, 3, 4];
    let result = shuffleArray(testArr);

    test('return an array', () => {
        expect(Array.isArray(result)).toBeTruthy()
    })

    test('have same length as original array', () => {
        expect(result.length).toEqual(testArr.length)
    })

    test('same items are in returned array', () => {
        expect(result).toEqual(expect.arrayContaining(testArr))
    })
})