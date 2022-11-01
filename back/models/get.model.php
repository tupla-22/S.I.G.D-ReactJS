<?php

require_once "connection.php";

class GetModel{

    /**==================peticiones get sin filtro======================= */

    static public function getData($table, $select, $orderBy, $orderMode, $startAt, $endAt){

        //--------------validar existencia de la tabla y las columnas-----------------
        $selectArray=explode(",",$select);
        
        
        if(empty(Connection::getColumnData($table,$selectArray))){
            
            return null;
        }

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

        try {

            $stmt->execute();

        } catch (PDOException $Exeption) {
            return null;
        }

        return $stmt->fetchAll(PDO::FETCH_CLASS);

    }

    /**==================peticiones get con filtro======================= */

    static public function getDataFilter($table, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt){

        //--------------validar existencia de la tabla-----------------
        $linkToArray= explode(",",$linkTo);
        $selectArray=explode(",",$select);

        foreach ($linkToArray as $key => $value) {

            array_push($selectArray,$value);

        }

        $selectArray=array_unique($selectArray);

        if(empty(Connection::getColumnData($table, $selectArray))){
            
            return null;
        }
        //------------------------
        
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


        try {

            $stmt->execute();

        } catch (PDOException $Exeption) {
            return null;
        }

        return $stmt->fetchAll(PDO::FETCH_CLASS);

    }

    /**==================peticiones get sin filtro entre tablas relacionadas======================= */

    static public function getRelData($rel, $type, $select, $orderBy, $orderMode, $startAt, $endAt){
        
        

        $relArray= explode(",",$rel);
        $typeArray= explode(",",$type);
        $innerJoinText="";

        if(count($relArray)>1){

            foreach($relArray as $key => $value){

                //--------------validar existencia de la tabla-----------------
                if(empty(Connection::getColumnData($value, ["*"]))){
                    return null;
                }
                //--------------------
                if($key>0){

                    $innerJoinText .= "INNER JOIN ".$value." ON ".$relArray[0].".id_".$typeArray[$key]."_".$typeArray[0] ." = ".$value.".id_".$typeArray[$key]." ";

                }
            }
        

            

            //-------sin ordenar ni limitar datos-----------

            $sql="SELECT $select FROM $relArray[0] $innerJoinText ";

            //-------ordenar datos sin limites-----------

            if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
                $sql="select $select from $relArray[0] $innerJoinText ORDER BY $orderBy $orderMode";
            }

            //------- ordenar y limitar datos-----------

            if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
                $sql="select $select from $relArray[0] $innerJoinText ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
            }

            //-------limitar datos, sin ordenar-----------

            if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
                $sql="select $select from $relArray[0] $innerJoinText LIMIT $startAt, $endAt";
            }

            $stmt=Connection::connect()->prepare($sql);

            try {

                $stmt->execute();

            } catch (PDOException $Exeption) {
                return null;
            }

            

            return $stmt->fetchAll(PDO::FETCH_CLASS);

        }else{

            return null;

        }


    }

    /**==================peticiones get con filtro entre tablas relacionadas======================= */

    static public function getRelDataFilter($rel, $type, $select, $linkTo, $equalTo, $orderBy, $orderMode, $startAt, $endAt){

        /**=====================organizamos filtros ============================ */
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
        /**=====================organizamos relaciones ============================ */
        $relArray= explode(",",$rel);
        $typeArray= explode(",",$type);
        $innerJoinText="";

        if(count($relArray)>1){

            foreach($relArray as $key => $value){
                //--------------validar existencia de la tabla-----------------
                if(empty(Connection::getColumnData($value, ["*"]))){
                    return null;
                }
                //--------------------
                if($key>0){

                    $innerJoinText .= "INNER JOIN ".$value." ON ".$relArray[0].".id_".$typeArray[$key]."_".$typeArray[0] ." = ".$value.".id_".$typeArray[$key]." ";

                }
            }
        

            

            //-------sin ordenar ni limitar datos-----------

            $sql="SELECT $select 
            FROM $relArray[0] $innerJoinText
            WHERE $linkToArray[0]=:$linkToArray[0] $linkToText";

            //-------ordenar datos sin limites-----------

            if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
                $sql="select $select 
                from $relArray[0] $innerJoinText 
                WHERE $linkToArray[0]=:$linkToArray[0] $linkToText
                ORDER BY $orderBy $orderMode";
            }

            //------- ordenar y limitar datos-----------

            if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $relArray[0] $innerJoinText 
                WHERE $linkToArray[0]=:$linkToArray[0] $linkToText
                ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
            }

            //-------limitar datos, sin ordenar-----------

            if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $relArray[0] $innerJoinText 
                WHERE $linkToArray[0]=:$linkToArray[0] $linkToText
                LIMIT $startAt, $endAt";
            }

            $stmt=Connection::connect()->prepare($sql);
            
            
            foreach ($linkToArray as $key => $value) {

                $stmt-> bindParam(":".$value, $equalToArray[$key], PDO::PARAM_STR);
    
            }

            try {

                $stmt->execute();

            } catch (PDOException $Exeption) {
                return null;
            }

            return $stmt->fetchAll(PDO::FETCH_CLASS);

        }else{

            return null;

        }


    }

    

    /**==================peticion personalizada partidos pendientes======================= */   
    static public function getMatcheck($sport, $disputed, $orderBy, $orderMode, $startAt, $endAt, $linkTo, $equalTo){

        /**=====================organizamos filtros ============================ */
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

        /**=====================organizamos deportes ============================ */
        $idSportTeamArray=array();
        
        $sportArray= explode(",",$sport);
        for ($i=0; $i < count($sportArray); $i++) { 
                    $idSportTeamArray[]="id_deporte_equipo";
                    
                }


             
        
        
        
        
        
        $linkText="";

        if(count($idSportTeamArray)>1){
            
            for ($i=0; $i < count($idSportTeamArray); $i++) { 

                
                if($i>0){

                    $linkText .= "OR e.".$idSportTeamArray[$i]." = '".$sportArray[$i]."' ";

                }
            }
        }
       /**=====================sentencias sql ============================ */  
        $select="id_partido,dia_partido,hora_partido,tipo_partido,disputado_partido,
        (select id_equipo from equipos e where e.id_equipo=p.id_equipoLocal_partido ) as 'id_equipoLocal',
        (select id_equipo from equipos e where e.id_equipo=p.id_equipoVisitante_partido) as 'id_equipoVisitante',
        (select nombre_equipo from equipos e where e.id_equipo=p.id_equipoLocal_partido ) as 'nombre_equipoLocal',
        (select nombre_equipo from equipos e where e.id_equipo=p.id_equipoVisitante_partido) as 'nombre_equipoVisitante',
        (select id_deporte_equipo from equipos e where e.id_equipo=p.id_equipoLocal_partido) as 'id_deporte_equipoLocal',
        (select id_deporte_equipo from equipos e where e.id_equipo=p.id_equipoVisitante_partido) as 'id_deporte_equipoVisitante',
        (select anotacionLocal_partido from equipos e where e.id_equipo=p.id_equipoLocal_partido) as 'anotacion_equipoLocal',
        (select anotacionVisitante_partido from equipos e where e.id_equipo=p.id_equipoLocal_partido) as 'anotacion_equipoVisitante',
        (select escudo_equipo from equipos e where e.id_equipo=p.id_equipoLocal_partido) as 'escudo_equipoLocal',
        (select escudo_equipo from equipos e where e.id_equipo=p.id_equipoVisitante_partido) as 'escudo_equipoVisitante'";
        $from='partidos p';
        $innerJoinText="INNER join equipos e on p.id_partido";
        $where="(e.$idSportTeamArray[0]='$sportArray[0]' $linkText)
        and disputado_partido=$disputed 
        and (e.id_equipo=p.id_equipoLocal_partido or e.id_equipo=p.id_equipoVisitante_partido) $linkToText
        group by p.id_partido";

        
        /**=====================organizamos relaciones ============================ */

        

        

            //-------sin ordenar ni limitar datos-----------

            $sql="SELECT $select 
            FROM $from $innerJoinText
            WHERE $where
            ";
            
            //-------ordenar datos sin limites-----------

            if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                ORDER BY $orderBy $orderMode";
            }

            //------- ordenar y limitar datos-----------

            if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
            }

            //-------limitar datos, sin ordenar-----------

            if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                LIMIT $startAt, $endAt";
            }

            $stmt=Connection::connect()->prepare($sql);
            
            
            

            /*foreach ($idSportTeamArray as $key => $value) {
                
                
                $stmt-> bindParam(":".$value, $sportArray[$key], PDO::PARAM_STR);
                echo '<pre>'; print_r($sportArray[$key]); echo '</pre>';
                
    
            }*/

            try {

                $stmt->execute();
                

            } catch (PDOException $Exeption) {
                
                return null;
            }
            return $stmt->fetchAll(PDO::FETCH_CLASS);
            
            

      


    }

    /**==================peticion personalizada integrantes de equipos======================= */   
    static public function getSquad($teamID, $orderBy, $orderMode, $startAt, $endAt){

        
        $idSportTeamArray=array();
        
        $teamIDArray= explode(",",$teamID);
        for ($i=0; $i < count($teamIDArray); $i++) { 
                    $idSportTeamArray[]="id_equipo";
                    
                }


             
        
        
        
        
        
        $linkText="";

        if(count($idSportTeamArray)>1){
            
            for ($i=0; $i < count($idSportTeamArray); $i++) { 

                
                if($i>0){

                    $linkText .= "OR ".$idSportTeamArray[$i]." = '".$teamIDArray[$i]."' ";

                }
            }
        }
       /**=====================sentencias sql ============================ */  
        $select="id_equipo,nombre_equipo,primerNombre_usuario,primerApellido_usuario,id_usuario,ci_usuario,id_fichaJugador,numeroCamiseta_pertenece,altura_fichaJugador,peso_fichaJugador,lateralidad_fichaJugador";
        $from='fichasJugadores,usuarios,pertenecen,equipos,tienen';
        $innerJoinText="";
        $where="
        id_equipo_pertenece=id_equipo 
        and id_fichaJugador_pertenece=id_fichaJugador 
        and id_usuario=id_usuario_tiene 
        and id_fichaJugador=id_fichaJugador_tiene 
        and ($idSportTeamArray[0]='$teamIDArray[0]' $linkText)
        ";

        
        /**=====================organizamos relaciones ============================ */

        

        

            //-------sin ordenar ni limitar datos-----------

            $sql="SELECT $select 
            FROM $from $innerJoinText
            WHERE $where
            ";
            
            //-------ordenar datos sin limites-----------

            if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                ORDER BY $orderBy $orderMode";
            }

            //------- ordenar y limitar datos-----------

            if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
            }

            //-------limitar datos, sin ordenar-----------

            if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                LIMIT $startAt, $endAt";
            }

            $stmt=Connection::connect()->prepare($sql);
            

            /*foreach ($idSportTeamArray as $key => $value) {
                
                
                $stmt-> bindParam(":".$value, $sportArray[$key], PDO::PARAM_STR);
                echo '<pre>'; print_r($sportArray[$key]); echo '</pre>';
                
    
            }*/

            try {

                $stmt->execute();

            } catch (PDOException $Exeption) {
                
                return null;
            }
            return $stmt->fetchAll(PDO::FETCH_CLASS);
            
            

      


    }

    /**==============================peticiones get para el buscador sin relaciones====================================*/

    static function getDataSearch($table, $select, $linkTo, $search, $orderBy, $orderMode, $startAt, $endAt){

        //--------------validar existencia de la tabla-----------------
        $linkToArray=explode(",",$linkTo);
        $selectArray=explode(",",$select);

        foreach ($linkToArray as $key => $value) {
            array_push($selectArray, $value);
        }

        $selectArray=array_unique($selectArray);

        if(empty(Connection::getColumnData($table,$selectArray))){
            return null;
        }
        //--------------------

        /**=====================organizamos filtros ============================ */
        $linkToArray= explode(",",$linkTo);
        $searchArray= explode("¨¨",$search);
        $linkToText="";

        if(count($linkToArray)>1){

            foreach($linkToArray as $key => $value){
                if($key>0){

                    $linkToText .= "AND ".$value." = :".$value." ";//añade esto en cada iteracion

                }
            }
        }


        
        //-------sin ordenar ni limitar datos-----------

        $sql=
            "SELECT $select 
            FROM $table 
            WHERE $linkToArray[0]
            LIKE '%$searchArray[0]%' 
            $linkToText
            ";

        //-------ordenar datos sin limites-----------

        if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
            $sql="SELECT $select 
            FROM $table 
            WHERE $linkToArray[0]
            LIKE '%$searchArray[0]%' 
            $linkToText
            ORDER BY $orderBy $orderMode";
        }

        //------- ordenar y limitar datos-----------

        if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
            $sql="SELECT $select 
            FROM $table 
            WHERE $linkToArray[0]
            LIKE '%$searchArray[0]%' 
            $linkToText
            ORDER BY $orderBy $orderMode 
            LIMIT $startAt, $endAt";
        }

        //-------limitar datos, sin ordenar-----------

        if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
            $sql="SELECT $select 
            FROM $table 
            WHERE $linkToArray[0]
            LIKE '%$searchArray[0]%' 
            $linkToText
            LIMIT $startAt, $endAt";
        }

        $stmt=Connection::connect()->prepare($sql);

        foreach ($linkToArray as $key => $value) {

            if($key>0){

                $stmt-> bindParam(":".$value, $searchArray[$key], PDO::PARAM_STR);

            }

        }


        try {

            $stmt->execute();

        } catch (PDOException $Exeption) {
            return null;
        }

        return $stmt->fetchAll(PDO::FETCH_CLASS);

    }

    /**==================peticiones get con filtro entre tablas relacionadas======================= */

    static public function getRelDataSearch($rel, $type, $select, $linkTo, $search, $orderBy, $orderMode, $startAt, $endAt){

        
        
        /**=====================organizamos filtros ============================ */
        $searchArray= explode("¨¨",$search);
        $linkToText="";
        $linkToArray= explode(",",$linkTo);
        
        if(count($linkToArray)>1){

            foreach($linkToArray as $key => $value){

                
                if($key>0){

                    $linkToText .= "AND ".$value." = :".$value." ";//añade esto en cada iteracion

                }
            }
        }
        /**=====================organizamos relaciones ============================ */
        $relArray= explode(",",$rel);
        $typeArray= explode(",",$type);
        $innerJoinText="";

        if(count($relArray)>1){

            foreach($relArray as $key => $value){

                //--------------validar existencia de la tabla-----------------
                if(empty(Connection::getColumnData($value,["*"]))){
                    return null;
                }
                //--------------------

                if($key>0){

                    $innerJoinText .= "INNER JOIN ".$value." ON ".$relArray[0].".id_".$typeArray[$key]."_".$typeArray[0] ." = ".$value.".id_".$typeArray[$key]." ";

                }
            }
        

            

            //-------sin ordenar ni limitar datos-----------

            $sql="SELECT $select 
            FROM $relArray[0] $innerJoinText
            WHERE $linkToArray[0]
            LIKE '%$searchArray[0]%' 
            $linkToText";

            //-------ordenar datos sin limites-----------

            if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
                $sql="select $select 
                from $relArray[0] $innerJoinText 
                WHERE $linkToArray[0]
                LIKE '%$searchArray[0]%' 
                $linkToText
                ORDER BY $orderBy $orderMode";
            }

            //------- ordenar y limitar datos-----------

            if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $relArray[0] $innerJoinText 
                WHERE $linkToArray[0]
                LIKE '%$searchArray[0]%' 
                $linkToText
                ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
            }

            //-------limitar datos, sin ordenar-----------

            if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $relArray[0] $innerJoinText 
                WHERE $linkToArray[0]
                LIKE '%$searchArray[0]%' 
                $linkToText
                LIMIT $startAt, $endAt";
            }

            $stmt=Connection::connect()->prepare($sql);
            
            foreach ($linkToArray as $key => $value) {

                if($key>0){
    
                    $stmt-> bindParam(":".$value, $searchArray[$key], PDO::PARAM_STR);
    
                }
    
            }

            try {

                $stmt->execute();

            } catch (PDOException $Exeption) {
                return null;
            }

            return $stmt->fetchAll(PDO::FETCH_CLASS);

        }else{

            return null;

        }


    }

    /**======================peticion get para seleccionar rangos============================== */

    static function getDataRange($table, 
                                $select, 
                                $linkTo, 
                                $between1, 
                                $between2, 
                                $orderBy, 
                                $orderMode,
                                $startAt, 
                                $endAt,
                                $filterTo,
                                $inTo){


        //--------------validar existencia de la tabla-----------------
        $linkToArray=explode(",",$linkTo);

        if ($filterTo!=null) {
            $filterToArray=explode(",",$filterTo);
        }else {
            $filterToArray= array();
        }
        
        $selectArray=explode(",",$select);

        foreach ($linkToArray as $key => $value) {

            array_push($selectArray,$value);

        }

        foreach ($filterToArray as $key => $value) {
            array_push($selectArray,$value);
        }

        $selectArray=array_unique($selectArray);

        if(empty(Connection::getColumnData($table, $selectArray))){
            return null;
        }
        //--------------------
        $filter="";
        
        if ($filterTo!=null && $inTo!=null) {
            $filter='AND '.$filterTo.' IN ('.$inTo.')';
        }

        //-------sin ordenar ni limitar datos-----------

        $sql="SELECT $select from $table where $linkTo between '$between1' and '$between2' $filter";

        //-------ordenar datos sin limites-----------

        if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
            $sql="SELECT $select from $table where $linkTo between '$between1' and '$between2' $filter ORDER BY $orderBy $orderMode";
        }

        //------- ordenar y limitar datos-----------

        if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
            $sql="SELECT $select from $table where $linkTo between '$between1' and '$between2' $filter ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
        }

        //-------limitar datos, sin ordenar-----------

        if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
            $sql="SELECT $select from $table where $linkTo between '$between1' and '$between2' $filter LIMIT $startAt, $endAt";
        }

        $stmt=Connection::connect()->prepare($sql);

        try {

            $stmt->execute();

        } catch (PDOException $Exeption) {
            return null;
        }
        return $stmt->fetchAll(PDO::FETCH_CLASS);
        }

/**======================peticion get para seleccionar estadisticas============================== */

    static function getEstadisticaJugador($idPartido,$idJugador, $idUsuario, $tipoEstadistica, $verificado){
        
        
        

        if (isset($idPartido)) {
            
            $stmt=Connection::connect()->prepare("call estadisticasPartido($idPartido,$verificado);");
        }elseif (isset($idUsuario)) {

            $tipoEstadisticaArray= explode(",",$tipoEstadistica);
            

            $stmt=Connection::connect()->prepare("call cantidadEstadistica($idUsuario, '$tipoEstadistica', '$verificado');");
        }elseif (isset($idJugador)) {
            $stmt=Connection::connect()->prepare("call estadisticasJugador($idJugador,$verificado);");
        }
        try {

            $stmt->execute();

        } catch (PDOException $Exeption) {
            return null;
        }
        
        return $stmt->fetchAll(PDO::FETCH_CLASS);
        
    }
    static function getIntegrantesEquipoPorIDUsuario($idUsuario){
        
        
               
    $stmt=Connection::connect()->prepare("call obtenerIntegrantesEquipoPorUsuarioId ($idUsuario);");

    try {

        $stmt->execute();

    } catch (PDOException $Exeption) {
        return null;
    }
    
    return $stmt->fetchAll(PDO::FETCH_CLASS);
        
    }

    static function getEquipoPorIDUsuarioPerteneciente($idUsuario){
        
        
               
        $stmt=Connection::connect()->prepare("call obtenerEquipoPorIdUsuario ($idUsuario);");
    
        try {
    
            $stmt->execute();
    
        } catch (PDOException $Exeption) {
            return null;
        }
        
        return $stmt->fetchAll(PDO::FETCH_CLASS);
            
    }
    static public function getCountEstadisticas($userID, $tipoEstadistica, $verified, $orderBy, $orderMode, $startAt, $endAt){

        
        $typeArray=array();
        
        
        $tipoEstadisticaArray= explode(",",$tipoEstadistica);
        for ($i=0; $i < count($tipoEstadisticaArray); $i++) { 
                    $typeArray[]="tipo_estadistica";
                    
                }


             
        
        
        
        
        
        $linkText="";

        if(count($typeArray)>1){
            
            for ($i=0; $i < count($typeArray); $i++) { 

                
                if($i>0){

                    $linkText .= "OR ".$typeArray[$i]." = '".$tipoEstadisticaArray[$i]."' ";

                }
            }
        }
       /**=====================sentencias sql ============================ */  
        $select="minutosJugados_fichaJugador, tipo_estadistica, count(id_estadistica)  as 'conteo'";
        $from='estadisticas';
        $innerJoinText="inner join fichasJugadores on id_fichaJugador_estadistica=id_fichaJugador";
        $where="id_fichaJugador_estadistica=(select id_fichaJugador_tiene 
                                            from  tienen 
                                            where id_usuario_tiene=$userID)
        and ($typeArray[0]='$tipoEstadisticaArray[0]' $linkText)
        and verificado_estadistica=$verified
        group by tipo_estadistica
        ";

        
        /**=====================organizamos relaciones ============================ */

        

        

            //-------sin ordenar ni limitar datos-----------

            $sql="SELECT $select 
            FROM $from $innerJoinText
            WHERE $where
            ";
            
            //-------ordenar datos sin limites-----------

            if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                ORDER BY $orderBy $orderMode";
            }

            //------- ordenar y limitar datos-----------

            if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
            }

            //-------limitar datos, sin ordenar-----------

            if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
                $sql="select $select 
                from $from $innerJoinText 
                WHERE $where
                LIMIT $startAt, $endAt";
            }

            $stmt=Connection::connect()->prepare($sql);
            

            /*foreach ($idSportTeamArray as $key => $value) {
                
                
                $stmt-> bindParam(":".$value, $sportArray[$key], PDO::PARAM_STR);
                echo '<pre>'; print_r($sportArray[$key]); echo '</pre>';
                
    
            }*/

            try {

                $stmt->execute();
                

            } catch (PDOException $Exeption) {
                
                
                return null;
            }

            return $stmt->fetchAll(PDO::FETCH_CLASS);
            
            
            
            
            

      


    }

    /**======================peticion get para seleccionar rangos con relaciones============================== */

    static function getRelDataRange($rel, 
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
                                $inTo){

        
        $linkToArray=explode(",",$linkTo);
        
    
        $filter="";
        
        if ($filterTo!=null && $inTo!=null) {
            $filter='AND '.$filterTo.' IN ('.$inTo.')';
        }
        
        $relArray= explode(",",$rel);
        $typeArray= explode(",",$type);
        $innerJoinText="";

        if(count($relArray)>1){

            foreach($relArray as $key => $value){

                //--------------validar existencia de la tabla-----------------
                if(empty(Connection::getColumnData($value,["*"]))){
                    return null;
                }
                //--------------------
                if($key>0){

                    $innerJoinText .= "INNER JOIN ".$value." ON ".$relArray[0].".id_".$typeArray[$key]."_".$typeArray[0] ." = ".$value.".id_".$typeArray[$key]." ";

                }
            }

            //-------sin ordenar ni limitar datos-----------

            $sql="SELECT $select from $relArray[0] $innerJoinText where $linkTo between '$between1' and '$between2' $filter";

            //-------ordenar datos sin limites-----------

            if($orderBy != null && $orderMode != null && $startAt == null && $endAt == null){
                $sql="SELECT $select from $relArray[0] $innerJoinText where $linkTo between '$between1' and '$between2' $filter ORDER BY $orderBy $orderMode";
            }

            //------- ordenar y limitar datos-----------

            if($orderBy != null && $orderMode != null && $startAt != null && $endAt != null){
                $sql="SELECT $select from $relArray[0] $innerJoinText where $linkTo between '$between1' and '$between2' $filter ORDER BY $orderBy $orderMode LIMIT $startAt, $endAt";
            }

            //-------limitar datos, sin ordenar-----------

            if($orderBy == null && $orderMode == null && $startAt != null && $endAt != null){
                $sql="SELECT $select from $relArray[0] $innerJoinText where $linkTo between '$between1' and '$between2' $filter LIMIT $startAt, $endAt";
            }

            $stmt=Connection::connect()->prepare($sql);

            $stmt->execute();

            return $stmt->fetchAll(PDO::FETCH_CLASS);

        }else{
                return null;
                }


    }
        
      

    
}