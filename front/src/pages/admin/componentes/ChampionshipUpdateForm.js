import Form from "../../../componentes/Form"
import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";

const ChampionshipUpdateForm = ({setData}) => {
    const [idChampionship, setidChampionship] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const peticion = helpHttp();

    const handleChange = (e) => {
        setidChampionship(e.target.value)
    }

    const handleClick = (e)=>{
        peticion.get(`http://apirest.com/campeonatos?select=*&linkTo=id_campeonato&search=${idChampionship}¨¨`).then(e=>setData(e.result[0]));
    }
    return ( 
        <Form>
            <h3>Actualizar campeonato</h3>
            <TextField type="number" onChange={handleChange}  label="ID" value={idChampionship} className="Form__input"></TextField>
            <ButtonClassic onClick={handleClick}>Actualizar</ButtonClassic>
        </Form>
     );
}
 
export default ChampionshipUpdateForm;