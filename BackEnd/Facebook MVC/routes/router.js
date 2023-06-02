const express = require('express')
const routers = express.Router()
const controllers = require('../controllers/controllers')

routers.get('/feed', controllers.homePage)

routers.post('/feed', controllers.createPost)

routers.get('/feed/:id', controllers.detailPost)

routers.post('/feed/delete/:id', controllers.deletePost)

routers.get('/feed/edit/:id', controllers.editPostGet)

routers.post('/feed/edit/:id', controllers.editPostSend)

module.exports = routers
