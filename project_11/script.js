var monthly_turnover=300000;
var branch = 1;
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

function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }		


function initDrag(){
		var slider = $(".scale_1");
		var slider_2 = $(".scale_2");
		var dragger = $(".scale_1 .dragger_1");
		var dragger_2 = $(".scale_2 .dragger_2");
	   dragger
 	  .drag("start",function(){
		  })
      .drag(function( ev, dd ){
		  var X = slider.offset().left+slider.outerWidth();
		  var l = Math.max(slider.offset().left-25,Math.min(dd.offsetX,X-25));
		  var range = l-slider.offset().left;
		  updateSliderInfo(range);
         $( this ).add(".tooltip_1").css({
            marginLeft: range
         });   
      })
 	   .drag("end",function(ee,dd){
	   
	   });
	   
	   
	  dragger_2
 	  .drag("start",function(){
		  $(this).add(".tooltip_2").stop();
		  })
      .drag(function( ev, dd ){
		  var X = slider_2.offset().left+slider_2.outerWidth();
		  var l = Math.max(slider_2.offset().left-25,Math.min(dd.offsetX,X-25));
		  var range = l-slider_2.offset().left;
		  updateSliderInfo_2(range);
         $( this ).add(".tooltip_2").css({
            marginLeft: range
         });   
      })
 	   .drag("end",function(ee,dd){
	   	  var X = slider_2.offset().left+slider_2.outerWidth();
		  var l = Math.max(slider_2.offset().left-25,Math.min(dd.offsetX,X-25));
		  var units = slider_2.outerWidth()/19;
		  var range = l-slider_2.offset().left;
		  range = parseInt(((range+25)/units)+.5)*units;
		  $( this ).add(".tooltip_2").stop().animate({
            marginLeft: range-25
         }); 
	   });  	

	}
	
function updateSliderInfo(range){
	range+=25;
	var wid = $(".scale_1").outerWidth();
	var val =300000+parseInt((1200000*range)/wid);
	monthly_turnover=val;
	displayInfo();
	val = commaSeparateNumber(val);
	$(".tooltip_1").text(val);
	}	

function updateSliderInfo_2(range){
	var slider_2 = $(".scale_2");	
	var units = slider_2.outerWidth()/19;
	console.log(units);
	range = parseInt(((range+25)/units)+.5)+1;
	branch=range;
	displayInfo();
	$(".tooltip_2").text(range);
	}
	
function displayInfo(){
	
	var low = parseInt((monthly_turnover*branch*0.072)+.5);
	var high = parseInt((monthly_turnover*branch*0.18)+.5);
	var string = commaSeparateNumber(low)+" - "+commaSeparateNumber(high);
	$(".min_max").val(string);
	}
	
function adjustDrageer(){
	var slider = $(".scale_1");
	var slider_2 = $(".scale_2");
	var a = $(".scale_1 .dragger_1,.tooltip_1");
	var b = $(".scale_2 .dragger_2,.tooltip_2");
	var left_1 = ((monthly_turnover-300000)/1200000)*slider.outerWidth();
	var left_2 = (slider_2.outerWidth()/19)*(branch-1);
	a.stop().animate({marginLeft:left_1-25});
	b.stop().animate({marginLeft:left_2-25});
	}
	

$(function(){
	PlaceholderFix();
	initDrag();
	displayInfo();
	$(window).resize(adjustDrageer);
});