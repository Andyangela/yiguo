<?php
header("Content-Type:text/html;charset=utf-8");
$verify=$_POST['verify'];
if ($verify) {
    if ($verify == '6688') {
        echo "输入正确";
    } else {
        echo "输入错误";
    }
}