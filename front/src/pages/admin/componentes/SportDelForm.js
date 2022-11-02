import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from "react"
import { Button, TextField } from "@mui/material"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import { id } from "date-fns/locale"
import { PSuccess } from "../../../componentes/styledComponents/PSuccess"
import { PAlert } from "../../../componentes/PAlert"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"

const SportDelForm = ({setIdEliminado}) => {
	const [nombreDeporte, setnombreDeporte] = useState(null)
	const [confirm, setConfirm] = useState(null)
	const [modalConfirm, setModalConfirm] = useState(null)
	const [ok, setOk] = useState(false)
	const [error, setError] = useState(false)
	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)
	const handleChange = (e) => {
		setnombreDeporte(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setModalConfirm(true)
	}

	useEffect(() => {
		if (confirm == "1") {
			peticion.del(urlApi(`deportes?id=${nombreDeporte}&nameID=id_deporte`)).then((e) => {
				console.log(e, "Eliminación de deporte")
                if (e.status == 200) {
                    setIdEliminado(nombreDeporte)
					setOk(true)
					setTimeout(() => {
						setOk(false)
					}, 5000)
				}
			})

			setConfirm(false)
		} else setError(true)
	}, [confirm])
	return (
		<>
			{ok && <AlertSuccees />}
			<Form>
				<h3>{text.eliminarDeporte}</h3>
				{/* {error && <PAlert>A ocurrido un error</PAlert>} */}
				<TextField
					type="text"
					onChange={handleChange}
					label={text.nombre}
					value={nombreDeporte}
					className="Form__input"
				></TextField>
				<ModalConfirm name={text.eliminar} confirm={confirm} setConfirm={setConfirm} />
			</Form>
		</>
	)
}

export default SportDelForm
