import Main from "../../../componentes/styledComponents/Main";
import { P } from "../../../componentes/styledComponents/P";
import MyStatsTable from "./MyStatsTable";

const Stats = () => {
  return (
    <Main>
      <MyStatsTable></MyStatsTable>
      
      {/* <P>
        PJ: Partidos jugados<br />
        MJ: Minutos jugados<br />
        PG: Partidos ganados<br />
        PPP:Punto por partido<br />
        PE: Partidos empatados
      </P> */}
    </Main>
  );
};

export default Stats;
