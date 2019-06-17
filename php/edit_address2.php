<?php
    header("Content-Type:text/html;charset=utf-8");
    $data_id=$_POST["data_id"];
    $username=$_POST["username"];
    $phone_num=$_POST["phone_num"];
    $province=$_POST["province"];
    $city=$_POST["city"];
    $area=$_POST["area"];
    $detail_address=$_POST["detail_address"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据库连接失败");
    }
    $sql="update address_info set username='$username',phone_num='$phone_num',province='$province',city='$city',area='$area',detail_address='$detail_address' where Id='$data_id'";
    $result=$mysqli->query($sql);
    if(!$result){
	    echo("失败");
    }else{
    echo("成功");
    }