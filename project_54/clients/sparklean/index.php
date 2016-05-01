<?php

require_once("{$_SERVER['DOCUMENT_ROOT']}/php/globals.php");
require_once("{$_SERVER['DOCUMENT_ROOT']}/php/classes/class.db.DatabaseAccessor.php");
require_once("{$_SERVER['DOCUMENT_ROOT']}/php/classes/class.db.Customer.php");

?>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>

	<meta http-equiv="content-type" content="text/html; charset=utf-8">
	<title>MobileIQ | Route Planning for Small Business</title>
	<link rel="shortcut icon" href="./images/favicon.ico" >

    <link href="/clients/resources/css/bootstrap.css" rel="stylesheet">
    <link href="/clients/resources/css/bootstrap-responsive.css" rel="stylesheet">
    <link href="/clients/sparklean/site.css" rel="stylesheet">

</head>

<body>

    <div class="container-fluid">
    <img src="/images/logos/logo_150px.jpg">

		<form id="formReportOptions" name="formReportOptions" class="well" action="" method="post" enctype="multipart/form-data">
		        <fieldset>

		          <legend>Welcome to the Sparklean Laundry Report</legend>
		          <div class="form-actions">  
		            <button id="formRunBtn" class="btn btn-primary">Run Report</button>
		          </div>  
		        </fieldset>  
		</form>
	  
        <footer>
        	<p>&copy; <?php print date('Y', time()) . " MobileIQ, Inc." ?> </p>
		    <div id='flash'></div>
        </footer>

    </div><!--/.fluid-container-->

	<!-- Placed at the end of the document so the pages load faster -->
	<script src="/clients/resources/js/jquery.js"></script>
	<script src="/clients/resources/js/jquery.form.js"></script>

	<script src="/clients/resources/js/bootstrap-transition.js"></script>
	<script src="/clients/resources/js/bootstrap-alert.js"></script>
	<script src="/clients/resources/js/bootstrap-modal.js"></script>
	<script src="/clients/resources/js/bootstrap-dropdown.js"></script>

	<script type="text/javascript" src="<?php echo auto_version('/clients/sparklean/site.js'); ?>"></script>

</body>

</html>