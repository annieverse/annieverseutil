"use strict";
/**
 * Validates the arguments for the findBestMatch function.
 * @param mainString The string to find a match for.
 * @param targetStrings The array of strings to search within.
 * @returns True if the arguments are valid, false otherwise.
 */
function areArgsValid(mainString: string, targetStrings: string[]): boolean {
    if (typeof mainString !== `string`) return false;
    if (!Array.isArray(targetStrings)) return false;
    if (!targetStrings.length) return false;
    if (targetStrings.find((s: string) => typeof s !== `string`)) return false;
    return true;
}

/**
 * Represents an error thrown when invalid arguments are provided.
 */
class InvalidArgumentException extends Error {
    constructor(message: string) {
        super(message);
        this.name = `InvalidArgumentException`;
        this.message = message;
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, InvalidArgumentException);
        } else {
            this.stack = (new Error()).stack;
        }
    }
}

/**
 * Compares two strings and returns a similarity score between 0 and 1.
 * @param first The first string to compare.
 * @param second The second string to compare.
 * @returns A number representing the similarity score.
 */
function compareTwoStrings(first: string, second: string): number {
    if (typeof first !== `string`) throw new InvalidArgumentException(`Bad arguments: First argument should be a string`);
    if (typeof second !== `string`) throw new InvalidArgumentException(`Bad arguments: Second argument should be a string`);

    first = first.replace(/\s+/g, ``);
    second = second.replace(/\s+/g, ``);

    if (first === second) return 1;
    if (first.length < 2 || second.length < 2) return 0;

    let firstBigrams = new Map<string, number>();
    for (let i = 0; i < first.length - 1; i++) {
        const bigram = first.substring(i, i + 2);
        const count = firstBigrams.has(bigram)
            ? firstBigrams.get(bigram)! + 1
            : 1;

        firstBigrams.set(bigram, count);
    };

    let intersectionSize = 0;
    for (let i = 0; i < second.length - 1; i++) {
        const bigram = second.substring(i, i + 2);
        const count = firstBigrams.has(bigram)
            ? firstBigrams.get(bigram)!
            : 0;

        if (count > 0) {
            firstBigrams.set(bigram, count - 1);
            intersectionSize++;
        }
    }

    return (2.0 * intersectionSize) / (first.length + second.length - 2);
}

/**
 * Represents the best match found for a given string.
 */
interface BestMatch {
    target: string;
    rating: number;
}

/**
 * Represents the result of finding the best match for a given string.
 */
interface FoundBestMatchResult {
    ratings: Array<{ target: string; rating: number }>;
    bestMatch: BestMatch;
    bestMatchIndex: number;
}

/**
 * Finds the best match for a given string within an array of target strings.
 * @param mainString The string to find a match for.
 * @param targetStrings The array of strings to search within.
 * @returns An object containing the ratings for all comparisons, the best match, and its index.
 */
function findBestMatch(mainString: string, targetStrings: string[]): FoundBestMatchResult {
    if (!areArgsValid(mainString, targetStrings)) throw new InvalidArgumentException(`Bad arguments: First argument should be a string, second should be an array of strings`);

    const ratings: Array<{ target: string; rating: number }> = [];
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

export { findBestMatch, compareTwoStrings };