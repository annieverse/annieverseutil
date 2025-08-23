/**
 * Chunk array into groups of arrays
 * @param array The array to chunk
 * @param size The size of each chunk
 * @returns An array of chunks
 */
function chunkOptions(array: any[], size: number): any[][] {
    const chunkSize: number = size;
    const chunks: any[][] = [];
    for (let i: number = 0; i < array.length; i += chunkSize) {
        const chunk: any[] = array.slice(i, i + chunkSize);
        chunks.push(chunk);
    }
    return chunks;
}

export { chunkOptions };