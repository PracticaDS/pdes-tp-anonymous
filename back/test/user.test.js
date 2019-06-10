const { OK, NO_CONTENT } = require('http-status-codes');
const { api, chai, mongoose } = require('./test-case');

const { assert } = chai;

describe('User API testing', () => {
  beforeEach(done => mongoose.connection.createCollection('users', done));
  afterEach(done => mongoose.connection.dropCollection('users', done));

  describe('GET /', () => {
    it('Returns a list with users', (done) => {
      api.createUser('jon').end(() => {
        api.createUser('dany').end(() => {
          api.get('/')
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

    it('Returns an empty list when not exists users', (done) => {
      api.get('/')
        .expect(OK)
        .expect((res) => {
          assert.isArray(res.body);
          assert.isEmpty(res.body);
        })
        .end(done);
    });
  });

  describe('GET /:username', () => {
    it('Return user :username', (done) => {
      api.createUser('jon').end(() => {
        api.createUser('dany').end(() => {
          api.get('/')
            .expect(res => assert.lengthOf(res.body, 2))
            .end(() => {
              api.get('/jon')
                .expect(OK)
                .expect((res) => {
                  assert.exists(res.body._id, '_id must be defined');
                  assert.include(res.body, { username: 'jon' });
                  assert.isArray(res.body.games);
                })
                .end(done);
            });
        });
      });
    });

    it('Create :username & return it when not exists', (done) => {
      api.get('/')
        .expect(res => assert.isEmpty(res.body))
        .end(() => {
          api.get('/jon')
            .expect(OK)
            .expect((res) => {
              assert.exists(res.body._id, '_id must be defined');
              assert.include(res.body, { username: 'jon' });
              assert.isArray(res.body.games);
            })
            .end(done);
        });
    });

    it('New user is created without games', (done) => {
      api.get('/jon')
        .expect(OK)
        .expect((res) => {
          assert.include(res.body, { username: 'jon' });
          assert.isEmpty(res.body.games);
        })
        .end(done);
    });
  });

  describe('DELETE /:username', () => {
    it('Delete :username', (done) => {
      api.createUser('jon').end(() => {
        api.createUser('dany').end(() => {
          api.get('/')
            .expect(OK)
            .expect((res) => {
              assert.lengthOf(res.body, 2);
              assert.includeMembers(res.body.map(e => e.username), ['jon', 'dany']);
            })
            .end(() => {
              api
                .delete('/jon')
                .expect(NO_CONTENT)
                .end(() => {
                  api.get('/')
                    .expect(OK)
                    .expect((res) => {
                      assert.lengthOf(res.body, 1);
                      assert.include(res.body[0], { username: 'dany' });
                    })
                    .end(done);
                });
            });
        });
      });
    });
  });
});
