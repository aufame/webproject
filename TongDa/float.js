<SCRIPT>
//Ư������
var piaofu_x = 50 , piaofu_y = 60
var piaofu_xin = true, piaofu_yin = true
var piaofu_step = 1
var piaofu_delay = 20 //�ӳ�ʱ�䣬������Ҫ�޸�
document.writeln("<DIV id =\"ad\" style = \"POSITION: absolute;  \">&nbsp;<\/DIV>")
var piaofu_obj = document.getElementById("ad")
function piaofuAD()
{
 var piaofu_L = piaofu_T = 0
 var piaofu_R = document.body.clientWidth - piaofu_obj.offsetWidth
 var piaofu_B = document.body.clientHeight - piaofu_obj.offsetHeight
 piaofu_obj.style.left = piaofu_x + document.body.scrollLeft
 piaofu_obj.style.top = piaofu_y + document.body.scrollTop
 piaofu_x = piaofu_x + piaofu_step*(piaofu_xin?1:-1)
 if (piaofu_x < piaofu_L) { piaofu_xin = true; piaofu_x = piaofu_L}
 if (piaofu_x > piaofu_R){ piaofu_xin = false; piaofu_x = piaofu_R}
 piaofu_y = piaofu_y + piaofu_step*(piaofu_yin?1:-1)
 if (piaofu_y < piaofu_T) { piaofu_yin = true; piaofu_y = piaofu_T }
 if (piaofu_y > piaofu_B) { piaofu_yin = false; piaofu_y = piaofu_B }
}
var piaofu_run = setInterval("piaofuAD()", piaofu_delay)
piaofu_obj.onmouseover = function(){clearInterval(piaofu_run)}
piaofu_obj.onmouseout = function(){piaofu_run = setInterval("piaofuAD()", piaofu_delay)}

//Ư���೤ʱ���һ��obj����
var piaofuNO=new Array()
//�������ݣ�Ư��ʱ��,���ݣ�
piaofuNO[0]=new Array(8000,"<font color=red size=20>��վ���ڽ�����...</font>")
piaofuNO[1]=new Array(3000,"<font color=red size=20>�����ע!</font>")

piaofu_time=0
piaofu_time_fun()
function piaofu_time_fun()
{
 if (piaofu_time<piaofuNO.length)
 {
  ttt=window.setTimeout("piaofu_time_fun()",piaofuNO[piaofu_time][0])
  piaofu_obj.innerHTML=piaofuNO[piaofu_time][1]
  piaofu_time++
  if(piaofu_time==piaofuNO.length) piaofu_time=0;
 }
 else
 { piaofu_obj.style.display="none";
   return false;
 }
}
</SCRIPT>