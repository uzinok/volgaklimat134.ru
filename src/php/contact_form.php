if(isset($_POST["name"])) {
	$name = $_POST["name"];

	echo json_encode($name);
}