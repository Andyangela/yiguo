<?php
    header("Content-Type:text/html;charset=utf-8");
    // $data_id=$_POST["data_id"];
    $mysqli=new Mysqli("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("数据库连接失败");
    }
    $sql="update address_info set default_address='no'";
    $result=$mysqli->query($sql);
   if(Mysqli_num_rows($result)==1){
       echo "成功";
   }else{
       echo "失败";
   }