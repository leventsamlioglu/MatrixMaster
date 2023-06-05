const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
	{
		message: {
			type: String,
			required: true,
		},
		user:{
			type:String,
		},
		comment:{
			type: Array,
		},
	},
	{ timestamps: true }
);

const Post = mongoose.model('post',userSchema)

module.exports = Post