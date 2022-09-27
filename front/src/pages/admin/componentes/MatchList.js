import { DivOver } from "../../../componentes/DivOver";
import { TH } from "../../../componentes/styledComponents/TH";
import React, { useState, useEffect } from "react";
import { Table } from "../../../componentes/styledComponents/Table";
import ChampionshipListRow from "./ChampionshipListRow";
import MatchListRow from "./MatchListRow";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { helpHttp } from "../../../helpers/helpHttp";

const MatchList = ({sport}) => {
  const peticion = helpHttp();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    switch (sport) {
      case "futball":
        peticion.get("http://apirest.com/partidos?select=*").then(e => console.log(e.result));
        break;
    
      default:
        break;
    }

  }, []);

  return (
    <>
      <h3>Partidos</h3>
      <DivOver>
        <Table>
          <thead>
            <tr>
            <TH>
              <DateRangeIcon color="secondary" />
            </TH>
            <TH>
              <AccessTimeFilledIcon color="secondary" />
            </TH>
            <TH>
              <ShieldIcon color="secondary"></ShieldIcon>
            </TH>
            <TH>VS</TH>
            <TH>
              <ShieldIcon color="secondary"></ShieldIcon>
            </TH>
            </tr>
          </thead>
          <tbody>
            {status &&
              data.map((e, i) => (
                <MatchListRow key={"champ" + i} data={e} />
              ))}
          </tbody>
        </Table>
      </DivOver>
    </>
  );
};

export default MatchList;
