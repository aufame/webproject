<?php require_once("conn.php");?>
<html xmlns:x="urn:schemas-microsoft-com:office:excel">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <!--[if gte mso 9]><xml>
            <x:ExcelWorkbook>
                <x:ExcelWorksheets>
                    <x:ExcelWorksheet>
                        <x:Name>¹¤ط±���͢</x:Name>
                        <x:WorksheetOptions>
                            <x:Print>
                                <x:ValidPrinterInfo />
                            </x:Print>
                        </x:WorksheetOptions>
                    </x:ExcelWorksheet>
                </x:ExcelWorksheets>
            </x:ExcelWorkbook>
        </xml>
        <![endif]-->
<title>记录列表</title>        
<style>
<!--
@page
	{margin:0in .75in 0in .75in;
	mso-header-margin:0in;
	mso-footer-margin:0in;}
	TD   {FONT-FAMILY:ARIAL;FONT-SIZE:10pt;line-height: 100%;}
	BODY {FONT-FAMILY:ARIAL;FONT-SIZE:10pt;}
-->
</style>
</head>
<body>
<?php
 OpenDB();
 header("content-type:application/vnd.ms-excel"); 
 //header("content-type:application/x-download");
 //header("content-type:text/plain");
 header("Content-Disposition:attachment;filename=记录列表.xls"); 
?>
<table border=1 cellSpacing=0 cellPadding=0 width=100%>
<tr align=center style="color:#FFFFFF;background-color:#0000FF"><th>mobile</th><th>notable</th><th>btntable</th><th width="180">add time</th></tr>
<?php
  $query=$conn->query("select * from `logs` where property>0 order by addtime desc",PDO::FETCH_ASSOC); 
  foreach($query as $rs)
  {  echo "<tr align=center bgcolor=#FFFFFF style=\"vnd.ms-excel.numberformat:@\"><td>{$rs['mobile']}</td><td>{$rs['notable']}}</td><td>{$rs['btntable']}</td><td>".date("Y-m-d H:i:s",$rs["addtime"])."</td></tr>";
  }
  
  CloseDB();
?>
</table> 
</body>
</html>