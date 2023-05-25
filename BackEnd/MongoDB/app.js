const express = require("express");
const exportedRoutes = require("./Routes/routes");
const mongoose = require("mongoose");


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
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
	res.locals.path = req.path;
	next();
  });
  

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

app.use((req, res, next) => {
	exportedRoutes.func();
	next();
});

app.use(exportedRoutes.routes);
