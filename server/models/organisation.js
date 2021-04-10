'use strict';

const mongoose = require('mongoose');
const User = require('./user');

const organisationSchema = new mongoose.Schema({
  organisationName: {
    type: String,
    trim: true,
    required: true
  },
  address: {
    type: String
  },
  phoneNumber: {
    type: String
  },
  birds: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Bird'
  },
  pictures: {
    type: [String]
  }
});

const Organisation = User.discriminator('organisation', organisationSchema);

module.exports = Organisation;
