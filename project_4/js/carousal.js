$(function(){
	var a = $(".carousel_imgContainer");
	var b = a.find(".bg");
	var c = a.find(".carousel_img_wrapper");
	var d = $(".carousel_container").find(".text_wrapper");
	var e = $(".carousel_container").find(".nav");
	var j = 1;
	var g = $(".carousel_container").find(".left_arrow");
	var h = $(".carousel_container").find(".right_arrow");
	var k = $(".navigation_wrapper");
	var inner = $("<div>").addClass("carousel_inner");
	var intr ;
	var carousel_data = {
		0:{
			"imgUrl":"img/carousel/carousal_1.jpg",
			"caption":"This is carosuel caption for image 1. Lorem ipsum some demo text for printing. This is carosuel caption. Lorem ipsum some demo text for printing",
			},
		1:{
			"imgUrl":"img/carousel/carousal_2.jpg",
			"caption":"This is carosuel caption for image 2. Lorem ipsum some demo text for printing. This is carosuel caption. Lorem ipsum some demo text for printing",
			},
		2:{
			"imgUrl":"img/carousel/carousal_3.jpg",
			"caption":"This is carosuel caption for image 3. Lorem ipsum some demo text for printing. This is carosuel caption. Lorem ipsum some demo text for printing",
			},
		3:{
			"imgUrl":"img/carousel/carousal_4.jpg",
			"caption":"This is carosuel caption for image 4. Lorem ipsum some demo text for printing. This is carosuel caption. Lorem ipsum some demo text for printing",
			}			
		}
	
	buildCarousal();	
	adjustContainer();
	animate(0)
	intr = setInterval(function(){
		animate(j%4);
		j++;
	},3000);

	e.click(function(e){
		e.preventDefault();
		clearInterval(intr);
		var j = $(this).index();
		animate(--j);
		intr = setInterval(function(){
				animate(j%4);
				j++;
			},3000);		
		});
		
	h.click(function(e){
		e.preventDefault();
		clearInterval(intr);
		j++;
		animate(j%4);
		intr = setInterval(function(){
				animate(j%4);
				j++;
			},3000);		
		});
		
		g.click(function(e){
		e.preventDefault();
		clearInterval(intr);
		j = (j-1)<0?3:(j-1);
		animate(j);
		intr = setInterval(function(){
				animate(j%4);
				j++;
			},3000);		
		});
		
	function buildCarousal(){
		for(i in carousel_data){
		var img = $("<img>").attr("src",carousel_data[i]["imgUrl"]);
		img.appendTo(inner);
		}
		inner.appendTo(c);
		var p = $("<p>").html(carousel_data[0]["caption"]);
		d.html(p);
		}
		
	function animate(index){
		if(index>3){
			index = index%4;
		}
		var p = $("<p>").html(carousel_data[index]["caption"]);
		e.removeClass("active");
		e.eq(index).addClass("active");
		index = -index;
		left = (index*100)+"%";	
		inner.stop();			
		inner.animate({marginLeft:left},1000,function(){
			d.find("p").fadeOut();
			d.html(p);
			d.find("p").fadeIn();	
		});	
	}
			
	$(window).resize(function(){
		adjustContainer();
	});
	
	function adjustContainer(){
		var temp = k;
		k.remove();
		if($(window).width()<=767){
			$(".carousel_text").prepend(temp);
		}else{
			$(".carousel_text").append(temp)
			}
		var width = b.width();
		var height = width*(485/559);
		var margin_hz = width*(22/559);
		var margin_vr = height*(22/485);
		var wrapperWidth = width*(515/559);
		var wrapperHeight = height*(293/485);
		a.height(height);
		c.css({
			"margin-left" :margin_hz+1,
			"margin-top"  :margin_vr-1,		
			"width"  : wrapperWidth+1,
			"height" : wrapperHeight+1,
			});
	}

});
