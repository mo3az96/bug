

$(window).on("load", function () {
    $(".loader").fadeOut(500, function () {
        $('body').css("overflow", "visible");
        $('body').animate({
            scrollTop: 0
        }, 1);
        $(this).remove();
    });

    //map
    var adresse = "";


    var location = [adresse[0], $("#map-cont").attr("lat"), $("#map-cont").attr("long")];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 8,
        overviewMapControl: false,
        styles: [
            { elementType: 'geometry', stylers: [{ color: '#3453a8' }] },
            { elementType: 'labels.text.stroke', stylers: [{ color: '#3453a8' }] },
            { elementType: 'labels.text.fill', stylers: [{ color: '#13206d' }] },
            {
                featureType: 'administrative.locality',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'geometry',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'road',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'road.highway',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'transit',
                elementType: 'geometry',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'transit.station',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'water',
                elementType: 'geometry',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#13206d' }]
            },
            {
                featureType: 'water',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#13206d' }]
            }
        ],
        center: new google.maps.LatLng(31.0409, 31.3785),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: false,
        fullscreenControl: false
    });

    var infowindow = new google.maps.InfoWindow();

    var marker;
    marker = new google.maps.Marker({
        position: new google.maps.LatLng(location[1], location[2]),
        map: map,
        icon: "images/pin.png"
    });

    google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
            infowindow.setContent(location[0]);
            infowindow.open(map, marker);
        }
    })(marker));
});
$(document).ready(function () {
    $('a[data-scroll]').click(function (e) {
        e.preventDefault();
        //Set Offset Distance from top to account for fixed nav
        var offset = 0;
        var target = ('#' + $(this).data('scroll'));
        var $target = $(target);
        //Animate the scroll to, include easing lib if you want more fancypants easings
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - 60
        }, 1000, 'swing');
    });
    $(".get-btn").click(function (e) {
        e.preventDefault();
        $(".arrow").slideDown(200, function () {
            $('.application-form').slideDown("300")
        });
    });
    ////////////////////////////////////////////////////////////////////
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
    /////////work Slider/////////
    $('.work-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
    });
    /////////work Slider/////////
    $('.related-slider').owlCarousel({
        items: 2,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: false,
        dots: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 2,
            },
        }
    });
    /////////blogs Slider/////////
    $('.blogs-slider').owlCarousel({
        items: 3,
        margin: 29,
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
                // stagePadding: 200,
                loop: true,
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
        $('.howdoit .items').addClass("owl-carousel")
        /////////parts Slider/////////
        $('.howdoit .items').owlCarousel({
            items: 1,
            margin: 30,
            rtl: document.dir == 'rtl' ? true : false,
            dots: true,
        });
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

