<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title>资料修改</title>
<style type="text/css">
<!---a:link      { color: #000080; font-family: Arial; text-decoration: underline }
a:visited    { color: #680090; font-family: Arial; text-decoration: underline }
a:hover      { color: red; text-decoration: none }
body         { color: #000000; font-size: 9pt; line-height: 12pt; font-family: Arial }
th           { font-size: 9pt; line-height: 12pt }
td           { font-size: 9pt; line-height: 12pt }
.form        { font-size: 9pt }
---></style>
</head>
<body>  
<% dim conn,connstr
   connstr="DBQ="+server.mappath("clf.mdb")+";DefaultDir=;DRIVER={Microsoft Access Driver (*.mdb)};"
   set conn=server.createobject("ADODB.CONNECTION")
   conn.open connstr 
   Set rs=Server.CreateObject("ADODB.Recordset")
   user=session("gf2")
   mode=request("mode")

if user<>"" then
   if mode="code_modify" then%> 
        <p align="center"><b>密码修改</b></p>
        <table align="center" border="0" width="320" height="36" cellspacing="0" cellpadding="0">
        <tr><form method="post" name="code_modify" action="?mode=code_save">
            <td width="70" height="23" align="center">原密码:</td>
            <td width="110" height="23"><font color="#0561a9"><input maxLength="12" style="width:150px" name="psw_old" type="password"></font></td>
            <td width="80" height="23"></td>
        </tr>
        <tr>
            <td width="70" height="23" align="center">新密码:</td>
            <td width="110" height="23"><font color="#0561a9"><input maxLength="12" style="width:150px" name="psw_new" type="password"></font></td>
            <td width="80" height="23"></td>
        </tr>        
        <tr>
            <td width="70" height="9" align="center">密码确认:</td>   
            <td width="110" height="9"><font color="#0561a9"><input maxLength="12" name="psw_confirm" style="width:150px" type="password"></td>
            <td width="80" height="9"><input type="submit" value="修改"></td>
        </tr></form>
      </table>
   <%response.end
   elseif mode="code_save" then
     psw_old=request.form("psw_old")
     psw_new=request.form("psw_new")
     psw_confirm=request.form("psw_confirm")
     if psw_old="" or psw_new="" or psw_confirm="" then 
        response.write "请填写完整！点击这里<a href='javascript:history.go(-1)'>返回</a>"
        response.end
     elseif psw_new<>psw_confirm then 
        response.write "新密码确认有误！点击这里<a href='javascript:history.go(-1)'>返回</a>"
        response.end
     else
       rs.open "select * from admin where user='"&user&"'",conn,1,3 
       if rs.eof then response.end
       if rs("psw")=psw_old then
         rs("psw")=psw_new
         rs.update
         response.write "<font color=#FF0000>密码修改成功，请记住您的新密码！！！</font>点击这里<a href='?mode=show'>返回</a>"
       else
         response.write "请正确输入原来的密码！点击这里<a href='javascript:history.go(-1)'>返回</a>"
       end if   
     end if
     response.end      
  elseif mode="logout" then
    session("gf2")=""
    response.write "<script>window.location.reload();</script>"
    response.end
  elseif request.form("modify")<>"" then
    rs.open "select * from admin where user='"&user&"'",conn,1,3
    if rs.eof then response.end
    rs("name")=request.form("name")
    rs("nick")=request.form("nick")
    rs("sex")=request.form("sex")
    rs("age")=request.form("age")
    rs("property")=request.form("property")
    rs("married")=request.form("married")
    rs("constellation")=request.form("constellation")
    rs("birthday")=request.form("birthday")
    rs("email")=request.form("email")
    rs("oicq")=request.form("oicq")
    rs("homepage")=request.form("homepage")
    rs("phone")=request.form("phone")
    rs("blood")=request.form("blood")
    rs("idol")=request.form("idol")
    rs("hobby")=request.form("hobby")
    rs("speciality")=request.form("speciality")
    rs("wish")=request.form("wish")
    rs("drink")=request.form("drink")
    rs("character")=request.form("character")
    rs("manifesto")=request.form("manifesto")
    rs("attitude")=request.form("attitude")
    rs("dream")=request.form("dream")
    rs("afraid")=request.form("afraid")
    rs("pride")=request.form("pride")
    rs("trouble")=request.form("trouble")
    rs("angry")=request.form("angry")
    rs("routine")=request.form("routine")
    rs("flaw")=request.form("flaw")
    rs("merit")=request.form("merit")
    rs.update
    rs.close
    response.write "<p>资料修改完成，点击这里<a href='default.asp?user="&user&"'>返回</a></p>"
  else
   rs.open "select * from admin where user='"&user&"'",conn,1,1
   if rs.eof then response.end
  %>
<p><a href="?mode=code_modify">修改密码</a> <a href="?mode=logout">退出登陆</a></p>
<table borderColor="#FFFFFF" cellSpacing="2" cellPadding="2" align="center" border="0" width="398">
    <tr><form method=post name="modify_info">
      <td colspan="2" width="388">
        <p align="center"><font face="隶书" size="5" color="#008000"><b>个人资料</b></font><hr></td>
    </tr>
    <tr>
      <td width="106"><b>站长：</b></td>
      <td width="274"><input type="text" name="name" style="width:100%" size="20" value="<%=rs("name")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>昵称：</b></td>
      <td width="274"><input type="text" name="nick" style="width:100%" size="20" value="<%=rs("nick")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>性别：</b></td>
      <td width="274"><input type="text" name="sex" style="width:100%" size="20" value="<%=rs("sex")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>年龄:</b></td>
      <td width="274"><input type="text" name="age" style="width:100%" size="20" value="<%=rs("age")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>生肖：</b></td>
      <td width="274"><input type="text" name="property" style="width:100%" size="20" value="<%=rs("property")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>婚姻状况：</b></td>
      <td width="274"><input type="text" name="married" style="width:100%" size="20" value="<%=rs("married")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>星座：</b></td>
      <td width="274"><input type="text" name="constellation" style="width:100%" size="20" value="<%=rs("constellation")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>生日：</b></td>
      <td width="274"><input type="text" name="birthday" style="width:100%" size="20" value="<%=rs("birthday")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>E_mail：</b></td>
      <td width="274"><input type="text" name="email" style="width:100%" size="20" value="<%=rs("email")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>OICQ：</b></td>
      <td width="274"><input type="text" name="oicq" style="width:100%" size="20" value="<%=rs("oicq")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>个人主页：</b></td>
      <td width="274"><input type="text" name="homepage" style="width:100%" size="20" value="<%=rs("homepage")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>电话：</b></td>
      <td width="274"><input type="text" name="phone" style="width:100%" size="20" value="<%=rs("phone")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>血型：</b></td>
      <td width="274"><input type="text" name="blood" style="width:100%" size="20" value="<%=rs("blood")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>偶像：</b></td>
      <td width="274"><input type="text" name="idol" style="width:100%" size="20" value="<%=rs("idol")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>爱好：</b></td>
      <td width="274"><input type="text" name="hobby" style="width:100%" size="20" value="<%=rs("hobby")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>特长：</b></td>
      <td width="274"><input type="text" name="speciality" style="width:100%" size="20" value="<%=rs("speciality")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>希望：</b></td>
      <td width="274"><input type="text" name="wish" style="width:100%" size="20" value="<%=rs("wish")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>喝酒：</b></td>
      <td width="274"><input type="text" name="drink" style="width:100%" size="20" value="<%=rs("drink")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>性格：</b></td>
      <td width="274"><input type="text" name="character" style="width:100%" size="20" value="<%=rs("character")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>我的宣言：</b></td>
      <td width="274"><input type="text" name="manifesto" style="width:100%" size="20" value="<%=rs("manifesto")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>我的处世：</b></td>
      <td width="274"><input type="text" name="attitude" style="width:100%" size="20" value="<%=rs("attitude")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>最大的愿望：</b></td>
      <td width="274"><input type="text" name="dream" style="width:100%" size="20" value="<%=rs("dream")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>最害怕的事</b></td>
      <td width="274"><input type="text" name="afraid" style="width:100%" size="20" value="<%=rs("afraid")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>最得意的事：</b></td>
      <td width="274"><input type="text" name="pride" style="width:100%" size="20" value="<%=rs("pride")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>最烦恼的事：</b></td>
      <td width="274"><input type="text" name="trouble" style="width:100%" size="20" value="<%=rs("trouble")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>生气的时候：</b></td>
      <td width="274"><input type="text" name="angry" style="width:100%" size="20" value="<%=rs("angry")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>最常做的事：</b></td>
      <td width="274"><input type="text" name="routine" style="width:100%" size="20" value="<%=rs("routine")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>最大的缺点：</b></td>
      <td width="274"><input type="text" name="flaw" style="width:100%" size="20" value="<%=rs("flaw")%>"></td>
    </tr>
    <tr>
      <td width="106"><b>最大的优点：</b></td>
      <td width="274"><input type="text" name="merit" style="width:100%" size="20" value="<%=rs("merit")%>"></td>
    </tr>
    <tr>
      <td width="106"></td>
      <td width="274"></td>
    </tr>
    <tr>
      <td width="106"></td>
      <td width="274">
        <p align="right"><input type="submit" value="提交修改" name="modify"></td>
    </tr></form>
</table><%end if
else
    UserName=request.form("UserName")
    PassWord=request.form("PassWord")
    
    if UserName<>"" and PassWord<>"" then
      rs.open "select * from admin where user='"&UserName&"'",conn,1,1
      if rs.eof then 
        response.write "<p align=center><font color=#FF0000>无效的用户名！！！</font></p>"
      elseif PassWord<>rs("psw") then
        response.write "<p align=center><font color=#FF0000>无效的用户密码！！！</font></p>"
      else
        session("gf2")=rs("user")
        response.write "<script>window.location.reload();</script>"
        response.end
        'response.redirect "?mode=show"
      end if
    end if
    
    if session("gf2")="" then
    %>
        <table align="center" border="0" width="320" height="36" cellspacing="0" cellpadding="0">
        <tr><form method="post" name="UserLogin" id="UserLogin" action="?mode=login">
            <td width="70" height="23" align="center">用&nbsp; 户:</td>
            <td width="110" height="23"><font color="#0561a9"><input maxLength="12" style="width:150px" name="UserName"></font></td>
            <td width="80" height="23"></td>
        </tr>
        <tr>
            <td width="70" height="9" align="center">密&nbsp; 码:</td>   
            <td width="110" height="9"><font color="#0561a9"><input name="PassWord" style="width:150px" type="password"></td>
            <td width="80" height="9"><input type="submit" name="login" value="登录"></td>
        </tr></form>
      </table>
  <%end if
end if
 conn.close
%>
</body>
</html>