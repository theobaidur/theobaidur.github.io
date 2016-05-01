/*
 * 
 * Part of article How to detect screen size and apply a CSS style
 * http://www.ilovecolors.com.ar/detect-screen-size-css-style/
 *
 */

$(document).ready(function() {

	if ((screen.width>=1024) && (screen.height>=768))
	{
		alert('Please Roted Your Screen');
		$("link[rel=stylesheet]:not(:first)").attr({href : "detect1024.css"});
	}
	else
	{
		alert('Screen size: less than 1024x768, 800x600 maybe?');
		$("link[rel=stylesheet]:not(:first)").attr({href : "detect800.css"});
	}
});

