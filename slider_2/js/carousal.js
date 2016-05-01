$(function(){
	var wrapper =$('.carousal_wrapper');
	var con =$('.carousal_container');
	var a = $('.carousal_layer');
	var b = $('.carousal_left');
	var c = $('.carousal_right');
	
	var i = 0;
	for(var j = a.length; j>=0; j--){
		a.eq(i).css("z-index",j);
		i++;
		}
	var k = 0;
	var handler_1;
	var x=1;
	var left_1;
	var left_2;
	var left_3;
	var left_4;
	adjustValue();
	function adjustValue(){
		var wrap_width = wrapper.width();
		var con_width = con.width();
		var res = parseInt((con_width)/2);
		left_1 = res - (500+3);
		left_2 = res + 3;
		left_3 = parseInt(con_width-500);
		left_4 = 0;
		a.css('left',left_4);
		}
	$(window).load(function(){
		a.eq(0).find('.carousal_left').animate({left:left_1},1500,"jswing",function(){x=1});
		a.eq(0).find('.carousal_right').animate({left:left_2},1500,"jswing",function(){x=1});
		handler_1 = setInterval(slide_next,6000);
		}).resize(function(){adjustValue();clearInterval(handler_1);k=0;handler_1 = setInterval(slide_next,6000);});
		
	$('.carousal_nav_prev').click(function(){
			if(x==1){
			clearInterval(handler_1);
			slide_prev();
			handler_1 = setInterval(slide_next,6000);
			}
			});
			
		$('.carousal_nav_next').click(function(){
			if(x==1){
			clearInterval(handler_1);
			slide_next();
			handler_1 = setInterval(slide_next,6000);
			}
			});

	function slide_next(){
		x=0;
		a.eq(k).find('.carousal_left').animate({left:left_3},1500,"jswing",function(){$(this).css("left",0);x=1});
		a.eq(k).find('.carousal_right').animate({left:left_3},1500,"jswing",function(){$(this).css("left",0);x=1});
		k++;
		if(k==a.length){
			k=0;
			}
		a.eq(k).find('.carousal_left').css('left',0);
		a.eq(k).find('.carousal_right').css('left',0);
		a.eq(k).find('.carousal_left').animate({left:left_1},1500,"jswing");
		a.eq(k).find('.carousal_right').animate({left:left_2},1500,"jswing");
		}
	
	function slide_prev(){
		x=0;
		a.eq(k).find('.carousal_left').animate({left:0},1500,"jswing",function(){$(this).css("left",left_3);x=1});
		a.eq(k).find('.carousal_right').animate({left:0},1500,"jswing",function(){$(this).css("left",left_3);x=1});
		k--;
		if(k<0){
			k=a.length-1;
			}
		a.eq(k).find('.carousal_left').css('left',left_3);
		a.eq(k).find('.carousal_right').css('left',left_3);
		a.eq(k).find('.carousal_left').animate({left:left_1},1500,"jswing");
		a.eq(k).find('.carousal_right').animate({left:left_2},1500,"jswing");
		}
	
	});
