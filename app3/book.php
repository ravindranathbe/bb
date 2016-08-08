<?php
function readData() {
	$bookJson = file_get_contents('book.json');
	return $bookJson;
}

function writeData($bookJson) {
	$bookArr = json_decode($bookJson);
	$bookArr[] = array(
		'id' => 4,
		'title' => 'Anxious Sam',
		'author' => 'Sam Richard',
		'isbn' => '7471BAIOA112',
		'created_at' => date('Y-m-d H:i:s'),
		'updated_at' => date('Y-m-d H:i:s'),
	);
	$bookJson = json_encode($bookArr);
	$fPtr = fopen('book.json', 'w+');
	fwrite($fPtr, $bookJson);
	fclose($fPtr);
}

$bookJson = readData();

// var_dump($bookJson);

if(isset($_POST['action'])) {
	if($_POST['action'] == 'add') {
		
	} else if($_POST['action'] == 'remove') {
		
	} else if($_POST['action'] == 'update') {
		
	}

}


// writeData($bookJson);
// $bookJson = readData();

echo trim($bookJson);