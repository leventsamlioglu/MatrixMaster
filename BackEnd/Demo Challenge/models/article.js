const mongoose = require('mongoose')

const Schema = mongoose.Schema
const articleSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
        },
        article:{
            type: String,
            required: true,
        }
    },
    { timestamps: true }
)

const Article = mongoose.model('article',articleSchema)

module.exports = Article

