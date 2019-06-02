require('dotenv').config({ path: `${__dirname}/../.env.test` });
const request = require('supertest');
const chai = require('chai');
const { OK, CREATED, NOT_FOUND } = require('http-status-codes');
const app = require('../src/app/express');
const mongoose = require('../src/app/mongoose');

const { assert } = chai;

beforeEach(done => mongoose.connection.createCollection('users', done));
afterEach(done => mongoose.connection.dropCollection('users', done));
after(done => mongoose.connection.close(done));

describe('User API testing', () => {
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

    it('Return an error when try to create an existing user');
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
    it('Return the user named :username', (done) => {
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

  it('Get all the users factories', (done) => {
    server
      .get(`/${user.username}/fabricas`)
      .expect(200)
      .then((res) => {
        const factories = res.body;
        expect(factories).to.be.an('array');
        done();
      })
      .catch(done);
  });

  it('Add a factory to the user', (done) => {
    server
      .post(`/${user.username}/fabricas`)
      .send(factory)
      .expect('Content-type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.username).to.eql(user.username);
        expect(res.body.factories.length).to.eql(1);
        expect(res.body.factories[0].name).to.eql(factory.name);
        done();
      })
      .catch(done);
  });

  describe('Add factory for the tests', () => {
    before(() => {
      server
        .post(`/${user.username}/fabricas`)
        .send(factory);
    });

    it('Get a user factory after add it', (done) => {
      server
        .get(`/${user.username}/fabricas/${factory.name}`)
        .expect('Content-type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.name).to.eql(factory.name);
          expect(res.body.date).to.eql(factory.date.toJSON());
          expect(res.body.state).to.eql(factory.state);
          done();
        })
        .catch(done);
    });

    it('Delete a user factory', (done) => {
      server
        .delete(`/${user.username}/fabricas/${factory.name}`)
        .expect('Content-type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.factories.length).to.eql(0);
          done();
        })
        .catch(done);
    });
  });
  
  it('Update a users factory', (done) => {
      const updatedfactory = {
        name: 'Primera',
        date: newDate,
        state: {
          currentAction: null,
          machines: [
            {
              position: { x: 0, y: 0 },
              type: 'EMPTY'
            }
          ],
          floor: [],
          width: 1,
          height: 1
        }
      };

      server
        .put(`/${user.username}/fabricas/${factory.name}`)
        .send(updatedfactory)
        .expect('Content-type', /json/)
        .expect(200)
        .then((res) => {
          expect(res.body.username).to.eql(user.username);
          expect(res.body.factories[0].name).to.eql(updatedfactory.name);
          expect(res.body.factories[0].date).to.eql(updatedfactory.date.toJSON());
          expect(res.body.factories[0].state).to.eql(updatedfactory.state);
          done();
        })
        .catch(done);
    });

  after((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(done);
    });
  });
});
