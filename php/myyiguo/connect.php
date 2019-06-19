<?php
    header("content-Type:text/html;charset=utf-8");
    $mysqli =new Mysqli ("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据获取失败");
    }