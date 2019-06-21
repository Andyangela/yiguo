<?php
    require "connect.php";
    
    $username = $_POST["username"];
    // $username = 13273819312;
    $sql = "select * from myyiguo where username=$username";
    $result = $mysqli->query($sql);
    $row=Mysqli_fetch_assoc($result);
    print_r(json_encode($row));