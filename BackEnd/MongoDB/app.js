const express = require("express");
const exportedRoutes = require("./Routes/routes");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

// express app
const app = express();

// connect to MongoDB
const dbURI = "mongodb+srv://Leo:test1122@blog.u0kfsp6.mongodb.net/Blog_Collection";
mongoose
	.connect(dbURI)
	.then(() => {
		console.log("Successfully connected to DB!");
		app.listen(3000);
	})
	.catch((err) => console.log(err));

// middleware & static files
app.use(express.static("public"));
// app.use(express.urlencoded({extended: true}));

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

app.get("/add-blog", (req, res) => {
	const blog = new Blog({
		title: "new blog2",
		snippet: "about my new blog",
		body: "more about my new blog",
	});

	blog
		.save()
		.then((result) => res.send(result))
		.catch((err) => console.log(err));
});

app.use((req, res, next) => {
	exportedRoutes.func();
	next();
});

app.use(exportedRoutes.routes);
