import BasicModal from "../../../componentes/BasicModal";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";
import UserList from "./UserList";
import ChampionshipList from "./ChampionshipList";

const peticion = helpHttp()

const ChampsNoSquadInModal = ({ teamId }) => {

    return ( 
        <BasicModal textBtn={"Añadir a campeonato"}>
            <ChampionshipList modificable={true} teamId={teamId}/>
        </BasicModal>
     );
}
 
export default ChampsNoSquadInModal;