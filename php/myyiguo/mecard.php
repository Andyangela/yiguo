<?php
    require "connect.php";
    
    $sql = "select * from myyiguo";
    $result = $mysqli->query($sql);
    $row=Mysqli_fetch_assoc($result);
    print_r(json_encode($row));