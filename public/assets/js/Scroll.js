$(function() {
    $(window).on('scroll', function() {
        //Header Scroll
        if ($(this).scrollTop() > 50) {
            $('header').addClass('scrolled');
        } else {
            $('header').removeClass('scrolled');
        }
        var windowHeight = $(window).height();
        var scrollDistance = $(window).scrollTop();

        $('.advantage').each(function() {
            var elementTop = $(this).offset().top;
            console.log(elementTop);

            if (scrollDistance + windowHeight - 300 >= elementTop) {
                $(this).addClass('show');
            } else {
                $(this).removeClass('show');
            }
        });
    });
});
