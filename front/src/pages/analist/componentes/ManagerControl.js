import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select } from "@mui/material"
import Form from "../../../componentes/Form"
import React, { useState, useEffect } from "react"
import { getDateTime, getUser, urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import ManagerControlUserSelect from "./ManagerControlUserSelect"
import ManagerControlStatSelect from "./ManagerControlStatSelect"
import ManagerControlTeamSelect from "./ManagerControlTeamSelect"
import { PAlert } from "../../../componentes/PAlert"

const peticion = helpHttp()

const matchFormInit = {
	anotacionLocal_partido: 0,
	anotacionVisitante_partido: 0,
}

const formInit = {
	id_equipo_estadistica: null,
	id_fichaJugador_estadistica: null,
	valor_estadistica: 0,
}

const ManagmentControl = ({ sport, confirm, endMatch, matchId, locales, visitantes }) => {
	const [arePlayers, setArePlayers] = useState(false)
	const [form, setForm] = useState(formInit)
	const [tipo, setTipo] = useState("")
	const [stats, setStats] = useState([])
	const [matchForm, setMatchForm] = useState(matchFormInit)
	const [isToPlayer, setIsToPlayer] = useState(false)
	const [teams, setTeams] = useState([])
	const [esTanto, setEsTanto] = useState(false)
	const [equipoDelTanto, setEquipoDelTanto] = useState("")
	const [valorDelTanto, setvalorDelTanto] = useState(0)

	const user = getUser()

	//EFFECTS

	useEffect(() => {
			if (locales.find((el) => el.nombre_equipo == equipoDelTanto)) {
				setMatchForm({
					...matchForm,
					anotacionLocal_partido: (matchForm.anotacionLocal_partido += valorDelTanto),
				})
			} else {
				setMatchForm({
					...matchForm,
					anotacionVisitante_partido: (matchForm.anotacionVisitante_partido += valorDelTanto),
				})
			}
		
		
		console.log(matchForm)
	}, [equipoDelTanto,valorDelTanto])

	useEffect(() => {
		let ganador

		// if (localGetItem("matchForm") != undefined) {
		// 	setMatchForm(localGetItem("matchForm"))
		// }

		setForm({
			...form,
			id_usuario_estadistica: user.id_usuario,
			fecha_estadistica: getDateTime(),
			verificado_estadistica: 0,
			id_partido_estadistica: matchId,
		})

		if (confirm == 1) {
			if (matchForm.anotacionLocal_partido > matchForm.anotacionVisitante_partido) {
				ganador = locales[0].nombre_equipo
			} else if (matchForm.anotacionLocal_partido < matchForm.anotacionVisitante_partido) {
				ganador = visitantes[0].nombre_equipo
			} else {
				ganador = "empate"
			}
			const info = {
				body: new URLSearchParams({ ...matchForm, ganador_partido: ganador }),
			}
			peticion.put(urlApi(`partidos?id=${matchId}&nameID=id_partido`), info).then((e) => {
				console.log(info)
				console.log(e, "anotaciones")
			})
		}
	}, [confirm])

	useEffect(() => {
		peticion
			.get(
				urlApi(
					`relations?select=id_deporte_concibe,icono_tipoEstadistica,id_tipoEstadistica,valor_tipoEstadistica&rel=conciben,tiposEstadisticas&type=concibe,tipoEstadistica&equalTo=${sport}&linkTo=id_deporte_concibe`
				)
			)
			.then((e) => {
				if (e.status == 200) {
					console.log(e)
					setStats(e.result)
					console.log(stats)
				}
			})
	}, [sport])

	useEffect(() => {
		if (locales.length != 0 && visitantes != 0) {
			setArePlayers(true)
			setTeams([
				{ nombre: locales[0].nombre_equipo, id: locales[0].id_equipo },
				{ nombre: visitantes[0].nombre_equipo, id: visitantes[0].id_equipo },
			])
		}
	}, [visitantes, locales])

	//MANEJADORES

	const handleType = (e) => {
		setTipo(e.target.value)
		setForm({ ...form, tipo_estadistica: e.target.value })
	}

	//SUBMIT

	const handleSubmit = (e) => {
		e.preventDefault(e)

		const info = {
			body: new URLSearchParams(form),
		}

		peticion.post(urlApi("estadisticas?"), info).then((e) => {
			console.log(e, "estadistica")
		})
		console.log(form)
	}

	return (
		<>
			<Form>
				<h3>Control {sport}</h3>
				<ManagerControlStatSelect
					setvalorDelTanto={setvalorDelTanto}
					matchForm={matchForm}
					locales={locales}
					visitantes={visitantes}
					setMatchForm={matchForm}
					setEsTanto={setEsTanto}
					form={form}
					setForm={setForm}
					stats={stats}
				/>

				<FormGroup>
					<FormControlLabel
						control={
							<Checkbox
								defaultChecked
								onClick={() => {
									if (isToPlayer) setIsToPlayer(false)
									else setIsToPlayer(true)
								}}
							/>
						}
						label="¿Se le asigna a un jugador?"
					/>
				</FormGroup>
				{!isToPlayer && arePlayers && (
					<ManagerControlUserSelect
						setEquipoDelTanto={setEquipoDelTanto}
						form={form}
						setForm={setForm}
						locales={locales}
						visitantes={visitantes}
					/>
				)}
				{isToPlayer && arePlayers && <ManagerControlTeamSelect form={form} setForm={setForm} teams={teams} />}
				{!arePlayers && <PAlert>No hay jugadores en los equipos</PAlert>}
				<ButtonClassic type="submit" onClick={handleSubmit}>
					Ingresar
				</ButtonClassic>
			</Form>
		</>
	)
}

export default ManagmentControl
