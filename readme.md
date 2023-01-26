# Lord of the Ring Node Library

Lord of the Ring Node Library provides convenient access to the [LOTR API](https://the-one-api.dev/) from applications written in server-side JavaScript.

## Installation

Install the package with:

```sh
npm install ray-liu-sdk --save
# or
yarn add ray-liu-sdk
```

## Usage

The library needs to be used with your access token, which is
available in the (https://the-one-api.dev/account)[The One Api Account Page][api-keys]. Requiring it with the key's value

```js
const client = require('ray-liu-sdk')('YOUR_BEARER_TOKEN');
client.movie
  .getMovieById('5cd95395de30eff6ebccde5d')
  .then((movie) => console.log(movie))
  .catch((error) => console.error(error));
```

Or using ES modules and using `async`/`await`:

```js
import LOTRApi from 'ray-liu-sdk';

const client = new LOTRApi('YOUR_BEARER_TOKEN');
const movie = await client.movie.movie('5cd95395de30eff6ebccde5d');

console.log(movie);
```

## Pagination

You can also specify pagination options by passing in an option object specifying pagination options such as `limit`, `offset` or `page`.
Note: Usage of both `offset` and `page` is not supported

```js
import LOTRApi from 'ray-liu-sdk';

const client = new LOTRApi('YOUR_BEARER_TOKEN');

const options = {
  pagination: {
    limit: 10,
    page: 1,
  },
};

const movie = await client.movie.getQuoteById(
  '5cd95395de30eff6ebccde5d',
  options
);

console.log(movie);
```

## Filter and sorting

Filter and supported is not yet supported in this library
