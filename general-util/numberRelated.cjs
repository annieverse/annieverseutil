"use strict";
/**
 * Get closest below element of an array
 * @param {array} [array=[]] source to be search in
 * @param {number} [val=1] value comparator 
 * @returns {?element}
 */
function closestBelow(array = [], val = 1) {
    return Math.max.apply(null, array.filter((v) => v <= val))
}


/**
 *  Add comma separator on given number. Only applies to number above 3 digits.
 *  @param {number} [number=0] target number to be parsed from
 *  @param {boolean} [roundUp=true] Transform targer number into a rounded number before gets replaced with commas. Optional.
 *  @returns {string}
 */
function commanifier(number = 0, roundUp = true) {
    if (roundUp) number = Math.round(number)
    return number ? number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, `,`) : 0
}

/**
 * Formatting number into K format.
 * @param {number} [num=0] the target number
 */
function formatK(num = 0) {
    return !num ? 0 : (num > 999999 ? (num / 1000000).toFixed(1) + `M` : num > 999 ? (num / 1000).toFixed(1) + `k` : num)
}

/**
 * Get random nunmber inside given range.
 * @param {object} [range=[0, 1]] min max numbers.
 * @return {number}
 */
function getNumberInRange(range) {
    const [min, max] = range
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Gets random result from given array.
 * @param {object} [src=[]] Target array.
 * @return {*}
 */
function random(src = []) {
    return src[Math.floor(Math.random() * src.length)]
}

/**
 * Automatically convert any weird number notation into a real value.
 * @author Fwubbles
 * @param {String} str target string
 * @returns {Number/NaN}
 */
function trueInt(str = ``) {
    return (!Number.isNaN(Number(str)) && !(Math.round(Number(str)) <= 0) && Number.isFinite(Number(str)))
        ? Math.round(Number(str)) : NaN
}
module.exports = { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt }