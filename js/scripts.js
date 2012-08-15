$(function() {
    // @action: add responsive select menu
    $("<select />").appendTo("nav");

    // @action: create default option "Go to..."
    $("<option />", {
        "selected": "selected",
        "value": "",
        "text": "Gehe zu..."
    }).appendTo("nav select");

    // @action: populate dropdown with menu items
    $('#top nav a').each(function() {
        var el = $(this);
        if (el.parents('.children ul').length) {
            $('<option />', {
                'value': el.attr('href'),
                'text': '-- ' + el.text()
            }).appendTo('nav select');
        } else if (el.parents('.children').length) {
            $('<option />', {
                'value': el.attr('href'),
                'text': '- ' + el.text()
            }).appendTo('nav select');
        } else {
            $('<option />', {
                'value': el.attr('href'),
                'text': el.text()
            }).appendTo('nav select');
        }
    });

    // @action: scroll to page anchor and highlight it on option select
    $("nav select").change(function() {
        var $this = $(this);
        $('html, body').stop().animate({
            scrollTop: $($this.find("option:selected").val()).position().top
        }, 400, 'swing', function() {
            $($this.find("option:selected").val()).fadeTo(100, 0.33).delay(100).fadeTo(100, 1);
        });
    });

    // @action: scroll to page anchor and highlight it on click
    $('a[href*=#]').bind('click', function(e) {
        var $this = $(this);
        $('html, body').stop().animate({
            scrollTop: $($this.attr('href')).position().top
        }, 600, 'swing', function() {
            $($this.attr('href')).fadeTo(100, 0.33).delay(100).fadeTo(100, 1);
        });
        e.preventDefault();
    });

    // @action: add link and scroll to top on click
    $("<span class=totop title='Beam me up scotty!'>&and;</span>").appendTo("body").click(function() {
        $('html,body').stop().animate({
            scrollTop: 0
        }, 600, 'swing');
    });

    // @action: hide "to top"-link if not on top
    $(window).scroll(function() {
        if ($(this).scrollTop() !== 0) {
            $('.totop').slideDown(300);
        } else {
            $('.totop').stop().slideUp(300);
        }
    }).scroll();
});