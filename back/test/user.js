const request = require('supertest');
const chai = require('chai');
const mongoose = require('mongoose');
const { app } = require('../src/index');

const { expect } = chai;

after((done) => {
  mongoose.models = {};
  mongoose.modelSchemas = {};
  mongoose.connection.db.dropDatabase(done);
  mongoose.connection.close();
  done();
});

describe('User API test', () => {
  const user = {
    username: 'pepe',
    games: []
  };

  it('Create new user', (done) => {
    request(app)
      .post('/users')
      .send(user)
      .expect('Content-type', /json/)
      .expect(200)
      .expect(res => expect(res.body.username).to.equals(user.username))
      .end(done);
  });

  // it('Get user', (done) => {
  //   request(app)
  //     .get(`/${user.username}`)
  //     .expect('Content-type', /json/)
  //     .expect(200)
  //     .then((res) => {
  //       expect(res.body.username).to.equal(user.username);
  //       expect(res.body.games).to.eql(user.games);
  //       done();
  //     })
  //     .catch(done);
  // });

  it('Get all users', (done) => {
    request(app)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect(res => expect(res.body.length).to.equal(1))
      .end(done);
  });
});
