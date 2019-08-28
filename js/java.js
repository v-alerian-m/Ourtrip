/* Modernizr 2.8.3 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-audio-video-svg-shiv-cssclasses-load
 */


  $(function() {
    $(window).on("scroll", function() {
      console.log($(window).scrollTop())
        if($(window).scrollTop() > 50) {

            $("header").addClass("active");
            $(".fa-bars").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("active");
        }
    });
});