<?php

//-----------------------------------------------------------------------------
// http://applications.gomobileiq.com/routes/report?token=abc123&route=1&date=4/17/2012
// token = unique for every Headlight account
// loc_route = location + '-' + route id
// date  = scheduled delivery or service date in mm/dd/yyyy format
//-----------------------------------------------------------------------------
require_once("{$_SERVER['DOCUMENT_ROOT']}/php/database.php");
require_once("{$_SERVER['DOCUMENT_ROOT']}/php/classes/class.db.Customer.php");
require_once("{$_SERVER['DOCUMENT_ROOT']}/php/classes/class.se.account.inc");
require_once("{$_SERVER['DOCUMENT_ROOT']}/php/classes/class.se.route.inc");
require_once("{$_SERVER['DOCUMENT_ROOT']}/php/classes/class.se.calendar.inc");

$response['message'] = '';
$response['success'] = false;

//-----------------------------------------------------------------------------
// parse _POST parameters
//-----------------------------------------------------------------------------
if (!isset($_REQUEST['token']) || !isset($_REQUEST['loc_route']) || !isset($_REQUEST['date'])) {

	$response['message'] = "Error: Must specify token, route and date";
	print json_encode($response);
	exit();
}

$loc_route = $_REQUEST['loc_route'];
$date      = date('Y-m-d', strtotime($_REQUEST['date']));
$token     = $_REQUEST['token'];

//-----------------------------------------------------------------------------
// validate API key
//-----------------------------------------------------------------------------
$acct = SEAccount::findByApiKey( $_REQUEST['token'] );
if (! $acct) { 

	$response['message'] = "Errror: Invalid token";
	print json_encode($response);
	exit();
}
$account_id = $acct->getId();

//-----------------------------------------------------------------------------
// query valid routes
//-----------------------------------------------------------------------------
$response['routes'] = SERoute::findActiveByAccount($acct);

//-----------------------------------------------------------------------------
// query upcoming dates
//-----------------------------------------------------------------------------
$response['dates'] = SECalendar::getUpcomingDeliveryDates($account_id);

//-----------------------------------------------------------------------------
// query deliveries for route and date
//-----------------------------------------------------------------------------
$db_parameters['sql_database'] = 'SE' . $account_id;
$db = new Customer($db_parameters);

$parts = explode('-', $loc_route);
$start = $parts[0];
$route = $parts[1];

$response['deliveries'] = $db->find_query("start = ? and route = ? and date_next_delivery = ?", array($start, $route, $date));

//-----------------------------------------------------------------------------
// return JSON
//-----------------------------------------------------------------------------
$response['message'] = '';
$response['success'] = true;
print json_encode($response);

exit();

//-----------------------------------------------------------------------------
// mock data
//-----------------------------------------------------------------------------
$response['routes'] = array( 'Grand-0', 'Grand-1', 'Grand-2' );

$response['data'] = array(

    array('id' => 'Neidhart1001P',  'company' => 'Sheri Neidhart',              'instructions' => 'Here are some instructions'),
    array('id' => 'SDI1009[1]',     'company' => 'SDI: Palm Valley',            'instructions' => 'Here are some instructions'),
    array('id' => 'GN2000',         'company' => 'Sun City Good Night Sleep',   'instructions' => 'Here are some instructions'),
    array('id' => 'Medstar1001D',   'company' => 'Medstar Academy',             'instructions' => 'Here are some instructions'),
    array('id' => 'PV1001[1]',      'company' => 'Palo Verde Cancer Center',    'instructions' => 'Here are some instructions'),

);

?>