
var modalBox;
var maxBox;
function modalOn(target) {
    maxBox = maxBoxFactory();
    modalBox = modalBoxFactory(target);

    // TODO: vérifier que modalBox n'est pas trop grand en largeur par rapport à maxBox
    if (maxBox.width < modalBox.totalWidth) {
        recomputeModalSize();
    }


    $target = $(target);
    $("#modal-dark").fadeIn();
    $("#modal").attr("src", $target.attr("src")).fadeIn();
    $('#modal').css('width', toPixel(modalBox.x)).css('height', toPixel(modalBox.y));
    $('#modal-meta > h2').text(modalBox.title);
    $('#modal-meta > h4').text(modalBox.method);
    $('#modal-image').fadeIn();
    $('#modal-image').css('margin-left', toPixel(computeModalLeftMargin())).css('margin-top', computeModalTopMargin()).fadeIn();
    $('#modal-meta').css('width', toPixel(modalBox.metaWidth));

    $("#modal-dark").one("click", function() {
        $("#modal-dark").fadeOut();
        $("#modal-image").fadeOut();
    });



}



// MAXBOX FACTORY
function maxBoxFactory() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    return {
        width : 90/100 * windowWidth,
        height : 90/100 * windowHeight
    }
}

// MODALBOX FACTORY
function modalBoxFactory(sourceImage) {
    var $sourceImage = $(sourceImage);
    var sourceImageHeight = toNumber($sourceImage.css('height'));
    var sourceImageWidth = toNumber($sourceImage.css('width'));
    var windowWidth = $(window).width();
    var imageHeight = 95/100 * $(window).height();
    var metaWidth = 20/100 * windowWidth;
    var x = computeImageWidth();
    function computeImageWidth() {
        increaseRatio = imageHeight / sourceImageHeight;
        return sourceImageWidth * increaseRatio;
    }
    var title = $sourceImage.data('title');
    var method = $sourceImage.data('method');
    return {
        metaWidth : metaWidth,
        x : x,
        y : imageHeight,
        totalWidth : metaWidth + x,
        title : title,
        method : method
    }
}

function recomputeModalSize() {
    // on calcule de combien et dépasse modalBox et on retire cette valeur plus 10px
    var overflow = modalBox.totalWidth - maxBox.width;
    var initialWidth = modalBox.x;
    var newWidth = modalBox.x - overflow;

    //on recalcule la hauteur de modalBox en fonction de la nouvelle largeur
    var increaseRatio = newWidth / initialWidth;
    var initialHeight = modalBox.y;
    var newHeight = initialHeight * increaseRatio;

    // on assigne les nouvelles dimensions à l'objet modalBox
    modalBox.x = newWidth;
    modalBox.y = newHeight;
    modalBox.totalWidth = newWidth + modalBox.metaWidth;
    // TODO réassigner la totalWidth
}

function computeModalLeftMargin() {
    var windowWidth = $(window).width();
    var modalWidth = modalBox.totalWidth;
    return (windowWidth - modalWidth) / 2;

}

function computeModalTopMargin() {
    var windowHeight = $(window).height();
    var modalHeight = modalBox.y;
    return (windowHeight - modalHeight) / 2;
}

// arg : String
// out : Number
// takes a dimension in pixels and turns it in a computable number
function toNumber(pixelValue) {
    return Number(pixelValue.replace('px', ''));
}

//arg : Number
// out : Number
// takes a Number and turn it in a browser-valid px dimension
function toPixel(numberValue) {
    return (numberValue.toString() + 'px');
}
