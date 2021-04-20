'use strict';

const { Router } = require('express');
// const express = require('express');

const Post = require('./../models/post');
const Comment = require('./../models/comment');

const routeGuard = require('./../middleware/route-guard');
const fileUpload = require('./../middleware/file-upload');
//const sendEmail = require('./../utilities/send-email');

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ creationDate: -1 }).limit(20);

    res.json({ posts });
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  routeGuard,
  fileUpload.array('pictures', 10),
  async (req, res, next) => {
    const pictures = req.files.map((file) => file.path);
    const { lat, lng, date, title, text } = req.body;
    const location = {
      coordinates: [lat, lng]
    };
    const creator = req.user._id;

    try {
      const post = await Post.create({
        title,
        text,
        location,
        creator,
        date,
        pictures
      });
      res.json({ post });
    } catch (error) {
      next(error);
    }
  }
);

router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    res.json({ post });
  } catch (error) {
    next(error);
  }
});

router.post('/:id', routeGuard, async (req, res, next) => {
  try {
    const text = req.body.text;
    const relatedpost = req.params.id;
    const creator = req.user._id;
    const comment = await Comment.create({
      text,
      creator,
      relatedpost
      // picture
    });
    res.json({ comment });
  } catch (error) {
    next(error);
  }
});

router.get('/:id/comments', async (req, res, next) => {
  try {
    const comments = await Comment.find({ relatedpost: req.params.id });
    res.json({ comments });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
