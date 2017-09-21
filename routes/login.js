var express = require('express');
var router = express.Router();
const passport = require('passport')
const loginController = require('../controllers/loginController');

/* GET page login. */
router.get('/', loginController.login_page_get);

/* POST page login */
router.post('/', loginController.login_page_post);

/* POST page login */
// router.post('/',passport.authenticate('local', { successRedirect: '/admin',
//                                failureRedirect: '/login',
//                                failureFlash: true }));

module.exports = router;
