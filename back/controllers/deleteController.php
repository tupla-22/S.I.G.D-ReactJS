<?php

require_once "models/deleteModel.php";

class DeleteController{

    /**================peticion delete para eliminar datos================== */
    static public function deleteData($table, $id, $nameID){

        $response= DeleteModel::deleteData($table, $id, $nameID);
        
        $return= new DeleteController();
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
                "method" => "delete"
            
            
            );

        }

        
        echo json_encode($json, http_response_code($json["status"]));


    }

}