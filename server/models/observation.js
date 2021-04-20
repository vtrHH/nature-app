'use strict';

const mongoose = require('mongoose');

const observationSchema = new mongoose.Schema(
  {
    date: {
      type: Date
      //  required: true
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
      }
      // required: true
    },
    APIid: {
      type: String
      //required: true
    },
<<<<<<< HEAD
    preferred_common_name: {
        type: String,
        //required: true
    },
    picture: {
        type: String
            // required: true
=======
    pictures: {
      type: [String]
      // required: true
>>>>>>> 2cf89e2b279f0c6f7fed1e97d788e4a668102bd9
    },
    verified: {
      type: Boolean
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  },
  {
    timestamps: {
      createdAt: 'addedDate',
      updatedAt: 'editDate'
    }
  }
);

module.exports = mongoose.model('Observation', observationSchema);
