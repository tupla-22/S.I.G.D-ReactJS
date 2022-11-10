import { EscudoList } from "../../../componentes/styledComponents/EscudoList"
import { TD } from "../../../componentes/styledComponents/TD"
import { dateTradeEs, getUser, urlApi } from "../../../functions/globals"
import React, { useState, useEffect } from "react"
import { B, BoxCen, BoxColCen, TR } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { Button } from "@mui/material"
import VisibilityIcon from "@mui/icons-material/Visibility"
import { helpHttp } from "../../../helpers/helpHttp"
import ModalChampionship from "./ModalChampioship"
import { useNavigate } from "react-router-dom"
import ManageSearchTwoToneIcon from "@mui/icons-material/ManageSearchTwoTone"
import FactCheckTwoToneIcon from '@mui/icons-material/FactCheckTwoTone';

const MatchListRow = ({ data, disputed, sport }) => {
	const [admin, setAdmin] = useState(false)
	const [idChamp, setIdChamp] = useState({});
	const peticion = helpHttp()
	const user = getUser()
	const navigate = useNavigate()

	useEffect(() => {
		if (user.id_rol_usuario == 1 || user.id_rol_usuario == 2) {
			setAdmin(true)
		}
		peticion.get( urlApi(`corresponden?select=id_campeonato_corresponde&linkTo=id_partido_corresponde&equalTo=${data.id_partido}`)).then(e=>{
			console.log(e,"consiguiendo champs")
			if (e.status == 200) {
				setIdChamp(e.result[0])
			}
		}
		)
	}, [])

	useEffect(() => {
		console.log(data.id_partido)
		console.log(idChamp)
	}, [idChamp]);

	const handleSeeTorneo = () => {}

	return (
		<>
			<TR>
				<TD>{dateTradeEs(data.dia_partido)}</TD>
				<TD>{data.hora_partido}</TD>
				<TD>
					<BoxColCen>
						{data.nombre_equipoLocal}
						<br />
						<EscudoList src={data.escudo_equipoLocal}></EscudoList>
					</BoxColCen>
				</TD>
				<TD>VS</TD>
				<TD>
					<BoxColCen>
						{data.nombre_equipoVisitante}
						<br />
						<EscudoList src={data.escudo_equipoVisitante} />
					</BoxColCen>
				</TD>
				{data.tipo_partido === "campeonato" ? (
					<TD>
						<BoxColCen>
								<BoxColCen>
									{data.tipo_partido}
								</BoxColCen>
						</BoxColCen>
					</TD>
				) : (
					<TD>
						<BoxColCen>{data.tipo_partido}</BoxColCen>
					</TD>
				)}
				{admin && (
					<TD>
						<BoxColCen>ID: {data.id_partido}</BoxColCen>
					</TD>
				)}
				{disputed == 1 && (
					<>
						<TD>
                            <BoxCen>{data.ganador_partido}</BoxCen>
						</TD>

						<TD>
							<BoxCen>
								<BoxColCen>
									{data.nombre_equipoLocal} <B>{data.anotacion_equipoLocal}</B>
								</BoxColCen>
								<b style={{minWidth:"fit-content"}}>-----</b>
								<BoxColCen>
									{data.nombre_equipoVisitante} <B>{data.anotacion_equipoVisitante}</B>
								</BoxColCen>
							</BoxCen>
						</TD>
					</>
				)}
				{user.id_rol_usuario == 7 && (
					<TD>
						<Button
							onClick={(event) => {
								navigate(`../lookMatch/${data.id_partido}`)
							}}
						>
							<ManageSearchTwoToneIcon fontSize="large" />
						</Button>
					</TD>
                )}
                
					{ user.id_rol_usuario == 5 && <TD>
						<Button
							onClick={(event) => {
								navigate(`../matchCheckes/${data.id_partido}`)
							}}
						>
							<FactCheckTwoToneIcon fontSize="large" />
						</Button>
					</TD>}
			</TR>
		</>
	)
}

export default MatchListRow
