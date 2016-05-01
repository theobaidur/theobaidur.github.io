
$(function(){
	var win = $(window);
	var a = $(".navigation_wrapper");
	var b = a.find("#menu_title");
	var c = 0;
	b.click(function(e){
	if(win.width()>767){
		return;
	}	
		e.preventDefault();
		a.find("ul").eq(0).slideToggle();
			
	return false;		
	});
	
	a.find("li:has(ul)")
	.click(function(e){
			if(win.width()>767){
				return;
			}	
	 		if($(this).context.childNodes[0]==e.target){			
			e.preventDefault();
			$(this).find("ul").slideToggle();
			}		
	 });
	
	function adjustcontent(){
		var a = $(".content");
		var b = $(".sidebar");
		if(win.width()<767){
			a.attr("style","");
			return;
		}		
		if(a.outerHeight()<b.outerHeight()){
			a.css("min-height",b.outerHeight());
		}
		}
	
	adjustcontent();
	win.resize(function(){
		adjustcontent();
		if(win.width()>767){
		a.find("ul").attr("style","");	
		}	
	});
	
});
