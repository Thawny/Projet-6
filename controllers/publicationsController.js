var Article = require('../models/Article').model();
var cheerio = require('cheerio');

exports.toutesLesPublications = function(req, res) {
    const query = Article.find({});
    query.exec(function(err, articles) {
        articles.forEach((article) => {
            article.body = getExerpt(article.body);
        });
        res.render('all_articles', {articles: articles});
    });
}

exports.publicationIndividuelle = function(req, res) {
    const id = req.params.id;
    // TODO: VÉRIFIER S'IL Y A UN TABLEAU ASSOCIÉ ET LE CHERCHER S'IL EXISTE
    const query = Article.findOne({'title': id});
    query.exec(function(err, article) {
        res.render('article', {article: article});
    });
}

function getExerpt(html) {
    const $ = cheerio.load(html, {
        ignoreWhitespace: true
    });
    return $.text().slice(0, 1000);
}
