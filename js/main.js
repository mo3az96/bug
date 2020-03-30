

$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        $(this).remove();
    });
});
$(document).ready(function () {
    $(".inputfile").change(function () {
        var file = $('.inputfile')[0].files[0]
        if (file) {
            $(".file-msg").html(file.name)
        }
    });
    /////////projects Slider/////////
    $('.projects-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
    });
    /////////blogs Slider/////////
    $('.blogs-slider').owlCarousel({
        items: 3,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            },
        }
    });
    /////////parts Slider/////////
    $('.parts-slider').owlCarousel({
        items: 5,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        responsive: {
            0: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            },
            1200: {
                items: 5
            }
        }
    });
    if ($(window).width() > 991) {
        var scene = $('#scene').get(0);
        var parallaxInstance = new Parallax(scene);
        $(".mobile-nav").remove();
    } else {
        $(".sec-header").remove();
    }

    $('.menubtn').click(function () {
        $(".mobile-nav").fadeIn(400)
        $(".mobile-nav nav").addClass("open");
        $("body").addClass("overflow");
    });
    $('.mobile-nav').click(function () {
        $(".mobile-nav").fadeOut(400)
        $(".mobile-nav nav").removeClass("open");
        $("body").removeClass("overflow");
    });
    $('.mobile-nav nav').click(function (e) {
        e.stopPropagation();
    });
    $('.menubtn.open').click(function (e) {
        $(".mobile-nav").fadeOut(400)
        $(".mobile-nav nav").removeClass("open");
        $("body").removeClass("overflow");
    });

});