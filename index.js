"use strict";
import { findBestMatch } from "./string-similarity/findBestMatch";
import { compareTwoStrings } from "./string-similarity/compareTwoStrings";
import { downloadPixivImage } from "./pixiv/pixivImg";

export const stringSimilarity = { compareTwoStrings, findBestMatch };
export const pixiv = { downloadPixivImage };

