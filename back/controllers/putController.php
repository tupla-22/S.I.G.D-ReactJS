<?php

require_once "models/putModel.php";

class PutController{

    /**================peticion put para editar datos================== */
    static public function putData($table, $data, $id, $nameID){

        if (isset($data["password_usuario"]) && $data["password_usuario"]!= null) {

            $crypt = crypt($data["password_usuario"], 'sha512'); 
            $data["password_usuario"]= $crypt;
            
            $data=array_unique($data);
            $response= PutModel::putData($table, $data, $id, $nameID);
        
            $return= new PutController();
            $return -> fncResponse($response);
            
        }else {

        $response= PutModel::putData($table, $data, $id, $nameID);
        
        $return= new PutController();
        $return -> fncResponse($response);

        }

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