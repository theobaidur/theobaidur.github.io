$(function(){
	var a = $('.nav');
	var b = $('.sub-menu');
	var c = $(window).width();
	var d = $(".nav_shader");
	var e = $(".menu > li");
	d.css({"width":c,"min-width":1006});
	var i = 0;
	a.each(function(){
		var i = 0;
		$(this).mouseenter(function(){
		if(i==0){
			i=1;
			d.slideDown(500);
			}
		});
		$(this).mouseleave(function(){
		d.slideUp(500,function(){ i = 0});
		});
		
		});
	e.each(function(){
		var j = 0;
		$(this).mouseenter(function(){
		if(j==0){
			j=1;
			$(this).find('.sub-menu').slideDown(500);
			}
		});
		$(this).mouseleave(function(){
		$(this).find('.sub-menu').slideUp(500,function(){ j = 0});
		});
		});
	});