<?php
    header("Content-Type:text/html;charset=utf-8");
    $username=$_POST["username"];
    $address_type=$_POST["address_type"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据库连接失败");
    }
    $sql="update address_info set address_type='$address_type' where username='$username'";
    $result=$mysqli->query($sql);
    if(!$result){
	    echo("失败");
    }else{
    echo("成功");
    }