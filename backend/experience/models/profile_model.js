const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({

    user_id: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    dob: { type: Date, required: true },
    zipCode: { type: String, required: true },


}, {
    timestamps : true,
})

const Profile = mongoose.model('Profile', ProfileSchema);

module.exports = Profile;