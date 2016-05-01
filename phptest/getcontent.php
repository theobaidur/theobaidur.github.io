<?php

// see if article id is provided.
if (empty($_GET['publisher']) || empty($_GET['article'])) {
	echo json_encode(array('error' => 'No publisher/article id given.'));
	exit;
}

// see if any of the session parameters are missing.
if (empty($_GET['uid']) || empty($_GET['token']) || empty($_GET['time'])) {
	echo json_encode(array('error' => 'No access.'));
	exit;
}

// hit https://api.cointent.com/gating/publisher/PID/article/AID for access check
$uri = 'https://api.cointent.com/gating/publisher/'.$_GET['publisher'].'/article/'.$_GET['article'].'?'.http_build_query(array(
	'uid' => $_GET['uid'],
	'token' => $_GET['token'],
	'time' => $_GET['time']
));
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $uri);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
$jsonOutput = curl_exec($ch);
curl_close($ch);

// sample json output of valid access:
// {"gating":{"publisherId":"2","articleId":"88","access":"bigi@cointent.com","timestamp":1415131920}} 

if (empty($jsonOutput)) {
	echo json_encode(array('error' => 'CoinTent API problems.'));
	exit;
}

$output = json_decode($jsonOutput, true);

// "access" would return false when content is not purchased
if (empty($output['gating']) || empty($output['gating']['access'])) {
	echo json_encode(array('error' => 'No access.'));
	exit;
}

// everything is good, return content!

echo json_encode(array('text' => "<p>Congratulations! Your purchase went through and you are now reading the locked content of article #".$_GET['article']."! Enjoy.</p>"));

