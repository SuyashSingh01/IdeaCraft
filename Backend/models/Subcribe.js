const mongoose = require('mongoose');


const subcribeSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    subscription: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }],
    subscribers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    }],
})

module.exports = mongoose.model('subcribe', subcribeSchema);