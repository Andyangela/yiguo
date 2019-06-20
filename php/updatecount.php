<?php
    header("Content-Type:text/html;charset=utf-8");
    $title=$_GET["title"];
    $count=$_GET["count"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="update shopcart set count={$count} where goodsName={$title}";
    $result=$mysqli->query($sql);
?>