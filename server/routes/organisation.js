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

router.get('/random', async (req, res, next) => {
  try {
    const totalOrganisations = await Organisation.count();
    const randomIndex = Math.floor(Math.random() * totalOrganisations);
    const organisations = await Organisation.find().limit(2).skip(randomIndex);
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
    description
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
          description
        }
      },
      { new: true }
    );
    res.json({ organisation });
  } catch (error) {
    next(error);
  }
});

router.patch('/:id/birds', routeGuard, async (req, res, next) => {
  const { birds } = req.body;
  try {
    const organisation = await Organisation.findByIdAndUpdate(
      req.params.id,
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

router.patch(
  '/:id/pictures',
  routeGuard,
  fileUpload.array('pictures', 10),
  async (req, res, next) => {
    const pictures = req.files.map((file) => file.path);
    const oldPictures = req.body.oldPictures.split(',');
    const finalPictures = oldPictures;
    pictures.map((picture) => {
      if (!oldPictures.includes(picture)) {
        finalPictures.unshift(picture);
      }
    });
    try {
      const organisation = await Organisation.findByIdAndUpdate(
        req.user._id,
        {
          $set: {
            pictures: finalPictures
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
