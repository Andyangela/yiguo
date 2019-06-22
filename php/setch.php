<?php
    header("content-Type:text/html;charset=utf-8");
    $item_id = $_POST["item_id"];
    $mysqli =new Mysqli ("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("连接失败");
    }
    $sql1 = "select * from seafood where item_id=$item_id";
    while($rows=Mysqli_fetch_assoc($result)){
        $data[]=$rows;
    }
    $res=json_encode($data,320); //防止乱码
    echo $res