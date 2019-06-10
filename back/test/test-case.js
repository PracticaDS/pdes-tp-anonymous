require('dotenv').config({ path: `${__dirname}/../.env.test` });
const request = require('supertest');
const chai = require('chai');
const app = require('../src/app/express');
const mongoose = require('../src/app/mongoose');

/**
 * Helper functions
 */
const api = {
  get: path => request(app).get(path).expect('Content-Type', /json/),
  put: (path, data = {}) => request(app).put(path).send(data).expect('Content-Type', /json/),
  post: (path, data = {}) => request(app).post(path).send(data).expect('Content-Type', /json/),
  delete: path => request(app).delete(path),

  createUser: username => api.get(`/${username}`),
  createGame: (username, game) => api.post(`/${username}/games`, game),
  updateGame: (username, gameId, game) => api.put(`/${username}/games/${gameId}`, game)
};

module.exports = { api, app, chai, request, mongoose };
