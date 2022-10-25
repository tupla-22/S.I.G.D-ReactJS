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

const UserSearch = () => {
  const [apellido, setApellido] = useState("");
  const [loading, setLoading] = useState(false);
  const solicitud = helpHttp();
  const [usuariosBuscados, setUsuariosBuscados] = useState([]);
  const [ok, setOk] = useState();
  const [errors, setErrors] = useState(false);
  const handleChange = (e) => {
    setApellido(e.target.value);
  };

  const handleSubmit = (e) => {
    e.nativeEvent.preventDefault();
    setLoading(true);
    solicitud
      .get(
        `http://apirest.com/usuarios?select=*&linkTo=primerApellido_usuario&search=${apellido}¨¨`
      )
      .then((e) => {
        setUsuariosBuscados(e.result);
        if (e.status == 200) {
          setErrors(false)
          setOk(true)
        }
        else {
          setErrors(true)
          setOk(false)
        };
      })
    setLoading(false);
  };

  return (
    <Form>
      <h3>Buscar usuario</h3>
      <TextField
        onChange={handleChange}
        value={apellido}
        className="Form__input"
        label="Apellido"
      />
      <ButtonClassic type="submit" onClick={handleSubmit} variant="contained">
        Buscar
      </ButtonClassic>
      {loading && <Loader />}
      {ok &&
        <DivOver>
          <Table>
            <thead>
              <TH>Nombre</TH>
              <TH>Apellido</TH>
              <TH>Cedula de identidad</TH>
              <TH>Email</TH>
              <TH>Fecha de nacimiento</TH>
            </thead>
            <tbody>
              {usuariosBuscados.map((e) => (
                <UserListRow data={e} />
              ))}
            </tbody>
          </Table>
        </DivOver>
        }
        {errors && <PAlert>No se encontro ningun usuario</PAlert>}
      
      <UserList />
    </Form>
  );
};

export default UserSearch;
