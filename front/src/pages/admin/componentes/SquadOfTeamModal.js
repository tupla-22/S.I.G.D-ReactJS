import BasicModal from "../../../componentes/BasicModal";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import { B, H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos";
import { Table } from "@mui/material";
import UserListRow from "./UserListRow";
import UserList from "./UserList";

const peticion = helpHttp()

const SquadOfTeamModal = ({ teamId }) => {

    return ( 
        <BasicModal textBtn={"Integrantes del equipo"}>
            <UserList teamId={teamId}/>
        </BasicModal>
     );
}
 
export default SquadOfTeamModal;