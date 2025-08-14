"use strict";
import { findBestMatch, compareTwoStrings } from "./string-similarity/findBestMatch.mjs";
import { downloadPixivImage } from "./pixiv/pixivImg.mjs";

const stringSimilarity = { compareTwoStrings, findBestMatch };
const pixiv = { downloadPixivImage };

export { stringSimilarity, pixiv };