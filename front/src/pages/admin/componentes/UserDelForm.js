import Form from "../../../componentes/Form"
import React, { useState, useEffect } from 'react';
import { Button, TextField } from "@mui/material";
import {ButtonClassic} from "../../../componentes/ButtonClassic"

const UserDelForm = () => {
    const [idUser, setIdUser] = useState("");
    return ( 
        <Form>
            <h3>Eliminar usuario</h3>
            <TextField label="Cédula" className="Form__input"></TextField>
            <ButtonClassic variant="contained">Eliminar</ButtonClassic>
        </Form>
     );
}
 
export default UserDelForm;