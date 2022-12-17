const { shuffleArray } = require('../utils')

describe('shuffleArray should', () => {
    const testArr = [1, 2, 3, 4];
    let result = shuffleArray(testArr);

    test('return an array', () => {
        expect(Array.isArray(result)).toBeTruthy()
    })

    test('have same length as test array', () => {
        expect(result.length).toEqual(testArr.length)
    })

    test('same items are in returned array', () => {
        expect(result).toEqual(expect.arrayContaining(testArr))
    })

    test('not be in the same order as test array', () => {
        expect(result.join('')).not.toEqual(testArr.join(''))
    })
})