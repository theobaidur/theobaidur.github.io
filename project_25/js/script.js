// JavaScript Document

function adjustSlider(){
	$(".slider_display").css("height",$(".slider_display").width()*(360/690));
	}
	
function get_left(a){
	return parseInt(a.css("margin-left"));
	}	

function initSlider(){
	var a = $(".slider_nav");
	var b = $(".slider_nav_holder")
	var c = b.find("a");
	var cn = c.length+1;
	b.width(cn*70);
	var d = a.find(".left_nav");
	var e = a.find(".right_nav");
	var f = $(".slider_display");
	var g = f.find(".left_arrow");
	var h = f.find(".right_arrow");
	var i = f.find("img");
	i.eq(0).show();
	c.eq(0).addClass("active");
	c.click(function(e){
		e.preventDefault();
		var id = $(this).attr("href");
		var index = $(this).index();
		i.fadeOut();
		$(id).fadeIn();
		c.removeClass("active");
		$(this).addClass("active");
		
	});
	
	
	
	d.click(function(){
		var left = (get_left(b)+70)<0?get_left(b)+70:0;
		b.stop().animate({marginLeft:left},500);			
	});
	
	e.click(function(){
		var ll = Math.abs(get_left(b));
		var lm = parseInt(a.outerWidth()-30);
		var ln = ll+lm;
		var lo = parseInt(b.width());
		var left = ll+70;
		if(left+lm>=lo){
			left=ll;	
		}
		b.stop().animate({marginLeft:-left},500);			
	});
	
	g.click(function(){
	b.find(".active").prev("a").click();	
	});
	
	h.click(function(){
	b.find(".active").next("a").click();	
	});

	
	
	}
function adjustMargin(){
	if($(window).width()>1000){
		$(".main-nav").removeAttr("style");
		return;	
	}
	$(".main-nav:not(.main-nav-2)").css("margin-top",$(window).width()*.31);
	$(".main-nav-2").css("margin-top",$(window).width()*.8);
	}

	
function adjustBottom(){
	$("#main_wrapper").css("padding-bottom",$(".foot-main").height()-3);
	}	
	
$(function(){
	$('.noUiSlider').noUiSlider({
		 range: [0,1000]
		,start: [0,1000]
		,connect:true
		,slide:function(){
			var values = $(this).val();
			$('#range_1').text(parseInt(values[0]));
			$('#range_2').text(parseInt(values[1]));
		}
	});
	
	adjustSlider();
	initSlider();
	$(window).resize(function(){
		adjustMargin();
		adjustBottom();
		adjustSlider();	
		});
	adjustMargin();	
	//initSlider();	
	$('#zoom').magnificPopup({ 
		  type: 'image'
			// other options
		});
		
	$(".thumb_con a").click(function(e){
		e.preventDefault();
		var src = $(this).attr("href").split('#')[1];
		$("#printable").attr("src",src);
		$("#zoom, #download").attr("href",src);
		
		});	
	$('.pop_trigger').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
	
	});