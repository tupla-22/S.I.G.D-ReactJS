import styled from "styled-components"
import imagenLogo from "./media/logo.png"
import InstagramIcon from "@mui/icons-material/Instagram"
import EmailIcon from "@mui/icons-material/Email"
import FacebookIcon from "@mui/icons-material/Facebook"

const Container = styled.footer`
    margin-top:10px;
    width:90%;
	height: 150px;
	border-top: 1px solid #aaa;
	display: flex;
	align-items: center;
	justify-content: space-evenly;
    @media screen and (max-width:830px){
        &{
            border-top: none;
            flex-direction: column;
            height:fit-content;
        }
    }
`
const IconoTupla = styled.img`
	height: 50px;
    margin:10px;
`

const Seccion = styled.section`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 20%;
	height: 80%;
	border-left: 1px solid #aaa;
    @media screen and (max-width:830px){
        &{
            border-left: none;
	     border-top: 1px solid #aaa;
         width:80%;
         align-items: center;
        }
    }
`

const B = styled.b`
	margin: 12px;
`

const P = styled.p`
	margin: 12px;
    display:inline-block;
`

const Div = styled.div`
display:flex;
align-items:center;
justify-content:center;
`

const Footer = () => {
	const sxIcons = { margin: "7px" }

	return (
		<>
			<Container>
				<Seccion>
					<IconoTupla src={imagenLogo}></IconoTupla>
					
				</Seccion>
				<Seccion>
					<InstagramIcon sx={sxIcons} />
					<Div><EmailIcon sx={sxIcons} /><P>tupla.isbo@gmail.com</P></Div>
					<FacebookIcon sx={sxIcons} />
				</Seccion>
				<Seccion>
					<B>Copyright © 2022 SRL TUPLA</B>
				</Seccion>
			</Container>
		</>
	)
}

export default Footer
