<?php

class Connection{

    /**=====================info BD========================= */    

    static public function infoDatabase(){//static cuando retorna algo y solo public cuando necesitamos que se imprima algo
        
        $infoDB=array(

            "database" => "api_dinamica",
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
    
}