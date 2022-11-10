import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import UserList from "./UserList";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";
import ChampionshipsList from "./ChampionshipList";
import { urlApi } from "../../../functions/globals";
import MatchList from "./MatchList";

const MatchSearch = () => {
    const [nombre, setNombre] = useState("");
    const [partidosBuscados, setPartidosBuscados] = useState([]);

    const solicitud = helpHttp();
    const handleChange = (e) =>{
        setNombre(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        solicitud.get(urlApi(`partidos?select=*&linkTo=fecha_partido&search=${e.target.value}`)).then(e => {
            if (e.status==200) {
                    setPartidosBuscados(e.result)
                }
        
        })
        
    }

    return ( 
        <Form>
            <h3>Buscar partidos</h3>
            <TextField onChange={handleChange} value={nombre} className="Form__input" label="Fecha del partido (AAAA-MM-DD) "/>
            <ButtonClassic type="submit" onClick={handleSubmit} variant="contained">Buscar</ButtonClassic>
            <MatchList partidosBuscados={partidosBuscados} sport={"all"} />
        </Form>
     );
}
 
export default MatchSearch;