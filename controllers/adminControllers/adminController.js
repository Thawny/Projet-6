var multer = require('multer');
const Image = require('../../models/Image');
const Article = require('../../models/Article').model();

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

exports.checkAdminPrivileges = function(req, res) {
    //TODO: check admin privileges
}

/* GET admin home page. */
exports.adminHomePage = function(req, res) {
    Image.find({}).populate('article').sort({addDate: 'descending'}).exec(function(err, images){
        res.render('admin_index', {images: images});
    });
}


// /* GET page formulaire d'ajout d'article. */
// router.get('/formulaire-article', function(req, res, next) {
//       res.render('tinymce');
// });
//
// /* POST page formulaire d'ajout d'article. */
// router.post('/formulaire-article', upload.single('tableau'), function(req, res, next) {
//       const titre = req.body.titre;
//       const corps = req.body.corps;
//       if (req.file) {
//           const filename = req.file.filename;
//       }
//     //   res.render('article', {titre: titre, corps: corps, filename: filename });
//     var article = new Article({
//         title: titre,
//         body: corps
//     });
//     article.save();
//     res.send("OK");
//
//
// });
//
// router.get('/article', function(req, res, next) {
//       const query = Article.findOne({'title': 'Anchorage'});
//       query.exec(function(err, article) {
//           var titre = article.title;
//           var corps = article.body;
//           res.render('article', {titre: titre, corps: corps});
//       });
// });
//
//
// module.exports = router;
