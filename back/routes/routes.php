<?php

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

 if(count($routesArray) ==1 && isset($_SERVER["REQUEST_METHOD"])){


    /**----------------get------------------ */

    if($_SERVER["REQUEST_METHOD"]=="GET"){

        include "services/get.php";
    }
        /**----------------post------------------ */

    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $json= array(
    
            "status" => 200,
            "result" =>"Solicitud POST"
        
        
        );

        echo json_encode($json, http_response_code($json["status"]));
    }

    /**----------------put------------------ */

    if($_SERVER["REQUEST_METHOD"]=="PUT"){
        $json= array(
    
            "status" => 200,
            "result" =>"Solicitud PUT"
        
        
        );

        echo json_encode($json, http_response_code($json["status"]));
    }
    /**----------------delete------------------ */

    if($_SERVER["REQUEST_METHOD"]=="DELETE"){
        $json= array(
    
            "status" => 200,
            "result" =>"Solicitud DELETE"
        
        
        );

        echo json_encode($json, http_response_code($json["status"]));
    }
 }



