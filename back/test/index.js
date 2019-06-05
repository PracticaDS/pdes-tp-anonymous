const request = require('supertest');
const { OK } = require('http-status-codes');
const app = require('../src/app/express');

describe('Home API testing', () => {
  it('Verification Test', (done) => {
    request(app)
      .get('/')
      .expect('Content-type', /json/)
      .expect(OK)
      .expect({ message: 'OK, working...' })
      .end(done);
  });
});
