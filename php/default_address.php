<?php
    header("Content-Type:text/html;charset=utf-8");
    $username=$_POST["username"];
    $default_address=$_POST["default_address"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据库连接失败");
    }
    $sql="update address_info set default_address='$default_address' where username='$username'";
    $result=$mysqli->query($sql);
    if(!$result){
	    echo("失败");
    }else{
    echo("成功");
    }