'use strict';

const mongoose = require('mongoose');
const User = require('./user');

const individualSchema = new mongoose.Schema(
  {
    observation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Observation'
    }
  },
  { discriminatorKey: 'role' }
);

const Individual = User.discriminator('individual', individualSchema);

module.exports = Individual;
