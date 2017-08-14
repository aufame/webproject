<?php require("includes/dbconn.php");

$groupname=trim(FilterText(@$_REQUEST['name']));

if($groupname){
  OpenDB();//open database
  $row=$GLOBALS['conn']->query("select rom_ver,rom_url,flash_ver,flash_url from `od_devgroup`")->fetch(PDO::FETCH_NUM);
  if($row){
    $rom_ver=$row[0];
    $rom_url=$row[1];
    $flash_ver=$row[2];
    $flash_url=$row[3];
    ob_clean();
    echo $rom_ver.'|'.$rom_url.'|'.$flash_ver.'|'.$flash_url.'|';
  }
  CloseDB();//close database
}


?>
