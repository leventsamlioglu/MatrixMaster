const mongoose = require("mongoose");
const { isEmail } = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: [true, "Please enter a username!"],
		unique: true,
	},
	email: {
		type: String,
		required: [true, "Please enter an email!"],
		unique: true,
		lowercase: true,
		validate: [isEmail, "Please enter a valid email!"],
	},
	password1: {
		type: String,
		required: [true, "Please enter a password!"],
		minlength: [1, "Password length must be at least 6 character!"],
	},
	password2: {
		type: String,
		required: [true, "Please enter a password!"],
		minlength: [1, "Password length must be at least 6 character!"],
	},
});

userSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt();
	this.password1 = await bcrypt.hash(this.password1,salt);
	this.password2 = await bcrypt.hash(this.password2,salt);
	next();
});

// static method to login user
userSchema.statics.login = async function(email, password1) {
	const user = await this.findOne({ email: email });
	if (user) {
	  const auth = await bcrypt.compare(password1, user.password1);
	  if (auth) {
		return user;
	  }
	  throw Error('incorrect password');
	}
	throw Error('incorrect email');
  };
  

const User = mongoose.model("user", userSchema);

module.exports = User;
