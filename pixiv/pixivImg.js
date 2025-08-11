"use strict";
const path = require('path');
const fs = require('fs');
const got = require('got');

/**
 * Downloads an image from a given URL and saves it to the specified output path.
 * @function downloadPixivImage
 * @param {string} imgUrl 
 * @param {string} output 
 * @returns {Promise<string>} - Resolves with the output file path if successful, rejects with an error if not.
 * @throws {TypeError} - If imgUrl is not a string.
 */
export function downloadPixivImage(imgUrl, output) {
    return new Promise((resolve, reject) => {
        if (typeof imgUrl !== 'string') {
            reject(new TypeError('Expected a string'));
        }

        output = output || path.basename(imgUrl);

        const options = {
            encoding: null,
            headers: {
                Referer: 'http://www.pixiv.net/'
            }
        };

        const gotStream = got.stream(imgUrl, options);
        gotStream.on('error', err => {
            reject(err);
        });

        gotStream.pipe(fs.createWriteStream(output)).on('close', () => {
            resolve(output);
        });
    });
}