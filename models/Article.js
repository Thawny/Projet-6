var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: String,
    body: String,
    addDate : {type: Date, default: Date.now}
});

var model = mongoose.model('Article', ArticleSchema);

module.exports = {
    schema: function(){
        return ArticleSchema;
    },
    model: function(){
        return model;
    }
}
