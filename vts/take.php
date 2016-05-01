<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

$host = 'localhost';
$uname = 'wwwdream_vts';
$pwd = 'wwwdream_vts';
$db = "wwwdream_vts";

$con = @mysql_connect($host, $uname, $pwd) or die("connection failed");
mysql_select_db($db, $con) or die("db selection failed" );

	$device_id = $_REQUEST['device_id'];
	$lat = $_REQUEST['lat'];
	$lang = $_REQUEST['lang'];

	$is_device = mysql_query(
"SELECT device_id FROM devices WHERE device_id='$device_id'") or die(mysql_error());

if (mysql_num_rows($is_device) > 0) {
	mysql_query("INSERT INTO device_location VALUES('$device_id', '$lang', '$lat')") or die(mysql_error());
	echo 'success';
}else{
	echo 'failed';
}

mysql_close($con);
?>