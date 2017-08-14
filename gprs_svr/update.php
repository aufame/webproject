<?php
 //mobile=12345678901&notable=1234567890&btntable=12345678901
 $mobile=trim($_POST["mobile"]);
 $notable=trim($_POST["notable"]);
 $btntable=trim($_POST["btntable"]);
 if(empty($mobile) && empty($notable) && empty($btntable))
 { $mobile=trim($_GET["mobile"]);
   $notable=trim($_GET["notable"]);
   $btntable=trim($_GET["btntable"]);
   if(empty($mobile) && empty($notable) && empty($btntable))
   { echo "Failed!";
   	 exit;
   }
   else
   { $mobile="<i>$mobile</i>";
   }
 }
 require_once("conn.php");
 OpenDB();
 try //事务管理
 { $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);//设置使用抛出异常错误模式，默认为silent 则只是记录errorCode，发生错误时仍然继续往下执行。
	 $conn->beginTransaction();//事务开始
 	 
 	 $query=$conn->query("select id from `logs` where property=0 limit 1");
 	 $logid=(empty($query))?0:$query->fetchColumn();
	 if(empty($logid))$sql="insert into `logs`(mobile,notable,btntable,property,addtime) values(:mobile,:notable,:btntable,1,:addtime)";
	 else $sql="update `logs` set mobile=:mobile,notable=:notable,btntable=:btntable,property=1,addtime=:addtime where id=$logid and property=0";
   $query=$conn->prepare($sql);
 	 $query->bindValue(":mobile",$mobile);
 	 $query->bindValue(":notable",$notable);
 	 $query->bindValue(":btntable",$btntable);
 	 $query->bindValue(":addtime",time()); //字段类型是integer类型的时间戳
   if($query->execute()==1) //执行sql并返回受影响的列数
   { ob_clean();//clean OutputBuffer 
     echo "<ok>";
   }
   $conn->commit();  //事务完成，任何情况没有执行到该步，整个事务都不会生效（会自动回滚）。
 }
 catch(PDOException $ex) 
 { $conn->rollBack();  //事务回滚 
	 echo "Failed: " . $ex->getMessage();
 } 
 CloseDB();
?>