import { useContext } from "react"
import Main from "../../componentes/styledComponents/Main"
import Welcome from "../../componentes/Welcome"
import LanguajeContext from "../../contexts/LanguajeContext"
import PlayerCardOnly from "../../componentes/TeamCount";
import { getUser, urlApi } from "../../functions/globals";//../../functions/globals
const user = getUser();
console.log(user);

const HomePage = () => {

    const {text} = useContext(LanguajeContext)

	return (
		<Main>
            <Welcome>{
                text.bienvenidaEstudiante
                
            }</Welcome>
            <PlayerCardOnly idUsuario={user.id_usuario}/>
		</Main>
	)
}

export default HomePage
