require('dotenv').config({ path: `${__dirname}/../.env.test` });
const request = require('supertest');
const chai = require('chai');
const { OK, CREATED } = require('http-status-codes');
const app = require('../src/app/express');
const mongoose = require('../src/app/mongoose');

const { expect } = chai;

beforeEach(done => mongoose.connection.createCollection('users', done));
afterEach(done => mongoose.connection.dropCollection('users', done));
after(done => mongoose.connection.close(done));

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
      .expect(CREATED)
      .expect(res => expect(res.body.username).to.equals(user.username))
      .end(done);
  });

  // it('Get user', (done) => {
  //   request(app)
  //     .get(`/${user.username}`)
  //     .expect('Content-type', /json/)
  //     .expect(OK)
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
      .expect(OK)
      .expect(res => expect(res.body.length).to.equal(0))
      .end(done);
  });
});
