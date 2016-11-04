'use strict'
let mongoose = require('mongoose')
module.exports = mongoose.model('Post', new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    image: {
      type: String
    },
    content: {
        type: String,
        required: true
    },
    tags: [String],
    isDraft: {
        type: Boolean,
        default: true
    },
    author: {
        type:String
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User'
    }
}, {
    timestamps: true
}))