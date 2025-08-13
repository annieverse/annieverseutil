"use strict";
const findBestMatch = require("./string-similarity/findBestMatch.cjs");
const compareTwoStrings = require("./string-similarity/compareTwoStrings.cjs");
const downloadPixivImage = require("./pixiv/pixivImg.cjs");


const stringSimilarity = { compareTwoStrings, findBestMatch };
const pixiv = { downloadPixivImage };

module.exports = { stringSimilarity, pixiv };