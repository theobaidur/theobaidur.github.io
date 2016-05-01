<?php
/*******************
* scraper.php
* @author - P Guardiario <pguardiario@gmail.com>
*******************/

set_time_limit(0);

if(version_compare(PHP_VERSION, '5.3.0') < 0) die("Error: $argv[0] requires php version 5.3.0 or greater.");

require_once dirname(__FILE__) . '/advanced_html_dom.php';
require_once dirname(__FILE__) . '/pgbrowser.php';
require_once dirname(__FILE__) . '/pgcsv.php';

/**
 * Scraper
 */
class Scraper{

  function __construct(){
    $this->init();
  }

  private function init(){
    $this->browser = new PGBrowser('advanced');
    // pretend to be chrome
    $this->browser->setUserAgent('Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.31 (KHTML, like Gecko) Chrome/26.0.1410.64 Safari/537.31');
    $this->browser->convertUrls = true;
  }

  public function save($output, $data){
    if(empty($data)) return;

    $headers = array();
    foreach($data as $item){
      foreach($item as $key => $value){
        if(!in_array($key, $headers)) $headers[] = $key;
      }
    }

    $csv = new CSV($output, $headers);

    foreach($data as $record){
      $csv->save($record);
    }

    $csv->close();
  }


  public function save_csv_and_json($slug, $data){
    $file_datestamp = (date("m-d-y_g-i-s-A"));

    // csv
    $output = dirname(__FILE__) . '/../predata/live/' . $slug . '.csv';
    if(file_exists($output)) copy($output, dirname(__FILE__) . '/../predata/archive/' . $slug . '_' . $file_datestamp . '.csv');
    $this->save($output, $data);

    // json
    $output = dirname(__FILE__) . '/../predata/live/' . $slug . '.json';
    if(file_exists($output)) copy($output, dirname(__FILE__) . '/../predata/archive/' . $slug . '_'.$file_datestamp . '.json');
    file_put_contents($output, json_encode($data));
  }





  public function get($url){
    return $this->browser->get($url);
  }
  
  public function post($url, $body, $headers = array()){
    return $this->browser->post($url, $body, $headers);
  }
  
  var $visited;

  public function visited($url){
    if(!isset($this->visited)) $this->visited = array();
    if(array_search($url, $this->visited) !== false) return true;
    $this->visited[] = $url;
    return false;
  }
}

if(isset($argv) && basename(__FILE__) == $argv[0]){
  $scraper = new scraper();
}

?>