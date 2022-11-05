import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from "react"
import { Button, TextField, textFieldClasses } from "@mui/material"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import LanguajeContext from "../../../contexts/LanguajeContext"

const LeagueUpdateForm = ({ setError,setOk, setleague }) => {
	const [idleague, setidleague] = useState(null)

	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)

	const handleChange = (e) => {
		setidleague(e.target.value)
	}

	const handleClick = (e) => {
		e.preventDefault()
        peticion.get(urlApi(`ligas?select=*&linkTo=nombre_liga&equalTo=${idleague}¨¨`)).then((e) => {
            console.log(e)
			if (e.status == 200) {
                setleague(e.result[0])
                setOk(true)
            } else setError(true)
            setTimeout(() => {
                setError(false)
                setOk(false)
            },5000)
		})
	}

	return (
		<Form>
            <h3>{text.actualizarLiga}</h3>
			<TextField
				onChange={handleChange}
				label={text.nombreDeLaLiga}
				value={idleague}
				className="Form__input"
			></TextField>
			<ButtonClassic type="submit" onClick={handleClick}>
				{text.actualizar}
			</ButtonClassic>
		</Form>
	)
}

export default LeagueUpdateForm
