<?php

require_once "connection.php";

class GetModel{

    /**==================peticiones get sin filtro======================= */

    static public function getData($table, $select, $orderBy, $orderMode, $startAt, $endAt){

        //-------sin ordenar ni limitar datos-----------

        $sql="select $select from $table";

        //-------ordenar datos sin limites-----------

        if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
            $sql="select $select from $table ORDER BY $orderBy $orderMode";
        }

        //------- ordenar y limitar datos-----------

        if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
            $sql="select $select from $table ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
        }

        //-------limitar datos, sin ordenar-----------

        if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
            $sql="select $select from $table LIMIT $startAt, $endAt";
        }

        $stmt=Connection::connect()->prepare($sql);

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_CLASS);

    }

    /**==================peticiones get con filtro======================= */

    static public function getDataFilter($table, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt){

        $linkToArray= explode(",",$linkTo);
        $equalToArray= explode("¨¨",$equalTo);
        $linkToText="";

        if(count($linkToArray)>1){

            foreach($linkToArray as $key => $value){
                if($key>0){

                    $linkToText .= "AND ".$value." = :".$value." ";

                }
            }
        }

        //-------sin ordenar ni limitar datos-----------
     
        $sql=
            "SELECT $select 
            FROM $table 
            WHERE $linkToArray[0]=:$linkToArray[0] $linkToText
            
        ";

        //-------ordenar datos sin limites-----------

        if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
            $sql=
                "SELECT $select 
                FROM $table 
                WHERE $linkToArray[0]=:$linkToArray[0] $linkToText
                ORDER BY $orderBy $orderMode
            ";
        }
        
        //------- ordenar y limitar datos-----------

        if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
            $sql=
                "SELECT $select 
                FROM $table 
                WHERE $linkToArray[0]=:$linkToArray[0] $linkToText
                ORDER BY $orderBy $orderMode 
                LIMIT $startAt, $endAt";
        }

        //-------limitar datos, sin ordenar-----------

        if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
            $sql=
                "SELECT $select 
                FROM $table 
                WHERE $linkToArray[0]=:$linkToArray[0] $linkToText
                LIMIT $startAt, $endAt";
        }
        
        $stmt=Connection::connect()->prepare($sql);

        foreach ($linkToArray as $key => $value) {

            $stmt-> bindParam(":".$value, $equalToArray[$key], PDO::PARAM_STR);

        }


        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_CLASS);

    }



    
}