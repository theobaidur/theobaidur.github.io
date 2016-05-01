/* Author: 

*/

/*-------------------Selectors----------------*/
var wrapper = $('.gallery_outer');


/*--------------------size varialbes----------------------*/
var container_bg = "222222";

var wrapper_width = "90%";
var wrapper_height = 510;


var rows = 3;


var thumb_space = 20;
var thumb_width = 200;
var thumb_height = 150;
var thumbs_per_row = 12;

var row_space = 20;

var zoom_ratio = 2;

/*--------------------- element variable ------------------------*/
var gallery_wrapper,gallery_container,gallery_row, gallery_thumb, intr, last_pos_x, zoomed_once=0;

var img_list = [
					"G01.jpg","G02.jpg","G03.jpg","G04.jpg","G05.jpg","G06.jpg",
					"G07.jpg","G08.jpg","G09.jpg","G10.jpg","G11.jpg","G12.jpg",
					"G13.jpg","G14.jpg","G15.jpg","G16.jpg","G17.jpg","G18.jpg",
					"G19.jpg","G20.jpg","G21.jpg","G22.jpg","G23.jpg","G24.jpg",
					"G25.jpg","G26.jpg","G27.jpg","G28.jpg","G29.jpg","G30.jpg",
					"G31.jpg","G32.jpg","G33.jpg","G34.jpg","G35.jpg","G36.jpg",
					];







$(function(){
//Query.fx.interval = 40;
/*---------------------- Function calling ------------------------------*/


init_page();

/*----------------------------- Function defination -----------------------------------*/
function init_page(){
	
	if(rows=='auto'){
		rows = Math.ceil(img_list.length/thumbs_per_row);
	}
	
	if(thumbs_per_row=='auto'){
		thumbs_per_row = math.ceil(img_list.length/rows);
	}
	
	var wrapper_style = {
		'width':wrapper_width,
		'height':wrapper_height,
	}
	
	var thumb_style = {
		'width':thumb_width,
		'height':thumb_height,
		'margin':(thumb_space/2)+'px '+(row_space/2)+'px',
		'line-height':thumb_height+'px',
	}
	
	
	
	var container_style = {
		'width':thumbs_per_row*(thumb_width+thumb_space),
		'height':rows*(thumb_height+row_space),
		'background':"#"+container_bg
	}
	gallery_wrapper = $('<div>').attr('id','gallery_wrapper').css(wrapper_style).mousemove(mouse_scroll);
	gallery_container = $('<div>').attr('id','gallery_container').css(container_style);
	
	for(i=0,j=0;i<rows;i++){
		gallery_row = $('<div>').addClass('gallery_row');
		for(k=0; k<thumbs_per_row && img_list[j];j++,k++){
			var img = $('<img>').attr('src','img/gallery/'+img_list[j]);
			gallery_thumb=$('<div>').addClass('gallery_thumb').css(thumb_style).html(img).click(zoom);
			gallery_row.append(gallery_thumb);
		}
	 gallery_container.append(gallery_row);
	 
		
	}
	 gallery_wrapper.append(gallery_container);
	 wrapper.append(gallery_wrapper);
	 gallery_thumb = $('.gallery_thumb');
	 gallery_row = $('.gallery_row');
	
}

var zoomed = 0;
function zoom(e){
	if(detectCSSFeature('transition')){
		var style = ".gallery_thumb, #gallery_container {"+
					"transition: width 1s, margin 1s, height 1s, transform 1s;"+
					"-moz-transition: width 1s, margin 1s, height 1s, -moz-transform 1s;"+
					"-webkit-transition: width 1s, margin 1s, height 1s, -webkit-transform 1s;"+
					"-o-transition: width 1s, margin 1s, height 1s, -o-transform 1s;"+
					"}";
		var newStyle = $("<style>").addClass("transition_style").html(style);
		$('head').append(newStyle);				
	}
	//return;
	var current = $(this).hasClass('current_thumb');
	gallery_thumb.removeClass('current_thumb');
	if(current){
	if(detectCSSFeature('transition')){
	gallery_thumb.css({
		'width':thumb_width,
		'height':thumb_height,
		'margin':(thumb_space/2)+'px '+(thumb_space/2)+'px',
		'line-height':(thumb_height)+'px'
	});

	gallery_container.css({
		'width':thumbs_per_row*(thumb_width+thumb_space),
		'height':rows*(thumb_height+row_space),
		'margin-top':0,
		'margin-left':-($(this).index()*(thumb_width+thumb_space))
	});		
	setTimeout(function(){zoomed=0},1000);
	return;		
	}	
	gallery_thumb.stop().animate({
		'width':thumb_width,
		'height':thumb_height,
		'margin':(thumb_space/2)+'px '+(thumb_space/2)+'px',
		'line-height':(thumb_height)+'px'
	},1000);

	gallery_container.stop().animate({
		'width':thumbs_per_row*(thumb_width+thumb_space),
		'height':rows*(thumb_height+row_space),
		'margin':0,
	},1000,function(){zoomed=0;});		
	}else{
	$(this).addClass('current_thumb');
	var outter_width = gallery_wrapper.width();
	var outter_height = gallery_wrapper.height();
	var new_thumb_width = (thumb_width*zoom_ratio)+(thumb_space*zoom_ratio);
	var new_thumb_height =  (thumb_height*zoom_ratio)+(row_space*zoom_ratio);
	var mid_x = (outter_width-new_thumb_width)/2;
	var mid_y = (outter_height-new_thumb_height)/2;
	var left = ($(this).index()*new_thumb_width)-mid_x;
	var top = ($(this).closest('.gallery_row').index()*new_thumb_height)-mid_y;
		zoomed=1;
	
	if(detectCSSFeature('transition')){
	gallery_container.stop().css({
		'width':thumbs_per_row*(thumb_width+thumb_space)*zoom_ratio,
		'height':rows*(thumb_height+row_space)*zoom_ratio,
		'margin-left':-left,
		'margin-top':-top
	});
		
	gallery_thumb.stop().css({
		'width':thumb_width*zoom_ratio,
		'height':thumb_height*zoom_ratio,
		'margin':(thumb_space*zoom_ratio/2)+'px '+(row_space*zoom_ratio/2)+'px',
		'line-height':(thumb_height*zoom_ratio)+'px'
	});
		return;
	}	
	gallery_container.stop().animate({
		'width':thumbs_per_row*(thumb_width+thumb_space)*zoom_ratio,
		'height':rows*(thumb_height+row_space)*zoom_ratio,
		'margin-left':-left,
		'margin-top':-top
	},1000);
		
	gallery_thumb.stop().animate({
		'width':thumb_width*zoom_ratio,
		'height':thumb_height*zoom_ratio,
		'margin':(thumb_space*zoom_ratio/2)+'px '+(row_space*zoom_ratio/2)+'px',
		'line-height':(thumb_height*zoom_ratio)+'px'
	},1000);

	
	
	
	}
}


function mouse_scroll(e){
	e.preventDefault();
		if(zoomed){
			return;
		}
		
		$('.transition_style').remove();
		
		var outer_width = gallery_wrapper.width();
		var outer_height = gallery_wrapper.height();
		var inner_width = gallery_container.width();
		var inner_height = gallery_wrapper.height();
		var extra = (outer_width - inner_width)<0?(inner_width-outer_width+50):(outer_width - inner_width+50);
		var extra_h = (outer_height - inner_height)<0?(outer_height - inner_height):(inner_height-outer_height);
		var win = wrapper.width();
		var pos_x = e.pageX - ((win-outer_width)/2);
		var pos_y = e.pageY;
		var left = parseInt((extra*pos_x)/outer_width);
		var top = parseInt((extra_h*pos_y)/outer_height);
		clearTimeout(intr);
		intr =  setTimeout(function(){
		gallery_container.stop().animate({marginLeft:-parseInt(left)},1000,"swing");
		},1);
}


function detectCSSFeature(featurename){
    var feature = false,
    domPrefixes = 'Webkit Moz ms O'.split(' '),
    elm = document.createElement('div'),
    featurenameCapital = null;

    featurename = featurename.toLowerCase();

    if( elm.style[featurename] ) { feature = true; } 

    if( feature === false ) {
        featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
        for( var i = 0; i < domPrefixes.length; i++ ) {
            if( elm.style[domPrefixes[i] + featurenameCapital ] !== undefined ) {
              feature = true;
              break;
            }
        }
    }
    return feature; 
}

window.initAdmin = function(){
	$(".admin-option-container").accordion({heightStyle: "fill"});
	$('#colorpickerField1').ColorPicker({
		onSubmit: function(hsb, hex, rgb, el) {
			$(el).val(hex);
			$(el).ColorPickerHide();
		},
		onBeforeShow: function () {
			$(this).ColorPickerSetColor(this.value);
		},
		onChange:function(hsb, hex, rgb){
			$("#colorpickerField1").val(hex).css("background","#"+hex);
			gallery_container.css("background","#"+hex);
		}
	})
	.bind('keyup', function(){
		
		if(this.value==''){
			this.value="ffffff";
		}
		$(this).ColorPickerSetColor(this.value);
		$("#colorpickerField1").css("background","#"+this.value);

	});
	$("#colorpickerField1").css("background","#"+container_bg).val(container_bg);
	
	$("#container_name").hide();
	
	
	$("input[name='layout_type']").click(function(e){
		if($(this).val()=='fixed'){
			$("#container_name").hide();
			}else{
			$("#container_name").show();
			}
	});
	$("#container_id").on("blur",function(){
		
	var width = $($(this).val()).width();
	var height = $($(this).val()).height();	
	$("#layout_width").attr("disabled","disabled").val(width);
	$("#layout_height").attr("disabled","disabled").val(height);
	});
	
	
	
	

}

//window.initAdmin();
	
});






















