$(function(){
	rollovereffect();
		 function rollovereffect(){
			 var view = $('.view');
			 view.mouseenter(function(){
			var mask = $(this).find('.mask');
			 var h2 = mask.find('h2');
			 var p =  mask.find('p');
			  var a = mask.find('a');
				mask.slideDown(200,function(){
					h2.slideDown(200,function(){
						p.slideDown(200,function(){
							a.css( 'visibility','visible');
							});
						});
					}); 
				 });
				 view.mouseleave(function(){
			 var mask = $(this).find('.mask');
			 var h2 = mask.find('h2');
			 var p =  mask.find('p');
			  var a = mask.find('a');
			  a.css('visibility','hidden');
			  p.slideUp(200,function(){
				  h2.slideUp(200,function(){
					   mask.slideUp(200);
					  });
				  });
			 });
		}
		var mask = $('.view');
		mask.click(function(){
			var id ='.' + $(this).attr('id');
			$('.project_preview_body').hide();
			$(id).show();
			var current = $(this);
			mask.not(current).removeClass('blue');
			current.addClass('blue');
			var This = $(this).closest('.pc_row_warp').next();
			$('.warp_project_preview').not(This).slideUp();
			$(this).closest('.pc_row_warp').next().slideDown(function(){
				var mypos = $(this).position().top;
				$.scrollTo((mypos - 300),500)
				});
			var arrow = $(this).closest('.pc_row_warp').next().find('.arrow_con_2').find('img');
			if($(this).closest('.first').length==1){
				arrow.animate({marginLeft:100});
				}else if($(this).closest('.second').length==1){
				arrow.animate({marginLeft:320});
				}else if($(this).closest('.third').length==1){
				arrow.animate({marginLeft:540});
				}else if($(this).closest('.forth').length==1){
				arrow.animate({marginLeft:750});
				}
			return false;
			});
	$('.close').click(function(){
		$(this).closest('.warp_project_preview').slideUp();
		mask.removeClass('blue');

		});
	});