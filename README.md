# annieverseUtil

A repo designed to house all util functionality for Discord bot Annie.

## Features

- General utilities (array chunking, number formatting, etc.)
- Pixiv image downloading
- String similarity matching

## Installation

```bash
npm install annieverseutil
```

## Usage

```js
// CommonJS
const { chunkOptions, downloadPixivImage } = require('annieverseutil');

// ES Module
import { chunkOptions, downloadPixivImage} from 'annieverseutil';
```

## Modules

### utils

- `chunkOptions` – Chunk an array into groups.
- `random` – Get a random element from an array
- `closetBelow` - Get the closest value in an array that is below a specified value
- `commanifier` - Format a number with commas as thousands separators
- `formatK` - Format a number into a more readable string
- `getNumberInRange` - Get a random integer within a specified range
- `trueInt` - Get a true integer value from a string

### pixiv

- `downloadPixivImage` – Download an image from Pixiv.

### string-similarity

- `findBestMatch` – Finds the best match for a given string within an array of target strings.
- `compareTwoStrings` – Compares two strings and returns a similarity score between 0 and 1.

## Contributors

- Naph ([klerikdust](https://github.com/klerikdust))
- Pan ([Moore2021](https://github.com/Moore2021))

## License

MIT
