<?php
	ob_start();
	session_start();

		$url = $_SERVER['HTTP_REFERER'];
		
		$uri = strpos($url,'?');
		
		if($uri){
			$url = substr($url,0, $uri);
		}
		
		if( trim($_REQUEST[name]) == '' || trim($_REQUEST[name]) == 'Name *') 
			$errors .= "Please Enter Name<br/>" ;
		
		if(!preg_match("/^[\w]+[\w-.]*[@]{1}[-A-z0-9_]+[-A-z0-9_.]*[.]{1}[A-z]{2,5}$/",$_REQUEST[email]))
			$errors .= "Please Enter Valid Email<br/>";

		if($errors == ''){

			
			include ('class.phpmailer.php');
			
			$Mail = new PHPMailer();
			$Mail -> ClearAllRecipients();
			$Mail -> AddAddress('info@cordesfoundation.org');
			
			$Mail -> From = $_REQUEST[email];
			$Mail -> FromName = $_REQUEST[name];
			$Mail -> Subject =" Contact Us Form Filled at Cordes Foundation ";
			
			$Body = '<style type="text/css">
					.txt {
						font-family: Verdana, Arial, Helvetica, sans-serif;
						font-size: 11px; color:#000;
					}
					</style>
			<table width="90%" border="0" cellpadding="3" cellspacing="5">
			  <tr>
				<td width="30%" align="right" class="txt"><strong>From :</strong></td>
				<td width="70%" class="txt">'.$_REQUEST[name].'</td>
			  </tr>
			  <tr>
				<td align="right" class="txt"><strong>Email :</strong></td>
				<td class="txt">'.$_REQUEST[email].'</td>
			  </tr>
			  <tr>
				<td align="right" class="txt"><strong>Message :</strong></td>
				<td class="txt">'.$_REQUEST[message].'</td>
			  </tr>
			  <tr>
				<td>&nbsp;</td>
				<td>&nbsp;</td>
			  </tr>
			</table>';
			
			$Mail -> Body = $Body;
			$Mail -> IsHTML ('true');

			
			//echo '<pre>'; print_r($Mail); exit;
			if($Mail -> Send()) {

				header("Location: $url?errors=false"); exit;
				
			}else{
				
				header("Location: $url?errors=true"); exit;
			}
			
		}else{
			
				header("Location: $url?errors=true");
		}
?>