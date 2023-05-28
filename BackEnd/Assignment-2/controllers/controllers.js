const Post = require("../models/postModel");

const homePage = (req, res) => {
	Post.find()
		.sort({ createdAt: -1 })
		.then((result) => {
			res.render("index", { posts: result, title: "All blogs" });
		})
		.catch((err) => console.log(err));
};

const postCreate = (req, res) => {
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
			//  res.render('details', {
			//      posts :result,
			//  })
			res.redirect("/");
		})
		.catch((err) => console.log(err));
};

const commentCreate = (req,res)=>{
	const id = req.params.id;
	Post.findByIdAndUpdate(id, {
		$push: { "comment": req.body.comment }
	  }).then((result)=>{
		res.redirect('/')
	  })
		
}

module.exports = { homePage, postCreate, postDetail, postDelete, postEdit, commentCreate };
