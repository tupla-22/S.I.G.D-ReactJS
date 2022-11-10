<?php

require_once "get.model.php";
require_once "vendor/autoload.php";
use Firebase\JWT\JWT;
use Firebase\JWT\Key;
class Connection{

    /**=====================info BD========================= */    

    static public function infoDatabase(){            //static cuando retorna algo y solo public cuando necesitamos que se imprima algo
        
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
        //pido el rol del usuario
        $rol= GetModel::getRelDataFilter(
            $rel="usuarios,roles", 
            $type="usuario,rol", 
            $select="id_rol", 
            $linkTo="id_usuario", 
            $equalTo=$id, $orderBy=null, 
            $orderMode=null, 
            $startAt=null, 
            $endAt=null);
       
        $time= time();

        $token= array(
            
            "iat" => $time, //tiempo presente al que inicia el token
            "exp" => $time + (60*60*24), //toempo de expiracion del token
            "data" =>[
                "id" => $id,
                "ci" => $ci,
                "id_rol" => $rol[0]->{"id_rol"} ?? 3//le pongo el rol al token
                ]
            );

            
            return $token;
            
    }

    /**==================validar el token de seguridad================== */

    static public function tokenValidate($token, $table, $suffix){

        //traemos el usuario de acuerdo al token

        $user= GetModel::getDataFilter($table, "token_exp_".$suffix, "token_".$suffix, $token, null, null, null, null);

        if (!empty($user)) {
            //validamos que el token no haya expirado

            $time= time();
            if ($user[0]->{"token_exp_".$suffix} > $time) {
                
                return "ok";

            }else{
                return "expired";
            }
        }else {
            return "no-auth";
        }

    }

    static function tokenPrivateKey(){
        $privateKey = <<<EOD
        -----BEGIN RSA PRIVATE KEY-----
        MIICXAIBAAKBgQC8kGa1pSjbSYZVebtTRBLxBz5H4i2p/llLCrEeQhta5kaQu/Rn
        vuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t0tyazyZ8JXw+KgXTxldMPEL9
        5+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4ehde/zUxo6UvS7UrBQIDAQAB
        AoGAb/MXV46XxCFRxNuB8LyAtmLDgi/xRnTAlMHjSACddwkyKem8//8eZtw9fzxz
        bWZ/1/doQOuHBGYZU8aDzzj59FZ78dyzNFoF91hbvZKkg+6wGyd/LrGVEB+Xre0J
        Nil0GReM2AHDNZUYRv+HYJPIOrB0CRczLQsgFJ8K6aAD6F0CQQDzbpjYdx10qgK1
        cP59UHiHjPZYC0loEsk7s+hUmT3QHerAQJMZWC11Qrn2N+ybwwNblDKv+s5qgMQ5
        5tNoQ9IfAkEAxkyffU6ythpg/H0Ixe1I2rd0GbF05biIzO/i77Det3n4YsJVlDck
        ZkcvY3SK2iRIL4c9yY6hlIhs+K9wXTtGWwJBAO9Dskl48mO7woPR9uD22jDpNSwe
        k90OMepTjzSvlhjbfuPN1IdhqvSJTDychRwn1kIJ7LQZgQ8fVz9OCFZ/6qMCQGOb
        qaGwHmUK6xzpUbbacnYrIM6nLSkXgOAwv7XXCojvY614ILTK3iXiLBOxPu5Eu13k
        eUz9sHyD6vkgZzjtxXECQAkp4Xerf5TGfQXGXhxIX52yH+N2LtujCdkQZjXAsGdm
        B2zNzvrlgRmgBrklMTrMYgm1NPcW+bRLGcwgW2PTvNM=
        -----END RSA PRIVATE KEY-----
        EOD;
        return $privateKey;
    }

    static function tokenRol($jwt){
        $publicKey = <<<EOD
        -----BEGIN PUBLIC KEY-----
        MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC8kGa1pSjbSYZVebtTRBLxBz5H
        4i2p/llLCrEeQhta5kaQu/RnvuER4W8oDH3+3iuIYW4VQAzyqFpwuzjkDI+17t5t
        0tyazyZ8JXw+KgXTxldMPEL95+qVhgXvwtihXC1c5oGbRlEDvDF6Sa53rcFVsYJ4
        ehde/zUxo6UvS7UrBQIDAQAB
        -----END PUBLIC KEY-----
        EOD;

        
        $decoded = JWT::decode($jwt, new Key($publicKey, 'RS256'));
        $decoded_array = (array) $decoded;
        $tokenArray = json_decode(json_encode($decoded_array["data"]), true);
        
        
        return $tokenArray["id_rol"];
    }

    /**=====================apikey========================= */    

    static public function apikey(){   

        return "tVf8vPZANG4yj8r";

     }
}