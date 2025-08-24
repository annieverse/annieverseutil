"use strict";
const { utils } = require(`../src/index`);
const { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt, chunkOptions } = utils;

describe(`Testing utils module`, () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe(`closestBelow`, () => {
        it(`returns the closest value below or equal to val`, () => {
            expect(closestBelow([1, 3, 5, 7], 6)).toBe(5);
            expect(closestBelow([1, 3, 5, 7], 7)).toBe(7);
            expect(closestBelow([1, 3, 5, 7], 0)).toBe(-Infinity);
        });
    });

    describe(`commanifier`, () => {
        it(`adds commas to numbers`, () => {
            expect(commanifier(1234567)).toBe(`1,234,567`);
            expect(commanifier(1234.56, false)).toBe(`1,234.56`);
            expect(commanifier(12)).toBe(`12`);
        });
    });

    describe(`formatK`, () => {
        it(`formats numbers into K/M notation`, () => {
            expect(formatK(123)).toBe(123);
            expect(formatK(1234)).toBe(`1.2k`);
            expect(formatK(1234567)).toBe(`1.2M`);
            expect(formatK(0)).toBe(0);
        });
    });

    describe(`getNumberInRange`, () => {
        it(`returns a number within the given range`, () => {
            for (let i = 0; i < 10; i++) {
                const n = getNumberInRange([5, 10]);
                expect(n).toBeGreaterThanOrEqual(5);
                expect(n).toBeLessThanOrEqual(10);
            }
        });
    });

    describe(`random`, () => {
        it(`returns a value from the array`, () => {
            const arr = [1, 2, 3];
            for (let i = 0; i < 10; i++) {
                expect(arr).toContain(random(arr));
            }
        });
    });

    describe(`trueInt`, () => {
        it(`converts valid string numbers to integer`, () => {
            expect(trueInt(`123`)).toBe(123);
            expect(trueInt(`123.7`)).toBe(124);
            expect(trueInt(`0`)).toBeNaN();
            expect(trueInt(`abc`)).toBeNaN();
        });
    });
    describe(`chunkOptions`, () => {
        it(`should chunk array into groups of given size`, () => {
            expect(chunkOptions([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
            expect(chunkOptions([1, 2, 3, 4, 5, 6], 3)).toEqual([[1, 2, 3], [4, 5, 6]]);
        });

        it(`should return empty array if input is empty`, () => {
            expect(chunkOptions([], 2)).toEqual([]);
        });

        it(`should handle size larger than array length`, () => {
            expect(chunkOptions([1, 2], 5)).toEqual([[1, 2]]);
        });
    });
});