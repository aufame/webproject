<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>GPS地图定位</title>
<script type="text/javascript" src="http://api.map.baidu.com/api?v=1.3"></script>
<script language="javascript">
var marker,map;
function FormatAddress(addComp)
{ var addr=addComp.city+addComp.district+addComp.street+addComp.streetNumber;
	if(addComp.province!=addComp.city)addr=addComp.province+addr;
	return addr;
}

function GetGeoResult(rs)
{ var infoWindowOpts = 
  { width : 150,     // 信息窗口宽度
    height: 80,     // 信息窗口高度
    title : "I'm here!"  // 信息窗口标题
  }
	var addComp = rs.addressComponents;
	var infoWindow = new BMap.InfoWindow( FormatAddress(addComp), infoWindowOpts);
  marker.openInfoWindow( infoWindow );
}

function GetAddress(pt)
{ var gc = new BMap.Geocoder();
  gc.getLocation(pt, GetGeoResult);
}

function translateOptions(pt)
{ map.centerAndZoom(pt,15);  // 初始化地图,设置中心点坐标和地图级别。
	marker=new BMap.Marker(pt);
	map.addOverlay(marker); 
	GetAddress(pt);
}

function GPSLocate(xx,yy)
{ var gpsPoint = new BMap.Point(xx,yy);
  BMap.Convertor.translate(gpsPoint,0,translateOptions);
  
  map = new BMap.Map("container");            // 创建Map实例
  map.addControl(new BMap.NavigationControl());
  map.addControl(new BMap.ScaleControl());
  map.addControl(new BMap.OverviewMapControl());
  map.addControl(new BMap.MapTypeControl());
  //map.setCurrentCity("南京"); // 仅当设置城市信息时，
} 


/* http://dev.baidu.com/wiki/static/map/API/examples/script/convertor.js */
//2011-7-25
(function()//闭包
 { function load_script(xyUrl, callback)
   { var head = document.getElementsByTagName('head')[0];
     var script = document.createElement('script');
     script.type = 'text/javascript';
     script.src = xyUrl;
     //借鉴了jQuery的script跨域方法
     script.onload = script.onreadystatechange = function()
     { if((!this.readyState || this.readyState === "loaded" || this.readyState === "complete"))
     	 { callback && callback();
         // Handle memory leak in IE
         script.onload = script.onreadystatechange = null;
         if ( head && script.parentNode )
         { head.removeChild( script );
         }
       }
    };
    // Use insertBefore instead of appendChild  to circumvent an IE6 bug.
    head.insertBefore( script, head.firstChild );
 }
 function translate(point,type,callback)
 { var callbackName = 'cbk_' + Math.round(Math.random() * 10000);    //随机函数名
   var xyUrl = "http://api.map.baidu.com/ag/coord/convert?from="+ type + "&to=4&x=" + point.lng + "&y=" + point.lat + "&callback=BMap.Convertor." + callbackName;
    //动态创建script标签
   load_script(xyUrl);
   BMap.Convertor[callbackName] = function(xyResult)
   { delete BMap.Convertor[callbackName];    //调用完需要删除改函数
     var point = new BMap.Point(xyResult.x, xyResult.y);
     callback && callback(point);
   }
 }
 window.BMap = window.BMap || {};
 BMap.Convertor = {};
 BMap.Convertor.translate = translate;
})();
</script>
</head>
<body>
<div style="width:100%;height:100%;border:1px solid gray" id="container"></div>
<script type="text/javascript">
<?php
$x=$_GET["x"];
$y=$_GET["y"];
if(empty($x)) $x="0";
if(empty($y)) $y="0";
echo "GPSLocate(".$x.",".$y.");"; 
?>
</script>
</body>
</html>