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
      var target = this.options[this.selectedIndex].value;
      var top = $(target).offset().top-74;
      $('body,html').stop().animate({
         scrollTop: top},500);
   });	
}

function change_homepage_nav_status(){
   var scrolled = $(window).scrollTop()+$("header").outerHeight();
   var nav = $("#top-nav li");

   nav.each(function(){

      var target = $(this).find('a').attr('href');
      var top = $(target).offset().top;
      var bottom = top + $(target).outerHeight();
      if(scrolled<bottom && scrolled > top){
         $(this).addClass("active");
      }else{
         $(this).removeClass("active");
      }
   });
}


$(function(){

  
   $("#top-nav li a").click(function(event) {
      event.preventDefault();
      var target = $(this).attr('href');
      var top = $(target).offset().top;
      $('body,html').stop().animate({
         scrollTop: top},500);
   });

   menu_convert(".top-nav-container");

   $(".search button").click(function(e){
    if($(this).data('state')=='close'){
      e.preventDefault();
      $(this).data('state','open');
    }
    $(".search").stop().animate({
      width: 120},
      500);
   });

   $(".search input").blur(function(){
      if($.trim($(this).val())==''){
        $(".search").stop().animate({
          width: 20},
          500, function() {
          $('.search button').data('state','close');
        });
      }
   });
  
   $(window).on("scroll",function(){
      
      change_homepage_nav_status();
   });

   $(".posts").each(function(){
      var excerpt = $(this).find(".excerpt").find("a");
      var content = $(this).find(".post-body, .social_con");
      excerpt.click(function(e){
        e.preventDefault();
        content.stop().slideToggle();
        excerpt.toggleClass('open');
      });
   });

   $(".posts").eq(0).find('.excerpt > a').click();

});




