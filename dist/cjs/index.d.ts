import { findBestMatch, compareTwoStrings } from "./modules/string-similarity/findBestMatch";
import { downloadPixivImage } from "./modules/pixiv/pixivImg";
import { chunkOptions } from "./modules/general-util/chunkOptions";
import { closestBelow, commanifier, formatK, getNumberInRange, random, trueInt } from "./modules/general-util/numberRelated";
declare const stringSimilarity: {
    compareTwoStrings: typeof compareTwoStrings;
    findBestMatch: typeof findBestMatch;
};
declare const pixiv: {
    downloadPixivImage: typeof downloadPixivImage;
};
declare const utils: {
    chunkOptions: typeof chunkOptions;
    closestBelow: typeof closestBelow;
    commanifier: typeof commanifier;
    formatK: typeof formatK;
    getNumberInRange: typeof getNumberInRange;
    random: typeof random;
    trueInt: typeof trueInt;
};
export { stringSimilarity, pixiv, utils };
