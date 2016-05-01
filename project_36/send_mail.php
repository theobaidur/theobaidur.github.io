<?php
	header('Content-type: application/json');
	

    $fname       = @trim(stripslashes($_POST['first_name'])); 
    $lname      = @trim(stripslashes($_POST['last_name'])); 
    $email    = @trim(stripslashes($_POST['email'])); 
    $detials    = @trim(stripslashes($_POST['details'])); 

    $to = 'Steve@theinfiniteagency.com';

    $subject = 'Request for infromation';

    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    $body = "Hi <br/>";
    $body .= $fname." has requested for information <br/> Details are below. <br/><hr>";
    $body .= "First Name : <b>" .$fname."</b><br/>";
    $body .= "Last Name : <b>" .$lname."</b><br/>";
    $body .= "Email : <b>" .$email."</b><br/>";
    $body .= "Details : <br/><b>" .$details."</b><br/>";
    
    $success = @mail($to, $subject, $body, $headers);
    if($success){
        echo json_encode(array('status'=>'sent'));
    }else{
        echo json_encode(array('status'=>'failed'));
    }
    
    die;