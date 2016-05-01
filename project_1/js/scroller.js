	$(document).ready(function(){
		$(window).scrollTo(0);
		var nav_item = $('.nav a');
		var not = nav_item.eq(0);
		nav_item.not(not).click(function(){
			var target = $(this).attr('goto');
			var pos = $(target).offset().top-55;
			$.scrollTo(pos,2000);
			});
	not.click(function(){
		$.scrollTo(0,2000)
		});
		var about = $('#about').offset().top-60;
		var process = $('#process').offset().top-60;
		var project = $('#project').offset().top-60;
		var contact = $('#contact').offset().top-60;
		$(window).scroll(function(){
			var scroll = $(this).scrollTop();
			var hscroll = -170 +(scroll/2);
			var hiscroll =400 - (scroll*4/5);
			var hwscroll = -(scroll/6);
			$('.about_right img').css('margin-top',hscroll);
			$('.home').css('background-position','80px '+hiscroll+'px');
			$('#home').css('background-position','center '+hwscroll+'px');
			var num = $(this).scrollTop();
			if(num < about){
				nav_item.removeClass('active');
				nav_item.eq(0).addClass('active');
				}
				else if(num >= about && num < process){
				nav_item.removeClass('active');
				nav_item.eq(1).addClass('active');

					}else if(num >= process && num < project){
				nav_item.removeClass('active');
				nav_item.eq(2).addClass('active');
	
						}else if(num >= project && num < contact){
				nav_item.removeClass('active');
				nav_item.eq(3).addClass('active');
							}else{
				nav_item.removeClass('active');
				nav_item.eq(4).addClass('active');
								}
			
			});
			
			
	});
