import { H3B } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import Main from "../../../componentes/styledComponents/Main"
import { helpHttp } from "../../../helpers/helpHttp"
import MatchList from "../../admin/componentes/MatchList"
import React, { useState, useEffect } from "react"
import { urlApi } from "../../../functions/globals"

const History = () => {
	const [sports, setSports] = useState([])

	const peticion = helpHttp()

	useEffect(() => {
        peticion.get(urlApi(`deportes?select=id_deporte`)).then(e => {
            if (e.status==200) {
                setSports(e.result)
            }
        })
	}, [])

	return (
		<Main>
			{sports.map((e) => (
				<>
					<H3B>Historial de {e.id_deporte}</H3B>
					<MatchList sport={e.id_deporte} disputed={1}></MatchList>
				</>
			))}
		</Main>
	)
}

export default History
