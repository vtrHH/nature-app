'use strict';

const mongoose = require('mongoose');
const User = require('./user');

const organisationSchema = new mongoose.Schema(
  {
    address: {
      type: String
    },
    phoneNumber: {
      type: String
    },
    bird: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Bird'
    }
  },
  { discriminatorKey: 'role' }
);

const Organisation = User.discriminator('organisation', organisationSchema);

module.exports = Organisation;
