var MENU_HOTTRACK_COLOR="#FFFF00";
function mOvr(src,clrOver){src.bgColor = clrOver;} 
function mOut(src,clrIn){src.bgColor = clrIn;} 
function mClk(src){if(event.srcElement.tagName=='TD') src.children.tags('A')[0].click();} 

String.prototype.trim = function(){
  return this.replace(/(^\s*)|(\s*$)/g, ""); 
} 

function UpdatePagePosition(mode)
{ if(mode==0)  /*save position*/
     setCookie("PagePosition",document.body.scrollTop);
  else if(mode==1) /*load and restore last position*/
     document.body.scrollTop=getCookie("PagePosition");
}

function RadioboxSelected(radioboxes)
{ if(radioboxes)
  { var count=radioboxes.length;
    if(!count)
    { if(radioboxes.checked) return radioboxes.value;
    }
    else
    { for(var i=0;i<count;i++)
      { if(radioboxes[i].checked) return radioboxes[i].value;
      }
    }   
  }
  return null;
}


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


function setCookie(name, value, expires, path)
{ var curCookie = name + "=" + encodeURIComponent(value);
  if(expires) curCookie += "; expires=" + expires.toGMTString();
  if(path) curCookie += "; path=" + path;
  document.cookie = curCookie
}

function getCookie(name){
  var mycookie=document.cookie;
  if(mycookie){
    var starter=name+"=";
    var startpos = mycookie.indexOf(starter);
    if(startpos<0)return null;
    while(startpos>0 && mycookie.charAt(startpos-1)!=' '){
      startpos = mycookie.indexOf(starter,startpos+1);
      if(startpos<0)return null;
    }
    startpos+=starter.length;
    var endpos= mycookie.indexOf(";",startpos);
    var value=(endpos>0)?mycookie.substring(startpos,endpos):mycookie.substring(startpos);
    return decodeURIComponent(value);
  }else return null;
}

function CreateXMLHTTP()
{ var xmlhttp;
  try 
  { xmlhttp = new XMLHttpRequest();
  } 
  catch (trymicrosoft)
  { try
    { xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");
  　}
    catch (othermicrosoft)
    { try
      { xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
  　　}
      catch (failed)
      { xmlhttp = null;
  　　}
 　 }
  }
  return xmlhttp; 
}
 

function PostForm()  //formContent,actionURL,textBlockID,textInitial
{	var paramcount=PostForm.arguments.length;
	var xmlhttp=CreateXMLHTTP();
  if(paramcount==2)
	{ xmlhttp.open("post",PostForm.arguments[1],false);   
    xmlhttp.setRequestHeader("Content-length",PostForm.arguments[0].length);   
    xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");   
    xmlhttp.send(PostForm.arguments[0]);  
    if (xmlhttp.readyState==4)
    { return (xmlhttp.status==200)?xmlhttp.responseText:null;
    }   
	}
	else if(paramcount>2)
	{ var RedirectTextBlock=document.getElementById(PostForm.arguments[2]);
	  RedirectTextBlock.innerHTML=(paramcount==4)?arguments[3]:"<p align=center style='color:#FF0000'>正在加载数据，请稍候...</p>";
	  xmlhttp.onreadystatechange=function()
    { if (xmlhttp.readyState==4)
      { if (xmlhttp.status==200)
        {	RedirectTextBlock.innerHTML=xmlhttp.responseText;
       	}
	      else
	      { RedirectTextBlock.innerHTML="<p align=center>服务器请求失败，可能是您的网速太慢，请刷新重试!</p>";
	      }
	    }
    }
	  xmlhttp.open("post",PostForm.arguments[1],true);
	  xmlhttp.setRequestHeader("Content-length",PostForm.arguments[0].length);   
    xmlhttp.setRequestHeader('content-type','application/x-www-form-urlencoded');
    xmlhttp.send(PostForm.arguments[0]); 
  }
}

function AsynPostForm(formContent,actionURL,callbackfunc)
{	var xmlhttp=CreateXMLHTTP();
  xmlhttp.onreadystatechange=function()
  { if (xmlhttp.readyState==4)
    {	callbackfunc((xmlhttp.status==200)?xmlhttp.responseText:null);
	  }
  }
	xmlhttp.open("post",actionURL,true);
	xmlhttp.setRequestHeader("Content-length",formContent.length);   
  xmlhttp.setRequestHeader('content-type','application/x-www-form-urlencoded');
  xmlhttp.send(formContent); 
}

var OldTempScript=null;
function loadScript(url)
{ var newscript=document.createElement("script");
  newscript.type="text/javascript";
  newscript.src=url;
  document.getElementsByTagName("head")[0].appendChild(newscript);
  if(OldTempScript)lastScript.parentNode.removeChild(OldTempScript);
  OldTempScript=newscript;
}

function htmRequest(strParam,strURL)
{ /*location.search是从当前URL的?号开始的字符串（包括?）*/
  if(!strURL) strURL=window.location.search;
  if(strParam)
  { var searKey=strParam.toLowerCase()+"=";
    var searUrl=strURL.toLowerCase();
    var namepos=searUrl.indexOf("?"+searKey);
    if(namepos<0)namepos=searUrl.indexOf("&"+searKey);
    if(namepos>=0)
    { var pos_start=namepos+strParam.length+2;
      var pos_end=strURL.indexOf("&",pos_start);
      if (pos_end==-1)pos_end=strURL.length;
      return strURL.substring(pos_start,pos_end);
    }
  }
  return "";
}

function ChangeQueryString(QueryName,NewValue)
{ if(QueryName)
  {  var querystr=window.location.search.toLowerCase();   //location.search是从当前URL的?号开始的字符串
     var namepos=querystr.indexOf(QueryName.toLowerCase()+"=");
  	 NewValue=NewValue.toString();
     if(querystr)
     { if(namepos!=-1)
       { var OriginValue,pos_start,pos_end;
     	   pos_start=namepos+QueryName.length+1;
         pos_end=querystr.indexOf("&",pos_start);
         if (pos_end==-1)pos_end=querystr.length;
         OriginValue=querystr.substring(pos_start,pos_end);
         if(NewValue!=OriginValue)
         { querystr=querystr.substring(0, pos_start)+NewValue+querystr.substring(pos_end,querystr.length);
         }else return;
       }else querystr+=("&"+QueryName+"="+NewValue);
     }else querystr+=("?"+QueryName+"="+NewValue);
     self.location.href=querystr;
  }   
}

function UrlChangePage(OriginQuerystring,NewPage)
{ return (OriginQuerystring)?"?"+OriginQuerystring+"&page="+NewPage:"?page="+NewPage;
}
function GeneratePageGuider(OriginURL,TotalRecords,CurPage,TotalPage)
{ var pagecode='共 <b>'+TotalRecords+'</b> 条记录&nbsp;&nbsp;<font color="#888888">';
  if(CurPage<=1)pagecode+='首页&nbsp;上一页';
  else pagecode+='<a href="'+UrlChangePage(OriginURL,1)+'" target="_self">首页</a>&nbsp;<a href="'+UrlChangePage(OriginURL,CurPage-1)+'" target="_self">上一页</a>';
  pagecode+='&nbsp;';
  if(CurPage>=TotalPage) pagecode+='下一页&nbsp;尾页';
  else pagecode+='<a href="'+UrlChangePage(OriginURL,CurPage+1)+'" target="_self">下一页</a>&nbsp;<a href="'+UrlChangePage(OriginURL,TotalPage)+'" target="_self">尾页</a>';
  pagecode+='</font>&nbsp;页次：<strong><font color="#FF0000">'+CurPage+'</font>/'+TotalPage+'</strong>页&nbsp;&nbsp;'
  pagecode+='转到第<input type="text" id="page_input_box" value="'+CurPage+'" size=3 maxlength=8 style="text-align:center" onFocus="this.select()" onkeyup=\'if(isNaN(value))execCommand("undo")\'  onkeydown=\'if(window.event.keyCode==13){document.getElementById("page_click_btn").click();return false;}\'>页';
  pagecode+='&nbsp;<input type="button" id="page_click_btn" value="跳转" onclick=\'self.location.href=UrlChangePage("'+OriginURL+'",document.getElementById("page_input_box").value)\'>';
  document.write(pagecode);
} 

function ModalDialogHeightExt()
{ var ua = navigator.userAgent;   
  if(ua.indexOf("MSIE 7.0")>0)return 0; 
  else if(ua.indexOf("Firefox")>0)return 5; 
  else return 30; 
}

function PageJump(OriginURL)
{ var re = /([\?\&]page=)[^&]*/i;
	self.location.href=OriginURL.replace(re,"$1"+window.event.srcElement.form.page.value);
}

function GetInnerText(objID)
{ var value=document.getElementById(objID);
  return value?(value.innerText||value.textContent):null;
}

function StrToInt(numstr)
{ return (numstr && !isNaN(numstr) )?parseInt(numstr) : 0;
}

//检查身份证号码
function CheckIdentity(pId)
{ var arrVerifyCode = [1,0,"X",9,8,7,6,5,4,3,2];
  var Wi = [7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2];
  var Checker = [1,9,8,7,6,5,4,3,2,1,1];
  if(pId.length != 15 && pId.length != 18)    return "身份证号共有 15 码或18位";
  var Ai=pId.length==18 ?  pId.substring(0,17)   :   pId.slice(0,6)+"19"+pId.slice(6,16);
  if (!/^\d+$/.test(Ai))  return "身份证除最后一位外，必须为数字！";
  var yyyy=Ai.slice(6,10) ,  mm=Ai.slice(10,12)-1  ,  dd=Ai.slice(12,14);
  var d=new Date(yyyy,mm,dd) ,  now=new Date();
  var year=d.getFullYear() ,  mon=d.getMonth() , day=d.getDate();
  if (year!=yyyy || mon!=mm || day!=dd || d>now || year<1940) return "身份证输入错误！";
  for(var i=0,ret=0;i<17;i++)  ret+=Ai.charAt(i)*Wi[i];    
  Ai+=arrVerifyCode[ret %=11];     
  return (pId.length ==18 && pId != Ai)?"身份证输入错误！":Ai;        
}

function ShowDialog(wndtitle,src,w,h,callback)
{ var dlg=document.createElement("DIV");
  dlg.style.position="absolute";
  dlg.style.zIndex="9999"; 
  dlg.style.width=w+"px";
  dlg.style.height=h+"px";
  dlg.style.left=Math.round((document.body.scrollWidth-w)/2)+"px";
  dlg.style.top =(120+document.body.scrollTop)+"px";
  document.body.appendChild(dlg);
  if(src.charAt(0)!='<')src='<iframe src="'+src+'" style="width:'+w+'px;height:'+h+'px;" marginwidth=0 marginheight=0 scrolling="no" Frameborder="no"></iframe>';
  dlg.innerHTML='<table width="'+w+'" height="'+h+'" style="border-radius:5px 5px 5px 5px;background-color:#0D9EFA;" align="center"><tr><td height="20" style="color:#ffffff;font-size:9pt;font-weight:bold;">⊙ '+wndtitle+'</td><td align="right"><img style="cursor:pointer" onclick="self.CloseDialog()" src="images/closebtn1.gif" border=0></td></tr><tr><td colspan="2" style="background-color:#dfdfdf;text-align:center">'+src+'</td></tr></table>';
  if(self.CloseDialog)self.CloseDialog();
  self.CloseDialog=function(ret){if(self.CloseDialog.arguments.length==0||!callback || callback(ret)){document.body.removeChild(dlg);self.CloseDialog=null;}}//闭包
}

function AsynPrompt(wndtitle,wndtext,callback,defvalue,maxlength)
{ var dlgwidth=200,dlgheight=100,dlgform,input_filter;
  var dlg=document.createElement("DIV");
  dlg.style.position="absolute";
  dlg.style.zIndex="9999"; 
  dlg.style.width=dlgwidth+"px";
  dlg.style.height=dlgheight+"px";
  dlg.style.left=Math.round((document.body.scrollWidth-dlgwidth)/2)+"px";
  dlg.style.top=(120+document.body.scrollTop)+"px";  
  document.body.appendChild(dlg);
  if(typeof(defvalue)=="number")
  { if(!maxlength)maxlength=8;
  	input_filter="onkeyup=\"if(isNaN(value))execCommand(\'undo\');\" maxlength=8";
  }
  else
  { if(defvalue==null)defvalue=""; 
  	if(!maxlength)maxlength=16;
  	input_filter="maxlength="+maxlength;
  }
  dlg.innerHTML='<form onsubmit="self.closeprompt(this.inputs.value);return false;"><table width="'+dlgwidth+'" height="'+dlgheight+'" style="border-radius: 5px 5px 5px 5px;background-color:#0D9EFA;" align="center"><tr><td height="20" nowrap style="color:#FFFFFF;font-size:9pt;font-weight:bold;">⊙ '+wndtitle+'</td><td align="right"><input type="image" onclick="self.closeprompt();return false;" src="images/closebtn1.gif" border=0></td></tr><tr><td colspan="2" align="center" bgcolor="#dfdfdf" ><table border=0 width="100%" height="100%"><tr><td nowrap style="font-size:9pt;color:#FF6600">'+wndtext+'</td></tr><tr><td><input name="inputs" type="text" '+input_filter+' value="'+defvalue+'" style="width:100%;text-align:center;"></td></tr><tr><td align="center"><input type="submit" value="确定"> <input type="button" value="取消" onclick="self.closeprompt()"></td></tr></table></td></tr></table></form>';
  if(self.closeprompt)self.closeprompt();
  dlgform=dlg.getElementsByTagName("form")[0]; 
  if(dlgform)
  { dlgform.inputs.select();
    self.closeprompt=function(ret){if(self.closeprompt.arguments.length==0||!callback || callback(ret)){document.body.removeChild(dlg);self.closeprompt=null;}}//闭包
  }
}

// 参数说明
// s_Type : 文件类型，可用值为"image","flash","media","file"
// s_Link : 文件上传后，用于接收上传文件路径文件名的表单名
// s_named : 文件上传后，指定文件命名。
function showUploadDialog(s_Type,s_named, s_callback)
{  ShowDialog('文件上传','includes/upload.php?type='+s_Type+'&filenamed='+s_named+'&handle='+Math.random(), 500,150,s_callback);
}	

