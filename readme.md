# Lord of the Ring Node Library

Lord of the Ring Node Library provides convenient access to the [The One API](https://the-one-api.dev/) for applications written in server-side JavaScript.

The official documentation for `The One API` can be found [here](https://the-one-api.dev/)

Currently the library only support the Movie endpoints:

- `/movies`
- `/movies/:id`
- `/movies/:id/quotes`

## Installation

Install the package with:

```sh
npm install lotr-node-sdk --save
# or
yarn add lotr-node-sdk
```

## Usage

The library needs to be used with your access token, which is
available in the [The One Api Account Page](https://the-one-api.dev/account). To use the SDK, you can pass the token into LOTRApi()

```js
import LOTRApi from 'lotr-node-sdk';

const client = new LOTRApi('YOUR_ACCESS_TOKEN');
client.movie
  .getMovieById('5cd95395de30eff6ebccde5d')
  .then((movie) => console.log(movie))
  .catch((error) => console.error(error));
```

Or using `async`/`await`:

```js
import LOTRApi from 'lotr-node-sdk';

const client = new LOTRApi('YOUR_ACCESS_TOKEN');
const movie = await client.movie.movie('5cd95395de30eff6ebccde5d');

console.log(movie);
```

## Pagination

You can also specify pagination options by passing in an option object specifying pagination options to all endpoint methods (eg. `getMovieById`) such as `limit`, `offset` or `page`.

Note: Usage of both `offset` and `page` is not supported

```js
import LOTRApi from 'lotr-node-sdk';

const client = new LOTRApi('YOUR_ACCESS_TOKEN');

const options = {
  pagination: {
    limit: 10,
    page: 1,
  },
};

const movie = await client.movie.getQuotesByMovieId(
  '5cd95395de30eff6ebccde5d',
  options
);

console.log(movie);
```

## Endpoints Available

### Movie

Endpoint: `/movies`
`List of all movies, including the "The Lord of the Rings" and the "The Hobbit" trilogies`

```js
client.movie.getMovies();
```

Endpoint: `/movies/:id`
`Request one specific movie`

```js
client.movie.getMovieById('SOME_ID');
```

Endpoint: `/movies/:id/quotes`

`Request all movie quotes for one specific movie (only working for the LotR trilogy)`

```js
client.movie.getQuotesByMovieId('SOME_ID');
```

## Filter and sorting

Filter and sorting are not yet supported in this library

# Development

Run all tests:

```sh
yarn install
yarn test
```
