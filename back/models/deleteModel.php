<?php

require_once "connection.php";
require_once "get.model.php";

class DeleteModel{

    /** ==================peticion delete para eliminar datos de forma dinamica=====================*/

    static public function deleteData($table, $id, $nameID){

        /**=====================validar que el id exisita=========================== */

        $response= GetModel::getDataFilter($table, $nameID, $nameID, $id, null, null, null, null);
        
        if (empty($response)) {
            
            

            return null;

        }

        /**======================eliminamos registros====================== */

        
         
        $sql= "DELETE FROM $table WHERE $nameID= :$nameID";

        $link=Connection::connect();
        $stmt=$link->prepare($sql);

        $stmt->bindParam(":".$nameID, $id, PDO::PARAM_STR);

        if ($stmt->execute()) {
            $response= array(

                "comment" => "The process whas succesful"
            );

            return $response;

        }else{

            return $link->errorInfo();

        }
               

    }
}