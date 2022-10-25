import Form from "../../../componentes/Form"
import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";

const UserUpdateForm = ({user,setUser}) => {
    const [ciUser, setCiUser] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const peticion = helpHttp();

    const handleChange = (e) => {
        setCiUser(e.target.value)
        console.log()
    }

    const handleClick = (e)=>{
        peticion.get(`http://apirest.com/usuarios?select=*&linkTo=ci_usuario&equalTo=${ciUser}¨¨`).then(e=>{
            if(e.status==200){
                setUser(e.result[0])
            }
        });
    }
    return ( 
        <Form>
            <h3>Actualizar usuario</h3>
            <TextField type="number" onChange={handleChange} name="ci_usuario" label="Cédula" value={ciUser} className="Form__input"></TextField>
            <ButtonClassic onClick={handleClick}>Actualizar</ButtonClassic>
        </Form>
     );
}
 
export default UserUpdateForm;