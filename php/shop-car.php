<?php
    header("content-Type:text/html;charset=utf-8");
    $title = $_POST["title"];
    $goodsName = $_POST["goodsName"];
    $img_url = $_POST["img_url"];
    $price = $_POST["price"];
    $username = $_POST["username"];
    $mysqli =new Mysqli ("localhost","root","root","yiguo");
    if($mysqli->connect_errno){
        die("连接失败");
    }
    $sql1 = "select * from shopcart where goodsName=$title";
    $result2 = $mysqli->query($sql1);
    // print_r($result1->num_rows);
// echo $result1->num_rows;
    if(Mysqli_num_rows($result2)){
        echo "您已添加过此商品，可前往购物车进行查看。";

    }else{
        $sql = "insert into shopcart (img_url,goodsName,price,username) values ('$img_url','$title','$price','$username')";
        $result = $mysqli->query($sql);
        echo "添加成功，前往购物车即可查看。";
    }