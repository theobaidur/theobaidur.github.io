<?php
$firstName = $_POST['name'];
$usermail = $_POST['mail'];
$message = $_POST['msg'];
$email = 'nicop8@hotmail.com';
//Cabeceras del correo
            $headers = "From: $firstName <$usermail>\r\n"; //Quien envia?
            $headers .= "X-Mailer: PHP5\n";
            $headers .= 'MIME-Version: 1.0' . "\n";
            $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n"; //


//build email content
$emailSubject = "Consulta de ".$firstName;
$mailContent = $message;


//send mail
if(mail($email,$emailSubject,$mailContent,$headers)) 
    echo "mail send successful";
else
    echo "mail send fail";
			?>