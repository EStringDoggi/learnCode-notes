<?php
    header('content-type:text/xml;charset=utf-8');

    //接收发送过来的数据

    //读取xml
    $xmlString = file_get_contents('data/person.xml');


    //返回读取的xml
    echo $xmlString;
 ?>
