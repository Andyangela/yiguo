<?php
    header("Content-Type:text/html;charset=utf-8");
    $data_id=$_POST["data_id"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据库连接失败");
    }
    $sql="delete from address_info where Id='$data_id'";
    $result=$mysqli->query($sql);
    if(!$result){
	    echo("失败");
    }else{
    echo("成功");
    }