<?php
	header("Content-Type:text/html;charset=utf-8");
    $sort=$_POST["tab_num"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die();
    }
    $sql="select * from tab where sort=$sort";
    $result=$mysqli->query($sql);
    while($rows=Mysqli_fetch_assoc($result)){
        $data[]=$rows;
    }
    // // print_r($data);
    $res=json_encode($data,320);
    echo $res;
?>