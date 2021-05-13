<!--En un archivo separado que guardarás con extensión .php y el cual se debe llamar enviar.php, pega el siguiente código:
      
<?php
$name = $_POST['nombre'];
$mail = $_POST['mail'];
$phone = $_POST['asunto'];
$message = $_POST['cuentame'];

echo json_encode($mail)

$header = 'From: ' . $mail . " \r\n";
$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
$header .= "Mime-Version: 1.0 \r\n";
$header .= "Content-Type: text/plain";

$message = "Este mensaje fue enviado por: " . $name . " \r\n";
$message .= "Su e-mail es: " . $mail . " \r\n";
$message .= "El asunto es: " . $phone . " \r\n";
$message .= "Mensaje: " . $_POST['message'] . " \r\n";
$message .= "Enviado el: " . date('d/m/Y', time());

$para = 'portfoliodavidgodoydesarrollo@gmail.com';
$asunto = 'Consulta desde portfolio';

mail($para, $asunto, utf8_decode($message), $header);

header("Location:index.html");
?>
-->
