import { TD } from "../../../componentes/styledComponents/TD"
import { dateTradeEs, getUser, urlApi } from "../../../functions/globals"
import React, { useState, useEffect } from "react"
import { TDF } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { IconButton } from "@mui/material"
import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone"
import { helpHttp } from "../../../helpers/helpHttp"

const ChampionshipListRow = ({teamId, champ, addTd , setchamps,champs}) => {
	const [modify, setModify] = useState(false)
    const [ok, setOk] = useState(false);
	const user = getUser()
    const peticion = helpHttp()
	useEffect(() => {
		if (user.id_rol_usuario == 1 || user.id_rol_usuario == 2 || user.id_rol_usuario == 6) {
			setModify(true)
		}
	}, [])

    const handleAddToChamp = () => {
        const form = {
			body: new URLSearchParams({
				id_equipo_compite: teamId,
				id_campeonato_compite: champ.id_campeonato,
			}),
		}
		peticion.post(urlApi(`compiten?`), form).then((res) => {
			console.log(res)
			if ((res.status = 200)) {
				setOk(true)
				setTimeout(() => {
					setOk(false)
				}, 5000)
				setchamps(champs.filter((el) => el.id_campeonato !== champ.id_campeonato))
			}
		})
	}

	return (
		<tr>
			<TD>{champ.nombre_campeonato}</TD>
			<TD>{dateTradeEs(champ.fechaInicio_campeonato)}</TD>
			<TD>{dateTradeEs(champ.fechaFin_campeonato)}</TD>
			<TD>{champ.deporte_campeonato}</TD>
			<TD>{champ.id_campeonato}</TD>
			{modify && (
				<TDF>
					<IconButton
						onClick={() => {
							handleAddToChamp()
						}}
						color="secondary"
					>
						<AddCircleTwoToneIcon />
					</IconButton>
				</TDF>
			)}
		</tr>
	)
}

export default ChampionshipListRow
