var express = require('express');
var router = express.Router();
const publicationsController = require('../controllers/publicationsController');

/* GET users listing. */
router.get('/', publicationsController.publicationsPage);

router.get('/:id', function(req, res) {
    res.send('Ici la page des articles INDIVIDUELS');
});



module.exports = router;
