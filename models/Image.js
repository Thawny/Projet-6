var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ArticleSchema = require('./Article').model();

var ImageSchema = new Schema({
    title: String,
    meta: String,
    addDate: {type: Date, default: Date.now},
    pathId: String,
    tableau: Boolean,
    article: {
        type: Schema.Types.ObjectId,
        ref: 'Article'
    }
});

module.exports = mongoose.model('Image', ImageSchema);
