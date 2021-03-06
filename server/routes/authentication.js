'use strict';

const { Router } = require('express');

const fileUpload = require('./../middleware/file-upload');
const bcryptjs = require('bcryptjs');
const User = require('./../models/user');
const Individual = require('./../models/individual');
const Organisation = require('./../models/organisation');

const router = new Router();

router.post(
  '/sign-up',
  fileUpload.single('profilePicture'),
  (req, res, next) => {
    console.log(req.body);

    let profilePicture = req.file.path;
    const { username, email, password, role } = req.body;
    bcryptjs
      .hash(password, 10)
      .then((hash) => {
        return User.create({
          username,
          email,
          passwordHashAndSalt: hash,
          role,
          profilePicture
        });
      })
      .then((user) => {
        req.session.userId = user._id;
        res.json({ user });
      })
      .catch((error) => {
        next(error);
      });
  }
);

router.post('/sign-in', (req, res, next) => {
  let user;
  const { email, password } = req.body;
  User.findOne({ email })
    .then((document) => {
      if (!document) {
        return Promise.reject(new Error("There's no user with that email."));
      } else {
        user = document;
        return bcryptjs.compare(password, user.passwordHashAndSalt);
      }
    })
    .then((result) => {
      if (result) {
        req.session.userId = user._id;
        res.json({ user });
      } else {
        return Promise.reject(new Error('Wrong password.'));
      }
    })
    .catch((error) => {
      next(error);
    });
});

router.post('/sign-out', (req, res, next) => {
  req.session.destroy();
  res.json({});
});

router.get('/verify', (req, res) => {
  const user = req.user || null;
  res.json({ user: user });
});

module.exports = router;
