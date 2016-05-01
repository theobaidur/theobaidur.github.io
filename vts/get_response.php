<?php

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');

	$host = 'localhost';
	$uname = 'wwwdream_vts';
	$pwd = 'wwwdream_vts';
	$db = "wwwdream_vts";
	
	$con = @mysql_connect($host, $uname, $pwd) or die("connection failed");
	mysql_select_db($db, $con) or die("db selection failed");
	
	$device_id = $_REQUEST['device_id'];
	
	$is_device = mysql_query("SELECT device_id FROM devices WHERE device_id='$device_id'") or die(mysql_error());
	
	if (mysql_num_rows($is_device) > 0) {
		$response["dl"] = array();
	
		$result = mysql_query("SELECT * FROM device_location WHERE device_id='$device_id'") or die(mysql_error());
		
		while ($row = mysql_fetch_array($result)) {
			$dl["device"] = $row["device_id"];
			$dl["lang"] = $row["lang"];
			$dl["lat"] = $row["lat"];
	
			array_push($response["dl"], $dl);
		}
		echo json_encode($response);
	}
	
	mysql_close($con);
?>