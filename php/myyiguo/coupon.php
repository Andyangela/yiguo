<?php
    require "connect.php";
    
    $sql = "select * from coupon";
    $result = $mysqli->query($sql);
    ;
    while($row=Mysqli_fetch_assoc($result)){
        $arts[]=$row;
    }
    print_r(json_encode($arts));