"use strict";
import { compareTwoStrings } from "./compareTwoStrings.mjs";

/**
 * This function checks if the arguments passed to the `findBestMatch` function are valid.
 * It checks if the first argument is a string, the second argument is an array of strings
 * @function areArgsValid 
 * @param {string} mainString 
 * @param {Array.<string>} targetStrings 
 * @returns {boolean}
 */
function areArgsValid(mainString, targetStrings) {
    if (typeof mainString !== 'string') return false;
    if (!Array.isArray(targetStrings)) return false;
    if (!targetStrings.length) return false;
    if (targetStrings.find(function (s) { return typeof s !== 'string'; })) return false;
    return true;
}

/**
 * This class represents an exception that is thrown when the arguments passed to the `findBestMatch` function are invalid.
 * It extends the built-in Error class and sets the name and message properties.
 * It also captures the stack trace for debugging purposes.
 * @class InvalidArgumentException 
 * @extends Error
 */
class InvalidArgumentException extends Error {
    /**
     * 
     * @param {string} message 
     */
    constructor (message) {
        super(message);
        this.name = 'InvalidArgumentException';
        this.message = message;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }

    }
}

/**
 * @function compareTwoStrings
 * @description This function compares two strings and returns a similarity score between 0 and 1 both inclusive, indicating how similar the strings are.
 * @param {string} first 
 * @param {string} second 
 * @returns {number} 
 */
export function compareTwoStrings(first, second) {

    if (typeof first !== 'string') throw new InvalidArgumentException('Bad arguments: First argument should be a string');
    if (typeof second !== 'string') throw new InvalidArgumentException('Bad arguments: Second argument should be a string');

    first = first.replace(/\s+/g, '');
    second = second.replace(/\s+/g, '');

    if (first === second) return 1; // identical or empty
    if (first.length < 2 || second.length < 2) return 0; // if either is a 0-letter or 1-letter string

    let firstBigrams = new Map();
    for (let i = 0; i < first.length - 1; i++) {
        const bigram = first.substring(i, i + 2);
        const count = firstBigrams.has(bigram)
            ? firstBigrams.get(bigram) + 1
            : 1;

        firstBigrams.set(bigram, count);
    };

    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
        const bigram = second.substring(i, i + 2);
        const count = firstBigrams.has(bigram)
            ? firstBigrams.get(bigram)
            : 0;

        if (count > 0) {
            firstBigrams.set(bigram, count - 1);
            intersectionSize++;
        }
    }

    return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

/**
 * The best Match object nested in the returned object from the `findBestMatch` function.
 * @typedef {object} bestMatch
 * @property {string} target - The target string that is the best match.
 * @property {number} rating - The similarity rating of the best match.
 */
/**
 * The returned object from the `findBestMatch` function.
 * @typedef {object} foundBestMatchResult
 * @property {Array.<{target: string, rating: number}>} ratings - An array of objects containing the target string and its similarity rating.
 * @property {bestMatch} bestMatch - The object containing the target string with the highest similarity
 * @property {number} bestMatchIndex - The index of the best match in the target strings array.
 */
/**
 * This function finds the best match for a given string from an array of target strings
 * by comparing the main string with each target string using the `compareTwoStrings` function.
 * It returns an object containing the ratings of all comparisons, the best match, and the index of the best match.
 * It throws an error if the arguments are not valid.
 * @function findBestMatch 
 * @param {string} mainString 
 * @param {Array.<string>} targetStrings 
 * @returns {foundBestMatchResult}
 * @throws {InvalidArgumentException} if the arguments are not valid.
 */
export function findBestMatch(mainString, targetStrings) {
    if (!areArgsValid(mainString, targetStrings)) throw new InvalidArgumentException('Bad arguments: First argument should be a string, second should be an array of strings');

    const ratings = [];
    let bestMatchIndex = 0;

    for (let i = 0; i < targetStrings.length; i++) {
        const currentTargetString = targetStrings[i];
        const currentRating = compareTwoStrings(mainString, currentTargetString);
        ratings.push({ target: currentTargetString, rating: currentRating });
        if (currentRating > ratings[bestMatchIndex].rating) {
            bestMatchIndex = i;
        }
    }

    const bestMatch = ratings[bestMatchIndex];

    return { ratings: ratings, bestMatch: bestMatch, bestMatchIndex: bestMatchIndex };
}

export default findBestMatch;