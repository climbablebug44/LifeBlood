const mongoose = require('mongoose');


const PostSchema = new mongoose.Schema({

    //user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    post_id: { type: mongoose.Types.ObjectId, required: true},
    title: { type: String, required: true, trim: true },
    content: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now },
    upvotes: { type: Number, default: 0 },
    downvotes: { type: Number, default: 0 },
    user_image: {
        name: String,
        img: {
            data: Buffer,
            contentType: String,
        }
    },

},{
    timestamps : true,
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;