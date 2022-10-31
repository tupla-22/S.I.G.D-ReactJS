import { useContext } from "react";
import Main from "../../componentes/styledComponents/Main";
import LanguajeContext from "../../contexts/LanguajeContext";
import { getUser, urlApi } from "../../functions/globals";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../helpers/helpHttp";
import PlayerList from "../scout/componentes/PlayersList";

const MyTeam = () => {
    const [players, setPlayers] = useState([]);

    const peticion = helpHttp()
    const { text } = useContext(LanguajeContext)

	const user = getUser()

	const urlJugadores =
		"relations?select=id_usuario,ci_usuario,carneSalud_usuario,fechaNac_usuario,email_usuario,primerApellido_usuario,primerNombre_usuario,id_rol_usuario&rel=tienen,usuarios&type=tiene,usuario"

	useEffect(() => {
			peticion.get(urlApi(urlJugadores)).then((dat) => {
				console.log(dat)
				if (dat.status == 200) {
					setPlayers(dat.result)
				}
			})
	}, [])

    return ( 
    
    <Main>
        <h3 style={{padding:20}}>Equipo: (nombre)</h3>
        <PlayerList players={players}/>
    </Main>
     );
}
 
export default MyTeam;