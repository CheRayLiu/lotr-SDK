# Lord of the Ring Node Library

Lord of the Ring Node Library provides convenient access to the [The One API](https://the-one-api.dev/) for applications written in server-side JavaScript.

You can find the official documentation for The One API can be found [here](https://the-one-api.dev/)

Currently the library only support the Movie endpoints:

- `/movies`
- `/movies/:id`
- `/movies/:id/quotes`

## Installation

Install the package with:

```sh
npm install ray-liu-sdk --save
# or
yarn add ray-liu-sdk
```

## Usage

The library needs to be used with your access token, which is
available in the (https://the-one-api.dev/account)[The One Api Account Page]. To use the SDK, you can require it with the key's value

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

## Entity

### Movie

`List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies`

```js
client.movie.getMovies();
```

`Request one specific movie`

```js
client.movie.getMovieById();
```

`Request all movie quotes for one specific movie (only working for the LotR trilogy)`

```js
client.movie.getQuotesByMovieId();
```

## Filter and sorting

Filter and supported is not yet supported in this library

# Development

Run all tests:

```sh
yarn install
yarn test
```
