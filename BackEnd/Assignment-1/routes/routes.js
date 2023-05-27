const express = require('express')
const routes = express.Router()
const controllers = require("../controllers/controllers")


routes.get('/', controllers.homePage)

routes.post('/',controllers.postCreate)

routes.get("/posts/create/:id", controllers.postDetail);

module.exports = routes