var express = require('express');
var router = express.Router();

/* GET page formulaire de contact. */
router.get('/', function(req, res, next) {
  res.send('Ici la page des contacts');
});

/* POST formulaire de contact. */
router.get('/', function(req, res, next) {
  res.send('Ici la page des contacts');
});

module.exports = router;
