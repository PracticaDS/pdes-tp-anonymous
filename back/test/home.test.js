const { OK } = require('http-status-codes');
const { app, request } = require('./test-case');

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
