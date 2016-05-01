// JavaScript Document
function validate(form){
	with (form) {
		
		
		// For Name
		if( (name.value=='') || (name.value=='* Name:') ) {
			
			alert('Please Enter Your Name');
			form.name.focus();
			return false;
		}


		// For Eamil
		if( (email.value=='') || (email.value=='* Email:') ) {
			
			alert('Please Enter Your Email');
			form.email.focus();
			return false;
			
		}else{
			
			var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
			if(reg.test(email.value) == false) 
			{
				alert('Please Enter Valid Email');
				form.email.focus();
				return false;
			}
			
		}
		
		
		// For Message
		if( (message.value=='') || (message.value=='* Message:') ) {
			
			alert('Please Enter Your Message');
			form.message.focus();
			return false;
		}
	
	}
	
}