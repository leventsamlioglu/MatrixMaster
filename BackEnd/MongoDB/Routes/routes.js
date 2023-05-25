const express = require("express");

const routes = express.Router();

const controllers = require("../controllers/routeControllers");

const func = () => {
	console.log("Hello from routes.js");
};

routes.get("/", controllers.homePageController);

// blog routes
routes.get("/blogs/create", controllers.blogCreateController);

routes.get("/blogs", controllers.blogsGetController);

routes.post("/blogs", controllers.blogsPostController);

routes.get("/about", controllers.aboutPageController);

// 404 page
routes.use(controllers.noPageController);

module.exports = { routes, func };
