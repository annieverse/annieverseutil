"use strict";
import path from 'path';
import fs from 'fs';

/**
 * Downloads an image from a given URL and saves it to the specified output path.
 * @function downloadPixivImage
 * @param {string} imgUrl 
 * @param {string} output 
 * @returns {Promise<string>} - Resolves with the output file path if successful, rejects with an error if not.
 * @throws {TypeError} - If imgUrl is not a string.
 */
export async function downloadPixivImage(imgUrl, output) {
    if (typeof imgUrl !== 'string' || typeof output !== 'string') {
        throw new TypeError('Expected a string');
    }

    output = output || path.basename(imgUrl);

    const options = {
        encoding: null,
        headers: {
            Referer: 'http://www.pixiv.net/'
        }
    };

    try {
        const response = await fetch(imgUrl, options);

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const fileStream = fs.createWriteStream(output);
        response.body.pipe(fileStream);

        return new Promise((resolve, reject) => {
            fileStream.on('finish', resolve);
            fileStream.on('error', reject);
        });
    } catch (error) {
        console.error('Error downloading image:', error);
        throw error;
    }
}

export default downloadPixivImage;