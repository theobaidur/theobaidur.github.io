var expandPos = 0;
var winW = 0;
var winH = 0;
var imageViewerOpen = false;
var popupOpen = false;
var myScroll2 = null;
var videoPlaying = false;
var currentVideo = '';
var topPos = 0;


function playVideo(){
	var video = document.querySelector("#"+currentVideo+" video");
	videoPlaying = true;
  	video.play();
}

function pauseVideo(){
	var video = document.querySelector("#"+currentVideo+" video");
	videoPlaying = false;
	video.pause();      

}

function changeHeader() {
	// var winS = $(window).scrollTop()+45;
	// if(winS > topPos){
	// 	$('body').addClass("fixed");
	// }else{
	// 	$('body').removeClass("fixed");
	// }
}

function adjust() {
	winW = $(window).width();
	winH = $(window).height();
	topPos = $(".btn_row").offset().top;

	/*Adjust slider width*/
	var sl = $("#scroller");
	var li = $("#scroller li");
	var li2 = $("#scroller2 li");
	var dim = parseInt(li.width()) + parseInt(li.css("marginLeft")) + parseInt(li.css("marginRight"));

	$("#dstyle").remove();
	var st = $("<style id='dstyle'>").html("#scroller{width:" + (dim * li.length) + "px;}");
	$("head").append(st);

	/*adjust image viewer*/

	$("#scroller2").width($("#wrapper2").width() * li2.length);
	$("#scroller2 li").width($("#wrapper2").width()).css("lineHeight", winH + "px");
	$(".video_player").height(winH);


}

function initiateImageViewer() {
	
	var content = $("#scroller ul").clone();
	var li = content.find("li");
	content.find("li").each(function(){
		if($(this).hasClass("video")){
			$(this).remove();
		}
	});
	
	var li = content.find("li");
	
	$("#scroller2").html(content);
	for(i=0; i<li.length;i++){
		$("#indicator").append("<a></a>");
	}
	
	var i = 0;
	
	$("#scroller ul").find("li").each(function(){
		console.log(i);
		if(!$(this).hasClass("video")){
			$(this).attr('data-cElem',i++);
		}
	});
}

function showImageViewer() {
	if($(this).hasClass('video')){
		return;
	}
	imageViewerOpen = true;
	window.location.hash = "#open";
	$("#viewport").show();
	$("body").addClass('no-overflow');
	var index = $(this).attr('data-cElem');
	myScroll2 = new IScroll('#wrapper2', {
		scrollX: true,
		scrollY: false,
		momentum: false,
		snap: true,
		snapSpeed: 400,
		keyBindings: false,
		preventDefault : true
	});
	
	myScroll2.on('scrollEnd', function () {
    	$("#indicator a").removeClass("active").eq(this.currentPage.pageX).addClass("active");
	});
	$("#indicator a").removeClass("active").eq(index).addClass("active");
	
	myScroll2.scrollToElement(document.querySelector('#wrapper2 li:nth-child('+(index+1)+')'),0);
	

}

function hideImageViewer() {
	if (myScroll2) {
		myScroll2.destroy();
		myScroll2 = null;
	}
	imageViewerOpen = false;
	$("#viewport").hide();
	$("body").removeClass('no-overflow');
}

function closePopup() {
	if (window.location.hash != "#open") {
		if (imageViewerOpen) {
			hideImageViewer();
		}

		$(".video_player").hide();
		pauseVideo();
	

	}
}

function cleanHash() {
	window.location.hash = '';
}

function closeVideo(){
	$(this).closest(".video_player").hide();
	pauseVideo();
	$("body").removeClass('no-overflow');
}

function openVideo(){
	window.location.hash = "#open";
	var a = $(this).data('video-id');
	currentVideo = a;
	$("#"+a).show();
	playVideo();
	
	$("body").addClass('no-overflow');
}

$(function() {
	initiateImageViewer();
	
	/* video control */
	var i = 0;
	$("#wrapper .video").each(function(){
		var id = 'video-'+i;
		$(this).data('video-id', id);
		var vid = $(this).find("video").eq(0);
		var con = $("<div>").addClass("video_player").attr('id',id);
		var control = $("<img>").attr('src','img/control.png').addClass('control');
		var btn = $("<snap>").text('Done').addClass('videoClose').click(closeVideo);
		con.append(vid)
		con.append(control);
		con.append(btn);
		$("body").append(con);

		i++;
	})
	.click(openVideo);

	adjust();
	cleanHash();


	$(window).scroll(changeHeader);

	myScroll = new IScroll('#wrapper', {
		scrollX : true,
		scrollY : true,
		mouseWheel : true,
		preventDefault : false
	});

	$(window).resize(adjust);

	$(".viewer_top span").click(hideImageViewer);

	$("#scroller li").click(showImageViewer);
	var more = $("<a>").addClass("more").text("...more");
	more.click(function(){
		$(this).remove();
		$('.more_con').css("height","auto");
	});
	$(".more_con").append(more);
	window.onhashchange = closePopup;

	$(".btn-set-outer a").click(function(e){
		e.preventDefault();
		var target = $(this).attr('href');
		$(this).closest(".btn-set-outer").find("a").removeClass("active");
		$(this).addClass("active");

		if($(target).length){
			$("section").not($(target)).hide();
			$(target).show();
		}
	});

	

	
	

});
