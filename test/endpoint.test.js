import nock from 'nock';
import Endpoint from '../src/endpoint.js';
import chai from 'chai';

describe('Endpoint', () => {
  const FAKE_BEARER_TOKEN = 'FAKE_BEARER_TOKEN';
  const FAKE_URL = 'https://fake.com';

  describe('constructor', () => {
    it('contructs the object with expected bearer token', () => {
      const endpoint = new Endpoint('FAKE_BEARER_TOKEN');

      chai
        .expect(endpoint._bearerToken)
        .to.be.equals(FAKE_BEARER_TOKEN);
    });
  });

  describe('request', async () => {
    it('request the expected URL and returns the mocked response', async () => {
      const endpoint = new Endpoint('FAKE_BEARER_TOKEN');
      nock(FAKE_URL).get('/').reply(200, { success: true });
      const res = await endpoint.request(FAKE_URL, {});
      chai.expect(res).to.have.keys('success');
    });

    it('request the expected URL with specified URL paramaters', async () => {
      const endpoint = new Endpoint('FAKE_BEARER_TOKEN');
      const reqOptions = { pagination: { limit: 100 } };
      nock(FAKE_URL).get('/?limit=100').reply(200, { success: true });
      const res = await endpoint.request(FAKE_URL, reqOptions);
      chai.expect(res).to.have.keys('success');
    });
  });

  describe('_constructReqURL', async () => {
    it('returns the expected contructured URL with pagination options', async () => {
      const endpoint = new Endpoint('FAKE_BEARER_TOKEN');
      const reqOptions = { pagination: { limit: 100 } };
      const constructedURL = endpoint._constructReqURL(
        FAKE_URL,
        reqOptions
      );
      chai
        .expect(constructedURL.toString())
        .to.have.equal(`${FAKE_URL}/?limit=100`);
    });
  });
});
