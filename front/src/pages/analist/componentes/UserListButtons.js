import { Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Form from '../../../componentes/Form';
import { PAlert } from '../../../componentes/PAlert';
import { GridContained } from '../../../componentes/styledComponents/GridContained';
import { urlApi } from '../../../functions/globals';
import { helpHttp } from '../../../helpers/helpHttp';


const peticion = helpHttp();


const UserListButtons = () => {
    const [users, setUsers] = useState([]);
    const [errors, setErrors] = useState(false);
    useEffect(() => {
        peticion.get(urlApi(`usuarios?select=primerNombre_usuario&linkTo=id_rol_usuario&equalTo=3`)).then(e=>{
            if(!e.status==200) setErrors(true)
            setUsers(e.result)})
    }, []);

    return ( 
        <GridContained>
            {errors ? (<PAlert>Ocurrió un error</PAlert>):(
                users.map(e=>(<Button key={e.id_usuario}>{e.primerNombre_usuario}</Button>))
            )}

        </GridContained>
     );
}
 
export default UserListButtons;