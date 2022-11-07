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
    /**===================peticion delete para usuarios autorizados======================= */
    if(isset($_GET["token"])){

        $tableToken= $_GET["table"] ?? "usuarios";
        $rol=Connection::tokenRol($_GET["token"]); 
        $suffix= $_GET["suffix"] ?? "usuario";

        if ($rol==1 ||$rol==2 ||$rol==5 ) {
            $validate= Connection::tokenValidate($_GET["token"],$tableToken, $suffix);
        }else{
            
            $json= array(
                'status' => 400,
                'results' => "Error: authorization required"
            );

            echo json_encode($json, http_response_code($json["status"]));
            return;
        }
        

        /**=======================
         * solicitamos respuesta del controlador para eliminar datos en cualquier tabla
         * ========================= */

        if ($validate == "ok" ) {

            $rolUsuarioBorrar= GetModel::getRelDataFilter(
                
                $rel="usuarios,roles", 
                $type="usuario,rol", 
                $select="id_rol", 
                $linkTo="ci_usuario",  
                $equalTo=$id, 
                $orderBy=null, 
                $orderMode=null, 
                $startAt=null, 
                $endAt=null);

            if ($nameID=="ci_usuario" && $rol!=1 && $table=="usuarios" && $rolUsuarioBorrar[0]->{"id_rol"}==2) {
                $json= array(
                    'status' => 400,
                    'results' => "Error: no se puede eliminar administrativos"
                );
                echo json_encode($json, http_response_code($json["status"]));
                return;
            }
            $response= new DeleteController();
            $response-> deleteData($table, $id, $nameID);

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
        

    //error cuando no envia el token

            
    }else{

        $json= array(
            'status' => 400,
            'results' => "Error: authorization required"
        );
        echo json_encode($json, http_response_code($json["status"]));
        return;

    }

}