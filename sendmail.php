<?php
      require_once('/usr/share/php/libphp-phpmailer/class.phpmailer.php');
      $mail = new PHPMailer(); // defaults to using php "mail()"
      $body = $_POST['newPost'];
      
      $email = $_POST['email'];
     



      $mail->AddReplyTo("tiedemannstuart@gmail.com","Stuart Tiedemann");
      $mail->SetFrom($email, 'From Stuart Tiedemann');
      $address = "tiedemannstuart@gmail.com";
      $mail->AddAddress($address, "Stuart Tiedemann");
      $mail->Subject    = "PHPMailer Test Subject via mail(), basic";
      $mail->MsgHTML($body);
      if(!$mail->Send()) {
      echo "Mailer Error: " . $mail->ErrorInfo;
      } else {
      header('Location: /');
      }
?>