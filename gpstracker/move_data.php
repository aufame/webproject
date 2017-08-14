<?php
 require_once("conn.php");
 OpenDB();
 


 $conn2 = new PDO("odbc:driver={microsoft access driver (*.mdb)};dbq=".realpath("data/gps#tracker.asa"));


 $rs2=$conn2->query("select * from `users` where deviceSN is not null");
  
 foreach($rs2 as $row)
 { $sql="insert into `users`(username,password,IDentify,realname,DeviceSN,address,telephone,devicephone,mobilephone,longitude,latitude,guarding,tracking,lastupdate,regdate,lastlogin,lasttracking,online,ipdate,portdata) values(:username,:password,:IDentify,:realname,:DeviceSN,:address,:telephone,:devicephone,:mobilephone,:longitude,:latitude,:guarding,:tracking,:lastupdate,:regdate,:lastlogin,:lasttracking,:online,:ipdate,:portdata)";
   $rs=$conn->prepare($sql);
   $rs->bindValue(":username",$row["username"]);
 	 $rs->bindValue(":password",$row["password"]);
 	 $rs->bindValue(":IDentify",$row["IDentify"]);
 	 $rs->bindValue(":realname",$row["realname"]);
 	 $rs->bindValue(":DeviceSN",$row["DeviceSN"]);
 	 $rs->bindValue(":address",$row["address"]);
 	 $rs->bindValue(":telephone",$row["telephone"]);
 	 $rs->bindValue(":devicephone",$row["devicephone"]);
 	 $rs->bindValue(":mobilephone",$row["mobilephone"]);
 	 $rs->bindValue(":longitude",$row["longitude"]);
 	 $rs->bindValue(":latitude",$row["latitude"]);
 	 $rs->bindValue(":guarding",$row["guarding"]);
 	 $rs->bindValue(":tracking",$row["tracking"]);
 	 $rs->bindValue(":lastupdate",$row["lastupdate"]);
 	 $rs->bindValue(":regdate",$row["regdate"]);
 	 $rs->bindValue(":lastlogin",$row["lastlogin"]);
   $rs->bindValue(":lasttracking",$row["lasttracking"]);
   $rs->bindValue(":online",$row["online"]);
   $rs->bindValue(":ipdate",$row["ipdate"]);
   $rs->bindValue(":portdata",$row["portdata"]); 
   if($rs->execute()==1) //执行sql并返回受影响的列数
   { echo "ok";
   }
 } 


 CloseDB();
?>