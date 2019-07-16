<?php
    $commId = $_GET['commentId'];
    $commArr = ["this is comment1","this is comment2","this is comment3"];
    switch ($commId) {
        case 'comment1':
            echo $commArr[0];
            break;
        case 'comment2':
            echo $commArr[1];
        # code...
            break;
        case 'comment3':
            echo $commArr[2];
        # code...
          break;
        default:
            # code...
            break;
    }
?>