var express = require('express');
var router = express.Router();
var Image = require('../models/Image');

/* GET home page. */
router.get('/', function(req, res, next) {
  Image.find({}).populate('article').sort({addDate: 'descending'}).exec(function(err, images){
      res.render('index', {images: images});
  });
});

// Image.find(function(err, images){
//     res.render('index', {images: images});
// });

module.exports = router;
