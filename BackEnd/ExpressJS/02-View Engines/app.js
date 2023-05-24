const express = require("express");
const routes = require("./Routes/routes");

// express app
const app = express();

// listen for requests
app.listen(3000);

// middleware & static files
app.use(express.static('public'))

// register view engine
app.set("view engine", "ejs");
// app.set('views', 'myviews');

app.use(routes);