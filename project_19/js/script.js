// JavaScript Document

function adjust_carousel_bottom(){
	var a = $(".carousel_wrapper");
	var b = a.find(".inner");
	var c = a.find(".carousel_elem");
	var w = a.width()*.45;
	var h = w*.675;
	c.css({
		"width":w,
		"height":h
		});
	b.width((w+30)*c.length).height(h);
 
	}

$(function(){
	$("body").removeAttr("id");
	var win = $(window);
	var a = $(".main_navigation");
	var b = a.find(".menu_title");
	var c = 0;
	a.find("li:has('ul')")
	 .mouseenter(function(){
	if(win.width()>950){
	$(this).find("ul").eq(0).stop().slideDown();
	}
			
	})
	 .mouseleave(function(){
	if(win.width()>950){
		$(this).find("ul").eq(0).stop().slideUp();
	}
			
	});
	b.click(function(e){
	if(win.width()>950){
		return;
	}	
			e.preventDefault();
		a.find("ul").eq(0).slideToggle();
			
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
		adjust_carousel_bottom();
		if(win.width()>950){
		a.find("ul").attr("style","");	
		}	
	});
	adjust_carousel_bottom();
	
	
	/*mail chimp function*/
	$(".subscribe_mail").click(function(){
		$(this).find("span").toggleClass("down");
	$(".mailChimp_wrapper").slideToggle();	
	});
	
	
	});