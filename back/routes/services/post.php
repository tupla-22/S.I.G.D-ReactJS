<?php

require_once "models/connection.php";
require_once "controllers/postController.php";

if (isset($_POST)) {

    $columns= array();

    foreach (array_keys($_POST) as $key => $value) {

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

     $response= new PostController();
     $response-> postData($table, $_POST);

}