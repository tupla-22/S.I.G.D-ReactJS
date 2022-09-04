<?php


class Connection{

    /**=====================info BD========================= */    

    static public function infoDatabase(){//static cuando retorna algo y solo public cuando necesitamos que se imprima algo
        
        $infoDB=array(

            "database" => "gestionDeportiva",
            "user" => "root",
            "pass" =>""

        );

        return $infoDB;

    }

     /**=====================conexion BD========================= */    
    

    static public function connect(){

        try{

            $link = new PDO(
                "mysql:host=localhost;dbname=".Connection::infoDatabase()["database"],
                Connection::infoDatabase()["user"],
                Connection::infoDatabase()["pass"]
            );

            $link->exec("set names utf8");

        }catch(PDOException $e){

            die("Error: ".$e->getMessage());

        }

        return $link;

    }

    
    /**=====================validar existencia de una tabla en la bd========================= */  
    static public function getColumnData($table, $columns){

        //-----------traer nombre de la bd-----------
        $database=Connection::infoDatabase()["database"];

        //-----------traer las columnas de una tabla-----------
        $validate= Connection::connect()->query("SELECT COLUMN_NAME AS item 
            FROM information_schema.columns 
            WHERE table_schema = '$database' AND table_name='$table'
            ")->fetchAll(PDO::FETCH_OBJ);


        //-----------validamos existencia de la tabla-----------
        if (empty($validate)) {
            return null;
        }else{

            //-----------ajuste a solicitud de columnas globales-----------

            if ($columns[0]=="*") {
                array_shift($columns);//elimino el primer indice del arreglo
            }

            //-----------validamos existencia de columnas-----------
            $sum= 0;

            foreach ($validate as $key => $value) {

                //in_array($value->item, $columns);
                $sum += in_array($value->item, $columns);
                
            }
          
            return $sum==count($columns) ? $validate : null;
        }

    }

    /**===================generar token de autenticacion====================== */

    static public function jwt($id,$ci){

        $time= time();

        $token= array(
            
            "iat" => $time, //tiempo presente al que inicia el token
            "exp" => $time + (60*60*01), //toempo de expiracion del token
            "data" =>[
                "id" => $id,
                "ci" => $ci,
                "id_rol" => "0"
                ]
            );

            
            return $token;
            
    }

}