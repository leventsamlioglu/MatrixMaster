const express = require('express')
const routes = express.Router()
const controllers = require('../controllers/controllers')

routes.get('/', controllers.homePage)

routes.get('/new/article', controllers.newArticle)

module.exports = routes
