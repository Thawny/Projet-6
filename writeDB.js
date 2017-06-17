var Image = require('./models/Image');

var insertImage = function(title, meta, pathId) {
    var image = new Image({
        title: title,
        meta: meta,
        pathId: pathId
    });
    image.save(function (err) {
      if (err) return handleError(err);
      // saved!
  });
}

module.exports = insertImage;
