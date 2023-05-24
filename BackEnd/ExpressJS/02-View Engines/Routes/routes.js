const express = require("express");

const routes = express.Router();

const controllers = require("../controllers/routeControllers");

const func = ()=>{
console.log('Hello from routes.js');
}

routes.get("/", controllers.homePageController);

routes.get("/about", controllers.aboutPageController);

routes.get("/create", controllers.createPageController);

// 404 page
routes.use(controllers.noPageController);

module.exports = {routes,func};