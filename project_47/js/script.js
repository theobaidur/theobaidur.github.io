var expandPos = 0;
var winW = 0;
var winH = 0;
var imageViewerOpen = false;
var popupOpen = false;
var myScroll2 = null;
var videoPlaying = false;

function playVideo() {
	var video = document.getElementById('video');
	video.currentTime = 0;
	videoPlaying = true;
	window.location.hash = "#open";
	video.play();
	if (video.requestFullscreen) {
		video.requestFullscreen();
	} else if (video.msRequestFullscreen) {
		video.msRequestFullscreen();
	} else if (video.mozRequestFullScreen) {
		video.mozRequestFullScreen();
	} else if (video.webkitRequestFullscreen) {
		video.webkitRequestFullscreen();
	}
}

function pauseVideo() {
	var video = document.getElementById('video');
	videoPlaying = false;
	video.pause();
	if (document.exitFullscreen) {
		document.exitFullscreen();
	} else if (document.msExitFullscreen) {
		document.msExitFullscreen();
	} else if (document.mozCancelFullScreen) {
		document.mozCancelFullScreen();
	} else if (document.webkitExitFullscreen) {
		document.webkitExitFullscreen();
	}

}

function animateColor() {
	var vh = $("#video").height();
	var sc = $(window).scrollTop();
	var pt = Math.round((sc / vh) * 10) / 10;
	pt = pt > 1 ? 1 : pt;
	var bg = "rgba(150, 170, 57," + pt + ")";
	var c = "rgba(129, 146, 49," + pt + ")";
	$(".header").css("background", bg).css("borderColor", c);
}

function expandDetails() {
	popupOpen = true;
	window.location.hash = "#open";
	exapndPos = $(window).scrollTop();
	$("body").addClass('no-overflow');
	$(".details-popup").slideDown(function() {
		$(this).height($(window).height());
		$(this).addClass("fixed");
	});
	var top = $(".details-popup").offset().top;
	$("body,html").animate({
		scrollTop : top
	});

}

function closeDetails() {
	popupOpen = false;
	$("body,html").animate({
		scrollTop : exapndPos
	});
	$(".details-popup").removeClass("fixed");
	$(".details-popup").slideDown().fadeOut();
	$("body").removeClass('no-overflow');
}

function adjust() {
	winW = $(window).width();
	winH = $(window).height();

	/*Adjust slider width*/
	var sl = $("#scroller");
	var li = $("#scroller li");
	var dim = parseInt(li.width()) + parseInt(li.css("marginLeft")) + parseInt(li.css("marginRight"));

	$("#dstyle").remove();
	var st = $("<style id='dstyle'>").html("#scroller{width:" + (dim * li.length) + "px;}");
	$("head").append(st);

	/*adjust image viewer*/
	$("#scroller2").width(winW * li.length);
	$("#scroller2 li").width(winW).css("lineHeight", winH + "px");

}

function initiateImageViewer() {
	var content = $("#scroller ul").clone();
	$("#scroller2").html(content);
}

function showImageViewer() {
	imageViewerOpen = true;
	window.location.hash = "#open";
	$("#wrapper2").show();
	$("body").addClass('no-overflow');
	var index = $(this).index();
	myScroll2 = new IScroll('#wrapper2', {
		probeType : 3,
		scrollX : true,
		scrollY : false,
		mouseWheel : true,
		snap : 'li',
		snapSpeed : 400,
		momentum : false
	});
	myScroll2.scrollToElement(document.querySelector('#wrapper2 li:nth-child(' + (index + 1) + ')'), 0);

}

function hideImageViewer() {
	if (myScroll2) {
		myScroll2.destroy();
		myScroll2 = null;
	}
	imageViewerOpen = false;
	$("#wrapper2").hide();
	$("body").removeClass('no-overflow');
}

function closePopup() {
	if (window.location.hash != "#open") {
		if (popupOpen) {
			closeDetails();

		}

		if (imageViewerOpen) {
			hideImageViewer();
		}

		if (videoPlaying) {
			pauseVideo();
		}

	}
}

function cleanHash() {
	window.location.hash = '';
}

$(function() {
	cleanHash();
	initiateImageViewer();
	adjust();
	$("#poster").click(playVideo);
	$(window).scroll(animateColor);
	$(".description-row").click(expandDetails);
	$("#close").click(closeDetails);

	myScroll = new IScroll('#wrapper', {
		scrollX : true,
		scrollY : true,
		mouseWheel : true,
		preventDefault : false
	});
	
	$('video#video').bind('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e) {
	    var isFullScreen = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
	    if(!isFullScreen){
	    	pauseVideo();
	    }
	
	        
	});

	$(window).resize(adjust);

	$("#scroller li").click(showImageViewer);

	window.onhashchange = closePopup;

});
