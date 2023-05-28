const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		message: {
			type: String,
			required: true,
		},
		comment:{
			type: Array,
		},
	},
	{ timestamps: true }
);

const Post = mongoose.model('post',userSchema)

module.exports = Post