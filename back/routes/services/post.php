<?php



require_once "models/connection.php";
require_once "controllers/postController.php";




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

    /**===================peticion post para el registro de usuarios======================= */
    

    }else if (isset($_GET["login"])&& $_GET["login"]==true) {
        $suffix= $_GET["suffix"] ?? "usuario";
        $response-> postLogin($table, $_POST, $suffix);
        
       
    }else {
        /**=======================
         * solicitamos respuesta del controlador para crear datos en cualquier tabla
         * ========================= */

        
        $response-> postData($table, $_POST);
    }

    

}