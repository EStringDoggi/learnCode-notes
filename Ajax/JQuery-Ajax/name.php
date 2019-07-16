<?php
    $name = $_GET['name'];
    //$nameJSON = file_get_contents('name.json');
    $nameArr = ['zzk','123','222'];
    //echo $nameJSON;
    //$JSONString = json_decode($nameJSON);
    $exist =  in_array($name,$nameArr);
    if(!$exist){
        echo "用户名可用";
    }else {
        echo "用户名已被占用";
    }
    sleep(2);
 ?>
