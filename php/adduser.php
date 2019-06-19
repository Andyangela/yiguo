<?php
    header("Content-Type:text/html;charset=utf-8");
    $username=$_POST["username"];
    $password=$_POST["password"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="insert into userinfo (username,password) values('$username','$password')";
    $result=$mysqli->query($sql);
?>