var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MessageSchema = new Schema({
    courriel: String,
    body: String,
    date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Message', MessageSchema);
