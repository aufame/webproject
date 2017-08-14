var map,username,deviceID,driving,lastupdate,guarding,tracking,online,startpos,destpos,curpos,max_lock;
var path_cur=null,path_new=null,path_locked=0,guard_changed=false;
var myIcon = new BMap.Icon("images/tracker.png", new BMap.Size(60, 140), {imageOffset: new BMap.Size(0,0)});
var carMask = new BMap.Marker(null,{icon:myIcon});
var tracker_label = new BMap.Label("",{offset:new BMap.Size(50,-20)});
var addr_label = new BMap.Label("",{offset:new BMap.Size(0,0)});
var debug_label = new BMap.Label("",{offset:new BMap.Size(0,20)});
var move_step_interval=300,db_access_interval=6000;

//时间字符串转Date类型
function Str2Datetime(strTime)
{ return new Date(strTime);
}
//Date类型转Unix时间戳
function Datetime2Unix(dtTime)
{ return  Math.round(dtTime.getTime()/1000);
}
//获取当Unix时间戳
function GetUnixTime()
{ return Datetime2Unix(new Date);;//当前时间戳
}   
//Unix时间戳转Date类型
function Unix2Datetime(uTimestamp)
{ return new Date(uTimestamp*1000);
}
//将Date类型格式化为字符串。
function  FormatDatetime(dtTime)
{ var timedata=function(d){if(d<10)return "0"+d;else return d;}
  return dtTime.getFullYear()+"-"+(dtTime.getMonth()+1)+"-"+dtTime.getDate()+" "+timedata(dtTime.getHours())+":"+timedata(dtTime.getMinutes())+":"+timedata(dtTime.getSeconds());
}

function tracker_reset_pos(pos)
{ curpos=pos;
	map.centerAndZoom(pos, 15);
	carMask.setPosition(pos);
}
function guarding_name(g)
{ if(g==0)return "撤防状态";
	else if(g==1)return "设防状态";
	else if(g==2) return "正在撤防......";
  else if(g==3) return "正在设防......";	
  else return "未知状态";
}

function tracker_update_label(dtUpdatetime,position)
{ var info="<b>"+username+"</b>　(<a href=\"#\" onclick=\";change_guarding(this);return false;\">"+guarding_name(guarding)+"</a>)<br>"+FormatDatetime((online)?new Date():dtUpdatetime);
  if(position)
  { gc.getLocation(position, function(rs){
      var addComp = rs.addressComponents;
      var addr=addComp.city+addComp.district+addComp.street+addComp.streetNumber;
	    if(addComp.province!=addComp.city)addr=addComp.province+addr;
	    tracker_label.setContent(info+"<br>"+addr);});        
  }else tracker_label.setContent(info);
}  

function change_guarding(linkobj)
{ if(guarding==0 || guarding==2)guarding=3;
	else if(guarding==1 || guarding==3)guarding=2;
	else return;
	linkobj.innerHTML=guarding_name(guarding);
	AsynPostForm("","switchguarding.php?id="+deviceID+"&guarding="+guarding+"&handle="+Math.random());
}

function debug_print2(info)
{ debug_label.setContent(info);
	debug_label.setPosition(curpos);
}	

function debug_print(info)
{ addr_label.setContent(info);
	addr_label.setPosition(curpos);
}	
	   
function CreateXMLHTTP()
{ var xmlhttp;
  try { xmlhttp = new XMLHttpRequest(); } 
  catch (trymicrosoft)
  { try { xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");}
    catch (othermicrosoft)
    { try { xmlhttp= new ActiveXObject("Microsoft.XMLHTTP"); }
      catch (failed) { xmlhttp = null; }
 　 }
  }
  return xmlhttp; 
}

function PostForm(formContent,actionURL)
{ var xmlhttp=CreateXMLHTTP();
	xmlhttp.open("post",actionURL,false);   
  xmlhttp.setRequestHeader("Content-length",formContent.length);   
  xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");   
  xmlhttp.send(formContent);  
  if (xmlhttp.readyState==4)
  { return (xmlhttp.status==200)?xmlhttp.responseText:null;
  }   
}

function AsynPostForm(formContent,actionURL,callbackfunc)
{	var xmlhttp=CreateXMLHTTP();
	if(callbackfunc)
	{ xmlhttp.onreadystatechange=function()
    { if (xmlhttp.readyState==4)
      {	callbackfunc((xmlhttp.status==200)?xmlhttp.responseText:null);
	    }
    }
  }  
	xmlhttp.open("post",actionURL,true);
	xmlhttp.setRequestHeader("Content-length",formContent.length);   
  xmlhttp.setRequestHeader('content-type','application/x-www-form-urlencoded');
  xmlhttp.send(formContent); 
} 

function get_driving_path()
{ var ret=driving.getResults();
	if(ret)
	{ ret=ret.getPlan(0);
		if(ret)
		{ ret=ret.getRoute(0);
			if(ret)ret=ret.getPath();
		}
	}
	return ret;		
}

function coord_translateCallback(point)
{ var distance=map.getDistance(destpos,point);
  if(distance>3) //坐标位置变化超过3米
	{ startpos=destpos;
	  destpos=point;
	  if(distance>1000) //距离超过1公里
	  { path_locked=0;
	  	path_new=new Array(startpos,destpos);
	  }
	  else
	  {	driving.search(startpos, destpos); //显示一条线路
	    driving.setSearchCompleteCallback(function(){path_new=get_driving_path();if(!path_new)path_new=new Array(startpos,destpos);else map.addOverlay(new BMap.Polyline(path_new,{strokeColor:"#FF6600", strokeWeight:6, strokeOpacity:0.5}));path_locked=0;});
	    //setSearchCompleteCallback该回调函数有可能出现无相应的情况,所以要有超时机制.
	  }
  }
  else
  {	if(guard_changed)tracker_update_label(lastupdate);
  	path_locked=0;
  }
}


function switch_tracking(onoff)
{ PostForm("","switchtracking.php?id="+deviceID+"&tracking="+((onoff)?"1":"0")+"&handle="+Math.random());
}

var test_counter=0;
var tracker_points=new Array(
    new BMap.Point(118.76633,32.05348),
    new BMap.Point(118.77087,32.052358),
    new BMap.Point(118.77212,32.048659),
    new BMap.Point(118.768038,32.0479365),
    new BMap.Point(118.764575,32.050923),
    new BMap.Point(118.759332,32.049825),
    new BMap.Point(118.75873,32.05692),
    new BMap.Point(118.75927,32.062266),
    new BMap.Point(118.75941,32.063227),
    new BMap.Point(118.763765,32.066892),
    new BMap.Point(118.76595,32.06528),
    new BMap.Point(118.764398,32.063593),
    new BMap.Point(118.76666,32.056676));
    
function OnGetLocation(ret)	
{ if(ret)
	{	var infos=ret.split("|");
		if(infos.length==8)//第一个与最后一个为无效数据，中间6个为有效数据。
    {	var trackpoint;//longitude,latitude,online,guarding,tracking,lastupdate
    	var new_guardstate=parseInt(infos[4]);
  	  guard_changed=(guarding!=new_guardstate);
  	  guarding=new_guardstate;
  	  tracking=(infos[5]=="1");
  	  online=(infos[3]!="0");
  	  if(username=="autodemo")
  	  { if(test_counter>=tracker_points.length)test_counter=0; 
        lastupdate=new Date();
        trackpoint=tracker_points[test_counter++];  
  	  }
  	  else
  	  { lastupdate=Unix2Datetime(parseInt(infos[6]));
  	  	trackpoint=new BMap.Point(infos[1]/1000000,infos[2]/1000000);
  	  } 
  	  BMap.Convertor.translate(trackpoint,0,coord_translateCallback); //真实GPS经纬度转成百度坐标	
     	if(!tracking)switch_tracking(true);

	  }
	}
}

function tracker_move(step)
{ if(path_cur && step < path_cur.length)
  { tracker_reset_pos(path_cur[step++]);
  	tracker_update_label(new Date());
  }
  else
  { if(path_new)
  	{	path_cur=path_new;
   	  path_new=null;
   	  step=1;
   	}
   	if((path_locked==0 && !path_new) || path_locked>max_lock)
    { path_locked=1;
    	if(username=="autodemo")lastupdate=Str2Datetime("1970-1-1");
    	AsynPostForm("","getcoord.php?id="+deviceID+"&lastupdate="+Datetime2Unix(lastupdate)+"&handle="+Math.random(),OnGetLocation);
    }
    else path_locked++;
  }
  //debug_print2(new Date().toLocaleTimeString()+"#"+path_locked);  
  setTimeout(function(){tracker_move(step,path_cur);},move_step_interval);
}

function ShowCopyright(info)
{ var bs = map.getBounds();   //返回地图可视区域
  var cr = new BMap.CopyrightControl({anchor: BMAP_ANCHOR_TOP_RIGHT});   //设置版权控件位置
  cr.addCopyright({id: 1, content: "<a href='#' style='font-size:20px;background:yellow'>"+info+"</a>", bounds: bs});    //Copyright(id,content,bounds)类作为CopyrightControl.addCopyright()方法的参数
  map.addControl(cr); //添加版权控件
} 

var gc = new BMap.Geocoder(); 
function onclick_tracker(e)
{ var point=curpos;
	gc.getLocation(point, function(rs){
    var addComp = rs.addressComponents;
    var addr=addComp.city+addComp.district+addComp.street+addComp.streetNumber;
	  if(addComp.province!=addComp.city)addr=addComp.province+addr;
	  addr_label.setContent(addr);
	  addr_label.setPosition(point);
  });        
}

function translate_first_coord(point)
{ startpos=point;
	destpos=point;
	tracker_reset_pos(startpos);
  tracker_update_label(lastupdate,point);
  carMask.setLabel(tracker_label);
  carMask.addEventListener("mousedown",onclick_tracker);
  map.addOverlay(carMask); 
  map.addOverlay(addr_label);
  map.addOverlay(debug_label);
  map.addControl(new BMap.NavigationControl());  //添加默认缩放平移控件
  ShowCopyright("GPS追踪器");
  tracker_move(0);
}

function gpsmap_init(pDeviceID,pUsername,pOnline,pguarding,pLongitude,pLatitude,pLastupdate)
{ map = new BMap.Map("allmap");
	driving = new BMap.WalkingRoute(map);       //步行导航实例
  //var driving = new BMap.DrivingRoute(map, {renderOptions:{map: map, autoViewport: true}});    //驾车导航实例
	//RenderOptions类提供了若干控制呈现的属性，其中map指定了结果所展现的地图实例，autoViewport控制是否自动调整视角。
	deviceID=pDeviceID;
	username=pUsername;
	lastupdate=Unix2Datetime(pLastupdate);
	guarding=pguarding;
	online=pOnline;
	max_lock=db_access_interval/move_step_interval;
  BMap.Convertor.translate(new BMap.Point(pLongitude/1000000,pLatitude/1000000),0,translate_first_coord);
  window.onunload=function(e){switch_tracking(false);};
}