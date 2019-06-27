<?php
if(isset($_POST["name"])) {

	$name = $_POST["name"];
	$tel = $_POST["tel"];
	$raion = $_POST["raion"];
	$service = $_POST["service"];
	$review = "Нет дополнительного сообщения";

	if(isset($_POST["review"])) {
		$review =  $_POST["review"];
	}

	// отправка почты

	$to  = "<uzinok@yandex.ru>, " ; 
	// $to .= "mail2@example.com>"; 
	
	$subject = "Заявка на обслуживание системы кондиционирования"; 
	
	$message = "Имя: $name<br>Телефон: $tel<br> Район: $raion<br> Услуга: $service<br> Дополнительное сообщение:<br> $review";
	
	$headers  = "Content-type: text/html; charset=UTF-8 \r\n"; 
	$headers .= "From: Заявка <volgaklimat134.ru>\r\n"; 
	// $headers .= "Reply-To: reply-to@example.com\r\n"; 
	

	if(mail($to, $subject, $message, $headers)) {
		echo "Ваша заявка отправлена!";
	} else {
		echo "Ошибка при отправке сообщения";
	}


	// \отправка почты


	// echo $name . "-" . $tel . "-" .	$raion . "-" .	$service . "-" .	$review;
} else {
	echo "нет данных";
}
?>