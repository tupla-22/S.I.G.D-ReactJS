import styled from "styled-components"

const Container = styled.section`
	width: 100%;
	height: 425px;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	@media screen and (max-width: 1000px) {
		& {
	width: 100%;
	height: 300px;
		}
	}
    
	@media screen and (max-width: 600px) {
		& {
			height:220px;
		}
	}
    min-width: 340px;
`
const SubSeccion = styled.div`
width: 100%;
height: 25%;
	display: flex;
	align-items: center;
	justify-content: space-evenly;

`



const DivElp = styled.div`
	height: 100%;
	width: 100%;
    overflow:auto;
    `

const Div = styled.div`
    border-radius: 4px;
    border:1px solid #0006;
	height: 70px;
	width: 70px;
	@media screen and (max-width: 1000px) {
		& {
			height: 50px;
			width: 50px;
		}
	}
    
	@media screen and (max-width: 600px) {
		& {
			height:30px;
			width: 30px;
		}
	}
    `

const ChampionshipTable = ({}) => {
	return (
        <>
            <DivElp><Container>
				<SubSeccion>
					<Div></Div>
				</SubSeccion>
				<SubSeccion>
					<Div></Div>
					<Div></Div>
				</SubSeccion>
				<SubSeccion>
					<Div></Div>
					<Div></Div>
					<Div></Div>
					<Div></Div>
				</SubSeccion>
				<SubSeccion>
					<Div></Div>
					<Div></Div>
					<Div></Div>
					<Div></Div>
					<Div></Div>
					<Div></Div>
					<Div></Div>
					<Div></Div>
				</SubSeccion>
			</Container></DivElp>
			
		</>
	)
}

export default ChampionshipTable
