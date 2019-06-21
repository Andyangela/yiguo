<?php
    header("Content-Type:text/html;charset=utf-8");
    $img=$_POST["img"];
    $title=$_POST["title"];
    $money=$_POST["money"];
    $count=$_POST["count"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="insert into shopcart (img_url,goodsName,price,count) values('$img','$title','$money','$count')";
    $result=$mysqli->query($sql);
?>