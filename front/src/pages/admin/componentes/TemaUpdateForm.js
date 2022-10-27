import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from 'react';
import { Button, TextField, textFieldClasses } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import LanguajeContext from "../../../contexts/LanguajeContext";

const TeamUpdateForm = ({setTeam}) => {
    const [idTeam, setidTeam] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const peticion = helpHttp();

    const {text} = useContext(LanguajeContext)

    const handleChange = (e) => {
        setidTeam(e.target.value)
    }

    const handleClick = (e)=>{
        e.preventDefault();
        peticion.get(urlApi(`equipos?select=*&linkTo=id_equipo&search=${idTeam}¨¨`)).then(e=>setTeam(e.result[0]));
    }
    return ( 
        <Form>
            <h3>{text.actualizarEquipos}</h3>
            <TextField type="number" onChange={handleChange}  label="ID" value={idTeam} className="Form__input"></TextField>
            <ButtonClassic type="submit" onClick={handleClick}>{text.actualizar}</ButtonClassic>
        </Form>
     );
}
 
export default TeamUpdateForm;