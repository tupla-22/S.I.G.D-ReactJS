<?php

require_once "connection.php";
require_once "get.model.php";

class PutModel{

    /** ==================peticion put para editar datos de forma dinamica=====================*/

    static public function putData($table, $data, $id, $nameID){

        /**=====================validar que el id exisita=========================== */

        $response= GetModel::getDataFilter($table, $nameID, $nameID, $id, null, null, null, null);
        
        if (empty($response)) {
            
            

            return null;

        }

        /**======================actualizamos registros====================== */

        $set="";
        
        foreach ($data as $key => $value) {
            $set.= $key." = :".$key.",";
        }

        $set= substr($set, 0, -1);
         
        $sql= "UPDATE $table SET $set WHERE $nameID= :$nameID";

        $link=Connection::connect();
        $stmt=$link->prepare($sql);

        foreach ($data as $key => $value) {

            $stmt->bindParam(":".$key, $data[$key], PDO::PARAM_STR);
                    
        }

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