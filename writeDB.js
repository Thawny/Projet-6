

// var insertImage = function(title, meta, pathId, articleId) {
//     var image = new Image({
//         title: title,
//         meta: meta,
//         pathId: pathId
//     });
//     image.save(function (err) {
//       if (err) return handleError(err);
//       // saved!
//   });
// }

exports.insert = function() {

    var Image = require('./models/Image');
    var Article = require('./models/Article').model();

    var rose = new Image({
        title: "la file et la rose",
        meta: "huile sur toile",
        pathId : "tO4QHq07AwmPe36hJN2H"
    });

    var nouveau = new Article({
        title: "Un nouveau tableau",
        body: "Sed si ille hac tam eximia fortuna propter utilitatem rei publicae frui non properat, ut omnia illa conficiat, quid ego, senator, facere debeo, quem, etiamsi ille aliud vellet, rei publicae consulere oporteret?"
    });

    rose.article = nouveau._id;
    nouveau.image = rose._id;

    rose.save();

    nouveau.save();

}
