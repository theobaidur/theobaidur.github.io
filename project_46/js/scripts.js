$(document).ready(function () {

    "use strict";
    
    /** Detects ipad **/
   if(navigator.userAgent.match(/iPad/i) != null){
   		$("body").addClass("device-ipad");
   }

    /************** Navigation Scripts **************/

    // Give the logo the same padding as the menu links

    $('.nav-main .logo').css('margin-top', $('.nav-main li a').css('padding-top'));


    // Place the sub-nav items appropriately to the top and left of their current item

    $('.subnav').each(function () {
        var subNavOffsetTop = $('.nav-main').height() - 8;
        $(this).css('top', subNavOffsetTop);
    });

    $('.subnav-fullwidth').each(function () {
        $(this).css('width', $('.row').width());
        var subNavOffset = -($('.nav-main .row').innerWidth() - $('.nav-main .medium-9').innerWidth());
        $(this).css('left', subNavOffset);
    });

    /************** Header Scripts **************/

    $('header').each(function () {
        if ($(this).children('.header-background').length) {

            // Append the header background <img> tag as a CSS background for better responsive performance

            var imgSrc = jQuery(this).children('.header-background').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.header-background').remove();
        }

        // Center the header title inside the <header>

        var paddingMiddle = (($(this).height() - $(this).children('.row').height()) / 2);
        $(this).children('.row').css('padding-top', paddingMiddle);

    });


    // Maintain nav consistency while window is being resized

    $(window).resize(function () {

        $('.nav-main .logo').css('margin-top', $('.nav-main li a').css('padding-top'));

        $('.subnav').each(function () {
            var subNavOffsetTop = $('.nav-main').height() - 8;
            $(this).css('top', subNavOffsetTop);
        });

        $('.subnav-fullwidth').each(function () {
            $(this).css('width', $('.row').width());
            var subNavOffset = -($('.nav-main .row').innerWidth() - $('.nav-main .medium-9').innerWidth());
            $(this).css('left', subNavOffset);
        });
    });

    // Handle Mobile Toggle Click

    $('.mobile-toggle').click(function () {
        $('nav').toggleClass('open-nav');
    });

    /************** Slider Scripts **************/

    // Adjust slide height for .slider-fullscreen sliders

    $('.slider-fullscreen .slides li').each(function () {
        $(this).css('height', $(window).height());
    });

    // Initialize sliders using Flexslider


    jQuery('.hero-slider').flexslider({
        controlNav: true, 
        directionNav: true,
        animationSpeed: 800,
        slideshowSpeed: 5500,
        useCSS: false,
        start: function () {

            $('.animate-slide').each(function () {
                if ($(this).closest('li').hasClass('flex-active-slide')) {
                    $(this).addClass('slide-animated');
                } else {
                    $(this).removeClass('slide-animated');
                }
            });

        },

        after: function () {

            // Determine the color scheme of the current slide and change the nav color scheme appopriately

            $('.flex-active-slide').each(function () {
                if ($(this).hasClass('background-dark')) {
                    $(this).closest('.slider').find('.flex-control-nav').addClass('background-dark');
                    $(this).closest('.slider').find('.flex-direction-nav').addClass('background-dark');
                } else {
                    $(this).closest('.slider').find('.flex-control-nav').removeClass('background-dark');
                    $(this).closest('.slider').find('.flex-direction-nav').removeClass('background-dark');
                }

            });

            $('.animate-slide').each(function () {
                if ($(this).closest('li').hasClass('flex-active-slide')) {
                    $(this).addClass('slide-animated');
                } else {
                    $(this).removeClass('slide-animated');
                }
            });

        }

    });

    // Space the hero slide content in the middle of the slide

    $('.hero-slider .slides li').each(function () {

        // Append slider-background <img>'s as li item CSS background for better responsive performance

        if ($(this).children('.slider-background').length) {
            var imgSrc = jQuery(this).children('.slider-background').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.slider-background').remove();
            $(this).css('background-position', '50% 0%');
            // Check if the slider has a color scheme attached, if so, apply it to the slider nav

        }


    });

    // Append the .slider-background <img> tags as css backgrounds for improved multi-device performance

    $('.hero-slider .slides li').each(function () {

        var paddingMiddle = (($(this).height() - $(this).children('.row').height()) / 2);
        $(this).children('.row').css('padding-top', paddingMiddle);

    });

    // Make sure video background slides are the same height as the slide itself

    $('.hero-slider .slides li').each(function () {

        if ($(this).children('.video-background').length) {
            $(this).children('.video-background').css('height', $(this).height());
            var topPadding = (Math.round($(this).height() / 2)) - (Math.round($(this).children('.video-background .row').height() / 2));
            $(this).children('.video-background .row').css('padding-top', topPadding);
        }

    });

    // Testimonials Slider Script

    $('.testimonials-slider').flexslider({
        controlNav: false
    });

    $('.blog-post-slider').flexslider({
        controlNav: false,
        after: function () {

            // Determine the color scheme of the current slide and change the nav color scheme appopriately

            $('.flex-active-slide').each(function () {
                if ($(this).hasClass('background-dark')) {
                    $(this).closest('.slider').find('.flex-control-nav').addClass('background-dark');
                    $(this).closest('.slider').find('.flex-direction-nav').addClass('background-dark');
                } else {
                    $(this).closest('.slider').find('.flex-control-nav').removeClass('background-dark');
                    $(this).closest('.slider').find('.flex-direction-nav').removeClass('background-dark');
                }

            });
        }
    });

    // Image Slideshow Scripts

    $('.image-slideshow').flexslider({
        controlNav: false,
        directionNav: false,
        slideshowSpeed: 0
    });


    /************** Divider Scripts **************/

    // Append divider background <img> tags as CSS background properties to improve responsive performance

    $('.hero-divider').each(function () {

        if ($('.hero-divider').children('.divider-background').length) {
            var imgSrc = jQuery(this).children('.divider-background').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.divider-background').remove();
        }

        if (!$(this).children('.overlay').length) {
            $(this).addClass('no-overlay');
        } else {
            $(this).addClass('has-overlay');
        }

    });


    /************** Parallax Scripts **************/

    $('.background-parallax').each(function () {
        //$('body').prop('id', 'skrollr-body') 
        var top = Math.round($(this).offset().top);
        var height = Math.round($(this).outerHeight());
        var windowHeight = $(window).height();
        $(this).attr('data-' + top + '-start', 'background-position: 50% 0%');
        $(this).attr('data--' + (1 * top + height) + '-start', 'background-position: 50% 120%');
        $(this).attr('data-' + (1 * top + windowHeight) + '-start', 'background-position: 50% -70%');
    });

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        skrollr.init({
            forceHeight: false
        });
    }

    /************** Work (Portfolio) Scripts **************/

    // Pad the hover state so it sits vertically in the middle of the element

    $('.work-item').each(function () {

        var topPadding = (Math.round($(this).children('img').height() / 2)) - (Math.round($(this).children('.hover-state').children('div').height() / 2));
        $(this).children('.hover-state').children('div').css('padding-top', topPadding);

    });

    // and do this on window resize too

    $(window).resize(function () {

        $('.work-item').each(function () {

            var topPadding = (Math.round($(this).children('img').height() / 2)) - (Math.round($(this).children('.hover-state').children('div').height() / 2));
            $(this).children('.hover-state').children('div').css('padding-top', topPadding);

        });

    });

    /************** Blog Scripts **************/

    $('.blog-post-slider li').each(function () {
        if ($(this).children('img').length) {
            var imgSrc = jQuery(this).children('img').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('img').remove();
        }
    });

    /************** Cover Boxes **************/

    // Add active class to reveal cover box contents

    $('.cover-boxes li').mouseenter(function () {
        $(this).parent('.cover-boxes').children('li').removeClass('active');
        $(this).addClass('active');
    });

    // Set max width and height of cover box images in px to adjust to screen sizes

    $('.cover-boxes li img').each(function () {

        if (!$(this).parent('.cover-boxes li').hasClass('active')) {
            var heightWidth = $(this).parent('.cover-boxes li').width();
            var heightWidthFull = $(this).parent('.cover-boxes li').innerWidth();
            $(this).css('width', heightWidth);
            $(this).css('height', heightWidth);
            $(this).css('min-width', heightWidth);
            $(this).css('min-height', heightWidth);

            $(this).parent('.cover-boxes li').siblings('.active').children('li img').css('max-width', heightWidth);
            $(this).parent('.cover-boxes li').siblings('.active').children('li img').css('max-height', heightWidth);
            $(this).parent('.cover-boxes li').siblings('.active').children('li img').css('min-width', heightWidth);
            $(this).parent('.cover-boxes li').siblings('.active').children('li img').css('min-height', heightWidth);

            $(this).siblings('.box-content').css('min-width', heightWidthFull);
            $(this).parent('.cover-boxes li').siblings('.active').children('li .box-content').css('min-width', heightWidthFull);
        }
    });

    // Maintain cover box images on window resize

    $(window).resize(function () {

        $('.cover-boxes li img').each(function () {

            if (!$(this).parent('.cover-boxes li').hasClass('active')) {
                var heightWidth = $(this).parent('.cover-boxes li').width();
                var heightWidthFull = $(this).parent('.cover-boxes li').innerWidth();
                $(this).css('width', heightWidth);
                $(this).css('height', heightWidth);
                $(this).css('min-width', heightWidth);
                $(this).css('min-height', heightWidth);

                $(this).parent('.cover-boxes li').siblings('.active').children('li img').css('max-width', heightWidth);
                $(this).parent('.cover-boxes li').siblings('.active').children('li img').css('max-height', heightWidth);
                $(this).parent('.cover-boxes li').siblings('.active').children('li img').css('min-width', heightWidth);
                $(this).parent('.cover-boxes li').siblings('.active').children('li img').css('min-height', heightWidth);

                $(this).siblings('.box-content').css('min-width', heightWidthFull);
                $(this).parent('.cover-boxes li').siblings('.active').children('li .box-content').css('min-width', heightWidthFull);
            }
        });

    });




    /************** Video Scripts **************/

    // Initialize videoBG plugin
    $('.video-background').each(function () {
        $(this).videoBG({
            mp4: 'video/' + $(this).attr('data-file-name') + '.mp4',
            ogv: 'video/' + $(this).attr('data-file-name') + '.ogv',
            webm: 'video/' + $(this).attr('data-file-name') + '.webm',
            poster: 'video/' + $(this).attr('data-poster-name') + '.jpg',
            scale: true,
            zIndex: 0
        });
    });

    // Center the content of video background divs to lie in the center (vertically)

    $('.video-background').each(function () {
        var topPadding = (Math.round($(this).height() / 2)) - (Math.round($(this).children('.row').height() / 2));
        $(this).children('.row').css('padding-top', topPadding);

    });

    /************** Scrolling Animations **************/

    if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        $('.fade-in-scroll, .fade-up-scroll, .fade-right-scroll, .fade-left-scroll').each(function () {
            if ($(this).offset().top > $(window).height()) {
                $(this).addClass('fade animated');
            } else {
                $(this).addClass('show');
            }
        });
    }

    $(window).scroll(function () {
        $('.fade-in-scroll:in-viewport').addClass('show fadeIn');
        $('.fade-up-scroll:in-viewport').addClass('show fadeInUp');
        $('.fade-right-scroll:in-viewport').addClass('show fadeInRightBig');
        $('.fade-up-scroll:in-viewport').addClass('show fadeInLeftBig');
    });

    /************** Google Map **************/

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 14,
            mapTypeControl: false,
            scrollwheel: false,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(-37.8328524, 144.9578229),

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{
                "featureType": "landscape",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 65
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "poi",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 51
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.highway",
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "road.arterial",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 30
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "road.local",
                "stylers": [{
                    "saturation": -100
                }, {
                    "lightness": 40
                }, {
                    "visibility": "on"
                }]
            }, {
                "featureType": "transit",
                "stylers": [{
                    "saturation": -100
                }, {
                    "visibility": "simplified"
                }]
            }, {
                "featureType": "administrative.province",
                "stylers": [{
                    "visibility": "off"
                }]
            }, {
                "featureType": "water",
                "elementType": "labels",
                "stylers": [{
                    "visibility": "on"
                }, {
                    "lightness": -25
                }, {
                    "saturation": -100
                }]
            }, {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "hue": "#ffff00"
                }, {
                    "lightness": -25
                }, {
                    "saturation": -97
                }]
            }]
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using out element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(-37.8328524, 144.9578229),
            map: map,
            title: 'Hello World!'
        });
    }

    // Only initialize the map if it actually exists on the page

    if ($('#map').length) {
        // When the window has finished loading create our google map below
        google.maps.event.addDomListener(window, 'load', init);
    }

});

$(window).load(function () {

    // Remove the loader

    $('.loader').addClass('show-content');


    // Check Hero Divider background color for light or dark

    $("video").prop('muted', true); //mute the videos

    // Determine the background scheme of the first slides and adjust the slider nav color scheme accordingly

    $('.flex-active-slide').each(function () {
        if ($(this).hasClass('background-dark')) {
            $(this).closest('.slider').find('.flex-control-nav').addClass('background-dark');
            $(this).closest('.slider').find('.flex-direction-nav').addClass('background-dark');
        } else {
            $(this).closest('.slider').find('.flex-control-nav').removeClass('background-dark');
            $(this).closest('.slider').find('.flex-direction-nav').removeClass('background-dark');
        }
    });

    /************** Isotope Scripts **************/

    $('.blog-masonry-container').isotope({
        itemSelector: '.masonry-blog-item',
        layoutMode: 'masonry'
    });

    $('.work-masonry-container').isotope({
        itemSelector: '.work-masonry-item',
        layoutMode: 'masonry'
    });

    $('.work-filters li a').click(function () {
        event.preventDefault();
        var selector = $(this).attr('data-filter');
        var container = $(this).closest('.work-instance-wrapper').children('.work-masonry-container');
        container.isotope({
            filter: selector
        });
        $(this).closest('.work-filters').children('li').removeClass('active');
        $(this).parent('li').addClass('active');

    });


    /************** Action Blocks **************/

    // Set action block divider <img> tags as backgrounds if they exist

    $('.action-block').each(function () {
        if ($(this).children('.divider-background').length) {
            var imgSrc = jQuery(this).children('.divider-background').attr('src');
            jQuery(this).css('background', 'url("' + imgSrc + '")');
            jQuery(this).children('.divider-background').remove();
        }
    });

    // Ensure that all action blocks have the same height when stacked horizontally

    $('.action-blocks').each(function () {

        var tallestBlock = 0;

        $(this).find('.action-block').each(function () {
            if ($(this).outerHeight() > tallestBlock) {
                tallestBlock = $(this).outerHeight();
            }

        }).css('min-height', tallestBlock + 'px').each(function () {
            padVertical(this);
        });

    });

    // And do this on window resize

    $(window).resize(function () {

        $('.action-blocks').each(function () {

            var tallestBlock = 0;

            $(this).find('.action-block').each(function () {
                if ($(this).outerHeight() > tallestBlock) {
                    tallestBlock = $(this).outerHeight();
                }

            }).css('min-height', tallestBlock + 'px').each(function () {
                padVertical(this);
            });

        });

    });

    /************** Find all elements on the page with backgrounds ************/

    $('*').filter(function () {
        if (this.currentStyle)
            return this.currentStyle['backgroundImage'] !== 'none';
        else if (window.getComputedStyle)
            return document.defaultView.getComputedStyle(this, null)
                .getPropertyValue('background-image') !== 'none';
    }).addClass('bg_found');


    /************** Style Switcher **************/

    // Add the switcher to the page

    $('body').append('<div class="style-switcher"> <div class="toggle"> <i class="icon icon-gears"></i> </div> <div class="select-holder"><h6 class="text-white">Nav Type:</h6><select id="nav-selector"><option value="transparent">Transparent</option><option value="top-light">Top Bar</option></select> </div> </div>');

    $('.style-switcher #nav-selector').change(function () {
        var navType = 'nav-' + $(this).val();
        $('nav').removeClass();
        $('nav').addClass('nav-main');
        $('nav').addClass(navType);
    });

    $('.style-switcher #style-selector').change(function () {

        var imgPrefix = $(this).val();
        var style = 'style-' + $(this).val();
        $('body').removeClass();
        $('body').addClass(style);

        $('.bg_found').each(function () {
            var bg = $(this).css('background-image');
            bg = bg.replace('agency', imgPrefix).replace('classic', imgPrefix).replace('corporate', imgPrefix);
            console.log(bg);
            if (!$(this).hasClass('logo')) {
                $(this).css('background-image', bg);
            }
        });

    });

    $('.style-switcher .toggle').click(function () {
        $('.style-switcher').toggleClass('show-switcher');
    });

    $('#skrollr-body').click(function () {
        $('.style-switcher').removeClass('show-switcher');
    });

});

function padVertical(element) {
    var contentHeight = $(element).find('.row').height() / 2;
    var containerHeight = $(element).height() / 2;
    var padding = Math.round(containerHeight) - Math.round(contentHeight);
    $(element).find('.row').css('padding-top', padding);
}