const request = require('supertest');
const app = require('../src/index');

const server = request(app.routes);

describe('App test', () => {
  it('Simple test', (done) => {
    server
      .get('/')
      .expect('Content-type', /json/)
      .expect(200)
      .expect({ message: 'Ok, auto deploy working' })
      .end(done);
  });
});
