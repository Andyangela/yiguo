<?php
    require "./dataconn.php";
    $sql="select * from particular";
    $result=$mysqli->query($sql);
    while($rows=Mysqli_fetch_assoc($result)){
        $data[]=$rows;
    }
    $res=json_encode($data,320);
    echo ($res);