const Image = require('../../models/Image');
const User = require('../../models/User');
const Article = require('../../models/Article').model();
const randomId = require('random-id');
const path = require('path');
const fs = require('fs');


/* MIDDELWARES */

//
exports.checkAdminPrivileges = function(req, res, next) {
    // Vérifier que la session de l'utilisateur contient bien un username et pw identique à ceux en bdd
    if (req.session.username && req.session.password) {
        next();
    } else {
        // redirection vers page de login
        res.redirect('/login')
    }
}
/*END MIDDELWARES*/


/* GET admin home page. */
exports.adminHomePage = function(req, res) {
    Image.find({}).populate('article').sort({addDate: 'descending'}).exec(function(err, images){
        res.render('admin_index', {images: images});
    });
}

exports.newCanvas_post = function(req, res, next) {
    const titre = req.body.titre;
    const technique = req.body.technique;
    const filename = req.file.filename;

    //   res.render('article', {titre: titre, corps: corps, filename: filename });
    var nouvelleImage= new Image({
      title: titre,
      meta: technique,
      pathId: filename
    });
    nouvelleImage.save();
    res.redirect('/admin');
}

exports.deleteCanvas = function(req, res, next) {
    const _id = req.params.id;
    const pathId = req.params.pathId;
    const relPath = '../../public/uploads/' + pathId;
    Image.findOne({'_id': _id}).remove(
        function() {
            fs.unlink(path.join(__dirname, relPath))
            res.redirect('/admin');
        }
    );
}

exports.logout = function(req, res, next) {
    req.session.destroy(function(err) {
        res.redirect('/');
    })
}
