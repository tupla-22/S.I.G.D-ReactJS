import { FormControl, InputLabel, MenuItem, Select } from "@mui/material"
import Form from "../../../componentes/Form"
import SportsSoccerTwoToneIcon from "@mui/icons-material/SportsSoccerTwoTone"
import HealingTwoToneIcon from "@mui/icons-material/HealingTwoTone"
import RoundedCornerTwoToneIcon from "@mui/icons-material/RoundedCornerTwoTone"
import RectangleTwoToneIcon from "@mui/icons-material/RectangleTwoTone"
import ChangeCircleTwoToneIcon from "@mui/icons-material/ChangeCircleTwoTone"
import MoveUpTwoToneIcon from "@mui/icons-material/MoveUpTwoTone"
import SettingsOverscanTwoToneIcon from "@mui/icons-material/SettingsOverscanTwoTone"
import React, { useState, useEffect } from "react"
import { getDateTime, localGetItem, urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import { BoxAlCen, H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball"
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk"
import SportsVolleyball from "@mui/icons-material/SportsVolleyball"
import StraightenIcon from "@mui/icons-material/Straighten"

const peticion = helpHttp()

const matchFormInit = {
	anotacionLocal_partido: 0,
	anotacionVisitante_partido: 0,
}

const ManagmentControl = ({ sport, confirm, endMatch, matchId, locales, visitantes }) => {
	const [form, setForm] = useState({})
	const [tipo, setTipo] = useState("")
	const [name, setName] = useState("")
	const [stats, setStats] = useState([])
	const [matchForm, setMatchForm] = useState(matchFormInit)
	const [name2, setName2] = useState("");
	const handleChange = (e) => {
		setForm({
			...form,
			id_fichaJugador_estadistica: e.target.value.id_fichaJugador_estadistica,
			id_usuario_estadistica: JSON.parse(localStorage.getItem("user")).id_usuario,
			id_equipo_estadistica: e.target.value.id_equipo_estadistica,
			fecha_estadistica: getDateTime(),
			valor_estadistica: 1,
			verificado_estadistica: 0,
			id_partido_estadistica: matchId,
		})
		setName(`${e.target.value.nombre} ${e.target.value.apellido}`)
	}

	
	const handleChangeDos = (e) => {
		setForm({
			...form,
			id_fichaJugador_estadistica: e.target.value.id_fichaJugador_estadistica,
			id_usuario_estadistica: JSON.parse(localStorage.getItem("user")).id_usuario,
			id_equipo_estadistica: e.target.value.id_equipo_estadistica,
			fecha_estadistica: getDateTime(),
			valor_estadistica: 1,
			verificado_estadistica: 0,
			id_partido_estadistica: matchId,
		})
		setName2(`${e.target.value.nombre} ${e.target.value.apellido}`)
	}

	useEffect(() => {
		console.log(sport)
		let ganador

		// if (localGetItem("matchForm") != undefined) {
		// 	setMatchForm(localGetItem("matchForm"))
		// }

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
		peticion.get(urlApi(`conciben?linkTo=id_deporte_concibe&equalTo=${sport}`)).then((e) => {
			if (e.status == 200) {
				console.log(e)
				setStats(
					e.result.map((e) => (
						<MenuItem value={e.id_tipoEstadistica_concibe}>
							<BoxAlCen>
								{e.id_tipoEstadistica_concibe}
								{<img style={{ height: "20px" }} src={e.icono_tipoEstadistica}></img>}
							</BoxAlCen>
						</MenuItem>
					))
				)
				console.log(stats)
			}
		})
	}, [sport])

	const handleType = (e) => {
		setTipo(e.target.value)
		setForm({ ...form, tipo_estadistica: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault(e)

		if (tipo == "gol") {
			// peticion.post(urlApi("partidos?"))
			if (locales.find((el) => el.id_fichaJugador == form.id_fichaJugador_estadistica)) {
				setMatchForm({ ...matchForm, anotacionLocal_partido: (matchForm.anotacionLocal_partido += 1) })
				// localStorage.setItem("matchForm", JSON.stringify(matchForm))
				// console.log(matchForm, "matchForm")
			} else {
				setMatchForm({ ...matchForm, anotacionVisitante_partido: (matchForm.anotacionVisitante_partido += 1) })
				// localStorage.setItem("matchForm", JSON.stringify(matchForm))
				// console.log(matchForm, "matchForm")
			}
		}

		const info = {
			body: new URLSearchParams(form),
		}

		peticion.post(urlApi("estadisticas?"), info).then((e) => {
			console.log(e, "estadistica")
		})
	}

	return (
		<>
			<Form>
				<h3>Control football</h3>

				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">Seleccionar</InputLabel>
					<Select
						labelId="demo-simple-select-label"
						id="demo-simple-select"
						value={tipo}
						label="Seleccionar"
						onChange={handleType}
					>
						{stats.map((e) => e)}
					</Select>
				</FormControl>

				{tipo !== "cambio" && tipo !== "falta" && (
					<>
						<h3>Equipos</h3>
						
							
						{name && <p style={{position:"relative",bottom:"-50px",right:"-10px"}}>{name}</p> }
						<FormControl className="Form__input" fullWidth>
							<InputLabel id="selectId">Jugador al que se le asigna</InputLabel>
							
							<Select
								value={form}
								labelId="selectId"
								id="selectId"
								label="Jugador al que se le asigna"
								onChange={(e)=>{handleChange(e)} }
							>
								<H3B>Locales</H3B>
								{locales.map((e) => (
									<MenuItem
										key={e.ci_usuario}
										name={"sadfasd"}
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>	
										
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
								<H3B>Visitantes</H3B>
								{visitantes.map((e) => (
									<MenuItem
										key={e.ci_usuario}
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</>
				)}

				{tipo == "falta" && (
					<>
						<h3>Jugador que realizo falta</h3>
						{name && <p style={{position:"relative",bottom:"-50px",right:"-10px"}}>{name}</p> }
						<FormControl className="Form__input" fullWidth>
							<InputLabel id="demo-simple-select-label">Jugador al que se le asigna</InputLabel>
							<Select
								value={name}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Jugador al que se le asigna"
								onChange={handleChange}
							>
								<h3>Locales</h3>
								{locales.map((e) => (
									<MenuItem
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
								<h3>Visitantes</h3>
								{visitantes.map((e) => (
									<MenuItem
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<h3>Jugador al que le hicieron falta</h3>
						{name2 && <p style={{position:"relative",bottom:"-50px",right:"-10px"}}>{name2}</p> }
						<FormControl className="Form__input" fullWidth>
							<InputLabel id="demo-simple-select-label">Jugador al que se le asigna</InputLabel>
							<Select
								value={name}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Jugador al que se le asigna"
								onChange={handleChangeDos}
							>
								<h3>Locales</h3>
								{locales.map((e) => (
									<MenuItem
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
								<h3>Visitantes</h3>
								{visitantes.map((e) => (
									<MenuItem
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</>
				)}
				{tipo == "cambio" && (
					<>
						<h3>Jugador que entra</h3>
						{name && <p style={{position:"relative",bottom:"-50px",right:"-10px"}}>{name}</p> }
						<FormControl className="Form__input" fullWidth>
							<InputLabel id="demo-simple-select-label">Jugador al que se le asigna</InputLabel>
							<Select
								value={name}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Jugador al que se le asigna"
								onChange={handleChange}
							>
								<h3>Locales</h3>
								{locales.map((e) => (
									<MenuItem
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
								<h3>Visitantes</h3>
								{visitantes.map((e) => (
									<MenuItem
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
							</Select>
						</FormControl>

						<h3>Jugador que sale</h3>
						{name2 && <p style={{position:"relative",bottom:"-50px",right:"-10px"}}>{name2}</p> }
						<FormControl className="Form__input" fullWidth>
							<InputLabel id="demo-simple-select-label">Jugador al que se le asigna</InputLabel>
							<Select
								value={name}
								labelId="demo-simple-select-label"
								id="demo-simple-select"
								label="Jugador al que se le asigna"
								onChange={handleChangeDos}
							>
								<h3>Locales</h3>
								{locales.map((e) => (
									<MenuItem
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
								<h3>Visitantes</h3>
								{visitantes.map((e) => (
									<MenuItem
										value={{
											id_fichaJugador_estadistica: e.id_fichaJugador,
											id_equipo_estadistica: e.id_equipo,
											nombre: e.primerNombre_usuario,
											apellido: e.primerApellido_usuario,
										}}
									>
										{e.primerNombre_usuario} {e.primerApellido_usuario}
									</MenuItem>
								))}
							</Select>
						</FormControl>
					</>
				)}
				{tipo == "falta"}

				<ButtonClassic onClick={handleSubmit} type={"submit"}>
					enviar{" "}
				</ButtonClassic>
				{/* <BoxFlex>
          <UsersModal
            name={"gol"}
            locales={locales}
            visitantes={visitantes}
            form={form}
            setForm={setForm}
          >
            Gol
            <SportsSoccerTwoToneIcon />
          </UsersModal>
          <Button onClick={handleClick} variant="contained">
            Falta
            <HealingTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Corner
            <RoundedCornerTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Lateral
            <RectangleTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Cambio
            <ChangeCircleTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Tiro libre
            <MoveUpTwoToneIcon />
          </Button>
          <Button onClick={handleClick} variant="contained">
            Penal
            <SettingsOverscanTwoToneIcon />
          </Button>
        </BoxFlex> */}
			</Form>
		</>
	)
}

export default ManagmentControl
