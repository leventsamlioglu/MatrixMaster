const express = require("express");

const routes = express.Router();

const func = ()=>{
console.log('Hello from routes.js');
}

const {
	homePageController,
	aboutPageController,
	createPageController,
	noPageController,
} = require("../controllers/routeControllers");

routes.get("/", homePageController);

routes.get("/about", aboutPageController);

routes.get("/blogs/create", createPageController);

// 404 page
routes.use(noPageController);

module.exports = {routes,func};