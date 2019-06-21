<?php
    header("Content-Type:text/html;charset=utf-8");
    $sortname=$_POST["sortname"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="select * from product where sort=$sortname";
    $result=$mysqli->query($sql);
    while($rows=Mysqli_fetch_assoc($result)){
        $data[]=$rows;
    }
    $res=json_encode($data,320);
    echo $res;
?>