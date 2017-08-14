<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<style type="text/css">
body, html,#allmap {width: 100%;height: 100%;overflow: hidden;margin:0;}
</style>
<title>GPS追踪器</title>
</head>
<body  topmargin="0">
<?php
require_once("conn.php");
OpenDB();
global $username,$deviceID,$guarding,$tracking,$longitude,$latitude,$lastupdate,$online;
$deviceID=trim($_GET["id"]);
if(empty($deviceID))
{ $rs=$conn->query("select * from `users` where devicesn is not null",PDO::FETCH_ASSOC);
	echo "<table border=1 cellSpacing=0 cellPadding=0 width=100% style=\"background-color: #FFFFFF;BORDER-COLLAPSE: collapse;\">";
 	echo "<tr align=center><th>用户名</th><th>设备序列号</th><!--th>设备SIM卡号</th--><th>用户手机号</th><th>设防状态</th><th>经度</th><th>纬度</th><th>更新时间</th></tr>";
  foreach($rs as $row)
  { if($row["online"]) $u_color="#00AA00";else $u_color="#000000";
  	echo "<tr align=center bgcolor=#FFFFFF onMouseOut=\"this.bgColor='#FFFFFF';\" onMouseOver=\"this.bgColor='#FFFF00';\"><td><a href=\"?id=".$row["id"]."\"><font color=$u_color>".$row["username"]."</font></a></td><td>".$row["devicesn"]."</td><td>".$row["mobilephone"]."</td><td>".$row["guarding"]."</td><td>".$row["longitude"]."</td><td>".$row["latitude"]."</td><td>".date("Y-m-d H:i:s",$row["lastupdate"])."</td></tr>";
  }
  echo "</table><script>setTimeout(function(){self.location.reload();},60000);</script></body></html>";
  PageReturn();
}
else if(is_numeric($deviceID))
{ $rs=$conn->query("select * from `users` where id=$deviceID or deviceSN='$deviceID'");//后面只能通过deviceID而不是deviceSN来访问。
	$row=($rs)?$rs->fetch():0;
	if(!empty($row))
	{ $deviceID=$row["id"];
		$username=$row["username"];
    $longitude=$row["longitude"];
    $latitude=$row["latitude"];
	  $lastupdate=$row["lastupdate"];
	  $guarding=$row["guarding"];
	  $tracking=$row["tracking"];
    if(empty($row["online"])) $online=0; else $online=1;
    if($tracking!=1)$conn->exec("update `users` set tracking=1,lasttracking=strftime('%s','now') where id=$deviceID");
	}
	else
	{ echo "<p align=center>Invalid parameters!</p>";
		PageReturn();
	}
}else PageReturn();

CloseDB();
?>	
<!--script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=TbTKwQML1eXpQMmtIVMlOmXe"></script-->
<script type="text/javascript" src="http://api.map.baidu.com/api?v=2.0&ak=3pfoLoubSN2yiheYbFyrx17M"></script>
<script type="text/javascript" src="http://developer.baidu.com/map/jsdemo/demo/convertor.js"></script>
<script type="text/javascript" src="gpstracker.js"></script>
<div id="allmap"></div>
</body>
</html>
<script type="text/javascript">
<?php
echo "gpsmap_init($deviceID,\"$username\",$online,$guarding,$longitude,$latitude,$lastupdate);";
?>
</script>
