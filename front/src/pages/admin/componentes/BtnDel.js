import ModalConfirmNoBtn from "./ModalConfirmNoBtn";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import React, { useState, useEffect } from 'react';


const BtnDel = ({ table, id ,fieldName,array,setArray }) => {
    const [confirm, setConfirm] = useState(false);

    const peticion = helpHttp()

    useEffect(() => {
        let url=`${table}?id=${id}&nameID=${fieldName}`

        if (confirm == 1) {
            peticion.del(urlApi(url)).then(e => {
                console.log(e, "Eliminación de campo")
                
                if (e.status == 200) {
                    setArray(array.filter((e) => e[fieldName] != id))
                }
            })
        }
    }, [confirm]);


    return ( 
        <ModalConfirmNoBtn btn={true} setConfirm={setConfirm}> <DeleteForeverTwoToneIcon color="error"/> Eliminar</ModalConfirmNoBtn>
     );
}
 
export default BtnDel;