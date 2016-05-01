// JavaScript Document
$(function(){
	var win = $(window);
	var a = $("#nav");
	var b = a.find(".menu_title");
	var c = 0;
	b.click(function(e){
		console.log(456);
	if(win.width()>767){
		return;
	}	
			e.preventDefault();
		a.find("#cssmenu").eq(0).slideToggle();
			
	return false;		
	});
	
	a.find("li:has(ul)")
	 .click(function(e){
	 		if($(this).context.childNodes[0]==e.target){			
			e.preventDefault();
			$(this).find("ul").slideToggle();
			}		
	 });
	
	
	win.resize(function(){
		if(win.width()>767){
		a.find("#cssmenu").attr("style","");	
		a.find("ul").attr("style","");	
		}	
	});
		$('.slider').fractionSlider({
		'fullWidth': 			false,
		'controls': 			true, 
		'pager': 				true
	});

	});