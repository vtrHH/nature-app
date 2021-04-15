'use strict';

const mongoose = require('mongoose');
const User = require('./user');

const organisationSchema = new mongoose.Schema({
  organisationName: {
    type: String,
    trim: true
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  birds: {
    type: [String]
  },
  pictures: {
    type: [String]
  }
});

const Organisation = User.discriminator('organisation', organisationSchema);

module.exports = Organisation;
