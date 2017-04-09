$(document).ready(function() {
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
});

$(document).ready(function() {
    // Add return on top button
    $('body').append('<div id="returnOnTop" title="Retour en haut">&nbsp;</div>');

    // On button click, let's scroll up to top
    $('#returnOnTop').click(function() {
        $('html,body').animate({
            scrollTop: 0
        }, 'slow');
    });
});

$(window).scroll(function() {
    // If on top fade the bouton out, else fade it in
    if ($(window).scrollTop() == 0)
        $('#returnOnTop').fadeOut();
    else
        $('#returnOnTop').fadeIn();
});
