<?php

$client_credentials = base64_encode("lineuplab:1C749751F3E46E9A584E57AF78");

function CallAPI($method, $url, $headers, $data = false)

{


$curl = curl_init();

switch ($method)

{

case "POST":

curl_setopt($curl, CURLOPT_POST, 1);

if ($data)

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

break;

default:

if ($data)

$url = sprintf("%s?%s", $url, http_build_query($data));

}

curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);

curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

curl_setopt($curl, CURLOPT_URL, $url);

return curl_exec($curl);

}

//get token

$result = CallAPI("POST", "https://www.draftkings.com/oauth",array(

'Authorization: Basic ' . $client_credentials,

'Content­Type: application/x­www­form­urlencoded'

), "grant_type=client_credentials&scope=partner%20partner.salaryfeed");

//if token request was successful get salary feed using it.
if($result){

$token = json_decode($result, true)["access_token"];

$salaries = CallAPI("GET",

"https://www.draftkings.com/api/partner/salaryfeed", array('Authorization: Bearer ' .

$token));

print_r($salaries);

}

?>