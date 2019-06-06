require('dotenv').config({ path: `${__dirname}/../.env.test` });
const request = require('supertest');
const chai = require('chai');
const app = require('../src/app/express');
const mongoose = require('../src/app/mongoose');

module.exports = { app, chai, request, mongoose };
