function initPopup(){
	$("#open_popup").click(function(e){
			var a = $(window).height();
			var b = $(".wizard_popup_wrapper");
			b.height(a).show();
			$('html, body').animate({ scrollTop:0});
			initQuiz();

			b.add(".close_btn").click(function(e){
				if( e.target !== this ) 
       			return;
				b.hide();	
			});	
			
	});
}

function initQuiz(){
	var ans = [];
	var str = '';
	var i = 0;
	$('li').show();
	$('input').prop('checked', false);
	$('li').each(function(index) {
        var This = $(this);
		$(this).find('input').click(function(){
			This.hide();
			ans[i++] = $(this).attr('value');
			str +="You answer <b>"+$(this).attr('value')+"</b> for question "+(index+1)+"<br/>";
			$(".result").html(str);
			if(i==$('li').length){
				$('.final').html(str);
				$('.close_btn').click();
			}
		});
    });
	}

$(function(){
	initPopup();
	});	