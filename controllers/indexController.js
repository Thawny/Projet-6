const Article = require('../models/Article').model();
const Image = require('../models/Image');

exports.landingPage = function(req, res) {
    Image.find({}).populate('article').sort({addDate: 'descending'}).exec(function(err, images){
        res.render('index', {images: images});
    });
}
