"use strict";
const { findBestMatch, compareTwoStrings } = require("./string-similarity/findBestMatch.cjs");
const downloadPixivImage = require("./pixiv/pixivImg.cjs");


const stringSimilarity = { compareTwoStrings, findBestMatch };
const pixiv = { downloadPixivImage };

module.exports = { stringSimilarity, pixiv };