<?php

require_once "models/get.model.php";

class GetController{


    /**======================peticion get sin filtro============================== */

    static function getData($table, $select, $orderBy, $orderMode, $startAt, $endAt){
        $response = GetModel::getData($table, $select, $orderBy, $orderMode, $startAt, $endAt);
        $return=new GetController();
        $return -> fncResponse($response);
    }

    /**======================peticion get con filtro============================== */

    static function getDataFilter($table, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt){
        $response = GetModel::getDataFilter($table, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt);
        $return=new GetController();
        $return -> fncResponse($response);
    }

    /**======================peticion get sin filtro entre tablas relacionadas============================== */

    static function getRelData($rel, $type, $select, $orderBy, $orderMode, $startAt, $endAt){
        $response = GetModel::getRelData($rel, $type, $select, $orderBy, $orderMode, $startAt, $endAt);
        $return=new GetController();
        $return -> fncResponse($response);
    }

    /**==============================respuestas del controlador====================================*/

    public function fncResponse($response){

        if(!empty($response)){

            $json= array(
        
                "status" => 200,
                "total" => count($response),
                "result" => $response
            
            
            );

        }else{

            $json= array(
        
                "status" => 404,
                "result" => "not found"
            
            
            );

        }

        
        echo json_encode($json, http_response_code($json["status"]));


    }




















}