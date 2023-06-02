const FEED = require("../models/article");
const handleErrors = require("./errorHandlers");

const homePage = (req, res) => {
	FEED.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render("index", { feeds: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const createPost = (req, res) => {
	const feed = new FEED(req.body);
	feed
		.save()
		.then((result) => {
			res.redirect("/feed");
		})
		.catch((err) => {
			FEED.find()
			.then(result=>{
				const response = handleErrors(err);
				console.log(req.body);
					res.render('index1',{feeds:{body:req.body, result:result, nameError: response.errors.name, messageError:response.errors.message}})
					
			})
		});
};

const detailPost = (req, res) => {
	const id = req.params.id;
	FEED.findById(id)
		.then((result) => {
			res.render("detail", { feeds: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const deletePost = (req, res) => {
	const id = req.params.id;
	FEED.findByIdAndDelete(id)
	.then((result) => {
		res.redirect("/feed");
	});
};

const editPostGet = (req, res) => {
	const id = req.params.id;
	FEED.findById(id)
		.then((result) => {
			res.render("editArticle", { feeds: result });
		})
		.catch((err) => console.log(err));
};

const editPostSend = (req, res) => {
	const id = req.params.id;
	FEED.findByIdAndUpdate(id, req.body)
	.then((result) => {
			res.redirect(`/feed/${result._id}`);
		})
		.catch((err) => console.log(err));
};

module.exports = {
	homePage,
	createPost,
	detailPost,
	deletePost,
	editPostGet,
	editPostSend,
};
