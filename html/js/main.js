/*global document, $ */
/* Even though we have our script placed at the bottom of the page we should wait until the document is ready i.e.
 ** completely loaded before creating the carousel.  The primary reason? In this case - to ensure our images have loaded.
 */
(function () {
    'use strict';
    $(document).ready(function () {
        
        /*global location, $, console*/

        /* This is where we initialise our carousel */
        $('.carousel').slick({
            displayArrows: true,
            centermode: true,      
        });
    });

    $('.read-more a').click(function (e) {
        e.preventDefault();

        var el = $(e.target),
            para = el.siblings('p');

        if (el.text() === "+") {
            para.slideDown(500, function () {
                el.text('–');
            });
        } else {
            para.slideUp(500, function () {
                el.text('+');
            });
        }
    });
}());