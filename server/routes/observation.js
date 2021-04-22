'use strict';

const { Router } = require('express');
// const express = require('express');

//const Bird = require('./../models/bird');
//const User = require('./../models/user');
const Observation = require('./../models/observation');
//const printSomething = require('./../middleware/print');
const routeGuard = require('./../middleware/route-guard');
const fileUpload = require('./../middleware/file-upload');
//const sendEmail = require('./../utilities/send-email');

const router = new Router();

router.get('/list', async(req, res, next) => {
    try {
        const observations = await Observation.find()
            .sort({ creationDate: -1 })
            .populate('creator');

        res.json({ observations });
    } catch (error) {
        next(error);
    }
});

router.post(
    '/',
    routeGuard,
    fileUpload.array('pictures', 10),
    async(req, res, next) => {
        const pictures = req.files.map((file) => file.path);
        console.log(req.files, req.body);
        const {
            lat,
            lng,
            APIid,
            date,
            description,
            preferred_common_name
        } = req.body;
        const location = {
            coordinates: [lat, lng]
        };
        const creator = req.user._id;
        //add picture
        try {
            const observation = await Observation.create({
                location,
                APIid,
                preferred_common_name,
                date,
                creator,
                description,
                pictures
            });
            res.json({ observation });
        } catch (error) {
            next(error);
        }
    }
);

// router.post('/', routeGuard, async(req, res, next) => {
//     try {
//         //fileUpload.single('picture'),
//         const { location, APIid, date, preferred_common_name } = req.body;
//         const creator = req.user._id;
//         //add picture
//         const observation = await Observation.create({
//             location,
//             APIid,
//             preferred_common_name,
//             date,
//             creator
//             // picture
//         });
//         res.json({ observation });
//     } catch (error) {
//         next(error);
//     }
// });

router.patch(
    '/:id/edit',
    routeGuard,
    //fileUpload.single('picture'),
    async(req, res, next) => {
        const { location, bird, picture } = req.body;
        try {
            //add picture
            const observation = await Observation.findByIdAndUpdate(
                req.params.id, {
                    $set: {
                        location,
                        bird,
                        picture
                    }
                }, { new: true }
            );
            res.json({ observation });
        } catch (error) {
            next(error);
        }
    }
);

router.get('/bird/:api_id', async(req, res, next) => {
    try {
        const observations = await Observation.find({
            APIid: req.params.api_id
        });
        res.json({ observations });
    } catch (error) {
        next(error);
    }
});

router.get('/user/:userId', async(req, res, next) => {
    try {
        const observations = await Observation.find({
                creator: req.params.userId
            }).sort({ creationDate: -1 })
            .populate('creator');
        res.json({ observations });
    } catch (error) {
        next(error);
    }
});

router.get('/:id', async(req, res, next) => {
    try {
        const observation = await Observation.findById(req.params.id).populate('creator');
        res.json({ observation });
    } catch (error) {
        next(error);
    }
});

module.exports = router;