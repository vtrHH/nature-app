'use strict';

const { Router } = require('express');
// const express = require('express');

//const Bird = require('./../models/bird');
//const User = require('./../models/user');
const Observation = require('./../models/observation');

const routeGuard = require('./../middleware/route-guard');
// const fileUpload = require('./../middleware/file-upload');
//const sendEmail = require('./../utilities/send-email');

const router = new Router();

router.get('/list', async (req, res, next) => {
  try {
    const observations = await Observation.find();
    res.json({ observations });
  } catch (error) {
    next(error);
  }
});

router.post('/', routeGuard, async (req, res, next) => {
  try {
    //fileUpload.single('picture'),
    const { location, bird, date } = req.body;
    const creator = req.user._id;
    //add picture
    const observation = await Observation.create({
      location,
      bird,
      date,
      creator
      // picture
    });
    res.json({ observation });
  } catch (error) {
    next(error);
  }
});

router.patch(
  '/:id/edit',
  routeGuard,
  //fileUpload.single('picture'),
  async (req, res, next) => {
    const { location, bird, picture } = req.body;
    try {
      //add picture
      const observation = await Observation.findByIdAndUpdate(
        req.params.id,
        {
          $set: {
            location,
            bird,
            picture
          }
        },
        { new: true }
      );
      res.json({ observation });
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/bird/:bird_id', async (req, res, next) => {
  try {
    const observations = await Post.findById({ bird: req.params.bird_id });
    res.json({ observations });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const observation = await Observation.findById(req.params.id);
    res.json({ observation });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
