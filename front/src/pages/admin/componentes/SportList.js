import { DivOver } from "../../../componentes/DivOver"
import { TH } from "../../../componentes/styledComponents/TH"
import TeamsListRow from "./TeamsListRow"
import React, { useState, useEffect, useContext } from "react"
import { Table } from "../../../componentes/styledComponents/Table"
import { getUser, urlApi } from "../../../functions/globals"
import { helpHttp } from "../../../helpers/helpHttp"
import LanguajeContext from "../../../contexts/LanguajeContext"
import SportListRow from "./SportListRow"

const peticion = helpHttp()

const SportList = ({idEliminado}) => {
	const [sports, setsports] = useState([])
	const [status, setStatus] = useState(false)
  const [sport, setSport] = useState("");
  const [user, setUser] = useState({});
	const { text } = useContext(LanguajeContext)
 

	useEffect(() => {
		peticion.get(urlApi(`deportes?select=*`)).then((dat) => {
			if (dat.status == 200) {
				setsports(dat.result)
				setStatus(true)
			}
    })
    setUser(getUser())
    
  }, [])

  useEffect(() => {
    setsports(sports.filter((e)=>e.id_deporte!=idEliminado))
  }, [idEliminado]);
  

	return (
		<>
			<h3>{text.deportes}</h3>
			<DivOver>
				<Table>
          <thead>
            { (user.id_rol_usuario == 1 || user.id_rol_usuario == 2) && <th></th>}
						<TH>{text.imagen}</TH>
						<TH>{text.nombre}</TH>
					</thead>

					<tbody>
						{status &&
							sports.map((el) => (
                <SportListRow
                  sports={sports}
                  setSports={setsports }
                  user={user}
									key={el.id_deporte + "equipo"}
									sport={el}
								/>
							))}
					</tbody>
				</Table>
			</DivOver>
		</>
	)
}

export default SportList
