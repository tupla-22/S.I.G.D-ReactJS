import { Button, TextField } from "@mui/material";
import { ButtonClassic } from "../../../componentes/ButtonClassic";
import Form from "../../../componentes/Form";
import UserList from "./UserList";
import React, { useState, useEffect, useContext } from "react";
import { helpHttp } from "../../../helpers/helpHttp";
import Loader from "../../../componentes/Loader";
import UserListRow from "./UserListRow";
import { TH } from "../../../componentes/styledComponents/TH";
import { DivOver } from "../../../componentes/DivOver";
import { Table } from "../../../componentes/styledComponents/Table";
import { PAlert } from "../../../componentes/PAlert";
import TeamsList from "./TeamsList";
import TeamsListRow from "./TeamsListRow";
import { urlApi } from "../../../functions/globals";
import LanguajeContext from "../../../contexts/LanguajeContext";
import SearchIcon from '@mui/icons-material/Search';


const TeamSearch = () => {
  const [nombre, setnombre] = useState("");
  const [loading, setLoading] = useState(false);
  const solicitud = helpHttp();
  const [usuariosBuscados, setUsuariosBuscados] = useState([]);
  const [ok, setOk] = useState();
  const [errors, setErrors] = useState(false);


  const { text } = useContext(LanguajeContext)

  const handleChange = (e) => {
    setnombre(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    solicitud
      .get(
        urlApi(
          `equipos?select=*&linkTo=nombre_equipo,visible_equipo&search=${nombre}¨¨1`
        )
      )
      .then((e) => {
        console.log(e)
        if (e.status === 200) {
          setErrors(false)
          setOk(true);
          setUsuariosBuscados(e.result);
        } else {
          setErrors(true)
          setOk(false)
        };
      })
      .catch((e) => setOk(false));
    setLoading(false);
  };

  return (
    <Form>
      <h3>{text.buscarEquipo}</h3>
      <TextField
        onChange={handleChange}
        value={nombre}
        className="Form__input"
        label={text.nombreDelEquipo}
      />
      <TeamsList teamName={nombre} />
    </Form>
  );
};

export default TeamSearch;
