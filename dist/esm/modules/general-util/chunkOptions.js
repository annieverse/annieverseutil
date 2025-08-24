"use strict";
/**
 * Chunk array into groups of arrays
 * @param array The array to chunk
 * @param size The size of each chunk
 * @returns An array of chunks
 */
function chunkOptions(array, size) {
    const chunkSize = size;
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        const chunk = array.slice(i, i + chunkSize);
        chunks.push(chunk);
    }
    return chunks;
}
export { chunkOptions };
