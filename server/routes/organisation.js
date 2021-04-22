'use strict';

const express = require('express');

//const Bird = require('./../models/bird');
//const User = require('./../models/user');
//const Observation = require('./../models/observation');
const Organisation = require('./../models/organisation');

const routeGuard = require('./../middleware/route-guard');
const fileUpload = require('./../middleware/file-upload');
//const sendEmail = require('./../utilities/send-email');

const router = new express.Router();

router.get('/list', async (req, res, next) => {
  try {
    const organisations = await Organisation.find();
    res.json({ organisations });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const organisation = await Organisation.findById(req.params.id);
    res.json({ organisation });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id', routeGuard, async (req, res, next) => {
  const {
    organisationName,
    phoneNumber,
    street,
    houseNumber,
    city,
    postcode,
    birds
  } = req.body;
  try {
    const organisation = await Organisation.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          organisationName,
          phoneNumber,
          street,
          houseNumber,
          city,
          postcode,
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

router.patch(
  '/:id/pictures',
  routeGuard,
  fileUpload.array('pictures', 10),
  async (req, res, next) => {
    const pictures = req.files.map((file) => file.path);
    try {
      const organisation = await Organisation.findByIdAndUpdate(
        req.user._id,
        {
          $set: {
            pictures
          }
        },
        { new: true }
      );
      res.json({ organisation });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
