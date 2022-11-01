import { useContext } from "react";
import Main from "../../componentes/styledComponents/Main";
import LanguajeContext from "../../contexts/LanguajeContext";
import { getUser, urlApi } from "../../functions/globals";
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../../helpers/helpHttp";
import PlayerList from "../scout/componentes/PlayersList";

const MyTeam = () => {
    const [players, setPlayers] = useState([]);
    const [myTeam, setMyTeam] = useState({});
    const peticion = helpHttp()
    const { text } = useContext(LanguajeContext)

	const user = getUser()

	const urlJugadores =
		`getIntegrantesEquipoPorIDUsuario?id_usuario=${user.id_usuario}`
    const urlMiEquipo =`getEquipoPorIDUsuarioPerteneciente?id_usuario=${user.id_usuario}`
	useEffect(() => {
			peticion.get(urlApi(urlJugadores)).then((dat) => {
				console.log(dat)
				if (dat.status == 200) {
					setPlayers(dat.result)
				}
            })
            peticion.get(urlApi(urlMiEquipo)).then((dat) => {
				console.log(dat)
                if (dat.status == 200) {
                    setMyTeam(dat.result[0])
                console.log(myTeam)
				}
			})
	}, [])

    return ( 
    
    <Main>
        <h3 style={{padding:20}}>Equipo: {myTeam.nombre_equipo}</h3>
        <PlayerList players={players}/>
    </Main>
     );
}
 
export default MyTeam;