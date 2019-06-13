<?php
    header("Content-Type:text/html;charset=utf-8");
    $username=$_POST["username"];
    $phone_num=$_POST["phone_num"];
    $province=$_POST["province"];
    $city=$_POST["city"];
    $area=$_POST["area"];
    $detail_address=$_POST["detail_address"];
    // $address_type=$_POST["address_type"];
    // $default_address=$_POST["default_address"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据库连接失败");
    }
    $sql="insert into address_info (username,phone_num,province,city,area,detail_address) value('$username','$phone_num','$province','$city','$area','$detail_address')";
    // $sql="insert into address_info (username,phone_num) value('$username','$phone_num')";,address_type,default_address  ,'$address_type',$default_address
    $result=$mysqli->query($sql);
    if(!$result){
	    echo("失败");
    }else{
    echo("成功");
    }