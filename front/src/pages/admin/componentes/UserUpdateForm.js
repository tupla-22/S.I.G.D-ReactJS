import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import LanguajeContext from "../../../contexts/LanguajeContext";

const UserUpdateForm = ({ user, setUser }) => {
    const [ciUser, setCiUser] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const {text} = useContext(LanguajeContext)

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
            <h3>{text.actualizarUsuarios}</h3>
            <TextField type="number" onChange={handleChange} name="ci_usuario" label={text.cedula} value={ciUser} className="Form__input"></TextField>
            <ButtonClassic onClick={handleClick}>{text.actualizar}</ButtonClassic>
        </Form>
     );
}
 
export default UserUpdateForm;