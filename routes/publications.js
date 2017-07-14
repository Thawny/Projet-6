var express = require('express');
var router = express.Router();
var Article = require('../models/Article').model();
var cheerio = require('cheerio');

/* GET users listing. */
router.get('/', function(req, res) {
    const query = Article.find({});
    query.exec(function(err, articles) {
        // const extrait = getExerpt(article.body);
        articles.forEach((article) => {
            article.body = getExerpt(article.body);
        });
        res.render('all_articles', {articles: articles});
    });
});

router.get('/:id', function(req, res) {
    res.send('Ici la page des articles INDIVIDUELS');
});

module.exports = router;



// function reduceBody(html) {
//     const $ = cheerio.load(html, {
//         ignoreWhitespace: true
//     });
//     return $.text().slice(0, 1000);
// }

function getExerpt(html) {
    const $ = cheerio.load(html, {
        ignoreWhitespace: true
    });
    return $.text().slice(0, 1000);
}
