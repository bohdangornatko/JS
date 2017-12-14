<?php
if (!empty($_POST['user_name'])
	&& !empty($_POST['user_email'])
	&& !empty($_POST['user_phone'])){
	
	$headers = 'Reply-to: bohdan.gornatko@gmail.com'. "\r\n";
	$letter = 'Данные сообщения:'. "\r\n";
	$letter .= 'Имя:'.$_POST['user_name']. "\r\n";
	$letter .= 'Мейл:'.$_POST['user_email']. "\r\n";
	$letter .= 'Телефон:'.$_POST['user_phone']. "\r\n";
	
	if (mail('bohdan.gornatko@gmail.com', 'Письмо с формы', $letter)){

		echo json_encode(['status' => 'ok']);
	
	} else {
	
		echo json_encode(['status' => 'error']);
	
	}

} else{
	echo json_encode(['status' => 'error']);
}
?>