import { useParams } from "react-router-dom"
import { helpHttp } from "../../../helpers/helpHttp"
import React, { useState, useEffect } from "react"
import { getProp, urlApi } from "../../../functions/globals"
import { Seccion } from "../../../componentes/styledComponents/Seccion"
import styled from "styled-components"
import { ButtonClassic } from "../../../componentes/ButtonClassic"

const peticion = helpHttp()

const Container = styled.div`
	width: 95%;
	height: fit-content;
	border-radius: 15px;
	box-shadow: 1px 1px 10px #0003;
	margin: 2.5%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	padding: 1.25%;
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
	margin: 5px;
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
	const [usuario, setUsuario] = useState({});
	useEffect(() => {
		peticion.get(urlApi(`statistics?verificado=0&id_partido=${idMatchCheck}`)).then((e) => {
			if (e.status == 200) {
				setEstadisticas(e.result)
			}
		})
	}, [])

	useEffect(() => {
		const data = {
			body:new URLSearchParams({verificado_estadistica:1})
		}
		console.log(usuario)
		peticion.put(urlApi(`estadisticas?id=${usuario.id_estadistica}}&nameID=id_estadistica`),data).then(e=>console.log(e))
	}, [usuario]);

	const handleSubmit = (e) => {
		
	}

	return (
		<>
			{estadisticas.map((usuario) => (
				<Container>
					<Card>
						<Div>
							<B>Analista</B>
							<IconFoto src={usuario.fotoPerfil_analista} />
							<B>
								{usuario.primerApellido_usuario_analista} {usuario.primerNombre_usuario_analista}
							</B>
						</Div>
						<Div></Div>
					</Card>
					<Card>
						<Div>
							<h4>Jugador</h4>
							<IconFoto src={usuario.fotoPerfil_jugador} />
							<B>
								{usuario.primerNombre_usuario_fichaJugador} {usuario.primerApellido_usuario_fichaJugador}
							</B>
						</Div>
						<Div>
							<B>{usuario.tipo_estadistica}</B>
							<B>{usuario.fecha_estadistica}</B>
						</Div>
					</Card>
					<ButtonClassic onClick={()=>setUsuario(usuario)} sx={{ margin: "10px" }}>Enviar estadistica</ButtonClassic>
					<ButtonClassic sx={{ margin: "10px" }}>Eliminar estadistica</ButtonClassic>
				</Container>
			))}
		</>
	)
}

export default MatchCheckes
