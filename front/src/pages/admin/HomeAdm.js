import Article from "../../componentes/styledComponents/Article";
import { BoxFlex } from "../../componentes/BoxFlex";
import { DivFondo } from "../../componentes/DivFondo";
import Main from "../../componentes/styledComponents/Main";
import CardAdm from "./componentes/CardAdm";

const HomeAdm = () => {
  return (
    <DivFondo>
      <BoxFlex>

      <Article>
        <h1 style={{ padding: 20,color:"#fff" }}>
          Bienvenido al "Sistema informatico de gestion deportiva"
        </h1>
        <p style={{ padding: 20,color:"#fff"}}>
          En este programa, tu como administrador puedes hacer muichas cosas,
          como agregar, modificar y elminiar usuarios, equipos, deportes y mucho
          mas
        </p>
      </Article>
      <BoxFlex>
        <CardAdm
          url={
            "https://www.seoptimer.com/es/blog/wp-content/uploads/2015/05/usuarios-redes-sociales-1200x675.png"
          }
          name="Usuarios"
        ></CardAdm>
        <CardAdm
          name="Equpos"
          url={
            "https://t2.pb.ltmcdn.com/es/posts/0/1/2/trabajo_en_equipo_que_es_importancia_caracteristicas_y_ventajas_5210_600.jpg"
          }
        ></CardAdm>
        <CardAdm
          name="Campeonatos"
          url="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-02/Liga%20de%20Campeones%20Concacaf%20trofeo%20Champions%20League%20trophy%20%281%29.jpg?itok=1SSOHjvc"
        ></CardAdm>
      </BoxFlex>




      </BoxFlex>
    </DivFondo>
  );
};

export default HomeAdm;
