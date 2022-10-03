import Form from "../../../componentes/Form"
import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";

const UserDelForm = () => {
    const [ciUser, setCiUser] = useState(null);
    const [confirm, setConfirm] = useState(null);
    const [modalConfirm, setModalConfirm] = useState(null);

    const peticion = helpHttp();

    const handleChange = (e) => {
        setCiUser(e.target.value)
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        setModalConfirm(true)
    }

    useEffect(() => {
        console.log(ciUser)
        if(confirm == "1"){
            peticion.del(urlApi(`usuarios?id=${ciUser}&nameID=ci_usuario`)).then(e=>console.log(e));
        }
    }, [confirm]);
    return ( 
        <Form>
            <h3>Eliminar usuario</h3>
            <TextField type="number" onChange={handleChange} name="ci_usuario" label="Cédula" value={ciUser} className="Form__input"></TextField>
            <ModalConfirm name="Eliminar" confirm={confirm} setConfirm={setConfirm}/>
        </Form>
     );
}
 
export default UserDelForm;