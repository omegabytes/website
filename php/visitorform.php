<?php

if(isset($_POST['fname']) && isset($_POST['lname']) && isset($_POST['email'])) {
    $data = $_POST['fname'] . " " . $_POST['lname'] . " Email: " . $_POST['email'];
    $ret = file_put_contents('log.txt', $data, FILE_APPEND | LOCK_EX);
    if($ret === false) {
        die('There was an error writing this file');
    }
    else {
        echo "$ret bytes written to file";
    }
}
else {
    die('no post data to process');
}

?>