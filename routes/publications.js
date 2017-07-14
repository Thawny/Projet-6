var express = require('express');
var router = express.Router();
const publicationsController = require('../controllers/publicationsController');

/* GET page tous les articles. */
router.get('/', publicationsController.toutesLesPublications);

/*GET page article individuel*/
router.get('/:id', publicationsController.publicationIndividuelle);

module.exports = router;
