import { BASE_URL } from '../../src/constant.js';
import nock from 'nock';
import Movie from '../../src/resources/Movie/Movie.js';
import chai from 'chai';

describe('Movies', () => {
  describe('getMovies', () => {
    it('calls the expected URL path and returns a valid response json', async () => {
      const movie = new Movie('FAKE_API_KEY');
      nock(BASE_URL).get('/movie').reply(200, mockResponse);
      const res = await movie.getMovies();
      chai
        .expect(res)
        .to.have.keys(
          'docs',
          'total',
          'limit',
          'page',
          'pages',
          'offset'
        );
    });
  });

  describe('getMovieById', () => {
    it('calls the expected URL path and returns a valid response json', async () => {
      const movie = new Movie('FAKE_API_KEY');
      const fakeMovieId = 'FAKE_ID';
      nock(BASE_URL)
        .get(`/movie/${fakeMovieId}`)
        .reply(200, mockResponse);
      const res = await movie.getMovieById(fakeMovieId);
      chai
        .expect(res)
        .to.have.keys(
          'docs',
          'total',
          'limit',
          'page',
          'pages',
          'offset'
        );
    });
  });

  describe('getQuotesByMovieId', () => {
    it('calls the expected URL path and returns a valid response json', async () => {
      const movie = new Movie('FAKE_API_KEY');
      const fakeMovieId = 'FAKE_ID';
      nock(BASE_URL)
        .get(`/movie/${fakeMovieId}/quote`)
        .reply(200, mockResponse);
      const res = await movie.getQuotesByMovieId(fakeMovieId);
      chai
        .expect(res)
        .to.have.keys(
          'docs',
          'total',
          'limit',
          'page',
          'pages',
          'offset'
        );
    });
  });
});

const mockResponse = {
  docs: [],
  total: 0,
  limit: 10,
  offset: 0,
  page: 1,
  pages: 1,
};
