<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>test</title>
</head>
<body  topmargin="0">
<?php
require_once("conn.php");
OpenDB();

if(empty($_COOKIE["username"]))
{ $username=$_POST["username"];
  $password=$_POST["password"];
  if (!empty($username) && !empty($password))
  { $username=FilterText(trim($username));
  	$query = $conn->query("select password,username,id from `users` where username='$username'",PDO::FETCH_NUM); 
  	$rs = $query->fetch(PDO::FETCH_NUM);//FETCH_NUM参数指名：返回记录的各字段以0起始的下标作为索引。
  	                                   //可以在执行query()时指定FETCH模式，也可以在执行fetch()重新指定FETCH模式；
  	                                   //如果在执行fetch()时不指定FETCH模式,则默认采用query()指定的FETCH模式;
  	                                   //如果fetch()与query()都没有指定FETCH模式，则默认为PDP::FETCH_BOTH模式；
  	                                   //尽量不要用默认的PDP::FETCH_BOTH模式，以节省索引开销。
  	                                   //注意：字段名索引区分大小写。
  	if($rs)
    {	if($rs[0]==$password)
    	{	setcookie("username",$username);
      	PageReturn("登录成功!！",".");
      }
      else	PageReturn("密码错误！",1);  
    }
    else
    {  PageReturn("用户名不存在！",1);  	
    }
  }
  else
  {?><TABLE cellSpacing="1" cellPadding="5" width="400" bgColor="#ff9900" border="0" align="center">
     <TR bgColor="#ffffcc">
        <TD align="middle"><B><font face="隶书" size="5" color="#FF0000">管理员登陆</font></B></TD>
     </TR>
     <TR bgColor="#ffffff">
       <TD></TD>
     </TR>
     <tr><form method=post action="?">
         <TD align=center style="COLOR: #000000; FONT-size: 9pt">用户名:<input type="text" name="username" size="14" maxlength=16 style="font-size:9pt">&nbsp;&nbsp;&nbsp;密码:<input type="password" name="password" size="14" maxlength=16 style="font-size:9pt">&nbsp;&nbsp;<input type="submit" value="进入" name="login"></TD>
         </form>
     </tr>
     </TABLE></body></html><?php
  }
  PageReturn(); 
}

$action=$_GET["action"];
if($action=="delete")
{ $selectid=$_POST["selectid"];
  if(empty($selectid)) PageReturn("没有选择操作对象！",2);
  $conn->exec("update `logs` set property=0 where id in (".implode(",",$selectid).")");
	PageReturn("所选记录删除成功！",1);
}	
else if($action=="security")
{?><TABLE cellSpacing="1" cellPadding="5" width="300" bgColor="#ff9900" border="0" align="center">
   <form method=post action="?action=savesecurity">
   <TR bgColor="#ffffcc"><TD align="middle" colspan="2"><B><font face="隶书" size="5" color="#FF0000">密码安全</font></B></TD></TR>
   <tr><TD>原用户名:</td><td><input type="text" name="username1" size="14" maxlength=16 style="font-size:9pt"></td></tr>
   <tr><TD>新用户名:</td><td><input type="text" name="username2" size="14" maxlength=16 style="font-size:9pt"></td></tr>
   <tr><TD>确认用户名:</td><td><input type="text" name="username3" size="14" maxlength=16 style="font-size:9pt"></td></tr>
   <tr><TD>原密码:</td><td><input type="password" name="password1" size="14" maxlength=16 style="font-size:9pt"></td></tr>
   <tr><TD>新密码:</td><td><input type="password" name="password2" size="14" maxlength=16 style="font-size:9pt"></td></tr>
   <tr><TD>确认密码:</td><td><input type="password" name="password3" size="14" maxlength=16 style="font-size:9pt"></td></tr>
   <tr><TD colspan="2" align="center"><input type="submit" value=" 修 改 "></TD></td></tr>
   </tr></form>
   </TABLE><?php
   PageReturn();
}   
else if($action=="savesecurity")
{ $username1=FilterText(trim($_POST["username1"]));
	$username2=FilterText(trim($_POST["username2"]));
	$username3=FilterText(trim($_POST["username3"]));
	$password1=FilterText(trim($_POST["password1"]));
	$password2=FilterText(trim($_POST["password2"]));
	$password3=FilterText(trim($_POST["password3"]));
	
  if(empty($username1)) PageReturn("原用户名不能为空！",1);
  if(empty($username2)) PageReturn("新用户名不能为空！",1);
  if($username2!=$username3) PageReturn("两次用户名不一致！",1);
  if(empty($password1)) PageReturn("原密码不能为空！",1);
  if(empty($password2)) PageReturn("新密码不能为空！",1);
  if($password2!=$password3) PageReturn("两次密码不一致！",1);
  $query=$conn->query("select * from `users` where username='$username1'");
  $rs=($query)?$query->fetch(PDO::FETCH_ASSOC):NULL;
  if(empty($rs))
  {	PageReturn("原用户名不存在！",1);
  }
  else
  { if($rs["password"]!=$password1)
  	{ PageReturn("原密码不正确！",1);
    }	
  	else
  	{	$conn->exec("update `users` set password='$password2',username='$username2' where username='$username1'");
  		PageReturn("用户名密码修改成功！",".");
  	}  
  }
  exit();
}
else if($action=="logout")
{ setcookie("username");
	PageReturn("退出成功！",".");
}

$searchtype=$_GET["searchtype"];
if(!empty($searchtype))
{	if($searchtype=="mobile" || $searchtype=="notable" || $searchtype=="btntable") $searchkey=$_GET["searchkey"];
}

?>
<table border=0 cellSpacing=0 cellPadding=0 width=100% style="background-color: #FFFFFF;BORDER-COLLAPSE: collapse;table-layout:fixed;word-wrap:break-word;">
<tr><form method="get"><td>按<select name="searchtype"><option value="mobile">mobile</option><option value="notable">notable</option><option value="btntable">btntable</option></select><input type=text" name="searchkey" size=30 value=""><input type="submit" value="搜索" ></td></form><td align="right"><a href="download.php">下载</a> | <a href="?action=security">安全</a> | <a href="?action=logout">退出</a> |</td></tr>
</table>
<table border=1 cellSpacing=0 cellPadding=0 width=100% style="background-color: #FFFFFF;BORDER-COLLAPSE: collapse;table-layout:fixed;word-wrap:break-word;">
<form method="post" action="?action=delete">
<tr align=center style="color:#FFFFFF;background-color:#0000FF"><td width="50"><input type="checkbox" name="checkbox2" value="Check All" onclick="Checkbox_SelectAll('selectid[]',this.checked)" /></td><th>mobile</th><th>notable</th><th>btntable</th><th width="180">更新时间</th></tr>
<?php
 $MAX_PER_PAGE=50;
 if(empty($searchkey)) $sql_condition="where property>0";
 else $sql_condition="where property>0 and $searchtype like '%$searchkey%'";
 
 $query=$conn->query("select count(*) from `logs` $sql_condition",PDO::FETCH_NUM); 
 $total_records=empty($query)?0:$query->fetchColumn(0);
 if($total_records>0)
 {  $total_pages=(int)(($total_records+$MAX_PER_PAGE-1)/$MAX_PER_PAGE);
 }
 else
 { echo "<tr><td colspan=5 align=center>没有找到符合条件的记录！</td></tr></table></body></html>";
 	 PageReturn();
 }
 $page=$_GET["page"];
 if(is_numeric($page))
 { $page=(int)$page;
 	 if($page<1)$page=1;
 	 else if($page>$total_pages)$page=$total_pages;
 }else $page=1;
 
 
 $query=$conn->query("select * from `logs` $sql_condition order by addtime desc limit ".($MAX_PER_PAGE*($page-1)).",$MAX_PER_PAGE",PDO::FETCH_ASSOC);
 
 /* 可以直接对$进行foreach遍历，而不必须通过fetchAll读出来再遍历。
  $query=$query->fetchAll(PDO::FETCH_ASSOC);
  foreach($query as $rs)
 */
 foreach($query as $rs)
 { echo "<tr align=center bgcolor=#FFFFFF onMouseOut=\"this.bgColor='#FFFFFF';\" onMouseOver=\"this.bgColor='#FFFF00';\"><td><input type=checkbox name='selectid[]' value='".$rs["id"]."'></td><td>".$rs["mobile"]."</td><td>".$rs["notable"]."</td><td>".$rs["btntable"]."</td><td>".date("Y-m-d H:i:s",$rs["addtime"])."</td></tr>";
 }
 
 function GenPageUrl($page)
 { global $searchtype,$searchkey;
   return "?page=$page&searchtype=$searchtype&searchkey=$searchkey";
 }
?>
  
<tr bgcolor="#FFFFFF">
	<td align="center"><input type="button" value="删除" onclick="delete_selected(this.form)"></td> 
   	<td colspan="4" align="center" height="30"}                                                                                                                                                                                             >
    共 <b><?php echo $total_records ?></b>条记录  
    <?php
    if($page==1) echo "首页 上一页"; else echo "<a href=\"".GenPageUrl(1)."\">首页</a> <a href=\"".GenPageUrl($page-1)."\">上一页</a>&nbsp;";
    if($page==$total_pages) echo "下一页 尾页";else echo "<a href=\"".GenPageUrl($page+1)."\">下一页</a> <a href=\"".GenPageUrl($total_pages)."\">尾页</a>";
    ?> 
    页次：<strong><font color="red"><?php echo $page ?></font>/<?php echo $total_pages?></strong>页 <b><?php echo $MAX_PER_PAGE?></b>条/页  
     转到第<input type="text" name="page" value="<?php echo $page ?>" size=3 maxlength=8 style="text-align:center" onFocus="this.select()" onkeyup="if(isNaN(value))execCommand('undo')"  onkeydown="if(window.event.keyCode==13){this.form.jumpbtn.click();return false;}">页
    &nbsp;<input type="button" name="jumpbtn" value="跳转" onclick="self.location.href='?page='+this.form.page.value;"> 
   	</td>
</tr>
</form>
</table>

<script>
function Checkbox_SelectedCount(boxname)
{ var a = document.getElementsByName(boxname);
  var SelectCount = 0;
  for (var i=0; i<a.length; i++)
  { if (a[i].type == "checkbox" && a[i].checked)SelectCount++;
  }
  return SelectCount;
} 

function Checkbox_SelectAll(boxname,onoff)
{  var a = document.getElementsByName(boxname);
   for (var i=0; i<a.length; i++)
   { if (a[i].type == "checkbox" && a[i].disabled==false)
       a[i].checked = onoff;
   }
}
function delete_selected(myform)
{ var selected_count=Checkbox_SelectedCount("selectid[]");
	if(selected_count>0)
	{ if(confirm("确定要删除所选的"+selected_count+"条记录？"))
		{ myform.submit();
		} 
	}
  else alert("没有选择操作对象！");
}
</script>
</body>
</html>
<?PHP CloseDB();?>
