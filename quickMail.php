<?php

session_start();

// Rate limiting: Allow only 1 submission per minute
if (isset($_SESSION['last_submission_time']) && (time() - $_SESSION['last_submission_time']) < 60) {
    die("Error! You can only submit the form once per minute.");
}

$_SESSION['last_submission_time'] = time();

// Verify the reCAPTCHA response
/* $secretKey = "6LflZDMqAAAAAFVwI4Lat1LpwQncwQPh13KS0K-3";
$responseKey = $_POST['g-recaptcha-response'];
$userIP = $_SERVER['REMOTE_ADDR'];

$url = "https://www.google.com/recaptcha/api/siteverify?secret=$secretKey&response=$responseKey&remoteip=$userIP";
$response = file_get_contents($url);
$responseKeys = json_decode($response, true);

if(intval($responseKeys["success"]) !== 1) {
    die("Error! CAPTCHA verification failed.");
} */

// Code to handle form submission
$name = $_POST['name'];
$email = $_POST['email'];
$number = $_POST['number'];
$subject = $_POST['subject'];
$message = "Name: $name\nEmail: $email\nContact Number: $number\n\nMessage: $subject\n" . $_POST['message'];

$mailheader = 'From: '.$name. '<'.$email.'>\r\n';
$recipient = "info@webify.org.za";

if(mail($recipient, $subject, $message, $mailheader)) {
    $user_subject = "Thank you for contacting us!";
    $user_message = "Dear $name,\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nWebify Team";
    $user_mailheader = 'From: info@webify.org.za';

    mail($email, $user_subject, $user_message, $user_mailheader);
    header("Location: success.html?status=success");
    exit();
} else {
    die("Error! Message Not Sent.");
}
?>
