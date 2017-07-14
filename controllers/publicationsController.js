var Article = require('../models/Article').model();
var cheerio = require('cheerio');

exports.publicationsPage = function(req, res) {
    const query = Article.find({});
    query.exec(function(err, articles) {
        articles.forEach((article) => {
            article.body = getExerpt(article.body);
        });
        res.render('all_articles', {articles: articles});
    });
}

function getExerpt(html) {
    const $ = cheerio.load(html, {
        ignoreWhitespace: true
    });
    return $.text().slice(0, 1000);
}
