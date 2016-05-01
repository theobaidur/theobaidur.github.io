function initDrag(){
	var slider = $(".slider");
	var dragger = $(".slider a.dragger");
 dragger
      .drag(function( ev, dd ){
		  var X = slider.offset().left+slider.outerWidth();
		  var l = Math.max(slider.offset().left,Math.min(dd.offsetX,X-46));
		  var range = l-slider.offset().left;
		  updateSliderInfo(range);
         $( this ).css({
            left: range
         });   
      })
 	   .drag("end",function(ee,dd){
		if($(".wizard_row.row_1").find(".selected").length==0){
		$(".wizard_row.row_1").find(".outer").removeClass("enabled").addClass("selected");
		$(".wizard_row.row_2").find(".outer").removeClass("disabled").addClass("enabled");
		}   
	   
	   });	
	}	
	
function commaSeparateNumber(val){
    while (/(\d+)(\d{3})/.test(val.toString())){
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
  }		

function updateSliderInfo(range){
	var wid = $(".slider").outerWidth()-46;
	var val =parseInt((500000*range)/wid);
	$(".sliderData").text(val);
	val = commaSeparateNumber(val);
	var zero = 7-val.length;
	var str=$("<span>");
	if(zero){
		while(zero){
			str.append("0");
			zero--;
		}
	}
	$(".slider_val").html($("<h2>").text(val).prepend(str));
	}	
	
	
function initSelection(){
	var a = $(".wizard_row").find(".outer");
	a.each(function() {
        $(this).find(".block_con").find(".selectable").click(function(){
			if($(this).closest(".outer").hasClass("disabled")){
			return false;	
			}
			
		$(this).closest(".outer").find(".selectedBlock").removeClass("selectedBlock");
		if(!$(this).closest(".outer").hasClass("selected")){
		$(this).closest(".outer").addClass("selected").removeClass("enabled");
		$(this).closest(".wizard_row").next(".wizard_row").find(".outer").addClass("enabled").removeClass("disabled");
		}
		if(allSelected()){
			$(".bottom_row").addClass("enabled");
		}
		$(this).addClass("selectedBlock");
		var name = $(this).attr("target");
		var val = $(this).attr("value");
		$(".formdata input[name="+name+"]").val(val);	
		});
    });
}

function initClass(){
	$(".wizard_row").eq(0).find(".outer").addClass("enabled");
	$(".wizard_row:not(:first)").find(".outer").addClass("disabled");
	
	}
	
function allSelected(){
	return ($(".wizard_row").find(".selected").length==4)?1:0;
}

function initPopup(){
	$(".bottom_row h2").click(function(e){
		if(allSelected()){
			var a = $("html").outerHeight();
			var b = $(".wizard_popup_wrapper");
			b.height(a).show();
			initPiechart();
			$('html, body').animate({ scrollTop:0});


			b.add(".close_btn").click(function(e){
				if( e.target !== this ) 
       			return;
				b.hide();	
			});	
			
		}
	});
}

function initPiechart(){
	var color = ["#23C0A3","#F05469","#679AC9","#AA8537"];
	var val = $('.piechart_con').attr("value").split(",");
	showPercentage(val);	
	var option = {
		type:'pie',
		sliceColors:color,
		width:200,
		height:200
		}
	$('.piechart_con').sparkline(val,option);
	}
	
function showPercentage(val){
	var total = 0;
	for(var i=0;i<val.length;i++){
		total+=Number(val[i]);
	}
	
	for(var i=0;i<val.length;i++){
		var pt = (((Number(val[i])/total)*100)).toFixed(1);
		$(".piechart_text .pie_val").eq(i).text(pt+"%");	
	}
	
	}			
$(function(){
	initClass();
	initDrag();
	initSelection();
	initPopup();
	});	