window.scrollwatch = 1;
$(function() {
  $(window).scroll(function(e) {
    var $window = $(window);
    var $elem = $("#bio-sec");
    var $elem2 = $("#project-sec");

    // scrolling down
    if (window.scrollwatch) {

      // get bottom of window with scroll
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      // get bottom of element with scroll
      var elemTop = $elem.offset().top;
      var elemBottom = elemTop + $elem.height();
      // select elements
    //   if (docViewBottom >= elemBottom) {
    //     // console.debug();
    //     var top = $window.height() - $elem.height() + "px";
    //     $elem.css({
    //       "position": "fixed",
    //       "z-index": -1,
    //       "top": top
    //     })
    //     $("#project-sec").css({
    //       "margin-top": docViewBottom
    //     })
    //     window.scrollwatch = 0;
    //   }

    }
    // scrolling up
    else {

      // get bottom of window with scroll
      var docViewTop = $window.scrollTop();
      var docViewBottom = docViewTop + $window.height();

      // get bottom of element with scroll
      var elemTop = $elem2.offset().top;
      var elemBottom = elemTop + $elem2.height();

      if (elemTop >= docViewBottom) {
        $elem.css({
          "position": "static",
          "z-index": -1,
          "top": top
        })
        $("#project-sec").css({
          "margin-top": 0
        })
        window.scrollwatch = 1;
      }
    }
  });

});