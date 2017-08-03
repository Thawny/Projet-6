var Message = require('../../models/Message');

exports.messagesPage = function(req, res, next) {
    const query = Message.find({});
    query.exec(function(err, messages) {
        res.render('admin_contact', {messages: messages});
    });
}

exports.deleteMessage = function(req, res, next) {
    const _id = req.params.id;
    Message.findOne({'_id': _id}).remove(
        function() {
            res.redirect('/admin/messages');
        }
    )
}
