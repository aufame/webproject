<?php
require_once("conn.php");
OpenDB();
$deviceID=$_GET["id"];
$tracking=$_GET["tracking"];
if( !empty($deviceID) && is_numeric($deviceID) && ($tracking=="0" || $tracking=="1") )
{ $conn->exec("update `users` set tracking=$tracking,lasttracking=strftime('%s','now') where id=$deviceID");
}
CloseDB();
?>