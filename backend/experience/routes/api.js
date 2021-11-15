const express = require('express');
const mongoose = require('mongoose');
const Experience = require('../models/post_model');

const router = express.Router();

router.get('/give', (req, res) => {
    Experience.find()
        .populate('user')
        .sort({'createdAt':-1})
        .then(experiences => res.json(experiences))
        .catch(err => res.status(400).json('Error' + err));
});

router.post('/add', async (req, res) => {
    console.log(req.user);
    const experience = new Experience({

        user: req.username,
        title: req.body.title,
        content: req.body.content
    });
    try {
        const savedExperience = await experience.save();
        const savedExperienceWithUserData = await experience.findById(savedExperience._id).populate('user');
        res.send(savedExperienceWithUserData);
    }catch(err) {
        res.status(400).send(err);
    }

})

module.exports = router;