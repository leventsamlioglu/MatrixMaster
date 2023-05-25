const express = require("express");
const exportedRoutes = require("./Routes/routes");
const mongoose = require("mongoose");

// express app
const app = express();

// connect to MongoDB
const dbURI = "mongodb+srv://Leo:test1122@blog.u0kfsp6.mongodb.net/";
mongoose
	.connect(dbURI)
	.then((result) => console.log('Successfully connected to DB!'))
	.catch((err) => console.log(err));

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static("public"));
// app.use(express.urlencoded({extended: true}));

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

app.use((req, res, next) => {
	exportedRoutes.func();
	next();
});

app.use(exportedRoutes.routes);
