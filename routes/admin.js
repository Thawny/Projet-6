var express = require('express');
var router = express.Router();
var Article = require('../models/Article').model();
const adminController = require('../controllers/adminControllers/adminController');
const adminPublicationsController = require('../controllers/adminControllers/adminPublicationsController');
const adminMessagesController = require('../controllers/adminControllers/adminMessagesController');


/* GET page principale admin. */
router.get('/', adminController.adminHomePage);

/* POST nouveau tableau */
router.post('/nouveau-tableau',adminPublicationsController.upload.single('tableau'), adminController.newCanvas_post);

/* GET page formulaire d'ajout d'article. */
router.get('/nouvel-article', adminPublicationsController.newArticle_get);

/* POST page formulaire d'ajout d'article. */
router.post('/nouvel-article', adminPublicationsController.upload.fields([{name: 'tableau', maxCount: 1 }, {name: 'illustration', maxCount: 1}, {name: 'image', maxCount: 1}]),
 adminPublicationsController.newArticle_post);

/* POST page toutes les publications admin*/
router.get('/publications', adminPublicationsController.allArticles);

/* GET page édition d'un article */
router.get('/edit/:id', adminPublicationsController.editArticle_get);

router.get('/publications/delete/:id', adminPublicationsController.deleteArticle);

router.get('/delete/:id/:pathId', adminController.deleteCanvas);

router.get('/messages', adminMessagesController.messagesPage);

router.get('/messages/delete/:id', adminMessagesController.deleteMessage);


module.exports = router;
