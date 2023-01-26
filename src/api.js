import Movie from './resources/Movie/Movie.js';
import { VERSION } from './constant.js';

export default class LOTRApi {
  static get VERSION() {
    return VERSION;
  }

  constructor(accessToken) {
    this.movie = new Movie(accessToken);
  }
}
