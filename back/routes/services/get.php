<?php

require_once "controllers/get.controller.php";

$table=explode("?",$routesArray[1])[0];
$select=$_GET["select"] ?? "*";//si no vienen nada en la variable select por defecto es "*"
$linkTo=$_GET["linkTo"];
$equalTo=$_GET["equalTo"];
$orderBy=$_GET["orderBy"] ?? null;
$orderMode=$_GET["orderMode"] ?? null;
$startAt=$_GET["startAt"] ?? null;
$endAt=$_GET["endAt"] ?? null;
$rel=$_GET["rel"];
$type=$_GET["type"];

$response=new GetController();

/**======================pticion get con filtro============================== */

if(isset($linkTo)&&isset($equalTo) && !isset($rel) && !isset($type)){
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

/**======================pticion get sin filtro entre tablas relacionadas============================== */

}else if(isset($rel) && isset($type) && $table=="relations" && !isset($linkTo) && !isset($equalTo)){

    $response->getRelData($rel, $type, $select, $orderBy, $orderMode,$startAt, $endAt); 

/**======================pticion get con filtro entre tablas relacionadas============================== */

}else if(isset($rel) && isset($type) && $table=="relations" && isset($linkTo) && isset($equalTo)){

    $response->getRelDataFilter($rel, $type, $select, $linkTo, $equalTo, $orderBy, $orderMode,$startAt, $endAt); 

}else{

    /**======================pticion get sin filtro============================== */


    $response ->getData($table, $select, $orderBy, $orderMode,$startAt, $endAt);  
}





