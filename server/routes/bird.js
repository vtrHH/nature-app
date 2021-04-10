'use strict';

const express = require('express');

const Bird = require('./../models/bird');
const User = require('./../models/user');
const Observation = require('./../models/observation');

const routeGuard = require('./../middleware/route-guard');
const fileUpload = require('./../middleware/file-upload');
const sendEmail = require('./../utilities/send-email');

const router = new express.Router();

router.get(`/:api_id_value`, async (req, res, next) => {
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

router.post('/', async (req, res, next) => {
  try {
    const { api_id, commonName, scientificName, description } = req.body;
    const bird = await Pet.create({
        api_id,
        commonName,
        scientificName,
        description
        //picture
    });
    res.json({ bird });
  } catch (error) {
    next(error);
  }
});
