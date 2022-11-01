import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from "react"
import { Button, TextField } from "@mui/material"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import ChampionshipList from "./ChampionshipList"
import { PAlert } from "../../../componentes/PAlert"
import MatchList from "./MatchList"
import LanguajeContext from "../../../contexts/LanguajeContext"
import { PSuccess } from "../../../componentes/styledComponents/PSuccess"
import AlertSuccees from "../../../componentes/AlertSuccees"

const MatchDelForm = () => {
	const [idMatch, setidMatch] = useState(null)
	const [confirm, setConfirm] = useState(null)
	const [ok, setok] = useState(false)

	const peticion = helpHttp()
	const { text } = useContext(LanguajeContext)

	const handleChange = (e) => {
		setidMatch(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
	}

	useEffect(() => {
		console.log(idMatch)
		if (confirm == "1") {
			peticion.del(urlApi(`partidos?id=${idMatch}&nameID=id_partido`)).then((e) => {
				console.log(e.status, "Partido elminado")
				if (e.status == 200) {
					setConfirm(0)
					setok(true)
					setTimeout(() => {
						setok(false)
					}, 5000)
				}
			})
		}
	}, [confirm])
	return (
		<>
			{ok && <AlertSuccees />}
			<Form>
				<h3>{text.eliminarPartido}</h3>
				<TextField
					type="number"
					onChange={handleChange}
					label="ID"
					value={idMatch}
					className="Form__input"
				></TextField>
				<ModalConfirm name={text.eliminar} confirm={confirm} setConfirm={setConfirm} />
			</Form>

			<MatchList sport={"all"} />
		</>
	)
}

export default MatchDelForm
