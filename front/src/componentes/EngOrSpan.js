import * as React from "react"
import iconEngland from "../media/reino-unido.png"
import iconSpanish from "../media/espana.png"
import LanguajeContext from "../contexts/LanguajeContext"
import { Button } from "@mui/material"
import styled from "styled-components"
import { useState, useEffect } from "react"

const Img = styled.img`
	border-radius: 100%;
	height: 20px;
	width: 20px;
	margin: 2px;
`

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	width: 20px;
	margin: 10px;
`

const B = styled.b`
	font-size: 13px;
`

const Div = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 50%;
	&:hover {
		opacity: 100%;
		cursor: pointer;
	}
`
export default function EngOrSpan() {
	const [selectEs, setSelectEs] = useState({ opacity: "100%" })
	const [selectEn, setSelectEn] = useState({})
	const { handleLanguaje, text } = React.useContext(LanguajeContext)

	const handleEs = () => {
		handleLanguaje("es")
		setSelectEs({ opacity: "100%" })
		setSelectEn({ opacity: "50%" })
	}

	const handleEn = () => {
		handleLanguaje("en")

		setSelectEn({ opacity: "100%" })
		setSelectEs({ opacity: "50%" })
	}
	return (
		<>
			<Container>
				<Div style={selectEs} onClick={handleEs}>
					<Img src={iconSpanish} />
					<B>ES</B>
				</Div>
				<Div style={selectEn} onClick={handleEn}>
					<Img src={iconEngland} />
					<B>EN</B>
				</Div>
			</Container>
		</>
	)
}
