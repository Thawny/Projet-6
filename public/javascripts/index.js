$(function() {
        $('#masonry').masonry({
            itemSelector : '.image-box',
        });

    });
    function modalOn(image) {
        var im = $(image);

        // $('#modal-image').css('margin-left', rightMarginLeft);

        var wiPX = im.css('width');
        var hiPX = im.css('height');
        var hPX = $('#modal-image').css('height');
        console.log('wi: ',wiPX,'hi: ', hiPX,'h: ', hPX);

        var wi = Number(wiPX.replace('px',''));
        var hi = Number(hiPX.replace('px',''));
        var h = Number(hPX.replace('px',''));
        // console.log(wi,hi,h);

        var w = h*wi/hi;
        // console.log(w);

        var wPX = (w.toString() + 'px');
        console.log(wPX);

        var bodyWidthPX = $('body').css('width');
        var bodyWidth = Number(bodyWidthPX.replace('px',''));
        var marginLeft = (bodyWidth - w)/2;
        var marginLeftPX = (marginLeft.toString() + 'px');

        $('#modal-image').css('margin-left', marginLeftPX);
        $('#modal-image').css('width', wPX);
        $("#modal-dark").fadeIn();
        $("#modal").attr("src",im.attr("src")).fadeIn();
        $("#modal-image").fadeIn();

        $("#modal-dark").one("click", function() {
            $("#modal-dark").fadeOut();
            $("#modal-image").fadeOut("slow", function(){
                $('#modal').attr("src","");
            });
        });

    }
