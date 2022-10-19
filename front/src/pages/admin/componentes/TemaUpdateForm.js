import Form from "../../../componentes/Form"
import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";

const TeamUpdateForm = ({setTeam}) => {
    const [idTeam, setidTeam] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const peticion = helpHttp();

    const handleChange = (e) => {
        setidTeam(e.target.value)
    }

    const handleClick = (e)=>{
        e.preventDefault();
        peticion.get(urlApi(`equipos?select=*&linkTo=id_equipo&search=${idTeam}¨¨`)).then(e=>setTeam(e.result[0]));
    }
    return ( 
        <Form>
            <h3>Actualizar equipo</h3>
            <TextField type="number" onChange={handleChange}  label="ID" value={idTeam} className="Form__input"></TextField>
            <ButtonClassic type="submit" onClick={handleClick}>Actualizar</ButtonClassic>
        </Form>
     );
}
 
export default TeamUpdateForm;