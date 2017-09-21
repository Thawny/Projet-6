(function($,sr){
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

// isLoaded s'assure que masonry.js n'est chargé qu'une seule fois depuis le cdn
var isLoaded = false;
function loadAndInitMasonry() {
    if (!isLoaded) {
        $.getScript("https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js", function(){
            // init masonry container
            $('#masonry').masonry({
                itemSelector : '.image-box',
            })
        })
        isLoaded = true;
    } else {
        $('#masonry').masonry({
            itemSelector : '.image-box',
        })
    }

}

// MAIN FUNCTION
var largeScreen;
var isMasonryActivated = false;
$(document).ready(function(){
    // charger et initialiser masonry si l'écran est large lors du chargement de la page
    largeScreen = $(window).width() > 600;
    if (largeScreen) {
        loadAndInitMasonry();
        isMasonryActivated = true;
    }
    // charger/activer masonry quand l'écran est grand et désactiver masonry quand l'écran est petit
    $(window).smartresize(function(){
      largeScreen = $(window).width() > 600;
      if (largeScreen) {
          loadAndInitMasonry()
          isMasonryActivated = true;
      } else {
          if (isMasonryActivated) {
            $('#masonry').masonry('destroy');
            isMasonryActivated = false;
          }
      }
    });
})
