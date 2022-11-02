import { useParams } from "react-router-dom"
import { helpHttp } from "../../../helpers/helpHttp"
import React, { useState, useEffect } from "react"
import { getProp, urlApi } from "../../../functions/globals"
import { Seccion } from "../../../componentes/styledComponents/Seccion"
import styled from "styled-components"
import { ButtonClassic } from "../../../componentes/ButtonClassic"
import NotificationModal from "../../../componentes/NotificationModal"
import { Alert } from "@mui/material"
import AlertiSuccees from "../../../componentes/AlertSuccees"
import Main from "../../../componentes/styledComponents/Main"
import { H2 } from "../../../componentes/styledComponents/ComponentesDeEstilos"
import { useContext } from "react"
import LanguajeContext from "../../../contexts/LanguajeContext"

const peticion = helpHttp()

const Container = styled.div`
	width: 95%;
	height: fit-content;
	border-bottom:1px solid #bbb;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 2.5%;
	@media screen and (max-width: 938px) {
		& {
			flex-direction: column;
		}
	}
`

const Card = styled.div`
	margin: 1.25%;
	width: 45%;
	min-width: 300px;
	height: 300px;
	border-radius: 15px;
	box-shadow: 1px 1px 10px #0003;
	display: flex;
	@media screen and (max-width: 938px) {
		& {
			width: 95%;
			flex-direction: column;
		}
	}
`

const IconFoto = styled.img`
	width: 100px;
	height: 100px;
	border-radius: 100%;
	margin: 20px;
	object-fit: cover;
`

const B = styled.b`
	margin: 10px;
`

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	height: 100%;
	display: flex;
	flex-direction: column;
	@media screen and (max-width: 938px) {
		& {
			width: 100%;
		}
	}
`



const MatchCheckes = () => {
	const [partidos, setPartidos] = useState()
	const [estadisticas, setEstadisticas] = useState([])
	const { idMatchCheck } = useParams()
	const [estadistica, setestadistica] = useState({});
	const [estadisticaAEliminar, setEstadisticaAEliminar] = useState({});
	const [done, setDone] = useState(false);
	const [textNotification, setTextNotification] = useState("");


	const { text} = useContext(LanguajeContext)

	useEffect(() => {
		peticion.get(urlApi(`statistics?verificado=0&id_partido=${idMatchCheck}`)).then((e) => {
			if (e.status == 200) {
				setEstadisticas(e.result)
			}
		})
	}, [])

	useEffect(() => {
		const data = {
			body: new URLSearchParams({ verificado_estadistica: 1 })
		}
		console.log(estadistica)
		peticion.put(urlApi(`estadisticas?id=${estadistica.id_estadistica}&nameID=id_estadistica`), data).then(result => {
			if (result.status == 200) {
				setEstadisticas(estadisticas.filter(el => el.id_estadistica !== estadistica.id_estadistica))
				setTextNotification("Estadistica verificada correctamente")
				setDone(true)
				setTimeout(()=>setDone(false),3000)
			}
			
		})
	}, [estadistica]);


	useEffect(() => {
		peticion.del(urlApi(`estadisticas?id=${estadisticaAEliminar.id_estadistica}&nameID=id_estadistica`)).then(result => {
			console.log(result)
			if (result.status == 200) {
				setEstadisticas(estadisticas.filter(el => el.id_estadistica !== estadisticaAEliminar.id_estadistica))
				setTextNotification("Estadistica eliminada correctamente")
				setDone(true)
				setTimeout(()=>setDone(false),3000)

			}
			
		})
	}, [estadisticaAEliminar]);

	const handleSubmit = (e) => {
		
	}

	return (
		<>
			{estadisticas.length == 0 && <Main>
			
				<H2>{text.noSeEncontraroEstadisticas}</H2>
			</Main>}
			{done &&  <AlertiSuccees severity="success">This is a success message!</AlertiSuccees>}
			{estadisticas.map((estadistica) => (
				<Container>
					<Card>
						<Div>
							<B>Analista</B>
							<IconFoto src={estadistica.fotoPerfil_analista} />
							<B>
								{estadistica.primerApellido_usuario_analista} {estadistica.primerNombre_usuario_analista}
							</B>
						</Div>
						<Div></Div>
					</Card>
					<Card>
						<Div>
							<h4>Jugador</h4>
							<IconFoto src={estadistica.fotoPerfil_jugador} />
							<B>
								{estadistica.primerNombre_usuario_fichaJugador} {estadistica.primerApellido_usuario_fichaJugador}
							</B>
						</Div>
						<Div>
							<B>Tipo: {estadistica.tipo_estadistica}</B>
							<B>Fecha y hora: {estadistica.fecha_estadistica}</B>
						</Div>
					</Card>
					<ButtonClassic onClick={()=>setestadistica(estadistica)} sx={{ margin: "10px" }}>Confirmar estadistica</ButtonClassic>
					<ButtonClassic onClick={()=>setEstadisticaAEliminar(estadistica)} sx={{ margin: "10px" }}>Eliminar estadistica</ButtonClassic>
				</Container>
			))}
		</>
	)
}

export default MatchCheckes
