import Form from "../../../componentes/Form"
import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import ChampionshipList from "./ChampionshipList";
import { PAlert } from "../../../componentes/PAlert";
import MatchList from "./MatchList";


const MatchDelForm = () => {
    const [idMatch, setidMatch] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [done, setDone] = useState(false);
    
    const peticion = helpHttp();

    const handleChange = (e) => {
        setidMatch(e.target.value)
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
    }

    useEffect(() => {
        console.log(idMatch)
        if(confirm == "1"){
            peticion.del(urlApi(`partidos?id=${idMatch}&nameID=id_partido`)).then(e=>{
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
            <h3>Eliminar partido</h3>
            <TextField type="number" onChange={handleChange} label="ID" value={idMatch} className="Form__input"></TextField>
            {done && <PAlert>Partido eliminado</PAlert>}
            <ModalConfirm name="Eliminar" confirm={confirm} setConfirm={setConfirm}/>
            <MatchList sport={"all"}/>
        </Form>
     );
}
 
export default MatchDelForm;