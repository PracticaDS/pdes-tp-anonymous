const request = require('supertest');
const { app } = require('../src/index');

describe('App test', () => {
  it('Simple test', (done) => {
    request(app)
      .get('/')
      .expect('Content-type', /json/)
      .expect(200)
      .expect({ message: 'Ok, auto deploy working' })
      .end(done);
  });
});
