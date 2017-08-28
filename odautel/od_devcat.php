<?php require("includes/dbconn.php");
//CheckLogin();
OpenDB();//open database
//CheckMenu('盒子分组');

function add_new() {
  $types = strtoupper(FilterText(trim($_POST['types'])));
  $subtype = FilterText(trim($_POST['subtype']));
  if($types && $subtype && is_numeric($subtype)){
    $row=$GLOBALS['conn']->query("select id from `od_devcat` where types='$types' and subtype='$subtype'")->fetch();
    if($row){
      PageReturn("无法创建固件，对应的产品分类已经存在！");
    }
    else {
      $GLOBALS['conn']->exec("insert into `od_devcat` set types='$types',subtype='$subtype'");
      PageReturn("产品分类创建成功！");
    }
  }
}

function delete_record() {
  $selectid=$_POST["selectid"];
  if(is_numeric($selectid) && $selectid>0) {
  if($GLOBALS['conn']->exec("delete from `od_devcat` where id=$selectid")==1)PageReturn("所选的产品分类删除成功！");
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
    if(confirm("确认删除选定的产品分类？")) {
      myform.action="?action=delete";
      myform.submit();
    } 
  }
  else alert('没有选择操作对象！');
}

function add_new() {
  var onSelectGroup=function(myform){
      if(myform){
         if(myform.types.value.trim().length<3){
            alert("产品类型名称太短!");
            myform.types.focus();
            return false;
         }
         var subtype=myform.subtype.value.trim();
         if(subtype.length<3 || isNaN(subtype)){
            alert("IAP版本号无效");
            myform.subtype.focus();
            return false;
         }
         else{
           myform.action="?action=addnew";
           myform.submit();
           return true;
         }
    }
  }
  var newusr_html='<form method="post" style="margin:0px"><table width="150" height="100%" border="0" align="center"><tr height="20"><td width="60" align="left" nowrap>产品类型:</td><td><input type="text" name="types" maxlength=32 style="width:100%"></td></tr><tr><td>IAP版本:</td><td><input type="text" name="subtype" maxlength=10 style="width:100%" value="0.0"></td></tr><tr><td align=center colspan="2"><input type=button value=" 确定 " onclick="self.CloseDialog(this.form)"> &nbsp; <input type="button" value=" 取消 " onclick="self.CloseDialog();"></td></tr></form></table>';
  ShowDialog("新建产品分类",newusr_html,170,150,onSelectGroup);
}

</script>
</head>
<body topmargin="0" leftmargin="0">
<table width="100%" height="100%" border="5" align="center" cellpadding="5" cellspacing="5" bordercolor="#CCCCCC" bgcolor="#FFFFFF">
  <tr> 
    <td background="images/topbg.gif" height="20">
    	 <table width="100%" height="20" border="0" cellpadding="0" cellspacing="0">
     	 <tr>
     	 	  <td><b><img src="images/pic5.gif" width="28" height="22" align="absmiddle" />您现在所在的位置是： <a href="admincenter.php">管理首页</a> -> <font color=#FF0000>产品分类管理</font></b></td>
     	    <td align="right"> <input type="button" value="新建产品分类" onclick="add_new();">&nbsp; <input type="button" value="删除产品分类" onclick="delete_record();"></td>
     	 </tr>
       </table>
    </td>
  </tr>
  <tr> 
      <td height="100%" valign="top" bgcolor="#FFFFFF">
<!--Content begin-----------------------------------------------------------------------------------------------------------> 
  <table width="99%" border="2" align="center" cellpadding="1" cellspacing="1" bordercolor="#FFFFFF" bgcolor="#CCCCCC">
  <tr height="20" bgcolor="#F7F7F7" align="center"> 
    <td WIDTH="50%" background="images/topbg.gif" align="left" style="padding-left:32px"><strong>产品型号</strong></td>
    <td WIDTH="50%" background="images/topbg.gif"><strong>IAP版本</strong></td>
  </tr><form name="groupform" method="post"><input type="hidden" name="groupname"><input type="hidden" name="url">
<?php 

include('includes/mg_comm.php');

$res=$conn->query("select * from `od_devcat` order by types,subtype",PDO::FETCH_ASSOC); 
foreach($res as $row){
  echo '<tr height=28 align=center bgcolor=#FFFFFF onMouseOut="this.bgColor=\'#FFFFFF\';" onMouseOver="this.bgColor=\'#FFFF00\';">';
  echo '<td align=left> &nbsp; <input type=radio name="selectid" value="'.$row['id'].'"> '.$row['types'].'</td>';
  echo " <td><span id='v{$row['id']}'>{$row['subtype']}</span></td>";
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
