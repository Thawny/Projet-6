var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('Ici la page principale des billets');
});

router.get('/:id', function(req, res) {
    res.send('Ici la page des articles INDIVIDUELS');
});

module.exports = router;
