// import { IconButton } from '@mui/material';
// import React, { useState, useEffect } from 'react';
// import BasicModal from '../../../componentes/BasicModal';
// import { DivOver } from '../../../componentes/DivOver';
// import { BoxAlJusCen, TDF } from '../../../componentes/styledComponents/ComponentesDeEstilos';
// import { Table } from '../../../componentes/styledComponents/Table';
// import { getUser, urlApi } from '../../../functions/globals';
// import { helpHttp } from '../../../helpers/helpHttp';
// import { HeadChampionshipTable } from '../../admin/componentes/ChampionshipList';
// import ChampionshipListRow from '../../admin/componentes/ChampionshipListRow';
// import ModalChampionship from '../../admin/componentes/ModalChampioship';
// import AddCircleTwoToneIcon from "@mui/icons-material/AddCircleTwoTone"


// const MyTeamsChampsModal= ({champ,data}) => {
// 	const [adminTeam, setAdminTeam] = useState(false)
// 	const [contenido, setContenido] = useState([])
// 	const [ok, setOk] = useState(false)
// 	const peticion = helpHttp()
// 	const user = getUser()
// 	const [champs, setChamps] = useState([])

// 	const handleAddToChamp = ({data ,champ}) => {

// 		const form = {
// 			body: new URLSearchParams({
// 				id_equipo_compite: data.id_equipo,
// 				id_campeonato_compite: champ.id_campeonato,
// 			}),
// 		}
// 		peticion.post(urlApi(`compiten?`), form).then((res) => {
// 			console.log(res)
// 			if ((res.status = 200)) {
// 				setOk(true)
// 				setTimeout(() => {
// 					setOk(false)
// 				}, 5000)
// 				setChamps(champs.filter((el) => el.id_campeonato !== champ.id_campeonato))
// 			}
// 		})
// 	}

// 	useEffect(() => {
// 		if (user.id_rol_usuario == 6 || user.id_rol_usuario == 2 || user.id_rol_usuario == 1) {
// 			setAdminTeam(true)
// 		}
// 		peticion.get(urlApi("campeonatos?select=*")).then((e) => {
// 			if ((e.status = 200)) {
// 				setChamps(e.result)
// 			}
// 		})
// 	}, [])


// 	return (
// 		<BasicModal textBtn={"Agregar a campeonato"}>
// 			<BoxAlJusCen>
// 				<h2> Agregar a campeonetato</h2>
// 				<DivOver>
// 					<Table>
// 						<HeadChampionshipTable></HeadChampionshipTable>

// 						{champs.map((e) => (
// 							<tbody>
// 								<ChampionshipListRow
// 									addTd={
// 										<TDF>
// 											<IconButton
// 												onClick={() => {
// 													handleAddToChamp(e)
// 												}}
// 												color="secondary"
// 											>
// 												<AddCircleTwoToneIcon />
// 											</IconButton>
// 										</TDF>
// 									}
// 									data={e}
// 								></ChampionshipListRow>{" "}
// 							</tbody>
// 						))}
// 					</Table>
// 				</DivOver>
// 			</BoxAlJusCen>
// 		</BasicModal>
// 	)
// }

// export default MyTeamsChampsModal
