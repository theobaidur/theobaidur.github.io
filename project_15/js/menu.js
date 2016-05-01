(function ($, undefined) {

    $.fn.megaMenu = function (options) {

	// parentMenuContainer was added to adjust for a bug that was appearing on fast hovering on and off the menu areas
        var settings = $.extend({
            'menuItem' : '#ahromaMenu li',
            'arrowClass' : 'arrowIndicator',
            '_background' : '#thirdLevelBack',
            'parentMenuContainer' : 'ahromaMenu'
        }, options);

        // cache jquery objects.
        var background$ = $(settings._background),
            topLevel$ = $('.topLevel>li:has(ul)'),
            secondLevel$ = $('.secondLevel>li:has(ul)'),
            thirdLevel$ = $('ul.thirdLevel'),
            secondLevelUl$ = $('ul.secondLevel');

        // set global vars
        var backOpen = false,
            secondLevelTimer,
            thirdLevelTimer,
			menuTimer;

        topLevel$.on('mouseenter', function(event){
            hoverItem$ = $(this);
            dropDown(hoverItem$);
        });

        topLevel$.on('mouseleave', function(event){
            hoverItem$ = $(this);
            pullUp(hoverItem$);
        });

        function dropDown(hoverItem$) {
            if(secondLevelTimer) {
                clearTimeout(secondLevelTimer);
            };
            hoverItem$.addClass('hover');
            hoverItem$.children('ul').slideDown(300, function(event){secondLevelUl$.css('overflow', 'visible');});
        };

        function pullUp(hoverItem$) {
            var timerCallback = function(){
                hoverItem$.children('ul').slideUp(300, function(){
                    hoverItem$.removeClass('hover');
                });
            };
            secondLevelTimer = setTimeout(timerCallback, 375);
        };

        secondLevel$.on('mouseenter', function(event){		//console.log(backOpen);
            if(thirdLevelTimer) {
                clearTimeout(thirdLevelTimer);
            }
            hoverItem$ = $(this);
			menuTimer = setTimeout(function(event){
	            if(!backOpen) {
	                slideOut(hoverItem$);
	            }
				showChildren(hoverItem$);
			}, 125);
        });

        secondLevel$.on('mouseleave', function(event){
            if(menuTimer) {
                clearTimeout(menuTimer);
            }
            hoverItem$ = $(this);
            hideChildren(hoverItem$);
            if(backOpen) {
                slideIn();
            }
        });

        function slideOut(hoverItem$) {
            backOpen = true;
            background$.stop(true, true).show('slide', {direction: 'left'}, 500);
        };

        function slideIn(hoverItem$) {
            var timerCallback = function(){
                background$.stop(true, true).hide('slide', {direction: 'left'}, 60);
                backOpen = false;
            };
            thirdLevelTimer = setTimeout(timerCallback, 100);
        };

        function showChildren(hoverItem$) {
            configTop(hoverItem$);
            hoverItem$.addClass('hover').children('ul').fadeIn('fast');
        };

        function hideChildren(hoverItem$) {
            hoverItem$.removeClass('hover').children('ul').fadeOut('fast');
        };

        function configTop(hoverItem$) {
            var parentTop = hoverItem$.parent().offset().top,
                parentWidth = hoverItem$.parent().width(),
                thisTop = hoverItem$.offset().top,
                topPosition = parentTop - thisTop;

		if(hoverItem$.parent().attr("id")!=settings.parentMenuContainer){
		    hoverItem$.children('ul').css({
			'top' : topPosition,
			'left' : parentWidth
		    });
		}
        };

        $('#ahromaMenu li:has(ul)').append('<span class="hasSubMenu"></span>').find('a').addClass(settings.arrowClass); // adding arrows to items with sub menus
		$('#ahromaMenu .thirdLevel:has(.col)').each(function(){
			$(this).width($(this).find('.col').length*225);
			});	
        // ie7 z-index fix, only runs if ie7 or below.
        if($.browser.msie && $.browser.version < 8) {
            var zIndexNumber = 3000;
            $("#nav, #nav ul, #nav li, #nav div, div").each(function() {
                $(this).css('zIndex', zIndexNumber);
                zIndexNumber -= 10;
            });
        };

    };

} (jQuery));