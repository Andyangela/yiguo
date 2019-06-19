<?php
header("Content-Type:text/html;charset=utf-8");
//设置头部信息
//isset()检测变量是否设置
$verify=$_GET['verify'];
if (isset($verify)) {
    session_start();
    if (strtolower($verify) == $_SESSION['authcode']) {
        echo "输入正确";
    } else {
        echo "输入错误";
    }
}