
var CurrentCategory,CurrentProperty;	
var CategoryIndex=new Array();
var PropertyIndex=new Array();
CategoryIndex["227"]=new Array("226","����ϵ��");
CategoryIndex["228"]=new Array("226","��ױϵ��");
CategoryIndex["229"]=new Array("226","��������");
CategoryIndex["226"]=new Array("224","�������ϵ��","227","228","229");
CategoryIndex["231"]=new Array("225","����ϵ��");
CategoryIndex["232"]=new Array("225","��ױϵ��");
CategoryIndex["233"]=new Array("225","��������");
CategoryIndex["225"]=new Array("224","����õ��ϵ��","231","232","233");
CategoryIndex["262"]=new Array("224","����һ��");
CategoryIndex["256"]=new Array("255","ˮ������ϵ��");
CategoryIndex["259"]=new Array("255","����ƽ��ϵ��");
CategoryIndex["258"]=new Array("255","��������ϵ��");
CategoryIndex["255"]=new Array("224","����ˮ����ϵ��","256","259","258");
CategoryIndex["284"]=new Array("224","����ˮ��Դϵ��");
CategoryIndex["285"]=new Array("224","�����Ĵ�SkinBeauty");
CategoryIndex["224"]=new Array("267","CO.E/��������","226","225","262","255","284","285");
CategoryIndex["263"]=new Array("267","������������");
CategoryIndex["208"]=new Array("204","�沿����");
CategoryIndex["297"]=new Array("204","��������");
CategoryIndex["209"]=new Array("204","�ֲ�����");
CategoryIndex["207"]=new Array("204","�۲�����");
CategoryIndex["206"]=new Array("204","�����װ");
CategoryIndex["205"]=new Array("204","��ױϵ��");
CategoryIndex["204"]=new Array("267","TheFaceShop/����","208","297","209","207","206","205");
CategoryIndex["299"]=new Array("201","��������");
CategoryIndex["298"]=new Array("201","���ֻ���");
CategoryIndex["203"]=new Array("201","�沿����");
CategoryIndex["202"]=new Array("201","�۲�����");
CategoryIndex["230"]=new Array("201","��ױϵ��");
CategoryIndex["201"]=new Array("267","SkinFood/����","299","298","203","202","230");
CategoryIndex["195"]=new Array("191","�沿����");
CategoryIndex["194"]=new Array("191","�۲�����");
CategoryIndex["193"]=new Array("191","�����װ");
CategoryIndex["192"]=new Array("191","��ױϵ��");
CategoryIndex["191"]=new Array("267","Charmzone/�������","195","194","193","192");
CategoryIndex["200"]=new Array("196","�沿����");
CategoryIndex["199"]=new Array("196","�۲�����");
CategoryIndex["198"]=new Array("196","�����װ");
CategoryIndex["197"]=new Array("196","��ױϵ��");
CategoryIndex["196"]=new Array("267","Deoproce/��������","200","199","198","197");
CategoryIndex["265"]=new Array("177","�й���");
CategoryIndex["264"]=new Array("177","������");
CategoryIndex["177"]=new Array("267","Vov/����Vov","265","264");
CategoryIndex["175"]=new Array("173","�沿����(��ɹ)");
CategoryIndex["174"]=new Array("173","�� ױ(ɢ��)");
CategoryIndex["173"]=new Array("267","DoDo/������","175","174");
CategoryIndex["190"]=new Array("186","�沿����");
CategoryIndex["189"]=new Array("186","�۲�����");
CategoryIndex["188"]=new Array("186","�����װ");
CategoryIndex["187"]=new Array("186","��ױϵ��");
CategoryIndex["186"]=new Array("267","ETUDE /��������","190","189","188","187");
CategoryIndex["185"]=new Array("181","�沿����");
CategoryIndex["184"]=new Array("181","�۲�����");
CategoryIndex["183"]=new Array("181","�����װ");
CategoryIndex["182"]=new Array("181","��ױϵ��");
CategoryIndex["181"]=new Array("267","Laneige/������֥","185","184","183","182");
CategoryIndex["172"]=new Array("169","�沿����");
CategoryIndex["171"]=new Array("169","��������");
CategoryIndex["170"]=new Array("169","�����װ");
CategoryIndex["169"]=new Array("267","Amore/����������","172","171","170");
CategoryIndex["210"]=new Array("167","�����װ");
CategoryIndex["168"]=new Array("167","�沿����");
CategoryIndex["167"]=new Array("267","Love/��������","210","168");
CategoryIndex["267"]=new Array("0","����Ʒ��","224","263","204","201","191","196","177","173","186","181","169","167");
CategoryIndex["166"]=new Array("157","�沿����");
CategoryIndex["165"]=new Array("157","�۲�����");
CategoryIndex["164"]=new Array("157","�ֲ�����");
CategoryIndex["163"]=new Array("157","���廤��");
CategoryIndex["162"]=new Array("157","��ʿ����");
CategoryIndex["161"]=new Array("157","��������");
CategoryIndex["160"]=new Array("157","�����װ");
CategoryIndex["159"]=new Array("157","��ױϵ��");
CategoryIndex["158"]=new Array("157","��ɹϵ��");
CategoryIndex["157"]=new Array("268","Shiseido/�ձ�������","166","165","164","163","162","161","160","159","158");
CategoryIndex["156"]=new Array("148","�沿����");
CategoryIndex["155"]=new Array("148","�۲�����");
CategoryIndex["154"]=new Array("148","�ֲ�����");
CategoryIndex["153"]=new Array("148","���廤��");
CategoryIndex["152"]=new Array("148","��ʿ����");
CategoryIndex["151"]=new Array("148","��������");
CategoryIndex["150"]=new Array("148","�����װ");
CategoryIndex["149"]=new Array("148","��ױϵ��");
CategoryIndex["148"]=new Array("268","Kose/�ձ���˿","156","155","154","153","152","151","150","149");
CategoryIndex["147"]=new Array("139","�沿����");
CategoryIndex["146"]=new Array("139","�۲�����");
CategoryIndex["145"]=new Array("139","�ֲ�����");
CategoryIndex["144"]=new Array("139","���廤��");
CategoryIndex["143"]=new Array("139","��ʿ����");
CategoryIndex["142"]=new Array("139","��������");
CategoryIndex["141"]=new Array("139","�����װ");
CategoryIndex["140"]=new Array("139","��ױϵ��");
CategoryIndex["139"]=new Array("268","Kanebo/�ձ����ȱ�","147","146","145","144","143","142","141","140");
CategoryIndex["72"]=new Array("68","�沿����");
CategoryIndex["71"]=new Array("68","�۲�����");
CategoryIndex["211"]=new Array("68","���廤��");
CategoryIndex["70"]=new Array("68","�����װ");
CategoryIndex["69"]=new Array("68","��ױϵ��");
CategoryIndex["68"]=new Array("268","�ձ�����","72","71","211","70","69");
CategoryIndex["260"]=new Array("268","�ձ�FANCL������ӣ�");
CategoryIndex["132"]=new Array("130","����");
CategoryIndex["131"]=new Array("130","��ױ");
CategoryIndex["130"]=new Array("268","�ձ�SUKI","132","131");
CategoryIndex["266"]=new Array("268","POLA(pdc)/�ձ���һҩױ");
CategoryIndex["261"]=new Array("268","�ձ�DHC");
CategoryIndex["65"]=new Array("61","�沿����");
CategoryIndex["64"]=new Array("61","�۲�����");
CategoryIndex["63"]=new Array("61","�����װ");
CategoryIndex["62"]=new Array("61","��ױϵ��");
CategoryIndex["61"]=new Array("268","Za/����","65","64","63","62");
CategoryIndex["129"]=new Array("126","�� ��");
CategoryIndex["128"]=new Array("126","�� ױ");
CategoryIndex["127"]=new Array("126","�� ˮ");
CategoryIndex["126"]=new Array("268","Anna sui/������","129","128","127");
CategoryIndex["217"]=new Array("216","����");
CategoryIndex["216"]=new Array("268","OMI�����ֵ�","217");
CategoryIndex["268"]=new Array("0","�ձ�Ʒ��","157","148","139","68","260","130","266","261","61","126","216");
CategoryIndex["301"]=new Array("120","���ʆ��");
CategoryIndex["125"]=new Array("120","�沿����");
CategoryIndex["124"]=new Array("120","�۲�����");
CategoryIndex["123"]=new Array("120","��ʿ����");
CategoryIndex["122"]=new Array("120","�����װ");
CategoryIndex["121"]=new Array("120","��ױϵ��");
CategoryIndex["120"]=new Array("269","Biotherm/��ŷȪ","301","125","124","123","122","121");
CategoryIndex["119"]=new Array("117","�沿����(��Ĥ)");
CategoryIndex["118"]=new Array("117","�۲�����");
CategoryIndex["117"]=new Array("269","Borghese/����˹","119","118");
CategoryIndex["116"]=new Array("113","�沿����");
CategoryIndex["115"]=new Array("113","�۲�����");
CategoryIndex["114"]=new Array("113","��ױϵ��");
CategoryIndex["47"]=new Array("113","��ˮϵ��");
CategoryIndex["113"]=new Array("269","CD/�ϰ�","116","115","114","47");
CategoryIndex["303"]=new Array("112","Ůʿ��ˮ");
CategoryIndex["112"]=new Array("108","�沿����","303");
CategoryIndex["111"]=new Array("108","�۲�����");
CategoryIndex["110"]=new Array("108","�����װ");
CategoryIndex["109"]=new Array("108","��ױϵ��");
CategoryIndex["108"]=new Array("269","Clinique/ٻ��","112","111","110","109");
CategoryIndex["107"]=new Array("105","���屣��");
CategoryIndex["106"]=new Array("105","��������");
CategoryIndex["105"]=new Array("269","DOVE/���","107","106");
CategoryIndex["104"]=new Array("101","�沿����");
CategoryIndex["103"]=new Array("101","���廤��");
CategoryIndex["39"]=new Array("101","��ˮϵ��");
CategoryIndex["101"]=new Array("269","Elizabeth Arden/�Ŷ�","104","103","39");
CategoryIndex["100"]=new Array("96","�沿����");
CategoryIndex["99"]=new Array("96","�۲�����");
CategoryIndex["97"]=new Array("96","��ױϵ��");
CategoryIndex["102"]=new Array("96","��ˮϵ��");
CategoryIndex["98"]=new Array("96","�����װ");
CategoryIndex["96"]=new Array("269","EsteeLauder/��ʫ����","100","99","97","102","98");
CategoryIndex["92"]=new Array("89","�沿����(����)");
CategoryIndex["91"]=new Array("89","�۲�����");
CategoryIndex["89"]=new Array("269","Evian/����","92","91");
CategoryIndex["83"]=new Array("79","�۲�����");
CategoryIndex["84"]=new Array("79","�沿����");
CategoryIndex["80"]=new Array("79","���廤��");
CategoryIndex["81"]=new Array("79","��ױϵ��");
CategoryIndex["82"]=new Array("79","�����װ");
CategoryIndex["244"]=new Array("245","õ����Ȼ����ϵ��");
CategoryIndex["243"]=new Array("245","«��������ʪ����ϵ��");
CategoryIndex["242"]=new Array("245","�̲���͸����ϵ��");
CategoryIndex["246"]=new Array("245","��ʾ������޸�ϵ��");
CategoryIndex["247"]=new Array("245","ľ�Ͽ��廤��ϵ��");
CategoryIndex["248"]=new Array("245","רҵ�۲�ϵ��");
CategoryIndex["249"]=new Array("245","�ܻ�ϵ��");
CategoryIndex["250"]=new Array("245","Ժװϵ��");
CategoryIndex["251"]=new Array("245","���շ�ɹϵ��");
CategoryIndex["252"]=new Array("245","ϴ��ϵ��");
CategoryIndex["253"]=new Array("245","��Ʒϵ��");
CategoryIndex["245"]=new Array("79","����ֲ��ϵ��","244","243","242","246","247","248","249","250","251","252","253");
CategoryIndex["31"]=new Array("79","��ˮϵ��");
CategoryIndex["79"]=new Array("269","Lancome/��ޢ","83","84","80","81","82","245","31");
CategoryIndex["78"]=new Array("73","�沿����");
CategoryIndex["77"]=new Array("73","�۲�����");
CategoryIndex["76"]=new Array("73","�����װ");
CategoryIndex["75"]=new Array("73","��ױϵ��");
CategoryIndex["74"]=new Array("73","���廤��");
CategoryIndex["73"]=new Array("269","L��oreal/ŷ����","78","77","76","75","74");
CategoryIndex["220"]=new Array("218","����");
CategoryIndex["219"]=new Array("218","��ױ");
CategoryIndex["218"]=new Array("269","Kiehl's/������","220","219");
CategoryIndex["222"]=new Array("221","����");
CategoryIndex["223"]=new Array("221","�۲�����");
CategoryIndex["221"]=new Array("269","The body shop/����С��","222","223");
CategoryIndex["45"]=new Array("20","JAGUAR/����");
CategoryIndex["50"]=new Array("20","Burberrys/�ͱ���");
CategoryIndex["59"]=new Array("20","Givenchy/����ϣ");
CategoryIndex["48"]=new Array("20","Calotine/�豦��");
CategoryIndex["60"]=new Array("20","Davidoff/�����ŷ�");
CategoryIndex["36"]=new Array("20","JLO/���ݷ�������");
CategoryIndex["33"]=new Array("20","Kenzo/��������");
CategoryIndex["34"]=new Array("20","Versace/��˼��");
CategoryIndex["42"]=new Array("20","Dunhill/��ϲ·");
CategoryIndex["38"]=new Array("20","Guerlain����");
CategoryIndex["37"]=new Array("20","Gucci/����");
CategoryIndex["44"]=new Array("20","CK/���Ŀ���");
CategoryIndex["46"]=new Array("20","Chanel/���ζ�");
CategoryIndex["254"]=new Array("20","������Ĭ");
CategoryIndex["51"]=new Array("20","Boss/Boss");
CategoryIndex["32"]=new Array("20","Lacoste/����");
CategoryIndex["30"]=new Array("20","S.T.Dupont/����");
CategoryIndex["41"]=new Array("20","������ˮ");
CategoryIndex["20"]=new Array("269","��ˮƷ��","45","50","59","48","60","36","33","34","42","38","37","44","46","254","51","32","30","41");
CategoryIndex["269"]=new Array("0","ŷ��Ʒ��","120","117","113","108","105","101","96","89","79","73","218","221","20");
CategoryIndex["26"]=new Array("270","����");
CategoryIndex["280"]=new Array("270","SHILLS");
CategoryIndex["14"]=new Array("12","����");
CategoryIndex["13"]=new Array("12","��ױ");
CategoryIndex["12"]=new Array("270","��Դ��","14","13");
CategoryIndex["138"]=new Array("133","�沿����");
CategoryIndex["137"]=new Array("133","�۲�����");
CategoryIndex["136"]=new Array("133","���廤��");
CategoryIndex["135"]=new Array("133","�����װ");
CategoryIndex["134"]=new Array("133","��ױϵ��");
CategoryIndex["133"]=new Array("270","Polynia","138","137","136","135","134");
CategoryIndex["270"]=new Array("0","̨��Ʒ��","26","280","12","133");
CategoryIndex["240"]=new Array("281","ǧ�˲�");
CategoryIndex["282"]=new Array("281","�ѹ�");
CategoryIndex["236"]=new Array("281","�ɰ���");
CategoryIndex["281"]=new Array("0","������Ʒ","240","282","236");
CategoryIndex["95"]=new Array("93","����");
CategoryIndex["94"]=new Array("93","��ױ");
CategoryIndex["283"]=new Array("93","����");
CategoryIndex["93"]=new Array("271","̨��ţ��/��ӵ��Ƽ�","95","94","283");
CategoryIndex["296"]=new Array("271","Ӣ��ֲ�ﾫ��");
CategoryIndex["4"]=new Array("271","������Ʒ");
CategoryIndex["271"]=new Array("0","����Ʒ��","93","296","4");
CategoryIndex["302"]=new Array("0","Ůʿ��ˮ");
CategoryIndex["0"]=new Array("","","267","268","269","270","281","271","302");
PropertyIndex["99"]=new Array("0","��������");
PropertyIndex["94"]=new Array("48","�ʻ���װ");
PropertyIndex["49"]=new Array("48","ϴ����װ");
PropertyIndex["96"]=new Array("48","��ˮ��װ");
PropertyIndex["51"]=new Array("48","������װ");
PropertyIndex["48"]=new Array("0","�����װ","94","49","96","51");
PropertyIndex["56"]=new Array("44","�����");
PropertyIndex["57"]=new Array("44","���˪");
PropertyIndex["58"]=new Array("44","ϴ����");
PropertyIndex["59"]=new Array("44","��Ħ˪");
PropertyIndex["60"]=new Array("44","����");
PropertyIndex["44"]=new Array("4","����","56","57","58","59","60");
PropertyIndex["61"]=new Array("53","ˮ");
PropertyIndex["62"]=new Array("53","��");
PropertyIndex["63"]=new Array("53","˪");
PropertyIndex["98"]=new Array("53","��");
PropertyIndex["53"]=new Array("4","����","61","62","63","98");
PropertyIndex["54"]=new Array("4","����");
PropertyIndex["55"]=new Array("4","��Ĥ");
PropertyIndex["64"]=new Array("4","����");
PropertyIndex["4"]=new Array("0","�沿����","44","53","54","55","64");
PropertyIndex["5"]=new Array("0","�۲�����");
PropertyIndex["6"]=new Array("0","��������");
PropertyIndex["7"]=new Array("0","�ǲ�����");
PropertyIndex["8"]=new Array("0","�ֲ�����");
PropertyIndex["9"]=new Array("0","�㲿����");
PropertyIndex["10"]=new Array("0","��������");
PropertyIndex["11"]=new Array("0","��ǻ����");
PropertyIndex["12"]=new Array("0","���廤��");
PropertyIndex["13"]=new Array("0","��ԡ��Ʒ");
PropertyIndex["14"]=new Array("0","��������");
PropertyIndex["17"]=new Array("18","жױ��Ʒ");
PropertyIndex["29"]=new Array("18","�۵�/����/ױǰ��");
PropertyIndex["30"]=new Array("18","�۱�/�۷�/ɢ��");
PropertyIndex["38"]=new Array("18","ü��/ü��/ü��");
PropertyIndex["37"]=new Array("18","���߱�/����Һ");
PropertyIndex["36"]=new Array("18","��Ӱ");
PropertyIndex["34"]=new Array("18","��ë��");
PropertyIndex["35"]=new Array("18","��ë����Һ");
PropertyIndex["42"]=new Array("18","����/��֬");
PropertyIndex["43"]=new Array("18","����/����/����/�ں�");
PropertyIndex["40"]=new Array("18","����/���߱�");
PropertyIndex["47"]=new Array("18","����/����/��Ӱ��");
PropertyIndex["41"]=new Array("18","��覱�/��覸�/����");
PropertyIndex["45"]=new Array("18","ָ����/���ײ�Ʒ");
PropertyIndex["46"]=new Array("18","����ʻ�");
PropertyIndex["39"]=new Array("18","˫��Ƥ��");
PropertyIndex["18"]=new Array("0","��ױϵ��","17","29","30","38","37","36","34","35","42","43","40","47","41","45","46","39");
PropertyIndex["95"]=new Array("19","����¶");
PropertyIndex["69"]=new Array("19","С����ˮ");
PropertyIndex["70"]=new Array("19","JAGUAR/����");
PropertyIndex["71"]=new Array("19","Burberrys/�ͱ���");
PropertyIndex["93"]=new Array("19","CD/�ϰ�");
PropertyIndex["92"]=new Array("19","Cliniqueٻ��");
PropertyIndex["91"]=new Array("19","Lancome/��ޢ");
PropertyIndex["90"]=new Array("19","EsteeLauder/��ʫ����");
PropertyIndex["89"]=new Array("19","ElizabethArden/�Ŷ�");
PropertyIndex["88"]=new Array("19","annasui/������");
PropertyIndex["72"]=new Array("19","Givenchy/����ϣ");
PropertyIndex["73"]=new Array("19","Calotine/�豦��");
PropertyIndex["74"]=new Array("19","Davidoff/�����ŷ�");
PropertyIndex["75"]=new Array("19","JLO/���ݷ�������");
PropertyIndex["76"]=new Array("19","Kenzo/��������");
PropertyIndex["77"]=new Array("19","Versace/��˼��");
PropertyIndex["79"]=new Array("19","Guerlain����");
PropertyIndex["78"]=new Array("19","Dunhill/��ϲ·");
PropertyIndex["80"]=new Array("19","Gucci/����");
PropertyIndex["81"]=new Array("19","CK/���Ŀ���");
PropertyIndex["82"]=new Array("19","Chanel/���ζ�");
PropertyIndex["83"]=new Array("19","������Ĭ");
PropertyIndex["84"]=new Array("19","Boss/Boss");
PropertyIndex["85"]=new Array("19","Lacoste/����");
PropertyIndex["86"]=new Array("19","S.T.Dupont/����");
PropertyIndex["87"]=new Array("19","������ˮ");
PropertyIndex["19"]=new Array("0","��ˮϵ��","95","69","70","71","93","92","91","90","89","88","72","73","74","75","76","77","79","78","80","81","82","83","84","85","86","87");
PropertyIndex["67"]=new Array("20","��������");
PropertyIndex["68"]=new Array("20","��������");
PropertyIndex["20"]=new Array("0","ֲ�ﾫ��","67","68");
PropertyIndex["15"]=new Array("31","��ɹ�޻�");
PropertyIndex["16"]=new Array("31","��������");
PropertyIndex["52"]=new Array("31","ȥ��ȥ��");
PropertyIndex["21"]=new Array("31","��������");
PropertyIndex["22"]=new Array("31","�������");
PropertyIndex["65"]=new Array("31","�ڷ���Ʒ");
PropertyIndex["23"]=new Array("31","���߲�Ʒ");
PropertyIndex["97"]=new Array("31","������Ч");
PropertyIndex["31"]=new Array("0","��Ч��Ʒ","15","16","52","21","22","65","23","97");
PropertyIndex["24"]=new Array("0","���ݹ���");
PropertyIndex["25"]=new Array("0","���γ���");
PropertyIndex["26"]=new Array("0","����Ӽ�");
PropertyIndex["27"]=new Array("0","�칫�ľ�");
PropertyIndex["28"]=new Array("0","������Ʒ");
PropertyIndex["0"]=new Array("","","99","48","4","5","6","7","8","9","10","11","12","13","14","18","19","20","31","24","25","26","27","28");


function showmenu(signid)
 {  var objImg=document.all(signid);
	 	var objMenu=document.all("m_"+signid);
 	  if(objImg && objMenu)
	  { if(objMenu.style.display=="none")
		  { objMenu.style.display="";
        objImg.src="images/guidefold1.gif";
      } 
      else
      { objMenu.style.display="none"; 
        objImg.src="images/guidefold0.gif";
      }
    }
 }  
 


function GenSingleCategory(Categoryid)
{ var guide_fold_image,guide_fold_disp_opt,categorycode="";
	if(CategoryIndex[Categoryid].length>2)
	{ if(Categoryid==CurrentCategory)
		{  guide_fold_image="images/guidefold1.gif";
     	 guide_fold_disp_opt="";
		}
		else
		{ guide_fold_image="images/guidefold0.gif";
     	guide_fold_disp_opt="style='display:none'";
		}
	}
	else
	{ guide_fold_image="images/guidefold.gif";
	}
	
	categorycode+="<TR><TD onclick=\"showmenu('c"+Categoryid+"');\" style='CURSOR: hand' onMouseOver=\"bgColor='#FFE3D2';\" onMouseOut=\"bgColor='';\" height=24 valign='middle'>";
  categorycode+=" <IMG id='c"+Categoryid+"' width=20 height=20 src='"+guide_fold_image+"' align='absMiddle'>";
  categorycode+=" <a href='catlist.asp?catid="+Categoryid+"'><font color='GREEN'>"+CategoryIndex[Categoryid][1]+"</font></a>";
  categorycode+=" </td></tr>";
  subsort=CategoryIndex[Categoryid];
  subcount=subsort.length;
  if(subcount>2)
  { categorycode+="<TR><TD id='m_c"+Categoryid+"' bgColor='#FEFDF5' "+guide_fold_disp_opt+">"
    for(j=2;j<subcount;j++)
    {  categorycode+="<IMG height=20 src='images/bclass3.gif' width=36 align=absMiddle border=0><a href='catlist.asp?catid="+subsort[j]+"'><font color=0066ff>"+CategoryIndex[subsort[j]][1]+"</font></a><br>";
    } 
    categorycode+="</td></tr>";
  }  
  return categorycode
}

function ShowCategoryGuider()
{ var i,j,RootCategory,sortcount,subcount,subsort,parentid,categorycode="";
  CurrentCategory=htmRequest("catid")
  if(!CurrentCategory)CurrentCategory="0";
   
  if(CurrentCategory!="0")
  { if(CategoryIndex[CurrentCategory].length<3 && CategoryIndex[CurrentCategory][0]!="0")
  	{ CurrentCategory=CategoryIndex[CurrentCategory][0];
  	}
  }

  RootCategory=(CategoryIndex[CurrentCategory][0]=="0")?"0":CurrentCategory;
  

  categorycode+="<TABLE cellSpacing=0 cellPadding=0 width='100%' align='center'  border=0>";
  categorycode+="<TR>";
  categorycode+="   <TD><IMG height=34 src='images/guide_brand.gif' width=190></TD>";
  categorycode+="</TR>";
  categorycode+="</TABLE>";
  categorycode+="<TABLE  style='padding:8px;margin-bottom:5px;background:#FFFFFF;BORDER-COLLAPSE: collapse' borderColor='#cccccc' cellSpacing='0' cellPadding='0' width='100%' align='center' border='1'>";
  categorycode+="<TR>";
  categorycode+="   <TD vAlign='top' align='center' width='100%' style='BACKGROUND-POSITION: 50% top; BACKGROUND-REPEAT: repeat-x;' background='images/search_bg.gif' >";
  categorycode+="      <TABLE align=center cellSpacing=0 cellPadding=0 width='100%' border='0' style='font-family: '����'; font-size: 9pt; color: #333333; letter-spacing: 1px; line-height: 160%'>";
 
  if(RootCategory!="0")
  { categorycode+="<TR style='CURSOR: hand' onMouseOver=\"bgColor='#FFE3D2';\" onMouseOut=\"bgColor='';\" onclick=\"this.all.tags('a')[0].click();\" height=24 valign='middle'><TD> <IMG width=20 height=20 border=0 src='images/guidefold2.gif' align='absMiddle'> <a href='catlist.asp?catid="+CategoryIndex[RootCategory][0]+"'><font color=#FF0000>�����ϼ�����</font></a></TD></TR>";
  	categorycode+=GenSingleCategory(RootCategory);
  }
  else
  { subsort=CategoryIndex[RootCategory];
  	sortcount=subsort.length;
    for(i=2;i<sortcount;i++)
    { categorycode+=GenSingleCategory(subsort[i]);
    }  	
  }
  categorycode+="      </table>";
  categorycode+="   </TD>";
  categorycode+="</TR>";
  categorycode+="</TABLE>";
  document.write(categorycode);
}


function GenSingleProperty(Propertyid)
{ var guide_fold_image,guide_fold_disp_opt,Propertycode="";
	if(PropertyIndex[Propertyid].length>2)
	{ if(Propertyid==CurrentProperty)
		{  guide_fold_image="images/guidefold1.gif";
     	 guide_fold_disp_opt="";
		}
		else
		{ guide_fold_image="images/guidefold0.gif";
     	guide_fold_disp_opt="style='display:none'";
		}
	}
	else
	{ guide_fold_image="images/guidefold.gif";
	}
	
	Propertycode+="<TR><TD onclick=\"showmenu('p"+Propertyid+"');\" style='CURSOR: hand' onMouseOver=\"bgColor='#FFE3D2';\" onMouseOut=\"bgColor='';\" height=24 valign='middle'>";
  Propertycode+=" <IMG id='p"+Propertyid+"' width=20 height=20 src='"+guide_fold_image+"' align='absMiddle'>";
  Propertycode+=" <a href='prolist.asp?proid="+Propertyid+"'><font color='GREEN'>"+PropertyIndex[Propertyid][1]+"</font></a>";
  Propertycode+=" </td></tr>";
  subsort=PropertyIndex[Propertyid];
  subcount=subsort.length;
  if(subcount>2)
  { Propertycode+="<TR><TD id='m_p"+Propertyid+"' bgColor='#FEFDF5' "+guide_fold_disp_opt+">"
    for(j=2;j<subcount;j++)
    {  Propertycode+="<IMG height=20 src='images/bclass3.gif' width=36 align=absMiddle border=0><a href='prolist.asp?proid="+subsort[j]+"'><font color=0066ff>"+PropertyIndex[subsort[j]][1]+"</font></a><br>";
    } 
    Propertycode+="</td></tr>";
  }  
  return Propertycode
}

function ShowPropertyGuider()
{ var i,j,RootProperty,sortcount,subcount,subsort,parentid,Propertycode="";
  CurrentProperty=htmRequest("proid")
  if(!CurrentProperty)CurrentProperty="0";
   
  if(CurrentProperty!="0")
  { if(PropertyIndex[CurrentProperty].length<3 && PropertyIndex[CurrentProperty][0]!="0")
  	{ CurrentProperty=PropertyIndex[CurrentProperty][0];
  	}
  }

  RootProperty=(PropertyIndex[CurrentProperty][0]=="0")?"0":CurrentProperty;
  

  Propertycode+="<TABLE cellSpacing=0 cellPadding=0 width='100%' align='center'  border=0>";
  Propertycode+="<TR>";
  Propertycode+="   <TD><IMG height=34 src='images/guide_property.gif' width=190></TD>";
  Propertycode+="</TR>";
  Propertycode+="</TABLE>";
  Propertycode+="<TABLE  style='padding:8px;margin-bottom:5px;background:#FFFFFF;BORDER-COLLAPSE: collapse' borderColor='#cccccc' cellSpacing='0' cellPadding='0' width='100%' align='center' border='1'>";
  Propertycode+="<TR>";
  Propertycode+="   <TD vAlign='top' align='center' width='100%' style='BACKGROUND-POSITION: 50% top; BACKGROUND-REPEAT: repeat-x;' background='images/search_bg.gif' >";
  Propertycode+="      <TABLE align=center cellSpacing=0 cellPadding=0 width='100%' border='0' style='font-family: '����'; font-size: 9pt; color: #333333; letter-spacing: 1px; line-height: 160%'>";
 
  if(RootProperty!="0")
  { Propertycode+="<TR style='CURSOR: hand' onMouseOver=\"bgColor='#FFE3D2';\" onMouseOut=\"bgColor='';\" onclick=\"this.all.tags('a')[0].click();\" height=24 valign='middle'><TD> <IMG width=20 height=20 border=0 src='images/guidefold2.gif' align='absMiddle'> <a href='prolist.asp?proid="+PropertyIndex[RootProperty][0]+"'><font color=#FF0000>�����ϼ�����</font></a></TD></TR>";
  	Propertycode+=GenSingleProperty(RootProperty);
  }
  else
  { subsort=PropertyIndex[RootProperty];
  	sortcount=subsort.length;
    for(i=2;i<sortcount;i++)
    { Propertycode+=GenSingleProperty(subsort[i]);
    }  	
  }
  Propertycode+="      </table>";
  Propertycode+="   </TD>";
  Propertycode+="</TR>";
  Propertycode+="</TABLE>";
  document.write(Propertycode);
}
ShowCategoryGuider();
ShowPropertyGuider();
