import fetch from 'node-fetch';

export default class Endpoint {
  constructor(bearerToken) {
    this._bearerToken = bearerToken;
  }

  async request(routeURL, options = {}) {
    this.reqURL = this._constructReqURL(routeURL, options);
    this._reqOptions = this._constructReqOptions(options);

    try {
      const res = await fetch(this.reqURL, this._reqOptions);
      return await res.json();
    } catch (error) {
      throw error;
    }
  }

  _constructReqURL(routeURL, options) {
    const reqUrl = new URL(routeURL);
    if (Object.keys(options).length !== 0) {
      const { pagination } = options;
      this._constructURLWithPagination(reqUrl, pagination);
    }
    return reqUrl;
  }

  _constructURLWithPagination(url, pagination) {
    if (!pagination) return;
    if (pagination.offset && pagination.page) {
      throw new Error(
        'Using Offset and Page is not supported. Please choose to use offset or page'
      );
    }
    for (const [key, value] of Object.entries(pagination)) {
      url.searchParams.append(key, value);
    }
  }

  _constructReqOptions(options) {
    Object.assign(options, this._constructHeader());
    return options;
  }

  _constructHeader() {
    return {
      headers: {
        Authorization: `Bearer ${this._bearerToken}`,
      },
    };
  }
}
