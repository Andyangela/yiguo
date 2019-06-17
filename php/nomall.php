<?php
	header("Content-Type:text/html;charset=utf-8");

    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="select * from nomall";
    $result=$mysqli->query($sql);
    while($rows=Mysqli_fetch_assoc($result)){
        $data[]=$rows;
    }
    // // print_r($data);
    $res=json_encode($data,320);
    echo $res;
?>