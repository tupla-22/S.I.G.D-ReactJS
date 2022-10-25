import Form from "../../../componentes/Form";
import { helpHttp } from "../../../helpers/helpHttp";
import React, { useState, useEffect } from 'react';
import { urlApi } from "../../../functions/globals";


const peticion = helpHttp()

const StatsCheckList = () => {

    useEffect(() => {
        peticion.get(urlApi(`matcheck?disputed=1&sport=handball,football,basketball&orderBy=id_partido&orderMode=asc&startAt=0&endAt=5`)).then(e=>console.log(e))
    }, []);

    return ( 
        <Form></Form>
     );
}
 
export default StatsCheckList;