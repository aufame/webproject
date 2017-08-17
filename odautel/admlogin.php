<?php require("includes/dbconn.php");
session_start ();

$adminuser=FilterText(trim($_POST["adminuser"]));
$adminpsw=FilterText(trim($_POST["adminpsw"]));
$authcode=trim($_POST["authcode"]);  
//echo $_SESSION["authcode"];

if(empty($adminuser)|| empty($adminpsw) ||empty($authcode)){
  echo '<script LANGUAGE="javascript">alert("登录失败！请检查您的登录信息是否完整！");</script>';
}
else if(strtolower($authcode)!=strtolower($_SESSION['authcode'])) {
  echo '<script LANGUAGE="javascript">var verifyimg=parent.document.all("LoginCheckout");if(verifyimg)verifyimg.src="includes/authcode.php?handle='.time().'";alert("登录失败！验证码错误！");</script>';
}
else {
   OpenDB();
   $res=$conn->query("select popedom from `od_admin` where username='$adminuser' and password=md5('$adminpsw')",PDO::FETCH_NUM);
   $row=$res->fetch(PDO::FETCH_NUM); 
   if($row){
     include("includes/mg_comm.php");
     #$sessionID=rand()+time(NULL);
     $res=$conn->exec("update `od_admin` set loginip=".ipton(GetIP()).",logintime=unix_timestamp() where username='$adminuser'");
     setcookie("odautel[admin]",$adminuser,time()+3600*24); 
     setcookie("odautel[popedom]",$row[0]); 
     setcookie("odautel_home","");
     echo "<script LANGUAGE='javascript'>top.location.href='{$_SERVER['HTTP_REFERER']}';</script>";
   }
   else echo '<script LANGUAGE="javascript">alert("用户名或者密码错误，登录失败！");</script>';
   CloseDB();
}
