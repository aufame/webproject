<?php
header("content-type:text/html;charset=utf-8");
$ak="qYxEuKoRWexueGRxoeez2nIC";
$lat=$_GET["lat"];
$lng=$_GET["lng"];
if(is_numeric($lat) && is_numeric($lng))
{ $coordtype="wgs84ll";//采用gps坐标系
	$url="http://api.map.baidu.com/geocoder/v2/?ak=$ak&location=$lat,$lng&output=json&pois=0&coordtype=$coordtype";
  $handle = fopen($url, "rb"); 
  if($handle)
  { $contents = stream_get_contents($handle); 
    if(preg_match("/\"formatted_address\":\"([^\"]+).+$/",$contents,$match)==1) echo $match[1];
    fclose($handle);
  } 
}
?>