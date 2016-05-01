<?php 

$to = 'tuc30024@temple.edu';

$subject = 'Lead submission from Greenlight Loans';

$headers = "From: " . strip_tags($_POST['emailAddr']) . "\r\n";
$headers .= "Reply-To: ". strip_tags($_POST['emailAddr']) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";


$message = '<html><body>';
$message .= "<h3>The following lead was submitted from greenlightloans.com</h3>";
$message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
$message .= "<tr style='background: #eee;'><td><strong>Name:</strong> </td><td>" . strip_tags($_POST['firstName']). strip_tags($_POST['lastName']) . "</td></tr>";
$message .= "<tr><td><strong>Email:</strong> </td><td>" . strip_tags($_POST['emailAddr']) . "</td></tr>";
$message .= "<tr><td><strong>Phone:</strong> </td><td>" . strip_tags($_POST['homePhone']) . "</td></tr>";
$message .= "<tr><td><strong>Loan type:</strong> </td><td>" . strip_tags($_POST['loanType']) . "</td></tr>";
$message .= "<tr><td><strong>Property type:</strong> </td><td>" . $_POST['propertyType'] . "</td></tr>";
$message .= "<tr><td><strong>Property state:</strong> </td><td>" . htmlentities($_POST['propertyState']) . "</td></tr>";
$message .= "</table>";
$message .= "</body></html>";


if(mail($to, $subject, $message, $headers)){
	echo json_encode(array(
		"response"=>"success",
		"title"=>"Done !!!",
		"message"=>"A mortgage professional will be contacting you shortly"
		)
	);	
}else{
	echo json_encode(array(
		"response"=>"error",
		"title"=>"Sorry",
		"message"=>"Something went wrong. Please, try again later."
		)
	);
}


?>