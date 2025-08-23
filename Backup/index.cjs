"use strict";
const { findBestMatch, compareTwoStrings } = require(`./modules/string-similarity/findBestMatch.cjs`);
const { downloadPixivImage } = require(`./modules/pixiv/pixivImg.cjs`);
const { chunkOptions } = require(`./modules/general-util/chunkOptions.cjs`);
const { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt } = require(`./modules/general-util/numberRelated.cjs`);

const stringSimilarity = { compareTwoStrings, findBestMatch };
const pixiv = { downloadPixivImage };
const utils = { chunkOptions, closestBelow, commanifier, formatK, getNumberInRange, random, trueInt };

module.exports = { stringSimilarity, pixiv, utils };