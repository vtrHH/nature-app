'use strict';

const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema(
  {
    observation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Observation'
    }
  },
  { discriminatorKey: 'role' }
);

module.exports = mongoose.model('Bird', birdSchema);
