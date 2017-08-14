<?php
require_once("conn.php");
OpenDB();
$deviceID=$_GET["id"];
if(!empty($deviceID) &&is_numeric($deviceID))
{ $sql="select longitude,latitude,online,guarding,tracking,lastupdate from `users` where id=$deviceID";
	$lastupdate=trim($_GET["lastupdate"]); 
 	if(!empty($lastupdate) && is_numeric($lastupdate))
 	{ $sql.=" and lastupdate>$lastupdate";
 	}
 	$rs=$conn->query($sql,PDO::FETCH_NUM);
 	$row=($rs)?$rs->fetch():NULL;
 	if(!empty($row))
 	{ ob_clean();//clean OutputBuffer 
 		echo "|".$row[0]."|".$row[1]."|".$row[2]."|".$row[3]."|".$row[4]."|".$row[5]."|";
  }
}
CloseDB();
?>