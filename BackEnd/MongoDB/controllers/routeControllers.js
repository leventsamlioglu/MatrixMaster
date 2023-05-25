const Blog = require("../models/blog");

const homePageController = (req, res) => {
	res.redirect('/blogs')
};

const aboutPageController = (req, res) => {
	res.render("about", { title: "About" });
};

const noPageController = (req, res) => {
	res.status(404).render("404", { title: "404" });
};

const blogCreateController = (req, res) => {
	res.render("create", { title: "Create a new blog" });
}

const blogsGetController = (req, res) => {
	Blog.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render("index", { blogs: result, title: "All blogs" });
		})
		.catch((err) => {
			console.log(err);
		});
}

const blogsPostController = (req, res) => {
	const blog = new Blog(req.body);

	blog
		.save()
		.then((result) => {
			res.redirect("/blogs");
		})
		.catch((err) => console.log(err));
}

module.exports = {
	homePageController,
	aboutPageController,
	noPageController,
	blogCreateController,
	blogsGetController,
	blogsPostController,
};
