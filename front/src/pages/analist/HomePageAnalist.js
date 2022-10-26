import { Outlet } from "react-router-dom";
import { BoxFlex } from "../../componentes/BoxFlex";
import CardA from "../../componentes/Card";
import Article from "../../componentes/styledComponents/Article";
import { GridContained } from "../../componentes/styledComponents/GridContained";
import { H3 } from "../../componentes/styledComponents/H3";
import Main from "../../componentes/styledComponents/Main";
import { P } from "../../componentes/styledComponents/P";
import { PW } from "../../componentes/styledComponents/PW";

const user = JSON.parse(localStorage.getItem("user"));

const HomePageAnalist = () => {
  return (
    <>
      <Main>
        <Article>
          <H3>
            Bienvenido
            al "sistema informático de gestión deportiva de la institución UTU".
          </H3>
          <PW>
            Aquí tu puedes gestionar los partidos que se juegan y
            registrar las estadísticas de los partidos y jugadores.
          </PW>
        </Article>
        <BoxFlex></BoxFlex>
      </Main>
      <Outlet />
    </>
  );
};

export default HomePageAnalist;
