var Message = require('../models/Message');

exports.contact_form_get = function(req, res, next) {
    res.render('contact_form');
}

exports.contact_form_post = function(req, res, next) {
    const courriel = req.body.courriel;
    const message = req.body.message;
    const newMessage = new Message({
        courriel: courriel,
        body: message
    });
    newMessage.save();
    res.send('Message bien envoyé');
}
