<?php
require_once("conn.php");
OpenDB();
$deviceID=$_GET["id"];
$guarding=$_GET["guarding"];
if(!empty($deviceID) && is_numeric($deviceID) && ($guarding=="2" || $guarding=="3"))
{ $rs=$conn->query("select guarding from `users` where id=$deviceID");
  $g_origin=$rs->fetchColumn(0);
  $guarding=intval($guarding);
  if ( ($guarding==2 && ($g_origin==3 || $g_origin==1)) || ($guarding==3 && ($g_origin==2 || $g_origin==0)) )
  { $conn->exec("update `users` set guarding=$guarding where id=$deviceID");
  }
}
CloseDB();
?>