import BasicModal from "../../../componentes/BasicModal";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import { B, H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos";

const peticion = helpHttp()

const SquadOfTeamModal = ({ teamId }) => {
    const [squad, setSquad] = useState([]);


    useEffect(() => {
        peticion.get(urlApi(`squad?teamID=${teamId}`)).then(res => {
            console.log(res)
            if (res.status==200) {
                setSquad(
                    res.result.map(el => (
                        <B>{el.primerNombre_usuario}</B>
                    ))
                )
                
        console.log(squad)
            }
        })
        
    }, [teamId]);

    return ( 
        <BasicModal textBtn={"Integrantes del equipo"}>
            
            <H3B>Integrantes del equipo</H3B>
            {

            
            squad.map(e => (e))
        }</BasicModal>
     );
}
 
export default SquadOfTeamModal;