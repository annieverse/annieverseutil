"use strict";
import { findBestMatch, compareTwoStrings } from "./modules/string-similarity/findBestMatch.mjs";
import { downloadPixivImage } from "./modules/pixiv/pixivImg.mjs";
import { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt } from "./modules/general-util/numberRelated.mjs";
import chunkOptions from "./modules/general-util/chunkOptions.mjs";

const stringSimilarity = { findBestMatch, compareTwoStrings };
const pixiv = { downloadPixivImage };
const utils = { chunkOptions, closestBelow, commanifier, formatK, getNumberInRange, random, trueInt };

export { stringSimilarity, pixiv, utils };