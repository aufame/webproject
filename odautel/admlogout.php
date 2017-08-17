<?php
  if($_COOKIE["odautel"]["admin"])
  { setcookie("odautel[admin]","");
  }  
  echo "<script language='javascript'>top.location.href='.';</script>";
?>
