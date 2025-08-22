"use strict";
const { findBestMatch, compareTwoStrings } = require("./string-similarity/findBestMatch.cjs");
const { downloadPixivImage } = require("./pixiv/pixivImg.cjs");
const { chunkOptions } = require(`./general-util/chunkOptions.cjs`);
const { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt } = require("./general-util/numberRelated.cjs");

const stringSimilarity = { compareTwoStrings, findBestMatch };
const pixiv = { downloadPixivImage };
const utils = { chunkOptions, closestBelow, commanifier, formatK, getNumberInRange, random, trueInt };

module.exports = { stringSimilarity, pixiv, utils };