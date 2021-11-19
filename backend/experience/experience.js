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

router.get('/get', (req, res) => {
    Experience.find()
        //.populate('user')
        //.sort({'createdAt':-1})
        .then(experiences => res.json(experiences))
        .catch(err => res.status(400).json('Error' + err));
});

router.post('/add', async (req, res) => {
    console.log('User', req.body.user);
    console.log('Title', req.body.title);
    console.log('Experience', req.body.experience);

    const experience = new Experience({

        user: req.body.user,
        title: req.body.title,
        content: req.body.experience,

        date: req.body.date
    });
    try {
        const savedExperience = await experience.save();
        res.status(200).json(savedExperience);
        console.log(savedExperience);
        //const savedExperienceWithUserData = await experience.findById(savedExperience._id).populate('user');
        //res.send(savedExperienceWithUserData);
    }catch(err) {
        res.status(400).send(err);
        console.log('Error', err);
    }

})

module.exports = router;
