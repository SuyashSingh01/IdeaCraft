const mongoose = require('mongoose');
// const { subscribe } = require('../Routes/user');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trime: true
        },
        email: {
            type: String,
            required: true,
            trime: true
        },
        password: {
            type: String,
            required: true
        },
        otherdetails: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'profile',
        },
        blog: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'blog',
            }
        ],
        token: {
            type: String,
        },
        role: {
            type: String,
            enum: ["Admin", "Recuriter", "JobSeeker", "Writer", "Viewer"],
            default: "Viewer",
        },
        savedBlogs:[{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'blog',
        },],
        subscriptions: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }], // List of users this user is subscribed to
        subscribers: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
        ],    // List of users who are subscribed to this user
    }

)

module.exports = mongoose.model('user', userSchema);
