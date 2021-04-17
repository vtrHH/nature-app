'use strict';

const { Router } = require('express');
// const express = require('express');

const Post = require('./../models/post');
const Comment = require('./../models/comment');

const routeGuard = require('./../middleware/route-guard');
// const fileUpload = require('./../middleware/file-upload');
//const sendEmail = require('./../utilities/send-email');

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    const posts = await Post.find();
    res.json({ posts });
  } catch (error) {
    next(error);
  }
});

router.post('/', routeGuard, async (req, res, next) => {
  try {
    //fileUpload.single('picture'),
    const { title, text, location, date } = req.body;
    const creator = req.user._id;
    //add picture
    const post = await Post.create({
      title,
      text,
      location,
      creator,
      date
      // picture
    });
    res.json({ post });
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    const comments = await Comment.find({ post: req.params.id });
    res.json({ post, comments });
  } catch (error) {
    next(error);
  }
});

router.post('/:id', routeGuard, async (req, res, next) => {
  try {
    const text = req.body.text;
    const relatedpost = req.params._id;
    const creator = req.user._id;
    const post = await Post.create({
      text,
      creator,
      relatedpost
      // picture
    });
    res.json({ post });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
