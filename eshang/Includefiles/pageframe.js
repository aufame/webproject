
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
headcode+="         	      <img src='images/foot.gif' width=16 height=16 align='absMiddle'> <b>����ǰλ��:</b> <font color='FF6600'><b>���̹���</b></font> | <a href='profile.htm?action=mycart'>���ﳵ</a> | <a href='profile.htm?action=myfav'>�ղؼ�</a> | <a href='#' onclick=\"window.open('paybill.asp','','scrollbars=yes,width=760,height=500')\">����̨</a> | <a href='profile.htm?action=myorders'>�ҵĶ���</a> | <a href='guestbook.asp' target='_blank' title='���κζ���������������...'>�ÿ�����</a> | <a href='quotation.asp' title='���²�Ʒ�嵥�������۱�ʱ����'>���ر��۵�</a>";
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
headcode+="                <td><a href='/project/eshang/' title='����ҳ'><img src='images/thomepage.gif' border='0' /></a></td>";
headcode+="                <td><a href='warelist.htm' title='�����ϼ�'><img src='images/tnewpr.gif' border='0' /></a></td>";
headcode+="                <td><a href='onsale.htm' title='�ؼ���Ʒ'><img src='images/tspepr.gif' border='0' /></a></td>";
headcode+="                <td><a href='hotsale.htm' title='������Ʒ'><img src='images/thotpr.gif' border='0' /></a></td>";
headcode+="                <td><a href='present.htm' title='��Ʒ�һ�'><img src='images/tinform.gif' border='0' /></a></td>";
headcode+="                <td><a href='news.htm' title='�̳�����'><img src='images/tnews.gif' border='0' /></a></td>";
headcode+="                <td><a href='help.htm' title='��������'><img src='images/tbbs.gif' border='0' /></a></td>";
headcode+="                <td><a href='profile.htm' title='��Ա����'><img src='images/tbrandpr.gif' border='0'></a></td>";
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
headcode+="            	  	<option value='0' selected>======== ���з��� ========</option> ";
                         
headcode+="                                 <option value='267'>����Ʒ��</option>";
                                 
headcode+="                                 <option value='224'>����CO.E/��������</option>";
                                 
headcode+="                                 <option value='226'>���������������ϵ��</option>";
                                 
headcode+="                                 <option value='227'>����������������ϵ��</option>";
                                 
headcode+="                                 <option value='228'>��������������ױϵ��</option>";
                                 
headcode+="                                 <option value='229'>��������������������</option>";
                                 
headcode+="                                 <option value='225'>������������õ��ϵ��</option>";
                                 
headcode+="                                 <option value='231'>����������������ϵ��</option>";
                                 
headcode+="                                 <option value='232'>��������������ױϵ��</option>";
                                 
headcode+="                                 <option value='233'>��������������������</option>";
                                 
headcode+="                                 <option value='262'>������������һ��</option>";
                                 
headcode+="                                 <option value='255'>������������ˮ����ϵ��</option>";
                                 
headcode+="                                 <option value='256'>������������ˮ������ϵ��</option>";
                                 
headcode+="                                 <option value='259'>����������������ƽ��ϵ��</option>";
                                 
headcode+="                                 <option value='258'>��������������������ϵ��</option>";
                                 
headcode+="                                 <option value='284'>������������ˮ��Դϵ��</option>";
                                 
headcode+="                                 <option value='285'>�������������Ĵ�SkinBeauty</option>";
                                 
headcode+="                                 <option value='263'>����������������</option>";
                                 
headcode+="                                 <option value='204'>����TheFaceShop/����</option>";
                                 
headcode+="                                 <option value='208'>���������沿����</option>";
                                 
headcode+="                                 <option value='297'>����������������</option>";
                                 
headcode+="                                 <option value='209'>���������ֲ�����</option>";
                                 
headcode+="                                 <option value='207'>���������۲�����</option>";
                                 
headcode+="                                 <option value='206'>�������������װ</option>";
                                 
headcode+="                                 <option value='205'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='201'>����SkinFood/����</option>";
                                 
headcode+="                                 <option value='299'>����������������</option>";
                                 
headcode+="                                 <option value='298'>�����������ֻ���</option>";
                                 
headcode+="                                 <option value='203'>���������沿����</option>";
                                 
headcode+="                                 <option value='202'>���������۲�����</option>";
                                 
headcode+="                                 <option value='230'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='191'>����Charmzone/�������</option>";
                                 
headcode+="                                 <option value='195'>���������沿����</option>";
                                 
headcode+="                                 <option value='194'>���������۲�����</option>";
                                 
headcode+="                                 <option value='193'>�������������װ</option>";
                                 
headcode+="                                 <option value='192'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='196'>����Deoproce/��������</option>";
                                 
headcode+="                                 <option value='200'>���������沿����</option>";
                                 
headcode+="                                 <option value='199'>���������۲�����</option>";
                                 
headcode+="                                 <option value='198'>�������������װ</option>";
                                 
headcode+="                                 <option value='197'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='177'>����Vov/����Vov</option>";
                                 
headcode+="                                 <option value='265'>���������й���</option>";
                                 
headcode+="                                 <option value='264'>��������������</option>";
                                 
headcode+="                                 <option value='173'>����DoDo/������</option>";
                                 
headcode+="                                 <option value='175'>���������沿����(��ɹ)</option>";
                                 
headcode+="                                 <option value='174'>���������� ױ(ɢ��)</option>";
                                 
headcode+="                                 <option value='186'>����ETUDE /��������</option>";
                                 
headcode+="                                 <option value='190'>���������沿����</option>";
                                 
headcode+="                                 <option value='189'>���������۲�����</option>";
                                 
headcode+="                                 <option value='188'>�������������װ</option>";
                                 
headcode+="                                 <option value='187'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='181'>����Laneige/������֥</option>";
                                 
headcode+="                                 <option value='185'>���������沿����</option>";
                                 
headcode+="                                 <option value='184'>���������۲�����</option>";
                                 
headcode+="                                 <option value='183'>�������������װ</option>";
                                 
headcode+="                                 <option value='182'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='169'>����Amore/����������</option>";
                                 
headcode+="                                 <option value='172'>���������沿����</option>";
                                 
headcode+="                                 <option value='171'>����������������</option>";
                                 
headcode+="                                 <option value='170'>�������������װ</option>";
                                 
headcode+="                                 <option value='167'>����Love/��������</option>";
                                 
headcode+="                                 <option value='210'>�������������װ</option>";
                                 
headcode+="                                 <option value='168'>���������沿����</option>";
                                 
headcode+="                                 <option value='268'>�ձ�Ʒ��</option>";
                                 
headcode+="                                 <option value='157'>����Shiseido/�ձ�������</option>";
                                 
headcode+="                                 <option value='166'>���������沿����</option>";
                                 
headcode+="                                 <option value='165'>���������۲�����</option>";
                                 
headcode+="                                 <option value='164'>���������ֲ�����</option>";
                                 
headcode+="                                 <option value='163'>�����������廤��</option>";
                                 
headcode+="                                 <option value='162'>����������ʿ����</option>";
                                 
headcode+="                                 <option value='161'>����������������</option>";
                                 
headcode+="                                 <option value='160'>�������������װ</option>";
                                 
headcode+="                                 <option value='159'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='158'>����������ɹϵ��</option>";
                                 
headcode+="                                 <option value='148'>����Kose/�ձ���˿</option>";
                                 
headcode+="                                 <option value='156'>���������沿����</option>";
                                 
headcode+="                                 <option value='155'>���������۲�����</option>";
                                 
headcode+="                                 <option value='154'>���������ֲ�����</option>";
                                 
headcode+="                                 <option value='153'>�����������廤��</option>";
                                 
headcode+="                                 <option value='152'>����������ʿ����</option>";
                                 
headcode+="                                 <option value='151'>����������������</option>";
                                 
headcode+="                                 <option value='150'>�������������װ</option>";
                                 
headcode+="                                 <option value='149'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='139'>����Kanebo/�ձ����ȱ�</option>";
                                 
headcode+="                                 <option value='147'>���������沿����</option>";
                                 
headcode+="                                 <option value='146'>���������۲�����</option>";
                                 
headcode+="                                 <option value='145'>���������ֲ�����</option>";
                                 
headcode+="                                 <option value='144'>�����������廤��</option>";
                                 
headcode+="                                 <option value='143'>����������ʿ����</option>";
                                 
headcode+="                                 <option value='142'>����������������</option>";
                                 
headcode+="                                 <option value='141'>�������������װ</option>";
                                 
headcode+="                                 <option value='140'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='68'>�����ձ�����</option>";
                                 
headcode+="                                 <option value='72'>���������沿����</option>";
                                 
headcode+="                                 <option value='71'>���������۲�����</option>";
                                 
headcode+="                                 <option value='211'>�����������廤��</option>";
                                 
headcode+="                                 <option value='70'>�������������װ</option>";
                                 
headcode+="                                 <option value='69'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='260'>�����ձ�FANCL������ӣ�</option>";
                                 
headcode+="                                 <option value='130'>�����ձ�SUKI</option>";
                                 
headcode+="                                 <option value='132'>������������</option>";
                                 
headcode+="                                 <option value='131'>����������ױ</option>";
                                 
headcode+="                                 <option value='266'>����POLA(pdc)/�ձ���һҩױ</option>";
                                 
headcode+="                                 <option value='261'>�����ձ�DHC</option>";
                                 
headcode+="                                 <option value='61'>����Za/����</option>";
                                 
headcode+="                                 <option value='65'>���������沿����</option>";
                                 
headcode+="                                 <option value='64'>���������۲�����</option>";
                                 
headcode+="                                 <option value='63'>�������������װ</option>";
                                 
headcode+="                                 <option value='62'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='126'>����Anna sui/������</option>";
                                 
headcode+="                                 <option value='129'>���������� ��</option>";
                                 
headcode+="                                 <option value='128'>���������� ױ</option>";
                                 
headcode+="                                 <option value='127'>���������� ˮ</option>";
                                 
headcode+="                                 <option value='216'>����OMI�����ֵ�</option>";
                                 
headcode+="                                 <option value='217'>������������</option>";
                                 
headcode+="                                 <option value='269'>ŷ��Ʒ��</option>";
                                 
headcode+="                                 <option value='120'>����Biotherm/��ŷȪ</option>";
                                 
headcode+="                                 <option value='301'>�����������ʆ��</option>";
                                 
headcode+="                                 <option value='125'>���������沿����</option>";
                                 
headcode+="                                 <option value='124'>���������۲�����</option>";
                                 
headcode+="                                 <option value='123'>����������ʿ����</option>";
                                 
headcode+="                                 <option value='122'>�������������װ</option>";
                                 
headcode+="                                 <option value='121'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='117'>����Borghese/����˹</option>";
                                 
headcode+="                                 <option value='119'>���������沿����(��Ĥ)</option>";
                                 
headcode+="                                 <option value='118'>���������۲�����</option>";
                                 
headcode+="                                 <option value='113'>����CD/�ϰ�</option>";
                                 
headcode+="                                 <option value='116'>���������沿����</option>";
                                 
headcode+="                                 <option value='115'>���������۲�����</option>";
                                 
headcode+="                                 <option value='114'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='47'>����������ˮϵ��</option>";
                                 
headcode+="                                 <option value='108'>����Clinique/ٻ��</option>";
                                 
headcode+="                                 <option value='112'>���������沿����</option>";
                                 
headcode+="                                 <option value='303'>������������Ůʿ��ˮ</option>";
                                 
headcode+="                                 <option value='111'>���������۲�����</option>";
                                 
headcode+="                                 <option value='110'>�������������װ</option>";
                                 
headcode+="                                 <option value='109'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='105'>����DOVE/���</option>";
                                 
headcode+="                                 <option value='107'>�����������屣��</option>";
                                 
headcode+="                                 <option value='106'>����������������</option>";
                                 
headcode+="                                 <option value='101'>����Elizabeth Arden/�Ŷ�</option>";
                                 
headcode+="                                 <option value='104'>���������沿����</option>";
                                 
headcode+="                                 <option value='103'>�����������廤��</option>";
                                 
headcode+="                                 <option value='39'>����������ˮϵ��</option>";
                                 
headcode+="                                 <option value='96'>����EsteeLauder/��ʫ����</option>";
                                 
headcode+="                                 <option value='100'>���������沿����</option>";
                                 
headcode+="                                 <option value='99'>���������۲�����</option>";
                                 
headcode+="                                 <option value='97'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='102'>����������ˮϵ��</option>";
                                 
headcode+="                                 <option value='98'>�������������װ</option>";
                                 
headcode+="                                 <option value='89'>����Evian/����</option>";
                                 
headcode+="                                 <option value='92'>���������沿����(����)</option>";
                                 
headcode+="                                 <option value='91'>���������۲�����</option>";
                                 
headcode+="                                 <option value='79'>����Lancome/��ޢ</option>";
                                 
headcode+="                                 <option value='83'>���������۲�����</option>";
                                 
headcode+="                                 <option value='84'>���������沿����</option>";
                                 
headcode+="                                 <option value='80'>�����������廤��</option>";
                                 
headcode+="                                 <option value='81'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='82'>�������������װ</option>";
                                 
headcode+="                                 <option value='245'>������������ֲ��ϵ��</option>";
                                 
headcode+="                                 <option value='244'>������������õ����Ȼ����ϵ��</option>";
                                 
headcode+="                                 <option value='243'>������������«��������ʪ����ϵ��</option>";
                                 
headcode+="                                 <option value='242'>�������������̲���͸����ϵ��</option>";
                                 
headcode+="                                 <option value='246'>��������������ʾ������޸�ϵ��</option>";
                                 
headcode+="                                 <option value='247'>������������ľ�Ͽ��廤��ϵ��</option>";
                                 
headcode+="                                 <option value='248'>������������רҵ�۲�ϵ��</option>";
                                 
headcode+="                                 <option value='249'>�������������ܻ�ϵ��</option>";
                                 
headcode+="                                 <option value='250'>������������Ժװϵ��</option>";
                                 
headcode+="                                 <option value='251'>���������������շ�ɹϵ��</option>";
                                 
headcode+="                                 <option value='252'>������������ϴ��ϵ��</option>";
                                 
headcode+="                                 <option value='253'>��������������Ʒϵ��</option>";
                                 
headcode+="                                 <option value='31'>����������ˮϵ��</option>";
                                 
headcode+="                                 <option value='73'>����L��oreal/ŷ����</option>";
                                 
headcode+="                                 <option value='78'>���������沿����</option>";
                                 
headcode+="                                 <option value='77'>���������۲�����</option>";
                                 
headcode+="                                 <option value='76'>�������������װ</option>";
                                 
headcode+="                                 <option value='75'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='74'>�����������廤��</option>";
                                 
headcode+="                                 <option value='66'>����Neutrogena/¶����</option>";
                                 
headcode+="                                 <option value='67'>���������沿����(��Ĥ)</option>";
                                 
headcode+="                                 <option value='218'>����Kiehl's/������</option>";
                                 
headcode+="                                 <option value='220'>������������</option>";
                                 
headcode+="                                 <option value='219'>����������ױ</option>";
                                 
headcode+="                                 <option value='221'>����The body shop/����С��</option>";
                                 
headcode+="                                 <option value='222'>������������</option>";
                                 
headcode+="                                 <option value='223'>���������۲�����</option>";
                                 
headcode+="                                 <option value='20'>������ˮƷ��</option>";
                                 
headcode+="                                 <option value='45'>��������JAGUAR/����</option>";
                                 
headcode+="                                 <option value='50'>��������Burberrys/�ͱ���</option>";
                                 
headcode+="                                 <option value='59'>��������Givenchy/����ϣ</option>";
                                 
headcode+="                                 <option value='48'>��������Calotine/�豦��</option>";
                                 
headcode+="                                 <option value='60'>��������Davidoff/�����ŷ�</option>";
                                 
headcode+="                                 <option value='36'>��������JLO/���ݷ�������</option>";
                                 
headcode+="                                 <option value='33'>��������Kenzo/��������</option>";
                                 
headcode+="                                 <option value='34'>��������Versace/��˼��</option>";
                                 
headcode+="                                 <option value='42'>��������Dunhill/��ϲ·</option>";
                                 
headcode+="                                 <option value='38'>��������Guerlain����</option>";
                                 
headcode+="                                 <option value='37'>��������Gucci/����</option>";
                                 
headcode+="                                 <option value='44'>��������CK/���Ŀ���</option>";
                                 
headcode+="                                 <option value='46'>��������Chanel/���ζ�</option>";
                                 
headcode+="                                 <option value='254'>��������������Ĭ</option>";
                                 
headcode+="                                 <option value='51'>��������Boss/Boss</option>";
                                 
headcode+="                                 <option value='32'>��������Lacoste/����</option>";
                                 
headcode+="                                 <option value='30'>��������S.T.Dupont/����</option>";
                                 
headcode+="                                 <option value='41'>��������������ˮ</option>";
                                 
headcode+="                                 <option value='270'>̨��Ʒ��</option>";
                                 
headcode+="                                 <option value='26'>��������</option>";
                                 
headcode+="                                 <option value='280'>����SHILLS</option>";
                                 
headcode+="                                 <option value='12'>������Դ��</option>";
                                 
headcode+="                                 <option value='14'>������������</option>";
                                 
headcode+="                                 <option value='13'>����������ױ</option>";
                                 
headcode+="                                 <option value='133'>����Polynia</option>";
                                 
headcode+="                                 <option value='138'>���������沿����</option>";
                                 
headcode+="                                 <option value='137'>���������۲�����</option>";
                                 
headcode+="                                 <option value='136'>�����������廤��</option>";
                                 
headcode+="                                 <option value='135'>�������������װ</option>";
                                 
headcode+="                                 <option value='134'>����������ױϵ��</option>";
                                 
headcode+="                                 <option value='281'>������Ʒ</option>";
                                 
headcode+="                                 <option value='240'>����ǧ�˲�</option>";
                                 
headcode+="                                 <option value='282'>�����ѹ�</option>";
                                 
headcode+="                                 <option value='236'>�����ɰ���</option>";
                                 
headcode+="                                 <option value='271'>����Ʒ��</option>";
                                 
headcode+="                                 <option value='93'>����̨��ţ��/��ӵ��Ƽ�</option>";
                                 
headcode+="                                 <option value='95'>������������</option>";
                                 
headcode+="                                 <option value='94'>����������ױ</option>";
                                 
headcode+="                                 <option value='283'>������������</option>";
                                 
headcode+="                                 <option value='296'>����Ӣ��ֲ�ﾫ��</option>";
                                 
headcode+="                                 <option value='4'>����������Ʒ</option>";
                                 
headcode+="                                 <option value='302'>Ůʿ��ˮ</option>";
                                 
headcode+="                            </select>";
headcode+="              	<select name='action' >";
headcode+="                  <option value='1' selected>��Ʒ����</option>";
headcode+="		              <option value='2'>��Ʒ���</option>";
headcode+="                  <option value='4'>��Ʒ����</option>";
headcode+="                  </select>";
headcode+="               <input name='searchkey' type='text' size='20' maxlength='50' style='text-align:center' value='������ؼ���' onFocus=\"this.value=''\">";
headcode+="               <input type='image' src='images/searchbtn2.gif' align='absMiddle'>";
headcode+="              </td></form>";
headcode+="            </tr>";
headcode+="            </table>";
headcode+="          </TD>";
headcode+="          <TD width=130 align='right' valign='top' style='padding-top:10px'>";
headcode+="          	<FONT color=#ffffff><a name='StranLink' style='color:red'>���w����</A></FONT> | <A href=\"javascript:window.external.AddFavorite('http://www.etai.biz', '��̩�̳�')\">�ղر�վ</A>";
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
pagecode+="  <td width='100%'><hr color='GREEN'><A href=\"/\">վ����ҳ</A> | <A href=\"help.htm\">��������</A> | <A href=\"help.htm?title=��������\">��������</A> | <A href=\"help.htm?title=��������\">��������</A> | <A href=\"help.htm?title=���ʽ\">���ʽ</A> | <A href=\"help.htm?title=��������\">��������</A> |&nbsp;<A href=\"help.htm?title=�ۺ����\">�ۺ����</A> | <A href=\"news.htm\">�̳�����</A> |&nbsp;<A href=\"help.htm?title=�������\">�������</A> | <A href=\"help.htm?title=��ϵ����\">��ϵ����</A>&nbsp;| <A href=\"help.htm?title=��������\">��������</A><hr></td>";
pagecode+="</tr>";
pagecode+="<tr align='center' height='20' valign='bottom'>";
pagecode+="  <td width='100%'>";
pagecode+="  	 <table align='center' border='0' cellpadding='0' cellspacing='0' width='100%'>";
pagecode+="  	 <tr>";
pagecode+="  	 	 <td width='35%' align='center' valign='middle'>";
pagecode+="  	 	 	 <img src='pic/advs/weblogo.jpg' border=0>";
pagecode+="  	 	 </td>";
pagecode+="       <td width='65%' style='padding-top:3px'>";
pagecode+="       	��˾��ַ���������������϶�125��0805�� &nbsp; �������룺550004<br>";
pagecode+="       	���ߵ绰��0851-6751499 &nbsp; ������룺0851-6751499<br>";
pagecode+="        ��ϵ���䣺gz316@qq.com &nbsp; <A title='���ߴ���Ͷ�������뽨��,QQ����975898308' href='http://wpa.qq.com/msgrd?V=1&Uin=975898308&Site=���̹���&Menu=yes' target=blank>Ͷ���뽨��<IMG src='http://wpa.qq.com/pa?p=1:975898308:5' border=0></A><br>";
pagecode+="        <span><div style='position:relative;top:-3000px;'><a href='http://www.charmbloom.com'>������ױƷ����</a><a href='http://www.fashionline.js.cn'>���ڻ�ױƷ����</a></div></span>";
pagecode+="        <font color='#FF0000'>����ʱ�䣺9:30��18:30 ���ڼ�����ֵ�ࣩ</font><br>";
pagecode+="        ��Ȩ���У�&copy; 2006~2014&nbsp;�������̹����� All Rights Reserved.<br>";
pagecode+="        ��վ������<a href='http://www.cmsoft.cn' target='_blank'>�Ͼ������������������</a> &nbsp;����֧��<A title='��վ���輼��֧��' href='http://wpa.qq.com/msgrd?V=1&Uin=10865600&Site=���̹���&Menu=yes' target=blank><IMG src='http://wpa.qq.com/pa?p=1:10865600:5' border=0></A><br>";
pagecode+="        ��վ������<a href='http://www.miibeian.gov.cn' target='_blank'><font color='#FF0000'><b>ǭB2��2008004</b></font></a>";
pagecode+="       </td>";
pagecode+="     </tr>";
pagecode+="     </table>";
pagecode+="   </td>";
pagecode+="</tr>";
pagecode+="</table>";
document.write(pagecode);

var QQs=new Array('�ͷ�010','1098308087','�ͷ�020','975898308');
LoadQQService(QQs,"���̹���");
}


GenPageHead();

