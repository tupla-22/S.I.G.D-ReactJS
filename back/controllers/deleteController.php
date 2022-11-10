<?php

require_once "models/deleteModel.php";
require_once "models/connection.php";

class DeleteController{

    /**================peticion delete para eliminar datos================== */
    
   
    static public function deleteData($table, $id, $nameID){
        #

        if ($nameID=="ci_usuario" && $id==0 && $table=="usuarios") {
            $response="RootNo";
        }else {
            $response= DeleteModel::deleteData($table, $id, $nameID);
         
        }

        $return= new DeleteController();
        $return -> fncResponse($response);

    }

    /**======================respuesta del controlador========================== */

    public function fncResponse($response){

        if(!empty($response) && $response!="RootNo"){

            $json= array(
        
                "status" => 200,
                "result" => $response
            
            
            );

        }elseif($response=="RootNo"){

            $json= array(
        
                "status" => 403,
                "result" => "no se puede matar a dios",
                "method" => "delete"
            
            
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