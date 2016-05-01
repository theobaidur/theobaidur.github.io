function PlaceholderFix(){
if(!('placeholder'in document.createElement("input"))){
$('[placeholder]').focus(function() {
  var input = $(this);
  if (input.val() == input.attr('placeholder')) {
    input.val('');
    input.removeClass('placeholder');
  }
}).blur(function() {
  var input = $(this);
  if (input.val() == '' || input.val() == input.attr('placeholder')) {
    input.addClass('placeholder');
    input.val(input.attr('placeholder'));
  }
}).blur();
	
}	
}		


function adjust_service(){
	var a = $(".service_row");
	var b = parseInt(a.width()/222);	
	var c;
	if(b<2){
		c=1;
		}else if(b>=2 && b<4){
		c=2;
		}else{
		c=4;	
		}
		
	var margin = Math.floor((a.width()-(c*222))/(2*c))-1;
	if(margin<0){
	margin=0;
	}
		
	a.find(".box").css({"margin":"5px "+margin+"px"});	
}

function adjust_banner(){
	var a = $(".banner_img");
	var b = a.width();
	var d = $(".banner_wrapper").width();
	a.find("img").width(d-26);
	a.height(b*(272/958));
	
}

function slide(){
	var a = $(".banner_img img");
	a.hide();
	a.eq(0).show();
	var i = 0;
	setInterval(function(){
	a.eq((i++)%a.length).fadeOut();
	a.eq(i%a.length).fadeIn();	
	},2000);
	}
$(function(){
	slide();
	adjust_banner();
	PlaceholderFix();
	adjust_service();
	var win = $(window);
	var a = $(".nav_wrapper");
	var b = a.find(".menu_title");
	var c = 0;
	b.click(function(e){
	if(win.width()>650){
		return;
	}	
		e.preventDefault();
		a.find("ul").eq(0).slideToggle();
			
	return false;		
	});
	
	a.find("li:has(ul)")
	.each(function() {
		var txt = "&nbsp;&nbsp;<img src=\"images/down_arrow.png\"/>";
		$(this).find("a").eq(0).append(txt);
    })
	 .click(function(e){
	 		if($(this).context.childNodes[0]==e.target){			
			e.preventDefault();
			$(this).find("ul").slideToggle();
			}		
	 });
	
	
	win.resize(function(){
		adjust_service();
		adjust_banner();
		if(win.width()>650){
		a.find("ul").attr("style","");	
		}	
	});
	
});