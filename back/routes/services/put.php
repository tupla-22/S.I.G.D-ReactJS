<?php

require_once "models/connection.php";
require_once "controllers/putController.php";

$id= $_GET["id"] ?? null;
$nameID= $_GET["nameID"] ?? null;

if (isset($id) && isset($nameID)) {

    /**=================capturamos datos del formulario==================== */

    $data= array();
    
    parse_str(file_get_contents("php://input"), $data);
    
    /**================separar las propiedades en un arreglo===================== */

    $columns= array();
    
    foreach (array_keys($data) as $key => $value) {
        
        array_push($columns, $value);
        
    }
    
    //-----------validar la tabla y las columnas existan--------------
    if(empty(Connection::getColumnData($table, $columns))){

        $json= array(
    
            "status" => 400,
            "result" =>"Error: Fields in the form do not match the database"
        
        
        );

        echo json_encode($json, http_response_code($json["status"]));

        return;

    }

     /**=======================
     * solicitamos respuesta del controlador para crear datos en cualquier tabla
     * ========================= */

    $response= new PutController();
    $response-> putData($table, $data, $id, $nameID);

}