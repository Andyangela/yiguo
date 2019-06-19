<?php
    require "connect.php";
    
    $username = $_POST["username"];
    // $username = 13273819312;
    $sql = "select * from allorder where username=$username";
    $result = $mysqli->query($sql);
    ;
    while($row=Mysqli_fetch_assoc($result)){
        $arts[]=$row;
    }
    print_r(json_encode($arts));