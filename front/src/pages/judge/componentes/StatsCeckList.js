import Form from "../../../componentes/Form";
import { helpHttp } from "../../../helpers/helpHttp";
import React, { useState, useEffect } from 'react';
import { urlApi } from "../../../functions/globals";


const peticion = helpHttp()

const StatsCheckList = () => {

    useEffect(() => {
        peticion.get(urlApi("estadisticas?")).then(e=>console.log(e))
    }, []);

    return ( 
        <Form></Form>
     );
}
 
export default StatsCheckList;