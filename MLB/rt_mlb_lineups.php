<?php

date_default_timezone_set('America/New_York');

require_once dirname(__FILE__) . '/lib/scraper2.php';

$scraper = new scraper();
$scraper->browser->setUserAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31');
// $scraper->browser->useCache = true;
$scraper->browser->convertUrls = true;

/*

*/

$page = $scraper->get('http://www.rotowire.com/baseball/daily_lineups.htm');

//echo $page->search('.span15.offset1')->length;

$rows = array();

$csv_data = "Team1,Team2,Time". PHP_EOL;

foreach($page->search('.span15.offset1') as $div){
  $item = array();
  $t1 = $div->at('.span5.dlineups-topboxleft')->clean_text;
  $t2 = $div->at('.span5.dlineups-topboxright')->clean_text;
  $t = $div->at('.dlineups-topboxcenter-topline a')->clean_text;
  if($t1 && $t2 && $t){
  	$csv_data .= "$t1,$t2,$t". PHP_EOL;	
  }
  	  
}

$file_datestamp = (date("m-d-y_g-i-s-A"));

header("Content-type: text/csv");
header("Cache-Control: no-store, no-cache");
header('Content-Disposition: attachment; filename="MLB_RT_SCH.csv"');

echo "$csv_data";

// $output = dirname(__FILE__).'/predata/live/mlb_lineups.csv';
// if(file_exists($output)) copy($output, dirname(__FILE__).'/predata/archive/mlb_lineups_'.$file_datestamp.'.csv');
// file_put_contents($output, $csv_data);

/* Saving in finaldata*/
// $output_final = dirname(__FILE__).'/finaldata/live/MLB_RT_SCH.csv';
// if(file_exists($output_final)) copy($output_final, dirname(__FILE__).'/finaldata/archive/MLB_RT_SCH_'.$file_datestamp.'.csv');
// file_put_contents($output_final, $csv_data);

/* Saving in live & prod */
// $prod_output = '/home/bpender/webapps/lineuplab/data/MLB_RT_SCH.csv';
// $dev_output = '/home/bpender/webapps/dev/data/MLB_RT_SCH.csv';
// file_put_contents($prod_output, $csv_data);  
// file_put_contents($dev_output, $csv_data);

#OLD CSV
#$scraper->save('nba_lineups.csv', $rows);

#JSON
#file_put_contents('predata/MLB_RT_SCH.csv', $csv_data);

?>