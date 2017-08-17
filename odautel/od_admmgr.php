<?php require("includes/dbconn.php");
CheckLogin();
OpenDB();
CheckMenu('超级用户');
if(($mode=@$_GET["mode"])) {
   if($mode=="modify") {
      $adminid=$_POST["adminid"];
      $username=FilterText(trim($_POST["admin"]));
      if($username && is_numeric($adminid) and $adminid>0){
        $row=$conn->query("select id from `od_admin` where username='$username' && id<>$adminid")->fetch();
        if(empty($row)){
          $popedom=trim($_POST["popedom"]);
 	  $password=FilterText(trim($_POST["password"]));
          $sql=($password)?",password=md5('$password')":'';
          $sql="update `od_admin` set username='$username',popedom='$popedom' $sql where id=$adminid";
          $conn->exec($sql);
          if($username==$AdminUsernme) setcookie('meow[popedom]',$popedom);
          PageReturn("修改成功！");
        }
        else PageReturn("检测到用户名重名！");
      }
   }
   else if($mode=="add"){
        $admin=FilterText(trim($_POST["admin"]));
 	$popedom=FilterText(trim($_POST["popedom"]));
 	$password=FilterText(trim($_POST["password"]));
 	if($admin && $password && $popedom) {
          $row=$conn->query("select id from `od_admin` where username='$admin'")->fetch(PDO::FETCH_NUM);
          if(empty($row)){
            $conn->exec("insert into `od_admin` set username='$admin',password=md5('$password'),popedom='$popedom',regtime=unix_timestamp()");
            PageReturn("添加成功！");
          }
          else PageReturn("该用户名已经注册！");
        }else PageReturn("该用户注册信息不完整!");

   }
   else if($mode=="delete") {
      $adminid=$_POST["adminid"];
      if(is_numeric($adminid) && $adminid>1) //禁止删除adminid为1的超级管理员
      { if($conn->exec("delete from `od_admin` where id=$adminid")==1)PageReturn("删除成功！");	
      }
   }
   PageReturn("参数错误！");     
}
?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="includes/admincss.css" rel="stylesheet" type="text/css">
<SCRIPT language="JavaScript" src="includes/mg_comm.js" type="text/javascript"></SCRIPT>
<title>超级用户管理</title>
<script>
	function SaveUserInfo(frmButton)
	{	var formInputs=frmButton.parentNode.parentNode.getElementsByTagName('input');
		MyTestForm.adminid.value=formInputs[0].value.trim();
		MyTestForm.admin.value=formInputs[1].value.trim();
		MyTestForm.password.value=formInputs[2].value.trim();
		MyTestForm.popedom.value=formInputs[3].value.trim();
  	if(MyTestForm.admin.value==""  || MyTestForm.popedom.value=="")
  	{ alert("用户信息填写不完整！");
  		return;
  	}
  	MyTestForm.submit();
  }
	
	function DeleteAdmin(frmButton)
	{ if(confirm("确定要删除该用户？"))
		{ var adminid=frmButton.parentNode.parentNode.getElementsByTagName('input')[0].value;
		  MyTestForm.action="?mode=delete";
		  MyTestForm.adminid.value=adminid;
  	  MyTestForm.submit();
  	}  
	}
 	function AddNewUser(frmButton)
	{ MyTestForm.action="?mode=add";
		SaveUserInfo(frmButton);
	}
	
	function ModifyUserInfo(frmButton)
	{ MyTestForm.action="?mode=modify";
    SaveUserInfo(frmButton);
	}
 
  function CheckPopedom(strPopedomID,bitIndex)
  { var byteOffset=(bitIndex-1)>>2,bitOffset=(bitIndex-1)&0x03;
  	var tagByte=strPopedomID.charCodeAt(byteOffset);
    if(tagByte>=65 && tagByte<=70)tagByte-=55;
    else if(tagByte>=48 && tagByte<=57)tagByte-=48;
    else return false;
    return (tagByte>>bitOffset)&0x01;
  }
 
  function SetPopedom(strPopedomID,bitIndex,bitValue)
	{ var byteOffset=(bitIndex-1)>>2,bitOffset=(bitIndex-1)&0x03;
		var tagByte=strPopedomID.charCodeAt(byteOffset);
    if(tagByte>=65)tagByte-=55;
    else if(tagByte>=48 && tagByte<=57)tagByte-=48;
    else return;
    if(bitValue)tagByte|=(1<<bitOffset);
    else tagByte&=(15-(1<<bitOffset));
    if(tagByte<10)tagByte=String.fromCharCode(tagByte+48);
    else tagByte=String.fromCharCode(tagByte+55) 	
    strPopedomID=strPopedomID.substring(0,byteOffset)+tagByte+strPopedomID.substring(byteOffset+1,strPopedomID.length);
    return strPopedomID; 
  }

	var objCurrentPopedom=null;
	function RefreshPopedomDisplay(sender)
	{ var formInputs=sender.parentNode.parentNode.getElementsByTagName('input');
		var i,pid,popedomObj=formInputs[3];
		if(objCurrentPopedom!=popedomObj)
		{ objCurrentPopedom=popedomObj;
			formInputs[0].checked=true;
		}else return;
		//document.getElementById("userinfo").innerHTML="（"+formInputs[1].value+"＠"+formInputs[2].value+" &nbsp; 分组ID:"+formInputs[0].value+"）";
		for(i=0;i<PopedomDisplay.length;i++)
		{  pid=PopedomDisplay.elements[i].name;
			 pid=parseInt(pid.substring(7,pid.length));
			 PopedomDisplay.elements[i].checked=CheckPopedom(objCurrentPopedom.value,pid);
		}
	  
	}
	
	function UpdateUserPopedom(objCheckBox)
	{ if(objCurrentPopedom)
		{ var strPopedomID=objCurrentPopedom.value;
			var pid=objCheckBox.name;
			pid=parseInt(pid.substring(7,pid.length));
			strPopedomID=SetPopedom(strPopedomID,pid,objCheckBox.checked);
			objCurrentPopedom.value=strPopedomID;
			return true;
		}
		else
		{ alert("没有选择用户对象！");
			return false;
		}
	}
</script>
</head>
<body topmargin="0" leftmargin="0">
<table width="100%" border="5" align="center" cellpadding="5" cellspacing="5" bordercolor="#CCCCCC" bgcolor="#FFFFFF">
<tr> 
  <td background="images/topbg.gif"><b><img src="images/pic5.gif" width="28" height="22" align="absmiddle" />您现在所在的位置是： <a href="admincenter.php">管理首页</a> -&gt; <font color=#FF0000>超级用户管理</font></b></td>
</tr>
<tr> 
  <td valign="top" bgcolor="#FFFFFF">
  	<table width="99%" border="2" align="center" cellpadding="1" cellspacing="1" bordercolor="#FFFFFF" bgcolor="#CCCCCC">
     <tr height="20" bgcolor="#F7F7F7"><form method="post" action="?mode=modify"> 
       <td WIDTH="10%" height="25" align="center" background="images/topbg.gif"><strong>&nbsp;</strong></td>
       <td WIDTH="25%" height="25" align="center" background="images/topbg.gif"><strong>用户名</strong></td>
       <td WIDTH="15%" height="25" align="center" background="images/topbg.gif"><strong>密码</strong></td>
       <td WIDTH="30%" height="25" align="center" background="images/topbg.gif"><strong>权限</strong></td>
       <td WIDTH="20%" height="25" align="center" background="images/topbg.gif"><strong>操作</strong></td>
     </tr>
    <?php
    $res=$conn->query("select * from `od_admin` where id>1 order by username",PDO::FETCH_ASSOC);
    $row_inex=0;
    foreach($res as $row){?>
     <tr height="25" align="center" height="20" bgcolor="#FFFFFF" onMouseOut="this.bgColor='#FFFFFF';" onMouseOver="this.bgColor='#FFFF00';"> 
       <td><input name="adminid" type="radio" value="<?php echo $row["id"];?>" onclick="RefreshPopedomDisplay(this)" /></td>
       <td><input name="admin" value="<?php echo $row["username"];?>" maxlength="16" class="input_text"></td>
       <td><input name="password" value="" maxlength="16" class="input_text"></td>
       <td><input name="popedom"  maxlength="38" type="text" readOnly value="<?php echo $row["popedom"];?>" class="input_text"></td>
       <td><input type="button" value="修改" onclick="ModifyUserInfo(this)"> &nbsp; <input type="button" value="删除" onclick="DeleteAdmin(this)"></td>
     </tr>
     <?php
    }?> 
     <tr height="25" align="center" bgcolor="#FFFFFF" height="20" onMouseOut=mOut(this,"#FFFFFF") onMouseOver=mOvr(this,MENU_HOTTRACK_COLOR)> 
        <td><input name="adminid" type="radio" value="0" onclick="RefreshPopedomDisplay(this)"></td>
        <td><input name="admin"  maxlength="16" value="" class="input_text"</td>
        <td><input name="password"  maxlength="16" value="" class="input_text"</td>
        <td><input name="popedom" maxlength="38" type="text" readOnly  value="00000000000000000000000000000000" style="width:100%;text-align:center;border:0px;background-color:transparent" ></td>
        <td><input type="button" value="添加管理员" onclick="AddNewUser(this)"></td>
      </tr></form>		 
     </table>

  </td>
</tr>
</table>

<br><form method="post" name="PopedomDisplay"> 
<table width="100%" border="5" align="center" cellpadding="5" cellspacing="5" bordercolor="#CCCCCC" bgcolor="#FFFFFF">
  <tr> 
    <td height="20" background="images/topbg.gif" bgcolor="#F7F7F7"><img src="images/pic5.gif" width="28" height="22" align="absmiddle" /><b>用户操作权限设置</b></td>
  </tr>
  <tr> 
    <td height="60" bgcolor="#FFFFFF">
  	  <table width="99%" border="2" align="center" cellpadding="1" cellspacing="1" bordercolor="#FFFFFF" bgcolor="#CCCCCC">
      <tr bgcolor="#FFFFFF" height="20" onMouseOut=mOut(this,"#FFFFFF"); onMouseOver=mOvr(this,MENU_HOTTRACK_COLOR)>
        <td>&nbsp;&nbsp;<input type="checkbox" name="Popedom<?php echo PopedomIndex('SYSTEM');?>"  onclick="return UpdateUserPopedom(this)"><b>系统管理</b><img src="images/memo.gif" width=16 height=16 alt="后台系统重要参数设置"></td>
        <td>&nbsp;&nbsp;<input type="checkbox" name="Popedom<?php echo PopedomIndex('FINANCE');?>" onclick="return UpdateUserPopedom(this)"><b>财务管理</b><img src="images/memo.gif" width=16 height=16 alt="积分预存款、财务日志等删改"></td>
       </tr>
      </table>
  </td>
  </tr>
</table>
<br> 
<table width="100%" border="5" align="center" cellpadding="5" cellspacing="5" bordercolor="#CCCCCC" bgcolor="#FFFFFF">
  <tr> 
    <td height="20" background="images/topbg.gif" bgcolor="#F7F7F7" width="100%"><img src="images/pic5.gif" width="28" height="22" align="absmiddle"><b>用户菜单权限设置</b> &nbsp; <span id="userinfo" style="color:#FE0000"></span></td>
  </tr>
  <tr> 
    <td height="60" bgcolor="#FFFFFF">
  	<table width="99%" border="2" align="center" cellpadding="1" cellspacing="1" bordercolor="#FFFFFF" bgcolor="#CCCCCC"><?php
    $res=$conn->query("select * from `od_popedom` where parent=0 order by sort",PDO::FETCH_ASSOC);
    foreach($res as $row_menu){?>
    <tr bgcolor="#FFFFFF" height="20" onMouseOut=mOut(this,"#FFFFFF"); onMouseOver=mOvr(this,MENU_HOTTRACK_COLOR)>
      <td width="33%">&nbsp;&nbsp;<input type="checkbox" name="Popedom<?php echo $row_menu["id"];?>" onclick="return UpdateUserPopedom(this)"><b><?php echo $row_menu["title"];?></b></td>
    </tr><?php
    $res_sub=$conn->query("select * from `od_popedom` where parent={$row_menu['id']} order by sort",PDO::FETCH_ASSOC);
    foreach($res_sub as $row_sub){?>
    <tr bgcolor="#FFFFFF" height="20" onMouseOut=mOut(this,"#FFFFFF"); onMouseOver=mOvr(this,MENU_HOTTRACK_COLOR)>
      <td width="33%" style="padding-left:20px">&nbsp;&nbsp;<input type="checkbox" name="Popedom<?php echo $row_sub["id"];?>" onclick="return UpdateUserPopedom(this)"><?php echo $row_sub["title"];?>
      <?php if($row_sub["remark"]) echo "&nbsp;&nbsp;<img src=\"images/memo.gif\" width=16 height=16 alt=\"{$row_sub['remark']}\">";?>
      </td>
    </tr><?php
     }
    }
    CloseDB();
    ?>
    </table></form>
  </td>
  </tr>
</table>

<form name="MyTestForm" id="MyTestForm" method="post"><input type="hidden" name="adminid"><input type="hidden" name="admin"><input type="hidden" name="password"><input type="hidden" name="popedom"></form>
</body>
</html>
