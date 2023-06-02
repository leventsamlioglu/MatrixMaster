const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, 'Please enter a name!'],
            minlength: [15, 'Name must be longer than 15 character...'],
        },
        message:{
            type: String,
            required: [true, 'Please enter a message!'],
            minlength: [40, 'Message must be longer than 40 character...'],

        },
        
    },
    { timestamps: true }
)

const FEED = mongoose.model('feed',postSchema)

module.exports = FEED

