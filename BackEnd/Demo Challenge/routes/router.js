const express = require('express')
const routes = express.Router()
const controllers = require('../controllers/controllers')

routes.get('/', controllers.homePage)

routes.get('/new/article', controllers.getArticle)

routes.post('/new/article', controllers.createArticle)

routes.get('/article/:id', controllers.detailArticle)

routes.post('/article/delete/:id', controllers.deleteArticle)

routes.get('/edit/article/:id', controllers.editArticleGet)

routes.post('/edit/article/:id', controllers.editArticlePost)

module.exports = routes
