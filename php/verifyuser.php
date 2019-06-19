<?php
    header("Content-Type:text/html;charset=utf-8");
    $username=$_POST["username"];
    $password=$_POST["password"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="select * from userinfo where username='$username' and password='$password'";
    $result=$mysqli->query($sql);
    if(Mysqli_fetch_assoc($result)){
        echo '登录成功';
    }else{
        echo '登录失败';
    }
?>