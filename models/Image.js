var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = require('./Article').schema();

var ImageSchema = new Schema({
    title: String,
    meta: String,
    addDate: {type: Date, default: Date.now},
    article: [ArticleSchema]
});

module.exports = mongoose.model('Image', ImageSchema);
