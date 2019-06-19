<?php
    header("Content-Type:text/html;charset=utf-8");
    $goodsName=$_GET["goodsName"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据库连接失败");
    }
    $sql="delete from shopcart where goodsName='${goodsName}'";
    $result=$mysqli->query($sql);
    $res=json_encode($result,320);
    echo ($res);