import { Button } from "@mui/material";
import Article from "../componentes/Article";
import Main from "../componentes/MainCenter";
import Parraf from "../componentes/Parraf";
import Title from "../componentes/Title";

const Proyects = () => {
    return ( 
            <Article>
                <Title>Algunos de nuestros proyectos</Title>
                <Parraf>
                    En esta sección te contamos como realizamos el sitio S.I.G.D. el cual es un proyecto 
                    que se realiza para la insititucion UTU, este esta destinado a la gestion de deportes en dicho lugar,
                    se manejan distintos deportes como tambien estadisticas para una buena gestion del personal deportivo.
                    Este es muy completo en muchos de los campos del deporte a lo que se refiere.
                </Parraf>
            </Article>
     );
}
 
export default Proyects;