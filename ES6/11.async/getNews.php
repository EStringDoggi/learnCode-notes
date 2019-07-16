<?php
    $id = $_GET['id'];
    $idArr = ["comment1","comment2","comment3"];

    switch ($id) {
        case '1':
            echo $idArr[0];
            break;
        case '2':
            echo $idArr[1];
        # code...
            break;
        case '3':
            echo $idArr[2];
        # code...
          break;
        default:
            # code...
            break;
    }
    

?>