require('../src/app/index');
const supertest = require('supertest');
const mongoose = require('mongoose');
const chai = require('chai');

const { expect } = chai;
const server = supertest.agent('http://localhost:8080');

after((done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.close();
  done();
});

describe('User API test', () => {
  const user = {
    username: 'pepe',
    games: []
  };

  it('Create new user', (done) => {
    server
      .post(`/${user.username}`)
      .send(user)
      .expect('Content-type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.username === user.username);
        done();
      })
      .catch(done);
  });

  it('Get user', (done) => {
    server
      .get(`/${user.username}`)
      .expect('Content-type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.username).to.equal(user.username);
        expect(res.body.games).to.eql(user.games);
        done();
      })
      .catch(done);
  });

  it('Get all users', (done) => {
    server
      .get('/users')
      .expect(200)
      .then((res) => {
        expect(res.body).to.be.an('array');
        done();
      })
      .catch(done);
  });
});
