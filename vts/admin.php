<?php
$con = mysqli_connect("localhost", "wwwdream_vts", "wwwdream_vts", "wwwdream_vts");
// Check connection
if (mysqli_connect_errno()) {
	echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$result = mysqli_query($con, "SELECT * FROM device_location");
$markers = array();
while ($markers[] = mysqli_fetch_assoc($result)) {

}

$json = json_encode($markers);

mysqli_close($con);
?>

<!DOCTYPE html>
<html>
<head>
	<title>VTS</title>
	<meta name="description" content="A demo of maps with multiple markers and infowindow" />
	<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
	<style>
		html, body, #map-canvas { height: 100%; margin: 0px; padding: 0px }
    </style>
    

	<script type="text/javascript">

var LocationData = <?php echo $json; ?>;

function initialize()
{
	var map = 
	    new google.maps.Map(document.getElementById('map-canvas'));
	var bounds = new google.maps.LatLngBounds();
	var infowindow = new google.maps.InfoWindow();
	
	for (var i in LocationData)
	{
		var p = LocationData[i];
		if(!p){
			continue;
		}
		var latlng = new google.maps.LatLng(p["lang"],p["lat"]);
		bounds.extend(latlng);
		
		var marker = new google.maps.Marker({
			position: latlng,
			map: map,
			title: p["device_id"]
		});
	
		google.maps.event.addListener(marker, 'click', function() {
			infowindow.setContent(this.title);
			infowindow.open(map, this);
		});
	}
	
	map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, 'load', initialize);

	</script>

</head>

<body>
	<div id="map-canvas"></div>
</body>
</html>