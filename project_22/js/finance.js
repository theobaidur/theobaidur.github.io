function initDrag(){
	var slider = $(".slider");
	var dragger = $(".slider a.dragger");
 dragger
 	  .drag("init",function(){
		  if($(this).closest(".question_outer").hasClass("state_error_editable")){
				$(this).closest(".question_outer").removeClass("state_error_editable");
				}
				
			$(".sliderTitle").removeClass("state_error_editable");
			
		})
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
	   });	
	}	

function selectBlock(){
	var a = $(".block_type_1, .block_type_2, .block_type_3, .block_type_4, .block_type_5, .block_type_6");
	a.click(function(){
		if($(this).hasClass("selected")){
			$(this).removeClass("selected");
			var name=$(this).attr("data-name");
			$("#result input[name="+name+"]").val('');
			}else{
			$(this).closest(".row-fluid").find(".selected").removeClass("selected");	
			$(this).addClass("selected");
			var name = $(this).attr("data-name");
			var val = $(this).attr("data-val");
			$("#result input[name="+name+"]").val(val);	
			}
			
			if($(this).closest(".question_outer").hasClass("state_error_editable")){
				$(this).closest(".question_outer").removeClass("state_error_editable");
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
	var val =parseInt((100000*range)/wid);
	$("#result .sliderData").text(val);
	val = commaSeparateNumber(val);
	var zero = 7-val.length;
	$(".slider_val").find("h2").text(val);
	}	
	
	
function allSelected(){
	return ($(".wizard_row").find(".selected").length==4)?1:0;
}

function trackEditable(){
	$(".input_lbl_3, .input_lbl_2, .input_lbl, .input_lbl_4, .select_box_label").find("input,textarea").focus(function(){
		if($(this).closest(".question_outer").hasClass("state_error_editable")){
				$(this).closest(".question_outer").removeClass("state_error_editable");
				}
	});
	}
	
function clickCheck(){
	$(".custom_checkbox_outer").click(function(){
		if($(this).closest(".question_outer").hasClass("state_error")){
			return;
			}
	$(this).closest(".question_outer").find(".custom_checkbox_outer").removeClass("selected");
	$(this).addClass("selected");
	var name = $(this).attr("data-name");
	var val = $(this).attr("data-val");
	$("#result input[name="+name+"]").val(val);
	$(this).closest(".question_outer").removeClass("state_error_editable");

	});
	$(".check_list").click(function(){
		$(this).toggleClass("selected");
		if($(this).hasClass("selected")){
			$("#result input[name=checkval]").val(1);
		}else{
			$("#result input[name=checkval]").val(0);
		}
		$(this).closest(".question_outer").removeClass("state_error_editable");	
	});
	
	
	}	

$(function(){
	initDrag();
	selectBlock();
	trackEditable();
	clickCheck();
	});	