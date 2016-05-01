$(function(){
	var nav_item = $('.process_menu_item');
	var arrow = $('.arrow_con img');
	var process = $('.process_body');
	process.scrollTo(0);
	var con = $('.con');
	var handle1;
	var handle2;
	var handle3;
	handle1 = setInterval(slide1,8000);
	nav_item.click(function(){
		if($(this).hasClass('pi1')){
				var mypos = $(this).offset().top;
				$.scrollTo((mypos-60),300,function(){
				arrow.stop();
				arrow.animate({marginLeft:270},800);
				process.scrollTo(con.eq(0),800,function(){
				clearInterval(handle1);
				handle1 = setInterval(slide1,8000);
				clearInterval(handle2);
				clearInterval(handle3);
				});
					});
			}
			else if($(this).hasClass('pi2')){
				var mypos = $(this).offset().top;
				$.scrollTo((mypos-60),300,function(){
				arrow.stop();
				arrow.animate({marginLeft:420},800);
				process.scrollTo(con.eq(1),800,function(){
				handle2 = setInterval(slide2,8000);
				clearInterval(handle1);
				clearInterval(handle3);
				});
					});
			}
			else if($(this).hasClass('pi3')){
			var mypos = $(this).offset().top;
			$.scrollTo((mypos-60),300,function(){
			arrow.stop();
			arrow.animate({marginLeft:570},800);
			process.scrollTo(con.eq(2),800,function(){
				handle3 = setInterval(slide3,8000);
				clearInterval(handle2);
				clearInterval(handle1);
				});});
			}		
		});
		var a = $('.gallery_con');
		a.scrollTo(0);
		var b = a.eq(0);
		var c = a.eq(1);
		var d = a.eq(2);
		var e = b.find('img');
		var f = c.find('img');
		var g = d.find('img');
		var k = 0;
		var m = 0;
		var n = 0;
		function slide1(){
			var Pos1 = k*350;
			$('.gallery1').scrollTo(Pos1,1000);
			$('.gallery1').next().find('a').removeClass('active');
			$('.gallery1').next().find('a').eq(k).addClass('active');
			k++;
			if(k==e.length){
				k=0;
				}			
			}
		$('.gallery1').next().find('a').click(function(){
			clearInterval(handle1);
			k = $(this).index();
			slide1();
			handle1 = setInterval(slide1,8000);
			});
		function slide2(){
			var Pos2 = m*350;
			$('.gallery2').scrollTo(Pos2,1000);
			$('.gallery2').next().find('a').removeClass('active');
			$('.gallery2').next().find('a').eq(m).addClass('active');
			m++;
			if(m==f.length){
				m=0;
				}			
			}
		$('.gallery2').next().find('a').click(function(){
			clearInterval(handle2);
			m = $(this).index();
			slide2();
			handle2 = setInterval(slide2,8000);
			});
		function slide3(){
			var Pos3 = n*350;
			$('.gallery3').scrollTo(Pos3,1000);
			$('.gallery3').next().find('a').removeClass('active');
			$('.gallery3').next().find('a').eq(n).addClass('active');
			n++;
			if(n==g.length){
				n=0;
				}			
			}
		$('.gallery3').next().find('a').click(function(){
			clearInterval(handle3);
			n = $(this).index();
			slide3();
			handle3 = setInterval(slide3,8000);
			});
	var menu = $('.process_menu_item');
	menu.click(function(){
		menu.find('p').removeClass('blue');
		$(this).find('p').addClass('blue');
		});
	});