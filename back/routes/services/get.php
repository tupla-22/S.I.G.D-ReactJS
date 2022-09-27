<?php

require_once "controllers/get.controller.php";

$select=$_GET["select"] ?? "*";//si no vienen nada en la variable select por defecto es "*"
$linkTo=$_GET["linkTo"] ?? null; 
$equalTo=$_GET["equalTo"] ?? null;
$orderBy=$_GET["orderBy"] ?? null;
$orderMode=$_GET["orderMode"] ?? null;
$startAt=$_GET["startAt"] ?? null;
$endAt=$_GET["endAt"] ?? null;
$rel=$_GET["rel"] ?? null;
$type=$_GET["type"] ?? null;
$search=$_GET["search"] ?? null;
$between1=$_GET["between1"] ?? null;
$between2=$_GET["between2"] ?? null;
$filterTo=$_GET["filterTo"] ?? null;
$inTo=$_GET["inTo"] ?? null;
$disputed=$_GET["disputed"] ?? null;
$sport=$_GET["sport"] ?? null;




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

    $response->getRelData(
        
        $rel, 
        $type, 
        $select, 
        $orderBy, 
        $orderMode,
        $startAt, 
        $endAt

    ); 

/**======================pticion get con filtro entre tablas relacionadas============================== */

}else if(isset($rel) && isset($type) && $table=="relations" && isset($linkTo) && isset($equalTo)){

    $response->getRelDataFilter(
        $rel, 
        $type, 
        $select, 
        $linkTo, 
        $equalTo, 
        $orderBy, 
        $orderMode,
        $startAt, 
        $endAt
    ); 

//peticion personalizada partidos pendientes
/*==========================

peticion personalizada
nombre equipo
escudo equipo
fecha del partido a disputar(partidos no disputados)
tipo de partido
deporte equipo


=============================*/

}else if(isset($disputed) && $table=="matcheck" && isset($sport)/*isset($rel) && isset($type) && $table=="relations" && isset($linkTo) && isset($between1) && isset($between2)*/){
    
    
    $response->getMatcheck(
        $sport, 
        $disputed,
        $orderBy, $orderMode, $startAt, $endAt
    );  
    

    
/**======================pticion get para el buscador sin relaciones============================== */


}else if (!isset($rel) && !isset($type) && isset($linkTo) && isset($search)) {
    
    $response->getDataSearch(

        $table, 
        $select, 
        $linkTo, 
        $search, 
        $orderBy, 
        $orderMode, 
        $startAt, 
        $endAt
        
        
); 

/**======================pticion get para el buscador con relaciones============================== */


}else if (isset($rel) && isset($type) && $table=="relations" && isset($linkTo) && isset($search)) {
    
    $response->getRelDataSearch(
        $rel, 
        $type, 
        $select, 
        $linkTo, 
        $search, 
        $orderBy, 
        $orderMode,
        $startAt, 
        $endAt
    );  

    /**======================pticion get para seleccion de rangos(between)============================== */

}else if (!isset($rel) && !isset($type) && isset($linkTo) && isset($between1) && isset($between2)) {

    $response->getDataRange(
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

    /**======================pticion get para seleccion de rangos(between) con relaciones============================== */
    
}else if (isset($rel) && isset($type) && $table=="relations" && isset($linkTo) && isset($between1) && isset($between2)) {

    $response->getRelDataRange(
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
    
}else{

    /**======================pticion get sin filtro============================== */


    $response ->getData($table, $select, $orderBy, $orderMode,$startAt, $endAt);  
}





