$(document).ready(function(){

          $(".geeklete-slider-inner").jCarouselLite({
              btnNext: ".gee-arrow-right",
              btnPrev: ".gee-arrow-left",
              auto:8111000,
              speed:800,
              visible: 6
        });


         $('#working-process').carousel({interval: 7000000});
         $('#testimonial').carousel({interval: 7000000});


          $(".menu-handlar").click(function(e) {
              e.preventDefault();
             $(".mobile-nav").addClass("open");
          });

          $(".menu-close").click(function(e) {
              e.preventDefault();
             $(".mobile-nav").removeClass("open");
          });


          // Create game list 
          $(".create-game-list li").each(function(){
              var This = $(this);
              This.click(function(e){
                e.preventDefault();
                if($(this).hasClass("active")){
                  $(this).removeClass("active");
                }else{
                  $(".create-game-list li").removeClass("active");
                  $(this).addClass("active");
                  if($(window).width()<768){
                    var top = $("#step-1-next").offset().top;
                    $("html,body").stop().animate({scrollTop:top-150}, 500);  
                  }
                  
                }
                
              })

          });

          //step events

            $("#step-1-next").click(function(e){
              e.preventDefault();
              if($(".create-game-list li.active").length){
                $(this).closest("div").removeClass("field_error");
                $(".create-step-1").slideUp(500);
                $(".create-step-2").slideDown(500);
                $(".game-create-progress").addClass("second-part");
              }else{
                $(this).closest("div").addClass("field_error");
              }
            });

            $("#step-2-back").click(function(e){
              e.preventDefault();
              $(".create-step-2").slideUp(500);
              $(".create-step-1").slideDown(500);
            });

            $("#step-2-next").click(function(e){
              var error=false;
              e.preventDefault();
              if($(".datepicker").val()=='' || $(".timepicker").val()==''){
               $(".data_time_container").addClass("field_error"); 
               error = true;
              }else{
                $(".data_time_container").removeClass("field_error");
              }

              if($(".choose-console li.active").length){
                 $(".console_list_container").removeClass("field_error"); 
              }else{
                error = true;
                $(".console_list_container").addClass("field_error");
              }

              if($(".rules_input").val()==''){
               $(".rules_input_container").addClass("field_error"); 
               error = true;
              }else{
                $(".rules_input_container").removeClass("field_error");
              }  

              if(!error){
                $(".create-step-2").slideUp(500);
                $(".create-step-3").slideDown(500);
                $(".game-create-progress").addClass("third-part");
              }

              
            });

            $("#step-3-back").click(function(e){
              e.preventDefault();
              $(".create-step-3").slideUp(500);
              $(".create-step-2").slideDown(500);
            });

           // choose-console 
          $(".choose-console li").each(function(){
              var This = $(this);
              This.click(function(e){
                e.preventDefault();
                //$(".choose-console li").removeClass("active");
                  $(this).toggleClass("active");
              })
          });

          // Grid view

          $(".grid-view").click(function(e){
              e.preventDefault();
              $(".product-list").addClass("grid");
              $(".grid-view").addClass("active");
              $(".list-view").removeClass("active");
          })

          $(".list-view").click(function(e){
              e.preventDefault();
              $(".product-list").removeClass("grid");
              $(".grid-view").removeClass("active");
              $(".list-view").addClass("active");
          });

        //custom seclect box
        $("select").addClass("selectpicker");
        $('.selectpicker').selectpicker();

        // datepicker 
        $('.datepicker').datetimepicker({format: 'DD-MM-YYYY'});

        $('.timepicker').datetimepicker({
                      format: 'LT'
       });

       // checkbox on off
      $( ".bootstrap-switch.bootstrap-switch-off").parent(".checkbox-area").addClass("active");

      // slider
       $("#range").ionRangeSlider({
              hide_min_max: true,
              keyboard: true,
              min: 0,
              max: 5000,
              from: 1000,
              to: 4000,
              type: 'double',
              step: 1,
              prefix: "$",
              grid: true
        });

       $('[data-toggle="tooltip"]').tooltip();

      $("[name='my-checkbox']").bootstrapSwitch();


      [].slice.call( document.querySelectorAll( '.progress-button' ) ).forEach( function( bttn, pos ) {
        new UIProgressButton( bttn, {
          callback : function( instance ) {
            var progress = 0,
              interval = setInterval( function() {
                progress = Math.min( progress + Math.random() * 0.1, 1 );
                instance.setProgress( progress );

                if( progress === 1 ) {
                  instance.stop( pos === 1 || pos === 3 ? -1 : 1 );
                  clearInterval( interval );
                }
              }, 150 );
          }
        } );
      } );

      $(".progress-button button").click(function(e){
        e.preventDefault();
      });

      /*header*/

      $(window).scroll(function(){
        var top = $(window).scrollTop();
        var height = $(".primary_nav").height();
        var home_nav= $(".home-page-nav");
        var home_nav_height= $(".home-page-nav").height();
        var sub_nav = $(".sub-nav");
        var height2 = sub_nav.height();
        console.log(height);

        if(top>height){
          $("body").css("paddingTop",height2);
           sub_nav.addClass("navbar-fixed-top");
           home_nav.addClass("home-fixed");
          //sub_nav.css("top",height);
        }else{
          $("body").css("padding-top",0);
          sub_nav.removeClass("navbar-fixed-top");
          home_nav.removeClass("home-fixed");
          //sub_nav.attr("style","");
        }

        if(top >100){
           home_nav.addClass("home-fixed");
        }else{
          home_nav.removeClass("home-fixed");
        }

      });


      $("#testimonial .vjs-default-skin .vjs-big-play-button").click(function(){
          $(".testimonial-slider .carousel-inner .item h3").hide();
          $(".testimonial-thumb").hide();
          $(".testimonial-slider .carousel-inner .item .close").show();
          $("#testimonial .video-js").css({"z-index":"10000000"});
          $(".vjs-default-skin.vjs-has-started .vjs-control-bar").show();
          $("#testimonial .vjs-default-skin .vjs-big-play-button").hide();
          $(".video-js.vjs-has-started .vjs-poster").hide();

      });

      $(".testimonial-slider .carousel-inner .item .close").click(function(e){
          e.preventDefault();
          $(".testimonial-slider .carousel-inner .item h3").show();
          $(".testimonial-thumb").show();
          $(".vjs-default-skin.vjs-has-started .vjs-control-bar").hide();
          $("#testimonial .vjs-default-skin .vjs-big-play-button").show();
          $(".testimonial-slider .carousel-inner .item .close").hide();
          $(".video-js.vjs-has-started .vjs-poster").show();
          $("#testimonial .video-js").css({"z-index":"10"});
      });


/*      $('#geekletes').carousel({interval:false});
      var myInterval=false;
      $('#geekletes .carousel-control').mouseover(function() {
          var ctrl = $(this);
          var interval=200;
        
          myInterval = setInterval(function(){
               ctrl.trigger("click");
          },interval);
      });

      $('#geekletes .carousel-control').mouseout(function(){
        clearInterval(myInterval);
        myInterval = false;
      });  

*/

      });

/*FAQ page*/
jQuery(document).ready(function($){
  //update these values if you change these breakpoints in the style.css file (or _layout.scss if you use SASS)
  var MqM= 768,
    MqL = 1024;

  var faqsSections = $('.cd-faq-group'),
    faqTrigger = $('.cd-faq-trigger'),
    faqsContainer = $('.cd-faq-items'),
    faqsCategoriesContainer = $('.cd-faq-categories'),
    faqsCategories = faqsCategoriesContainer.find('a'),
    closeFaqsContainer = $('.cd-close-panel');
  
  //select a faq section 
  faqsCategories.on('click', function(event){
    event.preventDefault();
    var selectedHref = $(this).attr('href'),
      target= $(selectedHref);
    if( $(window).width() < MqM) {
      faqsContainer.scrollTop(0).addClass('slide-in').children('ul').removeClass('selected').end().children(selectedHref).addClass('selected');
      closeFaqsContainer.addClass('move-left');
      $('body').addClass('cd-overlay');
    } else {
          $('body,html').animate({ 'scrollTop': target.offset().top - 19}, 200); 
    }
  });

  //close faq lateral panel - mobile only
  $('body').bind('click touchstart', function(event){
    if( $(event.target).is('body.cd-overlay') || $(event.target).is('.cd-close-panel')) { 
      closePanel(event);
    }
  });
  faqsContainer.on('swiperight', function(event){
    closePanel(event);
  });

  //show faq content clicking on faqTrigger
  faqTrigger.on('click', function(event){
    event.preventDefault();
    $(this).next('.cd-faq-content').slideToggle(200).end().parent('li').toggleClass('content-visible');
  });

  //update category sidebar while scrolling
  $(window).on('scroll', function(){
    if ( $(window).width() > MqL ) {
      (!window.requestAnimationFrame) ? updateCategory() : window.requestAnimationFrame(updateCategory); 
    }
  });

  $(window).on('resize', function(){
    if($(window).width() <= MqL) {
      faqsCategoriesContainer.removeClass('is-fixed').css({
        '-moz-transform': 'translateY(0)',
          '-webkit-transform': 'translateY(0)',
        '-ms-transform': 'translateY(0)',
        '-o-transform': 'translateY(0)',
        'transform': 'translateY(0)',
      });
    } 
    if( faqsCategoriesContainer.hasClass('is-fixed') ) {
      faqsCategoriesContainer.css({
        'left': faqsContainer.offset().left,
      });
    }
  });

  function closePanel(e) {
    e.preventDefault();
    faqsContainer.removeClass('slide-in').find('li').show();
    closeFaqsContainer.removeClass('move-left');
    $('body').removeClass('cd-overlay');
  }

  function updateCategory(){
    updateCategoryPosition();
    updateSelectedCategory();
  }

  function updateCategoryPosition() {
    var top = $('.cd-faq').offset().top,
      height = jQuery('.cd-faq').height() - jQuery('.cd-faq-categories').height(),
      margin = 20;
    if( top - margin <= $(window).scrollTop() && top - margin + height > $(window).scrollTop() ) {
      var leftValue = faqsCategoriesContainer.offset().left,
        widthValue = faqsCategoriesContainer.width();
      faqsCategoriesContainer.addClass('is-fixed').css({
        'left': leftValue,
        'top': margin+20,
        '-moz-transform': 'translateZ(0)',
          '-webkit-transform': 'translateZ(0)',
        '-ms-transform': 'translateZ(0)',
        '-o-transform': 'translateZ(0)',
        'transform': 'translateZ(0)',
      });
    } else if( top - margin + height <= $(window).scrollTop()) {
      var delta = top - margin + height - $(window).scrollTop();
      faqsCategoriesContainer.css({
        '-moz-transform': 'translateZ(0) translateY('+delta+'px)',
          '-webkit-transform': 'translateZ(0) translateY('+delta+'px)',
        '-ms-transform': 'translateZ(0) translateY('+delta+'px)',
        '-o-transform': 'translateZ(0) translateY('+delta+'px)',
        'transform': 'translateZ(0) translateY('+delta+'px)',
      });
    } else { 
      faqsCategoriesContainer.removeClass('is-fixed').css({
        'left': 0,
        'top': 0,
      });
    }
  }

  function updateSelectedCategory() {
    faqsSections.each(function(){
      var actual = $(this),
        margin = parseInt($('.cd-faq-title').eq(1).css('marginTop').replace('px', '')),
        activeCategory = $('.cd-faq-categories a[href="#'+actual.attr('id')+'"]'),
        topSection = (activeCategory.parent('li').is(':first-child')) ? 0 : Math.round(actual.offset().top);
      
      if ( ( topSection - 20 <= $(window).scrollTop() ) && ( Math.round(actual.offset().top) + actual.height() + margin - 20 > $(window).scrollTop() ) ) {
        activeCategory.addClass('selected');
      }else {
        activeCategory.removeClass('selected');
      }
    });
  }
});