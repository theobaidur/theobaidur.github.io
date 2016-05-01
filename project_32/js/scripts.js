// JavaScript Document<script>


  $(window).bind("load", function() {
    $("#loading").animate({top: "-1000px"}, 1000, "easeInQuint" );
    $("#loading").delay(3000).hide(0);
  });


$(document).ready(function(){
	
    $('a[href^="#"]').bind('click.smoothscroll',function (e) {
        e.preventDefault();
        
        var target = this.hash,
        $target = $(target);
      
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-60
        }, 2500, 'easeInOutQuint', function () {
            //window.location.hash = target;
        });
    });
});

    $(function() {
      $('#slides').superslides({
		hashchange: true,
        play: 6000,  
        inherit_width_from: '.wide-container',
        inherit_height_from: '.wide-container',
		pagination: false
      });
    });
	

$(document).ready(function() {
    var scrollorama = $.scrollorama({
        blocks:'.scrollblock'
    });
	scrollorama.animate('.icon01',{ delay:-600, duration: 500, property:'left', start: -150, easing:'easeOutCubic' }, { duration: 300, delay:-700, property:'opacity', start: 0 });
scrollorama.animate('.icon02',{ delay:-300, duration: 500, property:'right', start: -150, easing:'easeOutCubic' }, { duration: 300, delay:-400, property:'opacity', start: 0 });
scrollorama.animate('.icon03',{ duration: 500, property:'left', start: -150, easing:'easeOutCubic' }, { duration: 300, property:'opacity', start: 0 });
scrollorama.animate('.icon04',{ delay:400, duration: 500, property:'right', start: -150, easing:'easeOutCubic' }, { delay:400, duration: 300, property:'opacity', start: 0 });
scrollorama.animate('.icon05',{ delay:600, duration: 500, property:'left', start: -150, easing:'easeOutCubic' }, { delay:600, duration: 300, property:'opacity', start: 0 });
scrollorama.animate('.icon06',{ delay:900, duration: 500, property:'right', start: -150, easing:'easeOutCubic' }, { delay:900, duration: 300, property:'opacity', start: 0 });

scrollorama.animate('#alcanzamos',{ delay:300, duration: 500, property:'left', start: -300, easing:'easeOutCubic' }, { delay:300, duration: 300, property:'opacity', start: 0 });
scrollorama.animate('#enEquipo',{ delay:400, duration: 500, property:'left', start: -300, easing:'easeOutCubic' }, { delay:400, duration: 300, property:'opacity', start: 0 });
scrollorama.animate('#about-arrow',{ delay:400, duration: 500, property:'left', start: -300, easing:'easeOutCubic' }, { delay:400, duration: 300, property:'opacity', start: 0 });
scrollorama.animate('#somosPortsoft', { delay:500, duration: 300, property:'opacity', start: 0 });
scrollorama.animate('.logo-content', { delay:400, duration: 300, property:'opacity', start: 0 });
scrollorama.animate('#art01',{ delay:400, duration: 500, property:'margin-top', start: 54, easing:'easeOutCubic' }, { delay:400, duration: 300, property:'opacity', start: 0 });
scrollorama.animate('#art02',{ delay:500, duration: 500, property:'margin-top', start: 54, easing:'easeOutCubic' }, { delay:500, duration: 300, property:'opacity', start: 0 });


});

// FORM

  $(function() {   
    $("#send").click(function() {
		var name = $("input#name").val();
		var mail = $("input#mail").val();
		var msg = $("textarea#msg").val();
		function isValidEmail(emailAddress) {
    var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
    return pattern.test(emailAddress);
  };
 		//VALIDACION
		$(".formError").hide();
  	  	if (name == "") {
			$("#name_error").show();
			$("input#name").focus();
			return false;
      }
  		if (!isValidEmail(mail)) {
			$("#mail_error").show();
			$("input#mail").focus();
			return false;
      }
  		if (msg == "") {
			$("#msg_error").show();
			$("input#msg").focus();
			return false;
      }	
			
			
		if (isValidEmail(mail) && name != "" && msg != ""){
		
					 var dataString = 'name='+ name + '&mail=' + mail + '&msg=' + msg;
					//alert (dataString);return false;
					$.ajax({
						type: "POST",
						url: "save.php",
						data: dataString,
						success: function() {
							$("#formSuccess").fadeIn(500);
						}
					
					});
			
		}else{
			$("#formMainError").fadeIn(500);
		}
  return false;
  
    });
  });
  
  $(function() {
$( "#dialog" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});
$( "#opener" ).click(function() {
$( "#dialog" ).dialog( "open" );
});

$( "#dialog_one" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});
$( "#opener_one" ).click(function() {
$( "#dialog_one" ).dialog( "open" );
});

$( "#dialog_two" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});
$( "#opener_two" ).click(function() {
$( "#dialog_two" ).dialog( "open" );
});

$( "#dialog_three" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});
$( "#opener_three" ).click(function() {
$( "#dialog_three" ).dialog( "open" );
});

$( "#dialog_four" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});
$( "#opener_four" ).click(function() {
$( "#dialog_four" ).dialog( "open" );
});

$( "#dialog_five" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});
$( "#opener_five" ).click(function() {
$( "#dialog_five" ).dialog( "open" );
});

$( "#dialog_six" ).dialog({
autoOpen: false,
show: {
effect: "fade",
duration: 1000
},
hide: {
effect: "explode",
duration: 1000
}
});
$( "#opener_six" ).click(function() {
$( "#dialog_six" ).dialog( "open" );
});

});
