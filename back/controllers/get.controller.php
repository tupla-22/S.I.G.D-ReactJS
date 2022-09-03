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

    /**======================peticion get con filtro entre tablas relacionadas============================== */

    static function getRelDataFilter($rel, $type, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt){
        $response = GetModel::getRelDataFilter($rel, $type, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt);
        $return=new GetController();
        $return -> fncResponse($response);
    }

    /**==============================peticiones get para el buscador sin relaciones====================================*/

    static function getDataSearch($table, $select, $linkTo, $search, $orderBy, $orderMode, $startAt, $endAt){
        $response = GetModel::getDataSearch($table, $select, $linkTo, $search, $orderBy, $orderMode, $startAt, $endAt);
        $return=new GetController();
        $return -> fncResponse($response);
    }

    /**======================peticion get para el buscador entre tablas relacionadas============================== */

    static function getRelDataSearch($rel, $type, $select, $linkTo, $search, $orderBy, $orderMode, $startAt, $endAt){
        $response = GetModel::getRelDataSearch($rel, $type, $select, $linkTo, $search, $orderBy, $orderMode, $startAt, $endAt);
        $return=new GetController();
        $return -> fncResponse($response);
    }

    /**======================peticion get para seleccionar rangos============================== */

    static function getDataRange(
    $table, 
    $select, 
    $linkTo, 
    $between1, 
    $between2, 
    $orderBy, 
    $orderMode,
    $startAt, 
    $endAt,
    $filterTo,
    $inTo
    ){
        $response = GetModel::getDataRange(
            $table, 
            $select, 
            $linkTo, 
            $between1, 
            $between2, 
            $orderBy, 
            $orderMode,
            $startAt, 
            $endAt,
            $filterTo,
            $inTo
        );
        $return=new GetController();
        $return -> fncResponse($response);
    }
/**======================peticion get para seleccionar rangos con relaciones============================== */

static function getRelDataRange(
    $rel, 
    $type,
    $select, 
    $linkTo, 
    $between1, 
    $between2, 
    $orderBy, 
    $orderMode,
    $startAt, 
    $endAt,
    $filterTo,
    $inTo
    ){
        $response = GetModel::getRelDataRange(
            $rel, 
            $type,
            $select, 
            $linkTo, 
            $between1, 
            $between2, 
            $orderBy, 
            $orderMode,
            $startAt, 
            $endAt,
            $filterTo,
            $inTo
        );
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
                "result" => "not found",
                "method" => "get"
            
            );

        }

        
        echo json_encode($json, http_response_code($json["status"]));


    }




















}