/**
 * This gist demonstrates how to properly load jQuery within the context of WordPress-targeted JavaScript so that you don't
 * have to worry about using things such as `noConflict` or creating your own reference to the jQuery function.
 *
 * @version 1.0
 */
(function( $ ) {
    "use strict";
  
    $(function() {
        //smoothscrolling
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top + 1)
            }, 1250, 'easeInOutExpo');
            event.preventDefault();
        });
       //adjust height of .fullheight elements on window resize
        var wheight = $(window).height(); //get the height of the window
        $('.fullheight').css('height', wheight); //set to window tallness
        $(window).resize(function() {
            wheight = $(window).height(); //get the height of the window
            $('.fullheight').css('height', wheight); //set to window tallness
        }); 

        //onscreen
        $('header').onScreen({
            visible: function() {
                $('nav').addClass("hide");
            },
            hidden: function() {
                $('nav').removeClass("hide");
            }
        });

        // Magnific Popup Lightbox
        $('.gallery').each(function() { // the containers for all your galleries
            $(this).magnificPopup({
                delegate: 'a', // the selector for gallery item
                type: 'image',
                gallery: {
                  enabled:true
                }
            });
        });

    });
}(jQuery));

//scrollreveal
window.sr = ScrollReveal({ reset: true });
sr.reveal('h1'); 