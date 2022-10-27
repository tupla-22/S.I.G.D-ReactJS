import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from 'react';
import { Button, TextField, textFieldClasses } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import { helpHttp } from "../../../helpers/helpHttp";
import LanguajeContext from "../../../contexts/LanguajeContext";

const ChampionshipUpdateForm = ({setData}) => {
    const [idMatch, setidMatch] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const peticion = helpHttp();
    const { text } = useContext(LanguajeContext);

    const handleChange = (e) => {
        e.preventDefault(e)
        setidMatch(e.target.value)
    }

    const handleClick = (e)=>{
        peticion.get(`http://apirest.com/partidos?select=*&linkTo=id_partido&search=${idMatch}¨¨`).then(e=>setData(e.result[0]));
    } 
    return ( 
        <Form>
            <h3>{text.actualizarPartido}</h3>
            <TextField type="number" onChange={handleChange}  label="ID" value={idMatch} className="Form__input"></TextField>
            <ButtonClassic type="submit" onClick={handleClick}>{text.actualizar }</ButtonClassic>
        </Form>
     );
}
 
export default ChampionshipUpdateForm;