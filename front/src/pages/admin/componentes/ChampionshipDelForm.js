import Form from "../../../componentes/Form"
import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import ChampionshipList from "./ChampionshipList";
import { PAlert } from "../../../componentes/PAlert";
import { PSuccess } from "../../../componentes/styledComponents/PSuccess";


const TeamDelForm = () => {
    const [idChampionship, setidChampionship] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);
    const [done, setDone] = useState(false);
    const [errors, setErrors] = useState(false);
    const peticion = helpHttp();

    const handleChange = (e) => {
        setidChampionship(e.target.value)
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        setModalConfirm(true)
    }

    useEffect(() => {
        console.log(idChampionship)
        if(confirm == "1"){
            peticion.del(urlApi(`campeonatos?id=${idChampionship}&nameID=id_campeonato`)).then(e=>{
                if(e.status==200){
                    setDone(true);
                }
                console.log(e)
            }
                );


        }
    }, [confirm]);
    return ( 
        <Form>
            {done && <PSuccess>Campeonato eliminado correctamente</PSuccess>}
            {errors && <PAlert>Ocurrió un error</PAlert>}
            <h3>Eliminar equipo</h3>
            <TextField type="number" onChange={handleChange} label="ID" value={idChampionship} className="Form__input"></TextField>
            <ModalConfirm name="Eliminar" confirm={confirm} setConfirm={setConfirm}/>
            <ChampionshipList/>
        </Form>
     );
}
 
export default TeamDelForm;