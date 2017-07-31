var $hover = $('.image-box').find('div');
var $imageBox = $('.image-box');

enableHover(true);

function enableHover(state) {
    if (state) {
        $imageBox.hover(function(){
                $(this).find('.forHover').toggleClass('hover');
                $(this).find('.circle').toggleClass('visible');
            },
            function(){
                $(this).find('.forHover').toggleClass('hover');
                $(this).find('.circle').toggleClass('visible');
            }
        );
    } else {
        $imageBox.off('hover');
    }

}


var $plusIcon = $('#plus-icon');
var $form = $('#newCanvasForm');
var $modalDark = $('#modal-dark');
$plusIcon.click(function() {
    // $form.css("visibility", "visible");
    $modalDark.fadeIn();
    $form.css('visibility', 'visible');
    $form.animate({opacity: '1' ,top: '20vh'}, 300);
    $modalDark.click(function() {
        $form.animate({opacity: '0' ,top: '25vh'}, 300);
        $form.css('visibility', 'hidden');
        $modalDark.fadeOut();
    });
});


// $('.trash').hover(
//     function(){
//         // $(this).css('transform', 'scale(2)');
//         $(this).toggleClass('grow');
//     },
//     function(){
//         // $(this).css('transform', 'scale(1)');
//         $(this).toggleClass('grow');
//     }
// )
