import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from "react"
import { Button, TextField } from "@mui/material"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import ModalConfirm from "./ModalConfirm"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import ChampionshipList from "./ChampionshipList"
import { PAlert } from "../../../componentes/PAlert"
import { PSuccess } from "../../../componentes/styledComponents/PSuccess"
import LanguajeContext from "../../../contexts/LanguajeContext"
import AlertSuccees from "../../../componentes/AlertSuccees"

const TeamDelForm = () => {
	const [idChampionship, setidChampionship] = useState(null)
	const [confirm, setConfirm] = useState(null)
	const [modalConfirm, setModalConfirm] = useState(null)
	const [ok, setok] = useState(false)
	const [errors, setErrors] = useState(false)
	const peticion = helpHttp()

	const { text } = useContext(LanguajeContext)

	const handleChange = (e) => {
		setidChampionship(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setModalConfirm(true)
	}

	useEffect(() => {
		console.log(idChampionship)
		if (confirm == "1") {
            peticion.del(urlApi(`campeonatos?id=${idChampionship}&nameID=id_campeonato`)).then((e) => {
                
				console.log(e.status , "Eliminacion de campeonatos")
                if (e.status == 200) {
                    setErrors(false)
					setConfirm(0)
                    setok(true)
                    setTimeout(()=>{setok(false)},5000)
				}else{
                    setErrors(false)}
			})
		}
	}, [confirm])
	return (
        <>
            
				{ok && <AlertSuccees/>}
				<ChampionshipList />
		</>
	)
}

export default TeamDelForm
