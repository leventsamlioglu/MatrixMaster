const Post = require("../models/postModel");

const homePage = (req,res)=>{
	
		Post.find()
			.sort({ createdAt: -1 })
			.then((result) => {
				res.render("index", { posts: result, title: "All blogs" });
			})
			.catch((err) => {
				console.log(err);
			});
}

const postCreate = (req, res) => {
    // console.log(req.body)
	const post = new Post(req.body);
	post
		.save()
		.then((result) => {
			res.redirect("/");
		})
		.catch((err) => console.log(err));
}

const postDetail = (req,res)=>{
	const id = req.params.id
	Post.findById(id)
    .then(result => {
      res.render('details', { posts: result });
    })
    .catch(err => {
      console.log(err);
    });
}

module.exports = {homePage,postCreate,postDetail}