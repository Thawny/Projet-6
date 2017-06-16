var mongoose = require('mongoose');

var db = 'mongodb://127.0.0.1:27017/christianDB';

mongoose.connect(db);

module.exports = mongoose;
