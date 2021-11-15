const express = require('express');
const mongoose = require('mongoose');
const Experience = require('./models/post_model');

const { DB_URL } = require('../backend_api_key.json');

const router = express.Router();

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Successfully connected to mongodb.");
    })
    .catch((err) => {
        console.log("Error connecting to mongodb.");
        console.error(err);
    })

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
