var express = require('express');
var router = express.Router();
var Article = require('../models/Article').model();

/* GET users listing. */
router.get('/', function(req, res) {
    const query = Article.find({});
    query.exec(function(err, articles) {
        res.render('article', {articles: articles});
    });
    res.render('all_articles' );
});

router.get('/:id', function(req, res) {
    res.send('Ici la page des articles INDIVIDUELS');
});

module.exports = router;
