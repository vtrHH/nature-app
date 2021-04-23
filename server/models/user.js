'use strict';

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true
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
