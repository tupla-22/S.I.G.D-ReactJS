<?php


require_once "models/connection.php";
require_once "controllers/postController.php";




//$rol=Connection::tokenRol($_GET["token"]); 


if (isset($_POST)) {

    /**================separar las propiedades en un arreglo===================== */

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

    /**===================peticion post para el registro de usuarios======================= */
    $response= new PostController();

    if (isset($_GET["register"])&& $_GET["register"]==true) {
        $suffix= $_GET["suffix"] ?? "usuario";
        $response-> postRegister($table, $_POST, $suffix);

    /**===================peticion post para el login de usuarios======================= */
    

    }else if (isset($_GET["login"])&& $_GET["login"]==true) {
        $suffix= $_GET["suffix"] ?? "usuario";
        $response-> postLogin($table, $_POST, $suffix);
        
       
    }else {

        /**===================peticion post para usuarios autorizados======================= */
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
            
                $response-> postData($table, $_POST);


            /**peticion put para usuarios autorizados */

            }else{

                $tableToken= $_GET["table"] ?? "usuarios";
                $suffix= $_GET["suffix"] ?? "usuario";

                $rol=Connection::tokenRol($_GET["token"]); 
        
                if ($rol==1 ||$rol==2 ||$rol==7  ) {
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
                 * solicitamos respuesta del controlador para crear datos en cualquier tabla
                 * ========================= */

                if ($validate == "ok") {
                    

                    
                    $response-> postData($table, $_POST);
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


        
    }

    

}