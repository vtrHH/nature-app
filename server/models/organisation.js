'use strict';

const mongoose = require('mongoose');
const User = require('./user');

const organisationSchema = new mongoose.Schema({
  organisationName: {
    type: String,
    trim: true
  },
  street: {
    type: String
  },

  houseNumber: {
    type: String
  },

  city: {
    type: String
  },

  postcode: {
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
  }, 
     
  description: {
    type: String
  },
});

const Organisation = User.discriminator('organisation', organisationSchema);

module.exports = Organisation;
