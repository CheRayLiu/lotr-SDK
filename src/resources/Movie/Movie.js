import Endpoint from '../../endpoint.js';
import { MOVIE_BASE_URL } from '../../constant.js';

export default class Movie extends Endpoint {
  getMovies(options = {}) {
    return this.request(`${MOVIE_BASE_URL}`, options);
  }

  getMovieById(movieId, options = {}) {
    return this.request(`${MOVIE_BASE_URL}/${movieId}`, options);
  }

  getQuoteById(movieId, options = {}) {
    return this.request(
      `${MOVIE_BASE_URL}/${movieId}/quote`,
      options
    );
  }
}
