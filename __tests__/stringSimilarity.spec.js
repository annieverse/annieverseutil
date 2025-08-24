"use strict";
const { stringSimilarity } = require(`../src/index`);
const { compareTwoStrings, findBestMatch } = stringSimilarity;

describe(`Testing string-similarity module`, () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe(`Testing compareTwoStrings function`, () => {

        it(`should return a InvalidArgumentException error for invalid arguments`, () => {
            expect(() => { compareTwoStrings(123, `test`); }).toThrow(`Bad arguments: First argument should be a string`);
            expect(() => { compareTwoStrings(`test`, 123); }).toThrow(`Bad arguments: Second argument should be a string`);
            const testOne = compareTwoStrings(`t`, `test`);
            const testTwo = compareTwoStrings(`te`, ``);
            const testThree = compareTwoStrings(`banana`, `bananasplit`);
            expect(testOne).toBe(0);
            expect(testTwo).toBe(0);
            expect(typeof testThree).toBe(`number`);
        });

        it(`should return a similarity score of 1 for identical strings`, () => {
            const result = compareTwoStrings(`test`, `test`);
            expect(result).toBe(1);
        });

        it(`should return a similarity score of 0 for completely different strings`, () => {
            const result = compareTwoStrings(`test`, `TESTING`);
            expect(result).toBe(0);
        });

        it(`should return a similarity score reflecting the similarity of two strings`, () => {
            const result = compareTwoStrings(`tes`, `test`);
            expect(result).toBeCloseTo(0.8, 1);
        });
    });

    describe(`Testing findBestMatch function`, () => {
        it(`should return a InvalidArgumentException error for invalid arguments`, () => {
            expect(() => { findBestMatch(123, [`test`]); }).toThrow(`Bad arguments: First argument should be a string, second should be an array of strings`);
            expect(() => { findBestMatch(`test`, []); }).toThrow(`Bad arguments: First argument should be a string, second should be an array of strings`);
            expect(() => { findBestMatch(`test`, 123); }).toThrow(`Bad arguments: First argument should be a string, second should be an array of strings`);
            expect(() => { findBestMatch(`test`, [`test`, 123]); }).toThrow(`Bad arguments: First argument should be a string, second should be an array of strings`);

        });

        it(`should return the best match "test" from partial input`, () => {
            const result = findBestMatch(`tes`, [`TEST`, `test`, `Test`]);
            const expectedResult = { target: `test`, rating: 0.8 };
            expect(result.bestMatch).toEqual(expectedResult);
        });

        it(`for InvalidArgumentException it should use fallback stack assignment if captureStackTrace is missing`, () => {
            const originalCaptureStackTrace = Error.captureStackTrace;
            delete Error.captureStackTrace; // Remove it to force the else branch

            try {
                findBestMatch(123, [`test`]);
            } catch (error) {
                expect(error.stack).toBeDefined();
            }

            // Restore it after the test
            Error.captureStackTrace = originalCaptureStackTrace;
        });
    });
});