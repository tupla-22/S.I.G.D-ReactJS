import { DivOver } from "../../../componentes/DivOver"
import { TH } from "../../../componentes/styledComponents/TH"
import TeamsListRow from "./TeamsListRow"
import React, { useState, useEffect, useContext } from "react"
import { Table } from "../../../componentes/styledComponents/Table"
import { getUser, urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import LanguajeContext from "../../../contexts/LanguajeContext"
import LeagueListRow from "./LeagueListRow"
import { PSuccess } from "../../../componentes/styledComponents/PSuccess"
import AlertSuccees from "../../../componentes/AlertSuccees"

const peticion = helpHttp()

const LeagueList = ({idEliminado}) => {
	const [leagues, setleagues] = useState([])
	const [status, setStatus] = useState(false)
  const [league, setleague] = useState("");
  const [user, setUser] = useState({});
	const { text } = useContext(LanguajeContext)
  const [ok, setOk] = useState(false);
  const [error, setError] = useState(false);

	useEffect(() => {
		peticion.get(urlApi(`ligas?select=*`)).then((dat) => {
			if (dat.status == 200) {
				setleagues(dat.result)
				setStatus(true)
			}
    })
    setUser(getUser())
    
  }, [])

  useEffect(() => {
    setleagues(leagues.filter((e)=>e.id_deporte!=idEliminado))
  }, [idEliminado]);
  

	return (
    <>
      {ok && <AlertSuccees />}
      {error && <AlertSuccees severity={"error"}/>}
			<h3>{text.liga}</h3>
			<DivOver>
				<Table>
          <thead>
            { (user.id_rol_usuario == 1 || user.id_rol_usuario == 2) && <th></th>}
						<TH>{text.nombre}</TH>
						<TH>{text.deporte}</TH>
					</thead>

					<tbody>
						{status &&
							leagues.map((el) => (
                <LeagueListRow
                  setError={setError}
                  setOk={setOk}
                  leagues={leagues}
                  setleagues={setleagues }
                  user={user}
									key={el.id_deporte + "equipo"}
									league={el}
								/>
							))}
					</tbody>
				</Table>
			</DivOver>
		</>
	)
}

export default LeagueList
