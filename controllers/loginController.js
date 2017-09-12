const User = require('../models/User');
const passport = require('passport')

exports.login_page_get = function(req, res, next) {
    res.render('login');
}

// exports.login_page_post = function(req, res, next) {
//     const username = req.body.username;
//     const password = req.body.password;
//     const query = User.findOne({username: username, password: password});
//     query.exec(function(err, user){
//         const user_id = user._id;
//
//     })
//     req.login('truc',function(){
//         res.redirect('/admin')
//     });

    // const username = req.body.username;
    // const password = req.body.password;
    //
    // const query = User.findOne({'username': username, 'password': password});
    // query.exec(function(err, user) {
    //     if(err) {
    //         console.log(err);
    //         return res.status(500).send();
    //     }
    //     if(!user) {
    //         return res.render('login', {flashMessage: 'Unvalid credentials'})
    //     }
    //     req.session.user = user;
    //     return res.render('admin_index');
    // })
    //
    // if (!req.session.user) {
    //     res.render('login');
    // } else {
    //     res.render('admin_index');
    // }
// }
