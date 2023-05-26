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

const blogClickController = (req, res) => {
	const id = req.params.id
	Blog.findById(id)
    .then(result => {
      res.render('details', { blog: result, title: 'Blog Details' });
    })
    .catch(err => {
      console.log(err);
    });
}

const blogDeleteController = (req, res) => {
	const id = req.params.id;
	
	Blog.findByIdAndDelete(id)
	  .then(result => {
		res.json({ redirect: '/blogs' });
	  })
	  .catch(err => {
		console.log(err);
	  });
  }

module.exports = {
	homePageController,
	aboutPageController,
	noPageController,
	blogCreateController,
	blogsGetController,
	blogsPostController,
	blogClickController,
	blogDeleteController,
};
