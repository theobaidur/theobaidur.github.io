function submitSchedule(name, company, phone, email){
	
	window.location.href = "https://marketman.youcanbook.me";//redirect user
    $('#myModa20').modal('hide');//close the form
}

function submitGetStarted(name, company, phone, email){
	
	$('#myModa21').find(".modal-body").addClass("form-dismissed").removeClass("form-dismiss");//Show message
}

function submitContact(name, company, phone, email){
	
}

$('#myModa21').on('show.bs.modal', function (e) {
  $('#myModa21').find(".modal-body").addClass("form-dismiss").removeClass("form-dismissed");

})


function validateEmail(email) {
    var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return re.test(email);
}
 
$(".input-name").blur(function(){
  var val = $(this).val();
  if($.trim(val)!=''){
    $(this).closest(".form-group").addClass("has-success").removeClass("has-error");
  }else{
    $(this).closest(".form-group").addClass("has-error").removeClass("has-success");
  }
});

$(".input-business-name").blur(function(){
  var val = $(this).val();
  if($.trim(val)!=''){
    $(this).closest(".form-group").addClass("has-success").removeClass("has-error");
  }else{
    $(this).closest(".form-group").addClass("has-error").removeClass("has-success");
  }
});

$(".input-phone").blur(function(){
  var val = $(this).val();
  if($.trim(val)!=''){
    $(this).closest(".form-group").addClass("has-success").removeClass("has-error");
  }else{
    $(this).closest(".form-group").addClass("has-error").removeClass("has-success");
  }
});

$(".input-mail").blur(function(){
  var val = $(this).val();
  if($.trim(val)!='' && validateEmail(val)){
    $(this).closest(".form-group").addClass("has-success").removeClass("has-error");
  }else{
    $(this).closest(".form-group").addClass("has-error").removeClass("has-success");
  }
});

/*--Scheduel a demo and Contact us--*/

$(".btn-send").click(function(e){
  e.preventDefault();
  
  
  var inputs = $(this).closest("form").find(".form-group");
  var valids = $(this).closest("form").find(".has-success");
  var not_req = $(this).closest("form").find(".input-not-required").length;

  if(inputs.length-not_req != valids.length){
    

    inputs.each(function(){
      $(this).find("input").blur();
    });
  }else{
  	var name = $(this).closest("form").find(".input-name").val();
  	var company = $(this).closest("form").find(".input-business-name").val();
  	var phone = $(this).closest("form").find(".input-phone").val();
  	var email = $(this).closest("form").find(".input-mail").val();
  	
  	
    if($(this).closest("#myModa20").length != 0){
    	submitSchedule(name, company, phone, email);
    }else{ 	
    	submitContact(name, company, phone, email);
    }
    
    
  }
  
});

/* Get started continue button*/

$(".btn-continue").click(function(e){
  e.preventDefault();
  console.log("css");
  var inputs = $(this).closest("form").find(".form-group");
  var valids = $(this).closest("form").find(".has-success");
  var not_req = $(this).closest("form").find(".input-not-required").length;

  if(inputs.length-not_req != valids.length){
    

    inputs.each(function(){
      $(this).find("input").blur();
    });
  }else{
    var name = $(this).closest("form").find(".input-name").val();
  	var company = $(this).closest("form").find(".input-business-name").val();
  	var phone = $(this).closest("form").find(".input-not-required").val();
  	var email = $(this).closest("form").find(".input-mail").val();
  	
    	submitGetStarted(name, company, phone, email);
    
    
  }
  
});

$(document).ready(function(){
    $(".ha_clients_slide").jCarouselLite({
        btnNext: "#next_1",
        btnPrev: "#prev_1",
        speed: 800,
        vertical: false,
        visible:5,
        auto:5000
    });

    $(".media_section a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});

    $(window).scroll(function(){
      var top = $(this).scrollTop();
      var opacity = .6 + (.5*top/500);
      if(opacity>1){
        opacity=1;
      }
      if(top<=500){
        $(".navbar-default").css("background","rgba(17,33,50,"+opacity+")");
      }
    });
 });