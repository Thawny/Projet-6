var express = require('express');
var router = express.Router();
const contactController = require('../controllers/contactController');

/* GET page formulaire de contact. */
router.get('/', contactController.contact_form_get);

/* POST formulaire de contact. */
router.post('/', contactController.contact_form_post);

module.exports = router;
