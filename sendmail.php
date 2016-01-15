<?php
      require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
      $mail = new PHPMailer(); // defaults to using php "mail()"
      $body = $_POST['newPost'];
      $name = $_POST['name'];
      $email = $_POST['email'];
      $subject = $_POST['subject'];



      $mail->AddReplyTo("tiedemannstuart@gmail.com","Stuart Tiedemann");
      $mail->SetFrom($email, $name);
      $address = "tiedemannstuart@gmail.com";
      $mail->AddAddress($address, "Stuart Tiedemann");
      $mail->Subject    = $subject, basic";
      $mail->MsgHTML($body);
      if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
      } else {
      header('Location: /');
      }
?>