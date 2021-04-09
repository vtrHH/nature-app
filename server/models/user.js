'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true
    },
    username: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    passwordHashAndSalt: {
      type: String
    },
    profilePicture: {
      type: String
    }
  },
  { discriminatorKey: 'role' }
);

module.exports = mongoose.model('User', userSchema);
