const mongoose = require('mongoose')

const Schema = mongoose.Schema
const articleSchema = new Schema(
    {
        title:{
            type: String,
            required: [true, 'Please enter a title!'],
            minlength: [25, 'Title must be longer than 25 character...'],
        },
        article:{
            type: String,
            required: [true, 'Please type an article!'],
            minlength: [100, 'Article must be longer than 100 character...'],

        }
    },
    { timestamps: true }
)

const Article = mongoose.model('article',articleSchema)

module.exports = Article

