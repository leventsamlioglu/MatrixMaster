const Article = require("../models/article");
const handleErrors = require('./errorHandlers')

const homePage = (req, res) => {
	Article.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render("index", { articles: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const getArticle = (req, res) => {
	res.render("newArticle");
};

const createArticle = (req, res) => {
	const article = new Article(req.body);
	article
		.save()
		.then((result) => {
			res.status(200).json({result})
			// res.redirect('/')
		})
		.catch((err) => {
		  const errors = handleErrors(err);
		  res.status(400).json({ errors });
		});
};

const detailArticle = (req, res) => {
	const id = req.params.id;
	Article.findById(id)
		.then((result) => {
			res.render("detail", { articles: result });
		})
		.catch((err) => {
			console.log(err);
		});
};

const deleteArticle = (req, res) => {
	const id = req.params.id;
	Article.findByIdAndDelete(id).then((result) => {
		res.redirect("/");
	});
};

const editArticleGet = (req, res) => {
	const id = req.params.id;
	Article.findById(id)
		.then((result) => {
			res.render("editArticle", { articles: result });
		})
		.catch((err) => console.log(err));
};

const editArticlePost = (req, res) => {
	const id = req.params.id;
	Article.findByIdAndUpdate(id, req.body)
		.then((result) => {
			res.redirect("/");
		})
		.catch((err) => console.log(err));
};

module.exports = {
	homePage,
	getArticle,
	createArticle,
	detailArticle,
	deleteArticle,
	editArticlePost,
	editArticleGet,
};
