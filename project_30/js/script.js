function adjustFlugs(){
	var aaa = $(".ev_wrapper .flag_container").width();
   var bbb = $(".ev_wrapper .flag_container .flag").width();
   var ccc = parseInt(aaa/bbb)<1?1:parseInt(aaa/bbb);
   var ddd = (aaa-(bbb*ccc))/(ccc*2);
   $(".ev_wrapper .flag_container .flag").css({
   	"marginLeft":parseInt(ddd),
   	"marginRight":parseInt(ddd)
   });
}
function get_upcomming_events(e){
	e.preventDefault();
	var This = $(this);
	if(!This.hasClass("disabled")){
		This.addClass("disabled");
		var txt = $(this).text();
		This.text("Loading...");
		$.ajax({
			url:"eventsList.php",
			method:"post",
			success:function(data){
				var events = $.parseJSON(data);
				for(i=0;  i<events.length; i++){
					var thumb = '<div class="flag">';
					thumb += '<div class="thumb">';
					thumb += '<img src="'+events[i].thumb+'">';
					thumb += '</div>';
					thumb += '<p>'+events[i].name+'</p>';
					thumb += '<p class="date">'+events[i].date+'</p>';
					thumb += '<a href="'+events[i].url+'">SEE DETAILS</a>';
					thumb += '</div>';
					
					$(thumb).insertBefore(".upcomming_events_btn_row");
							
				}
				
				This.text(txt);
				This.removeClass("disabled");
				adjustFlugs();
				
				
			}
		});
	}
}

function get_past_events(e){
	e.preventDefault();
	var This = $(this);
	if(!This.hasClass("disabled")){
		This.addClass("disabled");
		var txt = $(this).text();
		This.text("Loading...");
		$.ajax({
			url:"eventsList.php",
			method:"post",
			success:function(data){
				var events = $.parseJSON(data);
				for(i=0;  i<events.length; i++){
					var thumb = '<div class="flag">';
					thumb += '<div class="thumb">';
					thumb += '<img src="'+events[i].thumb+'">';
					thumb += '</div>';
					thumb += '<p>'+events[i].name+'</p>';
					thumb += '<p class="date">'+events[i].date+'</p>';
					thumb += '<a href="'+events[i].url+'">SEE DETAILS</a>';
					thumb += '</div>';
					
					$(thumb).insertBefore(".past_events_btn_row");
							
				}
				
				This.text(txt);
				This.removeClass("disabled");
				adjustFlugs();
				
				
			}
		});
	}
}


function menu_convert(selector){
 	 
 	  var mainNavigation = $(selector).clone();

      /* Replace unordered list with a "select" element to be populated with options, and create a variable to select our new empty option menu */
      $(selector).append($('<select>').addClass('select-menu'));
      var selectMenu = $(selector +'> select.select-menu');

      /* Navigate our nav clone for information needed to populate options */
      $(mainNavigation).children('ul.nav').children('li').each(function() {

         /* Get top-level link and text */
         var href = $(this).children('a').attr('href');
         var text = $(this).children('a').text();

         /* Append this option to our "select" */
         $(selectMenu).append('<option value="'+href+'">'+text+'</option>');

         /* Check for "children" and navigate for more options if they exist */
         if ($(this).children('ul').length > 0) {
            $(this).children('ul').children('li').each(function() {

               /* Get child-level link and text */
               var href2 = $(this).children('a').attr('href');
               var text2 = $(this).children('a').text();

               /* Append this option to our "select" */
               $(selectMenu).append('<option value="'+href2+'">--- '+text2+'</option>');
            });
         }
      });
   

   /* When our select menu is changed, change the window location to match the value of the selected option. */
   $(selectMenu).change(function() {
      location = this.options[this.selectedIndex].value;
   });	
}

var slider_1_running = false;


function adjust_dimension(){
	var winW = $(window).width();
   var aa = $(".slider_1 .slider_wrapper").width();
   var bb = $(".slider_1 .flag").outerWidth();
   var cc = parseInt(aa/bb)<1?1:parseInt(aa/bb);
   var dd = (aa-(bb*cc))/(cc*2);
 
   $(".slider_1 .flag").css({
   	"marginLeft":dd,
   	"marginRight":dd
   });

   $(".sp_1_container .text_box_2 span").width($(".sp_1_container .text_box_2 h2").width()+10);

   var aaa = $(".ev_wrapper .flag_container").width();
   var bbb = $(".ev_wrapper .flag_container .flag").width();
   var ccc = parseInt(aaa/bbb)<1?1:parseInt(aaa/bbb);
   var ddd = (aaa-(bbb*ccc))/(ccc*2);
   $(".ev_wrapper .flag_container .flag").css({
   	"marginLeft":parseInt(ddd),
   	"marginRight":parseInt(ddd)
   });

   var a = $(".flag_con");
   var b = a.find(".flag");
   var e = Math.ceil(bb+(2*dd));
   a.width(b.length*e);
   adjust_fixed_menu();
   $("#iframe").height($("#iframe").width()*.5625);
   $(".fill_window,.about_1_container").css("min-height",$(window).height() - $(".page_navigation").outerHeight()-20)
   $(".carrier_1_container").css("min-height",$(window).height() - $(".page_navigation").outerHeight())
   $(".what_we_do_con").css("min-height",$(window).height()-$(".header_wrapper").outerHeight());
   var gg = $(".what_we_do .left_block").height();
   $(".what_we_do .right_block").height(gg-100);


   var xxx = ($(".team_thumb_con").width()-(4*$(".team_thumb_con .thumb").width()))/8;
	$(".team_thumb_con .thumb").css("margin-left",xxx-3).css("margin-right",xxx-3);

	var xxxx = ($(".about_1_container .text_box").outerHeight()-$(".about_1_container .text_box p").outerHeight())/2;
	$(".about_1_container .text_box p").css("margin-top",xxxx);
 
 	var yyy = ($(".about_1_container").outerHeight()-$(".about_1_container .text_box").outerHeight())/3;
	$(".about_1_container .text_box").css("margin-top",yyy);
 	



   if(winW<980){
   	$(".what_we_do .right_block, .about_1_container .text_box,.about_1_container .text_box p,.team_thumb_con .thumb").removeAttr("style");
   }

   
}


function goRight(){
   var a = $(".flag_con");
   var b = a.find(".flag");
   var c = b.width();
   var d = parseInt(b.css("marginLeft")) + parseInt(b.css("paddingLeft"));   
   var e = c+(2*d);

   a.stop().animate({marginLeft:-e},500,function(){
      var fchild = a.find(".flag:first-child");
      a.css("marginLeft",0);
      a.append(fchild);
      slider_1_running = false;
   });
}

function goLeft(){
   var a = $(".flag_con");
   var b = a.find(".flag");
   var c = b.width();
   var d = parseInt(b.css("marginLeft")) + parseInt(b.css("paddingLeft"));   
   var e = c+(2*d);

   var lchild = a.find(".flag:last-child");
   a.prepend(lchild);
   a.css("marginLeft",-e);

   a.stop().animate({marginLeft:0},500,function(){
      slider_1_running = false;
   });
}


var current_index = 0;

var testimonial_list = [
	{	
		"Author":"Everyone",
		"Quote":"THE BEST FUCKING PROGRAM IN THE WORLD",
		},
	{
		"Author":"VONY TEAM",
		"Quote":"DON'T FUCK WITH US",
		},
	{
		"Author":"Everyone 1",
		"Quote":"THE BEST FUCKING PROGRAM IN THE WORLD",
		},
	{
		"Author":"VONY TEAM 1",
		"Quote":"DON'T FUCK WITH US",
		},
	{
		"Author":"Everyone 2",
		"Quote":"THE BEST FUCKING PROGRAM IN THE WORLD",
		},
	{
		"Author":"VONY TEAM 2",
		"Quote":"DON'T FUCK WITH US",
		}
	,
	{
		"Author":"VONY TEAM 3",
		"Quote":"DON'T FUCK WITH US",
		}				
]

var testimonialSlide_running = false;

function show_next_pair(){
	testimonialSlide_running = true;
	var i = 0;
	var container = $("<div>").addClass("testimonial_con").css("display","none");
	for(i=0;i<2 ;i++){
		var j = current_index+i; 
		if(j >=  testimonial_list.length){
			j=0;
		}
		var content = $("<div>").addClass("testimonial");
		if(i==1){
			container.append($("<div>").addClass("separator"));
		}
		
		
		var h2 = $("<h2>").html("<sup>&ldquo;</sup>"+testimonial_list[j]["Quote"]+"<sup>&rdquo;</sup>");
		var p = $("<p>").html("-"+testimonial_list[j]["Author"]);
		content.append(h2);
		content.append(p);
		container.append(content);
		
	}
	
	
	current_index++;
	if(current_index >=  testimonial_list.length){
		current_index=0;
	}
	$(".testimonial_con").fadeOut(300,function(){
		$(this).remove();
		$(".testimonial_slider .slider_wrapper").append(container);
		container.fadeIn(function(){
			testimonialSlide_running = false;
			});	
	});
}

function show_prev_pair(){
	var i = 0;
	testimonialSlide_running = true;
	var container = $("<div>").addClass("testimonial_con").css("display","none");
	for(i=0;i<2 ;i++){
		var j = current_index-i; 
		if(j <  0){
			j=testimonial_list.length-1;
		}
		var content = $("<div>").addClass("testimonial");
		if(i==1){
			container.append($("<div>").addClass("separator"));
		}
		
		
		var h2 = $("<h2>").html("<sup>&ldquo;</sup>"+testimonial_list[j]["Quote"]+"<sup>&rdquo;</sup>");
		var p = $("<p>").html("-"+testimonial_list[j]["Author"]);
		content.append(h2);
		content.append(p);
		container.append(content);
		
	}
	
	
	current_index--;
	if(current_index < 0){
		current_index=testimonial_list.length-1;
	}
	$(".testimonial_con").fadeOut(300,function(){
		$(this).remove();
		$(".testimonial_slider .slider_wrapper").append(container);
		container.fadeIn(function(){
		testimonialSlide_running = false;
		});	
	});
	
}

function change_homepage_nav_status(){
	var scrolled = $(window).scrollTop()+$(".header_wrapper").outerHeight()+60;
	var nav = $(".page_navigation a").not(".tab_elem");

	nav.each(function(){

		var target = "."+$(this).attr('data-for');
		var top = $(target).offset().top;
		var bottom = top + $(target).height();
		//console.log(top);
		if(scrolled<bottom && scrolled > top){
			$(this).addClass("active");
		}else{
			$(this).removeClass("active");
		}
	});
}

$.fn.isOnScreen = function(){
    if($(this).length==0){
		return false;
	}
    var win = $(window);
    
    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();
    
    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();
    
    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
    
};

function adjust_fixed_menu(){
		var a = parseInt($(window).scrollTop());
		var c = $(".header_wrapper").outerHeight();
		var b = $(".homepage_wrapper").outerHeight()-c;
		var d = $("#body").offset().left;
		if(a>b){
			$(".part_2").eq(0).css("marginTop",$(".page_nav_wrapper").outerHeight());
			 $(".page_nav_wrapper").css("top",c).css("left",0).addClass("fixed");
			return;
			}
			$(".part_2").eq(0).css("marginTop",0);
			$(".page_nav_wrapper").removeAttr("style").removeClass("fixed");	
	}


$(function(){
   $(window).resize(function(){
      adjust_dimension();
   });
   
   $("#more_upcoming_events").click(get_upcomming_events);
   $("#more_past_events").click(get_past_events);

   /*Slier 1*/
   adjust_dimension();

   $(".slider_type_1 .left").click(function(e){
      e.preventDefault();
      if(slider_1_running){
         return;
      }

      slider_1_running = true;
      goLeft();
   });


   $(".slider_type_1 .right").click(function(e){
      e.preventDefault();
      if(slider_1_running){
         return;
      }

      slider_1_running = true;
      goRight();
   });
	
	/*Testimonial slider*/
	var interval = setInterval(show_next_pair,3000);
	show_next_pair();
	$(".testimonial_slider .left").click(function(e){
		
      e.preventDefault();
	  if(testimonialSlide_running){
	 	return;
	 }
	 clearInterval(interval);
      show_prev_pair();
	  interval = setInterval(show_next_pair,3000);
   });


   $(".testimonial_slider .right").click(function(e){
      e.preventDefault();
	  if(testimonialSlide_running){
	 	return;
	 }
	 clearInterval(interval);
      show_next_pair();
	  interval = setInterval(show_next_pair,3000);
   });
	

	/*Convert the menu*/
   menu_convert(".nav_con");
	
	
	$(window).on("scroll",function(){
    	
    	change_homepage_nav_status();

    	if($(".made_in_NY_sec").isOnScreen()){
    		var b = $('.made_in_ny_logo');
    		var k = $('.header_wrapper').outerHeight();
    		j = $(".made_in_NY_sec").offset().top - ($(window).scrollTop()+k);
    		var mTop = (140+(2*j));
			
			b.css({
                "backgroundPosition": "center " + mTop + "px"
            })
    	}	

        $('.parallax_wrapper').each(function(){
        	var a = $(this); 
        	if(a.isOnScreen()){
        		b = $(this).find('.parallax_bg');
        		var k = $('.header_wrapper').outerHeight();
        		j = a.offset().top - ($(window).scrollTop()+k);
    			b.css({
                    "backgroundPosition": "center " + (parseInt(j*.2)) + "px"
                })
        		
        	}
        });
        
    });


   
   $(".page_navigation a").click(function(e){
	   e.preventDefault();
	   var target = $(this).attr('id');
       
	   if($(this).hasClass("tab_elem")){
		   $(".tab_elem").not(this).removeClass("active_tab");
		   $(this).addClass("active_tab");
		   target = $(this).attr('data-for');
		   $(".page_section").stop().slideUp(500);
			$("."+target).stop().slideDown(500);
			top_pos = $(".homepage_wrapper").height();
			console.log(top_pos)
			$( 'html, body' ).stop().animate(
				{
					"scrollTop": top_pos-60
				}, 
				800,
				function(){
					adjust_dimension();
				}
			);   
		   return;
	   }
	   var index = $(this).index();
	   var add = index>0?40:0;
       var top = $("."+target).eq(0).offset().top;
	   var c = $(".header_wrapper").outerHeight();
	   var top_pos = top-c-40;	
		
	  //console.log(top);
	  $( 'html, body' ).stop().animate(
    {
        "scrollTop": top_pos
    }, 
    800
);
   });
	var jj=0;
	$(window).bind("scroll",adjust_fixed_menu);

/*Pop up*/
$(".profile_popup").stop().hide();

$(".pop_triggerer").click(function(e){
	e.preventDefault();
	var a = $(this).find(".details");
	var b = a.find('.thumb').eq(0).attr('src');
	var c = a.find('.caption_name').eq(0).html();
	var d = a.find('.caption_role').eq(0).html();
	var e = a.find('.tw_link').eq(0).attr('href');
	var f = a.find('.mail_link').eq(0).attr('href');
	var g = a.find('.about_text').eq(0).html();
	
	$(".profile_popup").stop().hide();

	var i = $(".our_team_con").offset().top;	
	//alert(i);
	$(".profile_popup .popup_thumb img").attr('src',b);
	$(".profile_popup .popup_thumb h3").html(c);
	$(".profile_popup .popup_thumb p").html(d);
	$(".profile_popup .tw_link").attr('href',e);
	$(".profile_popup .tw_link").attr('href',f);
	$(".profile_popup .about_text").html(g);
	
	$(".profile_popup").stop().fadeIn();

	$('body,html').stop().animate({'scrollTop':i});
});

$(".popup_close").click(function(e){
	e.preventDefault();
	$(this).closest(".profile_popup").fadeOut();
});

/*Pop up 2*/

$(".post_popup").stop().hide();

$(".post_pop_triggerer").click(function(e){
	e.preventDefault();
	var a = $(this).find(".details");
	var b = a.html();
	$(".post_popup").stop().hide();

	var i = $(".job_post_con").offset().top;	
	//alert(i);
	$(".post_popup .post_text").html(b);
	
	$(".post_popup").stop().fadeIn();

	$('body,html').stop().animate({'scrollTop':i});
});

$(".post_popup_close").click(function(e){
	e.preventDefault();
	$(this).closest(".post_popup").fadeOut();
});

/*Pop up 3*/
$(".profile_popup_3").stop().hide();

$(".pop_triggerer_3").click(function(e){
	e.preventDefault();
	var a = $(this).find(".details");
	var b = a.find('.thumb').eq(0).attr('src');
	var c = a.find('.caption_name').eq(0).html();
	var d = a.find('.caption_role').eq(0).html();
	var e = a.find('.tw_link').eq(0).attr('href');
	var f = a.find('.mail_link').eq(0).attr('href');
	var g = a.find('.about_text').eq(0).html();
	
	$(".profile_popup_3").stop().hide();
	var i =$(this).closest(".row");
	var j = i.offset().top;	
	i.find(".profile_popup_3").find(".popup_thumb_3").find("img").attr('src',b);
	i.find(".profile_popup_3").find(".popup_thumb_3").find("h3").html(c);
	i.find(".profile_popup_3").find(".popup_thumb_3").find("p").html(d);
	i.find(".profile_popup_3").find(".tw_link").attr('href',e);
	i.find(".profile_popup_3").find(".tw_link").attr('href',f);
	i.find(".profile_popup_3").find(".about_text").html(g);
	
	i.find(".profile_popup_3").stop().fadeIn();

	$('body,html').stop().animate({'scrollTop':j});
});

$(".popup_close_3").click(function(e){
	e.preventDefault();
	$(this).closest(".profile_popup_3").fadeOut();
});

$(document).keyup(function(e) {
  if (e.keyCode == 27) { 
	$(".profile_popup").stop().hide();
	$(".profile_popup_3").stop().hide();
	$(".profile_popup_2").stop().hide();
	$(".post_popup").stop().hide();


  	} 
});

var current_pitch_index=0;

$(".pitch_gallery .left_nav").click(function(e){
	e.preventDefault();
	var imgs = $(".pitch_gallery > img");
 	current_pitch_index--;
 	if(current_pitch_index<0){
 		current_pitch_index=imgs.length-1;
 	}

 	imgs.fadeOut();
 	imgs.eq(current_pitch_index).fadeIn();
});

$(".pitch_gallery .right_nav").click(function(e){
	e.preventDefault();
	var imgs = $(".pitch_gallery > img");
 	current_pitch_index= (++current_pitch_index)%imgs.length;
 	imgs.fadeOut();
 	imgs.eq(current_pitch_index).fadeIn();
});
$(window).scrollTop(0);
});

