

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

// exports.insert = function() {
//
//     var Image = require('./models/Image');
//     var Article = require('./models/Article').model();
//
//     var rose = new Image({
//         title: "la file et la rose",
//         meta: "huile sur toile",
//         pathId : "tO4QHq07AwmPe36hJN2H"
//     });
//
//     var nouveau = new Article({
//         title: "Un nouveau tableau",
//         body: "Sed si ille hac tam eximia fortuna propter utilitatem rei publicae frui non properat, ut omnia illa conficiat, quid ego, senator, facere debeo, quem, etiamsi ille aliud vellet, rei publicae consulere oporteret?"
//     });
//
//     rose.article = nouveau._id;
//     nouveau.image = rose._id;
//
//     rose.save();
//
//     nouveau.save();
//
// }

exports.insert = function() {
    // const Image = require('./models/Image');
    // const plage = new Image({
    //     title: "La plage",
    //     meta: "huile sur toile",
    //     pathId: "SxE3837gPaeuFElCq2Nz"
    // });
    //
    // const hotesse = new Image({
    //     title: "Hôtesse de l'air",
    //     meta: "Acrylique 100x200",
    //     pathId: "Pq13wQuW4f2NxiL5LVUZ"
    // });
    //
    // const verre = new Image({
    //     title: "Le verre",
    //     meta: "Huile sur toile, 500 x 600",
    //     pathId: "8UVdESsiY1LN4CLrdOYU"
    // });
    //
    // const boucles = new Image({
    //     title: "Les boucles d'oreille",
    //     meta: "Huile sur toile",
    //     pathId: "1unuiDXOqosg6O0OGFGE"
    // });
    //
    // const asiatique = new Image({
    //     title: "La demoiselle aux fleurs",
    //     meta: "Huile sur toile",
    //     pathId: "Wiwqd1IsSsjSGzRaDzSM"
    // });
    //
    // const cigarrette = new Image({
    //     title: "La cigarette",
    //     meta: "Huile sur toile",
    //     pathId: "jKLhvnGJbffhCxszb1h4"
    // });
    //
    // plage.save();
    // hotesse.save();
    // verre.save();
    // boucles.save();
    // asiatique.save();
    // cigarrette.save();

    const User = require('./models/User');
    var newUser = new User({
        username: 'tony',
        password: 'coloxoteb'
    })
    newUser.save();
}
