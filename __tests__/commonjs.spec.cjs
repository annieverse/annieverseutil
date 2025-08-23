"use strict";
const fs = require('fs');
const { stringSimilarity, pixiv, utils } = require(`../dist/cjs/index`);
const { compareTwoStrings, findBestMatch } = stringSimilarity
const { downloadPixivImage } = pixiv
const { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt, chunkOptions } = utils

describe(`[.cjs] Testing modules`, () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe(`Testing string-similarity module`, () => {
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

    describe(`Testing pixiv module`, () => {
        describe('downloadPixivImage', () => {
            it('should throw TypeError if imgUrl is not a string', async () => {
                await expect(downloadPixivImage(123, 'output.jpg')).rejects.toThrow(TypeError);
            });

            it('should throw TypeError if output is not a string', async () => {
                await expect(downloadPixivImage('http://example.com/image.jpg', 123)).rejects.toThrow(TypeError);
            });

            it('should reject if fetch fails', async () => {
                // Mock fetch to simulate failure
                global.fetch = jest.fn().mockResolvedValue({ ok: false, statusText: 'Not Found' });
                await expect(downloadPixivImage('http://example.com/image.jpg', 'output.jpg')).rejects.toThrow('Failed to fetch image');
            });

            /* it('should resolve with output file path on success', async () => {
                // Mock fetch to simulate success
                const stream = { pipe: jest.fn() };
                global.fetch = jest.fn().mockResolvedValue({
                    ok: true,
                    body: stream
                });
                jest.spyOn(fs, 'createWriteStream').mockReturnValue({
                    on: (event, cb) => {
                        if (event === 'finish') setTimeout(cb, 10);
                        return this;
                    }
                });
                await expect(downloadPixivImage('http://example.com/image.jpg', 'output.jpg')).resolves.toBeUndefined();
            }); */

            afterEach(() => {
                jest.restoreAllMocks();
                delete global.fetch;
            });
        });
    });

    describe(`Testing utils module`, () => {
        describe('closestBelow', () => {
            it('returns the closest value below or equal to val', () => {
                expect(closestBelow([1, 3, 5, 7], 6)).toBe(5);
                expect(closestBelow([1, 3, 5, 7], 7)).toBe(7);
                expect(closestBelow([1, 3, 5, 7], 0)).toBe(-Infinity);
            });
        });

        describe('commanifier', () => {
            it('adds commas to numbers', () => {
                expect(commanifier(1234567)).toBe('1,234,567');
                expect(commanifier(1234.56, false)).toBe('1,234.56');
                expect(commanifier(12)).toBe('12');
            });
        });

        describe('formatK', () => {
            it('formats numbers into K/M notation', () => {
                expect(formatK(123)).toBe(123);
                expect(formatK(1234)).toBe('1.2k');
                expect(formatK(1234567)).toBe('1.2M');
                expect(formatK(0)).toBe(0);
            });
        });

        describe('getNumberInRange', () => {
            it('returns a number within the given range', () => {
                for (let i = 0; i < 10; i++) {
                    const n = getNumberInRange([5, 10]);
                    expect(n).toBeGreaterThanOrEqual(5);
                    expect(n).toBeLessThanOrEqual(10);
                }
            });
        });

        describe('random', () => {
            it('returns a value from the array', () => {
                const arr = [1, 2, 3];
                for (let i = 0; i < 10; i++) {
                    expect(arr).toContain(random(arr));
                }
            });
        });

        describe('trueInt', () => {
            it('converts valid string numbers to integer', () => {
                expect(trueInt('123')).toBe(123);
                expect(trueInt('123.7')).toBe(124);
                expect(trueInt('0')).toBeNaN();
                expect(trueInt('abc')).toBeNaN();
            });
        });
        describe('chunkOptions', () => {
            it('should chunk array into groups of given size', () => {
                expect(chunkOptions([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
                expect(chunkOptions([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
            });

            it('should return empty array if input is empty', () => {
                expect(chunkOptions([], 2)).toEqual([]);
            });

            it('should handle size larger than array length', () => {
                expect(chunkOptions([1, 2], 5)).toEqual([[1, 2]]);
            });
        });
    });
});
