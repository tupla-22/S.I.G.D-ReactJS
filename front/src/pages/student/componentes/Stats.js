import Main from "../../../componentes/styledComponents/Main";
import { P } from "../../../componentes/styledComponents/P";
import MyStatsTable from "./MyStatsTable";

const Stats = () => {
  return (
    <Main>
      <MyStatsTable></MyStatsTable>
      
      <P>
        En esta tabla se procederán a mostrar las estadisticas generales del
        usuario y posteriormente se especificara el significado de cada campo;
        PJ: Partidos jugados, MJ: Minutos jugados, PG: Partidos ganados, PPP:
        Punto por partido, PE: Partidos empatados
      </P>
    </Main>
  );
};

export default Stats;
