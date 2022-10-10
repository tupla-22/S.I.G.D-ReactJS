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
import { urlApi } from "../../../functions/globals";
import Form from "../../../componentes/Form";

const MatchList = ({ sport }) => {

  // POR PARAMETRO SE LE TRASMITE EL DEPORTE DESEADO


  const peticion = helpHttp();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  useEffect(() => {
    switch (sport) {
      case "all":
        peticion
          .get(
            urlApi(
              "matcheck?disputed=0&sport=handball,football,basketball&orderBy=id_partido&orderMode=asc"
            )
          )
          .then((e) => setData(e.result));
        break;
        case "football":
          peticion
            .get(
              urlApi(
                "matcheck?disputed=0&sport=football&orderBy=id_partido&orderMode=asc"
              )
            )
            .then((e) => setData(e.result));
          break;
          
        case "handball":
          peticion
            .get(
              urlApi(
                "matcheck?disputed=0&sport=handball&orderBy=id_partido&orderMode=asc"
              )
            )
            .then((e) => setData(e.result));
          break;
          
        case "basketball":
          peticion
            .get(
              urlApi(
                "matcheck?disputed=0&sport=basketball&orderBy=id_partido&orderMode=asc"
              )
            )
            .then((e) => setData(e.result));
          break;
      default:
        break;
    }
  }, [sport]);

  return (
    <>
      <Form>
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
              {data.map((e, i) => (
                <MatchListRow key={"champ" + i} data={e} />
              ))}
            </tbody>
          </Table>
        </DivOver>
      </Form>
    </>
  );
};

export default MatchList;
