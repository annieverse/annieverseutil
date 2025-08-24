"use strict";
const { pixiv } = require(`../src/index`);
const { downloadPixivImage } = pixiv;

describe(`Testing pixiv module`, () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    describe(`downloadPixivImage`, () => {
        it(`should throw TypeError if imgUrl is not a string`, async () => {
            await expect(downloadPixivImage(123, `output.jpg`)).rejects.toThrow(TypeError);
        });

        it(`should throw TypeError if output is not a string`, async () => {
            await expect(downloadPixivImage(`http://example.com/image.jpg`, 123)).rejects.toThrow(TypeError);
        });

        it(`should reject if fetch fails`, async () => {
            // Mock fetch to simulate failure
            global.fetch = jest.fn().mockResolvedValue({ ok: false, statusText: `Not Found` });
            await expect(downloadPixivImage(`http://example.com/image.jpg`, `output.jpg`)).rejects.toThrow(`Failed to fetch image`);
        });

        /*
         * it('should resolve with output file path on success', async () => {
         *  // Mock fetch to simulate success
         *  const stream = { pipe: jest.fn() };
         *  global.fetch = jest.fn().mockResolvedValue({
         *      ok: true,
         *      body: stream
         *  });
         *  jest.spyOn(fs, 'createWriteStream').mockReturnValue({
         *      on: (event, cb) => {
         *          if (event === 'finish') setTimeout(cb, 10);
         *          return this;
         *      }
         *  });
         *  await expect(downloadPixivImage('http://example.com/image.jpg', 'output.jpg')).resolves.toBeUndefined();
         * }); 
         */

        afterEach(() => {
            jest.restoreAllMocks();
            delete global.fetch;
        });
    });
});
