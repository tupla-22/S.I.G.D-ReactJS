<?php

require_once "models/connection.php";
require_once "controllers/deleteController.php";

$id= $_GET["id"] ?? null;
$nameID= $_GET["nameID"] ?? null;

if (isset($id) && isset($nameID)) {

    $columns=array($nameID);

    
    
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
     * solicitamos respuesta del controlador para eliminar datos en cualquier tabla
     * ========================= */

    $response= new DeleteController();
    $response-> deleteData($table, $id, $nameID);

}