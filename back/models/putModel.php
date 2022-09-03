<?php

class PutModel{

    /** ==================peticion put para editar datos de forma dinamica=====================*/

    static public function putData($table, $data, $id, $nameID){

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