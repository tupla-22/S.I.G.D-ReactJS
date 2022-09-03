<?php

require_once "models/postModel.php";

class PostController{

    /**================peticion post para crear datos================== */
    static public function postData($table, $data){

        $response= PostModel::postData($table, $data);
        
        $return= new PostController();
        $return -> fncResponse($response);

    }

    /**======================respuesta del controlador========================== */

    public function fncResponse($response){

        if(!empty($response)){

            $json= array(
        
                "status" => 200,
                "result" => $response
            
            
            );

        }else{

            $json= array(
        
                "status" => 404,
                "result" => "not found",
                "method" => "post"
            
            
            );

        }

        
        echo json_encode($json, http_response_code($json["status"]));


    }

}