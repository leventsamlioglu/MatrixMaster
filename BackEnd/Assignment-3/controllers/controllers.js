const Post = require("../models/postModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const handleErrors = require("./errorHandler");
let userName;

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
	return jwt.sign({ id }, "secret", {
		expiresIn: maxAge,
	});
};

const homePage = (req, res) => {
	userName = res.locals.user ? res.locals.user.username : null;

	Post.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render("index", { posts: result, title: "All blogs" });
		})
		.catch((err) => console.log(err));
};

const postCreate = (req, res) => {
	req.body.user = userName;
	const post = new Post(req.body);

	post
		.save()
		.then((result) => {
			res.redirect("/");
		})
		.catch((err) => console.log(err));
};

const postDetail = (req, res) => {
	const id = req.params.id;
	Post.findById(id)
		.then((result) => {
			res.render("details", { posts: result });
		})
		.catch((err) => console.log(err));
};

const postDelete = (req, res) => {
	const id = req.params.id;
	Post.findByIdAndDelete(id)
		.then((result) => {
			res.redirect("/");
		})
		.catch((err) => console.log(err));
};

const postEdit = (req, res) => {
	const id = req.params.id;
	Post.findByIdAndUpdate(id, req.body)
		.then((result) => {
			res.redirect(`/posts/create/${result._id}`);
		})
		.catch((err) => console.log(err));
};

const commentCreate = (req, res) => {
	const id = req.params.id;
	req.body.user = userName
	Post.findByIdAndUpdate(id, {
		$push: { comment: [req.body.comment, req.body.user] },
	}).then((result) => {
		res.redirect(`/posts/create/${result._id}`);
	});
};

// Login & Sign Up

const signupGet = (req, res) => {
	res.render("signup");
};

const loginGet = (req, res) => {
	res.render("login");
};

const signupPost = async (req, res) => {
	const { username, email, password1, password2 } = req.body;

	try {
		const user = await User.create({ username, email, password1, password2 });
		const token = createToken(user._id);
		res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(201).json({ user: user._id });
	} catch (err) {
		const errors = handleErrors(err);
		res.status(400).json({ errors });
	}
};

const loginPost = async (req, res) => {
	const { email, password1 } = req.body;

	try {
		const user = await User.login(email, password1);
		const token = createToken(user._id);
		res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
		res.status(200).json({ user: user._id });
	} catch (err) {
		const errors = handleErrors(err);
		res.status(400).json({ errors });
	}
};

const logoutGet = (req, res) => {
	res.cookie("jwt", "", { maxAge: 1 });
	res.redirect("/");
};

module.exports = {
	homePage,
	postCreate,
	postDetail,
	postDelete,
	postEdit,
	commentCreate,
	signupGet,
	signupPost,
	loginGet,
	loginPost,
	logoutGet,
};
