const { CREATED, NO_CONTENT, NOT_FOUND, OK } = require('http-status-codes');
const { app, chai, mongoose, request } = require('./test-case');

const { assert } = chai;

const gameBuilder = (game) => {
  const defaultGame = {
    name: 'Empty Game',
    date: new Date(),
    state: {
      currentAction: null,
      machines: [],
      floor: [],
      width: 1,
      height: 1
    }
  };
  return { ...defaultGame, ...game };
};

describe('User Games API testing', () => {
  beforeEach(done => mongoose.connection.createCollection('users', done));
  afterEach(done => mongoose.connection.dropCollection('users', done));

  describe('POST /users/:username/games', () => {
    it('Creates new game for User and return the User with the new game', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app)
          .post('/users/jon/games')
          .send(gameBuilder({ name: 'A Game has No Name' }))
          .expect('Content-Type', /json/)
          .expect(CREATED)
          .expect((res) => {
            assert.include(res.body, { username: 'jon' });
            assert.lengthOf(res.body.games, 1);
            const game = res.body.games[0];
            assert.exists(game._id, '_id must be defined');
            assert.equal(game.name, 'A Game has No Name');
            assert.equal(game.state.currentAction, null);
            assert.isEmpty(game.state.machines);
            assert.isEmpty(game.state.floor);
            assert.equal(game.state.width, 1);
            assert.equal(game.state.height, 1);
          })
          .end(done);
      });
    });
  });

  describe('GET /users/:username', () => {
    it('Return user data with an empty list of games for new users', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app)
          .get('/users/jon')
          .expect('Content-type', /json/)
          .expect(OK)
          .expect((res) => {
            assert.include(res.body, { username: 'jon' });
            assert.isEmpty(res.body.games);
          })
          .end(done);
      });
    });

    it('When exists games for users, returns it\'s data and it list of games', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app).post('/users/jon/games').send(gameBuilder({ name: 'First Game' })).end(() => {
          request(app).post('/users/jon/games').send(gameBuilder({ name: 'Second Game' })).end(() => {
            request(app)
              .get('/users/jon')
              .expect('Content-type', /json/)
              .expect(OK)
              .expect((res) => {
                assert.lengthOf(res.body.games, 2);
                assert.includeMembers(res.body.games.map(e => e.name), ['First Game', 'Second Game']);
              })
              .end(done);
          });
        });
      });
    });
  });

  describe('GET /users/:username/games/:gameId', () => {
    it('Return the game with :gameId for the user :username', (done) => {
      let gameId;
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app).post('/users/jon/games')
          .send(gameBuilder({ name: 'First Game' }))
          .expect((res) => {
            gameId = res.body.games[0]._id;
          })
          .end(() => {
            request(app).post('/users/jon/games').send(gameBuilder({ name: 'Second Game' })).end(() => {
              request(app)
                .get(`/users/jon/games/${gameId}`)
                .expect('Content-type', /json/)
                .expect(OK)
                .expect((res) => {
                  assert.equal(res.body._id, gameId);
                  assert.equal(res.body.name, 'First Game');
                })
                .end(done);
            });
          });
      });
    });
    it('Return 404 Not Found when :gameId not exists', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app).post('/users/jon/games').send(gameBuilder({ name: 'First Game' })).end(() => {
          request(app)
            .get('/users/jon/games/1234')
            .expect('Content-type', /json/)
            .expect(NOT_FOUND)
            .end(done);
        });
      });
    });
  });

  describe('PUT /users/:username/games/:gameId', () => {
    it('Update game :gameId from :username and return it updated', (done) => {
      let gameId;
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app)
          .post('/users/jon/games')
          .send(gameBuilder({ name: 'First Game' }))
          .expect((res) => {
            gameId = res.body.games[0]._id;
          })
          .end(() => {
            request(app).post('/users/jon/games').send(gameBuilder({ name: 'Second Game' })).end(() => {
              request(app)
                .put(`/users/jon/games/${gameId}`)
                .send(gameBuilder({ name: 'Updated Game' }))
                .expect('Content-type', /json/)
                .expect(OK)
                .expect((res) => {
                  assert.equal(res.body._id, gameId);
                  assert.equal(res.body.name, 'Updated Game');
                })
                .end(done);
            });
          });
      });
    });

    it('When a game is update, the amount of games is the same', (done) => {
      let gameId;
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app)
          .post('/users/jon/games')
          .send(gameBuilder({ name: 'First Game' }))
          .expect((res) => {
            gameId = res.body.games[0]._id;
          })
          .end(() => {
            request(app).post('/users/jon/games').send(gameBuilder({ name: 'Second Game' })).end(() => {
              request(app)
                .put(`/users/jon/games/${gameId}`)
                .send(gameBuilder({ name: 'Updated++ Game' }))
                .end(() => {
                  request(app)
                    .get('/users/jon')
                    .expect((res) => {
                      assert.lengthOf(res.body.games, 2);
                      assert.includeMembers(res.body.games.map(e => e.name), ['Updated++ Game', 'Second Game']);
                    })
                    .end(done);
                });
            });
          });
      });
    });

    it('Return 404 Not Found when :gameId not exists for :username', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app)
          .post('/users/jon/games')
          .send(gameBuilder({ name: 'First Game' }))
          .end(() => {
            request(app)
              .put('/users/jon/games/12345')
              .expect('Content-type', /json/)
              .expect(NOT_FOUND)
              .end(done);
          });
      });
    });
  });

  describe('DELETE /users/:username/games/:gameId', () => {
    it('Delete game :gameId from :username', (done) => {
      let gameId;
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app)
          .post('/users/jon/games')
          .send(gameBuilder({ name: 'First Game' }))
          .expect((res) => {
            gameId = res.body.games[0]._id;
          })
          .end(() => {
            request(app)
              .delete(`/users/jon/games/${gameId}`)
              .expect(NO_CONTENT)
              .end(done);
          });
      });
    });

    it('Return 404 Not Found when :gameId not exists for :username', (done) => {
      request(app).post('/users').send({ username: 'jon' }).end(() => {
        request(app).post('/users/jon/games').send(gameBuilder({ name: 'First Game' })).end(() => {
          request(app)
            .delete('/users/jon/games/123456')
            .expect(NOT_FOUND)
            .end(done);
        });
      });
    });
  });
});
