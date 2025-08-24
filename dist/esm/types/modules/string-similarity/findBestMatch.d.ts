/**
 * Compares two strings and returns a similarity score between 0 and 1.
 * @param first The first string to compare.
 * @param second The second string to compare.
 * @returns A number representing the similarity score.
 */
declare function compareTwoStrings(first: string, second: string): number;
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
    ratings: Array<{
        target: string;
        rating: number;
    }>;
    bestMatch: BestMatch;
    bestMatchIndex: number;
}
/**
 * Finds the best match for a given string within an array of target strings.
 * @param mainString The string to find a match for.
 * @param targetStrings The array of strings to search within.
 * @returns An object containing the ratings for all comparisons, the best match, and its index.
 */
declare function findBestMatch(mainString: string, targetStrings: string[]): FoundBestMatchResult;
export { findBestMatch, compareTwoStrings };
