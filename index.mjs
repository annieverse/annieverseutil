"use strict";
import { findBestMatch, compareTwoStrings } from "./string-similarity/findBestMatch.mjs";
import { downloadPixivImage } from "./pixiv/pixivImg.mjs";
import { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt } from "./general-util/numberRelated.mjs";
import chunkOptions from "./general-util/chunkOptions.mjs";

const stringSimilarity = { findBestMatch, compareTwoStrings };
const pixiv = { downloadPixivImage };
const utils = { chunkOptions, closestBelow, commanifier, formatK, getNumberInRange, random, trueInt };

export { stringSimilarity, pixiv, utils };