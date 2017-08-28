<?php require("includes/dbconn.php");

$groupname=trim(FilterText(@$_REQUEST['name']));
if($groupname){
  OpenDB();//open database
  $row=$GLOBALS['conn']->query("select rom_ver,rom_url,flash_ver,flash_url from `od_devgroup`")->fetch(PDO::FETCH_NUM);
  if($row){
    $rom_ver=$row[0];
    $rom_url=$row[1];
    $flash_ver=$row[2];
    $flash_url=$row[3];
    ob_clean();
    echo $rom_ver.'|'.$rom_url.'|'.$flash_ver.'|'.$flash_url.'|';
  }
  CloseDB();//close database
  exit(0);
}

function compare_version($vernum1,$vernum2){
  for($i=0;$i<3;$i++){
   if($vernum1[$i]>$vernum2[$i])return true;
   else if($vernum1[$i]<$vernum2[$i])return false;
  }
  return false;
}

$types=trim(FilterText(@$_REQUEST['types']));
$subtype=trim(FilterText(@$_REQUEST['subtype']));
if($types && $subtype){
  include('includes/mg_comm.php');
  OpenDB();//open database
  $f_vernum=array(array(0,0,0),array(0,0,0));
  $f_ver=array(null,null);
  $f_url=array(null,0);
  $f_size=array(0,0);
  $types=strtoupper($types);
  $res=$conn->query("select ver,url,property from `od_firmware` where types='$types' and subtype='$subtype' and url is not null and url<>''",PDO::FETCH_NUM);
  foreach($res as $row){
     $ver_num=explode('.',$row[0]);
     if(count($ver_num)==3){
       if(is_numeric($ver_num[0])&&is_numeric($ver_num[1])&&is_numeric($ver_num[2])){
         if($row[2]=='1' || $row[2]=='2'){
           $index=$row[2]-1; 
           if(compare_version($ver_num,$f_vernum[$index])){
             $filesize=mg_CheckFileSize($row[1]); 
             if($filesize){
               $f_vernum[$index]=$ver_num;
               $f_ver[$index]=$row[0];
               $f_url[$index]=$row[1];
               $f_size[$index]=$filesize;
             }
           }
         }
       }
     } 
  }
  echo '|'.$f_ver[0].'|'.$f_url[0].'|'.$f_size[0].'|'.$f_ver[1].'|'.$f_url[1].'|'.$f_size[1].'|';
  CloseDB();
}
else echo "service unavailable!";
?>
