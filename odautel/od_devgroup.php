<?php require("includes/dbconn.php");
//CheckLogin();
OpenDB();//open database
//CheckMenu('盒子分组');

function sort_boxgroup() {
  $selectid=$_POST['selectid'];
  $mode=$_GET['mode'];
  if(is_numeric($selectid) && $selectid>0 && ($mode=='0' || $mode=='1')) {
    $property=$GLOBALS['conn']->query("select property from `od_devgroup` where id=$selectid")->fetchColumn(0);
    if($property){
       if($mode=='1'){
          $row=$GLOBALS['conn']->query("select id,property from `od_devgroup` where property<$property and property>0 order by property desc limit 1")->fetch(PDO::FETCH_NUM);
          if($row){
              $id2=$row[0];
              $property2=$row[1];
          }
       }
       else{
         $row=$GLOBALS['conn']->query("select id,property from `od_devgroup` where property>$property order by property asc limit 1")->fetch(PDO::FETCH_NUM);
         if($row){
            $id2=$row[0];
            $property2=$row[1];
         }
       }   
      if($id2) { 
         $GLOBALS['conn']->exec("update `od_devgroup` set property=$property2 where id=$selectid");
         $GLOBALS['conn']->exec("update `od_devgroup` set property=$property where id=$id2");
      }
    }
  }
  PageReturn(NULL);
}


function add_record() {
  $new_group_name = $_POST["groupname"];
  if($GLOBALS['conn']->query("select id from `od_devgroup` where groupname='$new_group_name' and property<>0")->fetch()){
     PageReturn("无法创建设备类型,该名称{$new_group_name}已存在！");
  }
  else {
     $sql="`od_devgroup` set groupname='$new_group_name',property=unix_timestamp()";
     if($GLOBALS['conn']->exec("update $sql where property=0 order by id asc limit 1")==0) $GLOBALS['conn']->exec("insert into $sql");
     PageReturn("创建新设备类型({$new_group_name})成功！");
  }
}



function delete_record() {
  $selectid=$_POST["selectid"];
  if(is_numeric($selectid) && $selectid>0) {
    $GLOBALS['conn']->exec("update `od_devgroup` set groupname=null,property=0,rom_ver=0,flash_ver=0,rom_url=null,flash_url=null where id=$selectid");
    PageReturn("所选设备类型删除成功！");
  } 
}

function change_groupname(){
  $selectid=$_POST["selectid"];
  if(is_numeric($selectid) && $selectid>0) {
    $groupname=FilterText(trim($_POST['groupname']));
    if($groupname){
       $GLOBALS['conn']->exec("update `od_devgroup` set groupname='$groupname' where id=$selectid");
       PageReturn("所选设备类型名修改成功！");
    }
  }
}

function upgrade_fw(){
  $selectid=@$_POST['selectid'];
  $mode=@$_GET['mode'];
  if($mode=='0')$mode="rom";
  else if($mode=='1')$mode="flash";
  else return;
  if(is_numeric($selectid) && $selectid>0) {
    $version=$_GET['version'];
    if(is_numeric($version)) {
      if($GLOBALS['conn']->exec("update `od_devgroup` set {$mode}_ver=$version,{$mode}_url='{$_POST['url']}' where id=$selectid"))PageReturn("设备固件 更新成功！");
    }
  }
}


$action=@$_GET["action"];
if($action)
{ if($action=='groupname') change_groupname();
  else if($action=='delete')delete_record();
  else if($action=='addgroup')add_record();
  else if($action=='upgrade')upgrade_fw();
  else if($action=='sort')sort_boxgroup();
}

?>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="includes/admincss.css" rel="stylesheet" type="text/css">
<SCRIPT language="JavaScript" src="includes/mg_comm.js" type="text/javascript"></SCRIPT>
<title>设备固件管理</title>
<style type="text/css">
td.groupname {text-align:left;padding-left:20px;} 
td.groupname span { color:#222266;}
</style>

<script type="text/javascript">

function check_groupname(group_name) {
  var MAX_GROUP_NAME = 32;
  var MIN_GROUP_NAME = 3;
  var namelen=group_name.length;
  if (namelen > MAX_GROUP_NAME) {
    alert("设备类型名称不能超过" + MAX_GROUP_NAME + "字");
    return false;
  }
  else if (namelen < MIN_GROUP_NAME) {
    alert("设备类型名称不能短于" + MIN_GROUP_NAME + "字");
    return false;
  }
  return true;
}

function sort_boxgroup(mode) {
  var myform=document.forms["groupform"];
  if(RadioboxSelected(myform.selectid)){
      myform.action="?action=sort&mode="+mode;
      myform.submit();
  }
  else alert('没有选择操作对象！');
}


function add_record() {
    var myform = document.forms["groupform"];
    var doConfirm=function(new_group){
      if(new_group!=null) {
        new_group=new_group.trim();
        if(check_groupname(new_group)) {
          myform.action="?action=addgroup";
          myform.groupname.value = new_group;
          myform.submit();
        }
      }
   };
   AsynPrompt("新建设备类型","输入设备类型名:",doConfirm,'',32)
}


function delete_record() {
  var myform=document.forms["groupform"];
  if(RadioboxSelected(myform.selectid)){
    if(confirm("确认删除选定的设备类型？")) {
      myform.action="?action=delete";
      myform.submit();
    } 
  }
  else alert('没有选择操作对象！');
}

function change_groupname(){
  var myform=document.forms["groupform"];
  var groupid=RadioboxSelected(myform.selectid);
  if(groupid){
     var groupname=document.getElementById('sn'+groupid);
     if(groupname)groupname=groupname.innerText.trim()||groupname.textContent.trim();
     if(groupid.length<2)groupid='0'+groupid;
     if(groupname){
       var doConfirm=function(ret){
         if(ret!=null){
           ret=ret.trim();
           if(ret==groupname)alert("设备类型名没有改变！");
           else{
             if(check_groupname(ret)) {    
               myform.action="?action=groupname";
               myform.groupname.value=ret;
               myform.submit();
             }
           }
         }
       };
       AsynPrompt("修改设备类型名","输入<G"+groupid+">组固件的新设备类型名:",doConfirm,groupname,32)
     } 
  }
  else alert('没有选择操作对象！');
}

function update_firmware(mode){
  var myform=document.forms["groupform"];
  var selectid=RadioboxSelected(myform.selectid);
  if(selectid){
     var version=GetInnerText('v'+mode+"_"+selectid).trim();
     var groupname=GetInnerText('sn'+selectid).trim();
     var doConfirm=function(version){
       if(version!=null){
         version=version.trim();
         if(!version || isNaN(version)){
           alert("版本号无效！");
           return;
         }
         else if(groupname){
           var bin_file=(mode==0)?groupname+".rom":groupname+".fls";
           var upload_callback=function(ret) { 
             myform.action="?action=upgrade&version="+version+"&mode="+mode;
             myform.url.value=ret;
             myform.submit();
           }
           showUploadDialog("APP",bin_file,upload_callback);
         }
       } 
     };
     AsynPrompt("设备固件更新","输入新版本号:",doConfirm,version,8)
  }
  else alert('没有选择操作对象！');
}
</script>
</head>
<body topmargin="0" leftmargin="0">
<table width="100%" height="100%" border="5" align="center" cellpadding="5" cellspacing="5" bordercolor="#CCCCCC" bgcolor="#FFFFFF">
  <tr> 
    <td background="images/topbg.gif" height="20">
    	 <table width="100%" height="20" border="0" cellpadding="0" cellspacing="0">
     	 <tr>
     	 	  <td><b><img src="images/pic5.gif" width="28" height="22" align="absmiddle" />您现在所在的位置是： <a href="admincenter.php">管理首页</a> -> <a href="od_devgroup.php"><font color=#FF0000>设备固件管理</font></a></b></td>
     	    <td align="right"><input type="button" value="↑" title="排序上调" onclick="sort_boxgroup(0)"><input type="button" value="↓" title="排序下调" onclick="sort_boxgroup(1)"> &nbsp; &nbsp; <input type="button" value="新建设备类型" onclick="add_record();">&nbsp; <input type="button" value="删除设备类型" onclick="delete_record();">&nbsp; <input type="button" value="修改设备类型名" onclick="change_groupname();">&nbsp; <input type="button" value="更新ROM文件" onclick="update_firmware(0);">&nbsp; <input type="button" value="更新FLASH文件" onclick="update_firmware(1);">&nbsp;</td>
     	 </tr>
       </table>
    </td>
  </tr>
  <tr> 
      <td height="100%" valign="top" bgcolor="#FFFFFF">
<!--Content begin-----------------------------------------------------------------------------------------------------------> 
  <table width="99%" border="2" align="center" cellpadding="1" cellspacing="1" bordercolor="#FFFFFF" bgcolor="#CCCCCC">
  <tr height="20" bgcolor="#F7F7F7" align="center"> 
    <td WIDTH="11%" background="images/topbg.gif"><strong>设备类型</strong></td>
    <td WIDTH="8%" background="images/topbg.gif"><strong>版本号</strong></td>
    <td WIDTH="12%" background="images/topbg.gif"><strong>ROM文件</strong></td>
    <td WIDTH="10%" background="images/topbg.gif"><strong>文件大小 (Bytes)</strong></td>
    <td WIDTH="15%" background="images/topbg.gif"><strong>上传时间</strong></td>
    <td WIDTH="8%" background="images/topbg.gif"><strong>版本号</strong></td>
    <td WIDTH="11%" background="images/topbg.gif"><strong>FLASH文件</strong></td>
    <td WIDTH="10%" background="images/topbg.gif"><strong>文件大小 (Bytes)</strong></td>
    <td WIDTH="15%" background="images/topbg.gif"><strong>上传时间</strong></td>
  </tr><form name="groupform" method="post"><input type="hidden" name="groupname"><input type="hidden" name="url">
<?php 

include('includes/mg_comm.php');

$res=$conn->query("select * from `od_devgroup` where property>0 order by property desc",PDO::FETCH_ASSOC); 
foreach($res as $row){
  echo '<tr height=28 align=center bgcolor=#FFFFFF onMouseOut="this.bgColor=\'#FFFFFF\';" onMouseOver="this.bgColor=\'#FFFF00\';">';
  echo '<td align=left class="groupname"><input type=radio name="selectid" value="'.$row['id'].'"><span id="sn'.$row['id'].'"> '.$row['groupname'].'</span></td>';
  echo "<td id='v0_{$row['id']}'>".sprintf('%0.1f',$row['rom_ver']).'</td>';
  echo "<td><a href='{$row['rom_url']}' target='_blank'>".mg_checkFile($row['rom_url'],$filesize,$filetime).'</a></td>';
  echo '<td>'.number_format($filesize).'</td>';
  echo '<td>'.date("Y-m-d H:i:s",$filetime).'</td>';
  echo "<td id='v1_{$row['id']}'>".sprintf('%0.1f',$row['flash_ver']).'</td>';
  echo "<td><a href='{$row['flash_url']}' target='_blank'>".mg_checkFile($row['flash_url'],$filesize,$filetime).'</a></td>';
  echo '<td>'.number_format($filesize).'</td>';
  echo '<td>'.date("Y-m-d H:i:s",$filetime).'</td>';
  echo "</tr>\n";
}
?>

</form></table>
<!--Content end-----------------------------------------------------------------------------------------------------------> 
      </td>
</tr>
</table>
</body>
</html>
<?php
CloseDB();//close database
?>
<!--todo list--------------------------------


-->
