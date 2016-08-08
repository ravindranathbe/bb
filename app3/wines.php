<?php
try {
	$pdoObj = new \PDO('mysql:dbname=test;host=127.0.0.1', 'root', '');
}
catch(\PDOException $e) {
	echo $e->getMessage();
	exit();
}


try {
	$stmt = $pdoObj->prepare('SELECT * FROM wines');
	$stmt->execute();

	$result = $stmt->fetchAll();
}
catch(\PDOException $e) {
	echo $e->getMessage();
}