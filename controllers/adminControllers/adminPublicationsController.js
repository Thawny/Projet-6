var multer = require('multer');
const Image = require('../../models/Image');
const Article = require('../../models/Article').model();
const cheerio = require('cheerio');
const randomId = require('random-id');

/* MIDDELWARES */
//multer object creation
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        const lastIndex = file.originalname.lastIndexOf('.')
        const cropAt = file.originalname.length - lastIndex
        const extension = file.originalname.slice( - cropAt)
        cb(null, randomId(20) + extension)
    }
})

exports.upload = multer({ storage: storage })

/*END MIDDELWARES*/

/*CONTROLLERS*/

exports.newArticle_get = function(req, res) {
    const path = '../'
    res.render('tinymce', {path: path});
}

exports.newArticle_post = function(req, res, next) {
    const titre = req.body.titre;
    const corps = req.body.corps;
    const imageTitle = req.body.titreTableau || false ;
    const imageTechnique = req.body.techniqueTableau || false;
    var newArticle = new Article({
        title: titre,
        body: corps
    });
    if (req.files) {
        const files = req.files;
        var tableau = req.files['tableau'][0] ? req.files['tableau'][0] : false ;
        var illustration = req.files['illustration'][0] ? req.files['illustration'][0] : false ;
        if (illustration) newArticle.cover = illustration.filename;
        if (tableau) {
            var newImage = new Image({
                title: imageTitle,
                meta: imageTechnique,
                pathId : tableau.filename,
                article: newArticle._id
            });
            newImage.save();
        }
    }
    newArticle.save();
    res.send("OK");
}

exports.allArticles = function(req, res, next) {
    const query = Article.find({});
    query.exec(function(err, articles) {
        articles.forEach((article) => {
            article.body = getExerpt(article.body);
        });
        res.render('admin_all_articles', {articles: articles});
    });
}

exports.editArticle_get = function(req, res, next) {
    const path = '../../'
    const id = req.params.id;
    const query = Article.findOne({'_id': id});
    query.exec(function(err, article) {
        res.render('tinymce', {article: article, path: path});
    })
}

exports.deleteArticle = function(req, res, next) {
    const _id = req.params.id;
    Article.findOne({'_id': _id}).remove(
        function(){
            res.redirect('/admin/publications');
        }
    )
}

/* END MIDDELWARES*/

/* ROUTINES */
function getExerpt(html) {
    const $ = cheerio.load(html, {
        ignoreWhitespace: true
    });
    return $.text().slice(0, 1000);
}
