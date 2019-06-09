const { CREATED, NO_CONTENT, NOT_FOUND, OK } = require('http-status-codes');
const { api, app, chai, mongoose, request } = require('./test-case');

const { assert } = chai;

const gameBuilder = game => ({
  name: 'Empty Game',
  date: new Date(),
  state: {
    currentAction: null,
    machines: [],
    floor: [],
    width: 1,
    height: 1
  },
  ...game
});

describe('User Games API testing', () => {
  beforeEach(done => mongoose.connection.createCollection('users', done));
  afterEach(done => mongoose.connection.dropCollection('users', done));

  describe('POST /:username/games', () => {
    it('Creates new game for :username and return user with the new game', (done) => {
      api.createUser('jon').end(() => {
        api.post('/jon/games', gameBuilder({ name: 'A Game has No Name' }))
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

    it('Return 404 Not Found when :username not exists', (done) => {
      api.createUser('jon').end(() => {
        api
          .post('/dany/games', gameBuilder({ name: 'First Game' }))
          .expect(NOT_FOUND)
          .end(done);
      });
    });
  });

  describe('GET /:username', () => {
    it('Returns user with a list of games', (done) => {
      api.createUser('jon').end(() => {
        api.createGame('jon', gameBuilder({ name: 'First Game' })).end(() => {
          api.createGame('jon', gameBuilder({ name: 'Second Game' })).end(() => {
            api.get('/jon')
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

  describe('GET /:username/games/:gameId', () => {
    it('Return the game with :gameId for the user :username', (done) => {
      let gameId;
      api.createUser('jon').end(() => {
        api.createGame('jon', gameBuilder({ name: 'First Game' }))
          .expect((res) => {
            gameId = res.body.games[0]._id;
          })
          .end(() => {
            api.createGame('jon', gameBuilder({ name: 'Second Game' })).end(() => {
              api.get(`/jon/games/${gameId}`)
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
      api.createUser('jon').end(() => {
        api.createGame('jon', gameBuilder({ name: 'First Game' })).end(() => {
          api.get('/jon/games/1234')
            .expect(NOT_FOUND)
            .end(done);
        });
      });
    });
  });

  describe('PUT /:username/games/:gameId', () => {
    it('Update game :gameId from :username and return it updated', (done) => {
      let gameId;
      api.createUser('jon').end(() => {
        api
          .createGame('jon', gameBuilder({ name: 'First Game' }))
          .expect((res) => {
            gameId = res.body.games[0]._id;
          })
          .end(() => {
            api.createGame('jon', gameBuilder({ name: 'Second Game' })).end(() => {
              api
                .put(`/jon/games/${gameId}`, gameBuilder({ name: 'Updated Game' }))
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
      api.createUser('jon').end(() => {
        api
          .createGame('jon', gameBuilder({ name: 'First Game' }))
          .expect((res) => {
            gameId = res.body.games[0]._id;
          })
          .end(() => {
            api.createGame('jon', gameBuilder({ name: 'Second Game' })).end(() => {
              api.updateGame('jon', gameId, gameBuilder({ name: 'Updated++ Game' })).end(() => {
                api
                  .get('/jon')
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
      api.createUser('jon').end(() => {
        api.createGame('jon', gameBuilder({ name: 'First Game' })).end(() => {
          api
            .put('/jon/games/12345')
            .expect(NOT_FOUND)
            .end(done);
        });
      });
    });
  });

  describe('DELETE /users/:username/games/:gameId', () => {
    it('Delete game :gameId from :username', (done) => {
      let gameId;
      api.createUser('jon').end(() => {
        api
          .createGame('jon', gameBuilder({ name: 'First Game' }))
          .expect((res) => {
            gameId = res.body.games[0]._id;
          })
          .end(() => {
            api
              .delete(`/jon/games/${gameId}`)
              .expect(NO_CONTENT)
              .end(done);
          });
      });
    });

    it('Return 404 Not Found when :gameId not exists for :username', (done) => {
      api.createUser('jon').end(() => {
        api.createGame('jon', gameBuilder({ name: 'First Game' })).end(() => {
          api
            .delete('/jon/games/123456')
            .expect(NOT_FOUND)
            .end(done);
        });
      });
    });
  });
});
