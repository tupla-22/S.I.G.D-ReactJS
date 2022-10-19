import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import UserList from "./UserList";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";
import ChampionshipsList from "./ChampionshipList";

const MatchSearch = () => {
    const [nombre, setNombre] = useState("");
    const solicitud = helpHttp();
    const handleChange = (e) =>{
        setNombre(e.target.value);
    }

    const handleSubmit = (e) =>{
        const as = async ()=>{
            let  res = await solicitud.get(`http://apirest.com/usuarios?select=*&linkTo=primerNombre_usuario&search=${e.target.value}`).then(e=>e)
        
            console.log(res)
        }
        as()
        
    }

    return ( 
        <Form>
            <h3>Buscar campeonato</h3>
            <TextField onChange={handleChange} value={nombre} className="Form__input" label="nombre"/>
            <ButtonClassic onClick={handleSubmit} variant="contained">Buscar</ButtonClassic>
            <ChampionshipsList/>
        </Form>
     );
}
 
export default MatchSearch;