<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE');
/*$get= $_SERVER["REQUEST_URI"];
echo '<pre>'; print_r($get); echo '</pre>';*/
/**
 * mostrar errores
 */

ini_set("display_errors",1);
ini_set("log_errors",1);
ini_set("error_log","c:/xampp/httdocs/apirest-dinamica/php_error_log");


/**
 * requerimientos
 */

require_once "models/connection.php";


//Connection::infoDatabase();

require_once "controllers/routes_controller.php";

$index = new RoutesController();
$index -> index();