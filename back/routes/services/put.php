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

    array_push($columns, $nameID);

    $columns = array_unique($columns);
    
    //-----------validar la tabla y las columnas existan--------------
    if(empty(Connection::getColumnData($table, $columns))){

        $json= array(
    
            "status" => 400,
            "result" =>"Error: Fields in the form do not match the database"
        
        
        );

        echo json_encode($json, http_response_code($json["status"]));

        return;

    }

    /**===================peticion put para usuarios autorizados======================= */
    if(isset($_GET["token"])){

        /**peticion put para usuarios no autorizados */

        if($_GET["token"]=="no" && isset($_GET["exept"])){

            //-----------validar la tabla y las columnas existan--------------

            $columns= array($_GET["exept"]);

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

        
        /**peticion put para usuarios autorizados */

        }else{

            $tableToken= $_GET["table"] ?? "usuarios";
            $suffix= $_GET["suffix"] ?? "usuario";

            $validate= Connection::tokenValidate($_GET["token"],$tableToken, $suffix);

            /**=======================
             * solicitamos respuesta del controlador para editar datos en cualquier tabla
             * ========================= */

            if ($validate == "ok") {


                $response= new PutController();
                $response-> putData($table, $data, $id, $nameID);

            }

            //error cuando el token ha expirado

            if ($validate == "expired") {
                $json= array(
                    'status' => 303,
                    'results' => "Error: the token was expired"
                );
                echo json_encode($json, http_response_code($json["status"]));
                return;
            }

            //error cuando el token no coincide en bd

            if ($validate == "no-auth") {
                $json= array(
                    'status' => 400,
                    'results' => "Error: the user is not authorized"
                );
                echo json_encode($json, http_response_code($json["status"]));
                return;
            }

        }

    //error cuando no envia el token

            
}else{

    $json= array(
        'status' => 400,
        'results' => "Error: authorization required"
    );
    echo json_encode($json, http_response_code($json["status"]));
    return;

}

}//cadena de responsabilidad para gestionar permisos