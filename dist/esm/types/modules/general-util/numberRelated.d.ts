/**
 * Get the closest value in an array that is below a specified value
 * @param array The array to search
 * @param val The value to compare against
 * @returns The closest value below the specified value, or null if none exists
 */
declare function closestBelow(array?: number[], val?: number): number | null;
/**
 * Format a number with commas as thousands separators
 * @param number The number to format
 * @param roundUp Whether to round up the number
 * @returns A formatted string representation of the number
 */
declare function commanifier(number?: number, roundUp?: boolean): string;
/**
 * Format a number into a more readable string
 * @param num The number to format
 * @returns A formatted string representation of the number
 */
declare function formatK(num?: number): string | number;
/**
 * Get a random integer within a specified range
 * @param range A tuple representing the minimum and maximum values
 * @returns A random integer within the specified range
 */
declare function getNumberInRange(range: [number, number]): number;
/**
 * Get a random element from an array
 * @param src Array to choose from
 * @returns A random element from the array
 */
declare function random(src?: any[]): any;
/**
 * Get a true integer value from a string
 * @param str The input string
 * @returns The true integer value or NaN
 */
declare function trueInt(str?: string): number;
export { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt };
