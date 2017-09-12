const User = require('../../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

exports.users_page_get = function(req, res, next) {

    res.render('admin_users');
}

exports.add_user = function(req, res, next) {
    // req.checkBody('username', 'Veuillez remplir le champs \'Nom d\'utilisateur\'').notEmpty();
    // req.checkBody('password', 'Veuillez remplir le champs \'Mot de passe\'').notEmpty();
    // req.checkBody('password', 'Votre mot de passe doit comporter au moins 8 caractères').len(8,20);
    // const errors = req.validationErrors();
    // if (errors) {
    //     res.render('admin_users', {errors: errors});
    // }
    const username = req.body.username;
    const password = req.body.password;
    console.log(username, password)
    bcrypt.hash(password, saltRounds, function(err, hash) {
        const newUser = new User({
            username: username,
            password: hash
        });
        newUser.save();
        res.redirect('/admin/users');
    })

}
