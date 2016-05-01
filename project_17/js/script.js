// JavaScript Document
$(function(){
	var win = $(window);
	var a = $(".main_navigation");
	var b = a.find(".menu_title");
	var c = 0;
	b.click(function(e){
	if(win.width()>979){
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
		if(win.width()>979){
		a.find("ul").attr("style","");	
		}	
	});
		$(".resp-tabs-container > div").mCustomScrollbar({scrollButtons:{enable:true},theme:"dark-thin"});
	 $('#horizontalTab').easyResponsiveTabs({
            type: 'default', //Types: default, vertical, accordion           
            width: 'auto', //auto or any width like 600px
            fit: true   // 100% fit in a container
        });
	
	
        $('.screenshots').magnificPopup({
          delegate: 'a',
          type: 'image',
          closeOnContentClick: false,
          closeBtnInside: false,
          mainClass: 'mfp-with-zoom mfp-img-mobile',
          image: {
            verticalFit: true,
            titleSrc: function(item) {
              return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
            }
          },
          gallery: {
            enabled: true
          },
          zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
              return element.find('img');
            }
          }
          
        });
    
	
	});