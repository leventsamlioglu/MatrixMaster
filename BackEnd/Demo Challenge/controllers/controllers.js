

const homePage = (req,res)=>{
    res.render('index')
}

const newArticle = (req,res)=>{
    res.render('newArticle')
}

module.exports = {homePage, newArticle}