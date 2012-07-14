;(function ($) {
    $(function() {
        $('a[href*=#]').bind('click',function(e){
            var hash = $(this);
            $('html, body').stop().animate({
                scrollTop: $(hash.attr('href')).position().top - 64 // top bar padding
            }, 600, 'swing', function(){
                $(hash.attr('href')).fadeTo(100, 0.33).delay(100).fadeTo(100, 1);
            });
            e.preventDefault();
        });

        // @action: scroll to top and show link if not on top
        $("<span class=totop title='Beam me up scotty!'>&and;</span>").appendTo("body").click(function () {
            $('html,body').stop().animate({scrollTop:0}, 600, 'swing');
        });
        $(window).scroll(function () {
            if ($(this).scrollTop() !== 0) {
                $('.totop').slideDown(300);
            } else {
                $('.totop').stop().slideUp(300);
            }
        }).scroll();
    });
})(jQuery);