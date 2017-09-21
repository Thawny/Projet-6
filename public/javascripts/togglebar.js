// cache
var $aside = $('aside'),
    $hideWhenSmall = $('#hide-when-small'),
    $toggleWidget = $('#toggle-widget');

// click semaphore
var isClicked = false;
// click handler (odd and even)
$toggleWidget.on('click', function() {

    if (!isClicked) {
        // positionne le toggle-widget à droite et plus au milieu
        var asideWidth = $aside.width(), right = (asideWidth - 40) / 2;
        $toggleWidget.css('margin-left', 'initial')
                     .css('transform', 'none')
                     .css('margin-top', 'initial')
                     .css('position', 'absolute')
                     .css('top', '10px')
                     .css('right', right);
        $toggleWidget.addClass('is-open').removeClass('is-closed');
        $toggleWidget.animate({transform: "rotate(180deg) !important"}, 400);

        $aside.animate({width: "99.5%"}, 400, function(){
            $hideWhenSmall.css('display', 'block');
        })
        isClicked = true;
    } else {
        $hideWhenSmall.css('display', 'none');
        $toggleWidget.addClass('is-closed').removeClass('is-open');
        $aside.animate({width: "13%"}, 400)
        $toggleWidget.animate({transform: "rotate(180deg) !important"}, 400);
        isClicked = false;
    }

})
