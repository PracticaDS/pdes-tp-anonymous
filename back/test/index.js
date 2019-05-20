const supertest = require('supertest');
const app = require('../src/index');

const server = supertest.agent('http://localhost:8080');

describe('App test', (t) => {
  it('Simple test', (done) => {
    server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200, done);
  });
});
