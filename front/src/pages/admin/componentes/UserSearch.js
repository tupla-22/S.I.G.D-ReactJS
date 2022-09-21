import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import UserList from "./UserList";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../../helpers/helpHttp";

const UserSearch = () => {
    const [apellido, setApellido] = useState("");
    const solicitud = helpHttp();
    const [usuariosBuscados, setUsuariosBuscados] = useState([]);
    const handleChange = (e) =>{
        setApellido(e.target.value);
    }

    const handleSubmit = (e) =>{
        const as = async ()=>{
            let  res = await solicitud.get(`http://apirest.com/usuarios?select=*&linkTo=primerApellido_usuario&search=${apellido}¨¨`).then(e=>e)
            setUsuariosBuscados(res.result);
            console.log(usuariosBuscados)
        }
        as()
        
    }

    return ( 
        <Form>
            <h3>Buscar usuario</h3>
            <TextField onChange={handleChange} value={apellido} className="Form__input" label="Apellido"/>
            <ButtonClassic onClick={handleSubmit} variant="contained">Buscar</ButtonClassic>
            <UserList/>
        </Form>
     );
}
 
export default UserSearch;