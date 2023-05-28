const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		message: {
			type: String,
			required: true,
		},
	},
	{ timestamps: true }
);

const Post = mongoose.model('post',userSchema)

module.exports = Post