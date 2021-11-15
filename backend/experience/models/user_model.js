const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({

    email : { type: String, required : true, trim : true, unique : true,},
    user_id : { type: String,required : true },
    firstName : { type: String, required: true },
    lastName: { type : String, required: true },

}, {
    timestamps: true,
});

const User = mongoose.model('User', UserSchema);

module.exports =  User;