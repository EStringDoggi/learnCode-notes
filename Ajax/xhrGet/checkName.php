<?php
//获取参数
$name = $_GET['name'];
//验证数组
$nameArr = array('jack','rose','icemountain','robot');
//判断是否在数组中存在
$result = in_array($name,$nameArr);
if($result){
    echo '用户名已被占用';
}else {
    echo "用户名可用";
}
sleep(2);
 ?>
