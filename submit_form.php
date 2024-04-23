<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "jimto9905@gmail.com"; // Your email address
    $subject = "New Message from Sergio's Website";
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo "Message sent successfully!";
    } else {
        echo "Oops! There was a problem sending your message.";
    }
} else {
    echo "Access denied!";
}
?>
