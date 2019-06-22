<?php
	header("Content-Type:text/html;charset=utf-8");
    $test=$_POST["test"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="select * from new where sort=$test";
    $result=$mysqli->query($sql);
    while($rows=Mysqli_fetch_assoc($result)){
        $data[]=$rows;
    }
    // // print_r($data);
    $res=json_encode($data,320);
    echo $res;
?>