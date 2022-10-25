import * as React from "react"
import iconEngland from "../media/reino-unido.png"
import iconSpanish from "../media/espana.png"
import LanguajeContext from "../contexts/LanguajeContext"
import { Button } from "@mui/material"
import styled from "styled-components"

const Img = styled.img`
	border-radius: 100%;
	height: 20px;
	width: 20px;
  margin:5px;
`

const Container = styled.div`
display:flex;
flex-direction: column;
width:20px;

margin:10px;
`
const B = styled.b`
font-size: 13px;
`
const Div = styled.div`
display:flex;
align-items:center;
justify-content:center;
&:hover{
  cursor:pointer;
}

`
export default function EngOrSpan() {

	const { handleLanguaje, text } = React.useContext(LanguajeContext)

  const handleEs = (e) => {
    handleLanguaje("es")
    
  }

  const handleEn = () => {
    handleLanguaje("en")
  }
	return (
		<>
			<Container>
					<Div value={"asdf"} onClick={handleEs}><Img src={iconSpanish} /><B>ES</B></Div> 
					<Div onClick={handleEn}><Img src={iconEngland} /><B>EN</B></Div>
			</Container>
		</>
	)
}
