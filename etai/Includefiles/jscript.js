var Pagination=0;
function MainMenuLeave(td_obj)
{ if(td_obj!=document.getElementById("MainMenuTable").cells[Pagination])
	{ td_obj.className=(td_obj==document.getElementById("MainMenuTable").cells[0])?'MouseLeave0':'MouseLeave';
	}
}

function SetMainMenuItem(index)
{ if(index!=null)Pagination=index; 
  var objcell=document.getElementById("MainMenuTable").cells[Pagination];
  objcell.className=(Pagination==0)?'MouseEnter0':'MouseEnter'; 
  objcell.children[0].style.color="#FFFFFF";
}
       	  	
function String.prototype.trim() 
{ return this.replace(/(^\s*)|(\s*$)/g,"");
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

function CreateXMLHTTP()
{ var xmlhttp;
  try 
  { xmlhttp = new XMLHttpRequest();
  } 
  catch (trymicrosoft)
  { try
    { xmlhttp= new ActiveXObject("Msxml2.XMLHTTP");
  ��}
    catch (othermicrosoft)
    { try
      { xmlhttp= new ActiveXObject("Microsoft.XMLHTTP");
  ����}
      catch (failed)
      { xmlhttp = null;
  ����}
 �� }
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
	  RedirectTextBlock.innerHTML=(paramcount==4)?arguments[3]:"<p align=center style='color:#FF0000'>���ڼ������ݣ����Ժ�...</p>";
	  xmlhttp.onreadystatechange=function()
    { if (xmlhttp.readyState==4)
      { if (xmlhttp.status==200)
        {	RedirectTextBlock.innerHTML=xmlhttp.responseText;
       	}
	      else
	      { RedirectTextBlock.innerHTML="<p align=center>����������ʧ�ܣ���������������̫������ˢ������!</p>";
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
  xmlhttp.send(PostForm.formContent); 
}
 
function htmRequest(name)
{ var querystr=window.location.search;   //location.search�Ǵӵ�ǰURL��?�ſ�ʼ���ַ���
  var namepos=querystr.indexOf(name);
  if(namepos!=-1)
  { var pos_start=namepos+name.length+1;
    var pos_end=querystr.indexOf("&",pos_start);
    if (pos_end==-1)pos_end=querystr.length;
    return querystr.substring(pos_start,pos_end);
  }else return "";
}

function StrToInt(numstr)
{ return (numstr && !isNaN(numstr) )?parseInt(numstr) : 0;
}
  
function GetLinkLabel()
{ var querystr=window.location.href;   //location.search�Ǵӵ�ǰURL��?�ſ�ʼ���ַ���
  var namepos=querystr.indexOf("#"); 
  return (namepos>=0)?querystr.substring(namepos+1,querystr.length):"";
}

function GetUrlQuery(url)//����url����?���string
{ var urlStartIndex = url.indexOf("?");
  if(urlStartIndex>=0)
  { return url.substring(urlStartIndex+1,url.length);
  } else return "";
}

function check_search()
{ var check_text=document.searchform.searchkey.value.trim();
  if(check_text=="" || check_text=="������ؼ���")
  { document.searchform.searchkey.focus();
	  alert("�������ѯ�ؼ��֣�");
	  return false;
  }
  else return true;
}

function AddToChart(id)
{ window.open("Mycart.asp?action=check&ProdId="+id,'',"scrollbars=no,width=650,height=260");
}

function AddToFavor(id)
{ var ret=PostForm("","Favorites.asp?action=add&ProdId="+id);
  if(ret.trim())alert(ret);
  else alert("����æ,���Ժ�����!");
} 
 
function setCookie(name, value)		//cookies����
{
	var argv = setCookie.arguments;
	var argc = setCookie.arguments.length;
	var expires = (argc > 2) ? argv[2] : null;
	if(expires!=null)
	{
		var LargeExpDate = new Date ();
		LargeExpDate.setTime(LargeExpDate.getTime() + (expires*1000*3600*24));
	}
	document.cookie = name + "=" + escape (value)+((expires == null) ? "" : ("; expires=" +LargeExpDate.toGMTString()));
}

function getCookie(Name)			//cookies��ȡ
{
	var search = Name + "="
	if(document.cookie.length > 0) 
	{
		offset = document.cookie.indexOf(search)
		if(offset != -1) 
		{
			offset += search.length
			end = document.cookie.indexOf(";", offset)
			if(end == -1) end = document.cookie.length
			return unescape(document.cookie.substring(offset, end))
		 }
	else return ""
	  }
}
  
  
function login_platform_reset()
{ var outtext="&nbsp;&nbsp;�û�:<input name='username' type='text' maxlength='32' style='height:20px;width:90px'>";
      outtext+="&nbsp;����:<input name='password' type='password' maxlength='32' style='height:20px;width:90px'>"
      outtext+="&nbsp;��֤:<input name='verifycode' type='text'  maxlength='4' style='height:20px;width:60px;'>"
      outtext+="&nbsp;<IMG id='LoginCheckout' src='images/number/getcode.asp' align='absMiddle'>"
      outtext+="&nbsp;<input type='image' src='images/loginbtn.gif' align='absMiddle'>";
      outtext+="&nbsp; <input type='button' value='ע��' onClick=\"location.href='reg.asp'\">";
      document.getElementById("loginfo").innerHTML=outtext;	
}  

function check_userinfo()
{ var online_userid = getCookie("shopuser");
  if(!online_userid)
  { login_platform_reset();
  }
  else
  { var ret= PostForm("","login.asp?mode=getinfo&userid="+online_userid);
    if (ret.indexOf("��ӭ")>=0)
    { document.getElementById("loginfo").innerHTML=ret;
    }
    else login_platform_reset();
  }
}	

function userlogin(objform)
{	
	
	var username,password,verifycode;
	username=objform.username.value.trim();
	if(username=="")
	{ alert("�������û�����");
		objform.username.focus();
		return false;
	}
	else
	{ objform.username.value=username;
	}
	password=objform.password.value;
	if(password=="")
	{ alert("���������룡");
		objform.password.focus();
		return false;
	}
	
	verifycode=objform.verifycode.value;
	if(verifycode=="")
	{ alert("��������֤�룡");
		objform.verifycode.focus();
		return false;
	}
	
	var formcontent = "username="+escape(username)+"&password="+escape(password)+"&verifycode="+verifycode;
  var ret=PostForm(formcontent,"login.asp");
  if(ret.indexOf("��ӭ")>=0)
  {  if(Pagination!=7)
     { document.getElementById("loginfo").innerHTML=ret;
     }else self.location.reload();
  }
  else if(ret.indexOf("��֤����Ч")>=0)
  { document.getElementById("LoginCheckout").src="images/number/getcode.asp?handle="+Math.random();
    alert("��֤����Ч�����������룡");
  }
  else if(ret.trim()) 
 	{ alert(ret);
  }
  else alert("ϵͳ��æ�����Ժ����ԣ�");
}

function userlogoff()
{ var ret=PostForm("","login.asp?mode=logout");
  if(ret=="ok")
  { alert('���������˳��̳ǣ�')
    if(Pagination!=7)login_platform_reset();
    else  self.location.reload();
  }
}


function LoadQQService(QQs,webname)
{ var qqInfoLen=QQs.length;
	var obj=document.all.tags('SPAN');
	if(obj)
	{ if(qqInfoLen>0 && QQs[0]!="" ) 
	  { var QQNick,qqNumber,i,ServiceCode="�� �� QQ��";
      var randomoffet=((new Date()).getSeconds()%qqInfoLen)&0xFE;
      for(i=0;i<qqInfoLen;i+=2)
      { if(i%8==0 && i>0)ServiceCode+="<br>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ";
   	    if(randomoffet>=qqInfoLen)randomoffet=0;
		    QQNick=QQs[randomoffet++];
		    qqNumber=QQs[randomoffet++];
		    ServiceCode+="<A title='QQ���߿ͷ�:"+qqNumber+"' href='http://wpa.qq.com/msgrd?V=1&Uin="+qqNumber+"&Site="+webname+"&Menu=yes' target='_blank'><IMG src='http://wpa.qq.com/pa?p=1:"+qqNumber+":4' border=0>"+QQNick+"</A>&nbsp;&nbsp;";
	    }
      ServiceCode+="<br>";
    }
    else
    { ServiceCode="";
    }	 
    obj[obj.length-1].innerHTML=ServiceCode; 
  }  
}	
		 
		 
		 
function DrawImage(ImgD,MaxW,MaxH)
{ var image2=new Image();
  image2.src=ImgD.src;
  if(!MaxW){MaxW=125;MaxH=125;}
  if(image2.width>0 && image2.height>0)
  { if(image2.width>=image2.height)
    { if(image2.width!=MaxW)
    	 { ImgD.width=MaxW;
        ImgD.height=(image2.height*MaxW)/image2.width;
      }
    }
    else
    { if(image2.height!=MaxH)
    	 { ImgD.height=MaxH;
        ImgD.width=(image2.width*MaxH)/image2.height; 
      }
    }
  }
} 



//��Ȥ����ϵͳ��ת�����ܲ���� ��Ȩ��ԭ��������
//δ����ɣ����öԴ˳�����д۸Ļ�Ϯ������ת�أ�����ϵ����!
var Default_isFT = 0		//Ĭ���Ƿ��壬0-���壬1-����
var StranIt_Delay = 50 //������ʱ���루�������Ŀ��������ҳ�����������ֳ�����
var StranLink_Obj,JF_cn;

//�����������������뿪ʼ�����±�ģ�������������
//ת���ı�
function StranText(txt,toFT,chgTxt)
{
	if(txt==""||txt==null)return ""
	toFT=toFT==null?BodyIsFt:toFT
	if(chgTxt)txt=txt.replace((toFT?"��":"��"),(toFT?"��":"��"))
	if(toFT){return Traditionalized(txt)}
	else {return Simplized(txt)}
}
//ת������ʹ�õݹ飬�������ı�
function StranBody(fobj)
{
	if(typeof(fobj)=="object"){var obj=fobj.childNodes}
	else 
	{
		var tmptxt=StranLink_Obj.innerHTML.toString()
		if(tmptxt.indexOf("��")<0)
		{
			BodyIsFt=1
			StranLink_Obj.innerHTML=StranText(tmptxt,0,1)
			StranLink.title=StranText(StranLink.title,0,1)
		}
		else
		{
			BodyIsFt=0
			StranLink_Obj.innerHTML=StranText(tmptxt,1,1)
			StranLink.title=StranText(StranLink.title,1,1)
		}
		setCookie(JF_cn,BodyIsFt,7)
		var obj=document.body.childNodes
	}
	for(var i=0;i<obj.length;i++)
	{
		var OO=obj.item(i)
		if("||BR|HR|TEXTAREA|".indexOf("|"+OO.tagName+"|")>0||OO==StranLink_Obj)continue;
		if(OO.title!=""&&OO.title!=null)OO.title=StranText(OO.title);
		if(OO.alt!=""&&OO.alt!=null)OO.alt=StranText(OO.alt);
		if(OO.tagName=="INPUT"&&OO.value!=""&&OO.type!="text"&&OO.type!="hidden")OO.value=StranText(OO.value);
		if(OO.nodeType==3){OO.data=StranText(OO.data)}
		else StranBody(OO)
	}
}
function JTPYStr()
{
	return '�������������°Ӱհڰܰ���������������������������������ʱϱбձ߱�����������������������������βϲвѲҲӲԲղֲײ޲����������������������������������������������³ĳųƳͳϳҳճٳ۳ܳݳ�������������������������������������´ǴʴʹϴдѴӴԴմܴ������������������������������������������Ƶ˵еӵݵ޵��������������������������������������ĶƶͶ϶жҶӶԶֶٶ۶�����������������������������������÷ķɷϷѷ׷طܷ߷������������������������������øƸǸɸϸѸӸԸոָٸڸ޸����������������������������ƹ˹йع۹ݹ߹�����������������������������Һ׺غ���������������������������������������������ƻѻӻԻٻ߻���������������������������������������������üƼǼʼ̼ͼмԼռּؼۼݼ߼����������������������������������������������������������������½ýĽŽȽɽʽνϽս׽ھ����������������������ǾɾԾپݾ�����ܽ������������������������������������������ſǿοѿҿٿ��������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������¢£¤¥¦§¨«¬­®¯°±²³¸»¼½¿����������������������������������������������������������������������������������������áèêíóôùûþ����������������������������������ıĶ����������������������������������������šŢťŦŧŨũűŵŷŸŹŻŽ���ӹ���������ƭƮƵƶƻƾ������������������������������ǣǤǥǦǨǩǫǮǯǱǳǴǵǹǺǽǾǿ��������������������������������������������ȣȧȨȰȴȵ������������������������������������ɡɥɧɨɬɱɴɸɹ��������������������������������������ʤʥʦʨʪʫʬʱʴʵʶʻ��������������������������������˧˫˭˰˳˵˶˸˿��������������������������������������̷̸̡̢̧̯̰̱̲̳̾��������������������������������ͭͳͷͼͿ������������������������������ΤΥΧΪΫάέΰαγν������������������������������������������������ϮϰϳϷϸϺϽϿ��������������������������������������������������������ХЫЭЮЯвгдклп��������������������������ѡѢѤѧѫѯѰѱѵѶѷѹѻѼ������������������������������������������������ҡҢңҤҥҩүҳҵҶҽҿ��������������������������������������ӣӤӥӦӧӨөӪӫӬӱӴӵӶӸӻӽӿ������������������������������������ԤԦԧԨԯ԰ԱԲԵԶԸԼԾԿ������������������������������������������������������������������աբթիծձյնշոջս����������������������������������������ְִֽֿ֣֤֡֯��������������������������������������������פרשת׬׮ׯװױ׳״׶׸׹׺׻����������������������������ôΪֻ��׼������������й';
}
function FTPYStr()
{
	return '�}�@�K���O�\�W���T�[���C�k�O�ͽ��^�r������U݅ؐ�^�N��v���P�����]߅���H׃�q�p���T�l�I�e�P����K�g�N�a���Q���M�K�N�nœ�}����ȃԜy��Ԍ�v���s�׋�p�P�b�U��L�L���c�S���n܇�؉m��r�ηQ���\�G�V�t�Y�u�X��_�x�����P�I�I�h���N�z�r�A���|̎�����J���N���b�o�~�n�[��ą����Z�e�_���J��������đ���Q�������hʎ�n�v�u�\���I���������f���c�|늝���{��ՙ�B���Vӆ�|�ӗ����Y�٪��xـ�呔྄��ꠌ����D�g�Z�Z�~Ӟ���I�����D�E�l�P�y�m�\�C����؜��L���w�U�M�����^���S�S���h�L���T�p�S�P�wݗ���o�x�}ؓӇ�D�`ԓ�}�w���s���M����䓾V���V怔R���w�t���o���m�ؕ�h�Ϙ�ُ���M��P�^�^�T؞�VҎ���w���|܉Ԏ���F��݁�L假��^��n�h�u�Q�R�M�Z���t����o����W�A����Ԓ�щĚg�h߀���Q�������o�S�e�]�x���V�x���Z���M�d�Lȝ��ⷫ@؛�����C�e���I�u�����O݋���D���E����Ӌӛ�H�^�o�A�v�a�Z⛃r�{���O�Թ{�g�D�}�O�z�A�|���캆���p�]���b�`�vҊ�IŞ���T�u�R���{�Y�����v�u�z���ɔ��q�C�e�_��U�g�I�^�M�A���o�@���i�o�R���d���Q�m���f�x�e��䏑ք��N���ܝ��Y�]�þo�\�H֔�M�x�a�M���G�X�Q�E�^�x܊�E�_�P�w���n��������ѝ�F�K�~���V��r̝�h�Q�����U�Ϟ�D�R��ه�{�ڔr�@�@�m��׎���[���|���E�Ƅڝ����D��I�h�x�Y���Y������[�ўr�`�zɏ�B砑z�i����Ę朑ٟ����Z�����vՏ���|炫C�R���[�C�U�g⏜R�`�X�I�s�����@���\�Ŕn�]�Ǌ䓧�t�J�R�B�]�t���u̔���T�����H���X�H�ҿ|�]�V�G�n���\���y��݆�����S�]Փ�}�_߉茻j��j�����aΛ�R�R���I���u�~�}�m�z�U�M֙؈�^�T�Q���q�]�V�T�����i���i��Ғ�d���R�瑑�}�Q�և�\���c�{�y���X���[�Hā�f����B�m�懙���帔Q���o�~ē���r���Z�W�t���I�a�P�������r���i�_�h�lؚ�O�{�u���H��䁘��VĚ�R�T�M���◉ә���L�T�U�w���t�X�Q���\�l�q���ܠ��N�����@��̃S�N�[�`�J�H�p��A�Ո�c���Fڅ�^�|��x�E����s�o׌���_�@���g�J�x�s�qܛ�J�c�����_�wِ����}�ߝ������Y���W�٠�����p���B�d�z���O�������I�B�K���}���{��Ԋ�ƕr�g���R����ҕԇ�۫F��ݔ���H���g���Q�����p�l����f�T�q�z��Z��A�b�\�K�V�C�m���q�O�p�S�s���i�H��E��؝�c�����TՄ�U���C���l�v�`�R�}�w�ϗl�N�F�d �N�~�y�^�D�T�F�j͑Ó�r�W�E�D�m�����B�f�W�f�`�����H�SȔ���^���^�l���y�����Y��΁�u�C���u���_�oʏ�ǉ]�F���`�a���u��㊑��rݠ�{�b�M�B�v�r�w�y�t��e�@�U�F�I�h�W�w��������lԔ��ʒ�N�ԇ[ϐ�f���y�{�C���a�x�\��d���n�C̓�u��S�w�m܎���x�_�k�W��ԃ���ZӖӍ�d���f������Ӡ鎟��}�����W�������V�����P��ꖰW�B�Ӭ��u���b�G�{ˎ��퓘I�~�t��U�z�x��ρˇ�|���xԄ�h�x�g���[�a��yы������t��Ξ�I��ω�f�ѓ��b�xԁ�����n�]♪q�[�Tݛ�~�O���c�Z�Z�n�R�z�u�A�S�x�Y�@�@�T�A���hs�S耎[�������y���E�\�N�j����s���d����ٝ�E�v菗��^؟��t���\ٛ����܈��l�p�S���ֱK��ݚ�䗣��`���q���~Û�w�U�H�N�@ؑᘂ��\�ꇒ걠�b�����C���̼����S���|�R�K�N�[�\�a�S�����E�i�T�D�T�����A�T�B�v���u�Dٍ���f�b�y�Ѡ��F٘���YՁ��Ɲ�Y�nۙ�C���v�u�{�M荿@��N���b���ʆ���e�Z�N倛�';
}
function Traditionalized(cc){
	var str='',ss=JTPYStr(),tt=FTPYStr();
	for(var i=0;i<cc.length;i++)
	{
		if(cc.charCodeAt(i)>10000&&ss.indexOf(cc.charAt(i))!=-1)str+=tt.charAt(ss.indexOf(cc.charAt(i)));
  		else str+=cc.charAt(i);
	}
	return str;
}
function Simplized(cc){
	var str='',ss=JTPYStr(),tt=FTPYStr();
	for(var i=0;i<cc.length;i++)
	{
		if(cc.charCodeAt(i)>10000&&tt.indexOf(cc.charAt(i))!=-1)str+=ss.charAt(tt.indexOf(cc.charAt(i)));
  		else str+=cc.charAt(i);
	}
	return str;
}

function InitPageDecoder()
{ StranLink_Obj=document.getElementById("StranLink")
  if (StranLink_Obj)
  { JF_cn="ft"+self.location.hostname.toString().replace(/\./g,"")
	  var BodyIsFt=getCookie(JF_cn)
	  if(BodyIsFt!="1")BodyIsFt=Default_isFT
	  with(StranLink_Obj)
	  { if(typeof(document.all)!="object") 	//��IE�����
		  {	href="javascript:StranBody()"
		  }
		  else
		  { href="#";
			  onclick= new Function("StranBody();return false")
		  }
		  title=StranText("����Է������ķ�ʽ���",1,1)
		  innerHTML=StranText(innerHTML,1,1)
	  }
	  if(BodyIsFt=="1"){setTimeout("StranBody()",StranIt_Delay)}
	}  
}

check_userinfo();
InitPageDecoder();