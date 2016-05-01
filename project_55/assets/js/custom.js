$(document).ready(function(){

	$(".date-section .date-list > li").each(function(){
		 var This = $(this);

		 This.click(function(){
		 	$(".date-section .date-list > li").removeClass('select')
		 	$(this).addClass("select");
		 })
	})

	$(".chatbox-header .close").click(function(e){
		e.preventDefault();
		$(".chatbox-wrap").hide();
	})

})