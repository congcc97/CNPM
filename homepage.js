$(function(){

    // scroll mouse
    $('#navbarSupportedContent ul li:nth-child(1) a').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('body, html').animate({scrollTop: $('#slide').offset().top}, 600);
    });

    $('#navbarSupportedContent ul li:nth-child(2) a').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('body, html').animate({scrollTop: $('#vi-tri').offset().top}, 600);
    });

    $('#navbarSupportedContent ul li:nth-child(3) a').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('body, html').animate({scrollTop: $('#tien-ich').offset().top}, 600);
    });

    $('#navbarSupportedContent ul li:nth-child(4) a').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('body, html').animate({scrollTop: $('#an-ninh').offset().top}, 600);
    });

    $('#navbarSupportedContent ul li:nth-child(5) a').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('body, html').animate({scrollTop: $('#cong-dong').offset().top}, 600);
    });

    $('#navbarSupportedContent ul li:nth-child(6) a').on('click', function(event) {
        event.preventDefault();
        /* Act on the event */
        $('body, html').animate({scrollTop: $('#lien-he').offset().top}, 600);
    });



})
