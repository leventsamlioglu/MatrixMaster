const express = require("express");
const routes = express.Router();
const controllers = require("../controllers/controllers");
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

routes.get('*', checkUser)

routes.get("/", controllers.homePage);

routes.post("/", controllers.postCreate);

routes.get("/posts/create/:id", requireAuth, controllers.postDetail);

routes.post("/posts/create/:id", controllers.postEdit);

routes.post("/posts/delete/:id", controllers.postDelete);

routes.post("/comments/create/:id", controllers.commentCreate)

// Login & Sign Up
routes.get('/signup', controllers.signupGet);

routes.post('/signup', controllers.signupPost);

routes.get('/login', controllers.loginGet);

routes.post('/login', controllers.loginPost);

// Logout

routes.get('/logout', controllers.logoutGet)


module.exports = routes;
