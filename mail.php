<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = 'From: '.$name. '<'.$email.'>\r\n';

$recipient = "info@webify.org.za";

if(mail($recipient, $subject, $message, $mailheader)) {
    header("Location: success.html");
    exit();
} else {
    die("Error! Message Not Sent.");
}

?>
