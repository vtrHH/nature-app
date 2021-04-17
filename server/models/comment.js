'use strict';

const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String
      // required: true
    },

    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },

    relatedpost: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Post'
    }
  },
  {
    timestamps: {
      createdAt: 'addedDate',
      updatedAt: 'editDate'
    }
  }
);

module.exports = mongoose.model('Comment', commentSchema);
