<?php

require_once "models/putModel.php";

class PutController{

    /**================peticion put para editar datos================== */
    static public function putData($table, $data, $id, $nameID){

        $response= PutModel::putData($table, $data, $id, $nameID);
        echo '<pre>'; print_r($response); echo '</pre>';
        return;
        $return= new PutController();
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
                "method" => "put"
            
            
            );

        }

        
        echo json_encode($json, http_response_code($json["status"]));


    }

}