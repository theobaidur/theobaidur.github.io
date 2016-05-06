//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });

    var currentIndex = 0;
    var prevIndex = 0;

    $(".section").hide();
    $(".label_container span").addClass("hideSpan");

    $(".section").eq(currentIndex).slideDown();
    $(".label_container span").eq(currentIndex).removeClass("hideSpan");
    $(".indicator_bg .indicator").animate({marginLeft:(currentIndex*8.3)+"%"},500);

    $(".markFav").click(function(e){
        e.preventDefault();
        $(this).toggleClass("fav");
    });

    $(".paginator .next").click(function(e){
        e.preventDefault();
        if(currentIndex+1 < 12){
            currentIndex++;
            $(".section").slideUp();
            $(".label_container span").addClass("hideSpan");

            $(".section").eq(currentIndex).slideDown();
            $(".label_container span").eq(currentIndex).removeClass("hideSpan");
            $(".indicator_bg .indicator").animate({marginLeft:(currentIndex*8.3)+"%"},500);    
        }
        
    });

     $(".paginator .prev").click(function(e){
        e.preventDefault();
        if(currentIndex-1 > -1){
            currentIndex--;
            $(".section").slideUp();
            $(".label_container span").addClass("hideSpan");

            $(".section").eq(currentIndex).slideDown();
            $(".label_container span").eq(currentIndex).removeClass("hideSpan");
            $(".indicator_bg .indicator").animate({marginLeft:(currentIndex*8.3)+"%"},500);    
        }
        
    }); 

    $(".search-box").submit(function(e){
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $("#app_start").offset().top - 50
        }, 1000);
    });   


});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}