'use strict';

const mongoose = require('mongoose');
const User = require('./user');

const individualSchema = new mongoose.Schema({
  firstName: {
    type: String,
    trim: true
  },
  lastName: {
    type: String,
    trim: true
  },

  aboutMe: {
    type: String
    // enum: ... ?
  }
});

const Individual = User.discriminator('individual', individualSchema);

module.exports = Individual;
