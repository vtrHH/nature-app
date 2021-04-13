'use strict';

const express = require('express');

const Bird = require('./../models/bird');

const routeGuard = require('./../middleware/route-guard');
//const fileUpload = require('./../middleware/file-upload');
//const sendEmail = require('./../utilities/send-email');

const router = new express.Router();

router.get('/:api_id_value', async (req, res, next) => {
  try {
    const bird = await Bird.find({ api_id: api_id_value });
    res.json({ bird });
  } catch (error) {
    next(error);
  }
});

router.get('/list', async (req, res, next) => {
  try {
    const birds = await Bird.find().limit(5);
    res.json({ birds });
  } catch (error) {
    next(error);
  }
});

router.post('/', routeGuard, async (req, res, next) => {
  try {
    const {
      api_id,
      commonName,
      scientificName,
      description,
      picture
    } = req.body;
    const bird = await Pet.create({
      api_id,
      commonName,
      scientificName,
      description,
      picture
    });
    res.json({ bird });
  } catch (error) {
    next(error);
  }
});

//include patch only if needed
