<?php

require_once dirname(__FILE__) . '/lib/scraper.php';

$scraper = new scraper();
$scraper->browser->setUserAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31');
// $scraper->browser->setProxy('localhost', 8888);
$scraper->browser->useCache = true;
$scraper->browser->convertUrls = true;



foreach(array('draftkings' => "http://www.rotowire.com/daily/MLB/value-report.htm?site=DraftKings", 'fanduel' => "http://www.rotowire.com/daily/MLB/value-report.htm") as $section => $url){
  echo $url . "\n";
  $page = $scraper->get($url);

  $top_headers = array();
  $bottom_headers = array();
  $headers = array();
  $players = array();

  $table = $page->at('table.tablesorter');
  $tr = $table->at('thead tr[1]');
  foreach($tr->search('th') as $th){
    $span = @$th->colspan ? @$th->colspan : 1;
    for($i = 0; $i < $span; $i++){
      $top_headers[] = $th->id ? '' : $th->clean_text;
    }
  }

  $tr = $table->at('thead tr[2]');
  foreach($tr->search('th') as $th){
    $span = @$th->colspan ? @$th->colspan : 1;
    for($i = 0; $i < $span; $i++){
      $bottom_headers[] = $th->clean_text;
    }
  }

  while(count($top_headers)){
    $key = array_shift($top_headers);
    $value = array_shift($bottom_headers);
    $str = trim($key . ' ' . $value);
    // if(!empty($key)) $str = 'VS ' . $pos .  ' ' . $str;
    $headers[] = $str;
  }

  //var_dump($headers); exit;

  foreach($table->search('tbody tr') as $tr){
    $cells = $tr->search('td')->clean_texts;
    $item = array_combine($headers, $cells);
    $name = $item['Player Name'];
//    unset($item['Player Name']);
    $players[] = $item;
  }

  $scraper->save_csv_and_json('rotowire_mlb_' . $section, $players);
}


/*
PG,

One of the data sources went live!  It is here:  http://www.rotowire.com/daily/MLB/value-report.htm

We will also need the draftkings data: http://www.rotowire.com/daily/MLB/value-report.htm?site=DraftKings

We need all of the columns:
Inline image 1

And just FYI, this is the other URL we will be grabbing once it comes online (very soon):  http://www.numberfire.com/mlb/fantasy/fantasy-baseball-projections


This is needed as soon as possible.  Time is very limited.  Let me know how you would like to proceed!

Obie, do you want this in both JSON and CSV?
*/
?>