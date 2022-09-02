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
    static public function getColumnData($table){

        $database=Connection::infoDatabase()["database"];

        return Connection::connect()->query("SELECT COLUMN_NAME AS item 
            FROM information_schema.columns 
            WHERE table_schema = '$database' AND table_name='$table'")->fetchAll(PDO::FETCH_OBJ);

    }
}