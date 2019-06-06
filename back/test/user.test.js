const { OK, CREATED, CONFLICT, NOT_FOUND } = require('http-status-codes');
const { app, chai, mongoose, request } = require('./test-case');

const { assert } = chai;

describe('User API testing', () => {
  beforeEach(done => mongoose.connection.createCollection('users', done));
  afterEach(done => mongoose.connection.dropCollection('users', done));

  describe('POST /user', () => {
    it('Creates and return a new user', (done) => {
      request(app)
        .post('/users')
        .send({ username: 'pepe' })
        .expect('Content-type', /json/)
        .expect(CREATED)
        .expect((res) => {
          assert.exists(res.body._id, '_id must be defined');
          assert.include(res.body, { username: 'pepe' });
        })
        .end(done);
    });

    it('New user is created without games', (done) => {
      request(app)
        .post('/users')
        .send({ username: 'pepe', games: ['A fucking game'] })
        .expect('Content-type', /json/)
        .expect(CREATED)
        .expect((res) => {
          assert.include(res.body, { username: 'pepe' });
          assert.isEmpty(res.body.games);
        })
        .end(done);
    });
  });

  describe('GET /users', () => {
    it('When not exists users, returns an empty list', (done) => {
      request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(OK)
        .expect((res) => {
          assert.isArray(res.body);
          assert.isEmpty(res.body);
        })
        .end(done);
    });

    it('When exists users, returns a list with that users', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app).post('/users').send({ username: 'dany' }).end(() => {
          request(app)
            .get('/users')
            .expect('Content-Type', /json/)
            .expect(OK)
            .expect((res) => {
              assert.lengthOf(res.body, 2);
              assert.includeMembers(res.body.map(e => e.username), ['jon', 'dany']);
              res.body.forEach((user) => {
                assert.isArray(user.games);
                assert.isEmpty(user.games);
              });
            })
            .end(done);
        });
      });
    });
  });

  describe('GET /users/:username', () => {
    it('Return the user :username', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app).post('/users').send({ username: 'dany' }).end(() => {
          request(app)
            .get('/users/dany')
            .expect('Content-type', /json/)
            .expect(OK)
            .expect((res) => {
              assert.exists(res.body._id, '_id should be defined');
              assert.include(res.body, { username: 'dany' });
              assert.isArray(res.body.games);
            })
            .end(done);
        });
      });
    });

    it('Return 404 Not Found when user not exists', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app).post('/users').send({ username: 'dany' }).end(() => {
          request(app)
            .get('/users/pepe')
            .expect('Content-type', /json/)
            .expect(NOT_FOUND)
            .end(done);
        });
      });
    });
  });
});
