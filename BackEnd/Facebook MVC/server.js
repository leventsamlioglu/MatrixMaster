const express = require('express')
const mongoose = require('mongoose')
const exportedRoutes = require('./routes/router')

const app = express()
const dbURI = "mongodb+srv://Leo:test1122@blog.u0kfsp6.mongodb.net/FEED"

mongoose.connect(dbURI)
.then(()=>{
    app.listen(3000)
    console.log('Connected to DB...');
})

app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs')

app.use(exportedRoutes)