// JavaScript Document

function adjustHome(){
	var a = $('.logo_con').find('img').height() + $('#home .video_con').height();
	var b = $(window).height()*.9;
	$("#home").css("min-height",a+80);
}

function fontAnimate(){
	var a = $("#top_heading").find("h1");
	var b = a.find("span");
	var c = $(window).width();
	var prop_1, prop_2;
	if(c>1200){
		prop_1 = {
			"font-size":"140px",
			"line-height":"150px"
			}
		
		prop_2 = {
			"font-size":"50px",
			"line-height":"100px"
			}	
	}else if(c<=1200 && c>980){
		prop_1 = {
			"font-size":"140px",
			"line-height":"150px"
			}
		
		prop_2 = {
			"font-size":"50px",
			"line-height":"100px"
			}	
	}else if(c<=979 && c>768){
		prop_1 = {
			"font-size":"80px",
			"line-height":"90px"
			}
		
		prop_2 = {
			"font-size":"35px",
			"line-height":"100px"
			}	
	}else if(c<=767 && c>480){
		prop_1 = {
			"font-size":"80px",
			"line-height":"90px"
			}
		
		prop_2 = {
			"font-size":"35px",
			"line-height":"100px"
			}	
		
	}else if(c<=480){
		prop_1 = {
			"font-size":"50px",
			"line-height":"70px"
			}
		
		prop_2 = {
			"font-size":"25px",
			"line-height":"100px"
			}	
	}
	a.stop().animate(prop_1,1000);
	b.stop().animate(prop_2,1000);
}
function zoomRatio(){
	var a = window.innerWidth;
	var b = window.outerWidth;
}



$(function(){
	adjustHome();
	fontAnimate();
	
	$(window).resize(function(){
	adjustHome();
	fontAnimate();
	zoomRatio();
	});
	
	$(".page_button").click(function(e){
		e.preventDefault();
		var a = $(this).attr("href");
		var top = $(a).offset().top+1;
		$("html,body").stop().animate({scrollTop:top},1000);
		
		});


});