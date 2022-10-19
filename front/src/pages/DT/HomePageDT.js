import Article from "../../componentes/styledComponents/Article";
import { BoxFlex } from "../../componentes/BoxFlex";
import { DivFondo } from "../../componentes/styledComponents/DivFondo";
import Main from "../../componentes/styledComponents/Main";
import CardA from "../../componentes/Card";

const HomePageDT = () => {
  return (
      <BoxFlex>

      <Article>
        <h1 style={{ padding: 20,color:"#fff" }}>
          Bienvenido al "Sistema informatico de gestion deportiva"
        </h1>
        <p style={{ padding: 20,color:"#fff"}}>
          En este programa, tu como director técnico puedes hacer muchas cosas,
          como agregar, modificar y elminiar equipos, campeonatos y
          mas.
        </p>
      </Article>
      <BoxFlex>
        <CardA
        to={"../adminTeams/add"}
          name="Equpos"
          url={
            "https://t2.pb.ltmcdn.com/es/posts/0/1/2/trabajo_en_equipo_que_es_importancia_caracteristicas_y_ventajas_5210_600.jpg"
          }
        ></CardA>
        <CardA
          to={"../championshipsLoad/add"}
          name="Campeonatos"
          url="https://library.sportingnews.com/styles/twitter_card_120x120/s3/2022-02/Liga%20de%20Campeones%20Concacaf%20trofeo%20Champions%20League%20trophy%20%281%29.jpg?itok=1SSOHjvc"
        ></CardA>
      </BoxFlex>




      </BoxFlex>
  );
};

export default HomePageDT;
