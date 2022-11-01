import { DivOver } from "../../../componentes/DivOver";
import { TH } from "../../../componentes/styledComponents/TH";
import React, { useState, useEffect, useContext } from "react";
import { Table } from "../../../componentes/styledComponents/Table";
import ChampionshipListRow from "./ChampionshipListRow";
import MatchListRow from "./MatchListRow";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ShieldIcon from "@mui/icons-material/Shield";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import { helpHttp } from "../../../helpers/helpHttp";
import { urlApi } from "../../../functions/globals";
import Form from "../../../componentes/Form";
import { Seccion } from "../../../componentes/styledComponents/Seccion";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import LanguajeContext from "../../../contexts/LanguajeContext";
import { TR } from "../../../componentes/styledComponents/ComponentesDeEstilos";

const MatchList = ({ sport,disputed }) => {
  // POR PARAMETRO SE LE TRASMITE EL DEPORTE DESEADO

  const peticion = helpHttp();
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(false);

  const {text} = useContext(LanguajeContext)

  useEffect(() => {
    switch (sport) {
      case "all":
        peticion
          .get(
            urlApi(
              `matcheck?disputed=${disputed ? disputed : 0}&sport=handball,football,basketball&orderBy=id_partido&orderMode=asc`
            )
          )
          .then((e) =>{
            if (e.status == 200) {
              setData(e.result)
            }
          });
        break;
      case "football":
        peticion
          .get(
            urlApi(
              `matcheck?disputed=${disputed ? disputed : 0}&sport=football&orderBy=id_partido&orderMode=asc`
            )
          )
          .then((e) =>{
            if (e.status == 200) {
              setData(e.result)
            }
          });
        break;

      case "handball":
        peticion
          .get(
            urlApi(
              `matcheck?disputed=${disputed ? disputed : 0}&sport=handball&orderBy=id_partido&orderMode=asc`
            )
          )
          .then((e) =>{
            if (e.status == 200) {
              setData(e.result)
            }
          });
        break;

      case "basketball":
        peticion
          .get(
            urlApi(
              `matcheck?disputed=${disputed ? disputed : 0}&sport=basketball&orderBy=id_partido&orderMode=asc`
            )
          )
          .then((e) =>{
            if (e.status == 200) {
              setData(e.result)
            }
          });
        break;
      default:
        break;
    }
  }, [sport]);

  return (
    <>
        <h3>{text.partidos}</h3>
        <DivOver>
          <Table>
            <thead>
              <TR>
                <TH>
                  <DateRangeIcon fontSize="large" color="secondary" />
                </TH>
                <TH>
                  <AccessTimeFilledIcon fontSize="large" color="secondary" />
                </TH>
                <TH>
                  <ShieldIcon fontSize="large" color="secondary"></ShieldIcon>
                </TH>
                <TH>VS</TH>
                <TH>
                  <ShieldIcon fontSize="large" color="secondary"></ShieldIcon>
                </TH>
                <TH>
                  <HelpCenterIcon fontSize="large" color="secondary"/>
                </TH>
              </TR>
            </thead>
            <tbody>
              {data.map((e, i) => (
                <MatchListRow key={"champ" + i} data={e} />
              ))}
            </tbody>
          </Table>
        </DivOver>
    </>
  );
};

export default MatchList;
