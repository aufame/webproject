
var CurrentCategory,CurrentProperty;	
var CategoryIndex=new Array();
var PropertyIndex=new Array();
CategoryIndex["227"]=new Array("226","护肤系列");
CategoryIndex["228"]=new Array("226","彩妆系列");
CategoryIndex["229"]=new Array("226","美发护发");
CategoryIndex["226"]=new Array("224","韩伊橄榄系列","227","228","229");
CategoryIndex["231"]=new Array("225","护肤系列");
CategoryIndex["232"]=new Array("225","彩妆系列");
CategoryIndex["233"]=new Array("225","美发护发");
CategoryIndex["225"]=new Array("224","韩伊玫瑰系列","231","232","233");
CategoryIndex["262"]=new Array("224","韩伊一代");
CategoryIndex["256"]=new Array("255","水养护颜系列");
CategoryIndex["259"]=new Array("255","净肤平衡系列");
CategoryIndex["258"]=new Array("255","紧肤抗皱系列");
CategoryIndex["255"]=new Array("224","韩伊水呼吸系列","256","259","258");
CategoryIndex["284"]=new Array("224","韩伊水肌源系列");
CategoryIndex["285"]=new Array("224","韩伊四代SkinBeauty");
CategoryIndex["224"]=new Array("267","CO.E/韩国韩伊","226","225","262","255","284","285");
CategoryIndex["263"]=new Array("267","韩国美姿男子");
CategoryIndex["208"]=new Array("204","面部护理");
CategoryIndex["297"]=new Array("204","其它护理");
CategoryIndex["209"]=new Array("204","手部护理");
CategoryIndex["207"]=new Array("204","眼部护理");
CategoryIndex["206"]=new Array("204","礼盒套装");
CategoryIndex["205"]=new Array("204","彩妆系列");
CategoryIndex["204"]=new Array("267","TheFaceShop/韩国","208","297","209","207","206","205");
CategoryIndex["299"]=new Array("201","其它护理");
CategoryIndex["298"]=new Array("201","唇手护理");
CategoryIndex["203"]=new Array("201","面部护理");
CategoryIndex["202"]=new Array("201","眼部护理");
CategoryIndex["230"]=new Array("201","彩妆系列");
CategoryIndex["201"]=new Array("267","SkinFood/韩国","299","298","203","202","230");
CategoryIndex["195"]=new Array("191","面部护理");
CategoryIndex["194"]=new Array("191","眼部护理");
CategoryIndex["193"]=new Array("191","礼盒套装");
CategoryIndex["192"]=new Array("191","彩妆系列");
CategoryIndex["191"]=new Array("267","Charmzone/韩国婵真","195","194","193","192");
CategoryIndex["200"]=new Array("196","面部护理");
CategoryIndex["199"]=new Array("196","眼部护理");
CategoryIndex["198"]=new Array("196","礼盒套装");
CategoryIndex["197"]=new Array("196","彩妆系列");
CategoryIndex["196"]=new Array("267","Deoproce/韩国三星","200","199","198","197");
CategoryIndex["265"]=new Array("177","中国产");
CategoryIndex["264"]=new Array("177","韩国产");
CategoryIndex["177"]=new Array("267","Vov/韩国Vov","265","264");
CategoryIndex["175"]=new Array("173","面部护理(防晒)");
CategoryIndex["174"]=new Array("173","彩 妆(散粉)");
CategoryIndex["173"]=new Array("267","DoDo/韩国嘟嘟","175","174");
CategoryIndex["190"]=new Array("186","面部护理");
CategoryIndex["189"]=new Array("186","眼部护理");
CategoryIndex["188"]=new Array("186","礼盒套装");
CategoryIndex["187"]=new Array("186","彩妆系列");
CategoryIndex["186"]=new Array("267","ETUDE /韩国爱丽","190","189","188","187");
CategoryIndex["185"]=new Array("181","面部护理");
CategoryIndex["184"]=new Array("181","眼部护理");
CategoryIndex["183"]=new Array("181","礼盒套装");
CategoryIndex["182"]=new Array("181","彩妆系列");
CategoryIndex["181"]=new Array("267","Laneige/韩国兰芝","185","184","183","182");
CategoryIndex["172"]=new Array("169","面部护理");
CategoryIndex["171"]=new Array("169","美发护发");
CategoryIndex["170"]=new Array("169","礼盒套装");
CategoryIndex["169"]=new Array("267","Amore/韩国爱茉莉","172","171","170");
CategoryIndex["210"]=new Array("167","礼盒套装");
CategoryIndex["168"]=new Array("167","面部护理");
CategoryIndex["167"]=new Array("267","Love/韩国永爱","210","168");
CategoryIndex["267"]=new Array("0","韩国品牌","224","263","204","201","191","196","177","173","186","181","169","167");
CategoryIndex["166"]=new Array("157","面部护理");
CategoryIndex["165"]=new Array("157","眼部护理");
CategoryIndex["164"]=new Array("157","手部护理");
CategoryIndex["163"]=new Array("157","身体护理");
CategoryIndex["162"]=new Array("157","男士护理");
CategoryIndex["161"]=new Array("157","美发护发");
CategoryIndex["160"]=new Array("157","礼盒套装");
CategoryIndex["159"]=new Array("157","彩妆系列");
CategoryIndex["158"]=new Array("157","防晒系列");
CategoryIndex["157"]=new Array("268","Shiseido/日本资生堂","166","165","164","163","162","161","160","159","158");
CategoryIndex["156"]=new Array("148","面部护理");
CategoryIndex["155"]=new Array("148","眼部护理");
CategoryIndex["154"]=new Array("148","手部护理");
CategoryIndex["153"]=new Array("148","身体护理");
CategoryIndex["152"]=new Array("148","男士护理");
CategoryIndex["151"]=new Array("148","美发护发");
CategoryIndex["150"]=new Array("148","礼盒套装");
CategoryIndex["149"]=new Array("148","彩妆系列");
CategoryIndex["148"]=new Array("268","Kose/日本高丝","156","155","154","153","152","151","150","149");
CategoryIndex["147"]=new Array("139","面部护理");
CategoryIndex["146"]=new Array("139","眼部护理");
CategoryIndex["145"]=new Array("139","手部护理");
CategoryIndex["144"]=new Array("139","身体护理");
CategoryIndex["143"]=new Array("139","男士护理");
CategoryIndex["142"]=new Array("139","美发护发");
CategoryIndex["141"]=new Array("139","礼盒套装");
CategoryIndex["140"]=new Array("139","彩妆系列");
CategoryIndex["139"]=new Array("268","Kanebo/日本嘉娜宝","147","146","145","144","143","142","141","140");
CategoryIndex["72"]=new Array("68","面部护理");
CategoryIndex["71"]=new Array("68","眼部护理");
CategoryIndex["211"]=new Array("68","身体护理");
CategoryIndex["70"]=new Array("68","礼盒套装");
CategoryIndex["69"]=new Array("68","彩妆系列");
CategoryIndex["68"]=new Array("268","日本凉颜","72","71","211","70","69");
CategoryIndex["260"]=new Array("268","日本FANCL（无添加）");
CategoryIndex["132"]=new Array("130","护肤");
CategoryIndex["131"]=new Array("130","彩妆");
CategoryIndex["130"]=new Array("268","日本SUKI","132","131");
CategoryIndex["266"]=new Array("268","POLA(pdc)/日本第一药妆");
CategoryIndex["261"]=new Array("268","日本DHC");
CategoryIndex["65"]=new Array("61","面部护理");
CategoryIndex["64"]=new Array("61","眼部护理");
CategoryIndex["63"]=new Array("61","礼盒套装");
CategoryIndex["62"]=new Array("61","彩妆系列");
CategoryIndex["61"]=new Array("268","Za/姿芮","65","64","63","62");
CategoryIndex["129"]=new Array("126","护 肤");
CategoryIndex["128"]=new Array("126","彩 妆");
CategoryIndex["127"]=new Array("126","香 水");
CategoryIndex["126"]=new Array("268","Anna sui/安娜苏","129","128","127");
CategoryIndex["217"]=new Array("216","护肤");
CategoryIndex["216"]=new Array("268","OMI近江兄弟","217");
CategoryIndex["268"]=new Array("0","日本品牌","157","148","139","68","260","130","266","261","61","126","216");
CategoryIndex["301"]=new Array("120","减肥啫喱");
CategoryIndex["125"]=new Array("120","面部护理");
CategoryIndex["124"]=new Array("120","眼部护理");
CategoryIndex["123"]=new Array("120","男士护理");
CategoryIndex["122"]=new Array("120","礼盒套装");
CategoryIndex["121"]=new Array("120","彩妆系列");
CategoryIndex["120"]=new Array("269","Biotherm/碧欧泉","301","125","124","123","122","121");
CategoryIndex["119"]=new Array("117","面部护理(面膜)");
CategoryIndex["118"]=new Array("117","眼部护理");
CategoryIndex["117"]=new Array("269","Borghese/贝佳斯","119","118");
CategoryIndex["116"]=new Array("113","面部护理");
CategoryIndex["115"]=new Array("113","眼部护理");
CategoryIndex["114"]=new Array("113","彩妆系列");
CategoryIndex["47"]=new Array("113","香水系列");
CategoryIndex["113"]=new Array("269","CD/迪奥","116","115","114","47");
CategoryIndex["303"]=new Array("112","女士香水");
CategoryIndex["112"]=new Array("108","面部护理","303");
CategoryIndex["111"]=new Array("108","眼部护理");
CategoryIndex["110"]=new Array("108","礼盒套装");
CategoryIndex["109"]=new Array("108","彩妆系列");
CategoryIndex["108"]=new Array("269","Clinique/倩碧","112","111","110","109");
CategoryIndex["107"]=new Array("105","身体保养");
CategoryIndex["106"]=new Array("105","美发护发");
CategoryIndex["105"]=new Array("269","DOVE/多芬","107","106");
CategoryIndex["104"]=new Array("101","面部护理");
CategoryIndex["103"]=new Array("101","身体护理");
CategoryIndex["39"]=new Array("101","香水系列");
CategoryIndex["101"]=new Array("269","Elizabeth Arden/雅顿","104","103","39");
CategoryIndex["100"]=new Array("96","面部护理");
CategoryIndex["99"]=new Array("96","眼部护理");
CategoryIndex["97"]=new Array("96","彩妆系列");
CategoryIndex["102"]=new Array("96","香水系列");
CategoryIndex["98"]=new Array("96","礼盒套装");
CategoryIndex["96"]=new Array("269","EsteeLauder/雅诗兰黛","100","99","97","102","98");
CategoryIndex["92"]=new Array("89","面部护理(喷雾)");
CategoryIndex["91"]=new Array("89","眼部护理");
CategoryIndex["89"]=new Array("269","Evian/依云","92","91");
CategoryIndex["83"]=new Array("79","眼部护理");
CategoryIndex["84"]=new Array("79","面部护理");
CategoryIndex["80"]=new Array("79","身体护理");
CategoryIndex["81"]=new Array("79","彩妆系列");
CategoryIndex["82"]=new Array("79","礼盒套装");
CategoryIndex["244"]=new Array("245","玫瑰天然净白系列");
CategoryIndex["243"]=new Array("245","芦荟滋养保湿护肤系列");
CategoryIndex["242"]=new Array("245","绿茶清透控油系列");
CategoryIndex["246"]=new Array("245","洋甘菊舒敏修复系列");
CategoryIndex["247"]=new Array("245","木瓜抗皱护肤系列");
CategoryIndex["248"]=new Array("245","专业眼部系列");
CategoryIndex["249"]=new Array("245","周护系列");
CategoryIndex["250"]=new Array("245","院装系列");
CategoryIndex["251"]=new Array("245","修颜防晒系列");
CategoryIndex["252"]=new Array("245","洗护系列");
CategoryIndex["253"]=new Array("245","精品系列");
CategoryIndex["245"]=new Array("79","美颜植物系列","244","243","242","246","247","248","249","250","251","252","253");
CategoryIndex["31"]=new Array("79","香水系列");
CategoryIndex["79"]=new Array("269","Lancome/兰蔻","83","84","80","81","82","245","31");
CategoryIndex["78"]=new Array("73","面部护理");
CategoryIndex["77"]=new Array("73","眼部护理");
CategoryIndex["76"]=new Array("73","礼盒套装");
CategoryIndex["75"]=new Array("73","彩妆系列");
CategoryIndex["74"]=new Array("73","身体护理");
CategoryIndex["73"]=new Array("269","L’oreal/欧莱雅","78","77","76","75","74");
CategoryIndex["220"]=new Array("218","护肤");
CategoryIndex["219"]=new Array("218","彩妆");
CategoryIndex["218"]=new Array("269","Kiehl's/契尔氏","220","219");
CategoryIndex["222"]=new Array("221","护肤");
CategoryIndex["223"]=new Array("221","眼部护理");
CategoryIndex["221"]=new Array("269","The body shop/美体小铺","222","223");
CategoryIndex["45"]=new Array("20","JAGUAR/积架");
CategoryIndex["50"]=new Array("20","Burberrys/巴宝莉");
CategoryIndex["59"]=new Array("20","Givenchy/纪梵希");
CategoryIndex["48"]=new Array("20","Calotine/歌宝婷");
CategoryIndex["60"]=new Array("20","Davidoff/大卫杜夫");
CategoryIndex["36"]=new Array("20","JLO/珍妮佛洛佩兹");
CategoryIndex["33"]=new Array("20","Kenzo/高田贤三");
CategoryIndex["34"]=new Array("20","Versace/范思哲");
CategoryIndex["42"]=new Array("20","Dunhill/登喜路");
CategoryIndex["38"]=new Array("20","Guerlain娇兰");
CategoryIndex["37"]=new Array("20","Gucci/古琦");
CategoryIndex["44"]=new Array("20","CK/凯文克莱");
CategoryIndex["46"]=new Array("20","Chanel/香奈儿");
CategoryIndex["254"]=new Array("20","佛莱格默");
CategoryIndex["51"]=new Array("20","Boss/Boss");
CategoryIndex["32"]=new Array("20","Lacoste/鳄鱼");
CategoryIndex["30"]=new Array("20","S.T.Dupont/都彭");
CategoryIndex["41"]=new Array("20","其它香水");
CategoryIndex["20"]=new Array("269","香水品牌","45","50","59","48","60","36","33","34","42","38","37","44","46","254","51","32","30","41");
CategoryIndex["269"]=new Array("0","欧美品牌","120","117","113","108","105","101","96","89","79","73","218","221","20");
CategoryIndex["26"]=new Array("270","贝罗");
CategoryIndex["280"]=new Array("270","SHILLS");
CategoryIndex["14"]=new Array("12","护肤");
CategoryIndex["13"]=new Array("12","彩妆");
CategoryIndex["12"]=new Array("270","广源良","14","13");
CategoryIndex["138"]=new Array("133","面部护理");
CategoryIndex["137"]=new Array("133","眼部护理");
CategoryIndex["136"]=new Array("133","身体护理");
CategoryIndex["135"]=new Array("133","礼盒套装");
CategoryIndex["134"]=new Array("133","彩妆系列");
CategoryIndex["133"]=new Array("270","Polynia","138","137","136","135","134");
CategoryIndex["270"]=new Array("0","台湾品牌","26","280","12","133");
CategoryIndex["240"]=new Array("281","千纤草");
CategoryIndex["282"]=new Array("281","昭贵");
CategoryIndex["236"]=new Array("281","蒙巴拉");
CategoryIndex["281"]=new Array("0","国货精品","240","282","236");
CategoryIndex["95"]=new Array("93","护肤");
CategoryIndex["94"]=new Array("93","彩妆");
CategoryIndex["283"]=new Array("93","工具");
CategoryIndex["93"]=new Array("271","台湾牛耳/大Ｓ等推荐","95","94","283");
CategoryIndex["296"]=new Array("271","英皇植物精油");
CategoryIndex["4"]=new Array("271","其它产品");
CategoryIndex["271"]=new Array("0","其他品牌","93","296","4");
CategoryIndex["302"]=new Array("0","女士香水");
CategoryIndex["0"]=new Array("","","267","268","269","270","281","271","302");
PropertyIndex["99"]=new Array("0","换季促销");
PropertyIndex["94"]=new Array("48","彩护套装");
PropertyIndex["49"]=new Array("48","洗护套装");
PropertyIndex["96"]=new Array("48","香水套装");
PropertyIndex["51"]=new Array("48","其它套装");
PropertyIndex["48"]=new Array("0","礼盒套装","94","49","96","51");
PropertyIndex["56"]=new Array("44","祛角质");
PropertyIndex["57"]=new Array("44","清洁霜");
PropertyIndex["58"]=new Array("44","洗面奶");
PropertyIndex["59"]=new Array("44","按摩霜");
PropertyIndex["60"]=new Array("44","皂类");
PropertyIndex["44"]=new Array("4","洁面","56","57","58","59","60");
PropertyIndex["61"]=new Array("53","水");
PropertyIndex["62"]=new Array("53","乳");
PropertyIndex["63"]=new Array("53","霜");
PropertyIndex["98"]=new Array("53","胶");
PropertyIndex["53"]=new Array("4","护肤","61","62","63","98");
PropertyIndex["54"]=new Array("4","精华");
PropertyIndex["55"]=new Array("4","面膜");
PropertyIndex["64"]=new Array("4","其他");
PropertyIndex["4"]=new Array("0","面部护理","44","53","54","55","64");
PropertyIndex["5"]=new Array("0","眼部护理");
PropertyIndex["6"]=new Array("0","唇部护理");
PropertyIndex["7"]=new Array("0","鼻部护理");
PropertyIndex["8"]=new Array("0","手部护理");
PropertyIndex["9"]=new Array("0","足部护理");
PropertyIndex["10"]=new Array("0","颈部护理");
PropertyIndex["11"]=new Array("0","口腔护理");
PropertyIndex["12"]=new Array("0","身体护理");
PropertyIndex["13"]=new Array("0","沐浴产品");
PropertyIndex["14"]=new Array("0","美发护发");
PropertyIndex["17"]=new Array("18","卸妆产品");
PropertyIndex["29"]=new Array("18","粉底/隔离/妆前乳");
PropertyIndex["30"]=new Array("18","粉饼/蜜粉/散粉");
PropertyIndex["38"]=new Array("18","眉笔/眉粉/眉饼");
PropertyIndex["37"]=new Array("18","眼线笔/眼线液");
PropertyIndex["36"]=new Array("18","眼影");
PropertyIndex["34"]=new Array("18","睫毛膏");
PropertyIndex["35"]=new Array("18","睫毛增长液");
PropertyIndex["42"]=new Array("18","腮红/胭脂");
PropertyIndex["43"]=new Array("18","唇彩/唇蜜/唇膏/口红");
PropertyIndex["40"]=new Array("18","唇笔/唇线笔");
PropertyIndex["47"]=new Array("18","修颜/高亮/阴影粉");
PropertyIndex["41"]=new Array("18","遮瑕笔/遮瑕膏/粉条");
PropertyIndex["45"]=new Array("18","指甲油/美甲产品");
PropertyIndex["46"]=new Array("18","身体彩绘");
PropertyIndex["39"]=new Array("18","双眼皮胶");
PropertyIndex["18"]=new Array("0","彩妆系列","17","29","30","38","37","36","34","35","42","43","40","47","41","45","46","39");
PropertyIndex["95"]=new Array("19","香体露");
PropertyIndex["69"]=new Array("19","小样香水");
PropertyIndex["70"]=new Array("19","JAGUAR/积架");
PropertyIndex["71"]=new Array("19","Burberrys/巴宝莉");
PropertyIndex["93"]=new Array("19","CD/迪奥");
PropertyIndex["92"]=new Array("19","Clinique倩碧");
PropertyIndex["91"]=new Array("19","Lancome/兰蔻");
PropertyIndex["90"]=new Array("19","EsteeLauder/雅诗兰黛");
PropertyIndex["89"]=new Array("19","ElizabethArden/雅顿");
PropertyIndex["88"]=new Array("19","annasui/安娜苏");
PropertyIndex["72"]=new Array("19","Givenchy/纪梵希");
PropertyIndex["73"]=new Array("19","Calotine/歌宝婷");
PropertyIndex["74"]=new Array("19","Davidoff/大卫杜夫");
PropertyIndex["75"]=new Array("19","JLO/珍妮佛洛佩兹");
PropertyIndex["76"]=new Array("19","Kenzo/高田贤三");
PropertyIndex["77"]=new Array("19","Versace/范思哲");
PropertyIndex["79"]=new Array("19","Guerlain娇兰");
PropertyIndex["78"]=new Array("19","Dunhill/登喜路");
PropertyIndex["80"]=new Array("19","Gucci/古琦");
PropertyIndex["81"]=new Array("19","CK/凯文克莱");
PropertyIndex["82"]=new Array("19","Chanel/香奈儿");
PropertyIndex["83"]=new Array("19","佛莱格默");
PropertyIndex["84"]=new Array("19","Boss/Boss");
PropertyIndex["85"]=new Array("19","Lacoste/鳄鱼");
PropertyIndex["86"]=new Array("19","S.T.Dupont/都彭");
PropertyIndex["87"]=new Array("19","其它香水");
PropertyIndex["19"]=new Array("0","香水系列","95","69","70","71","93","92","91","90","89","88","72","73","74","75","76","77","79","78","80","81","82","83","84","85","86","87");
PropertyIndex["67"]=new Array("20","单方精油");
PropertyIndex["68"]=new Array("20","复方精油");
PropertyIndex["20"]=new Array("0","植物精油","67","68");
PropertyIndex["15"]=new Array("31","防晒修护");
PropertyIndex["16"]=new Array("31","防冻防裂");
PropertyIndex["52"]=new Array("31","去斑去痘");
PropertyIndex["21"]=new Array("31","瘦身纤体");
PropertyIndex["22"]=new Array("31","美乳丰胸");
PropertyIndex["65"]=new Array("31","黑发产品");
PropertyIndex["23"]=new Array("31","增高产品");
PropertyIndex["97"]=new Array("31","其它功效");
PropertyIndex["31"]=new Array("0","功效产品","15","16","52","21","22","65","23","97");
PropertyIndex["24"]=new Array("0","美容工具");
PropertyIndex["25"]=new Array("0","服饰潮流");
PropertyIndex["26"]=new Array("0","生活居家");
PropertyIndex["27"]=new Array("0","办公文具");
PropertyIndex["28"]=new Array("0","其它产品");
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
  categorycode+="      <TABLE align=center cellSpacing=0 cellPadding=0 width='100%' border='0' style='font-family: '宋体'; font-size: 9pt; color: #333333; letter-spacing: 1px; line-height: 160%'>";
 
  if(RootCategory!="0")
  { categorycode+="<TR style='CURSOR: hand' onMouseOver=\"bgColor='#FFE3D2';\" onMouseOut=\"bgColor='';\" onclick=\"this.all.tags('a')[0].click();\" height=24 valign='middle'><TD> <IMG width=20 height=20 border=0 src='images/guidefold2.gif' align='absMiddle'> <a href='catlist.asp?catid="+CategoryIndex[RootCategory][0]+"'><font color=#FF0000>返回上级分类</font></a></TD></TR>";
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
  Propertycode+="      <TABLE align=center cellSpacing=0 cellPadding=0 width='100%' border='0' style='font-family: '宋体'; font-size: 9pt; color: #333333; letter-spacing: 1px; line-height: 160%'>";
 
  if(RootProperty!="0")
  { Propertycode+="<TR style='CURSOR: hand' onMouseOver=\"bgColor='#FFE3D2';\" onMouseOut=\"bgColor='';\" onclick=\"this.all.tags('a')[0].click();\" height=24 valign='middle'><TD> <IMG width=20 height=20 border=0 src='images/guidefold2.gif' align='absMiddle'> <a href='prolist.asp?proid="+PropertyIndex[RootProperty][0]+"'><font color=#FF0000>返回上级分类</font></a></TD></TR>";
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
