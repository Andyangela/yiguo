<?php
    header("Content-Type:text/html;charset=utf-8");
    $title=$_GET["title"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="select count from shopcart where goodsName=$title";
    $result=$mysqli->query($sql);
    if(Mysqli_num_rows($result)){
        $rows=Mysqli_fetch_assoc($result);
        $res=json_encode($rows,320);
        echo $res;
    }else{
        echo "添加一整条";
    }
?>