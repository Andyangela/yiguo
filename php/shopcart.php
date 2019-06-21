<?php
    header("Content-Type:text/html;charset=utf-8");
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据库连接失败");
    }
    $sql="select * from shopcart";
    $result=$mysqli->query($sql);
    while($rows=Mysqli_fetch_assoc($result)){
        $data[]=$rows;
    }
    $res=json_encode($data,320);
    echo ($res);