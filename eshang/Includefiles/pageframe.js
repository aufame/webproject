
function GenPageHead()
{var headcode="";
headcode+="<TABLE id='MyPageHead' height=0 cellSpacing=0 cellPadding=0 width='980' align='center' border='0' bgcolor='#FFFFFF'>";
headcode+="<TR>";
headcode+="   <TD bgColor=#e0e0e0 height='5'><iframe name='dummyframe' style='width:100%; height:10%;' scrolling='no'  Frameborder='no' marginwidth=0 marginheight=0></iframe></TD>";
headcode+="</TR>";
headcode+="<TR>";	
headcode+="	 <TD width='100%' height='80' style='BACKGROUND-IMAGE:url(images/bk3.gif); '>";
headcode+="  	   <table border='0' cellpadding='0' cellspacing='0' width='100%' height='100%'>";
headcode+="       <tr>";
headcode+="         <td width='285' height='80' rowspan='2'><img src='pic/advs/weblogo.jpg'></td>";
headcode+="         <td width='695' height='50'>"; 
         	
headcode+="         	  <TABLE cellSpacing='0' cellPadding='0' border='0' width='100%' height='100%'>";
headcode+="         	  <tr>";
headcode+="         	  	<td align='right' valign='top' >";
headcode+="         	      <img src='images/foot.gif' width=16 height=16 align='absMiddle'> <b>您当前位置:</b> <font color='FF6600'><b>易商购物</b></font> | <a href='profile.htm?action=mycart'>购物车</a> | <a href='profile.htm?action=myfav'>收藏架</a> | <a href='#' onclick=\"window.open('paybill.asp','','scrollbars=yes,width=760,height=500')\">收银台</a> | <a href='profile.htm?action=myorders'>我的订单</a> | <a href='guestbook.asp' target='_blank' title='有任何都可以在这里留言...'>访客留言</a> | <a href='quotation.asp' title='最新产品清单批发报价表即时下载'>下载报价单</a>";
headcode+="         	    </td>";
headcode+="         	  </tr>";
headcode+="         	  <tr><form name='loginForm' onsubmit='userlogin(this);return false;'>";
headcode+="         		  <td id='loginfo'  valign='middle' height='35' style='padding-left:140px;BACKGROUND-IMAGE:url(images/loginframe.gif); BACKGROUND-REPEAT: no-repeat;BACKGROUND-POSITION: right 40%;'>&nbsp;</td>";
headcode+="         		  </form>";
headcode+="         	  </tr>";
headcode+="            </TABLE>";  
         	
headcode+="         </td>";
headcode+="       </tr>";
headcode+="       <tr>";
headcode+="          <TD width='695' height='30' align='left' background='images/navBg.gif'>";

headcode+="          <table width='100%' border='0' cellpadding='0' cellspacing='0' align='right'>";
headcode+="              <tr>"; 
headcode+="                <td><a href='/project/eshang/' title='回主页'><img src='images/thomepage.gif' border='0' /></a></td>";
headcode+="                <td><a href='warelist.htm' title='最新上架'><img src='images/tnewpr.gif' border='0' /></a></td>";
headcode+="                <td><a href='onsale.htm' title='特价商品'><img src='images/tspepr.gif' border='0' /></a></td>";
headcode+="                <td><a href='hotsale.htm' title='热销商品'><img src='images/thotpr.gif' border='0' /></a></td>";
headcode+="                <td><a href='present.htm' title='赠品兑换'><img src='images/tinform.gif' border='0' /></a></td>";
headcode+="                <td><a href='news.htm' title='商城新闻'><img src='images/tnews.gif' border='0' /></a></td>";
headcode+="                <td><a href='help.htm' title='帮助中心'><img src='images/tbbs.gif' border='0' /></a></td>";
headcode+="                <td><a href='profile.htm' title='会员中心'><img src='images/tbrandpr.gif' border='0'></a></td>";
headcode+="              </tr>";
headcode+="            </table>";
headcode+="        </TD>";
headcode+="       </tr>";
headcode+="       </table>";
headcode+="  </TR>";
headcode+="  <TR bgColor=#666666>";
headcode+="      <TD height=3></TD>";
headcode+="  </TR>";
headcode+="  <TR>";
headcode+="    <TD height='45'>";
headcode+="    	  <TABLE width='100%' height='100%' cellSpacing=0 cellPadding=0 border='0'  background='images/navbg_0.gif'>";
headcode+="        <TR>";
headcode+="          <TD width='50' height='100%' background='images/navbg_1.gif'> </TD>";
headcode+="          <TD width='105' height='100%' style='padding-bottom:8px'><img src='images/searchbtn.gif'></TD>";
headcode+="          <TD width='680' height='100%'>";
headcode+="            <TABLE width='100%' height='100%' cellSpacing=0 cellPadding=0 border='0'>";
headcode+="            <TR  style='padding-bottom:5px'>";
headcode+="            <td align='center'>";
headcode+="            	  <form name='searchform' method='post' action='research.asp' onsubmit='return check_search();'>";
headcode+="            	  <select name='categoryid'>";
headcode+="            	  	<option value='0' selected>======== 所有分类 ========</option> ";
                         
headcode+="                                 <option value='267'>韩国品牌</option>";
                                 
headcode+="                                 <option value='224'>　　CO.E/韩国韩伊</option>";
                                 
headcode+="                                 <option value='226'>　　　　韩伊橄榄系列</option>";
                                 
headcode+="                                 <option value='227'>　　　　　　护肤系列</option>";
                                 
headcode+="                                 <option value='228'>　　　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='229'>　　　　　　美发护发</option>";
                                 
headcode+="                                 <option value='225'>　　　　韩伊玫瑰系列</option>";
                                 
headcode+="                                 <option value='231'>　　　　　　护肤系列</option>";
                                 
headcode+="                                 <option value='232'>　　　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='233'>　　　　　　美发护发</option>";
                                 
headcode+="                                 <option value='262'>　　　　韩伊一代</option>";
                                 
headcode+="                                 <option value='255'>　　　　韩伊水呼吸系列</option>";
                                 
headcode+="                                 <option value='256'>　　　　　　水养护颜系列</option>";
                                 
headcode+="                                 <option value='259'>　　　　　　净肤平衡系列</option>";
                                 
headcode+="                                 <option value='258'>　　　　　　紧肤抗皱系列</option>";
                                 
headcode+="                                 <option value='284'>　　　　韩伊水肌源系列</option>";
                                 
headcode+="                                 <option value='285'>　　　　韩伊四代SkinBeauty</option>";
                                 
headcode+="                                 <option value='263'>　　韩国美姿男子</option>";
                                 
headcode+="                                 <option value='204'>　　TheFaceShop/韩国</option>";
                                 
headcode+="                                 <option value='208'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='297'>　　　　其它护理</option>";
                                 
headcode+="                                 <option value='209'>　　　　手部护理</option>";
                                 
headcode+="                                 <option value='207'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='206'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='205'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='201'>　　SkinFood/韩国</option>";
                                 
headcode+="                                 <option value='299'>　　　　其它护理</option>";
                                 
headcode+="                                 <option value='298'>　　　　唇手护理</option>";
                                 
headcode+="                                 <option value='203'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='202'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='230'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='191'>　　Charmzone/韩国婵真</option>";
                                 
headcode+="                                 <option value='195'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='194'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='193'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='192'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='196'>　　Deoproce/韩国三星</option>";
                                 
headcode+="                                 <option value='200'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='199'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='198'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='197'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='177'>　　Vov/韩国Vov</option>";
                                 
headcode+="                                 <option value='265'>　　　　中国产</option>";
                                 
headcode+="                                 <option value='264'>　　　　韩国产</option>";
                                 
headcode+="                                 <option value='173'>　　DoDo/韩国嘟嘟</option>";
                                 
headcode+="                                 <option value='175'>　　　　面部护理(防晒)</option>";
                                 
headcode+="                                 <option value='174'>　　　　彩 妆(散粉)</option>";
                                 
headcode+="                                 <option value='186'>　　ETUDE /韩国爱丽</option>";
                                 
headcode+="                                 <option value='190'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='189'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='188'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='187'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='181'>　　Laneige/韩国兰芝</option>";
                                 
headcode+="                                 <option value='185'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='184'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='183'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='182'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='169'>　　Amore/韩国爱茉莉</option>";
                                 
headcode+="                                 <option value='172'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='171'>　　　　美发护发</option>";
                                 
headcode+="                                 <option value='170'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='167'>　　Love/韩国永爱</option>";
                                 
headcode+="                                 <option value='210'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='168'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='268'>日本品牌</option>";
                                 
headcode+="                                 <option value='157'>　　Shiseido/日本资生堂</option>";
                                 
headcode+="                                 <option value='166'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='165'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='164'>　　　　手部护理</option>";
                                 
headcode+="                                 <option value='163'>　　　　身体护理</option>";
                                 
headcode+="                                 <option value='162'>　　　　男士护理</option>";
                                 
headcode+="                                 <option value='161'>　　　　美发护发</option>";
                                 
headcode+="                                 <option value='160'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='159'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='158'>　　　　防晒系列</option>";
                                 
headcode+="                                 <option value='148'>　　Kose/日本高丝</option>";
                                 
headcode+="                                 <option value='156'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='155'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='154'>　　　　手部护理</option>";
                                 
headcode+="                                 <option value='153'>　　　　身体护理</option>";
                                 
headcode+="                                 <option value='152'>　　　　男士护理</option>";
                                 
headcode+="                                 <option value='151'>　　　　美发护发</option>";
                                 
headcode+="                                 <option value='150'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='149'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='139'>　　Kanebo/日本嘉娜宝</option>";
                                 
headcode+="                                 <option value='147'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='146'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='145'>　　　　手部护理</option>";
                                 
headcode+="                                 <option value='144'>　　　　身体护理</option>";
                                 
headcode+="                                 <option value='143'>　　　　男士护理</option>";
                                 
headcode+="                                 <option value='142'>　　　　美发护发</option>";
                                 
headcode+="                                 <option value='141'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='140'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='68'>　　日本凉颜</option>";
                                 
headcode+="                                 <option value='72'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='71'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='211'>　　　　身体护理</option>";
                                 
headcode+="                                 <option value='70'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='69'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='260'>　　日本FANCL（无添加）</option>";
                                 
headcode+="                                 <option value='130'>　　日本SUKI</option>";
                                 
headcode+="                                 <option value='132'>　　　　护肤</option>";
                                 
headcode+="                                 <option value='131'>　　　　彩妆</option>";
                                 
headcode+="                                 <option value='266'>　　POLA(pdc)/日本第一药妆</option>";
                                 
headcode+="                                 <option value='261'>　　日本DHC</option>";
                                 
headcode+="                                 <option value='61'>　　Za/姿芮</option>";
                                 
headcode+="                                 <option value='65'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='64'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='63'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='62'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='126'>　　Anna sui/安娜苏</option>";
                                 
headcode+="                                 <option value='129'>　　　　护 肤</option>";
                                 
headcode+="                                 <option value='128'>　　　　彩 妆</option>";
                                 
headcode+="                                 <option value='127'>　　　　香 水</option>";
                                 
headcode+="                                 <option value='216'>　　OMI近江兄弟</option>";
                                 
headcode+="                                 <option value='217'>　　　　护肤</option>";
                                 
headcode+="                                 <option value='269'>欧美品牌</option>";
                                 
headcode+="                                 <option value='120'>　　Biotherm/碧欧泉</option>";
                                 
headcode+="                                 <option value='301'>　　　　减肥啫喱</option>";
                                 
headcode+="                                 <option value='125'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='124'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='123'>　　　　男士护理</option>";
                                 
headcode+="                                 <option value='122'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='121'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='117'>　　Borghese/贝佳斯</option>";
                                 
headcode+="                                 <option value='119'>　　　　面部护理(面膜)</option>";
                                 
headcode+="                                 <option value='118'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='113'>　　CD/迪奥</option>";
                                 
headcode+="                                 <option value='116'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='115'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='114'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='47'>　　　　香水系列</option>";
                                 
headcode+="                                 <option value='108'>　　Clinique/倩碧</option>";
                                 
headcode+="                                 <option value='112'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='303'>　　　　　　女士香水</option>";
                                 
headcode+="                                 <option value='111'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='110'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='109'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='105'>　　DOVE/多芬</option>";
                                 
headcode+="                                 <option value='107'>　　　　身体保养</option>";
                                 
headcode+="                                 <option value='106'>　　　　美发护发</option>";
                                 
headcode+="                                 <option value='101'>　　Elizabeth Arden/雅顿</option>";
                                 
headcode+="                                 <option value='104'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='103'>　　　　身体护理</option>";
                                 
headcode+="                                 <option value='39'>　　　　香水系列</option>";
                                 
headcode+="                                 <option value='96'>　　EsteeLauder/雅诗兰黛</option>";
                                 
headcode+="                                 <option value='100'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='99'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='97'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='102'>　　　　香水系列</option>";
                                 
headcode+="                                 <option value='98'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='89'>　　Evian/依云</option>";
                                 
headcode+="                                 <option value='92'>　　　　面部护理(喷雾)</option>";
                                 
headcode+="                                 <option value='91'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='79'>　　Lancome/兰蔻</option>";
                                 
headcode+="                                 <option value='83'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='84'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='80'>　　　　身体护理</option>";
                                 
headcode+="                                 <option value='81'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='82'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='245'>　　　　美颜植物系列</option>";
                                 
headcode+="                                 <option value='244'>　　　　　　玫瑰天然净白系列</option>";
                                 
headcode+="                                 <option value='243'>　　　　　　芦荟滋养保湿护肤系列</option>";
                                 
headcode+="                                 <option value='242'>　　　　　　绿茶清透控油系列</option>";
                                 
headcode+="                                 <option value='246'>　　　　　　洋甘菊舒敏修复系列</option>";
                                 
headcode+="                                 <option value='247'>　　　　　　木瓜抗皱护肤系列</option>";
                                 
headcode+="                                 <option value='248'>　　　　　　专业眼部系列</option>";
                                 
headcode+="                                 <option value='249'>　　　　　　周护系列</option>";
                                 
headcode+="                                 <option value='250'>　　　　　　院装系列</option>";
                                 
headcode+="                                 <option value='251'>　　　　　　修颜防晒系列</option>";
                                 
headcode+="                                 <option value='252'>　　　　　　洗护系列</option>";
                                 
headcode+="                                 <option value='253'>　　　　　　精品系列</option>";
                                 
headcode+="                                 <option value='31'>　　　　香水系列</option>";
                                 
headcode+="                                 <option value='73'>　　L’oreal/欧莱雅</option>";
                                 
headcode+="                                 <option value='78'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='77'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='76'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='75'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='74'>　　　　身体护理</option>";
                                 
headcode+="                                 <option value='66'>　　Neutrogena/露得清</option>";
                                 
headcode+="                                 <option value='67'>　　　　面部护理(面膜)</option>";
                                 
headcode+="                                 <option value='218'>　　Kiehl's/契尔氏</option>";
                                 
headcode+="                                 <option value='220'>　　　　护肤</option>";
                                 
headcode+="                                 <option value='219'>　　　　彩妆</option>";
                                 
headcode+="                                 <option value='221'>　　The body shop/美体小铺</option>";
                                 
headcode+="                                 <option value='222'>　　　　护肤</option>";
                                 
headcode+="                                 <option value='223'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='20'>　　香水品牌</option>";
                                 
headcode+="                                 <option value='45'>　　　　JAGUAR/积架</option>";
                                 
headcode+="                                 <option value='50'>　　　　Burberrys/巴宝莉</option>";
                                 
headcode+="                                 <option value='59'>　　　　Givenchy/纪梵希</option>";
                                 
headcode+="                                 <option value='48'>　　　　Calotine/歌宝婷</option>";
                                 
headcode+="                                 <option value='60'>　　　　Davidoff/大卫杜夫</option>";
                                 
headcode+="                                 <option value='36'>　　　　JLO/珍妮佛洛佩兹</option>";
                                 
headcode+="                                 <option value='33'>　　　　Kenzo/高田贤三</option>";
                                 
headcode+="                                 <option value='34'>　　　　Versace/范思哲</option>";
                                 
headcode+="                                 <option value='42'>　　　　Dunhill/登喜路</option>";
                                 
headcode+="                                 <option value='38'>　　　　Guerlain娇兰</option>";
                                 
headcode+="                                 <option value='37'>　　　　Gucci/古琦</option>";
                                 
headcode+="                                 <option value='44'>　　　　CK/凯文克莱</option>";
                                 
headcode+="                                 <option value='46'>　　　　Chanel/香奈儿</option>";
                                 
headcode+="                                 <option value='254'>　　　　佛莱格默</option>";
                                 
headcode+="                                 <option value='51'>　　　　Boss/Boss</option>";
                                 
headcode+="                                 <option value='32'>　　　　Lacoste/鳄鱼</option>";
                                 
headcode+="                                 <option value='30'>　　　　S.T.Dupont/都彭</option>";
                                 
headcode+="                                 <option value='41'>　　　　其它香水</option>";
                                 
headcode+="                                 <option value='270'>台湾品牌</option>";
                                 
headcode+="                                 <option value='26'>　　贝罗</option>";
                                 
headcode+="                                 <option value='280'>　　SHILLS</option>";
                                 
headcode+="                                 <option value='12'>　　广源良</option>";
                                 
headcode+="                                 <option value='14'>　　　　护肤</option>";
                                 
headcode+="                                 <option value='13'>　　　　彩妆</option>";
                                 
headcode+="                                 <option value='133'>　　Polynia</option>";
                                 
headcode+="                                 <option value='138'>　　　　面部护理</option>";
                                 
headcode+="                                 <option value='137'>　　　　眼部护理</option>";
                                 
headcode+="                                 <option value='136'>　　　　身体护理</option>";
                                 
headcode+="                                 <option value='135'>　　　　礼盒套装</option>";
                                 
headcode+="                                 <option value='134'>　　　　彩妆系列</option>";
                                 
headcode+="                                 <option value='281'>国货精品</option>";
                                 
headcode+="                                 <option value='240'>　　千纤草</option>";
                                 
headcode+="                                 <option value='282'>　　昭贵</option>";
                                 
headcode+="                                 <option value='236'>　　蒙巴拉</option>";
                                 
headcode+="                                 <option value='271'>其他品牌</option>";
                                 
headcode+="                                 <option value='93'>　　台湾牛耳/大Ｓ等推荐</option>";
                                 
headcode+="                                 <option value='95'>　　　　护肤</option>";
                                 
headcode+="                                 <option value='94'>　　　　彩妆</option>";
                                 
headcode+="                                 <option value='283'>　　　　工具</option>";
                                 
headcode+="                                 <option value='296'>　　英皇植物精油</option>";
                                 
headcode+="                                 <option value='4'>　　其它产品</option>";
                                 
headcode+="                                 <option value='302'>女士香水</option>";
                                 
headcode+="                            </select>";
headcode+="              	<select name='action' >";
headcode+="                  <option value='1' selected>商品名称</option>";
headcode+="		              <option value='2'>商品编号</option>";
headcode+="                  <option value='4'>商品介绍</option>";
headcode+="                  </select>";
headcode+="               <input name='searchkey' type='text' size='20' maxlength='50' style='text-align:center' value='请输入关键字' onFocus=\"this.value=''\">";
headcode+="               <input type='image' src='images/searchbtn2.gif' align='absMiddle'>";
headcode+="              </td></form>";
headcode+="            </tr>";
headcode+="            </table>";
headcode+="          </TD>";
headcode+="          <TD width=130 align='right' valign='top' style='padding-top:10px'>";
headcode+="          	<FONT color=#ffffff><a name='StranLink' style='color:red'>繁體中文</A></FONT> | <A href=\"javascript:window.external.AddFavorite('http://www.etai.biz', '易泰商城')\">收藏本站</A>";
headcode+="          </TD>";
headcode+="          <TD width='15' height='100%' background='images/navbg_2.gif'></TD>";
headcode+="        </TR>";
headcode+="        </TABLE>";
headcode+="    </TD>";
headcode+="  </TR>"; 
headcode+="</TABLE>";  
document.write(headcode);
}



function GenPageBottom()
{var pagecode="";
pagecode+="<table width='980' align='center' border=0  cellpadding=0 cellspacing=0 bgcolor=#FFFFFF>"
pagecode+="<tr height='22' align='center'>";
pagecode+="  <td width='100%'><hr color='GREEN'><A href=\"/\">站点首页</A> | <A href=\"help.htm\">常见问题</A> | <A href=\"help.htm?title=批发规则\">批发规则</A> | <A href=\"help.htm?title=购物流程\">购物流程</A> | <A href=\"help.htm?title=付款方式\">付款方式</A> | <A href=\"help.htm?title=配送问题\">配送问题</A> |&nbsp;<A href=\"help.htm?title=售后服务\">售后服务</A> | <A href=\"news.htm\">商城新闻</A> |&nbsp;<A href=\"help.htm?title=广告链接\">广告链接</A> | <A href=\"help.htm?title=联系我们\">联系我们</A>&nbsp;| <A href=\"help.htm?title=关于我们\">关于我们</A><hr></td>";
pagecode+="</tr>";
pagecode+="<tr align='center' height='20' valign='bottom'>";
pagecode+="  <td width='100%'>";
pagecode+="  	 <table align='center' border='0' cellpadding='0' cellspacing='0' width='100%'>";
pagecode+="  	 <tr>";
pagecode+="  	 	 <td width='35%' align='center' valign='middle'>";
pagecode+="  	 	 	 <img src='pic/advs/weblogo.jpg' border=0>";
pagecode+="  	 	 </td>";
pagecode+="       <td width='65%' style='padding-top:3px'>";
pagecode+="       	公司地址：贵阳市新添大道南段125号0805室 &nbsp; 邮政编码：550004<br>";
pagecode+="       	热线电话：0851-6751499 &nbsp; 传真号码：0851-6751499<br>";
pagecode+="        联系信箱：gz316@qq.com &nbsp; <A title='在线处理投诉问题与建议,QQ号码975898308' href='http://wpa.qq.com/msgrd?V=1&Uin=975898308&Site=易商购物&Menu=yes' target=blank>投诉与建议<IMG src='http://wpa.qq.com/pa?p=1:975898308:5' border=0></A><br>";
pagecode+="        <span><div style='position:relative;top:-3000px;'><a href='http://www.charmbloom.com'>韩国化妆品批发</a><a href='http://www.fashionline.js.cn'>进口化妆品批发</a></div></span>";
pagecode+="        <font color='#FF0000'>工作时间：9:30～18:30 （节假日有值班）</font><br>";
pagecode+="        版权所有：&copy; 2006~2014&nbsp;贵州易商购物网 All Rights Reserved.<br>";
pagecode+="        网站开发：<a href='http://www.cmsoft.cn' target='_blank'>南京铭心网络软件工作室</a> &nbsp;技术支持<A title='网站建设技术支持' href='http://wpa.qq.com/msgrd?V=1&Uin=10865600&Site=易商购物&Menu=yes' target=blank><IMG src='http://wpa.qq.com/pa?p=1:10865600:5' border=0></A><br>";
pagecode+="        网站备案：<a href='http://www.miibeian.gov.cn' target='_blank'><font color='#FF0000'><b>黔B2－2008004</b></font></a>";
pagecode+="       </td>";
pagecode+="     </tr>";
pagecode+="     </table>";
pagecode+="   </td>";
pagecode+="</tr>";
pagecode+="</table>";
document.write(pagecode);

var QQs=new Array('客服010','1098308087','客服020','975898308');
LoadQQService(QQs,"易商购物");
}


GenPageHead();

