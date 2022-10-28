import { getUser } from "../functions/globals";
import Article from "./styledComponents/Article";
import { H3 } from "./styledComponents/H3";
import { PW } from "./styledComponents/PW";


const Welcome = ({children}) => {
    const user = getUser();

    return ( 
        <Article>
              <H3>
                Bienvenido {user.primerNombre_usuario} {user.primerApellido_usuario}{" "}
                al "sistema informático de gestión deportiva de la institución UTU".
              </H3>
               <PW>
                {children}
              </PW>
        </Article>
     );
}
 
export default Welcome;