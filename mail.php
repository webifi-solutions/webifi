<?php

$name = $_POST['name'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = 'From: '.$name. '<'.$email.'>\r\n';

$recipient = "info@webify.org.za";

// Send the main email
if(mail($recipient, $subject, $message, $mailheader)) {
    // Send a confirmation email to the user
    $user_subject = "Thank you for contacting us!";
    $user_message = "Dear $name,\n\nThank you for reaching out to us. We have received your message and will get back to you shortly.\n\nBest regards,\nWebify Team";
    $user_mailheader = 'From: info@webify.org.za\r\n';

    mail($email, $user_subject, $user_message, $user_mailheader);

    // Redirect to success page
    header("Location: success.html");
    exit();
} else {
    die("Error! Message Not Sent.");
}

?>
