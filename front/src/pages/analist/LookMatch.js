import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../helpers/helpHttp";
import { urlApi } from "../../functions/globals";

const peticion = helpHttp();

const LookMatch = () => {


    let { matchId } = useParams();


    useEffect(() => {
        peticion.get(urlApi("/"))
    }, []);

    return ( 
        <>
        
        </>
     );
}
 
export default LookMatch;