var express = require('express');
var router = express.Router();
var multer = require('multer');
var Article = require('../models/Article').model();
const adminController = require('../controllers/adminControllers/adminController');

/* MIDDELWARES */
//multer object creation
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

/* GET home page. */
router.get('/', adminController.adminHomePage);


/* GET page formulaire d'ajout d'article. */
router.get('/formulaire-article', function(req, res, next) {
      res.render('tinymce');
});

/* POST page formulaire d'ajout d'article. */
router.post('/formulaire-article', upload.single('tableau'), function(req, res, next) {
      const titre = req.body.titre;
      const corps = req.body.corps;
      if (req.file) {
          const filename = req.file.filename;
      }
    //   res.render('article', {titre: titre, corps: corps, filename: filename });
    var article = new Article({
        title: titre,
        body: corps
    });
    article.save();
    res.send("OK");


});

router.get('/article', function(req, res, next) {
      const query = Article.findOne({'title': 'Anchorage'});
      query.exec(function(err, article) {
          var titre = article.title;
          var corps = article.body;
          res.render('article', {titre: titre, corps: corps});
      });
});


module.exports = router;
