'use strict';

const mongoose = require('mongoose');

const observationSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  location: {
    coordinates: [
      {
        type: Number,
        min: -180,
        max: 180
      }
    ],
    type: {
      type: String,
      default: 'Point',
      required: true
    },
    required: true
  },
  bird: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  },
  verified: {
    type: Boolean
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
});

module.exports = mongoose.model('Observation', observationSchema);
