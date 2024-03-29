<?php

require_once "models/connection.php";

$routesArray=explode("/", $_SERVER["REQUEST_URI"]);
$routesArray=array_filter($routesArray);


/**
 * cuando no se hacen peticiones a la api
 */

if(count($routesArray)==0){
    $json= array(
    
        "status" => 404,
        "result" =>"Not Founca"
    
    
    );

    echo json_encode($json, http_response_code($json["status"]));
    return;
}

/**
 * cuando se hacen peticiones a la api
 */

 if(count($routesArray) >0 && isset($_SERVER["REQUEST_METHOD"])){

    
    $table=explode("?",$routesArray[1])[0];

    /**----------------validar apikey------------------ 

    if (!isset(getallheaders()["Autorization"]) || getallheaders()["Autorization"]!= Connection::apikey()) {
        
        $json= array(
        
            "status" => 200,
            "result" => "You are not authorized to make this request"
        
        
        );

        echo json_encode($json, http_response_code($json["status"]));

        return;

    }


    /**----------------get------------------ */

    if($_SERVER["REQUEST_METHOD"]=="GET"){
        
        include "services/get.php";
    }
        /**----------------post------------------ */

    if($_SERVER["REQUEST_METHOD"]=="POST"){

        include "services/post.php";

    }

    /**----------------put------------------ */

    if($_SERVER["REQUEST_METHOD"]=="PUT"){
        
        include "services/put.php";

    }
    /**----------------delete------------------ */

    if($_SERVER["REQUEST_METHOD"]=="DELETE"){
        
        include "services/delete.php";
    }
 }



