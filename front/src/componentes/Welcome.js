import { useContext } from "react";
import LanguajeContext from "../contexts/LanguajeContext";
import { getUser } from "../functions/globals";
import Article from "./styledComponents/Article";
import { H3 } from "./styledComponents/H3";
import { PW } from "./styledComponents/PW";


const Welcome = ({children}) => {
  const user = getUser();
  const { text} = useContext(LanguajeContext)

    return ( 
        <Article>
              <H3>
                {text.bienvenido} {user.primerNombre_usuario} {user.primerApellido_usuario}{" "}
                {text.tituloBienvenida}
              </H3>
               <PW>
                {children}
              </PW>
        </Article>
     );
}
 
export default Welcome;