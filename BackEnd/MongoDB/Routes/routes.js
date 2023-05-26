const express = require("express");

const routes = express.Router();

const controllers = require("../controllers/routeControllers");

const func = () => {
	console.log("Hello from routes.js");
};

routes.get("/", controllers.homePageController);

// blog routes
routes.get("/blogs", controllers.blogsGetController);

routes.get("/blogs/create", controllers.blogCreateController);

routes.get("/blogs/:id", controllers.blogClickController);

routes.get("/about", controllers.aboutPageController);

routes.post("/blogs", controllers.blogsPostController);

routes.delete('/blogs/:id', controllers.blogDeleteController);

// 404 page
routes.use(controllers.noPageController);

module.exports = { routes, func };
