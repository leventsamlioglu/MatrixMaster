const express = require("express");
const exportedRoutes = require("./Routes/routes");

// express app
const app = express();

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
