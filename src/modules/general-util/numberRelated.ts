"use strict"
/**
 * Get the closest value in an array that is below a specified value
 * @param array The array to search
 * @param val The value to compare against
 * @returns The closest value below the specified value, or null if none exists
 */
function closestBelow(array: number[] = [], val: number = 1): number | null {
    return Math.max.apply(null, array.filter((v) => v <= val));
}

/**
 * Format a number with commas as thousands separators
 * @param number The number to format
 * @param roundUp Whether to round up the number
 * @returns A formatted string representation of the number
 */
function commanifier(number: number = 0, roundUp: boolean = true): string {
    if (roundUp) number = Math.round(number);
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`) : '0';
}

/**
 * Format a number into a more readable string
 * @param num The number to format
 * @returns A formatted string representation of the number
 */
function formatK(num: number = 0): string | number {
    return !num ? 0 : (num > 999999 ? (num / 1000000).toFixed(1) + `M` : num > 999 ? (num / 1000).toFixed(1) + `k` : num);
}

/**
 * Get a random integer within a specified range
 * @param range A tuple representing the minimum and maximum values
 * @returns A random integer within the specified range
 */
function getNumberInRange(range: [number, number]): number {
    const [min, max] = range;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Get a random element from an array
 * @param src Array to choose from
 * @returns A random element from the array
 */
function random(src: any[] = []): any {
    return src[Math.floor(Math.random() * src.length)];
}

/**
 * Get a true integer value from a string
 * @param str The input string
 * @returns The true integer value or NaN
 */
function trueInt(str: string = ``): number {
    return (!Number.isNaN(Number(str)) && !(Math.round(Number(str)) <= 0) && Number.isFinite(Number(str)))
        ? Math.round(Number(str)) : NaN;
}

export { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt };