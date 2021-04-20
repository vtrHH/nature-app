'use strict';

const express = require('express');

//const Bird = require('./../models/bird');
//const User = require('./../models/user');
//const Observation = require('./../models/observation');
const Individual = require('./../models/individual');
const User = require('./../models/organisation');

const routeGuard = require('./../middleware/route-guard');
//const fileUpload = require('./../middleware/file-upload');
//const sendEmail = require('./../utilities/send-email');

const router = new express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const individual = await Individual.findById(req.params.id);
    res.json({ individual });
  } catch (error) {
    next(error);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const individuals = await Individual.find().limit(5);
    res.json({ individuals });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id/edit', routeGuard, async (req, res, next) => {
  const { firstName, lastName } = req.body;
  try {
    //add picture
    const individual = await Individual.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          firstName,
          lastName
        }
      },
      { new: true }
    );
    res.json({ individual });
  } catch (error) {
    next(error);
  }
});

router.patch('/preferences', routeGuard, async (req, res, next) => {
  const { preferences } = req.body;
  try {
    const individual = await Individual.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          preferences
        }
      },
      { new: true }
    );
    res.json({ individual });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
