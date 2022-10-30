import { Button, TextField } from "@mui/material"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import Form from "../../../componentes/Form"
import React, { useState, useEffect, useContext } from "react"
import { helpHttp } from "../../../helpers/helpHttp"
import Loader from "../../../componentes/Loader"
import UserListRow from "./UserListRow"
import { TH } from "../../../componentes/styledComponents/TH"
import { DivOver } from "../../../componentes/DivOver"
import { Table } from "../../../componentes/styledComponents/Table"
import { PAlert } from "../../../componentes/PAlert"
import LanguajeContext from "../../../contexts/LanguajeContext"
import { getUser, urlApi } from "../../../functions/globals"
import SearchIcon from "@mui/icons-material/Search"
import PlayerList from "./PlayersList"

const PlayersSearchs = () => {
	const [apellido, setApellido] = useState("")
	const [loading, setLoading] = useState(false)
	const solicitud = helpHttp()
	const [usuariosBuscados, setUsuariosBuscados] = useState([])
	const [ok, setOk] = useState()
	const [errors, setErrors] = useState(false)

	const { text } = useContext(LanguajeContext)

	const user = getUser()

	const handleChange = (e) => {
		setApellido(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setLoading(true)
		solicitud
			.get(
				urlApi(
					`relations?select=id_usuario,ci_usuario,carneSalud_usuario,fechaNac_usuario,email_usuario,primerApellido_usuario,primerNombre_usuario,id_rol_usuario&rel=tienen,usuarios&type=tiene,usuario&linkTo=primerApellido_usuario&search=${apellido}¨¨`
				)
			)
			.then((e) => {
				console.log(e)
				setUsuariosBuscados(e.result)
				if (e.status == 200) {
					setErrors(false)
					setOk(true)
				} else {
					setErrors(true)
					setOk(false)
				}
			})
		setLoading(false)
	}

	return (
		<Form>
			<h3>{text.buscarUsuario}</h3>
			<TextField onChange={handleChange} value={apellido} className="Form__input" label={text.apellido} />
			<ButtonClassic type="submit" onClick={handleSubmit} variant="contained">
				{text.buscar} <SearchIcon />
			</ButtonClassic>
			{loading && <Loader />}
			{ok && (
				<DivOver>
					<Table>
						<thead>
							{user.id_rol_usuario == 4 && <th></th>}
							<TH>{text.nombre}</TH>
							<TH>{text.apellido}</TH>
							<TH>{text.cedula}</TH>
							<TH>{text.correoElectronico}</TH>
							<TH>{text.fechaDeNacimiento}</TH>
							<TH>{text.rol}</TH>
						</thead>
						<tbody>
							{usuariosBuscados.map((e) => (
								<UserListRow user={user} data={e} />
							))}
						</tbody>
					</Table>
				</DivOver>
			)}
			{errors && <PAlert>{text.noSeEncontro}</PAlert>}
			<PlayerList />
		</Form>
	)
}

export default PlayersSearchs
