<?php

require_once "controllers/get_controller.php";

$table=explode("?",$routesArray[1])[0];
$select=$_GET["select"] ?? "*";//si no vienen nada en la variable select por defecto es "*"
$linkTo=$_GET["linkTo"];
$equalTo=$_GET["equalTo"];
$orderBy=$_GET["orderBy"] ?? null;
$orderMode=$_GET["orderMode"] ?? null;
$startAt=$_GET["startAt"] ?? null;
$endAt=$_GET["endAt"] ?? null;

$response=new GetController();

/**======================pticion get con filtro============================== */

if(isset($linkTo)&&isset($equalTo)){
    $response ->getDataFilter(

        $table, 
        $select, 
        $linkTo, 
        $equalTo, 
        $orderBy, 
        $orderMode, 
        $startAt, 
        $endAt
        
        );
}else{

    /**======================pticion get sin filtro============================== */


    $response ->getData($table, $select, $orderBy, $orderMode,$startAt, $endAt);  
}





