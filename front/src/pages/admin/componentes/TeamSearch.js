import { Button, TextField } from "@mui/material";
import { ButtonClassic } from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import UserList from "./UserList";
import React, { useState, useEffect } from "react";
import { helpHttp } from "../../../helpers/helpHttp";
import Loader from "../../../componentes/Loader";
import UserListRow from "./UserListRow";
import { TH } from "../../../componentes/styledComponents/TH";
import { DivOver } from "../../../componentes/DivOver";
import { Table } from "../../../componentes/styledComponents/Table";
import { PAlert } from "../../../componentes/PAlert";
import TeamsList from "./TeamsList";
import TeamsListRow from "./TeamsListRow";

const TeamSearch = () => {
  const [nombre, setnombre] = useState("");
  const [loading, setLoading] = useState(false);
  const solicitud = helpHttp();
  const [usuariosBuscados, setUsuariosBuscados] = useState([]);
  const [ok, setOk] = useState();
  const handleChange = (e) => {
    setnombre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.nativeEvent.preventDefault();
    const as = async () => {
      setLoading(true);
      let res = await solicitud
        .get(
          `http://apirest.com/equipos?select=*&linkTo=nombre_equipo&search=${nombre}¨¨`
        )
        .then((e) => {
          setUsuariosBuscados(e.result);
          if (e.status === 200) setOk(true);
          else setOk(false);
        })
        .catch((e) => setOk(false));
      setLoading(false);
    };
    as();
  };

  return (
    <Form>
      <h3>Buscar equipo</h3>
      <TextField
        onChange={handleChange}
        value={nombre}
        className="Form__input"
        label="Nombre del equipo"
      />
      <ButtonClassic type="submit" onClick={handleSubmit} variant="contained">
        Buscar
      </ButtonClassic>
      {loading && <Loader />}
      {ok ? (
        <DivOver>
          <Table>
            <thead>
              <TH>Escudo</TH>
              <TH>Nombre</TH>
              <TH>ID</TH>
            </thead>
            <tbody>
              {usuariosBuscados.map((e) => (
                <TeamsListRow data={e} />
              ))}
            </tbody>
          </Table>
        </DivOver>
      ) : (
        <PAlert>No se encontro ningun equipo</PAlert>
      )}
      <TeamsList />
    </Form>
  );
};

export default TeamSearch;
