import path from 'path';
import fs from 'fs';

/**
 * Downloads an image from a given URL and saves it to the specified output path.
 * @param imgUrl - The image URL to download
 * @param output - The output file path
 * @returns Resolves with the output file path if successful, rejects with an error if not.
 * @throws {TypeError} If imgUrl or output is not a string
 */
export async function downloadPixivImage(imgUrl: string, output: string): Promise<string> {
    if (typeof imgUrl !== 'string' || typeof output !== 'string') {
        throw new TypeError('Expected a string');
    }

    output = output || path.basename(imgUrl);

    const options = {
        // encoding: null, // Not needed in fetch
        headers: {
            Referer: 'http://www.pixiv.net/'
        }
    };

    try {
        // @ts-ignore: fetch is available in Node 18+
        const response = await fetch(imgUrl, options);

        if (!response.ok) {
            throw new Error(`Failed to fetch image: ${response.statusText}`);
        }

        const fileStream = fs.createWriteStream(output);
        (response.body as unknown as NodeJS.ReadableStream).pipe(fileStream);

        return new Promise((resolve, reject) => {
            fileStream.on('finish', () => resolve(output));
            fileStream.on('error', reject);
        });
    } catch (error) {
        console.error('Error downloading image:', error);
        throw error;
    }
}
