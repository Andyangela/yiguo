<?php
    header("Content-Type:text/html;charset=utf-8");
    $username=$_POST["username"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="select * from userinfo where username='$username'";
    $result=$mysqli->query($sql);
    if(Mysqli_num_rows($result)){
        echo '该手机号已经被注册';
    }else{
        echo '可以用';
    }
?>