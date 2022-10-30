import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from "react"
import { Button, TextField } from "@mui/material"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"

const UserDelForm = () => {
    const [ciUser, setCiUser] = useState(null)
    const [confirm, setConfirm] = useState(null)
    const [modalConfirm, setModalConfirm] = useState(null)
    const [ok, setOk] = useState(false);

	const { text } = useContext(LanguajeContext)

	const peticion = helpHttp()

	const handleChange = (e) => {
		setCiUser(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setModalConfirm(true)
	}

	useEffect(() => {
		if (confirm == "1") {
			peticion.del(urlApi(`usuarios?id=${ciUser}&nameID=ci_usuario`)).then((e) => {
				console.log(e)
				if (e.status == 200) {
                    setConfirm(0)
                    setOk(true)
                    setTimeout(()=>{setOk(false)},5000)
				} else setConfirm(0)
			})
		}
	}, [confirm])
	return (
        <>
            {ok && <AlertSuccees/>}
			<Form>
				<h3>{text.eliminarUsuario}</h3>
				<TextField
					type="number"
					onChange={handleChange}
					name="ci_usuario"
					label={text.cedula}
					value={ciUser}
					className="Form__input"
				></TextField>
				<ModalConfirm name={text.eliminar} confirm={confirm} setConfirm={setConfirm} />
			</Form>
		</>
	)
}

export default UserDelForm
