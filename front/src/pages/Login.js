import FormLogin from "../componentes/FormLogin"
import Main from "../componentes/styledComponents/Main"
import MainCenter from "../componentes/MainCenter"
import StatsShowner from "./componentes/StatsShower"
import styled from "styled-components"

const Container = styled.section`
	width: 100%;
	height: calc(100vh - 82px);
	display: flex;
	align-items: center;
	justify-content: center;
`
const SubSectionsUno = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	@media (max-width: 1000px) {
		& {
			width: 70%;
		}
	}

	@media (max-width: 800px) {
		& {
			width: 100%;
		}
	}
`
const SubSectionsDos = styled.div`
	border-left: 1px solid #aaa;
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100%;
    overflow:scroll;
    background-image:radial-gradient(#eee,#fff);

	@media (max-width: 1000px) {
		& {
			width: 30%;
		}
	}
	@media (max-width: 800px) {
		& {
			display: none;
		}
	}
`

const Login = () => {
	return (
		<Container>
			<SubSectionsUno>
				<FormLogin />
			</SubSectionsUno>
			<SubSectionsDos>
				<StatsShowner />
			</SubSectionsDos>
		</Container>
	)
}

export default Login
