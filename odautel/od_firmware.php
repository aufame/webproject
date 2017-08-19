<?php require("includes/dbconn.php");
//CheckLogin();
OpenDB();//open database
//CheckMenu('盒子分组');

function add_new() {
  $property=$_POST['property'];
  $types = strtoupper(FilterText(trim($_POST['types'])));
  $subtype = FilterText(trim($_POST['subtype']));
  $version= FilterText(trim($_POST['version']));
  if(($property=='1'||$property=='2')&& $types && $subtype && $version){
    $row=$GLOBALS['conn']->query("select id from `od_firmware` where types='$types' and subtype='$subtype' and ver='$version' and property=$property")->fetch();
    if($row){
      PageReturn("无法创建固件，对应的固件版本已经存在！");
    }
    else {
      $sql="`od_firmware` set types='$types',subtype='$subtype',ver='$version',property=$property";
     if($GLOBALS['conn']->exec("update $sql where property=0 order by id asc limit 1")==0) $GLOBALS['conn']->exec("insert into $sql");
      $model=($property=='1')?'ROM':'FLS';
      PageReturn("固件{$types}-{$subtype}-{$model}创建成功！");
    }
  }
}

function delete_record() {
  $selectid=$_POST["selectid"];
  if(is_numeric($selectid) && $selectid>0) {
    $path=$GLOBALS['conn']->query("select url from `od_firmware` where id='$selectid' and property>0")->fetchColumn(0);
    if($path){
      if (substr($path, 0, 1) == '/') $path=$_SERVER['DOCUMENT_ROOT'].$path;
      else $path=realpath($path);
      unlink($path); 
    }
    $GLOBALS['conn']->exec("update `od_firmware` set property=0,url=null where id=$selectid");
    PageReturn("所选固件删除成功！");
  } 
}

function upgrade_fw(){
  $selectid=@$_POST['selectid'];
  if(is_numeric($selectid) && $selectid>0) {
    $version=$_GET['version'];
    if($version) {
      if($GLOBALS['conn']->exec("update `od_firmware` set ver='$version',url='{$_POST['url']}' where id=$selectid"))PageReturn("设备固件 更新成功！");
    }
  }
}


$action=@$_GET["action"];
if($action)
{ if($action=='delete')delete_record();
  else if($action=='addnew')add_new();
  else if($action=='upgrade')upgrade_fw();
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

function CheckFirmwareVersion(version){
  var ver_valid=0;
  if(version.length>=5){
    var ver_num=version.split('.');
    if(ver_num.length==3){
      for(var i=0;i<3;i++){
        var num=ver_num[i];
        if(num.length>0 && !isNaN(num))ver_valid++;
        else break;
      }
    }
  }
  return (ver_valid==3);
}

function update_firmware(){
  var myform=document.forms["groupform"];
  var selectid=RadioboxSelected(myform.selectid);
  if(selectid){
     var types=GetInnerText('t'+selectid).trim();
     var version=GetInnerText('v'+selectid).trim();
     var model=(types.indexOf("ROM")>0)?'ROM':'FLS';
     var doConfirm=function(version){
       if(version!=null){
         version=version.trim();
         if(types && CheckFirmwareVersion(version)){
           var bin_file=types.replace(model,selectid).replace(/\./g,'_').replace(/-/g,'_').toLowerCase();
           var upload_callback=function(ret) { 
             myform.action="?action=upgrade&version="+version;
             myform.url.value=ret;
             myform.submit();
           }
           showUploadDialog("APP",bin_file,upload_callback);
         }
         else{
            alert("版本号无效！");
           return;
         }

       } 
     };
     AsynPrompt("固件更新","输入新"+model+"固件版本号:",doConfirm,version,8)
  }
  else alert('没有选择操作对象！');
}


function add_new() {
  var onSelectGroup=function(myform){
      if(myform){
         if(myform.types.value.trim().length<3){
            alert("设备类型名称太短!");
            myform.types.focus();
            return false;
         }
         var subtype=myform.subtype.value.trim();
         if(subtype.length<3 || isNaN(subtype)){
            alert("IAP版本号无效");
            myform.subtype.focus();
            return false;
         }
         var version=myform.version.value.trim();
         if(CheckFirmwareVersion(version)){
           myform.action="?action=addnew";
           myform.submit();
           return true;
         }
         else{
            alert("固件版本号无效");
            myform.version.focus();
            return false; 
         }
    }
  }
  var newusr_html='<form method="post" style="margin:0px"><table width="380" height="100%" border="0" align="center"><tr height="20"><td width="60" align="right">固件类型</td><td width="160"><input type="text" name="types" maxlength=32 style="width:60px;text-align:center">-<input type="text" name="subtype" maxlength=5 style="width:35px;text-align:center" value="1.0" title="IAP Version">-<select name="property" size=1 style="width:50px"><option value="1">ROM</option><option value="2">FLS</option></select></td><td align="right">固件版本</td><td><input type="text" name="version" maxlength=10 style="width:60px" value="0.0.1"></td></tr><tr><td align=center colspan="4"><input type=button value=" 确定 " onclick="self.CloseDialog(this.form)"> &nbsp; <input type="button" value=" 取消 " onclick="self.CloseDialog();"></td></tr></form></table>';
  ShowDialog("新建固件",newusr_html,400,150,onSelectGroup);
}

</script>
</head>
<body topmargin="0" leftmargin="0">
<table width="100%" height="100%" border="5" align="center" cellpadding="5" cellspacing="5" bordercolor="#CCCCCC" bgcolor="#FFFFFF">
  <tr> 
    <td background="images/topbg.gif" height="20">
    	 <table width="100%" height="20" border="0" cellpadding="0" cellspacing="0">
     	 <tr>
     	 	  <td><b><img src="images/pic5.gif" width="28" height="22" align="absmiddle" />您现在所在的位置是： <a href="admincenter.php">管理首页</a> -> <a href="od_firmware.php"><font color=#FF0000>设备固件管理</font></a></b></td>
     	    <td align="right"> <input type="button" value="新建固件" onclick="add_new();">&nbsp; <input type="button" value="删除固件" onclick="delete_record();">&nbsp;  <input type="button" value="更新文件" onclick="update_firmware();">&nbsp;</td>
     	 </tr>
       </table>
    </td>
  </tr>
  <tr> 
      <td height="100%" valign="top" bgcolor="#FFFFFF">
<!--Content begin-----------------------------------------------------------------------------------------------------------> 
  <table width="99%" border="2" align="center" cellpadding="1" cellspacing="1" bordercolor="#FFFFFF" bgcolor="#CCCCCC">
  <tr height="20" bgcolor="#F7F7F7" align="center"> 
    <td WIDTH="20%" background="images/topbg.gif" align="left" style="padding-left:45px"><strong>固件类型</strong></td>
    <td WIDTH="20%" background="images/topbg.gif"><strong>固件版本</strong></td>
    <td WIDTH="20%" background="images/topbg.gif"><strong>文件名</strong></td>
    <td WIDTH="20%" background="images/topbg.gif"><strong>文件大小 (Bytes)</strong></td>
    <td WIDTH="20%" background="images/topbg.gif"><strong>上传时间</strong></td>
  </tr><form name="groupform" method="post"><input type="hidden" name="groupname"><input type="hidden" name="url">
<?php 

include('includes/mg_comm.php');

$res=$conn->query("select * from `od_firmware` where property>0 order by types,subtype,property,ver",PDO::FETCH_ASSOC); 
foreach($res as $row){
  echo '<tr height=28 align=center bgcolor=#FFFFFF onMouseOut="this.bgColor=\'#FFFFFF\';" onMouseOver="this.bgColor=\'#FFFF00\';">';
  echo '<td align=left class="groupname"><input type=radio name="selectid" value="'.$row['id'].'"> <span id="t'.$row['id'].'">'.$row['types'].'-'.$row['subtype'].'-'.(($row['property']==2)?'FLS':'ROM').'</span></td>';
  echo " <td><span id='v{$row['id']}'>{$row['ver']}</span></td>";
  echo "<td><a href='{$row['url']}' target='_blank'>".mg_checkFile($row['url'],$filesize,$filetime).'</a></td>';
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
