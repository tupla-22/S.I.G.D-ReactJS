import { DivOver } from "../../../componentes/DivOver"
import { TH } from "../../../componentes/styledComponents/TH"
import React, { useState, useEffect, useContext } from "react"
import { Table } from "../../../componentes/styledComponents/Table"
import ChampionshipListRow from "./ChampionshipListRow"
import MatchListRow from "./MatchListRow"
import DateRangeIcon from "@mui/icons-material/DateRange"
import ShieldIcon from "@mui/icons-material/Shield"
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled"
import { helpHttp } from "../../../helpers/helpHttp"
import { urlApi } from "../../../functions/globals"
import Form from "../../../componentes/Form"
import { Seccion } from "../../../componentes/styledComponents/Seccion"
import HelpCenterIcon from "@mui/icons-material/HelpCenter"
import LanguajeContext from "../../../contexts/LanguajeContext"
import { BoxCen, TR } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import Loader from "../../../componentes/Loader"
import MilitaryTechTwoToneIcon from "@mui/icons-material/MilitaryTechTwoTone"
import SportsSoccerTwoToneIcon from "@mui/icons-material/SportsSoccerTwoTone"
import { Outlet } from "react-router-dom"

const MatchList = ({verified,  sport, disputed }) => {
	// POR PARAMETRO SE LE TRASMITE EL DEPORTE DESEADO Y SI FUE DISPUTADO

	const peticion = helpHttp()
	const [data, setData] = useState([])
	const [status, setStatus] = useState(false)
	const [loading, setLoading] = useState(false)
  const { text } = useContext(LanguajeContext)
  
  

	useEffect(() => {
		if (sport) {
			setLoading(true)
			peticion
				.get(
					urlApi(
						`matcheck?disputed=${disputed ? disputed : 0}&verificado=${verified ? verified : 0}&sport=${
							sport === "all" ? "handball,football,basketball" : sport
						}&orderBy=id_partido&orderMode=desc`
					)
				)
				.then((e) => {
					if (e.status == 200) {
						setData(e.result)
					}
					setLoading(false)
				})
		}
	}, [sport])

	return (
    <>
      <Outlet/>
			<h3>{text.partidos}</h3>
			<DivOver>
				<Table>
					<thead>
						<TR>
							<TH>
								<DateRangeIcon fontSize="large" color="secondary" />
							</TH>
							<TH>
								<AccessTimeFilledIcon fontSize="large" color="secondary" />
							</TH>
							<TH>
								<ShieldIcon fontSize="large" color="secondary"></ShieldIcon>
							</TH>
							<TH>VS</TH>
							<TH>
								<ShieldIcon fontSize="large" color="secondary"></ShieldIcon>
							</TH>
							<TH>
								<HelpCenterIcon fontSize="large" color="secondary" />
							</TH>

							{disputed == 1 && (
								<>
									<TH>
										<BoxCen>
											<MilitaryTechTwoToneIcon fontSize="large" color="secondary" />{" "}
											{text.ganador}
										</BoxCen>
									</TH>

									<TH>
										<BoxCen>
											<SportsSoccerTwoToneIcon fontSize="large" color="secondary" />{" "}
											{text.tantos}
										</BoxCen>
									</TH>
								</>
              )}
              {}
						</TR>
					</thead>
					<tbody>
						{loading && <Loader />}
						{data.map((e, i) => (
							<MatchListRow key={"champ" + i} disputed={disputed} sport={sport} data={e} />
						))}
					</tbody>
				</Table>
			</DivOver>
		</>
	)
}

export default MatchList
