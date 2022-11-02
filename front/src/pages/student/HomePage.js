import { useContext } from "react"
import Main from "../../componentes/styledComponents/Main"
import Welcome from "../../componentes/Welcome"
import LanguajeContext from "../../contexts/LanguajeContext"

const HomePage = () => {

    const {text} = useContext(LanguajeContext)

	return (
		<Main>
            <Welcome>{
                text.bienvenidaEstudiante
            }</Welcome>
		</Main>
	)
}

export default HomePage
