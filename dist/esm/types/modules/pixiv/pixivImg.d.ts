/**
 * Downloads an image from a given URL and saves it to the specified output path.
 * @param imgUrl - The image URL to download
 * @param output - The output file path
 * @returns Resolves with the output file path if successful, rejects with an error if not.
 * @throws {TypeError} If imgUrl or output is not a string
 */
export declare function downloadPixivImage(imgUrl: string, output: string): Promise<string>;
