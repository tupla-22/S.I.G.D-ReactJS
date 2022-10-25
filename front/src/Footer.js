import { TableFooter } from "@mui/material"
import styled from "styled-components"
import imagenLogo from "./media/logo.png"
const Container = styled.footer`
	height: 300px;
    border-top:1px solid #aaa;
    display:flex;
    align-items:center;
    justify-content:space-evenly;
`
const Icono = styled.img`
	height: 50px;
`

const Seccion = styled.section`
width:20%;
height:80%;
border-left:1px solid #aaa;

`

const B = styled.b`
margin:12px;
`


const P = styled.p`
margin:12px;
`

const Footer = () => {
	return (
		<>
			<Container>
                <Seccion>
                    <Icono src={imagenLogo}></Icono>
                    <P>tupla.isbo@gmail.com</P>
                </Seccion>
                <Seccion>
                    
                </Seccion>
                <Seccion>
                    <B></B>
                </Seccion>
			</Container>
		</>
	)
}

export default Footer
