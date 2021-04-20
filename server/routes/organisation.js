'use strict';

const express = require('express');

//const Bird = require('./../models/bird');
//const User = require('./../models/user');
//const Observation = require('./../models/observation');
const Organisation = require('./../models/organisation');

const routeGuard = require('./../middleware/route-guard');
//const fileUpload = require('./../middleware/file-upload');
//const sendEmail = require('./../utilities/send-email');

const router = new express.Router();

router.get('/:id', async (req, res, next) => {
  try {
    const organisation = await Organisation.findById(req.params.id);
    res.json({ organisation });
  } catch (error) {
    next(error);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const organisations = await Organisation.find().limit(5);
    res.json({ organisations });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id/edit', routeGuard, async (req, res, next) => {
  const { organisationName, address, phoneNumber } = req.body;
  try {
    //add picture
    const organisation = await Organisation.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          organisationName,
          address,
          phoneNumber
        }
      },
      { new: true }
    );
    res.json({ organisation });
  } catch (error) {
    next(error);
  }
});

router.patch('/birds', routeGuard, async (req, res, next) => {
  const { birds } = req.body;
  try {
    const organisation = await Organisation.findByIdAndUpdate(
      req.user._id,
      {
        $set: {
          birds
        }
      },
      { new: true }
    );
    res.json({ organisation });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
