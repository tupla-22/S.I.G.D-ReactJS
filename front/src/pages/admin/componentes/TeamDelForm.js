import Form from "../../../componentes/Form"
import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import { id } from "date-fns/locale";

const TeamDelForm = () => {
    const [iDTeam, setIDTeam] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const peticion = helpHttp();

    const handleChange = (e) => {
        setIDTeam(e.target.value)
        console.log(iDTeam)
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        setModalConfirm(true)
    }

    useEffect(() => {
        console.log(iDTeam)
        const data={
            body:new URLSearchParams({visible_equipo:0})
        }
        if(confirm == "1"){
            peticion.put(urlApi(`equipos?id=${iDTeam}&nameID=id_equipo`),data).then(e=>console.log(e));
            setConfirm(false)
        }
    }, [confirm]);
    return ( 
        <Form>
            <h3>Eliminar equipo</h3>
            <TextField type="number" onChange={handleChange} label="ID" value={iDTeam} className="Form__input"></TextField>
            <ModalConfirm name="Eliminar" confirm={confirm} setConfirm={setConfirm}/>
        </Form>
     );
}
 
export default TeamDelForm;