'use strict';

const mongoose = require('mongoose');

const birdSchema = new mongoose.Schema({
  api_id: {
    type: String,
    required: true
  },
  commonName: {
    type: String,
    trim: true
    // required: true
  },
  scientificName: {
    type: String,
    trim: true
    // required: true
  },
  description: {
    type: String
    // more details to be decided
  },
  observations: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Observation'
  },
  picture: {
    type: String
    // required: true --> not sure if we should require it
  }
});

module.exports = mongoose.model('Bird', birdSchema);
