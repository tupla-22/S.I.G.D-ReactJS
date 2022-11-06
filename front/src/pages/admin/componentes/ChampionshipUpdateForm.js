import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import LanguajeContext from "../../../contexts/LanguajeContext";

const ChampionshipUpdateForm = ({setData}) => {
    const [idChampionship, setidChampionship] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const peticion = helpHttp();
    const { text} = useContext(LanguajeContext)

    const handleChange = (e) => {
        setidChampionship(e.target.value)
    }

    const handleClick = (e) => {
        e.preventDefault()
        peticion.get(`http://apirest.com/campeonatos?select=*&linkTo=id_campeonato&search=${idChampionship}¨¨`).then(e=>setData(e.result[0]));
    }
    return ( 
        <Form>
            <h3>{text.actualizarCampeonato}</h3>
            <TextField  onChange={handleChange}  label={text.nombre} value={idChampionship} className="Form__input"></TextField>
            <ButtonClassic type="submit"  onClick={handleClick}>{text.actualizar}</ButtonClassic>
        </Form>
     );
}
 
export default ChampionshipUpdateForm;