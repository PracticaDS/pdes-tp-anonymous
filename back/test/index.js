require('../src/index');
const supertest = require('supertest');

const server = supertest.agent('http://localhost:8080');

describe('App test', () => {
  it('Simple test', (done) => {
    server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200, done);
  });
});
