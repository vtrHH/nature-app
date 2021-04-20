'use strict';

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String
      // required: true
    },

    text: {
      type: String
      // required: true
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

    pictures: {
      type: [String]
      // required: true
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },

    date: {
      type: Date
      //  required: true
    }
  },
  {
    timestamps: {
      createdAt: 'addedDate',
      updatedAt: 'editDate'
    }
  }
);

module.exports = mongoose.model('Post', postSchema);
