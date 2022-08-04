<?php

require_once "models/get_model.php";

class GetController{


    /**======================pticion get sin filtro============================== */

    static function getData($table, $select, $orderBy, $orderMode, $startAt, $endAt){
        $response = GetModel::getData($table, $select, $orderBy, $orderMode, $startAt, $endAt);
        $return=new GetController();
        $return -> fncResponse($response);
    }

    /**======================pticion get con filtro============================== */

    static function getDataFilter($table, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt){
        $response = GetModel::getDataFilter($table, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt);
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