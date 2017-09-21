const User = require('../models/User');
const Image = require('../models/Image');
// const passport = require('passport')
const adminController = require('./adminControllers/adminController');
const bcrypt = require('bcrypt');

exports.login_page_get = function(req, res, next) {
    res.render('login', {cred: req.session.credentials});
}

exports.login_page_post = function(req, res, next) {
    // comparer données du form corresponde à users en bdd
    var username = req.body.username;
    var password = req.body.password;
    const query = User.findOne({username: username});
    query.exec(function(err, user) {
        console.log(user)
        if (user) {
            console.log("will compare")
            bcrypt.compare(password, user.password, function(err, isIdentical) {
                console.log('has compared')
                console.log(isIdentical)
                if (isIdentical == true) {
                    req.session.username = user.username;
                    req.session.password = user.password;
                    res.redirect('/admin')
                } else {
                    return res.render('login', {err: "Mauvais identifiants", password: password, username: username})
                }
            })
        } else {
            // si non --> on redirige vers /login avec erreur
            return res.render('login', {err: "Mauvais identifiants", password: password, username: username})
        }

    })
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
